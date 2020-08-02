import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SubscriptionData } from './subscriptiondata'

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http: HttpClient) { }

  create(amount, subsMode, selectedWeek, selectedStartDate, selectedEndDate){
    console.log("hello " + amount.value)
    
    return this.http.post<SubscriptionData>('http://localhost:8000/api/subs/create', {
      amount: amount.value
      , subsMode: subsMode
      , selectedWeek: selectedWeek
      , selectedStartDate: selectedStartDate
      , selectedEndDate: selectedEndDate
    });
  }
}
