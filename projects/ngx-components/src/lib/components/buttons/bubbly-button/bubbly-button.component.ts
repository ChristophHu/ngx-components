import { Component } from '@angular/core';
import { AnimateDirective } from '../../../shared/directives/animate/animate.directive';

@Component({
  selector: 'bubbly-button',
  standalone: true,
  imports: [
    AnimateDirective
  ],
  templateUrl: './bubbly-button.component.html',
  styleUrl: './bubbly-button.component.sass'
})
export class BubblyButtonComponent {
  
}
