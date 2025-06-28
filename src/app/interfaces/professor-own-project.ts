import { Student } from "./student";

export interface ProfessorOwnProject {
    id: number,
    title: string,
    levelOfEducation: string,
    profesorId: number,
    student: Student | null
}
