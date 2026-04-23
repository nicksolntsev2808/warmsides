import { Link } from "wouter";
import { useLang, t } from "../lib/i18n";

export default function Footer() {
  const { lang } = useLang();
  const tr = t[lang];

  const navLinks = [
    { href: "/", label: tr.nav.home },
    { href: "/services", label: tr.nav.services },
    { href: "/cases", label: tr.nav.cases },
    { href: "/contacts", label: tr.nav.contacts },
  ];

  const serviceLabels = tr.services.items.map((s) => s.title);

  return (
    <footer className="ws-footer">
      <div className="ws-container" style={{ padding: "4rem 1.5rem 2.5rem" }}>
        <div className="ws-footer-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "3rem",
          marginBottom: "3rem",
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
              <div style={{
                width: 34,
                height: 34,
                background: "linear-gradient(135deg, #C9603A, #E8895A)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <span style={{ color: "#FFFAF5", fontFamily: "Raleway, sans-serif", fontWeight: 800, fontSize: "1rem" }}>W</span>
              </div>
              <span style={{ fontFamily: "Raleway, sans-serif", fontWeight: 800, fontSize: "1.15rem", color: "#F0E6D3" }}>Warmsides</span>
            </div>
            <p style={{ color: "#9E7A65", lineHeight: 1.7, fontSize: "0.95rem", maxWidth: 260 }}>
              {tr.footer.tagline}
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{ color: "#F0E6D3", fontFamily: "Raleway, sans-serif", fontWeight: 700, marginBottom: "1.25rem", fontSize: "1rem" }}>
              {tr.footer.pagesTitle}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} style={{ color: "#9E7A65", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#E8895A")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#9E7A65")}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "#F0E6D3", fontFamily: "Raleway, sans-serif", fontWeight: 700, marginBottom: "1.25rem", fontSize: "1rem" }}>
              {tr.footer.servicesTitle}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {serviceLabels.map((s) => (
                <span key={s} style={{ color: "#9E7A65", fontSize: "0.95rem" }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#F0E6D3", fontFamily: "Raleway, sans-serif", fontWeight: 700, marginBottom: "1.25rem", fontSize: "1rem" }}>
              {tr.footer.contactTitle}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {tr.contacts.contacts.map((c) => (
                <a key={c.label} href={c.href} style={{ color: "#9E7A65", textDecoration: "none", fontSize: "0.95rem" }}>
                  {c.label}: {c.value}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="ws-footer-bottom" style={{ borderTop: "1px solid #3D2410", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ color: "#6B4A30", fontSize: "0.875rem" }}>{tr.footer.copyright}</p>
          <p style={{ color: "#6B4A30", fontSize: "0.875rem" }}>{tr.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
