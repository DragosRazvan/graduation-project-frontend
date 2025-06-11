import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-secretary-view-professors',
  imports: [HeaderComponent, FooterComponent, RouterModule, CommonModule],
  templateUrl: './secretary-view-professors.component.html',
  styleUrl: './secretary-view-professors.component.css'
})
export class SecretaryViewProfessorsComponent {
professors = [
    { id: 1, name: 'Incze Arpad', departmentId: 1, department: "Matematica si Informatica"},
    { id: 2, name: 'Muntean Maria', departmentId: 1, department: "Matematica si Informatica"}
  ];
}
