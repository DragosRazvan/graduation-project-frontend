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
    { id: 1, title: 'AI Assistant', status: "acceptată", student: 'Alice Johnson' },
    { id: 2, title: 'Blockchain Voting', status: "în așteptare", student: 'Bob Smith' },
    { id: 3, title: 'IoT Weather Station', status: "în așteptare", student: 'Charlie Brown' }
  ];
}
