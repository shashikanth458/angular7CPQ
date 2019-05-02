import { Component, OnInit } from '@angular/core';

import {ProductComponent} from '../product/product.component';
import { HttpService } from 'src/app/http.service';
import endPoint from '../end-point-urls';

@Component({
  selector: 'app-landing-page-component',
  templateUrl: './landing-page-component.component.html',
  styleUrls: ['./landing-page-component.component.scss']
})
export class LandingPageComponentComponent implements OnInit {

  constructor(public http:HttpService) { }

  ngOnInit() {
  }

  reset(){
    this.http.postRequest(endPoint['resetData'],'')
      .subscribe((data)=>{
          console.log(data['message']);
         
      })
  }
}
