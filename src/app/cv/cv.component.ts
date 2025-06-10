import { Component, OnInit } from '@angular/core';

import { LangueComponent } from '../langue/langue.component'
import { ExperiencesListComponent } from '../experiences-list/experiences-list.component'
import { InterestCentersComponent } from '../interest-centers/interest-centers.component'
import { PersonComponent } from "../person/person.component";

import { Person } from '../model/person';
import { PersonService } from '../services/PersonService';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [LangueComponent, ExperiencesListComponent, InterestCentersComponent, PersonComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent implements OnInit{
	person!:Person;
	isHomePage:boolean=false;
	
	constructor(private personService:PersonService){}
	
	ngOnInit(){
		this.personService.getCurrentPerson().subscribe(pers=> {this.person = pers;});
	}
}
