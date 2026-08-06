import { useEffect, useState } from "react";
import "./AttendancePage.css";

const STORAGE_KEY = "faculty_attendance_v1";

function emptyRow() {
  return { id: "", name: "", date: "", status: "Present" };
}

function AttendancePage() {
  const [rows, setRows] = useState([]);
  const [form, setForm] = useState(emptyRow());
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setRows(JSON.parse(raw));
    } catch (e) {
      console.error("Failed to load attendance data", e);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rows));
  }, [rows]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function saveRow(e) {
    e.preventDefault();
    if (!form.id || !form.name || !form.date) return;
    if (editingId) {
      setRows((prev) => prev.map((row) => (row.id === editingId ? { ...form } : row)));
      setEditingId(null);
    } else {
      setRows((prev) => [...prev, { ...form }]);
    }
    setForm(emptyRow());
  }

  function editRow(id) {
    const row = rows.find((entry) => entry.id === id);
    if (row) {
      setForm(row);
      setEditingId(id);
    }
  }

  function deleteRow(id) {
    setRows((prev) => prev.filter((entry) => entry.id !== id));
  }

  return (
    <div className="attendance-page">
      <div className="attendance-page__header">
        <p className="attendance-page__breadcrumb">
          Faculty / <span>Attendance</span>
        </p>
        <h1 className="attendance-page__title">Attendance Tracker</h1>
        <p className="attendance-page__subtitle">
          Track faculty attendance records and mark student attendance by date.
        </p>
      </div>

      <div className="attendance-page__grid">
        <form className="attendance-form" onSubmit={saveRow}>
          <div className="attendance-form__row">
            <label>
              Student ID
              <input name="id" value={form.id} onChange={handleChange} />
            </label>
            <label>
              Student Name
              <input name="name" value={form.name} onChange={handleChange} />
            </label>
          </div>
          <div className="attendance-form__row">
            <label>
              Date
              <input name="date" type="date" value={form.date} onChange={handleChange} />
            </label>
            <label>
              Status
              <select name="status" value={form.status} onChange={handleChange}>
                <option>Present</option>
                <option>Absent</option>
                <option>Late</option>
              </select>
            </label>
          </div>
          <div className="attendance-form__actions">
            <button type="submit" className="btn btn-primary">
              {editingId ? "Update" : "Add"}
            </button>
            {editingId && (
              <button type="button" className="btn" onClick={() => { setEditingId(null); setForm(emptyRow()); }}>
                Cancel
              </button>
            )}
          </div>
        </form>

        <div className="attendance-table__wrap">
          <table className="attendance-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={5} className="attendance-table__empty">
                    No records yet. Add attendance entries from the form.
                  </td>
                </tr>
              ) : (
                rows.map((row) => (
                  <tr key={`${row.id}-${row.date}`}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.date}</td>
                    <td>{row.status}</td>
                    <td>
                      <button className="btn" onClick={() => editRow(row.id)}>Edit</button>
                      <button className="btn btn-danger" onClick={() => deleteRow(row.id)}>Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AttendancePage;
