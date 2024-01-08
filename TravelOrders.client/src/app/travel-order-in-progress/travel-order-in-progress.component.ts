import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Material } from '../app.material';
import { TravelOrderService } from '../services/travel-order.service';
import { TravelOrder } from '../models/travel-order.model';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LocationService } from '../services/location.service';
import { Subscription } from 'rxjs';
import { CreateOtherExpenseComponent } from '../create-other-expense/create-other-expense.component';
import { OtherExpense } from '../models/other-expense.model';
import { OtherExpenseComponent } from '../other-expense/other-expense.component';
import { Car } from '../models/car.model';
import { OCRComponent } from '../ocr/ocr.component';

@Component({
  selector: 'app-travel-order-in-progress',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CreateOtherExpenseComponent,
    OtherExpenseComponent,
    OCRComponent,
    Material
  ],
  templateUrl: './travel-order-in-progress.component.html',
  styleUrl: './travel-order-in-progress.component.css'
})
export class TravelOrderInProgressComponent implements OnInit {
  startTime !: number;
  endTime !: number;
  duration !: string;
  startLocation !: string;
  endLocation !: string;
  arrivedAtEndLocation = false;
  car !: Car;
  otherExpenses : OtherExpense [] = [];
  cars : Car [] = [{Name: "Acura TLX"},{Name: "Volvo S60"}, {Name: "Infiniti Q50"}, {Name: "Kia Stinger"}, {Name: "Mazda6"}]
  startKilometrage !: number;
  endKilometrage !: number;
  amount !: number;

  locationSub !: Subscription;

  constructor( 
    private travelOrderService : TravelOrderService,
    private locationService : LocationService
    ) {}

  ngOnInit(): void {
    this.locationSub = this.locationService.locationObs
      .subscribe( data => {
        if (this.startLocation) {
          let dateTime = new Date();
          this.endTime = dateTime.getTime();
          this.arrivedAtEndLocation = true;
          this.duration = this.getTime(this.endTime - this.startTime);
          this.endLocation = data;
        } else {
          this.startLocation = data;
          let dateTime = new Date();
          this.startTime = dateTime.getTime();
        }
      });
  }

  onGetLocation() {
    this.locationService.GetLocation();
  }

  onAddTravelOrder() {
    this.locationService.GetLocation();
    this.amount = (0 + this.endKilometrage - this.startKilometrage) * 0.4;
    for(let otherExpense of this.otherExpenses) {
      this.amount += otherExpense.amount;
    }
    this.travelOrderService.addTravelOrder(
      new TravelOrder(
        this.startLocation,
        this.endLocation,
        this.duration,
        this.car,
        this.otherExpenses.slice(),
        this.endKilometrage - this.startKilometrage,
        this.amount
        ));
  }

  getTime (milli : number) {
    let time = new Date(milli);
    let hours = time.getUTCHours();
    let minutes = time.getUTCMinutes();
    let seconds = time.getUTCSeconds();
    return hours + "h " + minutes + "m " + seconds + "s";
  }

  selectCar(index : number) {
    this.car = this.cars[index];
  }

  addOtherExpense( otherExpense : OtherExpense) {
    this.otherExpenses.push(otherExpense);
  }

  addKilometrage( kilometrage : number){
    if(this.startKilometrage){
      this.endKilometrage = kilometrage;
    } else {
      this.startKilometrage = kilometrage;
    }
  }
}
