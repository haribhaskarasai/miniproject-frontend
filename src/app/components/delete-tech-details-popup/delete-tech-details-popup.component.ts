import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CrewService } from 'src/app/crew.service';
import { Movie } from 'src/app/movie';
import { MovieserviceService } from 'src/app/movieservice.service';

@Component({
  selector: 'app-delete-tech-details-popup',
  templateUrl: './delete-tech-details-popup.component.html',
  styleUrls: ['./delete-tech-details-popup.component.css']
})
export class DeleteTechDetailsPopupComponent implements OnInit {
  mvName:string="";
  releaseDate:any;
  techName:string="";
  movie:Movie=new Movie;
  found:boolean=false;
  constructor(public dialogRef: MatDialogRef<DeleteTechDetailsPopupComponent>,private route: ActivatedRoute, private router: Router,private movieService: MovieserviceService,private dialog:MatDialog, private crewService: CrewService) { }


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
        }
      });
      if (this.found) {
        this.crewService.deleteTechByMvNameAndReleaseDate(this.techName,this.mvName,this.releaseDate).subscribe((data)=>{
          console.log(data);
        },error=>alert("Technician Deleted Successfully")
        )
      } else {
        alert("Technician dosenot exist");
      }
    }, (error) => {
      alert("Movie doesnot  exists");
    })
 
  }
}
