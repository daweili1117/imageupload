import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestheaderService } from '../restheader.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TeamDetails } from './team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

 
  constructor(private httpClient: HttpClient, private restheaderService: RestheaderService) { }
  
  getTeam(): Observable<TeamDetails[]>{
    return this.httpClient.get<any>(environment.host + 'team_json', this.restheaderService.httpheader);

  }
  
  }

