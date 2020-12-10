import { Component, OnInit, Output, EventEmitter, Inject, Optional } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { RestheaderService } from 'src/app/restheader.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from '../../../shared/notification.service';
import { invalid } from '@angular/compiler/src/render3/view/util';
import {BloodPressureData} from '../blood-pressure.model';
import {BloodPressureService} from '../blood-pressure.service';

export interface Select {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-blood-pressure-dialog',
  templateUrl: './blood-pressure-dialog.component.html',
  styleUrls: ['./blood-pressure-dialog.component.scss']
})
export class BloodPressureDialogComponent implements OnInit {
  
  editBloodPressure: BloodPressureData;
  action: string;
  
  constructor(private bloodPressureService: BloodPressureService,
    private httpClient: HttpClient,
    private restHeaderService: RestheaderService,
    public dialogRef: MatDialogRef<BloodPressureDialogComponent>,
    private notificationService: NotificationService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: BloodPressureData) { 
      this.editBloodPressure = {...data}
      if(this.editBloodPressure.BloodPressureID == null){
        this.action = 'New';
      }
      else{
        this.action = 'Edit';
      }
  }

  errormessages: any =[];
  bloodPressureFormGroup: FormGroup;

  ngOnInit(): void {
    if (this.action == 'Edit'){
      this.bloodPressureFormGroup = new FormGroup({
        BloodPressureID: new FormControl(this.editBloodPressure.BloodPressureID),
        LowMap: new FormControl(this.editBloodPressure.LowMAP, [Validators.required, Validators.min(1)]),
        NormalLowMAP: new FormControl(this.editBloodPressure.NormalLowMAP, [Validators.required, Validators.min(1)]),
        NormalHighMAP: new FormControl(this.editBloodPressure.NormalHighMAP, [Validators.required, Validators.min(1)]),     
        HighMap: new FormControl(this.editBloodPressure.HighMAP, [Validators.required, Validators.min(1)]),
        BPIndex: new FormControl(this.editBloodPressure.BPIndex, [Validators.required]),
      });      
    }
    else {
      this.bloodPressureFormGroup = new FormGroup({
        BloodPressureID: new FormControl(null),
        LowMap: new FormControl('', [Validators.required, Validators.min(1)]),
        NormalLowMAP: new FormControl('', [Validators.required, Validators.min(1)]),
        NormalHighMAP: new FormControl('', [Validators.required, Validators.min(1)]),
        HighMap: new FormControl('', [Validators.required, Validators.min(1)]),
        BPIndex: new FormControl('', [Validators.required]),     
      });
    }
  }

  saveBloodPressure(bloodPressure: BloodPressureData){
    if (this.action == 'Edit'){
      console.log()
      this.bloodPressureService.editBloodPressure(bloodPressure)
      .subscribe((data)=>{
        // console.log(data)
        this.notificationService.success(' Blood Pressure MAP updated successfully');
        this.dialogRef.close({event:this.action,data:data});        
      },
      error => {
        this.throwErrors(error);
      })
    }
    else{
      this.bloodPressureService.addBloodPressure(bloodPressure)
      .subscribe((data) => {
        this.notificationService.success(' Blood Pressure MAP added successfully');
        this.dialogRef.close({event:this.action,data:data});
      }, 
      error => {
        this.throwErrors(error);
      });
  }
  }

  throwErrors(error: any){
    this.errormessages = [];
    let errors= [];
    const frmGroup = this.bloodPressureFormGroup;
    Object.keys(error).map(function(key){
      if(key=='error'){
        let err:object = error[key];
        Object.keys(err).map(function(key){
          const formControl = frmGroup.get(key);
          if (formControl){
            let msg = '';
            if(key=='BPIndex'){
              err[key].forEach(element => {
                if(element.includes('already'))
                  msg = 'BP Index already exists. Please enter a unique BP Index'
                });
            }
            if(!msg){
              err[key].forEach(element => {
                msg = element;
              });
            }
            formControl.setErrors({
              serverError: msg
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
    this.errormessages = this.errormessages.concat(errors);
  }

  cancelBloodPressure() {
    this.notificationService.warn('Operation Cancelled');
    this.dialogRef.close({event:''});
  }

}
