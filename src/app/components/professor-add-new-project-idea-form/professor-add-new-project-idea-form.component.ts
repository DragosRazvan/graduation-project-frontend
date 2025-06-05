import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-professor-add-new-project-idea-form',
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './professor-add-new-project-idea-form.component.html',
  styleUrl: './professor-add-new-project-idea-form.component.css'
})
export class ProfessorAddNewProjectIdeaFormComponent {
  formData = {
      inputOne: '',
      inputTwo: '',
      altSelect: ''
    };

  showWarning = false

    onSubmit() {
      if (!this.formData.inputOne || !this.formData.inputTwo) {
        this.showWarning = true;
      } else {
        this.showWarning = false;
        console.log('Form Submitted:', this.formData);
      }
    }
}
