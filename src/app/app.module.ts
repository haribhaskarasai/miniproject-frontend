import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { CarosalComponent } from './components/carosal/carosal.component';
import { MovieDetailsFormComponent } from './components/movie-details-form/movie-details-form.component';
import { HeaderComponent } from './components/header/header.component';
import { MoviesByRatingComponent } from './components/movies-by-rating/movies-by-rating.component'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './components/movies-rating-popup/popup.component';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';

import { AllActorsComponent } from './components/all-actors/all-actors.component';
import { CastDetailPopoupComponent } from './components/cast-detail-popoup/cast-detail-popoup.component';
import { CastDetailsComponent } from './components/cast-details/cast-details.component';
import { AllTechniciansComponent } from './components/all-technicians/all-technicians.component';
import { CrewDetailPopoupComponent } from './components/crew-detail-popoup/crew-detail-popoup.component';
import { CrewDetailsComponent } from './components/crew-details/crew-details.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';
import {MatCardModule} from '@angular/material/card';
import { AddMovieDetailsFormComponent } from './components/add-movie-details-form/add-movie-details-form.component';
import { DeleteMovieFormComponent } from './components/delete-movie-form/delete-movie-form.component';
import { DeleteMovieDetailsPopupComponent } from './components/delete-movie-details-popup/delete-movie-details-popup.component';
import {MatIconModule} from '@angular/material/icon';
import { AddActorFormComponent } from './components/add-actor-form/add-actor-form.component';
import { AddActorPopupComponent } from './components/add-actor-popup/add-actor-popup.component';
import { AddTechPopupComponent } from './components/add-tech-popup/add-tech-popup.component';
import { UpdatePopupFormComponent } from './components/update-popup-form/update-popup-form.component';
import { UpdateDetailsFormComponent } from './components/update-details-form/update-details-form.component';
import { MovieGenrePopupComponent } from './components/movie-genre-popup/movie-genre-popup.component';
import { MoviesByGenreComponent } from './components/movies-by-genre/movies-by-genre.component';
import { AddActorMovieDetailsPopupComponent } from './components/add-actor-movie-details-popup/add-actor-movie-details-popup.component';
import { AddTechMovieDetailsPopupComponent } from './components/add-tech-movie-details-popup/add-tech-movie-details-popup.component';
import { AddTechFormComponent } from './components/add-tech-form/add-tech-form.component';
import { DeleteActorDetailsPopupComponent } from './components/delete-actor-details-popup/delete-actor-details-popup.component';
import { DeleteTechDetailsPopupComponent } from './components/delete-tech-details-popup/delete-tech-details-popup.component';
import { UpdateActorMovieDetailsPopupComponent } from './components/update-actor-movie-details-popup/update-actor-movie-details-popup.component';
import { UpdateActorDetailsFormComponent } from './components/update-actor-details-form/update-actor-details-form.component';
import { UpdateTechMovieDetailsPopupComponent } from './components/update-tech-movie-details-popup/update-tech-movie-details-popup.component';
import { UpdateTechDetailsFormComponent } from './components/update-tech-details-form/update-tech-details-form.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    CarosalComponent,
    MovieDetailsFormComponent,
    HeaderComponent,
    MoviesByRatingComponent,
    PopupComponent,
    AllMoviesComponent,
    AllActorsComponent,
    CastDetailPopoupComponent,
    CastDetailsComponent,
    AllTechniciansComponent,
    CrewDetailPopoupComponent,
    CrewDetailsComponent,
    LoginFormComponent,
    EditPageComponent,
    AddMovieDetailsFormComponent,
    DeleteMovieFormComponent,
    DeleteMovieDetailsPopupComponent,
    AddActorFormComponent,
    AddActorPopupComponent,
    AddTechPopupComponent,
    UpdatePopupFormComponent,
    UpdateDetailsFormComponent,
    MovieGenrePopupComponent,
    MoviesByGenreComponent,
    AddActorMovieDetailsPopupComponent,
    AddTechMovieDetailsPopupComponent,
    AddTechFormComponent,
    DeleteActorDetailsPopupComponent,
    DeleteTechDetailsPopupComponent,
    UpdateActorMovieDetailsPopupComponent,
    UpdateActorDetailsFormComponent,
    UpdateTechMovieDetailsPopupComponent,
    UpdateTechDetailsFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,            
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
    MDBBootstrapModule.forRoot()

  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
