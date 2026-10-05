import { useState } from "react";
import { content } from "../content";
import Social from "./Social";

// Contains the big "Let's Talk" block (the header's Contact link scrolls here)
// and the thin footer below it.
// Three ways to reach you, so at least one always works:
//   1. Send email  -> opens the visitor's mail app (needs one installed)
//   2. Open Gmail  -> opens a Gmail compose window in a new tab
//   3. Copy email  -> copies the address so they can paste it anywhere
export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(content.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${content.email}`;

  return (
    <>
      <section className="cta grid-bg" id="contact">
        <div className="container">
          <h2>Let's <span className="accent">Talk</span></h2>
          <p>{content.ctaText}</p>
          <div className="contact-email">{content.email}</div>
          <div className="cta-buttons">
            <a className="btn btn-primary" href={`mailto:${content.email}`}>Send email</a>
            <a className="btn btn-ghost" href={gmailUrl} target="_blank" rel="noreferrer">Open in Gmail</a>
            <button className="btn btn-ghost" onClick={copyEmail}>{copied ? "✓ Copied!" : "Copy email"}</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <a className="accent" href="#">Peer through my personal life</a>
          <Social />
          <p className="muted small">{content.name}</p>
        </div>
      </footer>
    </>
  );
}
