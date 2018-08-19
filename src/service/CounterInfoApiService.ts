import { CounterInfo } from "./entities"

export default class CounterInfoApiService {

    public static getCounterInfo(callback: (items: Array<CounterInfo>) => void) {

        var items: Array<CounterInfo> = [
            {name: 'Count1', count: 1},
            {name: 'Count2', count: 2},
            {name: 'Count3', count: 3},
        ]

        setTimeout(() => {
            callback(items);
        }, 1000);

    }

}