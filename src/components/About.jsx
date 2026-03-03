import { profile } from "../data/profile";

export default function About() {
  const hasResume =
    typeof profile.links.resume === "string" &&
    profile.links.resume.startsWith("http") &&
    !profile.links.resume.includes("your-resume-link");

  return (
    <section id="about" className="section section-hero">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">{profile.role}</p>
          <h1>{profile.tagline}</h1>
          <p className="subhead">{profile.summary}</p>
          <p className="availability">{profile.availability}</p>
          <div className="cta-row">
            <a className="button" href="#projects">
              Explore Projects
            </a>
            {hasResume ? (
              <a
                className="button button-secondary"
                href={profile.links.resume}
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>
            ) : (
              <a className="button button-secondary" href="#contact">
                Start a Conversation
              </a>
            )}
          </div>
          <div className="about-notes">
            {profile.about.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="metrics-grid">
            {profile.metrics.map((metric) => (
              <div className="metric-card" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-panel reveal">
          <div className="panel-card">
            <div className="panel-top">
              <p className="panel-label">Professional Snapshot</p>
              <span className="panel-accent" aria-hidden="true" />
            </div>
            <p className="panel-heading">
              Building digital systems that connect user experience with dependable logic.
            </p>
            <ul className="panel-list">
              {profile.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="panel-meta">
              <span>{profile.location}</span>
              <span>{profile.links.email}</span>
              <span>{profile.links.github.replace("https://", "")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
