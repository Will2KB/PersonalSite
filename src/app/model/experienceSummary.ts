import { ExperienceService } from "../services/ExperienceService";
import { Establishment } from "./establishment";
import { Experience } from "./experience";

export class ExperienceSummary {

	public establishment?: Establishment;
	public details?: Experience;

	developButton: string = "Plus";
	displayValue: string = "none";
	isShow: boolean = false;

	constructor(public id: number,
		public name: string,
		public dateBeginning: string,
		public dateEnding: string,
		public cityName: string,
		public countryName: string,
		public mission: string,
		public hasDescription: boolean,
		public hasSkills: boolean,
		public isFormation: boolean) {
		this.setDiplayVariables();
	}

	public static fromJson(json:any): ExperienceSummary{
		console.log(json);
		const exp = new ExperienceSummary(json.id, json.name, json.dateBeginning, json.dateEnding, json.cityName, json.countryName, json.mission,json.hasDescription, json.hasSkills, json.isFormation);
		exp.establishment = Establishment.fromJson(json.establishment);
		return exp;
	}

	setIsShow(): void {
		this.isShow = !this.isShow;
		this.setDiplayVariables();
	}

	setDiplayVariables(): void {
		if (this.isShow) {
			this.developButton = "Moins";
			this.displayValue = "initial";
		} else {
			this.developButton = "Plus";
			this.displayValue = "none";
		}
	}

	public hasMission(): boolean {
		return this.mission?.trim().length > 0 || false;
	}

	

}