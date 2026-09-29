import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { interns } from '../data/siteData';
import { Users, Calendar, CheckCircle2 } from 'lucide-react';
import bannerCollaborators from '../assets/images/banner_collaborators.jpg';

interface InternshipPageProps {
  onNavigate: (path: string) => void;
}

export const InternshipPage: React.FC<InternshipPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader 
        title="Interns"
        subtitle="Editorial & Academic Course Development Interns mentored by Dr Puneeth V"
        breadcrumb={[{ label: 'Interns', path: '/internship' }]}
        onNavigate={onNavigate}
        bannerImage={bannerCollaborators}
      />


      <div className="container space-y-8 max-w-4xl">
        
        {/* Intro Banner */}
        <div className="card-glass p-6 sm:p-8 space-y-2">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" /> Research & Editorial Interns
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            Mentoring student interns across academic journal editorial boards and online course development projects.
          </p>
        </div>

        {/* Timeline / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interns.map((intern, idx) => (
            <div key={idx} className="card-glass p-6 space-y-4 flex flex-col justify-between border-l-4 border-l-blue-600">
              
              <div className="space-y-4">
                {intern.image ? (
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <img 
                      src={intern.image} 
                      alt={intern.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center font-black text-xl shadow-md">
                    {intern.name.replace(/^(Mr|Ms|Mrs|Dr|Prof)\.?\s+/i, '').charAt(0).toUpperCase() || 'I'}
                  </div>
                )}


                <div>
                  <span className="badge-academic bg-blue-50 text-blue-600 mb-2">
                    <Calendar className="w-3.5 h-3.5" /> {intern.period}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{intern.name}</h3>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {intern.role}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs text-blue-600 font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Active Internship Record
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
