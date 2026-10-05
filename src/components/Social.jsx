import { content } from "../content";

// Row of social links. Replace href="#" with your real URLs.
export default function Social() {
  return (
    <div className="social">
      {content.social.map((social) => (
        <a
          href={social.href}
          key={social.name}
          aria-label={social.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.name}
        </a>
      ))}
    </div>
  );
}
