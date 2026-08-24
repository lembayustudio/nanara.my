import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent, type SVGProps } from "react";

const CONTACT_EMAIL = "hi@lembayu.com";
const PRICE = "RM2,500";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "nanara.my — Premium .MY Domain For Sale" },
      {
        name: "description",
        content:
          "nanara.my is for sale. A memorable, brandable six-letter .MY domain — RM2,500, sold securely via Escrow.com by the direct owner.",
      },
      { property: "og:title", content: "nanara.my — Premium .MY Domain For Sale" },
      {
        property: "og:description",
        content:
          "A memorable .MY domain ready for your next brand. RM2,500 · Secure via Escrow.com.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

/* ---------- Line icons (custom stroke SVGs, no emoji) ---------- */

type IconProps = SVGProps<SVGSVGElement>;

const iconDefaults = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconLetters(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="M4 18 9.5 6l5.5 12" />
      <path d="M6 13.5h7" />
      <path d="M15.5 18v-7.2c0-1.4 1-2.3 2.3-2.3 1.4 0 2.2.9 2.2 2.1 0 1.6-1.2 2.3-2.9 3.1l3 4.3" />
    </svg>
  );
}

function IconVoice(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="M4 10v4" />
      <path d="M8 7v10" />
      <path d="M12 4v16" />
      <path d="M16 8v8" />
      <path d="M20 10.5v3" />
    </svg>
  );
}

function IconMemory(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

function IconTag(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="M3.5 12.5 11 20a2 2 0 0 0 2.8 0l6.2-6.2a2 2 0 0 0 0-2.8L12.5 3.5H5.5a2 2 0 0 0-2 2v7Z" />
      <circle cx="8.5" cy="8.5" r="1.2" />
    </svg>
  );
}

function IconGlobe(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.6 2.4 3.9 5.2 3.9 8.5s-1.3 6.1-3.9 8.5c-2.6-2.4-3.9-5.2-3.9-8.5S9.4 5.9 12 3.5Z" />
    </svg>
  );
}

function IconSpark(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="M12 3.5 14 10l6.5 2-6.5 2-2 6.5L10 14l-6.5-2L10 10l2-6.5Z" />
    </svg>
  );
}

function IconShield(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="M12 3.5 5 6v5.5c0 4.4 3 8 7 9.5 4-1.5 7-5.1 7-9.5V6l-7-2.5Z" />
      <path d="m9 11.8 2.2 2.2L15.5 9.6" />
    </svg>
  );
}

function IconArrow(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="M4 12h15" />
      <path d="m13.5 6 6 6-6 6" />
    </svg>
  );
}

/* ---------- Scroll reveal hook ---------- */

function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------- Page ---------- */

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <WhyNanara />
        <BuiltForBrand />
        <DomainDetails />
        <Purchase />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Header ---------- */

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="display-serif text-xl font-semibold tracking-tight">
          nanara<span className="text-gold-muted">.my</span>
        </a>
        <span className="rounded-full border border-gold/50 px-3.5 py-1 text-[0.625rem] font-bold tracking-[0.25em] text-gold-muted uppercase">
          Domain for sale
        </span>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-40 pb-28 md:pt-52 md:pb-36">
      {/* faint gold halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/2 h-[34rem] w-[54rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.68 0.095 82 / 0.10), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <p data-reveal className="section-eyebrow">
          Premium .MY domain — for sale
        </p>
        <h1
          data-reveal
          className="display-serif mt-8 text-[clamp(3.5rem,11vw,8.5rem)] leading-none font-medium tracking-tight"
        >
          nanara<span className="text-gold">.my</span>
        </h1>
        <p
          data-reveal
          className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          A memorable .MY domain ready for your next brand.
        </p>

        <div data-reveal className="mt-12 flex flex-col items-center gap-2">
          <span className="display-serif text-4xl font-medium md:text-5xl">{PRICE}</span>
          <span className="text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
            Asking price
          </span>
          <span className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <IconShield className="size-4 text-gold-muted" />
            Secure transaction via Escrow.com
          </span>
        </div>

        <div data-reveal className="mt-12 flex flex-col items-center gap-5">
          <a
            href="#purchase"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-10 py-4 text-sm font-bold tracking-[0.18em] text-primary-foreground uppercase transition-all duration-300 hover:gap-4 hover:bg-foreground"
          >
            Buy now
            <IconArrow className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#purchase"
            className="text-sm text-muted-foreground underline decoration-gold/60 underline-offset-4 transition-colors hover:text-foreground"
          >
            or make an offer
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Nanara ---------- */

const WHY = [
  {
    icon: IconLetters,
    title: "Six letters",
    text: "Short, clean and effortless to type — no hyphens, no numbers.",
  },
  {
    icon: IconVoice,
    title: "Easy to pronounce",
    text: "Three soft syllables that flow naturally in any language.",
  },
  {
    icon: IconMemory,
    title: "Memorable",
    text: "A rhythmic sound that stays with people after one hearing.",
  },
  {
    icon: IconTag,
    title: "Brandable",
    text: "An invented name with no baggage — it becomes whatever you build.",
  },
  {
    icon: IconGlobe,
    title: ".MY identity",
    text: "A trusted Malaysian extension with instant local credibility.",
  },
  {
    icon: IconSpark,
    title: "Ready to brand",
    text: "A blank canvas — logo, wordmark and identity can start today.",
  },
];

function WhyNanara() {
  return (
    <section className="border-t border-border/60 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div data-reveal className="max-w-xl">
          <p className="section-eyebrow">Why nanara?</p>
          <h2 className="display-serif mt-6 text-4xl leading-tight font-medium md:text-5xl">
            A name that works as hard as your brand.
          </h2>
        </div>
        <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((item, i) => (
            <div key={item.title} data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
              <item.icon className="size-8 text-gold-muted" strokeWidth={1} />
              <h3 className="display-serif mt-5 text-xl font-medium">{item.title}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Built for a Brand ---------- */

const INDUSTRIES = [
  "Beauty & Skincare",
  "Fashion",
  "F&B",
  "Lifestyle",
  "Creative Studio",
  "Startup / Digital Product",
];

function BuiltForBrand() {
  return (
    <section className="border-t border-border/60 bg-secondary/40 px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-2 md:gap-20">
        <div data-reveal>
          <p className="section-eyebrow">Built for a brand</p>
          <h2 className="display-serif mt-6 text-4xl leading-tight font-medium md:text-5xl">
            Distinctive. Versatile. Yours.
          </h2>
          <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-muted-foreground">
            nanara is a rare kind of name — distinctive enough to stand apart, neutral
            enough to belong anywhere. It suits a quiet luxury label as naturally as a
            bold new venture.
          </p>
        </div>
        <ul data-reveal className="flex flex-col justify-center">
          {INDUSTRIES.map((name) => (
            <li
              key={name}
              className="flex items-baseline gap-4 border-b border-border/70 py-4 last:border-b-0"
            >
              <span className="size-1.5 shrink-0 translate-y-[-2px] rounded-full bg-gold" />
              <span className="display-serif text-xl font-medium md:text-2xl">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Domain Details ---------- */

const DETAILS: Array<[string, string]> = [
  ["Domain", "nanara.my"],
  ["Extension", ".MY"],
  ["Status", "For Sale"],
  ["Asking price", PRICE],
  ["Expiry date", "March 2027"],
  ["Ownership", "Direct owner"],
  ["Transaction", "Secure via Escrow.com"],
];

function DomainDetails() {
  return (
    <section className="border-t border-border/60 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div data-reveal className="text-center">
          <p className="section-eyebrow">Domain details</p>
          <h2 className="display-serif mt-6 text-4xl font-medium md:text-5xl">
            Everything, plainly stated.
          </h2>
        </div>
        <dl data-reveal className="mt-14">
          {DETAILS.map(([term, value]) => (
            <div
              key={term}
              className="flex items-baseline justify-between gap-6 border-b border-border/70 py-5 first:border-t"
            >
              <dt className="text-xs font-bold tracking-[0.22em] text-muted-foreground uppercase">
                {term}
              </dt>
              <dd className="display-serif text-right text-lg font-medium md:text-xl">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------- Purchase / Make an Offer ---------- */

function Purchase() {
  const [mode, setMode] = useState<"buy" | "offer">("buy");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const offer = String(data.get("offer") ?? "");
    const use = String(data.get("use") ?? "");
    const message = String(data.get("message") ?? "");

    const subject =
      mode === "buy"
        ? `Purchase request — nanara.my (${PRICE})`
        : `Offer for nanara.my — RM${offer}`;
    const body = [
      `Mode: ${mode === "buy" ? `Buy at asking price (${PRICE})` : `Make an offer`}`,
      `Full name: ${name}`,
      `Email: ${email}`,
      mode === "offer" ? `Offer (RM): ${offer}` : null,
      `Intended use: ${use}`,
      "",
      message,
      "",
      "— Sent from the nanara.my sales page",
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  const inputClass =
    "w-full rounded-sm border border-input bg-card px-4 py-3 text-[0.9375rem] text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/25";
  const labelClass =
    "mb-2 block text-xs font-bold tracking-[0.18em] text-muted-foreground uppercase";

  return (
    <section id="purchase" className="border-t border-border/60 bg-secondary/40 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        <div data-reveal className="text-center">
          <p className="section-eyebrow">Make it yours</p>
          <h2 className="display-serif mt-6 text-4xl font-medium md:text-5xl">
            Buy now, or make an offer.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-muted-foreground">
            Submit your details below and the seller will contact you directly. Every
            transaction is completed securely through Escrow.com — escrow fees are paid
            by the buyer.
          </p>
        </div>

        <form
          data-reveal
          onSubmit={handleSubmit}
          className="mt-14 rounded-md border border-border bg-card p-7 shadow-[0_24px_60px_-30px_oklch(0.245_0.015_60/0.25)] md:p-10"
        >
          {/* Mode toggle */}
          <div className="grid grid-cols-2 gap-2 rounded-sm border border-border bg-secondary/60 p-1.5">
            <button
              type="button"
              onClick={() => setMode("buy")}
              aria-pressed={mode === "buy"}
              className={`rounded-sm px-4 py-3 text-xs font-bold tracking-[0.16em] uppercase transition-colors ${
                mode === "buy"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Buy at {PRICE}
            </button>
            <button
              type="button"
              onClick={() => setMode("offer")}
              aria-pressed={mode === "offer"}
              className={`rounded-sm px-4 py-3 text-xs font-bold tracking-[0.16em] uppercase transition-colors ${
                mode === "offer"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Make an offer
            </button>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                Full name
              </label>
              <input id="name" name="name" required className={inputClass} placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={inputClass}
                placeholder="you@example.com"
              />
            </div>
            {mode === "offer" && (
              <div className="sm:col-span-2">
                <label htmlFor="offer" className={labelClass}>
                  Offer (RM)
                </label>
                <input
                  id="offer"
                  name="offer"
                  type="number"
                  min="1"
                  required
                  className={inputClass}
                  placeholder="e.g. 1800"
                />
              </div>
            )}
            <div className="sm:col-span-2">
              <label htmlFor="use" className={labelClass}>
                Intended use
              </label>
              <input
                id="use"
                name="use"
                className={inputClass}
                placeholder="e.g. Skincare brand, café, portfolio…"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={inputClass}
                placeholder="Anything you'd like the seller to know."
              />
            </div>
          </div>

          <button
            type="submit"
            className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-bold tracking-[0.18em] text-primary-foreground uppercase transition-all duration-300 hover:bg-foreground"
          >
            {mode === "buy" ? `Request purchase — ${PRICE}` : "Submit offer"}
            <IconArrow className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>

          <p className="mt-6 flex items-start justify-center gap-2 text-center text-[0.8125rem] leading-relaxed text-muted-foreground">
            <IconShield className="mt-0.5 size-4 shrink-0 text-gold-muted" />
            The seller will contact you to confirm, then a secure Escrow.com transaction
            is created. Funds are only released once the domain is safely in your hands.
          </p>
        </form>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <span className="display-serif text-2xl font-semibold">
          nanara<span className="text-gold-muted">.my</span>
        </span>
        <p className="display-serif text-lg text-muted-foreground italic">
          A name waiting for its brand.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-bold tracking-[0.22em] text-muted-foreground uppercase">
          <span className="text-gold-muted">For sale</span>
          <span>Secure via Escrow.com</span>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="underline decoration-gold/50 underline-offset-4 transition-colors hover:text-foreground"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
