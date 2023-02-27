import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast } from 'src/app/cast';
import { CastService } from 'src/app/cast.service';

@Component({
  selector: 'app-all-actors',
  templateUrl: './all-actors.component.html',
  styleUrls: ['./all-actors.component.css']
})
export class AllActorsComponent implements OnInit {
  actors!:Cast[];

  constructor(private route: ActivatedRoute, private router: Router,private castService: CastService) { }

  ngOnInit(): void {
    this.castService.readAllActors()
  .subscribe((data => {
    console.log(data)
    this.actors = data;
  }), error => console.log(error));
  }
  actorDetails(actorName:string){
    this.router.navigate(['readActorByName',{actorName:actorName}])
    
  }

}
