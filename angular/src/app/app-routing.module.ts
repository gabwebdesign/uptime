import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoggedGuard } from './core/guards/logged.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoggedGuard],
    loadChildren: () => import('./modules/autentication/autentication.module').then((m) => m.AutenticationModule)
  },
  {
    path: 'dashboard',
    canLoad: [AuthGuard],
    loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
