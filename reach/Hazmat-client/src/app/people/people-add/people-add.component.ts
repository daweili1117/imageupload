import { Component, OnInit, Output, EventEmitter, Inject, Optional  } from '@angular/core';
import { PeopleService } from '../people.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PeopleData, PeopleInfo } from '../people.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RestheaderService } from 'src/app/restheader.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, forkJoin } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from '../../shared/notification.service';


import { DevicesService } from '../../devices/devices.service';
import { BloodPressureService } from '../../threshold/blood-pressure/blood-pressure.service';
import { HeartRateService } from '../../threshold/heart-rate/heart-rate.service';
import { HeatIndexService } from '../../threshold/heat-index/heat-index.service';
import { OxygenService } from '../../threshold/oxygen/oxygen.service';

export interface Select {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-people-add',
  templateUrl: './people-add.component.html',
  styleUrls: ['./people-add.component.scss']
})


export class PeopleAddComponent implements OnInit {
  
  ImageUrl: File;

  // onImageChanged(event: any) {
  //   this.ImageUrl= event.target.files[0];
  // }

  // newimage(){
  //   const uploadData = new FormData();
  //   uploadData.append('ImageUrl', this.ImageUrl, this.ImageUrl.name)
  //   this.httpClient.post(environment.host + 'person',uploadData).subscribe(
  //     data =>console.log(data),
  //     error =>console.log(error)
  //   );
    
  // }


  editPeople: PeopleInfo;
  action: string;

  constructor(private peopleService: PeopleService, 
              private httpClient: HttpClient, 
              private restHeaderService: RestheaderService,
              public dialogRef: MatDialogRef<PeopleAddComponent>,
              private notificationService: NotificationService,
              private devicesService: DevicesService, 
              private bloodpressureService: BloodPressureService,
              private heartrateService: HeartRateService,
              private heatindexService: HeatIndexService,
              private oxygenService: OxygenService,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: PeopleInfo
  ) {
    this.editPeople = { ...data }
    if (this.editPeople.PersonID == null) {
      this.action = 'New';
    }
    else {
      this.action = 'Edit';
    }
    console.log('data==='+data)
  }
  

  roles: any = [];
  crews: any = [];
  devices: any = [];
  selectedCrew: any;
  selectedRole: any;
  serverErrors: any = [];

  // Role: Select[] = [
  //   { value: 'SEMS Operator', viewValue: "SEMS Operator" },
  //   { value: 'First Responder', viewValue: "First Responder" },
  //   { value: 'Team Leader', viewValue: "Team Leader" },
  //   { value: 'User', viewValue: "User" },
  //   { value: 'Medic', viewValue: "Medic" },
  // ];


  HRIndexes: any = [];
  BPIndexes: any = [];
  SPIndexes: any = [];
  HIIndexes: any = [];


  peopleFormGroup: FormGroup;
  ngOnInit() {
    
      if(this.action =='Edit'){
        this.peopleFormGroup = new FormGroup({
          PersonID: new FormControl(this.editPeople.PersonID),
          CrewID: new FormControl(this.editPeople.CrewID),
          FirstName: new FormControl(this.editPeople.FirstName, [Validators.required]),
          LastName: new FormControl(this.editPeople.LastName, [Validators.required]),
          RoleID: new FormControl(this.editPeople.RoleID),
          ImageUrl: new FormControl(this.editPeople.ImageUrl),
          // ImageUrlsource: new FormControl(''),
          HeartRateID: new FormControl(this.editPeople.HeartRateID),
          BloodPressureID: new FormControl(this.editPeople.BloodPressureID),
          HeatIndexID: new FormControl(this.editPeople.HeatIndexID),
          SpO2ID: new FormControl(this.editPeople.SpO2ID),
        });
        this.peopleFormGroup.controls.CrewID.setValue(this.editPeople.CrewID);
        this.peopleFormGroup.controls.HeartRateID.setValue(this.editPeople.HeartRateID);
        this.peopleFormGroup.controls.BloodPressureID.setValue(this.editPeople.BloodPressureID);
        this.peopleFormGroup.controls.HeatIndexID.setValue(this.editPeople.HeatIndexID);
        this.peopleFormGroup.controls.SpO2ID.setValue(this.editPeople.SpO2ID);
      }
      else{
        this.peopleFormGroup = new FormGroup({
        PersonID: new FormControl(''),
        CrewID: new FormControl(''),
        FirstName: new FormControl('', [Validators.required]),
        LastName: new FormControl('', [Validators.required]),
        RoleID: new FormControl(''),
        ImageUrl: new FormControl(''),
        // ImageUrlsource: new FormControl(''),
        HeartRateID: new FormControl(''),
        BloodPressureID: new FormControl(''),
        HeatIndexID: new FormControl(''),
        SpO2ID: new FormControl(''),
    }

    );
        console.log(this.peopleFormGroup);
  }
    this.peopleService.getCrew().subscribe((data) => {
      this.crews = data.reduce((a, b) => {
        let t = { "value": b.CrewID, "viewValue": b.Name }
        a.push(t)
        return a;
      }, []); 
    });
    this.peopleService.getRole().subscribe((data) => {
      this.roles = data.reduce((a, b) => {
        let t = { "value": b.RoleID, "viewValue": b.Name }
        a.push(t)
        return a;
      }, []);
    });
    this.devicesService.getDevicesData().subscribe((data) => {
      this.devices = data.reduce((a, b) => {
        let t = { "value": b.DevicePK, "viewValue": b.DeviceID }
        a.push(t)
        return a;
      }, []);
    });
    this.heartrateService.getHeartRate().subscribe((data) => {
      this.HRIndexes = data.reduce((a, b) => {
        let t = { "value": b.HeartRateID, "viewValue": b.HRIndex }
        a.push(t)
        return a;
      }, []);
    });
    this.bloodpressureService.getBloodPressure().subscribe((data) => {
      this.BPIndexes = data.reduce((a, b) => {
        let t = { "value": b.BloodPressureID, "viewValue": b.BPIndex }
        a.push(t)
        return a;
      }, []);
    });
    this.oxygenService.getOxygenData().subscribe((data) => {
      this.SPIndexes = data.reduce((a, b) => {
        let t = { "value": b.SpO2ID, "viewValue": b.SpO2Index }
        a.push(t)
        return a;
      }, []);
    });

    this.heatindexService.getHeatIndex().subscribe((data) => {
      this.HIIndexes = data.reduce((a, b) => {
        let t = { "value": b.HeatIndexID, "viewValue": b.HIIndex }
        a.push(t)
        return a;
      }, []);
    });
    
  }

  onImageChanged(event) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.peopleFormGroup.patchValue({
        ImageUrl: file
      });
      //this.editPeople.ImageUrl = file;
      //this.peopleFormGroup.controls.ImageUrlsource.setValue(file);
    }
  }

  onImagesChanged(event) {

    if (event._files.File.length > 0) {
      const file = event._files.File[0];
      this.peopleFormGroup.patchValue({
        ImageUrl: file
      });
      //this.editPeople.ImageUrl = file;
      //this.peopleFormGroup.controls.ImageUrlsource.setValue(file);
    }
  }

savePerson(person: PeopleData) {
  if(this.action == 'Edit'){
    this.peopleService.editPerson(person)
    .subscribe((data)=>{
      let personData:PeopleInfo = this.getPersonData(data,person);
      this.notificationService.success(' People updated successfully');
      this.dialogRef.close({event:this.action,data:personData});
    },
    error => {
      this.throwErrors(error);
    });
  }
  else{
  this.peopleService.addPerson(person)
  .subscribe((data)=>{
    let personData:PeopleInfo = this.getPersonData(data,person);
    this.notificationService.success(' People added successfully');
    this.dialogRef.close({event:this.action,data:personData});
  },
  error => {
    this.throwErrors(error);
  });
}
 
}
getPersonData(data:any,person: PeopleData):PeopleInfo{
  let personData:PeopleInfo =  data as unknown as PeopleInfo ; 
    if(person.CrewID){ 
      let crew: any = this.crews.find((crew) => (crew.value ===data.CrewID)) 
      if (crew) 
        personData.Crew = crew.viewValue;
    }
    if (person.RoleID) {
      let role: any = this.roles.find((role) => (role.value === data.RoleID))
      if (role)
        personData.Role = role.viewValue;
    }
    if(person.HeartRateID){ 
      let hr:any = this.HRIndexes.find((hr) => (hr.value ===data.HeartRateID)) 
      if(hr) 
      personData.HeartRate=hr.viewValue;
    }
    if(person.BloodPressureID){ 
      let bp:any = this.BPIndexes.find((bp) => (bp.value ===data.BloodPressureID)) 
      if(bp) 
      personData.BloodPressure=bp.viewValue;
    }
    if(person.HeatIndexID){ 
      let hi:any = this.HIIndexes.find((hi) => (hi.value ===data.HeatIndexID)) 
      if(hi) 
      personData.HeatIndex=hi.viewValue;
    }
    if(person.SpO2ID){ 
      let sp:any = this.SPIndexes.find((sp) => (sp.value ===data.SpO2ID)) 
      if(sp) 
      personData.SpO2=sp.viewValue;
    }
    return personData;
}
throwErrors(error: any){
  this.serverErrors = [];
      let errors= [];
      const frmGroup = this.peopleFormGroup;
      Object.keys(error).map(function(key){
        if(key=='error'){
          let err:object = error[key];
          Object.keys(err).map(function(key){
            const formControl = frmGroup.get(key);

            if (formControl) {
              let msg = '';
              if(!msg){
                err[key].forEach(element => {
                  msg = element;
                });
              }
              formControl.setErrors({
                fieldError: msg
              });
            }
            else{
              err[key].forEach(element => {
                errors.push(element);
              });
            }
          })
        }
      })
      this.serverErrors = this.serverErrors.concat(errors);
}

  cancelPerson() {
    this.notificationService.warn('Operation Cancelled');
    this.dialogRef.close({event:''});
  }

}
