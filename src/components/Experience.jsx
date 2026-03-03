import { profile } from "../data/profile";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>Work shaped by delivery, analysis, and reliability.</h2>
          </div>
          <p className="muted section-copy">
            I combine hands-on implementation with practical systems thinking, so the final
            product is not only functional, but easier to maintain and scale.
          </p>
        </div>

        <div className="timeline">
          {profile.experience.map((item) => (
            <article className="timeline-card reveal" key={`${item.title}-${item.period}`}>
              <div className="timeline-meta">
                <p className="timeline-period">{item.period}</p>
                <p className="timeline-company">{item.company}</p>
              </div>
              <div className="timeline-body">
                <h3>{item.title}</h3>
                <p className="muted">{item.summary}</p>
                <ul className="detail-list">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
