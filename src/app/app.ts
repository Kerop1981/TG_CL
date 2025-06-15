import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateChannel } from './components/create-channel/create-channel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CreateChannel],
  template: `<app-create-channel></app-create-channel>`

})
export class App {
  protected title = 'clon-TG';
}
