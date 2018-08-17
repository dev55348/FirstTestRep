import { Feature } from "./entities"

export default class FeatureApiService {

    public static getFeatures(callback: (items: Array<Feature>) => void) {

        var items: Array<Feature> = [
            { id: '1', name: 'test', imageUrl: 'https://cdn4.iconfinder.com/data/icons/bettericons/354/facebook-circle-128.png' },
            { id: '2', name: 'test2', imageUrl: 'https://cdn4.iconfinder.com/data/icons/bettericons/354/facebook-circle-128.png' },
            { id: '3', name: 'test3', imageUrl: 'https://cdn4.iconfinder.com/data/icons/bettericons/354/facebook-circle-128.png' },
        ]

        setTimeout(() => {
            callback(items);
        }, 1000);

    }

}