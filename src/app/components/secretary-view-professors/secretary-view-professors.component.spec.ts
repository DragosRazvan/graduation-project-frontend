import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryViewProfessorsComponent } from './secretary-view-professors.component';

describe('SecretaryViewProfessorsComponent', () => {
  let component: SecretaryViewProfessorsComponent;
  let fixture: ComponentFixture<SecretaryViewProfessorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretaryViewProfessorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretaryViewProfessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
