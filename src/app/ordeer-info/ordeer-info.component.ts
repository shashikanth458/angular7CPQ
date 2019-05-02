import { Component, OnInit, Input } from '@angular/core';
import {HttpService} from '../http.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-ordeer-info',
  templateUrl: './ordeer-info.component.html',
  styleUrls: ['./ordeer-info.component.scss']
})
export class OrdeerInfoComponent implements OnInit {

  @Input() oProduct;
  @Input() buttonName;
  @Input() pStauts;
  status;
  createdAt;
  constructor(public router:Router,public http:HttpService) { }

  ngOnInit() {
    this.status = this.oProduct.status.slice(0,1)+this.oProduct.status.slice(1,).toLowerCase();;
    this.createdAt=this.oProduct.created_at;
    this.status=this.pStauts||this.status;
  }
  getStatus(_state){
    let b:boolean,status=this.status['toLowerCase']();
      switch(_state){
        case 0: b=true;break;
       // case 1: b=true;break;
        case 1: b=(status==="confirmed")||(status==="shipped")||(status==="complete");break;
        case 2: b=(status==="shipped")||(status==="complete");break;
        case 3: b=(status==="complete");break;
        default:'';
        
      }
      return b;
  }
  navToOrderDetails(){
    this.http.addKey('prd',this.oProduct);
    this.router.navigate(['orderDetails'],{queryParams:{quoteId:this.oProduct._id}});
    this.http.addKey('oStatus',"confirmed");
  }
}
