import { content } from "../content";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section>
      <div className="container">
        <h2 className="h2">My <span className="accent">Education</span></h2>
        <div className="edu-grid">
          {content.education.map((item) => (
            <Reveal as="article" className="card edu" key={item.title}>
              <h4>{item.title}</h4>
              <div className="date">{item.dates}</div>
              <div>{item.school}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
