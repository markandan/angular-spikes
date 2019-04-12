import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
    `
    :host {
      text-align: center;
      background: white;
      display: block;
      padding: .45rem .65rem;
      border-radius: 3px;
      max-width: 325px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }

    h2 {
      color: #c85f7f;
    }

    p {
      text-align: center;
    }
  `
  ]
})
export class CardComponent implements OnInit {
  @Input('title') title;
  @Input('subtitle') subtitle;
  @Input('content') content = '😄';

  @Output() btnClicked = new EventEmitter<boolean>();

  constructor() {}
  ngOnInit() {
  }
  handleBtnClick() {
    this.btnClicked.emit(true);
  }
}