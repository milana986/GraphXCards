import { Component, OnInit, OnChanges , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'g-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() count: number;
  @Input() pageSize: number;
  @Output() emitPagination = new EventEmitter<any>();
  activePage: number;
  numberOfPages: number;

  constructor() { }

  ngOnInit() {}

  ngOnChanges(){
  	this.activePage = 1;
  	this.numberOfPages = Math.ceil(this.count / this.pageSize);
  }

  changePage(newPage:number){
  	if( newPage >= 1 && newPage <= this.numberOfPages){
  		this.activePage = newPage;
  		this.emitPagination.emit({"page": this.activePage});
  	}
  }

}
