import { Component, Input } from '@angular/core';
import { Produit } from './entities/produit';
import { PanierService } from './services/panier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  panier:Produit[];

  constructor(private panierService: PanierService) {

  }
  
  
}
