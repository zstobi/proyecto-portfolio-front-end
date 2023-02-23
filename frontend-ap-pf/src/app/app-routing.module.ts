import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditAboutMeComponent } from './components/sections/abtm/edit-about-me/edit-about-me.component';
import { NewAboutMeComponent } from './components/sections/abtm/new-about-me/new-about-me.component';
import { EditEducationComponent } from './components/sections/ed/edit-education/edit-education.component';
import { NewEducationComponent } from './components/sections/ed/new-education/new-education.component';
import { EditProjectComponent } from './components/sections/prjs/edit-project/edit-project.component';
import { NewProjectComponent } from './components/sections/prjs/new-project/new-project.component';
import { EditSoftSkillComponent } from './components/sections/ss/edit-soft-skill/edit-soft-skill.component';
import { NewSoftSkillComponent } from './components/sections/ss/new-soft-skill/new-soft-skill.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'abtm/add', component: NewAboutMeComponent},
  {path: 'abtm/update/:id', component: EditAboutMeComponent},
  {path: 'prjs/add', component: NewProjectComponent},
  {path: 'prjs/update/:id', component: EditProjectComponent},
  {path: 'ed/add', component: NewEducationComponent},
  {path: 'ed/update/:id', component: EditEducationComponent},
  // {path: 'techs/add', component: NewTechsComponent},
  // {path: 'techs/update/:id', component: EditTechsComponent},
  {path: 'ss/add', component: NewSoftSkillComponent},
  {path: 'ss/update/:id', component: EditSoftSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
