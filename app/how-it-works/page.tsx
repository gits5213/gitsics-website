import CTAButton from "../components/CTAButton";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Free Career Consultation",
      description: "We start by understanding your background, career goals, and timeline. This helps us create a personalized training path tailored to your needs.",
      details: [
        "Initial assessment of your current skills",
        "Discussion of your career objectives",
        "Timeline and commitment planning",
        "Answering all your questions",
      ],
    },
    {
      number: "2",
      title: "Personalized Training Path",
      description: "Based on your consultation, we design a customized learning journey that takes you from where you are to where you want to be.",
      details: [
        "QA Manual → Automation → Full-Stack SDET",
        "Progressive skill building",
        "DevOps integration for testers",
        "AI-powered testing (optional advanced track)",
      ],
    },
    {
      number: "3",
      title: "Hands-On Live Training + Projects",
      description: "Learn through real-world industry frameworks and tools. Every concept is reinforced with practical projects.",
      details: [
        "Live interactive sessions",
        "Real-world industry frameworks (Playwright, Selenium, Cypress)",
        "Hands-on project assignments",
        "Code reviews and feedback",
      ],
    },
    {
      number: "4",
      title: "Career Branding",
      description: "We help you build a professional brand that stands out to employers.",
      details: [
        "Professional resume writing",
        "LinkedIn profile optimization",
        "GitHub portfolio development",
        "Mock interview preparation",
      ],
    },
    {
      number: "5",
      title: "Job Placement & Mentorship",
      description: "Our support continues until you land your dream job. We're with you every step of the way.",
      details: [
        "Job search strategy",
        "Application review and feedback",
        "Interview preparation and coaching",
        "Ongoing mentorship and support",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">How It Works</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your journey from learning to earning in 5 simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <div key={step.number} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">{step.title}</h2>
                  <p className="text-lg text-gray-700 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-3">•</span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Visual */}
        <div className="max-w-4xl mx-auto mt-16 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Typical Timeline</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
              {[
                { period: "1-2 Weeks", label: "Consultation & Planning" },
                { period: "4-6 Months", label: "Training Phase" },
                { period: "1-2 Weeks", label: "Career Branding" },
                { period: "2-3+ Months", label: "Job Search & Placement" },
                { period: "Ongoing", label: "Mentorship Support" },
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-blue-50 rounded-lg">
                  <div className="font-semibold text-blue-600 mb-2">{item.period}</div>
                  <div className="text-sm text-gray-700">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {[
              {
                q: "How long does the complete program take?",
                a: "The typical timeline is 4-6 months for the complete training program, followed by job placement support which continues until you land a position.",
              },
              {
                q: "Do I need prior experience in testing?",
                a: "No prior experience required! We start from the fundamentals and build up to advanced concepts. Our programs are designed for beginners and career changers.",
              },
              {
                q: "What makes your training different?",
                a: "We focus on hands-on, project-based learning with real-world frameworks. Plus, we provide comprehensive career services including resume writing, interview prep, and job placement support.",
              },
              {
                q: "Is job placement guaranteed?",
                a: "While we can't guarantee employment, we provide extensive support including job search strategy, application review, interview coaching, and ongoing mentorship until you succeed.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg mb-2 text-gray-900">{faq.q}</h4>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Book your free consultation today and take the first step toward your dream career
          </p>
          <CTAButton href="/contact" text="Request Consultation" variant="secondary" />
        </section>
      </div>
    </div>
  );
}

