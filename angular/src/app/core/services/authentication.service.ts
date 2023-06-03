import { Injectable } from '@angular/core';
import { SecurityService } from './security.service';
import { EventsHubService } from './events-hub.service';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/share/models/credentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public token: string='';
  public userId: number=0;
  public roles: string='';
  private loggedUser;

  constructor(
    private readonly securityService: SecurityService,
    private readonly eventSHubService: EventsHubService,
    private readonly localStorageService: LocalStorageService,
    private router: Router

  ) { 

    const authData = this.localStorageService.get('authData', null);
      if(authData) {
        this.token = authData.token;
        this.loggedUser = authData.loggedUser;
        this.userId = authData.userId;
        this.roles = authData.roles;
        this.eventSHubService.setLoggedIn(true);
      }

  }

  public login(credentials:Credentials): Promise<any> { 
    return new Promise((resolve, reject) => {
      
        this.securityService.login(credentials).subscribe(
          (result) => { 
            const userLoggedIn= result.find((a:any)=>{
              if(a.user == credentials.user && a.password == credentials.password){
                this.token = a.token;
                this.userId = a.userId;

                this.securityService.getUser(this.userId).subscribe(
                  (result)=>{
                    this.loggedUser = result;
    
                    this.eventSHubService.setLoggedIn(true)
                    //this.router.navigateByUrl('/dashboard');
        
                    this.localStorageService.set('authData', {
                      token: this.token,
                      loggedUser: this.loggedUser,
                    });
    
                    resolve(result);
    
                    }            
                  )
                
              }
            })
            
          },
          (error) => { 
            reject(error)
          }
        )


     })
  }

  public getToken(): string {
    return this.token;
  }

  public getLoggedUser(): any {
    return this.loggedUser;
  }

  public isLoggedIn(): boolean {
    return this.eventSHubService.loggedIns$.getValue();
  }

  public logout(): void {
    // API call for logout if exist then clean the localstorage
    this.securityService.logout();
    this.localStorageService.deleteAll();
    this.eventSHubService.setLoggedIn(false);
    this.router.navigate(['/']);
  }

}
