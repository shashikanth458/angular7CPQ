import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

      constructor(private http:HttpClient){

      }

        getRequest(url){
          return this.http.get(url);
        }

        addKey(key,value){
            data[key]=value;
        }
        postRequest(url,payLoad){
            return this.http.post(url,payLoad,httpOptions);
        }
        getValue(key){
          return data[key];
        }
 
}
let data:object={};
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
