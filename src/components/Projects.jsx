import { content } from "../content";
import Reveal from "./Reveal";
import Chips from "./Chips";

export default function Projects() {
  return (
    <section>
      <div className="container">
        <h2 className="h2">
          A small selection of{" "}
          <span className="accent">recent projects</span>
        </h2>

        {content.projects.map((project) => (
          <Reveal
            as="article"
            className="project"
            key={project.title}
          >
            <div className="shot">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
              />
            </div>

            <div>
              <h3>{project.title}</h3>
              <p className="muted">{project.description}</p>

              <Chips items={project.tech} />

              <a
                className="btn btn-ghost"
                href="#"
                rel="noopener noreferrer"
              >
                <span className="roll">
                  <span>{project.cta}</span>
                  <span>{project.cta}</span>
                </span>{" "}
                ↗
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}