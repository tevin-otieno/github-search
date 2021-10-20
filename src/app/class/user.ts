export class User {
    constructor(
        public login:string,
        public html_url:string,
        public repos_url:string,
        public name:string,
        public public_repos:number,
        public followers:number,
        public following:number,
        public bio:string,
        public avatar_url:string,
        public created_at:Date
    ){}
}
