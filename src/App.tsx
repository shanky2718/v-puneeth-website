import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';

// Pages
import { HomePage } from './pages/HomePage';
import { ResearchPage } from './pages/ResearchPage';
import { PublicationsPage } from './pages/PublicationsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CollaboratorsPage } from './pages/CollaboratorsPage';
import { NetworkingInstitutionsPage } from './pages/NetworkingInstitutionsPage';
import { EditorialMemberPage } from './pages/EditorialMemberPage';
import { ResearchLabPage } from './pages/ResearchLabPage';

import { ConferencesPage } from './pages/ConferencesPage';
import { ConferencesOrganisedPage } from './pages/ConferencesOrganisedPage';
import { ConferencesParticipationPage } from './pages/ConferencesParticipationPage';

import { ThesisDissertationsPage } from './pages/ThesisDissertationsPage';

import { OutreachPage } from './pages/OutreachPage';
import { OutreachInvitedTalksPage } from './pages/OutreachInvitedTalksPage';
import { OutreachExpertSessionsPage } from './pages/OutreachExpertSessionsPage';
import { OutreachMOOCPage } from './pages/OutreachMOOCPage';

import { BioDataPage } from './pages/BioDataPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { InternshipPage } from './pages/InternshipPage';
import { OfficeHoursPage } from './pages/OfficeHoursPage';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  const navigate = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
      case '/home':
        return <HomePage onNavigate={navigate} />;
      case '/research':
        return <ResearchPage onNavigate={navigate} />;
      case '/research/publications':
        return <PublicationsPage onNavigate={navigate} />;
      case '/research/projects':
        return <ProjectsPage onNavigate={navigate} />;
      case '/research/collaborators':
        return <CollaboratorsPage onNavigate={navigate} />;
      case '/research/networking-institutions':
        return <NetworkingInstitutionsPage onNavigate={navigate} />;
      case '/research/editorial-member':
        return <EditorialMemberPage onNavigate={navigate} />;
      case '/research/research-lab':
        return <ResearchLabPage onNavigate={navigate} />;
      case '/conferences':
        return <ConferencesPage onNavigate={navigate} />;
      case '/conferences/organised':
        return <ConferencesOrganisedPage onNavigate={navigate} />;
      case '/conferences/participation':
        return <ConferencesParticipationPage onNavigate={navigate} />;
      case '/thesis-dissertations':
        return <ThesisDissertationsPage onNavigate={navigate} />;
      case '/outreach':
        return <OutreachPage onNavigate={navigate} />;
      case '/outreach/invited-talks':
        return <OutreachInvitedTalksPage onNavigate={navigate} />;
      case '/outreach/expert-sessions':
        return <OutreachExpertSessionsPage onNavigate={navigate} />;
      case '/outreach/mooc':
        return <OutreachMOOCPage onNavigate={navigate} />;
      case '/bio-data':
        return <BioDataPage onNavigate={navigate} />;
      case '/testimonials':
        return <TestimonialsPage onNavigate={navigate} />;
      case '/internship':
        return <InternshipPage onNavigate={navigate} />;
      case '/office-hours':
        return <OfficeHoursPage onNavigate={navigate} />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <ScrollProgress />
      <Navbar 
        currentPath={currentPath} 
        onNavigate={navigate} 
      />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}


export default App;
