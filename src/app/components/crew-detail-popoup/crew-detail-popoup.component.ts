import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crew-detail-popoup',
  templateUrl: './crew-detail-popoup.component.html',
  styleUrls: ['./crew-detail-popoup.component.css']
})
export class CrewDetailPopoupComponent implements OnInit {
  techName:any;

  constructor(private router: Router,private dialogRef:MatDialogRef<CrewDetailPopoupComponent>) { }

  ngOnInit(): void {
  }
  openlog():void{
    this.router.navigate(['readTechByName',{techName:this.techName}])
    console.log(this.techName);
  }
  openEditPage(){
    this.dialogRef.close();
  }

}
