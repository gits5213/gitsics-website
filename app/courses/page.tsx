import Link from "next/link";
import CTAButton from "../components/CTAButton";

const courses = [
  {
    id: "qa-manual",
    title: "QA Manual Testing",
    description: "Master the fundamentals of software testing",
    duration: "8 weeks",
    level: "Beginner",
    tools: ["Test Planning", "Test Cases", "Bug Reporting", "JIRA", "TestRail", "POSTMAN", "Database", "JMeter", "Confluence", "Swagger", "Test Strategy", "SDLC", "STLC", "ISTQB"],
    learn: [
      "Software testing fundamentals and principles",
      "Test planning and strategy",
      "Test case design and execution",
      "Bug lifecycle and reporting",
      "Agile/Scrum methodologies",
      "Test documentation",
      "Front end testing",
      "Middleware testing",
      "Backend testing",
      "Performance testing",
      "Security testing",
      "Mobile app testing",
    ],
    projects: [
      "Create comprehensive test plans",
      "Design test cases for real applications",
      "Bug tracking and reporting",
      "Write manual test cases",
      "Write Test Plan",
      "Write Test Strategy",
      "Write a defect/Bug",
    ],
  },
  {
    id: "qa-automation",
    title: "QA Automation",
    description: "Master industry-standard automation frameworks",
    duration: "12 weeks",
    level: "Intermediate",
    tools: ["Playwright", "Selenium", "Cypress", "JavaScript/TypeScript", "Git"],
    learn: [
      "Web automation with Playwright, Selenium, and Cypress",
      "Programming fundamentals (Java, Python, C#, JavaScript/TypeScript)",
      "Page Object Model (POM) design pattern",
      "Test data management",
      "Reporting and CI/CD integration",
      "Cross-browser and cross-platform testing",
    ],
    projects: ["E-commerce automation framework", "API testing automation", "Cross-browser test suite"],
  },
  {
    id: "fullstack-sdet",
    title: "Full-Stack SDET",
    description: "Become a complete Software Development Engineer in Test",
    duration: "16 weeks",
    level: "Advanced",
    tools: ["Playwright", "Selenium", "REST Assured", "Postman", "Docker", "Jenkins", "Git"],
    learn: [
      "End-to-end test automation",
      "API testing and automation",
      "Database testing",
      "Performance testing basics",
      "CI/CD pipeline integration",
      "Test framework architecture",
      "Code quality and best practices",
    ],
    projects: ["Complete test automation framework", "API test suite", "CI/CD pipeline setup"],
  },
  {
    id: "api-testing",
    title: "API Testing & Automation",
    description: "Master API testing and automation",
    duration: "6 weeks",
    level: "Intermediate",
    tools: ["Postman", "REST Assured", "Newman", "Swagger", "JSON/XML"],
    learn: [
      "REST and GraphQL API concepts",
      "API testing with Postman",
      "API automation with REST Assured",
      "API documentation and contract testing",
      "Performance testing for APIs",
      "CI/CD integration for API tests",
    ],
    projects: ["Complete API test suite", "Automated API regression tests", "API performance tests"],
  },
  {
    id: "devops-testers",
    title: "DevOps Pipeline for Testers",
    description: "Learn DevOps tools and practices for QA engineers",
    duration: "8 weeks",
    level: "Intermediate",
    tools: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "AWS/Azure"],
    learn: [
      "Docker containerization",
      "CI/CD pipeline setup",
      "Infrastructure as Code",
      "Cloud platforms (AWS/Azure basics)",
      "Monitoring and logging",
      "Test execution in pipelines",
    ],
    projects: ["Dockerized test framework", "Complete CI/CD pipeline", "Cloud-based test execution"],
  },
  {
    id: "ai-qa",
    title: "AI for QA",
    description: "Leverage AI and GenAI for modern testing",
    duration: "6 weeks",
    level: "Advanced",
    tools: ["OpenAI API", "LangChain", "RAG", "Python", "ML Basics"],
    learn: [
      "AI-powered test generation",
      "RAG (Retrieval-Augmented Generation) for QA",
      "GenAI for test case creation",
      "Intelligent test automation",
      "AI-based bug detection",
      "Future of AI in QA",
    ],
    projects: ["AI test case generator", "RAG-based QA assistant", "Intelligent test framework"],
  },
  {
    id: "performance-tester",
    title: "Performance Tester",
    description: "Master load, stress, and performance testing",
    duration: "6 weeks",
    level: "Intermediate",
    tools: ["JMeter", "LoadRunner", "Gatling", "K6", "Postman", "Newman", "Performance Monitoring"],
    learn: [
      "Performance testing fundamentals",
      "Load, stress, endurance & spike testing",
      "JMeter advanced design and scripting",
      "Performance metrics and SLA monitoring",
      "API performance profiling",
      "Database performance testing",
      "Integrating performance tests into CI/CD",
      "Performance bottleneck identification",
    ],
    projects: ["Complete performance test suite", "Load testing scenarios", "Performance test reports"],
  },
  {
    id: "security-tester",
    title: "Security Tester",
    description: "Master security testing and vulnerability assessment",
    duration: "6 weeks",
    level: "Intermediate",
    tools: ["OWASP ZAP", "Burp Suite", "Nessus", "Postman", "OWASP Top 10", "SAST/DAST Tools"],
    learn: [
      "OWASP Top 10 vulnerabilities",
      "API security testing (Auth, Access Control, Token testing)",
      "Web application security testing",
      "Static & dynamic application security testing (SAST/DAST)",
      "Vulnerability scanning and assessment",
      "Penetration testing basics",
      "Security test automation",
      "Security compliance and standards",
    ],
    projects: ["Security test plan", "Vulnerability assessment report", "Automated security test suite"],
  },
  {
    id: "508-compliance-tester",
    title: "508 Compliance Tester",
    description: "Master accessibility testing and WCAG compliance",
    duration: "4 weeks",
    level: "Beginner",
    tools: ["axe DevTools", "WAVE", "NVDA", "JAWS", "Screen Reader", "Keyboard Navigation", "WCAG Guidelines"],
    learn: [
      "Section 508 compliance requirements",
      "WCAG 2.1 guidelines (Level A, AA, AAA)",
      "Accessibility testing methodologies",
      "Screen reader testing",
      "Keyboard navigation testing",
      "Color contrast and visual accessibility",
      "ARIA (Accessible Rich Internet Applications)",
      "Automated accessibility testing tools",
      "Manual accessibility testing techniques",
      "Accessibility audit and reporting",
    ],
    projects: ["Accessibility test plan", "WCAG compliance audit", "Accessibility test report"],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Master comprehensive digital marketing strategies and tools",
    duration: "10 weeks",
    level: "Beginner",
    tools: ["Google Analytics", "Google Ads", "Facebook Ads", "SEO Tools", "Email Marketing Platforms", "Content Management Systems", "Social Media Management Tools"],
    learn: [
      "SEO Optimization & Strategy",
      "Social Media Marketing",
      "Content Marketing & Copywriting",
      "Pay-Per-Click (PPC) Advertising",
      "Email Marketing Campaigns",
      "Analytics & Performance Tracking",
      "Search Engine Marketing (SEM)",
      "Content strategy and planning",
      "Conversion rate optimization",
      "Marketing automation",
    ],
    projects: [
      "Complete SEO audit and optimization plan",
      "Social media marketing campaign",
      "PPC campaign setup and management",
      "Email marketing campaign",
      "Analytics dashboard and reporting",
    ],
  },
];

export default function Courses() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Training Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive courses designed to take you from beginner to job-ready professional
          </p>
        </div>

        {/* Training Delivery Methods */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">Available Training Formats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="text-4xl mb-3">👥</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">In-Person</h3>
              <p className="text-sm text-gray-600">Classroom-based training with hands-on guidance</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Online</h3>
              <p className="text-sm text-gray-600">Live virtual sessions accessible from anywhere</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="text-4xl mb-3">🏢</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Corporate</h3>
              <p className="text-sm text-gray-600">Customized programs for your organization</p>
            </div>
          </div>
          <p className="text-center text-gray-700 mt-6">
            All courses are available in all three formats. Contact us to discuss which option works best for you.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="space-y-12 mb-16">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-3xl font-bold text-gray-900">{course.title}</h2>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                      {course.level}
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">{course.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">What You'll Learn:</h3>
                      <ul className="space-y-2">
                        {course.learn.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Tools & Technologies:</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {course.tools.map((tool, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
                            {tool}
                          </span>
                        ))}
                      </div>
                      <div className="mb-4">
                        <span className="text-gray-600">Duration: </span>
                        <span className="font-semibold text-gray-900">{course.duration}</span>
                      </div>
                      <div className="mb-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Training Formats:</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm">In-Person</span>
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-md text-sm">Online</span>
                          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-md text-sm">Corporate</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Hands-On Projects:</h3>
                        <ul className="space-y-1">
                          {course.projects.map((project, idx) => (
                            <li key={idx} className="text-gray-700 text-sm">• {project}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <CTAButton href="/enroll" text="Enroll Now" />
              </div>
            </div>
          ))}
        </div>

        {/* Certification Path */}
        <section className="bg-blue-50 py-12 rounded-lg mb-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Certification Path</h2>
            <p className="text-center text-gray-700 mb-8">
              Upon completion of each course, you'll receive a certificate of completion. 
              Complete the full SDET track to earn a comprehensive Full-Stack SDET certification.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">📜</div>
                <h3 className="font-semibold mb-2">Course Completion Certificate</h3>
                <p className="text-sm text-gray-600">For each individual course</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="font-semibold mb-2">Full-Stack SDET Certificate</h3>
                <p className="text-sm text-gray-600">Complete program certification</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="font-semibold mb-2">Portfolio Projects</h3>
                <p className="text-sm text-gray-600">Real-world projects for your GitHub</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Book a free consultation to discuss which course is right for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" text="Book Free Consultation" variant="secondary" />
            <CTAButton href="/how-it-works" text="Learn How It Works" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-600" />
          </div>
        </section>
      </div>
    </div>
  );
}

