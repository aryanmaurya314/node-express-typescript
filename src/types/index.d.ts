export type Record = { [key: string]: any };

export type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export interface Route {
  method?: HttpMethod;
  path: string;
  requestHandler: any;
}

export interface ENV {
  development: string;
  production: string;
}
