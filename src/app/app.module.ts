import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TripsComponent } from './trips/trips.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateTripComponent } from './update-trip/update-trip.component'; // Import your component
import { FormsModule } from '@angular/forms';
import { CreateTripComponent } from './create-trip/create-trip.component';  // Import FormsModule



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TripsComponent,
    TripDetailsComponent,
    AboutComponent,
    ContactComponent,
    UpdateTripComponent,
    CreateTripComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
