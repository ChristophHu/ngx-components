import { Component } from '@angular/core';
import { BubblyButtonComponent, ThemeGroupComponent } from '../../../../ngx-components/src/public-api';
import { CenteredHeadlineComponent } from '../../../../ngx-components/src/lib/components/text/centered-headline/centered-headline.component';
import { ShimmerComponent } from '../../../../ngx-components/src/lib/components/effects/shimmer/shimmer.component';
import { LavaButtonComponent } from '../../../../ngx-components/src/lib/components/buttons/lava-button/lava-button.component';

@Component({
  selector: 'app-template',
  imports: [
    // buttons
    BubblyButtonComponent,
    LavaButtonComponent,

    // themes
    ThemeGroupComponent,

    // text
    CenteredHeadlineComponent,

    // effects
    ShimmerComponent
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.sass'
})
export class TemplateComponent {
  
}
