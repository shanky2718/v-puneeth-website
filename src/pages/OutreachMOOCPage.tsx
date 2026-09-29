import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { moocYears } from '../data/siteData';
import { Video, Calendar } from 'lucide-react';

interface OutreachMOOCPageProps {
  onNavigate: (path: string) => void;
}

export const OutreachMOOCPage: React.FC<OutreachMOOCPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader 
        title="Massive Open Online Courses (MOOC)"
        subtitle="Online Learning Modules and Open Educational Resources"
        breadcrumb={[
          { label: 'Outreach', path: '/outreach' },
          { label: 'MOOC', path: '/outreach/mooc' }
        ]}
        onNavigate={onNavigate}
      />

      <div className="container space-y-8 max-w-4xl">
        <div className="card-glass p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 flex items-center justify-center">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">MOOC Offerings Timeline</h2>
              <p className="text-xs text-slate-500">Self-paced learning initiatives and online course development</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
            {moocYears.map((year, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center space-y-2">
                <Calendar className="w-5 h-5 mx-auto text-teal-600" />
                <div className="text-xl font-bold text-slate-900 dark:text-slate-100">{year}</div>
                <span className="badge-academic bg-teal-50 text-teal-600 text-[10px]">
                  Course Module
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
