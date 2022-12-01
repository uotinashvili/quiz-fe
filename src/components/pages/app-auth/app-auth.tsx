import { Component, h } from '@stencil/core';
import state from '../../../model/store';
import ZoomService from '../../../services/zoom.service';
import * as utils from '../../../utils/utils';

@Component({
  tag: 'app-auth',
  styleUrl: 'app-auth.css',
})
export class AuthRoot {
  clientId = process.env.CLIENT_ID;
  redirectUrl = process.env.REDIRECT_URL;

  zoomService = new ZoomService();

  async componentWillLoad() {
    let code = utils.getQueryParam('code');

    if (code) {
      const response = await this.zoomService.auth(code);
      if (response.userId) {
        state.user = {
          email: response?.email,
          token: response?.token,
        };
      } else {
        console.error('ERROR-', response.message);
      }
    }
  }

  async installApp() {
    const response = await this.zoomService.getInstallurl();
    window.open(response.url, '_blank');
  }

  async openApp() {
    if (state.user.token) {
      const response = await this.zoomService.getDeepLink(state.user.token);
      window.open(response.deeplink, '_blank');
    }
  }

  render() {
    return (
      <div class="container mt-3">
        {!state.user.token && (
          <div>
            <a class="btn btn-outline-primary" href={`https://zoom.us/oauth/authorize?response_type=code&client_id=${this.clientId}&redirect_uri=${this.redirectUrl}`}>
              Login with zoom account
            </a>
          </div>
        )}

        {state.user.token && (
          <div class="mt-3">
            <div>
              <stencil-route-link url="/quiz">
                <a class="btn btn-primary">Start Quiz</a>
              </stencil-route-link>
              <div class="mt-3">
                <button class="btn btn-outline-primary" onClick={this.openApp.bind(this)}>
                  Open app in zoom
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
