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
        Meet <span style={{ color: "#c49b2a", fontWeight: 700, fontSize: "1.1em" }}>RHONDA</span>, your next office manager.
      </p>
      <p style={{
        fontSize: "clamp(13px, 2.5vw, 15px)",
        color: "#8a9b7a",
        lineHeight: 1.7,
        marginBottom: 24,
      }}>
        She doesn't need coffee, never calls in sick, and works for $8.33 a day.
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
        <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", color: "#c49b2a", marginBottom: 16 }}>For Small Businesses & Trade Professionals</div>
        <h1 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: "clamp(28px, 5vw, 40px)", color: "#f4f1ea", textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 1.2, marginBottom: 20 }}>
          Your Business Deserves a Better <span style={{ color: "#c49b2a" }}>Vantage Point</span>
        </h1>
        <p style={{ fontSize: "clamp(14px, 2.5vw, 16px)", color: "#b0bca0", lineHeight: 1.8, marginBottom: 8 }}>
          When you need help, just ask <Gold>RHONDA</Gold>, your new office manager. She handles the hard stuff, so you can work. She tracks jobs & invoices, writes emails like a pro, organizes your bills and receipts, summarizes contracts, tackles customer replies and anything else you dream up.
        </p>
        <p style={{ fontSize: "clamp(14px, 2.5vw, 16px)", color: "#b0bca0", lineHeight: 1.8, marginBottom: 32 }}>
          <Gold>RHONDA</Gold> will have you singing a song, instead of doing jobs you <strong style={{ color: "#f4f1ea" }}>HATE!</strong>
        </p>
        <Button onClick={() => navigate("contact")}>Book Your Free Consultation</Button>
      </div>
    </section>

    {/* Metrics */}
    <section style={{ background: "#f4f1ea", padding: "32px 24px", borderBottom: "1px solid #d6d1c4" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, textAlign: "center" }}>
        {[{ val: "8–10", label: "Hours Saved Weekly" }, { val: "30s", label: "Average Task Time" }, { val: "$8.33", label: "Per Day Investment" }].map((m, i) => (
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

    {/* Pricing */}
    <section style={{ background: "#f4f1ea", padding: "60px 24px" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <SectionHeader kicker="Simple, Honest Pricing">What It Costs</SectionHeader>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          <div style={{ background: "#fff", border: "1.5px solid #d6d1c4", borderRadius: 12, padding: "28px 26px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
            <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8a9b7a", marginBottom: 4 }}>One-Time Investment</div>
            <div style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 12 }}>Setup & Launch</div>
            <div style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 44, color: "#2c3528", lineHeight: 1, marginBottom: 4 }}>$500</div>
            <div style={{ fontSize: 12, color: "#8a9b7a", fontWeight: 600, marginBottom: 18, paddingBottom: 18, borderBottom: "1px solid #e8e4da" }}>one-time fee</div>
            {["Discovery call to learn your business", "Custom AI trained on your processes", "Branded dashboard — your name, your look", "Google or Microsoft integration", "Team training & onboarding", "30-day tuning period included"].map((f, i) => (
              <div key={i} style={{ fontSize: 12, color: "#5a6352", padding: "6px 0", paddingLeft: 20, position: "relative", lineHeight: 1.4 }}>
                <span style={{ position: "absolute", left: 0, color: "#c49b2a", fontWeight: 700 }}>▸</span>{f}
              </div>
            ))}
          </div>
          <div style={{ background: "#fff", border: "1.5px solid #4a6540", borderRadius: 12, padding: "28px 26px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)", position: "relative" }}>
            <div style={{ position: "absolute", top: -12, left: 24, background: "#2c3528", color: "#c49b2a", fontSize: 8, fontWeight: 800, letterSpacing: "0.15em", padding: "4px 14px", borderRadius: 3 }}>★ RECOMMENDED</div>
            <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8a9b7a", marginBottom: 4 }}>Monthly Retainer</div>
            <div style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 18, color: "#2c3528", textTransform: "uppercase", marginBottom: 12 }}>AI Business Dashboard</div>
            <div style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: 44, color: "#3a5a2e", lineHeight: 1, marginBottom: 4 }}>$250</div>
            <div style={{ fontSize: 12, color: "#8a9b7a", fontWeight: 600, marginBottom: 18, paddingBottom: 18, borderBottom: "1px solid #e8e4da" }}>/month</div>
            {["Unlimited AI tasks for your whole team", "Email drafting in your company's voice", "Data organization & job tracking", "Contract & document summaries", "Calendar & scheduling management", "Ongoing updates & optimization"].map((f, i) => (
              <div key={i} style={{ fontSize: 12, color: "#5a6352", padding: "6px 0", paddingLeft: 20, position: "relative", lineHeight: 1.4 }}>
                <span style={{ position: "absolute", left: 0, color: "#c49b2a", fontWeight: 700 }}>▸</span>{f}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{ background: "linear-gradient(135deg, #2c3528, #1e2a1c)", padding: "50px 24px", textAlign: "center", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: "25%", right: "25%", height: 2, background: "linear-gradient(90deg, transparent, #c49b2a, transparent)" }} />
      <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(20px, 3.5vw, 26px)", color: "#f4f1ea", fontWeight: 700, marginBottom: 10 }}>Ready to see farther?</h2>
      <p style={{ fontSize: 14, color: "#8a9b7a", marginBottom: 24 }}>Free 15-minute consultation. No pressure — just a conversation about what AI can do for your business.</p>
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
        <SectionHeader>Meet RHONDA</SectionHeader>
        <div style={{ fontSize: 15, color: "#5a6352", lineHeight: 1.9, textAlign: "center" }}>
          <p><Gold>RHONDA</Gold> is your AI-powered office manager. She lives inside a custom dashboard branded to your company, and she already knows how your business works — your tone, your services, your customers.</p>
          <p style={{ marginTop: 16 }}>She's not a generic chatbot. She's trained on YOUR business. When she writes an email, it sounds like you wrote it. When she organizes your data, she knows what a "job" means in your world. When she summarizes a contract, she flags the things that matter to your industry.</p>
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
      <p style={{ fontSize: 14, color: "#8a9b7a", marginBottom: 24 }}>Every company is different. Book a free call and we'll figure out exactly how RHONDA can help yours.</p>
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
          <p style={{ marginTop: 20 }}>We're not a tech company that happens to work with businesses. We're a <strong style={{ color: "#2c3528" }}>business partner</strong> that happens to use technology. There's a difference.</p>
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

  return (
    <div>
      <section style={{ background: "linear-gradient(170deg, #2c3528, #1e2a1c)", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Fjalla One', sans-serif", fontSize: "clamp(26px, 5vw, 36px)", color: "#f4f1ea", textTransform: "uppercase", marginBottom: 12 }}>Let's Have a Conversation</h1>
        <p style={{ fontSize: 15, color: "#8a9b7a" }}>No pitch, no pressure. Just 15 minutes to see if RHONDA's a good fit for your business.</p>
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
                <Button onClick={() => setSent(true)} style={{ alignSelf: "flex-start" }}>Send Message</Button>
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
              { q: "How much does it cost?", a: "$500 one-time setup fee plus $250/month. No contracts — cancel anytime." },
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
      <Footer navigate={navigate} />
    </div>
  );
}
