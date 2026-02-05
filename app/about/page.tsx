import CTAButton from "../components/CTAButton";

export const metadata = {
  title: "About Us",
  description: "Global I Tech Solutions Inc. (GITSICS) — 15+ years of IT training, staffing & consulting. We train, mentor, and place QA/SDET and digital literacy professionals globally.",
  openGraph: {
    title: "About GITSICS | IT Training, Staffing & Consulting",
    description: "Transforming careers. Powering innovation. From Learning to Earning — Globally.",
  },
};

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16" aria-labelledby="about-heading">
          <h1 id="about-heading" className="text-5xl font-bold mb-4 text-gray-900">About Global I Tech Solutions Inc.</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming Careers. Powering Innovation. From Learning to Earning — Globally.
          </p>
        </section>

        {/* Company Overview */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Who We Are</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                Global I Tech Solutions Inc. (GITSICS) is a company specializing in 
                <strong> IT Training, Staffing, and Consulting</strong>. With over 15 years of industry 
                experience, we are dedicated to transforming careers and empowering professionals to excel 
                in the rapidly evolving tech landscape. We provide staffing and consulting services globally, 
                serving clients across continents with world-class talent and expert solutions.
              </p>
              <p className="text-gray-700 mb-4">
                Our mission is to bridge the gap between learning and earning by providing comprehensive, 
                hands-on training programs that prepare individuals for real-world challenges. We don't 
                just teach—we mentor, guide, and support until you achieve your career goals.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="mb-16 bg-gray-50 py-12 rounded-lg">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Training</h3>
                <p className="text-gray-700 mb-3">
                  Comprehensive QA/SDET training programs covering manual testing, automation, 
                  full-stack development, DevOps, and AI-powered testing.
                </p>
                <p className="text-sm text-gray-600 font-semibold mt-3">Available in:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">In-Person</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Online</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">Corporate</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Staffing Globally</h3>
                <p className="text-gray-700 mb-3">
                  Connect businesses worldwide with skilled QA engineers, SDETs, and automation consultants 
                  for contract staffing and team augmentation across continents.
                </p>
                <p className="text-sm text-gray-600 font-semibold mt-3">Global Reach:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">🌍 Worldwide</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">⏰ 24/7 Support</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Consulting Globally</h3>
                <p className="text-gray-700 mb-3">
                  Expert consulting services for test automation strategy, framework implementation, 
                  and quality assurance best practices, serving clients globally.
                </p>
                <p className="text-sm text-gray-600 font-semibold mt-3">Services:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">Strategy</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">Implementation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why We're Different */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why GITSICS is Different</h2>
            <ul className="space-y-4">
              {[
                "15+ years of combined industry experience in software testing and quality assurance",
                "Hands-on, project-based learning with real-world industry frameworks",
                "1-on-1 mentorship and personalized career guidance",
                "Comprehensive career services: resume writing, LinkedIn optimization, interview prep",
                "Job placement support until you land your dream position",
                "Small class sizes ensuring individual attention",
                "Industry connections and networking opportunities",
                "Continuous learning and upskilling support",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Training Delivery Methods */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Flexible Training Delivery</h2>
            <p className="text-gray-700 mb-8 text-lg">
              We understand that everyone learns differently and has different scheduling needs. That's why we offer our training programs in three flexible formats:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">In-Person Training</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Traditional classroom-based learning with direct instructor interaction, hands-on practice, and peer collaboration.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Face-to-face guidance</li>
                  <li>• Immediate feedback</li>
                  <li>• Networking opportunities</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Online Training</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Live virtual sessions with the same quality instruction, accessible from anywhere with an internet connection.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Learn from anywhere</li>
                  <li>• Flexible scheduling</li>
                  <li>• Recorded sessions</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Corporate Training</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Customized training programs tailored to your organization's specific needs, goals, and team requirements.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Tailored curriculum</li>
                  <li>• On-site or remote</li>
                  <li>• Team-focused</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-16 bg-blue-50 py-12 rounded-lg">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Our Approach</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Practical Learning</h3>
                <p className="text-gray-700">
                  We believe in learning by doing. Every course includes hands-on projects that mirror 
                  real-world scenarios you'll encounter in your career.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Career-Focused</h3>
                <p className="text-gray-700">
                  Our programs are designed with one goal: to make you job-ready. We focus on the skills 
                  employers are looking for and prepare you to excel in interviews.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Ongoing Support</h3>
                <p className="text-gray-700">
                  Your journey doesn't end at graduation. We provide continuous mentorship, career 
                  guidance, and placement support until you achieve your goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join us and transform your career today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" text="Request Consultation" />
            <CTAButton href="/courses" text="View Our Courses" variant="secondary" />
          </div>
        </section>
      </div>
    </div>
  );
}

