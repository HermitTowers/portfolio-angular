import { Link } from './link';

export class GitReadMe {
    public name: string;
    public path: string;
    public sha: string;
    public size: number;
    public url: string;
    public html_url: string;
    public git_url: string;
    public download_url: string;
    public type: string;
    public content: string;
    public encoding: string;
    public links: Link[];

    constructor(name: string, path: string, sha: string, size: number, url: string, html_url: string, git_url: string,
                download_url: string, type: string, content: string, encoding: string, links: Link[]) {
        this.name = name;
        this.path = path;
        this.sha = sha;
        this.size = size;
        this.url = url;
        this.html_url = html_url;
        this.git_url = git_url;
        this.download_url = download_url;
        this.type = type;
        this.content = content;
        this.encoding = encoding;
        this.links = links;
    }

    public static empty(): GitReadMe {
        return new GitReadMe('', '', '', 0, '', '', '', '', '', '', '', []);
    }
}
