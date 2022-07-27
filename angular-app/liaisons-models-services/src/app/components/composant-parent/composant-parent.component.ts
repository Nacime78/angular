import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-composant-parent',
  templateUrl: './composant-parent.component.html',
  styleUrls: ['./composant-parent.component.css']
})
export class ComposantParentComponent implements OnInit {

  public data!: any;
  public clickedData!: string;

  constructor() { }

  ngOnInit(): void {
    this.data = {
      nom: "Dubois",
      prenom: "Jean-Claude",
      fonction: "Manager",
    }
  }

  receptionEvenement(ev:string){
    console.log(ev);
    this.clickedData = ev;
  }
}
