import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

import { IonLoaderService } from '../../../services/utils/ion-loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  errorMessages = {
    email: [
      { type: 'required', message: 'Email is required.' },

      {
        type: 'minlength',
        message: 'Email length must be longer or equal than 6 characters.',
      },
      {
        type: 'maxlength',
        message: 'Email length must be lower or equal to 50 characters.',
      },

      { type: 'pattern', message: 'Please enter a valid email address.' },
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      {
        type: 'minlength',
        message: 'Password length must be longer or equal than 6 characters.',
      },

      {
        type: 'maxlength',
        message: 'Password length must be lower or equal to 30 characters.',
      },
      {
        type: 'pattern',
        message:
          'Password must contain numbers, uppercase and lowercase characters.',
      },
    ],
  };

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private ionLoaderService: IonLoaderService) {
    
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-Z0-9_+-+@[a-zA-Z0-9-1+. [a-zA-Z0-9-.]+$'),
        ])
      ),

      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(25),
        ])
      ),
    });
  }

  ngOnInit() {}

  loginIn(){
    this.ionLoaderService.autoLoader()
  }
}
