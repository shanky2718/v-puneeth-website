import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Users } from 'lucide-react';

interface ConferencesOrganisedPageProps {
  onNavigate: (path: string) => void;
}

export const ConferencesOrganisedPage: React.FC<ConferencesOrganisedPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader 
        title="Organised Conferences"
        subtitle="Record of Academic Conferences, Workshops, and Symposiums Organised"
        breadcrumb={[
          { label: 'Conferences', path: '/conferences' },
          { label: 'Organised', path: '/conferences/organised' }
        ]}
        onNavigate={onNavigate}
      />

      <div className="container space-y-8 max-w-4xl">
        <div className="card-glass p-8 space-y-4 border-l-4 border-l-indigo-600">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Organised Conferences & Event Leadership</h2>
              <p className="text-xs text-slate-500">Department of Mathematics, CHRIST (Deemed to be University)</p>
            </div>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            Involvement in the planning, coordination, and execution of several national and international conferences, workshops, and faculty development programs (FDPs). These events bring together researchers, educators, and students, creating collaborative platforms for knowledge sharing and academic innovation.
          </p>
        </div>
      </div>
    </div>
  );
};
