import { Link } from './link';
import { IGitReadMe } from './IGitReadMe';

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

    constructor(gitReadMe: IGitReadMe) {
        this.name = gitReadMe.name;
        this.path = gitReadMe.path;
        this.sha = gitReadMe.sha;
        this.size = gitReadMe.size;
        this.url = gitReadMe.url;
        this.htmlUrl = gitReadMe.html_url;
        this.gitUrl = gitReadMe.git_url;
        this.downloadUrl = gitReadMe.download_url;
        this.type = gitReadMe.type;
        this.content = gitReadMe.content;
        this.encoding = gitReadMe.encoding;
        this.links = gitReadMe.links;
    }

    public static empty(): GitReadMe {
        return new GitReadMe({
            name: '',
            path: '',
            sha: '',
            size: 0,
            url: '',
            html_url: '',
            git_url: '',
            download_url: '',
            type: '',
            content: '',
            encoding: '',
            links: []}
        );
    }

    public get contentDecoded(): string {
        return atob(this.content);
    }

    public get contentIntroSection(): string {
        const sections = this.contentDecoded.split('##');
        return sections.find(section => section.startsWith(' Intro'));
    }
}
