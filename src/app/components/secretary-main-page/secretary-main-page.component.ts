import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-secretary-main-page',
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './secretary-main-page.component.html',
  styleUrl: './secretary-main-page.component.css'
})
export class SecretaryMainPageComponent {

}
