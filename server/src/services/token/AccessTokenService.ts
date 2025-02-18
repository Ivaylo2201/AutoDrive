import type { StringValue } from 'ms';
import BaseTokenService from '@services/token/BaseTokenService';

export default class AccessTokenService<
  T extends object
> extends BaseTokenService<T> {
  private _secretKey = process.env.ACCESS_SECRET!;
  private _expiresIn = '15m' as StringValue;

  get secret() {
    return this._secretKey;
  }
  get expiresIn() {
    return this._expiresIn;
  }
}
