import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { invitedTalks } from '../data/siteData';
import { MapPin, Mic } from 'lucide-react';

interface OutreachInvitedTalksPageProps {
  onNavigate: (path: string) => void;
}

export const OutreachInvitedTalksPage: React.FC<OutreachInvitedTalksPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader 
        title="Invited Talks"
        subtitle="Workshops, Technical Sessions, and Keynote Addresses"
        breadcrumb={[
          { label: 'Outreach', path: '/outreach' },
          { label: 'Invited Talks', path: '/outreach/invited-talks' }
        ]}
        onNavigate={onNavigate}
      />

      <div className="container space-y-6 max-w-4xl">
        {invitedTalks.map((talk, idx) => (
          <div key={idx} className="card-glass p-6 sm:p-8 space-y-4 border-l-4 border-l-blue-600">
            <div className="flex items-center gap-2">
              <span className="badge-academic bg-blue-50 text-blue-600">
                <Mic className="w-3.5 h-3.5" /> Invited Speaker
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              {talk.title}
            </h3>

            {talk.subtitle && (
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                {talk.subtitle}
              </p>
            )}

            {talk.location && (
              <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{talk.location}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
