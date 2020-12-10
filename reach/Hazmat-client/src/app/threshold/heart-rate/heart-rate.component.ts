import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { HeartRateService } from './heart-rate.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { HearrateDetails } from './heart-rate.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
import { HeartRateAddComponent} from './heart-rate-add/heart-rate-add.component';
import { NotificationService } from '../../shared/notification.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-heart-rate',
  templateUrl: './heart-rate.component.html',
  styleUrls: ['./heart-rate.component.scss']
})
export class HeartRateComponent implements OnInit {

  constructor(private heartRateService:HeartRateService,
              private notificationService: NotificationService,
              private dialog: MatDialog,
              private changeDetectorRefs: ChangeDetectorRef,) { }

  dataSource = new MatTableDataSource<HearrateDetails>();

  displayedColumns: string[] = ['HRIndex', 'AgeGroup', 'LowCritical', 'LowTargetHR', 'HighTargetHR', 'HighCritical', 'Actions'];
 

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit() {
    console.log('================> heartrateComponent ngOnInit')
    this.getHeartRate();
  }

  getHeartRate(){
    this.heartRateService.getHeartRate().subscribe(
      (data) =>{ 
        if(data.length > 0) {  
          console.log('HeartRateList ', data);
          this.dataSource.data = data;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;            
          this.changeDetectorRefs.detectChanges();
      }
    },
    error => {
      console.log('Heart rate component not working', error)
    }
  );
  }

  addHeartRate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    const dialogRef = this.dialog.open(HeartRateAddComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if(result.event ==='New'){
        let heartRate: HearrateDetails;
        heartRate = result.data;
        this.dataSource.data.push(heartRate);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
      });
  }

  updateHeartRate(heartRate: HearrateDetails){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = heartRate;
    const dialogRef = this.dialog.open(HeartRateAddComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result.event ==='Edit'){
        let heartRate: HearrateDetails;
        heartRate = result.data;
        let index = this.dataSource.data.findIndex( e=> e.HeartRateID === heartRate.HeartRateID)
        this.dataSource.data[index] = heartRate;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
      });
  }

  deleteHeartRate(id: HearrateDetails) {
    var displaymessage: string = 'Are you sure you want to remove this Heart Rate?';
    this.openDialog(displaymessage, id);
  }

  openDialog(message: string, id: HearrateDetails): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '50rem',
      data: {message: message}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result.event);
      if(result.event === 'Remove') {
        this.heartRateService.deleteHeartRate(id).subscribe(
          (data)=>{
            this.dataSource.data = this.dataSource.data.filter(item => item.HeartRateID!=id.HeartRateID)              
            this.notificationService.success('Successfully Deleted');
          },
          error => {
            console.log('error', error);
            this.notificationService.error('Error occurred while deleting the Heart Rate');
        });
        }
        else if (result.event === 'Cancel'){
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
}




