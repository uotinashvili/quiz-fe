import { Component, h } from '@stencil/core';

@Component({
  tag: 'layout-component',
  styleUrl: 'layout.css'
})
export class Layout {
  render() {
    return (
       <div class="container mt-3">
         <slot />
     </div>
    );
  }
}



