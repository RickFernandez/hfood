import { Location } from 'src/app/shared/models/Location';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Address } from 'src/app/shared/models/Address';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  
  constructor(private _http: HttpClient) { }
  
  searchByZip(zip: string): Observable<Location> {
    const url = `${environment.BASE_URL_ZIP}/${zip}/json`;
    
    return this._http.get<Location>(url).pipe(
      map(address => {
        if (address['erro']) {
          alert('CEP não encontrado... Por favor, insira um CEP válido.');
          throw new Error('CEP não encontrado');
        }
        return address;
      }),
      catchError((error) => {
        return this.errorHandler(error);
      })
    );
  }
    
  errorHandler(error: any): Observable<any> {
    console.log(error);
    return EMPTY;
  }
}