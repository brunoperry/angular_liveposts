import { PostService } from './../post.service';
import { Post } from './../post.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post?: Post;
  @Input() index: number = 0;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    console.log(this.index);
  }

  onDelete() {
    this.postService.deletePost(this.index);
  }
}
