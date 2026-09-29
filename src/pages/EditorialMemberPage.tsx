import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { editorialRoles } from '../data/siteData';
import { Award, ExternalLink } from 'lucide-react';

interface EditorialMemberPageProps {
  onNavigate: (path: string) => void;
}

export const EditorialMemberPage: React.FC<EditorialMemberPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader 
        title="Editorial Member"
        subtitle="Journal Editorial Board Appointments and Peer Review Leadership"
        breadcrumb={[
          { label: 'Research', path: '/research' },
          { label: 'Editorial Member', path: '/research/editorial-member' }
        ]}
        onNavigate={onNavigate}
      />

      <div className="container space-y-8 max-w-4xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {editorialRoles.map((role, idx) => (
            <div key={idx} className="card-glass p-8 space-y-6 flex flex-col justify-between border-t-4 border-t-purple-600">
              
              <div className="space-y-3">
                <span className="badge-academic bg-purple-50 dark:bg-purple-950 text-purple-600 border-purple-200">
                  <Award className="w-3.5 h-3.5" /> {role.role}
                </span>

                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {role.journal}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Serving as Assistant Editor for scholarly contributions, peer review workflow, and editorial evaluation in non-linear fluid dynamics and mathematical sciences.
                </p>
              </div>

              <div>
                <a
                  href={role.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-xs py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600"
                >
                  Visit Journal Portal <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
