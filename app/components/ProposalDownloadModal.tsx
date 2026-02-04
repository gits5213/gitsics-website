"use client";

import { useState, useEffect } from "react";
import QaProposalForm from "./QaProposalForm";

// Public files are copied to the root of the export (out/); with basePath, pages are under
// out/gitsics-website/ but resource/ stays at out/resource/. So we use root-relative path
// so the xlsx works after deploy (GitHub Pages and custom domain).
const PROPOSAL_XLSX_PATH = "/resource/Worksheet_in_GITS-Training_Curriculum_Proposal_v1.xlsx";

/** Query param to auto-open the Request a Consultation modal when visiting the QA proposal page */
export const CONSULTATION_OPEN_PARAM = "open=consultation";

/** Path to QA proposal page with consultation form auto-open (use for "Request Consultation" links site-wide) */
export const CONSULTATION_FORM_LINK = "/staffing/qa-proposal?" + CONSULTATION_OPEN_PARAM;

interface ProposalDownloadModalProps {
  /** When true, also show a "Request Consultation" button that opens the same form modal */
  withRequestConsultationButton?: boolean;
}

export default function ProposalDownloadModal({ withRequestConsultationButton }: ProposalDownloadModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("open") === "consultation") {
      setIsOpen(true);
    }
  }, []);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Proposal (xlsx file)
        </button>
        {withRequestConsultationButton && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Request Consultation
          </button>
        )}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="proposal-modal-title"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-xl">
              <h2 id="proposal-modal-title" className="text-xl font-bold text-gray-900">
                Request a Consultation
              </h2>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4 text-sm">
                Please complete the form below to receive the Corporate QA Proposal (xlsx file).
              </p>
              <QaProposalForm
                idPrefix="proposal-modal"
                successMessage="Thank you! Your request has been received."
                successAction={{
                  label: "Download Proposal (xlsx file)",
                  href: PROPOSAL_XLSX_PATH,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
