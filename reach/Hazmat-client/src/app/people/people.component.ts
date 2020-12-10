import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PeopleInfo, Role, HeartRate, BloodPressure, Crew, HeatIndexDetails, OxygenData, DevicesData, PeopleData } from './people.model';
import { PeopleService } from './people.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { state, trigger, style, transition, animate } from '@angular/animations';
import { environment } from 'src/environments/environment';
import { Observable, forkJoin } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { NotificationService } from '../shared/notification.service';
import { PeopleAddComponent } from './people-add/people-add.component';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('325ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PeopleComponent implements OnInit {

  constructor(private peopleService: PeopleService, private dialog: MatDialog,private notificationService: NotificationService) { }

  peopleInformation: PeopleInfo[];
  dataSource: MatTableDataSource<PeopleInfo>;
  displayedColumns: string[] = ['ImageUrl', 'FirstName', 'LastName', 'Crew', 'Role', 'Devices', 'HeartRate', 'BloodPressure', 'HeatIndex', 'SpO2', 'Actions'];
  display: string = 'deviceDetails';
  display1: string;
  editedPerson: PeopleInfo;
  expandedElement: PeopleInfo;


  // ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Output()
  goBack = new EventEmitter();

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    forkJoin([
      this.peopleService.getCrew(),
      this.peopleService.getPerson(),
      this.peopleService.getPersonHeartrate(),
      this.peopleService.getPersonBloodpressure(),
      this.peopleService.getPersonHeatIndex(),
      this.peopleService.getPersonOxygenData(),
      this.peopleService.getDevicesData(),
      this.peopleService.getRole(),
    ]
    ).subscribe(

      (data) => {
        if (data.length > 0) {
          let Crew: any = data[0];
          let People: any = data[1];
          let HeartRate: any = data[2];
          let BloodPressure: any = data[3];
          let HeatIndexDetails: any = data[4];
          let OxygenData: any = data[5];
          let DevicesData: any = data[6];
          let Role: any = data[7];
          this.peopleInformation = this.getPeopleDetails(Crew, People, HeartRate, BloodPressure, HeatIndexDetails, OxygenData, DevicesData, Role);
          this.dataSource = new MatTableDataSource(this.peopleInformation);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }, error => { console.log('error', error) });
  }

  addPerson() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    const dialogRef = this.dialog.open(PeopleAddComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if(result.event ==='New'){
        let person: PeopleInfo;
        person = result.data;
        this.dataSource.data.push(person);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
      });
  }
  updatePerson(person: PeopleInfo) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = person;
    const dialogRef = this.dialog.open(PeopleAddComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result.event ==='Edit'){
        let person: PeopleInfo;
        person = result.data;
        let index = this.dataSource.data.findIndex( e=> e.PersonID === person.PersonID)
        person.Devices = this.dataSource.data[index].Devices
        this.dataSource.data[index] = person;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
      });
  }


  deletePerson(id: PeopleData) {
    this.openDialog('Are you sure want to remove the person?', id);
  }


  openDialog(message: string, id: PeopleData): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '50rem',
      data: { message: message }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result.event === 'Remove') {
        this.peopleService.deletePerson(id).subscribe(
          (data) => {
            this.dataSource.data = this.dataSource.data.filter(item => item.PersonID!=id.PersonID)
            this.notificationService.success('Successfully Deleted');
          },
          error => { this.notificationService.error('Error occurred while deleting the device');
        });
      }
      else if (result.event === 'Cancel') {
        this.notificationService.warn('Operation Cancelled');
      }
    });
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getPeopleDetails(Crew: any, People: any, HeartRate: any, BloodPressure: any, HeatIndexDetails, OxygenData: any, DevicesData: any, Role: any){
    let data = []

    People.map((item, index) => {
      let imageurl = '';
      if(item.ImageUrl)
        if(item.ImageUrl.charAt(0)==='/')
          imageurl = environment.host+item.ImageUrl.substring(1)
        else
          imageurl = environment.host+item.ImageUrl

      data.push({
        PersonID: item.PersonID ? item.PersonID : '',
        FirstName: item.FirstName ? item.FirstName : '',
        LastName: item.LastName ? item.LastName : '',
        ImageUrl: imageurl,
        RoleID: item.RoleID ? item.RoleID : '',
        CrewID: item.CrewID ? item.CrewID : '',
        HeartRateID: item.HeartRateID ? item.HeartRateID : '',
        BloodPressureID: item.BloodPressureID ? item.BloodPressureID : '',
        HeatIndexID: item.HeatIndexID ? item.HeatIndexID : '',
        SpO2ID: item.SpO2ID ? item.SpO2ID : '',
        Role: this.getRoleDetails(Role, item.RoleID),
        Crew: this.getCrewDetails(Crew,item.CrewID),
        HeartRate: this.getHeartRateDetails(HeartRate,item.HeartRateID),
        BloodPressure: this.getBPDetails(BloodPressure,item.BloodPressureID),
        HeatIndex: this.getHeatIndexDetails(HeatIndexDetails,item.HeatIndexID),
        SpO2: this.getOxygenDetails(OxygenData,item.SpO2ID),
        Devices: this.getDevices(DevicesData,item.PersonID),
      })
    })
    return data
  }
  getRoleDetails(Role: any, RoleID: any) {
    let role: any = Role.find((role) => (role.RoleID === RoleID))
    if (role)
      return role.Name
    return ''
  }
  getCrewDetails(Crew: any, CrewID: any) {
    let crew: any = Crew.find((crew) => (crew.CrewID === CrewID))
    if (crew)
      return crew.Name
    return ''
  }
  getHeartRateDetails(HeartRate:any,HeartRateID:any){
    console.log(HeartRateID)
    let HR:any = HeartRate.find((heartrate) => (heartrate.HeartRateID === HeartRateID))
    if(HR)
      return HR.HRIndex
    return ''
  }
  getBPDetails(BloodPressure:any,BloodPressureID:any){
    let BP:any = BloodPressure.find((bloodpressure) => (bloodpressure.BloodPressureID === BloodPressureID))
    if(BP)
      return BP.BPIndex
    return ''
  }
  getHeatIndexDetails(HeatIndexDetails:any,HeatIndexID:any){
    let HI:any = HeatIndexDetails.find((heatindex) => (heatindex.HeatIndexID === HeatIndexID))
    if(HI)
      return HI.HIIndex
    return ''
  }
  getOxygenDetails(oxygenData:any,SpO2ID:any){
    let oxy:any = oxygenData.find((spo2) => (spo2.SpO2ID === SpO2ID))
    if(oxy)
      return oxy.SpO2Index
    return ''
  }
  getDevices(devices:any,personID:any){
    let devicelist:string[] = devices.filter((person) => (person.PersonID === personID)).map(dev => dev.DeviceID)
    console.log(devicelist)
    return devicelist;
  }

}
