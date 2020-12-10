import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OxygenComponent } from './oxygen.component';

describe('OxygenComponent', () => {
  let component: OxygenComponent;
  let fixture: ComponentFixture<OxygenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OxygenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OxygenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
