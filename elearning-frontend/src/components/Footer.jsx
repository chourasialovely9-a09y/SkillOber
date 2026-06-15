function Footer() {
  return (
    <footer className="bg-[#0F5C5C] text-white mt-20">

      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}

          <div>
            <h2 className="text-3xl font-bold">
              SkillOber
            </h2>

            <p className="mt-4 text-gray-200">
              AI-powered learning platform helping students
              build skills, grow careers and achieve success.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="font-bold text-xl mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">

              <li>Home</li>

              <li>Courses</li>

              <li>Login</li>

              <li>Register</li>

            </ul>
          </div>

          {/* Resources */}

          <div>
            <h3 className="font-bold text-xl mb-4">
              Resources
            </h3>

            <ul className="space-y-2">

              <li>Blog</li>

              <li>Certificates</li>

              <li>Learning Paths</li>

              <li>Support</li>

            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="font-bold text-xl mb-4">
              Contact
            </h3>

            <ul className="space-y-2">

              <li>📧 support@skillober.com</li>

              <li>📞 +91 9876543210</li>

              <li>📍 India</li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar */}

        <div className="border-t border-teal-700 mt-10 pt-6 text-center">

          <p>
            © 2026 SkillOber. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;