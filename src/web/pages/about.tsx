import { Link } from "wouter";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useLang, t } from "../lib/i18n";

export default function About() {
  useScrollAnimation();
  const { lang } = useLang();
  const tr = t[lang];

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
            <div className="ws-tag fade-up" style={{ marginBottom: "1rem" }}>{tr.about.tag}</div>
            <h1 className="fade-up fade-up-delay-1" style={{
              fontFamily: "Raleway, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              marginBottom: "1.25rem",
              color: "#4A2E1A",
            }}>
              {tr.about.h1}
            </h1>
            <p className="fade-up fade-up-delay-2" style={{ color: "#9E7A65", fontSize: "1.15rem", maxWidth: 540, margin: "0 auto" }}>
              {tr.about.subtitle}
            </p>
          </div>
        </section>

        {/* ── Story ── */}
        <section className="ws-section" style={{ background: "#FFFAF5" }}>
          <div className="ws-container">
            <div className="story-grid" style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "5rem",
              alignItems: "center",
            }}>
              <div>
                <div className="ws-tag fade-up" style={{ marginBottom: "1rem" }}>{tr.about.storyTag}</div>
                <h2 className="fade-up fade-up-delay-1" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)", marginBottom: "1.5rem" }}>
                  {tr.about.storyH2}
                </h2>
                <p className="fade-up fade-up-delay-2" style={{ color: "#5C3D2E", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  {tr.about.storyP1}
                </p>
                <p className="fade-up fade-up-delay-3" style={{ color: "#5C3D2E", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  {tr.about.storyP2}
                </p>
                <p className="fade-up fade-up-delay-3" style={{ color: "#5C3D2E", lineHeight: 1.8 }}>
                  {tr.about.storyP3}
                </p>
              </div>

              <div className="fade-up fade-up-delay-2" style={{
                background: "linear-gradient(135deg, #FDE8DE, #F0E6D3)",
                borderRadius: "2rem",
                padding: "3rem 2.5rem",
                border: "1px solid #E8D5C0",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}>
                {tr.about.facts.map((item) => (
                  <div key={item.text} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <span style={{ fontSize: "1.5rem" }}>{item.emoji}</span>
                    <span style={{ color: "#5C3D2E", fontWeight: 500 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="ws-section" style={{ background: "#F0E6D3" }}>
          <div className="ws-container">
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <div className="ws-tag fade-up" style={{ marginBottom: "1rem" }}>{tr.about.valuesTag}</div>
              <h2 className="fade-up fade-up-delay-1" style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)" }}>
                {tr.about.valuesH2}
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.75rem" }}>
              {tr.about.values.map((v, i) => (
                <div key={v.title} className={`ws-card fade-up fade-up-delay-${i + 1}`} style={{ padding: "2rem 1.75rem" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{v.emoji}</div>
                  <h3 style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>{v.title}</h3>
                  <p style={{ color: "#5C3D2E", lineHeight: 1.7, fontSize: "0.95rem" }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section className="ws-section" style={{ background: "#FFFAF5" }}>
          <div className="ws-container">
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <div className="ws-tag fade-up" style={{ marginBottom: "1rem" }}>{tr.about.teamTag}</div>
              <h2 className="fade-up fade-up-delay-1" style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)" }}>
                {tr.about.teamH2}
              </h2>
              <p className="fade-up fade-up-delay-2" style={{ color: "#9E7A65", fontSize: "1.05rem", maxWidth: 440, margin: "1rem auto 0" }}>
                {tr.about.teamSubtitle}
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
              {tr.about.team.map((m, i) => (
                <div key={m.name} className={`ws-card fade-up fade-up-delay-${i + 1}`} style={{ padding: "2.5rem 2rem", textAlign: "center" }}>
                  <div style={{
                    width: 80, height: 80,
                    background: m.color,
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "2rem",
                    margin: "0 auto 1.25rem",
                  }}>
                    {m.emoji}
                  </div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "0.375rem" }}>{m.name}</h3>
                  <p style={{ color: "#C9603A", fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.875rem" }}>{m.role}</p>
                  <p style={{ color: "#9E7A65", fontSize: "0.9rem", lineHeight: 1.65 }}>{m.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Warmsides ── */}
        <section className="ws-section" style={{ background: "#F0E6D3" }}>
          <div className="ws-container">
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <div className="ws-tag fade-up" style={{ marginBottom: "1rem" }}>{tr.about.whyTag}</div>
              <h2 className="fade-up fade-up-delay-1" style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)" }}>
                {tr.about.whyH2}
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
              {tr.about.reasons.map((r, i) => (
                <div key={r.num} className={`fade-up fade-up-delay-${i + 1}`} style={{
                  display: "flex", gap: "1.5rem", alignItems: "flex-start",
                }}>
                  <div style={{
                    fontFamily: "Raleway, sans-serif",
                    fontWeight: 800,
                    fontSize: "2.5rem",
                    color: "rgba(201,96,58,0.18)",
                    lineHeight: 1,
                    flexShrink: 0,
                    minWidth: 56,
                  }}>
                    {r.num}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>{r.title}</h3>
                    <p style={{ color: "#5C3D2E", lineHeight: 1.7, fontSize: "0.95rem" }}>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="ws-bottom-cta" style={{
          background: "linear-gradient(135deg, #C9603A 0%, #A84D2C 100%)",
          padding: "6rem 0",
          textAlign: "center",
        }}>
          <div className="ws-container">
            <h2 className="fade-up" style={{ color: "#FFFAF5", fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "1.25rem" }}>
              {tr.about.ctaH2}
            </h2>
            <p className="fade-up fade-up-delay-1" style={{ color: "rgba(255,250,245,0.8)", fontSize: "1.1rem", marginBottom: "2.5rem", maxWidth: 420, margin: "0 auto 2.5rem" }}>
              {tr.about.ctaP}
            </p>
            <Link href="/contacts" style={{
              display: "inline-block",
              background: "#FFFAF5",
              color: "#C9603A",
              fontFamily: "Raleway, sans-serif",
              fontWeight: 700,
              padding: "1rem 2.5rem",
              borderRadius: "0.625rem",
              textDecoration: "none",
              fontSize: "1.05rem",
              transition: "transform 0.2s ease",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; }}
            >
              {tr.about.ctaBtn}
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
