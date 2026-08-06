function PlaceholderPage({ section, title }) {
  return (
    <div>
      <p style={{ fontSize: 13, color: "#6b7280", margin: "0 0 4px" }}>
        {section} / <span style={{ color: "#111827" }}>{title}</span>
      </p>
      <h1 style={{ fontSize: 22, fontWeight: 500, margin: "0 0 16px", color: "#111827" }}>
        {title}
      </h1>
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          padding: "48px 24px",
          textAlign: "center",
          color: "#9ca3af",
          fontSize: 14,
        }}
      >
        Content for "{title}" goes here.
      </div>
    </div>
  );
}

export default PlaceholderPage;
