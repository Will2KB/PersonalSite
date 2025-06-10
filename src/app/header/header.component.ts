import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

import { MenuComponent } from "../menu/menu.component";
import { PersonSummary } from '../model/personSummary';
import { PersonService } from '../services/PersonService';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent, RouterLink, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
	
	personSummary: PersonSummary | null = null;
	@Input() isHomePage! :boolean;
	
	constructor(private personService: PersonService) {}

	ngOnInit() {
	  this.personService.personSummary$.subscribe(summary => {
	    this.personSummary = summary;
	  });
	}
	
	openInNewPage(url: string){
	    window.open(url, "_blank");
	}
}
