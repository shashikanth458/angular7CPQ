import { Component, OnInit,  ViewChild} from '@angular/core';
import {Router} from '@angular/router';


import {SpecComponent} from '../spec/spec.component';
import {CircleProgressComponent} from 'ng-circle-progress';
import {HttpService} from '../http.service';
import endPoint from '../end-point-urls';


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

  navPage(payload){
    return  new Promise<any>((resolve,reject)=>{
      this.http.postRequest(endPoint['requestQuote'],payload)
      .subscribe((data)=>{
          console.log('Created quotee=-->',data);
          resolve(data);
      })
    })
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
      let payload={"Cart": {
        "MarketCode": "USD",
        "PricebookCode": "test_USD_L1",
        "CartComment": "Quote create through API",
        "PromoCode": "",
        "Crm": {
          "OpportunityId": "1234567",
          "OpportunityName": "Test opportunity 1"
        },
        "Items": {
          "Item": {
            "Quantity": "1",
            "ProductName": "Excavator",
            "CatalogueCode": "",
            "ItemPrice": "",
            "Attributes": {
              "Attribute": [
                {
                  "Name": "Tires",
                  "Value": "Firestone"
                },
                {
                  "Name": "Bucket",
                  "Value": "400MM"
                },
                {
                  "Name": "Cabin_Type",
                  "Value": "Canopy"
                },
                {
                  "Name": "Accessories",
                  "Value": "Radio"
                },
                {
                  "Name": "Accessories",
                  "Value": "Coupler"
                },
                {
                  "Name": "Tires_Tracks",
                  "Value": "Tire"
                }
              ]
            }
          }
        },
        "Properties": "",
        "Customers": {
          "Customer": [
            {
               "$attributes": {
                "CustomerRoleType": "1"
              },
              "Id": "",
              "ExternalId": "",
              "FirstName": "North Corporation INXX",
              "LastName": "INXX",
              "Company": "North Corporation INXX",
              "Address1": "8000 River Road Hyb",
              "Address2": "",
              "City": "New Milford",
              "StateAbbrev": "NJ",
              "ZipCode": "07646",
              "CountryAbbrev": "US",
              "TerritoryName": "",
              "BusinessPhone": "(996) 700-0170",
              "BusinessFax": "",
              "EMail": "sanpatro@deloitte.com",
              "CRMAccountId": "1002471",
              "CRMContactId": "1002472"
            },
            {
              "$attributes": {
                "CustomerRoleType": "2"
              },
              "Id": "",
              "ExternalId": "",
              "FirstName": "North Corporation INXX",
              "LastName": "INXX",
              "Company": "North Corporation INXX",
              "Address1": "8000 River Road Hyb",
              "Address2": "",
              "City": "New Milford",
              "StateAbbrev": "NJ",
              "ZipCode": "07646",
              "CountryAbbrev": "US",
              "TerritoryName": "",
              "BusinessPhone": "(996) 700-0170",
              "BusinessFax": "",
              "EMail": "sanpatro@deloitte.com",
              "CRMAccountId": "1002471",
              "CRMContactId": "1002472"
            },
            {
              "$attributes": {
                "CustomerRoleType": "3"
              },
              "Id": "",
              "ExternalId": "",
              "FirstName": "North Corporation INXX",
              "LastName": "INXX",
              "Company": "North Corporation INXX",
              "Address1": "8000 River Road Hyb",
              "Address2": "",
              "City": "New Milford",
              "StateAbbrev": "NJ",
              "ZipCode": "07646",
              "CountryAbbrev": "US",
              "TerritoryName": "",
              "BusinessPhone": "(996) 700-0170",
              "BusinessFax": "",
              "EMail": "sanpatro@deloitte.com",
              "CRMAccountId": "1002471",
              "CRMContactId": "1002472"
            }
          ]
        },
        "_PREVENT_EMPTY_QUOTE": "1"
      }
};

    this.navPage(payload).then((data)=>{
      console.log('Im resolved');
      this.router.navigate(['list']);
    });
     
      return;
    }
    this.getTitle();
  }
  decrement(){
    this.state--;
    this.getTitle();
  }
}
