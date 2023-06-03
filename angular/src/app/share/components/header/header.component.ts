import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { EventsHubService } from 'src/app/core/services/events-hub.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'header[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host:{
    class:'mb-4'
  }
})
export class HeaderComponent implements OnInit {
  
  public isLoggedIn: boolean=false;
  public role:string='';
  public inDev=true;
  public inQA=false;

  constructor(
    private readonly evenHubService: EventsHubService,
    private readonly authenticationService:AuthenticationService,
    private readonly route:Router) { }

  ngOnInit(): void {
    this.evenHubService.loggedIns$.subscribe(
      (result) => { 
        this.isLoggedIn = result;
        if(this.isLoggedIn) { 
          this.role= this.authenticationService.getLoggedUser().role;
        }
      }
    );

    this.route.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          if(this.route.url == '/dashboard/dev'){
            this.inDev=true;
            this.inQA=false;
          }else if(this.route.url == '/dashboard/qa'){
            this.inQA =true;
            this.inDev=false;
          }
        }
      }
    );
  }

}
