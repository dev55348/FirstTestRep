import { FeaturedBlog } from "./entities"

export default class FeaturedBlogApiService {

    public static getFeaturedBlog(callback: (items: Array<FeaturedBlog>) => void) {

        var items: Array<FeaturedBlog> = [
            { id: '1', title: 'titleOfFeatureBlog1', author: 'author1', createdAt: new Date()},
            { id: '2', title: 'titleOfFeatureBlog2', author: 'author2', createdAt: new Date()},
            { id: '3', title: 'titleOfFeatureBlog3', author: 'author3', createdAt: new Date()}
        ]
        setTimeout(() => {
            callback(items);
        }, 1000);
    }
}