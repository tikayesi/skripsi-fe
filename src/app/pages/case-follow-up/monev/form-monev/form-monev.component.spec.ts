import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMonevComponent } from './form-monev.component';

describe('FormMonevComponent', () => {
  let component: FormMonevComponent;
  let fixture: ComponentFixture<FormMonevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMonevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMonevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
