import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { researchOverviewText } from '../data/siteData';
import { FileText, Briefcase, Users, Globe, Award, Microscope, ArrowRight } from 'lucide-react';

interface ResearchPageProps {
  onNavigate: (path: string) => void;
}

export const ResearchPage: React.FC<ResearchPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-16">
      <PageHeader 
        title="Research Publications"
        subtitle="Boundary Layer Theory, Nanofluid Dynamics, and Stability Analysis of Complex Flows"
        breadcrumb={[{ label: 'Research', path: '/research' }]}
        bannerImage="/src/assets/images/banner_research.jpg"
        onNavigate={onNavigate}
      />

      <div className="container space-y-10">
        
        {/* Research Overview Text Card */}
        <div className="card-glass p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center">
              <Microscope className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Research Overview</h2>
          </div>

          <div className="text-slate-700 dark:text-slate-300 text-base leading-relaxed space-y-4 whitespace-pre-line">
            {researchOverviewText}
          </div>
        </div>

        {/* Subpages Navigation Grid */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Explore Research Sub-Sections</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div onClick={() => onNavigate('/research/publications')} className="card-glass p-6 cursor-pointer group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center mb-3">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold group-hover:text-blue-600 transition-colors">Publications</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                  Curated collection of 60+ research papers organized chronologically by publication year.
                </p>
              </div>
              <div className="mt-4 flex items-center text-sm font-semibold text-blue-600 gap-1 group-hover:gap-2 transition-all">
                Browse Publications <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div onClick={() => onNavigate('/research/projects')} className="card-glass p-6 cursor-pointer group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center mb-3">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold group-hover:text-emerald-600 transition-colors">Funded Projects</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                  Ongoing and completed research projects funded by seed money and national agencies.
                </p>
              </div>
              <div className="mt-4 flex items-center text-sm font-semibold text-emerald-600 gap-1 group-hover:gap-2 transition-all">
                View Projects <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div onClick={() => onNavigate('/research/collaborators')} className="card-glass p-6 cursor-pointer group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold group-hover:text-amber-600 transition-colors">Collaborators</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                  Prominent academic collaborators across international universities and institutes.
                </p>
              </div>
              <div className="mt-4 flex items-center text-sm font-semibold text-amber-600 gap-1 group-hover:gap-2 transition-all">
                Meet Collaborators <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div onClick={() => onNavigate('/research/networking-institutions')} className="card-glass p-6 cursor-pointer group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-600 flex items-center justify-center mb-3">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold group-hover:text-teal-600 transition-colors">Networking Institutions</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                  Key partner universities in Saudi Arabia, South Korea, South Africa, China, and Kuwait.
                </p>
              </div>
              <div className="mt-4 flex items-center text-sm font-semibold text-teal-600 gap-1 group-hover:gap-2 transition-all">
                View Institutions <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div onClick={() => onNavigate('/research/editorial-member')} className="card-glass p-6 cursor-pointer group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-600 flex items-center justify-center mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold group-hover:text-purple-600 transition-colors">Editorial Board Member</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                  Assistant Editor roles for CU Journal of Non-Linear Fluid Mechanics & Mapana Journal of Sciences.
                </p>
              </div>
              <div className="mt-4 flex items-center text-sm font-semibold text-purple-600 gap-1 group-hover:gap-2 transition-all">
                View Editorial Roles <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div onClick={() => onNavigate('/research/research-lab')} className="card-glass p-6 cursor-pointer group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-rose-100 dark:bg-rose-950 text-rose-600 flex items-center justify-center mb-3">
                  <Microscope className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold group-hover:text-rose-600 transition-colors">Research Lab</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                  PhD scholars, Postgraduate research students, and Undergraduate researchers.
                </p>
              </div>
              <div className="mt-4 flex items-center text-sm font-semibold text-rose-600 gap-1 group-hover:gap-2 transition-all">
                Explore Lab Members <ArrowRight className="w-4 h-4" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
