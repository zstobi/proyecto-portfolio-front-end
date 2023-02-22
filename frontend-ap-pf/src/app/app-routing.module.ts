import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditAboutMeComponent } from './components/sections/abtm/edit-about-me/edit-about-me.component';
import { NewAboutMeComponent } from './components/sections/abtm/new-about-me/new-about-me.component';
import { EditEducationComponent } from './components/sections/ed/edit-education/edit-education.component';
import { NewEducationComponent } from './components/sections/ed/new-education/new-education.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'abtm/add', component: NewAboutMeComponent},
  {path: 'abtm/update/:id', component: EditAboutMeComponent},
  // {path: 'prjs/add', component: NewProjectsComponent},
  // {path: 'prjs/update/:id', component: EditProjectsComponent},
  {path: 'ed/add', component: NewEducationComponent},
  {path: 'ed/update/:id', component: EditEducationComponent},
  // {path: 'techs/add', component: NewTechsComponent},
  // {path: 'techs/update/:id', component: EditTechsComponent},
  // {path: 'ss/add', component: NewEducationComponent},
  // {path: 'ss/update/:id', component: EditEducationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
