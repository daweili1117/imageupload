import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from "./material/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module/demo-material-module.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './dialog/dialog.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PeopleAddComponent } from './people/people-add/people-add.component';
import { PeopleComponent } from './people/people.component';
import { TeamComponent } from './team/team.component';
import { HeartRateComponent } from './threshold/heart-rate/heart-rate.component';
import { HeatIndexComponent } from './threshold/heat-index/heat-index.component';
import { ThresholdComponent } from './threshold/threshold.component';
import { DevicesComponent } from './devices/devices.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeviceAssignmentComponent } from './device-assignment/device-assignment.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BloodPressureComponent } from './threshold/blood-pressure/blood-pressure.component';
import { OxygenComponent } from './threshold/oxygen/oxygen.component';
import { DashboardTeamsComponent } from './dashboard/dashboard-teams/dashboard-teams.component';
import { DashboardTeamMembersComponent } from './dashboard/dashboard-team-members/dashboard-team-members.component';
import { DevicesAddComponent } from './devices/devices-add/devices-add.component';
import { MatDialogRef } from '@angular/material/dialog';
import { HeartRateAddComponent } from './threshold/heart-rate/heart-rate-add/heart-rate-add.component';
import { OxygenDialogComponent } from './threshold/oxygen/oxygen-dialog/oxygen-dialog.component';
import { HeatIndexDialogComponent } from './threshold/heat-index/heat-index-dialog/heat-index-dialog.component';
import { BloodPressureDialogComponent } from './threshold/blood-pressure/blood-pressure-dialog/blood-pressure-dialog.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { MaterialFileInputModule } from 'ngx-material-file-input';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    HomeComponent,
    LoginComponent,
    PeopleAddComponent,
    PeopleComponent,
    TeamComponent,
    HeartRateComponent,
    HeatIndexComponent,
    ThresholdComponent,
    DevicesComponent,
    DashboardComponent,
    DeviceAssignmentComponent,
    AppBarComponent,
    BloodPressureComponent,
    OxygenComponent,
    DashboardTeamsComponent,
    DashboardTeamMembersComponent,
    DevicesAddComponent,
    HeartRateAddComponent,
    OxygenDialogComponent,
    HeatIndexDialogComponent,
    BloodPressureDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RxReactiveFormsModule,
    MaterialFileInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
