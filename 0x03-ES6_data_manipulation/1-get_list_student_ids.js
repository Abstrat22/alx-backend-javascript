export default function getListStudentIds(objArray) {
  if (!Array.isArray(objArray)) {
    return [];
  }
  const ids = objArray.map((obj) => obj.id);
  return ids;
}
