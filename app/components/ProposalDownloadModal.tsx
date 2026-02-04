"use client";

import Link from "next/link";

// Public files are copied to the root of the export (out/); with basePath, pages are under
// out/gitsics-website/ but resource/ stays at out/resource/. So we use root-relative path
// so the xlsx works after deploy (GitHub Pages and custom domain).
const PROPOSAL_XLSX_PATH = "/resource/Worksheet_in_GITS-Training_Curriculum_Proposal_v1.xlsx";

interface ProposalDownloadModalProps {
  /** When true, also show a "Request Consultation" button linking to the contact page */
  withRequestConsultationButton?: boolean;
}

export default function ProposalDownloadModal({ withRequestConsultationButton }: ProposalDownloadModalProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href={PROPOSAL_XLSX_PATH}
        download
        className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Download Proposal (xlsx file)
      </a>
      {withRequestConsultationButton && (
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Request Consultation
        </Link>
      )}
    </div>
  );
}
