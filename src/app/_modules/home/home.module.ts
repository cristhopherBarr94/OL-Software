import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ManagementComponent } from './components/management/management.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ProgrammingComponent } from './components/programming/programming.component';
import { ReportsComponent } from './components/reports/reports.component';
import { RolesComponent } from './components/roles/roles.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [ManagementComponent, ProfilesComponent, ProgrammingComponent, ReportsComponent, RolesComponent, UsersComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
