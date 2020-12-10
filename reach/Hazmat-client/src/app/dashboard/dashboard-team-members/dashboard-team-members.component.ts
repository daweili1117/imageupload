import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardDataService } from '../dashboard-data.service';

export interface MemberStats {
  hr: number;
  bp: string;
  heatIndex: number;
  spO2: number;
  resp: number;
}

const MEMBER_DATA: MemberStats[] = [
  {hr: 60, bp: '143/89', heatIndex: 89, spO2: 99, resp: 40}
]

@Component({
  selector: 'app-dashboard-team-members',
  templateUrl: './dashboard-team-members.component.html',
  styleUrls: ['./dashboard-team-members.component.scss']
})
export class DashboardTeamMembersComponent implements OnInit {

  displayedColumns: string[] = ['hr', 'bp', 'heatIndex', 'spO2', 'resp'];
  memberStats = new MatTableDataSource(MEMBER_DATA);
  team: any = {};

  constructor(private dashboardDataService: DashboardDataService) { 
    this.dashboardDataService.dashboardObj$.subscribe(
      data => {
        this.team = data;
      }
    )
  }

  ngOnInit(): void {
  }

}
