import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { OxygenData } from './oxygen.model';
import { OxygenService } from './oxygen.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from '../../shared/notification.service';
import { DialogComponent } from '../../dialog/dialog.component';
import {OxygenDialogComponent} from './oxygen-dialog/oxygen-dialog.component'

@Component({
  selector: 'app-oxygen',
  templateUrl: './oxygen.component.html',
  styleUrls: ['./oxygen.component.scss']
})
export class OxygenComponent implements OnInit {
  
  constructor(private oxygenService: OxygenService,
              private notificationService: NotificationService,
              private dialog: MatDialog,
              private changeDetectorRefs: ChangeDetectorRef) { }
  displayedColumns: string[] = 
  [
      'SpO2Index', 'Low', 'Normal', 'Actions'
  ];
  
  dataSource= new MatTableDataSource<OxygenData>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;

  

  ngOnInit() {
    console.log('================> oxygenComponent ngOnInit');
    this.getOxygenData();
  }

  getOxygenData() {
    this.oxygenService.getOxygenData().subscribe(
      (data) => {
        if (data.length > 0) {
          console.log('OxygenList ', data);
          this.dataSource.data = data;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.changeDetectorRefs.detectChanges();
        }
      },
      error => {
        console.log('Oxygen component is not working', error)
      }
    );
  }

  addOxygen() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    const dialogRef = this.dialog.open(OxygenDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'New') {
        let oxygen: OxygenData;
        oxygen = result.data;
        this.dataSource.data.push(oxygen);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  updateOxygen(oxygen: OxygenData){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = oxygen;
    const dialogRef = this.dialog.open(OxygenDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result.event ==='Edit'){
        let oxygen: OxygenData;
        oxygen = result.data;
        let index = this.dataSource.data.findIndex( e=> e.SpO2ID === oxygen.SpO2ID)
        this.dataSource.data[index] = oxygen;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
      });
  }

  deleteOxygen(id: OxygenData) {
    var displaymessage: string = 'Are you sure you want to remove this Blood Oxygen ?';
    this.openDialog(displaymessage, id);
  }

  openDialog(message: string, id: OxygenData): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '50rem',
      data: {message: message}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result.event);
      if(result.event === 'Remove') {
        this.oxygenService.deleteOxygen(id).subscribe(
          (data)=>{
            this.dataSource.data = this.dataSource.data.filter(item => item.SpO2ID!=id.SpO2ID)              
            this.notificationService.success('Successfully Deleted');
          },
          error => {
            console.log('error', error);
            this.notificationService.error('Error occurred while deleting the Blood Oxygen');
        });
        }
        else if (result.event === 'Cancel'){
          this.notificationService.warn('Operation Cancelled');
        }
    });
}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
