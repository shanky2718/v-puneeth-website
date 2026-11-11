import { motion } from 'framer-motion';
import {
  profile,
  education,
  ABOUT_PARAGRAPHS,
  spokenLanguages,
  professionalMemberships
} from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';

export default function About({
  onOpenTeaching,
  onOpenAdministration
}: {
  onOpenTeaching?: () => void;
  onOpenAdministration?: () => void;
}) {
  const facts = [
    { k: 'Affiliation', v: 'CHRIST (Deemed to be University)', s: 'Assistant Professor · Department of Mathematics' },
    { k: 'Global Honor', v: 'Stanford Top 2% Scientist', s: 'Most Influential Scientists Worldwide (2024 & 2025)' },
    { k: 'Research Output', v: '73 Publications · 1980+ Citations', s: 'h-index: 22 · i-10: 41 · 42 Q1 Journals' },
    { k: 'Global Appointment', v: 'Universiti Malaysia Terengganu', s: 'Visiting Lecturer · 2026 – Present' },
  ];

  return (
    <>
      <SectionHeading kicker="The Pilot" title="About Me" />
      <div className="gutter grid items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
        <motion.div
          className="mx-auto w-full max-w-md lg:max-w-none lg:sticky lg:top-24"
          initial={{ opacity: 0, scale: 0.88, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <Tilt max={5} className="rounded-2xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,#5a0b1b,#14060a_60%,#07070a)]" />
              <div className="absolute inset-0 opacity-50 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_28px)]" />
              <img
                src="/assets/portrait-720.webp"
                srcSet={profile.portrait.srcSet}
                sizes="(max-width: 1024px) 90vw, 40vw"
                alt={profile.portrait.alt}
                loading="lazy"
                className="absolute bottom-0 left-1/2 h-[92%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.3em] text-crimson-2">STARRING</p>
                  <p className="font-display text-3xl leading-none text-bone">{profile.displayName}</p>
                </div>
                <span className="rounded border border-white/30 px-1.5 text-[10px] font-bold text-bone">S01–S04</span>
              </div>
            </div>
          </Tilt>

          {/* Quick Academic Profile Summary Card */}
          <div className="mt-6 rounded-2xl bg-ink-2 p-5 ring-1 ring-white/10 space-y-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-2">Institutional Contact</p>
              <p className="mt-1 font-semibold text-bone text-sm">{profile.role}</p>
              <p className="text-xs text-mist">{profile.affiliation}</p>
              <p className="text-xs text-smoke">Bengaluru - 560029, Karnataka, India</p>
            </div>
            <div className="border-t border-white/10 pt-3 flex flex-wrap gap-2 text-xs">
              <a href={`mailto:${profile.email}`} className="text-crimson-2 hover:underline">
                {profile.email}
              </a>
              <span className="text-smoke">·</span>
              <a href={`tel:${profile.phone}`} className="text-bone/80 hover:text-bone">
                {profile.phone}
              </a>
            </div>
          </div>
        </motion.div>

        <div className="space-y-8">
          {/* Main Intro Quote */}
          <div>
            <motion.p
              className="font-serif text-[clamp(1.5rem,2.8vw,2.3rem)] italic leading-[1.2] text-bone"
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: EASE }}
            >
              “{profile.intro}”
            </motion.p>
            <p className="mt-4 text-sm font-semibold text-crimson-2">— {profile.fullName}</p>
          </div>

          {/* Key Facts Grid */}
          <motion.dl
            className="grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
          >
            {facts.map((f) => (
              <motion.div
                key={f.k}
                className="bg-ink-2 p-5"
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
              >
                <dt className="text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">{f.k}</dt>
                <dd className="mt-2 text-base font-semibold text-bone">{f.v}</dd>
                <dd className="mt-0.5 text-xs text-mist">{f.s}</dd>
              </motion.div>
            ))}
          </motion.dl>

          {/* Complete 3-Paragraph Unabridged Biography from PDF */}
          <div className="rounded-2xl bg-ink-2 p-6 sm:p-8 ring-1 ring-white/10 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-2">
                Unabridged Professional Profile
              </span>
              <span className="font-mono text-xs text-smoke">Official Biography</span>
            </div>
            {ABOUT_PARAGRAPHS.map((para, idx) => (
              <p key={idx} className="text-sm sm:text-[15px] leading-relaxed text-bone/85">
                {para}
              </p>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
              {onOpenTeaching && (
                <button
                  type="button"
                  onClick={onOpenTeaching}
                  className="rounded-lg bg-crimson px-4 py-2 text-xs font-semibold text-white transition hover:bg-crimson-2"
                >
                  Read Full Teaching Statement →
                </button>
              )}
              {onOpenAdministration && (
                <button
                  type="button"
                  onClick={onOpenAdministration}
                  className="rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold text-bone transition hover:bg-white/20"
                >
                  View Administration & Governance (IQAC) →
                </button>
              )}
            </div>
          </div>

          {/* Vertical Academic Timeline */}
          <div className="rounded-2xl bg-ink-2 p-6 sm:p-8 ring-1 ring-white/10">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-2">
                Academic Timeline
              </span>
              <span className="font-mono text-xs text-smoke">6 Degrees & Credentials</span>
            </div>

            <div className="relative border-l-2 border-white/10 pl-6 space-y-6 ml-2">
              {education.map((e) => (
                <div key={e.school} className="relative group">
                  <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-crimson bg-ink transition group-hover:scale-125 group-hover:bg-crimson" />
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h4 className="font-sans text-sm font-bold text-bone">{e.degree}</h4>
                    <span className="font-mono text-xs text-crimson-2 font-semibold">{e.period}</span>
                  </div>
                  <p className="text-xs text-mist mt-0.5">{e.school} · {e.place}</p>
                  <p className="text-[11px] text-smoke mt-0.5 font-medium">{e.score}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Research Interests & Languages */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-ink-2 p-6 ring-1 ring-white/10">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">Primary Research Interests</p>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((i) => (
                  <span key={i} className="glass rounded-full px-3 py-1 text-xs font-medium text-bone">
                    {i}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-ink-2 p-6 ring-1 ring-white/10">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">Languages & Society</p>
              <div className="flex flex-wrap gap-2">
                {spokenLanguages.map((l) => (
                  <span key={l} className="glass rounded-full px-3 py-1 text-xs font-medium text-[#46e3a8]">
                    {l}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs font-semibold text-bone">
                {professionalMemberships[0].name}
              </p>
              <p className="mt-0.5 text-xs text-mist">{professionalMemberships[0].description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
