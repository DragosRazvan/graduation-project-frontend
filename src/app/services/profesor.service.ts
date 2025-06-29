import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professor } from '../interfaces/professor';
import { UpdateProjectRequest } from '../interfaces/update-project-request';
import { Project } from '../interfaces/project';
import { ProjectsCoordinatedByProfessor } from '../interfaces/projects-coordinated-by-professor';
import { UpdateProjectRequestProfessor } from '../interfaces/update-project-request-professor';
import { ProfessorOwnProject } from '../interfaces/professor-own-project';
import { ProjectDetails } from '../interfaces/project-details';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  private baseUrl = "https://localhost:7247/api/Professor";

  constructor(private http: HttpClient) { }

  getProfessorByEmail(email: string): Observable<Professor> {
    return this.http.get<Professor>(`${this.baseUrl}/GetProfessorByEmail/${email}`);
  }

  getProfessorById(id: number): Observable<Professor> {
    return this.http.get<Professor>(`${this.baseUrl}/GetProfessorById/${id}`);
  }

  getProfessorsByFacultyId(facultyId: number): Observable<Professor[]>{
    return this.http.get<Professor[]>(`${this.baseUrl}/GetProfessorsByFacultyId/${facultyId}`);
  }

  getProjects(professorId: number): Observable<ProjectsCoordinatedByProfessor[]> {
      return this.http.get<ProjectsCoordinatedByProfessor[]>(`${this.baseUrl}/GetAllProjectRequests/${professorId}`);
    }

  getOwnProjects(professorId: number): Observable<ProfessorOwnProject[]> {
      return this.http.get<ProfessorOwnProject[]>(`${this.baseUrl}/GetOwnProjects/${professorId}`);
    }
    
  updateProjectRequest(updateProjectRequestProfessor: UpdateProjectRequestProfessor): Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/UpdateProjectRequest`, updateProjectRequestProfessor);
  }

  addProjectIdea(project: Project): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/PostNewProjectIdea`, project);
  }

  updateProject(project: ProjectDetails, oldProjectTitle: string): Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/UpdateProjectIdea/${oldProjectTitle}`, project);
  }
}
