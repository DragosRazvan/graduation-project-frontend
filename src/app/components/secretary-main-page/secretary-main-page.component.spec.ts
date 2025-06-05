import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryMainPageComponent } from './secretary-main-page.component';

describe('SecretaryMainPageComponent', () => {
  let component: SecretaryMainPageComponent;
  let fixture: ComponentFixture<SecretaryMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretaryMainPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretaryMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
