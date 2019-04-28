import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { ProductComponent } from './product/product.component';
import { ConfigureComponent } from './configure/configure.component';
import { SpecComponent } from './spec/spec.component';
import { QuoteOrderListComponent } from './quote-order-list/quote-order-list.component';
import { QuoteInfoComponent } from './quote-info/quote-info.component';
import { OrdeerInfoComponent } from './ordeer-info/ordeer-info.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponentComponent,
    ProductComponent,
    ConfigureComponent,
    SpecComponent,
    QuoteOrderListComponent,
    QuoteInfoComponent,
    OrdeerInfoComponent,
    QuoteDetailsComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      "radius": 17,
      "space": -4,
      "outerStrokeGradient": false,
      "outerStrokeWidth": 4,
      "outerStrokeColor": "#ed5e0a",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 3,
      "animateTitle": false,
      "animationDuration": 1000,
      "showTitle":false,
      "showSubtitle":false,
      "showUnits": false,
      "showBackground": false,
      "clockwise": true,
      "startFromZero": false,
      "showImage":true

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
