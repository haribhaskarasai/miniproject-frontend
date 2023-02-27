import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cast } from './cast';

@Injectable({
  providedIn: 'root'
})
export class CastService {
  private baseUrl = 'http://localhost:9095/Cast';
  actorName:string="";
	actorRole:string="";
  actorAge:number=0;
	actorImageUrl:string="";
	actorDescrip:string="";
  actorCount:number=0;
  actors:any[] = [];
  actor:any;


  constructor(private http: HttpClient) { }
  readAllActors():Observable<any> {
    return this.http.get(`${this.baseUrl}/readAllActors`);
 }
 readActorByName(actorName:string):Observable<any> {
  return this.http.get(`${this.baseUrl}/readActorByName/?actorName=${actorName}`);
 }
 addActorToExistingMovie(actor: Object,mvName: string,releaseDate:any): Observable<Object> {
  return this.http.post(`${this.baseUrl}/addActorToExistingMovie/?mvName=${mvName}&releaseDate=${releaseDate}`, actor);
}

updateActorByMvNameAndReleaseDate(actor: Object,actorName:string,mvName: string,releaseDate:any): Observable<any>{
  return this.http.put(`${this.baseUrl}/updateActorByMvNameAndReleaseDate/?actorName=${actorName}&mvName=${mvName}&releaseDate=${releaseDate}`,actor);

}

deleteActorByMvNameAndReleaseDate(actorName:string,mvName: string,releaseDate:any): Observable<any>{
  return this.http.delete(`${this.baseUrl}/deleteActorByMvNameAndReleaseDate/?actorName=${actorName}&mvName=${mvName}&releaseDate=${releaseDate}`);

}
 set setActorName(val: string){
  this.actorName= val;
}
set setActorRole(val: string){
  this.actorRole= val;
}
set setActorAge(val: number){
  this.actorAge= val;
}
set setActorImageUrl(val: string){
  this.actorImageUrl= val;
}
set setActorDescrip(val: string){
  this.actorDescrip= val;
}
set setActors(val: any[]){
  this.actors= val;
}
get getActorName():string{
  return this.actorName;
}
get getActorRole():string{
  return this.actorRole;
}
get getActorAge():number{
  return this.actorAge;
}
get getActorImageUrl():string{
  return this.actorImageUrl;
}
get getActorDescrip():string{
  return this.actorDescrip;
}

}
