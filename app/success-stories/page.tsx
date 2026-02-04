import CTAButton from "../components/CTAButton";

const stories = [
  {
    name: "Sarah M.",
    role: "SDET at Tech Corp",
    image: "👩‍💻",
    before: "Manual QA Tester",
    after: "Full-Stack SDET",
    timeline: "6 months",
    quote: "GITSICS transformed my career completely. I went from manual testing to becoming a full-stack SDET in just 6 months. The hands-on training with Playwright and the career services were game-changers. I landed my dream job with a 60% salary increase!",
    achievements: [
      "60% salary increase",
      "Promoted to SDET role",
      "Leading automation initiatives",
    ],
  },
  {
    name: "John D.",
    role: "QA Lead at StartupXYZ",
    image: "👨‍💼",
    before: "Career Changer",
    after: "QA Lead",
    timeline: "8 months",
    quote: "Coming from a non-tech background, I was skeptical about breaking into tech. But GITSICS made it possible. The step-by-step approach, from manual testing to automation, and the incredible mentorship helped me land a QA Lead position. Best investment ever!",
    achievements: [
      "Career transition successful",
      "QA Lead position",
      "Team of 5 engineers",
    ],
  },
  {
    name: "Maria L.",
    role: "Automation Engineer",
    image: "👩‍🔧",
    before: "Junior QA",
    after: "Senior Automation Engineer",
    timeline: "4 months",
    quote: "The automation training was exceptional. I learned Playwright, Selenium, and API testing through real projects. The mock interviews and resume optimization helped me ace every interview. I got 3 job offers and chose the best one!",
    achievements: [
      "3 job offers",
      "Senior role achieved",
      "40% salary increase",
    ],
  },
  {
    name: "David K.",
    role: "SDET Consultant",
    image: "👨‍💻",
    before: "Unemployed",
    after: "Freelance SDET",
    timeline: "5 months",
    quote: "After being laid off, I was lost. GITSICS not only trained me but also helped me build confidence. The career services team worked tirelessly on my LinkedIn and resume. Now I'm working as a freelance SDET consultant with multiple clients!",
    achievements: [
      "Freelance consultant",
      "Multiple clients",
      "Work-life balance achieved",
    ],
  },
  {
    name: "Priya S.",
    role: "QA Automation Engineer",
    image: "👩‍💼",
    before: "Manual Tester",
    after: "Automation Engineer",
    timeline: "3 months",
    quote: "I wanted to move from manual to automation testing. GITSICS provided exactly what I needed - focused automation training with Cypress and Playwright. The 1-on-1 mentorship was invaluable. I got promoted within 2 months of completing the course!",
    achievements: [
      "Internal promotion",
      "Automation expertise",
      "30% salary increase",
    ],
  },
  {
    name: "Michael R.",
    role: "DevOps Test Engineer",
    image: "👨‍🔧",
    before: "QA Engineer",
    after: "DevOps Test Engineer",
    timeline: "7 months",
    quote: "The DevOps for Testers course opened new doors for me. Learning CI/CD, Docker, and cloud platforms made me invaluable to my company. I now lead the test automation infrastructure and have doubled my income!",
    achievements: [
      "Infrastructure leadership",
      "100% salary increase",
      "Technical expert status",
    ],
  },
];

export default function SuccessStories() {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Success Stories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from professionals who transformed their careers with GITSICS
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">{story.image}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">{story.name}</h3>
                  <p className="text-blue-600 font-semibold">{story.role}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    {story.before} → {story.after} in {story.timeline}
                  </p>
                </div>
              </div>
              <blockquote className="text-gray-700 mb-6 italic border-l-4 border-blue-600 pl-4">
                "{story.quote}"
              </blockquote>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                <ul className="space-y-1">
                  {story.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <section className="bg-white py-12 rounded-lg mb-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">By The Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Students Trained" },
                { number: "80%+", label: "Job Placement Rate" },
                { number: "50%+", label: "Average Salary Increase" },
                { number: "4-6", label: "Months to Job Ready" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Testimonials Placeholder */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Video Testimonials</h2>
            <div className="bg-gray-200 rounded-lg p-16 text-center">
              <p className="text-gray-600 text-lg">
                Video testimonials coming soon! Check back to see our students share their success stories.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of successful professionals who started their journey with GITSICS
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/staffing/qa-proposal?open=consultation" text="Book Free Consultation" variant="secondary" />
            <CTAButton href="/courses" text="View Courses" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-600" />
          </div>
        </section>
      </div>
    </div>
  );
}

