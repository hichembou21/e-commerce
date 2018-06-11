import { Component, Input } from '@angular/core';
import { Produit } from './entities/produit';
import { PanierService } from './services/panier.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  produits:Produit[];
  panier:Produit[];

  constructor(private panierService: PanierService, private dataService: DataService) {

  }
  
  
}
