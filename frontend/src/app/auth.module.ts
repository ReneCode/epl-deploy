import { NgModule } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

function authHttpServiceFatory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
  // return new AuthHttp(new AuthConfig({
  //   tokenName: 'id_token',
  //   tokenGetter: ( () => localStorage.getItem('id_token'))
  // }), http, options);
}

@NgModule({
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFatory,
      deps: [Http, RequestOptions]
    }
  ],
})
export class AuthModule { }
