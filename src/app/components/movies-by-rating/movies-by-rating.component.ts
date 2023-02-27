import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/movie';
import { MovieserviceService } from 'src/app/movieservice.service';

@Component({
  selector: 'app-movies-by-rating',
  templateUrl: './movies-by-rating.component.html',
  styleUrls: ['./movies-by-rating.component.css']
})
export class MoviesByRatingComponent implements OnInit {
  mvRating:any;
  movies!:Movie[];

  constructor(private route: ActivatedRoute, private router: Router,private movieService: MovieserviceService) { }

  ngOnInit(): void {
  this.mvRating=this.route.snapshot.params["mvRating"]
  
  this.movieService.getMoviesListByRating(this.mvRating)
  .subscribe((data => {
    console.log(data)
    this.movies = data;
    // if(this.movies.length==0){
    //   alert("No such movies Exist");
    //   this.router.navigate(["carousel"]);
    // }
    console.log(this.movies.length)
  }), error => {alert("No such movies Exist");
  this.router.navigate(["carousel"]);});
  }
  movieDeails(mvNameTemp: string,releaseDateTemp:string){
    this.router.navigate(['readByMvNameAndReleaseDate',{mvName:mvNameTemp,releaseDate:releaseDateTemp}])
    
  }

}
