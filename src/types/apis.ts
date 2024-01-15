export interface APIsResponse {
  apis: APIs[];
}

export interface APIs {
  id: number;
  name: string;
  description?: string;
  version: string;
  creationDate: number;
  plans: Plan[];
  basePath: string;
  privateAPI: boolean;
  environments: any[];
  revisions: any[];
  appsCount: number;
  lastVersion: boolean;
  apiType: APIType;
  visibility: Visibility;
  apiSwaggerConfiguration: APISwaggerConfiguration;
  internalAPI: boolean;
  tags: any[];
  apiTags: any[];
  identityApi: boolean;
  accessTokenExpiresIn?: number;
  apiResponsible?: APIResponsible;
  apiIdentityConfiguration?: APIIdentityConfiguration;
}

export interface APIIdentityConfiguration {
  id: number;
  apiIds: number[];
}

export interface APIResponsible {
  id: number;
  user: OwnerElement;
}

export interface Team {
  id: number;
  name: string;
  description: null | string;
  creationDate: number | null;
  users: OwnerElement[];
  usersCount: number;
}

export interface OwnerElement {
  id: number;
  name: string;
  email: string;
  login: string;
  roles: Plan[];
  teams: Team[];
  hasAllPermissions: boolean;
  userType: UserType;
  traceEnvironments: any[];
  mfaSecret: boolean;
  loginAttempts: number;
  status: Status;
  lastLogin: number;
  image?: string;
  teamUserId?: number;
}

export interface Plan {
  id: number;
  name: string;
  description?: null | string;
  permissions?: PermissionElement[];
  defaultPlan?: boolean;
}

export interface PermissionElement {
  id: number;
  permission: PermissionEnum;
  type: Type;
}

export enum PermissionEnum {
  APIConnectors = 'API_CONNECTORS',
  AccessTokens = 'ACCESS_TOKENS',
  Alert = 'ALERT',
  Analytics = 'ANALYTICS',
  Apis = 'APIS',
  ApisHealth = 'APIS_HEALTH',
  Apps = 'APPS',
  Attributes = 'ATTRIBUTES',
  Audit = 'AUDIT',
  CacheControl = 'CACHE_CONTROL',
  Callbacks = 'CALLBACKS',
  Certificate = 'CERTIFICATE',
  Dashboard = 'DASHBOARD',
  DataObfuscation = 'DATA_OBFUSCATION',
  Developers = 'DEVELOPERS',
  Environments = 'ENVIRONMENTS',
  EventsHub = 'EVENTS_HUB',
  HealthChecks = 'HEALTH_CHECKS',
  ImpactAnalysis = 'IMPACT_ANALYSIS',
  InboundAddress = 'INBOUND_ADDRESS',
  Integrations = 'INTEGRATIONS',
  LDAP = 'LDAP',
  MailSettings = 'MAIL_SETTINGS',
  Mfa = 'MFA',
  Notifications = 'NOTIFICATIONS',
  Oauth = 'OAUTH',
  OpenBanking = 'OPEN_BANKING',
  Organizations = 'ORGANIZATIONS',
  Plans = 'PLANS',
  Roles = 'ROLES',
  Secrets = 'SECRETS',
  Teams = 'TEAMS',
  Trace = 'TRACE',
  TraceDecrypt = 'TRACE_DECRYPT',
  Users = 'USERS',
  Workflow = 'WORKFLOW',
}

export enum Type {
  Edit = 'EDIT',
  View = 'VIEW',
}

export enum Status {
  Active = 'ACTIVE',
  BlockedByAdm = 'BLOCKED_BY_ADM',
  PendingActivation = 'PENDING_ACTIVATION',
}

export enum UserType {
  Database = 'DATABASE',
}

export interface APISwaggerConfiguration {
  id: number;
  showAppRegister: boolean;
  showApiBrowser: boolean;
  apiSwaggerConfigurationEnvironments: APISwaggerConfigurationEnvironment[];
}

export interface APISwaggerConfigurationEnvironment {
  id: number;
  environmentId: number;
  defaultSwaggerConfigurationEnvironment: boolean;
  revisionId?: number;
}

export enum APIType {
  Graphql = 'GRAPHQL',
  Identity = 'IDENTITY',
  REST = 'REST',
}

export interface Visibility {
  id: number;
  visibilityType: VisibilityType;
  users: PurpleUser[];
  owner?: OwnerElement;
  teamVisibility?: Team;
}

export interface PurpleUser {
  id: number;
  user: OwnerElement;
  type: Type;
}

export enum VisibilityType {
  Me = 'ME',
  Organization = 'ORGANIZATION',
  Team = 'TEAM',
}
