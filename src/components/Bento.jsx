import { useState } from "react";
import { content } from "../content";
import Reveal from "./Reveal";
import Chips from "./Chips";

export default function Bento() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(content.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // The list is doubled so the scrolling marquee loops without a gap.
  const hellos = [...content.hellos, ...content.hellos];

  // Size classes: b-wide = 4 of 6 columns, b-half = 3, b-third = 2.
  return (
    <section className="grid-bg">
      <div className="container">
        <h2 className="h2">Short <span className="accent">Profile</span></h2>
        <div className="bento">

          <Reveal className="card b-wide">
            <span className="pill">{content.role}</span>
            <h3>Developer building clean, reliable apps and programs.</h3>
          </Reveal>

          <Reveal className="card b-third">
            <div className="big-emoji">🧑‍💻</div>
            <p className="muted small">Fluent in English, learning German, and spanish.</p>
          </Reveal>

          <Reveal className="card b-half">
            <div className="marquee">
              <div className="marquee-track">
                {hellos.map((word, i) => <span key={i}>{word}</span>)}
              </div>
            </div>
            <p className="muted small">Always happy to say hello in your language.</p>
          </Reveal>

          <Reveal className="card b-half">
            <p className="muted small">My primary tech stack</p>
            <h3>{content.stack.slice(0, 2).join(", ")}</h3>
            <Chips items={content.stack} />
          </Reveal>

          <Reveal className="card b-third">
            <div className="chip big-chip">🏅</div>
            <h3 className="h3-small">Fullstack & Backend developer</h3>
          </Reveal>

          <Reveal className="card b-wide">
            <div><span className="dot" /> <span className="muted dot-label">The inside scoop</span></div>
            <h3>Open to new opportunities.</h3>
            <div>
              <button className="btn btn-ghost" onClick={copyEmail}>
                {copied ? "✓ Copied!" : "Copy my email address"}
              </button>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
