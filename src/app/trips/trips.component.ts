import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip.service';
import { Trip } from '../trip';
import { Router } from '@angular/router'; // Import Router


@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  trips: Trip[] = [];

  constructor(private tripService: TripService, private router: Router) {}

  ngOnInit(): void {
    this.loadTrips();
  }

  loadTrips(): void {
    this.tripService.getTrips().subscribe({
      next: (data) => {
        this.trips = data;
      },
      error: (error) => {
        console.error('Error fetching trips', error);
      }
    });
  }

  goToTripDetail(id: number): void {
    this.router.navigate(['/trips', id]); // Navigate to trip details route
  }
}
