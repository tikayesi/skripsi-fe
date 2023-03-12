import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAssesmentComponent } from './list-assesment.component';

describe('ListAssesmentComponent', () => {
  let component: ListAssesmentComponent;
  let fixture: ComponentFixture<ListAssesmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAssesmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
