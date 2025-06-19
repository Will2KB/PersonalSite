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
	
	public getImgUrl():String{
		return "/assets/" + this.person?.summary?.name + this.person?.summary?.firstName + ".jpg";
	} 
}
