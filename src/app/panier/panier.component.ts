import { Component, OnInit } from '@angular/core';
import { PanierService } from '../services/panier.service';
import { Produit } from '../entities/produit';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  panier:Produit[];

  constructor(private panierService: PanierService) {

   }

  ngOnInit() {
    this.panier = this.panierService.allProduits();      
  }

}
