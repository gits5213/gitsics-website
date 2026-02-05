"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import CTAButton from "../components/CTAButton";

type TabId = "bcs-jse";

const tabs: { id: TabId; label: string }[] = [
  { id: "bcs-jse", label: "BCS-JSE" },
];

function getTabFromHash(): TabId {
  if (typeof window === "undefined") return "bcs-jse";
  const hash = window.location.hash.slice(1);
  if (hash === "bcs-jse") return "bcs-jse";
  return "bcs-jse";
}

export default function CourseCurriculum() {
  const [activeTab, setActiveTab] = useState<TabId>("bcs-jse");

  useEffect(() => {
    setActiveTab(getTabFromHash());
    const onHashChange = () => setActiveTab(getTabFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Course Curriculum
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Detailed curricula for our training programs
          </p>
        </div>

        {/* Tab navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex flex-wrap gap-1" aria-label="Course curriculum tabs">
            {tabs.map((tab) => (
              <button
                type="button"
                key={tab.id}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-semibold rounded-t-lg transition ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white border-b-2 border-blue-600 -mb-px"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                }`}
                aria-selected={activeTab === tab.id}
                role="tab"
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab panels */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          {activeTab === "bcs-jse" && (
            <div
              id="panel-bcs-jse"
              role="tabpanel"
              aria-labelledby="tab-bcs-jse"
              className="p-8 md:p-12"
            >
              <div id="bcs-jse-download-content" className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Basic Computer Skills + Job Search Essentials
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Beginner Digital Literacy · 6 weeks · 2 sessions/week · 90 min/session (12 sessions total)
                </p>

                <section className="mb-10">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Learning Outcomes
                  </h3>
                  <p className="text-gray-700 mb-4">
                    By the end of this program, learners will be able to:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">1.</span>
                      <span>Use a Windows/Mac computer confidently: mouse/keyboard, settings, Wi‑Fi, printers, and basic troubleshooting (restart, updates, storage).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">2.</span>
                      <span>Create and manage files like a pro: folders, downloads, USB/cloud basics, naming and organizing documents for work and school.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">3.</span>
                      <span>Use <strong>Microsoft Office</strong> for general purpose: Word (resume/letters), Excel (lists, budget, job tracker), PowerPoint (basic slides).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">4.</span>
                      <span>Apply for jobs online end-to-end: create email, search jobs (Indeed, LinkedIn, company sites), complete applications, upload resume, and track submissions.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">5.</span>
                      <span>Install and safely manage software: trusted sources, install/uninstall apps (Zoom, Chrome, Adobe Reader, Office), avoid scams/malware, and security basics.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">6.</span>
                      <span>Use <strong>browser configs</strong>: set up and manage bookmarks, default search, security and privacy settings, and safe browsing for job search and daily use.</span>
                    </li>
                  </ul>
                </section>

                <section className="mb-10">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Who It&apos;s For</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Adults/seniors with limited computer experience</li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Job seekers who need help with resumes, applications, and online portals</li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Immigrants/newcomers needing practical digital skills for daily life in the U.S.</li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Anyone who wants confidence with computers, email, Office, and online services</li>
                  </ul>
                </section>

                <section className="mb-10">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Program Details</h3>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                    <div><dt className="font-medium text-gray-900">Duration</dt><dd>6 weeks</dd></div>
                    <div><dt className="font-medium text-gray-900">Schedule</dt><dd>2 sessions per week, 90 minutes per session (12 sessions total)</dd></div>
                    <div><dt className="font-medium text-gray-900">Program price</dt><dd className="font-semibold text-gray-900">$500</dd></div>
                    <div><dt className="font-medium text-gray-900">Level</dt><dd>Beginner</dd></div>
                  </dl>
                </section>

                <section className="mb-10 print-start-page-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
                    12-Session Curriculum
                  </h3>

                  {[
                    {
                      session: 1,
                      objective: "Get comfortable with the computer: mouse, keyboard, and desktop.",
                      details: [
                        "Identify monitor, keyboard, mouse/trackpad, and tower/laptop.",
                        "Use the mouse: click, double-click, right-click, drag and drop.",
                        "Use the keyboard: letters, numbers, Enter, Backspace, Space, Shift, Tab.",
                        "Turn the computer on and off safely; log in if required.",
                        "Navigate the desktop: icons, taskbar/dock, Start menu/Apple menu.",
                      ],
                      deliverables: [
                        "Successfully turn on the computer and reach the desktop.",
                        "Perform basic mouse and keyboard actions.",
                        "Open and close one program from the desktop or menu.",
                      ],
                      homework: "Practice mouse and keyboard for 15 minutes daily. Write down one question about your computer for next class.",
                    },
                    {
                      session: 2,
                      objective: "Connect to Wi‑Fi, adjust basic settings, and perform simple troubleshooting.",
                      details: [
                        "Find and connect to Wi‑Fi; understand network name and password.",
                        "Open Settings (Windows) or System Preferences (Mac); explore display, sound, and language.",
                        "Browser configs: open the default browser (Chrome, Edge, or Safari); find basic settings (home page, default search engine).",
                        "Check battery/power status and charging.",
                        "Restart the computer and understand when to restart.",
                        "Check for and install updates (overview); understand storage (hard drive space).",
                      ],
                      deliverables: [
                        "Connected to Wi‑Fi and able to open Settings/System Preferences.",
                        "Restarted the computer at least once.",
                        "Know where to check storage and updates.",
                      ],
                      homework: "Restart your computer once. Check how much storage is free. Bring a list of any error messages you see at home.",
                    },
                    {
                      session: 3,
                      objective: "Create folders and save files in an organized way.",
                      details: [
                        "Understand files vs. folders; where files are stored (Documents, Desktop).",
                        "Create a new folder; rename and move folders.",
                        "Save a document (e.g., from Notepad/TextEdit) with a clear name.",
                        "Open, close, and find recently used files.",
                        "Use Search/Spotlight to find a file by name.",
                      ],
                      deliverables: [
                        "Created at least two folders (e.g., “Work” and “School”).",
                        "Saved one new file with a descriptive name.",
                        "Located a file using Search/Spotlight.",
                      ],
                      homework: "Create one more folder and save a simple note inside it. Practice opening that file from the folder.",
                    },
                    {
                      session: 4,
                      objective: "Manage the Downloads folder and use USB drive or cloud basics.",
                      details: [
                        "Find the Downloads folder; open, move, and delete downloaded files.",
                        "Rename files using clear, consistent names (e.g., date or purpose).",
                        "Copy a file to a USB drive; safely eject the USB.",
                        "Introduction to cloud storage (OneDrive, Google Drive, or iCloud): what it is and how it syncs.",
                        "Organize 3–5 sample documents into folders with sensible names.",
                      ],
                      deliverables: [
                        "Cleaned or organized the Downloads folder.",
                        "Renamed at least two files with clear names.",
                        "Copied one file to a USB drive (if available) or understood cloud option.",
                      ],
                      homework: "Organize 5 files at home into folders. Bring a USB drive next time if you have one.",
                    },
                    {
                      session: 5,
                      objective: "Create and format a simple document in Microsoft Word.",
                      details: [
                        "Open Word; create a new document and save it.",
                        "Type and edit text; use Backspace, Delete, and selection.",
                        "Change font, size, bold, italic, underline, and alignment.",
                        "Use bullet points and numbering.",
                        "Insert today’s date and practice spacing (Enter, line spacing).",
                      ],
                      deliverables: [
                        "Created and saved a new Word document.",
                        "Typed at least 3 lines with different formatting (bold, size, or bullets).",
                        "Saved the document in a folder with a clear name.",
                      ],
                      homework: "Type a short paragraph about yourself in Word. Use at least two formatting options. Save it in your Work or School folder.",
                    },
                    {
                      session: 6,
                      objective: "Build a simple resume and a short cover letter in Word.",
                      details: [
                        "Structure of a resume: contact info, summary, experience, education, skills.",
                        "Create a simple resume template in Word; add your information.",
                        "Format section headings and use consistent spacing.",
                        "Write a short cover letter (3–4 sentences): greeting, why you want the job, thank you.",
                        "Save resume and cover letter with professional names (e.g., FirstName_LastName_Resume).",
                      ],
                      deliverables: [
                        "Draft resume with contact info, at least one experience or education section, and skills.",
                        "Short cover letter draft saved in the same folder as the resume.",
                        "Both documents saved with clear, professional file names.",
                      ],
                      homework: "Finish adding all your experience and education to the resume. Bring a job description (from paper or phone) for the next class.",
                    },
                    {
                      session: 7,
                      objective: "Use Excel to create simple lists and a personal budget.",
                      details: [
                        "Open Excel; understand rows, columns, and cells.",
                        "Enter text and numbers; edit and delete cell contents.",
                        "Create a simple list (e.g., groceries or to‑do) with headers.",
                        "Create a simple monthly budget: income and 5–7 expense categories.",
                        "Use Sum to total a column; format currency.",
                      ],
                      deliverables: [
                        "One Excel sheet with a simple list (headers + at least 5 rows).",
                        "One Excel sheet with a basic budget and a total row.",
                        "Saved workbook with a clear name.",
                      ],
                      homework: "Add your real income and estimates for expenses to the budget. Bring the same job description for Session 8.",
                    },
                    {
                      session: 8,
                      objective: "Build a job application tracker in Excel.",
                      details: [
                        "Design columns: Company, Job Title, Date Applied, Link/Where Applied, Status, Notes.",
                        "Enter at least 3 sample or real applications into the tracker.",
                        "Sort by date or status; filter by status (optional).",
                        "Use simple formatting (bold header, borders) to make it readable.",
                        "Save and update the tracker as you apply for jobs.",
                      ],
                      deliverables: [
                        "Job tracker spreadsheet with headers and at least 3 rows.",
                        "Tracker saved in a dedicated folder (e.g., “Job Search”).",
                        "Ability to add a new row and update status.",
                      ],
                      homework: "Add 2 more job applications to the tracker. Keep resume and cover letter updated.",
                    },
                    {
                      session: 9,
                      objective: "Create a simple presentation in PowerPoint.",
                      details: [
                        "Open PowerPoint; choose a theme or template.",
                        "Add a title slide and 2–3 content slides.",
                        "Add bullet points and short sentences (no long paragraphs).",
                        "Insert one image (e.g., from your computer or stock).",
                        "Run a quick slideshow; use Presenter View or full-screen view.",
                      ],
                      deliverables: [
                        "Presentation with title slide and at least 2 content slides.",
                        "One image inserted; slides readable and not overcrowded.",
                        "Slideshow viewed in presentation mode.",
                      ],
                      homework: "Add one more slide (e.g., “Thank you” or “Questions”). Practice presenting it out loud for 1 minute.",
                    },
                    {
                      session: 10,
                      objective: "Create or access email and search for jobs online.",
                      details: [
                        "Create a professional email account (Gmail/Outlook) if needed; sign in and out.",
                        "Compose, send, and reply to an email; add subject and attachment (e.g., resume).",
                        "Browser configs: set up bookmarks for job sites (Indeed, LinkedIn); organize a “Job Search” folder in bookmarks.",
                        "Search for jobs on Indeed: keywords, location, filters.",
                        "Search for jobs on LinkedIn (basic); browse company career pages.",
                        "Safe browsing: recognize secure sites (https), avoid clicking suspicious links in job ads.",
                      ],
                      deliverables: [
                        "Able to sign in to email and send one email with a subject line.",
                        "Performed at least 2 job searches (Indeed and/or LinkedIn/company site).",
                        "List of 3–5 jobs of interest with company name and title.",
                      ],
                      homework: "Apply to one job using your resume and cover letter. Save the job link and date applied in your tracker.",
                    },
                    {
                      session: 11,
                      objective: "Complete a full online job application and track it.",
                      details: [
                        "Walk through a real job application: personal info, work history, education.",
                        "Upload resume and cover letter; paste content when required.",
                        "Review before submitting; confirm submission and save confirmation if available.",
                        "Update the job tracker with application date, status (“Applied”), and notes.",
                        "Write a short follow‑up email template to use 1–2 weeks after applying.",
                      ],
                      deliverables: [
                        "Completed at least one full online application with resume upload.",
                        "Job tracker updated with this application.",
                        "Draft follow‑up email saved in Job Search folder.",
                      ],
                      homework: "Apply to one more job. Send one follow‑up email from last week’s application if appropriate. Update tracker.",
                    },
                    {
                      session: 12,
                      objective: "Install and uninstall apps safely; avoid scams and set security basics.",
                      details: [
                        "Identify trusted sources: official app store (Microsoft Store, Mac App Store) or official websites.",
                        "Download and install one app (e.g., Zoom, Chrome, or Adobe Reader) from a trusted source.",
                        "Browser configs: security and privacy settings (passwords, autofill, cookies); managing or disabling extensions; clearing browsing data when needed.",
                        "Uninstall an app (Settings > Apps / Applications).",
                        "Recognize common scams: fake pop‑ups, “tech support” calls, phishing emails; never share passwords.",
                        "Set a strong password; turn on two‑factor authentication for email (overview).",
                      ],
                      deliverables: [
                        "Successfully installed one app from a trusted source.",
                        "Uninstalled one app (or demonstrated the steps).",
                        "List of 3 “do not do” rules for staying safe online.",
                      ],
                      homework: "Review your email and computer passwords; enable 2FA on email if possible. Keep your resume, tracker, and job search folder updated.",
                    },
                  ].map((s) => (
                    <div key={s.session} className="session-block mb-10 pb-10 border-b border-gray-200 last:border-0 last:pb-0">
                      <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <span className="inline-flex items-center justify-center min-w-[3rem] h-12 px-3 rounded-lg bg-blue-600 text-white text-lg font-bold">Session {s.session}</span>
                      </h4>
                      <h5 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">Class objective</h5>
                      <p className="text-gray-700 mb-4 pl-0 md:pl-12">{s.objective}</p>

                      <h5 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2 mt-4">Class details</h5>
                      <ul className="list-disc pl-6 md:pl-12 space-y-1 text-gray-700 mb-4">
                        {s.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>

                      <h5 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2 mt-4">Deliverables (end of each session)</h5>
                      <ul className="list-disc pl-6 md:pl-12 space-y-1 text-gray-700 mb-4">
                        {s.deliverables.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>

                      <h5 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2 mt-4">Homework / next steps</h5>
                      <p className="text-gray-700 pl-0 md:pl-12">{s.homework}</p>
                    </div>
                  ))}
                </section>

                <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4 flex-wrap no-print">
                  <CTAButton href="/enroll" text="Enroll Now" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50" />
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-lg font-semibold border-2 border-gray-700 text-gray-700 bg-white hover:bg-gray-50 transition"
                    aria-label="Print or save BCS-JSE curriculum as PDF"
                  >
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Print / Save as PDF
                  </button>
                  <a
                    href="https://gitsuniversity.org/practice/examples/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-lg font-semibold border-2 border-gray-700 text-gray-700 bg-white hover:bg-gray-50 transition"
                    aria-label="Open Final Exam practice examples in new tab"
                  >
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Final Exam
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-gray-500 mt-8">
          <Link href="/courses" className="text-blue-600 hover:underline font-medium">
            ← Back to all courses
          </Link>
        </p>
      </div>
    </div>
  );
}
