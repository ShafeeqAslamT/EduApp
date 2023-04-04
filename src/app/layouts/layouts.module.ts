import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: LayoutsComponent,
    children: [
      { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
      { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
      { path: '', redirectTo: 'auth', pathMatch: 'full' }
    ]
  }
];


@NgModule({
  declarations: [
    LayoutsComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class LayoutsModule { }
