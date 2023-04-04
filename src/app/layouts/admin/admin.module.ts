import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { HeaderStatsComponent } from './components/header-stats/header-stats.component';
import { FooterAdminComponent } from './components/footer-admin/footer-admin.component';
import { UsersComponent } from './users/users.component';
import { MaterialComponentModule } from 'src/app/core/material.component.module';
import { UserDropdownComponent } from './components/user-dropdown/user-dropdown.component';
import { CatalogsComponent } from './catalogs/catalogs.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'users', component: UsersComponent },
      { path: 'catalogs', component: CatalogsComponent },
    ]
  }
];

const COMPONENTS = [
  SidebarComponent,
  AdminNavbarComponent,
  HeaderStatsComponent,
  FooterAdminComponent,
  UserDropdownComponent
];

@NgModule({
  declarations: [
    AdminComponent,
    ...COMPONENTS,
    DashboardComponent,
    UsersComponent,
    CatalogsComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    MaterialComponentModule
  ]
})
export class AdminModule { }
