import { Component, OnInit,Input } from '@angular/core';
import {HttpService} from '../http.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-quote-info',
  templateUrl: './quote-info.component.html',
  styleUrls: ['./quote-info.component.scss']
})
export class QuoteInfoComponent implements OnInit {

  status:string;
  createdAt;
  constructor(public router:Router, public http:HttpService) { }
  @Input() product
  @Input() buttonName

  getStatus(_state){
    let b:boolean,status=this.status['toLowerCase']();
      switch(_state){
        case 0: b=true;break;
        case 1: b=(status==="generated")||(status==="accepted")||(status==="orderplaced");break;
        case 2: (status==="accepted")||(status==="orderplaced");break;
        case 3: (status==="orderplaced");break;
        default:'';
        
      }
      return b;
  }
  ngOnInit() {
      console.log(this.product);
        this.status = this.product.status.slice(0,1)+this.product.status.slice(1,).toLowerCase();
       
        this.createdAt= this.product.created_at;
      }

  navToDetails(){
    this.http.addKey('prd',this.product);
    this.router.navigate(['quoteDetails'],{queryParams:{quoteId:this.product._id}});
  }
}
