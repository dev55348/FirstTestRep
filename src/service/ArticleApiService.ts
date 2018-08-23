import { Article } from "./entities"

export default class ArticleApiService {

    public static getArticles(id: string,callback: (items: Array<Article>) => void) {

        var articles: Array<Article> = [
            { id: '1', title: 'Article title1', body: 'Article body1', subTitle: 'Article subTitle1'},
            { id: '2', title: 'Article title2', body: 'Article body2', subTitle: 'Article subTitle2'},
            { id: '3', title: 'Article title3', body: 'Article body3', subTitle: 'Article subTitle3'},
        ]

        var items: Array<Article> = [];
        if(id)
        {
            items.push(articles.find(x => x.id === id));
            callback(items)
        } else {
            items = articles;
            callback(items);
        }
    }

}