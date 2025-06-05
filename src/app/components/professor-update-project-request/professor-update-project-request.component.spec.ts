import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorUpdateProjectRequestComponent } from './professor-update-project-request.component';

describe('ProfessorUpdateProjectRequestComponent', () => {
  let component: ProfessorUpdateProjectRequestComponent;
  let fixture: ComponentFixture<ProfessorUpdateProjectRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorUpdateProjectRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorUpdateProjectRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
