import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementComponent } from './components/management/management.component';
import { ProgrammingComponent } from './components/programming/programming.component';
import { RolesComponent } from './components/roles/roles.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { UsersComponent } from './components/users/users.component';
import { ReportsComponent } from './components/reports/reports.component';

const routes: Routes = [
  { path: '', redirectTo: 'roles', pathMatch: 'full' },

  { path: 'programming', component: ProgrammingComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'users', component: UsersComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'roles', component: RolesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
