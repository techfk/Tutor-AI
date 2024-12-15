import { Observable } from '@nativescript/core';

export class User extends Observable {
  id: string;
  name: string;
  email: string;
  userType: 'school' | 'college' | 'competitive';
  subjects: string[];

  constructor(data: Partial<User>) {
    super();
    Object.assign(this, data);
  }
}