import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingBdayComponent } from './upcoming-bday.component';

describe('UpcomingBdayComponent', () => {
  let component: UpcomingBdayComponent;
  let fixture: ComponentFixture<UpcomingBdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingBdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingBdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
