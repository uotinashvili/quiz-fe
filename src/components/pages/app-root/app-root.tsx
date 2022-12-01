import { Component, h } from '@stencil/core';
import state from '../../../model/store';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="container">
              <div class="collapse navbar-collapse" id="mynavbar">
                <ul class="navbar-nav me-auto">
                <li class="nav-item">
                    <stencil-route-link url="/">
                      <a class="nav-link">HOME</a>
                    </stencil-route-link>
                  </li>
                  <li class="nav-item">
                    <stencil-route-link url="/auth">
                      <a class="nav-link">AUTH</a>
                    </stencil-route-link>
                  </li>
                  {state.user.token &&
                  <li class="nav-item">
                    <stencil-route-link url="/quiz">
                      <a class="nav-link">QUIZ</a>
                    </stencil-route-link>
                  </li>
                  }
                </ul>
                <div class="d-flex">
                  <h5 class="text-white">Logged User: {`${state && state.user && state.user.email}`}</h5>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/quiz" component="app-quiz" />
              <stencil-route url="/auth" component="app-auth" />
              <stencil-route url="/auth/?:code" component="app-auth" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
