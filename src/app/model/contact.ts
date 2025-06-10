export class Contact {
	
	public name!: string;
	public firstname!: string;
	public function!: string;
	public enterprise!: string;
	public tel!: string;
	public mail!: string;
	public message!: string;
	
	sendMail(){
		console.log("Send mail to " + this.mail);
	}
}