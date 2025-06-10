import { Langue } from './langue';
import { PersonSummary } from './personSummary';
import { Hobby } from './hobby';
import { Nationality } from './nationality';
import { ExperienceSummary } from './experienceSummary';

export class Person {

	public summary!: PersonSummary;
	public subtitle!: string;
	public personalValues!: string;
	public keySkills!:string[];
	public age!: number;
	public nationalities!: Nationality[];
	public spokenLanguages!: Langue[];
	public experiences!: ExperienceSummary[];
	public hobbies!: Hobby[];

	constructor() {
		this.summary = new PersonSummary();
	};

	public static fromJson(json: any): Person {
		const pers = Object.assign(new Person(), json);
		pers.summary = PersonSummary.fromJson(json.summary);
		pers.keySkills = json.keySkills ?? [];
		pers.nationalities = (json.nationalities ?? []).map((jsonNationality: any) => Nationality.fromJson(jsonNationality));
		pers.spokenLanguages = (json.spokenLanguages ?? []).map((jsonSpokenLanguage: any) => Langue.fromJson(jsonSpokenLanguage));
		pers.experiences = (json.experiences ?? []).map((jsonExperience: any) => ExperienceSummary.fromJson(jsonExperience));
		pers.hobbies = (json.hobbies ?? []).map((jsonHobby: any) => Hobby.fromJson(jsonHobby));
		return pers;
	}
	
	public hasLanguage(): boolean {
		return this.spokenLanguages.length > 0;
	}

	public getProExperiences(): ExperienceSummary[] {
		return this.experiences.filter(exp => !exp.isFormation);
	}

	public hasProExperiences(): boolean {
		return this.getProExperiences().length > 0;
	}

	public getFormations(): ExperienceSummary[] {
		return this.experiences.filter(exp => exp.isFormation);
	}

	public hasFormations(): boolean {
		return this.getFormations().length > 0;
	}

	public hasHobbies(): boolean {
		return this.hobbies.length > 0;
	}

	public hasKeyCompetences(): boolean {
		return this.keySkills.length > 0;
	}

	public showNationalities(): string {
		return this.nationalities?.length ? this.nationalities.map(n => n.name).join(', ') : 'Non spécifié';
	}
}