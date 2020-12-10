import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OxygenDialogComponent } from './oxygen-dialog.component';

describe('OxygenDialogComponent', () => {
  let component: OxygenDialogComponent;
  let fixture: ComponentFixture<OxygenDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OxygenDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OxygenDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
