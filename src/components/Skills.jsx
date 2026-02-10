import { profile } from "../data/profile";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head">
          <h2>Skills</h2>
          <p className="muted">
            Core tools and strengths for delivering polished web experiences.
          </p>
        </div>
        <div className="skills-grid">
          {profile.skills.map((skill) => (
            <div className="skill-card reveal" key={skill.name}>
              <div className="skill-row">
                <span>{skill.name}</span>
                <span className="muted">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <p className="skill-meta muted">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
