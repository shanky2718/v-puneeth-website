import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { conferencesOverviewText } from '../data/siteData';
import { Calendar, Users, Award, ArrowRight } from 'lucide-react';

interface ConferencesPageProps {
  onNavigate: (path: string) => void;
}

export const ConferencesPage: React.FC<ConferencesPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader 
        title="Conferences"
        subtitle="Active engagement in academic conferences as organizer and participant"
        breadcrumb={[{ label: 'Conferences', path: '/conferences' }]}
        bannerImage="/src/assets/images/banner_conferences.jpg"
        onNavigate={onNavigate}
      />

      <div className="container space-y-8 max-w-4xl">
        
        <div className="card-glass p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center">
              <Calendar className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Conferences Overview</h2>
          </div>

          <div className="text-slate-700 dark:text-slate-300 text-base leading-relaxed space-y-4 whitespace-pre-line">
            {conferencesOverviewText}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div 
            onClick={() => onNavigate('/conferences/organised')}
            className="card-glass p-6 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 transition-colors">
                Organised
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Planning and execution of conferences, workshops, and symposiums supported by prominent funding agencies and academic societies.
              </p>
            </div>
            <div className="mt-6 flex items-center text-sm font-semibold text-indigo-600 gap-1 group-hover:gap-2 transition-all">
              View Organised Events <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          <div 
            onClick={() => onNavigate('/conferences/participation')}
            className="card-glass p-6 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 transition-colors">
                Participation
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Delivering invited talks, presenting research papers, and participating in national and international mathematical conferences.
              </p>
            </div>
            <div className="mt-6 flex items-center text-sm font-semibold text-emerald-600 gap-1 group-hover:gap-2 transition-all">
              View Participation Record <ArrowRight className="w-4 h-4" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
