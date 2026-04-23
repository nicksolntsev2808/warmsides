import { Link, useLocation } from "wouter";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useLang, t } from "../lib/i18n";

export default function Services() {
  useScrollAnimation();
  const { lang } = useLang();
  const tr = t[lang];
  const [, navigate] = useLocation();

  const goToForm = () => {
    navigate("/contacts");
    setTimeout(() => {
      const el = document.getElementById("contact-form");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  };

  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ── */}
        <section style={{
          background: "linear-gradient(160deg, #FDF6EE 0%, #F5E8D5 100%)",
          padding: "6rem 0 4rem",
        }}>
          <div className="ws-container" style={{ textAlign: "center" }}>
            <div className="ws-tag fade-up" style={{ marginBottom: "1rem" }}>{tr.services.tag}</div>
            <h1 className="fade-up fade-up-delay-1" style={{
              fontFamily: "Raleway, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              marginBottom: "1.25rem",
              color: "#4A2E1A",
            }}>
              {tr.services.h1}
            </h1>
            <p className="fade-up fade-up-delay-2" style={{ color: "#9E7A65", fontSize: "1.15rem", maxWidth: 520, margin: "0 auto" }}>
              {tr.services.subtitle}
            </p>
          </div>
        </section>

        {/* ── Service blocks ── */}
        {tr.services.items.map((s, i) => (
          <section
            key={s.title}
            className="ws-section"
            style={{ background: i % 2 === 0 ? "#FFFAF5" : "#F0E6D3" }}
          >
            <div className="ws-container">
              <div className="services-grid" style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "4rem",
                alignItems: "start",
              }}>
                {/* Left */}
                <div>
                  <div style={{
                    width: 72, height: 72,
                    background: s.iconBg,
                    borderRadius: "1.25rem",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "2rem",
                    marginBottom: "1.5rem",
                  }} className="fade-up">
                    {s.icon}
                  </div>
                  <div className="ws-tag fade-up" style={{ marginBottom: "0.875rem" }}>
                    {tr.services.serviceLabel} {i + 1} {tr.services.ofLabel} {tr.services.totalLabel}
                  </div>
                  <h2 className="fade-up fade-up-delay-1" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)", marginBottom: "1rem" }}>
                    {s.title}
                  </h2>
                  <p className="fade-up fade-up-delay-2" style={{ color: "#C9603A", fontWeight: 600, fontSize: "1.05rem", marginBottom: "1.25rem" }}>
                    {s.tagline}
                  </p>
                  <p className="fade-up fade-up-delay-2" style={{ color: "#5C3D2E", lineHeight: 1.75, fontSize: "1rem", marginBottom: "2rem" }}>
                    {s.desc}
                  </p>

                  <div className="fade-up fade-up-delay-3" style={{
                    background: s.color,
                    borderRadius: "1rem",
                    padding: "1.5rem",
                    marginBottom: "2rem",
                  }}>
                    <p style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700, color: "#4A2E1A", marginBottom: "0.75rem", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      {tr.services.forWhom}
                    </p>
                    <p style={{ color: "#5C3D2E", lineHeight: 1.7 }}>{s.audience}</p>
                  </div>

                  <button className="btn-primary fade-up fade-up-delay-4" onClick={goToForm}>
                    {tr.services.orderBtn}
                  </button>
                </div>

                {/* Right — includes */}
                <div className="ws-card fade-up fade-up-delay-2" style={{ padding: "2.5rem 2rem" }}>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "1.5rem", color: "#4A2E1A" }}>
                    {tr.services.included}
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {s.includes.map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem" }}>
                        <div style={{
                          width: 24, height: 24,
                          background: "#FDE8DE",
                          borderRadius: "50%",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "1px",
                        }}>
                          <span style={{ color: "#C9603A", fontSize: "0.75rem", fontWeight: 700 }}>✓</span>
                        </div>
                        <span style={{ color: "#5C3D2E", lineHeight: 1.6 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ── Bottom CTA ── */}
        <section className="ws-bottom-cta" style={{
          background: "linear-gradient(135deg, #C9603A 0%, #A84D2C 100%)",
          padding: "6rem 0",
          textAlign: "center",
        }}>
          <div className="ws-container">
            <h2 className="fade-up" style={{ color: "#FFFAF5", fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "1.25rem" }}>
              {tr.services.bottomH2}
            </h2>
            <p className="fade-up fade-up-delay-1" style={{ color: "rgba(255,250,245,0.8)", fontSize: "1.1rem", marginBottom: "2.5rem", maxWidth: 420, margin: "0 auto 2.5rem" }}>
              {tr.services.bottomP}
            </p>
            <button onClick={goToForm} style={{
              background: "#FFFAF5",
              color: "#C9603A",
              fontFamily: "Raleway, sans-serif",
              fontWeight: 700,
              padding: "1rem 2.5rem",
              borderRadius: "0.625rem",
              border: "none",
              fontSize: "1.05rem",
              cursor: "pointer",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.2)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              {tr.services.bottomBtn}
            </button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
