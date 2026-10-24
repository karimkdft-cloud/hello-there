import { Facebook, Linkedin, MapPin, Phone, Youtube } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";

const cols = [
  { title: "Quick Links", items: ["Find a Doctor", "Departments", "Health Packages", "News & Events", "Careers"] },
  { title: "Services & Facilities", items: ["24/7 Emergency", "ICU & CCU", "Radiology & Imaging", "Dialysis Center", "Pharmacy"] },
];

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-block rounded-xl bg-background p-3">
            <img src={logo.url} alt="South Apollo Hospital" className="h-10 w-auto" loading="lazy" />
          </div>
          <p className="mt-5 text-sm leading-relaxed opacity-75">
            South Apollo Hospital delivers trusted, world-class care to the people of Barishal and
            the wider southern region.
          </p>
          <p className="mt-4 flex gap-2 text-sm opacity-75">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" /> Barishal, Bangladesh
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="font-semibold text-background">{c.title}</h4>
            <ul className="mt-4 space-y-2.5 text-sm opacity-75">
              {c.items.map((i) => (
                <li key={i}>
                  <a href="#" className="transition hover:text-primary">{i}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="font-semibold text-background">Emergency</h4>
          <a href="tel:10678" className="mt-4 flex items-center gap-2 text-2xl font-extrabold text-destructive">
            <Phone className="h-6 w-6" /> 10678
          </a>
          <p className="mt-1 text-sm opacity-75">Available 24 hours, 7 days</p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Youtube, Linkedin].map((I, i) => (
              <a key={i} href="#" aria-label="Social link" className="rounded-full border border-ink-foreground/20 p-2.5 transition hover:border-primary hover:bg-primary">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs opacity-70 sm:flex-row sm:justify-between">
          <p>Copyright © 2026 South Apollo Hospital, Barishal. All Rights Reserved.</p>
          <p>
            <a href="#" className="hover:text-primary">Privacy Policy</a> |{" "}
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
