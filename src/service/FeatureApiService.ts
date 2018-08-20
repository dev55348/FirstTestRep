import { Feature } from "./entities"

export default class FeatureApiService {

    public static getFeatures(callback: (items: Array<Feature>) => void) {

        var items: Array<Feature> = [
            { id: '1', name: 'testFeature1', imageUrl: '../.././public/images/cnn.png' },
            { id: '2', name: 'testFeature2', imageUrl: '../.././public/images/cointelegraph.png' },
            { id: '3', name: 'testFeature3', imageUrl: '../.././public/images/fc.png' },
            { id: '4', name: 'testFeature4', imageUrl: '../.././public/images/forbes.png' },
            { id: '5', name: 'testFeature5', imageUrl: '../.././public/images/hp.png' },
            { id: '6', name: 'testFeature6', imageUrl: '../.././public/images/nyt.png' },
            { id: '7', name: 'testFeature7', imageUrl: '../.././public/images/wired_logo.png' },
        ]

        setTimeout(() => {
            callback(items);
        }, 1000);
    }
}