import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home/home.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserLoginComponent } from './user-login/user-login.component';
const routes: Routes = [
{path:'',component:HomeComponent,
children:[
  {
    path:'',redirectTo:'/Home',pathMatch:'full',

  }, {
  path: 'Home',
  component:HomeComponent,
  canActivate: [AuthGuard]
},
{
  path: 'card-list',
  component:CardListComponent,
  canActivate: [AuthGuard]

},

{
  path:'user-form',
  component:UserFormComponent,
  canActivate: [AuthGuard]

},]

},
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
