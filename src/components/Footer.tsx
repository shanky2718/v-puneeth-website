import React from 'react';
import { GraduationCap, Mail, MapPin } from 'lucide-react';
import { siteInfo } from '../data/siteData';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer-main">
      <div className="container">
        
        {/* Footer Top Content Grid */}
        <div className="footer-grid pb-8 border-b border-slate-200 dark:border-slate-800">
          
          {/* Brand Info Left Section */}
          <div className="footer-left space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-sm">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{siteInfo.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                  {siteInfo.title}, {siteInfo.department}
                </p>
              </div>
            </div>
            
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              CHRIST (Deemed to be University), Bengaluru. Dedicated to research excellence in Fluid Dynamics, Aerodynamics, Boundary Layer Theory, and Number Theory.
            </p>
            
            <div className="pt-1">
              <a 
                href={`mailto:${siteInfo.email}`} 
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                <Mail className="w-4 h-4" /> {siteInfo.email}
              </a>
            </div>
          </div>

          {/* Address & Office Hours Right Section */}
          <div className="footer-right space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">Office & Campus</h4>
            <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 leading-normal">
              <MapPin className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
              <span>{siteInfo.office}</span>
            </div>
            <div className="text-xs text-slate-500 pt-1">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Office Hours:</span> {siteInfo.officeHoursText}
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 text-center text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Dr Puneeth V. All Rights Reserved. CHRIST (Deemed to be University), Bengaluru.</p>
        </div>

      </div>
    </footer>
  );
};
