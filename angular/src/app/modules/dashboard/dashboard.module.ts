import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DevComponent } from './dev/dev.component';
import { QaComponent } from './qa/qa.component';
import { AdminComponent } from './admin/admin.component';
import { UserCardModule } from 'src/app/share/components/user-card/user-card.module';


@NgModule({
  declarations: [
    DevComponent,
    QaComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    UserCardModule,
  ]
})
export class DashboardModule { }
