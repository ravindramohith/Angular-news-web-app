import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private http: HttpClient) { }
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=7032c483e9114917ad0e69dadfafc571";
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=7032c483e9114917ad0e69dadfafc571";
  businessApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7032c483e9114917ad0e69dadfafc571";
  sportsApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=7032c483e9114917ad0e69dadfafc571";
  scienceApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=7032c483e9114917ad0e69dadfafc571";
  healthApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=7032c483e9114917ad0e69dadfafc571";
  topheadlines(): Observable<any> {
    return this.http.get(this.newsApiUrl);
  }
  technology(): Observable<any> {
    return this.http.get(this.techApiUrl);
  }
  business():Observable<any> {
    return this.http.get(this.businessApiUrl);
  }
  sports():Observable<any> {
    return this.http.get(this.sportsApiUrl);
  }
  science():Observable<any> {
    return this.http.get(this.scienceApiUrl);
  }
  health():Observable<any> {
    return this.http.get(this.healthApiUrl);
  }
}
