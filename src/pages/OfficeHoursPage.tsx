import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { siteInfo } from '../data/siteData';
import { Clock, MapPin, Mail, ExternalLink, Send } from 'lucide-react';

interface OfficeHoursPageProps {
  onNavigate: (path: string) => void;
}

export const OfficeHoursPage: React.FC<OfficeHoursPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader 
        title="Office Hours"
        subtitle="Schedule appointments, consultation timings, and office location"
        breadcrumb={[{ label: 'Office Hours', path: '/office-hours' }]}
        onNavigate={onNavigate}
      />

      <div className="container space-y-8 max-w-5xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Consultation Info Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="card-glass p-6 space-y-5 border-l-4 border-l-blue-600">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">Consultation Timings</h2>
                  <p className="text-xs text-slate-500">Regular Faculty Office Hours</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-center">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">Daily Timing</span>
                <span className="text-xl font-black text-slate-900 dark:text-slate-100 mt-1 block">{siteInfo.officeHoursText}</span>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">Office Location</h3>
                <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{siteInfo.office}</span>
                </div>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">Direct Contact</h3>
                <a 
                  href={`mailto:${siteInfo.email}`} 
                  className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <Mail className="w-4 h-4" /> {siteInfo.email}
                </a>
              </div>

            </div>

            {/* Google Form Instructions Card */}
            <div className="card-glass p-6 space-y-3">
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Send className="w-4 h-4 text-blue-600" /> Appointment Contact Form
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Students and researchers are requested to confirm appointment slots prior to visiting during office hours.
              </p>
              <a
                href="https://support.google.com/sites/answer/90569?hl=en-GB"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-xs py-2 justify-center"
              >
                Google Form Embed Guide <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Map Location Card */}
          <div className="lg:col-span-7">
            <div className="card-glass p-4 space-y-3">
              <div className="flex items-center justify-between px-2">
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600" /> CHRIST Central Campus Location
                </h3>
                <span className="text-xs text-slate-500 font-mono">Bengaluru 560029</span>
              </div>

              <div className="w-full h-[360px] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
                <iframe 
                  title="CHRIST University Map Location"
                  src="https://maps-api-ssl.google.com/maps?hl=en-US&ll=12.932166,77.606131&output=embed&q=12.932677,77.60654&z=17"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <p className="text-xs text-slate-500 text-center pt-1">
                Centre for Mathematical Needs, Ground floor, Block 2, CHRIST (Deemed to be University)
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
