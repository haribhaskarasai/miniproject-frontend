import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';




@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  mvRating:any;
  
  constructor(private router: Router,private dialogRef:MatDialogRef<PopupComponent>) {
    
  }
  ngOnInit(): void {
   
  }
  openlog():void{
    if(this.mvRating<0||this.mvRating>5){
      alert("Please Provide Valied Rating")
    }else{
    this.router.navigate(['readMoviesByRating',{mvRating:this.mvRating}])
    console.log(this.mvRating);
    }
  }
  openEditPage(){
    this.dialogRef.close();
  }

}
