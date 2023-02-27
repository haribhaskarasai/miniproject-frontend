import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {
  private baseUrl = 'http://localhost:9095/Movie';
  constructor(private http: HttpClient) { }
  readByMvNameAndReleaseDate(mvName: string,releaseDate:any): Observable<any> {
    return this.http.get(`${this.baseUrl}/readByMvNameAndReleaseDate/?mvName=${mvName}&releaseDate=${releaseDate}`);
  }

  getMoviesListByRating(mvRating:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/readAllMoviesByMvRating/?mvRating=${mvRating}`);
  }
  getMoviesListByGener(mvGener:any): Observable<any> {
    return this.http.get(`${this.baseUrl}/readAllMoviesByMvGener/?mvGener=${mvGener}`);
  }
  readAllMovies():Observable<any> {
    return this.http.get(`${this.baseUrl}/readAllMovies`);
  }
  
  addMovie(movie: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/addMv`, movie);
  }
  updateByMvNameAndReleaseDate(movie: Object,mvName: string,releaseDate:any): Observable<any>{
    return this.http.put(`${this.baseUrl}/updateByMvNameAndReleaseDate/?mvName=${mvName}&releaseDate=${releaseDate}`,movie);

  }
  deleteByMvNameAndReleaseDate(mvName: string,releaseDate:any): Observable<any>{
    return this.http.delete(`${this.baseUrl}/deleteByMvNameAndReleaseDate/?mvName=${mvName}&releaseDate=${releaseDate}`);

  }
}
