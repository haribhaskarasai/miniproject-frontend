import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast } from 'src/app/cast';
import { Movie } from 'src/app/movie';
import { MovieserviceService } from 'src/app/movieservice.service';

@Component({
  selector: 'app-update-popup-form',
  templateUrl: './update-popup-form.component.html',
  styleUrls: ['./update-popup-form.component.css']
})
export class UpdatePopupFormComponent implements OnInit {
  mvName:string="";
  releaseDate:any;
  movie:Movie=new Movie;
  constructor(public dialogRef: MatDialogRef<UpdatePopupFormComponent>,private route: ActivatedRoute, private router: Router,private movieService: MovieserviceService,private dialog:MatDialog) { }

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
      this.router.navigate(["updateDetailsForm",{queryParams:JSON.stringify(data)}]);
    }, (error) => {
      alert("Movie doesnot  exists");
    })
 
  }
}
