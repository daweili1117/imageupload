import { Component, OnInit, Output, EventEmitter, Inject, Optional } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { RestheaderService } from 'src/app/restheader.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, ValidationErrors } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from '../../../shared/notification.service';
import { invalid } from '@angular/compiler/src/render3/view/util';
import {HeatIndexDetails} from '../heat-index.model';
import {HeatIndexService} from '../heat-index.service';
import { ReactiveFormConfig, RxwebValidators } from '@rxweb/reactive-form-validators';

//cross-field validation for ModerateRisk and HighRisk
const numberValidator: ValidatorFn = (control: FormGroup) : ValidationErrors | null => {
  const highRiskControl = control.get('HighRisk');
  const moderateRiskControl = control.get('ModerateRisk');
  const highRisk = Number(highRiskControl.value);
  const moderateRisk = Number(moderateRiskControl.value);
  if(!highRiskControl || !moderateRiskControl){
    return null;
  }
  if( !highRisk || !moderateRisk){
    return null;
  }
  return moderateRisk > highRisk ? { numberOutOfRange: true } : null;
};


export interface Select {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-heat-index-dialog',
  templateUrl: './heat-index-dialog.component.html',
  styleUrls: ['./heat-index-dialog.component.scss']
})
export class HeatIndexDialogComponent implements OnInit {

  editHeatIndex: HeatIndexDetails;
  action: string;

  constructor(private heatIndexService: HeatIndexService,
              private httpClient: HttpClient,
              private restHeaderService: RestheaderService,
              public dialogRef: MatDialogRef<HeatIndexDialogComponent>,
              private notificationService: NotificationService,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: HeatIndexDetails) {
    this.editHeatIndex = {...data}
    if(this.editHeatIndex.HeatIndexID == null){
      this.action = 'New';
    }
    else{
      this.action = 'Edit';
    }
}

errormessages: any =[];
heatIndexFormGroup: FormGroup;

  ngOnInit(): void {
    ReactiveFormConfig.set({"validationMessage":{"greaterThan":"High Risk should be greater than Low Risk"}});

    if (this.action == 'Edit'){
      this.heatIndexFormGroup = new FormGroup({
        HeatIndexID: new FormControl(this.editHeatIndex.HeatIndexID),
        ModerateRisk: new FormControl(this.editHeatIndex.ModerateRisk, [Validators.required, Validators.min(1)]),
        HighRisk: new FormControl(this.editHeatIndex.HighRisk, [Validators.required, Validators.min(1), RxwebValidators.greaterThan({fieldName:'ModerateRisk' })]),
        HIIndex: new FormControl(this.editHeatIndex.HIIndex, [Validators.required]),     
      }
      ,{validators: numberValidator}
      );      
    }
    else {
      this.heatIndexFormGroup = new FormGroup({
        HeatIndexID: new FormControl(null),
        ModerateRisk: new FormControl('', [Validators.required, Validators.min(1)]),
        HighRisk: new FormControl('', [Validators.required, Validators.min(1), RxwebValidators.greaterThan({fieldName:'ModerateRisk' })]),
        HIIndex: new FormControl('', [Validators.required]),     
      }
      ,{validators: numberValidator}
      );
    }
  }


  saveHeatIndex(heatIndexDetails: HeatIndexDetails){
    if (this.action == 'Edit'){
      console.log()
      this.heatIndexService.editHeatIndex(heatIndexDetails)
      .subscribe((data)=>{
        // console.log(data)
        this.notificationService.success(' Heat Index updated successfully');
        this.dialogRef.close({event:this.action,data:data});        
      },
      error => {
        this.throwErrors(error);
      })
    }
    else{
      this.heatIndexService.addHeatIndex(heatIndexDetails)
      .subscribe((data) => {
        this.notificationService.success(' Heat Index added successfully');
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
    const frmGroup = this.heatIndexFormGroup;
    Object.keys(error).map(function(key){
      if(key=='error'){
        let err:object = error[key];
        Object.keys(err).map(function(key){
          const formControl = frmGroup.get(key);
          if (formControl){
            let msg = '';
            if(key=='HIIndex'){
              err[key].forEach(element => {
                if(element.includes('already'))
                  msg = 'HI Index already exists. Please enter a unique HR Index'
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

  cancelHeatIndex() {
    this.notificationService.warn('Operation Cancelled');
    this.dialogRef.close({event:''});
  }
}
