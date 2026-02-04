"use client";

import { useState } from "react";

interface QaProposalFormProps {
  idPrefix?: string;
  successMessage?: string;
  successAction?: { label: string; href: string };
}

export default function QaProposalForm({
  idPrefix = "",
  successMessage = "Thank you for your request.",
  successAction,
}: QaProposalFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    companyEmail: "",
    role: "",
    projectNeed: "",
    timeline: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.companyEmail.trim()) {
      newErrors.companyEmail = "Company email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.companyEmail.trim())) {
      newErrors.companyEmail = "Please enter a valid email address";
    }
    if (!formData.role.trim()) newErrors.role = "Role is required";
    if (!formData.projectNeed.trim()) newErrors.projectNeed = "Project need is required";
    if (!formData.timeline.trim()) newErrors.timeline = "Timeline is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || isSubmitting) return;
    setIsSubmitting(true);
    const apiUrl = "/api/qa-proposal";
    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_QA_PROPOSAL_URL;

    // On static deploy (e.g. gitsics.com / GitHub Pages) there is no API route → POST to /api/qa-proposal returns 405.
    // When the Google Script URL is set, post directly to it so the form works without a server.
    const postToScript = (): Promise<Response> => {
      const body = new URLSearchParams({
        name: formData.name,
        company: formData.company,
        companyEmail: formData.companyEmail,
        role: formData.role,
        projectNeed: formData.projectNeed,
        timeline: formData.timeline,
      }).toString();
      return fetch(scriptUrl!, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
    };

    try {
      let res: Response;
      if (scriptUrl) {
        res = await postToScript();
      } else {
        res = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        // Static host: API returns 404/405 and we have no script URL configured
        if ((res.status === 404 || res.status === 405)) {
          setErrors({
            submit:
              "Form is not configured for this host. Please email info@gitsics.com with your request (name, company, company email, role, project need, timeline) in the meantime.",
          });
          return;
        }
      }

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (scriptUrl && res.status === 0) {
          // CORS may block reading response; request was likely received
          setSubmitted(true);
          setFormData({ name: "", company: "", companyEmail: "", role: "", projectNeed: "", timeline: "" });
          return;
        }
        throw new Error((data && data.error) || "Failed to submit");
      }
      setSubmitted(true);
      setFormData({ name: "", company: "", companyEmail: "", role: "", projectNeed: "", timeline: "" });
    } catch (err) {
      const isNetworkError =
        err instanceof TypeError &&
        (err.message === "Failed to fetch" || err.message === "NetworkError when attempting to fetch resource");
      setErrors({
        submit: isNetworkError
          ? "Request could not be sent. Please check your connection or email info@gitsics.com with your details."
          : err instanceof Error
            ? err.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
        <p className="font-semibold">{successMessage}</p>
        {successAction ? (
          <p className="mt-3">
            <a
              href={successAction.href}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {successAction.label}
            </a>
          </p>
        ) : (
          <p className="mt-2">We will get back to you shortly.</p>
        )}
      </div>
    );
  }

  const id = (name: string) => (idPrefix ? `${idPrefix}-${name}` : name);

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      {errors.submit && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-3 text-sm">
          {errors.submit}
        </div>
      )}
      <div>
        <label htmlFor={id("name")} className="block text-sm font-medium text-gray-700 mb-1">
          Name *
        </label>
        <input
          id={id("name")}
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Your name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor={id("company")} className="block text-sm font-medium text-gray-700 mb-1">
          Company *
        </label>
        <input
          id={id("company")}
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Company name"
        />
        {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
      </div>
      <div>
        <label htmlFor={id("companyEmail")} className="block text-sm font-medium text-gray-700 mb-1">
          Company email *
        </label>
        <input
          id={id("companyEmail")}
          name="companyEmail"
          type="email"
          value={formData.companyEmail}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="company@example.com"
        />
        {errors.companyEmail && <p className="mt-1 text-sm text-red-600">{errors.companyEmail}</p>}
      </div>
      <div>
        <label htmlFor={id("role")} className="block text-sm font-medium text-gray-700 mb-1">
          Role *
        </label>
        <input
          id={id("role")}
          name="role"
          type="text"
          value={formData.role}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Your role"
        />
        {errors.role && <p className="mt-1 text-sm text-red-600">{errors.role}</p>}
      </div>
      <div>
        <label htmlFor={id("projectNeed")} className="block text-sm font-medium text-gray-700 mb-1">
          Project need *
        </label>
        <textarea
          id={id("projectNeed")}
          name="projectNeed"
          value={formData.projectNeed}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Brief description of your QA/automation needs"
        />
        {errors.projectNeed && <p className="mt-1 text-sm text-red-600">{errors.projectNeed}</p>}
      </div>
      <div>
        <label htmlFor={id("timeline")} className="block text-sm font-medium text-gray-700 mb-1">
          Timeline *
        </label>
        <input
          id={id("timeline")}
          name="timeline"
          type="text"
          value={formData.timeline}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="e.g. Q2 2025, ASAP, 3 months"
        />
        {errors.timeline && <p className="mt-1 text-sm text-red-600">{errors.timeline}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
      >
        {isSubmitting ? "Sending…" : "Request Consultation"}
      </button>
    </form>
  );
}
