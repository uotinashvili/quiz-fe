export default class ZoomService {
    API_HOST = process.env.API_HOST;
    
    constructor() {}

    async auth(code: string): Promise<any> {
        try {
            const response = await fetch(`${this.API_HOST}/auth/${code}`);
            
            const json = await response.json();

            return json;
        } catch (err) {
            return err.message;
        }
    }

    async getDeepLink(token: string) {
        try {
            const response = await fetch(`${this.API_HOST}/auth/zoom/deeplink/${token}`);
            const json = await response.json();

            return json;
        } catch (err) {
            console.error(err);
        }
    }

    async getInstallurl() {
        try {
            const response = await fetch(`${this.API_HOST}/auth/zoom/installurl`);
            const json = await response.json();

            return json;
        } catch (err) {
            console.error(err);
        }
    }
}