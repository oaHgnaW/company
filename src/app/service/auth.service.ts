import { Injectable } from '@angular/core';
import {Config} from '#{config}/config';
import {HttpClientService} from '#{service}/http-client.service';

const authUrl = '/auth-test';
@Injectable()
export class AuthService {

  constructor(
    protected http: HttpClientService,
  ) { }

  auth(params: Object) {
    this.http.version = Config.mainApiVersion;
    return this.http.get(authUrl, params);
  }

}
