import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ADMINISTRATIVE_POSITIONS, christResponsibilitiesData } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';

export default function AdministrationModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  const [activeTab, setActiveTab] = useState<'core' | 'additional'>('core');

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex flex-col bg-black/85 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Academic Administration & Institutional Governance"
    >
      {/* Header */}
      <div className="gutter flex h-16 shrink-0 items-center justify-between border-b border-white/10 bg-ink-2/90 pt-[env(safe-area-inset-top)]">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-crimson/20 text-xs font-bold text-crimson-2">
            P
          </span>
          <div>
            <h2 className="font-display text-xl tracking-wide text-bone sm:text-2xl">
              Academic Administration & Governance
            </h2>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-smoke">
              IQAC Coordination · Strategic Planning · SDG Initiatives · Timetable Committees
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 sm:flex">
            <button
              type="button"
              onClick={() => setActiveTab('core')}
              className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
                activeTab === 'core' ? 'bg-bone text-ink' : 'text-mist hover:text-bone'
              }`}
            >
              Primary Coordinator Roles (6)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('additional')}
              className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
                activeTab === 'additional' ? 'bg-bone text-ink' : 'text-mist hover:text-bone'
              }`}
            >
              Committee & Mentorship Service
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            data-cursor="close"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-bone hover:bg-white/20"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Mobile Sub-tabs */}
      <div className="flex border-b border-white/10 bg-ink px-4 py-2 sm:hidden">
        <button
          type="button"
          onClick={() => setActiveTab('core')}
          className={`flex-1 py-1.5 text-center text-xs font-semibold ${
            activeTab === 'core' ? 'border-b-2 border-crimson text-bone' : 'text-mist'
          }`}
        >
          Primary Roles
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('additional')}
          className={`flex-1 py-1.5 text-center text-xs font-semibold ${
            activeTab === 'additional' ? 'border-b-2 border-crimson text-bone' : 'text-mist'
          }`}
        >
          Committees
        </button>
      </div>

      {/* Body */}
      <div className="gutter flex-1 overflow-y-auto py-8">
        <div className="mx-auto max-w-5xl space-y-8">
          {/* Summary Metric Strip */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { k: 'Administrative Roles', v: '06', s: 'Departmental & School-wide' },
              { k: 'Quality Assurance', v: 'IQAC', s: 'NAAC, Audits, OBE & CQI' },
              { k: 'Strategic Roadmap', v: '3-Year', s: 'Goal Formulation & Milestones' },
              { k: 'Global Goals', v: 'SDG', s: 'UN Sustainability Cell' },
            ].map((m) => (
              <div key={m.k} className="rounded-xl bg-ink-2 p-4 ring-1 ring-white/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">{m.k}</p>
                <p className="mt-1 font-display text-3xl text-bone">{m.v}</p>
                <p className="text-xs text-mist">{m.s}</p>
              </div>
            ))}
          </div>

          {activeTab === 'core' && (
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-2">
                  Official Administrative Appointments
                </p>
                <h3 className="font-display text-3xl tracking-wide text-bone sm:text-4xl">
                  Leadership in Academic Quality & Operations
                </h3>
                <p className="mt-2 text-sm text-mist leading-relaxed">
                  Comprehensive documentation of institutional leadership, accreditation compliance, continuous quality improvement, and university service at CHRIST (Deemed to be University).
                </p>
              </div>

              <div className="grid gap-6">
                {ADMINISTRATIVE_POSITIONS.map((pos) => (
                  <article
                    key={pos.title}
                    className="rounded-2xl bg-ink-2 p-6 ring-1 ring-white/10 sm:p-8 transition hover:ring-white/20"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/10 pb-4">
                      <div>
                        <span className="rounded bg-crimson/20 px-2 py-0.5 font-mono text-[11px] font-bold text-crimson-2">
                          {pos.badge}
                        </span>
                        <h4 className="mt-2 font-display text-2xl tracking-wide text-bone sm:text-3xl">
                          {pos.title}
                        </h4>
                        <p className="text-xs font-semibold text-mist mt-0.5">
                          {pos.departmentOrSchool} · <span className="text-bone/80">{pos.institution}</span>
                        </p>
                      </div>
                      <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-xs font-semibold text-bone">
                        {pos.period}
                      </span>
                    </div>

                    <p className="mt-5 text-sm sm:text-[15px] leading-relaxed text-bone/85">
                      {pos.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'additional' && (
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-2">
                  Institutional Committees & Mentorship
                </p>
                <h3 className="font-display text-3xl tracking-wide text-bone sm:text-4xl">
                  Curriculum, Accreditation & Student Welfare
                </h3>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {christResponsibilitiesData.map((resp) => (
                  <article
                    key={resp.id}
                    className="flex flex-col justify-between rounded-2xl bg-ink-2 p-6 ring-1 ring-white/10"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-smoke">
                          {resp.category}
                        </span>
                        <span className="font-mono text-xs text-crimson-2">{resp.period}</span>
                      </div>
                      <h4 className="mt-3 font-sans text-lg font-bold text-bone">{resp.title}</h4>
                      <p className="text-xs text-mist">{resp.organization}</p>
                      <p className="mt-3 text-xs leading-relaxed text-bone/75">{resp.description}</p>
                    </div>

                    {resp.keyContributions && resp.keyContributions.length > 0 && (
                      <div className="mt-4 border-t border-white/10 pt-3">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-smoke mb-2">Key Contributions</p>
                        <ul className="space-y-1.5 text-xs text-mist">
                          {resp.keyContributions.map((kc, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-crimson-2">•</span> {kc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

