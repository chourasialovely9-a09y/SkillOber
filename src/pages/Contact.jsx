import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="bg-[#F6F4E8] min-h-screen p-10">

        <div className="max-w-4xl mx-auto">

          <h1 className="text-5xl font-bold text-[#1A2B3C] mb-8">
            Contact Us
          </h1>

          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-4 rounded-xl mb-4"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-4 rounded-xl mb-4"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border p-4 rounded-xl mb-4"
            ></textarea>

            <button className="bg-[#0F5C5C] text-white px-8 py-3 rounded-xl">
              Send Message
            </button>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Contact;