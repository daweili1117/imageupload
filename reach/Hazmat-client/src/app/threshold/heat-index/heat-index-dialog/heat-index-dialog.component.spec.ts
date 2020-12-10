import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatIndexDialogComponent } from './heat-index-dialog.component';

describe('HeatIndexDialogComponent', () => {
  let component: HeatIndexDialogComponent;
  let fixture: ComponentFixture<HeatIndexDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatIndexDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatIndexDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
