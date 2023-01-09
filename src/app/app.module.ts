import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FicheArticleComponent } from './fiche-article/fiche-article.component';
import { BoutonMenuComponent } from './bouton-menu/bouton-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FicheArticleComponent,
    BoutonMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
