import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DeviceAssignmentData } from './device-assignment';
import { filter } from 'rxjs/operators';
import { DeviceAssignmentService } from './device-assignment.service';
import { forkJoin } from 'rxjs';
import { PeopleInfo, PeopleData } from '../people/people.model';
import { DevicesData } from '../devices/devices';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-device-assignment',
  templateUrl: './device-assignment.component.html',
  styleUrls: ['./device-assignment.component.scss']
})
export class DeviceAssignmentComponent implements OnInit {
  elements = [
    { state: "Unassigned", value: "false" },
    { state: "Assigned", value: "true" },
    { state: "All", value: "all"}
  ];
  deviceFormEditGroup: FormGroup;
  devices: any=[];
  descriptions: any=[];
  selectedChip: string;
  displayedColumns: string[] = ['ImageUrl', 'FirstName', 'LastName', 'AssignedDeviceID', 'Description'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  deviceInformation: DeviceAssignmentData[];
  deviceAssignmentData: MatTableDataSource<DeviceAssignmentData>;

  constructor(private deviceAssignmentService: DeviceAssignmentService) { }

  deviceForm = new FormGroup({
    AssignedDeviceID: new FormControl("", Validators.required)
  });

  ngOnInit() {
    console.log('==============> deviceAssignmentComponent ngOnInit')
    this.deviceAssignmentService.getDevicesData().subscribe((data) => {this.devices = data.reduce((a,b) =>{
      let t={"value":b.DeviceID,"viewValue":b.DeviceID}
      a.push(t)
      return a;
    },[]);
  });
  this.deviceAssignmentService.getDevicesData().subscribe((data)=>{this.descriptions=data.reduce((a,b)=>{
    let h={"value":b.Description,"viewValue":b.Description}
    a.push(h)
    return a;
  },[]);
});
    this.getDeviceAssignmentData();
    this.getSelectedChip({ state: "Unassigned", value: "false" });
    this.deviceAssignmentData.paginator = this.paginator;
    this.deviceAssignmentData.sort = this.sort;
  }

  getDeviceAssignmentData() {
    forkJoin([this.deviceAssignmentService.getPerson(), this.deviceAssignmentService.getDevicesData()]).subscribe(
      (data) => {
        if (data.length > 0) {
          let people: PeopleData[] = data[0];
          let devices: DevicesData[] = data[1];
          this.deviceInformation = this.deviceAssignmentThreshold(people, devices)
          this.deviceAssignmentData = new MatTableDataSource(Array.from(this.deviceInformation.values()));
          this.deviceAssignmentData.paginator = this.paginator;
          this.deviceAssignmentData.sort = this.sort;
          this.getSelectedChip({ state: "Unassigned", value: "false" });
        }
      },
      error => {
              console.log('Device Assignment component is not working', error)
            }
    );
  }

  deviceAssignmentThreshold(people: PeopleData[], devices: DevicesData[]) {
    return people.reduce((a,p) => {
      let deviceList = devices.filter(d=>d.PersonID==p.PersonID)
      let deviceName = deviceList.length>0 ? deviceList[0]:null;
      let device: DeviceAssignmentData = new DeviceAssignmentData();
      if (p.isDelete == false) {
        device.ImageUrl = p.ImageUrl;
        device.FirstName = p.FirstName;
        device.LastName = p.LastName;
        // device.AssignedDeviceID = deviceName ? deviceName.DeviceID : null;
        device.Description = deviceName ? deviceName.Description : null;
        device.IsAssigned = false;
        a.push(device)
      }
      return a;
    }, [])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.deviceAssignmentData.filter = filterValue.trim().toLowerCase();
  }

  getSelectedChip(element)
  {
    this.selectedChip = element;

    if (element.value === "all") {
      this.deviceAssignmentData.filter ="";
    }
    else {
      this.deviceAssignmentData.filter = element.value.trim().toLowerCase();
    }
  }

  onChangeDevice(AssignedDeviceID) {
    this.deviceForm.value['AssignedDeviceID'] = AssignedDeviceID;
  }
}
