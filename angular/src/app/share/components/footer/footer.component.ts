import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { EventsHubService } from 'src/app/core/services/events-hub.service';
import { UserService } from 'src/app/core/services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'footer[app-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  host:{
    class:'bg-light position-fixed bottom-0'
  }
})
export class FooterComponent implements OnInit {

  userStates = [];
  isLoggedIn: boolean=false;
  idLoggedUser:number=0;
  constructor(
    private readonly userServices:UserService,
    private readonly evenHubService:EventsHubService,
    private readonly authenticationService:AuthenticationService) { }

  ngOnInit(): void {
    this.userServices.getUserStates().subscribe((res)=>{
      this.userStates = res;
    })

    this.evenHubService.loggedIns$.subscribe(
      (result) => { 
        this.isLoggedIn = result;
        if(this.isLoggedIn) { 
          this.idLoggedUser= this.authenticationService.getLoggedUser().id;
        }
      }
    )
  }

  setState(newState:string){
    this.userServices.sendState(this.idLoggedUser,newState).subscribe(()=>{
      this.userServices.userDev$.next(1);
      this.userServices.userQA$.next(1);
    });
  }

}
