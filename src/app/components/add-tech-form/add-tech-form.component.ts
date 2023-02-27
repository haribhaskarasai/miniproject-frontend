import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CastService } from 'src/app/cast.service';
import { CrewService } from 'src/app/crew.service';
import { Movie } from 'src/app/movie';
import { MovieserviceService } from 'src/app/movieservice.service';

@Component({
  selector: 'app-add-tech-form',
  templateUrl: './add-tech-form.component.html',
  styleUrls: ['./add-tech-form.component.css']
})
export class AddTechFormComponent implements OnInit {

  addTechForm: any = FormGroup;
  submitted = false;
  mvName:string="";
  releaseDate:any;
  movie:Movie=new Movie;
  found:boolean=false;

  constructor( private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private movieService: MovieserviceService,
    private castService: CastService,
    private crewService: CrewService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.mvName=this.route.snapshot.params["mvName"]
    this.releaseDate=this.route.snapshot.params["releaseDate"]
    console.log(this.mvName)
  
    this.addTechForm = this.formBuilder.group({
      techName: ['', [Validators.required, Validators.maxLength(20),Validators.minLength(3)]],
      techRole: ['', [Validators.required]],
      techAge: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      techImageUrl: ['', [Validators.required]],
      techDescrip: ['', [Validators.required]],
    })
  }
  get f() { return this.addTechForm.controls; }
  onSubmit() {
    this.submitted = true;
    // console.log(this.mvName)
    this.movieService.readByMvNameAndReleaseDate(this.mvName, this.releaseDate)
    .subscribe((data) => {
      console.log(data)
      this.movie = data;
      this.movie.technicians.forEach(tech => {
        if(tech.techName==this.addTechForm.value.techName){
          this.found=true;
        }
      });
      if(this.found){
        alert("Technician already exist");
        this.router.navigate(["editPage"])
       }else{
        this.crewService.addTechToExistingMovie(this.addTechForm.value,this.mvName,this.releaseDate).subscribe(data => {
          alert("Technician added successfully");
          this.router.navigate(['editPage']);
        })
      }
    }, (error) => {
    })
  }

}
