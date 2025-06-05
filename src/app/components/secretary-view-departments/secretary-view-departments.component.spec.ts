import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryViewDepartmentsComponent } from './secretary-view-departments.component';

describe('SecretaryViewDepartmentsComponent', () => {
  let component: SecretaryViewDepartmentsComponent;
  let fixture: ComponentFixture<SecretaryViewDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretaryViewDepartmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretaryViewDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
