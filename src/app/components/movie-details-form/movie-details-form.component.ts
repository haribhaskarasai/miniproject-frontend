import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieserviceService } from 'src/app/movieservice.service';


@Component({
  selector: 'app-movie-details-form',
  templateUrl: './movie-details-form.component.html',
  styleUrls: ['./movie-details-form.component.css']
})
export class MovieDetailsFormComponent implements OnInit {
  movie:any;
  constructor(private route: ActivatedRoute, private router: Router ,private movieService: MovieserviceService) { }

  ngOnInit(): void {
  }

  movieDetailsForm = new FormGroup({
    mvName : new FormControl('',[Validators.required]),
    releaseDate : new FormControl('',[Validators.required])
 })

 sendDetails(){
  this.movieService.readByMvNameAndReleaseDate(this.movieDetailsForm.value.mvName,this.movieDetailsForm.value.releaseDate)
  .subscribe((data => {
    console.log(data)
    this.movie = data;
    this.router.navigate(['readByMvNameAndReleaseDate',{mvName:this.movieDetailsForm.value.mvName,releaseDate:this.movieDetailsForm.value.releaseDate}])
    console.log(this.movieDetailsForm.value);
    
  }), error =>alert("This Movie not existed"));
  
 }

 get mvName(){
   return this.movieDetailsForm.get('mvName')
 }

 get releaseDate(){
   return this.movieDetailsForm.get('releaseDate')
 }

}
