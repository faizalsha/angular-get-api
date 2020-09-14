import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { TopicComponent } from './topic/topic.component';
import { AddTopicComponent } from './add-topic/add-topic.component'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    TopicComponent,
    AddTopicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: TopicComponent},
      {path: 'addTopic', component: AddTopicComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
