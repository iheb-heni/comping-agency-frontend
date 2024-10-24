// src/app/update-trip/update-trip.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-update-trip',
  templateUrl: './update-trip.component.html',
  styleUrls: ['./update-trip.component.css']
})
export class UpdateTripComponent implements OnInit {
  trip: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tripService: TripService
  ) {}

  ngOnInit(): void {
    const tripId = this.route.snapshot.paramMap.get('id');
    this.getTripDetails(tripId);
  }

  getTripDetails(id: string | null): void {
    if (id) {
      this.tripService.getTripById(id).subscribe(data => {
        this.trip = data;
      });
    }
  }

  updateTrip(): void {
    this.tripService.updateTrip(this.trip.id, this.trip).subscribe(() => {
      alert('Trip updated successfully!');
      this.router.navigate(['/trips']);
    });
  }
}
