import { Injectable } from '@angular/core';
import { Produit } from "../entities/produit";

@Injectable()
export class ProduitsService {

  produits:Produit[];
  
    constructor() {
      if (this.read('persons') === null) {
        this.produits = [];
        this.save();
      }
      this.produits = this.read('persons');
    }
    
    allProduits():Produit[] {
      return this.produits;
    }
  
    addProduit(person:Produit):Produit[] {
      this.produits.push(person);
      this.save();
      return this.produits;
    }
  
    private save():void {
      let json:string = JSON.stringify(this.produits);;
      localStorage.setItem('persons', json);
    }
  
    private read(itemName:string) {
      let json = localStorage.getItem(itemName);
      return JSON.parse(json);
    }

}
