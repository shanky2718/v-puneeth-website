import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { outreachOverviewText } from '../data/siteData';
import { Award, ArrowRight, BookOpen, Users, Video } from 'lucide-react';

interface OutreachPageProps {
  onNavigate: (path: string) => void;
}

export const OutreachPage: React.FC<OutreachPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader 
        title="Outreach"
        subtitle="MOOCs, Expert Sessions, Workshops, and Invited Talks"
        breadcrumb={[{ label: 'Outreach', path: '/outreach' }]}
        onNavigate={onNavigate}
      />

      <div className="container space-y-8 max-w-4xl">
        
        <div className="card-glass p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Outreach Overview</h2>
          </div>

          <div className="text-slate-700 dark:text-slate-300 text-base leading-relaxed space-y-4 whitespace-pre-line">
            {outreachOverviewText}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div 
            onClick={() => onNavigate('/outreach/invited-talks')}
            className="card-glass p-6 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center mb-3">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors">Invited Talks</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Talks & workshops on Technology in Mathematics Pedagogy, FOSS under RUSA project, and Research Roadmaps.
              </p>
            </div>
            <div className="mt-4 flex items-center text-xs font-semibold text-blue-600 gap-1 group-hover:gap-2 transition-all">
              View Talks <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          <div 
            onClick={() => onNavigate('/outreach/expert-sessions')}
            className="card-glass p-6 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 flex items-center justify-center mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold group-hover:text-indigo-600 transition-colors">Expert Sessions</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                FDP workshops on Self-Directed Learning, Empathy in Education, and Principles of Servant Leadership.
              </p>
            </div>
            <div className="mt-4 flex items-center text-xs font-semibold text-indigo-600 gap-1 group-hover:gap-2 transition-all">
              View Expert Sessions <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          <div 
            onClick={() => onNavigate('/outreach/mooc')}
            className="card-glass p-6 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-600 flex items-center justify-center mb-3">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold group-hover:text-teal-600 transition-colors">MOOC Courses</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Massive Open Online Courses developed and delivered across 2020 to 2025.
              </p>
            </div>
            <div className="mt-4 flex items-center text-xs font-semibold text-teal-600 gap-1 group-hover:gap-2 transition-all">
              View MOOC Record <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
