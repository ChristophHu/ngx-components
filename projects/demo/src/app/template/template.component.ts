import { Component } from '@angular/core';
import { BubblyButtonComponent, ThemeGroupComponent } from '../../../../ngx-components/src/public-api';

@Component({
  selector: 'app-template',
  imports: [
    BubblyButtonComponent,
    ThemeGroupComponent
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.sass'
})
export class TemplateComponent {
  
}
