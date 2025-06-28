import { Student } from "./student";

export interface ProjectsCoordinatedByProfessor {
    id: number | null;
    title: string;
    description: string;
    levelOfEducation: string | null;
    isAcceptedByProfessor: boolean;
    status: string;
    student: Student | null;
    professorId: number;
}
