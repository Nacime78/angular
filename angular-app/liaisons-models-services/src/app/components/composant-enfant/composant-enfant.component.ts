import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-composant-enfant',
  templateUrl: './composant-enfant.component.html',
  styleUrls: ['./composant-enfant.component.css']
})
export class ComposantEnfantComponent implements OnInit {

  @Input() dataDeParent!: any;

  @Output() eventGenerated: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.dataDeParent);
  }

  transmettreElement(el: string){
    this.eventGenerated.emit(el);
  }

}
