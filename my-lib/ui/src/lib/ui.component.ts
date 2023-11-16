import { Component, inject } from '@angular/core';
import { MyLibService } from '@secondary-entry-module-boundaries/my-lib';

@Component({
  selector: 'my-lib-ui',
  template: '',
  standalone: true,
})
export class MyLibUiComponent {
  readonly #service = inject(MyLibService);
}
