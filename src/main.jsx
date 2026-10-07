import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Menu,
  X,
  Radio,
  Telescope,
  ChartNoAxesCombined,
  ExternalLink,
} from "lucide-react";
import "./styles.css";

const publicAsset = (name) => name.startsWith("data:") ? name : `${import.meta.env.BASE_URL}${name}`;

const items = [
  {
    n: "01",
    icon: Radio,
    title: "Signal Intelligence",
    copy: "Pulse tracks markets, wallets, liquidity and sentiment, bringing scattered inputs into a single signal you can act on.",
    stat: "24 / 7",
    label: "continuous listening",
  },
  {
    n: "02",
    icon: Telescope,
    title: "Deep Context",
    copy: "Live structure, historical behavior and risk give every observation depth. Understand the context before making the move.",
    stat: "360°",
    label: "market awareness",
  },
  {
    n: "03",
    icon: ChartNoAxesCombined,
    title: "Autonomous Execution",
    copy: "Move from insight to execution with programmable boundaries, transparent logic and a steady response to changing conditions.",
    stat: "< 1s",
    label: "signal response",
  },
];
const phases = [
  [
    "01",
    "Foundation",
    "Intelligence online",
    [
      "Launch $PULSE",
      "Activate multi-source signal engine",
      "Deploy transparent performance feed",
    ],
  ],
  [
    "02",
    "Expansion",
    "Execution layer",
    [
      "Strategy vaults go live",
      "Cross-market integrations",
      "Community governance controls",
    ],
  ],
  [
    "03",
    "Network",
    "Open intelligence",
    [
      "Agent-to-agent coordination",
      "Developer SDK and API",
      "Shared signal economy",
    ],
  ],
];

function Mark() {
  return (
    <svg className="mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="36" height="36" rx="11" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 21h7l3-9 5 17 3-8h6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function App() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(scrollY > 30);
    addEventListener("scroll", f);
    f();
    return () => removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !window.IntersectionObserver) return;
    const elements = document.querySelectorAll(".section-head, .feature, .pipeline, .quote, .orb, .network-copy, .phases article, .signal-caption, .cta > h2, .cta > p, .cta > a");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        target.classList.add("is-visible");
        observer.unobserve(target);
      });
    }, { threshold: 0.12 });
    elements.forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${(index % 3) * 90}ms`);
      element.classList.add("motion-ready");
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
      elements.forEach((element) => element.classList.remove("motion-ready", "is-visible"));
    };
  }, []);
  return (
    <main>
      <header className={scrolled ? "nav scrolled" : "nav"}>
        <a className="brand" href="#top">
          <Mark />
          <span>Agent Pulse</span>
        </a>
        <nav>
          {["Intelligence", "System", "Network", "Roadmap"].map((x) => (
            <a key={x} href={"#" + x.toLowerCase()}>
              {x}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="social" href="#community" aria-label="Agent Pulse on X">
            <span>𝕏</span>
            Follow
          </a>
          <a className="pill light" href="#access">
            Enter Pulse
          </a>
        </div>
        <button
          className="menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
        {open && (
          <div id="mobile-navigation" className="mobile">
            {["Intelligence", "System", "Network", "Roadmap"].map((x) => (
              <a
                onClick={() => setOpen(false)}
                key={x}
                href={"#" + x.toLowerCase()}
              >
                {x}
              </a>
            ))}
            <a href="#access" onClick={() => setOpen(false)} className="pill light">
              Enter Pulse
            </a>
          </div>
        )}
      </header>

      <section id="top" className="hero">
        <img
          src={publicAsset("hero-pulse.png")}
          alt="Luminous green signal waves across a dark market landscape"
        />
        <div className="veil" />
        <div className="grid" />
        <div className="hero-copy reveal">
          <p className="eyebrow">
            <span />
            Intelligence in rhythm with the market.
          </p>
          <h1>
            Markets move.
            <br />
            <em>Pulse</em> responds.
          </h1>
          <p className="intro">
            An autonomous intelligence agent that feels the rhythm of markets,
            connects the signals and acts with precision.
          </p>
          <div className="hero-actions">
            <a className="pill light" href="#intelligence">
              Find your signal <ArrowRight />
            </a>
            <a className="textlink" href="#system">
              See how it works ↘
            </a>
          </div>
        </div>
        <div className="hero-stats">
          <div>
            <b>24/7</b>
            <span>market awareness</span>
          </div>
          <div>
            <b>0</b>
            <span>emotional decisions</span>
          </div>
          <div>
            <b>$PULSE</b>
            <span>native intelligence layer</span>
          </div>
        </div>
        <div className="scroll">
          SCROLL TO DISCOVER <i />
        </div>
      </section>

      <section id="intelligence" className="section light-section">
        <div className="section-head">
          <div>
            <p className="eyebrow dark">
              <span />
              The intelligence layer
            </p>
            <h2>
              The market pulse.
              <br />
              <em>The full picture.</em>
            </h2>
          </div>
          <p>
            Agent Pulse follows markets that never stand still. It observes
            broadly, reasons continuously and brings the signals that matter
            into focus before an opportunity becomes obvious.
          </p>
        </div>
        <div className="feature-grid">
          {items.map(({ icon: Icon, ...x }) => (
            <article className="feature" key={x.n}>
              <div className="topline">
                <span>{x.n}</span>
                <Icon />
              </div>
              <h3>{x.title}</h3>
              <p>{x.copy}</p>
              <div className="feature-stat">
                <b>{x.stat}</b>
                <span>{x.label}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="signal-landscape" aria-label="Live signal visualization">
        <img
          src={publicAsset("pulse-signal-landscape.png")}
          alt="A living landscape representing real-time market signals"
        />
        <div className="signal-wash" />
        <div className="signal-caption">
          <div>
            <p className="eyebrow">
              <span /> Live signal environment
            </p>
            <h3>Every market<br />has a rhythm.</h3>
          </div>
          <p>
            Every rise, cluster and shift tells part of the story. Pulse listens,
            interprets and maps these changing market states in real time.
          </p>
        </div>
        <div className="telemetry">
          <span><i /> SIGNAL DENSITY <b>84.2%</b></span>
          <span><i /> NETWORK PULSE <b>LIVE</b></span>
          <span><i /> CONTEXT LAYERS <b>12</b></span>
        </div>
      </section>

      <section id="system" className="section dark-section">
        <div className="signal-bg">
          <div className="rings" />
        </div>
        <div className="section-head inverted">
          <div>
            <p className="eyebrow">
              <span />
              The Pulse system
            </p>
            <h2>
              Read the rhythm
              <br />
              and <em>act.</em>
            </h2>
          </div>
          <p>
            Every signal moves through a disciplined intelligence loop. Market
            inputs, context and risk work together to guide each response.
          </p>
        </div>
        <div className="pipeline">
          {[
            ["01", "LISTEN", "Live market, on-chain and social inputs"],
            ["02", "INTERPRET", "Contextual reasoning and pattern recognition"],
            ["03", "DECIDE", "Risk-aware strategy selection"],
            ["04", "EXECUTE", "Fast, bounded autonomous action"],
          ].map((a, i) => (
            <React.Fragment key={a[0]}>
              <div className="node">
                <span>{a[0]}</span>
                <b>{a[1]}</b>
                <small>{a[2]}</small>
              </div>
              {i < 3 && (
                <div className="pulse">
                  <i />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="quote">
          <p>
            “Read the market. Understand the context.
            <br />
            Know when a signal calls for action.”
          </p>
          <span>— THE PULSE PRINCIPLE</span>
        </div>
      </section>

      <section id="network" className="section network">
        <div className="orb">
          <img
            src={publicAsset("pulse-network-world.png")}
            alt="Organic global network illuminated by connected signals"
          />
          <i />
          <i />
          <i />
          <b>
            <Mark />
          </b>
        </div>
        <div className="network-copy">
          <p className="eyebrow dark">
            <span />
            Built around $PULSE
          </p>
          <h2>
            Intelligence
            <br />
            with an <em>economy.</em>
          </h2>
          <p>
            $PULSE connects access, coordination and ownership across the Agent
            Pulse network. As the intelligence layer grows, the token aligns the
            people, strategies and agents that make it stronger.
          </p>
          <div className="token-list">
            <div>
              <span>01</span>
              <b>ACCESS</b>
              <small>
                Unlock intelligence, strategies and advanced agent capabilities.
              </small>
            </div>
            <div>
              <span>02</span>
              <b>ALIGNMENT</b>
              <small>
                Coordinate incentives across users, builders and autonomous
                agents.
              </small>
            </div>
            <div>
              <span>03</span>
              <b>GOVERNANCE</b>
              <small>
                Shape system parameters and the direction of the network.
              </small>
            </div>
          </div>
        </div>
      </section>

      <section className="ticker">
        <div>
          {[
            "SIGNAL ONLINE",
            "CONTEXT VERIFIED",
            "$PULSE ACTIVE",
            "RISK BOUNDED",
            "EXECUTION READY",
          ].map((x) => (
            <span key={x}>
              <i /> {x}
            </span>
          ))}
        </div>
      </section>

      <section id="roadmap" className="section roadmap">
        <div className="section-head">
          <div>
            <p className="eyebrow dark">
              <span />
              The signal expands
            </p>
            <h2>
              Road to
              <br />
              <em>momentum.</em>
            </h2>
          </div>
          <p>
            Pulse starts with an intelligence agent and expands into a network
            where signals, strategies and autonomous systems coordinate
            in public.
          </p>
        </div>
        <div className="phases">
          {phases.map((p) => (
            <article key={p[0]}>
              <span>{p[0]}</span>
              <div>
                <small>{p[2]}</small>
                <h3>{p[1]}</h3>
                <ul>
                  {p[3].map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="access" className="cta">
        <div className="cta-lines" />
        <p className="eyebrow">
          <span />
          Stay in rhythm with the market
        </p>
        <h2>
          Feel the pulse
          <br />
          <em>before the move.</em>
        </h2>
        <p>Step into continuous intelligence for markets that never pause.</p>
        <a className="pill light" href="#top">
          Activate Agent Pulse <ArrowRight />
        </a>
      </section>

      <footer id="community">
        <div className="footer-brand">
          <a className="brand" href="#top">
            <Mark />
            <span>Agent Pulse</span>
          </a>
          <p>Intelligence in rhythm with the market.</p>
        </div>
        <div>
          <b>Navigate</b>
          <a href="#intelligence">Intelligence</a>
          <a href="#system">System</a>
          <a href="#network">$PULSE</a>
          <a href="#roadmap">Roadmap</a>
        </div>
        <div>
          <b>Connect</b>
          <a href="#">
            X / Twitter <ExternalLink />
          </a>
          
        </div>
        <div className="foot-bottom">
          <span>© 2026 AGENT PULSE</span>
          <span>
            <i /> ALL SYSTEMS IN SYNC
          </span>
        </div>
      </footer>
    </main>
  );
}
createRoot(document.getElementById("root")).render(<App />);
