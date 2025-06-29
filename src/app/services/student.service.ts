import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professor } from '../interfaces/professor';
import { UpdateProjectRequest } from '../interfaces/update-project-request';
import { Project } from '../interfaces/project';
import { Student } from '../interfaces/student';
import { Specialization } from '../interfaces/specialization';
import { StudentWithProject } from '../interfaces/student-with-project';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private baseUrl = 'https://localhost:7247/api/Student';

  constructor(private http: HttpClient) {}

  getStudentByEmail(email: string): Observable<Student> {
    //const body = { email };
    return this.http.get<Student>(`${this.baseUrl}/GetStudentByEmail/${email}`);
  }

  getStudentById(studentId: number | null): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/GetStudentById/${studentId}`);
  }

  getStudentSpecialization(specializationId: number): Observable<Specialization>{
    return this.http.get<Specialization>(`${this.baseUrl}/GetStudentSpecialization/${specializationId}`);
  }

  getStudentsByFacultyId(facultyId: number): Observable<StudentWithProject[]>{
    return this.http.get<StudentWithProject[]>(`${this.baseUrl}/GetStudentsByFacultyId/${facultyId}`);
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
