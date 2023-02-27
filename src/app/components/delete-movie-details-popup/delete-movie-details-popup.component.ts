import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast } from 'src/app/cast';
import { Movie } from 'src/app/movie';
import { MovieserviceService } from 'src/app/movieservice.service';
import { DialogData } from '../delete-movie-form/delete-movie-form.component';

@Component({
  selector: 'app-delete-movie-details-popup',
  templateUrl: './delete-movie-details-popup.component.html',
  styleUrls: ['./delete-movie-details-popup.component.css']
})
export class DeleteMovieDetailsPopupComponent implements OnInit {
   mvName: string = "";
   releaseDate:any;
   movie:Movie=new Movie;
   VideoUrl:string="";
   isCheck:boolean=true;
  constructor(public dialogRef: MatDialogRef<DeleteMovieDetailsPopupComponent>,private route: ActivatedRoute, private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,private movieService: MovieserviceService) { }

  ngOnInit(){
    
   this.movie=this.data;
  }
  backToEdit(){
    this.dialogRef.close(this.isCheck = true);
  }
  }


