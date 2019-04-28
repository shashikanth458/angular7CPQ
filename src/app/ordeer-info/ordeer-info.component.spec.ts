import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdeerInfoComponent } from './ordeer-info.component';

describe('OrdeerInfoComponent', () => {
  let component: OrdeerInfoComponent;
  let fixture: ComponentFixture<OrdeerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdeerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdeerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
