export interface ProjectDetails{
    id: number | null;
    title: string;
    description: string;
    levelOfEducation: string | null;
    isAcceptedByProfessor: boolean;
    statusProjectRequest: string;
    professorName: string;
    studentId: number | null;
    professorId: number;
}
