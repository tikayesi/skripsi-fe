import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervensiComponent } from './intervensi.component';

describe('IntervensiComponent', () => {
  let component: IntervensiComponent;
  let fixture: ComponentFixture<IntervensiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervensiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
