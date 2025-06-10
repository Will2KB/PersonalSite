export class City {
	public name!: string;
	public zipCode!: number;
	public countryName!: string;

	constructor() { };
	
	public static fromJson(json:any):City{
		return Object.assign(new City(), json);
	}
}