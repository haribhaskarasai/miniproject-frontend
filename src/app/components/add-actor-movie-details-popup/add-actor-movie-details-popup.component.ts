import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/movie';
import { MovieserviceService } from 'src/app/movieservice.service';

@Component({
  selector: 'app-add-actor-movie-details-popup',
  templateUrl: './add-actor-movie-details-popup.component.html',
  styleUrls: ['./add-actor-movie-details-popup.component.css']
})
export class AddActorMovieDetailsPopupComponent implements OnInit {
  mvName:string="";
  releaseDate:any;
  movie:Movie=new Movie;
  constructor(public dialogRef: MatDialogRef<AddActorMovieDetailsPopupComponent>,private route: ActivatedRoute, private router: Router,private movieService: MovieserviceService,private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openEditPage(){
    this.dialogRef.close()
  }
  openUpdateForm(){
    this.movieService.readByMvNameAndReleaseDate(this.mvName, this.releaseDate)
    .subscribe((data) => {
      console.log(data)
      this.movie = data;
      this.router.navigate(["addActorForm",{mvName:this.mvName,releaseDate:this.releaseDate}]);
    }, (error) => {
      alert("Movie doesnot  exists");
    })
 
  }

}
