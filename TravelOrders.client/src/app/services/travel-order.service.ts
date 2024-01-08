
import { Injectable } from "@angular/core";
import { TravelOrder } from "../models/travel-order.model";
import { Subject } from "rxjs";
import { OtherExpense } from "../models/other-expense.model";

@Injectable({providedIn : 'root'})

export class TravelOrderService {
    travelOrders : TravelOrder [] = [];
    travelOrdersChangedObs = new Subject<boolean>;
    
    addTravelOrder( travelOrder : TravelOrder) {
        this.travelOrders.push(travelOrder);
        this.travelOrdersChangedObs.next(true);
    }

    getTravelOrders() {
        return this.travelOrders.slice();
    }

    getTravelOrder(id : number) {
        return this.travelOrders[id];
    }
}