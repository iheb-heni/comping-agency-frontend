import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TripsComponent } from './trips/trips.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UpdateTripComponent } from './update-trip/update-trip.component';
import { CreateTripComponent } from './create-trip/create-trip.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'trips/:id', component: TripDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'update-trip/:id', component: UpdateTripComponent },
  { path: 'trip/create', component: CreateTripComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
