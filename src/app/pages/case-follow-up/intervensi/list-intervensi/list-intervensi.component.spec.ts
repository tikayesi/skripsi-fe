import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIntervensiComponent } from './list-intervensi.component';

describe('ListIntervensiComponent', () => {
  let component: ListIntervensiComponent;
  let fixture: ComponentFixture<ListIntervensiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIntervensiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListIntervensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
