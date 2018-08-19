import { Feature } from "./entities"

export default class FeatureApiService {

    public static getFeatures(callback: (items: Array<Feature>) => void) {

        var items: Array<Feature> = [
            { id: '1', name: 'testFeature1', imageUrl: 'https://cdn4.iconfinder.com/data/icons/bettericons/354/facebook-circle-128.png' },
            { id: '2', name: 'testFeature2', imageUrl: 'https://cdn4.iconfinder.com/data/icons/bettericons/354/facebook-circle-128.png' },
            { id: '3', name: 'testFeature3', imageUrl: 'https://cdn4.iconfinder.com/data/icons/bettericons/354/facebook-circle-128.png' },
        ]

        setTimeout(() => {
            callback(items);
        }, 1000);

    }

}