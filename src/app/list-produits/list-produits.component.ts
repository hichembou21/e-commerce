import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produit } from '../entities/produit';
// import { ProduitsService } from '../services/produits.service';
import { PanierService } from '../services/panier.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {

  produits:Produit[];
  // panier:Produit[];


  constructor(private panierService: PanierService, private dataService: DataService) {

   }

  ngOnInit() {
    this.dataService.getAll().subscribe(value => {
      this.produits = value  
      // console.log(this.produits);
    });
    console.log("ok listProduits");  
  }

  addProduitToCart(produit){
    if (!produit.added) {
      this.panierService.addProduitToCart(produit);
      this.produits = this.dataService.setProduit(this.produits.indexOf(produit));
    }else {
      alert("you have already added this product");
    }
  }
}

// const list:Produit[]= [
//   {id:1, name:'Samsung galaxy S8', type:'phone', price:500, color:'black', nbPieces:20, picture:'sgs8.png'},
//   {id:2, name:'Samsung galaxy S7', type:'phone', price:400, color:'gris', nbPieces:30, picture:'sgs7.png'},
//   {id:3, name:'Samsung galaxy note4', type:'phone', price:350, color:'white', nbPieces:25, picture:'sgn4.png'},
//   {id:4, name:'Samsung galaxy note7', type:'phone', price:350, color:'blue', nbPieces:25, picture:'phone.jpg'},
//   {id:5, name:'Appel iphone7', type:'phone', price:400, color:'gris', nbPieces:25, picture:'iphone7.png'},
//   {id:6, name:'Appel iphone8', type:'phone', price:500, color:'black', nbPieces:25, picture:'iphone8.jpg'},
//   {id:7, name:'Samsung tab 6', type:'phone', price:300, color:'white', nbPieces:25, picture:'st6.jpg'},
//   {id:8, name:'Appel iphone6', type:'phone', price:350, color:'gris', nbPieces:25, picture:'iphone6.jpg'},
  
// ];
