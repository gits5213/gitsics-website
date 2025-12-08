import CTAButton from "../components/CTAButton";

const services = [
  {
    icon: "📝",
    title: "Resume Writing",
    description: "Professional resume optimization tailored for QA/SDET positions",
    details: [
      "ATS-friendly formatting",
      "Keyword optimization for job applications",
      "Achievement-focused bullet points",
      "Multiple format options (chronological, functional, hybrid)",
      "Industry-specific templates",
    ],
  },
  {
    icon: "💼",
    title: "LinkedIn Optimization",
    description: "Build a compelling LinkedIn profile that attracts recruiters",
    details: [
      "Professional headline and summary",
      "Keyword-rich profile optimization",
      "Skills endorsement strategy",
      "Recommendation guidance",
      "Content strategy for visibility",
    ],
  },
  {
    icon: "💻",
    title: "GitHub Portfolio",
    description: "Showcase your technical skills with a professional GitHub profile",
    details: [
      "Repository organization and presentation",
      "README.md optimization",
      "Project documentation",
      "Code quality best practices",
      "Portfolio website integration",
    ],
  },
  {
    icon: "🎤",
    title: "Mock Interviews",
    description: "Practice and perfect your interview skills",
    details: [
      "Technical interview preparation",
      "Behavioral interview coaching",
      "Common QA/SDET questions",
      "Coding challenge practice",
      "Feedback and improvement strategies",
    ],
  },
  {
    icon: "🔍",
    title: "Job Search Strategy",
    description: "Strategic approach to finding the right opportunities",
    details: [
      "Job board optimization",
      "Networking strategies",
      "Application tracking",
      "Follow-up best practices",
      "Salary negotiation guidance",
    ],
  },
  {
    icon: "🤝",
    title: "1-on-1 Mentorship",
    description: "Personalized guidance throughout your career journey",
    details: [
      "Career path planning",
      "Skill gap analysis",
      "Goal setting and tracking",
      "Industry insights and trends",
      "Ongoing support and motivation",
    ],
  },
];

export default function CareerServices() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Career Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support to make you job-ready and help you land your dream position
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <section className="bg-gray-50 py-12 rounded-lg mb-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Our Career Services Process</h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Initial Assessment",
                  desc: "We review your current resume, LinkedIn profile, and GitHub to identify areas for improvement.",
                },
                {
                  step: "2",
                  title: "Personalized Strategy",
                  desc: "Based on your goals and target roles, we create a customized career branding strategy.",
                },
                {
                  step: "3",
                  title: "Implementation",
                  desc: "We work together to optimize your resume, LinkedIn, and GitHub portfolio.",
                },
                {
                  step: "4",
                  title: "Interview Preparation",
                  desc: "Mock interviews and coaching sessions to build your confidence.",
                },
                {
                  step: "5",
                  title: "Job Search Support",
                  desc: "Ongoing guidance and support until you land your dream job.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 bg-white p-6 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Why Our Career Services Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">95%+</div>
                <p className="text-gray-700">Resume approval rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">3x</div>
                <p className="text-gray-700">More interview calls</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">80%+</div>
                <p className="text-gray-700">Job placement success rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Career?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let us help you stand out and land your dream job
          </p>
          <CTAButton href="/contact" text="Get Started Today" variant="secondary" />
        </section>
      </div>
    </div>
  );
}

