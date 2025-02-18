import AccessTokenService from '@services/token/AccessTokenService';
import RefreshTokenService from '@services/token/RefreshTokenService';

export default class TokenService<T extends object> {
  private _accessTokenService = new AccessTokenService<T>();
  private _refreshTokenService = new RefreshTokenService<T>();

  public obtainPair(payload: T) {
    return {
      access: this._accessTokenService.encode(payload),
      refresh: this._refreshTokenService.encode(payload)
    };
  }

  public refresh(refreshToken: string) {
    const payload = this._refreshTokenService.decode(refreshToken);
    return { access: this._accessTokenService.encode(payload) };
  }
}

