var Director = /** @class */ (function () {
    function Director() {
        this.workFromHome = function () { return 'Working from home'; };
        this.getCoffeeBreak = function () { return 'Getting a coffee break'; };
        this.workDirectorTasks = function () { return 'Getting to director tasks'; };
    }
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
        this.workFromHome = function () { return 'Cannot work from home'; };
        this.getCoffeeBreak = function () { return 'Cannot have a break'; };
        this.workTeacherTasks = function () { return 'Getting to work'; };
    }
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof (salary) === "number" && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
//Teacher
console.log(createEmployee(200));
//Director
console.log(createEmployee(1000));
//Director
console.log(createEmployee('$500'));
