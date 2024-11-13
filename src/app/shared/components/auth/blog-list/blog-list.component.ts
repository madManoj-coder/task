import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/shared/services/service/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  public blogs:any[] = [];
  public isModalOpen = false;
  constructor(private blogService : BlogService, private router : Router) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(blogs =>{
       this.blogs = blogs;
    })
  }
  openBlogModel(){
    this.isModalOpen = true
  }

}
