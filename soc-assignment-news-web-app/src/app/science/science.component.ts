import { Component, OnInit } from '@angular/core';
import{NewsapiserviceService}from '../newsapiservice.service'

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  constructor(private _service: NewsapiserviceService) { }

  Display: any = [];
  ngOnInit(): void {
    this._service.science().subscribe((result) => {
      this.Display = result.articles;
    })
  }

}
