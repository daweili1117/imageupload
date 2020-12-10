import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestheaderService } from '../restheader.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PeopleData, PeopleInfo, Crew, Role, HeartRate, BloodPressure, DevicesData, HeatIndexDetails, OxygenData} from './people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private httpClient: HttpClient, private restheaderService: RestheaderService) { }

  getPerson(): Observable<PeopleInfo[]> {
    return this.httpClient.get<any>(environment.host + 'person', this.restheaderService.httpheader);
  }

  getPersonHeartrate(): Observable<HeartRate[]> {
    return this.httpClient.get<any>(environment.host + 'heartrate_json', this.restheaderService.httpheader);

  }

  getPersonBloodpressure(): Observable<BloodPressure[]> {
    return this.httpClient.get<any>(environment.host + 'bloodpressure_json', this.restheaderService.httpheader);

  }

  getPersonHeatIndex(): Observable<HeatIndexDetails[]> {
    return this.httpClient.get<any>(environment.host + 'heatindex_json/', this.restheaderService.httpheader);

  }

  getPersonOxygenData(): Observable<OxygenData[]> {
    return this.httpClient.get<any>(environment.host + 'spo2_json/', this.restheaderService.httpheader);
  }


  getPersonById(id: number): Observable<PeopleData[]> {
    return this.httpClient.get<any>(environment.host + 'person/' + id + '/', this.restheaderService.httpheader);
  }

  getCrew(): Observable<Crew[]> {
    return this.httpClient.get<any>(environment.host + 'crew_json', this.restheaderService.httpheader);
[]
  }

  getRole(): Observable<Role[]> {
    return this.httpClient.get<any>(environment.host + 'role_json', this.restheaderService.httpheader);
    []
  }



  getDevicesData(): Observable<DevicesData[]> {
    return this.httpClient.get<any>(environment.host + 'device', this.restheaderService.httpheader);
  }




  addPerson(person: PeopleData): Observable<PeopleData> {
    let requestBody = {
      FirstName: person.FirstName,
      LastName: person.LastName,
      RoleID: person.RoleID,
      ImageUrl: person.ImageUrl,
      isDelete: false,
      CrewID: person.CrewID,
      HeartRateID: person.HeartRateID,
      BloodPressureID: person.BloodPressureID,
      HeatIndexID: person.HeatIndexID,
      SpO2ID: person.SpO2ID
    }
    return this.httpClient.post<PeopleData>(environment.host + 'person', requestBody, this.restheaderService.httpheader)
  }

  addCrew(person:PeopleData, crew:Crew):Observable<Crew>{
    let requestBody={
      Name:person.CrewID,
      Description:crew.Description

    }
    return this.httpClient.post<Crew>(environment.host + 'crew_json', requestBody, this.restheaderService.httpheader);
  }

  addDevice(device: DevicesData, PersonID: any) {
    let requestBody = {
      DeviceID: device.DeviceID,
      IP: device.IP,
      Description: device.Description,
      Type: device.Type,
      Status: false,
      BatteryStatus: 100,
      isDelete: false,
      PersonID: PersonID
    }
    return this.httpClient.post(environment.host + 'device', requestBody, this.restheaderService.httpheader)
  }


  addPersonHeartrate(HeartRate: HeartRate, HRIndex: any) {
    let requestBody = {
      HRIndex: HeartRate.HRIndex
    }
    return this.httpClient.post<any>(environment.host + 'heatindex_json/', requestBody, this.restheaderService.httpheader)
  }



  editPerson(person: PeopleData): Observable<any> {
    let requestBody = {
      FirstName: person.FirstName,
      LastName: person.LastName,
      RoleID: person.RoleID,
      isDelete: false,
      CrewID: person.CrewID,
      ImageUrl: person.ImageUrl,
      HeartRateID: person.HeartRateID,
      BloodPressureID: person.BloodPressureID,
      HeatIndexID: person.HeatIndexID,
      SpO2ID: person.SpO2ID
    }
    let id = person.PersonID
    return this.httpClient.put<PeopleData>(environment.host + 'person/' + id + '/', requestBody, this.restheaderService.httpheader)
  }



    deletePerson(person: PeopleData): Observable<any> {
    let requestBody = {
      FirstName: person.FirstName,
      LastName: person.LastName,

    }
    let id = person.PersonID
    return this.httpClient.delete<any>(environment.host + 'person/' + id + '/',this.restheaderService.httpheader)
  }

}

