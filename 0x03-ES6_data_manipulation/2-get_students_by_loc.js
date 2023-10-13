export default function getStudentsByLocation(getListStudents, city) {
  if (Array.isArray(getListStudents)) {
    // filter by student location
    const students = getListStudents.filter((student) => student.location === city);
    return students;
  }
  return [];
}
