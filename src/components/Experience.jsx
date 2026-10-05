import { content } from "../content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section>
      <div className="container">
        <h2 className="h2">My <span className="accent">Experience</span></h2>

        {/* Four role cards */}
        <div className="roles">
          {content.roles.map((role) => (
            <Reveal as="article" className="card role" key={role.title}>
              <div className="icon">{role.icon}</div>
              <h3>{role.title}</h3>
              <p>{role.text}</p>
            </Reveal>
          ))}
        </div>

        {/* Timeline */}
        <div className="timeline">
          <h3 className="timeline-title">My journey report</h3>
          <p className="muted timeline-intro">A short timeline of where I've worked and what I've learned.</p>

          {content.timeline.map((item) => (
            <Reveal className="t-item" key={item.year}>
              <div className="t-year">{item.year}</div>
              <p>{item.text}</p>
              {item.checks.length > 0 && (
                <ul>{item.checks.map((check) => <li key={check}>✅ {check}</li>)}</ul>
              )}
              <div className="t-gallery">
                {item.images.map((img, i) => <div key={i}>{img}</div>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
