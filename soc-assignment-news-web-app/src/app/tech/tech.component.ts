import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../newsapiservice.service'

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private _service: NewsapiserviceService) { }

  Display: any = [];
  ngOnInit(): void {
    this._service.technology().subscribe((result) => {
      this.Display = result.articles;
    })
  }

}
