interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
// Statically use Student type for the object
const student1: Student = {
    firstName: 'Francis',
    lastName: 'Anane',
    age: 100,
    location: 'Kumasi'
}

const student2: Student = {
    firstName: 'Nana',
    lastName: 'Kwame',
    age: 150,
    location: 'Kumasi'
}

const studentsList = Array<Student>(student1,student2);
console.log(studentsList);