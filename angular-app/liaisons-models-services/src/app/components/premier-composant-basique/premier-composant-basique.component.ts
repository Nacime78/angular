import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premier-composant-basique',
  templateUrl: './premier-composant-basique.component.html',
  styleUrls: ['./premier-composant-basique.component.css']
})
export class PremierComposantBasiqueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this);
    
  }

}
