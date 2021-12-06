export class Post {
  constructor(
    public title: string,
    public description: string,
    public imgSrc: string,
    public author: string,
    public dateCreated: Date
  ) {}
}
