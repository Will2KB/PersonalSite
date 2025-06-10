import { HobbyDescription } from "./hobbyDescription";

export class Hobby {
	public name!: string;
	public descriptions!: HobbyDescription[];

	constructor() { };
	
	public static fromJson(json :any):Hobby{
		const hobby = new Hobby();
		hobby.name = json.name;
		hobby.descriptions = (json.descriptions ?? []).map((desc:any) => HobbyDescription.fromJson(desc));
		
		return hobby;
	}
}