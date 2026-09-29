import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { siteInfo } from '../data/siteData';
import { Download, FileText } from 'lucide-react';
import bannerResearch from '../assets/images/banner_research.jpg';

interface BioDataPageProps {
  onNavigate: (path: string) => void;
}

export const BioDataPage: React.FC<BioDataPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader 
        title="Bio Data"
        subtitle="Academic Curriculum Vitae and Professional Summary"
        breadcrumb={[{ label: 'Bio Data', path: '/bio-data' }]}
        onNavigate={onNavigate}
        bannerImage={bannerResearch}
      />


      <div className="container space-y-8 max-w-4xl">
        
        {/* Action Buttons for Download */}
        <div className="card-glass p-8 space-y-6">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Curriculum Vitae & Downloads</h2>
              <p className="text-xs text-slate-500">Official CV document and research dashboard resources</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="http://www.google.com/url?q=http%3A%2F%2Fdf&sa=D&sntz=1&usg=AOvVaw3Ek948rAMKskySsvPNZbip"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>

            <a
              href="http://www.google.com/url?q=http%3A%2F%2Fdd&sa=D&sntz=1&usg=AOvVaw06YXRSwcIj4PVR0QjMDvZZ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Download className="w-4 h-4" /> Download Dashboard
            </a>
          </div>

        </div>

        {/* Detailed Academic Bio Card */}
        <div className="card-glass p-8 space-y-6">
          
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-3">
            Academic Profile Summary
          </h3>

          <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl">
              <div>
                <span className="font-semibold text-slate-400 block text-xs uppercase">Full Name</span>
                <span className="font-bold text-slate-900 dark:text-slate-100 text-base">{siteInfo.name}</span>
              </div>
              <div>
                <span className="font-semibold text-slate-400 block text-xs uppercase">Current Designation</span>
                <span className="font-bold text-slate-900 dark:text-slate-100 text-base">{siteInfo.title}</span>
              </div>
              <div>
                <span className="font-semibold text-slate-400 block text-xs uppercase">Department</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">{siteInfo.department}</span>
              </div>
              <div>
                <span className="font-semibold text-slate-400 block text-xs uppercase">University</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">{siteInfo.university}</span>
              </div>
            </div>

            <p>
              Dr Puneeth V is an Assistant Professor with a dedicated focus on research and teaching in Fluid Dynamics, Aerodynamics, Boundary Layer Theory, and Number Theory. Author of over 60 research articles in reputed international journals.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
