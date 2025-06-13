import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professor-update-project-request',
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './professor-update-project-request.component.html',
  styleUrl: './professor-update-project-request.component.css'
})
export class ProfessorUpdateProjectRequestComponent {
  project = {
    title: 'Asistent AI',
    description: "Un asistent AI",
    studentName: "Ion Ionescu",
    IsAccepted: false,
    levelOfStudy: "Master",
    specialization: "PABD"
  }

  public acceptProjectRequest(){}

  public rejectProjectRequest(){}
}
