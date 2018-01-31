import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'g-page-size',
  templateUrl: './page-size.component.html',
  styleUrls: ['./page-size.component.css']
})
export class PageSizeComponent implements OnInit {
  sizes: number[] = [5,10,20];
  @Output() emitPageSize = new EventEmitter<any>();
  newPageSize:number     //treba za class="active"

  constructor() { }

  ngOnInit() {
  }


  changePageSize(pageSize:number){
  	this.newPageSize = pageSize;
  	this.emitPageSize.emit({"pageSize": this.newPageSize, "page":1})
  }
}
