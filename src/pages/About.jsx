import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="bg-[#F6F4E8] min-h-screen p-10">

        <div className="max-w-6xl mx-auto">

          <h1 className="text-5xl font-bold text-[#1A2B3C] mb-8">
            About SkillOber
          </h1>

          <div className="bg-[#DDF3EE] p-10 rounded-3xl shadow-lg">

            <p className="text-xl text-gray-700 leading-relaxed">
              SkillOber is an AI-powered E-Learning platform designed to
              help students learn smarter, track their progress, and
              achieve career growth through personalized learning paths.
            </p>

            <p className="text-xl text-gray-700 mt-6 leading-relaxed">
              Our mission is to make quality education accessible,
              engaging, and effective through modern technology,
              interactive courses, and AI-driven recommendations.
            </p>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default About;