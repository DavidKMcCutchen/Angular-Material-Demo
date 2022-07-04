import { NotificationsService } from '@styling-app/core-data';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeaturesAuthFacade } from '@styling-app/core-state';
import { validationMessages, ErrorKeysPipe } from 'libs/pipes/src/lib/error-keys.pipe';


@Component({
  selector: 'styling-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isPasswordField = true;
  messages = validationMessages;


  get passwordIcon(): string {
    return this.isPasswordField ? 'visibility' : 'visibility_off';
  }

  get passwordFieldType(): string {
    return this.isPasswordField ? 'password' : 'text';
  }

  constructor(
    private formBuild: FormBuilder,
    private authFacade: FeaturesAuthFacade,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  loginAttempt() {
    if (!this.form.valid) return;
    this.authFacade.loginRequest(this.form.value);
  }

  private initForm() {
    this.form = this.formBuild.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/g
          ),
        ],
      ],
    });
  }
}
