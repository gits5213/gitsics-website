import Link from "next/link";
import CTAButton from "./components/CTAButton";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Become a Full-Stack Software Quality Engineer
          </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              We Train. We Mentor. We Place.
            </p>
            <p className="text-lg mb-8 text-blue-50 max-w-2xl mx-auto">
              Hands-on QA/SDET training, automation frameworks, resume/LinkedIn optimization, 
              interview prep, and job placement support. Staffing and consulting services globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" text="Apply Now" variant="secondary" />
              <CTAButton href="/how-it-works" text="Learn More" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-600" />
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

      {/* Courses Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Our Training Programs</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive courses designed to take you from beginner to job-ready professional
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "QA Manual Testing", desc: "Foundation of software testing principles and methodologies" },
              { title: "QA Automation", desc: "Playwright, Selenium, Cypress - Master industry-standard tools" },
              { title: "Full-Stack SDET", desc: "End-to-end testing expertise across the entire tech stack" },
              { title: "API Testing & Automation", desc: "REST, GraphQL, and API testing frameworks" },
              { title: "DevOps for Testers", desc: "CI/CD pipelines, Docker, Kubernetes for QA engineers" },
              { title: "AI for QA", desc: "RAG, GenAI, and automation intelligence for modern testing" },
              { title: "Performance Tester", desc: "Master load, stress, and performance testing with JMeter and advanced tools" },
              { title: "Security Tester", desc: "OWASP Top 10, API security, vulnerability scanning, and security testing automation" },
              { title: "508 Compliance Tester", desc: "Accessibility testing and WCAG compliance for inclusive software applications" },
            ].map((course) => (
              <div key={course.title} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.desc}</p>
                <Link href="/courses" className="text-blue-600 font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/staffing" text="Explore Staffing Solutions" variant="secondary" />
              <CTAButton href="/contact" text="Request Consultation" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-600" />
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
              <CTAButton href="/contact" text="Schedule Consultation" variant="outline" className="bg-purple-600 border-purple-600 text-white hover:bg-purple-700" />
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
            <CTAButton href="/contact" text="Book Free Consultation" variant="secondary" />
            <CTAButton href="/courses" text="View Courses" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-600" />
          </div>
        </div>
      </section>
    </div>
  );
}
