export class Nationality {
	public name!: string;
	
	constructor(name: string){
		this.name = name;
	};
	
	public static fromJson(json : any): Nationality{
		return new Nationality(json.name);
	}
}