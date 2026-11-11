import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  achievements,
  certifications,
  education,
  experience,
  profile,
  projects,
  skillCategories,
  ADMINISTRATIVE_POSITIONS,
  GRANTS_AND_FUNDING,
  CONSULTANCY_PROJECTS,
  INVITED_TALKS,
  academicReferences
} from '../data/portfolio';
import { EASE, Magnetic, SectionHeading } from './fx';

/** THE FULL STORY — a designed resume preview plus view / download actions. */
export default function ResumeSection({
  onView,
  onOpenTeaching,
  onOpenPublications,
  onOpenAdministration
}: {
  onView: () => void;
  onOpenTeaching?: () => void;
  onOpenPublications?: () => void;
  onOpenAdministration?: () => void;
}) {
  return (
    <>
      <SectionHeading kicker="The screenplay" title="The Full Story" />
      <div className="gutter grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.1, ease: EASE }}
          style={{ transformPerspective: 1600 }}
        >
          <CollapsibleSheet />
        </motion.div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-serif text-3xl italic leading-tight text-bone">Every episode, on one page.</p>
          <p className="mt-3 text-sm leading-relaxed text-mist">
            Education, administrative governance, research projects, achievements and {certifications.length} certifications — view it here or take a copy with you.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Magnetic className="w-full">
              <button
                type="button"
                data-cursor="view"
                onClick={onView}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-bone px-6 text-[15px] font-bold text-ink transition hover:bg-white"
              >
                ▶ View Resume
              </button>
            </Magnetic>
            <Magnetic className="w-full">
              <a
                href={profile.resumePdf}
                download="Dr_Puneeth_V_Resume.pdf"
                data-cursor="link"
                className="glass flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-6 text-[15px] font-semibold text-bone transition hover:bg-white/15"
              >
                ⤓ Download Resume
              </a>
            </Magnetic>

            {onOpenTeaching && (
              <button
                type="button"
                onClick={onOpenTeaching}
                className="rounded-md border border-white/10 bg-white/5 py-2.5 text-xs font-semibold text-bone hover:bg-white/10 text-center transition"
              >
                🎓 The Art of Teaching Statement ↗
              </button>
            )}

            {onOpenPublications && (
              <button
                type="button"
                onClick={onOpenPublications}
                className="rounded-md border border-white/10 bg-white/5 py-2.5 text-xs font-semibold text-crimson-2 hover:bg-white/10 text-center transition"
              >
                📄 73 Research Publications Archive ↗
              </button>
            )}

            {onOpenAdministration && (
              <button
                type="button"
                onClick={onOpenAdministration}
                className="rounded-md border border-white/10 bg-white/5 py-2.5 text-xs font-semibold text-[#4cc9ff] hover:bg-white/10 text-center transition"
              >
                🏛️ Administration & IQAC Roles ↗
              </button>
            )}
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-white/10 text-center">
            {[
              { v: 'Top 2%', k: 'Stanford' },
              { v: '73', k: 'Papers' },
              { v: '1980+', k: 'Citations' },
            ].map((s) => (
              <div key={s.k} className="bg-ink-2 px-2 py-4">
                <dd className="font-display text-3xl leading-none text-bone">{s.v}</dd>
                <dt className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">{s.k}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}

/** On phones the sheet starts as a teaser so the page keeps its pace; desktop shows it in full. */
function CollapsibleSheet() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className={`overflow-hidden transition-[max-height] duration-700 ease-[var(--ease-cine)] md:max-h-none ${open ? 'max-h-[4000px]' : 'max-h-[560px]'}`}>
        <ResumeSheet />
      </div>
      {!open && (
        <div className="absolute inset-x-0 bottom-0 flex h-48 items-end justify-center rounded-b-2xl bg-gradient-to-t from-ink via-ink/85 to-transparent pb-4 md:hidden">
          <button type="button" onClick={() => setOpen(true)} className="glass min-h-11 rounded-full px-5 text-sm font-semibold text-bone">
            Read the full story ↓
          </button>
        </div>
      )}
    </div>
  );
}

function H({ children }: { children: string }) {
  return <h4 className="mb-3 mt-7 border-b border-white/10 pb-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2 first:mt-0">{children}</h4>;
}

export function ResumeSheet() {
  return (
    <article className="relative overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#121218,#0c0c11)] p-6 ring-1 ring-white/10 sm:p-10">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson-2/70 to-transparent" />
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <p className="text-[10px] font-bold tracking-[0.34em] text-smoke">CURRICULUM VITAE</p>
          <h3 className="mt-1 font-display text-[clamp(1.9rem,4.4vw,3.2rem)] leading-[0.9] tracking-wide text-bone">{profile.fullName}</h3>
          <p className="mt-2 text-xs font-semibold text-crimson-2">
            {profile.role} · {profile.affiliation}
          </p>
        </div>
        <div className="text-xs leading-relaxed text-mist sm:text-right">
          <a href={`mailto:${profile.email}`} className="block hover:text-bone">
            {profile.email}
          </a>
          <a href={`tel:${profile.phone}`} className="block hover:text-bone">
            {profile.phone}
          </a>
          <a href={profile.links.googleSite} target="_blank" rel="noreferrer" className="hover:text-bone">
            Google Site ↗
          </a>
          {' · '}
          <a href={profile.links.christUniversity} target="_blank" rel="noreferrer" className="hover:text-bone">
            CHRIST University ↗
          </a>
        </div>
      </header>

      <div className="grid gap-x-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <H>Education</H>
          {education.map((e) => (
            <div key={e.degree} className="mb-4">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone">
                  {e.degree}
                </p>
                <p className="text-xs text-smoke font-mono">{e.period}</p>
              </div>
              <p className="text-xs text-mist">
                {e.school}, {e.place} · <span className="text-bone/80">{e.score}</span>
              </p>
            </div>
          ))}

          <H>Teaching & Academic Appointments</H>
          {experience.map((x) => (
            <div key={x.role + x.company} className="mb-4">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone">
                  {x.role} — {x.company}
                </p>
                <p className="text-xs text-smoke font-mono">{x.period}</p>
              </div>
              <ul className="mt-2 space-y-1.5">
                {x.points.map((p) => (
                  <li key={p} className="flex gap-2 text-xs leading-relaxed text-mist">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-crimson-2" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <H>Administrative Appointments (6 Positions)</H>
          <div className="space-y-3">
            {ADMINISTRATIVE_POSITIONS.map((pos) => (
              <div key={pos.title} className="rounded-lg bg-white/[0.02] p-3 ring-1 ring-white/5">
                <div className="flex justify-between items-baseline gap-2">
                  <p className="text-xs font-bold text-bone">{pos.title}</p>
                  <span className="font-mono text-[10px] text-smoke shrink-0">{pos.period}</span>
                </div>
                <p className="text-[11px] text-crimson-2">{pos.departmentOrSchool} · {pos.institution}</p>
                <p className="mt-1 text-[11px] text-mist line-clamp-2 leading-relaxed">{pos.description}</p>
              </div>
            ))}
          </div>

          <H>Research Thrusts & Originals</H>
          {projects.map((p) => (
            <div key={p.id} className="mb-3">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone">{p.title}</p>
                <p className="text-xs text-smoke font-mono">{p.year}</p>
              </div>
              <p className="text-xs text-mist">{p.stack.join(', ')}</p>
            </div>
          ))}
        </div>

        <div>
          <H>Extramural Research Grants (INR 12L+)</H>
          <div className="space-y-2 mb-4">
            {GRANTS_AND_FUNDING.map((g, i) => (
              <div key={i} className="text-xs">
                <div className="flex justify-between font-semibold text-bone">
                  <span>{g.title}</span>
                  <span className="text-crimson-2 font-mono">{g.amount}</span>
                </div>
                <p className="text-[11px] text-mist">{g.agency} ({g.year})</p>
              </div>
            ))}
          </div>

          <H>Industrial Consultancy</H>
          <div className="space-y-2 mb-4">
            {CONSULTANCY_PROJECTS.map((c) => (
              <div key={c.client} className="text-xs">
                <p className="font-semibold text-bone">{c.client} — {c.role} ({c.year})</p>
                <p className="text-[11px] text-mist">{c.description}</p>
              </div>
            ))}
          </div>

          <H>Invited Keynotes & Talks</H>
          <div className="space-y-2 mb-4">
            {INVITED_TALKS.map((t, idx) => (
              <div key={idx} className="text-xs">
                <p className="font-semibold text-bone">{t.title} ({t.year})</p>
                <p className="text-[11px] text-mist">{t.institution}</p>
              </div>
            ))}
          </div>

          <H>Skills & Domains</H>
          <div className="space-y-2">
            {skillCategories.map((c) => (
              <p key={c.id} className="text-xs leading-relaxed text-mist">
                <span className="font-semibold text-bone">{c.title}: </span>
                {c.skills.map((s) => s.name).join(', ')}
              </p>
            ))}
          </div>

          <H>Global Honors & Recognition</H>
          <ul className="space-y-2">
            {achievements.map((a) => (
              <li key={a.id} className="text-xs leading-relaxed text-mist">
                <span className="font-semibold text-bone">
                  {a.title} — {a.org}.
                </span>{' '}
                {a.detail}
              </li>
            ))}
          </ul>

          <H>Academic References</H>
          <div className="space-y-2 text-xs text-mist">
            {academicReferences.map((ref) => (
              <div key={ref.name}>
                <p className="font-semibold text-bone">{ref.name}</p>
                <p className="text-[11px] text-smoke">{ref.title}, {ref.department}, {ref.institution}</p>
                <p className="text-[11px] text-crimson-2">{ref.email} · {ref.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
