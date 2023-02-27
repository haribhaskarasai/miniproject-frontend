import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddActorFormComponent } from './components/add-actor-form/add-actor-form.component';
import { AddActorPopupComponent } from './components/add-actor-popup/add-actor-popup.component';
import { AddMovieDetailsFormComponent } from './components/add-movie-details-form/add-movie-details-form.component';
import { AddTechFormComponent } from './components/add-tech-form/add-tech-form.component';
import { AddTechPopupComponent } from './components/add-tech-popup/add-tech-popup.component';
import { AllActorsComponent } from './components/all-actors/all-actors.component';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { AllTechniciansComponent } from './components/all-technicians/all-technicians.component';
import { CarosalComponent } from './components/carosal/carosal.component';
import { CastDetailPopoupComponent } from './components/cast-detail-popoup/cast-detail-popoup.component';
import { CastDetailsComponent } from './components/cast-details/cast-details.component';
import { CrewDetailPopoupComponent } from './components/crew-detail-popoup/crew-detail-popoup.component';
import { CrewDetailsComponent } from './components/crew-details/crew-details.component';
import { DeleteMovieDetailsPopupComponent } from './components/delete-movie-details-popup/delete-movie-details-popup.component';
import { DeleteMovieFormComponent } from './components/delete-movie-form/delete-movie-form.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MovieDetailsFormComponent } from './components/movie-details-form/movie-details-form.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieGenrePopupComponent } from './components/movie-genre-popup/movie-genre-popup.component';
import { MoviesByGenreComponent } from './components/movies-by-genre/movies-by-genre.component';
import { MoviesByRatingComponent } from './components/movies-by-rating/movies-by-rating.component';
import { PopupComponent } from './components/movies-rating-popup/popup.component';
import { UpdateActorDetailsFormComponent } from './components/update-actor-details-form/update-actor-details-form.component';
import { UpdateDetailsFormComponent } from './components/update-details-form/update-details-form.component';
import { UpdateTechDetailsFormComponent } from './components/update-tech-details-form/update-tech-details-form.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:"carousel"},
  { path: 'carousel', component: CarosalComponent},
  { path: 'movieDetails', component: MovieDetailsComponent},
  { path: 'movieDetailsForm', component: MovieDetailsFormComponent},
  { path: 'readByMvNameAndReleaseDate', component: MovieDetailsComponent},
  { path: 'readMoviesByRating', component: MoviesByRatingComponent},
  { path: 'readMoviesByGenre', component: MoviesByGenreComponent},
  { path: 'readAllMovies', component: AllMoviesComponent},
  { path: 'readAllActors', component: AllActorsComponent},
  { path: 'readAllTechnicians', component: AllTechniciansComponent},
  { path: 'popup', component: PopupComponent},
  { path: 'castDetailPopup', component: CastDetailPopoupComponent},
  { path: 'crewDetailPopup', component: CrewDetailPopoupComponent},
  { path: 'readActorByName', component: CastDetailsComponent},
  { path: 'readTechByName', component: CrewDetailsComponent},
  { path: 'adminLoginForm', component: LoginFormComponent},
  { path: 'editPage', component: EditPageComponent},
  { path: 'addMovieDetailsForm', component: AddMovieDetailsFormComponent},
  { path: 'deleteMovieForm', component: DeleteMovieFormComponent},
  { path: 'deleteMovieDetailsPopup', component: DeleteMovieDetailsPopupComponent},
  { path: 'addActorForm', component: AddActorFormComponent},
  { path: 'updateActorDetailsForm', component: UpdateActorDetailsFormComponent},
  { path: 'updateTechDetailsForm', component: UpdateTechDetailsFormComponent},
  { path: 'addTechForm', component: AddTechFormComponent},
  { path: 'addActorPopup', component: AddActorPopupComponent},
  {path:"addTechPopup",component:AddTechPopupComponent},
  {path:"updateDetailsForm",component:UpdateDetailsFormComponent},
  { path: 'movieGenrePopup', component: MovieGenrePopupComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
