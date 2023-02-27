import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CastService } from 'src/app/cast.service';
import { CrewService } from 'src/app/crew.service';
import { Movie } from 'src/app/movie';
import { MovieserviceService } from 'src/app/movieservice.service';

@Component({
  selector: 'app-update-details-form',
  templateUrl: './update-details-form.component.html',
  styleUrls: ['./update-details-form.component.css']
})
export class UpdateDetailsFormComponent implements OnInit {

  addMovieForm: any = FormGroup;
  mvNameTemp: string = "";
  releaseDate: any;
  movie: any;
  submitted:boolean=false;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private movieService: MovieserviceService,
    private castService: CastService,
    private crewService: CrewService, public dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  get f() { return this.addMovieForm.controls; }

  ngOnInit(): void {
    // this.mvNameTemp=this.route.snapshot.params["mvName"]
    // this.releaseDate=this.route.snapshot.params["releaseDate"]
    // this.movieService.readByMvNameAndReleaseDate(this.mvNameTemp, this.releaseDate)
    // .subscribe((data) => {
    //     this.movie = data;
    // })
    
    (this.route.params.subscribe(data => {
      this.movie = JSON.parse(data['queryParams']);
    }))

    console.log(this.movie)
    this.addMovieForm = this.formBuilder.group({
      mvName: [this.movie.mvName, [Validators.required, Validators.maxLength(20)]],
      mvGener: [this.movie.mvGener, [Validators.required]],
      mvRating: [this.movie.mvRating, [Validators.required, Validators.min(0), Validators.max(5)]],
      releaseDate: [this.movie.releaseDate, [Validators.required]],
      mvImageUrl: [this.movie.mvImageUrl, [Validators.required]],
      mvVideoUrl: [this.movie.mvVideoUrl, [Validators.required]],
      mvDescrip: [this.movie.mvDescrip, [Validators.required]],
    })
  }
  

  onSubmit() {
    this.submitted = true;
    console.log(this.addMovieForm.value)
    this.movieService.updateByMvNameAndReleaseDate(this.addMovieForm.value,this.movie.mvName,this.movie.releaseDate).subscribe(data => {
      alert("Movie Updated Successfully");
      this.router.navigate(['editPage']);
    })

  }

}
