import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTerminasiComponent } from './list-terminasi.component';

describe('ListTerminasiComponent', () => {
  let component: ListTerminasiComponent;
  let fixture: ComponentFixture<ListTerminasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTerminasiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTerminasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
