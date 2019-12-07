import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HealthcareserviceService {

  constructor(private http: HttpClient) { }
  getDatas(type: any): Observable<any> {
    return this.http.get(`${environment.healthbaseurl}/getdata/${type}`);
  }
  gespecifictData(type: any,id:any): Observable<any> {
    return this.http.get(`${environment.healthbaseurl}/getspecificdata/${type}/${id}`);
  }
  spcreate(payload: any): Observable<any> {
    return this.http.post(`${environment.healthbaseurl}/specalist`,payload);
  }
  doccreate(payload: any): Observable<any> {
    return this.http.post(`${environment.healthbaseurl}/doctor`,payload);
  }
  dataupdate(payload: any): Observable<any> {
    return this.http.post(`${environment.healthbaseurl}/update`,payload);
  }
  deleteData(payload: any): Observable<any> {
    return this.http.post(`${environment.healthbaseurl}/delete`,payload);
  }
}
