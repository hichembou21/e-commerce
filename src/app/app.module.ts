import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";

import { ProduitsService } from "./services/produits.service";
import { PanierService } from "./services/panier.service";

import { AppComponent } from './app.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { IndexComponent } from './index/index.component';
import { PanierComponent } from './panier/panier.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ListProduitsComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    PanierComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProduitsService,
    PanierService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
