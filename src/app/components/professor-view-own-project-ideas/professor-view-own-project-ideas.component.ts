import { CommonModule, isPlatformBrowser } from '@angular/common';
import { compileComponentClassMetadata } from '@angular/compiler';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Professor } from '../../interfaces/professor';
import { ProfesorService } from '../../services/profesor.service';
import { ProfessorOwnProject } from '../../interfaces/professor-own-project';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-professor-view-own-project-ideas',
  imports: [CommonModule, FooterComponent, HeaderComponent, RouterModule],
  templateUrl: './professor-view-own-project-ideas.component.html',
  styleUrl: './professor-view-own-project-ideas.component.css'
})
export class ProfessorViewOwnProjectIdeasComponent {
  professor!: Professor;
  projects: ProfessorOwnProject[] = [];
  loading: boolean = true;
  previousUrl: string = '';

  constructor(
    private navigationService: NavigationService,
    private professorService: ProfesorService,
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
    this.professorService.getOwnProjects(professorId).subscribe({
      next: (data) => { this.projects = data; this.loading = false; console.log(this.projects);},
      error: (err) => { console.error('Error loading projects:', err); this.loading = false;}
    });
  }
}
