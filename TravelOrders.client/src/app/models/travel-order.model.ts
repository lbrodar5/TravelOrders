import { Car } from "./car.model";
import { OtherExpense } from "./other-expense.model";

export class TravelOrder {
    constructor(
        public StartLocation : string,
        public EndLocation : string,
        public Duration : string,
        public car : Car,
        public otherExpenses : OtherExpense [],
        public Distance : number,
        public Amount : number
    ) {}
}