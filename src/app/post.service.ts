import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  listOfPosts: Post[] = [
    new Post(
      'Surf#1',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      'https://i.pinimg.com/originals/80/40/6f/80406fa5e517c39057103ebd6d77bebd.jpg',
      'author#1@gmail.com',
      new Date()
    ),
    new Post(
      'Surf#2',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      'https://surfwithamigas.com/wp-content/uploads/2017/09/holly-padang-tube.jpg',
      'author#2@gmail.com',
      new Date()
    ),
    new Post(
      'Surf#3',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      'https://i.pinimg.com/originals/6c/4d/cd/6c4dcdc1adcdeaa17c0fdb3f7c4ead92.jpg',
      'author#3@gmail.com',
      new Date()
    ),
  ];

  getPosts(): Post[] {
    return this.listOfPosts;
  }

  deletePost(index: number): void {
    this.listOfPosts.splice(index, 1);
  }

  addPost(post: Post): void {
    this.listOfPosts.push(post);
  }

  updatePost(index: number, post: Post) {
    this.listOfPosts[index] = post;
  }
}
