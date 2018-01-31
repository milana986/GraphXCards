import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Card } from '../../model/card';
import { GrafickeService } from '../../services/graficke.service';

@Component({
  selector: 'g-graficka-detail',
  templateUrl: './graficka-detail.component.html',
  styleUrls: ['./graficka-detail.component.css']
})
export class GrafickaDetailComponent implements OnInit {
  @Input() card:Card;
  @Output() emiter = new EventEmitter<Card>();

  newCard:Card;
  										  
  constructor( private GrafickeService: GrafickeService ) { }

  ngOnInit() {
  }

  changeGrade(num:string){
  	this.newCard = new Card(this.card);
  	this.newCard.grade += Number(num);
  	this.GrafickeService.saveCard(this.newCard).subscribe((data)=>{
  		this.emiter.emit(data);     
   	})	
  }

}
