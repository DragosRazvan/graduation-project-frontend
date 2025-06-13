import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryViewProfessorCoordinatedProjectsComponent } from './secretary-view-professor-coordinated-projects.component';

describe('SecretaryViewProfessorCoordinatedProjectsComponent', () => {
  let component: SecretaryViewProfessorCoordinatedProjectsComponent;
  let fixture: ComponentFixture<SecretaryViewProfessorCoordinatedProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretaryViewProfessorCoordinatedProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretaryViewProfessorCoordinatedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
