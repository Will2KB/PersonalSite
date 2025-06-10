import { Component, Input } from '@angular/core';
import { Langue } from '../model/langue';

@Component({
  selector: 'app-langue',
  standalone: true,
  imports: [],
  templateUrl: './langue.component.html',
  styleUrl: './langue.component.css'
})
export class LangueComponent {
	@Input() langues!: Langue[];
}
