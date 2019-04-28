import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordeer-info',
  templateUrl: './ordeer-info.component.html',
  styleUrls: ['./ordeer-info.component.scss']
})
export class OrdeerInfoComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  navToOrderDetails(){
      this.router.navigate(['orderDetails']);
  }
}
