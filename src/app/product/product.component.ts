import { Component, OnInit,Input,Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public router:Router) { }
  @Input() productName;
  @Input() productImage;
  qty='00';
  image='';
  navToConfig(){
    this.router.navigate(['configure']);
  }
  ngOnInit() {
    this.image='./assets/images/'+this.productImage+'.png';
  }

}
