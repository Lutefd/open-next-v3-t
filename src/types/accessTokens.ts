export interface AccessTokens {
  tokens: Token[];
}

export interface Token {
  _id: string;
  code: string;
  owner: string;
  app: App;
  status: string;
  refreshStatus: null;
  expiresIn: null;
  refreshToken: string;
  scope: null;
  extraInfo: ExtraInfo;
  creationDate: number;
  expiredDate: null;
  apis: API[];
  planIds: any[];
}
export interface API {
  id: number;
  name: string;
  version: string;
  description?: string;
  creationDate: number;
  plans: Plan[];
  appsCount: number;
}

export interface Plan {
  id: number;
  name: string;
  description?: string;
  defaultPlan: boolean;
}
export interface App {
  id: number;
  clientId: string;
  name: string;
}
export interface ExtraInfo {
  cnpj: string;
  idseller: string;
  idCreator: string;
}
