import { lazy, Suspense, useCallback, useEffect, useState, type ReactNode } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { viewerProfiles, type ProfileId, type Project, type SectionId } from './data/portfolio';
import { SmoothScrollProvider, useSmoothScroll } from './hooks/smoothScroll';
import CustomCursor from './components/CustomCursor';
import OpeningSequence from './components/OpeningSequence';
import ProfileSelector from './components/ProfileSelector';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContinueWatching from './components/ContinueWatching';
import Scene from './components/Scene';
import About from './components/About';
import Seasons from './components/Seasons';
import Originals from './components/Originals';
import TopPicks from './components/TopPicks';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import ResumeSection from './components/ResumeViewer';
import TestimonialsSection from './components/TestimonialsSection';
import FinalCTA from './components/FinalCTA';
import { EASE } from './components/fx';

// Overlays are loaded on demand
const PlayIntro = lazy(() => import('./components/PlayIntro'));
const ProjectModal = lazy(() => import('./components/ProjectModal'));
const ResumeModal = lazy(() => import('./components/ResumeModal'));
const PublicationsModal = lazy(() => import('./components/PublicationsModal'));
const CollaboratorsModal = lazy(() => import('./components/CollaboratorsModal'));
const TeachingStatementModal = lazy(() => import('./components/TeachingStatementModal'));
const AdministrationModal = lazy(() => import('./components/AdministrationModal'));
const AcademicActivitiesModal = lazy(() => import('./components/AcademicActivitiesModal'));

type Stage = 'opening' | 'profiles' | 'home';

const STORAGE_KEY = 'puneeth-series-profile';

function readStoredProfile(): ProfileId | null {
  try {
    const v = sessionStorage.getItem(STORAGE_KEY);
    return viewerProfiles.some((p) => p.id === v) ? (v as ProfileId) : null;
  } catch {
    return null;
  }
}

export default function App() {
  return (
    <SmoothScrollProvider>
      <Series />
    </SmoothScrollProvider>
  );
}

function Series() {
  const stored = readStoredProfile();
  const [stage, setStage] = useState<Stage>('opening');
  const [profileId, setProfileId] = useState<ProfileId>(stored ?? 'puneeth');
  const [playing, setPlaying] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [publicationsOpen, setPublicationsOpen] = useState(false);
  const [collaboratorsOpen, setCollaboratorsOpen] = useState(false);
  const [teachingOpen, setTeachingOpen] = useState(false);
  const [teachingTab, setTeachingTab] = useState<'statement' | 'courses' | 'testimonials'>('statement');
  const [administrationOpen, setAdministrationOpen] = useState(false);
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const [activitiesTab, setActivitiesTab] = useState<'funding' | 'events' | 'talks' | 'certifications' | 'references'>('funding');
  const [toast, setToast] = useState<string | null>(null);
  const { scrollTo, lock, unlock } = useSmoothScroll();

  const order = viewerProfiles.find((p) => p.id === profileId)!.order;

  useEffect(() => {
    if (stage === 'home') return;
    lock();
    return unlock;
  }, [stage, lock, unlock]);

  const pickProfile = useCallback(
    (id: ProfileId) => {
      setProfileId(id);
      try {
        sessionStorage.setItem(STORAGE_KEY, id);
      } catch {
        /* storage unavailable — profile simply won't persist */
      }
      if (stage !== 'home') {
        window.scrollTo(0, 0);
        setStage('home');
      } else {
        const p = viewerProfiles.find((v) => v.id === id)!;
        setToast(`Now watching as ${p.name} — ${p.blurb.toLowerCase()}`);
        scrollTo(0, { offset: 0 });
      }
    },
    [stage, scrollTo],
  );

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(t);
  }, [toast]);

  const closeIntro = useCallback(() => setPlaying(false), []);
  const closeProject = useCallback(() => setProject(null), []);
  const closeResume = useCallback(() => setResumeOpen(false), []);
  const closePublications = useCallback(() => setPublicationsOpen(false), []);
  const closeCollaborators = useCallback(() => setCollaboratorsOpen(false), []);
  const closeTeaching = useCallback(() => setTeachingOpen(false), []);
  const closeAdministration = useCallback(() => setAdministrationOpen(false), []);
  const closeActivities = useCallback(() => setActivitiesOpen(false), []);

  const openTeachingWithTab = useCallback((tab: 'statement' | 'courses' | 'testimonials' = 'statement') => {
    setTeachingTab(tab);
    setTeachingOpen(true);
  }, []);

  const openActivitiesWithTab = useCallback((tab: 'funding' | 'events' | 'talks' | 'certifications' | 'references' = 'funding') => {
    setActivitiesTab(tab);
    setActivitiesOpen(true);
  }, []);

  const sections: Record<SectionId, ReactNode> = {
    about: (
      <About
        onOpenTeaching={openTeachingWithTab}
        onOpenAdministration={() => setAdministrationOpen(true)}
      />
    ),
    journey: <Seasons />,
    originals: (
      <Originals
        onOpen={setProject}
        onOpenPublications={() => setPublicationsOpen(true)}
        onOpenCollaborators={() => setCollaboratorsOpen(true)}
      />
    ),
    picks: <TopPicks />,
    skills: <Skills />,
    moments: (
      <Achievements
        onOpenActivities={openActivitiesWithTab}
      />
    ),
    story: (
      <ResumeSection
        onView={() => setResumeOpen(true)}
        onOpenTeaching={openTeachingWithTab}
        onOpenPublications={() => setPublicationsOpen(true)}
        onOpenAdministration={() => setAdministrationOpen(true)}
      />
    ),
  };

  return (
    <LayoutGroup>
      <div className="grain" aria-hidden />
      <CustomCursor />

      <AnimatePresence>
        {stage === 'opening' && <OpeningSequence key="opening" onDone={() => setStage('profiles')} />}
        {stage === 'profiles' && <ProfileSelector key="profiles" onPick={pickProfile} />}
      </AnimatePresence>

      {stage === 'home' && (
        <motion.div initial={{ opacity: 0, scale: 1.03, filter: 'blur(10px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} transition={{ duration: 1, ease: EASE }}>
          <Navbar
            order={order}
            profileId={profileId}
            onSwitch={pickProfile}
            onReplay={() => setStage('opening')}
            onOpenPublications={() => setPublicationsOpen(true)}
            onOpenTeaching={openTeachingWithTab}
            onOpenCollaborators={() => setCollaboratorsOpen(true)}
            onOpenAdministration={() => setAdministrationOpen(true)}
            onOpenActivities={openActivitiesWithTab}
          />
          <main>
            <Hero
              key={`hero-${profileId}`}
              onPlay={() => setPlaying(true)}
              onResume={() => setResumeOpen(true)}
              onOpenPublications={() => setPublicationsOpen(true)}
              onOpenTeaching={openTeachingWithTab}
              profileId={profileId}
            />
            <ContinueWatching order={order} />
            {order.map((id) => (
              <Scene key={id} id={id} className={id === 'originals' ? '!py-0 sm:!py-0' : ''}>
                {sections[id]}
              </Scene>
            ))}
            <TestimonialsSection />
            <FinalCTA
              onReplay={() => setStage('opening')}
              onOpenPublications={() => setPublicationsOpen(true)}
              onOpenTeaching={openTeachingWithTab}
              onOpenAdministration={() => setAdministrationOpen(true)}
              onOpenActivities={openActivitiesWithTab}
            />
          </main>
        </motion.div>
      )}

      <Suspense fallback={null}>
        <AnimatePresence>{playing && <PlayIntro key="intro" onClose={closeIntro} />}</AnimatePresence>
        <AnimatePresence>{project && <ProjectModal key="project" project={project} onClose={closeProject} onSwitch={setProject} />}</AnimatePresence>
        <AnimatePresence>{resumeOpen && <ResumeModal key="resume" onClose={closeResume} />}</AnimatePresence>
        <AnimatePresence>{publicationsOpen && <PublicationsModal key="pubs" onClose={closePublications} />}</AnimatePresence>
        <AnimatePresence>{collaboratorsOpen && <CollaboratorsModal key="collabs" onClose={closeCollaborators} />}</AnimatePresence>
        <AnimatePresence>{teachingOpen && <TeachingStatementModal key="teaching" initialTab={teachingTab} onClose={closeTeaching} />}</AnimatePresence>
        <AnimatePresence>{administrationOpen && <AdministrationModal key="admin" onClose={closeAdministration} />}</AnimatePresence>
        <AnimatePresence>{activitiesOpen && <AcademicActivitiesModal key="activities" initialTab={activitiesTab} onClose={closeActivities} />}</AnimatePresence>
      </Suspense>

      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            className="glass fixed bottom-6 left-1/2 z-[150] w-[min(92vw,420px)] -translate-x-1/2 rounded-xl px-5 py-3 text-center text-sm text-bone"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
