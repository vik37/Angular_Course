import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input()
  course:Course
  @Input()
  cardIndex: number;
  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();
  constructor() { }

  isImageVisible(){
    return  this.course && this.course.iconUrl
  }

  onClickViewed(){
      console.log("course clicked");
      this.courseEmitter.emit(this.course);
  }
  cardClasses(){
    if(this.course.category === 'BEGINNER')
    return 'begginer'
  }
}
