import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartRateAddComponent } from './heart-rate-add.component';

describe('HeartRateAddComponent', () => {
  let component: HeartRateAddComponent;
  let fixture: ComponentFixture<HeartRateAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeartRateAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartRateAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
