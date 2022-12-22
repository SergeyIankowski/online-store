import { LoaderInterface } from '../../interfaces/index';

type Data = {
    [index: string]: string;
};

class Loader implements LoaderInterface {
    baseLink: string;
    constructor(baseLink: string) {
        this.baseLink = baseLink;
    }
    private makeUrl(endpoint: string): string {
        return `${this.baseLink}${endpoint}`;
    }
    private errorHandler(error: unknown): void {
        console.error(error);
    }
    async getRespDataFromURL(method: string, endpoint: string, callback: (data: Data) => void): Promise<void> {
        try {
            const dataResp = await fetch(this.makeUrl(endpoint), { method });
            const data = await dataResp.json();
            callback(data);
        } catch (e) {
            this.errorHandler(e);
        }
    }
}

export default Loader;
