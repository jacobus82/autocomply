import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AutoComply Digital Solutions | Professional Websites for South African Businesses',
  description:
    'Affordable, professional websites designed for South African SMEs. Fast, mobile-friendly, SSL-secured and SEO-ready. Packages from R349/month. Call 067 011 3108.',
  keywords: [
    'website design South Africa',
    'affordable websites SME',
    'business website Lydenburg',
    'web design Mpumalanga',
    'AutoComply Digital Solutions',
    'small business websites',
    'SEO South Africa',
  ],
  openGraph: {
    title: 'AutoComply Digital Solutions | Websites That Grow Your Business',
    description:
      'Professional, affordable websites for South African SMEs. We build, we manage, you grow. From R349/month.',
    url: 'https://autocomply.co.za/digital-solutions',
    siteName: 'AutoComply',
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutoComply Digital Solutions',
    description: 'Websites That Grow Your Business. From R349/month.',
  },
  alternates: {
    canonical: 'https://autocomply.co.za/digital-solutions',
  },
}

// ─── constants ────────────────────────────────────────────────────────────────
const WA_BASE = 'https://wa.me/27670113108'
const TEL = 'tel:+27670113108'
const TEL_DISPLAY = '067 011 3108'

function waLink(message: string) {
  return `${WA_BASE}?text=${encodeURIComponent(message)}`
}

// ─── data ─────────────────────────────────────────────────────────────────────
const trustItems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: 'Fast & Reliable',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Mobile Friendly',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: 'Secure & SSL Certified',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    label: 'SEO Ready',
  },
]

const packages = [
  {
    name: 'Starter Presence',
    tagline: 'Get online fast',
    monthly: 'R349',
    setup: 'R1,500',
    setupNote: 'once-off setup',
    popular: false,
    features: [
      '1–3 page professional website',
      'Mobile-responsive design',
      'Contact form',
      'Google Maps integration',
      'SSL certificate included',
      'Basic on-page SEO',
      'Monthly hosting & maintenance',
    ],
    cta: 'Get Started on WhatsApp',
    waMessage: "Hi, I'm interested in the Starter Presence website package (R349/mo). Please send me more info.",
  },
  {
    name: 'Business Growth',
    tagline: 'Most popular for SMEs',
    monthly: 'R699',
    setup: 'R4,500',
    setupNote: 'once-off setup',
    popular: true,
    features: [
      'Up to 8 pages',
      'Custom branded design',
      'Product or services showcase',
      'Blog / news section',
      'WhatsApp chat button',
      'Google Analytics integration',
      'Advanced on-page SEO',
      'Monthly hosting, backups & updates',
    ],
    cta: 'Choose Business Growth',
    waMessage: "Hi, I'm interested in the Business Growth website package (R699/mo). Please send me more info.",
  },
  {
    name: 'Premium Performance',
    tagline: 'Full-featured digital presence',
    monthly: 'R1,499',
    setup: 'From R12,000',
    setupNote: 'once-off setup',
    popular: false,
    features: [
      'Unlimited pages',
      'E-commerce / online bookings',
      'Custom animations & interactions',
      'Advanced SEO + schema markup',
      'Speed & Core Web Vitals optimisation',
      'Monthly performance reports',
      'Priority support',
      'Hosting, backups & security monitoring',
    ],
    cta: 'Enquire About Premium',
    waMessage: "Hi, I'm interested in the Premium Performance website package (R1,499/mo). Please send me more info.",
  },
]

const addons = [
  'Domain Management',
  'Business Email Setup',
  'Security & Backups',
  'Ongoing Support',
]

// ─── components ───────────────────────────────────────────────────────────────

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

// ─── page ─────────────────────────────────────────────────────────────────────

export default function DigitalSolutionsPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: 'linear-gradient(135deg, #1B2F4E 0%, #0f1e33 100%)' }}
      >
        {/* subtle grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,1) 40px,rgba(255,255,255,1) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,1) 40px,rgba(255,255,255,1) 41px)',
          }}
        />

        <div className="relative mx-auto max-w-4xl text-center">
          {/* label */}
          <span className="mb-4 inline-block rounded-full border border-green-500/40 bg-green-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-green-400">
            AutoComply Digital Solutions
          </span>

          <h1 className="mt-2 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Websites That{' '}
            <span className="text-green-400">Grow Your Business</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Professional, affordable websites built for South African SMEs.
            We handle the tech — you focus on running your business.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={waLink("Hi, I'd like to enquire about a website for my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg bg-green-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
            <a
              href={TEL}
              className="inline-flex items-center gap-2.5 rounded-lg border border-slate-400/50 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <PhoneIcon />
              {TEL_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ───────────────────────────────────────────────────────── */}
      <section className="border-b border-slate-100 bg-slate-50 px-4 py-6">
        <div className="mx-auto max-w-5xl">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {trustItems.map(({ icon, label }) => (
              <li key={label} className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600">
                  {icon}
                </span>
                <span className="text-sm font-semibold text-slate-700">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── BANNER ──────────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#1B2F4E' }} className="px-4 py-5 text-center">
        <p className="text-lg font-bold tracking-wide text-white sm:text-xl">
          We Build.&nbsp; We Manage.&nbsp;
          <span className="text-green-400">You Grow.</span>
        </p>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────────────────── */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-3 text-slate-500">
              No hidden fees. Cancel anytime. Setup fee is once-off.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col rounded-2xl border shadow-sm transition hover:shadow-md ${
                  pkg.popular
                    ? 'border-green-500 shadow-green-100'
                    : 'border-slate-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-0 right-0 flex justify-center">
                    <span className="rounded-full bg-green-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* card header */}
                <div
                  className={`rounded-t-2xl px-6 pt-8 pb-6 ${
                    pkg.popular ? 'bg-green-600 text-white' : 'bg-slate-50 text-slate-900'
                  }`}
                >
                  <p className={`text-xs font-semibold uppercase tracking-widest ${pkg.popular ? 'text-green-100' : 'text-green-600'}`}>
                    {pkg.tagline}
                  </p>
                  <h3 className="mt-1 text-xl font-extrabold">{pkg.name}</h3>

                  <div className="mt-4 flex items-end gap-1">
                    <span className="text-4xl font-extrabold">{pkg.monthly}</span>
                    <span className={`mb-1 text-sm font-medium ${pkg.popular ? 'text-green-100' : 'text-slate-500'}`}>
                      /month
                    </span>
                  </div>
                  <p className={`mt-1 text-xs ${pkg.popular ? 'text-green-100' : 'text-slate-400'}`}>
                    {pkg.setup} {pkg.setupNote}
                  </p>
                </div>

                {/* features */}
                <div className="flex flex-1 flex-col gap-6 rounded-b-2xl bg-white px-6 py-6">
                  <ul className="flex flex-col gap-3">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <span className="mt-0.5 text-green-500">
                          <CheckIcon />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink(pkg.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                      pkg.popular
                        ? 'bg-green-600 text-white hover:bg-green-500 focus:ring-green-500'
                        : 'border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 focus:ring-slate-400'
                    }`}
                  >
                    <WhatsAppIcon />
                    {pkg.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-slate-400">
            All prices exclude VAT. Hosting is billed monthly after setup. No lock-in contracts.
          </p>
        </div>
      </section>

      {/* ── ADD-ONS BAR ─────────────────────────────────────────────────────── */}
      <section className="border-y border-slate-100 bg-slate-50 px-4 py-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Available Add-Ons
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-3">
            {addons.map((addon) => (
              <li
                key={addon}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                {addon}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-slate-500">
            Chat to us about custom add-ons for your business.
          </p>
        </div>
      </section>

      {/* ── WHY US ──────────────────────────────────────────────────────────── */}
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Why Choose AutoComply Digital Solutions?
          </h2>
          <p className="mt-4 text-slate-500">
            We're a South African business that understands South African SMEs. No overseas call centres,
            no confusing tech jargon — just a reliable partner who builds your online presence and keeps
            it running month after month.
          </p>
          <div className="mt-8 grid gap-6 text-left sm:grid-cols-3">
            {[
              {
                heading: 'Local & Personal',
                body: 'We're based in South Africa. You'll always deal with a real person who knows your market.',
              },
              {
                heading: 'All-Inclusive Monthly',
                body: 'Hosting, maintenance, backups and support are bundled. No surprise bills.',
              },
              {
                heading: 'Built to Convert',
                body: 'Every website is designed to turn visitors into leads and customers — not just look pretty.',
              },
            ].map(({ heading, body }) => (
              <div key={heading} className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                <h3 className="font-bold text-slate-900">{heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA STRIP ────────────────────────────────────────────────── */}
      <section className="bg-green-600 px-4 py-12 text-center sm:px-6">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
          Ready to get your business online?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-green-100">
          Send us a WhatsApp or give us a call — we'll recommend the right package for your business
          and get you a quote within 24 hours.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={waLink("Hi, I'd like to get my business online. Please send me more info.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg bg-white px-7 py-3.5 text-sm font-bold text-green-700 shadow transition hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
          >
            <WhatsAppIcon />
            WhatsApp Us
          </a>
          <a
            href={TEL}
            className="inline-flex items-center gap-2.5 rounded-lg border-2 border-white/60 px-7 py-3.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <PhoneIcon />
            {TEL_DISPLAY}
          </a>
        </div>
      </section>

      {/* ── FOOTER NOTE ─────────────────────────────────────────────────────── */}
      <footer
        className="px-4 py-6 text-center text-xs text-slate-400"
        style={{ backgroundColor: '#1B2F4E' }}
      >
        <p className="text-slate-300">
          © {new Date().getFullYear()} AutoComply Digital Solutions &mdash; a division of{' '}
          <a href="https://autocomply.co.za" className="underline underline-offset-2 hover:text-white">
            AutoComply
          </a>
        </p>
        <p className="mt-1 text-slate-500">
          South Africa &bull; {TEL_DISPLAY} &bull; autocomply.co.za
        </p>
      </footer>

    </div>
  )
}
