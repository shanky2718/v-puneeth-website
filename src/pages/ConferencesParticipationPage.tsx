import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Award } from 'lucide-react';

interface ConferencesParticipationPageProps {
  onNavigate: (path: string) => void;
}

export const ConferencesParticipationPage: React.FC<ConferencesParticipationPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader 
        title="Conference Participation"
        subtitle="National & International Conference Talks, Paper Presentations, and Scholarly Engagement"
        breadcrumb={[
          { label: 'Conferences', path: '/conferences' },
          { label: 'Participation', path: '/conferences/participation' }
        ]}
        onNavigate={onNavigate}
      />

      <div className="container space-y-8 max-w-4xl">
        <div className="card-glass p-8 space-y-4 border-l-4 border-l-emerald-600">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Conference Participation & Presentations</h2>
              <p className="text-xs text-slate-500">Fluid Dynamics, Aerodynamics, Boundary Layer & Applied Mathematics Conferences</p>
            </div>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            Active participation across national and international conferences, delivering technical talks, presenting peer-reviewed research papers, chairing sessions, and engaging in academic discourse with global researchers.
          </p>
        </div>
      </div>
    </div>
  );
};
