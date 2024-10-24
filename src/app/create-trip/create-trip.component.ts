import { Component } from '@angular/core';
import { TripService } from '../trip.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent {

  trip = {
    destination: '',
    departureDate: '',
    price: 0
  };

  constructor(private tripService: TripService, private router: Router) { }

  createTrip() {
    this.tripService.createTrip(this.trip).subscribe(() => {
      this.router.navigate(['/trips']);
    });
  }
}
