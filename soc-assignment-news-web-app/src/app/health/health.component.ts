import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../newsapiservice.service'

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private _service: NewsapiserviceService) { }

  Display: any = [];
  ngOnInit(): void {
    this._service.health().subscribe((result) => {
      this.Display = result.articles;
    })
  }

}
