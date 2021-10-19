import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private _http: HttpClient) { }
  getData(): Observable<any>  {
    return this._http.get('https://localhost:5101/api/employees');
  }

  postData(data: any) {
    return this._http.post('https://localhost:5101/api/employees', data)
  }

  deleteData(data: any) {
    return this._http.delete('https://localhost:5101/api/employees/'+data.id, data)
  }
}
