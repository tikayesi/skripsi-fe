import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMonevComponent } from './list-monev.component';

describe('ListMonevComponent', () => {
  let component: ListMonevComponent;
  let fixture: ComponentFixture<ListMonevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMonevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMonevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
