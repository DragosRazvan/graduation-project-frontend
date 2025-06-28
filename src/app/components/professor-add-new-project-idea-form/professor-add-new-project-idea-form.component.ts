import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ProfesorService } from '../../services/profesor.service';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { Professor } from '../../interfaces/professor';
import { Project } from '../../interfaces/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor-add-new-project-idea-form',
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './professor-add-new-project-idea-form.component.html',
  styleUrl: './professor-add-new-project-idea-form.component.css'
})

export class ProfessorAddNewProjectIdeaFormComponent {
  constructor(
    private router: Router,
    private professorService: ProfesorService,
    @Inject(PLATFORM_ID) private platformId: Object
  ){};

  formData = {
      projectTitle: '',
      projectDescription: '',
      LevelOfEducation: ''
    };

  showWarning = false
  loading: boolean = true;
  professor!: Professor;


   ngOnInit(): void{
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');

      if (!token) {
        this.loading = false;
        return;
      }
    
      try {
        const decodedToken: any = jwtDecode<JwtPayload>(token);
        const email = decodedToken.sub;

        this.professorService.getProfessorByEmail(email).subscribe({
          next: (professorData) => {
            this.professor = professorData;
            console.log("Professor: ", this.professor);
          }
        });
      }
      catch (err) {
        console.error('Invalid token:', err);
      }
    }
  }

  onSubmit() {
    const formIsValid = this.formData.LevelOfEducation && this.formData.projectDescription && this.formData.projectTitle;

    this.showWarning = !formIsValid;

    if(!formIsValid) return;

    let payload: Project = {
      title: this.formData.projectTitle,
      description: this.formData.projectDescription,
      professorId: this.professor.id,
      isAcceptedByProfessor: false,
      studentId: null,
      levelOfEducation: this.formData.LevelOfEducation,
      id: null
    }

    this.professorService.addProjectIdea(payload).subscribe({
      next: (response) => {
        console.log('New project added successfully: ', response);
        this.router.navigate(['/ProfessorViewOwnProjectIdeas']);
      },
      error: (err) => {
        console.error('Submission failed: ',err);
      }
    })
    console.log("Submited form: ", this.formData);
  }
}
