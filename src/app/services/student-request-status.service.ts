import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentRequestStatusService {
  constructor(private httpClient: HttpClient) { }

  checkRequestStatus(): Observable<{approved: boolean}>{
    return this.httpClient.get<{approved: boolean}>('/api/student/ProjectRequestStatus');
  }
}
