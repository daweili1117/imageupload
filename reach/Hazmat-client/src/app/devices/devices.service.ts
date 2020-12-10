import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestheaderService } from 'src/app/restheader.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DevicesData, DeviceInfo } from './devices';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(private httpClient: HttpClient, private restheaderService: RestheaderService) { }

  getDevicesData(): Observable<DevicesData[]> {
    return this.httpClient.get<any>(environment.host + 'device', this.restheaderService.httpheader);
  }

  addDevice(device: DevicesData) {
    let requestBody = {
      DevicePK: device.DevicePK,
      DeviceID: device.DeviceID,
      IP: device.IP,
      Description: device.Description,
      Type: device.Type,
      Status: device.Status,
      BatteryStatus: 100,
      isDelete: false,
      PersonID: device.PersonID

    }
    return this.httpClient.post(environment.host + 'device', requestBody, this.restheaderService.httpheader)
  }

  editDevice(device: DevicesData): Observable<DevicesData> {
    let requestBody = {
      DeviceID: device.DeviceID,
      DevicePK: device.DevicePK,
      IP: device.IP,
      Description: device.Description,
      Type: device.Type,
      Status: device.Status,
      // BatteryStatus: 100,
      isDelete: false,
      PersonID: device.PersonID
    }
    let id = device.DevicePK
    return this.httpClient.put<DevicesData>(environment.host + 'device/' + id + '/', requestBody, this.restheaderService.httpheader)
  }

  deleteDevice(device: DevicesData): Observable<any> {
    let requestBody = {
      DeviceID: device.DeviceID,
      IP: device.IP,
      Description: device.Description,
      Type: device.Type,
      Status: device.Status,
      isDelete: true
    }
    let id = device.DevicePK
    return this.httpClient.delete<any>(environment.host + 'device/' + id + '/', this.restheaderService.httpheader)
  }

}
