import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import {HttpService} from '../http.service';
import endPoint from '../end-point-urls';
import { OrdeerInfoComponent } from '../ordeer-info/ordeer-info.component'
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  constructor(public route:ActivatedRoute, public http:HttpService) { }
  quoteId;
  product;
  productDetails={};
  subItemDetails=[];
  quotePO;
  subItemDetailsLength
  ngOnInit() {
    this.route['queryParams'].subscribe(params=>{
      this.quoteId = params['quoteId'];
  });
  this.http.getRequest(endPoint['details']['replace']('$id',this.quoteId)).subscribe(data=>{
    console.log('quote details-->',data);
    let _product=data['CART']['PRODUCT'][0];
      this.subItemDetails=data['CART']['PRODUCT'].slice(1);
      this.subItemDetailsLength=this.subItemDetails.length;
    this.productDetails={
        name:_product.Name[0],
        qty:_product.Qty[0],
        price:_product.Price[0]
    }
    console.log(this.productDetails);
  });
 this.product= this.http.getValue('prd')
  }

}
