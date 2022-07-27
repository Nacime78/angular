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
import { PremierComposantBasiqueComponent } from './components/premier-composant-basique/premier-composant-basique.component';
import { LiaisonUnidirectionnelleComponent } from './components/liaison-unidirectionnelle/liaison-unidirectionnelle.component';
import { LiaisonBidirectionnelleComponent } from './components/liaison-bidirectionnelle/liaison-bidirectionnelle.component';
import { FormsModule } from '@angular/forms';
import { ComposantEnfantComponent } from './components/composant-enfant/composant-enfant.component';
import { ComposantParentComponent } from './components/composant-parent/composant-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    UcfirstPipe,
    PremierComposantBasiqueComponent,
    LiaisonUnidirectionnelleComponent,
    LiaisonBidirectionnelleComponent,
    ComposantEnfantComponent,
    ComposantParentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
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
