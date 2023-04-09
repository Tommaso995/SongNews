import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { AsideSinistraComponent } from './core/aside-sinistra/aside-sinistra.component';
import { AsideDestraComponent } from './core/aside-destra/aside-destra.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ChiSiamoComponent } from './pages/chi-siamo/chi-siamo.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AsideSinistraComponent,
    AsideDestraComponent,
    HomeComponent,
    ContactComponent,
    ChiSiamoComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    NavbarComponent,
    FooterComponent,
    AsideSinistraComponent,
    AsideDestraComponent,
    HomeComponent,
    ContactComponent,
    ChiSiamoComponent,
    GalleryComponent
  ]
})
export class AppModule { }
