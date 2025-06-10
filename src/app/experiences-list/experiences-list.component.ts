import { Component, Input } from '@angular/core';
import { ExperienceSummary } from '../model/experienceSummary';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-experiences-list',
  standalone: true,
  imports: [ExperienceComponent],
  templateUrl: './experiences-list.component.html',
  styleUrl: './experiences-list.component.css'
})
export class ExperiencesListComponent {
	@Input() experiences!: ExperienceSummary[];
	@Input() title!: string;

}
