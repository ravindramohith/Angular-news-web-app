import { Component, OnInit } from '@angular/core';
import{NewsapiserviceService}from '../newsapiservice.service'

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private _service: NewsapiserviceService) { }

  Display: any = [];
  ngOnInit(): void {
    this._service.sports().subscribe((result) => {
      this.Display = result.articles;
    })
  }

}
