import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})

export class DataEntryComponent implements OnInit {

  constructor(private subscription: SubscriptionService) { }

  ngOnInit(): void {
  }

  title = "Create a subscription"

  subsMode = 'Daily'

  selectedWeek = ''
  selectedDate = ''
  selectedStartDate = null
  selectedEndDate = null
  show = 0
  amount = ''
  output;

  setDay(day){
    this.selectedDate = day
  }

  setAmount(amt){
    this.amount = amt
  }

  setStartDate(startDt){
    this.selectedStartDate = new Date(startDt.value)
  }

  verifyAndSetEndDate(endDt){
    // console.log(new Date(endDt.value))
    this.selectedEndDate = new Date(endDt.value)

    if (this.selectedStartDate != null) {
      // console.log(this.selectedEndDate - this.selectedStartDate)
      let diff = (this.selectedEndDate - this.selectedStartDate) / (1000*60*60*24)
      if (diff > 90){
        this.show = 1
      } else {
        this.show = 0
      }
    } else {
      
    }
  }

  createSubs(){
    console.log(this.selectedDate + this.selectedWeek + this.selectedEndDate + this.selectedStartDate)
    this.subscription.create(this.amount, this.subsMode, this.selectedWeek, this.selectedStartDate, this.selectedEndDate)
    .subscribe((result)=>{
      console.log("Data entry component", result)
      this.output = result
    })
  }

}

