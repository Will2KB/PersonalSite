import { Component, Input } from '@angular/core';
import { Hobby } from '../model/hobby';

@Component({
  selector: 'app-interest-centers',
  standalone: true,
  imports: [],
  templateUrl: './interest-centers.component.html',
  styleUrl: './interest-centers.component.css'
})
export class InterestCentersComponent {
	@Input() hobbies!: Hobby[];
}
