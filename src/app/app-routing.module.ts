import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { IndexComponent } from './index/index.component';
import { PanierComponent } from './panier/panier.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { DetailProduitComponent } from 'src/app/detail-produit/detail-produit.component';
import { AppComponent } from 'src/app/app.component';
import { IndexComponent } from 'src/app/index/index.component';

const routes:Routes = [
  { path: '', component: IndexComponent },
  { path: 'list-produits', component: ListProduitsComponent },  
  { path: 'detail-produit/:id', component: DetailProduitComponent }, 
  { path: 'panier', component: PanierComponent },
  { path: '**', component: NotFoundComponent },
  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
