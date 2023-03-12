import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminasiComponent } from './terminasi.component';

describe('TerminasiComponent', () => {
  let component: TerminasiComponent;
  let fixture: ComponentFixture<TerminasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminasiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
