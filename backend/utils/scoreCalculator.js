const normalize = (text) => {
  return text.toLowerCase().trim();
};

const calculateScore = (course, userInterests) => {
  let score = 0;

  // Normalize user interests
  const normalizedInterests = userInterests.map(normalize);

  // Category Match (Case-insensitive)
  if (
    course.category &&
    normalizedInterests.includes(normalize(course.category))
  ) {
    score += 40;
  }

  // Tag Match (Case-insensitive)
  if (course.tags && course.tags.length > 0) {
    course.tags.forEach((tag) => {
      if (normalizedInterests.includes(normalize(tag))) {
        score += 20;
      }
    });
  }

  // Rating Bonus
  score += (course.rating || 0) * 2;

  // Popularity Bonus
  score += (course.enrolledStudents || 0) / 100;

  return score;
};

module.exports = calculateScore;