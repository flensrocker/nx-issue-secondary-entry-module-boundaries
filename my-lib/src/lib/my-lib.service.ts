import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyLibService {
  someMethod(): boolean {
    return true;
  }
}