import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/movie';
import { MovieserviceService } from 'src/app/movieservice.service';

@Component({
  selector: 'app-movies-by-genre',
  templateUrl: './movies-by-genre.component.html',
  styleUrls: ['./movies-by-genre.component.css']
})
export class MoviesByGenreComponent implements OnInit {
  mvGener:any;
  movies!:Movie[];

  constructor(private route: ActivatedRoute, private router: Router,private movieService: MovieserviceService) { }

  ngOnInit(): void {
  this.mvGener=this.route.snapshot.params["mvGener"]
  
  this.movieService.getMoviesListByGener(this.mvGener)
  .subscribe((data => {
    console.log(data)
    this.movies = data;
    if(this.movies.length==0){
        alert("No such movies Exist");
        this.router.navigate(["carousel"]);
      }
  }), error =>{alert("No Such Genre");
  this.router.navigate(["carousel"]);
});
  }
  movieDeails(mvNameTemp: string,releaseDateTemp:string){
    this.router.navigate(['readByMvNameAndReleaseDate',{mvName:mvNameTemp,releaseDate:releaseDateTemp}])
    
  }

}
