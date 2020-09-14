import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent implements OnInit {
  checkoutForm: any;
  constructor(
    private formBuilder: FormBuilder,
    private service: TopicService,
    private route: Router
  ) { 
    this.checkoutForm = this.formBuilder.group({
      name: ''
    })
  }

  ngOnInit(): void {}
  onSubmit(topic:any){
    if (topic.name == "") {
      console.log("@@@@@EMPTY NAME@@@@@"); 
    }else{
      console.log("#######SOME DATA RECEIVED#########");
      this.service.addTopic(topic)
      window.alert(topic.name + " added successfully");
      this.route.navigate([''])
    }
  }
}
