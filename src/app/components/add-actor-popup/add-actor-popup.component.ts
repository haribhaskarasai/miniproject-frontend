import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Cast } from 'src/app/cast';
import { CastService } from 'src/app/cast.service';


@Component({
  selector: 'app-add-actor-popup',
  templateUrl: './add-actor-popup.component.html',
  styleUrls: ['./add-actor-popup.component.css']
})
export class AddActorPopupComponent implements OnInit {
  addActorForm: any = FormGroup;
  loading = false;
  submitted = false;
  actor:Cast=new Cast;
  constructor(private formBuilder: FormBuilder,
    private router: Router , private castService: CastService,public dialogRef: MatDialogRef<AddActorPopupComponent>,) { }

  ngOnInit(): void {
    this.addActorForm = this.formBuilder.group({
      actorName: ['', [Validators.required, Validators.maxLength(20)]],
      actorRole: ['', [Validators.required]],
      actorAge: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      actorImageUrl: ['', [Validators.required]],
      actorDescrip: ['', [Validators.required]],
    })
  }
  get f() { return this.addActorForm.controls; }
  onSubmit() {
    this.submitted = true;
    // this.loading = true;
    this.actor.actorName = this.addActorForm.value.actorName
    this.actor.actorRole = this.addActorForm.value.actorRole
    this.actor.actorAge=this.addActorForm.value.actorAge
    this.actor.actorImageUrl=this.addActorForm.value.actorImageUrl
    this.actor.actorDescrip=this.addActorForm.value.actorDescrip
    console.log(this.actor)
    
    this.dialogRef.close(this.actor);
  }


}
