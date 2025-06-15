import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpecializationService {
  private baseUrl = 'https://localhost:7247/api/Specialization';

  constructor(private http: HttpClient) {}

  getDepartmentIdBySpecializationId(specializationId: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/${specializationId}/GetDepartmentId`);
  }
}

