import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liaison-unidirectionnelle',
  templateUrl: './liaison-unidirectionnelle.component.html',
  styleUrls: ['./liaison-unidirectionnelle.component.css']
})
export class LiaisonUnidirectionnelleComponent implements OnInit {

  // création d'une propriété public 'texte'
  // le point d'exclamation qui suit le nom de la propriété
  // permet de ne pas devoir initialiser immédiatement.
  // grâce au point d'exclamation on promet en quelque sorte à Angular
  //d'initialiser la propriété ultérieurement

  public texte!: string;

  constructor() { }

  ngOnInit(): void {
    // initialisation de la propriété 'texte'
    this.texte = "Ceci est mon joli texte";
  }

}
