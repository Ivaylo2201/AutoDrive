import jwt from 'jsonwebtoken';
import type { StringValue } from 'ms';

export default abstract class BaseTokenService<T extends object> {
  abstract get secret(): string;
  abstract get expiresIn(): StringValue | number;

  /**
   * @throws {VerifyErrors} Will throw an error if verification fails.
   */
  public decode(token: string): T {
    const { exp, iat, ...obj } = jwt.verify(token, this.secret) as T & {
      exp: number;
      iat: number;
    };
    return obj as T;
  }

  public encode(payload: T): string {
    return jwt.sign(payload, this.secret, { expiresIn: this.expiresIn });
  }
}
