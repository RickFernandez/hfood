import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Zip } from 'src/app/shared/models/Zip';

@Injectable({
  providedIn: 'root'
})
export class ZipService {
  
  constructor(private _http: HttpClient) { }
  
  searchByZip(zip: string): Observable<Zip> {
    const url = `${environment.BASE_URL}/${zip}/json`;
    console.log('url ' + url);
    
    return this._http.get<Zip>(url).pipe(
      map(address => {
        return address;
      })
    );
  }
    
  errorHandler(e: any): Observable<any> {
      console.log(e);
      alert('CEP não encontrado... =(');
      return EMPTY;
  }
}