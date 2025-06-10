import { City } from "./city";

export class Address {

	public streetNumber!: number;
	public street!: string;
	public complement!: string;
	public city!: City;

	constructor() {
		this.city = new City();
	};

	public static fromJson(json: any): Address {
		const address = Object.assign(new Address(), json);
		address.city = City.fromJson(json.city);
		return address;
	}

	public show(): string {
		return this.street + " " + this.streetNumber + ", " + this.city.countryName.charAt(0).toUpperCase() + "-" + this.city.zipCode + " " + this.city.name
	}
}