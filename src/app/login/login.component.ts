import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
	selector: 'product-review-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	constructor(private fb: FormBuilder) {}

	logInForm = this.fb.group({
		username: ['', Validators.required],
		password: ['', Validators.required],
	});

	logIn = () => {
		console.log('loged in!');
	};
}
