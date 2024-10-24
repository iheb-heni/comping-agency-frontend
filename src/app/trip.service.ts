import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from './trip'; // Make sure to create this interface

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private apiUrl = 'http://localhost:8081/api/trips'; // Change port if needed

  constructor(private http: HttpClient) { }

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl);
  }

  getTripById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createTrip(trip: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, trip);
  }

  // src/app/trip.service.ts
updateTrip(id: number, trip: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/${id}`, trip);
}


  deleteTrip(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


}
