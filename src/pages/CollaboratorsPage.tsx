import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { collaborators } from '../data/siteData';
import { Users } from 'lucide-react';

interface CollaboratorsPageProps {
  onNavigate: (path: string) => void;
}

export const CollaboratorsPage: React.FC<CollaboratorsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader 
        title="Collaborators"
        subtitle="Prominent Academic & Research Collaborators Worldwide"
        breadcrumb={[
          { label: 'Research', path: '/research' },
          { label: 'Collaborators', path: '/research/collaborators' }
        ]}
        bannerImage="/assets/images/banner_collaborators.jpg"
        onNavigate={onNavigate}
      />

      <div className="container space-y-8">
        
        {/* Intro */}
        <div className="card-glass p-6 sm:p-8 space-y-2">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Users className="w-5 h-5 text-amber-600" /> Prominent Collaborators
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            Distinguished professors and researchers partnering across fluid mechanics, heat transfer, numerical analysis, fractional differential equations, and theoretical modeling.
          </p>
        </div>

        {/* Collaborators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collaborators.map((collab, idx) => (
            <div key={idx} className="card-glass p-6 flex flex-col justify-between space-y-4 group">
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  {collab.image ? (
                    <div className="w-20 h-24 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0 border border-slate-200 dark:border-slate-700 shadow-sm">
                      <img 
                        src={collab.image} 
                        alt={collab.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-24 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center font-bold text-2xl shrink-0">
                      {collab.name.charAt(5) || 'C'}
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug group-hover:text-amber-600 transition-colors">
                      {collab.name}
                    </h3>
                    <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold mt-1">
                      {collab.country}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-3">
                  <p className="font-medium">
                    {collab.department}, <span className="font-semibold text-slate-800 dark:text-slate-200">{collab.institution}</span>{collab.location ? `, ${collab.location}` : ''}
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-lg border border-slate-100 dark:border-slate-800 text-xs">
                <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Research Specialization:</span>
                <span className="text-slate-600 dark:text-slate-400">{collab.specialization}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
