import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { publications, publisherDistribution, quartileDistribution } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';

export default function PublicationsModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const years = useMemo(() => {
    const list = Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a);
    return ['all', ...list.map(String)];
  }, []);

  const filtered = useMemo(() => {
    return publications.filter((p) => {
      const matchYear = selectedYear === 'all' || String(p.year) === selectedYear;
      const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase());
      return matchYear && matchSearch;
    });
  }, [selectedYear, search]);

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex flex-col bg-black/85 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Research Publications Archive"
    >
      {/* Top Bar */}
      <div className="gutter flex h-16 shrink-0 items-center justify-between border-b border-white/10 bg-ink-2/90 pt-[env(safe-area-inset-top)]">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-crimson/20 text-xs font-bold text-crimson-2">
            P
          </span>
          <div>
            <h2 className="font-display text-xl tracking-wide text-bone sm:text-2xl">Research Publications Archive</h2>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-smoke">
              73 Publications · 1980+ Citations · 42 Q1 Journals
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close publications"
          data-cursor="close"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-bone hover:bg-white/20"
        >
          ✕
        </button>
      </div>

      {/* Main Content */}
      <div className="gutter flex-1 overflow-y-auto py-8">
        <div className="mx-auto max-w-5xl space-y-8">
          {/* Metrics summary cards */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: 'Total Publications', val: '73', sub: 'Peer-reviewed articles' },
              { label: 'Citations', val: '1980+', sub: 'Google Scholar & Scopus' },
              { label: 'h-index / i-10', val: '22 / 41', sub: 'High impact factor' },
              { label: 'Stanford Rank', val: 'Top 2%', sub: '2024 & 2025 World List' },
            ].map((m) => (
              <div key={m.label} className="rounded-xl bg-ink-2 p-4 ring-1 ring-white/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">{m.label}</p>
                <p className="mt-1 font-display text-3xl text-bone">{m.val}</p>
                <p className="text-xs text-mist">{m.sub}</p>
              </div>
            ))}
          </div>

          {/* Publisher & Quartile breakdown */}
          <div className="grid gap-4 rounded-xl bg-ink-2 p-5 ring-1 ring-white/10 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-2">
                Publisher Distribution
              </p>
              <div className="flex flex-wrap gap-2">
                {publisherDistribution.map((pub) => (
                  <span key={pub.name} className="glass rounded-lg px-2.5 py-1 text-xs text-bone">
                    <span className="font-semibold">{pub.name}: </span>
                    <span className="text-crimson-2">{pub.count}</span>
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-2">
                Journal Quartiles
              </p>
              <div className="flex flex-wrap gap-2">
                {quartileDistribution.map((q) => (
                  <span key={q.name} className="glass rounded-lg px-2.5 py-1 text-xs text-bone">
                    <span className="font-semibold">{q.name}: </span>
                    <span className="text-[#46e3a8]">{q.count}</span> ({q.percentage}%)
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Controls: Search & Year pills */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="rail flex gap-1.5 overflow-x-auto pb-1">
              {years.map((y) => (
                <button
                  key={y}
                  type="button"
                  onClick={() => setSelectedYear(y)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold capitalize transition ${
                    selectedYear === y ? 'bg-bone text-ink' : 'bg-white/5 text-mist hover:bg-white/10 hover:text-bone'
                  }`}
                >
                  {y === 'all' ? 'All Years' : y}
                </button>
              ))}
            </div>

            <div className="w-full sm:w-72">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles by title..."
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-bone placeholder-smoke focus:border-crimson focus:outline-none"
              />
            </div>
          </div>

          {/* Articles List */}
          <div className="space-y-3">
            <p className="text-xs text-smoke">
              Showing {filtered.length} of {publications.length} publications
            </p>

            {filtered.map((pub, idx) => (
              <a
                key={pub.title}
                href={pub.url}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="group flex flex-col justify-between gap-3 rounded-xl bg-ink-2 p-4 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:ring-white/30 sm:flex-row sm:items-center"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-crimson/20 px-2 py-0.5 font-mono text-[11px] font-bold text-crimson-2">
                      {pub.year}
                    </span>
                    <span className="text-[11px] text-smoke">Paper #{filtered.length - idx}</span>
                  </div>
                  <h4 className="mt-2 text-sm font-semibold text-bone transition group-hover:text-white sm:text-[15px]">
                    {pub.title}
                  </h4>
                </div>
                <div className="flex items-center gap-1.5 self-end text-xs font-semibold text-crimson-2 sm:self-center">
                  <span>View Article / DOI</span>
                  <span className="transition group-hover:translate-x-0.5">↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
