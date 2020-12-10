import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestheaderService } from 'src/app/restheader.service';
import { Observable } from 'rxjs';
import { HearrateDetails } from './heart-rate.model';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class HeartRateService {


  constructor(private httpClient: HttpClient, private restheaderService: RestheaderService) { }
  
  getHeartRate(): Observable<HearrateDetails[]>{
    return this.httpClient.get<any>(environment.host + 'heartrate_json', this.restheaderService.httpheader);

  }

  addHeartRate(heartRate: HearrateDetails){
    let requestBody = {
      AgeGroup: heartRate.AgeGroup,
      LowCritical: heartRate.LowCritical,
      LowTargetHR: heartRate.LowTargetHR,
      HighTargetHR:heartRate.HighTargetHR,
      HighCritical:heartRate.HighCritical,
      HRIndex:heartRate.HRIndex  
    }
    return this.httpClient.post(environment.host + 'heartrate_json/', requestBody, this.restheaderService.httpheader)    
  }

  editHeartRate(heartRate: HearrateDetails){
    let requestBody = {
      AgeGroup: heartRate.AgeGroup,
      LowCritical: heartRate.LowCritical,
      LowTargetHR: heartRate.LowTargetHR,
      HighTargetHR:heartRate.HighTargetHR,
      HighCritical:heartRate.HighCritical,
      HRIndex:heartRate.HRIndex  
    }
    let id = heartRate.HeartRateID;
    return this.httpClient.put<HearrateDetails>(environment.host + 'heartrate_json/' + id + '/', requestBody, this.restheaderService.httpheader)
  }

  deleteHeartRate(heartRate: HearrateDetails): Observable<any>{
    let requestBody = {
      HeartRateID: heartRate.HeartRateID,
      AgeGroup: heartRate.AgeGroup,
      LowCritical: heartRate.LowCritical,
      LowTargetHR: heartRate.LowTargetHR,
      HighTargetHR:heartRate.HighTargetHR,
      HighCritical:heartRate.HighCritical,
      HRIndex:heartRate.HRIndex
    }
    let id = heartRate.HeartRateID;
    return this.httpClient.delete<any>(environment.host + 'heartrate_json/' + id + '/', this.restheaderService.httpheader)
  }
  
  }
