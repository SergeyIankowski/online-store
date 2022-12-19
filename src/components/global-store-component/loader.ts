import {LoaderInterface} from '../../../interfaces/index';

type Data = {
  [index: string]: string;
}

class Loader implements LoaderInterface {
  baseLink: string;
  constructor(baseLink: string) {
    this.baseLink = baseLink;
  }
  private makeUrl(endpoint:string): string {
    const url = `${this.baseLink}${endpoint}`;
    return url;
  }
  private errorHandler(res:Response): Response | never {
    if(!res.ok) {
      throw new Error(res.statusText)
    }
    return res;
  }
  getRespDataFromURL(method: string, endpoint:string, callback:(data: Data) => void): void {
    fetch(this.makeUrl(endpoint), {method})
    .then(this.errorHandler)
    .then((res) => res.json())
    .then((data: Data) => callback(data))
  }

}

export default Loader;