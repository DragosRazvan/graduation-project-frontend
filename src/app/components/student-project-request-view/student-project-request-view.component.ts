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
    title: 'Asistent de cercetare AI',
    description: 'Un sistem care folosește procesarea limbajului natural pentru a ajuta cercetătorii.',
    professor: 'Muntean Maria'
  };

  goBack() {
    window.history.back();
  }
}
