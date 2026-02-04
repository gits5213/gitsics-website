import ProposalDownloadModal from "../../components/ProposalDownloadModal";

const servicesIncluded = [
  "HTML",
  "CSS",
  "UNIX/Linux command",
  "Source Code Management (GIT command + integration with GitHub, ADO, AWS, GitLab, Bitbucket, Subversion)",
  "Backend Testing (SQL)",
  "Automation UI Framework (Playwright, Cypress, Selenium, AccelQ, Tosca, or any other tools)",
  "Automation API Framework (Playwright, Cypress, Selenium, AccelQ, Tosca, or any other tools)",
  "API Manual Testing (Postman) + Automation (Newman integration)",
  "Mobile Automation Framework (Appium — iOS & Android)",
  "Performance Testing tools (JMeter, Lighthouse)",
  "Accessibility (508) Compliance — Automation + Manual Test",
  "DevOps (CI/CD) integration with GitHub Actions",
];

const engagementModels = [
  { model: "Contract", duration: "12 weeks", desc: "Project-based staffing for defined timelines" },
  { model: "Contract-to-Hire", duration: "Flexible", desc: "Evaluate before permanent hire" },
  { model: "Consulting", duration: "Project-based", desc: "Expert guidance and implementation" },
];

const deliverables = [
  "Assessment report & recommendations",
  "Test automation roadmap",
  "UI automation framework skeleton (Playwright/Cypress/Selenium/AccelQ/Tosca or agreed tool) + best practices",
  "API automation framework + Postman collections & Newman integration",
  "Mobile automation framework (Appium) for iOS & Android",
  "Source control setup: GIT workflow + integration (GitHub, ADO, GitLab, Bitbucket, Subversion)",
  "Backend/SQL test approach & sample validation scripts",
  "Performance test suite (JMeter, Lighthouse) & reports",
  "Accessibility (508) audit report + automated & manual test results",
  "CI/CD pipeline (e.g. GitHub Actions) setup & integration",
  "Dashboards & reporting",
  "Knowledge transfer & documentation",
];

const whyUs = [
  { title: "Years of experience", desc: "Proven track record in QA, test automation, and staffing globally." },
  { title: "Pre-trained talent", desc: "SDETs and automation engineers ready to deploy with minimal ramp-up." },
  { title: "Quick deployment", desc: "Fast turnaround from requirement to deployment for your projects." },
];

export const metadata = {
  title: "QA & Test Automation Consulting Proposal | GITSICS",
  description: "Corporate QA consulting proposal: test strategy, automation frameworks, CI/CD, 508 compliance, performance & security testing. Download the proposal or contact us.",
};

export default function QaProposalPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            QA & Test Automation Consulting Proposal
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Upskill Manual & Hybrid QA Engineers into SDETs and Senior Automation Engineers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ProposalDownloadModal withRequestConsultationButton />
          </div>
        </section>

        {/* Services Included */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Services Included</h2>
          <div className="max-w-4xl mx-auto">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {servicesIncluded.map((service, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="bg-blue-50 py-12 rounded-lg mb-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Engagement Models</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {engagementModels.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg text-center shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.model}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{item.duration}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Deliverables</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-3">
              {deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-0.5">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why Global I Tech Solutions Inc. */}
        <section className="bg-gray-50 py-12 rounded-lg mb-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              Why Global I Tech Solutions Inc.?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whyUs.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 rounded-lg mb-8">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-blue-100 mb-6">
              Email, call, or WhatsApp — or use our contact page for a quick response.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-blue-50">
              <a href="mailto:info@gitsics.com" className="inline-flex items-center gap-2 hover:text-white transition">
                <span>info@gitsics.com</span>
              </a>
              <a href="tel:+19175616554" className="inline-flex items-center gap-2 hover:text-white transition">
                <span>+1 (917) 561-6554</span>
              </a>
              <a href="https://wa.me/19175616554" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white transition">
                <span>WhatsApp</span>
              </a>
            </div>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold bg-white text-blue-600 hover:bg-blue-50 transition"
              >
                Request Consultation
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
