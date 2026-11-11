import { useLayoutEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { projects, type Project } from '../data/portfolio';
import { useDesktop, useReducedMotionPref } from '../hooks/useMedia';
import { EASE, RevealText } from './fx';
import ProjectCard from './ProjectCard';

/**
 * ORIGINALS — on desktop the section pins and scrolls sideways like a title sequence.
 * On touch / small screens / reduced motion it becomes a native swipe rail.
 */
export default function Originals({
  onOpen,
  onOpenPublications,
  onOpenCollaborators,
}: {
  onOpen: (p: Project) => void;
  onOpenPublications?: () => void;
  onOpenCollaborators?: () => void;
}) {
  const desktop = useDesktop();
  const reduced = useReducedMotionPref();
  return desktop && !reduced ? (
    <PinnedOriginals
      onOpen={onOpen}
      onOpenPublications={onOpenPublications}
      onOpenCollaborators={onOpenCollaborators}
    />
  ) : (
    <RailOriginals
      onOpen={onOpen}
      onOpenPublications={onOpenPublications}
      onOpenCollaborators={onOpenCollaborators}
    />
  );
}

function Intro({
  onOpenPublications,
  onOpenCollaborators,
}: {
  onOpenPublications?: () => void;
  onOpenCollaborators?: () => void;
}) {
  return (
    <div className="flex w-full shrink-0 flex-col justify-center lg:w-[36vw]">
      <p className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-crimson-2">
        <span className="h-px w-8 bg-crimson-2" /> Research Thrusts · CFD & PINNs
      </p>
      <RevealText as="h2" text="ORIGINALS" className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.85] text-bone" />
      <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-mist">
        Frontier investigations combining classical governing Navier-Stokes equations with Physics-Informed Neural Networks (PINNs), ANSYS Fluent CFD, heat exchanger optimization and sloshing dynamics.
      </p>

      <div className="mt-6 flex flex-wrap gap-2.5">
        {onOpenPublications && (
          <button
            type="button"
            onClick={onOpenPublications}
            className="rounded-lg bg-crimson px-4 py-2 text-xs font-semibold text-white transition hover:bg-crimson-2"
          >
            73 Research Publications ↗
          </button>
        )}
        {onOpenCollaborators && (
          <button
            type="button"
            onClick={onOpenCollaborators}
            className="rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold text-bone transition hover:bg-white/20"
          >
            Collaborators & Lab Scholars ↗
          </button>
        )}
      </div>

      <p className="mt-6 hidden text-xs tracking-[0.24em] text-smoke lg:block">SCROLL TO BROWSE THRUSTS →</p>
    </div>
  );
}

function Outro({
  onOpenPublications,
  onOpenCollaborators,
}: {
  onOpenPublications?: () => void;
  onOpenCollaborators?: () => void;
}) {
  return (
    <div className="group flex aspect-[3/4] w-[72vw] shrink-0 snap-start flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/15 bg-ink-2/40 p-6 text-center transition hover:border-crimson-2/60 sm:w-[44vw] lg:aspect-auto lg:h-[66vh] lg:w-[26vw]">
      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 text-xl text-bone">
        📚
      </span>
      <h3 className="font-display text-2xl tracking-wide text-bone">Comprehensive Archive</h3>
      <p className="text-xs text-mist leading-relaxed max-w-xs">
        73 Scopus/SCI indexed articles across Elsevier, Springer, Taylor & Francis, Wiley and World Scientific.
      </p>

      <div className="mt-2 flex flex-col gap-2 w-full max-w-xs">
        {onOpenPublications && (
          <button
            type="button"
            onClick={onOpenPublications}
            className="rounded-lg bg-bone px-4 py-2 text-xs font-bold text-ink hover:bg-white"
          >
            Open Publications Archive
          </button>
        )}
        {onOpenCollaborators && (
          <button
            type="button"
            onClick={onOpenCollaborators}
            className="rounded-lg bg-white/5 px-4 py-2 text-xs font-semibold text-mist hover:text-bone hover:bg-white/10"
          >
            Meet the Research Lab
          </button>
        )}
      </div>
    </div>
  );
}

function PinnedOriginals({
  onOpen,
  onOpenPublications,
  onOpenCollaborators,
}: {
  onOpen: (p: Project) => void;
  onOpenPublications?: () => void;
  onOpenCollaborators?: () => void;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);
  const distMV = useMotionValue(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (!track.current) return;
      const d = Math.max(0, track.current.scrollWidth - window.innerWidth);
      setDist(d);
      distMV.set(d);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [distMV]);

  const { scrollYProgress } = useScroll({ target: wrap, offset: ['start start', 'end end'] });
  const raw = useTransform([scrollYProgress, distMV], ([p, d]: number[]) => -p * d);
  const x = useSpring(raw, { stiffness: 120, damping: 30, mass: 0.4 });
  const bar = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={wrap} style={{ height: `calc(100vh + ${dist}px)` }} className="relative">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(50%_60%_at_70%_50%,rgba(229,19,43,0.10),transparent_70%)]" />
        <motion.div ref={track} style={{ x }} className="gutter relative flex items-center gap-8 pr-[12vw]" data-cursor="drag">
          <Intro onOpenPublications={onOpenPublications} onOpenCollaborators={onOpenCollaborators} />
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={() => onOpen(p)} />
          ))}
          <Outro onOpenPublications={onOpenPublications} onOpenCollaborators={onOpenCollaborators} />
        </motion.div>
        <div className="gutter absolute inset-x-0 bottom-8 flex items-center gap-4">
          <span className="text-[10px] font-bold tracking-[0.3em] text-smoke">ORIGINALS</span>
          <div className="h-[2px] flex-1 overflow-hidden rounded bg-white/10">
            <motion.div className="h-full origin-left bg-crimson" style={{ scaleX: bar }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function RailOriginals({
  onOpen,
  onOpenPublications,
  onOpenCollaborators,
}: {
  onOpen: (p: Project) => void;
  onOpenPublications?: () => void;
  onOpenCollaborators?: () => void;
}) {
  return (
    <div className="py-6">
      <div className="gutter mb-6">
        <Intro onOpenPublications={onOpenPublications} onOpenCollaborators={onOpenCollaborators} />
      </div>
      <motion.div
        className="rail gutter flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} onOpen={() => onOpen(p)} />
        ))}
        <Outro onOpenPublications={onOpenPublications} onOpenCollaborators={onOpenCollaborators} />
      </motion.div>
    </div>
  );
}
