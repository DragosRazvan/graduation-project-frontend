import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-student-project-request-view',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './student-project-request-view.component.html',
  styleUrl: './student-project-request-view.component.css'
})
export class StudentProjectRequestViewComponent {
project = {
    title: 'AI Research Assistant',
    description: 'A system that uses natural language processing to assist researchers.',
    professor: 'Dr. Jane Smith'
  };

  goBack() {
    window.history.back();
  }
}
