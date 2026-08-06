import { useEffect, useState } from "react";
import "./PerformanceTracker.css";

const STORAGE_KEY = "performance_students_v1";

function emptyRecord() {
  return { id: "", name: "", course: "", average: "" };
}

function PerformanceTracker() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState(emptyRecord());
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setStudents(JSON.parse(raw));
    } catch (e) {
      console.error("Failed to load students from storage", e);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  }, [students]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleAdd(e) {
    e.preventDefault();
    if (!form.id || !form.name) return;
    setStudents((s) => [...s, { ...form }]);
    setForm(emptyRecord());
  }

  function startEdit(id) {
    const rec = students.find((s) => s.id === id);
    if (rec) {
      setForm(rec);
      setEditingId(id);
    }
  }

  function saveEdit(e) {
    e.preventDefault();
    setStudents((s) => s.map((it) => (it.id === editingId ? { ...form } : it)));
    setEditingId(null);
    setForm(emptyRecord());
  }

  function remove(id) {
    setStudents((s) => s.filter((it) => it.id !== id));
  }

  return (
    <div>
      <p style={{ fontSize: 13, color: "#6b7280", margin: "0 0 6px" }}>
        Department / <span style={{ color: "#111827" }}>Performance Tracker</span>
      </p>
      <h1 style={{ fontSize: 22, fontWeight: 600, margin: "0 0 18px", color: "#111827" }}>
        Performance Tracker
      </h1>

      <div className="perf-tracker__grid">
        <form
          className="perf-tracker__form"
          onSubmit={editingId ? saveEdit : handleAdd}
        >
          <div className="perf-tracker__form-row">
            <input name="id" value={form.id} onChange={handleChange} placeholder="Student ID" />
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" />
            <input name="course" value={form.course} onChange={handleChange} placeholder="Course" />
            <input name="average" value={form.average} onChange={handleChange} placeholder="Average" />
          </div>
          <div className="perf-tracker__form-actions">
            {editingId ? (
              <>
                <button type="submit" className="btn btn-primary">Save</button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => { setEditingId(null); setForm(emptyRecord()); }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button type="submit" className="btn btn-primary">Add student</button>
            )}
          </div>
        </form>

        <div className="perf-tracker__table-wrap">
          <table className="perf-tracker__table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Course</th>
                <th>Average</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ textAlign: "center", color: "#64748b" }}>
                    No student records yet. Add one using the form.
                  </td>
                </tr>
              ) : (
                students.map((s) => (
                  <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.course}</td>
                    <td>{s.average}</td>
                    <td>
                      <button className="btn" onClick={() => startEdit(s.id)}>Edit</button>
                      <button className="btn btn-danger" onClick={() => remove(s.id)}>Delete</button>
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

export default PerformanceTracker;
