export interface Project {
    id: number | null;
    title: string;
    description: string;
    levelOfEducation: string | null;
    isAcceptedByProfessor: boolean;
    studentId: number | null;
    professorId: number;
}
