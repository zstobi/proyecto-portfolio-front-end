import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditEducationComponent } from './components/sections/ed/edit-education/edit-education.component';
import { NewEducationComponent } from './components/sections/ed/new-education/new-education.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'ed/add', component: NewEducationComponent},
  {path: 'ed/update/:id', component: EditEducationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
