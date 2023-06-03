import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  host:{
    class:'d-flex justify-content-center flex-column'
  }
})
export class UserCardComponent implements OnInit {

  showingSkills:boolean=false;
  ctx:any='';
  myChart:any='';

  @Input() user:User={
    id:0,
    role:'',
    name:'',
    state:''
  };

  constructor() { 
  }

  ngOnInit(): void {
    
  }

  showSkills(user:User){
    this.showingSkills=!this.showingSkills;
  }

  createChart(){

  }

}
