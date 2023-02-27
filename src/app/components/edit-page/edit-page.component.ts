import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieserviceService } from 'src/app/movieservice.service';
import { AddActorMovieDetailsPopupComponent } from '../add-actor-movie-details-popup/add-actor-movie-details-popup.component';
import { AddTechMovieDetailsPopupComponent } from '../add-tech-movie-details-popup/add-tech-movie-details-popup.component';
import { DeleteActorDetailsPopupComponent } from '../delete-actor-details-popup/delete-actor-details-popup.component';
import { DeleteMovieDetailsPopupComponent } from '../delete-movie-details-popup/delete-movie-details-popup.component';
import { DeleteTechDetailsPopupComponent } from '../delete-tech-details-popup/delete-tech-details-popup.component';
import { UpdateActorMovieDetailsPopupComponent } from '../update-actor-movie-details-popup/update-actor-movie-details-popup.component';
import { UpdatePopupFormComponent } from '../update-popup-form/update-popup-form.component';
import { UpdateTechMovieDetailsPopupComponent } from '../update-tech-movie-details-popup/update-tech-movie-details-popup.component';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  constructor(public dialog: MatDialog,private route: ActivatedRoute, private router: Router,
    private movieService: MovieserviceService ) { }

  ngOnInit(): void {}
  openDeleteMovieForm(){
    //const dialogRef = this.dialog.open(DeleteMovieDetailsPopupComponent, { disableClose: true });
    this.router.navigate(['deleteMovieForm'])
  }
  openPopupForm(){
    const dialogRef = this.dialog.open(UpdatePopupFormComponent, { disableClose: true });
  }
  opeAnddActorPopupForm(){
    const dialogRef = this.dialog.open(AddActorMovieDetailsPopupComponent, { disableClose: true });
  }  

  opeAddTechPopupForm(){
    const dialogRef = this.dialog.open(AddTechMovieDetailsPopupComponent, { disableClose: true });
  }
  openDeleteActorPopupForm(){
    const dialogRef = this.dialog.open(DeleteActorDetailsPopupComponent, { disableClose: true });
  }
  openDeleteTechPopupForm(){
    const dialogRef = this.dialog.open(DeleteTechDetailsPopupComponent, { disableClose: true });
  }
  openUpdateActorPopupForm(){
    const dialogRef = this.dialog.open(UpdateActorMovieDetailsPopupComponent, { disableClose: true });
  }
  openUpdateTechPopupForm(){
    const dialogRef = this.dialog.open(UpdateTechMovieDetailsPopupComponent, { disableClose: true });
  }
}
