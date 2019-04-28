import { Component, OnInit,  ViewChild } from '@angular/core';
import {Router} from '@angular/router';

import {HttpService} from '../http.service';
import {SpecComponent} from '../spec/spec.component';
import {CircleProgressComponent} from 'ng-circle-progress';
@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.scss']
})
export class ConfigureComponent implements OnInit {
  
  constructor(public router:Router,public http:HttpService) { }
  state=1;
  title="Do you need tyres or tracks";
  circlePercent=(1/6)*100;
  imageUrl='';
  ngOnInit() {
  }
  getTitle(){
  
    switch(this.state){
      case 1:this.title='Do you need tyres or tracks?';break;
      case 2:this.title='What type of tyre do you need?';break;
      case 3:this.title='What type of cabin do you want? ';break;
      case 4:this.title='What type of buckets do you need?';break;
      case 5:this.title='What accesssories would you like?';break;
      case 6:this.title='Tell us a bit more…';break;
      default:this.title='';    
    }
 
  }
  increment(){
    this.state++;
    this.circlePercent=(this.state/6)*100;
    if(this.state==6){
      this.imageUrl='/assets/images/parts-completed.png';
    }
    if(this.state>6){
      this.router.navigate(['list']);
      // this.httpService.getRequest(endpoint['getUser']['replace']('$userId','1'))
      // .subscribe((data)=>{
      //     console.log(data);
      // })
      return;
    }
    this.getTitle();
  }
  decrement(){
    this.state--;
    this.getTitle();
  }
}
