import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Material } from '../app.material';
import { TravelOrder } from '../models/travel-order.model';

@Component({
  selector: 'app-travel-order',
  standalone: true,
  imports: [CommonModule,Material],
  templateUrl: './travel-order.component.html',
  styleUrl: './travel-order.component.css'
})
export class TravelOrderComponent implements OnInit {
  @Input() travelOrder !: TravelOrder ;
  constructor() {}
  ngOnInit(): void {
    
  }
}
