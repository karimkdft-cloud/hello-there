import { useEffect, useState } from "react";
import { Ambulance, Calendar, MapPin, Menu, Phone, X } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";

export const NAV = [
  { label: "Home", href: "#top" },
  { label: "Find a Doctor", href: "#doctors" },
  { label: "Clinical Specialties", href: "#specialties" },
  { label: "Health Packages", href: "#packages" },
  { label: "News & Events", href: "#news" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "BN">("EN");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-ink text-ink-foreground text-xs sm:text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2">
          <div className="flex items-center gap-4">
            <a href="tel:10678" className="flex items-center gap-1.5 font-semibold">
              <Phone className="h-3.5 w-3.5 text-destructive" /> Hotline: 10678
            </a>
            <span className="hidden items-center gap-1.5 md:flex">
              <MapPin className="h-3.5 w-3.5" /> South Apollo Hospital, Barishal
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex overflow-hidden rounded-full border border-ink-foreground/20">
              {(["EN", "BN"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-0.5 text-xs font-semibold transition ${lang === l ? "bg-primary text-primary-foreground" : ""}`}
                >
                  {l}
                </button>
              ))}
            </div>
            <a
              href="tel:10678"
              className="pulse-ring isolate flex items-center gap-1.5 rounded-full bg-destructive px-3 py-1 text-xs font-bold text-destructive-foreground"
            >
              <Ambulance className="h-3.5 w-3.5" /> 24/7 Ambulance
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 bg-background/95 backdrop-blur transition-shadow ${scrolled ? "shadow-card" : ""}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <a href="#top" className="shrink-0">
            <img src={logo.url} alt="South Apollo Hospital" className="h-11 w-auto" />
          </a>
          <nav className="hidden items-center gap-6 xl:flex">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="text-sm font-medium text-foreground/80 transition hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#appointment"
              className="hidden items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lift transition hover:-translate-y-0.5 sm:flex"
            >
              <Calendar className="h-4 w-4" /> Book Appointment
            </a>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="rounded-lg p-2 text-foreground xl:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 xl:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/60 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-80 max-w-[85%] flex-col bg-background p-6 shadow-card transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="mb-8 flex items-center justify-between">
            <img src={logo.url} alt="South Apollo Hospital" className="h-10 w-auto" />
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-medium hover:bg-accent hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#appointment"
            onClick={() => setOpen(false)}
            className="mt-auto flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 font-semibold text-primary-foreground"
          >
            <Calendar className="h-4 w-4" /> Book Appointment
          </a>
        </aside>
      </div>
    </>
  );
}
