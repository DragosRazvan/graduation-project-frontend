import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { SecretaryService } from '../../services/secretary.service';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { Secretary } from '../../interfaces/secretary';
import { StudentWithProject } from '../../interfaces/student-with-project';

@Component({
  selector: 'app-secretary-view-students',
  imports: [HeaderComponent, FooterComponent, RouterModule, CommonModule, FormsModule],
  templateUrl: './secretary-view-students.component.html',
  styleUrl: './secretary-view-students.component.css'
})
export class SecretaryViewStudentsComponent implements OnInit {
// students = [
//     { id: 1, name: 'Barbut Dragos-Razvan', project: "AI Chatbot"},
//     { id: 2, name: 'Dragan Andrei-Valentin', project: null}
//   ];

//   filteredStudents = [...this.students];

//   showWithoutProjectOnly = false;
// ngOnInit() {
//     // La început afișăm toți studenții
//     this.filteredStudents = [...this.students];
//   }
//   filterStudents() {
//     if (this.showWithoutProjectOnly) {
//       this.filteredStudents = this.students.filter(
//         student => !student.project || student.project.trim() === ''
//       );
//     } else {
//       this.filteredStudents = this.students.filter(
//         student => student.project && student.project.trim() !== ''
//       );
//     }
//   }

  students: StudentWithProject[] = []; // lista afișată în <ngFor>
  allStudents: StudentWithProject[] = []; // lista completă, fără filtrare
  showWithoutProjectOnly: boolean = false;
  loading: boolean = true;
  secretary!: Secretary;

  constructor(
    private secretaryService: SecretaryService,
    private studentService: StudentService,
    @Inject(PLATFORM_ID) private platformId: Object
  ){}

  ngOnInit() {
    // Poți înlocui această parte cu un apel API dacă e cazul
    // this.allStudents = [
    //   { id: 1, name: 'Ion Popescu', project: 'Aplicație Angular', specializare: "Informatică"},
    //   { id: 2, name: 'Maria Ionescu', project: '', specializare: "PABD" },
    //   { id: 3, name: 'Alex Radu', project: null, specializare: "Informatică" },
    //   { id: 4, name: 'Daria Stoica', project: 'Sistem ERP', specializare: "PABD" }
    // ];

    // La început afișăm toți studenții
    //this.students = [...this.allStudents];

  if (isPlatformBrowser(this.platformId)) {
    const token = localStorage.getItem('token');
    
    if (!token) {
      this.loading = false;
      return;
    }
  
    try {
      const decodedToken: any = jwtDecode<JwtPayload>(token);
      const email = decodedToken.sub;
      this.secretaryService.getSecretaryByEmail(email).subscribe({
        next: (secretaryData) => {
          this.secretary = secretaryData;
          console.log("Secretary: ", this.secretary);

          this.studentService.getStudentsByFacultyId(this.secretary.facultyId).subscribe({
            next: (studentsData) => {
              this.students = studentsData;
              this.allStudents = this.students;
              console.log("Students: ", this.students);
            }
          })
        }
      })
    }
    catch (err) {
      console.error('Invalid token:', err);
    }
  }
}

  filterStudents() {
    if (this.showWithoutProjectOnly) {
      // Afișăm doar cei fără proiect
      this.students = this.allStudents.filter(
        student => !student.projectTitle || student.projectTitle.trim() === '' || student.projectStatus === 'în așteptare'
      );
    } else {
      // Afișăm toți studenții
      this.students = [...this.allStudents];
    }
  }
}
