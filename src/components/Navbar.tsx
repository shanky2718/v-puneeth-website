import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { sectionMeta, viewerProfiles, type ProfileId, type SectionId } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { SeriesMark } from './Poster';
import { ProfileAvatar } from './ProfileSelector';
import { EASE } from './fx';

export default function Navbar({
  order,
  profileId,
  onSwitch,
  onReplay,
  onOpenPublications,
  onOpenTeaching,
  onOpenCollaborators,
  onOpenAdministration,
  onOpenActivities,
}: {
  order: SectionId[];
  profileId: ProfileId;
  onSwitch: (id: ProfileId) => void;
  onReplay?: () => void;
  onOpenPublications?: () => void;
  onOpenTeaching?: (tab?: 'statement' | 'courses' | 'testimonials') => void;
  onOpenCollaborators?: () => void;
  onOpenAdministration?: () => void;
  onOpenActivities?: (tab?: 'funding' | 'events' | 'talks' | 'certifications' | 'references') => void;
}) {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menu, setMenu] = useState(false);
  const [dossierMenu, setDossierMenu] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [active, setActive] = useState<string>('top');
  const { scrollTo } = useSmoothScroll();
  const menuRef = useRef<HTMLDivElement>(null);
  const dossierRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setSolid(y > 40);
    setHidden(y > 400 && y > prev && !menu && !mobileNav && !dossierMenu);
  });

  useEffect(() => {
    const ids = ['top', ...order, 'testimonials', 'contact'];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [order]);

  useEffect(() => {
    if (!menu && !dossierMenu) return;
    const close = (e: PointerEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setMenu(false);
      if (!dossierRef.current?.contains(e.target as Node)) setDossierMenu(false);
    };
    window.addEventListener('pointerdown', close);
    return () => window.removeEventListener('pointerdown', close);
  }, [menu, dossierMenu]);

  const go = (id: string) => {
    setMobileNav(false);
    scrollTo(`#${id}`, { offset: id === 'top' ? 0 : -64 });
  };

  const current = viewerProfiles.find((p) => p.id === profileId)!;

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-[60]"
      animate={{ y: hidden ? '-100%' : '0%' }}
      transition={{ duration: 0.45, ease: EASE }}
    >
      <div
        className={`gutter flex h-16 items-center justify-between gap-6 transition-[background,backdrop-filter] duration-500 md:h-[72px] ${
          solid || mobileNav ? 'bg-ink/80 backdrop-blur-xl' : 'bg-gradient-to-b from-black/80 to-transparent'
        }`}
      >
        <div className="flex items-center gap-6 lg:gap-8 xl:gap-10">
          <button type="button" onClick={() => go('top')} className="text-[22px]" aria-label="Back to top">
            <SeriesMark />
          </button>
          <nav className="hidden items-center gap-5 lg:flex xl:gap-6" aria-label="Sections">
            <NavLink label="Home" active={active === 'top'} onClick={() => go('top')} />
            {order.map((id) => (
              <NavLink key={id} label={sectionMeta[id].nav} active={active === id} onClick={() => go(id)} />
            ))}
            <NavLink label="Testimonials" active={active === 'testimonials'} onClick={() => go('testimonials')} />

            {/* Academic Dossier Dropdown */}
            <div className="relative" ref={dossierRef}>
              <button
                type="button"
                onClick={() => setDossierMenu((d) => !d)}
                aria-haspopup="menu"
                aria-expanded={dossierMenu}
                className="flex items-center gap-1.5 text-[13px] font-semibold text-crimson-2 hover:text-white transition"
              >
                <span>Dossier</span>
                <span className="text-[10px]">▼</span>
              </button>

              <AnimatePresence>
                {dossierMenu && (
                  <motion.div
                    role="menu"
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.2, ease: EASE }}
                    className="absolute left-0 top-9 w-72 rounded-xl border border-white/10 bg-ink-2/95 p-2 shadow-2xl backdrop-blur-xl z-[70]"
                  >
                    <p className="px-3 pb-2 pt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">
                      Official Academic Records
                    </p>
                    {onOpenPublications && (
                      <button
                        type="button"
                        onClick={() => {
                          setDossierMenu(false);
                          onOpenPublications();
                        }}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-xs font-semibold text-bone hover:bg-white/10"
                      >
                        <span className="text-crimson-2 font-mono">01.</span>
                        <span>73 Research Publications</span>
                      </button>
                    )}
                    {onOpenTeaching && (
                      <>
                        <button
                          type="button"
                          onClick={() => {
                            setDossierMenu(false);
                            onOpenTeaching('statement');
                          }}
                          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-xs font-semibold text-bone hover:bg-white/10"
                        >
                          <span className="text-crimson-2 font-mono">02.</span>
                          <span>The Art of Teaching (Statement)</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setDossierMenu(false);
                            onOpenTeaching('courses');
                          }}
                          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-xs font-semibold text-bone hover:bg-white/10"
                        >
                          <span className="text-crimson-2 font-mono">03.</span>
                          <span>Mathematics Subjects Handled (11 Courses)</span>
                        </button>
                      </>
                    )}
                    {onOpenCollaborators && (
                      <button
                        type="button"
                        onClick={() => {
                          setDossierMenu(false);
                          onOpenCollaborators();
                        }}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-xs font-semibold text-bone hover:bg-white/10"
                      >
                        <span className="text-crimson-2 font-mono">04.</span>
                        <span>Research Lab & Collaborators</span>
                      </button>
                    )}
                    {onOpenAdministration && (
                      <button
                        type="button"
                        onClick={() => {
                          setDossierMenu(false);
                          onOpenAdministration();
                        }}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-xs font-semibold text-bone hover:bg-white/10"
                      >
                        <span className="text-crimson-2 font-mono">05.</span>
                        <span>Administration & IQAC</span>
                      </button>
                    )}
                    {onOpenActivities && (
                      <>
                        <button
                          type="button"
                          onClick={() => {
                            setDossierMenu(false);
                            onOpenActivities('funding');
                          }}
                          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-xs font-semibold text-bone hover:bg-white/10"
                        >
                          <span className="text-crimson-2 font-mono">06.</span>
                          <span>Grants (INR 12L+) & Consultancy</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setDossierMenu(false);
                            onOpenActivities('events');
                          }}
                          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-xs font-semibold text-bone hover:bg-white/10"
                        >
                          <span className="text-crimson-2 font-mono">07.</span>
                          <span>Academic Conferences & SAINTS</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setDossierMenu(false);
                            onOpenActivities('talks');
                          }}
                          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-xs font-semibold text-bone hover:bg-white/10"
                        >
                          <span className="text-crimson-2 font-mono">08.</span>
                          <span>Invited Keynotes & FDP Talks</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setDossierMenu(false);
                            onOpenActivities('certifications');
                          }}
                          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-xs font-semibold text-bone hover:bg-white/10"
                        >
                          <span className="text-crimson-2 font-mono">09.</span>
                          <span>9 Online Certifications</span>
                        </button>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {onReplay && (
            <button
              type="button"
              onClick={onReplay}
              className="hidden rounded-full border border-crimson-2/40 bg-crimson/10 px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] text-bone transition hover:border-crimson-2 hover:bg-crimson/25 sm:flex items-center gap-1.5"
            >
              <span>▶</span> REPLAY INTRO
            </button>
          )}

          {onOpenPublications && (
            <button
              type="button"
              onClick={onOpenPublications}
              className="hidden rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] text-bone transition hover:border-crimson-2 hover:text-crimson-2 md:block"
            >
              PUBLICATIONS (73)
            </button>
          )}

          <button
            type="button"
            onClick={() => go('contact')}
            className="hidden rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-bone transition hover:border-crimson-2 hover:text-crimson-2 sm:block"
          >
            LET&apos;S BUILD
          </button>

          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setMenu((m) => !m)}
              aria-haspopup="menu"
              aria-expanded={menu}
              aria-label={`Viewing as ${current.name}. Switch profile`}
              className="flex items-center gap-2 rounded-md p-1"
            >
              <ProfileAvatar id={profileId} size="sm" />
              <motion.span animate={{ rotate: menu ? 180 : 0 }} className="text-[10px] text-mist">
                ▼
              </motion.span>
            </button>
            <AnimatePresence>
              {menu && (
                <motion.div
                  role="menu"
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="absolute right-0 top-12 w-60 origin-top-right rounded-xl border border-white/10 bg-ink-2/95 p-2 shadow-2xl backdrop-blur-xl"
                >
                  <p className="px-3 pb-2 pt-1 text-[10px] font-semibold tracking-[0.24em] text-smoke">WHO&apos;S WATCHING?</p>
                  {onReplay && (
                    <button
                      role="menuitem"
                      type="button"
                      onClick={() => {
                        setMenu(false);
                        onReplay();
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition hover:bg-white/5 border-b border-white/5 mb-1 text-crimson-2 font-semibold text-xs"
                    >
                      <span>▶</span> Replay Netflix Intro
                    </button>
                  )}
                  {viewerProfiles.map((p) => (
                    <button
                      key={p.id}
                      role="menuitem"
                      type="button"
                      onClick={() => {
                        onSwitch(p.id);
                        setMenu(false);
                      }}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition hover:bg-white/5 ${p.id === profileId ? 'bg-white/[0.06]' : ''}`}
                    >
                      <ProfileAvatar id={p.id} size="sm" />
                      <span>
                        <span className="block text-sm text-bone">{p.name}</span>
                        <span className="block text-[11px] text-smoke">{p.blurb}</span>
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label={mobileNav ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileNav}
            onClick={() => setMobileNav((v) => !v)}
          >
            <motion.span className="block h-0.5 w-5 bg-bone" animate={{ rotate: mobileNav ? 45 : 0, y: mobileNav ? 4 : 0 }} />
            <motion.span className="block h-0.5 w-5 bg-bone" animate={{ rotate: mobileNav ? -45 : 0, y: mobileNav ? -4 : 0 }} />
          </button>
        </div>
      </div>

      {/* Mobile Slideout Nav */}
      <AnimatePresence>
        {mobileNav && (
          <motion.nav
            aria-label="Sections"
            className="gutter border-b border-white/5 bg-ink/95 pb-6 pt-2 backdrop-blur-xl lg:hidden max-h-[85vh] overflow-y-auto"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            {[{ id: 'top', label: 'Home' }, ...order.map((id) => ({ id, label: sectionMeta[id].nav })), { id: 'testimonials', label: 'Testimonials' }, { id: 'contact', label: "Let's Build" }].map((l, i) => (
              <motion.button
                key={l.id}
                type="button"
                onClick={() => go(l.id)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i }}
                className={`block w-full py-2.5 text-left font-display text-2xl tracking-wide ${active === l.id ? 'text-crimson-2' : 'text-bone'}`}
              >
                {l.label}
              </motion.button>
            ))}

            <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">Academic Dossier</p>
              {onOpenPublications && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileNav(false);
                    onOpenPublications();
                  }}
                  className="block w-full text-left py-1 text-sm font-semibold text-crimson-2"
                >
                  📄 73 Research Publications Archive
                </button>
              )}
              {onOpenTeaching && (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileNav(false);
                      onOpenTeaching('courses');
                    }}
                    className="block w-full text-left py-1 text-sm font-semibold text-bone hover:text-crimson-2"
                  >
                    📐 Mathematics Subjects Handled (11 Courses)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileNav(false);
                      onOpenTeaching('statement');
                    }}
                    className="block w-full text-left py-1 text-sm font-semibold text-bone"
                  >
                    🎓 The Art of Teaching Statement
                  </button>
                </>
              )}
              {onOpenCollaborators && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileNav(false);
                    onOpenCollaborators();
                  }}
                  className="block w-full text-left py-1 text-sm font-semibold text-bone"
                >
                  🌐 Research Lab & Global Collaborators
                </button>
              )}
              {onOpenAdministration && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileNav(false);
                    onOpenAdministration();
                  }}
                  className="block w-full text-left py-1 text-sm font-semibold text-bone"
                >
                  🏛️ Administration & IQAC Coordination
                </button>
              )}
              {onOpenActivities && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileNav(false);
                    onOpenActivities('funding');
                  }}
                  className="block w-full text-left py-1 text-sm font-semibold text-bone"
                >
                  💼 Grants (INR 12L+), Talks & Events
                </button>
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavLink({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className={`relative text-[13px] font-medium transition ${active ? 'text-bone' : 'text-mist hover:text-bone'}`}>
      {label}
      {active && <motion.span layoutId="nav-underline" className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded bg-crimson" />}
    </button>
  );
}
