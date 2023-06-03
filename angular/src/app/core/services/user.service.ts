import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../../config/config';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/share/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiPath = CONFIG.apiPath;
  public userDev$ = new Subject();
  public userQA$ = new Subject();

  constructor(
    private readonly http: HttpClient) { }

  public getUsers(): Observable<any>{
    return this.http.get(`${this.apiPath}/users`);
  }

  public getUser(userID: number): Observable<any>{
    return this.http.get(`${this.apiPath}/users/${userID}`);
  }

  public getUserDev(): Observable<any>{
    return this.http.get(`${this.apiPath}users?role=dev`);
  }

  public getUserQA(): Observable<any>{
    return this.http.get(`${this.apiPath}users?role=qa`);
  }

  public getUserStates(): Observable<any>{
    return this.http.get(`${this.apiPath}states`);
  }

  public sendState(userId:number,newState:string):Observable<any>{
    return this.http.patch(`${this.apiPath}users/${userId}/`,{ "state":newState });
  };

  public deleteUser(userId:number):Observable<any>{
    return this.http.delete(`${this.apiPath}users/${userId}`);
  };

}
