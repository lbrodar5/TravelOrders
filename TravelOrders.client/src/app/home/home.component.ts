import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Material } from '../app.material';
import { RouterModule } from '@angular/router';
import { TravelOrderService } from '../services/travel-order.service';
import { TravelOrder } from '../models/travel-order.model';
import { TravelOrderComponent } from '../travel-order/travel-order.component';
import { Subscription } from 'rxjs';
import { TravelOrderInProgressComponent } from '../travel-order-in-progress/travel-order-in-progress.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TravelOrderComponent,
    TravelOrderInProgressComponent,
    Material
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private travelOrderService : TravelOrderService){}

  travelOrders : TravelOrder [] = [];
  travelOrdersChangedSub !: Subscription;


  ngOnInit(): void {
    this.travelOrders = this.travelOrderService.getTravelOrders();
  }
  ngOnDestroy(): void {
  }

}
