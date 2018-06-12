import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/entities/produit';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {

  produit: Produit;
  constructor(private dataService: DataService, private route: ActivatedRoute, private panierService: PanierService) { 
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
    this.produit = this.dataService.produits[+params['id']]; // (+) converts string 'id' to a number
    // console.log(this.produit);
    });
  }

  addProduitToCart(produit){
    if (!produit.added) {
      this.produit.added = true;
      this.panierService.addProduitToCart(this.produit);
    } else {
      
    }
    
    // this.change.emit(this.nbrCommande);
  }

}
