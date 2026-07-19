import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const QuizPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `http://localhost:5000/api/quizzes/course/${courseId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setQuiz(res.data);
      setAnswers(new Array(res.data.questions.length).fill(null));
    } catch (err) {
      console.log(err);
    }
  };

  const handleOptionChange = (questionIndex, optionIndex) => {
    const updated = [...answers];
    updated[questionIndex] = optionIndex;
    setAnswers(updated);
  };

  const submitQuiz = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `http://localhost:5000/api/quizzes/${quiz._id}/submit`,
        { answers },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setResult(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!quiz)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F6F4E8]">
        <h1 className="text-3xl font-bold text-[#0F5C5C]">
          Loading Quiz...
        </h1>
      </div>
    );

  if (result) {
    const passed = result.percentage >= 60;

    return (
      <div className="min-h-screen bg-[#F6F4E8] flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-2xl text-center">

          <h1 className="text-4xl font-bold mb-6">
            🎉 Quiz Completed
          </h1>

          <div className="text-6xl mb-6">
            {passed ? "🏆" : "📚"}
          </div>

          <h2 className="text-5xl font-bold text-[#0F5C5C]">
            {result.score}/{result.totalQuestions}
          </h2>

          <p className="text-xl text-gray-600 mt-2">
            Your Score
          </p>

          <p className="text-2xl mt-6">
            Percentage : <strong>{result.percentage}%</strong>
          </p>

          <p
            className={`text-2xl mt-4 font-bold ${
              passed ? "text-green-600" : "text-red-600"
            }`}
          >
            {passed ? "✅ Passed" : "❌ Failed"}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <Link
              to={`/courses/${courseId}`}
              className="bg-[#0F5C5C] hover:bg-[#0b4b4b] text-white px-6 py-3 rounded-xl"
            >
              ← Back to Course
            </Link>

            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
            >
              Retake Quiz
            </button>

            {result.certificateIssued && (
              <button
                onClick={() => {
                  localStorage.setItem(
                    "certificateCourse",
                    quiz.title
                  );
                  navigate("/certificate");
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
              >
                🏆 View Certificate
              </button>
            )}

          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F4E8] py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-xl">

        <h1 className="text-4xl font-bold mb-8 text-center">
          {quiz.title}
        </h1>

        {quiz.questions.map((question, qIndex) => (
          <div
            key={qIndex}
            className="mb-8 border rounded-xl p-6"
          >
            <h2 className="text-xl font-semibold mb-5">
              {qIndex + 1}. {question.question}
            </h2>

            {question.options.map((option, opIndex) => (
              <label
                key={opIndex}
                className="flex items-center mb-3 cursor-pointer"
              >
                <input
                  type="radio"
                  checked={answers[qIndex] === opIndex}
                  onChange={() =>
                    handleOptionChange(qIndex, opIndex)
                  }
                />
                <span className="ml-3">{option}</span>
              </label>
            ))}
          </div>
        ))}

        <div className="text-center">
          <button
            disabled={answers.includes(null)}
            onClick={submitQuiz}
            className={`px-10 py-4 rounded-xl text-white font-semibold ${
              answers.includes(null)
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#0F5C5C] hover:bg-[#0b4b4b]"
            }`}
          >
            Submit Quiz
          </button>
        </div>

      </div>
    </div>
  );
};

export default QuizPage;