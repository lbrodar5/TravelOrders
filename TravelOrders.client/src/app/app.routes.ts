import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TravelOrderInProgressComponent } from './travel-order-in-progress/travel-order-in-progress.component';
import { TravelOrderDetailComponent } from './travel-order-detail/travel-order-detail.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
    {path:'',redirectTo:'/home', pathMatch : "full"},
    {path:'home',component: HomeComponent},
    {path:'travel-order-in-progress', component: TravelOrderInProgressComponent},
    {path:'travel-order/:id',component: TravelOrderDetailComponent},
    {path:'auth',component: AuthComponent} 
];
