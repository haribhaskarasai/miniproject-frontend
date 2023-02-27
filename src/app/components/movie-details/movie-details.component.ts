import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/movie';
import { MovieserviceService } from 'src/app/movieservice.service';
import { MovieDetailsFormComponent } from '../movie-details-form/movie-details-form.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  mvName: string = "";
  releaseDate:any;
  movie:Movie=new Movie;
  VideoUrl:string="";
  links = ['First', 'Second', 'Third',"dhakshfkl","uqyouqdeyhowe","uheoadjhi",'First', 'Second', 'Third',"dhakshfkl","uqyouqdeyhowe","uheoadjhi"];
  activeLink = this.links[0];


  constructor(private route: ActivatedRoute, private router: Router,
    private movieService: MovieserviceService ) { }

  ngOnInit(){
    this.movie = new Movie();
    this.mvName=this.route.snapshot.params["mvName"]
    this.releaseDate=this.route.snapshot.params["releaseDate"]

    this.movieService.readByMvNameAndReleaseDate(this.mvName,this.releaseDate)
      .subscribe((data => {
        console.log(data)
        this.movie = data;
        
        this.VideoUrl="https://www.youtube.com/embed/"+this.movie.mvVideoUrl+"?rel=0";
        console.log(this.VideoUrl);
        console.log(this.movie.mvVideoUrl);
      }), error => console.log(error));
  }
  

}
