import BaseTokenService from '@services/token/BaseTokenService';
import type { StringValue } from 'ms';

export default class RefreshTokenService<
  T extends object
> extends BaseTokenService<T> {
  private _secretKey = process.env.REFRESH_SECRET!;
  private _expiresIn = '7d' as StringValue;

  get secret() {
    return this._secretKey;
  }
  
  get expiresIn() {
    return this._expiresIn;
  }
}
