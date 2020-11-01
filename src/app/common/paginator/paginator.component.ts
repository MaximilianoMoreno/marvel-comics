import { Component, Input, OnInit,Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() totalResults: number;
  @Output() pageEvent = new EventEmitter<any>();

  currentPage = 1;
  pages = [];
  totalPages = 0;
  startPage = 1;

  // paged items
  pagedItems: any[];
  pageSize = 10;
  currentOffset = 0;

  constructor() { }

  ngOnInit(): void {


  }

  ngOnChanges(changes: SimpleChanges) {
    this.totalPages = Math.trunc (this.totalResults / this.pageSize);
    this.pages = Array(this.totalPages).fill(0).map((x,i)=>i + 1);
    this.pagedItems = this.pages.slice(this.startPage - 1, this.startPage + 4);

}

  onChangeEvent($event){
    this.pageEvent.emit($event);
  }

  setPage(pageIndex: number) {

    if (pageIndex < 1 || pageIndex > this.totalResults) {
        return;
    }
    this.currentPage = pageIndex;
    if (this.pages.length <= 5) {
      this.startPage = 1;
    } else {
      if (this.currentPage + 1 >= this.pages.length) {
        this.startPage = this.totalPages - 4;
      } else {
        if((this.totalPages - (this.currentPage - 2)) == 5) {
          this.startPage = this.currentPage - 1;
        } else {
          this.startPage = (this.currentPage - 2 >= 1) ? (this.currentPage - 2) : 0;
        }
      }
    }
    this.pagedItems = this.pages.slice(this.startPage, pageIndex + 3);

    this.pageEvent.emit(
      {
        pageIndex,
        pageSize: this.pageSize
      }
    );
}
}
