// eslint-disable-next-line @typescript-eslint/no-namespace, @typescript-eslint/no-unused-vars
namespace Subjects{
    export class Subject{
        teacher: Teacher;
        setTeacher(teacher: Teacher): void{
            this.teacher = teacher;
        }
    }
}