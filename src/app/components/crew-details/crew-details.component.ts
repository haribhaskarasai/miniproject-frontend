import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Crew } from 'src/app/crew';
import { CrewService } from 'src/app/crew.service';

@Component({
  selector: 'app-crew-details',
  templateUrl: './crew-details.component.html',
  styleUrls: ['./crew-details.component.css']
})
export class CrewDetailsComponent implements OnInit {
  techName:any;
  tech:Crew=new Crew;
  constructor(private route: ActivatedRoute, private router: Router,private crewService:CrewService) { }

  ngOnInit(): void {
    this.techName=this.route.snapshot.params["techName"]

    this.crewService.readTechByName(this.techName)
    .subscribe((data => {
      console.log(data)
      this.tech = data;
    }), error =>{
      alert("Technician doesnot exist");
      this.router.navigate(["carousel"]);
    });
  }

}
