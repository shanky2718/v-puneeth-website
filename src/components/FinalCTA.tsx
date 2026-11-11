import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile, ACADEMIC_PROFILES } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Magnetic, Particles } from './fx';
import { SeriesMark } from './Poster';

export default function FinalCTA({
  onReplay,
  onOpenPublications,
  onOpenTeaching,
  onOpenAdministration,
  onOpenActivities
}: {
  onReplay: () => void;
  onOpenPublications?: () => void;
  onOpenTeaching?: () => void;
  onOpenAdministration?: () => void;
  onOpenActivities?: (tab?: 'funding' | 'events' | 'talks' | 'certifications' | 'references') => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollTo } = useSmoothScroll();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.2'] });
  const spacing = useTransform(scrollYProgress, [0, 1], ['0.6em', '0.02em']);
  const blur = useTransform(scrollYProgress, [0, 1], ['blur(16px)', 'blur(0px)']);
  const opacity = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  const ctas = [
    { label: "Let's Collaborate", href: `mailto:${profile.email}?subject=${encodeURIComponent("Research Collaboration / Academic Inquiry")}`, primary: true, cursor: 'play' },
    { label: 'Google Site', href: profile.links.googleSite, cursor: 'link' },
    { label: 'CHRIST University', href: profile.links.christUniversity, cursor: 'link' },
    { label: 'Email', href: `mailto:${profile.email}`, cursor: 'link' },
    { label: 'Call', href: `tel:${profile.phone}`, cursor: 'link' },
  ];

  return (
    <section id="contact" ref={ref} className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_60%,rgba(229,19,43,0.18),transparent_70%)]" />
      <Particles count={36} />

      <motion.p
        className="relative mb-6 text-[11px] font-bold uppercase tracking-[0.5em] text-crimson-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        The Next Episode
      </motion.p>
      <motion.h2
        className="relative font-display leading-[0.85] text-bone"
        style={{ fontSize: 'clamp(3.4rem, 13vw, 12rem)', letterSpacing: spacing, filter: blur, opacity }}
      >
        TO BE CONTINUED…
      </motion.h2>

      <motion.div
        className="relative mt-12 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
      >
        <p className="font-sans text-2xl font-semibold tracking-[0.2em] text-bone sm:text-3xl">{profile.displayName.toUpperCase()}</p>
        <p className="mt-2 text-xs font-semibold tracking-[0.3em] text-crimson-2 sm:text-sm">{profile.role.toUpperCase()}</p>
        <p className="mt-1 text-xs text-mist">{profile.affiliation}</p>
        <p className="mt-0.5 text-xs text-smoke">Bengaluru - 560029, Karnataka, India · +91-9663501058</p>
      </motion.div>

      {/* Primary Communication Buttons */}
      <motion.div
        className="relative mt-8 flex flex-wrap justify-center gap-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.08, delayChildren: 0.35 }}
      >
        {ctas.map((c) => (
          <motion.div key={c.label} variants={{ hidden: { opacity: 0, y: 20, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } } }}>
            <Magnetic>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                data-cursor={c.cursor}
                className={`flex min-h-12 items-center gap-2 rounded-full px-7 text-sm font-bold tracking-[0.12em] transition ${
                  c.primary ? 'bg-crimson text-white shadow-[0_0_50px_rgba(229,19,43,0.5)] hover:bg-crimson-2' : 'border border-white/25 text-bone hover:border-bone hover:bg-white/10'
                }`}
              >
                {c.primary && <span>▶</span>}
                {c.label.toUpperCase()}
                {!c.primary && <span className="text-mist">↗</span>}
              </a>
            </Magnetic>
          </motion.div>
        ))}
      </motion.div>

      {/* Academic Profiles Strip */}
      <div className="relative mt-10 max-w-xl">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-smoke mb-3">Academic & Research Identifiers</p>
        <div className="flex flex-wrap justify-center gap-2">
          {ACADEMIC_PROFILES.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-full px-3.5 py-1.5 text-xs font-medium text-bone hover:border-crimson-2 hover:text-crimson-2 transition flex items-center gap-1.5"
            >
              <span>{p.name}</span>
              <span className="text-[10px] text-smoke">↗</span>
            </a>
          ))}
        </div>
      </div>

      {/* Fast Dossier Modal Access */}
      <div className="relative mt-8 flex flex-wrap justify-center gap-2 max-w-2xl">
        {onOpenPublications && (
          <button
            type="button"
            onClick={onOpenPublications}
            className="rounded-lg bg-white/5 px-3 py-1.5 text-xs font-semibold text-mist hover:text-bone hover:bg-white/10"
          >
            📄 73 Publications
          </button>
        )}
        {onOpenTeaching && (
          <button
            type="button"
            onClick={onOpenTeaching}
            className="rounded-lg bg-white/5 px-3 py-1.5 text-xs font-semibold text-mist hover:text-bone hover:bg-white/10"
          >
            🎓 Teaching Statement
          </button>
        )}
        {onOpenAdministration && (
          <button
            type="button"
            onClick={onOpenAdministration}
            className="rounded-lg bg-white/5 px-3 py-1.5 text-xs font-semibold text-mist hover:text-bone hover:bg-white/10"
          >
            🏛️ Administration & IQAC
          </button>
        )}
        {onOpenActivities && (
          <button
            type="button"
            onClick={() => onOpenActivities('funding')}
            className="rounded-lg bg-white/5 px-3 py-1.5 text-xs font-semibold text-mist hover:text-bone hover:bg-white/10"
          >
            💼 Grants (INR 12L+) & Events
          </button>
        )}
      </div>

      <div className="relative mt-12 flex flex-wrap justify-center gap-6 text-xs font-semibold tracking-[0.24em] text-smoke">
        <button type="button" onClick={() => scrollTo(0, { offset: 0 })} className="hover:text-bone">
          ↺ BACK TO TOP
        </button>
        <button type="button" onClick={onReplay} className="hover:text-bone">
          ▶ REPLAY OPENING
        </button>
      </div>

      <footer className="relative mt-12 px-4 pb-6 text-center">
        <div className="mb-2 text-base">
          <SeriesMark />
        </div>
        <p className="text-[11px] leading-relaxed text-smoke">
          © {new Date().getFullYear()} Dr. Puneeth V. Assistant Professor, Department of Mathematics, CHRIST (Deemed to be University), Bengaluru, India.
        </p>
      </footer>
    </section>
  );
}
