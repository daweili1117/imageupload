import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestheaderService } from 'src/app/restheader.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OxygenData } from './oxygen.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OxygenService {

  constructor(private httpClient: HttpClient, private restheaderService: RestheaderService) { }

  getOxygenData(): Observable<OxygenData[]> {
    return this.httpClient.get<any>(environment.host + 'spo2_json/', this.restheaderService.httpheader);
  }

  addOxygen(oxygen: OxygenData){
    let requestBody = {
      SpO2ID: oxygen.SpO2ID,
      SpO2Index: oxygen.SpO2Index,
      Low: oxygen.Low,
      Normal: oxygen.Normal   
    }
    return this.httpClient.post(environment.host + 'spo2_json/', requestBody, this.restheaderService.httpheader)    
  }
  
  editOxygen(oxygen: OxygenData){
    let requestBody = {
      SpO2Index: oxygen.SpO2Index,
      Low: oxygen.Low,
      Normal: oxygen.Normal  
    }
    let id = oxygen.SpO2ID;
    return this.httpClient.put<OxygenData>(environment.host + 'spo2_json/' + id + '/', requestBody, this.restheaderService.httpheader)
  }

  deleteOxygen(oxygen: OxygenData): Observable<any>{
    let requestBody = {
      SpO2Index: oxygen.SpO2Index,
      Low: oxygen.Low,
      Normal: oxygen.Normal
    }
    let id = oxygen.SpO2ID;
    return this.httpClient.delete<any>(environment.host + 'spo2_json/' + id + '/', this.restheaderService.httpheader)
  }

}
