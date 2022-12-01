import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  render() {
    return (
      <div>
        <unauthorized-component></unauthorized-component>
      </div>
    );
  }
}
