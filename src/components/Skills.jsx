import { profile } from "../data/profile";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2>Technical strengths across the full delivery cycle.</h2>
          </div>
          <p className="muted section-copy">
            I focus on shipping products that are easy to use, easy to maintain, and aligned
            with real operational needs.
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
