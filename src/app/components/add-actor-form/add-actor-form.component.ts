import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast } from 'src/app/cast';
import { CastService } from 'src/app/cast.service';
import { CrewService } from 'src/app/crew.service';
import { Movie } from 'src/app/movie';
import { MovieserviceService } from 'src/app/movieservice.service';

@Component({
  selector: 'app-add-actor-form',
  templateUrl: './add-actor-form.component.html',
  styleUrls: ['./add-actor-form.component.css']
})
export class AddActorFormComponent implements OnInit {
  addActorForm: any = FormGroup;
  submitted = false;
  mvName:string="";
  releaseDate:any;
  movie:Movie=new Movie;
  actor:any;
  found:boolean=false;
  // actorName:string="";
	// actorRole:string="";
  // actorAge:number=0;
	// actorImageUrl:string="";
	// actorDescrip:string="";
  // actor:Cast=new Cast;

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
  
    this.addActorForm = this.formBuilder.group({
      actorName: ['', [Validators.required, Validators.maxLength(20),Validators.minLength(3)]],
      actorRole: ['', [Validators.required]],
      actorAge: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      actorImageUrl: ['', [Validators.required]],
      actorDescrip: ['', [Validators.required]],
    })
  }
  get f() { return this.addActorForm.controls; }
  onSubmit() {
    this.submitted = true;
    
    this.movieService.readByMvNameAndReleaseDate(this.mvName, this.releaseDate)
    .subscribe((data) => {
      console.log(data)
      this.movie = data;
      this.movie.actors.forEach(actor => {
        if(actor.actorName==this.addActorForm.value.actorName){
          this.found=true;
        }
      });
      if(this.found){
        alert("Actor already exist");
        this.router.navigate(["editPage"])
       }else{
        this.castService.addActorToExistingMovie(this.addActorForm.value,this.mvName,this.releaseDate).subscribe(data => {
          alert("Actor added successfully");
          this.router.navigate(['editPage']);
        })
      }
    }, (error) => {
    })
  }

}
