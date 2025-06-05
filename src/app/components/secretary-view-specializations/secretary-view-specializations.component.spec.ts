import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryViewSpecializationsComponent } from './secretary-view-specializations.component';

describe('SecretaryViewSpecializationsComponent', () => {
  let component: SecretaryViewSpecializationsComponent;
  let fixture: ComponentFixture<SecretaryViewSpecializationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretaryViewSpecializationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretaryViewSpecializationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
