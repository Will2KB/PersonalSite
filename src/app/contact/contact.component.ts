import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { RecaptchaV3Module, ReCaptchaV3Service } from 'ng-recaptcha';
import { Contact } from '../model/contact';
import { MailService } from '../services/MailService';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-contact',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, RecaptchaV3Module],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

	contactForm!: FormGroup;
	contactPreview$!: Observable<Contact>;
	private telRegex: RegExp = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
	private mailRegex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	isSubmitting = false;

	constructor(private mailService: MailService, private formBuilder: FormBuilder, private recaptchaV3Service: ReCaptchaV3Service) {

	}

	ngOnInit(): void {
		this.contactForm = this.formBuilder.group({
			name: [null, Validators.required],
			firstname: [null, Validators.required],
			function: [null],
			enterprise: [null],
			tel: [null, [Validators.required, Validators.pattern(this.telRegex)]],
			mailFrom: [null, [Validators.required, Validators.pattern(this.mailRegex)]],
			body: [null, Validators.required]
		})

		this.contactPreview$ = this.contactForm.valueChanges.pipe(
			map(formValue => ({ ...formValue })),
			tap(formValue => this.logger(formValue.name)));
	}

	onSubmit() {
		if (this.contactForm.invalid || this.isSubmitting) {
			return;
		}
		this.setDisableForm(true);

		this.recaptchaV3Service.execute('contact').subscribe({
			next: (token: string) => {
				const payload = {
					mailFrom: this.contactForm.value.mailFrom,
					body: this.contactForm.value.body + "\n\n" +
						this.contactForm.value.name + " " + this.contactForm.value.firstname + "\n" +
						this.contactForm.value.function + ", " + this.contactForm.value.enterprise + "\n" +
						this.contactForm.value.tel + "\n" +
						this.contactForm.value.mailFrom,
					subject: "Mail contact de " + this.contactForm.value.name + " " + this.contactForm.value.firstname,
					reCaptchaToken: token
				};

				this.mailService.sendMail(payload).subscribe({
					next: (response) => {
						console.log('Formulaire envoyé avec succès', response);
						//this.isSubmitting = false;
					},
					error: (err) => {
						console.error('Erreur lors de l’envoi', err);
						this.setDisableForm(false);
					}
				});
			},
			error: (err) => {
				console.error('Erreur reCAPTCHA v3 :', err);
				this.setDisableForm(false);
			}
		});
	}

	setDisableForm(disable: boolean) {
		this.isSubmitting = disable;
		if (disable) {
			this.contactForm.disable();
		} else {
			this.contactForm.enable();
		}
	}

	logger(text: string): string {
		return "Coucou " + text;
	}
}
