import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ManagementComponent } from './components/management/management.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ProgrammingComponent } from './components/programming/programming.component';
import { ReportsComponent } from './components/reports/reports.component';
import { RolesComponent } from './components/roles/roles.component';
import { UsersComponent } from './components/users/users.component';
import { UtilsModule } from '../utils/utils.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CreateFormComponent } from './components/roles/components/create-form/create-form.component';

@NgModule({
  declarations: [
    ManagementComponent,
    ProfilesComponent,
    ProgrammingComponent,
    ReportsComponent,
    RolesComponent,
    UsersComponent,
    CreateFormComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UtilsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
  ],
})
export class HomeModule {}
