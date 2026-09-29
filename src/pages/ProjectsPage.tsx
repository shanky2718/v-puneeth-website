import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { projects } from '../data/siteData';
import { Briefcase, Award, Clock } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (path: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader 
        title="Projects"
        subtitle="Funded Research Projects supported through national and international funding agencies"
        breadcrumb={[
          { label: 'Research', path: '/research' },
          { label: 'Projects', path: '/research/projects' }
        ]}
        onNavigate={onNavigate}
      />

      <div className="container space-y-8">
        
        {/* Intro */}
        <div className="card-glass p-6 sm:p-8 space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-emerald-600" /> Funded Research Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            This section highlights the research projects I’m currently involved in, supported through national and international funding agencies. Each project reflects a focused effort to explore complex problems in Fluid Dynamics, Boundary Layer Theory, and related areas. These projects not only advance scientific understanding but also foster collaboration, innovation, and meaningful academic contributions. Stay tuned for updates on progress, findings, and outcomes.
          </p>
        </div>

        {/* Projects Cards */}
        <div className="grid grid-cols-1 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="card-glass p-8 space-y-6 relative overflow-hidden border-l-4 border-l-emerald-500">
              
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                <span className="badge-academic bg-emerald-50 dark:bg-emerald-950 text-emerald-600 border-emerald-200">
                  <Award className="w-3.5 h-3.5" /> {proj.type}
                </span>
                <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md">
                  Grant Code: {proj.code}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 leading-snug">
                  {proj.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900 text-emerald-600 flex items-center justify-center font-bold">
                    ₹
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase">Funding Amount</div>
                    <div className="text-base font-bold text-slate-800 dark:text-slate-200">{proj.funding}</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase">Duration</div>
                    <div className="text-base font-bold text-slate-800 dark:text-slate-200">{proj.duration}</div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
