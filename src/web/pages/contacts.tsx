import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useLang, t } from "../lib/i18n";

type FormData = {
  name: string;
  contact: string;
  service: string;
  comment: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validateEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function validatePhone(v: string) {
  return /^[\+]?[\d\s\-\(\)]{7,}$/.test(v);
}

export default function Contacts() {
  useScrollAnimation();
  const { lang } = useLang();
  const tr = t[lang];

  const [form, setForm] = useState<FormData>({ name: "", contact: "", service: "", comment: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = tr.contacts.errorName;
    if (!form.contact.trim()) {
      e.contact = tr.contacts.errorContact;
    } else if (!validateEmail(form.contact) && !validatePhone(form.contact)) {
      e.contact = tr.contacts.errorContactInvalid;
    }
    if (!form.service) e.service = tr.contacts.errorService;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  // Reset form when language changes so options are in sync
  const resetForm = () => {
    setForm({ name: "", contact: "", service: "", comment: "" });
    setErrors({});
    setSubmitted(false);
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
            <div className="ws-tag fade-up" style={{ marginBottom: "1rem" }}>{tr.contacts.tag}</div>
            <h1 className="fade-up fade-up-delay-1" style={{
              fontFamily: "Raleway, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              marginBottom: "1.25rem",
              color: "#4A2E1A",
            }}>
              {tr.contacts.h1}
            </h1>
            <p className="fade-up fade-up-delay-2" style={{ color: "#9E7A65", fontSize: "1.15rem", maxWidth: 500, margin: "0 auto" }}>
              {tr.contacts.subtitle}
            </p>
          </div>
        </section>

        {/* ── Main content ── */}
        <section className="ws-section" style={{ background: "#FFFAF5" }}>
          <div className="ws-container">
            <div className="contacts-grid" style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "4rem",
              alignItems: "start",
            }}>

              {/* Form */}
              <div className="fade-up" id="contact-form">
                <div className="ws-card" style={{ padding: "3rem 2.5rem" }}>
                  <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{tr.contacts.formH2}</h2>
                  <p style={{ color: "#9E7A65", marginBottom: "2rem", fontSize: "0.95rem" }}>
                    {tr.contacts.formSubtitle}
                  </p>

                  {submitted ? (
                    <div style={{
                      textAlign: "center",
                      padding: "3rem 1rem",
                      background: "linear-gradient(135deg, #FDE8DE, #F0E6D3)",
                      borderRadius: "1rem",
                    }}>
                      <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
                      <h3 style={{ fontSize: "1.4rem", marginBottom: "0.75rem" }}>{tr.contacts.successTitle}</h3>
                      <p style={{ color: "#5C3D2E", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                        {tr.contacts.successText}
                      </p>
                      <button className="btn-outline" onClick={resetForm} style={{ fontSize: "0.9rem" }}>
                        ←
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      {/* Name */}
                      <div style={{ marginBottom: "1.5rem" }}>
                        <label style={{
                          display: "block",
                          fontFamily: "Raleway, sans-serif",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          color: "#4A2E1A",
                          marginBottom: "0.5rem",
                        }}>
                          {tr.contacts.labelName}
                        </label>
                        <input
                          className="ws-input"
                          type="text"
                          placeholder={tr.contacts.placeholderName}
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          style={{ borderColor: errors.name ? "#C9603A" : undefined }}
                        />
                        {errors.name && (
                          <p style={{ color: "#C9603A", fontSize: "0.825rem", marginTop: "0.375rem" }}>{errors.name}</p>
                        )}
                      </div>

                      {/* Contact */}
                      <div style={{ marginBottom: "1.5rem" }}>
                        <label style={{
                          display: "block",
                          fontFamily: "Raleway, sans-serif",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          color: "#4A2E1A",
                          marginBottom: "0.5rem",
                        }}>
                          {tr.contacts.labelContact}
                        </label>
                        <input
                          className="ws-input"
                          type="text"
                          placeholder={tr.contacts.placeholderContact}
                          value={form.contact}
                          onChange={(e) => handleChange("contact", e.target.value)}
                          style={{ borderColor: errors.contact ? "#C9603A" : undefined }}
                        />
                        {errors.contact && (
                          <p style={{ color: "#C9603A", fontSize: "0.825rem", marginTop: "0.375rem" }}>{errors.contact}</p>
                        )}
                      </div>

                      {/* Service */}
                      <div style={{ marginBottom: "1.5rem" }}>
                        <label style={{
                          display: "block",
                          fontFamily: "Raleway, sans-serif",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          color: "#4A2E1A",
                          marginBottom: "0.5rem",
                        }}>
                          {tr.contacts.labelService}
                        </label>
                        <select
                          className="ws-input"
                          value={form.service}
                          onChange={(e) => handleChange("service", e.target.value)}
                          style={{ borderColor: errors.service ? "#C9603A" : undefined, cursor: "pointer" }}
                        >
                          {tr.contacts.serviceOptions.map((o) => (
                            <option key={o.value} value={o.value} disabled={o.value === ""}>
                              {o.label}
                            </option>
                          ))}
                        </select>
                        {errors.service && (
                          <p style={{ color: "#C9603A", fontSize: "0.825rem", marginTop: "0.375rem" }}>{errors.service}</p>
                        )}
                      </div>

                      {/* Comment */}
                      <div style={{ marginBottom: "2rem" }}>
                        <label style={{
                          display: "block",
                          fontFamily: "Raleway, sans-serif",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          color: "#4A2E1A",
                          marginBottom: "0.5rem",
                        }}>
                          {tr.contacts.labelComment}{" "}
                          <span style={{ color: "#9E7A65", fontWeight: 400 }}>{tr.contacts.commentOptional}</span>
                        </label>
                        <textarea
                          className="ws-input"
                          rows={4}
                          placeholder={tr.contacts.placeholderComment}
                          value={form.comment}
                          onChange={(e) => handleChange("comment", e.target.value)}
                          style={{ resize: "vertical" }}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-primary"
                        disabled={loading}
                        style={{ width: "100%", textAlign: "center", opacity: loading ? 0.7 : 1, cursor: loading ? "wait" : "pointer" }}
                      >
                        {loading ? tr.contacts.submittingBtn : tr.contacts.submitBtn}
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Right side */}
              <div>
                <div className="fade-up fade-up-delay-1" style={{ marginBottom: "2rem" }}>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>{tr.contacts.altContactsH3}</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {tr.contacts.contacts.map((c) => (
                      <a key={c.label} href={c.href} style={{ textDecoration: "none" }}>
                        <div className="ws-card" style={{ padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                          <span style={{ fontSize: "1.5rem" }}>{c.icon}</span>
                          <div>
                            <p style={{ color: "#9E7A65", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.2rem" }}>{c.label}</p>
                            <p style={{ color: "#C9603A", fontWeight: 700, fontSize: "1rem" }}>{c.value}</p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="fade-up fade-up-delay-2" style={{
                  background: "linear-gradient(135deg, #FDE8DE, #F0E6D3)",
                  borderRadius: "1.5rem",
                  padding: "2.5rem 2rem",
                  border: "1px solid #E8D5C0",
                }}>
                  <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>⏱</div>
                  <h3 style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>{tr.contacts.promiseH3}</h3>
                  <p style={{ color: "#5C3D2E", lineHeight: 1.75, fontSize: "0.95rem" }}>
                    {tr.contacts.promiseP}
                  </p>
                </div>

                <div className="fade-up fade-up-delay-3" style={{ marginTop: "1.5rem" }}>
                  <div className="ws-card" style={{ padding: "1.5rem 2rem" }}>
                    <h4 style={{ fontSize: "1rem", marginBottom: "1rem", color: "#4A2E1A" }}>{tr.contacts.hoursH4}</h4>
                    {tr.contacts.hours.map((h) => (
                      <div key={h.day} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid #F0E6D3" }}>
                        <span style={{ color: "#5C3D2E", fontWeight: 600, fontSize: "0.95rem" }}>{h.day}</span>
                        <span style={{ color: "#9E7A65", fontSize: "0.95rem" }}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
