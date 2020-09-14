import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { HomeComponent } from './home/home.component';
import { HomeNewComponent } from './home-new/home-new.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'person-details/:query',
    component: PersonDetailsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home-new',
    component: HomeNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
