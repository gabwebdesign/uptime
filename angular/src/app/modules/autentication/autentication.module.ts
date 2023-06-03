import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticationRoutingModule } from './autentication-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AutenticationRoutingModule,
    FormsModule
  ]
})
export class AutenticationModule { }
