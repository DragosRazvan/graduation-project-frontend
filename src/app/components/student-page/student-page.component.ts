import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../services/student.service';
import { ProjectService } from '../../services/project.service';
import { SpecializationService } from '../../services/specialization.service';
import { Professor } from '../../interfaces/professor';
import {jwtDecode, JwtPayload} from  'jwt-decode';
import { Student } from '../../interfaces/student';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { Project } from '../../interfaces/project';
import { UpdateProjectRequest } from '../../interfaces/update-project-request';
import { ProjectDetails } from '../../interfaces/project-details';

@Component({
  selector: 'app-student-page',
  imports: [HeaderComponent, FooterComponent, FormsModule, CommonModule],
  templateUrl: './student-page.component.html',
  styleUrl: './student-page.component.css'
})
export class StudentPageComponent {
  student!: Student;
  project: any;
  projectDetailsDto: ProjectDetails = {
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
  showWarning: boolean = false;
  professors: Professor[] = [];
  departmentId: number = 0;
  availableProjects: Project[] = [];
  loading: boolean = true;

  formData = {
    professorSelect: 0,
    ownProjectIdea: false,
    ownProjectTitle: '',
    ownProjectDescription: '',
    professorProjectTitle: ''
  };

  constructor(
    private studentService: StudentService,
    private projectService: ProjectService,
    private specializationService: SpecializationService,
      @Inject(PLATFORM_ID) private platformId: Object

  ) {}

ngOnInit(): void {
  if (isPlatformBrowser(this.platformId)) {
  const token = localStorage.getItem('token');
  if (!token) return;

  try {
    const decodedToken: any = jwtDecode<JwtPayload>(token);
    const email = decodedToken.sub;

    this.studentService.getStudentByEmail(email).subscribe({
      next: (studentData) => {
        this.student = studentData;
        //this.loading = false;
        console.log("Student:", this.student);

        this.loadProjectDetailsByStudentId(this.student.id);

        if(this.projectDetailsDto == null){
          this.specializationService.getDepartmentIdBySpecializationId(this.student.specializationId).subscribe({
          next: (departmentId) => {
            this.departmentId = departmentId;
            console.log("Department ID:", this.departmentId);

            this.studentService.getAllProfessorsByDepartment(this.departmentId).subscribe({
              next: (profs) => {
                this.professors = profs;
                console.log("Professors:", this.professors);
              },
              error: (err) => console.error("Error fetching professors:", err)
            });
          },
          error: (err) => console.error("Error fetching departmentId:", err)
        });
        }

        // if (this.student.projectRequestId) {
        //   this.loadProjectDetails(this.student.projectRequestId);
        // }
        // else{
        //   //this.loadProjectDetailsByStudentId(this.student.id)
        //   this.loading = false;
        // }

        
      },
      error: (err) => {console.error("Error loading student:", err);
      this.loading = false;}
    });

  } catch (err) {
    console.error('Invalid token:', err);
  }
}
}


  loadProjectDetails(projectId: number): void {
    this.projectService.getProjectById(projectId).subscribe({
      next: (data) => this.projectDetailsDto = data,
      error: (err) => console.error('Error loading project:', err)
    });
  }

  loadProjectDetailsByStudentId(studentId: number): void {
    this.projectService.getProjectByStudentId(studentId).subscribe({
      next: (data) => this.projectDetailsDto = data,
      error: (err) => console.error('Error loading project:', err)
    });
  }

  loadProject(studentId: number): void {
    this.projectService.getProjectByStudentId(studentId).subscribe({
      next: (data) => this.projectDetailsDto = data,
      error: (err) => console.error('Error loading project:', err)
    });
  }

  onProfessorChange(event: any){
    const professorId = +event.target.value;
    //this.formData.professorSelect = professorId;

    this.projectService.getProjectsByProfessorId(professorId).subscribe({
      next: (projects) => {
        this.availableProjects = projects;
        this.formData.professorProjectTitle = ''; // reset selection
      },
      error: (err) => {
        console.error('Error fetching projects:', err);
        this.availableProjects = [];
      }
    });
  }

  onSubmit(): void {
    const formIsValid = this.formData.professorSelect &&
      (this.formData.ownProjectIdea
        ? this.formData.ownProjectTitle && this.formData.ownProjectDescription
        : this.formData.professorProjectTitle);

    this.showWarning = !formIsValid;

    if (!formIsValid) return;

    if (!this.formData.ownProjectIdea) {
      let updateRequest: UpdateProjectRequest = {
        projectRequestTitle: this.formData.professorProjectTitle,
        studentId: this.student.id
      };

      // ✅ PUT request: update own project idea
      this.studentService.updateProjectRequest(updateRequest).subscribe({
        next: (response) => {
          console.log('Own project updated:', response);
          // Add success UI if needed
        },
        error: (err) => {
          console.error('Update failed:', err);
        }
      });
    } 
    else {
      let payload: Project = {
        title: this.formData.ownProjectTitle,
        description: this.formData.ownProjectDescription,
        professorId: this.formData.professorSelect,
        isAcceptedByProfessor: false,
        studentId: this.student.id,
        levelOfEducation: null,
        id: null
      }

      // ✅ POST request: request a professor’s project
      this.studentService.submitProjectRequest(payload).subscribe({
        next: (response) => {
          console.log('Project request submitted:', response);
          // Add success UI if needed
        },
        error: (err) => {
          console.error('Submission failed:', err);
        }
      });
    }
    // Submit form logic goes here
    console.log('Submited form:', this.formData);
  }

  goBack(): void {
    window.history.back();
  }
}
