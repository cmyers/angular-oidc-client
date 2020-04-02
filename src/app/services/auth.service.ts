import { Injectable } from '@angular/core';
import { UserManager, UserManagerSettings, User } from 'oidc-client';
import { OIDCConstants } from 'src/helpers/Constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userManager: UserManager;
  private user: User | null;

  constructor() {
    const settings: UserManagerSettings = {
      authority: OIDCConstants.STSAUTHORITY,
      client_id: OIDCConstants.CLIENTID,
      redirect_uri: `${OIDCConstants.CLIENTROOT}auth-callback`,
      silent_redirect_uri: `${OIDCConstants.CLIENTROOT}silent-renew.html`,
      // tslint:disable-next-line:object-literal-sort-keys
      post_logout_redirect_uri: `${OIDCConstants.CLIENTROOT}`,
      response_type: 'code',
      scope: OIDCConstants.CLIENTSCOPE
    };
    this.userManager = new UserManager(settings);
  }

  public getUser(): User | null {
    return this.user;
  }

  public login(): Promise<void> {
    return this.userManager.signinRedirect();
  }

  public renewToken(): Promise<User> {
    return this.userManager.signinSilent();
  }

  public logout(): Promise<void> {
    return this.userManager.signoutRedirect();
  }

  public async signinCallback(): Promise<User> {
    this.user = await this.userManager.signinRedirectCallback();
    return this.user;
  }

}
