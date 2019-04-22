import { Component, OnInit } from '@angular/core';
import { Observable, Subject, empty } from 'rxjs';
import { Motoristas } from './motoristas';
import { MotoristasService } from './motoristas.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-motoristas',
  templateUrl: './motoristas.component.html',
  styleUrls: ['./motoristas.component.scss']
})
export class MotoristasComponent implements OnInit {

  error$ = new Subject<boolean>();
  motoristas$: Observable<Motoristas[]>;

  constructor(private service: MotoristasService) { }

  ngOnInit() {
    this.motoristas$ = this.service.list()
      .pipe(
        catchError(error => {
          console.error(error);
          this.error$.next(true);
          return empty();
        })
      )
  }

}
