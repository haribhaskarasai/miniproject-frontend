import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CastService } from 'src/app/cast.service';
import { Crew } from 'src/app/crew';
import { CrewService } from 'src/app/crew.service';
import { MovieserviceService } from 'src/app/movieservice.service';

@Component({
  selector: 'app-update-tech-details-form',
  templateUrl: './update-tech-details-form.component.html',
  styleUrls: ['./update-tech-details-form.component.css']
})
export class UpdateTechDetailsFormComponent implements OnInit {

  addTechForm: any = FormGroup;
  submitted = false;
  mvName:string="";
  releaseDate:any;
  techName:string="";
  tech:Crew=new Crew;
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
    this.techName=this.route.snapshot.params["techName"]
    console.log(this.mvName);
    (this.route.params.subscribe(data => {
      this.tech = JSON.parse(data['queryParams']);
    }))
  
    this.addTechForm = this.formBuilder.group({
      techName: [this.tech.techName, [Validators.required, Validators.maxLength(20),Validators.minLength(3)]],
      techRole: [this.tech.techRole, [Validators.required]],
      techAge: [this.tech.techAge, [Validators.required, Validators.min(1), Validators.max(100)]],
      techImageUrl: [this.tech.techImageUrl, [Validators.required]],
      techDescrip: [this.tech.techDescrip, [Validators.required]],
    })
  }
  get f() { return this.addTechForm.controls; }
  onSubmit() {
    this.submitted = true;
    this.crewService.updateTechByMvNameAndReleaseDate(this.addTechForm.value,this.techName,this.mvName,this.releaseDate).subscribe(data => {
      alert("Technician Updated successfully");
      this.router.navigate(['editPage']);
    },errror=>{ alert("Technician Updated successfully");
    this.router.navigate(['editPage']);})
  }

}
