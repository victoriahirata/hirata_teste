import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Corridas } from './corridas';
import { tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CorridasService {

  private readonly API = "http://localhost:3000/corridas";
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Corridas[]>(this.API)
    .pipe(
      tap(console.log)
    );
  }
  create(corridas){
    return this.http.post(this.API, corridas).pipe(take(1));
  }
}