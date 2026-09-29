import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { networkingInstitutions } from '../data/siteData';
import { Globe, ExternalLink } from 'lucide-react';

interface NetworkingInstitutionsPageProps {
  onNavigate: (path: string) => void;
}

export const NetworkingInstitutionsPage: React.FC<NetworkingInstitutionsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader 
        title="Networking Institutions"
        subtitle="Global Partner Universities and Research Institutions"
        breadcrumb={[
          { label: 'Research', path: '/research' },
          { label: 'Networking Institutions', path: '/research/networking-institutions' }
        ]}
        onNavigate={onNavigate}
      />

      <div className="container space-y-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {networkingInstitutions.map((inst, idx) => (
            <div key={idx} className="card-glass p-5 flex flex-col justify-between space-y-4 group">
              
              <div className="space-y-3">
                {inst.image && (
                  <div className="rounded-xl overflow-hidden aspect-[16/9] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <img 
                      src={inst.image} 
                      alt={inst.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}
                
                <span className="badge-academic bg-teal-50 dark:bg-teal-950 text-teal-600 border-teal-200">
                  <Globe className="w-3 h-3" /> {inst.location}
                </span>

                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-teal-600 transition-colors">
                  {inst.name}
                </h3>
              </div>

              <div>
                <a
                  href={inst.homeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-xs font-semibold py-2 justify-center hover:bg-teal-600 hover:text-white dark:hover:bg-teal-600 dark:hover:text-white transition-all"
                >
                  Visit Institutional Portal <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
