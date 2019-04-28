import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-quote-info',
  templateUrl: './quote-info.component.html',
  styleUrls: ['./quote-info.component.scss']
})
export class QuoteInfoComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  navToDetails(){
    this.router.navigate(['quoteDetails']);
  }
}
