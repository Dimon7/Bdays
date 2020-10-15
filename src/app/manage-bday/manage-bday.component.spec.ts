import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBdayComponent } from './manage-bday.component';

describe('ManageBdayComponent', () => {
  let component: ManageBdayComponent;
  let fixture: ComponentFixture<ManageBdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
