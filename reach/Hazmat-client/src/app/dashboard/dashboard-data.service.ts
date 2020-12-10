import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {
  dashboardObj = new Subject<any>();
  dashboardObj$ = this.dashboardObj.asObservable();

  constructor() { }

  publishDashboardObj(dashboardObj: any) {
    this.dashboardObj.next(dashboardObj);
  }

}