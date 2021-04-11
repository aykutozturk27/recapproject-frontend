import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path: 'brands', component: BrandComponent },
  { path: 'colors', component: ColorComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'rentals', component: RentalComponent },
  
  { path: 'cars/brand/:brandId', component: CarComponent },
  { path: 'cars/color/:colorId', component: CarComponent },
  { path: 'cars/car-detail/:carId', component: CarDetailComponent },

  { path: 'cars/filter/brand/:brandId', component: CarComponent },
  { path: 'cars/filter/color/:colorId', component: CarComponent },
  { path: 'cars/filter/brand/:brandId/color/:colorId',component: CarComponent },

  { path: 'rental-add', component: RentalAddComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
