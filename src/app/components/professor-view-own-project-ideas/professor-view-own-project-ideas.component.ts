import { CommonModule } from '@angular/common';
import { compileComponentClassMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-professor-view-own-project-ideas',
  imports: [CommonModule, FooterComponent, HeaderComponent, RouterModule],
  templateUrl: './professor-view-own-project-ideas.component.html',
  styleUrl: './professor-view-own-project-ideas.component.css'
})
export class ProfessorViewOwnProjectIdeasComponent {
projects = [
    { id: 1, title: 'AI Assistant', status: "taken", student: 'Alice Johnson' }
  ];
}
