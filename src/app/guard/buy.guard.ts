import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from '#{service}/auth.service';
import {LocalStorageService} from '#{service}/local-storage.service';
import {Cookie} from 'ng2-cookies';
import {FlashMessagesService} from '#{service}/flash-messages.service';

@Injectable()
export class BuyGuard implements CanActivate {


  authItems = this.localStorage.getObject('authItems');
  isLoggedIn = Cookie.check('currentCompanyAuthorization');
  type = this.localStorage.getObject('companyType');
  constructor(
    public auth: AuthService,
    public localStorage: LocalStorageService,
    public flashMessages: FlashMessagesService,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('#guardCalled');
    console.log(this.authItems);
    console.log(this.type);
    return this.buyAuth();
  }

  buyAuth(): boolean {
    if (!this.isLoggedIn) {
      this.flashMessages.wechatprompt('请先登录后再购买');
      return false;
    }else if (this.type === '1') {
      this.flashMessages.wechatprompt('您的账号是服务商，不能购买');
      return false;
    }else if (this.authItems.business.buyer) {
      return true;
    }
  }
}
