import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MenuComponent } from "../menu/menu.component";
import { PersonSummary } from '../model/personSummary';
import { PersonService } from '../services/PersonService';
import { delay } from 'rxjs';

@Component({
	selector: 'app-home-page',
	standalone: true,
	imports: [MenuComponent],
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit, AfterViewInit {

	personSummary: PersonSummary | null = null;
	@ViewChild('function') functionElement!: ElementRef<HTMLSpanElement>;

	constructor(private router: Router, private personService: PersonService) { }


	ngOnInit() {
		  this.personService.personSummary$.subscribe(summary => {
		    this.personSummary = summary;
		  });
		}

	ngAfterViewInit() {
		this.writeText(this.personSummary!.title, 0, this.functionElement.nativeElement);
		//Problème SetTimeOut!!!!
		/*const writingTimeOut = setTimeout(this.writeText, 0, this.person.title, 0, this.functionElement.nativeElement);
		setTimeout(() => {
			console.log('Cancelling the first timeout');
			clearTimeout(writingTimeOut);
		}, 500);*/
	}

	async writeText(text: string, index: number, input: any) {
		console.log("in writeText" + index);
		if (index < text.length) {
			input.innerText += text[index];
			await delay(200);
			this.writeText(text, index + 1, input);
		}
	}

	async delay(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	navigateToPresentation(): void {
		this.router.navigateByUrl('presentation');
	}

	navigateToCV(): void {
		this.router.navigateByUrl('cv');
	}
}
