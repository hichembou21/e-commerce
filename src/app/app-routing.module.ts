import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { IndexComponent } from './index/index.component';
import { PanierComponent } from './panier/panier.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';

const routes:Routes = [
  { path: '', component: ListProduitsComponent },
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
