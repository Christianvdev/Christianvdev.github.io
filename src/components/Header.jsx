import { useEffect, useState } from "react";
import { content } from "../content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false); // has the page scrolled?
  const [menuOpen, setMenuOpen] = useState(false); // is the mobile menu open?

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = content.nav.map((item, index) => (
    <a href={item.href} key={item.label} className={index === 0 ? "active" : ""} onClick={() => setMenuOpen(false)}>
      {item.label}
    </a>
  ));

  return (
    <>
      <header className={`site ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav">
          <a href="#" className="logo">{content.firstName}<span className="accent">.</span></a>
          <nav className="nav-links">{links}</nav>
          <span className="pill lang">English ▾</span>
          <button className="burger" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
      </header>
      {menuOpen && <div className="mobile-menu">{links}</div>}
    </>
  );
}
