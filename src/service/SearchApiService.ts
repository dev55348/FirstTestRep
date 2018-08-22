export default class SearchApiService {

    public static getSearchResults(queryString: string,callback: (items: Array<string>) => void) {

        var items: Array<string> = [];
        if(queryString === "")
        {
            callback(items);
        } else {
            items = [
                "Fifa World Cup",
                "World Cup",
                "Fifa World Cup",
                "The reason why France is the Winner of the 20018 World Cup",
                "The winner of the World Cup takes home $38 million in prize money",
                "The 2018 FIFA World Cup's Biggest Winners and losers So Far"
            ]
    
            callback(items);
        }

        
    }

}