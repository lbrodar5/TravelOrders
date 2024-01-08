import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelOrder } from '../models/travel-order.model';
import { Material } from '../app.material';
import { OtherExpense } from '../models/other-expense.model';
import { Car } from '../models/car.model';
import { OtherExpenseComponent } from '../other-expense/other-expense.component';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TravelOrderService } from '../services/travel-order.service';

@Component({
  selector: 'app-travel-order-detail',
  standalone: true,
  imports: [
    CommonModule,
    OtherExpenseComponent,
    Material],
  templateUrl: './travel-order-detail.component.html',
  styleUrl: './travel-order-detail.component.css'
})
export class TravelOrderDetailComponent implements OnInit, OnDestroy {

  travelOrder !: TravelOrder;
  paramsSub !: Subscription;

  constructor (  private route : ActivatedRoute, private travelOrderService : TravelOrderService) {}

  ngOnInit(): void {
    this.paramsSub = this.route.params.subscribe( params => {
      let id = +params['id'];
      this.travelOrder =  this.travelOrderService.getTravelOrder(id);
    });
  }
  ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
  }

}
