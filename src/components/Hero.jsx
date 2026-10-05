import { content } from "../content";
import Social from "./Social";
import Counter from "./Counter";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left side: text */}
          <div>
            <span className="pill neon">{content.role}</span>

            <h1>
              Hello I'm <span className="name">{content.firstName}</span>{" "}
              {content.lastName}
            </h1>

            <p className="tagline">{content.tagline}</p>

            <div className="hero-actions">
              <a className="btn btn-primary" 
                target="_blank"
                href={`${import.meta.env.BASE_URL}FullStackResume.pdf`}
                rel="noopener noreferrer"
              >
                View CV
              </a>

              <Social />
            </div>
          </div>

          {/* Right side: developer stack */}
          <div className="portrait-wrap">
            <div
              className="code-profile"
              aria-label="Christian backend development stack"
            >
              <div className="code-profile-header">
                <div className="window-controls" aria-hidden="true">
                  <span className="window-dot window-dot-active"></span>
                  <span className="window-dot"></span>
                  <span className="window-dot"></span>
                </div>

                <span className="code-profile-filename">backend.js</span>
              </div>

              <div className="code-profile-body">
                <div className="code-line">
                  <span className="line-number">1</span>
                  <code>
                    <span className="syntax-keyword">const</span>{" "}
                    <span className="syntax-variable">backend</span> = {"{"}
                  </code>
                </div>

                <div className="code-line">
                  <span className="line-number">2</span>
                  <code>
                    <span className="syntax-property">framework</span>:{" "}
                    <span className="syntax-string">"Django REST Framework"</span>,
                  </code>
                </div>

                <div className="code-line">
                  <span className="line-number">3</span>
                  <code>
                    <span className="syntax-property">api</span>:{" "}
                    <span className="syntax-string">"REST APIs"</span>,
                  </code>
                </div>

                <div className="code-line">
                  <span className="line-number">4</span>
                  <code>
                    <span className="syntax-property">auth</span>:{" "}
                    <span className="syntax-string">"JWT + Token Refresh"</span>,
                  </code>
                </div>

                <div className="code-line">
                  <span className="line-number">5</span>
                  <code>
                    <span className="syntax-property">database</span>:{" "}
                    <span className="syntax-string">"PostgreSQL"</span>,
                  </code>
                </div>

                <div className="code-line">
                  <span className="line-number">6</span>
                  <code>
                    <span className="syntax-property">security</span>:{" "}
                    <span className="syntax-string">"User-Scoped Data"</span>,
                  </code>
                </div>

                <div className="code-line">
                  <span className="line-number">7</span>
                  <code>
                    <span className="syntax-property">client</span>:{" "}
                    <span className="syntax-string">"React + Axios"</span>,
                  </code>
                </div>

                <div className="code-line">
                  <span className="line-number">8</span>
                  <code>
                    <span className="syntax-property">deploy</span>: [
                    <span className="syntax-string">"Render"</span>,{" "}
                    <span className="syntax-string">"Netlify"</span>],
                  </code>
                </div>

                <div className="code-line">
                  <span className="line-number">9</span>
                  <code>{"};"}</code>
                </div>

                <div className="code-line">
                  <span className="line-number">10</span>
                  <code></code>
                </div>

                <div className="code-line code-comment-line">
                  <span className="line-number">11</span>
                  <code>
                    <span className="syntax-comment">
                      {"// secure APIs, built end to end"}
                    </span>
                  </code>
                </div>

                <div className="code-line">
                  <span className="line-number">12</span>
                  <code>
                    <span className="syntax-variable">backend</span>.
                    <span className="syntax-method">ship</span>(
                    <span className="syntax-string">"production"</span>);
                    <span className="code-cursor" aria-hidden="true"></span>
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="stats">
          {content.stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <Counter target={stat.value} />
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}