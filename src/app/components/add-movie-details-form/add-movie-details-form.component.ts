import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CastService } from 'src/app/cast.service';
import { CrewService } from 'src/app/crew.service';
import { Movie } from 'src/app/movie';
import { MovieserviceService } from 'src/app/movieservice.service';
import { AddActorPopupComponent } from '../add-actor-popup/add-actor-popup.component';
import { AddTechPopupComponent } from '../add-tech-popup/add-tech-popup.component';

@Component({
  selector: 'app-add-movie-details-form',
  templateUrl: './add-movie-details-form.component.html',
  styleUrls: ['./add-movie-details-form.component.css']
})
export class AddMovieDetailsFormComponent implements OnInit {

  addMovieForm: any = FormGroup;
  loading = false;
  submitted = false;
  mvName: string = "";
  releaseDate: any;
  movie: Movie = new Movie;
  actorCountTemp: number = 0;
  techCountTemp: number = 0;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private movieService: MovieserviceService,
    private castService: CastService,
    private crewService: CrewService, public dialog: MatDialog
  ) { }

  get f() { return this.addMovieForm.controls; }

  ngOnInit(): void {
    this.addMovieForm = this.formBuilder.group({
      mvName: ['', [Validators.required, Validators.maxLength(20)]],
      mvGener: ['', [Validators.required]],
      mvRating: ['', [Validators.required, Validators.min(0), Validators.max(5)]],
      releaseDate: ['', [Validators.required]],
      mvImageUrl: ['', [Validators.required]],
      mvVideoUrl: ['', [Validators.required]],
      mvDescrip: ['', [Validators.required]],
      addActors: [""],
      addTechnicians: [""]
    })
  }
  addActor() {
    const dialogRef = this.dialog.open(AddActorPopupComponent, { disableClose: true });
    dialogRef.afterClosed().subscribe(result => {
      this.actorCountTemp += 1;
      this.movie.actors.push(result)
      console.log(this.movie.actors)
      console.log('delete closed');
    })
  }
  removeActor() {
    if (this.actorCountTemp >= 1) {
      this.actorCountTemp -= 1;
      this.movie.actors.pop();

    }
    else {
      alert("Actors List Is Empty");
    }

  }
  addTech() {
    const dialogRef = this.dialog.open(AddTechPopupComponent, { disableClose: true });
    dialogRef.afterClosed().subscribe(result => {
      this.techCountTemp += 1;
      this.movie.technicians.push(result)
      console.log(this.movie.technicians)
      console.log('delete closed');
    })
  }
  removeTech() {
    if (this.techCountTemp >= 1) {
      this.techCountTemp -= 1;
      this.movie.technicians.pop();

    }
    else {
      alert("Technician List Is Empty");
    }

  }


  onSubmit() {
    this.submitted = true;
    this.mvName = this.addMovieForm.value.mvName
    this.releaseDate = this.addMovieForm.value.releaseDate
    this.movie.mvName = this.addMovieForm.value.mvName
    this.movie.mvGener = this.addMovieForm.value.mvGener
    this.movie.mvRating = this.addMovieForm.value.mvRating
    this.movie.releaseDate = this.addMovieForm.value.releaseDate
    this.movie.mvImageUrl=this.addMovieForm.value.mvImageUrl
    this.movie.mvDescrip=this.addMovieForm.value.mvDescrip
    this.movie.mvVideoUrl=this.addMovieForm.value.mvVideoUrl
    this.movieService.readByMvNameAndReleaseDate(this.mvName, this.releaseDate)
      .subscribe((data) => {
        console.log(data)
        this.movie = data;
        if (this.movie.mvName == this.mvName) {
          alert("Movie Already exists");
          this.loading = false;
        }
      }, (error) => {
        this.movieService.addMovie(this.movie).subscribe(data => {
          this.loading = false;
          alert("Movie added successfully");
          this.router.navigate(['editPage']);
        })
      })

  }

}
