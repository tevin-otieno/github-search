import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  whatToSearch!:string
  @Output() sendValue = new EventEmitter<any>();

  searchFor() {
    this.sendValue.emit(this.whatToSearch)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
