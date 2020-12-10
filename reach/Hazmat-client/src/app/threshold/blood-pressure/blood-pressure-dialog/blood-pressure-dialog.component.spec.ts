import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodPressureDialogComponent } from './blood-pressure-dialog.component';

describe('BloodPressureDialogComponent', () => {
  let component: BloodPressureDialogComponent;
  let fixture: ComponentFixture<BloodPressureDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodPressureDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodPressureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
