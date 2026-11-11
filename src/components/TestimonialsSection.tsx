import { useState, useEffect, useMemo, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials as initialTestimonials, type Testimonial } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';

export interface ExtendedTestimonial extends Testimonial {
  id?: string;
  rating?: number;
  date?: string;
  isLive?: boolean;
}

const LOCAL_STORAGE_KEY = 'dr_puneeth_community_testimonials';

export default function TestimonialsSection() {
  const [items, setItems] = useState<ExtendedTestimonial[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge stored entries before initial ones, deduplicating by author + quote
          const existingAuthors = new Set(parsed.map((p) => p.author + p.quote));
          const rest = initialTestimonials.filter((t) => !existingAuthors.has(t.author + t.quote));
          return [...parsed, ...rest];
        }
      }
    } catch {
      // Ignore local storage error
    }
    return initialTestimonials;
  });

  const [formOpen, setFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [degree, setDegree] = useState('');
  const [quote, setQuote] = useState('');
  const [rating, setRating] = useState(5);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'msc' | 'bsc' | 'live'>('all');

  // Sync with API on mount if available
  useEffect(() => {
    fetch('/api/testimonials')
      .then((res) => {
        if (!res.ok) throw new Error('API unavailable');
        return res.json();
      })
      .then((serverItems) => {
        if (Array.isArray(serverItems) && serverItems.length > 0) {
          setItems((prev) => {
            const seen = new Set(prev.map((p) => p.author + p.quote));
            const newFromServer = serverItems.filter((s: ExtendedTestimonial) => !seen.has(s.author + s.quote));
            const merged = [...newFromServer, ...prev];
            try {
              localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(merged));
            } catch {}
            return merged;
          });
        }
      })
      .catch(() => {
        // Fallback silently to client localStorage & built-in testimonials
      });
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !quote.trim()) return;

    setSubmitting(true);
    const newEntry: ExtendedTestimonial = {
      id: Date.now().toString(),
      author: name.trim(),
      degree: degree.trim() || 'Student / Mentee',
      quote: quote.trim(),
      rating,
      date: 'Just now',
      isLive: true,
    };

    // 1. Immediately update UI state
    setItems((prev) => {
      const updated = [newEntry, ...prev];
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      } catch {}
      return updated;
    });

    // 2. Persist to API endpoint
    try {
      await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEntry),
      });
    } catch {
      // Local storage already holds it
    }

    setSubmitting(false);
    setSuccessMsg(true);
    setName('');
    setDegree('');
    setQuote('');
    setRating(5);

    setTimeout(() => {
      setSuccessMsg(false);
      setFormOpen(false);
    }, 2000);
  };

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      if (selectedCategory === 'live') return Boolean(item.isLive);
      if (selectedCategory === 'msc') return item.degree.toLowerCase().includes('msc');
      if (selectedCategory === 'bsc') return item.degree.toLowerCase().includes('bsc') || item.degree.toLowerCase().includes('bachelor');
      return true;
    });
  }, [items, selectedCategory]);

  return (
    <section id="testimonials" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background radial glow */}
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_30%,rgba(229,19,43,0.08),transparent_75%)]" />

      <SectionHeading kicker="Audience Reception" title="Student Voices & Testimonials" />

      <div className="gutter relative z-10">
        {/* Top Header Strip with Action Button */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 rounded-2xl bg-gradient-to-r from-ink-2 via-ink-2 to-ink p-6 sm:p-8 ring-1 ring-white/10">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-400">
                Live Community Feed · {items.length} Student Reflections
              </span>
            </div>
            <h3 className="font-display text-2xl text-bone sm:text-3xl">
              Authentic Reviews from Mentees, Scholars & Alumni
            </h3>
            <p className="text-xs sm:text-sm text-mist leading-relaxed">
              Reflections on Dr. Puneeth V&apos;s learner-centric pedagogy, operations research mentorship, thesis guidance, and approachable classroom environment.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setFormOpen((o) => !o)}
              className="flex items-center gap-2 rounded-xl bg-crimson px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_30px_rgba(229,19,43,0.4)] transition hover:bg-crimson-2 hover:scale-[1.02]"
            >
              <span>✎</span>
              <span>{formOpen ? 'Close Form' : 'Write a Testimonial'}</span>
            </button>
          </div>
        </div>

        {/* Live Submission Form (Collapsible/Animated) */}
        <AnimatePresence>
          {formOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.98 }}
              animate={{ opacity: 1, height: 'auto', scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="mb-12 overflow-hidden"
            >
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-crimson/40 bg-[linear-gradient(180deg,#181014,#0e0b0e)] p-6 sm:p-10 shadow-2xl ring-1 ring-crimson/30"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2">
                      New Student Entry
                    </span>
                    <h4 className="mt-1 font-display text-2xl text-bone">Share Your Experience with Dr. Puneeth V</h4>
                  </div>
                  <span className="text-xs text-smoke">Live instant publish</span>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-mist mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Yashmita Garg, Aarush..."
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-bone placeholder-smoke focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-mist mb-2">
                      Degree / Program / Department *
                    </label>
                    <input
                      type="text"
                      required
                      value={degree}
                      onChange={(e) => setDegree(e.target.value)}
                      placeholder="e.g. MSc Mathematics, BSc CMS, Alumni 2024..."
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-bone placeholder-smoke focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-mist">
                      Your Testimonial / Reflection *
                    </label>
                    <div className="flex items-center gap-1 text-xs">
                      <span className="text-smoke mr-1">Rating:</span>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className={`text-base transition ${star <= rating ? 'text-[#ffb547]' : 'text-white/20'}`}
                        >
                          ★
                        </button>
                      ))}
                    </div>
                  </div>
                  <textarea
                    required
                    rows={4}
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    placeholder="Describe how Dr. Puneeth V's teaching, mentoring, or course impacted your academic journey..."
                    className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-bone placeholder-smoke focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson"
                  />
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <p className="text-xs text-smoke">
                    ✓ Your testimonial will immediately appear on this page and persist.
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setFormOpen(false)}
                      className="rounded-xl px-4 py-2 text-xs font-semibold text-mist hover:text-bone"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="rounded-xl bg-crimson px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-crimson-2 disabled:opacity-50"
                    >
                      {submitting ? 'Publishing...' : 'Publish Testimonial Live →'}
                    </button>
                  </div>
                </div>

                {successMsg && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 rounded-xl bg-emerald-500/20 p-3 text-center text-xs font-bold text-emerald-300 ring-1 ring-emerald-500/40"
                  >
                    🎉 Your testimonial has been posted live and saved!
                  </motion.div>
                )}
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Filter Pills */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: `All Reviews (${items.length})` },
              { id: 'msc', label: 'MSc Mathematics' },
              { id: 'bsc', label: 'BSc / BCA Cohorts' },
              { id: 'live', label: 'Recently Added Live' },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setSelectedCategory(f.id as any)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                  selectedCategory === f.id
                    ? 'bg-bone text-ink shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                    : 'bg-white/5 text-mist hover:bg-white/10 hover:text-bone'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-smoke font-mono">
            Showing {filteredItems.length} of {items.length} records
          </span>
        </div>

        {/* Testimonials Masonry / Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id || item.author + idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 0.6, delay: (idx % 6) * 0.06, ease: EASE }}
              className={`group relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition duration-500 ${
                item.isLive
                  ? 'bg-[linear-gradient(180deg,#1c1218,#120e14)] ring-2 ring-crimson/50 shadow-[0_10px_35px_rgba(229,19,43,0.15)] hover:ring-crimson'
                  : 'bg-ink-2 ring-1 ring-white/10 hover:ring-white/25 hover:-translate-y-1'
              }`}
            >
              <div>
                {/* Top Card Meta */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-crimson/20 text-sm font-bold text-crimson-2 ring-1 ring-crimson/30">
                      {item.author.charAt(0)}
                    </span>
                    <div>
                      <h4 className="font-sans text-sm sm:text-base font-bold text-bone">
                        {item.author}
                      </h4>
                      <p className="text-[11px] text-crimson-2 line-clamp-1">{item.degree}</p>
                    </div>
                  </div>

                  {item.isLive ? (
                    <span className="flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-bold text-emerald-300 ring-1 ring-emerald-500/40">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      LIVE
                    </span>
                  ) : (
                    <span className="text-[10px] text-smoke font-mono">Verified</span>
                  )}
                </div>

                {/* Star Rating */}
                <div className="mb-3 flex items-center gap-0.5 text-xs text-[#ffb547]">
                  {Array.from({ length: item.rating || 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-[13px] leading-relaxed text-bone/85 italic whitespace-pre-line">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Bottom footer stamp */}
              <div className="mt-5 border-t border-white/10 pt-3 flex items-center justify-between text-[10px] text-smoke">
                <span>CHRIST (Deemed to be University)</span>
                <span>{item.date || 'Academic Mentee'}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

