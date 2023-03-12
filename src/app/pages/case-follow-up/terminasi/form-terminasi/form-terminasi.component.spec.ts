import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTerminasiComponent } from './form-terminasi.component';

describe('FormTerminasiComponent', () => {
  let component: FormTerminasiComponent;
  let fixture: ComponentFixture<FormTerminasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTerminasiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTerminasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
