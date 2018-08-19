import { Article } from "./entities"

export default class ArticleApiService {

    public static getArticles(callback: (items: Array<Article>) => void) {

        var items: Array<Article> = [
            { id: '1', name: 'testArticles1'},
            { id: '2', name: 'testArticles2'},
            { id: '3', name: 'testArticles3'},
        ]

        setTimeout(() => {
            callback(items);
        }, 1000);

    }

}