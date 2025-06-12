import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  students: any[] = []; // lista afișată în <ngFor>
  allStudents: any[] = []; // lista completă, fără filtrare
  showWithoutProjectOnly: boolean = false;

  ngOnInit() {
    // Poți înlocui această parte cu un apel API dacă e cazul
    this.allStudents = [
      { id: 1, name: 'Ion Popescu', project: 'Aplicație Angular', department: "Matemetică și Informatică"},
      { id: 2, name: 'Maria Ionescu', project: '', department: "Inginerie" },
      { id: 3, name: 'Alex Radu', project: null, department: "Inginerie" },
      { id: 4, name: 'Daria Stoica', project: 'Sistem ERP', department: "Matemetică și Informatică" }
    ];

    // La început afișăm toți studenții
    this.students = [...this.allStudents];
  }

  filterStudents() {
    if (this.showWithoutProjectOnly) {
      // Afișăm doar cei fără proiect
      this.students = this.allStudents.filter(
        student => !student.project || student.project.trim() === ''
      );
    } else {
      // Afișăm toți studenții
      this.students = [...this.allStudents];
    }
  }
}
