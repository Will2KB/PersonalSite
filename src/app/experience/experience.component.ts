import { Component, Input } from '@angular/core';
import { Experience } from '../model/experience';
import { ExperienceSummary } from '../model/experienceSummary';
import { NgStyle, CommonModule } from '@angular/common';
import { SkillType } from '../model/skillType';
import { ExperienceService } from '../services/ExperienceService';

@Component({
	selector: 'app-experience',
	standalone: true,
	imports: [NgStyle, CommonModule],
	templateUrl: './experience.component.html',
	styleUrl: './experience.component.css'
})
export class ExperienceComponent {
	@Input() experience!: ExperienceSummary;
	SkillType = SkillType;

	constructor(private experienceService: ExperienceService) {
	}

	askMore(): void {
		this.experience.setIsShow();
		
		if (this.experience.isShow && !this.experience.details) {
			this.experienceService.getExperienceDetails(this.experience.id).subscribe(exp => {
				this.experience.details = Experience.fromJson(exp);
			});
		}
	}
}
