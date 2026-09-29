import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { testimonials } from '../data/siteData';
import { Quote, GraduationCap } from 'lucide-react';
import bannerCollaborators from '../assets/images/banner_collaborators.jpg';

interface TestimonialsPageProps {
  onNavigate: (path: string) => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader 
        title="Testimonials"
        subtitle="Reflections and Feedback from Students, Mentees, and Collaborators"
        breadcrumb={[{ label: 'Testimonials', path: '/testimonials' }]}
        onNavigate={onNavigate}
        bannerImage={bannerCollaborators}
      />


      <div className="container space-y-8 max-w-5xl">
        
        {/* Testimonials Masonry/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="card-glass p-8 flex flex-col justify-between space-y-6 relative border-t-4 border-t-blue-600 group"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-blue-500/30 group-hover:text-blue-500/60 transition-colors" />
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic whitespace-pre-line">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-sky-500 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">{t.author}</h4>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5" /> {t.degree}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
