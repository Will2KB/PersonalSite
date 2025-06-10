export class HobbyDescription {
	public description!: string;

	constructor(desc:string) { 
		this.description = desc;
	};
	
	public static fromJson(json:any):HobbyDescription{
		return new HobbyDescription(json.description);
	}
}