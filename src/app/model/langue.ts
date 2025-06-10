import { Levels } from '../model/levels';

export class Langue {

	public name!: string;
	public level!: Levels;

	constructor(name: string, level:string) {
		this.name = name;
		this.level = Levels[level as keyof typeof Levels];
	 };

	public static fromJson(json :any): Langue{
		return new Langue(json.name, json.level);
	}
}