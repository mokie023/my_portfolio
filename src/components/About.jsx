import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="section section-hero">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">{profile.location}</p>
          <h1>{profile.tagline}</h1>
          <p className="subhead">{profile.summary}</p>
          <div className="cta-row">
            <a className="button" href="#projects">
              View Projects
            </a>
            <a className="button button-secondary" href="#contact">
              Contact Me
            </a>
          </div>
          <div className="about-notes">
            {profile.about.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
        <div className="hero-panel reveal">
          <div className="panel-card">
            <div className="panel-top">
              <p className="panel-label">Focus</p>
              <span className="panel-accent" aria-hidden="true" />
            </div>
            <ul className="panel-list">
              {profile.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="panel-meta">
              <span>{profile.links.email}</span>
              <span>{profile.links.github.replace("https://", "")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
