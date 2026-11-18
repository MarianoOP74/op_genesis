import {
  IconBuildingHospital,
  IconChartBar,
  IconCheck,
  IconChevronDown,
  IconClipboardCheck,
  IconClock,
  IconLock,
  IconMapPin,
  IconPill,
  IconRefresh,
  IconShieldCheck,
  IconTemperature,
  IconTestPipe,
  IconTruckDelivery,
  IconUrgent
} from "@tabler/icons-react";
import { MobileMenu } from "@/components/MobileMenu";
import { Photo } from "@/components/Photo";
import { careersMailto, counties, demoMailto, faqs, site } from "@/lib/content";

// Service commitments included with every contract (not performance results).
const stats = [
  { value: "Every route", label: "GPS-tracked" },
  { value: "Every delivery", label: "Electronic chain of custody" },
  { value: "Every month", label: "Performance report included" },
  { value: "30–60 days", label: "No-risk pilot route" }
];

const trustPills = [
  "GPS-Tracked Routes",
  "Electronic Chain of Custody",
  "Digital Proof of Delivery",
  "Monthly Performance Reports"
];

const pillars = [
  {
    icon: IconMapPin,
    title: "Live Route Visibility",
    body: "Every pickup is GPS-tracked from collection to delivery, with ETA updates shared with your team."
  },
  {
    icon: IconRefresh,
    title: "Proactive Dispatch",
    body: "Routes are optimized daily and monitored throughout the day, so delays are caught early and you hear about them from us first."
  },
  {
    icon: IconChartBar,
    title: "Monthly Intelligence Reports",
    body: "On-time rate, delivery times, STAT performance, and route recommendations — included with every recurring contract."
  }
];

// Illustrative sample only — shows the report format, not real client results.
const reportRows = [
  ["Total deliveries", "Tracked"],
  ["On-time rate", "Tracked"],
  ["Average pickup-to-delivery time", "Tracked"],
  ["STAT deliveries", "Tracked"],
  ["Chain-of-custody records complete", "Tracked"],
  ["Average STAT response time", "Tracked"],
  ["Route recommendations", "Included"]
];

const services = [
  { icon: IconTestPipe, label: "Specimen Transport" },
  { icon: IconPill, label: "Pharmacy Delivery" },
  { icon: IconUrgent, label: "STAT & Emergency Courier" },
  { icon: IconTruckDelivery, label: "Medical Supply Distribution" },
  { icon: IconBuildingHospital, label: "Lab-to-Lab Transfer" },
  { icon: IconTemperature, label: "Temperature-Controlled Transport" },
  { icon: IconLock, label: "Electronic Chain of Custody" },
  { icon: IconClipboardCheck, label: "Monthly Performance Reporting" }
];

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className={`logo-wrap ${inverse ? "logo-wrap-dark" : ""}`}>
      <img
        src="/images/op-genesis-wordmark.webp"
        alt="OP Genesis"
        width={400}
        height={64}
        className="logo-wordmark"
      />
    </div>
  );
}

function Emblem({ className = "" }: { className?: string }) {
  return (
    <img
      src="/images/op-genesis-emblem.webp"
      alt=""
      width={640}
      height={468}
      loading="lazy"
      decoding="async"
      className={`select-none ${className}`}
      aria-hidden="true"
    />
  );
}

function Navigation() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-[var(--op-gray-border)] bg-white/95 px-6 backdrop-blur">
      <nav className="mx-auto flex h-full max-w-[1100px] items-center justify-between">
        <a href="#top" aria-label="OP Genesis home">
          <Logo />
        </a>
        <div className="hidden items-center gap-6 md:flex">
          <a className="nav-link" href="#solutions">
            Solutions
          </a>
          <a className="nav-link" href="#services">
            Services
          </a>
          <a className="nav-link" href="#about">
            About
          </a>
          <a className="nav-link" href="#contact">
            Contact
          </a>
          <a className="btn-primary px-[18px] py-2 text-[13px]" href="#contact">
            Request a Demo
          </a>
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual hero-photo-card">
      <Photo
        name="hero-image"
        widths={[640, 1024, 1600]}
        sizes="(max-width: 1023px) 100vw, 420px"
        alt="Medical courier collecting a secure specimen package outside a healthcare facility"
        width={1672}
        height={941}
        className="section-photo"
        priority
      />
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-section bg-white px-6 py-20 max-md:py-16">
      <div className="hero-shell mx-auto grid max-w-[1100px] grid-cols-[minmax(0,1fr)_420px] items-center gap-16 max-lg:grid-cols-1">
        <div className="hero-copy">
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.1em] text-[var(--op-teal)]">
            Medical Courier Services — Orlando, FL
          </p>
          <h1 className="mb-2 max-w-[580px] text-[34px] font-medium leading-tight text-[var(--op-navy)] max-md:text-[27px]">
            Know where every specimen is. Every time.
          </h1>
          <h2 className="mb-5 text-xl font-medium text-[var(--op-navy)] opacity-75">
            Medical courier service built on visibility and documentation.
          </h2>
          <p className="mb-7 max-w-[560px] text-base leading-[1.7] text-[var(--op-gray-text)]">
            OP Genesis offers GPS-tracked medical courier service with electronic chain of custody for hospitals,
            laboratories, pharmacies, and home health agencies across Orlando and central Florida — plus a monthly
            performance report that shows exactly how every delivery went.
          </p>
          <div className="hero-actions mb-8 flex flex-wrap gap-3">
            <a className="btn-primary px-6 py-3 text-[15px]" href="#contact">
              Request a Demo
            </a>
            <a className="btn-secondary px-6 py-3 text-[15px]" href="#how-it-works">
              See How It Works
            </a>
          </div>
          <div className="trust-list flex flex-wrap gap-[10px] border-t border-[var(--op-gray-border)] pt-8">
            {trustPills.map((pill) => (
              <span key={pill} className="trust-pill">
                <span className="trust-check">
                  <IconCheck size={11} aria-hidden="true" />
                </span>
                {pill}
              </span>
            ))}
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section className="border-y border-[var(--op-gray-border)] bg-white">
      <div className="mx-auto grid max-w-[1100px] grid-cols-4 max-md:grid-cols-2">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`px-6 py-7 text-center ${
              index !== stats.length - 1 ? "border-r border-[var(--op-gray-border)]" : ""
            } ${index === 1 ? "max-md:border-r-0" : ""} ${
              index < 2 ? "max-md:border-b max-md:border-[var(--op-gray-border)]" : ""
            }`}
          >
            <p className="mb-1 text-[26px] font-medium leading-tight text-[var(--op-navy)] max-md:text-[19px]">{stat.value}</p>
            <p className="m-0 text-xs text-[var(--op-gray-text)]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ChainOfCustodyCard() {
  const steps = ["Pickup scanned", "Driver verified", "Recipient sign-off"];

  return (
    <div className="visual-card">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="micro-label">Chain of custody · Example</p>
          <p className="mt-1 text-[15px] font-medium text-[var(--op-navy)]">Specimen #A1742</p>
        </div>
        <IconShieldCheck size={22} className="text-[var(--op-green-text)]" />
      </div>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step} className="timeline-row">
            <span className="timeline-dot">
              <IconCheck size={12} />
            </span>
            <div>
              <p className="m-0 text-[13px] font-medium text-[var(--op-navy)]">{step}</p>
              <p className="m-0 text-xs text-[var(--op-gray-text)]">
                {index === 0 ? "1:42 PM" : index === 1 ? "1:46 PM" : "2:16 PM"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Problem() {
  return (
    <section className="section-shell bg-[var(--op-gray-bg)]">
      <div className="content-shell grid grid-cols-[minmax(0,0.95fr)_360px] items-center gap-14 max-lg:grid-cols-1">
        <div>
          <p className="section-label">Where medical courier service breaks down</p>
          <h2 className="section-title max-w-[620px]">Your specimen is somewhere on I-4. Nobody knows exactly where.</h2>
          <div className="body-copy mt-6 max-w-[680px] space-y-4">
            <p>
              Many medical couriers still rely on phone calls and manual dispatch. When a driver hits traffic, a lab tech
              calls dispatch, dispatch calls the driver, and everyone waits.
            </p>
            <p>
              For time-sensitive specimens, STAT medications, and critical medical supplies — that&apos;s not a logistics
              problem. That&apos;s a patient care problem.
            </p>
            <p>There&apos;s a better way to run healthcare logistics in Orlando.</p>
          </div>
        </div>
        <ChainOfCustodyCard />
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section id="how-it-works" className="section-shell scroll-mt-16 bg-white">
      <div className="content-shell grid grid-cols-2 items-start gap-12 max-md:flex max-md:flex-col-reverse">
        <div>
          <p className="section-label">The OP Genesis way</p>
          <h2 className="section-title">You hear about a delay from us — before you have to ask.</h2>
          <div className="body-copy mt-6 max-w-[560px] space-y-4">
            <p>
              Every route is GPS-tracked and monitored by dispatch throughout the day. When traffic or a delay puts a
              pickup at risk, we re-route and send your designated contact an update with a new ETA.
            </p>
            <p>No phone trees. No chasing the driver. No wondering where your specimen is.</p>
          </div>
        </div>
        <div>
          <div className="solution-photo-card">
            <Photo
              name="section2-the-solution"
              widths={[640, 1024]}
              sizes="(max-width: 767px) 100vw, 530px"
              alt="Courier using route tracking inside a delivery vehicle"
              width={1448}
              height={1086}
              className="section-photo"
            />
          </div>
          <div className="visual-card solution-overlay-card">
            <div className="mb-3.5 flex items-center justify-between gap-4">
              <p className="m-0 text-[13px] font-medium text-[var(--op-navy)]">Example update</p>
              <span className="status-pill">Proactive alert</span>
            </div>
            <p className="mb-2.5 text-[13px] leading-[1.6] text-[var(--op-gray-text)]">
              Your specimen pickup from Lakeside Family Clinic is delayed by traffic on I-4. Your driver has been
              re-routed and is en route.
            </p>
            <p className="mb-3.5 text-sm font-medium text-[var(--op-navy)]">New ETA: 2:16 PM</p>
            <div className="flex items-center gap-1.5 border-t border-[var(--op-gray-border)] pt-3 text-xs text-[var(--op-gray-text)]">
              <IconClock size={13} />
              No action required.
            </div>
          </div>
          <p className="mt-3 text-[13px] italic text-[var(--op-gray-text)]">
            Illustrative example of the updates clients receive.
          </p>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section id="solutions" className="section-shell scroll-mt-16 bg-[var(--op-gray-bg)]">
      <div className="content-shell">
        <div className="section-heading-row">
          <div>
            <p className="section-label">What sets us apart</p>
            <h2 className="section-title">Built differently from the ground up.</h2>
          </div>
          <p className="heading-sidecopy">
            A logistics partner built around visibility, proactive communication, and monthly operational accountability.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-4 max-md:grid-cols-1">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="feature-card">
                {pillar.title === "Proactive Dispatch" ? (
                  <Photo
                    name="pillarcard2-intelligent-dispatch"
                    widths={[640, 1024]}
                    sizes="(max-width: 767px) 100vw, 360px"
                    alt="Dispatcher monitoring live route tracking screens"
                    width={1536}
                    height={1024}
                    className="pillar-photo"
                  />
                ) : null}
                <Icon className="mb-3.5 text-[var(--op-navy)]" size={20} />
                <h3 className="mb-2 text-[15px] font-medium leading-snug text-[var(--op-navy)]">{pillar.title}</h3>
                <p className="m-0 text-[13px] leading-[1.6] text-[var(--op-gray-text)]">{pillar.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MonthlyReport() {
  return (
    <section className="section-shell bg-white">
      <div className="content-shell grid grid-cols-2 items-start gap-12 max-md:grid-cols-1">
        <div>
          <p className="section-label">Operational analytics</p>
          <h2 className="section-title">Every invoice comes with a performance report.</h2>
          <div className="body-copy mt-6 max-w-[560px] space-y-4">
            <p>Every recurring client receives a monthly operational report — not just a bill.</p>
            <p>
              Delivery volume, on-time performance, average response time, STAT performance, and route
              recommendations for the month ahead.
            </p>
            <p>You see exactly how your deliveries performed — and what we recommend changing.</p>
            <p>Most couriers tell you what they did. We tell you what to do next.</p>
          </div>
          <p className="mt-5 max-w-[560px] border-t border-[var(--op-gray-border)] pt-5 text-sm leading-[1.7] text-[var(--op-gray-text)]">
            New clients can start with a no-risk 30–60 day pilot route. We track on-time rate, response time, and
            chain-of-custody completeness from day one, so you can judge us on results.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl border border-[var(--op-gray-border)] bg-white shadow-[0_18px_50px_rgba(10,42,110,0.07)]">
          <div className="bg-[var(--op-navy)] px-5 py-3.5">
            <p className="mb-[3px] text-[11px] uppercase tracking-[0.06em] text-white/70">Monthly Report · Sample format</p>
            <p className="m-0 text-sm font-medium text-white">Your organization</p>
          </div>
          <div>
            {reportRows.map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between gap-4 border-b border-[rgba(0,0,0,0.06)] px-5 py-2.5 last:border-b-0"
              >
                <span className="text-[13px] text-[var(--op-gray-text)]">{label}</span>
                <span
                  className="text-[13px] font-medium text-[var(--op-navy)]"
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
          <div className="bg-[var(--op-navy-light)] px-5 py-3.5">
            <p className="mb-1.5 text-[11px] font-medium uppercase tracking-[0.06em] text-[var(--op-navy)]">
              Recommendation
            </p>
            <p className="m-0 text-[13px] leading-[1.6] text-[#185fa5]">
              Example: &ldquo;Move Tuesday afternoon pickup windows 30 minutes earlier to avoid peak I-4 traffic.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-shell scroll-mt-16 bg-[var(--op-gray-bg)]">
      <div className="content-shell">
        <div className="section-heading-row">
          <div>
            <p className="section-label">What we deliver</p>
            <h2 className="section-title max-w-[620px]">
              Specialized medical courier services across Orlando and central Florida.
            </h2>
          </div>
          <div className="service-area-card">
            <p className="micro-label">Service area</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {counties.map((area) => (
                <span key={area} className="area-chip">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="services-photo-card">
          <Photo
            name="services-section"
            widths={[640, 1024, 1600]}
            sizes="(max-width: 1100px) 100vw, 1100px"
            alt="Clinical laboratory with temperature-controlled medical storage"
            width={1672}
            height={941}
            className="section-photo"
          />
        </div>
        <p className="mt-5 max-w-[720px] text-sm leading-[1.7] text-[var(--op-gray-text)]">
          Our service area covers Orange, Seminole, Osceola, Lake, and Volusia counties. Scheduled routes and same-day
          STAT delivery are available for hospitals, independent laboratories, pharmacies, medical suppliers, and home
          health agencies.
        </p>
        <div className="mt-10 grid grid-cols-4 gap-3 max-md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.label} className="service-tile">
                <Icon className="mx-auto mb-2.5 text-[var(--op-navy)]" size={22} />
                <h3 className="m-0 text-[13px] font-medium leading-[1.4] text-[var(--op-navy)]">{service.label}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="section-shell bg-white">
      <div className="content-shell grid grid-cols-[minmax(0,0.95fr)_360px] items-center gap-14 max-lg:grid-cols-1">
        <div>
          <p className="section-label">Why OP Genesis</p>
          <h2 className="section-title">We don&apos;t compete on price. We compete on reliability.</h2>
          <div className="body-copy mt-6 max-w-[650px] space-y-5">
            <p>Any courier can pick up a package.</p>
            <p>
              OP Genesis builds visibility into every contract — GPS tracking on every route, electronic chain of
              custody and digital proof of delivery on every handoff, proactive updates when something changes, and a
              performance report every month.
            </p>
            <p>
              We move your specimens and supplies — and show you where delays and bottlenecks are forming, so your
              team can plan around them.
            </p>
            <p className="text-[17px] font-medium leading-[1.4] text-[var(--op-navy)]">
              That&apos;s not a courier service.
              <br />
              That&apos;s a logistics partner.
            </p>
          </div>
        </div>
        <div className="visual-card overflow-hidden">
          <p className="micro-label">Included as standard</p>
          <div className="mt-4 space-y-3">
            {[
              ["Electronic chain of custody", "Every delivery"],
              ["GPS route tracking", "Every route"],
              ["Monthly performance report", "Included"]
            ].map(([label, value]) => (
              <div key={label} className="score-row">
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <div className="image-slot mt-5">
            <Emblem className="h-24 w-auto opacity-90" />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-16 bg-[var(--op-gray-bg)] px-6 py-12">
      <div className="mx-auto max-w-[760px] rounded-2xl border border-[var(--op-gray-border)] bg-white px-8 py-7 text-center shadow-[0_14px_40px_rgba(10,42,110,0.04)] max-md:px-5">
        <p className="m-0 text-sm leading-[1.8] text-[var(--op-gray-text)]">
          OP Genesis is a healthcare logistics company based in Orlando, Florida, built to serve hospitals, independent
          laboratories, pharmacies, medical suppliers, and home health agencies across central Florida. Every route
          includes GPS tracking, electronic chain of custody, digital proof of delivery, and a monthly operational
          performance report — standard, not an upsell.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section-shell bg-white">
      <div className="content-shell max-w-[760px]">
        <div className="faq-heading">
          <p className="section-label">Common questions</p>
          <h2 className="section-title">Everything you need to know before you call.</h2>
          <p>
            Quick answers for healthcare teams evaluating OP Genesis for courier coverage, compliance, and delivery
            documentation.
          </p>
        </div>
        <div className="mt-10 rounded-2xl border border-[var(--op-gray-border)] bg-white">
          {faqs.map((faq, index) => (
            <details key={faq.question} className={`faq-item ${index !== faqs.length - 1 ? "border-b border-[var(--op-gray-border)]" : ""}`}>
              <summary>
                <span>{faq.question}</span>
                <span className="faq-icon">
                  <IconChevronDown size={18} aria-hidden="true" />
                </span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--op-navy)] px-6 py-20 text-center">
      <Emblem className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-auto -translate-x-1/2 -translate-y-1/2 opacity-[0.06]" />
      <div className="relative mx-auto max-w-[520px]">
        <h2 className="mx-auto mb-4 max-w-[480px] text-[26px] font-medium leading-[1.3] text-white">
          Built for healthcare networks that demand more than a driver.
        </h2>
        <p className="mx-auto mb-7 max-w-[440px] text-[15px] leading-[1.7] text-white/65">
          Schedule a 20-minute call. We&apos;ll review your routes and requirements and propose a no-risk 30–60 day
          pilot route — so you can judge us on tracked results, not promises.
        </p>
        <a className="btn-teal px-8 py-3.5 text-[15px]" href={demoMailto}>
          Book a Demo
        </a>
        <p className="mt-3.5 text-[13px] text-white/65">We aim to respond within one business day.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--op-navy-dark)] px-6 pb-8 pt-16">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-4 gap-10 max-md:grid-cols-1">
          <div>
            <Logo inverse />
            <p className="mt-3 text-[13px] text-white/70">Delivering Care. Every Time.</p>
          </div>
          <FooterColumn
            title="Services"
            links={["Specimen Transport", "Pharmacy Delivery", "STAT & Emergency", "Lab-to-Lab Transfer"]}
          />
          <div>
            <h3 className="footer-heading">Company</h3>
            <a className="footer-link" href="#about">
              About Us
            </a>
            <a className="footer-link" href="#how-it-works">
              Our Approach
            </a>
            <a className="footer-link" href={careersMailto}>
              Careers
            </a>
            <a className="btn-teal mt-2 px-4 py-2 text-[13px]" href="#contact">
              Request a Demo
            </a>
          </div>
          <div>
            <h3 className="footer-heading">Contact</h3>
            <a className="footer-link" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
            <a className="footer-link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <p className="m-0 text-[13px] leading-8 text-white/70">
              {site.city}, {site.region} {site.postalCode}
            </p>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between gap-6 border-t border-white/10 pt-6 max-md:flex-col max-md:items-start">
          <p className="m-0 flex flex-wrap gap-3 text-xs text-white/65">
            <span>GPS-Tracked Routes</span>
            <span>·</span>
            <span>Electronic Chain of Custody</span>
            <span>·</span>
            <span>Monthly Performance Reports</span>
          </p>
          <p className="m-0 max-w-[520px] text-xs text-white/60">
            OP Genesis Healthcare Logistics Solutions Serving Orlando, Orange County, Seminole County, Osceola County,
            and central Florida.
          </p>
        </div>
        <p className="mt-4 text-xs text-white/60">
          © 2026 OP Genesis Healthcare Logistics Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="footer-heading">{title}</h3>
      {links.map((link) => (
        <a key={link} className="footer-link" href="#services">
          {link}
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <StatsBar />
        <Problem />
        <Solution />
        <Pillars />
        <MonthlyReport />
        <Services />
        <Why />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
