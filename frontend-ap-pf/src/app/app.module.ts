import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AbtmComponent } from './components/sections/abtm/abtm.component';
import { PrjsComponent } from './components/sections/prjs/prjs.component';
import { EdComponent } from './components/sections/ed/ed.component';
import { TechsComponent } from './components/sections/techs/techs.component';
import { SsComponent } from './components/sections/ss/ss.component';
import { IdiomsComponent } from './components/sections/idioms/idioms.component';
import { FooterComponent } from './components/sections/footer/footer.component';
import { HeaderComponent } from './components/sections/header/header.component';
import { NavBarComponent } from './components/sections/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { EditionModeComponent } from './components/edition-mode/edition-mode.component';
import { NavBarLogoutComponent } from './components/sections/nav-bar-logout/nav-bar-logout.component';
import { NewEducationComponent } from './components/sections/ed/new-education/new-education.component';
import { EditEducationComponent } from './components/sections/ed/edit-education/edit-education.component';
import { NewAboutMeComponent } from './components/sections/abtm/new-about-me/new-about-me.component';
import { EditAboutMeComponent } from './components/sections/abtm/edit-about-me/edit-about-me.component';
import { NewProjectComponent } from './components/sections/prjs/new-project/new-project.component';
import { EditProjectComponent } from './components/sections/prjs/edit-project/edit-project.component';
import { NewSoftSkillComponent } from './components/sections/ss/new-soft-skill/new-soft-skill.component';
import { EditSoftSkillComponent } from './components/sections/ss/edit-soft-skill/edit-soft-skill.component';
import { NewTechComponent } from './components/sections/techs/new-tech/new-tech.component';
import { EditTechComponent } from './components/sections/techs/edit-tech/edit-tech.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AbtmComponent,
    PrjsComponent,
    EdComponent,
    TechsComponent,
    SsComponent,
    IdiomsComponent,
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
    EditionModeComponent,
    NavBarLogoutComponent,
    NewEducationComponent,
    EditEducationComponent,
    NewAboutMeComponent,
    EditAboutMeComponent,
    NewProjectComponent,
    EditProjectComponent,
    NewSoftSkillComponent,
    EditSoftSkillComponent,
    NewTechComponent,
    EditTechComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
