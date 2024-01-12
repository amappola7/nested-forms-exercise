import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { UniqueEmailValidator } from 'src/app/utils/validators/email-validator';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {
  signUpForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private uniqueEmailValidator: UniqueEmailValidator
  ) {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required, Validators.min(4)]],
      firstName: [
        '',
        [
          Validators.required,
          Validators.max(80),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      secondName: ['', [Validators.max(80), Validators.pattern('[a-zA-Z ]*')]],
      surname: [
        '',
        [
          Validators.required,
          Validators.max(80),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      secondSurname: [
        '',
        [Validators.max(80), Validators.pattern('[a-zA-Z ]*')],
      ],
      email: [
        '',
        [Validators.required, Validators.email],
        (control: FormControl) => this.uniqueEmailValidator.validate(control)
        ,
        {
          updateOn: 'blur',
        }
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.min(6),
          Validators.pattern('^(?=.*[a-zA-Z])(?=.*d)(?=.*[#$%&_-]).*$'),
        ],
      ],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', [Validators.required]],
        zip: ['', [Validators.pattern(/^\d{5}$/)]],
      }),
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log('Successfully registered', this.signUpForm.value);
      this.signUpForm.reset();
    } else {
      console.log('Invalid form', this.signUpForm.value);
      this.signUpForm.markAllAsTouched();
    }
  }
}
