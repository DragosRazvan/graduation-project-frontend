import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-professor-view-own-project-ideas',
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './professor-view-project-requests.component.html',
  styleUrl: './professor-view-project-requests.component.css'
})
export class ProfessorViewProjectRequestsComponent {
projects = [
    { id: 1, title: 'Asistent AI', status: "acceptată", student: 'Ion Ionescu' },
    { id: 2, title: 'Blockchain Voting', status: "în așteptare", student: 'Andrei Mihai' },
    { id: 3, title: 'Stație vreme IoT', status: "în așteptare", student: 'Cosmin Ionel' }
  ];
}
