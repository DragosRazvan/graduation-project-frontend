export interface Project {
    id: number | null;
    title: string;
    description: string;
    levelOfEducation: string | null;
    studentId: number | null;
    professorId: number;
}
