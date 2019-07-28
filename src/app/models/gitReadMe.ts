import { Link } from './link';

export class GitReadMe {
    public name: string;
    public path: string;
    public sha: string;
    public size: number;
    public url: string;
    public htmlUrl: string;
    public gitUrl: string;
    public downloadUrl: string;
    public type: string;
    public content: string;
    public encoding: string;
    public links: Link[];

    // tslint:disable-next-line: variable-name
    constructor(name: string, path: string, sha: string, size: number, url: string, html_url: string, git_url: string,
                // tslint:disable-next-line: variable-name
                download_url: string, type: string, content: string, encoding: string, links: Link[]) {
        this.name = name;
        this.path = path;
        this.sha = sha;
        this.size = size;
        this.url = url;
        this.htmlUrl = html_url;
        this.gitUrl = git_url;
        this.downloadUrl = download_url;
        this.type = type;
        this.content = content;
        this.encoding = encoding;
        this.links = links;
    }

    public static empty(): GitReadMe {
        return new GitReadMe('', '', '', 0, '', '', '', '', '', '', '', []);
    }

    public get contentSections(): string[] {
        return this.content.split('#');
    }
}
