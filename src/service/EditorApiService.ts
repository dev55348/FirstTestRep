import { Editor } from "./entities";

export default class EditorApiService {

    public static getEditors(callback: (items: Array<Editor>) => void) {

        var items: Array<Editor> = [
            { id: "1", userName: "userNameFromEditor1", countOfPoints: "1", imageUrl: "url1" },
            { id: "2", userName: "userNameFromEditor2", countOfPoints: "2", imageUrl: "url2" },
            { id: "3", userName: "userNameFromEditor3", countOfPoints: "3", imageUrl: "url3" }
        ]

        setTimeout(() => {
            callback(items);
        }, 1000);

    }

}