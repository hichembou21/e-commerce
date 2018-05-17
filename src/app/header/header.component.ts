import { Component, OnInit, Input } from '@angular/core';
import { PanierService } from '../services/panier.service';
import { Produit } from '../entities/produit';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  panier:Produit[] = [];
  nbrCommande:number = this.panier.length;
  
  constructor(private panierService:PanierService) {

   }
 
  ngOnInit() {
   this.panier = this.panierService.allProduits();
   this.nbrCommande = 0;
  }

  clrearCart(){
    this.panier = this.panierService.clearCart();
    
  }

  
}
