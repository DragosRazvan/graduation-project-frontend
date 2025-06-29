import { Injectable } from '@angular/core';
import { Secretary } from '../interfaces/secretary';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecretaryService {
  private baseUrl = "https://localhost:7247/api/Secretary";

  constructor(private http: HttpClient) { }

  getSecretaryByEmail(email: string): Observable<Secretary>{
    return this.http.get<Secretary>(`${this.baseUrl}/GetSecretaryByEmail/${email}`);
  }
}

