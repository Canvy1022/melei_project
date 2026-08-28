import { Routes } from '@angular/router';
import { Header } from './features/header/header';
import { Login } from './features/login/login';

export const routes: Routes = [
//   { path: 'login', component: Login },
  { path: '', redirectTo: 'login', pathMatch: 'full' }

];
