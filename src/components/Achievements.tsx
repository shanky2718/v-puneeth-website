import { useRef } from 'react';
import { motion } from 'framer-motion';
import { achievements, CERTIFICATIONS_LIST } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';
import { RailButtons } from './Rail';

function Laurel({ side }: { side: 'l' | 'r' }) {
  return (
    <svg viewBox="0 0 30 64" className={`h-14 w-auto text-[#d9b46a] ${side === 'r' ? '-scale-x-100' : ''}`} aria-hidden>
      <path d="M26 62C10 52 4 36 8 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      {[10, 18, 26, 34, 42, 50].map((y, i) => (
        <ellipse key={y} cx={i < 2 ? 9 : 8 + i * 1.6} cy={y} rx="5" ry="2.2" fill="currentColor" opacity="0.85" transform={`rotate(-40 ${8 + i * 1.6} ${y})`} />
      ))}
    </svg>
  );
}

export default function Achievements({
  onOpenActivities
}: {
  onOpenActivities?: (tab?: 'funding' | 'events' | 'talks' | 'certifications' | 'references') => void;
}) {
  const rail = useRef<HTMLDivElement>(null);

  return (
    <>
      <SectionHeading kicker="Awards season" title="Top Moments" />

      {/* Extramural Grants & Conferences Feature Banner */}
      <div className="gutter mb-10">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-ink-2 via-ink-2 to-ink p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="rounded bg-crimson/20 px-2 py-0.5 font-mono text-[10px] font-bold text-crimson-2">
                EXTRAMURAL GRANTS & CONFERENCES
              </span>
              <span className="font-mono text-xs text-smoke">INR 12,00,000+ Secured</span>
            </div>
            <h3 className="font-display text-2xl text-bone sm:text-3xl">
              Research Grants, Consultancy & Academic Symposia
            </h3>
            <p className="text-xs text-mist leading-relaxed">
              Funded research from the Ministry of Jal Shakti, ANRF, AICTE VAANI, and CHRIST University, alongside ATOMALLOYS 5000L tank CFD industrial consultancy.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 shrink-0">
            {onOpenActivities && (
              <>
                <button
                  type="button"
                  onClick={() => onOpenActivities('funding')}
                  className="rounded-lg bg-crimson px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-crimson-2"
                >
                  View Grants & Consultancy →
                </button>
                <button
                  type="button"
                  onClick={() => onOpenActivities('events')}
                  className="rounded-lg bg-white/10 px-4 py-2.5 text-xs font-semibold text-bone transition hover:bg-white/20"
                >
                  Conferences & SAINTS 2026 →
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="gutter grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 [perspective:1400px]">
        {achievements.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 50, rotateX: 18 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
          >
            <Tilt max={8} className="group h-full rounded-2xl">
              <article className="relative flex h-full min-h-[340px] flex-col items-center overflow-hidden rounded-2xl bg-[radial-gradient(120%_80%_at_50%_0%,#2a1f10,#0d0b08_60%,#07070a)] px-5 pb-6 pt-8 text-center ring-1 ring-[#d9b46a]/20 transition duration-500 group-hover:ring-[#d9b46a]/60">
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9b46a]/70 to-transparent" />
                <div aria-hidden className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#d9b46a]/10 blur-3xl transition duration-700 group-hover:bg-[#d9b46a]/25" />
                <div className="relative flex items-center gap-1">
                  <Laurel side="l" />
                  <div className="px-1">
                    <p className="text-[9px] font-bold uppercase leading-tight tracking-[0.24em] text-[#d9b46a]">{a.laurel}</p>
                  </div>
                  <Laurel side="r" />
                </div>
                <h3 className="relative mt-6 font-display text-[2.1rem] leading-[0.92] tracking-wide text-bone">{a.title}</h3>
                <p className="relative mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9b46a]">{a.org}</p>
                <p className="relative mt-4 text-[13px] leading-relaxed text-bone/70">{a.detail}</p>
                {a.link && (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="relative mt-auto inline-flex min-h-10 items-center gap-1 pt-5 text-xs font-semibold tracking-wide text-bone underline decoration-[#d9b46a]/60 underline-offset-4 hover:decoration-[#d9b46a]"
                  >
                    View certificate ↗
                  </a>
                )}
              </article>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Online certifications collection from PDF */}
      <div className="mt-16">
        <div className="gutter mb-3 flex flex-wrap items-end justify-between gap-2">
          <div>
            <h3 className="font-sans text-lg font-semibold text-bone sm:text-2xl">
              Professional Courses & Specializations <span className="text-mist">· {CERTIFICATIONS_LIST.length} Programs</span>
            </h3>
            <p className="text-xs text-smoke mt-0.5">
              Verified certifications from IBM, Yale University, Cambridge, Northwestern, UPenn, Toronto & Wesleyan
            </p>
          </div>
          {onOpenActivities && (
            <button
              type="button"
              onClick={() => onOpenActivities('certifications')}
              className="text-xs font-semibold text-crimson-2 hover:underline"
            >
              View Full Certifications Dossier ↗
            </button>
          )}
        </div>
        <div className="group/rail relative">
          <div ref={rail} className="rail gutter flex snap-x gap-3 overflow-x-auto py-5">
            {CERTIFICATIONS_LIST.map((c, i) => (
              <motion.div
                key={c.id}
                className="group relative flex w-[260px] shrink-0 snap-start flex-col justify-between rounded-xl bg-ink-2 p-5 ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-white/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(i, 6) * 0.04, ease: EASE }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-crimson-2">{c.institution}</span>
                    <span className="font-mono text-[10px] text-smoke">{c.year}</span>
                  </div>
                  <p className="mt-3 text-sm font-semibold leading-snug text-bone">{c.title}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10">
                  <span className="text-[10px] text-mist font-medium">{c.domain}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <RailButtons rail={rail} />
        </div>
      </div>
    </>
  );
}
