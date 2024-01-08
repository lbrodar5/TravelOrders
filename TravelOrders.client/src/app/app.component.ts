import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Material } from './app.material';
import { HomeComponent } from './home/home.component';
import { TravelOrderService } from './services/travel-order.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    RouterModule,
    Material
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TravelOrders';
  constructor (private travelOrderService : TravelOrderService) {}
  firstName = "Leopold";
  lastName = "Brodar";
}
