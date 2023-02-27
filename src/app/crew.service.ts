import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrewService {
  private baseUrl = 'http://localhost:9095/Crew';
  techName:string="";
	techRole:string="";
  techAge:number=0;
	techImageUrl:string="";
	techDescrip:string="";
  techCount:number=0;
  technicians:any[]=[];

  constructor(private http: HttpClient) { }
  readAllTechnicians():Observable<any> {
    return this.http.get(`${this.baseUrl}/readAllTechnicians`);
 }
 readTechByName(techName:string):Observable<any> {
  return this.http.get(`${this.baseUrl}/readTechByName/?techName=${techName}`);
 }

 addTechToExistingMovie(tech: Object,mvName: string,releaseDate:any): Observable<Object> {
  return this.http.post(`${this.baseUrl}/addTechToExistingMovie/?mvName=${mvName}&releaseDate=${releaseDate}`, tech);
}

updateTechByMvNameAndReleaseDate(tech: Object,techName:string,mvName: string,releaseDate:any): Observable<any>{
  return this.http.put(`${this.baseUrl}/updateTechByMvNameAndReleaseDate/?techName=${techName}&mvName=${mvName}&releaseDate=${releaseDate}`,tech);

}

deleteTechByMvNameAndReleaseDate(techName:string,mvName: string,releaseDate:any): Observable<any>{
  return this.http.delete(`${this.baseUrl}/deleteTechByMvNameAndReleaseDate/?techName=${techName}&mvName=${mvName}&releaseDate=${releaseDate}`);

}

 set setTechName(val: string){
  this.techName= val;
}
set setTechRole(val: string){
  this.techRole= val;
}
set setTechAge(val: number){
  this.techAge= val;
}
set setTechImageUrl(val: string){
  this.techImageUrl= val;
}
set setTechDescrip(val: string){
  this.techDescrip= val;
}
get getTechName():string{
  return this.techName;
}
get getTechRole():string{
  return this.techRole;
}
get getTechAge():number{
  return this.techAge;
}
get getTechImageUrl():string{
  return this.techImageUrl;
}
get getTechDescrip():string{
  return this.techDescrip;
}

}
