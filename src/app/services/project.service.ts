import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../interfaces/project';
import { ProjectDetails } from '../interfaces/project-details';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl = 'https://localhost:7247/api/Project';

  constructor(private http: HttpClient) { }

  getProjectById(id: number): Observable<ProjectDetails> {
    return this.http.get<ProjectDetails>(`${this.baseUrl}/${id}`);
  } 

  getProjectsByProfessorId(professorId: number): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/GetProjectsByProfessorId/${professorId}`);
  }
}
