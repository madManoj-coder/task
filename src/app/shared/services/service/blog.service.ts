import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private ApiUrl = 'http://localhost:3000/blogs';
  constructor(private _http : HttpClient) { }
  public getBlogs() : Observable<any>{
    return this._http.get(this.ApiUrl)
  }
  public getBlog(id:number): Observable<any>{
    return this._http.get(`${this.ApiUrl}/${id}`)
  }
  public addBlog(blog:any): Observable<any>{
    return this._http.post(this.ApiUrl, blog)
  }
}
