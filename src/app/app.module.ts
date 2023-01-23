import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleDetailComponent } from './ArticleDetail/ArticleDetail.component';
import { MenuItemComponent } from './MenuItem/MenuItem.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleDetailComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
