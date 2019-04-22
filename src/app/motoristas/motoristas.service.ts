import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Motoristas } from './motoristas';
import { tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MotoristasService {

  private readonly API = "http://localhost:3000/motoristas";
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Motoristas[]>(this.API)
    .pipe(
      tap(console.log)
    );
  }
  create(motoristas){
    return this.http.post(this.API, motoristas).pipe(take(1));
  }
}