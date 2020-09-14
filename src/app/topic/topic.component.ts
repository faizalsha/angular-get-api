import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  Alltopic:any;
  constructor(private service: TopicService) { }

  ngOnInit(): void {
    this.refreshList()
  }
  delete(topic:any){
    console.log("delete: " + stringify(topic));
    if(confirm('Are you sure to delete??')){
      this.service.deleteTopicById(topic)
      this.refreshList();
    }
    
  }
  refreshList(){
    this.service.getTopic().subscribe((data:any)=>{
      this.Alltopic = data
    })
  }
}
