import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceAssignmentComponent } from './device-assignment.component';

describe('DeviceAssignmentComponent', () => {
  let component: DeviceAssignmentComponent;
  let fixture: ComponentFixture<DeviceAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
