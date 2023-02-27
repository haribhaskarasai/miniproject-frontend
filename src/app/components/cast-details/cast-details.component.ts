import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast } from 'src/app/cast';
import { CastService } from 'src/app/cast.service';

@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.css']
})
export class CastDetailsComponent implements OnInit {
  actorName:any;
  actor:Cast=new Cast;
  constructor(private route: ActivatedRoute, private router: Router,private castService:CastService) { }

  ngOnInit(): void {
    this.actorName=this.route.snapshot.params["actorName"]

    this.castService.readActorByName(this.actorName)
    .subscribe((data => {
      console.log(data)
      this.actor = data;
    }), error => {
      alert("actor doesnot exist");
      this.router.navigate(["carousel"]);
    });

    
  }

}
