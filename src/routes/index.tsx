import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, ArrowLeftRight, Mail, Menu, X } from "lucide-react";
import photo from "@/assets/tanvi.jpg.asset.json";
import roomies from "@/assets/roomies.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tanvi Garaye — Personal Portfolio" },
      { name: "description", content: "Tanvi Garaye, first-year CSE student at VIT Vellore exploring programming, web development and UI/UX design." },
      { property: "og:title", content: "Tanvi Garaye — Personal Portfolio" },
      { property: "og:description", content: "Skills, projects and contact details of Tanvi Garaye, aspiring developer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "7atanvigaraye@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/tanvi-garaye-51b7762a4";
const GITHUB = "https://github.com/tanvigaraye1514";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "work", label: "Skills & Projects" },
  { id: "achievements", label: "Achievements & Interests" },
  { id: "contact", label: "Contact" },
];

const eyebrow = "text-xs font-semibold uppercase tracking-wider text-primary";
const focus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const btnPrimary = `inline-flex items-center gap-3 rounded-md bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition hover:brightness-95 ${focus}`;
const btnOutline = `inline-flex items-center gap-3 rounded-md border border-input px-6 py-3.5 font-semibold text-foreground transition hover:bg-secondary ${focus}`;

function Index() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    NAV.forEach((n) => { const el = document.getElementById(n.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between border-b border-border px-6 py-5 md:px-10">
          <a href="#home" className={`flex items-center gap-3 rounded-md ${focus}`}>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">TG</span>
            <span className="text-lg font-medium">Tanvi Garaye</span>
          </a>
          <nav className="hidden lg:flex items-center gap-10">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`}
                className={`relative rounded-sm py-1 text-[15px] transition hover:text-primary ${focus} ${active === n.id ? "font-semibold text-primary" : "text-muted-foreground"}`}>
                {n.label}
                {active === n.id && <span className="absolute -bottom-1.5 left-0 h-0.5 w-5 bg-primary" />}
              </a>
            ))}
          </nav>
          <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}
            onClick={() => setOpen(!open)} className={`lg:hidden rounded-md p-2 hover:bg-secondary ${focus}`}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="lg:hidden border-b border-border bg-background px-6 pb-4">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}
                className={`block rounded-md px-2 py-3 ${focus} ${active === n.id ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main className="mx-auto max-w-7xl px-6 md:px-10">
        {/* HOME */}
        <section id="home" className="py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className={eyebrow}>A personal portfolio</p>
              <p className="mt-10 text-2xl text-muted-foreground">Hi, I'm</p>
              <h1 className="mt-2 font-serif text-6xl leading-none sm:text-7xl md:text-8xl">Tanvi Garaye.</h1>
              <p className="mt-10 text-3xl text-primary">Aspiring developer.</p>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Hi, I am Tanvi Garaye, an aspiring developer. Creative thinker. A first-year Computer Science student at VIT Vellore, exploring technology, design, and the art of building meaningful things.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#work" className={btnPrimary}>Explore my work <ArrowRight size={18} /></a>
                <a href="#contact" className={btnOutline}>Get in touch <ArrowRight size={18} /></a>
              </div>
            </div>
            <figure className="rounded-lg bg-card p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">A face to the name</p>
              <img src={photo.url} alt="Portrait of Tanvi Garaye" className="mt-6 aspect-[554/500] w-full rounded-md object-cover" />
              <figcaption className="mt-6 text-sm text-muted-foreground">A little more personal.</figcaption>
            </figure>
          </div>

          <div className="mt-20 border-t border-border pt-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Take a look around</p>
            <div className="mt-8 grid gap-10 md:grid-cols-3">
              {[
                ["about", "A little about me", "My story, personality & interests", "02 — About Me"],
                ["work", "What I'm building", "My skills & project collection", "03 — Skills & Projects"],
                ["achievements", "Along the way", "My achievements & interests", "04 — Achievements & Interests"],
              ].map(([id, t, d, n]) => (
                <a key={id} href={`#${id}`} className={`group block rounded-md ${focus}`}>
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-3xl transition group-hover:text-primary">{t}</h3>
                    <ArrowRight className="text-primary transition group-hover:translate-x-1" size={20} />
                  </div>
                  <p className="mt-4 text-muted-foreground">{d}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{n}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" num="02" title="The person behind the work." sub="A little about who I am, what matters to me, and where I'm headed.">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:max-w-6xl">
            <div>
              <p className={eyebrow}>Who I am</p>
              <h3 className="mt-6 font-serif text-3xl leading-tight md:text-5xl">I'm Tanvi, a first-year Computer Science and Engineering student at VIT Vellore.</h3>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">I'm curious about how technology can solve real-world problems and enjoy exploring the intersection of creativity and technology. I'm currently building my foundations in programming and learning more about web development and UI/UX design.</p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">I'm excited to turn my ideas into projects and keep growing along the way.</p>
            </div>
            <div className="h-fit rounded-lg bg-card p-8 lg:mt-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">At a glance</p>
              {[["Based in", "Hyderabad"], ["Currently", "First-year CSE student"], ["Working toward", "Aspiring developer"]].map(([k, v]) => (
                <div key={k} className="mt-6">
                  <p className="text-sm text-muted-foreground">{k}</p>
                  <p className="mt-1 text-xl">{v}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 border-t border-border pt-12 lg:max-w-6xl">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="font-serif text-4xl">How I approach things</h3>
              <p className="text-sm uppercase tracking-wider text-muted-foreground">Personalized traits</p>
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {[["Curious", "I'm drawn to understanding how technology can solve real-world problems."], ["Creative thinker", "I enjoy exploring the intersection of creativity and technology."], ["Growth-oriented", "I'm excited to turn ideas into projects and keep growing along the way."]].map(([t, d]) => (
                <div key={t}>
                  <p className="flex items-center gap-3 text-2xl"><span className="h-1.5 w-1.5 rounded-full bg-primary" />{t}</p>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-lg bg-card px-8 py-6">
              <p className={eyebrow}>Beyond the work</p>
              <p className="text-xl">Programming <span className="mx-3 text-muted-foreground">/</span> Web development <span className="mx-3 text-muted-foreground">/</span> UI/UX design</p>
              <a href="#achievements" className={`ml-auto rounded-sm text-sm text-muted-foreground hover:text-primary ${focus}`}>More on page 04 →</a>
            </div>
          </div>
        </Section>

        {/* SKILLS & PROJECTS */}
        <Section id="work" num="03" title="What I'm learning & making." sub="A place for the skills I'm developing and the projects I've brought to life.">
          <div className="grid gap-12 md:grid-cols-2">
            <SkillGroup title="Technical skills" sub="The tools I'm developing and using." items={["Python — Beginner", "HTML — Learning", "CSS — Learning", "Figma — Learning"]} />
            <SkillGroup title="Other skills" sub="The soft skills that support my work." items={["Communication", "Teamwork", "Leadership", "Creative thinking"]} />
          </div>
          <h3 className="mt-20 font-serif text-4xl">Projects I've built</h3>
          <div className="mt-8 grid items-start gap-10 md:grid-cols-2">
            <Project tag="Mobile app · Frontend" name="Roomies"
              media={<div className="flex h-72 justify-center"><img src={roomies.url} alt="Roomies app home screen" className="h-full w-auto object-contain" /></div>}
              desc="I created the initial frontend of Roomies to help my roommates and me stay connected. It includes roommates' timetables, House Notes for communication, and an emergency alert option. The basic foundation is built, with more development still to come."
              lines={["My role: Frontend development (foundation) · Work in progress", "Stage: Initial frontend built · Further development needed"]} />
            <Project tag="Coding tool · MDP" name="SyntaxSync"
              media={<div className="flex h-72 flex-col items-center justify-center gap-4 bg-secondary">
                <span className="rounded-md bg-accent px-5 py-2 text-xs font-semibold uppercase tracking-wider text-primary">Screenshot coming soon</span>
                <span className="flex items-center gap-3 rounded-md bg-accent px-5 py-2">Java <ArrowLeftRight size={16} /> Python</span>
                <span className="text-muted-foreground">In development · No preview yet</span>
              </div>}
              desc="I'm currently creating SyntaxSync for MDP, a coding tool designed to convert Java to Python and Python to Java. It aims to make coding across the two languages easier and is still in development."
              lines={["Current focus: Java ↔ Python conversion", "Stage: Work in progress"]} />
          </div>
          <p className="mt-8 flex items-center gap-3 text-sm text-muted-foreground"><span className="h-1.5 w-1.5 bg-primary" />Projects in progress · Learning through building.</p>
        </Section>

        {/* ACHIEVEMENTS & INTERESTS */}
        <Section id="achievements" num="04" title="Along the way." sub="The things I'm drawn to outside of coursework.">
          <p className={eyebrow}>Interests</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {["Programming", "Web development", "UI/UX design"].map((t) => (
              <div key={t} className="rounded-lg bg-card p-8 font-serif text-2xl">{t}</div>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" num="05" title="Good things start with a hello." sub="Have a question, an idea, or just want to connect? Here's where to find me.">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div className="rounded-lg bg-card p-8 md:p-12">
              <div className="flex items-center justify-between">
                <p className={eyebrow}>Get in touch</p>
                <Mail className="text-primary" />
              </div>
              <a href={`mailto:${EMAIL}`} className={`mt-8 block break-all rounded-sm font-serif text-3xl hover:text-primary md:text-5xl ${focus}`}>{EMAIL}</a>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">The simplest way to reach me. Send a note and tell me a little about what you have in mind.</p>
              <a href={`mailto:${EMAIL}`} className={`mt-10 ${btnPrimary}`}>Say hello by email <ArrowRight size={18} /></a>
            </div>
            <div className="lg:max-w-lg">
              <h3 className="font-serif text-4xl">Find me elsewhere</h3>
              <p className="mt-6 text-lg text-muted-foreground">A few other places to connect or explore more of my work.</p>
              <div className="mt-8 border-t border-border">
                {[["LinkedIn", "linkedin.com/in/tanvi-garaye-51b7762a4", LINKEDIN], ["GitHub", "tanvigaraye1514", GITHUB]].map(([n, h, u]) => (
                  <a key={n} href={u} target="_blank" rel="noopener noreferrer"
                    className={`group flex items-center justify-between border-b border-border py-6 ${focus}`}>
                    <span>
                      <span className="block text-lg group-hover:text-primary">{n}</span>
                      <span className="mt-1 block break-all text-sm text-muted-foreground">{h}</span>
                    </span>
                    <ArrowUpRight className="text-primary transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-24 flex flex-wrap items-end justify-between gap-8">
            <div>
              <h3 className="font-serif text-4xl">Thanks for stopping by.</h3>
              <p className="mt-4 text-lg text-muted-foreground">You've seen a little of my story. I'd love to hear yours.</p>
            </div>
            <div className="lg:mr-[20%]">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Based in</p>
              <p className="mt-2 text-xl">Hyderabad</p>
            </div>
          </div>
        </Section>
      </main>

      <footer className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border py-8 text-sm text-muted-foreground">
          <span>Tanvi Garaye · Personal portfolio</span>
          <a href="#home" className={`flex items-center gap-3 rounded-sm text-base text-foreground hover:text-primary ${focus}`}>Back to Home <ArrowRight size={18} className="text-primary" /></a>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}

function Section({ id, num, title, sub, children }: { id: string; num: string; title: string; sub: string; children: ReactNode }) {
  return (
    <section id={id} className="border-t border-border py-20 md:py-28">
      <p className={eyebrow}>{num} / Tanvi Garaye</p>
      <h2 className="mt-8 font-serif text-5xl leading-tight md:text-7xl">{title}</h2>
      <p className="mt-6 text-lg text-muted-foreground">{sub}</p>
      <div className="mt-14">{children}</div>
    </section>
  );
}

function SkillGroup({ title, sub, items }: { title: string; sub: string; items: string[] }) {
  return (
    <div className="border-t border-border pt-8">
      <h3 className="text-2xl font-medium">{title}</h3>
      <p className="mt-4 text-muted-foreground">{sub}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        {items.map((i) => <span key={i} className="rounded-md bg-secondary px-4 py-2.5 text-secondary-foreground">{i}</span>)}
      </div>
    </div>
  );
}

function Project({ tag, name, media, desc, lines }: { tag: string; name: string; media: ReactNode; desc: string; lines: string[] }) {
  return (
    <article className="overflow-hidden rounded-lg border border-border">
      {media}
      <div className="p-8 md:p-10">
        <p className={eyebrow}>{tag}</p>
        <h4 className="mt-6 font-serif text-4xl">{name}</h4>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{desc}</p>
        {lines.map((l) => <p key={l} className="mt-5 text-muted-foreground">{l}</p>)}
        <p className="mt-8 border-t border-border pt-6 text-primary/80">Source / repo coming soon</p>
      </div>
    </article>
  );
}
