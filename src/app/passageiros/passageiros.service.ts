import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Passageiros } from './passageiros';
import { tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PassageirosService {

  private readonly API = "http://localhost:3000/passageiros";
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Passageiros[]>(this.API)
    .pipe(
      tap(console.log)
    );
  }
  create(passageiros){
    return this.http.post(this.API, passageiros).pipe(take(1));
  }
}