import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Crew } from 'src/app/crew';
import { CrewService } from 'src/app/crew.service';

@Component({
  selector: 'app-all-technicians',
  templateUrl: './all-technicians.component.html',
  styleUrls: ['./all-technicians.component.css']
})
export class AllTechniciansComponent implements OnInit {
  technicians!:Crew[];

  constructor(private route: ActivatedRoute, private router: Router,private crewService: CrewService) { }

  ngOnInit(): void {
    this.crewService.readAllTechnicians()
  .subscribe((data => {
    console.log(data)
    this.technicians = data;
  }), error => console.log(error));
  }
  techDetails(techName:string){
    this.router.navigate(['readTechByName',{techName:techName}])
    
  }

}
