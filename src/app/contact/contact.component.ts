import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Contact } from '../model/contact';

@Component({
	selector: 'app-contact',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

	contactForm!: FormGroup;
	contactPreview$!: Observable<Contact>;
	private telRegex: RegExp = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
	private mailRegex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

	constructor(private formBuilder: FormBuilder) {

	}

	ngOnInit(): void {
		this.contactForm = this.formBuilder.group({
			name: [null, Validators.required],
			firstname: [null, Validators.required],
			function: [null],
			enterprise: [null],
			tel: [null, [Validators.required, Validators.pattern(this.telRegex)]],
			mail: [null, [Validators.required, Validators.pattern(this.mailRegex)]],
			message: [null, Validators.required]
		})

		this.contactPreview$ = this.contactForm.valueChanges.pipe(
			map(formValue => ({ ...formValue })),
			tap(formValue => this.logger(formValue.name)));
	}

	onSubmit() {
		//this.contactPreview$.
	}

	logger(text: string): string {
		return "Coucou " + text;
	}
}
