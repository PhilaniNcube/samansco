import Image from "next/image";
import Link from "next/link";
import { divisions, headOffice } from "@/lib/site";

const governance = [
  { href: "/contact#hse", label: "Health & Safety Policy" },
  { href: "/contact#quality", label: "Quality Standards (ISO)" },
  { href: "/contact#governance", label: "ZERA Registrations" },
  { href: "/contact#governance", label: "Privacy & Compliance" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="shell pt-16 pb-8 lg:pt-20">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col items-start lg:col-span-4">
            <Image
              src="/images/samansco-logo.png"
              alt="Samansco Group"
              width={826}
              height={254}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="type-body-sm mt-5 max-w-sm leading-relaxed text-white/60">
              A vertically integrated renewable energy and electricity group
              shaping Africa&apos;s clean energy future since 1982.
            </p>
            <span className="type-code mt-6 inline-flex rounded bg-white/5 px-3 py-1.5 text-white/70">
              INFRASTRUCTURE • UTILITY • CARBON
            </span>
          </div>

          <nav aria-label="Operating companies" className="lg:col-span-3">
            <h2 className="type-eyebrow mb-4 text-white/50">
              Operating Companies
            </h2>
            <ul className="flex flex-col gap-2.5">
              {divisions.map((division) => (
                <li key={division.href}>
                  <Link
                    href={division.href}
                    className="type-body-sm text-white/60 transition-colors hover:text-white"
                  >
                    {division.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Governance and legal" className="lg:col-span-2">
            <h2 className="type-eyebrow mb-4 text-white/50">
              Governance & Legal
            </h2>
            <ul className="flex flex-col gap-2.5">
              {governance.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="type-body-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="type-eyebrow mb-4 text-white/50">Head Office</h2>
            <address className="type-body-sm flex flex-col gap-1 text-white/60 not-italic">
              <span>{headOffice.street}</span>
              <span>{headOffice.suburb}</span>
              <span>{headOffice.country}</span>
            </address>
            <div className="type-code mt-4 flex flex-col gap-1.5 text-white/60">
              <a
                href={`tel:${headOffice.phone.replace(/[^+\d]/g, "")}`}
                className="transition-colors hover:text-white"
              >
                Tel: {headOffice.phone}
              </a>
              <a
                href={`mailto:${headOffice.email}`}
                className="transition-colors hover:text-white"
              >
                {headOffice.email}
              </a>
            </div>
          </div>
        </div>

        <div className="type-code flex flex-col gap-3 pt-6 text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 1982–2025 Samansco Group. All rights reserved.</p>
          <p className="flex items-center gap-2 uppercase">
            Regional Utility Licensed Operator
          </p>
        </div>
      </div>
    </footer>
  );
}
