import { Component, Input } from '@angular/core';
import { PersonSummary } from '../model/personSummary';
import { PersonService } from '../services/PersonService';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-bottom',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './bottom.component.html',
  styleUrl: './bottom.component.css'
})
export class BottomComponent {

	personSummary: PersonSummary | null = null;
	@Input() isHomePage!:boolean;
	
	constructor(private personService: PersonService) {}
	
	ngOnInit() {
		  this.personService.personSummary$.subscribe(summary => {
		    this.personSummary = summary;
		  });
		}
	
}
