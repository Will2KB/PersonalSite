import { Address } from "./address";

export class PersonSummary {
	public firstName!: string;
	public name!: string;
	public title!: string;
	public mail!: string;
	public tel!: string;
	public address!: Address;
	public gitHubLink!: string;
	public linkedInLink!: string;

	constructor() {
		this.address = new Address();
	}

	public static fromJson(json: any): PersonSummary {
		const ps = Object.assign(new PersonSummary(), json);
		ps.address = Address.fromJson(json.address);
		return ps;
	}

}