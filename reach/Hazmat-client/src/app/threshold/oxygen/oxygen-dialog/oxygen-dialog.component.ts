import { Component, OnInit, Output, EventEmitter, Inject, Optional } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { RestheaderService } from 'src/app/restheader.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from '../../../shared/notification.service';
import { invalid } from '@angular/compiler/src/render3/view/util';
import {OxygenData} from '../oxygen.model';
import {OxygenService} from '../oxygen.service';
import { ReactiveFormConfig, RxwebValidators } from '@rxweb/reactive-form-validators';

//cross-field validation for Low and Normal
const numberValidator: ValidatorFn = (control: FormGroup) : ValidationErrors | null => {
  const normalControl = control.get('Normal');
  const lowControl = control.get('Low');
  const normal = Number(normalControl.value);
  const low = Number(lowControl.value);
  if(!normalControl || !lowControl){
    return null;
  }
  if( !normal || !low){
    return null;
  }
  return low > normal ? { numberOutOfRange: true } : null;
};

export interface Select {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-oxygen-dialog',
  templateUrl: './oxygen-dialog.component.html',
  styleUrls: ['./oxygen-dialog.component.scss']
})
export class OxygenDialogComponent implements OnInit {

  editOxygen: OxygenData;
  action: string;

  constructor(private oxygenService: OxygenService,
    private httpClient: HttpClient,
    private restHeaderService: RestheaderService,
    public dialogRef: MatDialogRef<OxygenDialogComponent>,
    private notificationService: NotificationService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: OxygenData) { 
      this.editOxygen = {...data}
      if(this.editOxygen.SpO2ID == null){
        this.action = 'New';
      }
      else{
        this.action = 'Edit';
      }
    }

    errormessages: any =[];
    oxygenFormGroup: FormGroup;

  ngOnInit(): void {
    ReactiveFormConfig.set({"validationMessage":{"greaterThan":"Normal SpO2 should be greater than Low SpO2"}});

    if (this.action == 'Edit'){
      this.oxygenFormGroup = new FormGroup({
        SpO2ID: new FormControl(this.editOxygen.SpO2ID),
        Low: new FormControl(this.editOxygen.Low, [Validators.required, Validators.min(1)]),
        Normal: new FormControl(this.editOxygen.Normal, [Validators.required, Validators.min(1), RxwebValidators.greaterThan({fieldName:'Low' })]),
        SpO2Index: new FormControl(this.editOxygen.SpO2Index, [Validators.required]),     
      }
      , {validators:numberValidator}
      );      
    }
    else {
      this.oxygenFormGroup = new FormGroup({
        SpO2ID: new FormControl(null),
        Low: new FormControl('', [Validators.required, Validators.min(1)]),
        Normal: new FormControl('', [Validators.required, Validators.min(1), RxwebValidators.greaterThan({fieldName:'Low' })]),
        SpO2Index: new FormControl('', [Validators.required]),     
      }
      ,{validators:numberValidator}
      );
    }
  }

  saveOxygen(oxygen: OxygenData){
    if (this.action == 'Edit'){
      console.log()
      this.oxygenService.editOxygen(oxygen)
      .subscribe((data)=>{
        this.notificationService.success(' Blood Oxygen updated successfully');
        this.dialogRef.close({event:this.action,data:data});        
      },
      error => {
        this.throwErrors(error);
      })
    }
    else{
      this.oxygenService.addOxygen(oxygen)
      .subscribe((data) => {
        this.notificationService.success(' Blood Oxygen added successfully');
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
    const frmGroup = this.oxygenFormGroup;
    Object.keys(error).map(function(key){
      if(key=='error'){
        let err:object = error[key];
        Object.keys(err).map(function(key){
          const formControl = frmGroup.get(key);
          if (formControl){
            let msg = '';
            if(key=='SpO2Index'){
              err[key].forEach(element => {
                if(element.includes('already'))
                  msg = 'SpO2 Index already exists. Please enter a unique SpO2 Index'
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

  cancelOxygen() {
    this.notificationService.warn('Operation Cancelled');
    this.dialogRef.close({event:''});
  }

}
