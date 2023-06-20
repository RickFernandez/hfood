import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { BrazilState } from 'src/app/shared/models/BrazilState';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private _http: HttpClient) { }

  getAll(): Observable<BrazilState[]> {
    const url = environment.BASE_URL_UF;

    return this._http.get<BrazilState[]>(url).pipe(
      map((states: BrazilState[]) => {
        return states.map((state: BrazilState) => {
          return state;
        });
      }),
      catchError((error: any) => {
        console.error(error);
        return EMPTY;
      })
    );
  }
}
