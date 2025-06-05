import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-student-project-request-form',
  imports: [CommonModule, FormsModule, FooterComponent, HeaderComponent],
  templateUrl: './student-project-request-form.component.html',
  styleUrl: './student-project-request-form.component.css'
})
export class StudentProjectRequestFormComponent {
  formData = {
    mainSelect: '',
    extraInputs: false,
    inputOne: '',
    inputTwo: '',
    altSelect: ''
  };

  showWarning = false;

  onSubmit() {
    if(this.formData.extraInputs){
      if (!this.formData.mainSelect || !this.formData.inputOne || !this.formData.inputTwo) {
        this.showWarning = true;
      } else {
        this.showWarning = false;
        console.log('Form Submitted:', this.formData);
      }
    }
    else{
         this.showWarning = true;
    }
  }
}
