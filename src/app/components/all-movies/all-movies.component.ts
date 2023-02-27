import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/movie';
import { MovieserviceService } from 'src/app/movieservice.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  movies!:Movie[];

  constructor(private route: ActivatedRoute, private router: Router,private movieService: MovieserviceService) { }

  ngOnInit(): void {
  this.movieService.readAllMovies()
  .subscribe((data => {
    console.log(data)
    this.movies = data;
  }), error => console.log(error));
  }
  movieDeails(mvNameTemp: string,releaseDateTemp:string){
    this.router.navigate(['readByMvNameAndReleaseDate',{mvName:mvNameTemp,releaseDate:releaseDateTemp}])
    
  }


}
