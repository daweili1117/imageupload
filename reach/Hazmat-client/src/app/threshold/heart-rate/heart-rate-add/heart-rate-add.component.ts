import { Component, OnInit, Output, EventEmitter, Inject, Optional } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { RestheaderService } from 'src/app/restheader.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HearrateDetails } from '../heart-rate.model';
import { HeartRateService } from '../heart-rate.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from '../../../shared/notification.service';
import { invalid } from '@angular/compiler/src/render3/view/util';

export interface Select {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-heart-rate-add',
  templateUrl: './heart-rate-add.component.html',
  styleUrls: ['./heart-rate-add.component.scss']
})
export class HeartRateAddComponent implements OnInit {
  editHeartRate: HearrateDetails;
  action: string;

  constructor(private heartRateService: HeartRateService,
              private httpClient: HttpClient,
              private restHeaderService: RestheaderService,
              public dialogRef: MatDialogRef<HeartRateAddComponent>,
              private notificationService: NotificationService,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: HearrateDetails) { 
    this.editHeartRate = {...data}
    if(this.editHeartRate.HeartRateID == null){
      this.action = 'New';
    }
    else{
      this.action = 'Edit';
    }
            
  }

  errormessages: any =[];
  heartRateFormGroup: FormGroup;

  ngOnInit(): void {
    if(this.action =='Edit'){
      this.heartRateFormGroup = new FormGroup({
        HeartRateID: new FormControl(this.editHeartRate.HeartRateID), 
        AgeGroup: new FormControl(this.editHeartRate.AgeGroup, [Validators.required]),
        LowCritical: new FormControl(this.editHeartRate.LowCritical, [Validators.required, Validators.min(1)]),
        LowTargetHR: new FormControl(this.editHeartRate.LowTargetHR, [Validators.required, Validators.min(1)]),
        HighTargetHR: new FormControl(this.editHeartRate.HighTargetHR, [Validators.required, Validators.min(1)]),
        HighCritical: new FormControl(this.editHeartRate.HighCritical, [Validators.required, Validators.min(1)]),
        HRIndex: new FormControl(this.editHeartRate.HRIndex, [Validators.required]),
      });
      
    }
    else{
      this.heartRateFormGroup = new FormGroup({
        HeartRateID: new FormControl(null),
        AgeGroup: new FormControl('', [Validators.required]),
        LowCritical: new FormControl('', [Validators.required, Validators.min(1)]),
        LowTargetHR: new FormControl('', [Validators.required, Validators.min(1)]),
        HighTargetHR: new FormControl('', [Validators.required, Validators.min(1)]),
        HighCritical: new FormControl('', [Validators.required, Validators.min(1)]),
        HRIndex: new FormControl('', [Validators.required]),      
      });
    }

  }

  saveHeartRate(heartRate: HearrateDetails){
    if (this.action == 'Edit'){
      console.log()
      this.heartRateService.editHeartRate(heartRate)
      .subscribe((data)=>{
        // console.log(data)
        this.notificationService.success(' Heart Rate updated successfully');
        this.dialogRef.close({event:this.action,data:data});        
      },
      error => {
        this.throwErrors(error);
      })
    }
    else {
      this.heartRateService.addHeartRate(heartRate)
      .subscribe((data)=>{
        this.notificationService.success(' Heart Rate added successfully');
        this.dialogRef.close({event:this.action,data:data});
      },
      error => {
        // console.log(error);
        this.throwErrors(error);
      });  
    }
  }

  checkLowCritical(group: FormGroup){
    if (group.controls.LowCritical.value > group.controls.LowTargetHR){
        return {lowCriticalGreaterThanLowTarget: true}
    }
    return null;
  }

  throwErrors(error: any){
    this.errormessages = [];
    let errors= [];
    const frmGroup = this.heartRateFormGroup;
    Object.keys(error).map(function(key){
      if(key=='error'){
        let err:object = error[key];
        Object.keys(err).map(function(key){
          const formControl = frmGroup.get(key);
          if (formControl){
            let msg = '';
            if(key=='HRIndex'){
              err[key].forEach(element => {
                if(element.includes('already'))
                  msg = 'HR Index already exists. Please enter a unique HR Index'
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

  cancelHeartRate() {
    this.notificationService.warn('Operation Cancelled');
    this.dialogRef.close({event:''});
  }

}
