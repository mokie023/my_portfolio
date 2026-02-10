import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section style={{ padding: "48px 20px" }}>
      <h1 style={{ fontSize: 40, marginBottom: 8 }}>{profile.name}</h1>
      <p style={{ fontSize: 18, marginBottom: 8 }}>{profile.role}</p>
      <p style={{ maxWidth: 700 }}>{profile.headline}</p>

      <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a href={profile.links.linkedin} target="_blank">LinkedIn</a>
        <a href={profile.links.github} target="_blank">GitHub</a>
        <a href={`mailto:${profile.links.email}`}>Email</a>
      </div>
    </section>
  );
}




