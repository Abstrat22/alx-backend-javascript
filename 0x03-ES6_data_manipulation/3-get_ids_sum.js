export default function getStudentIdsSum(getListStudents) {
  if (Array.isArray(getListStudents)) {
    // sum the student ids with reduce
    const initialValue = 0; // to determing the accumulator's initial value
    const sumOfIds = getListStudents.reduce((
      accumulator, currentStudent,
    ) => accumulator + currentStudent.id, initialValue);
    return sumOfIds;
  }
  return 0;
}
