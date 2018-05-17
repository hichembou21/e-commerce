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

  prduits: Produit[];

  constructor(private httpClient : HttpClient) { }

  getAll() {
    return this.httpClient.get<Produit[]>("http://localhost:3000/produits/")
  }
}
