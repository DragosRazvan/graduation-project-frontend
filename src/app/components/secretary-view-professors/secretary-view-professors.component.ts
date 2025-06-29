import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { Professor } from '../../interfaces/professor';
import { SecretaryService } from '../../services/secretary.service';
import { Secretary } from '../../interfaces/secretary';
import { ProfesorService } from '../../services/profesor.service';

@Component({
  selector: 'app-secretary-view-professors',
  imports: [HeaderComponent, FooterComponent, RouterModule, CommonModule],
  templateUrl: './secretary-view-professors.component.html',
  styleUrl: './secretary-view-professors.component.css'
})
export class SecretaryViewProfessorsComponent {
// professors = [
//     { id: 1, name: 'Incze Arpad', departmentId: 1, department: "Matematica si Informatică"},
//     { id: 2, name: 'Muntean Maria', departmentId: 1, department: "Matematica si Informatică"}
//   ];

  loading: boolean = true;
  previousUrl: string = '';
  professors: Professor[] = [];
  secretary!: Secretary;

  constructor(
    private professorService: ProfesorService,
    private secretaryService: SecretaryService,
    private navigationService: NavigationService,
    @Inject(PLATFORM_ID) private platformId: Object
  ){}

  ngOnInit(): void{
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');

      if (!token) {
        this.loading = false;
        return;
      }

      this.previousUrl = this.navigationService.getPreviousUrl();
      console.log('Came from:', this.previousUrl);
    
      try {
        const decodedToken: any = jwtDecode<JwtPayload>(token);
        const email = decodedToken.sub;

        this.secretaryService.getSecretaryByEmail(email).subscribe({
          next: (secretaryData) => {
            this.secretary = secretaryData;
            console.log("Secretary: ", this.secretary);

            if(this.secretary){
              this.loadProfessors(this.secretary.facultyId);
            }else {
              this.loading = false;
            }
          },
          error: () => {
            this.loading = false;
          }
        });
      }
       catch (err) {
        console.error('Invalid token:', err);
      }
    }
  }

  loadProfessors(facultyId: number): void {
    this.professorService.getProfessorsByFacultyId(facultyId).subscribe({
      next: (data) => { this.professors = data; this.loading = false; console.log(this.professors);},
      error: (err) => { console.error('Error loading projects:', err); this.loading = false;}
    });
  }
}
