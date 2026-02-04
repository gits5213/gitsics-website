import CTAButton from "../components/CTAButton";

const advancedTopics = [
  {
    icon: "🏗️",
    title: "Advanced Automation Framework Architecture",
    topics: [
      "Multi-layer automation design: UI + API + DB + Services",
      "Page Object Model vs Screenplay Pattern vs Abstraction Layers",
      "Modular reusable component development",
      "API-first automation framework structure",
      "Test data builders & domain-driven testing",
      "Designing low-maintenance, high-scalability frameworks",
      "Cross-platform automation architecture (Web, Mobile, API, Microservices)",
    ],
  },
  {
    icon: "⚙️",
    title: "Enterprise Playwright, Selenium, Cypress & Hybrid Automation",
    topics: [
      "Building enterprise-grade Playwright hybrid frameworks",
      "Cross-browser & cross-platform execution strategies",
      "Distributed parallel execution",
      "Advanced selectors, context isolation, mocking, and network interception",
      "Creating custom Playwright/Selenium wrappers & utilities",
      "Converting flaky tests into stable test flows",
      "Building automation reporting dashboards",
    ],
  },
  {
    icon: "🔌",
    title: "API Testing + Automation at an Architect Level",
    topics: [
      "REST + GraphQL + gRPC testing architecture",
      "API schema validation automation",
      "Contract testing using Pact and Postman/Newman",
      "Service virtualization for unstable dependencies",
      "API load & performance profiling",
      "Integrating API automation into CI pipelines",
    ],
  },
  {
    icon: "🚀",
    title: "DevOps for QA / SDET",
    topics: [
      "Designing CI/CD workflows for automation pipelines",
      "GitHub Actions, Jenkins, GitLab CI — real-world implementation",
      "Containers for QA — Docker fundamentals",
      "Running Playwright/Selenium/Cypress in containers",
      "Kubernetes basics for test execution at scale",
      "Secrets management & environment strategy",
      "Monitoring & alerting for failed pipelines",
    ],
  },
  {
    icon: "☁️",
    title: "Cloud Testing & Modern Infrastructure",
    topics: [
      "AWS + Azure fundamentals for test engineers",
      "Cloud-native testing strategies",
      "Using cloud device farms: LambdaTest, BrowserStack, SauceLabs",
      "Remote test orchestration",
      "Environment configuration automation",
    ],
  },
  {
    icon: "⚡",
    title: "Performance Testing for SDETs",
    topics: [
      "JMeter advanced design",
      "Load, stress, endurance & spike testing",
      "Performance assertions + SLA monitoring",
      "Integrating performance tests into CI/CD",
      "API performance profiling",
    ],
  },
  {
    icon: "🔒",
    title: "Security Testing Concepts for SDET",
    topics: [
      "OWASP Top 10 automation",
      "API security testing (Auth, Access Control, Token testing)",
      "Static & dynamic application security testing integration",
      "Vulnerability scanning fundamentals",
    ],
  },
  {
    icon: "🤖",
    title: "AI-Driven Quality Engineering",
    topics: [
      "Writing test automation with AI support (ChatGPT, Claude, GitHub Copilot)",
      "AI test case generation & test optimization",
      "RAG-based QA systems",
      "AI-based exploratory testing",
      "Using LLMs for automated defect analysis",
      "Intelligent test prioritization using analytics",
      "ML-driven test selection",
    ],
  },
  {
    icon: "🔀",
    title: "Microservices & Distributed Systems Testing",
    topics: [
      "Event-driven architecture testing",
      "Kafka-based test approaches",
      "Contract-first testing",
      "Service dependency simulation",
      "Testing asynchronous processes",
    ],
  },
  {
    icon: "💾",
    title: "Database & Backend Validation for Senior QA",
    topics: [
      "SQL + NoSQL advanced testing",
      "Transaction behavior testing",
      "Test data modeling",
      "DB schema evolution testing",
      "Automated DB validations within frameworks",
    ],
  },
  {
    icon: "👔",
    title: "Leadership & QA Strategy — Becoming a QA Architect",
    topics: [
      "Defining quality strategy across enterprise teams",
      "Test planning at scale",
      "Designing release strategies with risk-based testing",
      "Leading SDET teams",
      "Code review standards for automation teams",
      "Test governance & compliance (508, accessibility, security, regulatory)",
      "Coaching and mentoring QA teams",
    ],
  },
  {
    icon: "📊",
    title: "Building a Professional Portfolio & Career Branding",
    topics: [
      "Architect-level GitHub portfolio",
      "Case studies & automation frameworks showcase",
      "Resume upgrade for Senior SDET/Architect roles",
      "LinkedIn optimization for leadership roles",
      "Salary negotiation for senior positions",
    ],
  },
];

export default function AdvancedCareer() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            Advance Your QA Career — Become a Senior SDET or QA Architect
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mt-6 italic">
            For professionals already working in QA who want to take their expertise to the next level.
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mt-6">
            In today's rapidly evolving software engineering world, mid-level QA engineers must go beyond manual or basic automation. 
            Companies now look for <strong>full-stack quality professionals</strong> who can design scalable automation architectures, 
            implement DevOps-driven pipelines, integrate AI into testing, and lead engineering strategies across complex ecosystems.
          </p>
        </div>

        {/* Introduction Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 rounded-lg mb-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Specialized Advanced Training Tracks</h2>
            <p className="text-xl text-blue-100 mb-6">
              Global I Tech Solutions Inc. offers comprehensive advanced training tracks designed for working QA professionals 
              who want to step into <strong>Senior SDET</strong>, <strong>Lead Automation Engineer</strong>, or <strong>QA Architect</strong> roles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" text="Upgrade to Senior SDET" variant="secondary" />
              <CTAButton href="/contact" text="Become a QA Architect" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-600" />
            </div>
          </div>
        </section>

        {/* Advanced Topics */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Comprehensive Advanced Topics for Career Acceleration
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Industry-relevant, architect-level topics designed to accelerate your career
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedTopics.map((topic, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{topic.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 flex-1">{topic.title}</h3>
                </div>
                <ul className="space-y-2">
                  {topic.topics.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Who Is This For */}
        <section className="bg-gray-50 py-12 rounded-lg mb-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Who Is This Program For?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Mid-Level QA Engineers",
                  desc: "Currently working in QA and want to advance to senior roles",
                },
                {
                  title: "Automation Engineers",
                  desc: "Looking to become Lead Automation Engineers or SDET Architects",
                },
                {
                  title: "QA Leads",
                  desc: "Wanting to transition to QA Architect or Engineering Manager roles",
                },
                {
                  title: "Career Changers",
                  desc: "Experienced professionals transitioning into senior QA leadership",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">What You'll Achieve</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🎯",
                  title: "Senior SDET Role",
                  desc: "Master architect-level automation and framework design",
                },
                {
                  icon: "🏆",
                  title: "QA Architect Position",
                  desc: "Lead quality strategy across enterprise teams",
                },
                {
                  icon: "💰",
                  title: "Higher Salary",
                  desc: "Command senior-level compensation with advanced skills",
                },
                {
                  icon: "🚀",
                  title: "Career Acceleration",
                  desc: "Fast-track your path to leadership roles",
                },
                {
                  icon: "🌐",
                  title: "Global Opportunities",
                  desc: "Open doors to top tech companies worldwide",
                },
                {
                  icon: "📈",
                  title: "Industry Recognition",
                  desc: "Build a portfolio that stands out to employers",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 rounded-lg">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Accelerate Your Career?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join our Advanced Career Acceleration program and transform from a mid-level QA engineer 
              to a Senior SDET or QA Architect
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" text="Join the Advanced Track" variant="secondary" />
              <CTAButton href="/contact" text="Request Consultation" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-600" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

