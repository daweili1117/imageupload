import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeopleComponent } from './people/people.component';
import { TeamComponent } from './team/team.component';
import { DevicesComponent } from './devices/devices.component';
import { DeviceAssignmentComponent } from './device-assignment/device-assignment.component';
import { ThresholdComponent } from './threshold/threshold.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '', redirectTo:'/login', pathMatch: 'full' },
  // { path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'teams', component: TeamComponent },
  { path: 'devices', component: DevicesComponent },
  { path: 'device-assignment', component: DeviceAssignmentComponent },
  { path: 'thresholds', component: ThresholdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
