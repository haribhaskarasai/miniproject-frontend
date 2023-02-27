import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast } from 'src/app/cast';
import { CastService } from 'src/app/cast.service';
import { Movie } from 'src/app/movie';
import { MovieserviceService } from 'src/app/movieservice.service';

@Component({
  selector: 'app-update-actor-movie-details-popup',
  templateUrl: './update-actor-movie-details-popup.component.html',
  styleUrls: ['./update-actor-movie-details-popup.component.css']
})
export class UpdateActorMovieDetailsPopupComponent implements OnInit {

  mvName:string="";
  releaseDate:any;
  actorName:string="";
  movie:Movie=new Movie;
  actorTemp:Cast=new Cast;

  found:boolean=false;
  constructor(public dialogRef: MatDialogRef<UpdateActorMovieDetailsPopupComponent>,private route: ActivatedRoute, private router: Router,private movieService: MovieserviceService,private dialog:MatDialog, private castService: CastService) { }

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
      this.movie.actors.forEach(actor => {
        if(actor.actorName==this.actorName){
          this.found=true;
          this.actorTemp=actor;
        }
      });
      if(this.found){
      this.router.navigate(["updateActorDetailsForm",{queryParams:JSON.stringify(this.actorTemp),actorName:this.actorName,mvName:this.mvName,releaseDate:this.releaseDate}])
      }else{
        alert("Actor dosenot exist");
      }
    }, (error) => {
      alert("Movie doesnot exist");
    })

}
}
