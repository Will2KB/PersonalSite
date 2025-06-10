import { Person } from './person';
import { Experience } from './experience';
import { CenterInterest } from './center-interest';

export class CV {

	public person!: Person;
	public subTitle!: string;
	public values!: string[];
	public keyCompetences!: string[];
	public proExperiences!: Experience[];
	public formations!: Experience[];
	public interestCenters!: CenterInterest[];

	constructor() { };

	hasProExperiences(): boolean {
		return this.proExperiences.length > 0;
	}

	hasFormations(): boolean {
		return this.formations.length > 0;
	}

	hasInterestCenter(): boolean {
		return this.interestCenters.length > 0;
	}

	hasKeyCompetences(): boolean {
		return this.keyCompetences.length > 0;
	}

	showValues(): string {
		let val!: string;
		val = "";

		for (const value of this.values) {
			val += value + ", ";//A supprimer à la fin de la boucle!!!!
		}

		return val;
	}

}