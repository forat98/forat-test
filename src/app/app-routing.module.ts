import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home/home.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserLoginComponent } from './user-login/user-login.component';
const routes: Routes = [
  {
          path: '',
          pathMatch: 'full',
          redirectTo: 'home'
        },
{
  path: '',component:HomeComponent,
children:[
{

  path: 'card-list',
  component:CardListComponent,
  canActivate: [AuthGuard]

},
{
  path:'user-form',
  component:UserFormComponent
},]},
  {
    path:'login',
    component:UserLoginComponent
  },
];








@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: []
})
export class AppRoutingModule { }
