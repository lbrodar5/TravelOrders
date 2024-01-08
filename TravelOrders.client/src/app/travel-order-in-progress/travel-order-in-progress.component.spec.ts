import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelOrderInProgressComponent } from './travel-order-in-progress.component';

describe('TravelOrderInProgressComponent', () => {
  let component: TravelOrderInProgressComponent;
  let fixture: ComponentFixture<TravelOrderInProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelOrderInProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelOrderInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
