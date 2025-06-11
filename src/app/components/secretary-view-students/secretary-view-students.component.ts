import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-secretary-view-students',
  imports: [HeaderComponent, FooterComponent, RouterModule, CommonModule],
  templateUrl: './secretary-view-students.component.html',
  styleUrl: './secretary-view-students.component.css'
})
export class SecretaryViewStudentsComponent {
students = [
    { id: 1, name: 'Barbut Dragos-Razvan', hasProject:true},
    { id: 2, name: 'Dragan Andrei-Valentin', hasProject:false}
  ];
}
