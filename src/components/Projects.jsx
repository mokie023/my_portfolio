import { profile } from "../data/profile";

export default function Projects() {
  const isRealUrl = (url) =>
    typeof url === "string" &&
    url.trim().startsWith("http") &&
    !url.includes("your-live-link") &&
    !url.includes("your-repo");

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Featured Work</p>
            <h2>Projects built to solve practical problems.</h2>
          </div>
          <p className="muted section-copy">
            Each build is designed around usability first, with a clear structure behind the
            interface so the product remains reliable as features grow.
          </p>
        </div>

        <div className="projects-grid">
          {profile.projects.map((project) => {
            const hasLive = isRealUrl(project.live);
            const hasRepo = isRealUrl(project.repo);

            return (
              <article className="project-card reveal" key={project.title}>
                <div className="project-media">
                  <span className="project-year">{project.year}</span>

                  {/* Honest status (demo loading 10/02/26...) */}
                  {!hasLive && (
                    <span className="project-status">In development (local)</span>
                  )}
                </div>

                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p className="muted">{project.description}</p>
                  <p className="project-outcome">{project.outcome}</p>

                  <div className="chip-row">
                    {project.stack?.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>

                  <ul className="detail-list">
                    {project.highlights?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="project-links">
                    {hasLive ? (
                      <a
                        className="project-link"
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <span className="project-link project-link-disabled" aria-disabled="true">
                        Live Demo (soon)
                      </span>
                    )}

                    {hasRepo ? (
                      <a
                        className="project-link project-link-secondary"
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source Code
                      </a>
                    ) : (
                      <span
                        className="project-link project-link-secondary project-link-disabled"
                        aria-disabled="true"
                      >
                        Source Code (soon)
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
