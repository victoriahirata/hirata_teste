import { Component, OnInit } from '@angular/core';
import { PassageirosService } from './passageiros.service';
import { Passageiros } from './passageiros';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-passageiros',
  templateUrl: './passageiros.component.html',
  styleUrls: ['./passageiros.component.scss']
})
export class PassageirosComponent implements OnInit {

  passageiros$: Observable<Passageiros[]>;
  error$ = new Subject<boolean>();

  constructor(private service: PassageirosService) { }

  ngOnInit() {
    this.passageiros$ = this.service.list()
    .pipe(
      catchError(error =>{
        console.error(error);
        this.error$.next(true);
        return empty();
      })
    )
  }

}
