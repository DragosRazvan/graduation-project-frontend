import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonEngine } from '@angular/ssr/node';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-secretary-view-departments',
  imports: [HeaderComponent, FooterComponent, CommonModule, RouterModule],
  templateUrl: './secretary-view-departments.component.html',
  styleUrl: './secretary-view-departments.component.css'
})
export class SecretaryViewDepartmentsComponent {
departments = [
    { id: 1, name: 'Matematica si Informaticagerwtgerheryhrvafefvebvtcavgaefaevresvsvavavav wgbsrbsb srbsbw bb gbgsbs bsdbsbsbsbsfgbsbhbrssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'},
    { id: 2, name: 'Inginerie'}
  ];
}
