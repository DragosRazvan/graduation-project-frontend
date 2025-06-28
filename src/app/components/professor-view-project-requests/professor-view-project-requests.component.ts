import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import {jwtDecode, JwtPayload} from  'jwt-decode';
import { ProfesorService } from '../../services/profesor.service';
import { Professor } from '../../interfaces/professor';
import { ProjectsCoordinatedByProfessor } from '../../interfaces/projects-coordinated-by-professor';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-professor-view-own-project-ideas',
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './professor-view-project-requests.component.html',
  styleUrl: './professor-view-project-requests.component.css'
})
export class ProfessorViewProjectRequestsComponent {
  professor!: Professor;
  professorCoordinatedProjects: ProjectsCoordinatedByProfessor[] = [];
  loading: boolean = true;
  previousUrl: string = '';

  constructor(
    private navigationService: NavigationService,
    private professorService: ProfesorService,
    @Inject(PLATFORM_ID) private platformId: Object
  ){}

  projects = [
      { id: 1, title: 'Asistent AI', status: "acceptată", student: 'Ion Ionescu' },
      { id: 2, title: 'Blockchain Voting', status: "în așteptare", student: 'Andrei Mihai' },
      { id: 3, title: 'Stație vreme IoT', status: "în așteptare", student: 'Cosmin Ionel' }
  ];

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

        this.professorService.getProfessorByEmail(email).subscribe({
          next: (professorData) => {
            this.professor = professorData;
            console.log("Professor: ", this.professor);

            if(this.professor){
              this.loadProjects(this.professor.id);
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

  loadProjects(professorId: number): void {
    this.professorService.getProjects(professorId).subscribe({
      next: (data) => { this.professorCoordinatedProjects = data; this.loading = false; console.log(this.professorCoordinatedProjects);},
      error: (err) => { console.error('Error loading projects:', err); this.loading = false;}
    });
  }
}
