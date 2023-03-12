import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIntervensiComponent } from './form-intervensi.component';

describe('FormIntervensiComponent', () => {
  let component: FormIntervensiComponent;
  let fixture: ComponentFixture<FormIntervensiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormIntervensiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormIntervensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
