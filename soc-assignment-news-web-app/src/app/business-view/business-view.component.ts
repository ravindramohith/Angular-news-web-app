import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../newsapiservice.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-business-view',
  templateUrl: './business-view.component.html',
  styleUrls: ['./business-view.component.css']
})
export class BusinessViewComponent implements OnInit {

  constructor(private service: NewsapiserviceService, private route: ActivatedRoute) { }
  Display: any = [];
  id: any = undefined;
  routeParams = this.route.snapshot.paramMap;
  TitleFromRoute = String(this.routeParams.get('Tiitle'));
  ngOnInit(): void {
    this.service.business().subscribe((result) => {
      this.Display = result.articles;
      for (var i = 0; i < 20; i++) {
        if (this.Display[i].title == this.TitleFromRoute) {
          this.id = i;
        }
      }
    })
  }

}
