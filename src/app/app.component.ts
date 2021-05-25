import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage-angular';

const STORAGE_KEY = 'user_credentials';
const HAS_LOGGED_IN = 'hasLoggedIn';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private storage: Storage, private router: Router) {}

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();

    const storageKey = await this.storage.get(STORAGE_KEY);

    if (storageKey != null && storageKey.email != null) {
      this.router.navigate(['/movies'])
    }
  }
}
