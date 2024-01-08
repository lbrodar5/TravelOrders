import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelOrderDetailComponent } from './travel-order-detail.component';

describe('TravelOrderDetailComponent', () => {
  let component: TravelOrderDetailComponent;
  let fixture: ComponentFixture<TravelOrderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelOrderDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
