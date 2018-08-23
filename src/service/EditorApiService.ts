import { Editor } from "./entities";

export default class EditorApiService {

    public static getEditors(id: string, callback: (items: Array<Editor>) => void) {

        var editors: Array<Editor> = [
            { id: "1", firstName: "EditorFirstName1", lastName: "editorLastName1", email: "editorEmail1", countOfPosts: 1, imgUrl: "imgUrl1" },
            { id: "2", firstName: "EditorFirstName2", lastName: "editorLastName2", email: "editorEmail2", countOfPosts: 2, imgUrl: "imgUrl2" },
            { id: "3", firstName: "EditorFirstName3", lastName: "editorLastName3", email: "editorEmail3", countOfPosts: 3, imgUrl: "imgUrl3" }
        ]

        var items: Array<Editor> = [];
        debugger;
        if(id)
        {
            items.push(editors.find(x => x.id === id));
            callback(items)
        } else {
            items = editors;
            callback(items);
        }

    }

}