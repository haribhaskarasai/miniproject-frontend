import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Event, NavigationEnd, Router } from '@angular/router';
import { CastDetailPopoupComponent } from '../cast-detail-popoup/cast-detail-popoup.component';
import { CrewDetailPopoupComponent } from '../crew-detail-popoup/crew-detail-popoup.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { MovieGenrePopupComponent } from '../movie-genre-popup/movie-genre-popup.component';
import { PopupComponent } from '../movies-rating-popup/popup.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showLogin : boolean = true;
  showLogout:boolean=false;
 
  constructor(public dialog: MatDialog,public router:Router) { 
    router.events.subscribe((event : Event) => {
      if(event instanceof NavigationEnd)
        //this.currentUrl = event.url;
        if( event.url === "/editPage" ||event.url === "/addMovieDetailsForm"||event.url === "/deleteMovieForm"||event.url === "/updateDetailsForm"){
            this.showLogin = false;
            this.showLogout=true;
        }else if(event.url === '/adminLoginForm'){
          this.showLogin = false;
          this.showLogout=false;
        }
   })

  }

  ngOnInit(): void {
  }
  openMovieRatingPopup() {
    this.dialog.open(PopupComponent, { disableClose: true });
  }
  openCastDetailPopup() {
    this.dialog.open(CastDetailPopoupComponent, { disableClose: true });
  }
  openCrewDetailPopup() {
    this.dialog.open(CrewDetailPopoupComponent, { disableClose: true });
  }
  openLoginForm(){
    this.router.navigate(['adminLoginForm'])
  }
  openMovieGenrePopup(){
    this.dialog.open(MovieGenrePopupComponent, { disableClose: true });
  }
}
