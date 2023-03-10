import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  
  private baseUrl = 'http://localhost:9095/Admin';

   addAdmin(admin:Admin){
    return this.http.post(`${this.baseUrl}/addAdmin`,admin,{responseType: 'text'});
  }
   
  getAdmin(email:string,password:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/getAdmin/?email=${email}&password=${password}`);
  }
 
}
