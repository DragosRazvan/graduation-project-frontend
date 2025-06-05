import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProjectRequestViewComponent } from './student-project-request-view.component';

describe('StudentProjectRequestViewComponent', () => {
  let component: StudentProjectRequestViewComponent;
  let fixture: ComponentFixture<StudentProjectRequestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentProjectRequestViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentProjectRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
