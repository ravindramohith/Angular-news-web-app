import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../newsapiservice.service'


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private _service: NewsapiserviceService) { }

  Display: any = [];
  ngOnInit(): void {
    this._service.topheadlines().subscribe((result) => {
      this.Display = result.articles;
    })
  }

}
