import React from 'react';
import { 
  GraduationCap, 
  FileText, 
  Users, 
  Award, 
  ArrowRight, 
  Mail, 
  Sparkles,
  Microscope,
  MapPin
} from 'lucide-react';
import { siteInfo } from '../data/siteData';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Section */}
      <section className="hero-gradient relative py-14 lg:py-24 overflow-hidden">
        {/* Animated Background Mesh Blobs */}
        <div className="mesh-blob w-96 h-96 bg-blue-500 top-[-50px] left-[-100px]" />
        <div className="mesh-blob w-80 h-80 bg-indigo-500 bottom-[-50px] right-[-50px]" />

        <div className="math-bg-pattern absolute inset-0 opacity-20 pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Hero Text & Intro */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 dark:bg-blue-950/90 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wide border border-blue-200/80 dark:border-blue-800 shadow-sm backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-pulse" /> 
                Department of Mathematics • CHRIST (Deemed to be University)
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-slate-900 dark:text-slate-100">
                {siteInfo.name}
              </h1>

              <p className="text-xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2">
                <span>{siteInfo.title}</span> • <span>{siteInfo.department}</span>
              </p>

              <div className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                <p>
                  {siteInfo.homeBioHeading}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={() => onNavigate('/research/publications')} 
                  className="btn-primary text-sm px-5 py-3"
                >
                  <FileText className="w-4 h-4" /> Explore Publications (60+) <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => onNavigate('/research')} 
                  className="btn-secondary text-sm px-5 py-3"
                >
                  <Microscope className="w-4 h-4" /> Research Overview
                </button>
                <button 
                  onClick={() => onNavigate('/bio-data')} 
                  className="btn-secondary text-sm px-5 py-3"
                >
                  Bio Data & CV
                </button>
              </div>

            </div>


            {/* Right Column: Portrait Card & Banner Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md space-y-4">
                
                {/* Profile Portrait Card with Glow Border */}
                <div className="card-glass p-3 relative overflow-hidden shadow-xl border-t-4 border-t-blue-600">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] max-h-[340px] bg-slate-100 dark:bg-slate-800">
                    <img 
                      src="/src/assets/images/dr-puneeth-hero.jpg" 
                      alt="Dr Puneeth V"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-4">
                      <div className="text-white space-y-0.5">
                        <span className="text-[11px] font-bold text-blue-300 uppercase tracking-wide">Assistant Professor • Mathematics</span>
                        <h3 className="text-xl font-extrabold text-white">Dr Puneeth V</h3>
                        <p className="text-xs text-slate-300 font-medium">CHRIST (Deemed to be University), Bengaluru</p>
                      </div>
                    </div>
                  </div>

                  {/* Institutional Banner Image */}
                  <div className="mt-3 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-900 max-h-[140px] flex items-center justify-center shadow-inner">
                    <img 
                      src="/src/assets/images/christ-university-banner.jpg" 
                      alt="CHRIST University Banner"
                      className="w-full h-full object-contain max-h-[140px]"
                    />
                  </div>

                  {/* Footer Card Info */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                    <span className="flex items-center gap-1.5 font-semibold"><Mail className="w-3.5 h-3.5 text-blue-600" /> {siteInfo.email}</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">Active Faculty</span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full Academic Journey Description with Ambient Glass Cards */}
      <section className="container">
        <div className="card-glass p-8 sm:p-10 space-y-6 shadow-md border-l-4 border-l-blue-600">
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-500 text-white flex items-center justify-center shrink-0 shadow-md">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">Academic & Research Contributions</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Mentorship, Scholarly Publications & Global Research Impact</p>
            </div>
          </div>

          <p className="text-slate-700 dark:text-slate-200 text-base sm:text-lg leading-relaxed">
            {siteInfo.homeBioFull}
          </p>

          {/* Glowing Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
            <div className="p-5 rounded-2xl bg-gradient-to-b from-blue-50 to-white dark:from-slate-800/80 dark:to-slate-900 border border-blue-100 dark:border-slate-700 text-center shadow-sm hover:scale-105 transition-transform">
              <div className="text-4xl font-black text-blue-600 dark:text-blue-400">60+</div>
              <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-1">Research Articles</div>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-b from-indigo-50 to-white dark:from-slate-800/80 dark:to-slate-900 border border-indigo-100 dark:border-slate-700 text-center shadow-sm hover:scale-105 transition-transform">
              <div className="text-4xl font-black text-indigo-600 dark:text-indigo-400">9+</div>
              <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-1">Global Collaborators</div>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-b from-emerald-50 to-white dark:from-slate-800/80 dark:to-slate-900 border border-emerald-100 dark:border-slate-700 text-center shadow-sm hover:scale-105 transition-transform">
              <div className="text-4xl font-black text-emerald-600 dark:text-emerald-400">6+</div>
              <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-1">Partner Institutions</div>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-b from-amber-50 to-white dark:from-slate-800/80 dark:to-slate-900 border border-amber-100 dark:border-slate-700 text-center shadow-sm hover:scale-105 transition-transform">
              <div className="text-4xl font-black text-amber-600 dark:text-amber-400">13+</div>
              <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-1">Lab Scholars & Students</div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Academic Portal Grid */}
      <section className="container space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="badge-academic">Academic Sections</span>
          <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100">Explore Research & Portfolio</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Navigate through published papers, international collaborations, thesis supervision, outreach programs, and student mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div 
            onClick={() => onNavigate('/research/publications')} 
            className="card-glass p-7 cursor-pointer group flex flex-col justify-between border-t-4 border-t-blue-600"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 transition-colors">
                Publications (60+)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Browse over 60 published research articles in reputed international journals across 2018–2025.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 gap-1.5 group-hover:gap-2.5 transition-all">
              View All Publications <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          <div 
            onClick={() => onNavigate('/research/collaborators')} 
            className="card-glass p-7 cursor-pointer group flex flex-col justify-between border-t-4 border-t-amber-500"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-600 transition-colors">
                Global Collaborators
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Prominent research collaborators across Saudi Arabia, South Korea, South Africa, China, Kuwait, and India.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center text-xs font-bold text-amber-600 dark:text-amber-400 gap-1.5 group-hover:gap-2.5 transition-all">
              Meet Collaborators <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          <div 
            onClick={() => onNavigate('/research/projects')} 
            className="card-glass p-7 cursor-pointer group flex flex-col justify-between border-t-4 border-t-emerald-500"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 transition-colors">
                Funded Projects
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Information on SEED Money research project on Newtonian fluid flows with non-linear boundary conditions.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center text-xs font-bold text-emerald-600 dark:text-emerald-400 gap-1.5 group-hover:gap-2.5 transition-all">
              View Funded Projects <ArrowRight className="w-4 h-4" />
            </div>
          </div>

        </div>
      </section>

      {/* Office & Location Banner */}
      <section className="container">
        <div className="card-glass p-8 sm:p-10 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden shadow-2xl">
          <div className="math-bg-pattern absolute inset-0 opacity-15 pointer-events-none" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
                <MapPin className="w-3.5 h-3.5 text-blue-400" /> Department Location & Contact
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">Office Hours: {siteInfo.officeHoursText}</h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                {siteInfo.office}
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <button 
                onClick={() => onNavigate('/office-hours')} 
                className="btn-primary text-sm px-6 py-3.5"
              >
                Office Hours & Map <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};
