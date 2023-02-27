import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CastService } from 'src/app/cast.service';

@Component({
  selector: 'app-cast-detail-popoup',
  templateUrl: './cast-detail-popoup.component.html',
  styleUrls: ['./cast-detail-popoup.component.css']
})
export class CastDetailPopoupComponent implements OnInit {
  actorName:any;
  actor:any;
  found:boolean=false;

  constructor(private router: Router,private dialogRef:MatDialogRef<CastDetailPopoupComponent>,private castService:CastService) { }

  ngOnInit(): void {
  }
  openlog():void{
    // this.castService.readActorByName(this.actorName)
    // .subscribe((data => {
    //   console.log(data)
    //   this.actor = data;
    //   this.found=true;
    // }), error => console.log(error));
    // if(this.found){
    // }
    // else{
    //   alert("Actor Doesnot Exist")
    // }

    this.router.navigate(['readActorByName',{actorName:this.actorName}])
    console.log(this.actorName);
  }
  openEditPage(){
    this.dialogRef.close();
  }
}
