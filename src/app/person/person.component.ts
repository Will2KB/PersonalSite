import { Component, Input } from '@angular/core';
import { Person } from '../model/person';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [NgClass],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
	@Input() isHomePage! :boolean;
	@Input() person!:Person;
}
