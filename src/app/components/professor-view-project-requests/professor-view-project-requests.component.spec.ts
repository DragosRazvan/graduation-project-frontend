import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorViewOwnProjectIdeasComponent } from './professor-view-project-requests.component';

describe('ProfessorViewOwnProjectIdeasComponent', () => {
  let component: ProfessorViewOwnProjectIdeasComponent;
  let fixture: ComponentFixture<ProfessorViewOwnProjectIdeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorViewOwnProjectIdeasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorViewOwnProjectIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
