import { useState, type ReactNode } from "react";
import {
  Activity, ArrowRight, Baby, Bone, Brain, Calendar, Check, Clock, Droplets, FlaskConical,
  Heart, HeartPulse, MapPin, Microscope, Phone, Pill, Play, Scan, Scissors, Search,
  Siren, Stethoscope, Syringe, BedDouble, Users, Building2, ShieldCheck,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import why from "@/assets/why.jpg";
import d0 from "@/assets/doc-0.jpg";
import d1 from "@/assets/doc-1.jpg";
import d2 from "@/assets/doc-2.jpg";
import d3 from "@/assets/doc-3.jpg";

function Heading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-destructive">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Section({ id, alt, children }: { id?: string; alt?: boolean; children: ReactNode }) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 ${alt ? "bg-secondary" : "bg-background"}`}>
      <div className="mx-auto max-w-7xl px-4">{children}</div>
    </section>
  );
}

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground shadow-lift transition hover:-translate-y-0.5";
const btnOutline =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-6 py-3 font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground";

export function Hero() {
  const actions = [
    { icon: Search, title: "Find a Doctor", text: "Search by name or specialty", href: "#doctors" },
    { icon: Calendar, title: "Book Appointment", text: "Reserve your OPD slot", href: "#appointment" },
    { icon: Stethoscope, title: "Health Checkups", text: "Preventive care packages", href: "#packages" },
    { icon: Phone, title: "24/7 Emergency", text: "Call hotline 10678", href: "tel:10678", urgent: true },
  ];
  return (
    <section id="top" className="relative">
      <div className="relative min-h-[560px] overflow-hidden md:min-h-[640px]">
        <img src={hero} alt="South Apollo Hospital lobby" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 pb-40 pt-20 md:pt-28">
          <span className="w-fit rounded-full bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground backdrop-blur">
            Barishal's trusted multi-specialty hospital
          </span>
          <h1 className="mt-5 max-w-2xl text-4xl font-extrabold leading-tight text-primary-foreground md:text-6xl">
            World-Class Healthcare, Right Here in Barishal
          </h1>
          <p className="mt-5 max-w-xl text-lg text-primary-foreground/85">
            Expert doctors, cutting-edge diagnostic facilities, and compassionate emergency care 24/7.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#appointment" className={btnPrimary}><Calendar className="h-4 w-4" /> Book Appointment</a>
            <a href="#doctors" className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/70 px-6 py-3 font-semibold text-primary-foreground transition hover:bg-primary-foreground hover:text-foreground">
              View Specialists <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto -mt-28 grid max-w-7xl grid-cols-2 gap-4 px-4 lg:grid-cols-4">
        {actions.map((a) => (
          <a key={a.title} href={a.href}
            className={`group rounded-2xl p-5 shadow-card transition hover:-translate-y-1.5 hover:shadow-lift md:p-6 ${a.urgent ? "bg-destructive text-destructive-foreground" : "bg-card"}`}>
            <div className={`mb-4 inline-flex rounded-xl p-3 ${a.urgent ? "bg-destructive-foreground/15" : "bg-accent text-primary group-hover:bg-primary group-hover:text-primary-foreground"} transition`}>
              <a.icon className="h-6 w-6" />
            </div>
            <h3 className="font-bold">{a.title}</h3>
            <p className={`mt-1 text-sm ${a.urgent ? "opacity-85" : "text-muted-foreground"}`}>{a.text}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export function Why() {
  const stats = [
    { n: "50+", l: "Consultants", i: Users },
    { n: "24/7", l: "Emergency", i: Siren },
    { n: "100+", l: "Beds", i: BedDouble },
    { n: "15+", l: "Departments", i: Building2 },
  ];
  return (
    <Section id="about">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <img src={why} alt="Doctor consulting a patient" width={1024} height={1152} loading="lazy" className="aspect-[4/4.3] w-full rounded-3xl object-cover shadow-card" />
          <div className="absolute -bottom-6 -right-2 rounded-2xl bg-card p-5 shadow-lift md:-right-6">
            <ShieldCheck className="h-7 w-7 text-primary" />
            <p className="mt-2 text-sm font-bold">Patient-first care</p>
            <p className="text-xs text-muted-foreground">Trusted by families across Barishal</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-destructive">Why choose us</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">Why Choose South Apollo Hospital</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            We bring advanced medical technology and experienced consultants to Barishal, so families no longer need to travel to Dhaka for quality care. Our modular operation theatres, fully equipped ICU and CCU units, and round-the-clock emergency team are built around safety and comfort.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Advanced diagnostics & imaging", "Modern modular OT", "ICU, CCU & NICU units", "Experienced local consultants"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm font-medium">
                <span className="rounded-full bg-accent p-1 text-primary"><Check className="h-3.5 w-3.5" /></span>{t}
              </li>
            ))}
          </ul>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="rounded-2xl border bg-muted p-4 text-center">
                <s.i className="mx-auto h-5 w-5 text-primary" />
                <p className="mt-2 text-2xl font-extrabold text-primary">{s.n}</p>
                <p className="text-xs text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Specialties() {
  const list = [
    { i: Heart, t: "Cardiology" }, { i: Brain, t: "Neurology" }, { i: Bone, t: "Orthopedics" },
    { i: Baby, t: "Pediatrics" }, { i: Droplets, t: "Nephrology" }, { i: HeartPulse, t: "Gynecology" },
    { i: Pill, t: "Gastroenterology" }, { i: Scissors, t: "General Surgery" },
  ];
  return (
    <Section id="specialties" alt>
      <Heading eyebrow="Centres of excellence" title="Explore Our Medical Specialties" sub="Comprehensive care across 15+ departments, led by experienced consultants." />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {list.map((s) => (
          <a key={s.t} href="#" className="group rounded-2xl border bg-card p-6 text-center transition hover:-translate-y-1 hover:border-primary hover:shadow-lift">
            <div className="mx-auto inline-flex rounded-2xl bg-accent p-4 text-primary transition group-hover:bg-gradient-brand group-hover:text-primary-foreground">
              <s.i className="h-7 w-7" />
            </div>
            <h3 className="mt-4 font-bold">{s.t}</h3>
            <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition group-hover:opacity-100">Learn more <ArrowRight className="h-3 w-3" /></span>
          </a>
        ))}
      </div>
      <div className="mt-10 text-center"><a href="#" className={btnOutline}>View All Specialties <ArrowRight className="h-4 w-4" /></a></div>
    </Section>
  );
}

export function Facilities() {
  const list = [
    { i: Siren, t: "24/7 Emergency", red: true }, { i: Activity, t: "Modern ICU & CCU" },
    { i: Scan, t: "Radiology & Imaging" }, { i: Pill, t: "In-house Pharmacy" },
    { i: Droplets, t: "Dialysis Center" }, { i: Syringe, t: "Sample Collection" },
    { i: Microscope, t: "Pathology Lab" }, { i: FlaskConical, t: "Blood Bank" },
  ];
  return (
    <section className="bg-ink py-20 text-ink-foreground">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-destructive">Better care</p>
          <h2 className="mt-2 text-3xl font-extrabold text-background md:text-4xl">Key Services & Facilities</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {list.map((f) => (
            <a key={f.t} href="#" className={`group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-2xl p-5 transition hover:-translate-y-1 ${f.red ? "bg-destructive" : "bg-ink-foreground/5 hover:bg-gradient-brand"}`}>
              <f.i className="absolute right-4 top-4 h-16 w-16 opacity-15 transition group-hover:scale-110" />
              <f.i className="mb-3 h-7 w-7 text-background" />
              <h3 className="font-bold text-background">{f.t}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const packages = [
  { cat: "General", t: "Executive Health Screening", p: "4,500", f: ["CBC, Blood sugar, Lipid profile", "ECG & Chest X-ray", "Consultant review"] },
  { cat: "General", t: "Whole Body Checkup", p: "8,900", f: ["60+ lab parameters", "Ultrasound whole abdomen", "Thyroid & liver function", "Diet consultation"], best: true },
  { cat: "Cardiac", t: "Cardiac Health Package", p: "6,500", f: ["Echocardiogram", "ECG & TMT", "Lipid profile", "Cardiologist consultation"] },
  { cat: "Women", t: "Women's Wellness", p: "5,800", f: ["Pap smear & breast exam", "Ultrasound pelvis", "Hormone panel", "Gynecologist consultation"] },
];

export function Packages() {
  const [tab, setTab] = useState("All");
  const shown = packages.filter((p) => tab === "All" || p.cat === tab);
  return (
    <Section id="packages" alt>
      <Heading eyebrow="Preventive care" title="Health Checkup Packages" />
      <Tabs items={["All", "General", "Cardiac", "Women"]} value={tab} onChange={setTab} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {shown.map((p) => (
          <div key={p.t} className={`relative flex flex-col rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lift ${p.best ? "border-primary" : ""}`}>
            {p.best && <span className="absolute -top-3 left-6 rounded-full bg-destructive px-3 py-1 text-xs font-bold text-destructive-foreground">Most popular</span>}
            <h3 className="text-lg font-bold">{p.t}</h3>
            <p className="mt-3 text-3xl font-extrabold text-primary">৳{p.p}</p>
            <ul className="mt-5 flex-1 space-y-2.5 text-sm">
              {p.f.map((x) => <li key={x} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{x}</li>)}
            </ul>
            <a href="#appointment" className={`${btnPrimary} mt-6 w-full`}>Book Package</a>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Tabs({ items, value, onChange }: { items: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-2">
      {items.map((i) => (
        <button key={i} onClick={() => onChange(i)}
          className={`rounded-full px-5 py-2 text-sm font-semibold transition ${value === i ? "bg-primary text-primary-foreground" : "bg-card text-foreground/70 hover:text-primary"}`}>
          {i}
        </button>
      ))}
    </div>
  );
}

const doctors = [
  { img: d0, n: "Dr. Mahbubur Rahman", d: "Senior Consultant", s: "Cardiology", q: "MBBS, MD (Cardiology)" },
  { img: d1, n: "Dr. Nusrat Jahan", d: "Associate Professor", s: "Gynecology", q: "MBBS, FCPS (Obs & Gynae)" },
  { img: d2, n: "Dr. Farhana Akter", d: "Consultant", s: "Pediatrics", q: "MBBS, DCH, FCPS (Paed)" },
  { img: d3, n: "Dr. Kamrul Hasan", d: "Senior Consultant", s: "Orthopedics", q: "MBBS, MS (Ortho)" },
];

export function Doctors() {
  const [tab, setTab] = useState("All");
  const shown = doctors.filter((d) => tab === "All" || d.s === tab);
  return (
    <Section id="doctors">
      <Heading eyebrow="Our specialists" title="Meet Our Expert Doctors" />
      <Tabs items={["All", "Cardiology", "Gynecology", "Pediatrics", "Orthopedics"]} value={tab} onChange={setTab} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {shown.map((d) => (
          <div key={d.n} className="group overflow-hidden rounded-2xl border bg-card transition hover:-translate-y-1 hover:shadow-lift">
            <div className="overflow-hidden bg-secondary">
              <img src={d.img} alt={d.n} width={512} height={512} loading="lazy" className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-primary">{d.s}</span>
              <h3 className="mt-3 text-lg font-bold">{d.n}</h3>
              <p className="text-sm text-muted-foreground">{d.d}</p>
              <p className="mt-1 text-xs text-muted-foreground">{d.q}</p>
              <a href="#appointment" className={`${btnOutline} mt-4 w-full py-2 text-sm`}><Calendar className="h-4 w-4" /> Appointment</a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Stories() {
  const list = [
    { img: d3, n: "Abdul Karim", q: "My knee surgery went perfectly. I was walking within a week." },
    { img: d1, n: "Rehana Begum", q: "The cardiac team saved my husband's life on a midnight emergency." },
    { img: d2, n: "Shirin Akter", q: "Gentle, caring pediatric doctors. My son felt at home." },
  ];
  return (
    <Section alt>
      <Heading eyebrow="Patient stories" title="Real Recoveries, Real Voices" />
      <div className="grid gap-5 md:grid-cols-3">
        {list.map((s) => (
          <div key={s.n} className="group overflow-hidden rounded-2xl bg-card shadow-card">
            <div className="relative aspect-video overflow-hidden bg-ink">
              <img src={s.img} alt={s.n} loading="lazy" className="h-full w-full object-cover opacity-70 transition group-hover:scale-105" />
              <button aria-label="Play story" className="pulse-ring isolate absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-destructive p-4 text-destructive-foreground">
                <Play className="h-6 w-6 fill-current" />
              </button>
            </div>
            <div className="p-5">
              <p className="italic text-foreground/80">"{s.q}"</p>
              <p className="mt-3 text-sm font-bold">— {s.n}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function News() {
  const list = [
    { tag: "Health Camp", date: "Oct 18, 2026", t: "Free diabetes screening camp held in Barishal Sadar" },
    { tag: "News", date: "Oct 10, 2026", t: "South Apollo launches advanced cath lab for cardiac care" },
    { tag: "Blog", date: "Oct 02, 2026", t: "5 early warning signs of a heart attack you should know" },
    { tag: "Event", date: "Sep 25, 2026", t: "World Heart Day walk with 500+ participants" },
    { tag: "Blog", date: "Sep 14, 2026", t: "Dengue season: how to protect your family" },
    { tag: "Health Camp", date: "Sep 05, 2026", t: "Mother & child health camp in Bakerganj" },
  ];
  return (
    <Section id="news">
      <Heading eyebrow="Stay informed" title="News, Events & Health Blog" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((n) => (
          <a key={n.t} href="#" className="group rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:border-primary hover:shadow-lift">
            <div className="flex items-center justify-between text-xs">
              <span className="rounded-full bg-accent px-2.5 py-1 font-semibold text-primary">{n.tag}</span>
              <span className="text-muted-foreground">{n.date}</span>
            </div>
            <h3 className="mt-4 text-lg font-bold leading-snug group-hover:text-primary">{n.t}</h3>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Read more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
          </a>
        ))}
      </div>
    </Section>
  );
}

export function Partners() {
  const names = ["MetLife", "Green Delta", "Pragati Life", "BRAC Bank", "Grameenphone", "Robi", "Delta Life", "Square Pharma"];
  return (
    <section className="border-y bg-background py-12">
      <p className="mb-6 text-center text-sm font-bold uppercase tracking-widest text-muted-foreground">Corporate & insurance partners</p>
      <div className="overflow-hidden">
        <div className="marquee flex w-max gap-12">
          {[...names, ...names].map((n, i) => (
            <span key={i} className="whitespace-nowrap text-2xl font-extrabold text-foreground/25 transition hover:text-primary">{n}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <Section id="contact" alt>
      <div id="appointment" className="grid scroll-mt-24 gap-8 lg:grid-cols-2">
        <div className="rounded-3xl bg-card p-8 shadow-card">
          <p className="text-sm font-bold uppercase tracking-widest text-destructive">Visit us</p>
          <h2 className="mt-2 text-3xl font-extrabold">Location & Emergency Contact</h2>
          <div className="mt-8 space-y-6">
            <Info icon={MapPin} title="Address">South Apollo Hospital, Barishal, Bangladesh</Info>
            <Info icon={Phone} title="Emergency Hotline" red>
              <a href="tel:10678" className="text-xl font-extrabold text-destructive">10678</a>
            </Info>
            <Info icon={Clock} title="OPD Hours">Sat – Thu: 9:00 AM – 9:00 PM<br />Emergency: 24 hours, 7 days</Info>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:10678" className={btnPrimary}><Calendar className="h-4 w-4" /> Book by Phone</a>
            <a href="tel:10678" className="inline-flex items-center gap-2 rounded-full bg-destructive px-6 py-3 font-semibold text-destructive-foreground"><Siren className="h-4 w-4" /> Call Ambulance</a>
          </div>
        </div>
        <div className="min-h-[400px] overflow-hidden rounded-3xl shadow-card">
          <iframe title="South Apollo Hospital map" src="https://www.google.com/maps?q=South+Apollo+Hospital+Barishal&output=embed" className="h-full min-h-[400px] w-full border-0" loading="lazy" />
        </div>
      </div>
    </Section>
  );
}

function Info({ icon: I, title, red, children }: { icon: typeof MapPin; title: string; red?: boolean; children: ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className={`h-fit rounded-xl p-3 ${red ? "bg-destructive/10 text-destructive" : "bg-accent text-primary"}`}><I className="h-5 w-5" /></div>
      <div>
        <p className="font-bold">{title}</p>
        <div className="mt-1 text-sm text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}
