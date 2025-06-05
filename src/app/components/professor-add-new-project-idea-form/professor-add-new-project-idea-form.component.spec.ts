import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorAddNewProjectIdeaFormComponent } from './professor-add-new-project-idea-form.component';

describe('ProfessorAddNewProjectIdeaFormComponent', () => {
  let component: ProfessorAddNewProjectIdeaFormComponent;
  let fixture: ComponentFixture<ProfessorAddNewProjectIdeaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorAddNewProjectIdeaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorAddNewProjectIdeaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
