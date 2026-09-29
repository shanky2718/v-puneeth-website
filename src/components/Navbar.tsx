import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  ChevronDown, 
  Menu, 
  X, 
  GraduationCap, 
  Users, 
  Award, 
  FileText, 
  Calendar, 
  Clock, 
  Briefcase,
  Home,
  MessageSquare,
  Globe,
  Microscope,
  BookMarked
} from 'lucide-react';

import { siteInfo } from '../data/siteData';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isResearchActive = currentPath.startsWith('/research');
  const isConferencesActive = currentPath.startsWith('/conferences');
  const isOutreachActive = currentPath.startsWith('/outreach');

  return (
    <header className={`header-sticky ${scrolled ? 'py-3 shadow-md' : 'py-3.5'}`}>
      <div className="container flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <div 
          onClick={() => handleLinkClick('/')}
          className="flex items-center gap-3 cursor-pointer shrink-0 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="brand-title group-hover:text-blue-600 transition-colors">
              {siteInfo.name}
            </span>
            <span className="brand-sub">
              Assistant Professor • Mathematics
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          <button 
            onClick={() => handleLinkClick('/')}
            className={`nav-link ${currentPath === '/' || currentPath === '/home' ? 'active' : ''}`}
          >
            <Home className="w-4 h-4" /> Home
          </button>

          {/* Research Dropdown */}
          <div className="nav-dropdown">
            <button 
              onClick={() => handleLinkClick('/research')}
              className={`nav-link ${isResearchActive ? 'active' : ''}`}
            >
              <Microscope className="w-4 h-4" /> Research <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>
            <div className="dropdown-menu">
              <button onClick={() => handleLinkClick('/research')} className={`dropdown-item ${currentPath === '/research' ? 'active' : ''}`}>
                <BookOpen className="w-4 h-4 text-blue-500" /> Research Overview
              </button>
              <button onClick={() => handleLinkClick('/research/publications')} className={`dropdown-item ${currentPath === '/research/publications' ? 'active' : ''}`}>
                <FileText className="w-4 h-4 text-indigo-500" /> Publications
              </button>
              <button onClick={() => handleLinkClick('/research/projects')} className={`dropdown-item ${currentPath === '/research/projects' ? 'active' : ''}`}>
                <Briefcase className="w-4 h-4 text-emerald-500" /> Funded Projects
              </button>
              <button onClick={() => handleLinkClick('/research/collaborators')} className={`dropdown-item ${currentPath === '/research/collaborators' ? 'active' : ''}`}>
                <Users className="w-4 h-4 text-amber-500" /> Collaborators
              </button>
              <button onClick={() => handleLinkClick('/research/networking-institutions')} className={`dropdown-item ${currentPath === '/research/networking-institutions' ? 'active' : ''}`}>
                <Globe className="w-4 h-4 text-teal-500" /> Networking Institutions
              </button>
              <button onClick={() => handleLinkClick('/research/editorial-member')} className={`dropdown-item ${currentPath === '/research/editorial-member' ? 'active' : ''}`}>
                <Award className="w-4 h-4 text-purple-500" /> Editorial Member
              </button>
              <button onClick={() => handleLinkClick('/research/research-lab')} className={`dropdown-item ${currentPath === '/research/research-lab' ? 'active' : ''}`}>
                <Microscope className="w-4 h-4 text-rose-500" /> Research Lab
              </button>
            </div>
          </div>

          {/* Conferences Dropdown */}
          <div className="nav-dropdown">
            <button 
              onClick={() => handleLinkClick('/conferences')}
              className={`nav-link ${isConferencesActive ? 'active' : ''}`}
            >
              <Calendar className="w-4 h-4" /> Conferences <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>
            <div className="dropdown-menu">
              <button onClick={() => handleLinkClick('/conferences')} className={`dropdown-item ${currentPath === '/conferences' ? 'active' : ''}`}>
                Overview
              </button>
              <button onClick={() => handleLinkClick('/conferences/organised')} className={`dropdown-item ${currentPath === '/conferences/organised' ? 'active' : ''}`}>
                Organised
              </button>
              <button onClick={() => handleLinkClick('/conferences/participation')} className={`dropdown-item ${currentPath === '/conferences/participation' ? 'active' : ''}`}>
                Participation
              </button>
            </div>
          </div>

          <button 
            onClick={() => handleLinkClick('/thesis-dissertations')}
            className={`nav-link ${currentPath === '/thesis-dissertations' ? 'active' : ''}`}
          >
            <BookMarked className="w-4 h-4" /> Thesis & Dissertations
          </button>

          {/* Outreach Dropdown */}
          <div className="nav-dropdown">
            <button 
              onClick={() => handleLinkClick('/outreach')}
              className={`nav-link ${isOutreachActive ? 'active' : ''}`}
            >
              <Award className="w-4 h-4" /> Outreach <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>
            <div className="dropdown-menu">
              <button onClick={() => handleLinkClick('/outreach')} className={`dropdown-item ${currentPath === '/outreach' ? 'active' : ''}`}>
                Outreach Overview
              </button>
              <button onClick={() => handleLinkClick('/outreach/invited-talks')} className={`dropdown-item ${currentPath === '/outreach/invited-talks' ? 'active' : ''}`}>
                Invited Talks
              </button>
              <button onClick={() => handleLinkClick('/outreach/expert-sessions')} className={`dropdown-item ${currentPath === '/outreach/expert-sessions' ? 'active' : ''}`}>
                Expert Sessions
              </button>
              <button onClick={() => handleLinkClick('/outreach/mooc')} className={`dropdown-item ${currentPath === '/outreach/mooc' ? 'active' : ''}`}>
                MOOC
              </button>
            </div>
          </div>

          <button 
            onClick={() => handleLinkClick('/bio-data')}
            className={`nav-link ${currentPath === '/bio-data' ? 'active' : ''}`}
          >
            <FileText className="w-4 h-4" /> Bio Data
          </button>

          <button 
            onClick={() => handleLinkClick('/testimonials')}
            className={`nav-link ${currentPath === '/testimonials' ? 'active' : ''}`}
          >
            <MessageSquare className="w-4 h-4" /> Testimonials
          </button>

          <button 
            onClick={() => handleLinkClick('/internship')}
            className={`nav-link ${currentPath === '/internship' ? 'active' : ''}`}
          >
            <Users className="w-4 h-4" /> Interns
          </button>

          <button 
            onClick={() => handleLinkClick('/office-hours')}
            className={`nav-link ${currentPath === '/office-hours' ? 'active' : ''}`}
          >
            <Clock className="w-4 h-4" /> Office Hours
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-lg border border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>


      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <>
          <div className="mobile-nav-overlay" onClick={() => setMobileMenuOpen(false)} />
          <div className="mobile-nav-drawer">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                <span className="font-bold text-slate-900 dark:text-slate-100">{siteInfo.name}</span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-md text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-1 py-2">
              <button onClick={() => handleLinkClick('/')} className={`dropdown-item ${currentPath === '/' ? 'active' : ''}`}>
                <Home className="w-4 h-4" /> Home
              </button>

              <div className="font-semibold text-xs text-slate-400 uppercase tracking-wider px-3 pt-3 pb-1">Research</div>
              <button onClick={() => handleLinkClick('/research')} className="dropdown-item pl-6">Research Overview</button>
              <button onClick={() => handleLinkClick('/research/publications')} className="dropdown-item pl-6">Publications</button>
              <button onClick={() => handleLinkClick('/research/projects')} className="dropdown-item pl-6">Funded Projects</button>
              <button onClick={() => handleLinkClick('/research/collaborators')} className="dropdown-item pl-6">Collaborators</button>
              <button onClick={() => handleLinkClick('/research/networking-institutions')} className="dropdown-item pl-6">Networking Institutions</button>
              <button onClick={() => handleLinkClick('/research/editorial-member')} className="dropdown-item pl-6">Editorial Member</button>
              <button onClick={() => handleLinkClick('/research/research-lab')} className="dropdown-item pl-6">Research Lab</button>

              <div className="font-semibold text-xs text-slate-400 uppercase tracking-wider px-3 pt-3 pb-1">Conferences</div>
              <button onClick={() => handleLinkClick('/conferences')} className="dropdown-item pl-6">Conferences Overview</button>
              <button onClick={() => handleLinkClick('/conferences/organised')} className="dropdown-item pl-6">Organised</button>
              <button onClick={() => handleLinkClick('/conferences/participation')} className="dropdown-item pl-6">Participation</button>

              <button onClick={() => handleLinkClick('/thesis-dissertations')} className="dropdown-item">
                <BookMarked className="w-4 h-4" /> Thesis & Dissertations
              </button>

              <div className="font-semibold text-xs text-slate-400 uppercase tracking-wider px-3 pt-3 pb-1">Outreach</div>
              <button onClick={() => handleLinkClick('/outreach')} className="dropdown-item pl-6">Outreach Overview</button>
              <button onClick={() => handleLinkClick('/outreach/invited-talks')} className="dropdown-item pl-6">Invited Talks</button>
              <button onClick={() => handleLinkClick('/outreach/expert-sessions')} className="dropdown-item pl-6">Expert Sessions</button>
              <button onClick={() => handleLinkClick('/outreach/mooc')} className="dropdown-item pl-6">MOOC</button>

              <button onClick={() => handleLinkClick('/bio-data')} className="dropdown-item">
                <FileText className="w-4 h-4" /> Bio Data
              </button>

              <button onClick={() => handleLinkClick('/testimonials')} className="dropdown-item">
                <MessageSquare className="w-4 h-4" /> Testimonials
              </button>

              <button onClick={() => handleLinkClick('/internship')} className="dropdown-item">
                <Users className="w-4 h-4" /> Interns
              </button>

              <button onClick={() => handleLinkClick('/office-hours')} className="dropdown-item">
                <Clock className="w-4 h-4" /> Office Hours
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
