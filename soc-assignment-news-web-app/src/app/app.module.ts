import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BuisinessComponent } from './buisiness/buisiness.component';
import { TechComponent } from './tech/tech.component';
import { NewsapiserviceService } from './newsapiservice.service';
import { NewsDescriptionComponent } from './news-description/news-description.component';
import { ScienceComponent } from './science/science.component';
import { HealthComponent } from './health/health.component';
import { SportsComponent } from './sports/sports.component';
import { BusinessViewComponent } from './business-view/business-view.component';
import { HealthViewComponent } from './health-view/health-view.component';
import { SportsViewComponent } from './sports-view/sports-view.component';
import { ScienceViewComponent } from './science-view/science-view.component';
import { TechViewComponent } from './tech-view/tech-view.component'

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HomepageComponent,
    BuisinessComponent,
    TechComponent,
    NewsDescriptionComponent,
    ScienceComponent,
    HealthComponent,
    SportsComponent,
    BusinessViewComponent,
    HealthViewComponent,
    SportsViewComponent,
    ScienceViewComponent,
    TechViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomepageComponent },
      { path: 'business', component: BuisinessComponent },
      { path: 'tech', component: TechComponent },
      { path: 'newsdescription/:Title', component: NewsDescriptionComponent },
      { path: 'sports', component: SportsComponent },
      { path: 'health', component: HealthComponent },
      { path: 'science', component: ScienceComponent },
      { path: 'business/:Title', component: BusinessViewComponent },
      { path: 'sports/:Title', component: SportsViewComponent },
      { path: 'health/:Title', component: HealthViewComponent },
      { path: 'science/:Title', component: ScienceViewComponent },
      { path: 'tech/:Title', component: TechViewComponent }
    ])
  ],
  providers: [NewsapiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
