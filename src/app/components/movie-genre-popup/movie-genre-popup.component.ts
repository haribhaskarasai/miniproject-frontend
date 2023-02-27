import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-genre-popup',
  templateUrl: './movie-genre-popup.component.html',
  styleUrls: ['./movie-genre-popup.component.css']
})
export class MovieGenrePopupComponent implements OnInit {
  mvGener:any;
  constructor(private router: Router,public dialogRef: MatDialogRef<MovieGenrePopupComponent>) { }

  ngOnInit(): void {
  }
  openlog(){
    this.router.navigate(['readMoviesByGenre',{mvGener:this.mvGener}])
  }
  openEditPage(){
    this.dialogRef.close()
  }
}
