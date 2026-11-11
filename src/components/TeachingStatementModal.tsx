import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TEACHING_STATEMENT_SECTIONS, coursesData, testimonials, type CourseModule } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';

export default function TeachingStatementModal({
  initialTab = 'statement',
  onClose,
}: {
  initialTab?: 'statement' | 'courses' | 'testimonials';
  onClose: () => void;
}) {
  useScrollLock(true);
  const [activeTab, setActiveTab] = useState<'statement' | 'courses' | 'testimonials'>(initialTab);
  const [activeChapterId, setActiveChapterId] = useState(TEACHING_STATEMENT_SECTIONS[0].id);
  const [selectedCourseId, setSelectedCourseId] = useState<string>('all');
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const currentChapter =
    TEACHING_STATEMENT_SECTIONS.find((s) => s.id === activeChapterId) ?? TEACHING_STATEMENT_SECTIONS[0];
  const currentIndex = TEACHING_STATEMENT_SECTIONS.findIndex((s) => s.id === activeChapterId);

  const goToChapter = (id: string) => {
    setActiveChapterId(id);
    scrollerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex flex-col bg-black/85 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="The Art of Teaching — Complete Teaching Statement"
    >
      {/* Top Header */}
      <div className="gutter flex h-16 shrink-0 items-center justify-between border-b border-white/10 bg-ink-2/90 pt-[env(safe-area-inset-top)]">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-crimson/20 text-xs font-bold text-crimson-2">
            P
          </span>
          <div>
            <h2 className="font-display text-xl tracking-wide text-bone sm:text-2xl">The Art of Teaching</h2>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-smoke">
              Official Unabridged Pedagogical Treatise
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 sm:flex">
            {(['statement', 'courses', 'testimonials'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveTab(tab);
                  scrollerRef.current?.scrollTo({ top: 0 });
                }}
                className={`rounded-md px-3 py-1.5 text-xs font-semibold capitalize transition ${
                  activeTab === tab ? 'bg-bone text-ink' : 'text-mist hover:text-bone'
                }`}
              >
                {tab === 'statement' ? 'Teaching Statement' : tab === 'courses' ? 'Courses & Syllabi' : 'Student Voices'}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close teaching statement"
            data-cursor="close"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-bone hover:bg-white/20"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Sub-nav mobile tabs */}
      <div className="flex border-b border-white/10 bg-ink px-4 py-2 sm:hidden">
        {(['statement', 'courses', 'testimonials'] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-1.5 text-center text-xs font-semibold capitalize ${
              activeTab === tab ? 'border-b-2 border-crimson text-bone' : 'text-mist'
            }`}
          >
            {tab === 'statement' ? 'Statement' : tab === 'courses' ? 'Courses' : 'Testimonials'}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div ref={scrollerRef} className="gutter flex-1 overflow-y-auto py-8">
        <div className="mx-auto max-w-4xl">
          {activeTab === 'statement' && (
            <div>
              {/* Chapter Pill Selector */}
              <div className="rail mb-8 flex gap-2 overflow-x-auto pb-2">
                {TEACHING_STATEMENT_SECTIONS.map((sec) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => goToChapter(sec.id)}
                    className={`shrink-0 rounded-full px-4 py-2 text-left text-xs font-semibold transition ${
                      sec.id === activeChapterId
                        ? 'bg-crimson text-white shadow-[0_0_20px_rgba(229,19,43,0.4)]'
                        : 'bg-white/5 text-mist hover:bg-white/10 hover:text-bone'
                    }`}
                  >
                    <span className="mr-1.5 font-mono opacity-60">{sec.number}.</span>
                    {sec.title}
                  </button>
                ))}
              </div>

              {/* Chapter Card */}
              <article className="rounded-2xl bg-ink-2 p-6 ring-1 ring-white/10 sm:p-10">
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-crimson-2">
                      Chapter {currentChapter.number} of {TEACHING_STATEMENT_SECTIONS.length}
                    </span>
                    <h3 className="mt-1 font-display text-3xl tracking-wide text-bone sm:text-4xl">
                      {currentChapter.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-mist">{currentChapter.subtitle}</p>
                  </div>
                </div>

                {/* Pull Quote */}
                <blockquote className="my-8 rounded-xl border-l-4 border-crimson bg-white/[0.03] p-5 font-serif text-lg italic leading-relaxed text-bone sm:text-xl">
                  “{currentChapter.pullQuote}”
                </blockquote>

                {/* Unabridged Paragraphs */}
                <div className="space-y-4 text-base leading-relaxed text-bone/85 sm:text-[17px]">
                  {currentChapter.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {/* Chapter Navigation Footer */}
                <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                  {currentIndex > 0 ? (
                    <button
                      type="button"
                      onClick={() => goToChapter(TEACHING_STATEMENT_SECTIONS[currentIndex - 1].id)}
                      className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-xs font-semibold text-bone hover:bg-white/10"
                    >
                      ← Previous Chapter
                    </button>
                  ) : <div />}

                  {currentIndex < TEACHING_STATEMENT_SECTIONS.length - 1 ? (
                    <button
                      type="button"
                      onClick={() => goToChapter(TEACHING_STATEMENT_SECTIONS[currentIndex + 1].id)}
                      className="flex items-center gap-2 rounded-lg bg-crimson px-5 py-2 text-xs font-semibold text-white hover:bg-crimson-2"
                    >
                      Next Chapter →
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveTab('courses')}
                      className="flex items-center gap-2 rounded-lg bg-bone px-5 py-2 text-xs font-bold text-ink hover:bg-white"
                    >
                      View Courses Taught →
                    </button>
                  )}
                </div>
              </article>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="space-y-6">
              <div className="mb-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-2">Curriculum Delivery</p>
                    <h3 className="font-display text-3xl tracking-wide text-bone sm:text-4xl">Mathematics Subjects Handled</h3>
                    <p className="mt-1 text-sm text-mist">
                      11 specialized curricula designed and delivered by Dr. Puneeth V with rigorous mathematical theory and scientific computing.
                    </p>
                  </div>
                  <span className="rounded-full bg-crimson/20 px-3 py-1 font-mono text-xs font-bold text-crimson-2 ring-1 ring-crimson/30">
                    11 Subjects
                  </span>
                </div>

                {/* Course Jump Bar */}
                <div className="rail mt-4 flex gap-1.5 overflow-x-auto pb-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCourseId('all')}
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold transition ${
                      selectedCourseId === 'all'
                        ? 'bg-crimson text-white shadow-[0_0_12px_rgba(229,19,43,0.4)]'
                        : 'bg-white/5 text-mist hover:bg-white/10 hover:text-bone'
                    }`}
                  >
                    All 11 Subjects
                  </button>
                  {coursesData.map((c, idx) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedCourseId(c.id)}
                      className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold transition ${
                        selectedCourseId === c.id
                          ? 'bg-crimson text-white shadow-[0_0_12px_rgba(229,19,43,0.4)]'
                          : 'bg-white/5 text-mist hover:bg-white/10 hover:text-bone'
                      }`}
                    >
                      <span className="mr-1 opacity-60 font-mono">{idx + 1}.</span>
                      {c.title}
                    </button>
                  ))}
                </div>
              </div>

              {(selectedCourseId === 'all' ? coursesData : coursesData.filter((c) => c.id === selectedCourseId)).map((c) => (
                <div key={c.id} className="rounded-2xl bg-ink-2 p-6 ring-1 ring-white/10 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/10 pb-4">
                    <div>
                      <span className="rounded bg-crimson/20 px-2 py-0.5 font-mono text-xs font-bold text-crimson-2">
                        {c.code}
                      </span>
                      <h4 className="mt-2 font-display text-2xl tracking-wide text-bone sm:text-3xl">{c.title}</h4>
                      <p className="text-xs text-mist">{c.degreePrograms.join(' · ')}</p>
                    </div>
                    <div className="text-right text-xs text-smoke">
                      <p className="font-semibold text-bone">{c.level}</p>
                      <p>{c.credits} Credits · {c.totalHours} Lecture Hours</p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-bone/85">{c.overview}</p>

                  <div className="mt-6">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">Core Modules</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {c.modules.map((m: CourseModule) => (
                        <div key={m.moduleNumber} className="rounded-xl bg-white/[0.03] p-4 ring-1 ring-white/5">
                          <p className="font-mono text-[11px] font-bold text-crimson-2">
                            Module {m.moduleNumber} ({m.hours} Hours)
                          </p>
                          <p className="mt-1 font-semibold text-bone text-sm">{m.title}</p>
                          <ul className="mt-2 space-y-1 text-xs text-mist">
                            {m.topics.slice(0, 3).map((t: string, idx: number) => (
                              <li key={idx} className="flex gap-1.5">
                                <span className="text-crimson-2">•</span> {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-4 border-t border-white/10 pt-4 text-xs text-mist">
                    <div>
                      <span className="font-semibold text-bone">Key Textbooks: </span>
                      {c.textbooks.join('; ')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div className="space-y-6">
              <div className="mb-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-2">Student Feedback</p>
                <h3 className="font-display text-3xl tracking-wide text-bone sm:text-4xl">Student Testimonials</h3>
                <p className="mt-2 text-sm text-mist">
                  Direct student reflections from BSc, BCA, and MSc Mathematics cohorts at CHRIST University.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {testimonials.map((t, idx) => (
                  <div key={idx} className="flex flex-col justify-between rounded-2xl bg-ink-2 p-6 ring-1 ring-white/10">
                    <p className="font-serif text-sm italic leading-relaxed text-bone/90">
                      “{t.quote}”
                    </p>
                    <div className="mt-6 border-t border-white/10 pt-4">
                      <p className="font-sans font-bold text-bone text-sm">{t.author}</p>
                      <p className="text-xs text-crimson-2">{t.degree}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
