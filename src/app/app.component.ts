import { Component, EventEmitter, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BottomComponent } from "./bottom/bottom.component";
import { HeaderComponent } from "./header/header.component";
import { PersonService } from './services/PersonService';
import { PersonSummary } from './model/personSummary';
import { PersonComponent } from "./person/person.component";

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, BottomComponent, HeaderComponent, PersonComponent ],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
	isHomePage: boolean = false;
	title = 'PersonalSite';

	constructor(private personService: PersonService) {
	}

	ngOnInit(): void {
		  this.personService.loadPartialPerson().subscribe();
	}

	componentAdded($event: EventEmitter<any>) {
		if ($event.constructor.name === '_HomePageComponent')
			this.isHomePage = true;
		else
			this.isHomePage = false;
	}
}
