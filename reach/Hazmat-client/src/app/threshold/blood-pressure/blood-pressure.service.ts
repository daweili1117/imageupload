import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestheaderService } from 'src/app/restheader.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BloodPressureData } from './blood-pressure.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BloodPressureService {

  constructor(private httpClient: HttpClient, private restheaderService: RestheaderService) { }

  getBloodPressure(): Observable<BloodPressureData[]> {
    return this.httpClient.get<any>(environment.host + 'bloodpressure_json/', this.restheaderService.httpheader);
  }

  addBloodPressure(bloodPressure: BloodPressureData){
    let requestBody = {
      BloodPressureID: bloodPressure.BloodPressureID,
      LowMAP: bloodPressure.LowMAP,
      NormalLowMAP: bloodPressure.NormalLowMAP,
      NormalHighMAP: bloodPressure.NormalHighMAP,
      HighMAP: bloodPressure.HighMAP,
      BPIndex: bloodPressure.BPIndex    
    }
    return this.httpClient.post(environment.host + 'bloodpressure_json/', requestBody, this.restheaderService.httpheader)    
  }
  
  editBloodPressure(bloodPressure: BloodPressureData){
    let requestBody = {
      LowMAP: bloodPressure.LowMAP,
      NormalLowMAP: bloodPressure.NormalLowMAP,
      NormalHighMAP: bloodPressure.NormalHighMAP,
      HighMAP: bloodPressure.HighMAP,
      BPIndex: bloodPressure.BPIndex  
    }
    let id = bloodPressure.BloodPressureID;
    return this.httpClient.put<BloodPressureData>(environment.host + 'bloodpressure_json/' + id + '/', requestBody, this.restheaderService.httpheader)
  }

  deleteBloodPressure(bloodPressure: BloodPressureData): Observable<any>{
    let requestBody = {
      LowMAP: bloodPressure.LowMAP,
      NormalLowMAP: bloodPressure.NormalLowMAP,
      NormalHighMAP: bloodPressure.NormalHighMAP,
      HighMAP: bloodPressure.HighMAP,
      BPIndex: bloodPressure.BPIndex
    }
    let id = bloodPressure.BloodPressureID;
    return this.httpClient.delete<any>(environment.host + 'bloodpressure_json/' + id + '/', this.restheaderService.httpheader)
  }
}
