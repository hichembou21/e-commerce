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
  
  constructor(private panierService:PanierService) {

   }
 
  ngOnInit() {
   this.panier = this.panierService.getCart();
  }

  clrearCart(){
    this.panier = this.panierService.clearCart();
    
  }

  
}
