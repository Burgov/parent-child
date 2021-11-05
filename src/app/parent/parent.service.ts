import { Injectable } from '@angular/core';

@Injectable()
export class ParentService {

  constructor() { }

  register(token: string) {
    console.log('Registering: ' + token);
  }

  unregister(token: string) {
    console.log('Unregistering: ' + token);
  }
}
