import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { GraduationCap, BookOpen } from 'lucide-react';

interface ThesisDissertationsPageProps {
  onNavigate: (path: string) => void;
}

export const ThesisDissertationsPage: React.FC<ThesisDissertationsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader 
        title="Thesis & Dissertations"
        subtitle="Supervision of Master's Thesis & PhD Dissertations in Mathematics"
        breadcrumb={[{ label: 'Thesis & Dissertations', path: '/thesis-dissertations' }]}
        onNavigate={onNavigate}
      />

      <div className="container space-y-8 max-w-4xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="card-glass p-8 space-y-4 border-t-4 border-t-blue-600">
            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Master's Thesis</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Supervision and guidance of MSc Mathematics research scholars on advanced topics in fluid dynamics, heat transfer, and mathematical modeling.
            </p>
          </div>

          <div className="card-glass p-8 space-y-4 border-t-4 border-t-purple-600">
            <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">PhD Dissertations</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Doctoral research mentorship in Boundary Layer Theory, Nanofluids, Magnetohydrodynamics, and Theoretical Physics.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
