import { IncomeData } from "./incomeData";
interface LoaderInterface {
    getRespDataFromURL(method: string, endpoint: string, callback: (data: IncomeData) => void): void;
}

export default LoaderInterface;
