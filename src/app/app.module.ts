import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { CardListComponent } from './card-list/card-list.component';
import { AuthGuard } from './guard/auth.guard';
import { UserFormComponent } from './user-form/user-form.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRoutingModule } from './app-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HomeComponent } from './home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    CardListComponent,
    UserLoginComponent,
    UserFormComponent,
    HomeComponent
   ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    HttpClientModule,
   AppRoutingModule,
   Ng2SearchPipeModule,
   FormsModule
  ],
    providers: [
      AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
