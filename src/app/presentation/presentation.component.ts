import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  standalone: true,
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {
	isHomePage:boolean=false;
}
