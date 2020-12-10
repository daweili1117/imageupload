import { Component, OnInit, ViewChild } from '@angular/core';
import { TeamService } from './team.service';
import { MatTableDataSource } from '@angular/material/table';
import { TeamDetails } from './team.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(private teamService:TeamService) { }

  teamDetails: MatTableDataSource<TeamDetails>;

  displayedColumns: string[] = ['Name', 'Description'];
  display: string='teamDetails';

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    console.log('================> teamComponent ngOnInit')
    this.getTeam();
  }
  getTeam(){
    this.teamService.getTeam().subscribe(
      (data) =>{ 
        if(data.length > 0) {  
          console.log('teamList ', data);
          this.teamDetails = new MatTableDataSource(Array.from(data.values()));
          this.teamDetails.paginator = this.paginator;
          this.teamDetails.sort = this.sort;      
      }
    },
    error => {
      console.log('error', error)
    }
  );
  }
  applyFilter(filterValue: string) {
    this.teamDetails.filter = filterValue.trim().toLowerCase();

    if (this.teamDetails.paginator) {
      this.teamDetails.paginator.firstPage();
    }
  }

}


