import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestheaderService } from 'src/app/restheader.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HeatIndexDetails } from './heat-index.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HeatIndexService {

  
  constructor(private httpClient: HttpClient, private restheaderService: RestheaderService) { }
  
  getHeatIndex(): Observable<HeatIndexDetails[]>{
    return this.httpClient.get<any>(environment.host + 'heatindex_json/', this.restheaderService.httpheader);

  }

  addHeatIndex(heatIndex: HeatIndexDetails){
    let requestBody = {
      HeatIndexID: heatIndex.HeatIndexID,
      ModerateRisk: heatIndex.ModerateRisk,
      HighRisk: heatIndex.HighRisk,
      HIIndex: heatIndex.HIIndex    }
    return this.httpClient.post(environment.host + 'heatindex_json/', requestBody, this.restheaderService.httpheader)    
  }
  
  editHeatIndex(heatIndex: HeatIndexDetails){
    let requestBody = {
      ModerateRisk: heatIndex.ModerateRisk,
      HighRisk: heatIndex.HighRisk,
      HIIndex: heatIndex.HIIndex  
    }
    let id = heatIndex.HeatIndexID;
    return this.httpClient.put<HeatIndexDetails>(environment.host + 'heatindex_json/' + id + '/', requestBody, this.restheaderService.httpheader)
  }

  deleteHeatIndex(heatIndex: HeatIndexDetails): Observable<any>{
    let requestBody = {
      ModerateRisk: heatIndex.ModerateRisk,
      HighRisk: heatIndex.HighRisk,
      HIIndex: heatIndex.HIIndex
    }
    let id = heatIndex.HeatIndexID;
    return this.httpClient.delete<any>(environment.host + 'heatindex_json/' + id + '/', this.restheaderService.httpheader)
  }
}

