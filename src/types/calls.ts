export interface Calls {
  calls: Call[];
  callsSize: number;
}

export interface Call {
  apiId: number | null;
  revisionId: number | null;
  resourceId: number | null;
  operationId: number | null;
  apiComponentType: string | null;
  clientId: string | null | number;
  appName: string;
  appDeveloper: null;
  accessToken: string;
  accessTokenOwner: string;
  receivedOn: number;
  receivedFromAddress: string;
  durationMillis: null;
  resultStatus: number;
  method: Method;
  url: null;
  receivedOnDate: string;
  insertedOnDate: string;
  cache: null;
  responsePayload: number;
  requestPayload: number;
  completeUrl: null;
  yearMonth: string;
  typeStatus: TypeStatus;
  typeError: TypeError | null;
  apiName: string | null;
  resourceName: string;
  operationName: string | null;
  billing: boolean;
  billingData: null;
  environmentId: number | null;
  environmentName: string | null;
  redis: boolean;
  gatewayDurationMillis: number;
  transactionID: string;
  requestID: string;
  targetResultStatus: number | null;
  targetDurationMillis: number;
  id: string;
  callDate: number;
  callerAddress: string;
  uri: string;
  duration: number;
  requestHeaders: null;
  responseHeaders: null;
  trace: string | undefined;
  baseUrl: null;
  additionalData: null;
  httpStatus: string;
  authOwner: string;
  appToken: string;
}

export enum Method {
  Get = 'GET',
  Options = 'OPTIONS',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE',
}

export enum TypeError {
  Client = 'client',
  Server = 'server',
}

export enum TypeStatus {
  Error = 'error',
  Success = 'success',
}
export interface SingleCall {
  timeMillis: number;
  message: string;
  data: SingleCallData | null;
  encryptContent: boolean;
}

export interface SingleCallData {
  log: Log;
  type: string;
}

export interface Log {
  headers: string;
  method?: string;
  'execution-point': string;
  body: string;
  url?: string;
  status?: number;
}
