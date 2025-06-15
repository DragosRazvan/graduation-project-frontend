import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professor } from '../interfaces/professor';
import { UpdateProjectRequest } from '../interfaces/update-project-request';
import { Project } from '../interfaces/project';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private baseUrl = 'https://localhost:7247/api/Student';

  constructor(private http: HttpClient) {}

  getStudentByEmail(email: string): Observable<any> {
    const body = { email };
    return this.http.post<any>(`${this.baseUrl}/GetStudentByEmail`, body);
  }

  getAllProfessorsByDepartment(departmentId: number): Observable<Professor[]> {
    return this.http.get<Professor[]>(`https://localhost:7247/api/Professor/GetProfessorsByDepartment/${departmentId}`);
  }

  updateProjectRequest(updateProjectRequest: UpdateProjectRequest): Observable<any>{
    return this.http.put(`${this.baseUrl}/UpdateProjectRequest`, updateProjectRequest);
  }

  submitProjectRequest(projectModel: Project): Observable<any> {
    return this.http.post(`${this.baseUrl}/PostProjectRequest`, projectModel);
  }
}
