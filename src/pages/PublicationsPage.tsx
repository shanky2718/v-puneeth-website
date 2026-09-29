import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { publications } from '../data/siteData';
import { ExternalLink, Search, FileText, Calendar } from 'lucide-react';

interface PublicationsPageProps {
  onNavigate: (path: string) => void;
}

export const PublicationsPage: React.FC<PublicationsPageProps> = ({ onNavigate }) => {
  const [selectedYear, setSelectedYear] = useState<number | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const years = [2025, 2024, 2023, 2022, 2021, 2020, 2018];

  const filteredPublications = publications.filter(pub => {
    const matchesYear = selectedYear === 'All' || pub.year === selectedYear;
    const matchesQuery = searchQuery === '' || pub.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesQuery;
  });

  return (
    <div className="space-y-10 pb-16">
      <PageHeader 
        title="Research Articles"
        subtitle="Organized by publication year across Fluid Dynamics, Boundary Layer Theory, Aerodynamics, and Number Theory."
        breadcrumb={[
          { label: 'Research', path: '/research' },
          { label: 'Publications', path: '/research/publications' }
        ]}
        bannerImage="/src/assets/images/banner_publications.jpg"
        onNavigate={onNavigate}
      />

      <div className="container space-y-8">
        
        {/* Intro Banner */}
        <div className="card-glass p-6 sm:p-8 space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" /> Research Collection
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            Welcome to my collection of research articles, organized by the year they were published. Here you'll find my work across Fluid Dynamics, Boundary Layer Theory, Aerodynamics, and Number Theory — each paper reflecting a step forward in my research journey.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="card-glass p-4 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between gap-4">
          
          {/* Year Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setSelectedYear('All')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedYear === 'All'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              All ({publications.length})
            </button>
            {years.map(year => {
              const count = publications.filter(p => p.year === year).length;
              return (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedYear === year
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {year} ({count})
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search publications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 px-1">
          <span>Showing <strong className="text-slate-800 dark:text-slate-200">{filteredPublications.length}</strong> articles</span>
          {selectedYear !== 'All' && <span>Year filter: <strong>{selectedYear}</strong></span>}
        </div>

        {/* Publications List */}
        <div className="space-y-4">
          {filteredPublications.map((pub, idx) => (
            <div 
              key={idx}
              className="card-glass p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group hover:border-blue-500 transition-all"
            >
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <span className="badge-academic">
                    <Calendar className="w-3 h-3" /> {pub.year}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Article #{idx + 1}</span>
                </div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 transition-colors leading-snug">
                  {pub.title}
                </h3>
              </div>

              <div className="shrink-0">
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs py-2 px-3.5 font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all flex items-center gap-1.5"
                >
                  View Publication <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}

          {filteredPublications.length === 0 && (
            <div className="card-glass p-12 text-center text-slate-500 space-y-3">
              <FileText className="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600" />
              <p className="font-semibold text-base">No matching publications found.</p>
              <button 
                onClick={() => { setSelectedYear('All'); setSearchQuery(''); }}
                className="btn-secondary text-xs"
              >
                Clear Search & Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
