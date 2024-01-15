import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent  implements OnInit{
  resultData: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.resultData = history.state.data;
    console.log('Result Data received:', this.resultData);
  }
}
