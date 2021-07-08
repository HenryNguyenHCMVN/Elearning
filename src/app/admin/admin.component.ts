import { Component, OnInit } from '@angular/core';
import { UserSignIn } from '../core/models/client';
import { AuthService } from '../core/services/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

// public userSignIn !: UserSignIn;

public displayedColumns: string[] = ['taiKhoan'];

  thongTinNguoiDung: any = null;

  showFiller = false;
  dataS:any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.authService.currentUser.subscribe((data) =>{
      console.log(data);
      this.thongTinNguoiDung = data;
    })

    // this.authService.currentUser.subscribe(data =>{
      // lấy từ local
      // console.log(data)
      // chỗ này khá phức tạp code logic lắm ko gán nhu8 vậy dc
      // this.token = data.accessTokenta
      // this.dataS = data
      // let update = {...this.userSignIn}
      // update.accessToken = `Bearer ${this.dataS.accessToken}`
      // this.userSignIn = update
      // console.log(this.userSignIn.accessToken);

      // this.authService.infoUser(this.userSignIn.accessToken).subscribe(data=>{
      //   console.log(data);

      // })
    // })
  }

}
