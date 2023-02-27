import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast } from 'src/app/cast';
import { MovieserviceService } from 'src/app/movieservice.service';
import { DeleteMovieDetailsPopupComponent } from '../delete-movie-details-popup/delete-movie-details-popup.component';
export interface DialogData {
  mvName: any;
  releaseDate: any;
}
@Component({
  selector: 'app-delete-movie-form',
  templateUrl: './delete-movie-form.component.html',
  styleUrls: ['./delete-movie-form.component.css']
})
export class DeleteMovieFormComponent implements OnInit {
  movie: Cast = new Cast;
  isCheck: boolean = true;
  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieserviceService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  movieDetailsForm = new FormGroup({
    mvName: new FormControl('', [Validators.required]),
    releaseDate: new FormControl('', [Validators.required])
  })

  sendDetails() {
    if (this.isCheck) {
      this.movieService.readByMvNameAndReleaseDate(this.movieDetailsForm.value.mvName, this.movieDetailsForm.value.releaseDate)
        .subscribe((data => {
          console.log(data)
          this.movie = data;
          const dialogRef = this.dialog.open(DeleteMovieDetailsPopupComponent, { width: "90vw", disableClose: true, data: this.movie });
          // dialogRef.afterClosed().subscribe(result => {
          //   this.isCheck = result;
          //   // this.ngOnInit();

          // })
          console.log(this.movieDetailsForm.value);
          this.isCheck = false;

        }), error => alert("This Movie not existed"));
    } else {
      this.movieService.deleteByMvNameAndReleaseDate(this.movieDetailsForm.value.mvName, this.movieDetailsForm.value.releaseDate).subscribe((alert: any) => { alert("movie deleted succesfully") }
        , error => {
          alert("movie deleted succesfully")
          this.router.navigate(["editPage"])
        }
      );

    }
    //this.movieService.deleteByMvNameAndReleaseDate(this.movieDetailsForm.value.mvName, this.movieDetailsForm.value.releaseDate).subscribe()
    //alert("movie deleted succesfully");

  }

  get mvName() {
    return this.movieDetailsForm.get('mvName')
  }

  get releaseDate() {
    return this.movieDetailsForm.get('releaseDate')
  }
  backToEdit() {
    this.router.navigate(["editPage"])
  }
}

