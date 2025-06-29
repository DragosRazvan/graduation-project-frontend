import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ProfesorService } from '../../services/profesor.service';
import { ProjectsCoordinatedByProfessor } from '../../interfaces/projects-coordinated-by-professor';
import { Professor } from '../../interfaces/professor';

@Component({
  selector: 'app-secretary-view-professor-coordinated-projects',
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './secretary-view-professor-coordinated-projects.component.html',
  styleUrl: './secretary-view-professor-coordinated-projects.component.css'
})
export class SecretaryViewProfessorCoordinatedProjectsComponent implements OnInit {
  professorId: number = 0;
  professorName: string = 'Andrei Popa';
  projects: any[] = [];
  professor!: Professor;

  professorProjects: ProjectsCoordinatedByProfessor[] = [];

  constructor(
    private professorService: ProfesorService,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {

      this.professorId = Number(this.route.snapshot.paramMap.get('id'));
      //this.projects = this.allProjects.filter(p => p.professorId === this.professorId);
    
      this.professorService.getProfessorById(this.professorId).subscribe({
        next: (professorData) => {
          this.professor = professorData;
          console.log("Professor: ", this.professor);

          if(this.professor == null)
            return;

          this.professorService.getProjects(this.professorId).subscribe({
            next: (data) => {
              this.professorProjects = data;
              console.log("Professor projects: ", this.professorProjects);
            }
          })
        }
      })
      
    }
  }
}
