import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DevComponent } from './dev/dev.component';
import { QaComponent } from './qa/qa.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dev'
  },
  {
    path: 'dev',
    component:DevComponent
  },
  {
    path: 'qa',
    component:QaComponent
  },
  {
    path: 'admin',
    component:AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
