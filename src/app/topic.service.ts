import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  post_url = "http://localhost:8080/topics"
  del_url = "http://localhost:8080/topics/delete"
  constructor(private http: HttpClient) { }
  getTopic() {
    return this.http.get("http://localhost:8080/topics");
  }
  addTopic(topic: any) {
    this.http.post(this.post_url, topic).subscribe(
      function (response) { console.log("Success Response" + response) },
      function (error) { console.log("Error happened" + stringify(error)) },
      function () { console.log("the subscription is completed") }
    )
  }
  deleteTopicById(id: string) {   
    console.log(this.del_url + '/' + id);
     
    this.http.delete(this.del_url + '/' + id).subscribe(
      function (response) { console.log("Success Response" + response) },
      function (error) { console.log("Error happened" + stringify(error)) },
      function () { console.log("the subscription is completed") }
    )
    console.log(id);
  }
}
