import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LocalStorageService} from '#{service}/local-storage.service';

@Component({
  selector: 'app-personal-menu',
  templateUrl: './personal-menu.component.html',
  styleUrls: ['./personal-menu.component.scss']
})
export class PersonalMenuComponent implements OnInit {

  authItems = this.localStorage.getObject('authItems');
  constructor(
    public router: Router,
    public localStorage: LocalStorageService
  ) { }

  ngOnInit() {
  }


  // 我的服务tab高亮显示
  goodsEven(){
    this.router.navigate(['/seller/personal/index/goods'], {
      queryParams: {is_down: ''}
    });
  }
  // 我的订单tab高亮显示
  orderEven() {
    this.router.navigate(['/buyer/personal/index/order'], {
      queryParams: {type: ''}
    });
  }

}
