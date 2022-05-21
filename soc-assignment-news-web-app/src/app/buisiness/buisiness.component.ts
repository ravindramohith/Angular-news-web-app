import { Component, OnInit } from '@angular/core';
import{NewsapiserviceService}from '../newsapiservice.service'

@Component({
  selector: 'app-buisiness',
  templateUrl: './buisiness.component.html',
  styleUrls: ['./buisiness.component.css']
})
export class BuisinessComponent implements OnInit {

  constructor(private _service: NewsapiserviceService) { }

  Display: any = [];
  ngOnInit(): void {
    this._service.business().subscribe((result) => {
      this.Display = result.articles;
    })
  }

}
