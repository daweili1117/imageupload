import {Component, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { DevicesData, Select, DeviceInfo } from './devices';
import { DevicesService } from './devices.service';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DevicesAddComponent} from './devices-add/devices-add.component';
import { NotificationService } from '../shared/notification.service';
import { forkJoin } from 'rxjs';
import { PeopleService } from '../people/people.service';


@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
})
export class DevicesComponent implements OnInit {
  displayedColumns: string[] = ['DeviceID', 'IP', 'Description', 'Type', 'Person', 'Status', 'Actions'];
  dataSource= new MatTableDataSource<DeviceInfo>();
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  constructor(private devicesService: DevicesService,
              private dialog: MatDialog,
              private changeDetectorRefs: ChangeDetectorRef,
              private notificationService: NotificationService,
              private personService: PeopleService) { }
  Types : Select[]=[
    {value: 'General', viewValue: "General"},
    {value: 'Type 1', viewValue: "Type 1"},
    {value: 'Type 2', viewValue: "Type 2"}
  ];

  ngOnInit(): void {
    this.getDevicesData();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getDevicesData() {
    forkJoin([
      this.devicesService.getDevicesData(),
      this.personService.getPerson()]).subscribe(
        (data) => {
          if (data.length > 0) {
            let deviceInfoData = [];
            let devices: any = data[0];
            let persons:any = data[1];
            devices.map((device) => {
              deviceInfoData.push({
                DeviceID: device.DeviceID?device.DeviceID : '',
                DevicePK: device.DevicePK?device.DevicePK : '',
                IP: device.IP?device.IP : '',
                Description: device.Description? device.Description: '',
                Type: device.Type ? device.Type: '',
                Status: device.Status? device.Status: '',
                PersonID: device.PersonID? device.PersonID:'',
                Person: this.getPersonName(persons,device.PersonID)
              });
              this.dataSource.data = deviceInfoData;
            });
          }
        },
        error => {
          console.log('Devices component is not working', error)
        }
      );
  }

  getPersonName(persons:any,personID:any){
    let person:any = persons.find((person) => (person.PersonID === personID))
    if(person)
      return person.FirstName + ' '+ person.LastName
    return ''
  }

  addDevice() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    const dialogRef = this.dialog.open(DevicesAddComponent, dialogConfig);
    
    dialogRef.afterClosed().subscribe(result => {
      if(result.event ==='New'){
        let device: DeviceInfo;
        device = result.data;
        this.dataSource.data.push(device);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
      });
  }
  updateDevice(device: DeviceInfo) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = device;
    const dialogRef = this.dialog.open(DevicesAddComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result.event ==='Edit'){
        let device: DeviceInfo;
        device = result.data;
        let index = this.dataSource.data.findIndex( e=> e.DevicePK === device.DevicePK)
        this.dataSource.data[index] = device;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
      });
  }
  
  deleteDevice(id: DevicesData) {
    var displaymessage: string = 'Are you sure you want to remove this device?';
    this.openDialog(displaymessage, id);
  }

  openDialog(message: string, id: DevicesData): void {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '50rem',
        data: {message: message}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result.event);
        if(result.event === 'Remove') {
          this.devicesService.deleteDevice(id).subscribe(
            (data)=>{
              this.dataSource.data = this.dataSource.data.filter(item => item.DevicePK!=id.DevicePK)              
              this.notificationService.success('Successfully Deleted');
            },
            error => {
              console.log('error', error);
              this.notificationService.error('Error occurred while deleting the device');
          });
          }
          else if (result.event === 'Cancel'){
            this.notificationService.warn('Operation Cancelled');
          }
      });
  }
}
