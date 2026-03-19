
import { useState, useEffect } from "react";

const PHONE = "(256) 710-5689";
const EMAIL = "info@treestandpartners.com";
const WEB = "treestandpartners.com";

// ═══════════════════════════════════════════
// TREE ICON
// ═══════════════════════════════════════════
const TreeIcon = ({ size = 28, color = "#c49b2a" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="16" y1="6" x2="16" y2="26"/>
    <polyline points="10,17 16,10 22,17"/>
    <polyline points="12,22 16,17 20,22"/>
    <line x1="11" y1="26" x2="21" y2="26"/>
  </svg>
);

// ═══════════════════════════════════════════
// SHARED COMPONENTS
// ═══════════════════════════════════════════
const Gold = ({ children }) => (
  <span style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 700, fontSize: "1.15em", color: "#b8892a" }}>{children}</span>
);

const SectionHeader = ({ kicker, children, light }) => (
  <div style={{ textAlign: "center", marginBottom: 40 }}>
    {kicker && <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: light ? "#c49b2a" : "#8a9b7a", marginBottom: 10 }}>{kicker}</div>}
    <h2 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: "clamp(22px, 4vw, 30px)", color: light ? "#f4f1ea" : "#2c3528", textTransform: "uppercase", letterSpacing: "0.03em", margin: 0 }}>{children}</h2>
  </div>
);

const Button = ({ children, onClick, outline, style: s }) => (
  <button onClick={onClick} style={{
    padding: "14px 32px", borderRadius: 6, cursor: "pointer",
    fontFamily: "'Fjalla One', sans-serif", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase",
    background: outline ? "transparent" : "#2c3528", color: outline ? "#2c3528" : "#f4f1ea",
    border: outline ? "2px solid #2c3528" : "2px solid #2c3528",
    transition: "all 0.25s", ...s,
  }}
  onMouseEnter={e => { e.target.style.background = outline ? "#2c3528" : "#4a6540"; e.target.style.color = "#f4f1ea"; }}
  onMouseLeave={e => { e.target.style.background = outline ? "transparent" : "#2c3528"; e.target.style.color = outline ? "#2c3528" : "#f4f1ea"; }}
  >{children}</button>
);

const DemoBanner = () => (
  <section style={{
    background: "linear-gradient(135deg, #2c3528, #1e2a1c)",
    padding: "36px 24px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  }}>
    <div style={{
      position: "absolute", top: 0, left: "20%", right: "20%", height: 1,
      background: "linear-gradient(90deg, transparent, rgba(196,155,42,0.3), transparent)",
    }} />
    <div style={{
      position: "absolute", bottom: 0, left: "20%", right: "20%", height: 1,
      background: "linear-gradient(90deg, transparent, rgba(196,155,42,0.3), transparent)",
    }} />
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <p style={{
        fontFamily: "'Libre Baskerville', serif",
        fontSize: "clamp(16px, 3vw, 20px)",
        color: "#f4f1ea",
        lineHeight: 1.7,
        marginBottom: 6,
      }}>
        Meet <span style={{ color: "#c49b2a", fontWeight: 700, fontSize: "1.1em" }}>RHONDA</span> — AI that works like your smartest team member.
      </p>
      <p style={{
        fontSize: "clamp(13px, 2.5vw, 15px)",
        color: "#8a9b7a",
        lineHeight: 1.7,
        marginBottom: 24,
      }}>
        She auto-captures insights from your data, drafts responses in your voice, and never misses a signal. 24/7.
      </p>
      <a
        href="https://demo.treestandpartners.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "14px 36px",
          borderRadius: 6,
          background: "linear-gradient(135deg, #c49b2a, #b8892a)",
          color: "#2c3528",
          fontFamily: "'Fjalla One', sans-serif",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          textDecoration: "none",
          boxShadow: "0 4px 16px rgba(196,155,42,0.25)",
          transition: "all 0.25s",
        }}
        onMouseEnter={e => { e.target.style.boxShadow = "0 6px 24px rgba(196,155,42,0.4)"; e.target.style.transform = "translateY(-1px)"; }}
        onMouseLeave={e => { e.target.style.boxShadow = "0 4px 16px rgba(196,155,42,0.25)"; e.target.style.transform = "translateY(0)"; }}
      >
        Try RHONDA Free →
      </a>
      <p style={{ fontSize: 11, color: "#5c6854", marginTop: 14 }}>
        No signup. No credit card. Just click and try.
      </p>
    </div>
  </section>
);

const Footer = ({ navigate }) => (
  <footer style={{ background: "#2c3528", padding: "40px 24px", textAlign: "center" }}>
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <TreeIcon size={20} color="#8a9b7a" />
        <span style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 16, color: "#8a9b7a", textTransform: "uppercase", letterSpacing: "0.06em" }}>Tree Stand Partners</span>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", marginBottom: 16 }}>
        {["Home", "Services", "About", "Contact"].map(p => (
          <a key={p} onClick={() => navigate(p.toLowerCase())} style={{ fontSize: 12, color: "#6b7e6a", cursor: "pointer", textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600 }}
            onMouseEnter={e => e.target.style.color = "#c49b2a"} onMouseLeave={e => e.target.style.color = "#6b7e6a"}
          >{p}</a>
        ))}
      </div>
      <div style={{ fontSize: 12, color: "#5c6854", marginBottom: 6 }}>{PHONE} · {EMAIL}</div>
      <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 12 }}>
        <a onClick={() => navigate("privacy-policy")} style={{ fontSize: 11, color: "#5c6854", cursor: "pointer", textDecoration: "none", letterSpacing: "0.04em" }}
          onMouseEnter={e => e.target.style.color = "#c49b2a"} onMouseLeave={e => e.target.style.color = "#5c6854"}
        >Privacy Policy</a>
        <span style={{ color: "#3a4a35" }}>·</span>
        <a onClick={() => navigate("terms")} style={{ fontSize: 11, color: "#5c6854", cursor: "pointer", textDecoration: "none", letterSpacing: "0.04em" }}
          onMouseEnter={e => e.target.style.color = "#c49b2a"} onMouseLeave={e => e.target.style.color = "#5c6854"}
        >Terms & Conditions</a>
      </div>
      <div style={{ height: 1, background: "#3a4a35", margin: "16px auto", maxWidth: 200 }} />
      <div style={{ fontSize: 10, color: "#4a5a44", letterSpacing: "0.08em" }}>
        © 2026 Tree Stand Partners · North Alabama · <span style={{ color: "#8a7a3a" }}>See Farther From 20 Feet Up</span>
      </div>
    </div>
  </footer>
);

const Nav = ({ page, navigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav style={{ background: "#2c3528", padding: "0 24px", position: "sticky", top: 0, zIndex: 100, borderBottom: "3px solid #c49b2a44" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: 96 }}>
        <div onClick={() => navigate("home")} style={{ display: "flex", alignItems: "center", gap: 16, cursor: "pointer" }}>
          <div style={{
            width: 68, height: 68,
            border: "2.5px solid #5c6854",
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative",
          }}>
            <div style={{
              position: "absolute", inset: 4,
              border: "1px solid rgba(196,155,42,0.25)",
              borderRadius: "50%",
            }} />
            <TreeIcon size={34} />
          </div>
          <div>
            <div style={{
              fontFamily: "'Fjalla One', sans-serif",
              fontSize: 29,
              color: "#f4f1ea",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              lineHeight: 1,
            }}>Tree Stand Partners</div>
            <div style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: 14,
              fontStyle: "italic",
              color: "#c49b2a",
              letterSpacing: "0.06em",
              marginTop: 5,
            }}>See Farther From 20 Feet Up</div>
          </div>
        </div>
        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {["Home", "Services", "About", "Contact"].map(p => (
            <a key={p} onClick={() => navigate(p.toLowerCase())} style={{
              fontSize: 12, fontFamily: "'Fjalla One', sans-serif", color: page === p.toLowerCase() ? "#c49b2a" : "#8a9b7a",
              cursor: "pointer", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.1em",
              transition: "color 0.2s", borderBottom: page === p.toLowerCase() ? "2px solid #c49b2a" : "2px solid transparent", paddingBottom: 2,
            }}
            onMouseEnter={e => e.target.style.color = "#c49b2a"} onMouseLeave={e => { if (page !== p.toLowerCase()) e.target.style.color = "#8a9b7a"; }}
            >{p}</a>
          ))}
          <button onClick={() => navigate("contact")} style={{
            padding: "9px 20px", background: "transparent", border: "1.5px solid #c49b2a", borderRadius: 4,
            fontFamily: "'Fjalla One', sans-serif", fontSize: 11, color: "#c49b2a", cursor: "pointer",
            letterSpacing: "0.1em", textTransform: "uppercase", transition: "all 0.2s",
          }}
          onMouseEnter={e => { e.target.style.background = "#c49b2a"; e.target.style.color = "#2c3528"; }}
          onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#c49b2a"; }}
          >Book Now</button>
        </div>
      </div>
    </nav>
  );
};

// ═══════════════════════════════════════════
// HOME PAGE
// ═══════════════════════════════════════════
const HomePage = ({ navigate }) => (
  <div>
    {/* Hero */}
    <section style={{ background: "linear-gradient(170deg, #2c3528, #1e2a1c)", padding: "clamp(50px,8vw,80px) 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: "30%", right: "30%", height: 2, background: "linear-gradient(90deg, transparent, #c49b2a44, transparent)" }} />
      <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
        <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#c49b2a", marginBottom: 16 }}>AI Business Intelligence For Small Business</div>
        <h1 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: "clamp(28px, 5vw, 40px)", color: "#f4f1ea", textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 1.2, marginBottom: 20 }}>
          Your Business Deserves a Better <span style={{ color: "#c49b2a" }}>Vantage Point</span>
        </h1>
        <p style={{ fontSize: "clamp(14px, 2.5vw, 16px)", color: "#b0bca0", lineHeight: 1.8, marginBottom: 8 }}>
          <Gold>RHONDA</Gold> runs the office. <Gold>LEO</Gold> runs the business. <Gold>VERA</Gold> runs the CEO. Three AI systems that auto-capture the signals buried in your emails, spreadsheets, and daily operations — then surface what actually needs your attention.
        </p>
        <p style={{ fontSize: "clamp(14px, 2.5vw, 16px)", color: "#b0bca0", lineHeight: 1.8, marginBottom: 32 }}>
          Stop doing the work you <strong style={{ color: "#f4f1ea" }}>HATE</strong> — let AI handle it while you focus on growing your business.
        </p>
        <Button onClick={() => navigate("contact")}>Book Your Free Consultation</Button>
      </div>
    </section>

    {/* Metrics */}
    <section style={{ background: "#f4f1ea", padding: "32px 24px", borderBottom: "1px solid #d6d1c4" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, textAlign: "center" }}>
        {[{ val: "8–10", label: "Hours Saved Weekly" }, { val: "30s", label: "Average Task Time" }, { val: "24/7", label: "Always On" }].map((m, i) => (
          <div key={i}>
            <div style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: "clamp(26px, 4vw, 34px)", color: "#c49b2a" }}>{m.val}</div>
            <div style={{ fontSize: 9, fontWeight: 700, color: "#8a9b7a", textTransform: "uppercase", letterSpacing: "0.12em", marginTop: 4 }}>{m.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Demo Banner - Top */}
    <DemoBanner />

    {/* What Your Team Gets */}
    <section style={{ background: "#f4f1ea", padding: "60px 24px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <SectionHeader kicker="Included With Every Dashboard">What Your Team Gets</SectionHeader>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {[
            { icon: "📈", name: "LEO — Chief of Staff", desc: "Live business intelligence — pipeline, revenue, trends, and morning briefs" },
            { icon: "📱", name: "VERA — Executive Assistant", desc: "SMS-first personal assistant for the CEO — calendar, email triage, and daily briefs" },
            { icon: "✉️", name: "Emails", desc: "Professional emails in your voice, written in seconds" },
            { icon: "📊", name: "Data & Reports", desc: "Organize jobs, invoices, and customer records" },
            { icon: "📄", name: "Documents", desc: "Contracts and specs summarized in plain English" },
            { icon: "💬", name: "Customer Replies", desc: "Professional responses to any situation" },
            { icon: "📅", name: "Calendar", desc: "Manage your schedule and book jobs" },
            { icon: "🔧", name: "Custom Tools", desc: "Built specifically for how your business works" },
          ].map((t, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #d6d1c4", borderRadius: 10, padding: "22px 20px", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
              <div style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 14, color: "#2c3528", textTransform: "uppercase", marginBottom: 6 }}>{t.name}</div>
              <div style={{ fontSize: 12, color: "#6b705c", lineHeight: 1.6 }}>{t.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section style={{ background: "#ffffff", padding: "60px 24px", borderTop: "1px solid #e8e4da", borderBottom: "1px solid #e8e4da" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <SectionHeader kicker="Three Steps to a Smarter Business">How It Works</SectionHeader>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 30 }}>
          {[
            { num: "01", name: "We Learn Your Business", desc: "A short discovery call so we understand your team, your tone, and your daily operations. No tech jargon — just a conversation." },
            { num: "02", name: "We Build Your Dashboard", desc: "We create a custom AI tool branded to your company and connected to the tools you already use — Gmail, Google Drive, Calendar, all of it." },
            { num: "03", name: "Your Team Gets to Work", desc: "Open it up, type what you need, and get results in seconds. Draft an email, organize a spreadsheet, summarize a contract — RHONDA's got it." },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center", padding: "0 10px" }}>
              <div style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 32, fontWeight: 700, color: "#c49b2a", marginBottom: 10 }}>{s.num}</div>
              <div style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 14, color: "#2c3528", textTransform: "uppercase", marginBottom: 8 }}>{s.name}</div>
              <div style={{ fontSize: 13, color: "#6b705c", lineHeight: 1.7 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA - Pricing removed, direct to consultation */}
    <section style={{ background: "#f4f1ea", padding: "60px 24px" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <SectionHeader kicker="Tailored To Your Business">Custom Solutions, Custom Pricing</SectionHeader>
        <p style={{ fontSize: 15, color: "#5a6352", lineHeight: 1.9, marginBottom: 28 }}>
          Every business is different — so every solution we build is different. Book a free 15-minute call and we'll put together a package that fits your team, your tools, and your budget.
        </p>
        <Button onClick={() => navigate("contact")}>Book Your Free Consultation</Button>
      </div>
    </section>

    {/* Trust Banner */}
    <section style={{ background: "#ffffff", padding: "36px 24px", borderTop: "1px solid #e8e4da", borderBottom: "1px solid #e8e4da" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: "#f4f1ea", border: "1px solid #d6d1c4",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2c3528" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
        </div>
        <p style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          color: "#2c3528",
          lineHeight: 1.8,
        }}>
          Your data stays yours. <span style={{ color: "#c49b2a", fontWeight: 700 }}>RHONDA</span>, <span style={{ color: "#c49b2a", fontWeight: 700 }}>LEO</span>, and <span style={{ color: "#c49b2a", fontWeight: 700 }}>VERA</span> work inside your existing accounts. We never store, sell, or share your business or personal information. <strong>Period.</strong>
        </p>
      </div>
    </section>

    {/* CTA */}
    <section style={{ background: "linear-gradient(135deg, #2c3528, #1e2a1c)", padding: "50px 24px", textAlign: "center", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: "25%", right: "25%", height: 2, background: "linear-gradient(90deg, transparent, #c49b2a, transparent)" }} />
      <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(20px, 3.5vw, 26px)", color: "#f4f1ea", fontWeight: 700, marginBottom: 10 }}>Ready to see farther?</h2>
      <p style={{ fontSize: 14, color: "#8a9b7a", marginBottom: 24 }}>Free 15-minute consultation. No pressure — just a conversation about what RHONDA, LEO, and VERA can do for your business.</p>
      <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginBottom: 20 }}>
        <Button onClick={() => navigate("contact")}>Schedule Your Call</Button>
        <a
          href="https://demo.treestandpartners.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block", padding: "14px 32px", borderRadius: 6,
            background: "linear-gradient(135deg, #c49b2a, #b8892a)",
            color: "#2c3528", fontFamily: "'Fjalla One', sans-serif",
            fontSize: 13, fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", textDecoration: "none",
            transition: "all 0.25s",
          }}
          onMouseEnter={e => { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = "0 6px 20px rgba(196,155,42,0.35)"; }}
          onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}
        >Try RHONDA Free →</a>
      </div>
      <div style={{ fontSize: 13, color: "#6b7e6a" }}>{PHONE}</div>
      <div style={{ fontSize: 12, color: "#5c6854" }}>{EMAIL}</div>
    </section>
  </div>
);

// ═══════════════════════════════════════════
// SERVICES PAGE
// ═══════════════════════════════════════════
const ServicesPage = ({ navigate }) => (
  <div>
    <section style={{ background: "linear-gradient(170deg, #2c3528, #1e2a1c)", padding: "60px 24px", textAlign: "center" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: "clamp(26px, 5vw, 36px)", color: "#f4f1ea", textTransform: "uppercase", marginBottom: 12 }}>What We Build For You</h1>
        <p style={{ fontSize: 15, color: "#8a9b7a", lineHeight: 1.7 }}>Custom AI tools that work the way your business works — not the other way around.</p>
      </div>
    </section>

    <section style={{ background: "#f4f1ea", padding: "60px 24px" }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <SectionHeader>Sound Familiar?</SectionHeader>
        <div style={{ fontSize: 15, color: "#5a6352", lineHeight: 1.9, textAlign: "center" }}>
          <p>Your office manager spends two hours a day writing emails. Your job data lives in three different spreadsheets that nobody updates. A customer sends a complaint and it takes 45 minutes to draft a professional response. You sign a vendor contract without fully reading it because who has time.</p>
          <p style={{ marginTop: 16 }}>These aren't big problems on their own. But they add up to <strong style={{ color: "#2c3528" }}>8–10 hours a week</strong> of work that doesn't grow your business.</p>
        </div>
      </div>
    </section>

    <section style={{ background: "#ffffff", padding: "60px 24px" }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <SectionHeader>Meet the Team</SectionHeader>
        <div style={{ fontSize: 15, color: "#5a6352", lineHeight: 1.9, textAlign: "center" }}>
          <p><Gold>RHONDA</Gold> is your AI-powered staff tool — she lives inside a custom dashboard branded to your company and handles the daily work: emails, data, documents, customer replies, scheduling.</p>
          <p style={{ marginTop: 16 }}><Gold>LEO</Gold> is your AI Chief of Staff — executive intelligence that reads your emails overnight, classifies what matters, and delivers a morning brief before you pour your coffee. Pipeline tracking, revenue trends, relationship monitoring — all automatic.</p>
          <p style={{ marginTop: 16 }}><Gold>VERA</Gold> is your personal executive assistant — SMS-first, she texts you what matters today, manages your calendar across every device, filters your inbox, and knows the whole person: family commitments, travel preferences, VIP contacts. She works like a $3,000/month EA for a fraction of the cost.</p>
        </div>
      </div>
    </section>

    <section style={{ background: "#f4f1ea", padding: "60px 24px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <SectionHeader kicker="Everything In Your Dashboard">What's Included</SectionHeader>
        {[
          { icon: "✉️", name: "Email Drafting", desc: "Tell RHONDA who you're writing to and what you need to say. She drafts a professional email in your company's voice in about 30 seconds. Follow-ups, quotes, thank-you's, responses to complaints — she handles all of it." },
          { icon: "📊", name: "Data & Reports", desc: "Paste in your job data, customer list, or invoice records and RHONDA organizes it into clean, sortable formats. She'll spot patterns too — like which job type brings in the most revenue or which month is your busiest." },
          { icon: "📄", name: "Document Summaries", desc: "Upload a contract, vendor agreement, or spec sheet and RHONDA gives you a plain-English summary with the key dates, dollar amounts, and anything you should flag for your lawyer." },
          { icon: "💬", name: "Customer Communication", desc: "Paste in a customer's message and RHONDA helps you draft the perfect response — professional, solution-oriented, and on-brand. Even for the difficult ones." },
          { icon: "📅", name: "Calendar & Scheduling", desc: "RHONDA checks your schedule, finds open slots, and helps you book jobs, meetings, and follow-ups without the back-and-forth." },
          { icon: "🔧", name: "Custom Tools", desc: "Every business is different. If you need something specific — a quote generator, a job intake form, a vendor comparison tool — we build it into your dashboard." },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start", padding: "24px 0", borderBottom: i < 5 ? "1px solid #d6d1c4" : "none" }}>
            <div style={{ fontSize: 28, flexShrink: 0, width: 50, textAlign: "center", paddingTop: 4 }}>{item.icon}</div>
            <div>
              <div style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 16, color: "#2c3528", textTransform: "uppercase", marginBottom: 6 }}>{item.name}</div>
              <div style={{ fontSize: 13, color: "#6b705c", lineHeight: 1.7 }}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section style={{ background: "#ffffff", padding: "60px 24px" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <SectionHeader kicker="From Discovery to Launch">How Onboarding Works</SectionHeader>
        {[
          { week: "Week 1", name: "Discovery", desc: "We hop on a call and learn how your business runs. What tools do you use? How do you communicate with customers? What tasks eat up the most time? This is a conversation, not a tech demo." },
          { week: "Week 2", name: "Build", desc: "We build your custom dashboard, write the AI instructions that make RHONDA sound like your company, connect your Google Workspace or Microsoft 365, and test everything." },
          { week: "Week 3", name: "Launch", desc: "Your team gets a training walkthrough. We show everyone how to use the dashboard and answer questions. Then RHONDA goes to work." },
          { week: "Weeks 4–8", name: "Tune", desc: "We monitor how your team uses RHONDA and fine-tune the AI based on real usage. If she's getting something wrong, we fix it. If your team wants a new feature, we add it." },
        ].map((s, i) => (
          <div key={i} style={{ display: "flex", gap: 20, marginBottom: 28 }}>
            <div style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 12, fontWeight: 700, color: "#c49b2a", minWidth: 70, paddingTop: 2 }}>{s.week}</div>
            <div>
              <div style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 15, color: "#2c3528", textTransform: "uppercase", marginBottom: 4 }}>{s.name}</div>
              <div style={{ fontSize: 13, color: "#6b705c", lineHeight: 1.7 }}>{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section style={{ background: "linear-gradient(135deg, #2c3528, #1e2a1c)", padding: "50px 24px", textAlign: "center" }}>
      <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 22, color: "#f4f1ea", fontWeight: 700, marginBottom: 10 }}>Let's talk about your business</h2>
      <p style={{ fontSize: 14, color: "#8a9b7a", marginBottom: 24 }}>Every company is different. Book a free call and we'll figure out exactly how RHONDA, LEO, and VERA can help yours.</p>
      <Button onClick={() => navigate("contact")}>Book Your Free Consultation</Button>
    </section>
  </div>
);

// ═══════════════════════════════════════════
// ABOUT PAGE
// ═══════════════════════════════════════════
const AboutPage = ({ navigate }) => (
  <div>
    <section style={{ background: "linear-gradient(170deg, #2c3528, #1e2a1c)", padding: "60px 24px", textAlign: "center" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <div style={{ fontFamily: "'Libre Baskerville', serif", fontStyle: "italic", fontSize: 13, color: "#c49b2a", marginBottom: 14 }}>See Farther From 20 Feet Up</div>
        <h1 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: "clamp(26px, 5vw, 36px)", color: "#f4f1ea", textTransform: "uppercase", marginBottom: 12 }}>Why Tree Stand Partners?</h1>
        <p style={{ fontSize: 15, color: "#8a9b7a", lineHeight: 1.7 }}>That's not just a tagline. It's how we think about your business.</p>
      </div>
    </section>

    <section style={{ background: "#f4f1ea", padding: "60px 24px" }}>
      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 15, color: "#5a6352", lineHeight: 2 }}>
          <p>If you've ever sat in a tree stand at dawn, you know the feeling. You're 20 feet up, the world is quiet, and suddenly you can see everything — trails you didn't know existed, movement you would have missed from the ground, the whole landscape laid out in front of you.</p>
          <p style={{ marginTop: 20 }}>That's what we do for businesses. We give you <strong style={{ color: "#2c3528" }}>elevation</strong>. A better view of your operations, your customers, and your time. We use AI tools to handle the ground-level work — the emails, the data entry, the paperwork — so you can focus on the big picture.</p>
          <p style={{ marginTop: 20 }}>We're not a tech company that happens to work with businesses. We're a <strong style={{ color: "#2c3528" }}>business intelligence partner</strong> that happens to use AI. There's a difference.</p>
        </div>
      </div>
    </section>

    <section style={{ background: "#ffffff", padding: "60px 24px" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <SectionHeader>Built in North Alabama, For North Alabama</SectionHeader>
        <p style={{ fontSize: 15, color: "#5a6352", lineHeight: 1.9, textAlign: "center", marginBottom: 40 }}>Tree Stand Partners is a North Alabama company serving local businesses. We understand the trades. We understand small business. We understand that technology is only useful if it actually saves you time and doesn't require a computer science degree to operate.</p>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
          {[
            { name: "We Speak Your Language", desc: "We don't talk in tech buzzwords. We talk in terms you care about — time saved, customers served, and money in the bank." },
            { name: "We Build For You, Not Everyone", desc: "Every dashboard we create is custom. Your company name, your tone of voice, your workflows. RHONDA works for YOU." },
            { name: "We Earn Our Keep", desc: "You're not locked into a contract. If RHONDA isn't saving you time and money, you can walk away. We stay because we deliver." },
          ].map((v, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #d6d1c4", borderRadius: 10, padding: "24px 22px", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
              <div style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 14, color: "#2c3528", textTransform: "uppercase", marginBottom: 10 }}>{v.name}</div>
              <div style={{ fontSize: 12, color: "#6b705c", lineHeight: 1.7 }}>{v.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section style={{ background: "linear-gradient(135deg, #2c3528, #1e2a1c)", padding: "50px 24px", textAlign: "center" }}>
      <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 22, color: "#f4f1ea", fontWeight: 700, marginBottom: 10 }}>Ready to get a better view?</h2>
      <p style={{ fontSize: 14, color: "#8a9b7a", marginBottom: 24 }}>Let's have a conversation about your business.</p>
      <Button onClick={() => navigate("contact")}>Let's Talk</Button>
    </section>
  </div>
);

// ═══════════════════════════════════════════
// CONTACT PAGE
// ═══════════════════════════════════════════
const ContactPage = ({ navigate }) => {
  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError("Something went wrong. Please call or email us directly.");
      }
    } catch {
      setError("Something went wrong. Please call or email us directly.");
    }
    setLoading(false);
  };

  return (
    <div>
      <section style={{ background: "linear-gradient(170deg, #2c3528, #1e2a1c)", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: "clamp(26px, 5vw, 36px)", color: "#f4f1ea", textTransform: "uppercase", marginBottom: 12 }}>Let's Have a Conversation</h1>
        <p style={{ fontSize: 15, color: "#8a9b7a" }}>No pitch, no pressure. Just 15 minutes to see if our AI tools are a good fit for your business.</p>
      </section>

      <section style={{ background: "#f4f1ea", padding: "60px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40 }}>
          {/* Form */}
          <div>
            <h3 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 20 }}>Send Us a Message</h3>
            {!sent ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { key: "name", label: "Name", placeholder: "Your name" },
                  { key: "business", label: "Business Name", placeholder: "Your company" },
                  { key: "email", label: "Email", placeholder: "you@yourbusiness.com" },
                  { key: "phone", label: "Phone", placeholder: "(256) 555-0000" },
                ].map(f => (
                  <div key={f.key}>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#6b705c", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 5 }}>{f.label}</label>
                    <input value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })} placeholder={f.placeholder}
                      style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #d6d1c4", borderRadius: 6, fontSize: 14, fontFamily: "'Work Sans', sans-serif", color: "#2c3528", background: "#fff", outline: "none", boxSizing: "border-box" }}
                      onFocus={e => e.target.style.borderColor = "#4a6540"} onBlur={e => e.target.style.borderColor = "#d6d1c4"}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#6b705c", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 5 }}>Message</label>
                  <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={4}
                    placeholder="Tell us a little about your business and what's eating up your time..."
                    style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #d6d1c4", borderRadius: 6, fontSize: 14, fontFamily: "'Work Sans', sans-serif", color: "#2c3528", background: "#fff", outline: "none", resize: "vertical", boxSizing: "border-box" }}
                    onFocus={e => e.target.style.borderColor = "#4a6540"} onBlur={e => e.target.style.borderColor = "#d6d1c4"}
                  />
                </div>
                {error && <div style={{ fontSize: 12, color: "#C53030", padding: "8px 12px", background: "rgba(197,48,48,0.08)", borderRadius: 6 }}>{error}</div>}
                <Button onClick={handleSubmit} style={{ alignSelf: "flex-start", opacity: loading ? 0.6 : 1 }}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            ) : (
              <div style={{ background: "#fff", border: "1.5px solid #4a6540", borderRadius: 10, padding: "30px", textAlign: "center" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>🌲</div>
                <div style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 8 }}>Message Sent!</div>
                <div style={{ fontSize: 13, color: "#6b705c", lineHeight: 1.7 }}>Thanks for reaching out. We'll get back to you within 24 hours — usually much sooner. Looking forward to the conversation.</div>
              </div>
            )}
          </div>

          {/* Direct Contact */}
          <div>
            <h3 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 20 }}>Reach Us Directly</h3>
            
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#8a9b7a", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Call Us</div>
              <div style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 22, color: "#2c3528" }}>{PHONE}</div>
            </div>

            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#8a9b7a", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Email Us</div>
              <div style={{ fontSize: 15, color: "#2c3528" }}>{EMAIL}</div>
            </div>

            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#8a9b7a", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Hours</div>
              <div style={{ fontSize: 14, color: "#2c3528" }}>Monday – Friday, 8am – 5pm CST</div>
              <div style={{ fontSize: 12, color: "#c49b2a", fontStyle: "italic", marginTop: 4 }}>(RHONDA works 24/7)</div>
            </div>

            <div style={{ height: 1, background: "#d6d1c4", margin: "28px 0" }} />

            <h3 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 15, color: "#2c3528", textTransform: "uppercase", marginBottom: 16 }}>Common Questions</h3>
            {[
              { q: "How much does it cost?", a: "Every solution is custom — we'll walk through pricing on our first call. No contracts." },
              { q: "Do I need to be tech-savvy?", a: "Not at all. If you can type a sentence, you can use RHONDA." },
              { q: "How long does setup take?", a: "Most businesses are up and running within 2 weeks." },
              { q: "Can my whole team use it?", a: "Yes. One monthly price covers your whole company — no per-user fees." },
              { q: "What if I don't like it?", a: "No contracts. Cancel your retainer anytime. We'll even help you transition." },
            ].map((faq, i) => (
              <div key={i} style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#2c3528", marginBottom: 3 }}>{faq.q}</div>
                <div style={{ fontSize: 12, color: "#6b705c", lineHeight: 1.6 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// ═══════════════════════════════════════════
// PRIVACY POLICY PAGE
// ═══════════════════════════════════════════
const PrivacyPolicyPage = ({ navigate }) => (
  <div>
    <section style={{ background: "linear-gradient(170deg, #2c3528, #1e2a1c)", padding: "60px 24px", textAlign: "center" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: "clamp(26px, 5vw, 36px)", color: "#f4f1ea", textTransform: "uppercase", marginBottom: 12 }}>Privacy Policy</h1>
        <p style={{ fontSize: 15, color: "#8a9b7a" }}>Last updated: March 18, 2026</p>
      </div>
    </section>

    <section style={{ background: "#f4f1ea", padding: "60px 24px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", fontSize: 14, color: "#5a6352", lineHeight: 1.9 }}>

        <h3 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 12, marginTop: 0 }}>Introduction</h3>
        <p style={{ marginBottom: 24 }}>
          Tree Stand Partners (operated by Atreides, LLC, "we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, AI-powered business intelligence services (RHONDA, LEO, and VERA), and related communications including SMS notifications.
        </p>
        <p style={{ marginBottom: 24 }}>
          By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree, please discontinue use of our services.
        </p>

        <h3 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 12, marginTop: 32 }}>Information We Collect</h3>
        <p style={{ marginBottom: 12 }}>We may collect the following personal information that you voluntarily provide to us:</p>
        <ul style={{ marginBottom: 24, paddingLeft: 24 }}>
          <li style={{ marginBottom: 6 }}><strong style={{ color: "#2c3528" }}>Name</strong> — to identify you and personalize our services</li>
          <li style={{ marginBottom: 6 }}><strong style={{ color: "#2c3528" }}>Email address</strong> — to communicate with you about our services</li>
          <li style={{ marginBottom: 6 }}><strong style={{ color: "#2c3528" }}>Phone number</strong> — to provide SMS notifications and support</li>
          <li style={{ marginBottom: 6 }}><strong style={{ color: "#2c3528" }}>Business name and information</strong> — to customize your AI tools</li>
          <li style={{ marginBottom: 6 }}><strong style={{ color: "#2c3528" }}>Messages and content</strong> — information you provide through our contact form or services</li>
        </ul>

        <h3 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 12, marginTop: 32 }}>How We Use Your Information</h3>
        <p style={{ marginBottom: 12 }}>We use the information we collect to:</p>
        <ul style={{ marginBottom: 24, paddingLeft: 24 }}>
          <li style={{ marginBottom: 6 }}>Provide, operate, and maintain our AI business intelligence services (RHONDA, LEO, and VERA)</li>
          <li style={{ marginBottom: 6 }}>Send SMS notifications and alerts related to your business operations</li>
          <li style={{ marginBottom: 6 }}>Respond to your inquiries and provide customer support</li>
          <li style={{ marginBottom: 6 }}>Customize and improve our services for your business</li>
          <li style={{ marginBottom: 6 }}>Communicate with you about updates, features, and service-related matters</li>
        </ul>

        <h3 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 12, marginTop: 32 }}>SMS Communications</h3>
        <p style={{ marginBottom: 12 }}>By providing your phone number and opting in to our SMS services, you consent to receive text messages from Tree Stand Partners related to our AI business intelligence services. Please note:</p>
        <ul style={{ marginBottom: 24, paddingLeft: 24 }}>
          <li style={{ marginBottom: 6 }}>Message frequency varies based on your service configuration and business activity</li>
          <li style={{ marginBottom: 6 }}><strong style={{ color: "#2c3528" }}>Message and data rates may apply</strong> — standard messaging fees from your wireless carrier may be charged</li>
          <li style={{ marginBottom: 6 }}>To opt out of SMS messages at any time, reply <strong style={{ color: "#2c3528" }}>STOP</strong> to any message from us</li>
          <li style={{ marginBottom: 6 }}>For help, reply <strong style={{ color: "#2c3528" }}>HELP</strong> or contact us at jefferdr@gmail.com</li>
          <li style={{ marginBottom: 6 }}>SMS consent is not a condition of purchase — you can use our services without opting in to text messages</li>
          <li style={{ marginBottom: 6 }}>We do not share your phone number or SMS consent with third parties for their marketing purposes</li>
        </ul>

        <h3 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 12, marginTop: 32 }}>We Do Not Sell Your Data</h3>
        <p style={{ marginBottom: 24 }}>
          We do not sell, rent, or trade your personal information to third parties. Period. Your business data stays yours.
        </p>

        <h3 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 12, marginTop: 32 }}>Third-Party Services</h3>
        <p style={{ marginBottom: 12 }}>We use the following third-party services to operate and deliver our products:</p>
        <ul style={{ marginBottom: 24, paddingLeft: 24 }}>
          <li style={{ marginBottom: 6 }}><strong style={{ color: "#2c3528" }}>Twilio</strong> — for delivering SMS notifications and messages</li>
          <li style={{ marginBottom: 6 }}><strong style={{ color: "#2c3528" }}>Vercel</strong> — for website and application hosting</li>
          <li style={{ marginBottom: 6 }}><strong style={{ color: "#2c3528" }}>Supabase</strong> — for secure data storage</li>
          <li style={{ marginBottom: 6 }}><strong style={{ color: "#2c3528" }}>Google Workspace APIs</strong> — to integrate with your existing business tools (only with your authorization)</li>
        </ul>
        <p style={{ marginBottom: 24 }}>
          These providers have their own privacy policies governing the data they process. We only share the minimum information necessary for them to perform their services.
        </p>

        <h3 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 12, marginTop: 32 }}>Cookies</h3>
        <p style={{ marginBottom: 24 }}>
          Our website may use cookies and similar tracking technologies to improve your browsing experience. Cookies are small data files stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our site may not function properly without cookies.
        </p>

        <h3 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 12, marginTop: 32 }}>Data Retention</h3>
        <p style={{ marginBottom: 24 }}>
          We retain your personal information only for as long as necessary to fulfill the purposes described in this policy, or as required by law. When your data is no longer needed, we will securely delete or anonymize it. If you cancel your service, we will delete your business data within 30 days unless you request otherwise.
        </p>

        <h3 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 12, marginTop: 32 }}>Your Rights</h3>
        <p style={{ marginBottom: 12 }}>You have the right to:</p>
        <ul style={{ marginBottom: 24, paddingLeft: 24 }}>
          <li style={{ marginBottom: 6 }}>Request access to the personal information we hold about you</li>
          <li style={{ marginBottom: 6 }}>Request correction of inaccurate information</li>
          <li style={{ marginBottom: 6 }}>Request deletion of your personal information</li>
          <li style={{ marginBottom: 6 }}>Opt out of SMS communications at any time by replying STOP</li>
          <li style={{ marginBottom: 6 }}>Withdraw consent for data processing where applicable</li>
        </ul>
        <p style={{ marginBottom: 24 }}>
          To exercise any of these rights, please contact us at jefferdr@gmail.com.
        </p>

        <h3 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 12, marginTop: 32 }}>Changes to This Policy</h3>
        <p style={{ marginBottom: 24 }}>
          We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. We encourage you to review this policy periodically.
        </p>

        <h3 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 12, marginTop: 32 }}>Contact Us</h3>
        <p style={{ marginBottom: 8 }}>If you have any questions about this Privacy Policy, please contact us:</p>
        <p style={{ marginBottom: 4 }}><strong style={{ color: "#2c3528" }}>Tree Stand Partners</strong> (operated by Atreides, LLC)</p>
        <p style={{ marginBottom: 4 }}>2127 Hickory Hills Rd, Florence, AL 35630</p>
        <p style={{ marginBottom: 4 }}>Email: jefferdr@gmail.com</p>
        <p style={{ marginBottom: 24 }}>Phone: {PHONE}</p>

      </div>
    </section>
  </div>
);

// ═══════════════════════════════════════════
// TERMS AND CONDITIONS PAGE
// ═══════════════════════════════════════════
const TermsPage = ({ navigate }) => (
  <div>
    <section style={{ background: "linear-gradient(170deg, #2c3528, #1e2a1c)", padding: "60px 24px", textAlign: "center" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: "clamp(26px, 5vw, 36px)", color: "#f4f1ea", textTransform: "uppercase", marginBottom: 12 }}>Terms and Conditions</h1>
        <p style={{ fontSize: 15, color: "#8a9b7a" }}>Last updated: March 18, 2026</p>
      </div>
    </section>

    <section style={{ background: "#f4f1ea", padding: "60px 24px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", fontSize: 14, color: "#5a6352", lineHeight: 1.9 }}>

        <h3 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 12, marginTop: 0 }}>Acceptance of Terms</h3>
        <p style={{ marginBottom: 24 }}>
          By accessing or using the services provided by Tree Stand Partners (operated by Atreides, LLC, "we," "us," or "our"), including our website, AI-powered business tools, and SMS communications, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
        </p>

        <h3 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 12, marginTop: 32 }}>Description of Services</h3>
        <p style={{ marginBottom: 12 }}>
          Tree Stand Partners provides AI-powered business intelligence tools designed for small businesses. Our services include:
        </p>
        <ul style={{ marginBottom: 24, paddingLeft: 24 }}>
          <li style={{ marginBottom: 6 }}><strong style={{ color: "#2c3528" }}>RHONDA</strong> — an AI-powered staff tool that handles daily business operations including email drafting, data organization, document summaries, customer communication, and scheduling</li>
          <li style={{ marginBottom: 6 }}><strong style={{ color: "#2c3528" }}>LEO</strong> — an AI Chief of Staff providing executive intelligence, morning briefs, pipeline tracking, and revenue monitoring</li>
          <li style={{ marginBottom: 6 }}><strong style={{ color: "#2c3528" }}>VERA</strong> — an AI executive assistant providing SMS-based personal assistance including calendar management, inbox filtering, and daily briefings</li>
        </ul>
        <p style={{ marginBottom: 24 }}>
          All services are customized to each client's specific business needs and delivered on a service engagement basis.
        </p>

        <h3 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 12, marginTop: 32 }}>SMS Terms and Conditions</h3>
        <p style={{ marginBottom: 12 }}>
          By opting in to receive SMS messages from Tree Stand Partners, you agree to the following:
        </p>
        <ul style={{ marginBottom: 24, paddingLeft: 24 }}>
          <li style={{ marginBottom: 6 }}>You consent to receive text messages related to your business operations, alerts, and service communications</li>
          <li style={{ marginBottom: 6 }}>Message frequency varies based on your service configuration and business activity</li>
          <li style={{ marginBottom: 6 }}><strong style={{ color: "#2c3528" }}>Message and data rates may apply</strong> — contact your wireless carrier for details about your messaging plan</li>
          <li style={{ marginBottom: 6 }}>To opt out at any time, reply <strong style={{ color: "#2c3528" }}>STOP</strong> to any message. You will receive a confirmation message and no further texts will be sent</li>
          <li style={{ marginBottom: 6 }}>For support, reply <strong style={{ color: "#2c3528" }}>HELP</strong> to any message, or contact us at jefferdr@gmail.com or {PHONE}</li>
          <li style={{ marginBottom: 6 }}>SMS consent is not required as a condition of purchasing any goods or services</li>
          <li style={{ marginBottom: 6 }}>Compatible carriers include but are not limited to AT&T, T-Mobile, Verizon, and Sprint. Service may not be available on all carriers</li>
          <li style={{ marginBottom: 6 }}>We are not responsible for delayed or undelivered messages due to carrier issues or device limitations</li>
        </ul>

        <h3 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 12, marginTop: 32 }}>User Responsibilities</h3>
        <p style={{ marginBottom: 12 }}>When using our services, you agree to:</p>
        <ul style={{ marginBottom: 24, paddingLeft: 24 }}>
          <li style={{ marginBottom: 6 }}>Provide accurate and complete information</li>
          <li style={{ marginBottom: 6 }}>Use the services only for lawful purposes</li>
          <li style={{ marginBottom: 6 }}>Not attempt to reverse-engineer, copy, or redistribute our AI tools</li>
          <li style={{ marginBottom: 6 }}>Keep your account credentials secure</li>
          <li style={{ marginBottom: 6 }}>Notify us promptly of any unauthorized use of your account</li>
        </ul>

        <h3 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 12, marginTop: 32 }}>Intellectual Property</h3>
        <p style={{ marginBottom: 24 }}>
          All content, features, and functionality of our services — including the RHONDA, LEO, and VERA platforms, their underlying technology, design, and branding — are owned by Tree Stand Partners (Atreides, LLC) and are protected by intellectual property laws. Your use of our services does not grant you ownership of any intellectual property rights in our tools or technology. Your business data remains your property at all times.
        </p>

        <h3 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 12, marginTop: 32 }}>Limitation of Liability</h3>
        <p style={{ marginBottom: 24 }}>
          To the fullest extent permitted by law, Tree Stand Partners (Atreides, LLC) shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services. Our AI tools provide business intelligence and assistance, but all business decisions remain your responsibility. Our total liability for any claim arising from your use of our services shall not exceed the amount you paid us in the twelve (12) months preceding the claim.
        </p>

        <h3 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 12, marginTop: 32 }}>Disclaimer of Warranties</h3>
        <p style={{ marginBottom: 24 }}>
          Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, error-free, or that AI-generated content will be accurate in all cases. While we strive for reliability, AI tools may occasionally produce incorrect or incomplete results.
        </p>

        <h3 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 12, marginTop: 32 }}>Termination</h3>
        <p style={{ marginBottom: 24 }}>
          Either party may terminate the service relationship at any time. We do not require long-term contracts. Upon termination, we will delete your business data within 30 days unless you request a copy or an extension. We reserve the right to suspend or terminate access to our services if these terms are violated.
        </p>

        <h3 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 12, marginTop: 32 }}>Governing Law</h3>
        <p style={{ marginBottom: 24 }}>
          These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Alabama, without regard to its conflict of law provisions. Any disputes arising from these terms or your use of our services shall be resolved in the courts located in Lauderdale County, Alabama.
        </p>

        <h3 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 12, marginTop: 32 }}>Changes to These Terms</h3>
        <p style={{ marginBottom: 24 }}>
          We reserve the right to modify these Terms and Conditions at any time. When we make changes, we will update the "Last updated" date at the top of this page. Continued use of our services after changes are posted constitutes acceptance of the revised terms.
        </p>

        <h3 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 12, marginTop: 32 }}>Contact Us</h3>
        <p style={{ marginBottom: 8 }}>If you have any questions about these Terms and Conditions, please contact us:</p>
        <p style={{ marginBottom: 4 }}><strong style={{ color: "#2c3528" }}>Tree Stand Partners</strong> (operated by Atreides, LLC)</p>
        <p style={{ marginBottom: 4 }}>2127 Hickory Hills Rd, Florence, AL 35630</p>
        <p style={{ marginBottom: 4 }}>Email: jefferdr@gmail.com</p>
        <p style={{ marginBottom: 24 }}>Phone: {PHONE}</p>

      </div>
    </section>
  </div>
);

// ═══════════════════════════════════════════
// APP ROOT
// ═══════════════════════════════════════════
export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (p) => {
    setPage(p);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f4f1ea" }}>
      <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Fjalla+One&family=Work+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      <Nav page={page} navigate={navigate} />
      {page === "home" && <HomePage navigate={navigate} />}
      {page === "services" && <ServicesPage navigate={navigate} />}
      {page === "about" && <AboutPage navigate={navigate} />}
      {page === "contact" && <ContactPage navigate={navigate} />}
      {page === "privacy-policy" && <PrivacyPolicyPage navigate={navigate} />}
      {page === "terms" && <TermsPage navigate={navigate} />}
      <Footer navigate={navigate} />
    </div>
  );
}
