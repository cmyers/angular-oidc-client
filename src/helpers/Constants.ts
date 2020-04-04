export class OIDCConstants {
  public static readonly STSAUTHORITY = 'https://demo.identityserver.io/';
  public static readonly CLIENTID = 'spa';
  public static readonly CLIENTROOT = `${window.location.protocol}//${window.location.host}/`;
  public static readonly CLIENTSCOPE = 'openid profile email api';
  public static readonly APIROOT = 'https://demo.identityserver.io/api/';
}
