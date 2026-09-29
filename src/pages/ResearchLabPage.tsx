import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { labMembers } from '../data/siteData';
import { GraduationCap, Users, BookOpen } from 'lucide-react';

interface ResearchLabPageProps {
  onNavigate: (path: string) => void;
}

export const ResearchLabPage: React.FC<ResearchLabPageProps> = ({ onNavigate }) => {
  const phdScholars = labMembers.filter(m => m.degreeLevel === 'phd');
  const pgStudents = labMembers.filter(m => m.degreeLevel === 'postgraduate');
  const ugStudents = labMembers.filter(m => m.degreeLevel === 'undergraduate');

  return (
    <div className="space-y-10 pb-16">
      <PageHeader 
        title="Research Lab"
        subtitle="Mentorship of Doctoral Scholars, Postgraduate Researchers, and Undergraduate Students"
        breadcrumb={[
          { label: 'Research', path: '/research' },
          { label: 'Research Lab', path: '/research/research-lab' }
        ]}
        onNavigate={onNavigate}
      />

      <div className="container space-y-10 max-w-5xl">
        
        {/* PhD Mathematics */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">PhD Mathematics Scholars</h2>
              <p className="text-xs text-slate-500">Doctoral research candidates supervised by Dr Puneeth V</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {phdScholars.map((scholar, idx) => (
              <div key={idx} className="card-glass p-5 space-y-2 border-l-4 border-l-purple-600">
                <span className="badge-academic bg-purple-50 text-purple-600 text-[10px]">
                  {scholar.period}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{scholar.name}</h3>
                <p className="text-xs text-slate-500">{scholar.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Postgraduate Research Students */}
        <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Postgraduate Research Students</h2>
              <p className="text-xs text-slate-500">Master's thesis & postgraduate project scholars</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {pgStudents.map((scholar, idx) => (
              <div key={idx} className="card-glass p-5 space-y-2 border-l-4 border-l-blue-600">
                <span className="badge-academic bg-blue-50 text-blue-600 text-[10px]">
                  {scholar.period}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{scholar.name}</h3>
                <p className="text-xs text-slate-500">{scholar.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Undergraduate Research Students */}
        <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Undergraduate Research Students</h2>
              <p className="text-xs text-slate-500">BSc / BCA undergraduate research project mentees</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {ugStudents.map((scholar, idx) => (
              <div key={idx} className="card-glass p-5 space-y-2 border-l-4 border-l-emerald-600">
                <span className="badge-academic bg-emerald-50 text-emerald-600 text-[10px]">
                  {scholar.period}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{scholar.name}</h3>
                <p className="text-xs text-slate-500">{scholar.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
