import { Link, useLocation } from "wouter";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useLang, t } from "../lib/i18n";

type LangMap = { ru: string; ua: string; en: string };
type Lang = "ru" | "ua" | "en";

const s = (map: LangMap, lang: Lang) => map[lang];

const content = {
  tag: { ru: "E-commerce", ua: "E-commerce", en: "E-commerce" },
  breadcrumb: { ru: "Кейсы", ua: "Кейси", en: "Cases" },
  title: { ru: "Маркетплейс автозапчастей", ua: "Маркетплейс автозапчастин", en: "Automotive Parts Marketplace" },
  subtitle: {
    ru: "Как мы создали платформу с каталогом из 250 000+ позиций, умным поиском по VIN и личным гаражом для механиков.",
    ua: "Як ми створили платформу з каталогом із 250 000+ позицій, розумним пошуком за VIN та особистим гаражем для механіків.",
    en: "How we built a platform with 250,000+ SKUs, VIN-based smart search, and a virtual garage for professional mechanics.",
  },

  // Project info
  infoClient: { ru: "Клиент", ua: "Клієнт", en: "Client" },
  infoClientVal: { ru: "Конфиденциально (EU)", ua: "Конфіденційно (EU)", en: "Confidential (EU)" },
  infoLocation: { ru: "Локация", ua: "Локація", en: "Location" },
  infoLocationVal: { ru: "Европа", ua: "Європа", en: "Europe" },
  infoService: { ru: "Услуга", ua: "Послуга", en: "Service" },
  infoServiceVal: { ru: "Интернет-магазин", ua: "Інтернет-магазин", en: "E-commerce Development" },
  infoDuration: { ru: "Срок", ua: "Термін", en: "Duration" },
  infoDurationVal: { ru: "5 месяцев", ua: "5 місяців", en: "5 months" },
  infoTeam: { ru: "Команда", ua: "Команда", en: "Team" },
  teamMembers: [
    { ru: "Менеджер проекта", ua: "Менеджер проєкту", en: "Project Manager" },
    { ru: "Тех. лид", ua: "Тех. лід", en: "Tech Lead" },
    { ru: "Backend-разработчик", ua: "Backend-розробник", en: "Backend Developer" },
    { ru: "Frontend-разработчик", ua: "Frontend-розробник", en: "Frontend Developer" },
    { ru: "UX/UI дизайнер", ua: "UX/UI дизайнер", en: "UX/UI Designer" },
    { ru: "QA-инженер", ua: "QA-інженер", en: "QA Engineer" },
  ],

  // Challenge
  challengeTag: { ru: "Задача", ua: "Задача", en: "Challenge" },
  challengeH2: { ru: "Запрос клиента", ua: "Запит клієнта", en: "Client brief" },
  challengeP: {
    ru: "К нам обратился дистрибьютор автозапчастей: тысячи позиций от разных поставщиков, никакой единой витрины. Механики теряли время на поиск, клиенты уходили к конкурентам. Нужна была современная онлайн-платформа — удобная и для профессионалов, и для частных водителей.",
    ua: "До нас звернувся дистриб'ютор автозапчастин: тисячі позицій від різних постачальників, жодної єдиної вітрини. Механіки витрачали час на пошук, клієнти йшли до конкурентів. Потрібна була сучасна онлайн-платформа — зручна і для професіоналів, і для приватних водіїв.",
    en: "An automotive parts distributor came to us with thousands of SKUs across multiple suppliers and no unified storefront. Mechanics were wasting time searching, customers were going elsewhere. They needed a modern platform — built for both professionals and everyday drivers.",
  },
  challenges: [
    {
      num: "01",
      title: { ru: "Единый каталог", ua: "Єдиний каталог", en: "Unified catalog" },
      desc: { ru: "Объединить товары от нескольких поставщиков в одну платформу с актуальными остатками", ua: "Об'єднати товари від кількох постачальників в одну платформу з актуальними залишками", en: "Consolidate products from multiple suppliers into one platform with live inventory" },
    },
    {
      num: "02",
      title: { ru: "Умный поиск", ua: "Розумний пошук", en: "Smart search" },
      desc: { ru: "Поиск по VIN, гос. номеру, марке/модели/году и номеру детали с перекрёстными ссылками", ua: "Пошук за VIN, держ. номером, маркою/моделлю/роком та номером деталі з перехресними посиланнями", en: "Search by VIN, license plate, make/model/year, and part number with cross-reference support" },
    },
    {
      num: "03",
      title: { ru: "Масштаб", ua: "Масштаб", en: "Scale" },
      desc: { ru: "Работа с базой от 250 000 до 2 млн позиций без потери скорости и стабильности", ua: "Робота з базою від 250 000 до 2 млн позицій без втрати швидкості та стабільності", en: "Handle 250K–2M SKUs without sacrificing speed or stability" },
    },
    {
      num: "04",
      title: { ru: "Выход в Европу", ua: "Вихід до Європи", en: "EU expansion" },
      desc: { ru: "Заложить архитектуру под многоязычность, мультивалютность и масштабирование", ua: "Закласти архітектуру для багатомовності, мультивалютності та масштабування", en: "Build architecture ready for multilingual, multi-currency, and cross-border scale" },
    },
  ],

  // Phases
  phasesTag: { ru: "Процесс", ua: "Процес", en: "Process" },
  phasesH2: { ru: "Как строилась работа", ua: "Як будувалась робота", en: "How we worked" },
  phases: [
    {
      num: "01",
      title: { ru: "Исследование и планирование", ua: "Дослідження та планування", en: "Discovery & Planning" },
      duration: { ru: "4 недели", ua: "4 тижні", en: "4 weeks" },
      desc: { ru: "Изучили конкурентов и целевую аудиторию, зафиксировали требования к TecDoc-интеграции, составили дорожную карту проекта.", ua: "Вивчили конкурентів та цільову аудиторію, зафіксували вимоги до TecDoc-інтеграції, склали дорожню карту проєкту.", en: "Analyzed competitors and audience, documented TecDoc integration requirements, built the project roadmap." },
      deliverables: [
        { ru: "Отчёт по рынку", ua: "Звіт по ринку", en: "Market research report" },
        { ru: "Технические требования", ua: "Технічні вимоги", en: "Technical requirements" },
        { ru: "Дорожная карта", ua: "Дорожня карта", en: "Project roadmap" },
      ],
    },
    {
      num: "02",
      title: { ru: "Дизайн и архитектура", ua: "Дизайн та архітектура", en: "Design & Architecture" },
      duration: { ru: "6 недель", ua: "6 тижнів", en: "6 weeks" },
      desc: { ru: "Спроектировали интерфейсы каталога и поиска. Разработали схему базы данных и API-архитектуру под миллионы позиций.", ua: "Спроектували інтерфейси каталогу та пошуку. Розробили схему бази даних та API-архітектуру під мільйони позицій.", en: "Designed catalog and search UIs. Built database schema and API architecture to handle millions of parts." },
      deliverables: [
        { ru: "UI/UX дизайн", ua: "UI/UX дизайн", en: "UI/UX design" },
        { ru: "Архитектура базы данных", ua: "Архітектура бази даних", en: "Database architecture" },
        { ru: "API-документация", ua: "API-документація", en: "API documentation" },
      ],
    },
    {
      num: "03",
      title: { ru: "Интеграция TecDoc", ua: "Інтеграція TecDoc", en: "TecDoc Integration" },
      duration: { ru: "10 недель", ua: "10 тижнів", en: "10 weeks" },
      desc: { ru: "Подключили каталог TecDoc, настроили многоуровневый поиск через Elasticsearch, выстроили систему синхронизации и валидации данных.", ua: "Підключили каталог TecDoc, налаштували багаторівневий пошук через Elasticsearch, побудували систему синхронізації та валідації даних.", en: "Connected the TecDoc catalog, built layered Elasticsearch-powered search, set up data sync and validation pipelines." },
      deliverables: [
        { ru: "TecDoc API интеграция", ua: "TecDoc API інтеграція", en: "TecDoc API integration" },
        { ru: "Elastic-поиск", ua: "Elastic-пошук", en: "Elasticsearch setup" },
        { ru: "Система управления данными", ua: "Система керування даними", en: "Data management system" },
      ],
    },
    {
      num: "04",
      title: { ru: "Разработка ядра", ua: "Розробка ядра", en: "Core Development" },
      duration: { ru: "12 недель", ua: "12 тижнів", en: "12 weeks" },
      desc: { ru: "Реализовали e-commerce на Shopify Plus: корзину, оформление, личный кабинет. Добавили виртуальный гараж и систему замен запчастей.", ua: "Реалізували e-commerce на Shopify Plus: кошик, оформлення, особистий кабінет. Додали віртуальний гараж та систему замін запчастин.", en: "Built Shopify Plus e-commerce: cart, checkout, accounts. Added virtual garage and cross-reference parts system." },
      deliverables: [
        { ru: "E-commerce платформа", ua: "E-commerce платформа", en: "Core e-commerce platform" },
        { ru: "Виртуальный гараж", ua: "Віртуальний гараж", en: "Virtual garage" },
        { ru: "Система замен деталей", ua: "Система замін деталей", en: "Parts cross-reference system" },
      ],
    },
    {
      num: "05",
      title: { ru: "Тестирование и запуск", ua: "Тестування та запуск", en: "Testing & Launch" },
      duration: { ru: "6 + 4 недели", ua: "6 + 4 тижні", en: "6 + 4 weeks" },
      desc: { ru: "Провели нагрузочное тестирование, проверку данных и финальную оптимизацию. Запуск с пилотной группой пользователей.", ua: "Провели навантажувальне тестування, перевірку даних та фінальну оптимізацію. Запуск з пілотною групою користувачів.", en: "Load testing, data validation, final optimization. Controlled launch with a pilot user group." },
      deliverables: [
        { ru: "Отчёты о производительности", ua: "Звіти про продуктивність", en: "Performance reports" },
        { ru: "Сертификаты безопасности", ua: "Сертифікати безпеки", en: "Security certificates" },
        { ru: "Запущенная платформа", ua: "Запущена платформа", en: "Live platform" },
      ],
    },
  ],

  // Stack
  stackTag: { ru: "Технологии", ua: "Технології", en: "Tech Stack" },
  stackH2: { ru: "Что использовали", ua: "Що використовували", en: "What we used" },
  stack: [
    { icon: "🛒", name: "Shopify Plus", desc: { ru: "E-commerce платформа", ua: "E-commerce платформа", en: "E-commerce platform" } },
    { icon: "🔍", name: "Elasticsearch", desc: { ru: "Поиск по каталогу", ua: "Пошук по каталогу", en: "Catalog search" } },
    { icon: "🚗", name: "TecDoc API", desc: { ru: "База автозапчастей", ua: "База автозапчастин", en: "Parts catalog" } },
    { icon: "💳", name: "Stripe", desc: { ru: "Приём платежей", ua: "Приймання платежів", en: "Payment processing" } },
    { icon: "⚡", name: "React", desc: { ru: "Frontend интерфейс", ua: "Frontend інтерфейс", en: "Frontend UI" } },
    { icon: "🗄️", name: "Node.js / GraphQL", desc: { ru: "Backend и API", ua: "Backend та API", en: "Backend & API" } },
  ],

  // Results
  resultsTag: { ru: "Результат", ua: "Результат", en: "Results" },
  resultsH2: { ru: "Что получил клиент", ua: "Що отримав клієнт", en: "What the client got" },
  results: [
    { emoji: "✅", text: { ru: "Полная интеграция каталога TecDoc — 250 000+ позиций в единой системе", ua: "Повна інтеграція каталогу TecDoc — 250 000+ позицій в єдиній системі", en: "Full TecDoc catalog integration — 250,000+ parts in one system" } },
    { emoji: "✅", text: { ru: "4 метода поиска: VIN, гос. номер, марка/модель/год, номер детали", ua: "4 методи пошуку: VIN, держ. номер, марка/модель/рік, номер деталі", en: "4 search methods: VIN, license plate, make/model/year, part number" } },
    { emoji: "✅", text: { ru: "Виртуальный гараж — сохранение истории авто пользователя", ua: "Віртуальний гараж — збереження історії авто користувача", en: "Virtual garage — saved vehicle history per user" } },
    { emoji: "✅", text: { ru: "Масштабируемая архитектура под выход на европейский рынок", ua: "Масштабована архітектура для виходу на європейський ринок", en: "Scalable architecture ready for European market expansion" } },
  ],
};

export default function CaseEcommerce() {
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
          padding: "5rem 0 4rem",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: "-60px", right: "-80px",
            width: 360, height: 360,
            background: "radial-gradient(circle, rgba(232,137,90,0.15) 0%, transparent 70%)",
            borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
            pointerEvents: "none",
          }} />
          <div className="ws-container" style={{ position: "relative", zIndex: 1 }}>
            {/* Breadcrumb */}
            <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem" }}>
              <Link href="/cases" style={{ color: "#9E7A65", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}>
                {s(content.breadcrumb, lang)}
              </Link>
              <span style={{ color: "#C9603A" }}>›</span>
              <span style={{ color: "#C9603A", fontSize: "0.9rem", fontWeight: 600 }}>E-commerce</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "3rem", alignItems: "start" }}>
              <div>
                <div className="ws-tag fade-up" style={{ marginBottom: "1rem" }}>{s(content.tag, lang)}</div>
                <h1 className="fade-up fade-up-delay-1" style={{
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  color: "#4A2E1A",
                  marginBottom: "1.25rem",
                  lineHeight: 1.15,
                }}>
                  {s(content.title, lang)}
                </h1>
                <p className="fade-up fade-up-delay-2" style={{ color: "#5C3D2E", fontSize: "1.1rem", lineHeight: 1.75, maxWidth: 600 }}>
                  {s(content.subtitle, lang)}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Hero image ── */}
        <section style={{ background: "#FFFAF5", padding: "0" }}>
          <div className="ws-container" style={{ paddingTop: "2.5rem", paddingBottom: "0" }}>
            <div className="fade-up" style={{
              borderRadius: "1.5rem",
              overflow: "hidden",
              border: "1px solid #E8D5C0",
              boxShadow: "0 8px 40px rgba(74,46,26,0.1)",
            }}>
              <img
                src="/cases/hero.webp"
                alt="Automotive parts marketplace"
                style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: 520 }}
              />
            </div>
          </div>
        </section>

        {/* ── Project info card ── */}
        <section style={{ background: "#FFFAF5", padding: "3rem 0" }}>
          <div className="ws-container">
            <div className="ws-card fade-up" style={{
              padding: "2.5rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "2rem",
            }}>
              {[
                { label: s(content.infoClient, lang), value: s(content.infoClientVal, lang) },
                { label: s(content.infoLocation, lang), value: s(content.infoLocationVal, lang) },
                { label: s(content.infoService, lang), value: s(content.infoServiceVal, lang) },
                { label: s(content.infoDuration, lang), value: s(content.infoDurationVal, lang) },
              ].map((item) => (
                <div key={item.label}>
                  <p style={{ color: "#9E7A65", fontSize: "0.8rem", fontFamily: "Raleway, sans-serif", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                    {item.label}
                  </p>
                  <p style={{ color: "#4A2E1A", fontWeight: 600, fontSize: "1rem" }}>{item.value}</p>
                </div>
              ))}
              <div>
                <p style={{ color: "#9E7A65", fontSize: "0.8rem", fontFamily: "Raleway, sans-serif", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.6rem" }}>
                  {s(content.infoTeam, lang)}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  {content.teamMembers.map((m) => (
                    <span key={m.en} style={{ color: "#5C3D2E", fontSize: "0.9rem" }}>{s(m, lang)}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Challenge ── */}
        <section className="ws-section" style={{ background: "#F0E6D3" }}>
          <div className="ws-container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "start" }}>
              <div>
                <div className="ws-tag fade-up" style={{ marginBottom: "1rem" }}>{s(content.challengeTag, lang)}</div>
                <h2 className="fade-up fade-up-delay-1" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)", marginBottom: "1.25rem" }}>
                  {s(content.challengeH2, lang)}
                </h2>
                <p className="fade-up fade-up-delay-2" style={{ color: "#5C3D2E", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "2rem" }}>
                  {s(content.challengeP, lang)}
                </p>
                <div className="fade-up fade-up-delay-3" style={{
                  borderRadius: "1.25rem",
                  overflow: "hidden",
                  border: "1px solid #E8D5C0",
                  boxShadow: "0 4px 24px rgba(74,46,26,0.08)",
                }}>
                  <img
                    src="/cases/about.webp"
                    alt="Project overview"
                    style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: 280 }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {content.challenges.map((c, i) => (
                  <div key={c.num} className={`ws-card fade-up fade-up-delay-${i + 1}`} style={{ padding: "1.5rem 1.75rem", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                    <span style={{
                      fontFamily: "Raleway, sans-serif", fontWeight: 800,
                      fontSize: "1.5rem", color: "rgba(201,96,58,0.25)", lineHeight: 1, flexShrink: 0,
                    }}>{c.num}</span>
                    <div>
                      <h4 style={{ fontSize: "1rem", marginBottom: "0.35rem", color: "#4A2E1A" }}>{s(c.title, lang)}</h4>
                      <p style={{ color: "#5C3D2E", fontSize: "0.9rem", lineHeight: 1.65 }}>{s(c.desc, lang)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Phases ── */}
        <section className="ws-section" style={{ background: "#FFFAF5" }}>
          <div className="ws-container">
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <div className="ws-tag fade-up" style={{ marginBottom: "1rem" }}>{s(content.phasesTag, lang)}</div>
              <h2 className="fade-up fade-up-delay-1" style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)" }}>
                {s(content.phasesH2, lang)}
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {content.phases.map((phase, i) => (
                <div key={phase.num} className={`ws-card fade-up fade-up-delay-${(i % 3) + 1}`} style={{ padding: "2rem 2.5rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: "1.5rem", alignItems: "start" }}>
                    {/* Number */}
                    <div style={{
                      width: 48, height: 48,
                      background: "#FDE8DE",
                      borderRadius: "0.875rem",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "Raleway, sans-serif", fontWeight: 800,
                      color: "#C9603A", fontSize: "1rem", flexShrink: 0,
                    }}>
                      {phase.num}
                    </div>

                    {/* Content */}
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
                        <h3 style={{ fontSize: "1.1rem", color: "#4A2E1A" }}>{s(phase.title, lang)}</h3>
                        <span style={{
                          background: "#F0E6D3", color: "#9E7A65",
                          fontSize: "0.8rem", fontWeight: 600,
                          padding: "0.2rem 0.625rem", borderRadius: "1rem",
                        }}>{s(phase.duration, lang)}</span>
                      </div>
                      <p style={{ color: "#5C3D2E", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "1rem" }}>
                        {s(phase.desc, lang)}
                      </p>
                      <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
                        {phase.deliverables.map((d, j) => (
                          <span key={j} style={{
                            background: "#F0E6D3", color: "#5C3D2E",
                            fontSize: "0.8rem", fontWeight: 600,
                            padding: "0.25rem 0.75rem", borderRadius: "0.375rem",
                          }}>
                            {s(d, lang)}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tech stack ── */}
        <section className="ws-section" style={{ background: "#F0E6D3" }}>
          <div className="ws-container">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div className="ws-tag fade-up" style={{ marginBottom: "1rem" }}>{s(content.stackTag, lang)}</div>
              <h2 className="fade-up fade-up-delay-1" style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)" }}>
                {s(content.stackH2, lang)}
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
              {content.stack.map((item, i) => (
                <div key={item.name} className={`ws-card fade-up fade-up-delay-${(i % 3) + 1}`} style={{ padding: "1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ fontSize: "1.75rem" }}>{item.icon}</span>
                  <div>
                    <p style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700, color: "#4A2E1A", fontSize: "0.95rem" }}>{item.name}</p>
                    <p style={{ color: "#9E7A65", fontSize: "0.8rem" }}>{s(item.desc, lang)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Results ── */}
        <section className="ws-section" style={{ background: "#FFFAF5" }}>
          <div className="ws-container">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div className="ws-tag fade-up" style={{ marginBottom: "1rem" }}>{s(content.resultsTag, lang)}</div>
              <h2 className="fade-up fade-up-delay-1" style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)" }}>
                {s(content.resultsH2, lang)}
              </h2>
            </div>

            {/* Solution screenshots */}
            <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem", marginBottom: "3rem" }}>
              {["/cases/solution-1.webp", "/cases/solution-2.webp", "/cases/solution-3.webp"].map((src, i) => (
                <div key={i} style={{
                  borderRadius: "1.25rem",
                  overflow: "hidden",
                  border: "1px solid #E8D5C0",
                  boxShadow: "0 4px 20px rgba(74,46,26,0.08)",
                }}>
                  <img
                    src={src}
                    alt={`Solution screenshot ${i + 1}`}
                    style={{ width: "100%", display: "block", objectFit: "cover", height: 220 }}
                  />
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {content.results.map((r, i) => (
                <div key={i} className={`ws-card fade-up fade-up-delay-${(i % 3) + 1}`} style={{ padding: "1.75rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{r.emoji}</span>
                  <p style={{ color: "#5C3D2E", lineHeight: 1.7, fontSize: "0.95rem" }}>{s(r.text, lang)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{
          background: "linear-gradient(135deg, #C9603A 0%, #A84D2C 100%)",
          padding: "6rem 0",
          textAlign: "center",
        }}>
          <div className="ws-container">
            <h2 className="fade-up" style={{ color: "#FFFAF5", fontSize: "clamp(1.6rem, 4vw, 2.75rem)", marginBottom: "1rem" }}>
              {{ ru: "Хотите похожий проект?", ua: "Хочете схожий проєкт?", en: "Want a similar project?" }[lang]}
            </h2>
            <p className="fade-up fade-up-delay-1" style={{ color: "rgba(255,250,245,0.8)", fontSize: "1.05rem", marginBottom: "2rem", maxWidth: 420, margin: "0 auto 2rem" }}>
              {{ ru: "Расскажите о задаче — обсудим подход и стоимость.", ua: "Розкажіть про задачу — обговоримо підхід та вартість.", en: "Tell us your challenge — we'll talk approach and cost." }[lang]}
            </p>
            <button onClick={goToForm} style={{
              background: "#FFFAF5", color: "#C9603A",
              fontFamily: "Raleway, sans-serif", fontWeight: 700,
              padding: "1rem 2.5rem", borderRadius: "0.625rem",
              border: "none", fontSize: "1.05rem", cursor: "pointer",
              transition: "transform 0.2s ease",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
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
