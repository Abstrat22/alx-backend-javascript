export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      const keys = Object.keys(employeesList);
      return keys.length;
    },
  };
}
