import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { ProjectDetails } from '../../interfaces/project-details';
import { StudentService } from '../../services/student.service';
import { Student } from '../../interfaces/student';
import { Specialization } from '../../interfaces/specialization';
import { UpdateProjectRequestProfessor } from '../../interfaces/update-project-request-professor';
import { ProfesorService } from '../../services/profesor.service';
import { Router } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-professor-update-project-request',
  imports: [HeaderComponent, FooterComponent, CommonModule, FormsModule],
  templateUrl: './professor-update-project-request.component.html',
  styleUrl: './professor-update-project-request.component.css'
})
export class ProfessorUpdateProjectRequestComponent {
  constructor(
    private navigationService: NavigationService,
    private router: Router,
    private professorService: ProfesorService,
    private studentService: StudentService,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  // project = {
  //   title: 'Asistent AI',
  //   description: "Un asistent AI",
  //   studentName: "Ion Ionescu",
  //   IsAccepted: false,
  //   levelOfStudy: "Master",
  //   specialization: "PABD"
  // }

  previousUrl: string = '';

  project: ProjectDetails = {
    id: 0,
    title: '',
    description: '',
    isAcceptedByProfessor: false,
    statusProjectRequest: '',
    levelOfEducation: '',
    professorName: '',
    studentId: 0,
    professorId: 0
  };

  beforeUpdateProjectData: ProjectDetails = {
    id: 0,
    title: '',
    description: '',
    isAcceptedByProfessor: false,
    statusProjectRequest: '',
    levelOfEducation: '',
    professorName: '',
    studentId: 0,
    professorId: 0
  };

  student: Student = {
    id: 0,
    firstName: '',
    secondName: '',
    email: '',
    specializationId: 0,
    projectRequestId: 0
  }

  loading: boolean = true;
  specialization: Specialization = {
    name: '',
    departmentId: 0,
    levelOfEducation: ''
  };

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.previousUrl = this.navigationService.getPreviousUrl();
      console.log('Came from:', this.previousUrl);

      var projectRequestId: number = Number(this.route.snapshot.paramMap.get('projectRequestId'));
      console.log("project request id: " + projectRequestId); // Use as needed 
    
      this.projectService.getProjectById(projectRequestId).subscribe({
        next: (data) => {
          this.project = data;
          this.beforeUpdateProjectData = this.project;
          console.log("project: ", this.project);

          if(this.previousUrl.includes("ProfessorViewProjectRequests")){

          if(this.project){
            this.studentService.getStudentById(this.project.studentId).subscribe({
              next: (studentData) => {
                this.student = studentData;
                console.log("student: ", this.student);

                if(this.student){
                  this.studentService.getStudentSpecialization(this.student.specializationId).subscribe({
                    next: (specializationData) => {
                      this.specialization = specializationData;
                      console.log(this.specialization);
                    }
                  })
                }
                else{
                  this.loading = false;
                }
              }
            })
          }
        }
          else{
            this.loading = false;
          }
        },
        error: () => {
          this.loading = false;
        }
      })
    } 
  }

  public acceptProjectRequest(){
    var updateProjectRequestDto: UpdateProjectRequestProfessor = {
      projectRequestId: this.project.id,
      accepted: true
    };

    this.professorService.updateProjectRequest(updateProjectRequestDto).subscribe({
      next: (response) => {
          console.log('Project accepted:', response);
          // Add success UI if needed
          this.router.navigate(['/ProfessorViewProjectRequests']);
        },
        error: (err) => {
          console.error('Update failed:', err);
        }
    });
  }

  public rejectProjectRequest(){
    var updateProjectRequestDto: UpdateProjectRequestProfessor = {
      projectRequestId: this.project.id,
      accepted: false
    };

    this.professorService.updateProjectRequest(updateProjectRequestDto).subscribe({
      next: (response) => {
          console.log('Project rejected:', response);
          // Add success UI if needed
          this.router.navigate(['/ProfessorViewProjectRequests']);
        },
        error: (err) => {
          console.error('Update failed:', err);
        }
    });
  }

  updateProject() {
    this.professorService.updateProject(this.project, this.beforeUpdateProjectData.title).subscribe({
      next: (updated) => {
        console.log('Project updated:', updated);
        alert('Proiectul a fost actualizat cu succes!');
        // Optionally navigate away or refresh state
        this.router.navigate(['/ProfessorViewOwnProjectIdeas']);
        
      },
      error: (err) => {
        console.error('Error updating project:', err);
        alert('A apărut o eroare la actualizarea proiectului.');
      }
    });
    console.log('Project updated:', this.project);
  }
}
