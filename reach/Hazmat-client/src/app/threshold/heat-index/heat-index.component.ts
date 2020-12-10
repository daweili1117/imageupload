import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { HeatIndexService } from './heat-index.service';
import { HeatIndexDetails } from './heat-index.model';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
import { HeatIndexDialogComponent } from './heat-index-dialog/heat-index-dialog.component';
import { NotificationService } from '../../shared/notification.service';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-heat-index',
  templateUrl: './heat-index.component.html',
  styleUrls: ['./heat-index.component.scss']
})
export class HeatIndexComponent implements OnInit {

  constructor(private heatIndexService:HeatIndexService,
              private notificationService: NotificationService,
              private dialog: MatDialog,
              private changeDetectorRefs: ChangeDetectorRef) { }

  dataSource = new MatTableDataSource<HeatIndexDetails>();

  displayedColumns: string[] = ['HIIndex', 'ModerateRisk', 'HighRisk', 'Actions'];
 

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;


  ngOnInit() {
    console.log('================> heatIndexComponent ngOnInit')
    this.getHeatIndex();
  }
  getHeatIndex(){
    this.heatIndexService.getHeatIndex().subscribe(
      (data) =>{ 
        if(data.length > 0) {  
          console.log('HeatIndexList ', data);
          this.dataSource.data = data;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;  
          this.changeDetectorRefs.detectChanges();    
      }
    },
    error => {
      console.log('Heat Index component not working', error)
    }
  );
  }
  

  addHeatIndex() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    const dialogRef = this.dialog.open(HeatIndexDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'New') {
        let heatindex: HeatIndexDetails;
        heatindex = result.data;
        this.dataSource.data.push(heatindex);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  updateHeatIndex(heatIndex: HeatIndexDetails){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = heatIndex;
    const dialogRef = this.dialog.open(HeatIndexDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result.event ==='Edit'){
        let heatIndex: HeatIndexDetails;
        heatIndex = result.data;
        let index = this.dataSource.data.findIndex( e=> e.HeatIndexID === heatIndex.HeatIndexID)
        this.dataSource.data[index] = heatIndex;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
      });
  }

  deleteHeatIndex(id: HeatIndexDetails) {
    var displaymessage: string = 'Are you sure you want to remove this Heat Index?';
    this.openDialog(displaymessage, id);
  }

  openDialog(message: string, id: HeatIndexDetails): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '50rem',
      data: {message: message}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result.event);
      if(result.event === 'Remove') {
        this.heatIndexService.deleteHeatIndex(id).subscribe(
          (data)=>{
            this.dataSource.data = this.dataSource.data.filter(item => item.HeatIndexID!=id.HeatIndexID)              
            this.notificationService.success('Successfully Deleted');
          },
          error => {
            console.log('error', error);
            this.notificationService.error('Error occurred while deleting the Heat Index');
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