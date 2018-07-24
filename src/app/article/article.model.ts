// good practice in Angular: try to ISOLATE the data structures used from COMPONENT code...
// Here, we create a data structure representing a SINGLE article
// A plain class, the MODEL in MVC pattern/architecture...

export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
        // 'votes?' is optional + defaults to zero...
    }
}