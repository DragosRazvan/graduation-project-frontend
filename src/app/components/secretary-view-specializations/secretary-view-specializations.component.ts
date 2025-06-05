import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-secretary-view-specializations',
  imports: [HeaderComponent, FooterComponent, RouterModule, CommonModule],
  templateUrl: './secretary-view-specializations.component.html',
  styleUrl: './secretary-view-specializations.component.css'
})
export class SecretaryViewSpecializationsComponent {
  specializations = [
      { id: 1, name: 'Informatica', departmentId: 1},
      { id: 2, name: 'PABD', departmentId: 1}
    ];
}
