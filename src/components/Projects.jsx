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
          <h2>Projects</h2>
          <p className="muted">
            A selection of systems that balance clean interfaces with reliable back-end logic.
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

                  <div className="chip-row">
                    {project.stack?.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    {hasLive ? (
                      <a
                        className="btn"
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <span className="btn btn-disabled" aria-disabled="true">
                        Live Demo (soon)
                      </span>
                    )}

                    {hasRepo ? (
                      <a
                        className="btn btn-ghost"
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source Code
                      </a>
                    ) : (
                      <span className="btn btn-ghost btn-disabled" aria-disabled="true">
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
