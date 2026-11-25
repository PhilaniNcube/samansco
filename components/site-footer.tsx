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
      <div className="shell pbs-16 pbe-8 lg:pbs-20">
        <div className="grid gap-10 border-b border-white/10 pbe-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col items-start lg:col-span-4">
            <Image
              src="/images/samansco-logo.png"
              alt="Samansco Group"
              width={826}
              height={254}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="type-body-sm mbs-5 max-w-[38ch] leading-relaxed text-white/75">
              A vertically integrated renewable energy and electricity group
              shaping Africa&apos;s clean energy future since 1982.
            </p>
          </div>

          <nav aria-label="Operating companies" className="lg:col-span-3">
            <h2 className="type-label mbe-4 font-semibold text-white">
              Operating companies
            </h2>
            <ul className="flex flex-col gap-2.5">
              {divisions.map((division) => (
                <li key={division.href}>
                  <Link
                    href={division.href}
                    className="type-body-sm text-white/75 transition-colors hover:text-white"
                  >
                    {division.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Governance and legal" className="lg:col-span-2">
            <h2 className="type-label mbe-4 font-semibold text-white">
              Governance and legal
            </h2>
            <ul className="flex flex-col gap-2.5">
              {governance.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="type-body-sm text-white/75 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="type-label mbe-4 font-semibold text-white">
              Head office
            </h2>
            <address className="type-body-sm flex flex-col gap-1 text-white/75 not-italic">
              <span>{headOffice.street}</span>
              <span>{headOffice.suburb}</span>
              <span>{headOffice.country}</span>
            </address>
            <div className="type-body-sm mbs-4 flex flex-col gap-1.5 text-white/75">
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

        <div className="type-body-sm flex flex-col gap-3 pbs-6 text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© Samansco Group. Operating since 1982.</p>
          <p>Regional utility licensed operator</p>
        </div>
      </div>
    </footer>
  );
}
