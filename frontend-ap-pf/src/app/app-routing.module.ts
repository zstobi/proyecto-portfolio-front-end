import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { EditionModeComponent } from './components/edition-mode/edition-mode.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditEducationComponent } from './components/sections/ed/edit-education/edit-education.component';
import { NewEducationComponent } from './components/sections/ed/new-education/new-education.component';
// import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'editionMode', component: EditionModeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'ed/add', component: NewEducationComponent},
  {path: 'ed/update/:id', component: EditEducationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
