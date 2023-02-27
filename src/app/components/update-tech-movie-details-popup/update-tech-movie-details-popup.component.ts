import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Crew } from 'src/app/crew';
import { CrewService } from 'src/app/crew.service';
import { Movie } from 'src/app/movie';
import { MovieserviceService } from 'src/app/movieservice.service';

@Component({
  selector: 'app-update-tech-movie-details-popup',
  templateUrl: './update-tech-movie-details-popup.component.html',
  styleUrls: ['./update-tech-movie-details-popup.component.css']
})
export class UpdateTechMovieDetailsPopupComponent implements OnInit {
  mvName:string="";
  releaseDate:any;
  techName:string="";
  movie:Movie=new Movie;
  found:boolean=false;
  techTemp:Crew=new Crew;
  constructor(public dialogRef: MatDialogRef<UpdateTechMovieDetailsPopupComponent>,private route: ActivatedRoute, private router: Router,private movieService: MovieserviceService,private dialog:MatDialog, private crewService: CrewService) { }


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
      
      this.movie.technicians.forEach(tech => {
        if (tech.techName == this.techName) {
          this.found = true;
          this.techTemp=tech;
        }
      });
      if (this.found) {
        this.router.navigate(["updateTechDetailsForm",{queryParams:JSON.stringify(this.techTemp),techName:this.techName,mvName:this.mvName,releaseDate:this.releaseDate}])
      } else {
        alert("Technician dosenot exist");
      }
    }, (error) => {
      alert("Movie doesnot  exists");
    })
 
  }

}
