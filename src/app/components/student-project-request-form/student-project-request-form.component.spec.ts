import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProjectRequestFormComponent } from './student-project-request-form.component';

describe('StudentProjectRequestFormComponent', () => {
  let component: StudentProjectRequestFormComponent;
  let fixture: ComponentFixture<StudentProjectRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentProjectRequestFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentProjectRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
