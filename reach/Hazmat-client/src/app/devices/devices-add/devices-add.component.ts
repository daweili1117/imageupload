import { Component, OnInit, Output, EventEmitter, Inject, Optional } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { RestheaderService } from 'src/app/restheader.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DevicesData, DeviceInfo } from '../devices';
import { DevicesService } from '../devices.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from '../../shared/notification.service';
import { PeopleService } from '../../people/people.service';
import { invalid } from '@angular/compiler/src/render3/view/util';


export interface Select {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-devices-add',
  templateUrl: './devices-add.component.html',
  styleUrls: ['./devices-add.component.scss']
})
export class DevicesAddComponent implements OnInit {
  editDevice: DeviceInfo;
  action: string;
  constructor(private devicesService: DevicesService,
              private httpClient: HttpClient,
              private restHeaderService: RestheaderService,
              public dialogRef: MatDialogRef<DevicesAddComponent>,
              private notificationService: NotificationService,
              private peopleService: PeopleService,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: DeviceInfo) {
    this.editDevice = {...data}
    if(this.editDevice.DevicePK == null){
      this.action = 'New';
    }
    else{
      this.action = 'Edit';
    }
  }
  
 
  persons: any=[];
  
  serverErrors: any =[];

  Types : Select[]=[
    {value: 'General', viewValue: "General"},
    {value: 'Type 1', viewValue: "Type 1"},
    {value: 'Type 2', viewValue: "Type 2"},
  ];

  STATUS_CHOICES : Select[] = [
    { value: 'Available', viewValue: "Available" },
    { value: 'Not Available', viewValue: "Not Available" },
    { value: 'Under Repair', viewValue: "Under Repair" },
  ];


  devicesFormGroup: FormGroup;
  selectedPerson:any;
  ngOnInit(): void {
    if(this.action =='Edit'){
      this.devicesFormGroup = new FormGroup({
        DevicePK: new FormControl(this.editDevice.DevicePK),
        DeviceID: new FormControl(this.editDevice.DeviceID, [Validators.required]),
        IP: new FormControl(this.editDevice.IP, [Validators.required]),
        Description: new FormControl(this.editDevice.Description, [Validators.required]),
        Type: new FormControl(this.editDevice.Type, [Validators.required]),
        Status: new FormControl(this.editDevice.Status, [Validators.required]),
        PersonID: new FormControl(this.editDevice.Person)
      });
      this.devicesFormGroup.controls.PersonID.setValue(this.editDevice.PersonID);
    }
    else{
      this.devicesFormGroup = new FormGroup({
        DeviceID: new FormControl('', [Validators.required]),
        IP: new FormControl('', [Validators.required]),
        Description: new FormControl('', [Validators.required]),
        Type: new FormControl('', [Validators.required]),
        Status: new FormControl('', [Validators.required]),
        PersonID: new FormControl('')
      });
    }
    this.peopleService.getPerson().subscribe((data) => {
      this.persons = data.reduce((a, b) => {
        let t = { "value": b.PersonID, "viewValue": b.FirstName+' '+b.LastName}
        a.push(t)
        return a;
      }, []); 
    });
  }

  saveDevice(device: DevicesData) {
    if(device.Status !== 'Available' && device.PersonID){
      const formControl = this.devicesFormGroup.get('PersonID');
      formControl.setErrors({
        fieldError: 'Person can be assigned only when the device status is Available'});
    }

    else if(this.action == 'Edit'){
      this.devicesService.editDevice(device)
      .subscribe((data)=>{
        let devicedata:DeviceInfo =  data as unknown as DeviceInfo; 
        if(devicedata.PersonID){ 
          let person:any = this.persons.find((person) => (person.value ===devicedata.PersonID)) 
          if(person) 
          devicedata.Person = person.viewValue;
        } 
        this.notificationService.success(' Device updated successfully');
        this.dialogRef.close({event:this.action,data:devicedata});
      },
      error => {
        this.throwErrors(error);
      });
    }
    else{
      this.devicesService.addDevice(device)
      .subscribe((data)=>{
        let devicedata:DeviceInfo =  data as unknown as DeviceInfo; 
        if(devicedata.PersonID){ 
          let person:any = this.persons.find((person) => (person.value ===devicedata.PersonID)) 
          if(person) 
          devicedata.Person = person.viewValue;
        }
        this.notificationService.success(' Device added successfully');
        this.dialogRef.close({event:this.action,data:devicedata});
      },
      error => {
        this.throwErrors(error);
      });
    }
  }

  throwErrors(error: any){
    this.serverErrors = [];
        let errors= [];
        const frmGroup = this.devicesFormGroup;
        Object.keys(error).map(function(key){
          if(key=='error'){
            let err:object = error[key];
            Object.keys(err).map(function(key){
              const formControl = frmGroup.get(key);

              if (formControl) {
                // activate the error message
                let msg = '';
                if(key=='IP'){
                  err[key].forEach(element => {
                    // console.log('error message==='+element);
                    if(element.includes('valid'))
                      msg = 'Please enter a valid IPv4 or IPv6 address'
                    if(element.includes('already'))
                      msg = 'IP address already exists. Please enter a unique IP address'
                    });
                }
                if(key=='DeviceID'){
                  err[key].forEach(element => {
                    if(element.includes('valid'))
                      msg = 'Enter valid DeviceID.'
                    if(element.includes('already'))
                      msg = 'Device ID already exists. Please enter a unique Device ID'
                    });
                }
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

  cancelDevice() {
    this.notificationService.warn('Operation Cancelled');
    this.dialogRef.close({event:''});
  }
}
