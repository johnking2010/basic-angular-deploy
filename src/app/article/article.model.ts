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

    voteUp(): void {
        this.votes += 1;
    }

    voteDown(): void {
        this.votes -= 1;
    }

    /* 'domain()' is a UTILITY function that extracts
     the domain from a URL*/
     domain(): string {
        try {
            // e.g: http://foo.com/path/to/bar
            const domainAndPath: string = this.link.split('//')[1];
            // e.g. yields: foo.com/path/to/bar
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }
     }
}