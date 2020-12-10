import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { BloodPressureService } from './blood-pressure.service';
import { BloodPressureData } from './blood-pressure.model';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
import { NotificationService } from '../../shared/notification.service';
import {BloodPressureDialogComponent} from './blood-pressure-dialog/blood-pressure-dialog.component'

@Component({
  selector: 'app-blood-pressure',
  templateUrl: './blood-pressure.component.html',
  styleUrls: ['./blood-pressure.component.scss']
})
export class BloodPressureComponent implements OnInit {

  constructor(private bloodPressureService: BloodPressureService,
              private notificationService: NotificationService,
              private dialog: MatDialog,
              private changeDetectorRefs: ChangeDetectorRef) { }

  displayedColumns: string[] = 
  [
      'BPIndex', 'LowMAP', 'NormalLowMAP', 'NormalHighMAP', 'HighMAP', 'Actions'
  ];
  
  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;

  

  dataSource = new MatTableDataSource<BloodPressureData>();

  

  ngOnInit() {
    console.log('================> bloodPressureComponent ngOnInit');
    this.getBloodPressure();
  }

  getBloodPressure() {
    this.bloodPressureService.getBloodPressure().subscribe(
      (data) => {
        if (data.length > 0) {
          console.log('BloodPressureList ', data);
          this.dataSource.data = data;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.changeDetectorRefs.detectChanges();
        }
      },
      error => {
        console.log('Blood Pressure component is not working', error)
      }
    );
  }

  addBloodPressure() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    const dialogRef = this.dialog.open(BloodPressureDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'New') {
        let bloodPressure: BloodPressureData;
        bloodPressure = result.data;
        this.dataSource.data.push(bloodPressure);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  updateBloodPressure(bloodPressure: BloodPressureData){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = bloodPressure;
    const dialogRef = this.dialog.open(BloodPressureDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result.event ==='Edit'){
        let bloodPressure: BloodPressureData;
        bloodPressure = result.data;
        let index = this.dataSource.data.findIndex( e=> e.BloodPressureID === bloodPressure.BloodPressureID)
        this.dataSource.data[index] = bloodPressure;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
      });
  }

  deleteBloodPressure(id: BloodPressureData) {
    var displaymessage: string = 'Are you sure you want to remove this MAP?';
    this.openDialog(displaymessage, id);
  }

  openDialog(message: string, id: BloodPressureData): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '50rem',
      data: {message: message}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result.event);
      if(result.event === 'Remove') {
        this.bloodPressureService.deleteBloodPressure(id).subscribe(
          (data)=>{
            this.dataSource.data = this.dataSource.data.filter(item => item.BloodPressureID!=id.BloodPressureID)              
            this.notificationService.success('Successfully Deleted');
          },
          error => {
            console.log('error', error);
            this.notificationService.error('Error occurred while deleting the MAP');
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
