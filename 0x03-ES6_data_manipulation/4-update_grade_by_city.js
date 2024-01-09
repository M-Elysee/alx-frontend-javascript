export default function updateStudentGradeByCity(studentList, city, newGrades) {
  if (!(studentList instanceof Array)) return [];
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const stdGrdObj = newGrades.filter((std) => std.studentId === student.id);
      let grade = 'N/A';
      if (stdGrdObj.length !== 0) {
        grade = stdGrdObj[0].grade;
      }
      return { ...student, grade };
    });
}
