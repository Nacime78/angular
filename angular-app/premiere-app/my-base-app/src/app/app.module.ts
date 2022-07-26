import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/general/home/home.component';
import { AboutComponent } from './pages/general/about/about.component';
import { ContactComponent } from './pages/general/contact/contact.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';

// import de la locale
import * as fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { UcfirstPipe } from './pipes/ucfirst.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    UcfirstPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // provider de la locale:
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})

export class AppModule
{
  constructor(){
    registerLocaleData(fr.default);
  }
}
