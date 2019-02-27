import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  txt:string = '';
  topics:Array<string> = ['Angular','React','Redux'];
  constructor() { }

  ngOnInit() {
  //
  }
  
public add(topic):void{
  this.topics.push(topic) 
}
}

