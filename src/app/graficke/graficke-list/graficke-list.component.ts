import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';

import { GrafickeService } from '../services/graficke.service';
import { Card } from '../model/card';
import { CardList } from '../model/card-list';


@Component({
  selector: 'g-graficke-list',
  templateUrl: './graficke-list.component.html',
  styleUrls: ['./graficke-list.component.css']
})
export class GrafickeListComponent implements OnInit {
  cards: Card[];
  count: number;

  params = {
  	"page": 1,
  	"pageSize": 5
  }

  constructor( private GrafickeService: GrafickeService) { }  // private route: ActivatedRoute

  ngOnInit() {

  	this.getCards();

  }

  getCards(params?:any){
  	if(params){
  		this.params.page = params.page || this.params.page;
  		this.params.pageSize = params.pageSize || this.params.pageSize;
  	}
  	this.GrafickeService.getAll(this.params).subscribe((data)=>{
  		console.log(this.params);
  		this.cards = data.results;
  		this.count = data.count;
  	})
  }



}
