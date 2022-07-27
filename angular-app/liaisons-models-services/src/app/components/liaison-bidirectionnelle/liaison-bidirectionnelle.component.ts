import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liaison-bidirectionnelle',
  templateUrl: './liaison-bidirectionnelle.component.html',
  styleUrls: ['./liaison-bidirectionnelle.component.css']
})
export class LiaisonBidirectionnelleComponent implements OnInit {
  // pour créer  une liaison bidirectionnelle entre une classe et son html
  // il faudra équiper le module principal de la classe FormsModule

  public texte!: string;

  constructor() { }

  ngOnInit(): void {
    // initialisation de la propriété 'texte'
    this.texte = "mon texte est relié bidirectionnellement maintenant !";
  }

}
