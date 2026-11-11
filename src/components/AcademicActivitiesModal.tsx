import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  GRANTS_AND_FUNDING,
  CONSULTANCY_PROJECTS,
  RESEARCH_PROJECTS,
  ACADEMIC_EVENTS,
  INVITED_TALKS,
  CERTIFICATIONS_LIST,
  academicReferences,
  spokenLanguages,
  professionalMemberships,
  expertSessions
} from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';

type Tab = 'funding' | 'events' | 'talks' | 'certifications' | 'references';

export default function AcademicActivitiesModal({
  onClose,
  initialTab = 'funding'
}: {
  onClose: () => void;
  initialTab?: Tab;
}) {
  useScrollLock(true);
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);

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
      aria-label="Academic Activities, Grants, Talks & Events"
    >
      {/* Top Header */}
      <div className="gutter flex h-16 shrink-0 items-center justify-between border-b border-white/10 bg-ink-2/90 pt-[env(safe-area-inset-top)]">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-crimson/20 text-xs font-bold text-crimson-2">
            P
          </span>
          <div>
            <h2 className="font-display text-xl tracking-wide text-bone sm:text-2xl">
              Academic Activities & Research Portfolio
            </h2>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-smoke">
              Grants · Consultancy · Congresses · Keynotes · Certifications · References
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 xl:flex">
            {([
              { id: 'funding', label: 'Grants & Consultancy' },
              { id: 'events', label: 'Events & Conferences' },
              { id: 'talks', label: 'Invited Keynotes' },
              { id: 'certifications', label: '9 Certifications' },
              { id: 'references', label: 'References & Languages' },
            ] as const).map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id)}
                className={`rounded-md px-2.5 py-1.5 text-xs font-semibold transition ${
                  activeTab === t.id ? 'bg-bone text-ink' : 'text-mist hover:text-bone'
                }`}
              >
                {t.label}
              </button>
            ))}
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

      {/* Mobile/Tablet Sub-tabs */}
      <div className="rail flex border-b border-white/10 bg-ink px-4 py-2 xl:hidden overflow-x-auto gap-2">
        {([
          { id: 'funding', label: 'Funding & Grants' },
          { id: 'events', label: 'Conferences' },
          { id: 'talks', label: 'Invited Talks' },
          { id: 'certifications', label: 'Certifications' },
          { id: 'references', label: 'References' },
        ] as const).map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActiveTab(t.id)}
            className={`shrink-0 rounded-md px-3 py-1 text-xs font-semibold ${
              activeTab === t.id ? 'bg-bone text-ink' : 'bg-white/5 text-mist'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Main Body */}
      <div className="gutter flex-1 overflow-y-auto py-8">
        <div className="mx-auto max-w-5xl space-y-8">
          {/* TAB 1: FUNDING & CONSULTANCY */}
          {activeTab === 'funding' && (
            <div className="space-y-8">
              <div className="border-b border-white/10 pb-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-2">
                  Extramural & Institutional Research Funding
                </p>
                <h3 className="font-display text-3xl tracking-wide text-bone sm:text-4xl">
                  Funded Projects, Extramural Grants & Industrial Consultancy
                </h3>
                <p className="mt-2 text-sm text-mist">
                  Over INR 12,00,000 in competitive governmental, national, and university research grants secured.
                </p>
              </div>

              {/* Consultancy Feature Card */}
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-smoke">
                  Industrial Technical Consultancy
                </p>
                {CONSULTANCY_PROJECTS.map((c) => (
                  <div
                    key={c.client}
                    className="rounded-2xl border border-[#d9b46a]/30 bg-[radial-gradient(120%_80%_at_50%_0%,#2a1f10,#0d0b08_60%,#07070a)] p-6 sm:p-8"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/10 pb-4">
                      <div>
                        <span className="rounded bg-[#d9b46a]/20 px-2 py-0.5 font-mono text-[10px] font-bold text-[#d9b46a]">
                          INDUSTRIAL CONSULTANCY
                        </span>
                        <h4 className="mt-2 font-display text-2xl text-bone sm:text-3xl">
                          {c.client} — {c.role}
                        </h4>
                        <p className="mt-1 text-xs font-semibold text-[#d9b46a]">
                          Evaluation of Computational Fluid Dynamics (CFD) for 5000L tank
                        </p>
                      </div>
                      <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-xs font-semibold text-bone">
                        {c.year}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-bone/85">{c.description}</p>
                  </div>
                ))}
              </div>

              {/* Research Grants */}
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-smoke">
                  Government & National Extramural Grants
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {GRANTS_AND_FUNDING.map((g, i) => (
                    <div key={i} className="flex flex-col justify-between rounded-xl bg-ink-2 p-5 ring-1 ring-white/10">
                      <div>
                        <p className="font-display text-3xl font-bold text-crimson-2">{g.amount}</p>
                        <h5 className="mt-2 font-sans text-sm font-bold text-bone">{g.title}</h5>
                        <p className="mt-1 text-xs text-[#4cc9ff]">{g.agency}</p>
                        <p className="mt-2 text-xs leading-relaxed text-mist">{g.scope}</p>
                      </div>
                      <span className="mt-4 block font-mono text-[10px] text-smoke border-t border-white/10 pt-2">
                        Sanctioned Year: {g.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Seed Money Project */}
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-smoke">
                  Institutional Seed Money Research Project
                </p>
                {RESEARCH_PROJECTS.map((p) => (
                  <div key={p.title} className="rounded-xl bg-ink-2 p-6 ring-1 ring-white/10">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/10 pb-3">
                      <div>
                        <span className="rounded bg-crimson/20 px-2 py-0.5 font-mono text-[10px] font-bold text-crimson-2">
                          {p.funding}
                        </span>
                        <h4 className="mt-2 font-display text-xl text-bone">{p.title}</h4>
                        <p className="text-xs text-mist">{p.scheme} · {p.institution}</p>
                      </div>
                      <span className="font-mono text-xs text-smoke">{p.period}</span>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-bone/80">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: EVENTS & CONFERENCES */}
          {activeTab === 'events' && (
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-2">
                  Academic Conventions & International Summits
                </p>
                <h3 className="font-display text-3xl tracking-wide text-bone sm:text-4xl">
                  Conferences, Congresses & Symposia Direction
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {ACADEMIC_EVENTS.map((e, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between rounded-xl bg-ink-2 p-5 ring-1 ring-white/10 transition hover:ring-white/25"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="rounded bg-crimson/20 px-2 py-0.5 font-mono text-[10px] font-bold text-crimson-2">
                          {e.badge || 'CONFERENCE'}
                        </span>
                        <span className="font-mono text-xs font-bold text-smoke">{e.year}</span>
                      </div>
                      <h4 className="mt-3 font-sans text-base font-bold text-bone">
                        {e.event || e.title}
                      </h4>
                      <p className="mt-1 text-xs font-semibold text-[#4cc9ff]">{e.role}</p>
                      <p className="mt-1 text-xs text-mist">{e.organization}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: INVITED TALKS */}
          {activeTab === 'talks' && (
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-2">
                  Academic Outreach & Knowledge Dissemination
                </p>
                <h3 className="font-display text-3xl tracking-wide text-bone sm:text-4xl">
                  Invited Keynotes, Workshops & FDP Sessions
                </h3>
              </div>

              {/* Primary Invited Talks from PDF */}
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-smoke">
                  Specialized Workshops & Keynotes
                </p>
                {INVITED_TALKS.map((t, idx) => (
                  <div key={idx} className="rounded-xl bg-ink-2 p-5 ring-1 ring-white/10">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/10 pb-3">
                      <div>
                        <span className="rounded bg-crimson/20 px-2 py-0.5 font-mono text-[10px] font-bold text-crimson-2">
                          INVITED TALK
                        </span>
                        <h4 className="mt-1.5 font-display text-xl text-bone">{t.title}</h4>
                        <p className="text-xs text-mist">{t.forum}</p>
                      </div>
                      <span className="font-mono text-xs text-smoke">{t.year}</span>
                    </div>
                    <p className="mt-3 text-xs text-[#46e3a8] font-medium">{t.institution}</p>
                    <p className="mt-1 text-xs text-bone/80 leading-relaxed">{t.focus}</p>
                  </div>
                ))}
              </div>

              {/* Faculty Development Sessions */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-smoke">
                  Faculty Development Programmes (FDP) Delivered
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {expertSessions.map((s, idx) => (
                    <div key={idx} className="rounded-xl bg-ink-2 p-4 ring-1 ring-white/10">
                      <p className="font-mono text-[10px] font-bold text-crimson-2 uppercase">EXPERT SESSION</p>
                      <h5 className="mt-1 text-sm font-bold text-bone">{s.title}</h5>
                      <p className="mt-2 text-xs text-mist line-clamp-4 leading-relaxed">{s.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ALL 9 COURSES & CERTIFICATIONS */}
          {activeTab === 'certifications' && (
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-2">
                  Lifelong Learning & Professional Specializations
                </p>
                <h3 className="font-display text-3xl tracking-wide text-bone sm:text-4xl">
                  Official Certifications Collection (9 Programs)
                </h3>
                <p className="mt-2 text-sm text-mist">
                  Interdisciplinary courses from IBM, Yale University, University of Cambridge, Northwestern, UPenn, University of Toronto, and Wesleyan University.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {CERTIFICATIONS_LIST.map((cert) => (
                  <div
                    key={cert.id}
                    className="flex flex-col justify-between rounded-xl bg-ink-2 p-5 ring-1 ring-white/10 transition hover:ring-white/25"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="rounded bg-crimson/20 px-2 py-0.5 font-mono text-[10px] font-bold text-crimson-2">
                          #{cert.id}
                        </span>
                        <span className="font-mono text-xs text-smoke">{cert.year}</span>
                      </div>
                      <h4 className="mt-3 font-sans text-sm font-bold text-bone leading-snug">
                        {cert.title}
                      </h4>
                      <p className="mt-2 text-xs font-semibold text-[#4cc9ff]">{cert.institution}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/10">
                      <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-bold text-mist">
                        {cert.domain}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: REFERENCES, LANGUAGES & MEMBERSHIPS */}
          {activeTab === 'references' && (
            <div className="space-y-8">
              <div className="border-b border-white/10 pb-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-2">
                  Scholarly References & Affiliations
                </p>
                <h3 className="font-display text-3xl tracking-wide text-bone sm:text-4xl">
                  Academic Referees, Global Memberships & Languages
                </h3>
              </div>

              {/* Referees */}
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-smoke">
                  Academic References
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {academicReferences.map((ref) => (
                    <div key={ref.name} className="flex flex-col justify-between rounded-xl bg-ink-2 p-5 ring-1 ring-white/10">
                      <div>
                        <h4 className="font-sans text-base font-bold text-bone">{ref.name}</h4>
                        <p className="text-xs font-semibold text-crimson-2">{ref.title}</p>
                        <p className="mt-1 text-xs text-mist">{ref.department}</p>
                        <p className="text-xs text-smoke">{ref.institution}</p>
                      </div>
                      <div className="mt-4 border-t border-white/10 pt-3 text-xs space-y-1">
                        <p className="text-bone/85">
                          <span className="text-smoke">Phone:</span> {ref.phone}
                        </p>
                        <a
                          href={`mailto:${ref.email}`}
                          className="block text-[#4cc9ff] hover:underline"
                        >
                          {ref.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Memberships & Languages */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl bg-ink-2 p-5 ring-1 ring-white/10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-2 mb-2">
                    Professional Memberships
                  </p>
                  {professionalMemberships.map((m) => (
                    <div key={m.name} className="mt-2">
                      <h5 className="font-sans text-sm font-bold text-bone">{m.name}</h5>
                      <p className="text-xs text-[#46e3a8] font-medium">{m.role}</p>
                      <p className="mt-1 text-xs text-mist leading-relaxed">{m.description}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl bg-ink-2 p-5 ring-1 ring-white/10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-2 mb-2">
                    Spoken & Academic Languages
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {spokenLanguages.map((l) => (
                      <span key={l} className="glass rounded-lg px-3 py-1.5 text-xs font-semibold text-bone">
                        {l}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-mist leading-relaxed">
                    Trilingual communication across academic, teaching, research mentoring, and regional institutional environments.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

