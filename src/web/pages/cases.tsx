import { Link, useLocation } from "wouter";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useLang, t } from "../lib/i18n";

const cases = [
  {
    slug: "ecommerce-marketplace",
    category: "E-commerce",
    categoryColor: "#FDE8DE",
    title: {
      ru: "Маркетплейс автозапчастей",
      ua: "Маркетплейс автозапчастин",
      en: "Automotive Parts Marketplace",
    },
    desc: {
      ru: "Интернет-магазин с каталогом на 250 000+ позиций, поиском по VIN, мультиплатформенной интеграцией и кабинетом механика.",
      ua: "Інтернет-магазин з каталогом на 250 000+ позицій, пошуком за VIN, мультиплатформенною інтеграцією та кабінетом механіка.",
      en: "An e-commerce store with 250,000+ SKUs, VIN-based search, multi-platform integration, and a mechanic dashboard.",
    },
    tags: ["Shopify", "TecDoc API", "Elasticsearch"],
    duration: "5 мес.",
    emoji: "🚗",
  },
];

const categories = [
  { key: "all", label: { ru: "Все", ua: "Всі", en: "All" } },
  { key: "E-commerce", label: { ru: "E-commerce", ua: "E-commerce", en: "E-commerce" } },
];

export default function Cases() {
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
            <div className="ws-tag fade-up" style={{ marginBottom: "1rem" }}>
              {{ ru: "Наши работы", ua: "Наші роботи", en: "Our Work" }[lang]}
            </div>
            <h1 className="fade-up fade-up-delay-1" style={{
              fontFamily: "Raleway, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              marginBottom: "1.25rem",
              color: "#4A2E1A",
            }}>
              {{ ru: "Кейсы", ua: "Кейси", en: "Cases" }[lang]}
            </h1>
            <p className="fade-up fade-up-delay-2" style={{ color: "#9E7A65", fontSize: "1.15rem", maxWidth: 520, margin: "0 auto" }}>
              {{ ru: "Реальные проекты, реальные результаты. Смотрите, что мы уже сделали — и представьте, что сделаем для вас.", ua: "Реальні проєкти, реальні результати. Дивіться, що ми вже зробили — і уявіть, що зробимо для вас.", en: "Real projects, real results. See what we've built — and imagine what we can do for you." }[lang]}
            </p>
          </div>
        </section>

        {/* ── Cases grid ── */}
        <section className="ws-section" style={{ background: "#FFFAF5" }}>
          <div className="ws-container">

            {/* Category filter */}
            <div className="fade-up" style={{ display: "flex", gap: "0.75rem", marginBottom: "3rem", flexWrap: "wrap" }}>
              {categories.map((c) => (
                <span key={c.key} style={{
                  padding: "0.5rem 1.25rem",
                  borderRadius: "2rem",
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  background: c.key === "E-commerce" ? "#C9603A" : "#F0E6D3",
                  color: c.key === "E-commerce" ? "#FFFAF5" : "#9E7A65",
                  cursor: "default",
                }}>
                  {c.label[lang]}
                </span>
              ))}
            </div>

            {/* Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
              {cases.map((c, i) => (
                <Link key={c.slug} href={`/cases/${c.slug}`} style={{ textDecoration: "none" }}>
                  <div className={`ws-card fade-up fade-up-delay-${i + 1}`} style={{ padding: "2.5rem 2rem", cursor: "pointer" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                      <div style={{
                        width: 56, height: 56,
                        background: c.categoryColor,
                        borderRadius: "1rem",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "1.75rem",
                      }}>
                        {c.emoji}
                      </div>
                      <span style={{
                        background: "#F0E6D3",
                        color: "#C9603A",
                        fontFamily: "Raleway, sans-serif",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        padding: "0.3rem 0.75rem",
                        borderRadius: "2rem",
                        textTransform: "uppercase" as const,
                        letterSpacing: "0.06em",
                      }}>
                        {c.category}
                      </span>
                    </div>
                    <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem", color: "#4A2E1A" }}>
                      {c.title[lang]}
                    </h3>
                    <p style={{ color: "#5C3D2E", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "1.5rem" }}>
                      {c.desc[lang]}
                    </p>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                      {c.tags.map((tag) => (
                        <span key={tag} style={{
                          background: "#F0E6D3",
                          color: "#9E7A65",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          padding: "0.25rem 0.625rem",
                          borderRadius: "0.375rem",
                        }}>{tag}</span>
                      ))}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ color: "#9E7A65", fontSize: "0.875rem" }}>
                        {{ ru: "Срок:", ua: "Термін:", en: "Duration:" }[lang]} {c.duration}
                      </span>
                      <span style={{ color: "#C9603A", fontFamily: "Raleway, sans-serif", fontWeight: 700, fontSize: "0.9rem" }}>
                        {{ ru: "Читать →", ua: "Читати →", en: "Read →" }[lang]}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{
          background: "linear-gradient(135deg, #C9603A 0%, #A84D2C 100%)",
          padding: "5rem 0",
          textAlign: "center",
        }}>
          <div className="ws-container">
            <h2 className="fade-up" style={{ color: "#FFFAF5", fontSize: "clamp(1.6rem, 4vw, 2.5rem)", marginBottom: "1rem" }}>
              {{ ru: "Хотите похожий проект?", ua: "Хочете схожий проєкт?", en: "Want a similar project?" }[lang]}
            </h2>
            <p className="fade-up fade-up-delay-1" style={{ color: "rgba(255,250,245,0.8)", fontSize: "1.05rem", marginBottom: "2rem", maxWidth: 400, margin: "0 auto 2rem" }}>
              {{ ru: "Расскажите задачу — оценим и предложим решение.", ua: "Розкажіть задачу — оцінимо і запропонуємо рішення.", en: "Tell us your challenge — we'll scope it and suggest a solution." }[lang]}
            </p>
            <button onClick={goToForm} style={{
              background: "#FFFAF5", color: "#C9603A",
              fontFamily: "Raleway, sans-serif", fontWeight: 700,
              padding: "0.9rem 2.25rem", borderRadius: "0.625rem",
              border: "none", fontSize: "1rem", cursor: "pointer",
              transition: "transform 0.2s ease",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; }}
            >
              {tr.nav.cta} →
            </button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
