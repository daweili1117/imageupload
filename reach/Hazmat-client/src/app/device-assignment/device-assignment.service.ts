import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestheaderService } from '../restheader.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DevicesData } from '../devices/devices';
import { PeopleData, PeopleInfo} from '../people/people.model';
import { DeviceAssignmentData } from './device-assignment';


@Injectable({
  providedIn: 'root'
})
export class DeviceAssignmentService {

  constructor(private httpClient: HttpClient, private restheaderService: RestheaderService) { }

  // getDeviceAssignmentData(): Observable<DeviceAssignmentData[]> {
  //   return this.httpClient.get<any>(environment.host + 'deviceassignment_json', this.restheaderService.httpheader);
  // }

  getDevicesData(): Observable<DevicesData[]> {
    return this.httpClient.get<any>(environment.host + 'device', this.restheaderService.httpheader);
  }

  getPerson(): Observable<PeopleData[]>{
    return this.httpClient.get<PeopleData[]>(environment.host + 'person', this.restheaderService.httpheader);
  }

  getPersonById(id: number): Observable<PeopleData>{
    return this.httpClient.get<PeopleData>(environment.host + 'person/' + id + '/', this.restheaderService.httpheader);
  }

  assignDevice(personID: any, deviceAssignment: DeviceAssignmentData) {
    let requestBody = {
      ImageUrl: deviceAssignment.ImageUrl,
      FirstName: deviceAssignment.FirstName,
      LastName: deviceAssignment.LastName,
      AssignedDeviceID: deviceAssignment.AssignedDeviceID,
      Description: deviceAssignment.Description,
      PersonID: personID
    }
    
  }
  
}
