export interface MyApps {
  apps: Apps[];
}
export interface SingleApp {
  app: Apps;
}
export interface Apps {
  id: number;
  clientId: string;
  name: string;
  status: Status;
  description: string;
  secret: string;
  extraInfo: ExtraInfo;
  developer: string;
  creationDate: number;
  link?: string;
  showAppGallery: boolean;
  apis: API[];
  accessTokens: any[];
  ownerType: OwnerType;
  icon?: string;
}
export interface APIsRes {
  apis: API[];
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

export interface ExtraInfo {
  app_field_1?: string;
  e_name?: string;
  email?: string;
  callback?: string;
  field5?: string;
  field2?: string;
  field1?: string;
  meu_campo_1?: string;
  meu_campo_2?: string;
  teste3?: string;
  teste4?: string;
  'Campo - Manager - 1'?: string;
  'Campo - Manager - 2 - Object'?: Campo;
  'Campo - Manager - 3 - Vazio'?: string;
  'Campo - Manager - 4 - Int'?: string;
  Campo1?: string;
  'Campo 2'?: string;
  Campo3?: Campo;
  Campo4Teste?: string;
  Campo5Vazio?: string;
  teste2?: string;
  cpf?: string;
  userData?: UserDataClass | null | string;
  permissions?: string;
  campo_1?: string;
  campo_2?: string;
  teste_1?: string;
  nome_1?: string;
  enviroment_example?: string;
  name_example?: string;
  text?: string;
  boolean?: string;
  options?: string;
  url?: string;
  parceiro?: string;
  Beto?: string;
  nome2?: string;
  nome1?: string;
  CNPJ?: string;
  'my-key'?: string;
  'my-links'?: string;
  'my-link'?: string;
  'personal-key'?: string;
  'cpf-desenvolvedor-2'?: string;
  'teste-rotulo'?: string;
  'teste-nome-3'?: string;
  extra_field_teste_1?: string;
  extra_field_teste_2?: string;
  extra_field_teste_3?: string;
  testeUniqueKey?: number | string;
  extra_field_teste_4?: string;
  userDate?: string;
  cpf_cnpj?: string;
  agencia?: string;
  conta_corrente?: string;
  nome?: string;
  'teste-nome'?: string;
  'teste-nome-2'?: string;
  public2?: string;
  'CPU-name'?: string;
  appcputeste2?: string;
  AppCPU?: string;
  '(Carro_Chefe)'?: string;
  'novo teste de alteração'?: string;
  'caso de teste'?: string;
  'novo caso de teste'?: string;
  'Testando novo campo'?: string;
  'Teste nois 2'?: string;
  'Teste Nome'?: TesteNome;
  password?: string;
  owner?: string;
  destinationUrl?: string;
  apis?: string[];
  Username?: string;
  'renan teste'?: string;
  nome_completo?: TesteNome;
  env?: string;
  'Nome Completo'?: string;
  ''?: string;
  teste?: string;
  redirect_uri?: string;
  nomecampoapp?: string;
  userId?: string;
  redirectUri?: string;
  'nome_completo '?: TesteNome;
  cpf_cnpj_teste?: string;
  info_2_teste?: string;
  ambiente?: string;
  urlDest?: string;
  campo1?: string;
  campo2?: string;
  id?: string;
  'Merchant API - Brand ID'?: string;
  'CALLBACK URL'?: string;
  destinoFelipe?: string;
  'x-cpf'?: string;
  userID?: string;
  mechant2?: string;
  jwt?: string;
}

export interface Campo {
  teste: string;
}

export enum TesteNome {
  SensediaDeveloperPortal = 'Sensedia Developer Portal',
}

export interface UserDataClass {
  environment: string;
  name: string;
  email: string;
  cpfCnpj: string;
  agencia: string;
  cc: string;
  city: string;
  state: string;
  country: string;
}

export enum OwnerType {
  Developer = 'DEVELOPER',
}

export enum Status {
  Approved = 'APPROVED',
  Cancelled = 'CANCELLED',
  Pending = 'PENDING',
}
