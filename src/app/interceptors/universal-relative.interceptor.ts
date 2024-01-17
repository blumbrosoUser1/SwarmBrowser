import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';

// case insensitive check against config and value
const startsWithAny = (arr: string[] = []) => (value = '') => {
  return arr.some(test => value.toLowerCase().startsWith(test.toLowerCase()));
};

// http, https, protocol relative
const isAbsoluteURL = startsWithAny(['http', '//']);

@Injectable()
export class UniversalRelativeInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!isAbsoluteURL(req.url)) {
      const protocolHost = 'http://' + window.location.hostname + ':3000';
      const pathSeparator = !req.url.startsWith('/') ? '/' : '';
      const url = protocolHost + pathSeparator + req.url;
      const serverRequest = req.clone({ url });
      return next.handle(serverRequest);
    } else {
      return next.handle(req);
    }
  }
}
