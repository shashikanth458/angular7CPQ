import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-spec',
  templateUrl: './spec.component.html',
  styleUrls: ['./spec.component.scss']
})
export class SpecComponent implements OnInit {

  isChecked:boolean=false;
  question:string

  constructor() { }
  @Input() state;

  ngOnInit() {
    this.isChecked=false;
    console.log(this.state);
  }
  radioChange(){
    console.log(this.isChecked);
  }

}
