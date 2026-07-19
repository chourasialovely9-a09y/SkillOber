import { useEffect, useRef, useState } from "react";
import html2pdf from "html2pdf.js";

const Certificate = () => {
  const certificateRef = useRef(null);

  const [student, setStudent] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) setStudent(user.name);
  }, []);

  const course =
    localStorage.getItem("certificateCourse") ||
    "SkillOber Course";

  const date = new Date().toLocaleDateString();

  const downloadPDF = () => {
    const options = {
      margin: 0.5,
      filename: `${student}-${course}-Certificate.pdf`,
      image: {
        type: "jpeg",
        quality: 1,
      },
      html2canvas: {
        scale: 2,
      },
      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "landscape",
      },
    };

    html2pdf().set(options).from(certificateRef.current).save();
  };

  return (
    <div className="min-h-screen bg-[#F6F4E8] flex flex-col items-center justify-center p-10">

      <div
        ref={certificateRef}
        className="bg-white border-[14px] border-[#0F5C5C] rounded-3xl shadow-2xl w-full max-w-5xl p-16 text-center"
      >

        <h1 className="text-5xl font-bold text-[#0F5C5C]">
          Certificate of Completion
        </h1>

        <p className="text-xl mt-10">
          This Certificate is proudly presented to
        </p>

        <h2 className="text-5xl font-bold mt-6">
          {student}
        </h2>

        <p className="mt-8 text-xl">
          for successfully completing
        </p>

        <h3 className="text-4xl font-bold text-[#0F5C5C] mt-4">
          {course}
        </h3>

        <p className="mt-12">
          Issued by <strong>SkillOber AI Learning Platform</strong>
        </p>

        <p className="mt-2">{date}</p>

      </div>

      <button
        onClick={downloadPDF}
        className="mt-8 bg-[#0F5C5C] text-white px-8 py-4 rounded-xl hover:bg-[#0b4b4b]"
      >
        Download PDF
      </button>

    </div>
  );
};

export default Certificate;