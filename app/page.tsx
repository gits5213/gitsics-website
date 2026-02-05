import Link from "next/link";
import CTAButton from "./components/CTAButton";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gitsics.com";

export const metadata = {
  title: "QA, SDET & Digital Literacy Training | Job Placement | GITSICS",
  description: "Expert IT training and job placement: QA Manual & Automation, Full-Stack SDET, API Testing, DevOps, Digital Marketing, and Basic Computer Skills. In-person, online & corporate. Enroll today.",
  openGraph: {
    title: "QA, SDET & Digital Literacy Training | Job Placement | GITSICS",
    description: "Expert IT training and job placement. 11+ programs from beginner to advanced. In-person, online & corporate.",
    url: siteUrl,
  },
};

const trainingProgramsForSchema = [
  { name: "Basic Computer Skills + Job Search Essentials", url: `${siteUrl}/courses/#basic-computer-job-search` },
  { name: "QA Manual Testing", url: `${siteUrl}/courses/#qa-manual` },
  { name: "QA Automation", url: `${siteUrl}/courses/#qa-automation` },
  { name: "Full-Stack SDET", url: `${siteUrl}/courses/#fullstack-sdet` },
  { name: "API Testing & Automation", url: `${siteUrl}/courses/#api-testing` },
  { name: "DevOps for Testers", url: `${siteUrl}/courses/#devops-testers` },
  { name: "AI for QA", url: `${siteUrl}/courses/#ai-qa` },
  { name: "Performance Tester", url: `${siteUrl}/courses/#performance-tester` },
  { name: "Security Tester", url: `${siteUrl}/courses/#security-tester` },
  { name: "508 Compliance Tester", url: `${siteUrl}/courses/#508-compliance-tester` },
  { name: "Digital Marketing", url: `${siteUrl}/courses/#digital-marketing` },
];

export default function Home() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Our Training Programs",
    description: "Comprehensive IT and digital literacy training programs from GITSICS.",
    numberOfItems: trainingProgramsForSchema.length,
    itemListElement: trainingProgramsForSchema.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: item.name,
        url: item.url,
      },
    })),
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Main Heading */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your Career with Expert Training & Placement
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
                Comprehensive training programs, personalized mentorship, and job placement support. 
                We Train. We Mentor. We Place.
              </p>
            </div>

            {/* Three High-Level Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
              {/* QA/SDET Training Service - We Train */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-blue-500/30 rounded-xl flex items-center justify-center group-hover:bg-blue-500/40 transition-colors">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="px-4 py-1.5 bg-blue-500/30 rounded-full text-sm font-semibold text-blue-100 border border-blue-400/30">
                    We Train
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">QA/SDET Training Service</h2>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Comprehensive QA and SDET training programs designed to take you from beginner to job-ready professional. 
                  Master industry-standard automation frameworks, testing methodologies, and real-world projects.
                </p>
                <ul className="space-y-2.5 text-blue-50 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>10+ QA/SDET Training Programs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Playwright, Selenium, Cypress & More</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hands-on Projects & Real-world Experience</span>
                  </li>
                </ul>
                <Link 
                  href="/courses" 
                  className="inline-flex items-center text-white font-semibold hover:text-blue-200 transition group/link"
                >
                  Explore Courses
                  <svg className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Digital Marketing Training Service - We Train */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-purple-500/30 rounded-xl flex items-center justify-center group-hover:bg-purple-500/40 transition-colors">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="px-4 py-1.5 bg-purple-500/30 rounded-full text-sm font-semibold text-purple-100 border border-purple-400/30">
                    We Train
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Digital Marketing Training Service</h2>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Master comprehensive digital marketing strategies and tools. Learn SEO, social media marketing, 
                  PPC advertising, content marketing, email campaigns, and analytics to excel in digital marketing.
                </p>
                <ul className="space-y-2.5 text-blue-50 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>SEO & Social Media Marketing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>PPC Advertising & Content Marketing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Email Marketing & Analytics</span>
                  </li>
                </ul>
                <Link 
                  href="/courses" 
                  className="inline-flex items-center text-white font-semibold hover:text-purple-200 transition group/link"
                >
                  Explore Courses
                  <svg className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Staffing Service - We Place */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-green-500/30 rounded-xl flex items-center justify-center group-hover:bg-green-500/40 transition-colors">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="px-4 py-1.5 bg-green-500/30 rounded-full text-sm font-semibold text-green-100 border border-green-400/30">
                    We Place
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Staffing Service</h2>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Connect businesses with top-tier QA talent and expert consulting solutions globally. 
                  We provide comprehensive staffing services including contract staffing, team augmentation, 
                  and placement of skilled QA engineers and SDETs.
                </p>
                <ul className="space-y-2.5 text-blue-50 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>SDET/QA Engineers Placement</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Contract Staffing & Team Augmentation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Global Staffing & Consulting</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    href="/staffing" 
                    className="inline-flex items-center text-white font-semibold hover:text-green-200 transition group/link"
                  >
                    Learn More
                    <svg className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link 
                    href="/staffing/qa-proposal" 
                    className="inline-flex items-center text-green-200 font-semibold hover:text-white transition group/link text-sm"
                  >
                    Download Corporate QA Proposal
                    <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href="/enroll" text="Enroll Now" variant="secondary" />
                <CTAButton href="/courses" text="View Courses" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Quick Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Free Consultation", desc: "Understand your background, goals, and timeline" },
              { step: "2", title: "Training Path", desc: "Personalized QA → Automation → SDET → DevOps" },
              { step: "3", title: "Live Training", desc: "Hands-on projects with real-world frameworks" },
              { step: "4", title: "Career Branding", desc: "Resume, LinkedIn, GitHub, interview prep" },
              { step: "5", title: "Job Placement", desc: "Ongoing support until you land your dream job" },
            ].map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/how-it-works" className="text-blue-600 font-semibold hover:underline">
              Learn More About Our Process →
            </Link>
          </div>
        </div>
      </section>

      {/* Training Delivery Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Flexible Training Options</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the training format that works best for you or your organization
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg shadow-lg border-l-4 border-blue-600">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">In-Person Training</h3>
              <p className="text-gray-700 mb-4">
                Hands-on, interactive classroom sessions with direct instructor guidance and peer collaboration.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Face-to-face interaction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Immediate feedback and support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Networking opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Structured learning environment</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg shadow-lg border-l-4 border-green-600">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Online Training</h3>
              <p className="text-gray-700 mb-4">
                Live virtual sessions with the same quality instruction, accessible from anywhere in the world.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Learn from anywhere</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Flexible scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Recorded sessions for review</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Interactive virtual labs</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg shadow-lg border-l-4 border-purple-600">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Corporate Training</h3>
              <p className="text-gray-700 mb-4">
                Customized training programs designed specifically for your organization's needs and goals.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Tailored curriculum</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>On-site or remote delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Team-focused learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Scalable for any team size</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              All our training programs are available in all three formats. Contact us to discuss which option works best for you.
            </p>
            <CTAButton href="/contact" text="Discuss Training Options" />
          </div>
        </div>
      </section>

      {/* Courses Overview - Training Programs */}
      <section
        className="py-16"
        aria-labelledby="training-programs-heading"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        <div className="container mx-auto px-4">
          <h2 id="training-programs-heading" className="text-4xl font-bold text-center mb-4 text-gray-900">
            Our Training Programs
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive courses designed to take you from beginner to job-ready professional
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {[
              { title: "Basic Computer Skills + Job Search Essentials", desc: "Beginner digital literacy: computers, Office, email, online job applications, and safe software use for adults and job seekers. Program price: $500.", anchor: "basic-computer-job-search" },
              { title: "QA Manual Testing", desc: "Foundation of software testing principles and methodologies", anchor: "qa-manual" },
              { title: "QA Automation", desc: "Playwright, Selenium, Cypress - Master industry-standard tools", anchor: "qa-automation" },
              { title: "Full-Stack SDET", desc: "End-to-end testing expertise across the entire tech stack", anchor: "fullstack-sdet" },
              { title: "API Testing & Automation", desc: "REST, GraphQL, and API testing frameworks", anchor: "api-testing" },
              { title: "DevOps for Testers", desc: "CI/CD pipelines, Docker, Kubernetes for QA engineers", anchor: "devops-testers" },
              { title: "AI for QA", desc: "RAG, GenAI, and automation intelligence for modern testing", anchor: "ai-qa" },
              { title: "Performance Tester", desc: "Master load, stress, and performance testing with JMeter and advanced tools", anchor: "performance-tester" },
              { title: "Security Tester", desc: "OWASP Top 10, API security, vulnerability scanning, and security testing automation", anchor: "security-tester" },
              { title: "508 Compliance Tester", desc: "Accessibility testing and WCAG compliance for inclusive software applications", anchor: "508-compliance-tester" },
              { title: "Digital Marketing", desc: "SEO, Social Media Marketing, PPC, Content Marketing, Email Marketing, and Analytics", anchor: "digital-marketing" },
            ].map((course) => (
              <article key={course.title} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition" role="listitem">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.desc}</p>
                <Link
                  href={course.anchor ? `/courses#${course.anchor}` : "/courses"}
                  className="text-blue-600 font-semibold hover:underline"
                  aria-label={`Learn more about ${course.title} training program`}
                >
                  Learn More →
                </Link>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <CTAButton href="/courses" text="View All Courses" />
          </div>
        </div>
      </section>

      {/* Global Services */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Staffing & Consulting Globally</h2>
            <p className="text-xl mb-8 text-blue-100">
              We provide comprehensive staffing and consulting services to businesses worldwide, 
              connecting organizations with top-tier QA talent and expert consulting solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-3">Global Staffing</h3>
                <p className="text-blue-50">
                  Connect with skilled QA engineers, SDETs, and automation specialists 
                  from around the world. Onshore, offshore, and remote options available.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold mb-3">Global Consulting</h3>
                <p className="text-blue-50">
                  Expert consulting services for test automation strategy, framework implementation, 
                  and quality assurance best practices worldwide.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <CTAButton href="/staffing" text="Explore Staffing Solutions" variant="secondary" />
              <CTAButton href="/contact" text="Request Consultation" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-600" />
              <a
                href="/staffing/qa-proposal"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold bg-white/10 border border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Download Corporate QA Proposal
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Choose GITSICS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: "🎓", title: "15+ Years Experience", desc: "Proven track record in IT training and placement" },
              { icon: "🤝", title: "1-on-1 Mentorship", desc: "Personalized guidance throughout your journey" },
              { icon: "💼", title: "Job Placement Support", desc: "We don't stop until you land your dream job" },
              { icon: "🛠️", title: "Real-World Projects", desc: "Hands-on experience with industry frameworks" },
              { icon: "📝", title: "Career Branding", desc: "Resume, LinkedIn, and portfolio optimization" },
              { icon: "🌍", title: "Global Opportunities", desc: "Connect with opportunities worldwide" },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Career Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Already Working in QA? Advance Your Career
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Take your expertise to the next level with our <strong>Advanced Career Acceleration</strong> program
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Designed for mid-level QA professionals who want to step into <strong>Senior SDET</strong>, 
              <strong> Lead Automation Engineer</strong>, or <strong>QA Architect</strong> roles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/advanced-career" text="Explore Advanced Track" variant="secondary" />
              <CTAButton href="/contact" text="Request Consultation" variant="outline" className="bg-purple-600 border-purple-600 text-white hover:bg-purple-700" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
            {[
              { icon: "🏗️", title: "Architect-Level Skills", desc: "Master framework architecture and enterprise automation" },
              { icon: "🚀", title: "DevOps & Cloud", desc: "CI/CD pipelines, containers, and cloud testing" },
              { icon: "🤖", title: "AI-Driven QA", desc: "Integrate AI and ML into your testing strategy" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Sarah M.", role: "SDET at Tech Corp", quote: "GITSICS transformed my career. From manual tester to SDET in 6 months!" },
              { name: "John D.", role: "QA Lead at StartupXYZ", quote: "The hands-on training and mentorship were exactly what I needed." },
              { name: "Maria L.", role: "Automation Engineer", quote: "Best investment in my career. Landed my dream job within 3 months of completion." },
            ].map((story) => (
              <div key={story.name} className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
                <p className="text-gray-700 mb-4 italic">"{story.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{story.name}</p>
                  <p className="text-sm text-gray-600">{story.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/success-stories" className="text-blue-600 font-semibold hover:underline">
              Read More Success Stories →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of successful professionals who started their journey with GITSICS
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" text="Request Consultation" variant="secondary" />
            <CTAButton href="/courses" text="View Courses" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-600" />
          </div>
        </div>
      </section>
    </div>
  );
}
