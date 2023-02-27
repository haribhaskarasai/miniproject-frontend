import { Cast } from 'src/app/cast';
import { Crew } from 'src/app/crew';

export class Movie {
    mvId: number = 0;
    mvName: string = "";
    mvGener: string = "";
    mvRating: number = 0;
    mvImageUrl:string="";
    mvVideoUrl:string="";
    mvDescrip:string="";
    releaseDate:any;
    actors:Cast[] = [];
    technicians:Crew[]=[];
}
