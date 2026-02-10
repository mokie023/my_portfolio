import { profile } from "../data/profile";

export default function Projects() {
  return (
    <section style={{ padding: "20px" }}>
      <h2 style={{ fontSize: 28, marginBottom: 12 }}>Projects</h2>

      {profile.projects.map((p) => (
        <div
          key={p.title}
          style={{
            border: "1px solid #ddd",
            padding: 16,
            borderRadius: 10,
            marginBottom: 12,
          }}
        >
          <h3 style={{ marginBottom: 6 }}>{p.title}</h3>
          <p style={{ marginBottom: 8 }}>{p.description}</p>
          <p style={{ marginBottom: 8 }}>
            <b>Stack:</b> {p.stack.join(", ")}
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <a href={p.live} target="_blank">Live</a>
            <a href={p.repo} target="_blank">Repo</a>
          </div>
        </div>
      ))}
    </section>
  );
}
