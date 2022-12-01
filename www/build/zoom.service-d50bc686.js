class ZoomService {
  constructor() {
    this.API_HOST = "http://localhost:3000";
  }
  async auth(code) {
    try {
      console.log('code-', code);
      const response = await fetch(`${this.API_HOST}/auth/${code}`);
      const json = await response.json();
      console.log(json);
      return {
        user: json.zoomUserData,
        deeplink: json.deeplink.deeplink
      };
    }
    catch (err) {
      console.log(err);
    }
  }
  async getInstallurl() {
    try {
      console.log('install...');
      const response = await fetch(`${this.API_HOST}/auth/zoominstallurl`);
      console.log('install response-', response);
      const json = await response.json();
      console.log('url-', json);
      return json;
    }
    catch (err) {
      console.log(err);
    }
  }
}

export { ZoomService as Z };
