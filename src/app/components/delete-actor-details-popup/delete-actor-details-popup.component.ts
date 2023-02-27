import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CastService } from 'src/app/cast.service';
import { Movie } from 'src/app/movie';
import { MovieserviceService } from 'src/app/movieservice.service';

@Component({
  selector: 'app-delete-actor-details-popup',
  templateUrl: './delete-actor-details-popup.component.html',
  styleUrls: ['./delete-actor-details-popup.component.css']
})
export class DeleteActorDetailsPopupComponent implements OnInit {

  mvName: string = "";
  releaseDate: any;
  actorName: string = "";
  found: boolean = false;
  movie: Movie = new Movie;
  constructor(public dialogRef: MatDialogRef<DeleteActorDetailsPopupComponent>, private route: ActivatedRoute, private router: Router, private movieService: MovieserviceService, private dialog: MatDialog, private castService: CastService) { }

  ngOnInit(): void {
  }
  openEditPage() {
    this.dialogRef.close()
  }
  openUpdateForm() {
    this.movieService.readByMvNameAndReleaseDate(this.mvName, this.releaseDate)
      .subscribe((data) => {
        console.log(data)
        this.movie = data;
        // this.castService.deleteActorByMvNameAndReleaseDate(this.actorName,this.mvName,this.releaseDate).subscribe((data)=>{
        //   console.log(data);
        // },error=>alert("Actor Deleted Successfully")
        // )
        this.movie.actors.forEach(actor => {
          if (actor.actorName == this.actorName) {
            this.found = true;
          }
        });
        if (this.found) {
          this.castService.deleteActorByMvNameAndReleaseDate(this.actorName, this.mvName, this.releaseDate).subscribe((data) => {
            console.log(data);
          }, error => alert("Actor Deleted Successfully")
          )
        } else {
          alert("Actor dosenot exist");
        }
      }, (error) => {
        alert("Movie doesnot  exists");
      })

  }

}
