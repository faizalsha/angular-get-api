import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let response = this.http.get("https://api.themoviedb.org/3/movie/popular?page=1&api_key=774ad349a80b6f18325fd18a9628352d");
    response.subscribe((data)=>this.book = data)
  }

}
