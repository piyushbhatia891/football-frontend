import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballApiService {

  private baseUrl="http://localhost:8081/api/v1/standings";
  constructor(private http:HttpClient) { }

  getStandings(countryName:string,leagueName:string,teamName:string):Observable<any>{
    return this.http.get(`${this.baseUrl}?country=${countryName}&league=${leagueName}&team=${teamName}`);
  }
}
