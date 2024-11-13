import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BlogService } from 'src/app/shared/services/service/blog.service';

@Component({
  selector: 'app-blog-modal',
  templateUrl: './blog-modal.component.html',
  styleUrls: ['./blog-modal.component.scss']
})
export class BlogModalComponent implements OnInit {
  @Output() close = new EventEmitter<void>()
  blog = { title: '', description: '', date: new Date().toISOString() }
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.blogService.addBlog(this.blog).subscribe(() => {
      this.close.emit()
      console.log(this.blog);

    })
  }
}
