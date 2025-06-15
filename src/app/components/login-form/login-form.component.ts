import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from '../../interfaces/jwt-payload';

@Component({
  selector: 'app-login-form',
  imports: [CommonModule, FormsModule, RouterModule,  FooterComponent, HeaderComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private http: HttpClient, private router: Router){}



  login(){
    console.log('Logging in with email: ', this.email, " and password: ", this.password);

    const body = {
      email: this.email,
      password: this.password
    };

    this.http.post<{ token: string }>('https://localhost:7247/api/Auth/Login', body)
      .subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
          console.log('Login successful. Token:', res.token);

          const token = localStorage.getItem('token'); // or wherever you store it
          var role:string | undefined= '';
          if (token) {
            const decoded = jwtDecode<JwtPayload>(token);
            role = decoded.role;
            console.log('role:', role); // e.g., "student", "professor"
          }

          if (role === 'secretary') {
            this.router.navigate(['/SecretaryMainPage']);
          }
          else if(role === 'student'){
            this.router.navigate(['/StudentPage']);
          }
          else if(role === 'professor'){
            this.router.navigate(['/ProfessorViewProjectRequests']);
          }
        },
        error: (err) => {
          this.error = 'Invalid credentials.';
          console.error(err);
        }
      });
  }
}
