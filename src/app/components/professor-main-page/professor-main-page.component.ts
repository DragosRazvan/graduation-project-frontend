import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-professor-main-page',
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './professor-main-page.component.html',
  styleUrl: './professor-main-page.component.css'
})
export class ProfessorMainPageComponent {

}
