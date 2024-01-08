import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelOrderComponent } from './travel-order.component';

describe('TravelOrderComponent', () => {
  let component: TravelOrderComponent;
  let fixture: ComponentFixture<TravelOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
