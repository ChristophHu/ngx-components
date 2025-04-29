import { Component } from '@angular/core';

@Component({
  selector: 'shimmer-effect',
  imports: [],
  template: `
    <div class="shimmer"></div>
  `,
  styles: `
    div
      height: 20px
      width: 200px
      border-radius: 10px
    
    .shimmer
      background-image: linear-gradient(90deg, var(--light) 0%, var(--light) 40%, var(--lighter) 50%, var(--lighter) 55%, var(--light) 65%, var(--light) 100%)
      background-size: 400%
      animation: shimmer 1500ms infinite
    
    @keyframes shimmer
      from  
        background-position: 100% 100%
      to
        background-position: 0 0
  `
})
export class ShimmerComponent {

}
