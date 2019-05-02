import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import endPoint from '../end-point-urls';

import {QuoteInfoComponent} from '../quote-info/quote-info.component';
import { OrdeerInfoComponent } from '../ordeer-info/ordeer-info.component';
import { DoughnutChartComponent} from 'angular-d3-charts';

@Component({
  selector: 'app-quote-order-list',
  templateUrl: './quote-order-list.component.html',
  styleUrls: ['./quote-order-list.component.scss']
})
export class QuoteOrderListComponent implements OnInit {

  isOrder=true;
  quoteList:any=[];
  orderList:any=[];
  public donutChartData = [{
    id: 0,
    label: 'water',
    value: 20,
    color: 'red',
  }, {
    id: 1,
    label: 'land',
    value: 20,
    color: 'blue',
  }, {
    id: 2,
    label: 'sand',
    value: 30,
    color: 'green',
  }];
  constructor(public http:HttpService) { }

  ngOnInit() {
    this.http.getRequest(endPoint['quoteList'])
    .subscribe((data)=>{
      this.quoteList=data;
        console.log('get data-->',this.quoteList);

    })
    this.http.getRequest(endPoint['orderList'])
    .subscribe((data)=>{
      this.orderList=data;
      console.log('get data-->',data);
  });

  }

}
