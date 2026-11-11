import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { collaborators, networkingInstitutions, labMembers, interns } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';

export default function CollaboratorsModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  const [activeTab, setActiveTab] = useState<'collaborators' | 'team' | 'institutions'>('collaborators');

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
      aria-label="Global Research Collaborators & Research Team"
    >
      {/* Top Header */}
      <div className="gutter flex h-16 shrink-0 items-center justify-between border-b border-white/10 bg-ink-2/90 pt-[env(safe-area-inset-top)]">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-crimson/20 text-xs font-bold text-crimson-2">
            P
          </span>
          <div>
            <h2 className="font-display text-xl tracking-wide text-bone sm:text-2xl">Global Network & Research Lab</h2>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-smoke">
              International Collaborators · Research Scholars · Partner Institutions
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 sm:flex">
            {(['collaborators', 'team', 'institutions'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-md px-3 py-1.5 text-xs font-semibold capitalize transition ${
                  activeTab === tab ? 'bg-bone text-ink' : 'text-mist hover:text-bone'
                }`}
              >
                {tab === 'collaborators' ? 'International Collaborators' : tab === 'team' ? 'Research Team & Scholars' : 'Partner Institutions'}
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

      {/* Sub-nav mobile tabs */}
      <div className="flex border-b border-white/10 bg-ink px-4 py-2 sm:hidden">
        {(['collaborators', 'team', 'institutions'] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-1.5 text-center text-xs font-semibold capitalize ${
              activeTab === tab ? 'border-b-2 border-crimson text-bone' : 'text-mist'
            }`}
          >
            {tab === 'collaborators' ? 'Collaborators' : tab === 'team' ? 'Scholars' : 'Institutions'}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="gutter flex-1 overflow-y-auto py-8">
        <div className="mx-auto max-w-5xl">
          {activeTab === 'collaborators' && (
            <div className="space-y-6">
              <div className="mb-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-2">Global Partnerships</p>
                <h3 className="font-display text-3xl tracking-wide text-bone sm:text-4xl">International Research Collaborators</h3>
                <p className="mt-2 text-sm text-mist">
                  Active research alliances spanning Saudi Arabia, Kuwait, South Korea, South Africa, China, and premier Indian universities.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {collaborators.map((c) => (
                  <div key={c.name} className="flex flex-col overflow-hidden rounded-2xl bg-ink-2 ring-1 ring-white/10">
                    <div className="relative aspect-[4/3] bg-ink overflow-hidden">
                      <img
                        src={c.image}
                        alt={c.name}
                        className="h-full w-full object-cover object-center transition duration-500 hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-transparent to-transparent" />
                      <span className="absolute bottom-3 left-3 rounded-md bg-black/60 px-2 py-0.5 text-[10px] font-bold tracking-wider text-bone backdrop-blur">
                        {c.country}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <h4 className="font-sans text-base font-bold text-bone">{c.name}</h4>
                      <p className="mt-1 text-xs font-medium text-crimson-2">{c.institution}</p>
                      <p className="mt-1 text-[11px] text-smoke">{c.department}</p>
                      <div className="mt-4 pt-3 border-t border-white/10">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">Specialization</p>
                        <p className="mt-1 text-xs text-mist leading-relaxed">{c.specialization}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div className="space-y-8">
              <div className="mb-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-2">Lab Mentorship</p>
                <h3 className="font-display text-3xl tracking-wide text-bone sm:text-4xl">Research Team & Scholars</h3>
                <p className="mt-2 text-sm text-mist">
                  Active supervision across doctoral candidates, postgraduate researchers, undergraduate scholars, and international research interns.
                </p>
              </div>

              {/* PhD Scholars */}
              <div>
                <h4 className="mb-3 flex items-center gap-2 font-display text-2xl text-bone">
                  <span className="h-2 w-2 rounded-full bg-crimson" />
                  Doctoral Research Scholars (PhD)
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  {labMembers.filter((m) => m.degreeLevel === 'phd').map((m) => (
                    <div key={m.name} className="rounded-xl bg-ink-2 p-4 ring-1 ring-white/10">
                      <p className="text-xs font-bold text-bone">{m.name}</p>
                      <p className="mt-1 text-[11px] text-crimson-2">{m.role}</p>
                      <p className="mt-0.5 text-[10px] text-smoke">{m.period}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Postgraduate Students */}
              <div>
                <h4 className="mb-3 flex items-center gap-2 font-display text-2xl text-bone">
                  <span className="h-2 w-2 rounded-full bg-[#4cc9ff]" />
                  Postgraduate Research Students (MSc)
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  {labMembers.filter((m) => m.degreeLevel === 'postgraduate').map((m, idx) => (
                    <div key={idx} className="rounded-xl bg-ink-2 p-4 ring-1 ring-white/10">
                      <p className="text-xs font-bold text-bone">{m.name}</p>
                      <p className="mt-1 text-[11px] text-[#4cc9ff]">{m.role}</p>
                      <p className="mt-0.5 text-[10px] text-smoke">{m.period}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Undergraduate Students */}
              <div>
                <h4 className="mb-3 flex items-center gap-2 font-display text-2xl text-bone">
                  <span className="h-2 w-2 rounded-full bg-[#46e3a8]" />
                  Undergraduate Research Scholars (BSc / BCA)
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  {labMembers.filter((m) => m.degreeLevel === 'undergraduate').map((m) => (
                    <div key={m.name} className="rounded-xl bg-ink-2 p-4 ring-1 ring-white/10">
                      <p className="text-xs font-bold text-bone">{m.name}</p>
                      <p className="mt-1 text-[11px] text-[#46e3a8]">{m.role}</p>
                      <p className="mt-0.5 text-[10px] text-smoke">{m.period}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research Interns */}
              <div>
                <h4 className="mb-3 flex items-center gap-2 font-display text-2xl text-bone">
                  <span className="h-2 w-2 rounded-full bg-[#ffb547]" />
                  Editorial & Research Interns
                </h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {interns.map((i) => (
                    <div key={i.name} className="rounded-xl bg-ink-2 p-4 ring-1 ring-white/10">
                      <p className="text-xs font-bold text-bone">{i.name}</p>
                      <p className="mt-1 text-xs text-mist">{i.role}</p>
                      <p className="mt-1 text-[10px] font-mono text-smoke">{i.period}</p>
                    </div>
                  ))}
                  <div className="rounded-xl bg-ink-2 p-4 ring-1 ring-white/10">
                    <p className="text-xs font-bold text-bone">Mr. Anirudh</p>
                    <p className="mt-1 text-xs text-mist">Research Intern · Scientific fluid simulations & numerical modeling</p>
                    <p className="mt-1 text-[10px] font-mono text-crimson-2">University of Oxford, UK (Ongoing)</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'institutions' && (
            <div className="space-y-6">
              <div className="mb-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-2">Institutional Network</p>
                <h3 className="font-display text-3xl tracking-wide text-bone sm:text-4xl">Partner Universities</h3>
                <p className="mt-2 text-sm text-mist">
                  International universities engaged in research exchanges, joint publications, and student mobility programs.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {networkingInstitutions.map((inst) => (
                  <a
                    key={inst.name}
                    href={inst.homeUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="group flex flex-col overflow-hidden rounded-2xl bg-ink-2 ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-white/30"
                  >
                    <div className="relative aspect-video bg-ink overflow-hidden">
                      <img
                        src={inst.image}
                        alt={inst.name}
                        className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-2 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h4 className="font-sans text-sm font-bold text-bone transition group-hover:text-white">
                        {inst.name}
                      </h4>
                      <p className="mt-1 text-xs text-crimson-2">{inst.location}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-mist group-hover:text-bone">
                        Visit Portal ↗
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
