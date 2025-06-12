import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonEngine } from '@angular/ssr/node';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-secretary-view-departments',
  imports: [HeaderComponent, FooterComponent, CommonModule, RouterModule, FormsModule],
  templateUrl: './secretary-view-departments.component.html',
  styleUrl: './secretary-view-departments.component.css'
})
export class SecretaryViewDepartmentsComponent {
departments = [
    { id: 1, name: 'Matematica si Informatica'},
    { id: 2, name: 'Inginerie'}
  ];

  showAddDepartmentModal = false;
  showModifyDepartmentModal =  false;
  showDeleteDepartmentModal = false;

  openModal() {
    this.showAddDepartmentModal = true;
  }

  closeModal() {
    this.showAddDepartmentModal = false;
  }

  openModifyDepartmentModal(){
    this.showModifyDepartmentModal = true;
  }

  closeModifyDepartmentModal(){
    this.showModifyDepartmentModal = false;
  }

  openDeleteDepartmentModal(){
    this.showDeleteDepartmentModal = true;
  }

  closeDeleteDepartmentModal(){
    this.showDeleteDepartmentModal = false;
  }

  submitForm(data: any) {
    console.log('Form data:', data);
    this.closeModal();
  }
}
