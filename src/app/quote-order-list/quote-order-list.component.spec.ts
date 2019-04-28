import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteOrderListComponent } from './quote-order-list.component';

describe('QuoteOrderListComponent', () => {
  let component: QuoteOrderListComponent;
  let fixture: ComponentFixture<QuoteOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
