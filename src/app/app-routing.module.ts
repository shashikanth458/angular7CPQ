import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponentComponent } from 'src/app/landing-page-component/landing-page-component.component';
import { ConfigureComponent } from 'src/app/configure/configure.component';
import { QuoteOrderListComponent } from 'src/app/quote-order-list/quote-order-list.component';
import { QuoteDetailsComponent } from 'src/app/quote-details/quote-details.component';


const routes: Routes = [
  {
    path:'',
    component:LandingPageComponentComponent
  },
  {
    path:'configure',
    component:ConfigureComponent
  },
  {
    path:'quoteDetails',
    component:QuoteDetailsComponent
  },
  {
    path:'list',
    component:QuoteOrderListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
