import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">GITSICS</h3>
            <p className="mb-4">
              Global I Tech Solutions Inc.
              <br />
              202nd Street & Hillside Avenue
              <br />
              New York, USA - 11423
              <br />
              Training, Staffing & Consulting
            </p>
            <p className="text-sm">
              Transforming Careers. Powering Innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/courses" className="hover:text-white transition">Courses</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition">How It Works</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/advanced-career" className="hover:text-white transition">Advanced Career</Link></li>
              <li><Link href="/career-services" className="hover:text-white transition">Career Services</Link></li>
              <li><Link href="/staffing" className="hover:text-white transition">Staffing Solutions</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li>
                <a href="https://gits5213.github.io/gits/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Education Website
                </a>
              </li>
              <li>
                <a href="http://visiblehomeinspections.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Visible Home Inspections LLC
                </a>
              </li>
              <li>
                <a href="https://mdszaman.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Md Shahnewaz Zaman | Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/terms-of-use" className="hover:text-white transition">Terms of Use</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/copyright-notice" className="hover:text-white transition">Copyright Notice</Link></li>
              <li><Link href="/refund-policy" className="hover:text-white transition">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Global I Tech Solutions Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

