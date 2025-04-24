import { Component } from '@angular/core';
import { BubblyButtonComponent } from '../../../../ngx-components/src/public-api';

@Component({
  selector: 'app-template',
  imports: [
    BubblyButtonComponent
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.sass'
})
export class TemplateComponent {
  
}
