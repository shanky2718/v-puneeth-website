import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { expertSessions } from '../data/siteData';
import { Users } from 'lucide-react';

interface OutreachExpertSessionsPageProps {
  onNavigate: (path: string) => void;
}

export const OutreachExpertSessionsPage: React.FC<OutreachExpertSessionsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader 
        title="Expert Sessions"
        subtitle="Faculty Development Programs (FDP), Educational Leadership, and Pedagogical Workshops"
        breadcrumb={[
          { label: 'Outreach', path: '/outreach' },
          { label: 'Expert Sessions', path: '/outreach/expert-sessions' }
        ]}
        onNavigate={onNavigate}
      />

      <div className="container space-y-8 max-w-4xl">
        {expertSessions.map((session, idx) => (
          <div key={idx} className="card-glass p-8 space-y-4 border-l-4 border-l-indigo-600">
            <div className="flex items-center gap-2">
              <span className="badge-academic bg-indigo-50 text-indigo-600">
                <Users className="w-3.5 h-3.5" /> Faculty Development Session
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              {session.title}
            </h3>

            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              {session.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
