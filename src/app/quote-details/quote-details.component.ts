import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import {HttpService} from '../http.service';
import endPoint from '../end-point-urls';

import {QuoteInfoComponent} from '../quote-info/quote-info.component';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.scss']
})
export class QuoteDetailsComponent implements OnInit {

  constructor(public route:ActivatedRoute,public router:Router,public http:HttpService) { }
  quoteId;
  product;
  productDetails={};
  subItemDetails=[];
  quotePO;
  subItemDetailsLength;

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
  navToPage(){
    return new Promise((resolve,reject)=>{
      this.http.postRequest(endPoint['approveQuote']['replace']('$quoteId',this.quoteId),{
        "orderPlaced":true,
        "poNumber":this.quotePO,
        "status":"ACCEPTED"

      }).subscribe(data=>{
        resolve();
      });
    })
  }
  approveQuote(){
    this.navToPage().then(()=>{
      this.router.navigate(['list']);
    })
  }

}
