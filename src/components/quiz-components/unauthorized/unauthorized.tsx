import { Component, h } from '@stencil/core';

@Component({
  tag: 'unauthorized-component',
})
export class UnauthorizedComponent {
  render() {
    return (
      <div class="container mt-3">
        <p>Welcome to the Quiz page!</p>
        <p>To star the quiz, at first you have to authorize!</p>
        <stencil-route-link url="/auth">
          <button class="btn btn-primary">Start authorize</button>
        </stencil-route-link>
      </div>
    );
  }
}
