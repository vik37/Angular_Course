import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input()
  course:Course
  @Input()
  cardIndex: number;
  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();
  constructor() { }

  ngOnInit(): void {

  }

  isImageVisible(){
    return  this.course && this.course.iconUrl
  }

  onClickViewed(){
      console.log("course clicked");
      this.courseEmitter.emit(this.course);
  }

}
