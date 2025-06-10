export class Establishment {
	public name!: string;
	public cityName!: string;
	public contryName!: string;

	constructor() { };
	
	public static fromJson(json:any):Establishment{
		return Object.assign(new Establishment(), json);
	}
}