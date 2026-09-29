import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; path: string }[];
  onNavigate: (path: string) => void;
  bannerImage?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle, 
  breadcrumb, 
  onNavigate,
  bannerImage 
}) => {
  return (
    <div className="relative py-16 sm:py-24 overflow-hidden bg-slate-950 text-white shadow-xl">
      
      {/* Ambient Mesh Glows */}
      <div className="mesh-blob w-80 h-80 bg-blue-600 top-[-40px] left-[-60px] opacity-30" />
      <div className="mesh-blob w-72 h-72 bg-indigo-600 bottom-[-40px] right-[-40px] opacity-25" />

      {/* Background Banner Image or Gradient */}
      {bannerImage ? (
        <div className="absolute inset-0 z-0">
          <img 
            src={bannerImage} 
            alt={title}
            className="w-full h-full object-cover object-center filter brightness-[0.40] contrast-[1.15] scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/50" />
        </div>
      ) : (
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950">
          <div className="math-bg-pattern absolute inset-0 opacity-25" />
        </div>
      )}

      <div className="container relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-xs font-bold text-blue-200 mb-4 border border-slate-700/60 shadow-inner">
          <button 
            onClick={() => onNavigate('/')} 
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-blue-400" /> Home
          </button>
          
          {breadcrumb && breadcrumb.map((item, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3 h-3 text-blue-400/80" />
              {idx === breadcrumb.length - 1 ? (
                <span className="text-white font-extrabold">{item.label}</span>
              ) : (
                <button 
                  onClick={() => onNavigate(item.path)} 
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Page Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-lg leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-3 text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed font-medium drop-shadow">
            {subtitle}
          </p>
        )}

      </div>
    </div>
  );
};

