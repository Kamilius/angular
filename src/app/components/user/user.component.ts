import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  @Input () item;
  user = [];

  @Output () detailsChange = new EventEmitter();

  public switch () {
    this.detailsChange.emit(this.user);
  }

  ngOnInit() {
    this.user = this.item;
  }

}
