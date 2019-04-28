import { Component, OnInit } from '@angular/core';

import {QuoteInfoComponent} from '../quote-info/quote-info.component';
import { OrdeerInfoComponent } from '../ordeer-info/ordeer-info.component';

@Component({
  selector: 'app-quote-order-list',
  templateUrl: './quote-order-list.component.html',
  styleUrls: ['./quote-order-list.component.scss']
})
export class QuoteOrderListComponent implements OnInit {

  isOrder=true;

  constructor() { }

  ngOnInit() {
  }

}
