import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Crew } from 'src/app/crew';
import { CrewService } from 'src/app/crew.service';

@Component({
  selector: 'app-add-tech-popup',
  templateUrl: './add-tech-popup.component.html',
  styleUrls: ['./add-tech-popup.component.css']
})
export class AddTechPopupComponent implements OnInit {
  addTechForm: any = FormGroup;
  submitted = false;
  tech:Crew=new Crew;
  constructor(private formBuilder: FormBuilder,
    private router: Router , private crewService: CrewService,public dialogRef: MatDialogRef<AddTechPopupComponent>) { }

  ngOnInit(): void {
    this.addTechForm = this.formBuilder.group({
      techName: ['', [Validators.required, Validators.maxLength(20)]],
      techRole: ['', [Validators.required]],
      techAge: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      techImageUrl: ['', [Validators.required]],
      techDescrip: ['', [Validators.required]],
    })
  }
  get f() { return this.addTechForm.controls; }
  onSubmit() {
    this.submitted = true;
    //console.log(this.actor)
    this.tech.techName = this.addTechForm.value.techName
    this.tech.techRole = this.addTechForm.value.techRole
    this.tech.techAge=this.addTechForm.value.techAge
    this.tech.techImageUrl=this.addTechForm.value.techImageUrl
    this.tech.techDescrip=this.addTechForm.value.techDescrip
   this.dialogRef.close(this.tech);
  }

}
