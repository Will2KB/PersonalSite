export class Contact {
	
	public name!: string;
	public firstname!: string;
	public function!: string;
	public enterprise!: string;
	public tel!: string;
	public mailFrom!: string;
	public body!: string;
	public subject!:string;
	
	sendMail(){
		console.log("Send mail to " + this.mailFrom);
	}
}