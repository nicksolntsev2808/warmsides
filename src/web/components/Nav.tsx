import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useLang, t, type Lang } from "../lib/i18n";

const langs: Lang[] = ["ru", "ua", "en"];

function LangSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div style={{
      display: "flex",
      gap: "0.25rem",
      alignItems: "center",
      border: "1px solid #E8D5C0",
      borderRadius: "0.5rem",
      padding: "0.25rem",
    }}>
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          style={{
            padding: "0.25rem 0.625rem",
            fontSize: "0.8rem",
            fontFamily: "Raleway, sans-serif",
            fontWeight: 600,
            border: "none",
            borderRadius: "0.375rem",
            cursor: "pointer",
            transition: "all 0.2s",
            background: lang === l ? "#C9603A" : "transparent",
            color: lang === l ? "#FFFAF5" : "#9E7A65",
            textTransform: "uppercase" as const,
          }}
          onMouseEnter={e => { if (lang !== l) (e.currentTarget as HTMLElement).style.color = "#C9603A"; }}
          onMouseLeave={e => { if (lang !== l) (e.currentTarget as HTMLElement).style.color = "#9E7A65"; }}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export default function Nav() {
  const [location, navigate] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang } = useLang();
  const tr = t[lang];

  const links = [
    { href: "/", label: tr.nav.home },
    { href: "/services", label: tr.nav.services },
    { href: "/cases", label: tr.nav.cases },
    { href: "/contacts", label: tr.nav.contacts },
  ];

  const goToForm = () => {
    setMenuOpen(false);
    navigate("/contacts");
    setTimeout(() => {
      const el = document.getElementById("contact-form");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  };

  return (
    <nav className="ws-nav">
      <div className="ws-container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 0" }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
              <div style={{
                width: 36,
                height: 36,
                background: "linear-gradient(135deg, #C9603A, #E8895A)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <span style={{ color: "#FFFAF5", fontFamily: "Raleway, sans-serif", fontWeight: 800, fontSize: "1.1rem" }}>W</span>
              </div>
              <span style={{ fontFamily: "Raleway, sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "#4A2E1A" }}>
                Warmsides
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="nav-links-desktop" style={{ alignItems: "center", gap: "2.5rem" }}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={`nav-link${location === l.href ? " active" : ""}`}>
                {l.label}
              </Link>
            ))}
            <LangSwitcher />
            <button className="btn-primary" onClick={goToForm} style={{ padding: "0.625rem 1.5rem", fontSize: "0.9rem" }}>
              {tr.nav.cta}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none" }}
            aria-label="Menu"
          >
            <span style={{ transform: menuOpen ? "rotate(45deg) translateY(9px)" : "none" }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? "rotate(-45deg) translateY(-9px)" : "none" }} />
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div style={{ borderTop: "1px solid #E8D5C0", paddingTop: "0.75rem", paddingBottom: "0.75rem" }}>
            <div className="mobile-dropdown" style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <div style={{ marginBottom: "0.75rem" }}>
                <LangSwitcher />
              </div>
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`nav-link${location === l.href ? " active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                  style={{ fontSize: "1.1rem", padding: "0.75rem 0", display: "block" }}
                >
                  {l.label}
                </Link>
              ))}
              <button
                className="btn-primary"
                onClick={goToForm}
                style={{ textAlign: "center", marginTop: "0.75rem", width: "100%", boxSizing: "border-box" }}
              >
                {tr.nav.cta}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
