import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-secretary-view-professor-coordinated-projects',
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './secretary-view-professor-coordinated-projects.component.html',
  styleUrl: './secretary-view-professor-coordinated-projects.component.css'
})
export class SecretaryViewProfessorCoordinatedProjectsComponent implements OnInit {
  professorId: string = '';
  professorName: string = 'Andrei Popa';
  projects: any[] = [];

  // Exemplu static – în practică, apelezi un API sau un service
  allProjects = [
    { id: 1, title: 'Aplicație Angular', student: 'Ion Popescu', status: 'acceptată', professorId: '1', professorName: "Incze Arpad"},
    { id: 2, title: 'ERP System', student: 'Maria Ionescu', status: 'în așteptare', professorId: '1', professorName: "Incze Arpad" },
    { id: 3, title: 'Website React', student: 'Alex Radu', status: 'acceptată', professorId: '2', professorName: "Maria Muntean" },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.professorId = this.route.snapshot.paramMap.get('id') ?? '';
    this.projects = this.allProjects.filter(p => p.professorId === this.professorId);
  }
}
