import { Link, useLocation } from "wouter";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useLang, t } from "../lib/i18n";

export default function Home() {
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
        <section className="hero-section" style={{
          background: "linear-gradient(160deg, #FDF6EE 0%, #F5E8D5 100%)",
          padding: "7rem 0 6rem",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: "-80px", right: "-100px",
            width: 400, height: 400,
            background: "radial-gradient(circle, rgba(232,137,90,0.18) 0%, transparent 70%)",
            borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: "-60px", left: "-80px",
            width: 300, height: 300,
            background: "radial-gradient(circle, rgba(201,96,58,0.12) 0%, transparent 70%)",
            borderRadius: "40% 60% 45% 55% / 60% 40% 55% 45%",
            pointerEvents: "none",
          }} />

          <div className="ws-container" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: 780 }}>
              <div className="ws-tag fade-up" style={{ marginBottom: "1.5rem" }}>
                {tr.home.tag}
              </div>
              <h1 className="fade-up fade-up-delay-1" style={{
                fontFamily: "Raleway, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: 1.1,
                color: "#4A2E1A",
                marginBottom: "1.5rem",
              }}>
                {tr.home.h1_part1}{" "}
                <span className="ws-gradient-text">{tr.home.h1_highlight}</span>
                {" "}{tr.home.h1_part2}
              </h1>
              <p className="fade-up fade-up-delay-2" style={{
                fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                color: "#5C3D2E",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
                maxWidth: 560,
              }}>
                {tr.home.subtitle}
              </p>
              <div className="hero-cta-group fade-up fade-up-delay-3" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button className="btn-primary" onClick={goToForm} style={{ fontSize: "1.05rem" }}>
                  {tr.home.cta_primary}
                </button>
                <Link href="/services" className="btn-outline" style={{ fontSize: "1.05rem" }}>
                  {tr.home.cta_secondary}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services cards ── */}
        <section className="ws-section" style={{ background: "#FFFAF5" }}>
          <div className="ws-container">
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <div className="ws-tag fade-up" style={{ marginBottom: "1rem" }}>{tr.home.servicesTag}</div>
              <h2 className="fade-up fade-up-delay-1" style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", marginBottom: "1rem" }}>
                {tr.home.servicesH2}
              </h2>
              <p className="fade-up fade-up-delay-2" style={{ color: "#9E7A65", fontSize: "1.1rem", maxWidth: 500, margin: "0 auto" }}>
                {tr.home.servicesSubtitle}
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
              {tr.home.services.map((s, i) => (
                <div key={s.title} className={`ws-card fade-up fade-up-delay-${i + 1}`} style={{ padding: "2.5rem 2rem" }}>
                  <div style={{
                    width: 60, height: 60,
                    background: s.color,
                    borderRadius: "1rem",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.75rem",
                    marginBottom: "1.5rem",
                  }}>
                    {s.icon}
                  </div>
                  <h3 style={{ fontSize: "1.35rem", marginBottom: "0.875rem" }}>{s.title}</h3>
                  <p style={{ color: "#5C3D2E", lineHeight: 1.75, marginBottom: "1.5rem" }}>{s.desc}</p>
                  <Link href="/services" style={{ color: "#C9603A", fontWeight: 700, textDecoration: "none", fontSize: "0.95rem" }}>
                    {tr.home.learnMore}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="ws-section" style={{ background: "#F0E6D3" }}>
          <div className="ws-container">
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <div className="ws-tag fade-up" style={{ marginBottom: "1rem" }}>{tr.home.statsTag}</div>
              <h2 className="fade-up fade-up-delay-1" style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)" }}>
                {tr.home.statsH2}
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
              {tr.home.stats.map((s, i) => (
                <div key={s.label} className={`fade-up fade-up-delay-${i + 1}`} style={{ textAlign: "center" }}>
                  <div className="stat-number">{s.num}</div>
                  <div style={{ color: "#5C3D2E", fontWeight: 600, marginTop: "0.5rem", fontSize: "1rem" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why us ── */}
        <section className="ws-section" style={{ background: "#FFFAF5" }}>
          <div className="ws-container">
            <div className="why-us-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
              <div>
                <div className="ws-tag fade-up" style={{ marginBottom: "1rem" }}>{tr.home.whyTag}</div>
                <h2 className="fade-up fade-up-delay-1" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", marginBottom: "2rem" }}>
                  {tr.home.whyH2}
                </h2>
                {tr.home.whyItems.map((item, i) => (
                  <div key={item.text} className={`fade-up fade-up-delay-${i + 1}`} style={{
                    display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.25rem",
                  }}>
                    <span style={{ fontSize: "1.5rem", marginTop: "2px" }}>{item.emoji}</span>
                    <span style={{ color: "#5C3D2E", fontSize: "1.05rem", lineHeight: 1.6 }}>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="fade-up fade-up-delay-2" style={{
                background: "linear-gradient(135deg, #FDE8DE 0%, #F0E6D3 100%)",
                borderRadius: "2rem",
                padding: "3rem 2.5rem",
                border: "1px solid #E8D5C0",
              }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>💡</div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{tr.home.ctaCardH3}</h3>
                <p style={{ color: "#5C3D2E", lineHeight: 1.7, marginBottom: "1.75rem" }}>
                  {tr.home.ctaCardP}
                </p>
                <button className="btn-primary" onClick={goToForm}>
                  {tr.home.ctaCardBtn}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="ws-bottom-cta" style={{
          background: "linear-gradient(135deg, #C9603A 0%, #A84D2C 100%)",
          padding: "6rem 0",
          textAlign: "center",
        }}>
          <div className="ws-container">
            <h2 className="fade-up" style={{ color: "#FFFAF5", fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "1.25rem" }}>
              {tr.home.bottomH2}
            </h2>
            <p className="fade-up fade-up-delay-1" style={{ color: "rgba(255,250,245,0.8)", fontSize: "1.15rem", marginBottom: "2.5rem", maxWidth: 480, margin: "0 auto 2.5rem" }}>
              {tr.home.bottomP}
            </p>
            <button className="fade-up fade-up-delay-2" onClick={goToForm} style={{
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
              {tr.home.bottomBtn}
            </button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
