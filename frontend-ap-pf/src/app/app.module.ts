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
import { HttpClientModule } from '@angular/common/http';

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
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
