import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ShotgunComponent } from "./shotgun/shotgun.component";
import { DriverComponent } from "./driver/driver.component";

const routes: Routes = [
  { path: '', pathMatch:'full', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'shotgun', component: ShotgunComponent },
  { path: 'driver', component: DriverComponent },  
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
