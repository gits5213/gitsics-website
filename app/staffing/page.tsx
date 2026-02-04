import CTAButton from "../components/CTAButton";

const staffingServices = [
  {
    title: "Contract Staffing",
    description: "Flexible staffing solutions for short-term and long-term projects",
    benefits: [
      "Pre-screened QA engineers and SDETs",
      "Quick onboarding and deployment",
      "Flexible engagement models",
      "Scalable team augmentation",
    ],
  },
  {
    title: "SDET/QA Engineers",
    description: "Skilled professionals ready to join your team",
    benefits: [
      "Manual and automation testers",
      "Full-stack SDETs",
      "API testing specialists",
      "Performance testing experts",
      "Accessibility testers (508 Compliance)",
      "Security testers",
    ],
  },
  {
    title: "Automation Consultants",
    description: "Expert consultants for test automation strategy and implementation",
    benefits: [
      "Framework design and implementation",
      "CI/CD pipeline integration",
      "Best practices and training",
      "Process optimization",
    ],
  },
  {
    title: "Team Augmentation",
    description: "Scale your QA team quickly with experienced professionals",
    benefits: [
      "Onshore and remote options",
      "Seamless integration with existing teams",
      "Dedicated project support",
      "Ongoing management and support",
    ],
  },
];

const technologies = [
  "Playwright", "Selenium", "Cypress", "REST Assured", "Postman",
  "TestNG", "JUnit", "Pytest", "Jenkins", "GitLab CI", "Docker",
  "Kubernetes", "AWS", "Azure", "API Testing", "Performance Testing",
  "Accessibility Testing (508)", "Security Testing", "OWASP", "WCAG",
  "Subject7", "Katalon Studio", "AccelQ", "Tricentis Tosca", "QTest",
  "JIRA", "Xray", "Zephyr", "Confluence", "GitHub", "Bitbucket",
  "GitHub Actions", "Azure DevOps", "Swagger", "GraphQL",
  "Java", "Python", "C#.NET", "JavaScript", "TypeScript",
];

export default function Staffing() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Staffing & Consulting Globally</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hire skilled QA engineers, SDETs, and automation consultants for your business needs worldwide
          </p>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            Global I Tech Solutions Inc. provides comprehensive IT staffing and consulting services globally, 
            connecting businesses with top-tier talent and expert solutions across continents.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 rounded-full">
              <span className="text-2xl">🌍</span>
              <span className="text-blue-700 font-semibold">Serving Clients Worldwide</span>
            </div>
            <CTAButton href="/staffing/qa-proposal" text="QA Consulting Proposal" variant="secondary" />
          </div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {staffingServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-700 mb-6">{service.description}</p>
              <h4 className="font-semibold mb-3 text-gray-900">Benefits:</h4>
              <ul className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Global Reach */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 rounded-lg mb-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Global Staffing & Consulting Services</h2>
            <p className="text-xl mb-8 text-center text-blue-100">
              We serve clients across the globe, providing staffing and consulting solutions 
              that transcend geographical boundaries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🌎</div>
                <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                <p className="text-blue-50 text-sm">
                  Serving clients in North America, Europe, Asia, and beyond
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">⏰</div>
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-blue-50 text-sm">
                  Round-the-clock support across different time zones
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="text-xl font-bold mb-2">Cultural Fit</h3>
                <p className="text-blue-50 text-sm">
                  Understanding of diverse business cultures and practices
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Services */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Global Consulting Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Test Automation Strategy</h3>
                <p className="text-gray-700 mb-4">
                  Develop comprehensive test automation strategies tailored to your organization's needs, 
                  regardless of your location.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Framework selection and design</li>
                  <li>• ROI analysis and planning</li>
                  <li>• Implementation roadmaps</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Quality Assurance Best Practices</h3>
                <p className="text-gray-700 mb-4">
                  Expert guidance on establishing QA processes, standards, and methodologies 
                  for global teams.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Process optimization</li>
                  <li>• Team training and upskilling</li>
                  <li>• Quality metrics and KPIs</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
                <h3 className="text-xl font-bold mb-3 text-gray-900">CI/CD Pipeline Integration</h3>
                <p className="text-gray-700 mb-4">
                  Seamless integration of testing into your DevOps pipelines, 
                  supporting distributed teams worldwide.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Pipeline design and setup</li>
                  <li>• Test execution automation</li>
                  <li>• Reporting and monitoring</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Team Augmentation</h3>
                <p className="text-gray-700 mb-4">
                  Scale your QA teams quickly with experienced professionals, 
                  available for on-site or remote work globally.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Onshore and offshore options</li>
                  <li>• Remote team integration</li>
                  <li>• Flexible engagement models</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-50 py-12 rounded-lg mb-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Why Choose GITSICS Staffing?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Pre-Trained Talent",
                  desc: "All our candidates are trained through our comprehensive programs, ensuring they have the skills you need.",
                },
                {
                  title: "Quality Assurance",
                  desc: "Rigorous screening process ensures you get the best talent matched to your requirements.",
                },
                {
                  title: "Quick Deployment",
                  desc: "Fast turnaround time from requirement to deployment, minimizing your time-to-hire.",
                },
              {
                title: "Ongoing Support",
                desc: "We provide continuous support to ensure successful integration and project delivery.",
              },
              {
                title: "Global Network",
                desc: "Access to a worldwide network of skilled professionals and industry connections.",
              },
              {
                title: "Cross-Cultural Expertise",
                desc: "Experience working with diverse teams and understanding global business practices.",
              },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Technologies & Skills</h2>
            <p className="text-center text-gray-600 mb-8">
              Our professionals are skilled in the latest tools and technologies
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="bg-blue-50 py-12 rounded-lg mb-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Engagement Models</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  model: "Contract",
                  duration: "3-12 months",
                  desc: "Ideal for project-based needs",
                },
                {
                  model: "Contract-to-Hire",
                  duration: "Flexible",
                  desc: "Evaluate before permanent hire",
                },
                {
                  model: "Consulting",
                  duration: "Project-based",
                  desc: "Expert guidance and implementation",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.model}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{item.duration}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Need Skilled Engineers?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Request talent or schedule a consultation to discuss your staffing needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" text="Request Talent" variant="secondary" />
            <CTAButton href="/staffing/qa-proposal?open=consultation" text="Schedule Consultation" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-600" />
          </div>
        </section>
      </div>
    </div>
  );
}

