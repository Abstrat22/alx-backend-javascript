interface Teacher{
    readonly firstName: string; // readonly ensures that the value cannot be modified after initializtion
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}


interface Directors extends Teacher{
    numberOfReports: number;
}

// eslint-disable-next-line @typescript-eslint/class-name-casing
interface printTeacherFunction{
    // define a signature for a function that takes sting params and returns a string 
    (firstName: string, lastName: string): string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const firstInitial = firstName.charAt(0);
    return `${firstInitial}. ${lastName}`;
}

interface StudentInterface {
    // Signature for StudentClass
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;

}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
        
    workOnHomework(): string{
        return 'Currently working';
    }
    displayName(): string{
        return this.firstName;
    }
}

// Example usage:
const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName());     // Output: John