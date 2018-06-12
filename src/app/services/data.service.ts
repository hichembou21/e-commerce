import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Produit } from 'src/app/entities/produit';
// import { LocalStorageService } from './local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  produits: Produit[];

  constructor(private httpClient : HttpClient) { 
    if (this.read('produits') === null) {
      this.produits = [];
      this.save();
    }
    this.produits = this.read('produits');
  }

  getAll() {
    return this.httpClient.get<Produit[]>("http://localhost:3000/produits/")
    .pipe(tap(res => {
      this.produits = res;
      this.save();
    }
    )).pipe(map( res => this.produits = res));
  }

  setProduit(id) {
    this.produits[id].added = !this.produits[id].added;
    this.save();
    return this.produits;
  }

  private save():void {
    let json:string = JSON.stringify(this.produits);;
    localStorage.setItem('produits', json);
  }

  private read(itemName:string) {
    let json = localStorage.getItem(itemName);
    return JSON.parse(json);
  }
}
