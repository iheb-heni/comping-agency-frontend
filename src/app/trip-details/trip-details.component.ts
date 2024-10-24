// src/app/trip-details/trip-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
  trip: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tripService: TripService // Inject TripService
  ) {}

  ngOnInit(): void {
    const tripId = this.route.snapshot.paramMap.get('id');
    this.getTripDetailss(tripId);
  }

  getTripDetailss(id: string | null): void {
    if (id) {
      this.tripService.getTripById(id).subscribe(data => {
        this.trip = data;
      });
    }
  }

  deleteTrip(): void {
    if (confirm('Are you sure you want to delete this trip?')) {
      this.tripService.deleteTrip(this.trip.id).subscribe(() => {
        alert('Trip deleted successfully!');
        this.router.navigate(['/trips']); // Redirect to the trip list
      });
    }
  }

  updateTrip(): void {
    // Navigate to the update trip component (you may need to implement this)
    this.router.navigate(['/update-trip', this.trip.id]);
  }
}
