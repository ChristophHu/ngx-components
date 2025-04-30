import { Component } from '@angular/core';
import { BubblyButtonComponent, ThemeGroupComponent } from '../../../../ngx-components/src/public-api';
import { CenteredHeadlineComponent } from '../../../../ngx-components/src/lib/components/text/centered-headline/centered-headline.component';
import { ShimmerComponent } from '../../../../ngx-components/src/lib/components/effects/shimmer/shimmer.component';
import { LavaButtonComponent } from '../../../../ngx-components/src/lib/components/buttons/lava-button/lava-button.component';
import { GradientBorderButtonComponent } from '../../../../ngx-components/src/lib/components/buttons/gradient-border-button/gradient-border-button.component';
import { GradientFlowButtonComponent } from '../../../../ngx-components/src/lib/components/buttons/gradient-flow-button/gradient-flow-button.component';
import { DottedGridBgComponent } from '../../../../ngx-components/src/lib/components/backgrounds/dotted-grid-bg/dotted-grid-bg.component';
import { ShinyButtonComponent } from '../../../../ngx-components/src/lib/components/buttons/shiny-button/shiny-button.component';

@Component({
  selector: 'app-template',
  imports: [
    // backgrounds
    DottedGridBgComponent,
    
    // buttons
    BubblyButtonComponent,
    GradientBorderButtonComponent,
    GradientFlowButtonComponent,
    LavaButtonComponent,
    ShinyButtonComponent,

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
