import { useState, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE } from './fx';

interface LORRequestEntry {
  id: string;
  fullName: string;
  registerNumber: string;
  degree: string;
  yearPassing: string;
  relationship: string;
  coursesTaken: string;
  targetUniversities: string;
  earliestDeadline: string;
  dossierLink: string;
  notes: string;
  submittedAt: string;
}

const LOCAL_STORAGE_LOR_KEY = 'dr_puneeth_lor_requests';

export default function LORModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  const [activeTab, setActiveTab] = useState<'guidelines' | 'request' | 'preview'>('guidelines');

  // Form State
  const [fullName, setFullName] = useState('');
  const [registerNumber, setRegisterNumber] = useState('');
  const [degree, setDegree] = useState('');
  const [yearPassing, setYearPassing] = useState('');
  const [relationship, setRelationship] = useState('Coursework Student');
  const [coursesTaken, setCoursesTaken] = useState('');
  const [targetUniversities, setTargetUniversities] = useState('');
  const [earliestDeadline, setEarliestDeadline] = useState('');
  const [dossierLink, setDossierLink] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState('');

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !registerNumber.trim()) return;

    const newRequest: LORRequestEntry = {
      id: Date.now().toString(),
      fullName: fullName.trim(),
      registerNumber: registerNumber.trim(),
      degree: degree.trim(),
      yearPassing: yearPassing.trim(),
      relationship,
      coursesTaken: coursesTaken.trim(),
      targetUniversities: targetUniversities.trim(),
      earliestDeadline,
      dossierLink: dossierLink.trim(),
      notes: notes.trim(),
      submittedAt: new Date().toISOString(),
    };

    // Store locally
    try {
      const existing = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LOR_KEY) || '[]');
      localStorage.setItem(LOCAL_STORAGE_LOR_KEY, JSON.stringify([newRequest, ...existing]));
    } catch {}

    // Construct Mailto Link
    const subject = encodeURIComponent(`LOR Request: ${newRequest.fullName} (${newRequest.registerNumber}) - ${newRequest.degree}`);
    const body = encodeURIComponent(
      `Dear Dr. Puneeth V,\n\n` +
      `I hope this email finds you well.\n\n` +
      `I am writing to formally request a Letter of Recommendation (LOR) for my applications to graduate programs.\n\n` +
      `--- APPLICANT DETAILS ---\n` +
      `Full Name: ${newRequest.fullName}\n` +
      `Register / Roll Number: ${newRequest.registerNumber}\n` +
      `Degree / Program: ${newRequest.degree} (Passing Year: ${newRequest.yearPassing})\n` +
      `Academic Interaction: ${newRequest.relationship}\n` +
      `Courses Handled by Dr. Puneeth V: ${newRequest.coursesTaken}\n\n` +
      `--- APPLICATION DETAILS ---\n` +
      `Target Universities & Programs: ${newRequest.targetUniversities}\n` +
      `Earliest Application Deadline: ${newRequest.earliestDeadline}\n` +
      `Dossier Link (CV, Transcripts, SOP): ${newRequest.dossierLink || 'Attached to this email'}\n\n` +
      `Additional Notes / Highlights:\n${newRequest.notes}\n\n` +
      `Thank you very much for your time, guidance, and ongoing mentorship.\n\n` +
      `Warm regards,\n${newRequest.fullName}\n${newRequest.registerNumber}`
    );

    const generatedMailto = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setMailtoUrl(generatedMailto);
    setSubmitted(true);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[150] flex flex-col bg-black/90 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Official Letter of Recommendation (LOR) Portal"
    >
      {/* Top Header */}
      <div className="gutter flex h-16 shrink-0 items-center justify-between border-b border-white/10 bg-ink-2/95 pt-[env(safe-area-inset-top)]">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-crimson/20 text-xs font-bold text-crimson-2 ring-1 ring-crimson/40">
            LOR
          </span>
          <div>
            <h2 className="font-display text-lg tracking-wide text-bone sm:text-2xl">
              Letter of Recommendation (LOR) Portal
            </h2>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-smoke">
              Official Recommendation Policy & Application Dossier
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Tab Selector Desktop */}
          <div className="hidden sm:flex items-center gap-1 rounded-lg bg-white/5 p-1">
            {[
              { id: 'guidelines', label: 'Policy & Criteria' },
              { id: 'request', label: 'Submit Request Form' },
              { id: 'preview', label: 'Official Format Preview' },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id as any)}
                className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
                  activeTab === t.id ? 'bg-bone text-ink shadow-sm' : 'text-mist hover:text-bone'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close LOR modal"
            data-cursor="close"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-bone hover:bg-white/20 transition"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Mobile Tab Bar */}
      <div className="flex sm:hidden border-b border-white/10 bg-ink-2 px-3 py-2 gap-1">
        {[
          { id: 'guidelines', label: 'Policy' },
          { id: 'request', label: 'Request Form' },
          { id: 'preview', label: 'Format' },
        ].map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActiveTab(t.id as any)}
            className={`flex-1 rounded py-1.5 text-center text-xs font-semibold ${
              activeTab === t.id ? 'bg-bone text-ink' : 'text-mist'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Content Scroller */}
      <div data-lenis-prevent className="flex-1 overflow-y-auto p-4 sm:p-8">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Professor Identity Header Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-ink-2 via-[#150f14] to-ink-2 p-6 sm:p-8 ring-1 ring-white/15">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Professor Photo */}
              <div className="relative shrink-0">
                <div className="relative h-28 w-28 sm:h-36 sm:w-36 overflow-hidden rounded-2xl ring-2 ring-crimson/40 shadow-2xl bg-black">
                  <img
                    src="/assets/portrait-720.webp"
                    alt="Dr. Puneeth V"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <span className="absolute -bottom-2 -right-2 rounded-full bg-crimson px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-lg">
                  CHRIST
                </span>
              </div>

              {/* Designation & Recommender Meta */}
              <div className="flex-1 text-center sm:text-left space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-crimson/15 px-3 py-1 ring-1 ring-crimson/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-crimson-2 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-crimson-2">
                    Official Academic Referee & Recommender
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-bone">
                  {profile.fullName}
                </h3>
                
                {/* Official Designated Roles from Handwritten Notes */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
                  <span className="rounded-lg bg-white/10 px-2.5 py-1 text-xs font-semibold text-bone">
                    Assistant Professor · Department of Mathematics
                  </span>
                  <span className="rounded-lg bg-crimson/20 px-2.5 py-1 text-xs font-bold text-crimson-2 ring-1 ring-crimson/40">
                    Executive Editor, CU Journal of NLFM (CU JONLFM)
                  </span>
                  <span className="rounded-lg bg-[#4cc9ff]/15 px-2.5 py-1 text-xs font-semibold text-[#4cc9ff] ring-1 ring-[#4cc9ff]/30">
                    IQAC Coordinator
                  </span>
                  <span className="rounded-lg bg-[#ffb547]/15 px-2.5 py-1 text-xs font-semibold text-[#ffb547] ring-1 ring-[#ffb547]/30">
                    Industry-Academia Ambassador
                  </span>
                </div>

                <p className="text-xs text-mist pt-1">
                  {profile.affiliation} · Bengaluru 560029, Karnataka, India
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-smoke">
                  <span>✉ {profile.email}</span>
                  <span>·</span>
                  <span>☎ {profile.phone}</span>
                  <span>·</span>
                  <span className="text-emerald-400 font-medium">Stanford Top 2% Global Scientist</span>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 1: GUIDELINES & POLICY */}
          {activeTab === 'guidelines' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="space-y-6"
            >
              <div className="rounded-2xl bg-ink-2 p-6 sm:p-8 ring-1 ring-white/10 space-y-6">
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-2">
                    Section 01 · Prerequisites
                  </span>
                  <h4 className="font-display text-2xl text-bone mt-1">
                    Letter of Recommendation (LOR) Policy & Eligibility
                  </h4>
                  <p className="mt-2 text-sm text-mist leading-relaxed">
                    A Letter of Recommendation represents an official academic appraisal and institutional commitment. Dr. Puneeth V writes detailed, highly personalized letters for students and research interns who demonstrate strong conceptual aptitude, dedication, and high academic integrity.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-white/[0.03] p-5 ring-1 ring-white/5 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-300">
                        1
                      </span>
                      <h5 className="font-bold text-bone text-sm">Academic Association</h5>
                    </div>
                    <p className="text-xs text-mist leading-relaxed">
                      You must have taken at least one undergraduate or postgraduate mathematics/computing course handled by Dr. Puneeth V, or worked under his direct supervision on an academic project, thesis, or department committee.
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] p-5 ring-1 ring-white/5 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-300">
                        2
                      </span>
                      <h5 className="font-bold text-bone text-sm">Advance Notice Timeline</h5>
                    </div>
                    <p className="text-xs text-mist leading-relaxed">
                      Submit your request at least <strong>3 to 4 weeks</strong> prior to your earliest application deadline. Due to high volumes of referee requests, urgent or last-minute submissions cannot be accommodated.
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] p-5 ring-1 ring-white/5 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-300">
                        3
                      </span>
                      <h5 className="font-bold text-bone text-sm">Required Application Dossier</h5>
                    </div>
                    <p className="text-xs text-mist leading-relaxed">
                      Prepare your updated Curriculum Vitae (CV), unofficial grade transcript, draft Statement of Purpose (SOP), and a categorized list of target universities with exact program names and portal deadlines.
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] p-5 ring-1 ring-white/5 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-300">
                        4
                      </span>
                      <h5 className="font-bold text-bone text-sm">Confidentiality & FERPA Waiver</h5>
                    </div>
                    <p className="text-xs text-mist leading-relaxed">
                      As standard academic practice across international institutions, students are strongly expected to waive their right to review recommendations to uphold referee independence and evaluation weight.
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-smoke">
                    Ready to prepare your submission? Proceed to the online request form.
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveTab('request')}
                    className="rounded-xl bg-crimson px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-crimson-2 hover:scale-[1.02]"
                  >
                    Proceed to Request Form →
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: REQUEST FORM */}
          {activeTab === 'request' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-ink-2 p-6 sm:p-8 ring-1 ring-white/10 space-y-6"
              >
                <div className="border-b border-white/10 pb-4">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-2">
                    Official Student Application
                  </span>
                  <h4 className="font-display text-2xl text-bone mt-1">
                    Formal Recommendation Request Form
                  </h4>
                  <p className="text-xs text-mist mt-1">
                    Fill in your academic details. Submitting will record your request and generate a structured formal email to Dr. Puneeth V.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-mist mb-2">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Shashank MV, Yashmita Garg..."
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-bone placeholder-smoke focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-mist mb-2">
                      Register / Roll Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={registerNumber}
                      onChange={(e) => setRegisterNumber(e.target.value)}
                      placeholder="e.g. 2140123 / CHRIST Reg No"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-bone placeholder-smoke focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-mist mb-2">
                      Degree / Program *
                    </label>
                    <input
                      type="text"
                      required
                      value={degree}
                      onChange={(e) => setDegree(e.target.value)}
                      placeholder="e.g. BSc CMS, MSc Mathematics, BCA..."
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-bone placeholder-smoke focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-mist mb-2">
                      Year of Graduation / Passing *
                    </label>
                    <input
                      type="text"
                      required
                      value={yearPassing}
                      onChange={(e) => setYearPassing(e.target.value)}
                      placeholder="e.g. 2024, 2025, 2026..."
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-bone placeholder-smoke focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-mist mb-2">
                      Interaction / Association Type *
                    </label>
                    <select
                      value={relationship}
                      onChange={(e) => setRelationship(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-bone focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson"
                    >
                      <option value="Coursework Student" className="bg-ink text-bone">Classroom Student (Coursework)</option>
                      <option value="Research Intern / Lab" className="bg-ink text-bone">Research Intern / Lab Assistant</option>
                      <option value="Thesis / Project Mentee" className="bg-ink text-bone">Thesis / Dissertation Mentee</option>
                      <option value="Department Fest / Committee" className="bg-ink text-bone">Department Fest / Committee Collaborator</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-mist mb-2">
                      Earliest Application Deadline *
                    </label>
                    <input
                      type="date"
                      required
                      value={earliestDeadline}
                      onChange={(e) => setEarliestDeadline(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-bone focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-mist mb-2">
                    Course(s) Taken under Dr. Puneeth V & Grade(s) *
                  </label>
                  <input
                    type="text"
                    required
                    value={coursesTaken}
                    onChange={(e) => setCoursesTaken(e.target.value)}
                    placeholder="e.g. Differential Equations (Grade O/A+), Number Theory, Linear Algebra, Scientific Python..."
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-bone placeholder-smoke focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-mist mb-2">
                    Target Universities & Programs *
                  </label>
                  <input
                    type="text"
                    required
                    value={targetUniversities}
                    onChange={(e) => setTargetUniversities(e.target.value)}
                    placeholder="e.g. MS in Data Science (CMU, NYU, Imperial College London, NUS)..."
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-bone placeholder-smoke focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-mist mb-2">
                    Dossier Link (Google Drive / OneDrive / Dropbox)
                  </label>
                  <input
                    type="url"
                    value={dossierLink}
                    onChange={(e) => setDossierLink(e.target.value)}
                    placeholder="https://drive.google.com/... (link containing CV, transcripts, draft SOP)"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-bone placeholder-smoke focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-mist mb-2">
                    Specific Achievements, Projects or Personal Statement
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Mention specific projects, classroom presentations, or achievements you worked on with Dr. Puneeth V..."
                    className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-bone placeholder-smoke focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <p className="text-xs text-smoke">
                    ✓ All submissions generate an official timestamp and structured referral summary.
                  </p>

                  <button
                    type="submit"
                    className="rounded-xl bg-crimson px-7 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-crimson-2 hover:scale-[1.02]"
                  >
                    Submit & Generate Email Request →
                  </button>
                </div>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl bg-emerald-500/20 p-5 ring-1 ring-emerald-500/40 space-y-3"
                  >
                    <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                      <span>✓</span>
                      <span>Your LOR Request has been compiled and saved!</span>
                    </div>
                    <p className="text-xs text-bone/85 leading-relaxed">
                      To complete your formal submission, send the pre-formatted request directly to Dr. Puneeth V&apos;s official CHRIST University inbox:
                    </p>
                    <div className="pt-2">
                      <a
                        href={mailtoUrl}
                        className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-emerald-400"
                      >
                        ✉ Launch Email to puneeth.v@christuniversity.in →
                      </a>
                    </div>
                  </motion.div>
                )}
              </form>
            </motion.div>
          )}

          {/* TAB 3: OFFICIAL FORMAT PREVIEW */}
          {activeTab === 'preview' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="space-y-6"
            >
              {/* Formal Letterhead Simulation */}
              <div className="rounded-2xl bg-[#ffffff] p-8 sm:p-12 text-[#1a1a1a] shadow-2xl space-y-6 font-serif">
                {/* Institutional Letterhead Header */}
                <div className="flex flex-wrap items-center justify-between border-b-2 border-[#800000] pb-4 gap-4 font-sans">
                  <div className="space-y-0.5">
                    <h5 className="text-lg sm:text-xl font-bold tracking-tight text-[#800000]">
                      CHRIST (Deemed to be University)
                    </h5>
                    <p className="text-xs font-semibold text-gray-700 uppercase tracking-widest">
                      Department of Mathematics · School of Sciences
                    </p>
                    <p className="text-[11px] text-gray-600">
                      Hosur Road, Bengaluru – 560029, Karnataka, India
                    </p>
                  </div>
                  <div className="text-right text-[11px] text-gray-600 space-y-0.5 font-sans">
                    <p className="font-semibold text-gray-800">Ref: CU/MATH/REC/2026</p>
                    <p>Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                  </div>
                </div>

                {/* Salutation */}
                <div className="pt-2">
                  <p className="font-bold text-sm">To the Graduate Admissions Committee,</p>
                  <p className="font-semibold text-xs text-gray-700 mt-1">RE: CONFIDENTIAL LETTER OF ACADEMIC & RESEARCH RECOMMENDATION</p>
                </div>

                {/* Sample Body Paragraphs */}
                <div className="space-y-4 text-xs sm:text-[13px] leading-relaxed text-gray-800 text-justify">
                  <p>
                    It is with high professional pleasure that I write this recommendation in support of the applicant. I serve as an <strong>Assistant Professor in the Department of Mathematics</strong>, <strong>Executive Editor of the CU Journal of Non-Linear Fluid Mechanics</strong>, <strong>IQAC Coordinator</strong>, and <strong>Industry-Academia Ambassador</strong> at CHRIST (Deemed to be University), Bengaluru.
                  </p>
                  <p>
                    Throughout their degree coursework under my instruction, the applicant has consistently demonstrated exceptional mathematical maturity, conceptual tenacity, and a genuine instinct for rigorous analytical problem formulation. They engage deeply with advanced topics spanning differential equations, numerical algorithms, and data-driven computational methodologies.
                  </p>
                  <p>
                    Beyond academic prowess, the candidate displays high intellectual discipline, collaborative integrity, and clear motivation for graduate-level research. I am confident they will emerge as a distinctive scholar in your institution&apos;s academic ecosystem.
                  </p>
                </div>

                {/* Sign-off with Signatory Block */}
                <div className="border-t border-gray-200 pt-6 font-sans">
                  <p className="text-xs font-semibold text-gray-800">Sincerely and respectfully,</p>
                  <div className="mt-4 flex items-center gap-4">
                    <img
                      src="/assets/portrait-720.webp"
                      alt="Dr. Puneeth V"
                      className="h-16 w-16 rounded-full object-cover ring-2 ring-[#800000]"
                    />
                    <div>
                      <p className="font-bold text-sm text-[#800000]">{profile.fullName}, M.Sc., Ph.D.</p>
                      <p className="text-xs text-gray-700">Assistant Professor · Department of Mathematics</p>
                      <p className="text-xs text-gray-700">Executive Editor, CU Journal of Non-Linear Fluid Mechanics (CU JONLFM)</p>
                      <p className="text-xs text-gray-700">IQAC Coordinator · Industry-Academia Ambassador</p>
                      <p className="text-[11px] text-gray-600">CHRIST (Deemed to be University), Bengaluru, India</p>
                      <p className="text-[11px] text-[#800000] font-mono mt-0.5">{profile.email} · {profile.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
