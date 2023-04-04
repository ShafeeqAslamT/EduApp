import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthNavbarComponent } from './components/auth-navbar/auth-navbar.component';
import { FooterSmallComponent } from './components/footer-small/footer-small.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '', component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ],
  }
];
const COMPONENTS = [
  AuthNavbarComponent,
  FooterSmallComponent
];
@NgModule({
  declarations: [
    AuthComponent, LoginComponent,
    ...COMPONENTS,
    RegisterComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
