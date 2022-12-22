type Data = {
    [index: string]: string;
};

interface LoaderInterface {
    getRespDataFromURL(method: string, endpoint: string, callback: (data: Data) => void): void;
}

export default LoaderInterface;
