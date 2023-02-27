import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast } from 'src/app/cast';
import { CastService } from 'src/app/cast.service';
import { CrewService } from 'src/app/crew.service';
import { MovieserviceService } from 'src/app/movieservice.service';

@Component({
  selector: 'app-update-actor-details-form',
  templateUrl: './update-actor-details-form.component.html',
  styleUrls: ['./update-actor-details-form.component.css']
})
export class UpdateActorDetailsFormComponent implements OnInit {
  addActorForm: any = FormGroup;
  submitted = false;
  mvName:string="";
  releaseDate:any;
  actorName:string="";
  actor:Cast=new Cast;
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
    this.actorName=this.route.snapshot.params["actorName"]
    console.log(this.mvName);
    (this.route.params.subscribe(data => {
      this.actor = JSON.parse(data['queryParams']);
    }))
  
    this.addActorForm = this.formBuilder.group({
      actorName: [this.actor.actorName, [Validators.required, Validators.maxLength(20),Validators.minLength(3)]],
      actorRole: [this.actor.actorRole, [Validators.required]],
      actorAge: [this.actor.actorAge, [Validators.required, Validators.min(1), Validators.max(100)]],
      actorImageUrl: [this.actor.actorImageUrl, [Validators.required]],
      actorDescrip: [this.actor.actorDescrip, [Validators.required]],
    })
  }
  get f() { return this.addActorForm.controls; }
  onSubmit() {
    this.submitted = true;
    this.castService.updateActorByMvNameAndReleaseDate(this.addActorForm.value,this.actorName,this.mvName,this.releaseDate).subscribe(data => {
      alert("Actor Updated successfully");
      this.router.navigate(['editPage']);
    },errror=>{ alert("Actor Updated successfully");
    this.router.navigate(['editPage']);})
  }
}
