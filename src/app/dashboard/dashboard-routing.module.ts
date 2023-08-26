import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboradLayoutComponent } from './layouts/dashborad-layout/dashborad-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DashboradLayoutComponent,
    // children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
