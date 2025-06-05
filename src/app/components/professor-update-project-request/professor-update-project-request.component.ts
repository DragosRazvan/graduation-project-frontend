import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-professor-update-project-request',
  imports: [HeaderComponent, FooterComponent ],
  templateUrl: './professor-update-project-request.component.html',
  styleUrl: './professor-update-project-request.component.css'
})
export class ProfessorUpdateProjectRequestComponent {
  project = {
    title: 'Online Gym Store',
    description: "An online gym store",
    studentName: "Barbut Dragos",
    levelOfStudy: "Master",
    specialization: "PABD"
  }

  public acceptProjectRequest(){}

  public rejectProjectRequest(){}
}
