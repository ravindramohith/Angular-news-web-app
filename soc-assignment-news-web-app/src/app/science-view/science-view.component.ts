import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../newsapiservice.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-science-view',
  templateUrl: './science-view.component.html',
  styleUrls: ['./science-view.component.css']
})
export class ScienceViewComponent implements OnInit {

  constructor(private service: NewsapiserviceService, private route: ActivatedRoute,) { }
  Display: any = [];
  id: any = undefined;
  routeParams = this.route.snapshot.paramMap;
  TitleFromRoute = String(this.routeParams.get('Title'));
  ngOnInit(): void {
    this.service.science().subscribe((result) => {
      this.Display = result.articles;
      for (var i = 0; i < 20; i++) {
        if (this.Display[i].title == this.TitleFromRoute) {
          this.id = i;
        }
      }
    })
  }

}
