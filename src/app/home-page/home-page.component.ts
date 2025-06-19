import { OnInit ,Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MenuComponent } from "../menu/menu.component";
import { PersonSummary } from '../model/personSummary';
import { PersonService } from '../services/PersonService';

@Component({
	selector: 'app-home-page',
	standalone: true,
	imports: [MenuComponent],
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

	personSummary: PersonSummary | null = null;
	@ViewChild('function') functionElement!: ElementRef<HTMLSpanElement>;

	typingSpeed = 200;
	pauseTime = 2000;

	constructor(private router: Router, private personService: PersonService, private renderer: Renderer2) { }

	ngOnInit() {
		this.personService.personSummary$.subscribe(summary => {
			console.log(summary);
			this.personSummary = summary;
			if (this.personSummary) {
				setTimeout(() => this.startTypingCycle(0), 0);
			}
		});
	}

	startTypingCycle(index: number): void {
		const word = this.personSummary?.title || "";
		this.typeWord(word, 0, () => {
			setTimeout(() => {
				this.deleteWord(() => {
					const nextIndex = (index + 1) % word.length;
					this.startTypingCycle(nextIndex);
				});
			}, this.pauseTime);
		});
	}

	typeWord(word: string, charIndex: number, callback: () => void): void {
		//Si le prochain caractère appartient bien au mot à afficher
		if (charIndex < word.length) {
			//On écrit le prochaine caractère et on rappelle la même fonction avec un temps de pause
			this.renderer.setProperty(this.functionElement.nativeElement, 'textContent',
				word.substring(0, charIndex + 1));
			setTimeout(() => this.typeWord(word, charIndex + 1, callback), this.typingSpeed);
		} else {
			//Sinon on appelle la fonction pour supprimer le mot du span
			callback();
		}
	}

	deleteWord(callback: () => void): void {
		const text = this.functionElement.nativeElement.textContent || "";
		//Si il reste du texte dans le span
		if (text.length > 0) {
			//On supprime un caractère du texte et on rappelle la même fonction
			this.renderer.setProperty(this.functionElement.nativeElement, 'textContent', text.slice(0, -1));
			setTimeout(() => this.deleteWord(callback), this.typingSpeed / 2);
		} else {
			//Si le champ est vide, on attends quelques secondes
			//On rappelle la fonctionne initial pour relancer l'animation
			setTimeout(()=> callback(), this.pauseTime/2);
		}
	}

	navigateToPresentation(): void {
		this.router.navigateByUrl('presentation');
	}

	navigateToCV(): void {
		this.router.navigateByUrl('cv');
	}
}
