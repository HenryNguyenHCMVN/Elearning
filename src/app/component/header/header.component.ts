import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CourseService } from 'src/app/core/services/course/course.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() course: any;

  constructor(private courseService: CourseService, private authService: AuthService) { }

  private subcription = new Subscription();

  currentUser: any = null;

  categoryList: any = [];

  //ngOnInit = componentDisMount
  ngOnInit(): void {
    //get danh sách lên header
    this.getListCategory();

    //call back data mới khi user có thay đổi thông tin
    this.authService.currentUser.subscribe((data) => {
      this.currentUser = data;
    })
  }

  getListCategory() {
    this.courseService.getListCategoryCourseApi().subscribe((data) => {
      console.log(data);
      this.categoryList = data;
    })
  }

  //hủy API để tối ưu performance
  ngOnDestroy() {
    console.log("out!!!");
    this.subcription.unsubscribe();
  }
}
