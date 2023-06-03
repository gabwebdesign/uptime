import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/share/models/user.model';

@Component({
  selector: 'section[app-dev]',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss']
})
export class DevComponent implements OnInit {

  users:User[]=[];

  constructor(private readonly userService:UserService) { 
  }

  ngOnInit(): void {
    this.gettingUsers();
    this.userService.userDev$.subscribe(()=>{
      this.gettingUsers();
    })
  }

  gettingUsers(){
    this.userService.getUserDev().subscribe((res)=>{
      this.users=res;
    });
  }
  

}
