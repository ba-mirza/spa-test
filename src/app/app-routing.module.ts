import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { AuthGuard }
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: []},
  {path: 'login', component: AuthComponent},

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
