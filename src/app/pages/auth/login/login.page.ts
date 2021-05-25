import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { IonLoaderService } from '../../../services/utils/ion-loader.service';

const STORAGE_KEY = 'user_credentials';
const HAS_LOGGED_IN = 'hasLoggedIn';

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

  constructor(
    private formBuilder: FormBuilder,
    private ionLoaderService: IonLoaderService,
    private storage: Storage,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
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
  async ngOnInit() {
    let hasLoggedIn = await this.storage.get(HAS_LOGGED_IN);
  }

  async loginIn() {
    let userData = this.loginForm.value;

    let userCredentials = {
      email: userData.email,
      password: userData.password,
    };
    this.setUserCredentials(userCredentials);
    await this.storage.set(HAS_LOGGED_IN, true);

    this.router.navigate(['/movies'])
    this.ionLoaderService.autoLoader();
  }

  logout() {
    this.storage.remove(HAS_LOGGED_IN);
    this.storage.remove(STORAGE_KEY);
  }

  setUserCredentials(userCredentials) {
    this.storage.set(STORAGE_KEY, userCredentials);
  }

  getUserCredentials() {
    return this.storage.get(STORAGE_KEY).then((value) => {
      return value;
    });
  }

  hasLoggedIn() {
    return this.storage.get(HAS_LOGGED_IN);
  }
}
