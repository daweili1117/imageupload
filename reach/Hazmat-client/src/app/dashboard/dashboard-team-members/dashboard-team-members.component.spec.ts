import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTeamMembersComponent } from './dashboard-team-members.component';

describe('DashboardTeamMembersComponent', () => {
  let component: DashboardTeamMembersComponent;
  let fixture: ComponentFixture<DashboardTeamMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTeamMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTeamMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
