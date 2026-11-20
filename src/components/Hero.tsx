import { useRef } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { achievements, profile, type ProfileId } from '../data/portfolio';
import { useFinePointer } from '../hooks/useMedia';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Magnetic, Particles } from './fx';
import { SeriesMark } from './Poster';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } } };
const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: EASE } },
};

export default function Hero({
  onPlay,
  onResume,
  onOpenPublications,
  onOpenTeaching,
  onOpenLOR,
  profileId,
}: {
  onPlay: () => void;
  onResume: () => void;
  onOpenPublications?: () => void;
  onOpenTeaching?: (tab?: 'statement' | 'courses' | 'testimonials') => void;
  onOpenLOR?: () => void;
  profileId: ProfileId;
}) {
  const ref = useRef<HTMLElement>(null);
  const fine = useFinePointer();
  const { scrollTo } = useSmoothScroll();

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const blackout = useTransform(scrollYProgress, [0.35, 1], [0, 1]);

  // pointer parallax (desktop)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 18 });
  const py = useSpring(my, { stiffness: 60, damping: 18 });
  const imgRotY = useTransform(px, [-1, 1], [-4, 4]);
  const imgRotX = useTransform(py, [-1, 1], [3, -3]);
  const imgShiftX = useTransform(px, [-1, 1], [-10, 10]);
  const chipX = useTransform(px, [-1, 1], [18, -18]);
  const chipY = useTransform(py, [-1, 1], [12, -12]);
  const glowX = useTransform(px, [-1, 1], ['-6%', '6%']);

  const meta = [
    'Stanford Top 2% (2024 & 2025)',
    'Assistant Professor · CHRIST',
    'Executive Editor · CU JONLFM',
    'IQAC & Industry Ambassador',
  ];

  const floating = [
    { text: 'Top 2%', sub: 'Stanford Global Scientist', pos: 'left-[-4%] top-[22%]', depth: 1, color: '#e5132b' },
    { text: 'Executive Editor', sub: 'CU Journal of NLFM', pos: 'right-[-2%] top-[16%]', depth: -1, color: '#4cc9ff' },
    { text: 'ROM · PINNs · CFD', sub: 'Primary Research Thrusts', pos: 'right-[-4%] bottom-[24%]', depth: 0.6, color: '#ffb547' },
    { text: 'IQAC Coordinator', sub: 'Governance & Quality', pos: 'left-[-6%] bottom-[32%]', depth: -0.8, color: '#46e3a8' },
  ];

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden"
      onPointerMove={(e) => {
        if (!fine) return;
        mx.set((e.clientX / window.innerWidth) * 2 - 1);
        my.set((e.clientY / window.innerHeight) * 2 - 1);
      }}
    >
      {/* atmosphere */}
      <motion.div aria-hidden className="absolute inset-0" style={{ x: glowX }}>
        <div className="absolute right-[-10%] top-[-10%] h-[90vh] w-[80vw] rounded-full bg-[radial-gradient(closest-side,rgba(229,19,43,0.38),rgba(229,19,43,0.08)_55%,transparent)] blur-2xl lg:right-[-4%] lg:w-[60vw]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[70vh] w-[60vw] rounded-full bg-[radial-gradient(closest-side,rgba(90,20,120,0.25),transparent)] blur-2xl" />
      </motion.div>
      <Particles className="z-[1]" />
      <div aria-hidden className="absolute inset-0 z-[1] overflow-hidden">
        <span className="light-streak left-[40%] top-[22%] w-[50vw]" style={{ animationDelay: '1.2s' }} />
        <span className="light-streak left-[30%] top-[64%] w-[40vw]" style={{ animationDelay: '3.6s' }} />
        <span className="light-streak left-[55%] top-[44%] w-[30vw]" style={{ animationDelay: '5.2s' }} />
      </div>

      {/* portrait */}
      <motion.div
        className="absolute inset-x-0 top-12 z-[2] flex h-[64svh] items-end justify-center sm:h-[70svh] lg:bottom-0 lg:left-auto lg:right-[3vw] lg:top-20 lg:h-auto lg:w-[54vw] xl:right-[6vw] xl:w-[48vw]"
        style={{ y: imgY, scale: imgScale, opacity: fade }}
      >
        <motion.div
          className="relative h-full w-full lg:h-[86vh]"
          style={{ rotateY: imgRotY, rotateX: imgRotX, x: imgShiftX, transformPerspective: 1200 }}
          initial={{ clipPath: 'inset(100% -30% -10% -30%)', opacity: 0 }}
          animate={{ clipPath: 'inset(-30% -30% -10% -30%)', opacity: 1 }}
          transition={{ duration: 1.6, ease: EASE, delay: 0.1 }}
        >
          {/* rim light ring */}
          <div aria-hidden className="absolute bottom-[8%] left-1/2 h-[78%] w-[78%] -translate-x-1/2 rounded-full border border-crimson-2/20 shadow-[0_0_120px_rgba(229,19,43,0.35),inset_0_0_80px_rgba(229,19,43,0.18)]" />
          <img
            src={profile.portrait.src}
            srcSet={profile.portrait.srcSet}
            sizes="(max-width: 1024px) 100vw, 54vw"
            alt={profile.portrait.alt}

            className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] [mask-image:linear-gradient(to_bottom,black_62%,transparent_97%)]"
          />
          {/* crimson rim light on the image edge */}
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_30%,rgba(255,61,90,0.16),transparent_70%)] mix-blend-screen" />

          {/* floating UI chips */}
          {floating.map((f, i) => (
            <FloatChip key={f.text} {...f} index={i} mx={chipX} my={chipY} />
          ))}
        </motion.div>
      </motion.div>

      {/* readability gradients */}
      <div aria-hidden className="absolute inset-x-0 top-[40svh] z-[3] h-[36svh] bg-gradient-to-b from-transparent via-ink/70 to-ink lg:hidden" />
      <div aria-hidden className="absolute inset-0 z-[3] hidden bg-[linear-gradient(90deg,var(--color-ink)_0%,rgba(7,7,10,0.7)_32%,transparent_58%)] lg:block" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 z-[3] h-48 bg-gradient-to-t from-ink to-transparent" />

      {/* copy */}
      <motion.div
        className="gutter relative z-[4] flex min-h-[100svh] flex-col justify-end pb-16 pt-[54svh] sm:pb-20 lg:max-w-[52vw] lg:justify-center lg:pb-0 lg:pt-24"
        style={{ y: textY, opacity: fade }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-3 text-lg">
          <SeriesMark />
        </motion.div>
        <motion.h1 variants={item} className="font-display leading-[0.82] tracking-[0.02em] text-bone" style={{ fontSize: 'clamp(4rem, 12vw, 11rem)' }}>
          <span className="shimmer-text">{profile.firstName}</span>
        </motion.h1>
        <motion.p variants={item} className="mt-1 font-sans text-sm font-bold tracking-[0.62em] text-crimson-2 sm:text-base">
          {profile.seriesTag}
        </motion.p>

        <motion.div variants={item} className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] font-medium text-mist">
          <span className="rounded border border-white/25 px-1.5 py-px text-[10px] font-bold tracking-wider text-bone">MATH·AI</span>
          {meta.map((m, i) => (
            <span key={m} className="flex items-center gap-3">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-smoke" />}
              {m}
            </span>
          ))}
        </motion.div>

        <motion.p variants={item} className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-bone/90 sm:text-xs sm:tracking-[0.34em]">
          {profile.tagline.join(' • ')}
        </motion.p>

        {/* Highlight Badges (Replacing the long intro text) */}
        <motion.div variants={item} className="mt-5 grid grid-cols-2 gap-2.5 max-w-lg">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-md ring-1 ring-white/5 transition hover:border-crimson-2/40">
            <p className="text-[9px] font-bold uppercase tracking-widest text-crimson-2">Primary Thrust</p>
            <p className="mt-0.5 text-xs font-bold text-bone">Reduced Order Modelling (ROM)</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-md ring-1 ring-white/5 transition hover:border-[#4cc9ff]/40">
            <p className="text-[9px] font-bold uppercase tracking-widest text-[#4cc9ff]">Editorial Leadership</p>
            <p className="mt-0.5 text-xs font-bold text-bone">Executive Editor · CU JONLFM</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-md ring-1 ring-white/5 transition hover:border-emerald-400/40">
            <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-400">Institutional Role</p>
            <p className="mt-0.5 text-xs font-bold text-bone">IQAC Coordinator · CHRIST</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-md ring-1 ring-white/5 transition hover:border-[#ffb547]/40">
            <p className="text-[9px] font-bold uppercase tracking-widest text-[#ffb547]">Global & Industry</p>
            <p className="mt-0.5 text-xs font-bold text-bone">Industry Ambassador · UMT</p>
          </div>
        </motion.div>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
          <Magnetic>
            <button
              type="button"
              data-cursor="play"
              onClick={onPlay}
              className="flex min-h-12 items-center gap-2.5 rounded-md bg-bone px-5 py-3 text-[14px] font-bold text-ink transition hover:bg-white sm:px-7"
            >
              <span className="text-base">▶</span> Play Intro
            </button>
          </Magnetic>
          {onOpenPublications && (
            <Magnetic>
              <button
                type="button"
                onClick={onOpenPublications}
                className="glass flex min-h-12 items-center gap-2 rounded-md px-4 py-3 text-[14px] font-semibold text-bone transition hover:bg-white/15"
              >
                <span>📄</span> 73 Publications
              </button>
            </Magnetic>
          )}
          {onOpenTeaching && (
            <Magnetic>
              <button
                type="button"
                onClick={() => onOpenTeaching('statement')}
                className="glass hidden sm:flex min-h-12 items-center gap-2 rounded-md px-4 py-3 text-[14px] font-semibold text-bone transition hover:bg-white/15"
              >
                <span>🎓</span> Teaching Statement
              </button>
            </Magnetic>
          )}
          <Magnetic>
            {profileId === 'recruiter' ? (
              <button type="button" onClick={onResume} className="glass flex min-h-12 items-center gap-2 rounded-md px-5 py-3 text-[14px] font-semibold text-bone transition hover:bg-white/15">
                <span className="text-base">⤓</span> View Resume
              </button>
            ) : (
              <button
                type="button"
                onClick={() => scrollTo('#originals')}
                className="glass flex min-h-12 items-center gap-2 rounded-md px-5 py-3 text-[14px] font-semibold text-bone transition hover:bg-white/15"
              >
                <span className="text-lg leading-none">＋</span> Explore Research
              </button>
            )}
          </Magnetic>
          {onOpenLOR && (
            <Magnetic>
              <button
                type="button"
                onClick={onOpenLOR}
                className="glass flex min-h-12 items-center gap-2 rounded-md border border-crimson/40 px-5 py-3 text-[14px] font-semibold text-crimson-2 transition hover:bg-crimson/15"
              >
                <span>📜</span> Request LOR
              </button>
            </Magnetic>
          )}
          <button
            type="button"
            onClick={() => scrollTo('#about')}
            aria-label="More info"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-lg text-bone transition hover:border-bone hover:bg-white/10"
          >
            ⓘ
          </button>
        </motion.div>
      </motion.div>

      <motion.div aria-hidden className="pointer-events-none absolute inset-0 z-[5] bg-ink" style={{ opacity: blackout }} />
    </section>
  );
}

type MV = ReturnType<typeof useTransform<number, number>>;

function FloatChip({
  text,
  sub,
  pos,
  depth,
  index,
  color = '#e5132b',
  mx,
  my,
}: {
  text: string;
  sub: string;
  pos: string;
  depth: number;
  index: number;
  color?: string;
  mx: MV;
  my: MV;
}) {
  const x = useTransform(mx, (n: number) => n * depth);
  const y = useTransform(my, (n: number) => n * depth);
  return (
    <motion.div
      className={`glass absolute hidden rounded-xl px-4 py-2.5 md:block shadow-2xl backdrop-blur-md ring-1 ring-white/15 ${pos}`}
      style={{ x, y }}
      initial={{ opacity: 0, filter: 'blur(6px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.9, delay: 1.2 + index * 0.18, ease: EASE }}
    >
      <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
          <p className="text-sm font-semibold text-bone">{text}</p>
        </div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-mist mt-0.5">{sub}</p>
      </motion.div>
    </motion.div>
  );
}
