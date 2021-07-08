import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/core/services/course/course.service';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  private subcription = new Subscription();

  courseList: any = [];

  getListCourse () {
    this.courseService.getListCourseApi().subscribe((data) => {
      console.log(data);
      this.courseList = data;

    })
  }

  ngOnInit(): void {
    this.getListCourse();
  }

  //hủy API để tối ưu performance
  ngOnDestroy() {
    console.log("out!!!");
    this.subcription.unsubscribe();
  }

}
