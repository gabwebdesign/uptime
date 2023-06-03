import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/share/models/user.model';

@Component({
  selector: 'section[app-qa]',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.scss']
})
export class QaComponent implements OnInit {

  qas:User[]=[];

  constructor(private readonly userService:UserService) { }

  ngOnInit(): void {
    this.gettingUsers();
    this.userService.userQA$.subscribe(()=>{
      this.gettingUsers();
    })
  }

  gettingUsers(){
    this.userService.getUserQA().subscribe((res)=>{
      this.qas=res;
    });
  }

}
