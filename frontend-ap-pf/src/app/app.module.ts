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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
