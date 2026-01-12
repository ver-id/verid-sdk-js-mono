export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ClientPicture: { input: string | null; output: string | null; }
  DateTime: { input: string; output: string; }
  Domain: { input: string; output: string; }
  DomainName: { input: string; output: string; }
  Email: { input: string; output: string; }
  Entitlement: { input: string; output: string; }
  FilteringValue: { input: string | number | boolean | string[]; output: string | number | boolean | string[]; }
  ISO3166: { input: string; output: string; }
  JSONObject: { input: any; output: any; }
  JwtMediaType: { input: string; output: string; }
  Locale: { input: string; output: string; }
  NonEmpty: { input: string; output: string; }
  Null: { input: unknown; output: unknown; }
  Password: { input: string; output: string; }
  Price: { input: number; output: number; }
  ProfilePicture: { input: string | null; output: string | null; }
  RedirectPath: { input: string; output: string; }
  RedirectPort: { input: number; output: number; }
  RedirectProtocol: { input: string; output: string; }
  Resource: { input: string; output: string; }
  Role: { input: string; output: string; }
  TypeName: { input: unknown; output: unknown; }
  UInt: { input: number; output: number; }
  URL: { input: string; output: string; }
  URN: { input: string; output: string; }
  UUID: { input: string; output: string; }
};

export type AcceptAuthenticationInvitationInput = {
  /** The new password of the user. */
  password: Scalars['Password']['input'];
  /** The confirmed password of the user. */
  passwordConfirmation: Scalars['Password']['input'];
  /** The invitation token which is used to authorize the user. */
  token: Scalars['NonEmpty']['input'];
};

export type AcceptUserInvitationAndRegisterByPasswordInput = {
  /** The password of the user. */
  password: Scalars['Password']['input'];
  /** The confirmed password of the user. */
  passwordConfirmation: Scalars['Password']['input'];
  /** The invitation token */
  token: Scalars['NonEmpty']['input'];
};

export type AcceptUserInvitationByOpenIdTokenInput = {
  /** The OAuth provider UUID */
  oauthProviderUuid?: InputMaybe<Scalars['UUID']['input']>;
  /** The openID token obtained from SSI or external OAuth provider. */
  openIdToken: Scalars['NonEmpty']['input'];
  /** The invitation token */
  token: Scalars['NonEmpty']['input'];
};

export type AcceptUserInvitationByPasswordInput = {
  /** The password of the user. */
  password: Scalars['Password']['input'];
  /** The invitation token */
  token: Scalars['NonEmpty']['input'];
};

/** Lifecycle actions */
export enum Action {
  Activate = 'ACTIVATE',
  Deactivate = 'DEACTIVATE'
}

/** Action Input */
export type ActionAppInput = {
  /** The action */
  action: Action;
};

/** Action Input */
export type ActionAttributeInput = {
  /** The action */
  action: Action;
};

/** Charge action */
export type ActionBillingWalletChargeInput = {
  /** Charge amount */
  amount: Scalars['Int']['input'];
};

/** Give Credit action */
export type ActionBillingWalletGiveCreditInput = {
  /** Free credit amount */
  amount: Scalars['Int']['input'];
};

/** Action state Input */
export type ActionBillingWalletInput = {
  /** The transition of the flow authentication. */
  action: BillingWalletAction;
  /** Charge */
  charge?: InputMaybe<ActionBillingWalletChargeInput>;
  /** Give credit */
  giveCredit?: InputMaybe<ActionBillingWalletGiveCreditInput>;
};

/** Action Input */
export type ActionCredentialInput = {
  /** The action */
  action: Action;
};

/** Action Input */
export type ActionCredentialRequestInput = {
  /** The comments */
  comments?: InputMaybe<Scalars['String']['input']>;
  /** The desired state */
  credentialRequestStateUuid: Scalars['UUID']['input'];
  /** The meta */
  meta?: InputMaybe<Scalars['JSONObject']['input']>;
};

/** Update state Input */
export type ActionFlowAuthenticationInput = {
  /** The transition of the flow authentication. */
  action: FlowAuthenticationAction;
};

/** ActionFlowDisclosureInput */
export type ActionFlowDisclosureInput = {
  /** The action */
  action: FlowDisclosureAction;
};

/** Action Input */
export type ActionFlowIssuanceInput = {
  /** The action */
  action: FlowIssuanceAction;
};

/** Action Input */
export type ActionFlowSignatureInput = {
  /** The action */
  action: FlowSignatureAction;
};

/** Action Input */
export type ActionIssuerInput = {
  /** The action */
  action: Action;
};

/** Action Input */
export type ActionMappingIssuanceInput = {
  /** The action */
  action: MappingIssuanceAction;
};

/** Action Input */
export type ActionMappingVerificationInput = {
  /** The action */
  action: MappingVerificationAction;
};

/** Do action Input */
export type ActionOAuthProviderInput = {
  /** An action */
  action: OAuthProviderAction;
};

/** Update state Input */
export type ActionOrganizationAlertInput = {
  /** The transition */
  action: OrganizationAlertAction;
};

/** Action Input */
export type ActionOrganizationAppInput = {
  /** The action */
  action: OrganizationAppAction;
  /** The product */
  product: OrganizationAppProduct;
};

/** Action Input */
export type ActionOrganizationAppPrerequisiteInput = {
  /** The desired state */
  appPrerequisiteStateUuid: Scalars['UUID']['input'];
  /** The comments */
  comments?: InputMaybe<Scalars['String']['input']>;
  /** The meta */
  meta?: InputMaybe<Scalars['JSONObject']['input']>;
};

/** Update Input */
export type ActionOrganizationBrandInput = {
  /** The action. */
  action: OrganizationBrandAction;
  /** Reject  */
  reject?: InputMaybe<ActionOrganizationBrandRejectInput>;
};

/** Reject input */
export type ActionOrganizationBrandRejectInput = {
  /** The reject reason */
  reason: Scalars['NonEmpty']['input'];
};

/** Action Input */
export type ActionOrganizationDomainInput = {
  /** The action */
  action: OrganizationDomainAction;
  /** Reject  */
  reject?: InputMaybe<OrganizationDomainActionRejectInput>;
};

/** Do action Input */
export type ActionOrganizationInput = {
  /** An action */
  action: OrganizationAction;
};

/** Update state Input */
export type ActionOrganizationNotificationInput = {
  /** The transition */
  action: OrganizationNotificationAction;
};

/** Do action Input */
export type ActionOrganizationUserInput = {
  /** An action */
  action: OrganizationUserAction;
};

/** Input type to update the password. */
export type ActionPasswordUserInput = {
  /** The current password of the user. */
  currentPassword?: InputMaybe<Scalars['Password']['input']>;
  /** The password of the user. */
  password: Scalars['Password']['input'];
  /** The confirmed password of the user. */
  passwordConfirmation: Scalars['Password']['input'];
};

/** Action Input */
export type ActionProviderInput = {
  /** The action */
  action: Action;
};

/** Action Input */
export type ActionSchemeInput = {
  /** The action */
  action: Action;
};

/** Action Input */
export type ActionScopeInput = {
  /** The action */
  action: Action;
};

/** Update state Input */
export type ActionStudioPlanInput = {
  /** The transition of state. */
  action: StudioPlanAction;
};

/** AlertSeverity */
export enum AlertSeverity {
  Critical = 'CRITICAL',
  Info = 'INFO',
  Warning = 'WARNING'
}

/** AlertState */
export enum AlertState {
  Active = 'ACTIVE',
  Dismissed = 'DISMISSED',
  Inactive = 'INACTIVE'
}

/** AlertType */
export enum AlertType {
  Deprecation = 'DEPRECATION'
}

/** App definition. */
export type App = Model & {
  __typename?: 'App';
  /** The base64Logo of the app. */
  base64Logo: Scalars['NonEmpty']['output'];
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The collection of locale */
  locale: AppLocaleConnection;
  /** The name */
  name: Scalars['NonEmpty']['output'];
  /** The collection of organization providers */
  organizationApps: OrganizationAppConnection;
  /** The collection of prerequisites */
  prerequisites: AppPrerequisiteConnection;
  /** The collection of provider apps */
  providerApps: ProviderAppConnection;
  /** The state */
  state: State;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** App definition. */
export type AppLocaleArgs = {
  input?: InputMaybe<FindManyAppLocaleInput>;
};


/** App definition. */
export type AppOrganizationAppsArgs = {
  input?: InputMaybe<FindManyOrganizationAppsInput>;
};


/** App definition. */
export type AppPrerequisitesArgs = {
  input?: InputMaybe<FindManyAppPrerequisitesInput>;
};


/** App definition. */
export type AppProviderAppsArgs = {
  input?: InputMaybe<FindManyProviderAppsInput>;
};

/** The app connection definition. */
export type AppConnection = {
  __typename?: 'AppConnection';
  edges: Array<Maybe<AppEdge>>;
  pageInfo: PageInfo;
};

/** The app edge definition. */
export type AppEdge = {
  __typename?: 'AppEdge';
  cursor: Scalars['String']['output'];
  node: App;
};

/** Fields which can be used to filter app on. Value must be camel case. */
export enum AppFilteringField {
  CreatedAt = 'createdAt',
  Name = 'name',
  State = 'state',
  Uuid = 'uuid'
}

/** App locale definition. */
export type AppLocale = Model & {
  __typename?: 'AppLocale';
  /** The app the locale belongs to. */
  app: App;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The i18n object */
  i18n: Scalars['JSONObject']['output'];
  /** The locale */
  locale: Scalars['Locale']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The app locale connection definition. */
export type AppLocaleConnection = {
  __typename?: 'AppLocaleConnection';
  edges: Array<Maybe<AppLocaleEdge>>;
  pageInfo: PageInfo;
};

/** The app locale edge definition. */
export type AppLocaleEdge = {
  __typename?: 'AppLocaleEdge';
  cursor: Scalars['String']['output'];
  node: AppLocale;
};

/** Fields which can be used to filter app locale on. Value must be camel case. */
export enum AppLocaleFilteringField {
  AppUuid = 'appUuid',
  Locale = 'locale'
}

/** Fields which can be used to sort app locale on. Value must be camel case. */
export enum AppLocaleSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting app locale. */
export type AppLocaleSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AppLocaleSortEnum;
};

/** AppPrerequisite definition. */
export type AppPrerequisite = Model & {
  __typename?: 'AppPrerequisite';
  /** The app. */
  app: App;
  /** The collection of app requisite states. */
  appPrerequisiteStates: AppPrerequisiteStateConnection;
  /** The creation time. */
  createdAt: Scalars['DateTime']['output'];
  /** Is prerequisite required for issuance. */
  forIssuance: Scalars['Boolean']['output'];
  /** Is prerequisite required for verification. */
  forVerification: Scalars['Boolean']['output'];
  /** The collection of locale */
  locale: AppPrerequisiteLocaleConnection;
  /** The name of the app prerequisite. */
  name: AppPrerequisites;
  /** The collection of organization app requisites. */
  organizationAppPrerequisites: OrganizationAppPrerequisiteConnection;
  /** The update time. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** AppPrerequisite definition. */
export type AppPrerequisiteAppPrerequisiteStatesArgs = {
  input?: InputMaybe<FindManyAppPrerequisiteStateInput>;
};


/** AppPrerequisite definition. */
export type AppPrerequisiteLocaleArgs = {
  input?: InputMaybe<FindManyAppPrerequisiteLocaleInput>;
};


/** AppPrerequisite definition. */
export type AppPrerequisiteOrganizationAppPrerequisitesArgs = {
  input?: InputMaybe<FindManyOrganizationAppPrerequisiteInput>;
};

/** The app prerequisite connection definition. */
export type AppPrerequisiteConnection = {
  __typename?: 'AppPrerequisiteConnection';
  edges: Array<Maybe<AppPrerequisiteEdge>>;
  pageInfo: PageInfo;
};

/** The app prerequisite edge definition. */
export type AppPrerequisiteEdge = {
  __typename?: 'AppPrerequisiteEdge';
  cursor: Scalars['String']['output'];
  node: AppPrerequisite;
};

/** Fields which can be used to filter app prerequisite on. Value must be camel case. */
export enum AppPrerequisiteFilteringField {
  AppUuid = 'appUuid',
  CreatedAt = 'createdAt',
  ForIssuance = 'forIssuance',
  ForVerification = 'forVerification',
  Name = 'name',
  Uuid = 'uuid'
}

/** AppPrerequisite locale definition. */
export type AppPrerequisiteLocale = Model & {
  __typename?: 'AppPrerequisiteLocale';
  /** The appPrerequisite the locale belongs to. */
  appPrerequisite: AppPrerequisite;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The i18n object */
  i18n: Scalars['JSONObject']['output'];
  /** The locale */
  locale: Scalars['Locale']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The appPrerequisite locale connection definition. */
export type AppPrerequisiteLocaleConnection = {
  __typename?: 'AppPrerequisiteLocaleConnection';
  edges: Array<Maybe<AppPrerequisiteLocaleEdge>>;
  pageInfo: PageInfo;
};

/** The appPrerequisite locale edge definition. */
export type AppPrerequisiteLocaleEdge = {
  __typename?: 'AppPrerequisiteLocaleEdge';
  cursor: Scalars['String']['output'];
  node: AppPrerequisiteLocale;
};

/** Fields which can be used to filter appPrerequisite locale on. Value must be camel case. */
export enum AppPrerequisiteLocaleFilteringField {
  AppPrerequisiteUuid = 'appPrerequisiteUuid',
  Locale = 'locale'
}

/** Fields which can be used to sort appPrerequisite locale on. Value must be camel case. */
export enum AppPrerequisiteLocaleSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting appPrerequisite locale. */
export type AppPrerequisiteLocaleSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AppPrerequisiteLocaleSortEnum;
};

/** Fields which can be used to sort app prerequisite on. Value must be camel case. */
export enum AppPrerequisiteSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name'
}

/** Input options for sorting app prerequisite. */
export type AppPrerequisiteSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AppPrerequisiteSortEnum;
};

/** App prerequisite state. */
export type AppPrerequisiteState = Model & {
  __typename?: 'AppPrerequisiteState';
  /** The app prerequisite. */
  appPrerequisite: AppPrerequisite;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The collection of locale */
  locale: AppPrerequisiteStateLocaleConnection;
  /** The name of the state */
  name: AppPrerequisiteStates;
  /** The collection of organization app prerequisite workflows. */
  organizationAppPrerequisiteWorkflows: OrganizationAppPrerequisiteWorkflowConnection;
  /** The collection of organization app prerequisites. */
  organizationAppPrerequisites: OrganizationAppPrerequisiteConnection;
  /** The roles allowed to take action */
  roles: Array<OrganizationUserRole>;
  /** The json schema for the required meta */
  schema: Scalars['JSONObject']['output'];
  /** The transition from */
  transitionFrom: AppPrerequisiteStateConnection;
  /** The transition to */
  transitionTo: AppPrerequisiteStateConnection;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** App prerequisite state. */
export type AppPrerequisiteStateLocaleArgs = {
  input?: InputMaybe<FindManyAppPrerequisiteStateLocaleInput>;
};


/** App prerequisite state. */
export type AppPrerequisiteStateOrganizationAppPrerequisiteWorkflowsArgs = {
  input?: InputMaybe<FindManyOrganizationAppPrerequisiteWorkflowInput>;
};


/** App prerequisite state. */
export type AppPrerequisiteStateOrganizationAppPrerequisitesArgs = {
  input?: InputMaybe<FindManyOrganizationAppPrerequisiteInput>;
};


/** App prerequisite state. */
export type AppPrerequisiteStateTransitionFromArgs = {
  input?: InputMaybe<FindManyAppPrerequisiteStateInput>;
};


/** App prerequisite state. */
export type AppPrerequisiteStateTransitionToArgs = {
  input?: InputMaybe<FindManyAppPrerequisiteStateInput>;
};

/** The app prerequisite state connection request. */
export type AppPrerequisiteStateConnection = {
  __typename?: 'AppPrerequisiteStateConnection';
  edges: Array<Maybe<AppPrerequisiteStateEdge>>;
  pageInfo: PageInfo;
};

/** The app prerequisite state edge request. */
export type AppPrerequisiteStateEdge = {
  __typename?: 'AppPrerequisiteStateEdge';
  cursor: Scalars['String']['output'];
  node: AppPrerequisiteState;
};

/** Fields which can be used to filter app prerequisite state  on. Value must be camel case. */
export enum AppPrerequisiteStateFilteringField {
  AppPrerequisiteUuid = 'appPrerequisiteUuid',
  Name = 'name'
}

/** AppPrerequisiteState locale definition. */
export type AppPrerequisiteStateLocale = Model & {
  __typename?: 'AppPrerequisiteStateLocale';
  /** The appPrerequisiteState the locale belongs to. */
  appPrerequisiteState: AppPrerequisiteState;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The i18n object */
  i18n: Scalars['JSONObject']['output'];
  /** The locale */
  locale: Scalars['Locale']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The appPrerequisiteState locale connection definition. */
export type AppPrerequisiteStateLocaleConnection = {
  __typename?: 'AppPrerequisiteStateLocaleConnection';
  edges: Array<Maybe<AppPrerequisiteStateLocaleEdge>>;
  pageInfo: PageInfo;
};

/** The appPrerequisiteState locale edge definition. */
export type AppPrerequisiteStateLocaleEdge = {
  __typename?: 'AppPrerequisiteStateLocaleEdge';
  cursor: Scalars['String']['output'];
  node: AppPrerequisiteStateLocale;
};

/** Fields which can be used to filter appPrerequisiteState locale on. Value must be camel case. */
export enum AppPrerequisiteStateLocaleFilteringField {
  AppPrerequisiteStateUuid = 'appPrerequisiteStateUuid',
  Locale = 'locale'
}

/** Fields which can be used to sort appPrerequisiteState locale on. Value must be camel case. */
export enum AppPrerequisiteStateLocaleSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting appPrerequisiteState locale. */
export type AppPrerequisiteStateLocaleSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AppPrerequisiteStateLocaleSortEnum;
};

/** Fields which can be used to sort app prerequisite state  on. Value must be camel case. */
export enum AppPrerequisiteStateSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name'
}

/** Input options for sorting app prerequisite state . */
export type AppPrerequisiteStateSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AppPrerequisiteStateSortEnum;
};

/** App prerequisite states */
export enum AppPrerequisiteStates {
  CertificateGenerated = 'CERTIFICATE_GENERATED',
  Completed = 'COMPLETED',
  OrganizationAccountCreated = 'ORGANIZATION_ACCOUNT_CREATED',
  OrganizationAccountRequested = 'ORGANIZATION_ACCOUNT_REQUESTED',
  Pending = 'PENDING',
  SecretStoreSynced = 'SECRET_STORE_SYNCED'
}

/** The app prerequisites */
export enum AppPrerequisites {
  OrganizationRegistration = 'ORGANIZATION_REGISTRATION'
}

/** Fields which can be used to sort app on. Value must be camel case. */
export enum AppSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  State = 'state'
}

/** Input options for sorting app. */
export type AppSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AppSortEnum;
};

/** Attribute definition. */
export type Attribute = Model & {
  __typename?: 'Attribute';
  /** The categories of the attribute */
  categories: Array<AttributeCategoryType>;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential, this attribute belongs to */
  credential: Credential;
  /** The collection of locale */
  locale: AttributeLocaleConnection;
  /** The attribute meta */
  meta?: Maybe<AttributeMeta>;
  /** The meta type of the attribute */
  metaType: AttributeMetaType;
  /** The name */
  name: Scalars['NonEmpty']['output'];
  /** The state */
  state: State;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** Attribute definition. */
export type AttributeLocaleArgs = {
  input?: InputMaybe<FindManyAttributeLocaleInput>;
};

/** Attribute category Type. */
export enum AttributeCategoryType {
  Development = 'DEVELOPMENT',
  Production = 'PRODUCTION',
  Protected = 'PROTECTED',
  Test = 'TEST'
}

/** The attribute connection definition. */
export type AttributeConnection = {
  __typename?: 'AttributeConnection';
  edges: Array<Maybe<AttributeEdge>>;
  pageInfo: PageInfo;
};

/** The attribute edge definition. */
export type AttributeEdge = {
  __typename?: 'AttributeEdge';
  cursor: Scalars['String']['output'];
  node: Attribute;
};

/** Fields which can be used to filter attribute on. Value must be camel case. */
export enum AttributeFilteringField {
  Categories = 'categories',
  CreatedAt = 'createdAt',
  CredentialUuid = 'credentialUuid',
  MetaType = 'metaType',
  Name = 'name',
  State = 'state',
  Uuid = 'uuid'
}

/** Attribute locale definition. */
export type AttributeLocale = Model & {
  __typename?: 'AttributeLocale';
  /** The attribute the locale belongs to. */
  attribute: Attribute;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The i18n object */
  i18n: Scalars['JSONObject']['output'];
  /** The locale */
  locale: Scalars['Locale']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The attribute locale connection definition. */
export type AttributeLocaleConnection = {
  __typename?: 'AttributeLocaleConnection';
  edges: Array<Maybe<AttributeLocaleEdge>>;
  pageInfo: PageInfo;
};

/** The attribute locale edge definition. */
export type AttributeLocaleEdge = {
  __typename?: 'AttributeLocaleEdge';
  cursor: Scalars['String']['output'];
  node: AttributeLocale;
};

/** Fields which can be used to filter attribute locale on. Value must be camel case. */
export enum AttributeLocaleFilteringField {
  AttributeUuid = 'attributeUuid',
  Locale = 'locale'
}

/** Fields which can be used to sort attribute locale on. Value must be camel case. */
export enum AttributeLocaleSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute locale. */
export type AttributeLocaleSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeLocaleSortEnum;
};

/** Attribute meta definition. */
export type AttributeMeta = Model & {
  __typename?: 'AttributeMeta';
  /** The attribute the meta belongs to. */
  attribute: Attribute;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The datakeeper attribute meta */
  datakeeper?: Maybe<AttributeMetaDatakeeper>;
  /** The digidentity attribute meta */
  digidentity?: Maybe<AttributeMetaDigidentity>;
  /** The mdoc attribute meta */
  mdoc?: Maybe<AttributeMetaMdoc>;
  /** The nect attribute meta */
  nect?: Maybe<AttributeMetaNect>;
  /** The NL Wallet attribute meta */
  nlWallet?: Maybe<AttributeMetaNlWallet>;
  /** The OID4VC mdoc attribute meta */
  oid4vcMdoc?: Maybe<AttributeMetaOid4Vcmdoc>;
  /** The OID4VC SD-JWT attribute meta */
  oid4vcSdJwt?: Maybe<AttributeMetaOid4Vcsdjwt>;
  /** The ReadID attribute meta */
  readid?: Maybe<AttributeMetaReadId>;
  /** The truid attribute meta */
  truid?: Maybe<AttributeMetaTruid>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** The yivi attribute meta */
  yivi?: Maybe<AttributeMetaYivi>;
  /** The yoti attribute meta */
  yoti?: Maybe<AttributeMetaYoti>;
};

/** The attribute meta connection definition. */
export type AttributeMetaConnection = {
  __typename?: 'AttributeMetaConnection';
  edges: Array<Maybe<AttributeMetaEdge>>;
  pageInfo: PageInfo;
};

/** Attribute meta definition. */
export type AttributeMetaDatakeeper = Model & {
  __typename?: 'AttributeMetaDatakeeper';
  /** The attribute meta the datakeeper meta belongs to. */
  attributeMeta: AttributeMeta;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The predicate of the attribute */
  predicate: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The attribute meta datakeeper connection definition. */
export type AttributeMetaDatakeeperConnection = {
  __typename?: 'AttributeMetaDatakeeperConnection';
  edges: Array<Maybe<AttributeMetaDatakeeperEdge>>;
  pageInfo: PageInfo;
};

/** The attribute meta datakeeper edge definition. */
export type AttributeMetaDatakeeperEdge = {
  __typename?: 'AttributeMetaDatakeeperEdge';
  cursor: Scalars['String']['output'];
  node: AttributeMetaDatakeeper;
};

/** Fields which can be used to filter attribute meta datakeeper on. Value must be camel case. */
export enum AttributeMetaDatakeeperFilteringField {
  AttributeMetaUuid = 'attributeMetaUuid',
  Predicate = 'predicate'
}

/** Fields which can be used to sort attribute meta datakeeper on. Value must be camel case. */
export enum AttributeMetaDatakeeperSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute meta datakeeper. */
export type AttributeMetaDatakeeperSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeMetaDatakeeperSortEnum;
};

/** Attribute meta definition. */
export type AttributeMetaDigidentity = Model & {
  __typename?: 'AttributeMetaDigidentity';
  /** The attribute meta the digidentity meta belongs to. */
  attributeMeta: AttributeMeta;
  /** The claim of the attribute */
  claim: Scalars['NonEmpty']['output'];
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The attribute meta digidentity connection definition. */
export type AttributeMetaDigidentityConnection = {
  __typename?: 'AttributeMetaDigidentityConnection';
  edges: Array<Maybe<AttributeMetaDigidentityEdge>>;
  pageInfo: PageInfo;
};

/** The attribute meta digidentity edge definition. */
export type AttributeMetaDigidentityEdge = {
  __typename?: 'AttributeMetaDigidentityEdge';
  cursor: Scalars['String']['output'];
  node: AttributeMetaDigidentity;
};

/** Fields which can be used to filter attribute meta digidentity on. Value must be camel case. */
export enum AttributeMetaDigidentityFilteringField {
  AttributeMetaUuid = 'attributeMetaUuid',
  Claim = 'claim'
}

/** Fields which can be used to sort attribute meta digidentity on. Value must be camel case. */
export enum AttributeMetaDigidentitySortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute meta digidentity. */
export type AttributeMetaDigidentitySortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeMetaDigidentitySortEnum;
};

/** The attribute meta edge definition. */
export type AttributeMetaEdge = {
  __typename?: 'AttributeMetaEdge';
  cursor: Scalars['String']['output'];
  node: AttributeMeta;
};

/** Fields which can be used to filter attribute meta on. Value must be camel case. */
export enum AttributeMetaFilteringField {
  AttributeUuid = 'attributeUuid'
}

/** Attribute meta definition. */
export type AttributeMetaMdoc = Model & {
  __typename?: 'AttributeMetaMDOC';
  /** The attribute meta the mdoc meta belongs to. */
  attributeMeta: AttributeMeta;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The mdoc data element identifier */
  dataElementIdentifier: Scalars['NonEmpty']['output'];
  /** The mdoc namespace */
  namespace: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The attribute meta mdoc connection definition. */
export type AttributeMetaMdocConnection = {
  __typename?: 'AttributeMetaMDOCConnection';
  edges: Array<Maybe<AttributeMetaMdocEdge>>;
  pageInfo: PageInfo;
};

/** The attribute meta mdoc edge definition. */
export type AttributeMetaMdocEdge = {
  __typename?: 'AttributeMetaMDOCEdge';
  cursor: Scalars['String']['output'];
  node: AttributeMetaMdoc;
};

/** Fields which can be used to filter attribute meta mdoc on. Value must be camel case. */
export enum AttributeMetaMdocFilteringField {
  AttributeMetaUuid = 'attributeMetaUuid',
  JsonPath = 'jsonPath'
}

/** Fields which can be used to sort attribute meta mdoc on. Value must be camel case. */
export enum AttributeMetaMdocSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute meta mdoc. */
export type AttributeMetaMdocSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeMetaMdocSortEnum;
};

/** Attribute meta definition. */
export type AttributeMetaNlWallet = Model & {
  __typename?: 'AttributeMetaNLWallet';
  /** The attribute meta the NL Wallet meta belongs to. */
  attributeMeta: AttributeMeta;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The name of the attribute */
  name: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The attribute meta NL Wallet connection definition. */
export type AttributeMetaNlWalletConnection = {
  __typename?: 'AttributeMetaNLWalletConnection';
  edges: Array<Maybe<AttributeMetaNlWalletEdge>>;
  pageInfo: PageInfo;
};

/** The attribute meta NL Wallet edge definition. */
export type AttributeMetaNlWalletEdge = {
  __typename?: 'AttributeMetaNLWalletEdge';
  cursor: Scalars['String']['output'];
  node: AttributeMetaNlWallet;
};

/** Fields which can be used to filter attribute meta NL Wallet on. Value must be camel case. */
export enum AttributeMetaNlWalletFilteringField {
  AttributeMetaUuid = 'attributeMetaUuid',
  Field = 'field'
}

/** Fields which can be used to sort attribute meta NL Wallet on. Value must be camel case. */
export enum AttributeMetaNlWalletSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute meta NL Wallet. */
export type AttributeMetaNlWalletSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeMetaNlWalletSortEnum;
};

/** Attribute meta definition. */
export type AttributeMetaNect = Model & {
  __typename?: 'AttributeMetaNect';
  /** The attribute meta the nect meta belongs to. */
  attributeMeta: AttributeMeta;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The field of the attribute */
  field: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The attribute meta nect connection definition. */
export type AttributeMetaNectConnection = {
  __typename?: 'AttributeMetaNectConnection';
  edges: Array<Maybe<AttributeMetaNectEdge>>;
  pageInfo: PageInfo;
};

/** The attribute meta nect edge definition. */
export type AttributeMetaNectEdge = {
  __typename?: 'AttributeMetaNectEdge';
  cursor: Scalars['String']['output'];
  node: AttributeMetaNect;
};

/** Fields which can be used to filter attribute meta nect on. Value must be camel case. */
export enum AttributeMetaNectFilteringField {
  AttributeMetaUuid = 'attributeMetaUuid',
  Field = 'field'
}

/** Fields which can be used to sort attribute meta nect on. Value must be camel case. */
export enum AttributeMetaNectSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute meta nect. */
export type AttributeMetaNectSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeMetaNectSortEnum;
};

/** Attribute meta definition. */
export type AttributeMetaOid4Vcmdoc = Model & {
  __typename?: 'AttributeMetaOID4VCMDOC';
  /** The attribute meta the OID4VC meta belongs to. */
  attributeMeta: AttributeMeta;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The mdoc data element identifier */
  dataElementIdentifier: Scalars['NonEmpty']['output'];
  /** The mdoc namespace */
  namespace: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The attribute meta OID4VC connection definition. */
export type AttributeMetaOid4VcmdocConnection = {
  __typename?: 'AttributeMetaOID4VCMDOCConnection';
  edges: Array<Maybe<AttributeMetaOid4VcmdocEdge>>;
  pageInfo: PageInfo;
};

/** The attribute meta OID4VC edge definition. */
export type AttributeMetaOid4VcmdocEdge = {
  __typename?: 'AttributeMetaOID4VCMDOCEdge';
  cursor: Scalars['String']['output'];
  node: AttributeMetaOid4Vcmdoc;
};

/** Fields which can be used to filter attribute meta OID4VC on. Value must be camel case. */
export enum AttributeMetaOid4VcmdocFilteringField {
  AttributeMetaUuid = 'attributeMetaUuid',
  JsonPath = 'jsonPath'
}

/** Fields which can be used to sort attribute meta OID4VC on. Value must be camel case. */
export enum AttributeMetaOid4VcmdocSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute meta OID4VC. */
export type AttributeMetaOid4VcmdocSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeMetaOid4VcmdocSortEnum;
};

/** Attribute meta definition. */
export type AttributeMetaOid4Vcsdjwt = Model & {
  __typename?: 'AttributeMetaOID4VCSDJWT';
  /** The attribute meta the OID4VC meta belongs to. */
  attributeMeta: AttributeMeta;
  /** The Claim Path of the attribute */
  claimPath: Scalars['JSONObject']['output'];
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The JSON Path of the attribute */
  jsonPath: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The attribute meta OID4VC connection definition. */
export type AttributeMetaOid4VcsdjwtConnection = {
  __typename?: 'AttributeMetaOID4VCSDJWTConnection';
  edges: Array<Maybe<AttributeMetaOid4VcsdjwtEdge>>;
  pageInfo: PageInfo;
};

/** The attribute meta OID4VC edge definition. */
export type AttributeMetaOid4VcsdjwtEdge = {
  __typename?: 'AttributeMetaOID4VCSDJWTEdge';
  cursor: Scalars['String']['output'];
  node: AttributeMetaOid4Vcsdjwt;
};

/** Fields which can be used to filter attribute meta OID4VC on. Value must be camel case. */
export enum AttributeMetaOid4VcsdjwtFilteringField {
  AttributeMetaUuid = 'attributeMetaUuid',
  JsonPath = 'jsonPath'
}

/** Fields which can be used to sort attribute meta OID4VC on. Value must be camel case. */
export enum AttributeMetaOid4VcsdjwtSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute meta OID4VC. */
export type AttributeMetaOid4VcsdjwtSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeMetaOid4VcsdjwtSortEnum;
};

/** Attribute meta definition. */
export type AttributeMetaReadId = Model & {
  __typename?: 'AttributeMetaReadID';
  /** The attribute meta the ReadID meta belongs to. */
  attributeMeta: AttributeMeta;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The field of the attribute */
  field: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The attribute meta ReadID connection definition. */
export type AttributeMetaReadIdConnection = {
  __typename?: 'AttributeMetaReadIDConnection';
  edges: Array<Maybe<AttributeMetaReadIdEdge>>;
  pageInfo: PageInfo;
};

/** The attribute meta ReadID edge definition. */
export type AttributeMetaReadIdEdge = {
  __typename?: 'AttributeMetaReadIDEdge';
  cursor: Scalars['String']['output'];
  node: AttributeMetaReadId;
};

/** Fields which can be used to filter attribute meta ReadID on. Value must be camel case. */
export enum AttributeMetaReadIdFilteringField {
  AttributeMetaUuid = 'attributeMetaUuid',
  Field = 'field'
}

/** Fields which can be used to sort attribute meta ReadID on. Value must be camel case. */
export enum AttributeMetaReadIdSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute meta ReadID. */
export type AttributeMetaReadIdSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeMetaReadIdSortEnum;
};

/** Fields which can be used to sort attribute meta on. Value must be camel case. */
export enum AttributeMetaSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute meta. */
export type AttributeMetaSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeMetaSortEnum;
};

/** Attribute meta definition. */
export type AttributeMetaTruid = Model & {
  __typename?: 'AttributeMetaTruid';
  /** The attribute meta the truid meta belongs to. */
  attributeMeta: AttributeMeta;
  /** The claim of the attribute */
  claim: Scalars['NonEmpty']['output'];
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The datapoint of the attribute */
  datapoint: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The attribute meta truid connection definition. */
export type AttributeMetaTruidConnection = {
  __typename?: 'AttributeMetaTruidConnection';
  edges: Array<Maybe<AttributeMetaTruidEdge>>;
  pageInfo: PageInfo;
};

/** The attribute meta truid edge definition. */
export type AttributeMetaTruidEdge = {
  __typename?: 'AttributeMetaTruidEdge';
  cursor: Scalars['String']['output'];
  node: AttributeMetaTruid;
};

/** Fields which can be used to filter attribute meta truid on. Value must be camel case. */
export enum AttributeMetaTruidFilteringField {
  AttributeMetaUuid = 'attributeMetaUuid',
  Claim = 'claim'
}

/** Fields which can be used to sort attribute meta truid on. Value must be camel case. */
export enum AttributeMetaTruidSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute meta truid. */
export type AttributeMetaTruidSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeMetaTruidSortEnum;
};

/** Attribute meta type. */
export enum AttributeMetaType {
  Datakeeper = 'DATAKEEPER',
  Digidentity = 'DIGIDENTITY',
  Mdoc = 'MDOC',
  Nect = 'NECT',
  NlWallet = 'NL_WALLET',
  None = 'NONE',
  Oid4VcMdoc = 'OID4VC_MDOC',
  Oid4VcSdJwt = 'OID4VC_SD_JWT',
  Readid = 'READID',
  Truid = 'TRUID',
  Yivi = 'YIVI',
  Yoti = 'YOTI'
}

/** Attribute meta definition. */
export type AttributeMetaYivi = Model & {
  __typename?: 'AttributeMetaYivi';
  /** The attribute meta the yivi meta belongs to. */
  attributeMeta: AttributeMeta;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The identifier of the attribute */
  id?: Maybe<Scalars['NonEmpty']['output']>;
  /** The optional flag */
  optional?: Maybe<Scalars['Boolean']['output']>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The attribute meta yivi connection definition. */
export type AttributeMetaYiviConnection = {
  __typename?: 'AttributeMetaYiviConnection';
  edges: Array<Maybe<AttributeMetaYiviEdge>>;
  pageInfo: PageInfo;
};

/** The attribute meta yivi edge definition. */
export type AttributeMetaYiviEdge = {
  __typename?: 'AttributeMetaYiviEdge';
  cursor: Scalars['String']['output'];
  node: AttributeMetaYivi;
};

/** Fields which can be used to filter attribute meta yivi on. Value must be camel case. */
export enum AttributeMetaYiviFilteringField {
  AttributeMetaUuid = 'attributeMetaUuid',
  Id = 'id'
}

/** Fields which can be used to sort attribute meta yivi on. Value must be camel case. */
export enum AttributeMetaYiviSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute meta yivi. */
export type AttributeMetaYiviSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeMetaYiviSortEnum;
};

/** Attribute meta definition. */
export type AttributeMetaYoti = Model & {
  __typename?: 'AttributeMetaYoti';
  /** The attribute meta the yoti meta belongs to. */
  attributeMeta: AttributeMeta;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The identifier of the attribute */
  name: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The attribute meta yoti connection definition. */
export type AttributeMetaYotiConnection = {
  __typename?: 'AttributeMetaYotiConnection';
  edges: Array<Maybe<AttributeMetaYotiEdge>>;
  pageInfo: PageInfo;
};

/** The attribute meta yoti edge definition. */
export type AttributeMetaYotiEdge = {
  __typename?: 'AttributeMetaYotiEdge';
  cursor: Scalars['String']['output'];
  node: AttributeMetaYoti;
};

/** Fields which can be used to filter attribute meta yoti on. Value must be camel case. */
export enum AttributeMetaYotiFilteringField {
  AttributeMetaUuid = 'attributeMetaUuid',
  Name = 'name'
}

/** Fields which can be used to sort attribute meta yoti on. Value must be camel case. */
export enum AttributeMetaYotiSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute meta yoti. */
export type AttributeMetaYotiSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeMetaYotiSortEnum;
};

/** Attribute request. */
export type AttributeRequest = Model & {
  __typename?: 'AttributeRequest';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential, this attribute request belongs to */
  credentialRequest: CredentialRequest;
  /** The collection of locale */
  locale: AttributeRequestLocaleConnection;
  /** The meta */
  meta?: Maybe<AttributeRequestMeta>;
  /** The type of the attribute request meta */
  metaType: AttributeRequestMetaType;
  /** The name */
  name: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** Attribute request. */
export type AttributeRequestLocaleArgs = {
  input?: InputMaybe<FindManyAttributeRequestLocaleInput>;
};

/** The attribute request connection request. */
export type AttributeRequestConnection = {
  __typename?: 'AttributeRequestConnection';
  edges: Array<Maybe<AttributeRequestEdge>>;
  pageInfo: PageInfo;
};

/** The attribute request edge request. */
export type AttributeRequestEdge = {
  __typename?: 'AttributeRequestEdge';
  cursor: Scalars['String']['output'];
  node: AttributeRequest;
};

/** Fields which can be used to filter attribute request on. Value must be camel case. */
export enum AttributeRequestFilteringField {
  CreatedAt = 'createdAt',
  CredentialRequestUuid = 'credentialRequestUuid',
  Name = 'name',
  Type = 'type',
  Uuid = 'uuid'
}

/** Attribute locale definition. */
export type AttributeRequestLocale = Model & {
  __typename?: 'AttributeRequestLocale';
  /** The attribute the locale belongs to. */
  attributeRequest: AttributeRequest;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The i18n object */
  i18n: Scalars['JSONObject']['output'];
  /** The locale */
  locale: Scalars['Locale']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The attribute request locale connection definition. */
export type AttributeRequestLocaleConnection = {
  __typename?: 'AttributeRequestLocaleConnection';
  edges: Array<Maybe<AttributeRequestLocaleEdge>>;
  pageInfo: PageInfo;
};

/** The attribute request locale edge definition. */
export type AttributeRequestLocaleEdge = {
  __typename?: 'AttributeRequestLocaleEdge';
  cursor: Scalars['String']['output'];
  node: AttributeRequestLocale;
};

/** Fields which can be used to filter attribute request locale on. Value must be camel case. */
export enum AttributeRequestLocaleFilteringField {
  AttributeRequestUuid = 'attributeRequestUuid',
  Locale = 'locale'
}

/** Fields which can be used to sort attribute request locale on. Value must be camel case. */
export enum AttributeRequestLocaleSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute request locale. */
export type AttributeRequestLocaleSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeRequestLocaleSortEnum;
};

/** Attribute request meta. */
export type AttributeRequestMeta = Model & {
  __typename?: 'AttributeRequestMeta';
  /** The attribute request the meta belongs to. */
  attributeRequest: AttributeRequest;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The datakeeper attribute request meta */
  datakeeper?: Maybe<AttributeRequestMetaDatakeeper>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** The yivi attribute request meta */
  yivi?: Maybe<AttributeRequestMetaYivi>;
  /** The yoti attribute request meta */
  yoti?: Maybe<AttributeRequestMetaYoti>;
};

/** The attribute request meta connection request. */
export type AttributeRequestMetaConnection = {
  __typename?: 'AttributeRequestMetaConnection';
  edges: Array<Maybe<AttributeRequestMetaEdge>>;
  pageInfo: PageInfo;
};

/** Attribute request meta. */
export type AttributeRequestMetaDatakeeper = Model & {
  __typename?: 'AttributeRequestMetaDatakeeper';
  /** The attribute request meta the datakeeper meta belongs to. */
  attributeRequestMeta: AttributeRequestMeta;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The predicate of the attribute */
  predicate: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The attribute request meta datakeeper connection request. */
export type AttributeRequestMetaDatakeeperConnection = {
  __typename?: 'AttributeRequestMetaDatakeeperConnection';
  edges: Array<Maybe<AttributeRequestMetaDatakeeperEdge>>;
  pageInfo: PageInfo;
};

/** The attribute request meta datakeeper edge request. */
export type AttributeRequestMetaDatakeeperEdge = {
  __typename?: 'AttributeRequestMetaDatakeeperEdge';
  cursor: Scalars['String']['output'];
  node: AttributeRequestMetaDatakeeper;
};

/** Fields which can be used to filter attributeRequest meta datakeeper on. Value must be camel case. */
export enum AttributeRequestMetaDatakeeperFilteringField {
  AttributeRequestMetaUuid = 'attributeRequestMetaUuid',
  Predicate = 'predicate'
}

/** Fields which can be used to sort attribute request meta datakeeper on. Value must be camel case. */
export enum AttributeRequestMetaDatakeeperSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute request meta datakeeper. */
export type AttributeRequestMetaDatakeeperSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeRequestMetaDatakeeperSortEnum;
};

/** The attribute request meta edge request. */
export type AttributeRequestMetaEdge = {
  __typename?: 'AttributeRequestMetaEdge';
  cursor: Scalars['String']['output'];
  node: AttributeRequestMeta;
};

/** Fields which can be used to filter attribute request meta on. Value must be camel case. */
export enum AttributeRequestMetaFilteringField {
  AttributeRequestUuid = 'attributeRequestUuid'
}

/** Fields which can be used to sort attribute request meta on. Value must be camel case. */
export enum AttributeRequestMetaSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute request meta. */
export type AttributeRequestMetaSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeRequestMetaSortEnum;
};

/** Attribute request meta type. */
export enum AttributeRequestMetaType {
  Datakeeper = 'DATAKEEPER',
  None = 'NONE',
  Yivi = 'YIVI',
  Yoti = 'YOTI'
}

/** Attribute request meta. */
export type AttributeRequestMetaYivi = Model & {
  __typename?: 'AttributeRequestMetaYivi';
  /** The attribute request meta the yivi meta belongs to. */
  attributeRequestMeta: AttributeRequestMeta;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The identifier of this attribute. */
  id?: Maybe<Scalars['NonEmpty']['output']>;
  /** Whether this attribute is optional or not */
  optional: Scalars['Boolean']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The attribute request meta yivi connection request. */
export type AttributeRequestMetaYiviConnection = {
  __typename?: 'AttributeRequestMetaYiviConnection';
  edges: Array<Maybe<AttributeRequestMetaYiviEdge>>;
  pageInfo: PageInfo;
};

/** The attribute request meta yivi edge request. */
export type AttributeRequestMetaYiviEdge = {
  __typename?: 'AttributeRequestMetaYiviEdge';
  cursor: Scalars['String']['output'];
  node: AttributeRequestMetaYivi;
};

/** Fields which can be used to filter attributeRequest meta yivi on. Value must be camel case. */
export enum AttributeRequestMetaYiviFilteringField {
  AttributeRequestMetaUuid = 'attributeRequestMetaUuid',
  Id = 'id',
  Optional = 'optional'
}

/** Fields which can be used to sort attribute request meta yivi on. Value must be camel case. */
export enum AttributeRequestMetaYiviSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute request meta yivi. */
export type AttributeRequestMetaYiviSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeRequestMetaYiviSortEnum;
};

/** Attribute request meta. */
export type AttributeRequestMetaYoti = Model & {
  __typename?: 'AttributeRequestMetaYoti';
  /** The attribute request meta the yoti meta belongs to. */
  attributeRequestMeta: AttributeRequestMeta;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The identifier of the attribute */
  identifier: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The attribute request meta yoti connection request. */
export type AttributeRequestMetaYotiConnection = {
  __typename?: 'AttributeRequestMetaYotiConnection';
  edges: Array<Maybe<AttributeRequestMetaYotiEdge>>;
  pageInfo: PageInfo;
};

/** The attribute request meta yoti edge request. */
export type AttributeRequestMetaYotiEdge = {
  __typename?: 'AttributeRequestMetaYotiEdge';
  cursor: Scalars['String']['output'];
  node: AttributeRequestMetaYoti;
};

/** Fields which can be used to filter attributeRequest meta yoti on. Value must be camel case. */
export enum AttributeRequestMetaYotiFilteringField {
  AttributeRequestMetaUuid = 'attributeRequestMetaUuid',
  Identifier = 'identifier'
}

/** Fields which can be used to sort attribute request meta yoti on. Value must be camel case. */
export enum AttributeRequestMetaYotiSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute request meta yoti. */
export type AttributeRequestMetaYotiSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeRequestMetaYotiSortEnum;
};

/** Fields which can be used to sort attribute request on. Value must be camel case. */
export enum AttributeRequestSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  Type = 'type'
}

/** Input options for sorting attribute request. */
export type AttributeRequestSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeRequestSortEnum;
};

/** Fields which can be used to sort attribute on. Value must be camel case. */
export enum AttributeSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  State = 'state'
}

/** Input options for sorting attribute. */
export type AttributeSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeSortEnum;
};

/** A response to a successful login */
export type Authentication = {
  __typename?: 'Authentication';
  /** The login response token. */
  token: Scalars['NonEmpty']['output'];
};

/** Login by client credentials input */
export type AuthenticationByClientCredentialsInput = {
  /** The client identifier */
  client_id: Scalars['NonEmpty']['input'];
  /** The client secret */
  client_secret: Scalars['NonEmpty']['input'];
};

/** Login by OpenID token input */
export type AuthenticationByOpenIdTokenInput = {
  /** The OAuth provider UUID */
  oauthProviderUuid?: InputMaybe<Scalars['UUID']['input']>;
  /** The organization UUID. */
  organizationUuid?: InputMaybe<Scalars['UUID']['input']>;
  /** The open id token which is obtained via SSI or an external OAuth provider. */
  token: Scalars['NonEmpty']['input'];
};

/** Login by password input */
export type AuthenticationByPasswordInput = {
  /** The email which we should use to log in the user. */
  email: Scalars['Email']['input'];
  /** The organization UUID. */
  organizationUuid?: InputMaybe<Scalars['UUID']['input']>;
  /** The password which we should use to log in the user. */
  password: Scalars['Password']['input'];
};

/** Billing definition. */
export type Billing = Model & {
  __typename?: 'Billing';
  /** A list of billing methods */
  billingMethods: BillingMethodConnection;
  /** A list of billing plans */
  billingPlans: BillingPlanConnection;
  /** The wallets */
  billingWallets: BillingWalletConnection;
  /** The user creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The organization the user belongs to. */
  organization: Organization;
  /** The user update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** Billing definition. */
export type BillingBillingMethodsArgs = {
  input?: InputMaybe<FindManyBillingMethodsInput>;
};


/** Billing definition. */
export type BillingBillingPlansArgs = {
  input?: InputMaybe<FindManyBillingPlansInput>;
};


/** Billing definition. */
export type BillingBillingWalletsArgs = {
  input?: InputMaybe<FindManyBillingWalletsInput>;
};

export type BillingConnection = {
  __typename?: 'BillingConnection';
  edges: Array<BillingEdge>;
  pageInfo: PageInfo;
};

export type BillingEdge = {
  __typename?: 'BillingEdge';
  cursor: Scalars['String']['output'];
  node: Billing;
};

/** Fields which can be used to filter billings on. Value must be camel case. */
export enum BillingFilteringField {
  OrganizationUuid = 'organizationUuid',
  Uuid = 'uuid'
}

/** BillingMethod definition. */
export type BillingMethod = Model & {
  __typename?: 'BillingMethod';
  /** Billing */
  billing: Billing;
  /** The user creation time */
  createdAt: Scalars['DateTime']['output'];
  /** isDefault */
  isDefault: Scalars['Boolean']['output'];
  /** PaymentProviderMethod */
  paymentProviderMethod: PaymentProviderMethod;
  /** The user update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

export type BillingMethodConnection = {
  __typename?: 'BillingMethodConnection';
  edges: Array<BillingMethodEdge>;
  pageInfo: PageInfo;
};

export type BillingMethodEdge = {
  __typename?: 'BillingMethodEdge';
  cursor: Scalars['String']['output'];
  node: BillingMethod;
};

/** Fields which can be used to filter billings on. Value must be camel case. */
export enum BillingMethodFilteringField {
  BillingUuid = 'billingUuid',
  IsDefault = 'isDefault',
  Uuid = 'uuid'
}

/** Fields which can be used to sort billings on. Value must be camel case. */
export enum BillingMethodSortEnum {
  BillingUuid = 'billingUuid',
  CreatedAt = 'createdAt',
  IsDefault = 'isDefault',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting billings. */
export type BillingMethodSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: BillingMethodSortEnum;
};

/** BillingPlan definition. */
export type BillingPlan = Model & {
  __typename?: 'BillingPlan';
  /** autoRenew */
  autoRenew: Scalars['Boolean']['output'];
  /** Billing */
  billing: Billing;
  /** The cancelled time */
  cancelledAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The expired time */
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  /** graced */
  graced: Scalars['Boolean']['output'];
  /** startNow */
  startNow: Scalars['Boolean']['output'];
  /** The state */
  state: BillingPlanState;
  /** StudioPlanInterval */
  studioPlanInterval: StudioPlanInterval;
  /** The user update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

export type BillingPlanConnection = {
  __typename?: 'BillingPlanConnection';
  edges: Array<BillingPlanEdge>;
  pageInfo: PageInfo;
};

export type BillingPlanEdge = {
  __typename?: 'BillingPlanEdge';
  cursor: Scalars['String']['output'];
  node: BillingPlan;
};

/** Fields which can be used to filter billings on. Value must be camel case. */
export enum BillingPlanFilteringField {
  BillingUuid = 'billingUuid',
  State = 'state',
  StudioPlanIntervalUuid = 'studioPlanIntervalUuid',
  Uuid = 'uuid'
}

/** BillingPlanPayment definition. */
export type BillingPlanPayment = Model & {
  __typename?: 'BillingPlanPayment';
  /** Billing */
  billingPlan: BillingPlan;
  /** Billing tx */
  billingWalletTransaction: BillingWalletTransaction;
  /** The user creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The interval end time */
  intervalEndAt?: Maybe<Scalars['DateTime']['output']>;
  /** The interval start time */
  intervalStartAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

export type BillingPlanPaymentConnection = {
  __typename?: 'BillingPlanPaymentConnection';
  edges: Array<BillingPlanPaymentEdge>;
  pageInfo: PageInfo;
};

export type BillingPlanPaymentEdge = {
  __typename?: 'BillingPlanPaymentEdge';
  cursor: Scalars['String']['output'];
  node: BillingPlanPayment;
};

/** Fields which can be used to filter billings on. Value must be camel case. */
export enum BillingPlanPaymentFilteringField {
  BillingPlanUuid = 'billingPlanUuid',
  BillingWalletTransactionUuid = 'billingWalletTransactionUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort billings on. Value must be camel case. */
export enum BillingPlanPaymentSortEnum {
  BillingPlanUuid = 'billingPlanUuid',
  BillingWalletTransactionUuid = 'billingWalletTransactionUuid',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting billings. */
export type BillingPlanPaymentSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: BillingPlanPaymentSortEnum;
};

/** Fields which can be used to sort billings on. Value must be camel case. */
export enum BillingPlanSortEnum {
  CreatedAt = 'createdAt',
  State = 'state',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting billings. */
export type BillingPlanSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: BillingPlanSortEnum;
};

/** BillingPlanState */
export enum BillingPlanState {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  Pending = 'PENDING'
}

/** Fields which can be used to sort billings on. Value must be camel case. */
export enum BillingSortEnum {
  CreatedAt = 'createdAt',
  OrganizationUuid = 'organizationUuid',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting billings. */
export type BillingSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: BillingSortEnum;
};

/** BillingWallet definition. */
export type BillingWallet = Model & {
  __typename?: 'BillingWallet';
  /** autoRenew */
  autoRenew?: Maybe<Scalars['Boolean']['output']>;
  /** autoRenewAmount */
  autoRenewAmount?: Maybe<Scalars['UInt']['output']>;
  /** autoRenewThreshold */
  autoRenewThreshold?: Maybe<Scalars['UInt']['output']>;
  /** Balance */
  balance?: Maybe<Scalars['Int']['output']>;
  /** The organization the user belongs to. */
  billing: Billing;
  /** A list of billing payments */
  billingWalletPayments: BillingWalletPaymentConnection;
  /** A list of billing transactions */
  billingWalletTransactions: BillingWalletTransactionConnection;
  /** The user creation time */
  createdAt: Scalars['DateTime']['output'];
  /** Currency */
  currency: Currency;
  /** Currency */
  currencyUnit: CurrencyUnit;
  /** Minimum balance */
  minimumBalance?: Maybe<Scalars['Int']['output']>;
  /** The user update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** BillingWallet definition. */
export type BillingWalletBillingWalletPaymentsArgs = {
  input?: InputMaybe<FindManyBillingWalletPaymentsInput>;
};


/** BillingWallet definition. */
export type BillingWalletBillingWalletTransactionsArgs = {
  input?: InputMaybe<FindManyBillingWalletTransactionsInput>;
};

/** BillingWalletAction */
export enum BillingWalletAction {
  Charge = 'CHARGE',
  GiveCredit = 'GIVE_CREDIT'
}

export type BillingWalletConnection = {
  __typename?: 'BillingWalletConnection';
  edges: Array<BillingWalletEdge>;
  pageInfo: PageInfo;
};

export type BillingWalletEdge = {
  __typename?: 'BillingWalletEdge';
  cursor: Scalars['String']['output'];
  node: BillingWallet;
};

/** Fields which can be used to filter billings on. Value must be camel case. */
export enum BillingWalletFilteringField {
  BillingUuid = 'billingUuid',
  Currency = 'currency',
  Uuid = 'uuid'
}

/** BillingWalletPayment definition. */
export type BillingWalletPayment = Model & {
  __typename?: 'BillingWalletPayment';
  /** Billing */
  billingWallet: BillingWallet;
  /** Billing tx */
  billingWalletTransaction: BillingWalletTransaction;
  /** The user creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The interval end time */
  intervalEndAt?: Maybe<Scalars['DateTime']['output']>;
  /** The interval start time */
  intervalStartAt?: Maybe<Scalars['DateTime']['output']>;
  /** Invoice */
  paymentProviderInvoice: PaymentProviderInvoice;
  /** The type of the payment */
  type: BillingWalletPaymentType;
  /** The user update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

export type BillingWalletPaymentConnection = {
  __typename?: 'BillingWalletPaymentConnection';
  edges: Array<BillingWalletPaymentEdge>;
  pageInfo: PageInfo;
};

export type BillingWalletPaymentEdge = {
  __typename?: 'BillingWalletPaymentEdge';
  cursor: Scalars['String']['output'];
  node: BillingWalletPayment;
};

/** Fields which can be used to filter billings on. Value must be camel case. */
export enum BillingWalletPaymentFilteringField {
  BillingWalletTransactionUuid = 'billingWalletTransactionUuid',
  BillingWalletUuid = 'billingWalletUuid',
  PaymentProviderInvoiceUuid = 'paymentProviderInvoiceUuid',
  Type = 'type',
  Uuid = 'uuid'
}

/** Fields which can be used to sort billings on. Value must be camel case. */
export enum BillingWalletPaymentSortEnum {
  BillingWalletTransactionUuid = 'billingWalletTransactionUuid',
  BillingWalletUuid = 'billingWalletUuid',
  CreatedAt = 'createdAt',
  PaymentProviderInvoiceUuid = 'paymentProviderInvoiceUuid',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting billings. */
export type BillingWalletPaymentSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: BillingWalletPaymentSortEnum;
};

/** Fields which can be used to filter billings on. Value must be camel case. */
export enum BillingWalletPaymentType {
  FreeCredit = 'FREE_CREDIT',
  TopUpManual = 'TOP_UP_MANUAL',
  TopUpSystem = 'TOP_UP_SYSTEM'
}

/** Fields which can be used to sort billings on. Value must be camel case. */
export enum BillingWalletSortEnum {
  BillingUuid = 'billingUuid',
  CreatedAt = 'createdAt',
  Currency = 'currency',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting billings. */
export type BillingWalletSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: BillingWalletSortEnum;
};

/** BillingWalletTransaction definition. */
export type BillingWalletTransaction = Model & {
  __typename?: 'BillingWalletTransaction';
  /** amount */
  amount: Scalars['Int']['output'];
  /** Billing Plan Payment */
  billingPlanPayment?: Maybe<BillingPlanPayment>;
  /** Billing */
  billingWallet: BillingWallet;
  /** Billing Wallet Payment */
  billingWalletPayment?: Maybe<BillingWalletPayment>;
  /** The user creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The resourceURN */
  resourceURN: Scalars['NonEmpty']['output'];
  /** State */
  state: BillingWalletTransactionState;
  /** The user update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

export type BillingWalletTransactionConnection = {
  __typename?: 'BillingWalletTransactionConnection';
  edges: Array<BillingWalletTransactionEdge>;
  pageInfo: PageInfo;
};

export type BillingWalletTransactionEdge = {
  __typename?: 'BillingWalletTransactionEdge';
  cursor: Scalars['String']['output'];
  node: BillingWalletTransaction;
};

/** Fields which can be used to filter billings on. Value must be camel case. */
export enum BillingWalletTransactionFilteringField {
  Amount = 'amount',
  BillingWalletUuid = 'billingWalletUuid',
  ResourceUrn = 'resourceURN',
  State = 'state',
  Uuid = 'uuid'
}

/** Fields which can be used to sort billings on. Value must be camel case. */
export enum BillingWalletTransactionSortEnum {
  Amount = 'amount',
  BillingWalletUuid = 'billingWalletUuid',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting billings. */
export type BillingWalletTransactionSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: BillingWalletTransactionSortEnum;
};

/** Transaction states */
export enum BillingWalletTransactionState {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Succeeded = 'SUCCEEDED'
}

/** Output type used for billing method configuration */
export type ConfigBillingMethodOutput = {
  __typename?: 'ConfigBillingMethodOutput';
  /** A client publishable key required to setup payment */
  publishableKey: Scalars['NonEmpty']['output'];
};

/** Constants */
export type Constants = {
  __typename?: 'Constants';
  /** The JWT media types */
  jwtMediaTypes: Array<Scalars['NonEmpty']['output']>;
  /** The studio control urns */
  studioControlUrns: Array<Scalars['NonEmpty']['output']>;
  /** The studio event urns */
  studioEventUrns: Array<Scalars['NonEmpty']['output']>;
  /** The studio plan urns */
  studioPlanUrns: Array<Scalars['NonEmpty']['output']>;
  /** The studio resource urns */
  studioResourceUrns: Array<Scalars['NonEmpty']['output']>;
};

/** The input for creating a app. */
export type CreateAppInput = {
  /** The base64Logo of the app. */
  base64Logo: Scalars['NonEmpty']['input'];
  /** The name of the app. */
  name: Scalars['NonEmpty']['input'];
};

/** The input for creating a app locale. */
export type CreateAppLocaleInput = {
  /** The uuid of the app. */
  appUuid: Scalars['UUID']['input'];
  /** The i18n object */
  i18n: Scalars['JSONObject']['input'];
  /** The locale */
  locale: Scalars['Locale']['input'];
};

/** The input for creating a app prerequisite. */
export type CreateAppPrerequisiteInput = {
  /** The UUID of the app. */
  appUuid: Scalars['UUID']['input'];
  /** Is prerequisite required for issuance. */
  forIssuance?: InputMaybe<Scalars['Boolean']['input']>;
  /** Is prerequisite required for verification. */
  forVerification?: InputMaybe<Scalars['Boolean']['input']>;
  /** The name of the app prerequisite. */
  name: AppPrerequisites;
};

/** The input for creating a appPrerequisite locale. */
export type CreateAppPrerequisiteLocaleInput = {
  /** The uuid of the appPrerequisite. */
  appPrerequisiteUuid: Scalars['UUID']['input'];
  /** The i18n object */
  i18n: Scalars['JSONObject']['input'];
  /** The locale */
  locale: Scalars['Locale']['input'];
};

/** The input for creating a app prerequisite state. */
export type CreateAppPrerequisiteStateInput = {
  /** The app prerequisite. */
  appPrerequisiteUuid: Scalars['UUID']['input'];
  /** The name of the state. */
  name: AppPrerequisiteStates;
  /** The roles allowed to take action. */
  roles?: InputMaybe<Array<OrganizationUserRole>>;
  /** The json schema for the required meta. */
  schema?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The transition map. */
  transitionTo?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

/** The input for creating a appPrerequisiteState locale. */
export type CreateAppPrerequisiteStateLocaleInput = {
  /** The uuid of the appPrerequisiteState. */
  appPrerequisiteStateUuid: Scalars['UUID']['input'];
  /** The i18n object */
  i18n: Scalars['JSONObject']['input'];
  /** The locale */
  locale: Scalars['Locale']['input'];
};

/** The input for creating a attribute. */
export type CreateAttributeInput = {
  /** The categories of the attribute */
  categories?: InputMaybe<Array<AttributeCategoryType>>;
  /** The uuid of the credential, this attribute belongs to. */
  credentialUuid: Scalars['UUID']['input'];
  /** The meta type of the attribute */
  metaType: AttributeMetaType;
  /** The name of the attribute. */
  name: Scalars['NonEmpty']['input'];
};

/** The input for creating a attribute locale. */
export type CreateAttributeLocaleInput = {
  /** The uuid of the attribute. */
  attributeUuid: Scalars['UUID']['input'];
  /** The i18n object */
  i18n: Scalars['JSONObject']['input'];
  /** The locale */
  locale: Scalars['Locale']['input'];
};

/** The input for creating a attribute meta datakeeper. */
export type CreateAttributeMetaDatakeeperInput = {
  /** The attribute UUID */
  attributeUuid: Scalars['UUID']['input'];
  /** The predicate of the attribute */
  predicate: Scalars['NonEmpty']['input'];
};

/** The input for creating a attribute meta digidentity. */
export type CreateAttributeMetaDigidentityInput = {
  /** The attribute UUID */
  attributeUuid: Scalars['UUID']['input'];
  /** The claim of the attribute */
  claim: Scalars['NonEmpty']['input'];
};

/** The input for creating a attribute meta mdoc. */
export type CreateAttributeMetaMdocInput = {
  /** The attribute UUID */
  attributeUuid: Scalars['UUID']['input'];
  /** The mdoc data element identifier */
  dataElementIdentifier: Scalars['NonEmpty']['input'];
  /** The mdoc namespace */
  namespace: Scalars['NonEmpty']['input'];
};

/** The input for creating a attribute meta NL Wallet. */
export type CreateAttributeMetaNlWalletInput = {
  /** The attribute UUID */
  attributeUuid: Scalars['UUID']['input'];
  /** The name of the attribute */
  name: Scalars['NonEmpty']['input'];
};

/** The input for creating a attribute meta nect. */
export type CreateAttributeMetaNectInput = {
  /** The attribute UUID */
  attributeUuid: Scalars['UUID']['input'];
  /** The field of the attribute */
  field: Scalars['NonEmpty']['input'];
};

/** The input for creating a attribute meta OID4VC. */
export type CreateAttributeMetaOid4VcmdocInput = {
  /** The attribute UUID */
  attributeUuid: Scalars['UUID']['input'];
  /** The mdoc data element identifier */
  dataElementIdentifier: Scalars['NonEmpty']['input'];
  /** The mdoc namespace */
  namespace: Scalars['NonEmpty']['input'];
};

/** The input for creating a attribute meta OID4VC. */
export type CreateAttributeMetaOid4VcsdjwtInput = {
  /** The attribute UUID */
  attributeUuid: Scalars['UUID']['input'];
  /** The Claim Path of the attribute */
  claimPath: Scalars['JSONObject']['input'];
  /** The JSON Path of the attribute */
  jsonPath: Scalars['NonEmpty']['input'];
};

/** The input for creating a attribute meta ReadID. */
export type CreateAttributeMetaReadIdInput = {
  /** The attribute UUID */
  attributeUuid: Scalars['UUID']['input'];
  /** The field of the attribute */
  field: Scalars['NonEmpty']['input'];
};

/** The input for creating a attribute meta truid. */
export type CreateAttributeMetaTruidInput = {
  /** The attribute UUID */
  attributeUuid: Scalars['UUID']['input'];
  /** The claim of the attribute */
  claim: Scalars['NonEmpty']['input'];
  /** The datapoint of the attribute */
  datapoint: Scalars['NonEmpty']['input'];
};

/** The input for creating a attribute meta yivi. */
export type CreateAttributeMetaYiviInput = {
  /** The attribute UUID */
  attributeUuid: Scalars['UUID']['input'];
  /** The identifier of the attribute */
  id: Scalars['NonEmpty']['input'];
  /** The optional flag */
  optional?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The input for creating a attribute meta yoti. */
export type CreateAttributeMetaYotiInput = {
  /** The attribute UUID */
  attributeUuid: Scalars['UUID']['input'];
  /** The identifier of the attribute */
  name: Scalars['NonEmpty']['input'];
};

/** The input for creating a attribute request. */
export type CreateAttributeRequestInput = {
  /** The uuid of the credential request, this attribute request belongs to. */
  credentialRequestUuid: Scalars['UUID']['input'];
  /** The name of the attribute request. */
  name: Scalars['NonEmpty']['input'];
};

/** The input for creating a attribute request locale. */
export type CreateAttributeRequestLocaleInput = {
  /** The uuid of the attribute. */
  attributeRequestUuid: Scalars['UUID']['input'];
  /** The i18n object */
  i18n: Scalars['JSONObject']['input'];
  /** The locale */
  locale: Scalars['Locale']['input'];
};

/** The input for creating a attribute request meta datakeeper. */
export type CreateAttributeRequestMetaDatakeeperInput = {
  /** The attribute request UUID */
  attributeRequestUuid: Scalars['UUID']['input'];
  /** The predicate of the attribute */
  predicate: Scalars['NonEmpty']['input'];
};

/** The input for creating a attribute request meta yivi. */
export type CreateAttributeRequestMetaYiviInput = {
  /** The attribute request UUID */
  attributeRequestUuid: Scalars['UUID']['input'];
  /** The identifier of this attribute. */
  id?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** Whether this attribute is optional or not */
  optional: Scalars['Boolean']['input'];
};

/** The input for creating a attribute request meta yoti. */
export type CreateAttributeRequestMetaYotiInput = {
  /** The attribute request UUID */
  attributeRequestUuid: Scalars['UUID']['input'];
  /** The identifier of the attribute */
  identifier: Scalars['NonEmpty']['input'];
};

export type CreateAuthenticationResetInput = {
  /** The email of the user which we're resetting the password of. */
  email: Scalars['Email']['input'];
};

/** Input type used to create billing plan types. */
export type CreateBillingPlanInput = {
  /** autoRenew */
  autoRenew: Scalars['Boolean']['input'];
  /** The uuid of billing */
  billingUuid: Scalars['UUID']['input'];
  /** startNow */
  startNow: Scalars['Boolean']['input'];
  /** The studio plan interval uuid */
  studioPlanIntervalUuid: Scalars['UUID']['input'];
};

/** Input type used to create billing types. */
export type CreateBillingWalletInput = {
  /** autoRenew */
  autoRenew: Scalars['Boolean']['input'];
  /** autoRenewAmount */
  autoRenewAmount: Scalars['UInt']['input'];
  /** autoRenewThreshold */
  autoRenewThreshold: Scalars['UInt']['input'];
  /** The uuid of billing */
  billingUuid: Scalars['UUID']['input'];
  /** The currency */
  currency: Currency;
  /** The currency */
  currencyUnit: CurrencyUnit;
};

/** The input for creating a credential. */
export type CreateCredentialInput = {
  /** The categories of the credential */
  categories?: InputMaybe<Array<CredentialCategoryType>>;
  /** The uuid of the issuer, this credential belongs to. */
  issuerUuid: Scalars['UUID']['input'];
  /** The meta type of the credential */
  metaType: CredentialMetaType;
  /** The name of the credential. */
  name: Scalars['NonEmpty']['input'];
};

/** The input for creating a credential locale. */
export type CreateCredentialLocaleInput = {
  /** The uuid of the credential. */
  credentialUuid: Scalars['UUID']['input'];
  /** The i18n object */
  i18n: Scalars['JSONObject']['input'];
  /** The locale */
  locale: Scalars['Locale']['input'];
};

/** The input for creating a credential meta datakeeper. */
export type CreateCredentialMetaDatakeeperInput = {
  /** The context of the credential */
  context: Scalars['NonEmpty']['input'];
  /** The credential UUID */
  credentialUuid: Scalars['UUID']['input'];
};

/** The input for creating a credential meta digidentity. */
export type CreateCredentialMetaDigidentityInput = {
  /** The credential UUID */
  credentialUuid: Scalars['UUID']['input'];
  /** The scope of the credential */
  scope: Scalars['NonEmpty']['input'];
};

/** The input for creating a credential meta mdoc. */
export type CreateCredentialMetaMdocInput = {
  /** The credential UUID */
  credentialUuid: Scalars['UUID']['input'];
  /** mdoc document type */
  docType: Scalars['NonEmpty']['input'];
};

/** The input for creating a credential meta NL Wallet. */
export type CreateCredentialMetaNlWalletInput = {
  /** The credential UUID */
  credentialUuid: Scalars['UUID']['input'];
  /** The docType of the credential */
  docType: Scalars['String']['input'];
  /** The namespace of the credential */
  nameSpace?: InputMaybe<Scalars['String']['input']>;
};

/** The input for creating a credential meta nect. */
export type CreateCredentialMetaNectInput = {
  /** The credential UUID */
  credentialUuid: Scalars['UUID']['input'];
  /** The intent of the credential */
  intent: Scalars['Int']['input'];
};

/** The input for creating a credential meta OID4VC mdoc. */
export type CreateCredentialMetaOid4VcmdocInput = {
  /** The credential UUID */
  credentialUuid: Scalars['UUID']['input'];
  /** mdoc document type */
  docType: Scalars['NonEmpty']['input'];
};

/** The input for creating a credential meta OID4VC SD-JWT. */
export type CreateCredentialMetaOid4VcsdjwtInput = {
  /** The credential UUID */
  credentialUuid: Scalars['UUID']['input'];
  /** SD-JWT Key binding */
  keyBinding: Scalars['Boolean']['input'];
  /** SD-JWT Type */
  type: Scalars['NonEmpty']['input'];
};

/** The input for creating a credential meta ReadID. */
export type CreateCredentialMetaReadIdInput = {
  /** The credential UUID */
  credentialUuid: Scalars['UUID']['input'];
  /** The document type of the credential */
  documentType: CredentialMetaReadIdDocumentType;
};

/** The input for creating a credential meta truid. */
export type CreateCredentialMetaTruidInput = {
  /** The credential UUID */
  credentialUuid: Scalars['UUID']['input'];
  /** The scope of the credential */
  scope: Scalars['NonEmpty']['input'];
};

/** The input for creating a credential meta yivi. */
export type CreateCredentialMetaYiviInput = {
  /** The credential UUID */
  credentialUuid: Scalars['UUID']['input'];
  /** The identifier of the credential */
  id: Scalars['NonEmpty']['input'];
};

/** The input for creating a credential meta yoti. */
export type CreateCredentialMetaYotiInput = {
  /** The credential UUID */
  credentialUuid: Scalars['UUID']['input'];
  /** The grouping predicate */
  groupingPredicate?: InputMaybe<Scalars['String']['input']>;
  /** The flag if grouping is allowed */
  isGroupingAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  /** The flag if source constraint available */
  isSourceConstraintAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  /** The name of the credential */
  name: Scalars['NonEmpty']['input'];
};

/** The input for creating a credential request. */
export type CreateCredentialRequestInput = {
  /** The name of the credential request. */
  name: Scalars['NonEmpty']['input'];
  /** The uuid of the organization. */
  organizationUuid: Scalars['UUID']['input'];
  /** The uuid of the provider. */
  providerUuid: Scalars['UUID']['input'];
};

/** The input for creating a credential request locale. */
export type CreateCredentialRequestLocaleInput = {
  /** The uuid of the credential. */
  credentialRequestUuid: Scalars['UUID']['input'];
  /** The i18n object */
  i18n: Scalars['JSONObject']['input'];
  /** The locale */
  locale: Scalars['Locale']['input'];
};

/** The input for creating a credential request meta datakeeper. */
export type CreateCredentialRequestMetaDatakeeperInput = {
  /** The context of the credential */
  context: Scalars['NonEmpty']['input'];
  /** The credential request UUID */
  credentialRequestUuid: Scalars['UUID']['input'];
  /** The expiration date of the credential */
  expirationDate?: InputMaybe<Scalars['DateTime']['input']>;
};

/** The input for creating a credential request meta yivi. */
export type CreateCredentialRequestMetaYiviInput = {
  /** The credential request UUID */
  credentialRequestUuid: Scalars['UUID']['input'];
  /** The identifier of this credential */
  id?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** The input for creating a credential request meta yoti. */
export type CreateCredentialRequestMetaYotiInput = {
  /** The display configuration category of the credential */
  category: CredentialRequestMetaYotiCategoryType;
  /** The credential request UUID */
  credentialRequestUuid: Scalars['UUID']['input'];
  /** The icon of the credential */
  icon: Scalars['NonEmpty']['input'];
  /** The identifier of the credential */
  identifier: Scalars['NonEmpty']['input'];
  /** The info uri of the credential */
  infoUri: Scalars['URL']['input'];
  /** The display configuration logo of the credential */
  logo?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The display configuration subtitle of the credential */
  subtitle: Scalars['NonEmpty']['input'];
  /** The display configuration title of the credential */
  title: Scalars['NonEmpty']['input'];
};

/** The input for creating a credential request state. */
export type CreateCredentialRequestStateInput = {
  /** Is delete allowed */
  canDelete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Is update allowed */
  canUpdate?: InputMaybe<Scalars['Boolean']['input']>;
  /** The name of the state */
  name: CredentialRequestStates;
  /** The provider UUID */
  providerUuid: Scalars['UUID']['input'];
  /** The roles allowed to take action */
  roles?: InputMaybe<Array<OrganizationUserRole>>;
  /** The json schema for the required meta */
  schema?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The transition map */
  transitionTo?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

/** The input for creating a credentialRequestState locale. */
export type CreateCredentialRequestStateLocaleInput = {
  /** The uuid of the credentialRequestState. */
  credentialRequestStateUuid: Scalars['UUID']['input'];
  /** The i18n object */
  i18n: Scalars['JSONObject']['input'];
  /** The locale */
  locale: Scalars['Locale']['input'];
};

/** Create input */
export type CreateFlowAuthenticationBrandInput = {
  /** The UUID of the organization the brand belongs to. */
  flowAuthenticationUuid: Scalars['UUID']['input'];
  /** The UUID of the flow brand */
  organizationBrandUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateFlowAuthenticationDomainInput = {
  /** The UUID of the organization the domain belongs to. */
  flowAuthenticationUuid: Scalars['UUID']['input'];
  /** The UUID of the flow domain */
  organizationDomainUuid: Scalars['UUID']['input'];
  /** The path value. */
  redirectPath: Scalars['RedirectPath']['input'];
  /** The port value. */
  redirectPort: Scalars['RedirectPort']['input'];
  /** The protocol value. */
  redirectProtocol: Scalars['RedirectProtocol']['input'];
};

/** The input for creating a flow authentication. */
export type CreateFlowAuthenticationInput = {
  /** The name of the flow. */
  name: Scalars['NonEmpty']['input'];
  /** The uuid of the organization the flow belongs to. */
  organizationUuid: Scalars['UUID']['input'];
};

/** Create Input */
export type CreateFlowAuthenticationProviderConfigurationNlWalletInput = {
  /** The FlowAuthenticationProvider UUID */
  flowAuthenticationProviderUuid: Scalars['UUID']['input'];
  /** The usecase */
  usecase: Scalars['String']['input'];
};

/** The input for creating a flow authentication provider. */
export type CreateFlowAuthenticationProviderInput = {
  /** The uuid of the flow the flow provider belongs to. */
  flowAuthenticationUuid: Scalars['UUID']['input'];
  /** The uuid of the flow provider app. */
  providerAppUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow authentication scope. */
export type CreateFlowAuthenticationScopeInput = {
  /** The uuid of the provider. */
  flowAuthenticationProviderUuid: Scalars['UUID']['input'];
  /** The scope name */
  scopeUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow disclosure attribute. */
export type CreateFlowDisclosureAttributeInput = {
  /** The uuid of the flow attribute. */
  attributeUuid: Scalars['UUID']['input'];
  /** The uuid of the query the attribute belongs to. */
  flowDisclosureCredentialUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateFlowDisclosureBrandInput = {
  /** The UUID of the organization the brand belongs to. */
  flowDisclosureUuid: Scalars['UUID']['input'];
  /** The UUID of the flow brand */
  organizationBrandUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow disclosure field. */
export type CreateFlowDisclosureCredentialInput = {
  /** The uuid of the credential. */
  credentialUuid: Scalars['UUID']['input'];
  /** The uuid of the group the credential belongs to. */
  flowDisclosureGroupUuid: Scalars['UUID']['input'];
  /** The uuid of the issuer. */
  issuerUuid: Scalars['UUID']['input'];
  /** The uuid of the scheme. */
  schemeUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateFlowDisclosureDomainInput = {
  /** The UUID of the organization the domain belongs to. */
  flowDisclosureUuid: Scalars['UUID']['input'];
  /** The UUID of the flow domain */
  organizationDomainUuid: Scalars['UUID']['input'];
  /** The path value. */
  redirectPath: Scalars['RedirectPath']['input'];
  /** The port value. */
  redirectPort: Scalars['RedirectPort']['input'];
  /** The protocol value. */
  redirectProtocol: Scalars['RedirectProtocol']['input'];
};

/** The input for creating a flow disclosure group. */
export type CreateFlowDisclosureGroupInput = {
  /** The uuid of the provider. */
  flowDisclosureProviderUuid: Scalars['UUID']['input'];
  /** The group name */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** The input for creating a flow disclosure. */
export type CreateFlowDisclosureInput = {
  /** Optionally create a flow based on verification mappings */
  mappingVerifications?: InputMaybe<Array<UseMappingVerificationInput>>;
  /** The name of the flow. */
  name: Scalars['NonEmpty']['input'];
  /** The uuid of the organization the flow belongs to. */
  organizationUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateFlowDisclosureMappingInput = {
  /** The UUID of the organization the mapping belongs to. */
  flowDisclosureUuid: Scalars['UUID']['input'];
  /** The UUID of the verification mapping */
  mappingVerificationUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow disclosure provider by attributes. */
export type CreateFlowDisclosureProviderByAttributesInput = {
  /** The uuids of all attributes to be created */
  attributeUuids: Array<Scalars['UUID']['input']>;
  /** The uuid of the flow the flow provider belongs to. */
  flowDisclosureUuid: Scalars['UUID']['input'];
  /** The mode on how to create underlying structure */
  mode: CreateFlowDisclosureProviderByAttributesMode;
  /** The uuid of the flow provider app. */
  providerAppUuid: Scalars['UUID']['input'];
};

/** Modes for creating a flow disclosure provider by attributes. */
export enum CreateFlowDisclosureProviderByAttributesMode {
  /** Create groups for each credential. */
  Conjunction = 'Conjunction',
  /** Append attributes to existing groups if a credential is found in them; otherwise, create a group for each credential. */
  ConjunctionMerge = 'ConjunctionMerge',
  /** Create a single group that includes all credentials. */
  Disjunction = 'Disjunction',
  /** Append attributes to existing groups if a credential is found in them; otherwise, combine all credentials into a single group. */
  DisjunctionMerge = 'DisjunctionMerge'
}

/** Create Input */
export type CreateFlowDisclosureProviderConfigurationNlWalletInput = {
  /** The FlowDisclosureProvider UUID */
  flowDisclosureProviderUuid: Scalars['UUID']['input'];
  /** The usecase */
  usecase: Scalars['String']['input'];
};

/** The input for creating a flow disclosure provider. */
export type CreateFlowDisclosureProviderInput = {
  /** The uuid of the flow the flow provider belongs to. */
  flowDisclosureUuid: Scalars['UUID']['input'];
  /** The uuid of the flow provider app. */
  providerAppUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow issuance attribute. */
export type CreateFlowIssuanceAttributeInput = {
  /** The uuid of the flow attribute. */
  attributeUuid: Scalars['UUID']['input'];
  /** The uuid of the query the attribute belongs to. */
  flowIssuanceCredentialUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateFlowIssuanceBrandInput = {
  /** The UUID of the organization the brand belongs to. */
  flowIssuanceUuid: Scalars['UUID']['input'];
  /** The UUID of the flow brand */
  organizationBrandUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow issuance field. */
export type CreateFlowIssuanceCredentialInput = {
  /** The uuid of the credential. */
  credentialUuid: Scalars['UUID']['input'];
  /** The uuid of the provider the credential belongs to. */
  flowIssuanceProviderUuid: Scalars['UUID']['input'];
  /** The uuid of the issuer. */
  issuerUuid: Scalars['UUID']['input'];
  /** The meta type of the credential */
  metaType: FlowIssuanceCredentialMetaType;
  /** The uuid of the scheme. */
  schemeUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow credential meta datakeeper */
export type CreateFlowIssuanceCredentialMetaDatakeeperInput = {
  /** The expiration duration, in milliseconds */
  expirationDuration: Scalars['Int']['input'];
  /** The flow issuance credential UUID */
  flowIssuanceCredentialUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow credential meta yivi */
export type CreateFlowIssuanceCredentialMetaYiviInput = {
  /** The expiration duration, in milliseconds */
  expirationDuration: Scalars['Int']['input'];
  /** The flow issuance credential UUID */
  flowIssuanceCredentialUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateFlowIssuanceDomainInput = {
  /** The UUID of the organization the domain belongs to. */
  flowIssuanceUuid: Scalars['UUID']['input'];
  /** The UUID of the flow domain */
  organizationDomainUuid: Scalars['UUID']['input'];
  /** The path value. */
  redirectPath: Scalars['RedirectPath']['input'];
  /** The port value. */
  redirectPort: Scalars['RedirectPort']['input'];
  /** The protocol value. */
  redirectProtocol: Scalars['RedirectProtocol']['input'];
};

/** The input for creating a flow issuance. */
export type CreateFlowIssuanceInput = {
  /** The name of the flow. */
  name: Scalars['NonEmpty']['input'];
  /** The uuid of the organization the flow belongs to. */
  organizationUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateFlowIssuanceMappingInput = {
  /** The UUID of the organization the mapping belongs to. */
  flowIssuanceUuid: Scalars['UUID']['input'];
  /** The UUID of the issuance mapping */
  mappingIssuanceUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow issuance attribute. */
export type CreateFlowIssuanceProviderByAttributesInput = {
  /** The UUIDs of all attributes to be created */
  attributeUuids: Array<Scalars['UUID']['input']>;
  /** The uuid of the flow the flow provider belongs to. */
  flowIssuanceUuid: Scalars['UUID']['input'];
  /** The uuid of the flow provider app. */
  providerAppUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow issuance provider. */
export type CreateFlowIssuanceProviderInput = {
  /** The uuid of the flow the flow provider belongs to. */
  flowIssuanceUuid: Scalars['UUID']['input'];
  /** The uuid of the flow provider app. */
  providerAppUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow signature attribute. */
export type CreateFlowSignatureAttributeInput = {
  /** The uuid of the flow attribute. */
  attributeUuid: Scalars['UUID']['input'];
  /** The uuid of the query the attribute belongs to. */
  flowSignatureCredentialUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateFlowSignatureBrandInput = {
  /** The UUID of the organization the brand belongs to. */
  flowSignatureUuid: Scalars['UUID']['input'];
  /** The UUID of the flow brand */
  organizationBrandUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow signature field. */
export type CreateFlowSignatureCredentialInput = {
  /** The uuid of the credential. */
  credentialUuid: Scalars['UUID']['input'];
  /** The uuid of the group the credential belongs to. */
  flowSignatureGroupUuid: Scalars['UUID']['input'];
  /** The uuid of the issuer. */
  issuerUuid: Scalars['UUID']['input'];
  /** The uuid of the scheme. */
  schemeUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateFlowSignatureDomainInput = {
  /** The UUID of the organization the domain belongs to. */
  flowSignatureUuid: Scalars['UUID']['input'];
  /** The UUID of the flow domain */
  organizationDomainUuid: Scalars['UUID']['input'];
  /** The path value. */
  redirectPath: Scalars['RedirectPath']['input'];
  /** The port value. */
  redirectPort: Scalars['RedirectPort']['input'];
  /** The protocol value. */
  redirectProtocol: Scalars['RedirectProtocol']['input'];
};

/** The input for creating a flow signature group. */
export type CreateFlowSignatureGroupInput = {
  /** The uuid of the provider. */
  flowSignatureProviderUuid: Scalars['UUID']['input'];
  /** The group name */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** The input for creating a flow signature. */
export type CreateFlowSignatureInput = {
  /** Optionally create a flow based on verification mappings */
  mappingVerifications?: InputMaybe<Array<UseMappingVerificationInput>>;
  /** The name of the flow. */
  name: Scalars['NonEmpty']['input'];
  /** The uuid of the organization the flow belongs to. */
  organizationUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateFlowSignatureMappingInput = {
  /** The UUID of the organization the mapping belongs to. */
  flowSignatureUuid: Scalars['UUID']['input'];
  /** The UUID of the verification mapping */
  mappingVerificationUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow signature by attributes. */
export type CreateFlowSignatureProviderByAttributesInput = {
  /** The UUIDs of all attributes to be created */
  attributeUuids: Array<Scalars['UUID']['input']>;
  /** The uuid of the flow the flow provider belongs to. */
  flowSignatureUuid: Scalars['UUID']['input'];
  /** The mode on how to create underlying structure */
  mode: CreateFlowSignatureProviderByAttributesMode;
  /** The uuid of the flow provider app. */
  providerAppUuid: Scalars['UUID']['input'];
};

/** Modes for creating a flow signature provider by attributes. */
export enum CreateFlowSignatureProviderByAttributesMode {
  /** Create groups for each credential. */
  Conjunction = 'Conjunction',
  /** Append attributes to existing groups if a credential is found in them; otherwise, create a group for each credential. */
  ConjunctionMerge = 'ConjunctionMerge',
  /** Create a single group that includes all credentials. */
  Disjunction = 'Disjunction',
  /** Append attributes to existing groups if a credential is found in them; otherwise, combine all credentials into a single group. */
  DisjunctionMerge = 'DisjunctionMerge'
}

/** Create Input */
export type CreateFlowSignatureProviderConfigurationNlWalletInput = {
  /** The FlowSignatureProvider UUID */
  flowSignatureProviderUuid: Scalars['UUID']['input'];
  /** The usecase */
  usecase: Scalars['String']['input'];
};

/** The input for creating a flow signature provider. */
export type CreateFlowSignatureProviderInput = {
  /** The uuid of the flow the flow provider belongs to. */
  flowSignatureUuid: Scalars['UUID']['input'];
  /** The uuid of the flow provider app. */
  providerAppUuid: Scalars['UUID']['input'];
};

/** The input for creating a issuer. */
export type CreateIssuerInput = {
  /** The categories of the issuer */
  categories?: InputMaybe<Array<IssuerCategoryType>>;
  /** The meta type of the issuer */
  metaType: IssuerMetaType;
  /** The name of the issuer. */
  name: Scalars['NonEmpty']['input'];
  /** The organization uuid, this issuer belongs to, if any. */
  organizationUuid?: InputMaybe<Scalars['UUID']['input']>;
  /** The uuid of the scheme, this issuer belongs to. */
  schemeUuid: Scalars['UUID']['input'];
  /** The type of the issuer */
  type: IssuerType;
};

/** The input for creating a issuer locale. */
export type CreateIssuerLocaleInput = {
  /** The i18n object */
  i18n: Scalars['JSONObject']['input'];
  /** The uuid of the issuer. */
  issuerUuid: Scalars['UUID']['input'];
  /** The locale */
  locale: Scalars['Locale']['input'];
};

/** The input for creating a issuer meta datakeeper. */
export type CreateIssuerMetaDatakeeperInput = {
  /** The did of the issuer */
  did: Scalars['NonEmpty']['input'];
  /** The issuer UUID */
  issuerUuid: Scalars['UUID']['input'];
};

/** The input for creating a issuer meta mdoc. */
export type CreateIssuerMetaMdocInput = {
  /** The issuer UUID */
  issuerUuid: Scalars['UUID']['input'];
  /** The issuer's public key as a JWK */
  jwk: Scalars['JSONObject']['input'];
};

/** The input for creating a issuer meta OID4VC. */
export type CreateIssuerMetaOid4VcmdocInput = {
  /** The issuer UUID */
  issuerUuid: Scalars['UUID']['input'];
  /** The issuer's public key as a JWK */
  jwk: Scalars['JSONObject']['input'];
};

/** The input for creating a issuer meta OID4VC. */
export type CreateIssuerMetaOid4VcsdjwtInput = {
  /** The issuer's identifier (iss) */
  identifier: Scalars['NonEmpty']['input'];
  /** The issuer UUID */
  issuerUuid: Scalars['UUID']['input'];
  /** The issuer's public key as a JWK */
  jwk: Scalars['JSONObject']['input'];
};

/** The input for creating a issuer meta yivi. */
export type CreateIssuerMetaYiviInput = {
  /** The identifier of the issuer */
  id: Scalars['NonEmpty']['input'];
  /** The issuer UUID */
  issuerUuid: Scalars['UUID']['input'];
};

/** The input for creating a localeConfig. */
export type CreateLocaleConfigInput = {
  /** The locale */
  locale: Scalars['Locale']['input'];
  /** The model. */
  model: IdentityModel;
  /** The properties */
  properties: Array<Scalars['String']['input']>;
  /** The provider UUID */
  providerUuid?: InputMaybe<Scalars['UUID']['input']>;
};

/** The input for creating many mappingIssuance attributes. */
export type CreateManyMappingIssuanceAttributeInput = {
  /** The uuid of the attribute. */
  attributeUuid: Scalars['UUID']['input'];
  /** The claims, this attribute will be mapped to. */
  claims: Array<Scalars['NonEmpty']['input']>;
  /** The uuid of the mappingIssuance link. */
  mappingIssuanceLinkUuid: Scalars['UUID']['input'];
};

/** The input for creating many mappingIssuance links. */
export type CreateManyMappingIssuanceLinkInput = {
  /** The uuid of the link. */
  credentialUuid: Scalars['UUID']['input'];
  /** The uuid of the mappingIssuance. */
  mappingIssuanceUuid: Scalars['UUID']['input'];
};

/** The input for creating many mappingIssuance links by selected attributes. */
export type CreateManyMappingIssuanceLinksByAttributesInput = {
  /** The uuids of all attributes to be linked. */
  attributeUuids: Array<Scalars['UUID']['input']>;
  /** The uuid of the mappingIssuance. */
  mappingIssuanceUuid: Scalars['UUID']['input'];
};

/** The input for creating many mappingVerification attributes. */
export type CreateManyMappingVerificationAttributeInput = {
  /** The uuid of the link attribute. */
  attributeUuid: Scalars['UUID']['input'];
  /** The uuid of the mappingVerification link. */
  mappingVerificationLinkUuid: Scalars['UUID']['input'];
};

/** The input for creating many mappingVerification links. */
export type CreateManyMappingVerificationLinkInput = {
  /** The uuid of the link. */
  credentialUuid: Scalars['UUID']['input'];
  /** The uuid of the mappingVerification claim. */
  mappingVerificationClaimUuid: Scalars['UUID']['input'];
};

/** The input for creating many mappingVerification links by selected attributes. */
export type CreateManyMappingVerificationLinksByAttributesInput = {
  /** The uuids of all attributes to be linked. */
  attributeUuids: Array<Scalars['UUID']['input']>;
  /** The uuid of the mappingVerification claim. */
  mappingVerificationClaimUuid: Scalars['UUID']['input'];
};

/** Input type used to create */
export type CreateManyOrganizationNotificationEventInput = {
  /** The event URN */
  eventURN: Scalars['URN']['input'];
  /** The uuid of organizationNotification */
  organizationNotificationUuid: Scalars['UUID']['input'];
};

/** Create Input */
export type CreateManyOrganizationQuotaInput = {
  /** The control URN */
  controlURN: Scalars['URN']['input'];
  /** The UUID of the Organization */
  organizationUuid: Scalars['UUID']['input'];
};

/** Create Input */
export type CreateManyStudioPlanControlInput = {
  /** The URN */
  controlURN: Scalars['URN']['input'];
  /** The UUID of the StudioPlan */
  studioPlanUuid: Scalars['UUID']['input'];
};

/** The input for creating an mappingIssuance attribute. */
export type CreateMappingIssuanceAttributeInput = {
  /** The uuid of the attribute. */
  attributeUuid: Scalars['UUID']['input'];
  /** The claims, this attribute will be mapped to. */
  claims: Array<Scalars['NonEmpty']['input']>;
  /** The uuid of the mappingIssuance link. */
  mappingIssuanceLinkUuid: Scalars['UUID']['input'];
};

/** The input for creating an mappingIssuance. */
export type CreateMappingIssuanceInput = {
  /** The name of the mappingIssuance. */
  name: Scalars['NonEmpty']['input'];
  /** The uuid of the organization the mappingIssuance belongs to. */
  organizationUuid: Scalars['UUID']['input'];
};

/** The input for creating an mappingIssuance link. */
export type CreateMappingIssuanceLinkInput = {
  /** The uuid of the link credential. */
  credentialUuid: Scalars['UUID']['input'];
  /** The uuid of the mappingIssuance. */
  mappingIssuanceUuid: Scalars['UUID']['input'];
};

/** The input for creating an mappingVerification attribute. */
export type CreateMappingVerificationAttributeInput = {
  /** The uuid of the link attribute. */
  attributeUuid: Scalars['UUID']['input'];
  /** The uuid of the mappingVerification link. */
  mappingVerificationLinkUuid: Scalars['UUID']['input'];
};

/** The input for creating an mappingVerification claim. */
export type CreateMappingVerificationClaimInput = {
  /** The claim */
  claim: Scalars['NonEmpty']['input'];
  /** The uuid of the mappingVerification, this claim belongs to. */
  mappingVerificationUuid: Scalars['UUID']['input'];
  /** The name of the claim. */
  name: Scalars['NonEmpty']['input'];
};

/** The input for creating an mappingVerification. */
export type CreateMappingVerificationInput = {
  /** The name of the mappingVerification. */
  name: Scalars['NonEmpty']['input'];
  /** The uuid of the organization the mappingVerification belongs to. */
  organizationUuid: Scalars['UUID']['input'];
};

/** The input for creating an mappingVerification link. */
export type CreateMappingVerificationLinkInput = {
  /** The uuid of the link credential. */
  credentialUuid: Scalars['UUID']['input'];
  /** The uuid of the mappingVerification claim. */
  mappingVerificationClaimUuid: Scalars['UUID']['input'];
};

/** Input type used to create oauthProvider. */
export type CreateOAuthProviderInput = {
  /** The clientID of the OAuth Provider */
  clientId: Scalars['NonEmpty']['input'];
  /** The clientSecret of the OAuth Provider */
  clientSecret: Scalars['NonEmpty']['input'];
  /** The discovery URI of the OAuth Provider */
  discoveryUri: Scalars['URL']['input'];
  /** The global flag */
  global: Scalars['Boolean']['input'];
  /** The icon of the OAuth Provider */
  icon: Scalars['NonEmpty']['input'];
  /** The scopes used for login */
  loginScopes: Scalars['NonEmpty']['input'];
  /** The name of the OAuth Provider */
  name: Scalars['NonEmpty']['input'];
  /** The registered redirect URI for the OAuth Provider */
  redirectUri: Scalars['URL']['input'];
  /** The scopes used for signup */
  signupScopes: Scalars['NonEmpty']['input'];
  /** The tenantID of the OAuth Provider */
  tenantId?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Input type used to create user organization address types. */
export type CreateOrganizationAddressInput = {
  /** The city of the address. */
  city: Scalars['NonEmpty']['input'];
  /** The country of the address in ISO 3166 2 format. */
  country: Scalars['ISO3166']['input'];
  /** isDefaultTax */
  isDefaultTax: Scalars['Boolean']['input'];
  /** The number of the address. */
  number: Scalars['NonEmpty']['input'];
  /** The uuid of user organization */
  organizationUuid: Scalars['UUID']['input'];
  /** The street of the address. */
  street: Scalars['NonEmpty']['input'];
  /** The zipcode of the address. */
  zipcode: Scalars['NonEmpty']['input'];
};

/** Create input */
export type CreateOrganizationAlertDeprecationInput = {
  /** The flow type */
  flow: FlowType;
  /** The flow UUID which is affected */
  flowUuid: Scalars['UUID']['input'];
  /** The deprecated model */
  model: IdentityModelType;
  /** The model UUID */
  modelUuid: Scalars['UUID']['input'];
  /** The organization alert UUID */
  organizationAlertUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateOrganizationAlertInput = {
  /** The message */
  message: Scalars['NonEmpty']['input'];
  /** The UUID of the organization the alert belongs to. */
  organizationUuid: Scalars['UUID']['input'];
  /** The severity */
  severity: AlertSeverity;
  /** The type */
  type: AlertType;
};

/** The input for creating a app. */
export type CreateOrganizationAppInput = {
  /** The app UUID. */
  appUuid: Scalars['UUID']['input'];
  /** The organization UUID. */
  organizationUuid: Scalars['UUID']['input'];
};

/** The input for creating a organization app meta datakeeper. */
export type CreateOrganizationAppMetaDatakeeperInput = {
  /** The issuer did */
  issuerDid?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The organization app UUID */
  organizationAppUuid: Scalars['UUID']['input'];
};

/** The input for creating a organization app meta kiwa. */
export type CreateOrganizationAppMetaKiwaInput = {
  /** The certificate serial */
  issuerId?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The private key identifier */
  keyIdentifier?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The organization app UUID */
  organizationAppUuid: Scalars['UUID']['input'];
};

/** The input for creating a organization app meta yoti. */
export type CreateOrganizationAppMetaYotiInput = {
  /** The org domain registered at Yoti */
  domain?: InputMaybe<Scalars['URL']['input']>;
  /** The organization app UUID */
  organizationAppUuid: Scalars['UUID']['input'];
};

/** The input for creating an organization app prerequisite. */
export type CreateOrganizationAppPrerequisiteInput = {
  /** The app requisite UUID. */
  appPrerequisiteUuid: Scalars['UUID']['input'];
  /** The organization app UUID. */
  organizationAppUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateOrganizationBrandInput = {
  /** The brand value. */
  logo?: InputMaybe<Scalars['ClientPicture']['input']>;
  /** The brand value which. */
  name: Scalars['NonEmpty']['input'];
  /** The UUID of the organization the brand belongs to. */
  organizationUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateOrganizationClientInput = {
  /** The OAuth entitlements of the token. */
  entitlements: Array<Scalars['Entitlement']['input']>;
  /** The token name */
  name: Scalars['NonEmpty']['input'];
  /** The UUID of the user organization. */
  organizationUuid: Scalars['UUID']['input'];
  /** The OAuth role of the token. */
  role: OrganizationUserRole;
};

/** Create input */
export type CreateOrganizationDomainInput = {
  /** The domain value which. */
  name: Scalars['DomainName']['input'];
  /** The UUID of the organization the domain belongs to. */
  organizationUuid: Scalars['UUID']['input'];
};

/** The input for creating a Provider App. */
export type CreateOrganizationDomainOAuthProviderInput = {
  /** The UUID of the oauth provider. */
  oauthProviderUuid: Scalars['UUID']['input'];
  /** The UUID of the organization domain. */
  organizationDomainUuid: Scalars['UUID']['input'];
};

/** Input type used to create user organization types. */
export type CreateOrganizationInput = {
  /** The organization description. */
  description: Scalars['NonEmpty']['input'];
  /** The public email address of the organization. */
  email: Scalars['Email']['input'];
  /** The organization name. */
  name: Scalars['NonEmpty']['input'];
  /** The phone number of the organization. */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** The url of the website of the organization. */
  website: Scalars['URL']['input'];
};

/** Input type used to create */
export type CreateOrganizationNotificationEventInput = {
  /** The event URN */
  eventURN: Scalars['URN']['input'];
  /** The uuid of organizationNotification */
  organizationNotificationUuid: Scalars['UUID']['input'];
};

/** Input type used to create user organization address types. */
export type CreateOrganizationNotificationInput = {
  /** The email address */
  email: Scalars['Email']['input'];
  /** The uuid of user organization */
  organizationUuid: Scalars['UUID']['input'];
};

/** Create Input */
export type CreateOrganizationQuotaInput = {
  /** The control URN */
  controlURN: Scalars['URN']['input'];
  /** The UUID of the Organization */
  organizationUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateOrganizationSecretInput = {
  /** The algorithm */
  algorithm: OrganizationSecretAlgorithm;
  /** Expires */
  expiresAt: Scalars['DateTime']['input'];
  /** The secret name */
  name: Scalars['NonEmpty']['input'];
  /** The UUID of the user organization. */
  organizationUuid: Scalars['UUID']['input'];
  /** The type */
  type: OrganizationSecretType;
};

export type CreateOrganizationUserInput = {
  /** The OAuth entitlements of the user. */
  entitlements: Array<Scalars['Entitlement']['input']>;
  /** The UUID of the organization the organization user belongs to. */
  organizationUuid: Scalars['UUID']['input'];
  /** The OAuth role of the user. */
  role: OrganizationUserRole;
  /** The UUID of the user the organization user belongs to. */
  userUuid: Scalars['UUID']['input'];
};

/** The input for creating a Provider App. */
export type CreateProviderAppInput = {
  /** The UUID of the App. */
  appUuid: Scalars['UUID']['input'];
  /** The meta type. */
  metaType: ProviderAppMetaType;
  /** The UUID of the Provider. */
  providerUuid: Scalars['UUID']['input'];
};

/** Create Input */
export type CreateProviderAppMetaOid4VcInput = {
  /** The client identifier prefix */
  clientIdentifierPrefix?: InputMaybe<ProviderAppMetaTypeOid4VcClientIdentifierPrefix>;
  /** If DCQL is supported */
  dcql?: InputMaybe<Scalars['Boolean']['input']>;
  /** The latest draft version supported by this app */
  draftVersion: Scalars['Int']['input'];
  /** The protocol */
  protocol?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The ProviderApp UUID */
  providerAppUuid: Scalars['UUID']['input'];
};

/** The input for creating a provider. */
export type CreateProviderInput = {
  /** The base64Logo of the provider */
  base64Logo: Scalars['NonEmpty']['input'];
  /** The categories of the provider */
  categories?: InputMaybe<Array<ProviderCategoryType>>;
  /** The handler URI of the provider */
  handlerUri: Scalars['NonEmpty']['input'];
  /** The name of the provider. */
  name: Scalars['NonEmpty']['input'];
  /** The supported flow */
  supportedFlow?: InputMaybe<Array<Scalars['NonEmpty']['input']>>;
  /** The type of the provider */
  type: ProviderType;
};

/** The input for creating a provider locale. */
export type CreateProviderLocaleInput = {
  /** The i18n object */
  i18n: Scalars['JSONObject']['input'];
  /** The locale */
  locale: Scalars['Locale']['input'];
  /** The uuid of the provider. */
  providerUuid: Scalars['UUID']['input'];
};

/** The input for creating a scheme. */
export type CreateSchemeInput = {
  /** The categories of the scheme */
  categories?: InputMaybe<Array<SchemeCategoryType>>;
  /** The name of the scheme. */
  name: Scalars['NonEmpty']['input'];
  /** The organization uuid, this scheme belongs to. */
  organizationUuid: Scalars['UUID']['input'];
  /** The uuid of the provider, this scheme belongs to. */
  providerUuid: Scalars['UUID']['input'];
  /** The type of the scheme */
  type: SchemeType;
};

/** The input for creating a scheme locale. */
export type CreateSchemeLocaleInput = {
  /** The i18n object */
  i18n: Scalars['JSONObject']['input'];
  /** The locale */
  locale: Scalars['Locale']['input'];
  /** The uuid of the scheme. */
  schemeUuid: Scalars['UUID']['input'];
};

/** The input for creating a scope claim. */
export type CreateScopeClaimInput = {
  /** The name of the scope claim. */
  name: Scalars['NonEmpty']['input'];
  /** The uuid of the scope, this scope claim belongs to. */
  scopeUuid: Scalars['UUID']['input'];
  /** The transform function for the scope claim. */
  transform: Scalars['NonEmpty']['input'];
};

/** The input for creating a scope. */
export type CreateScopeInput = {
  /** The categories of the scope */
  categories?: InputMaybe<Array<ScopeCategoryType>>;
  /** The name of the scope. */
  name: Scalars['NonEmpty']['input'];
  /** The uuid of the provider app, this scope belongs to. */
  providerAppUuid: Scalars['UUID']['input'];
  /** The scope itself. */
  scope: Scalars['NonEmpty']['input'];
};

/** The input for creating a scope locale. */
export type CreateScopeLocaleInput = {
  /** The i18n object */
  i18n: Scalars['JSONObject']['input'];
  /** The locale */
  locale: Scalars['Locale']['input'];
  /** The uuid of the scope. */
  scopeUuid: Scalars['UUID']['input'];
};

/** The input for creating a scope resource. */
export type CreateScopeResourceInput = {
  /** The uuid of the attribute, this scope resource refer to. */
  attributeUuid: Scalars['UUID']['input'];
  /** The name of the scope resource. */
  name: Scalars['NonEmpty']['input'];
  /** The uuid of the scope, this scope resource belongs to. */
  scopeUuid: Scalars['UUID']['input'];
};

/** Create Input */
export type CreateStudioPlanControlInput = {
  /** The URN */
  controlURN: Scalars['URN']['input'];
  /** The UUID of the StudioPlan */
  studioPlanUuid: Scalars['UUID']['input'];
};

/** Create Input */
export type CreateStudioPlanControlOverrideInput = {
  /** The JSON Value */
  args: Scalars['JSONObject']['input'];
  /** The UUID the organization */
  organizationUuid: Scalars['UUID']['input'];
  /** The control */
  studioPlanControlUuid: Scalars['UUID']['input'];
};

/** Create Input */
export type CreateStudioPlanInput = {
  /** The plan description */
  description: Scalars['NonEmpty']['input'];
  /** Eligible user organizations */
  isForAllOrganizations: Scalars['Boolean']['input'];
  /** The name */
  name: Scalars['NonEmpty']['input'];
  /** planURN */
  planURN: Scalars['NonEmpty']['input'];
};

/** Create Input */
export type CreateStudioPlanIntervalInput = {
  /** The default cost per recurring interval */
  cost: Scalars['UInt']['input'];
  /** The default currency */
  currency: Currency;
  /** The default currency unit */
  currencyUnit: CurrencyUnit;
  /** The default recurring interval */
  interval: Interval;
  /** The default cost per setup */
  setupCost: Scalars['UInt']['input'];
  /** The UUID of the StudioPlan */
  studioPlanUuid: Scalars['UUID']['input'];
};

/** Create Input */
export type CreateStudioPlanOrganizationInput = {
  /** The UUID of the organization */
  organizationUuid: Scalars['UUID']['input'];
  /** The UUID of the StudioPlan */
  studioPlanUuid: Scalars['UUID']['input'];
};

export type CreateUserInput = {
  /** The default organization of the user. */
  defaultOrganizationUuid: Scalars['UUID']['input'];
  /** The email address of the user. */
  email: Scalars['Email']['input'];
  /** The first name of the user. */
  firstName?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The last name of the user. */
  lastName?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The password of the user. */
  password?: InputMaybe<Scalars['Password']['input']>;
  /** The profile picture of the user. */
  profilePicture?: InputMaybe<Scalars['ProfilePicture']['input']>;
};

export type CreateUserInvitationInput = {
  /** The user email who is being invited. */
  email: Scalars['Email']['input'];
  /** The OAuth entitlements of the user. */
  entitlements: Array<Scalars['Entitlement']['input']>;
  /** The first name of the user. */
  firstName: Scalars['NonEmpty']['input'];
  /** The last name of the user. */
  lastName: Scalars['NonEmpty']['input'];
  /** The organization for which user is invited. */
  organizationUuid: Scalars['UUID']['input'];
  /** The OAuth role of the user. */
  role: OrganizationUserRole;
};

/** Credential definition. */
export type Credential = Model & {
  __typename?: 'Credential';
  /** The collection of attributes */
  attributes: AttributeConnection;
  /** The categories of the credential */
  categories: Array<CredentialCategoryType>;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The issuer, this credential belongs to */
  issuer: Issuer;
  /** The collection of locales */
  locale: CredentialLocaleConnection;
  /** The meta */
  meta?: Maybe<CredentialMeta>;
  /** The meta type of the credential */
  metaType: CredentialMetaType;
  /** The name */
  name: Scalars['NonEmpty']['output'];
  /** The state */
  state: State;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** Credential definition. */
export type CredentialAttributesArgs = {
  input?: InputMaybe<FindManyAttributesInput>;
};


/** Credential definition. */
export type CredentialLocaleArgs = {
  input?: InputMaybe<FindManyCredentialLocaleInput>;
};

/** Credential category Type. */
export enum CredentialCategoryType {
  Development = 'DEVELOPMENT',
  Production = 'PRODUCTION',
  Protected = 'PROTECTED',
  Test = 'TEST'
}

/** The credential connection definition. */
export type CredentialConnection = {
  __typename?: 'CredentialConnection';
  edges: Array<Maybe<CredentialEdge>>;
  pageInfo: PageInfo;
};

/** The credential edge definition. */
export type CredentialEdge = {
  __typename?: 'CredentialEdge';
  cursor: Scalars['String']['output'];
  node: Credential;
};

/** Fields which can be used to filter credential on. Value must be camel case. */
export enum CredentialFilteringField {
  Categories = 'categories',
  CreatedAt = 'createdAt',
  IssuerUuid = 'issuerUuid',
  MetaType = 'metaType',
  Name = 'name',
  State = 'state',
  Uuid = 'uuid'
}

/** Credential locale definition. */
export type CredentialLocale = Model & {
  __typename?: 'CredentialLocale';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential the locale belongs to. */
  credential: Credential;
  /** The i18n object */
  i18n: Scalars['JSONObject']['output'];
  /** The locale */
  locale: Scalars['Locale']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential locale connection definition. */
export type CredentialLocaleConnection = {
  __typename?: 'CredentialLocaleConnection';
  edges: Array<Maybe<CredentialLocaleEdge>>;
  pageInfo: PageInfo;
};

/** The credential locale edge definition. */
export type CredentialLocaleEdge = {
  __typename?: 'CredentialLocaleEdge';
  cursor: Scalars['String']['output'];
  node: CredentialLocale;
};

/** Fields which can be used to filter credential locale on. Value must be camel case. */
export enum CredentialLocaleFilteringField {
  CredentialUuid = 'credentialUuid',
  Locale = 'locale'
}

/** Fields which can be used to sort credential locale on. Value must be camel case. */
export enum CredentialLocaleSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential locale. */
export type CredentialLocaleSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialLocaleSortEnum;
};

/** Credential meta definition. */
export type CredentialMeta = Model & {
  __typename?: 'CredentialMeta';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential the meta belongs to. */
  credential: Credential;
  /** The datakeeper credential meta */
  datakeeper?: Maybe<CredentialMetaDatakeeper>;
  /** The digidentity credential meta */
  digidentity?: Maybe<CredentialMetaDigidentity>;
  /** The mdoc credential meta */
  mdoc?: Maybe<CredentialMetaMdoc>;
  /** The nect credential meta */
  nect?: Maybe<CredentialMetaNect>;
  /** The NL Wallet credential meta */
  nlWallet?: Maybe<CredentialMetaNlWallet>;
  /** The OID4VC mdoc credential meta */
  oid4vcMdoc?: Maybe<CredentialMetaOid4Vcmdoc>;
  /** The OID4VC SD-JWT credential meta */
  oid4vcSdJwt?: Maybe<CredentialMetaOid4Vcsdjwt>;
  /** The ReadID credential meta */
  readid?: Maybe<CredentialMetaReadId>;
  /** The truid credential meta */
  truid?: Maybe<CredentialMetaTruid>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** The yivi credential meta */
  yivi?: Maybe<CredentialMetaYivi>;
  /** The yoti credential meta */
  yoti?: Maybe<CredentialMetaYoti>;
};

/** The credential meta connection definition. */
export type CredentialMetaConnection = {
  __typename?: 'CredentialMetaConnection';
  edges: Array<Maybe<CredentialMetaEdge>>;
  pageInfo: PageInfo;
};

/** Credential meta definition. */
export type CredentialMetaDatakeeper = Model & {
  __typename?: 'CredentialMetaDatakeeper';
  /** The context of the credential */
  context: Scalars['NonEmpty']['output'];
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential meta the datakeeper meta belongs to. */
  credentialMeta: CredentialMeta;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential meta datakeeper connection definition. */
export type CredentialMetaDatakeeperConnection = {
  __typename?: 'CredentialMetaDatakeeperConnection';
  edges: Array<Maybe<CredentialMetaDatakeeperEdge>>;
  pageInfo: PageInfo;
};

/** The credential meta datakeeper edge definition. */
export type CredentialMetaDatakeeperEdge = {
  __typename?: 'CredentialMetaDatakeeperEdge';
  cursor: Scalars['String']['output'];
  node: CredentialMetaDatakeeper;
};

/** Fields which can be used to filter credential meta datakeeper on. Value must be camel case. */
export enum CredentialMetaDatakeeperFilteringField {
  Context = 'context',
  CredentialMetaUuid = 'credentialMetaUuid'
}

/** Fields which can be used to sort credential meta datakeeper on. Value must be camel case. */
export enum CredentialMetaDatakeeperSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential meta datakeeper. */
export type CredentialMetaDatakeeperSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialMetaDatakeeperSortEnum;
};

/** Credential meta definition. */
export type CredentialMetaDigidentity = Model & {
  __typename?: 'CredentialMetaDigidentity';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential meta the digidentity meta belongs to. */
  credentialMeta: CredentialMeta;
  /** The scope of the credential */
  scope: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential meta digidentity connection definition. */
export type CredentialMetaDigidentityConnection = {
  __typename?: 'CredentialMetaDigidentityConnection';
  edges: Array<Maybe<CredentialMetaDigidentityEdge>>;
  pageInfo: PageInfo;
};

/** The credential meta digidentity edge definition. */
export type CredentialMetaDigidentityEdge = {
  __typename?: 'CredentialMetaDigidentityEdge';
  cursor: Scalars['String']['output'];
  node: CredentialMetaDigidentity;
};

/** Fields which can be used to filter credential meta digidentity on. Value must be camel case. */
export enum CredentialMetaDigidentityFilteringField {
  CredentialMetaUuid = 'credentialMetaUuid',
  Scope = 'scope'
}

/** Fields which can be used to sort credential meta digidentity on. Value must be camel case. */
export enum CredentialMetaDigidentitySortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential meta digidentity. */
export type CredentialMetaDigidentitySortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialMetaDigidentitySortEnum;
};

/** The credential meta edge definition. */
export type CredentialMetaEdge = {
  __typename?: 'CredentialMetaEdge';
  cursor: Scalars['String']['output'];
  node: CredentialMeta;
};

/** Fields which can be used to filter credential meta on. Value must be camel case. */
export enum CredentialMetaFilteringField {
  CredentialUuid = 'credentialUuid'
}

/** Credential meta definition. */
export type CredentialMetaMdoc = Model & {
  __typename?: 'CredentialMetaMDOC';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential meta the mdoc meta belongs to. */
  credentialMeta: CredentialMeta;
  /** mdoc document type */
  docType: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential meta mdoc connection definition. */
export type CredentialMetaMdocConnection = {
  __typename?: 'CredentialMetaMDOCConnection';
  edges: Array<Maybe<CredentialMetaMdocEdge>>;
  pageInfo: PageInfo;
};

/** The credential meta mdoc edge definition. */
export type CredentialMetaMdocEdge = {
  __typename?: 'CredentialMetaMDOCEdge';
  cursor: Scalars['String']['output'];
  node: CredentialMetaMdoc;
};

/** Fields which can be used to filter credential meta mdoc on. Value must be camel case. */
export enum CredentialMetaMdocFilteringField {
  CredentialMetaUuid = 'credentialMetaUuid',
  KeyBinding = 'keyBinding',
  Type = 'type'
}

/** Fields which can be used to sort credential meta mdoc on. Value must be camel case. */
export enum CredentialMetaMdocSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential meta mdoc. */
export type CredentialMetaMdocSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialMetaMdocSortEnum;
};

/** Credential meta definition. */
export type CredentialMetaNlWallet = Model & {
  __typename?: 'CredentialMetaNLWallet';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential meta the NL Wallet meta belongs to. */
  credentialMeta: CredentialMeta;
  /** The docType of the credential */
  docType: Scalars['String']['output'];
  /** The namespace of the credential */
  nameSpace?: Maybe<Scalars['String']['output']>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential meta NL Wallet connection definition. */
export type CredentialMetaNlWalletConnection = {
  __typename?: 'CredentialMetaNLWalletConnection';
  edges: Array<Maybe<CredentialMetaNlWalletEdge>>;
  pageInfo: PageInfo;
};

/** The credential meta NL Wallet edge definition. */
export type CredentialMetaNlWalletEdge = {
  __typename?: 'CredentialMetaNLWalletEdge';
  cursor: Scalars['String']['output'];
  node: CredentialMetaNlWallet;
};

/** Fields which can be used to filter credential meta NL Wallet on. Value must be camel case. */
export enum CredentialMetaNlWalletFilteringField {
  CredentialMetaUuid = 'credentialMetaUuid',
  DocType = 'docType'
}

/** Fields which can be used to sort credential meta NL Wallet on. Value must be camel case. */
export enum CredentialMetaNlWalletSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential meta NL Wallet. */
export type CredentialMetaNlWalletSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialMetaNlWalletSortEnum;
};

/** Credential meta definition. */
export type CredentialMetaNect = Model & {
  __typename?: 'CredentialMetaNect';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential meta the nect meta belongs to. */
  credentialMeta: CredentialMeta;
  /** The intent of the credential */
  intent: Scalars['Int']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential meta nect connection definition. */
export type CredentialMetaNectConnection = {
  __typename?: 'CredentialMetaNectConnection';
  edges: Array<Maybe<CredentialMetaNectEdge>>;
  pageInfo: PageInfo;
};

/** The credential meta nect edge definition. */
export type CredentialMetaNectEdge = {
  __typename?: 'CredentialMetaNectEdge';
  cursor: Scalars['String']['output'];
  node: CredentialMetaNect;
};

/** Fields which can be used to filter credential meta nect on. Value must be camel case. */
export enum CredentialMetaNectFilteringField {
  CredentialMetaUuid = 'credentialMetaUuid',
  Intent = 'intent'
}

/** Fields which can be used to sort credential meta nect on. Value must be camel case. */
export enum CredentialMetaNectSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential meta nect. */
export type CredentialMetaNectSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialMetaNectSortEnum;
};

/** Credential meta definition. */
export type CredentialMetaOid4Vcmdoc = Model & {
  __typename?: 'CredentialMetaOID4VCMDOC';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential meta the OID4VC mdoc meta belongs to. */
  credentialMeta: CredentialMeta;
  /** mdoc document type */
  docType: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential meta OID4VC mdoc connection definition. */
export type CredentialMetaOid4VcmdocConnection = {
  __typename?: 'CredentialMetaOID4VCMDOCConnection';
  edges: Array<Maybe<CredentialMetaOid4VcmdocEdge>>;
  pageInfo: PageInfo;
};

/** The credential meta OID4VC mdoc edge definition. */
export type CredentialMetaOid4VcmdocEdge = {
  __typename?: 'CredentialMetaOID4VCMDOCEdge';
  cursor: Scalars['String']['output'];
  node: CredentialMetaOid4Vcmdoc;
};

/** Fields which can be used to filter credential meta OID4VC mdoc on. Value must be camel case. */
export enum CredentialMetaOid4VcmdocFilteringField {
  CredentialMetaUuid = 'credentialMetaUuid',
  KeyBinding = 'keyBinding',
  Type = 'type'
}

/** Fields which can be used to sort credential meta OID4VC mdoc on. Value must be camel case. */
export enum CredentialMetaOid4VcmdocSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential meta OID4VC mdoc. */
export type CredentialMetaOid4VcmdocSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialMetaOid4VcmdocSortEnum;
};

/** Credential meta definition. */
export type CredentialMetaOid4Vcsdjwt = Model & {
  __typename?: 'CredentialMetaOID4VCSDJWT';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential meta the OID4VC SD-JWT meta belongs to. */
  credentialMeta: CredentialMeta;
  /** SD-JWT Key binding */
  keyBinding: Scalars['Boolean']['output'];
  /** SD-JWT Type */
  type: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential meta OID4VC SD-JWT connection definition. */
export type CredentialMetaOid4VcsdjwtConnection = {
  __typename?: 'CredentialMetaOID4VCSDJWTConnection';
  edges: Array<Maybe<CredentialMetaOid4VcsdjwtEdge>>;
  pageInfo: PageInfo;
};

/** The credential meta OID4VC SD-JWT edge definition. */
export type CredentialMetaOid4VcsdjwtEdge = {
  __typename?: 'CredentialMetaOID4VCSDJWTEdge';
  cursor: Scalars['String']['output'];
  node: CredentialMetaOid4Vcsdjwt;
};

/** Fields which can be used to filter credential meta OID4VC SD-JWT on. Value must be camel case. */
export enum CredentialMetaOid4VcsdjwtFilteringField {
  CredentialMetaUuid = 'credentialMetaUuid',
  KeyBinding = 'keyBinding',
  Type = 'type'
}

/** Fields which can be used to sort credential meta OID4VC SD-JWT on. Value must be camel case. */
export enum CredentialMetaOid4VcsdjwtSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential meta OID4VC SD-JWT. */
export type CredentialMetaOid4VcsdjwtSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialMetaOid4VcsdjwtSortEnum;
};

/** Credential meta definition. */
export type CredentialMetaReadId = Model & {
  __typename?: 'CredentialMetaReadID';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential meta the ReadID meta belongs to. */
  credentialMeta: CredentialMeta;
  /** The docType of the credential */
  documentType: CredentialMetaReadIdDocumentType;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential meta ReadID connection definition. */
export type CredentialMetaReadIdConnection = {
  __typename?: 'CredentialMetaReadIDConnection';
  edges: Array<Maybe<CredentialMetaReadIdEdge>>;
  pageInfo: PageInfo;
};

/** Credential meta ReadID document type. */
export enum CredentialMetaReadIdDocumentType {
  EuDrivingLicense = 'EU_DRIVING_LICENSE',
  IcaoIdentityCard = 'ICAO_IDENTITY_CARD',
  IcaoPassport = 'ICAO_PASSPORT'
}

/** The credential meta ReadID edge definition. */
export type CredentialMetaReadIdEdge = {
  __typename?: 'CredentialMetaReadIDEdge';
  cursor: Scalars['String']['output'];
  node: CredentialMetaReadId;
};

/** Fields which can be used to filter credential meta ReadID on. Value must be camel case. */
export enum CredentialMetaReadIdFilteringField {
  CredentialMetaUuid = 'credentialMetaUuid',
  DocumentType = 'documentType'
}

/** Fields which can be used to sort credential meta ReadID on. Value must be camel case. */
export enum CredentialMetaReadIdSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential meta ReadID. */
export type CredentialMetaReadIdSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialMetaReadIdSortEnum;
};

/** Fields which can be used to sort credential meta on. Value must be camel case. */
export enum CredentialMetaSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential meta. */
export type CredentialMetaSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialMetaSortEnum;
};

/** Credential meta definition. */
export type CredentialMetaTruid = Model & {
  __typename?: 'CredentialMetaTruid';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential meta the truid meta belongs to. */
  credentialMeta: CredentialMeta;
  /** The scope of the credential */
  scope: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential meta truid connection definition. */
export type CredentialMetaTruidConnection = {
  __typename?: 'CredentialMetaTruidConnection';
  edges: Array<Maybe<CredentialMetaTruidEdge>>;
  pageInfo: PageInfo;
};

/** The credential meta truid edge definition. */
export type CredentialMetaTruidEdge = {
  __typename?: 'CredentialMetaTruidEdge';
  cursor: Scalars['String']['output'];
  node: CredentialMetaTruid;
};

/** Fields which can be used to filter credential meta truid on. Value must be camel case. */
export enum CredentialMetaTruidFilteringField {
  CredentialMetaUuid = 'credentialMetaUuid',
  Scope = 'scope'
}

/** Fields which can be used to sort credential meta truid on. Value must be camel case. */
export enum CredentialMetaTruidSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential meta truid. */
export type CredentialMetaTruidSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialMetaTruidSortEnum;
};

/** Credential meta type. */
export enum CredentialMetaType {
  Datakeeper = 'DATAKEEPER',
  Digidentity = 'DIGIDENTITY',
  Mdoc = 'MDOC',
  Nect = 'NECT',
  NlWallet = 'NL_WALLET',
  None = 'NONE',
  Oid4VcMdoc = 'OID4VC_MDOC',
  Oid4VcSdJwt = 'OID4VC_SD_JWT',
  Readid = 'READID',
  Truid = 'TRUID',
  Yivi = 'YIVI',
  Yoti = 'YOTI'
}

/** Credential meta definition. */
export type CredentialMetaYivi = Model & {
  __typename?: 'CredentialMetaYivi';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential meta the yivi meta belongs to. */
  credentialMeta: CredentialMeta;
  /** The identifier of the credential */
  id?: Maybe<Scalars['NonEmpty']['output']>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential meta yivi connection definition. */
export type CredentialMetaYiviConnection = {
  __typename?: 'CredentialMetaYiviConnection';
  edges: Array<Maybe<CredentialMetaYiviEdge>>;
  pageInfo: PageInfo;
};

/** The credential meta yivi edge definition. */
export type CredentialMetaYiviEdge = {
  __typename?: 'CredentialMetaYiviEdge';
  cursor: Scalars['String']['output'];
  node: CredentialMetaYivi;
};

/** Fields which can be used to filter credential meta yivi on. Value must be camel case. */
export enum CredentialMetaYiviFilteringField {
  CredentialMetaUuid = 'credentialMetaUuid',
  Id = 'id'
}

/** Fields which can be used to sort credential meta yivi on. Value must be camel case. */
export enum CredentialMetaYiviSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential meta yivi. */
export type CredentialMetaYiviSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialMetaYiviSortEnum;
};

/** Credential meta definition. */
export type CredentialMetaYoti = Model & {
  __typename?: 'CredentialMetaYoti';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential meta the yoti meta belongs to. */
  credentialMeta: CredentialMeta;
  /** The grouping predicate */
  groupingPredicate?: Maybe<Scalars['String']['output']>;
  /** The flag if grouping is allowed */
  isGroupingAllowed: Scalars['Boolean']['output'];
  /** The flag if source constraint available */
  isSourceConstraintAvailable: Scalars['Boolean']['output'];
  /** The name of the credential */
  name: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential meta yoti connection definition. */
export type CredentialMetaYotiConnection = {
  __typename?: 'CredentialMetaYotiConnection';
  edges: Array<Maybe<CredentialMetaYotiEdge>>;
  pageInfo: PageInfo;
};

/** The credential meta yoti edge definition. */
export type CredentialMetaYotiEdge = {
  __typename?: 'CredentialMetaYotiEdge';
  cursor: Scalars['String']['output'];
  node: CredentialMetaYoti;
};

/** Fields which can be used to filter credential meta yoti on. Value must be camel case. */
export enum CredentialMetaYotiFilteringField {
  CredentialMetaUuid = 'credentialMetaUuid',
  Name = 'name'
}

/** Fields which can be used to sort credential meta yoti on. Value must be camel case. */
export enum CredentialMetaYotiSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential meta yoti. */
export type CredentialMetaYotiSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialMetaYotiSortEnum;
};

/** Credential request. */
export type CredentialRequest = Model & {
  __typename?: 'CredentialRequest';
  /** The collection of attribute requests */
  attributeRequests: AttributeRequestConnection;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The collection of locales */
  locale: CredentialRequestLocaleConnection;
  /** The meta */
  meta?: Maybe<CredentialRequestMeta>;
  /** The type of the credential request meta */
  metaType: CredentialRequestMetaType;
  /** The name */
  name: Scalars['NonEmpty']['output'];
  /** The organization. */
  organization: Organization;
  /** The uuid of the organization, this credential request belongs to. */
  organizationUuid: Scalars['UUID']['output'];
  /** The provider. */
  provider: Provider;
  /** The state */
  state?: Maybe<CredentialRequestState>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** The collection of workflows */
  workflows: CredentialRequestWorkflowConnection;
};


/** Credential request. */
export type CredentialRequestAttributeRequestsArgs = {
  input?: InputMaybe<FindManyAttributeRequestsInput>;
};


/** Credential request. */
export type CredentialRequestLocaleArgs = {
  input?: InputMaybe<FindManyCredentialRequestLocaleInput>;
};

/** The credential request connection request. */
export type CredentialRequestConnection = {
  __typename?: 'CredentialRequestConnection';
  edges: Array<Maybe<CredentialRequestEdge>>;
  pageInfo: PageInfo;
};

/** The credential request edge request. */
export type CredentialRequestEdge = {
  __typename?: 'CredentialRequestEdge';
  cursor: Scalars['String']['output'];
  node: CredentialRequest;
};

/** Fields which can be used to filter credential request on. Value must be camel case. */
export enum CredentialRequestFilteringField {
  CreatedAt = 'createdAt',
  Name = 'name',
  OrganizationUuid = 'organizationUuid',
  ProviderUuid = 'providerUuid',
  Type = 'type',
  Uuid = 'uuid'
}

/** Credential locale definition. */
export type CredentialRequestLocale = Model & {
  __typename?: 'CredentialRequestLocale';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential the locale belongs to. */
  credentialRequest: CredentialRequest;
  /** The i18n object */
  i18n: Scalars['JSONObject']['output'];
  /** The locale */
  locale: Scalars['Locale']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential request locale connection definition. */
export type CredentialRequestLocaleConnection = {
  __typename?: 'CredentialRequestLocaleConnection';
  edges: Array<Maybe<CredentialRequestLocaleEdge>>;
  pageInfo: PageInfo;
};

/** The credential request locale edge definition. */
export type CredentialRequestLocaleEdge = {
  __typename?: 'CredentialRequestLocaleEdge';
  cursor: Scalars['String']['output'];
  node: CredentialRequestLocale;
};

/** Fields which can be used to filter credential request locale on. Value must be camel case. */
export enum CredentialRequestLocaleFilteringField {
  CredentialRequestUuid = 'credentialRequestUuid',
  Locale = 'locale'
}

/** Fields which can be used to sort credential request locale on. Value must be camel case. */
export enum CredentialRequestLocaleSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential request locale. */
export type CredentialRequestLocaleSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialRequestLocaleSortEnum;
};

/** Credential request meta. */
export type CredentialRequestMeta = Model & {
  __typename?: 'CredentialRequestMeta';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential request the meta belongs to. */
  credentialRequest: CredentialRequest;
  /** The datakeeper credential request meta */
  datakeeper?: Maybe<CredentialRequestMetaDatakeeper>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** The yivi credential request meta */
  yivi?: Maybe<CredentialRequestMetaYivi>;
  /** The yoti credential request meta */
  yoti?: Maybe<CredentialRequestMetaYoti>;
};

/** The credential request meta connection request. */
export type CredentialRequestMetaConnection = {
  __typename?: 'CredentialRequestMetaConnection';
  edges: Array<Maybe<CredentialRequestMetaEdge>>;
  pageInfo: PageInfo;
};

/** Credential request meta. */
export type CredentialRequestMetaDatakeeper = Model & {
  __typename?: 'CredentialRequestMetaDatakeeper';
  /** The context of the credential */
  context: Scalars['NonEmpty']['output'];
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential request meta the datakeeper meta belongs to. */
  credentialRequestMeta: CredentialRequestMeta;
  /** The expiration date of the credential */
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential request meta datakeeper connection request. */
export type CredentialRequestMetaDatakeeperConnection = {
  __typename?: 'CredentialRequestMetaDatakeeperConnection';
  edges: Array<Maybe<CredentialRequestMetaDatakeeperEdge>>;
  pageInfo: PageInfo;
};

/** The credential request meta datakeeper edge request. */
export type CredentialRequestMetaDatakeeperEdge = {
  __typename?: 'CredentialRequestMetaDatakeeperEdge';
  cursor: Scalars['String']['output'];
  node: CredentialRequestMetaDatakeeper;
};

/** Fields which can be used to filter credentialRequest meta datakeeper on. Value must be camel case. */
export enum CredentialRequestMetaDatakeeperFilteringField {
  Context = 'context',
  CredentialRequestMetaUuid = 'credentialRequestMetaUuid',
  ExpirationDate = 'expirationDate'
}

/** Fields which can be used to sort credential request meta datakeeper on. Value must be camel case. */
export enum CredentialRequestMetaDatakeeperSortEnum {
  CreatedAt = 'createdAt',
  ExpirationDate = 'expirationDate'
}

/** Input options for sorting credential request meta datakeeper. */
export type CredentialRequestMetaDatakeeperSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialRequestMetaDatakeeperSortEnum;
};

/** The credential request meta edge request. */
export type CredentialRequestMetaEdge = {
  __typename?: 'CredentialRequestMetaEdge';
  cursor: Scalars['String']['output'];
  node: CredentialRequestMeta;
};

/** Fields which can be used to filter credential request meta on. Value must be camel case. */
export enum CredentialRequestMetaFilteringField {
  CredentialRequestUuid = 'credentialRequestUuid'
}

/** Fields which can be used to sort credential request meta on. Value must be camel case. */
export enum CredentialRequestMetaSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential request meta. */
export type CredentialRequestMetaSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialRequestMetaSortEnum;
};

/** Credential request meta type. */
export enum CredentialRequestMetaType {
  Datakeeper = 'DATAKEEPER',
  None = 'NONE',
  Yivi = 'YIVI',
  Yoti = 'YOTI'
}

/** Credential request meta. */
export type CredentialRequestMetaYivi = Model & {
  __typename?: 'CredentialRequestMetaYivi';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential request meta the yivi meta belongs to. */
  credentialRequestMeta: CredentialRequestMeta;
  /** The identifier of this credential */
  id?: Maybe<Scalars['NonEmpty']['output']>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential request meta yivi connection request. */
export type CredentialRequestMetaYiviConnection = {
  __typename?: 'CredentialRequestMetaYiviConnection';
  edges: Array<Maybe<CredentialRequestMetaYiviEdge>>;
  pageInfo: PageInfo;
};

/** The credential request meta yivi edge request. */
export type CredentialRequestMetaYiviEdge = {
  __typename?: 'CredentialRequestMetaYiviEdge';
  cursor: Scalars['String']['output'];
  node: CredentialRequestMetaYivi;
};

/** Fields which can be used to filter credentialRequest meta yivi on. Value must be camel case. */
export enum CredentialRequestMetaYiviFilteringField {
  CredentialRequestMetaUuid = 'credentialRequestMetaUuid',
  Id = 'id'
}

/** Fields which can be used to sort credential request meta yivi on. Value must be camel case. */
export enum CredentialRequestMetaYiviSortEnum {
  CreatedAt = 'createdAt',
  Id = 'id'
}

/** Input options for sorting credential request meta yivi. */
export type CredentialRequestMetaYiviSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialRequestMetaYiviSortEnum;
};

/** Credential request meta. */
export type CredentialRequestMetaYoti = Model & {
  __typename?: 'CredentialRequestMetaYoti';
  /** The display configuration category of the credential */
  category: CredentialRequestMetaYotiCategoryType;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential request meta the yoti meta belongs to. */
  credentialRequestMeta: CredentialRequestMeta;
  /** The icon of the credential */
  icon: Scalars['NonEmpty']['output'];
  /** The identifier of the credential */
  identifier: Scalars['NonEmpty']['output'];
  /** The info uri of the credential */
  infoUri: Scalars['URL']['output'];
  /** The display configuration logo of the credential */
  logo?: Maybe<Scalars['NonEmpty']['output']>;
  /** The registered id for credential request */
  registeredId?: Maybe<Scalars['NonEmpty']['output']>;
  /** The registered name for credential request */
  registeredName?: Maybe<Scalars['NonEmpty']['output']>;
  /** The display configuration subtitle of the credential */
  subtitle: Scalars['NonEmpty']['output'];
  /** The display configuration title of the credential */
  title: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** Credential request meta yoti category type */
export enum CredentialRequestMetaYotiCategoryType {
  Education = 'EDUCATION',
  Employment = 'EMPLOYMENT',
  Other = 'OTHER'
}

/** The credential request meta yoti connection request. */
export type CredentialRequestMetaYotiConnection = {
  __typename?: 'CredentialRequestMetaYotiConnection';
  edges: Array<Maybe<CredentialRequestMetaYotiEdge>>;
  pageInfo: PageInfo;
};

/** The credential request meta yoti edge request. */
export type CredentialRequestMetaYotiEdge = {
  __typename?: 'CredentialRequestMetaYotiEdge';
  cursor: Scalars['String']['output'];
  node: CredentialRequestMetaYoti;
};

/** Fields which can be used to filter credentialRequest meta yoti on. Value must be camel case. */
export enum CredentialRequestMetaYotiFilteringField {
  CredentialRequestMetaUuid = 'credentialRequestMetaUuid',
  Identifier = 'identifier'
}

/** Fields which can be used to sort credential request meta yoti on. Value must be camel case. */
export enum CredentialRequestMetaYotiSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential request meta yoti. */
export type CredentialRequestMetaYotiSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialRequestMetaYotiSortEnum;
};

/** Fields which can be used to sort credential request on. Value must be camel case. */
export enum CredentialRequestSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  Type = 'type'
}

/** Input options for sorting credential request. */
export type CredentialRequestSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialRequestSortEnum;
};

/** Credential request state. */
export type CredentialRequestState = Model & {
  __typename?: 'CredentialRequestState';
  /** Is delete allowed */
  canDelete: Scalars['Boolean']['output'];
  /** Is update allowed */
  canUpdate: Scalars['Boolean']['output'];
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The collection of credential request workflow . */
  credentialRequestWorkflows: CredentialRequestWorkflowConnection;
  /** The collection of locale */
  locale: CredentialRequestStateLocaleConnection;
  /** The name of the state */
  name: CredentialRequestStates;
  /** The provider. */
  provider: Provider;
  /** The roles allowed to take action */
  roles: Array<OrganizationUserRole>;
  /** The json schema for the required meta */
  schema: Scalars['JSONObject']['output'];
  /** The transition from */
  transitionFrom: CredentialRequestStateConnection;
  /** The transition to */
  transitionTo: CredentialRequestStateConnection;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** Credential request state. */
export type CredentialRequestStateCredentialRequestWorkflowsArgs = {
  input?: InputMaybe<FindManyCredentialRequestWorkflowInput>;
};


/** Credential request state. */
export type CredentialRequestStateLocaleArgs = {
  input?: InputMaybe<FindManyCredentialRequestStateLocaleInput>;
};


/** Credential request state. */
export type CredentialRequestStateTransitionFromArgs = {
  input?: InputMaybe<FindManyCredentialRequestStateInput>;
};


/** Credential request state. */
export type CredentialRequestStateTransitionToArgs = {
  input?: InputMaybe<FindManyCredentialRequestStateInput>;
};

/** The credential request state connection request. */
export type CredentialRequestStateConnection = {
  __typename?: 'CredentialRequestStateConnection';
  edges: Array<Maybe<CredentialRequestStateEdge>>;
  pageInfo: PageInfo;
};

/** The credential request state edge request. */
export type CredentialRequestStateEdge = {
  __typename?: 'CredentialRequestStateEdge';
  cursor: Scalars['String']['output'];
  node: CredentialRequestState;
};

/** Fields which can be used to filter credentialRequest state  on. Value must be camel case. */
export enum CredentialRequestStateFilteringField {
  Name = 'name',
  Type = 'type'
}

/** CredentialRequestState locale definition. */
export type CredentialRequestStateLocale = Model & {
  __typename?: 'CredentialRequestStateLocale';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credentialRequestState the locale belongs to. */
  credentialRequestState: CredentialRequestState;
  /** The i18n object */
  i18n: Scalars['JSONObject']['output'];
  /** The locale */
  locale: Scalars['Locale']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credentialRequestState locale connection definition. */
export type CredentialRequestStateLocaleConnection = {
  __typename?: 'CredentialRequestStateLocaleConnection';
  edges: Array<Maybe<CredentialRequestStateLocaleEdge>>;
  pageInfo: PageInfo;
};

/** The credentialRequestState locale edge definition. */
export type CredentialRequestStateLocaleEdge = {
  __typename?: 'CredentialRequestStateLocaleEdge';
  cursor: Scalars['String']['output'];
  node: CredentialRequestStateLocale;
};

/** Fields which can be used to filter credentialRequestState locale on. Value must be camel case. */
export enum CredentialRequestStateLocaleFilteringField {
  CredentialRequestStateUuid = 'credentialRequestStateUuid',
  Locale = 'locale'
}

/** Fields which can be used to sort credentialRequestState locale on. Value must be camel case. */
export enum CredentialRequestStateLocaleSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credentialRequestState locale. */
export type CredentialRequestStateLocaleSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialRequestStateLocaleSortEnum;
};

/** Fields which can be used to sort credential request state  on. Value must be camel case. */
export enum CredentialRequestStateSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  Type = 'type'
}

/** Input options for sorting credential request state . */
export type CredentialRequestStateSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialRequestStateSortEnum;
};

/** Credential request states */
export enum CredentialRequestStates {
  Activated = 'ACTIVATED',
  Completed = 'COMPLETED',
  Created = 'CREATED',
  CredentialDefinitionAccepted = 'CREDENTIAL_DEFINITION_ACCEPTED',
  CredentialDefinitionInitiated = 'CREDENTIAL_DEFINITION_INITIATED',
  CredentialDefinitionRegistered = 'CREDENTIAL_DEFINITION_REGISTERED',
  Draft = 'DRAFT',
  Pending = 'PENDING',
  PullRequestCreated = 'PULL_REQUEST_CREATED',
  PullRequestMerged = 'PULL_REQUEST_MERGED',
  Reviewed = 'REVIEWED'
}

/** Credential request workflow. */
export type CredentialRequestWorkflow = Model & {
  __typename?: 'CredentialRequestWorkflow';
  /** The comments */
  comments?: Maybe<Scalars['String']['output']>;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential request the workflow belongs to. */
  credentialRequest: CredentialRequest;
  /** The credential request workflow state the workflow belongs to. */
  credentialRequestState: CredentialRequestState;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential request workflow connection request. */
export type CredentialRequestWorkflowConnection = {
  __typename?: 'CredentialRequestWorkflowConnection';
  edges: Array<Maybe<CredentialRequestWorkflowEdge>>;
  pageInfo: PageInfo;
};

/** The credential request workflow edge request. */
export type CredentialRequestWorkflowEdge = {
  __typename?: 'CredentialRequestWorkflowEdge';
  cursor: Scalars['String']['output'];
  node: CredentialRequestWorkflow;
};

/** Fields which can be used to filter credentialRequest workflow on. Value must be camel case. */
export enum CredentialRequestWorkflowFilteringField {
  Uuid = 'uuid'
}

/** Fields which can be used to sort credential request workflow on. Value must be camel case. */
export enum CredentialRequestWorkflowSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential request workflow. */
export type CredentialRequestWorkflowSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialRequestWorkflowSortEnum;
};

/** Fields which can be used to sort credential on. Value must be camel case. */
export enum CredentialSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  State = 'state'
}

/** Input options for sorting credential. */
export type CredentialSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialSortEnum;
};

/** Currency */
export enum Currency {
  Eur = 'EUR',
  Usd = 'USD'
}

/** Currency Codes (ISO 4217 Standard) */
export enum CurrencyCode {
  Aed = 'AED',
  Afn = 'AFN',
  All = 'ALL',
  Amd = 'AMD',
  Ang = 'ANG',
  Aoa = 'AOA',
  Ars = 'ARS',
  Aud = 'AUD',
  Awg = 'AWG',
  Azn = 'AZN',
  Bam = 'BAM',
  Bbd = 'BBD',
  Bdt = 'BDT',
  Bgn = 'BGN',
  Bhd = 'BHD',
  Bif = 'BIF',
  Bmd = 'BMD',
  Bnd = 'BND',
  Bob = 'BOB',
  Bov = 'BOV',
  Brl = 'BRL',
  Bsd = 'BSD',
  Btn = 'BTN',
  Bwp = 'BWP',
  Byr = 'BYR',
  Bzd = 'BZD',
  Cad = 'CAD',
  Cdf = 'CDF',
  Che = 'CHE',
  Chf = 'CHF',
  Chw = 'CHW',
  Clf = 'CLF',
  Clp = 'CLP',
  Cny = 'CNY',
  Cop = 'COP',
  Cou = 'COU',
  Crc = 'CRC',
  Cuc = 'CUC',
  Cup = 'CUP',
  Cve = 'CVE',
  Czk = 'CZK',
  Djf = 'DJF',
  Dkk = 'DKK',
  Dop = 'DOP',
  Dzd = 'DZD',
  Egp = 'EGP',
  Ern = 'ERN',
  Etb = 'ETB',
  Eur = 'EUR',
  Fjd = 'FJD',
  Fkp = 'FKP',
  Gbp = 'GBP',
  Gel = 'GEL',
  Ghs = 'GHS',
  Gip = 'GIP',
  Gmd = 'GMD',
  Gnf = 'GNF',
  Gtq = 'GTQ',
  Gyd = 'GYD',
  Hkd = 'HKD',
  Hnl = 'HNL',
  Hrk = 'HRK',
  Htg = 'HTG',
  Huf = 'HUF',
  Idr = 'IDR',
  Ils = 'ILS',
  Inr = 'INR',
  Iqd = 'IQD',
  Irr = 'IRR',
  Isk = 'ISK',
  Jmd = 'JMD',
  Jod = 'JOD',
  Jpy = 'JPY',
  Kes = 'KES',
  Kgs = 'KGS',
  Khr = 'KHR',
  Kmf = 'KMF',
  Kpw = 'KPW',
  Krw = 'KRW',
  Kwd = 'KWD',
  Kyd = 'KYD',
  Kzt = 'KZT',
  Lak = 'LAK',
  Lbp = 'LBP',
  Lkr = 'LKR',
  Lrd = 'LRD',
  Lsl = 'LSL',
  Lyd = 'LYD',
  Mad = 'MAD',
  Mdl = 'MDL',
  Mga = 'MGA',
  Mkd = 'MKD',
  Mmk = 'MMK',
  Mnt = 'MNT',
  Mop = 'MOP',
  Mro = 'MRO',
  Mur = 'MUR',
  Mvr = 'MVR',
  Mwk = 'MWK',
  Mxn = 'MXN',
  Mxv = 'MXV',
  Myr = 'MYR',
  Mzn = 'MZN',
  Nad = 'NAD',
  Ngn = 'NGN',
  Nio = 'NIO',
  Nok = 'NOK',
  Npr = 'NPR',
  Nzd = 'NZD',
  Omr = 'OMR',
  Pab = 'PAB',
  Pen = 'PEN',
  Pgk = 'PGK',
  Php = 'PHP',
  Pkr = 'PKR',
  Pln = 'PLN',
  Pyg = 'PYG',
  Qar = 'QAR',
  Ron = 'RON',
  Rsd = 'RSD',
  Rub = 'RUB',
  Rwf = 'RWF',
  Sar = 'SAR',
  Sbd = 'SBD',
  Scr = 'SCR',
  Sdg = 'SDG',
  Sek = 'SEK',
  Sgd = 'SGD',
  Shp = 'SHP',
  Sll = 'SLL',
  Sos = 'SOS',
  Srd = 'SRD',
  Ssp = 'SSP',
  Std = 'STD',
  Syp = 'SYP',
  Szl = 'SZL',
  Thb = 'THB',
  Tjs = 'TJS',
  Tmt = 'TMT',
  Tnd = 'TND',
  Top = 'TOP',
  Try = 'TRY',
  Ttd = 'TTD',
  Twd = 'TWD',
  Tzs = 'TZS',
  Uah = 'UAH',
  Ugx = 'UGX',
  Usd = 'USD',
  Usn = 'USN',
  Uss = 'USS',
  Uyi = 'UYI',
  Uyu = 'UYU',
  Uzs = 'UZS',
  Vef = 'VEF',
  Vnd = 'VND',
  Vuv = 'VUV',
  Wst = 'WST',
  Xaf = 'XAF',
  Xag = 'XAG',
  Xau = 'XAU',
  Xba = 'XBA',
  Xbb = 'XBB',
  Xbc = 'XBC',
  Xbd = 'XBD',
  Xcd = 'XCD',
  Xdr = 'XDR',
  Xfu = 'XFU',
  Xof = 'XOF',
  Xpd = 'XPD',
  Xpf = 'XPF',
  Xpt = 'XPT',
  Xsu = 'XSU',
  Xts = 'XTS',
  Xua = 'XUA',
  Xxx = 'XXX',
  Yer = 'YER',
  Zar = 'ZAR',
  Zmw = 'ZMW',
  Zwl = 'ZWL'
}

/** Currency units */
export enum CurrencyUnit {
  Centi = 'CENTI',
  Deci = 'DECI',
  Micro = 'MICRO',
  Milli = 'MILLI',
  Unity = 'UNITY'
}

/** Update Input */
export type DuplicateFlowAuthenticationInput = {
  /** The name of the new flow authentication. */
  name: Scalars['NonEmpty']['input'];
};

/** Update Input */
export type DuplicateFlowDisclosureInput = {
  /** The name of the new flow disclosure. */
  name: Scalars['NonEmpty']['input'];
};

/** Update Input */
export type DuplicateFlowIssuanceInput = {
  /** The name of the new flow issuance. */
  name: Scalars['NonEmpty']['input'];
};

/** Update Input */
export type DuplicateFlowSignatureInput = {
  /** The name of the new flow signature. */
  name: Scalars['NonEmpty']['input'];
};

/** Duplicate Input */
export type DuplicateStudioPlanInput = {
  /** The plan description */
  description: Scalars['NonEmpty']['input'];
  /** The name of the new studio plan. */
  name: Scalars['NonEmpty']['input'];
  /** planURN */
  planURN: Scalars['NonEmpty']['input'];
};

/** Different connectors in default query format */
export enum FilteringConnector {
  /** Filter connection in default query format as AND */
  Conjunction = 'CONJUNCTION',
  /** Filter connection in default query format as OR */
  Disjunction = 'DISJUNCTION',
  /** Filter connection in default query format as NOT */
  Negation = 'NEGATION'
}

/** All the different modes to filter on. */
export enum FilteringMode {
  /** Filter mode where value must match exactly. */
  Default = 'DEFAULT',
  /** Filter mode where value must match, but not case sensitive. */
  Insensitive = 'INSENSITIVE'
}

/** All the different types to filter on. */
export enum FilteringType {
  /** Filter type where array value must have all the elements provided in an input array */
  Every = 'EVERY',
  /** Filter type where value must exactly match with other parameter. */
  Exact = 'EXACT',
  /** Filter type where value must match elements in an input array */
  In = 'IN',
  /** Filter type where value must not match elements in an input array */
  Notin = 'NOTIN',
  /** Filter type where value must partially match with other parameter. */
  Partial = 'PARTIAL',
  /** Filter type where array value must have some of the elements provided in an input array */
  Some = 'SOME'
}

/** Input to get global OAuth methods */
export type FindGlobalOAuthMethodsInput = {
  /** The OAuth flow type */
  flow: OAuthFlowType;
  /** The redirect URI */
  redirectUri: Scalars['URL']['input'];
};

/** Input for filtering app locale on provided fields. */
export type FindManyAppLocaleFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AppLocaleFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many app locale on filters, pagination and sorting. */
export type FindManyAppLocaleInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAppLocaleFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AppLocaleSortInput>;
};

/** Input for filtering appPrerequisite locale on provided fields. */
export type FindManyAppPrerequisiteLocaleFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AppPrerequisiteLocaleFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many appPrerequisite locale on filters, pagination and sorting. */
export type FindManyAppPrerequisiteLocaleInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAppPrerequisiteLocaleFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AppPrerequisiteLocaleSortInput>;
};

/** Input for filtering app prerequisite state  on provided fields. */
export type FindManyAppPrerequisiteStateFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AppPrerequisiteStateFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many app prerequisite state  on filters, pagination and sorting. */
export type FindManyAppPrerequisiteStateInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAppPrerequisiteStateFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AppPrerequisiteStateSortInput>;
};

/** Input for filtering appPrerequisiteState locale on provided fields. */
export type FindManyAppPrerequisiteStateLocaleFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AppPrerequisiteStateLocaleFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many appPrerequisiteState locale on filters, pagination and sorting. */
export type FindManyAppPrerequisiteStateLocaleInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAppPrerequisiteStateLocaleFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AppPrerequisiteStateLocaleSortInput>;
};

/** Input for filtering app prerequisite on provided fields. */
export type FindManyAppPrerequisitesFilter = {
  /** The query connector. */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AppPrerequisiteFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many app prerequisites  on filters, pagination and sorting. */
export type FindManyAppPrerequisitesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAppPrerequisitesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AppPrerequisiteSortInput>;
};

/** Input for filtering app on provided fields. */
export type FindManyAppsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AppFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many apps on filters, pagination and sorting. */
export type FindManyAppsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAppsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AppSortInput>;
};

/** Input for filtering attribute locale on provided fields. */
export type FindManyAttributeLocaleFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeLocaleFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute locale on filters, pagination and sorting. */
export type FindManyAttributeLocaleInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeLocaleFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeLocaleSortInput>;
};

/** Input for filtering attribute meta datakeeper on provided fields. */
export type FindManyAttributeMetaDatakeeperFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeMetaDatakeeperFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute meta datakeeper on filters, pagination and sorting. */
export type FindManyAttributeMetaDatakeeperInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeMetaDatakeeperFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeMetaDatakeeperSortInput>;
};

/** Input for filtering attribute meta digidentity on provided fields. */
export type FindManyAttributeMetaDigidentityFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeMetaDigidentityFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute meta digidentity on filters, pagination and sorting. */
export type FindManyAttributeMetaDigidentityInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeMetaDigidentityFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeMetaDigidentitySortInput>;
};

/** Input for filtering attribute meta on provided fields. */
export type FindManyAttributeMetaFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeMetaFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute meta on filters, pagination and sorting. */
export type FindManyAttributeMetaInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeMetaFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeMetaSortInput>;
};

/** Input for filtering attribute meta mdoc on provided fields. */
export type FindManyAttributeMetaMdocFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeMetaMdocFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute meta mdoc on filters, pagination and sorting. */
export type FindManyAttributeMetaMdocInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeMetaMdocFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeMetaMdocSortInput>;
};

/** Input for filtering attribute meta NL Wallet on provided fields. */
export type FindManyAttributeMetaNlWalletFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeMetaNlWalletFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute meta NL Wallet on filters, pagination and sorting. */
export type FindManyAttributeMetaNlWalletInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeMetaNlWalletFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeMetaNlWalletSortInput>;
};

/** Input for filtering attribute meta nect on provided fields. */
export type FindManyAttributeMetaNectFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeMetaNectFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute meta nect on filters, pagination and sorting. */
export type FindManyAttributeMetaNectInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeMetaNectFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeMetaNectSortInput>;
};

/** Input for filtering attribute meta OID4VC on provided fields. */
export type FindManyAttributeMetaOid4VcmdocFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeMetaOid4VcmdocFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute meta OID4VC on filters, pagination and sorting. */
export type FindManyAttributeMetaOid4VcmdocInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeMetaOid4VcmdocFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeMetaOid4VcmdocSortInput>;
};

/** Input for filtering attribute meta OID4VC on provided fields. */
export type FindManyAttributeMetaOid4VcsdjwtFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeMetaOid4VcsdjwtFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute meta OID4VC on filters, pagination and sorting. */
export type FindManyAttributeMetaOid4VcsdjwtInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeMetaOid4VcsdjwtFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeMetaOid4VcsdjwtSortInput>;
};

/** Input for filtering attribute meta ReadID on provided fields. */
export type FindManyAttributeMetaReadIdFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeMetaReadIdFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute meta ReadID on filters, pagination and sorting. */
export type FindManyAttributeMetaReadIdInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeMetaReadIdFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeMetaReadIdSortInput>;
};

/** Input for filtering attribute meta truid on provided fields. */
export type FindManyAttributeMetaTruidFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeMetaTruidFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute meta truid on filters, pagination and sorting. */
export type FindManyAttributeMetaTruidInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeMetaTruidFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeMetaTruidSortInput>;
};

/** Input for filtering attribute meta yivi on provided fields. */
export type FindManyAttributeMetaYiviFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeMetaYiviFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute meta yivi on filters, pagination and sorting. */
export type FindManyAttributeMetaYiviInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeMetaYiviFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeMetaYiviSortInput>;
};

/** Input for filtering attribute meta yoti on provided fields. */
export type FindManyAttributeMetaYotiFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeMetaYotiFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute meta yoti on filters, pagination and sorting. */
export type FindManyAttributeMetaYotiInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeMetaYotiFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeMetaYotiSortInput>;
};

/** Input for filtering attribute request locale on provided fields. */
export type FindManyAttributeRequestLocaleFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeRequestLocaleFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute request locale on filters, pagination and sorting. */
export type FindManyAttributeRequestLocaleInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeRequestLocaleFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeRequestLocaleSortInput>;
};

/** Input for filtering attribute request meta datakeeper on provided fields. */
export type FindManyAttributeRequestMetaDatakeeperFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeRequestMetaDatakeeperFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute request meta datakeeper on filters, pagination and sorting. */
export type FindManyAttributeRequestMetaDatakeeperInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeRequestMetaDatakeeperFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeRequestMetaDatakeeperSortInput>;
};

/** Input for filtering attribute request meta on provided fields. */
export type FindManyAttributeRequestMetaFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeRequestMetaFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute request meta on filters, pagination and sorting. */
export type FindManyAttributeRequestMetaInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeRequestMetaFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeRequestMetaSortInput>;
};

/** Input for filtering attribute request meta yivi on provided fields. */
export type FindManyAttributeRequestMetaYiviFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeRequestMetaYiviFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute request meta yivi on filters, pagination and sorting. */
export type FindManyAttributeRequestMetaYiviInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeRequestMetaYiviFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeRequestMetaYiviSortInput>;
};

/** Input for filtering attribute request meta yoti on provided fields. */
export type FindManyAttributeRequestMetaYotiFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeRequestMetaYotiFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute request meta yoti on filters, pagination and sorting. */
export type FindManyAttributeRequestMetaYotiInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeRequestMetaYotiFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeRequestMetaYotiSortInput>;
};

/** Input for filtering attribute request on provided fields. */
export type FindManyAttributeRequestsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeRequestFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute request on filters, pagination and sorting. */
export type FindManyAttributeRequestsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeRequestsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeRequestSortInput>;
};

/** Input for filtering attribute on provided fields. */
export type FindManyAttributesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attributes on filters, pagination and sorting. */
export type FindManyAttributesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyBillingMethodsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: BillingMethodFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many billing on filters, pagination and sorting. */
export type FindManyBillingMethodsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyBillingMethodsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<BillingMethodSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyBillingPlanPaymentsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: BillingPlanPaymentFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many billing on filters, pagination and sorting. */
export type FindManyBillingPlanPaymentsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyBillingPlanPaymentsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<BillingPlanPaymentSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyBillingPlansFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: BillingPlanFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many billing on filters, pagination and sorting. */
export type FindManyBillingPlansInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyBillingPlansFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<BillingPlanSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyBillingWalletPaymentsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: BillingWalletPaymentFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many billing on filters, pagination and sorting. */
export type FindManyBillingWalletPaymentsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyBillingWalletPaymentsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<BillingWalletPaymentSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyBillingWalletTransactionsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: BillingWalletTransactionFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many billing on filters, pagination and sorting. */
export type FindManyBillingWalletTransactionsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyBillingWalletTransactionsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<BillingWalletTransactionSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyBillingWalletsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: BillingWalletFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many billing on filters, pagination and sorting. */
export type FindManyBillingWalletsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyBillingWalletsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<BillingWalletSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyBillingsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: BillingFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many billing on filters, pagination and sorting. */
export type FindManyBillingsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyBillingsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<BillingSortInput>;
};

/** Input for filtering credential locale on provided fields. */
export type FindManyCredentialLocaleFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialLocaleFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential locale on filters, pagination and sorting. */
export type FindManyCredentialLocaleInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialLocaleFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialLocaleSortInput>;
};

/** Input for filtering credential meta datakeeper on provided fields. */
export type FindManyCredentialMetaDatakeeperFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialMetaDatakeeperFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential meta datakeeper on filters, pagination and sorting. */
export type FindManyCredentialMetaDatakeeperInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialMetaDatakeeperFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialMetaDatakeeperSortInput>;
};

/** Input for filtering credential meta digidentity on provided fields. */
export type FindManyCredentialMetaDigidentityFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialMetaDigidentityFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential meta digidentity on filters, pagination and sorting. */
export type FindManyCredentialMetaDigidentityInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialMetaDigidentityFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialMetaDigidentitySortInput>;
};

/** Input for filtering credential meta on provided fields. */
export type FindManyCredentialMetaFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialMetaFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential meta on filters, pagination and sorting. */
export type FindManyCredentialMetaInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialMetaFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialMetaSortInput>;
};

/** Input for filtering credential meta mdoc on provided fields. */
export type FindManyCredentialMetaMdocFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialMetaMdocFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential meta mdoc on filters, pagination and sorting. */
export type FindManyCredentialMetaMdocInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialMetaMdocFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialMetaMdocSortInput>;
};

/** Input for filtering credential meta NL Wallet on provided fields. */
export type FindManyCredentialMetaNlWalletFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialMetaNlWalletFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential meta NL Wallet on filters, pagination and sorting. */
export type FindManyCredentialMetaNlWalletInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialMetaNlWalletFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialMetaNlWalletSortInput>;
};

/** Input for filtering credential meta nect on provided fields. */
export type FindManyCredentialMetaNectFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialMetaNectFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential meta nect on filters, pagination and sorting. */
export type FindManyCredentialMetaNectInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialMetaNectFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialMetaNectSortInput>;
};

/** Input for filtering credential meta OID4VC mdoc on provided fields. */
export type FindManyCredentialMetaOid4VcmdocFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialMetaOid4VcmdocFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential meta OID4VC mdoc on filters, pagination and sorting. */
export type FindManyCredentialMetaOid4VcmdocInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialMetaOid4VcmdocFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialMetaOid4VcmdocSortInput>;
};

/** Input for filtering credential meta OID4VC SD-JWT on provided fields. */
export type FindManyCredentialMetaOid4VcsdjwtFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialMetaOid4VcsdjwtFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential meta OID4VC SD-JWT on filters, pagination and sorting. */
export type FindManyCredentialMetaOid4VcsdjwtInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialMetaOid4VcsdjwtFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialMetaOid4VcsdjwtSortInput>;
};

/** Input for filtering credential meta ReadID on provided fields. */
export type FindManyCredentialMetaReadIdFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialMetaReadIdFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential meta ReadID on filters, pagination and sorting. */
export type FindManyCredentialMetaReadIdInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialMetaReadIdFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialMetaReadIdSortInput>;
};

/** Input for filtering credential meta truid on provided fields. */
export type FindManyCredentialMetaTruidFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialMetaTruidFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential meta truid on filters, pagination and sorting. */
export type FindManyCredentialMetaTruidInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialMetaTruidFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialMetaTruidSortInput>;
};

/** Input for filtering credential meta yivi on provided fields. */
export type FindManyCredentialMetaYiviFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialMetaYiviFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential meta yivi on filters, pagination and sorting. */
export type FindManyCredentialMetaYiviInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialMetaYiviFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialMetaYiviSortInput>;
};

/** Input for filtering credential meta yoti on provided fields. */
export type FindManyCredentialMetaYotiFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialMetaYotiFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential meta yoti on filters, pagination and sorting. */
export type FindManyCredentialMetaYotiInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialMetaYotiFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialMetaYotiSortInput>;
};

/** Input for filtering credential request locale on provided fields. */
export type FindManyCredentialRequestLocaleFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialRequestLocaleFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential request locale on filters, pagination and sorting. */
export type FindManyCredentialRequestLocaleInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialRequestLocaleFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialRequestLocaleSortInput>;
};

/** Input for filtering credential request meta datakeeper on provided fields. */
export type FindManyCredentialRequestMetaDatakeeperFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialRequestMetaDatakeeperFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential request meta datakeeper on filters, pagination and sorting. */
export type FindManyCredentialRequestMetaDatakeeperInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialRequestMetaDatakeeperFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialRequestMetaDatakeeperSortInput>;
};

/** Input for filtering credential request meta on provided fields. */
export type FindManyCredentialRequestMetaFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialRequestMetaFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential request meta on filters, pagination and sorting. */
export type FindManyCredentialRequestMetaInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialRequestMetaFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialRequestMetaSortInput>;
};

/** Input for filtering credential request meta yivi on provided fields. */
export type FindManyCredentialRequestMetaYiviFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialRequestMetaYiviFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential request meta yivi on filters, pagination and sorting. */
export type FindManyCredentialRequestMetaYiviInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialRequestMetaYiviFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialRequestMetaYiviSortInput>;
};

/** Input for filtering credential request meta yoti on provided fields. */
export type FindManyCredentialRequestMetaYotiFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialRequestMetaYotiFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential request meta yoti on filters, pagination and sorting. */
export type FindManyCredentialRequestMetaYotiInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialRequestMetaYotiFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialRequestMetaYotiSortInput>;
};

/** Input for filtering credential request state on provided fields. */
export type FindManyCredentialRequestStateFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialRequestStateFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential request state on filters, pagination and sorting. */
export type FindManyCredentialRequestStateInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialRequestStateFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialRequestStateSortInput>;
};

/** Input for filtering credentialRequestState locale on provided fields. */
export type FindManyCredentialRequestStateLocaleFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialRequestStateLocaleFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credentialRequestState locale on filters, pagination and sorting. */
export type FindManyCredentialRequestStateLocaleInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialRequestStateLocaleFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialRequestStateLocaleSortInput>;
};

/** Input for filtering credential request workflow on provided fields. */
export type FindManyCredentialRequestWorkflowFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialRequestWorkflowFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential request workflow on filters, pagination and sorting. */
export type FindManyCredentialRequestWorkflowInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialRequestWorkflowFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialRequestWorkflowSortInput>;
};

/** Input for filtering credential request on provided fields. */
export type FindManyCredentialRequestsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialRequestFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential request on filters, pagination and sorting. */
export type FindManyCredentialRequestsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialRequestsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialRequestSortInput>;
};

/** Input for filtering credential on provided fields. */
export type FindManyCredentialsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credentials on filters, pagination and sorting. */
export type FindManyCredentialsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyFlowAuthenticationBrandsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowAuthenticationBrandFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many brands on filters, pagination and sorting. */
export type FindManyFlowAuthenticationBrandsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowAuthenticationBrandsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowAuthenticationBrandSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyFlowAuthenticationDomainsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowAuthenticationDomainFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many domains on filters, pagination and sorting. */
export type FindManyFlowAuthenticationDomainsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowAuthenticationDomainsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowAuthenticationDomainSortInput>;
};

/** Input for filtering flow authentication log on provided fields. */
export type FindManyFlowAuthenticationLogsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowAuthenticationLogFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow authentications on filters, pagination and sorting. */
export type FindManyFlowAuthenticationLogsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowAuthenticationLogsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowAuthenticationLogSortInput>;
};

/** Input for filtering finding many FlowAuthenticationProviderConfigurationNLWallet. */
export type FindManyFlowAuthenticationProviderConfigurationNlWalletsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowAuthenticationProviderConfigurationNlWalletFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for finding many FlowAuthenticationProviderConfigurationNLWallet. */
export type FindManyFlowAuthenticationProviderConfigurationNlWalletsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowAuthenticationProviderConfigurationNlWalletsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowAuthenticationProviderConfigurationNlWalletSortInput>;
};

/** Input for filtering FlowAuthenticationProviderConfiguration on provided fields. */
export type FindManyFlowAuthenticationProviderConfigurationsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowAuthenticationProviderConfigurationFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many FlowAuthenticationProviderConfiguration on filters, pagination and sorting. */
export type FindManyFlowAuthenticationProviderConfigurationsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowAuthenticationProviderConfigurationsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowAuthenticationProviderConfigurationSortInput>;
};

/** Input for filtering flow authentication provider on provided fields. */
export type FindManyFlowAuthenticationProvidersFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowAuthenticationProviderFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow authentication providers on filters, pagination and sorting. */
export type FindManyFlowAuthenticationProvidersInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowAuthenticationProvidersFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowAuthenticationProviderSortInput>;
};

/** Input for filtering flow authentication scope on provided fields. */
export type FindManyFlowAuthenticationScopesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowAuthenticationScopeFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow authentication scope on filters, pagination and sorting. */
export type FindManyFlowAuthenticationScopesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowAuthenticationScopesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowAuthenticationScopeSortInput>;
};

/** Input for filtering flow authentication on provided fields. */
export type FindManyFlowAuthenticationsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowAuthenticationFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow authentications on filters, pagination and sorting. */
export type FindManyFlowAuthenticationsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowAuthenticationsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowAuthenticationSortInput>;
};

/** Input for filtering flow disclosure attribute on provided attributes. */
export type FindManyFlowDisclosureAttributesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowDisclosureAttributeFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow disclosure attribute on filters, pagination and sorting. */
export type FindManyFlowDisclosureAttributesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowDisclosureAttributesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowDisclosureAttributeSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyFlowDisclosureBrandsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowDisclosureBrandFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many brands on filters, pagination and sorting. */
export type FindManyFlowDisclosureBrandsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowDisclosureBrandsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowDisclosureBrandSortInput>;
};

/** Input for filtering flow disclosure field on provided fields. */
export type FindManyFlowDisclosureCredentialsFilter = {
  /** The connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowDisclosureCredentialFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow disclosure field on filters, pagination and sorting. */
export type FindManyFlowDisclosureCredentialsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowDisclosureCredentialsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowDisclosureCredentialSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyFlowDisclosureDomainsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowDisclosureDomainFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many domains on filters, pagination and sorting. */
export type FindManyFlowDisclosureDomainsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowDisclosureDomainsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowDisclosureDomainSortInput>;
};

/** Input for filtering flow disclosure group on provided fields. */
export type FindManyFlowDisclosureGroupsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowDisclosureGroupFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow disclosure group on filters, pagination and sorting. */
export type FindManyFlowDisclosureGroupsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowDisclosureGroupsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowDisclosureGroupSortInput>;
};

/** Input for filtering flow disclosure log on provided fields. */
export type FindManyFlowDisclosureLogsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowDisclosureLogFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow disclosures on filters, pagination and sorting. */
export type FindManyFlowDisclosureLogsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowDisclosureLogsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowDisclosureLogSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyFlowDisclosureMappingsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowDisclosureMappingFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many mappings on filters, pagination and sorting. */
export type FindManyFlowDisclosureMappingsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowDisclosureMappingsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowDisclosureMappingSortInput>;
};

/** Input for filtering finding many FlowDisclosureProviderConfigurationNLWallet. */
export type FindManyFlowDisclosureProviderConfigurationNlWalletsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowDisclosureProviderConfigurationNlWalletFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for finding many FlowDisclosureProviderConfigurationNLWallet. */
export type FindManyFlowDisclosureProviderConfigurationNlWalletsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowDisclosureProviderConfigurationNlWalletsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowDisclosureProviderConfigurationNlWalletSortInput>;
};

/** Input for filtering FlowDisclosureProviderConfiguration on provided fields. */
export type FindManyFlowDisclosureProviderConfigurationsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowDisclosureProviderConfigurationFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many FlowDisclosureProviderConfiguration on filters, pagination and sorting. */
export type FindManyFlowDisclosureProviderConfigurationsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowDisclosureProviderConfigurationsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowDisclosureProviderConfigurationSortInput>;
};

/** Input for filtering flow disclosure provider on provided fields. */
export type FindManyFlowDisclosureProvidersFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowDisclosureProviderFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow disclosure providers on filters, pagination and sorting. */
export type FindManyFlowDisclosureProvidersInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowDisclosureProvidersFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowDisclosureProviderSortInput>;
};

/** Input for filtering flow disclosure on provided fields. */
export type FindManyFlowDisclosuresFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowDisclosureFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow disclosures on filters, pagination and sorting. */
export type FindManyFlowDisclosuresInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowDisclosuresFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowDisclosureSortInput>;
};

/** Input for filtering flow issuance attribute on provided attributes. */
export type FindManyFlowIssuanceAttributesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowIssuanceAttributeFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow issuance attribute on filters, pagination and sorting. */
export type FindManyFlowIssuanceAttributesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowIssuanceAttributesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowIssuanceAttributeSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyFlowIssuanceBrandsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowIssuanceBrandFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many brands on filters, pagination and sorting. */
export type FindManyFlowIssuanceBrandsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowIssuanceBrandsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowIssuanceBrandSortInput>;
};

/** Input for filtering flow issuance credential meta datakeeper on provided fields. */
export type FindManyFlowIssuanceCredentialMetaDatakeeperFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowIssuanceCredentialMetaDatakeeperFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential meta datakeeper on filters, pagination and sorting. */
export type FindManyFlowIssuanceCredentialMetaDatakeeperInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowIssuanceCredentialMetaDatakeeperFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowIssuanceCredentialMetaDatakeeperSortInput>;
};

/** Input for filtering flow issuance credential meta on provided fields. */
export type FindManyFlowIssuanceCredentialMetaFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowIssuanceCredentialMetaFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow issuance credential meta on filters, pagination and sorting. */
export type FindManyFlowIssuanceCredentialMetaInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowIssuanceCredentialMetaFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowIssuanceCredentialMetaSortInput>;
};

/** Input for filtering flow issuance credential meta yivi on provided fields. */
export type FindManyFlowIssuanceCredentialMetaYiviFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowIssuanceCredentialMetaYiviFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential meta yivi on filters, pagination and sorting. */
export type FindManyFlowIssuanceCredentialMetaYiviInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowIssuanceCredentialMetaYiviFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowIssuanceCredentialMetaYiviSortInput>;
};

/** Input for filtering flow issuance field on provided fields. */
export type FindManyFlowIssuanceCredentialsFilter = {
  /** The connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowIssuanceCredentialFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow issuance field on filters, pagination and sorting. */
export type FindManyFlowIssuanceCredentialsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowIssuanceCredentialsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowIssuanceCredentialSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyFlowIssuanceDomainsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowIssuanceDomainFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many domains on filters, pagination and sorting. */
export type FindManyFlowIssuanceDomainsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowIssuanceDomainsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowIssuanceDomainSortInput>;
};

/** Input for filtering flow issuance log on provided fields. */
export type FindManyFlowIssuanceLogsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowIssuanceLogFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow issuances on filters, pagination and sorting. */
export type FindManyFlowIssuanceLogsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowIssuanceLogsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowIssuanceLogSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyFlowIssuanceMappingsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowIssuanceMappingFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many mappings on filters, pagination and sorting. */
export type FindManyFlowIssuanceMappingsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowIssuanceMappingsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowIssuanceMappingSortInput>;
};

/** Input for filtering flow issuance provider on provided fields. */
export type FindManyFlowIssuanceProvidersFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowIssuanceProviderFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow issuance providers on filters, pagination and sorting. */
export type FindManyFlowIssuanceProvidersInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowIssuanceProvidersFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowIssuanceProviderSortInput>;
};

/** Input for filtering flow issuance on provided fields. */
export type FindManyFlowIssuancesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowIssuanceFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow issuances on filters, pagination and sorting. */
export type FindManyFlowIssuancesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowIssuancesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowIssuanceSortInput>;
};

/** Input for filtering flow signature attribute on provided attributes. */
export type FindManyFlowSignatureAttributesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowSignatureAttributeFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow signature attribute on filters, pagination and sorting. */
export type FindManyFlowSignatureAttributesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowSignatureAttributesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowSignatureAttributeSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyFlowSignatureBrandsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowSignatureBrandFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many brands on filters, pagination and sorting. */
export type FindManyFlowSignatureBrandsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowSignatureBrandsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowSignatureBrandSortInput>;
};

/** Input for filtering flow signature field on provided fields. */
export type FindManyFlowSignatureCredentialsFilter = {
  /** The connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowSignatureCredentialFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow signature field on filters, pagination and sorting. */
export type FindManyFlowSignatureCredentialsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowSignatureCredentialsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowSignatureCredentialSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyFlowSignatureDomainsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowSignatureDomainFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many domains on filters, pagination and sorting. */
export type FindManyFlowSignatureDomainsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowSignatureDomainsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowSignatureDomainSortInput>;
};

/** Input for filtering flow signature group on provided fields. */
export type FindManyFlowSignatureGroupsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowSignatureGroupFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow signature group on filters, pagination and sorting. */
export type FindManyFlowSignatureGroupsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowSignatureGroupsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowSignatureGroupSortInput>;
};

/** Input for filtering flow signature log on provided fields. */
export type FindManyFlowSignatureLogsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowSignatureLogFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow signatures on filters, pagination and sorting. */
export type FindManyFlowSignatureLogsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowSignatureLogsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowSignatureLogSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyFlowSignatureMappingsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowSignatureMappingFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many mappings on filters, pagination and sorting. */
export type FindManyFlowSignatureMappingsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowSignatureMappingsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowSignatureMappingSortInput>;
};

/** Input for filtering finding many FlowSignatureProviderConfigurationNLWallet. */
export type FindManyFlowSignatureProviderConfigurationNlWalletsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowSignatureProviderConfigurationNlWalletFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for finding many FlowSignatureProviderConfigurationNLWallet. */
export type FindManyFlowSignatureProviderConfigurationNlWalletsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowSignatureProviderConfigurationNlWalletsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowSignatureProviderConfigurationNlWalletSortInput>;
};

/** Input for filtering FlowSignatureProviderConfiguration on provided fields. */
export type FindManyFlowSignatureProviderConfigurationsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowSignatureProviderConfigurationFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many FlowSignatureProviderConfiguration on filters, pagination and sorting. */
export type FindManyFlowSignatureProviderConfigurationsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowSignatureProviderConfigurationsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowSignatureProviderConfigurationSortInput>;
};

/** Input for filtering flow signature provider on provided fields. */
export type FindManyFlowSignatureProvidersFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowSignatureProviderFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow signature providers on filters, pagination and sorting. */
export type FindManyFlowSignatureProvidersInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowSignatureProvidersFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowSignatureProviderSortInput>;
};

/** Input for filtering flow signature on provided fields. */
export type FindManyFlowSignaturesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: FlowSignatureFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow signatures on filters, pagination and sorting. */
export type FindManyFlowSignaturesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyFlowSignaturesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<FlowSignatureSortInput>;
};

/** Input for filtering issuer locale on provided fields. */
export type FindManyIssuerLocaleFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuerLocaleFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many issuer locale on filters, pagination and sorting. */
export type FindManyIssuerLocaleInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuerLocaleFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuerLocaleSortInput>;
};

/** Input for filtering issuer meta datakeeper on provided fields. */
export type FindManyIssuerMetaDatakeeperFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuerMetaDatakeeperFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many issuer meta datakeeper on filters, pagination and sorting. */
export type FindManyIssuerMetaDatakeeperInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuerMetaDatakeeperFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuerMetaDatakeeperSortInput>;
};

/** Input for filtering issuer meta on provided fields. */
export type FindManyIssuerMetaFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuerMetaFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many issuer meta on filters, pagination and sorting. */
export type FindManyIssuerMetaInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuerMetaFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuerMetaSortInput>;
};

/** Input for filtering issuer meta mdoc on provided fields. */
export type FindManyIssuerMetaMdocFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuerMetaMdocFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many issuer meta mdoc on filters, pagination and sorting. */
export type FindManyIssuerMetaMdocInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuerMetaMdocFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuerMetaMdocSortInput>;
};

/** Input for filtering issuer meta OID4VC on provided fields. */
export type FindManyIssuerMetaOid4VcmdocFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuerMetaOid4VcmdocFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many issuer meta OID4VC on filters, pagination and sorting. */
export type FindManyIssuerMetaOid4VcmdocInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuerMetaOid4VcmdocFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuerMetaOid4VcmdocSortInput>;
};

/** Input for filtering issuer meta OID4VC on provided fields. */
export type FindManyIssuerMetaOid4VcsdjwtFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuerMetaOid4VcsdjwtFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many issuer meta OID4VC on filters, pagination and sorting. */
export type FindManyIssuerMetaOid4VcsdjwtInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuerMetaOid4VcsdjwtFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuerMetaOid4VcsdjwtSortInput>;
};

/** Input for filtering issuer meta yivi on provided fields. */
export type FindManyIssuerMetaYiviFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuerMetaYiviFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many issuer meta yivi on filters, pagination and sorting. */
export type FindManyIssuerMetaYiviInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuerMetaYiviFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuerMetaYiviSortInput>;
};

/** Input for filtering issuer on provided fields. */
export type FindManyIssuersFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuerFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value?: InputMaybe<Scalars['FilteringValue']['input']>;
};

/** Input for filtering many issuers on filters, pagination and sorting. */
export type FindManyIssuersInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuersFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuerSortInput>;
};

/** Input for filtering localeConfig on provided fields. */
export type FindManyLocaleConfigsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: LocaleConfigFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many localeConfigs on filters, pagination and sorting. */
export type FindManyLocaleConfigsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyLocaleConfigsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<LocaleConfigSortInput>;
};

/** Input for filtering mappingIssuance attribute on provided fields. */
export type FindManyMappingIssuanceAttributesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: MappingIssuanceAttributeFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many mappingIssuance attributes on filters, pagination and sorting. */
export type FindManyMappingIssuanceAttributesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyMappingIssuanceAttributesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<MappingIssuanceAttributeSortInput>;
};

/** Input for filtering mappingIssuance link on provided fields. */
export type FindManyMappingIssuanceLinksFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: MappingIssuanceLinkFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many mappingIssuance on filters, pagination and sorting. */
export type FindManyMappingIssuanceLinksInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyMappingIssuanceLinksFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<MappingIssuanceLinkSortInput>;
};

/** Input for filtering mappingIssuances on provided fields. */
export type FindManyMappingIssuancesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: MappingIssuanceFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many mappingIssuances on filters, pagination and sorting. */
export type FindManyMappingIssuancesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyMappingIssuancesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<MappingIssuanceSortInput>;
};

/** Input for filtering mappingVerification attribute on provided fields. */
export type FindManyMappingVerificationAttributesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: MappingVerificationAttributeFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many mappingVerification attributes on filters, pagination and sorting. */
export type FindManyMappingVerificationAttributesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyMappingVerificationAttributesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<MappingVerificationAttributeSortInput>;
};

/** Input for filtering mappingVerification claim on provided fields. */
export type FindManyMappingVerificationClaimsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: MappingVerificationClaimFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many mappingVerification claims on filters, pagination and sorting. */
export type FindManyMappingVerificationClaimsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyMappingVerificationClaimsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<MappingVerificationClaimSortInput>;
};

/** Input for filtering mappingVerification link on provided fields. */
export type FindManyMappingVerificationLinksFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: MappingVerificationLinkFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many mappingVerification claims on filters, pagination and sorting. */
export type FindManyMappingVerificationLinksInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyMappingVerificationLinksFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<MappingVerificationLinkSortInput>;
};

/** Input for filtering mappingVerifications on provided fields. */
export type FindManyMappingVerificationsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: MappingVerificationFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many mappingVerifications on filters, pagination and sorting. */
export type FindManyMappingVerificationsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyMappingVerificationsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<MappingVerificationSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyOAuthProvidersFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: OAuthProviderFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many user oauthProvider on filters, pagination and sorting. */
export type FindManyOAuthProvidersInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyOAuthProvidersFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OAuthProviderSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyOrganizationAddressesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: OrganizationAddressFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many user organization on filters, pagination and sorting. */
export type FindManyOrganizationAddressesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyOrganizationAddressesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationAddressSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyOrganizationAlertDeprecationsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: OrganizationAlertDeprecationFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many user organization on filters, pagination and sorting. */
export type FindManyOrganizationAlertDeprecationsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyOrganizationAlertDeprecationsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationAlertDeprecationSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyOrganizationAlertsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: OrganizationAlertFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many user organization on filters, pagination and sorting. */
export type FindManyOrganizationAlertsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyOrganizationAlertsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationAlertSortInput>;
};

/** Input for filtering organization app meta datakeeper on provided fields. */
export type FindManyOrganizationAppMetaDatakeeperFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: OrganizationAppMetaDatakeeperFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many organization app meta datakeeper on filters, pagination and sorting. */
export type FindManyOrganizationAppMetaDatakeeperInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyOrganizationAppMetaDatakeeperFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationAppMetaDatakeeperSortInput>;
};

/** Input for filtering organization app meta on provided fields. */
export type FindManyOrganizationAppMetaFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: OrganizationAppMetaFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many organization app meta on filters, pagination and sorting. */
export type FindManyOrganizationAppMetaInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyOrganizationAppMetaFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationAppMetaSortInput>;
};

/** Input for filtering organization app meta kiwa on provided fields. */
export type FindManyOrganizationAppMetaKiwaFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: OrganizationAppMetaKiwaFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many organization app meta kiwa on filters, pagination and sorting. */
export type FindManyOrganizationAppMetaKiwaInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyOrganizationAppMetaKiwaFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationAppMetaKiwaSortInput>;
};

/** Input for filtering organization app meta yoti on provided fields. */
export type FindManyOrganizationAppMetaYotiFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: OrganizationAppMetaYotiFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many organization app meta yoti on filters, pagination and sorting. */
export type FindManyOrganizationAppMetaYotiInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyOrganizationAppMetaYotiFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationAppMetaYotiSortInput>;
};

/** Input for filtering organization app prerequisite on provided fields. */
export type FindManyOrganizationAppPrerequisiteFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: OrganizationAppPrerequisiteFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many organization app prerequisite on filters, pagination and sorting. */
export type FindManyOrganizationAppPrerequisiteInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyOrganizationAppPrerequisiteFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationAppPrerequisiteSortInput>;
};

/** Input for filtering organization app prerequisite workflow on provided fields. */
export type FindManyOrganizationAppPrerequisiteWorkflowFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: OrganizationAppPrerequisiteWorkflowFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many organization app prerequisite workflow on filters, pagination and sorting. */
export type FindManyOrganizationAppPrerequisiteWorkflowInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyOrganizationAppPrerequisiteWorkflowFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationAppPrerequisiteWorkflowSortInput>;
};

/** Input for filtering app on provided fields. */
export type FindManyOrganizationAppsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: OrganizationAppFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many apps on filters, pagination and sorting. */
export type FindManyOrganizationAppsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyOrganizationAppsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationAppSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyOrganizationBrandsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: OrganizationBrandFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many brands on filters, pagination and sorting. */
export type FindManyOrganizationBrandsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyOrganizationBrandsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationBrandSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyOrganizationClientsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: OrganizationClientFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many tokens on filters, pagination and sorting. */
export type FindManyOrganizationClientsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyOrganizationClientsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationClientSortInput>;
};

/** Input for filtering OrganizationDomainOAuthProvider on provided fields. */
export type FindManyOrganizationDomainOAuthProvidersFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: OrganizationDomainOAuthProviderFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many apps on filters, pagination and sorting. */
export type FindManyOrganizationDomainOAuthProvidersInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyOrganizationDomainOAuthProvidersFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationDomainOAuthProviderSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyOrganizationDomainValidationsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: OrganizationDomainValidationFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many domain validations on filters, pagination and sorting. */
export type FindManyOrganizationDomainValidationsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyOrganizationDomainValidationsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationDomainValidationSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyOrganizationDomainsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: OrganizationDomainFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many domains on filters, pagination and sorting. */
export type FindManyOrganizationDomainsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyOrganizationDomainsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationDomainSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyOrganizationNotificationEventsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: OrganizationNotificationEventFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many user organization on filters, pagination and sorting. */
export type FindManyOrganizationNotificationEventsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyOrganizationNotificationEventsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationNotificationEventSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyOrganizationNotificationsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: OrganizationNotificationFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many user organization on filters, pagination and sorting. */
export type FindManyOrganizationNotificationsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyOrganizationNotificationsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationNotificationSortInput>;
};

/** Input for filtering OrganizationQuota on provided fields. */
export type FindManyOrganizationQuotasFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: OrganizationQuotaFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many OrganizationQuota on filters, pagination and sorting. */
export type FindManyOrganizationQuotasInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyOrganizationQuotasFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationQuotaSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyOrganizationSecretsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: OrganizationSecretFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many secrets on filters, pagination and sorting. */
export type FindManyOrganizationSecretsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyOrganizationSecretsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationSecretSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyOrganizationUsersFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: OrganizationUserFilteringField;
  /** The filter mode */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many users on filters, pagination and sorting. */
export type FindManyOrganizationUsersInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyOrganizationUsersFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationUserSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyOrganizationsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: OrganizationFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many user organization on filters, pagination and sorting. */
export type FindManyOrganizationsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyOrganizationsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyPaymentProviderEventsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: PaymentProviderEventFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many billing on filters, pagination and sorting. */
export type FindManyPaymentProviderEventsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyPaymentProviderEventsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<PaymentProviderEventSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyPaymentProviderInvoicesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: PaymentProviderInvoiceFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many billing on filters, pagination and sorting. */
export type FindManyPaymentProviderInvoicesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyPaymentProviderInvoicesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<PaymentProviderInvoiceSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyPaymentProviderMethodsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: PaymentProviderMethodFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many billing on filters, pagination and sorting. */
export type FindManyPaymentProviderMethodsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyPaymentProviderMethodsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<PaymentProviderMethodSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyPaymentProviderOrganizationsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: PaymentProviderOrganizationFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many billing on filters, pagination and sorting. */
export type FindManyPaymentProviderOrganizationsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyPaymentProviderOrganizationsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<PaymentProviderOrganizationSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyPaymentProvidersFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: PaymentProviderFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many billing on filters, pagination and sorting. */
export type FindManyPaymentProvidersInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyPaymentProvidersFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<PaymentProviderSortInput>;
};

/** Filtering input */
export type FindManyProviderAppMetaFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: ProviderAppMetaFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Find many input */
export type FindManyProviderAppMetaInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyProviderAppMetaFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<ProviderAppMetaSortInput>;
};

/** Filtering input */
export type FindManyProviderAppMetaOid4VcFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: ProviderAppMetaOid4VcFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Find Many Input */
export type FindManyProviderAppMetaOid4VcInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyProviderAppMetaOid4VcFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<ProviderAppMetaOid4VcSortInput>;
};

/** Input for filtering ProviderApp on provided fields. */
export type FindManyProviderAppsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: ProviderAppFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many apps on filters, pagination and sorting. */
export type FindManyProviderAppsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyProviderAppsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<ProviderAppSortInput>;
};

/** Input for filtering provider locale on provided fields. */
export type FindManyProviderLocaleFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: ProviderLocaleFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many provider locale on filters, pagination and sorting. */
export type FindManyProviderLocaleInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyProviderLocaleFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<ProviderLocaleSortInput>;
};

/** Input for filtering provider on provided fields. */
export type FindManyProvidersFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: ProviderFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many providers for an organization on filters, pagination and sorting. */
export type FindManyProvidersForOrganizationInput = {
  /** Whether the apps are enabled or disabled. Undefiend means all apps. */
  appsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyProvidersFilter>>;
  /** Organization UUID */
  organizationUuid: Scalars['UUID']['input'];
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<ProviderSortInput>;
};

/** Input for filtering many providers on filters, pagination and sorting. */
export type FindManyProvidersInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyProvidersFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<ProviderSortInput>;
};

/** Input for filtering scheme locale on provided fields. */
export type FindManySchemeLocaleFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: SchemeLocaleFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many scheme locale on filters, pagination and sorting. */
export type FindManySchemeLocaleInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManySchemeLocaleFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<SchemeLocaleSortInput>;
};

/** Input for filtering scheme on provided fields. */
export type FindManySchemesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: SchemeFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many schemes on filters, pagination and sorting. */
export type FindManySchemesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManySchemesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<SchemeSortInput>;
};

/** Input for filtering scope claim on provided fields. */
export type FindManyScopeClaimsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: ScopeClaimFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many scopeResources on filters, pagination and sorting. */
export type FindManyScopeClaimsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyScopeClaimsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<ScopeClaimSortInput>;
};

/** Input for filtering scope locale on provided fields. */
export type FindManyScopeLocaleFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: ScopeLocaleFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many scope locale on filters, pagination and sorting. */
export type FindManyScopeLocaleInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyScopeLocaleFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<ScopeLocaleSortInput>;
};

/** Input for filtering scope resource on provided fields. */
export type FindManyScopeResourcesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: ScopeResourceFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many scopeResources on filters, pagination and sorting. */
export type FindManyScopeResourcesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyScopeResourcesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<ScopeResourceSortInput>;
};

/** Input for filtering scope on provided fields. */
export type FindManyScopesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: ScopeFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many scopes on filters, pagination and sorting. */
export type FindManyScopesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyScopesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<ScopeSortInput>;
};

/** Input for filtering StudioPlanControlOverride on provided fields. */
export type FindManyStudioPlanControlOverridesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: StudioPlanControlOverrideFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many StudioPlanControlOverride on filters, pagination and sorting. */
export type FindManyStudioPlanControlOverridesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyStudioPlanControlOverridesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<StudioPlanControlOverrideSortInput>;
};

/** Input for filtering StudioPlanControl on provided fields. */
export type FindManyStudioPlanControlsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: StudioPlanControlFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many StudioPlanControl on filters, pagination and sorting. */
export type FindManyStudioPlanControlsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyStudioPlanControlsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<StudioPlanControlSortInput>;
};

/** Input for filtering StudioPlanInterval on provided fields. */
export type FindManyStudioPlanIntervalsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: StudioPlanIntervalFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many StudioPlanInterval on filters, pagination and sorting. */
export type FindManyStudioPlanIntervalsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyStudioPlanIntervalsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<StudioPlanIntervalSortInput>;
};

/** Input for filtering StudioPlanOrganization on provided fields. */
export type FindManyStudioPlanOrganizationsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: StudioPlanOrganizationFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many StudioPlanOrganization on filters, pagination and sorting. */
export type FindManyStudioPlanOrganizationsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyStudioPlanOrganizationsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<StudioPlanOrganizationSortInput>;
};

/** Input for filtering StudioPlan on provided fields. */
export type FindManyStudioPlansFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: StudioPlanFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many StudioPlan on filters, pagination and sorting. */
export type FindManyStudioPlansInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyStudioPlansFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<StudioPlanSortInput>;
};

/** Input for filtering userInvitation on provided fields. */
export type FindManyUserInvitationsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: UserInvitationFilteringField;
  /** The filter mode */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many userInvitations on filters, pagination and sorting. */
export type FindManyUserInvitationsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyUserInvitationsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<UserInvitationSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyUsersFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: UserFilteringField;
  /** The filter mode */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many users on filters, pagination and sorting. */
export type FindManyUsersInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyUsersFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<UserSortInput>;
};

/** Input to get OAuth methods for organization domain */
export type FindOAuthMethodsByOrganizationDomainInput = {
  /** The OAuth flow type */
  flow: OAuthFlowType;
  /** The organization domain */
  organizationDomain: Scalars['NonEmpty']['input'];
  /** The redirect URI */
  redirectUri: Scalars['URL']['input'];
};

/** Flow authentication definition. */
export type FlowAuthentication = Model & {
  __typename?: 'FlowAuthentication';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The associated brands with this authentication */
  flowAuthenticationBrands: FlowAuthenticationBrandConnection;
  /** The associated domains with this authentication */
  flowAuthenticationDomains: FlowAuthenticationDomainConnection;
  /** A list of flow providers belonging to this flow authentication. */
  flowAuthenticationProviders: FlowAuthenticationProviderConnection;
  /** The name of the flow. */
  name: Scalars['NonEmpty']['output'];
  /** The organization the flow belongs to. */
  organization: Organization;
  /** The state of the flow. */
  state: FlowAuthenticationState;
  /** Shortcut to active studio controls associated to this object */
  studioControlCompacts: Array<StudioControlCompact>;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Flow authentication definition. */
export type FlowAuthenticationFlowAuthenticationBrandsArgs = {
  input?: InputMaybe<FindManyFlowAuthenticationBrandsInput>;
};


/** Flow authentication definition. */
export type FlowAuthenticationFlowAuthenticationDomainsArgs = {
  input?: InputMaybe<FindManyFlowAuthenticationDomainsInput>;
};


/** Flow authentication definition. */
export type FlowAuthenticationFlowAuthenticationProvidersArgs = {
  input?: InputMaybe<FindManyFlowAuthenticationProvidersInput>;
};

/** FlowAuthenticationAction */
export enum FlowAuthenticationAction {
  Activate = 'ACTIVATE',
  Deactivate = 'DEACTIVATE'
}

/** Organization brand definition. */
export type FlowAuthenticationBrand = Model & {
  __typename?: 'FlowAuthenticationBrand';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The flow authentication  */
  flowAuthentication: FlowAuthentication;
  /** Is default branding */
  isDefault: Scalars['Boolean']['output'];
  /** The user organization brand */
  organizationBrand: OrganizationBrand;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** An Connection */
export type FlowAuthenticationBrandConnection = {
  __typename?: 'FlowAuthenticationBrandConnection';
  edges: Array<FlowAuthenticationBrandEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type FlowAuthenticationBrandEdge = {
  __typename?: 'FlowAuthenticationBrandEdge';
  cursor: Scalars['String']['output'];
  node: FlowAuthenticationBrand;
};

/** Fields which can be used to filter brands on. Value must be camel case. */
export enum FlowAuthenticationBrandFilteringField {
  FlowAuthenticationUuid = 'flowAuthenticationUuid',
  OrganizationBrandUuid = 'organizationBrandUuid',
  RedirectPath = 'redirectPath',
  Uuid = 'uuid'
}

/** Fields which can be used to sort brands on. Value must be camel case. */
export enum FlowAuthenticationBrandSortEnum {
  CreatedAt = 'createdAt',
  RedirectPath = 'redirectPath',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting brands. */
export type FlowAuthenticationBrandSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowAuthenticationBrandSortEnum;
};

/** The flow authentication connection definition. */
export type FlowAuthenticationConnection = {
  __typename?: 'FlowAuthenticationConnection';
  edges: Array<Maybe<FlowAuthenticationEdge>>;
  pageInfo: PageInfo;
};

/** Organization domain definition. */
export type FlowAuthenticationDomain = Model & {
  __typename?: 'FlowAuthenticationDomain';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The flow authentication  */
  flowAuthentication: FlowAuthentication;
  /** The user organization domain */
  organizationDomain: OrganizationDomain;
  /** The path value. */
  redirectPath: Scalars['RedirectPath']['output'];
  /** The port value. */
  redirectPort: Scalars['RedirectPort']['output'];
  /** The protocol value. */
  redirectProtocol: Scalars['RedirectProtocol']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** An Connection */
export type FlowAuthenticationDomainConnection = {
  __typename?: 'FlowAuthenticationDomainConnection';
  edges: Array<FlowAuthenticationDomainEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type FlowAuthenticationDomainEdge = {
  __typename?: 'FlowAuthenticationDomainEdge';
  cursor: Scalars['String']['output'];
  node: FlowAuthenticationDomain;
};

/** Fields which can be used to filter domains on. Value must be camel case. */
export enum FlowAuthenticationDomainFilteringField {
  FlowAuthenticationUuid = 'flowAuthenticationUuid',
  OrganizationDomainUuid = 'organizationDomainUuid',
  RedirectPath = 'redirectPath',
  Uuid = 'uuid'
}

/** Fields which can be used to sort domains on. Value must be camel case. */
export enum FlowAuthenticationDomainSortEnum {
  CreatedAt = 'createdAt',
  RedirectPath = 'redirectPath',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting domains. */
export type FlowAuthenticationDomainSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowAuthenticationDomainSortEnum;
};

/** The flow authentication edge definition. */
export type FlowAuthenticationEdge = {
  __typename?: 'FlowAuthenticationEdge';
  cursor: Scalars['String']['output'];
  node: FlowAuthentication;
};

/** Fields which can be used to filter flow authentications on. Value must be camel case. */
export enum FlowAuthenticationFilteringField {
  Name = 'name',
  OrganizationUuid = 'organizationUuid',
  State = 'state',
  Uuid = 'uuid'
}

/** Flow authentication log definition. */
export type FlowAuthenticationLog = Model & {
  __typename?: 'FlowAuthenticationLog';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The flow authentication */
  flowAuthentication: FlowAuthentication;
  /** The flow authentication UUID */
  flowAuthenticationUuid: Scalars['UUID']['output'];
  /** The log urn */
  logURN: Scalars['URN']['output'];
  /** The meta of the log */
  meta: Scalars['JSONObject']['output'];
  /** The request UUID */
  requestUuid: Scalars['UUID']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The flow authentication log connection definition. */
export type FlowAuthenticationLogConnection = {
  __typename?: 'FlowAuthenticationLogConnection';
  edges: Array<Maybe<FlowAuthenticationLogEdge>>;
  pageInfo: PageInfo;
};

/** The flow authentication log edge definition. */
export type FlowAuthenticationLogEdge = {
  __typename?: 'FlowAuthenticationLogEdge';
  cursor: Scalars['String']['output'];
  node: FlowAuthenticationLog;
};

/** Fields which can be used to filter flow authentications log on. Value must be camel case. */
export enum FlowAuthenticationLogFilteringField {
  CreatedAt = 'createdAt',
  FlowAuthenticationUuid = 'flowAuthenticationUuid',
  LogUrn = 'logURN',
  OrganizationUuid = 'organizationUuid',
  RequestUuid = 'requestUuid'
}

/** Fields which can be used to sort flow authentications log on. Value must be camel case. */
export enum FlowAuthenticationLogSortEnum {
  CreatedAt = 'createdAt',
  LogUrn = 'logURN'
}

/** Input options for sorting flow authentications log. */
export type FlowAuthenticationLogSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowAuthenticationLogSortEnum;
};

/** Flow authentication provider definition. */
export type FlowAuthenticationProvider = Model & {
  __typename?: 'FlowAuthenticationProvider';
  /** The flow authentication provider configuration. */
  configuration?: Maybe<FlowAuthenticationProviderConfiguration>;
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The flow authentication the flow provider belongs to. */
  flowAuthentication: FlowAuthentication;
  /** A list of flow queries belonging to this flow provider. */
  flowAuthenticationScopes: FlowAuthenticationScopeConnection;
  /** The provider app the providerAppUuid belongs to. */
  providerApp: ProviderApp;
  /** The uuid of the flow provider app. */
  providerAppUuid: Scalars['UUID']['output'];
  /** Whether this provider is marked as recommended in this flow. */
  recommended: Scalars['Boolean']['output'];
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Flow authentication provider definition. */
export type FlowAuthenticationProviderFlowAuthenticationScopesArgs = {
  input?: InputMaybe<FindManyFlowAuthenticationScopesInput>;
};

/** Flow authentication provider configuration definition */
export type FlowAuthenticationProviderConfiguration = Model & {
  __typename?: 'FlowAuthenticationProviderConfiguration';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The FlowAuthenticationProvider this configuration belongs to */
  flowAuthenticationProvider: FlowAuthenticationProvider;
  /** The NL Wallet flow authentication provider configuration */
  nlWallet?: Maybe<FlowAuthenticationProviderConfigurationNlWallet>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The FlowAuthenticationProviderConfiguration connection definition. */
export type FlowAuthenticationProviderConfigurationConnection = {
  __typename?: 'FlowAuthenticationProviderConfigurationConnection';
  edges: Array<Maybe<FlowAuthenticationProviderConfigurationEdge>>;
  pageInfo: PageInfo;
};

/** The FlowAuthenticationProviderConfiguration edge definition. */
export type FlowAuthenticationProviderConfigurationEdge = {
  __typename?: 'FlowAuthenticationProviderConfigurationEdge';
  cursor: Scalars['String']['output'];
  node: FlowAuthenticationProviderConfiguration;
};

/** Fields which can be used to filter FlowAuthenticationProviderConfiguration on. Value must be camel case. */
export enum FlowAuthenticationProviderConfigurationFilteringField {
  FlowAuthenticationProviderUuid = 'flowAuthenticationProviderUuid'
}

/** FlowAuthenticationProviderConfigurationNLWallet definition */
export type FlowAuthenticationProviderConfigurationNlWallet = Model & {
  __typename?: 'FlowAuthenticationProviderConfigurationNLWallet';
  /** The creation timestamp */
  createdAt: Scalars['DateTime']['output'];
  /** The FlowAuthenticationProviderConfiguration this object belongs to. */
  flowAuthenticationProviderConfiguration: FlowAuthenticationProviderConfiguration;
  /** The timestamp of when the type has been last updated */
  updatedAt: Scalars['DateTime']['output'];
  /** The usecase */
  usecase: Scalars['String']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The FlowAuthenticationProviderConfigurationNLWallet connection definition. */
export type FlowAuthenticationProviderConfigurationNlWalletConnection = {
  __typename?: 'FlowAuthenticationProviderConfigurationNLWalletConnection';
  edges: Array<Maybe<FlowAuthenticationProviderConfigurationNlWalletEdge>>;
  pageInfo: PageInfo;
};

/** The FlowAuthenticationProviderConfigurationNLWallet edge definition. */
export type FlowAuthenticationProviderConfigurationNlWalletEdge = {
  __typename?: 'FlowAuthenticationProviderConfigurationNLWalletEdge';
  cursor: Scalars['String']['output'];
  node: FlowAuthenticationProviderConfigurationNlWallet;
};

/** Fields which can be used to filter FlowAuthenticationProviderConfigurationNLWallet on. Value must be camel case. */
export enum FlowAuthenticationProviderConfigurationNlWalletFilteringField {
  FlowAuthenticationProviderConfigurationUuid = 'flowAuthenticationProviderConfigurationUuid',
  Intent = 'intent'
}

/** Fields which can be used to sort FlowAuthenticationProviderConfigurationNLWallet on. Value must be camel case. */
export enum FlowAuthenticationProviderConfigurationNlWalletSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting FlowAuthenticationProviderConfigurationNLWallet. */
export type FlowAuthenticationProviderConfigurationNlWalletSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowAuthenticationProviderConfigurationNlWalletSortEnum;
};

/** Fields which can be used to sort FlowAuthenticationProviderConfiguration on. Value must be camel case. */
export enum FlowAuthenticationProviderConfigurationSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting FlowAuthenticationProviderConfiguration. */
export type FlowAuthenticationProviderConfigurationSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowAuthenticationProviderConfigurationSortEnum;
};

/** The flow authentication provider connection definition. */
export type FlowAuthenticationProviderConnection = {
  __typename?: 'FlowAuthenticationProviderConnection';
  edges: Array<FlowAuthenticationProviderEdge>;
  pageInfo: PageInfo;
};

/** The flow authentication provider edge definition. */
export type FlowAuthenticationProviderEdge = {
  __typename?: 'FlowAuthenticationProviderEdge';
  cursor: Scalars['String']['output'];
  node: FlowAuthenticationProvider;
};

/** Fields which can be used to filter flow authentication providers on. Value must be camel case. */
export enum FlowAuthenticationProviderFilteringField {
  FlowAuthenticationUuid = 'flowAuthenticationUuid',
  ProviderAppUuid = 'providerAppUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow authentication providers on. Value must be camel case. */
export enum FlowAuthenticationProviderSortEnum {
  CreatedAt = 'createdAt',
  ProviderAppUuid = 'providerAppUuid',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow authentication providers. */
export type FlowAuthenticationProviderSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowAuthenticationProviderSortEnum;
};

/** Flow authentication scope definition. */
export type FlowAuthenticationScope = Model & {
  __typename?: 'FlowAuthenticationScope';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The flow authentication the flow scope belongs to. */
  flowAuthenticationProvider: FlowAuthenticationProvider;
  /** The scope the scopeUuid belongs to. */
  scope: Scope;
  /** The name */
  scopeUuid: Scalars['UUID']['output'];
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};

/** The flow authentication scope connection definition. */
export type FlowAuthenticationScopeConnection = {
  __typename?: 'FlowAuthenticationScopeConnection';
  edges: Array<FlowAuthenticationScopeEdge>;
  pageInfo: PageInfo;
};

/** The flow authentication scope edge definition. */
export type FlowAuthenticationScopeEdge = {
  __typename?: 'FlowAuthenticationScopeEdge';
  cursor: Scalars['String']['output'];
  node: FlowAuthenticationScope;
};

/** Fields which can be used to filter flow authentication scope on. Value must be camel case. */
export enum FlowAuthenticationScopeFilteringField {
  FlowAuthenticationProviderUuid = 'flowAuthenticationProviderUuid',
  ScopeUuid = 'scopeUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow authentication scope on. Value must be camel case. */
export enum FlowAuthenticationScopeSortEnum {
  CreatedAt = 'createdAt',
  ScopeUuid = 'scopeUuid',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow authentication scope. */
export type FlowAuthenticationScopeSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowAuthenticationScopeSortEnum;
};

/** Fields which can be used to sort flow authentications on. Value must be camel case. */
export enum FlowAuthenticationSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  State = 'state',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow authentications. */
export type FlowAuthenticationSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowAuthenticationSortEnum;
};

/** FlowAuthenticationState */
export enum FlowAuthenticationState {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

/** Flow disclosure definition. */
export type FlowDisclosure = Model & {
  __typename?: 'FlowDisclosure';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The associated brand with this disclosure */
  flowDisclosureBrands: FlowDisclosureBrandConnection;
  /** The associated domains with this disclosure */
  flowDisclosureDomains: FlowDisclosureDomainConnection;
  /** The associated mappings with this disclosure */
  flowDisclosureMappings: FlowDisclosureMappingConnection;
  /** A list of flow providers belonging to this flow disclosure. */
  flowDisclosureProviders: FlowDisclosureProviderConnection;
  /** The JWT media type */
  jwtMediaType: Scalars['JwtMediaType']['output'];
  /** The meta of the flow. */
  meta: Scalars['JSONObject']['output'];
  /** The name of the flow. */
  name: Scalars['NonEmpty']['output'];
  /** The organization the flow belongs to. */
  organization: Organization;
  /** The indicator if explicit consent is required */
  requireExplicitConsent: Scalars['Boolean']['output'];
  /** The state of the flow. */
  state: FlowDisclosureState;
  /** Shortcut to active studio controls associated to this object */
  studioControlCompacts: Array<StudioControlCompact>;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Flow disclosure definition. */
export type FlowDisclosureFlowDisclosureBrandsArgs = {
  input?: InputMaybe<FindManyFlowDisclosureBrandsInput>;
};


/** Flow disclosure definition. */
export type FlowDisclosureFlowDisclosureDomainsArgs = {
  input?: InputMaybe<FindManyFlowDisclosureDomainsInput>;
};


/** Flow disclosure definition. */
export type FlowDisclosureFlowDisclosureMappingsArgs = {
  input?: InputMaybe<FindManyFlowDisclosureMappingsInput>;
};


/** Flow disclosure definition. */
export type FlowDisclosureFlowDisclosureProvidersArgs = {
  input?: InputMaybe<FindManyFlowDisclosureProvidersInput>;
};

/** FlowDisclosureAction */
export enum FlowDisclosureAction {
  Activate = 'ACTIVATE',
  Deactivate = 'DEACTIVATE'
}

/** Flow disclosure attribute definition. */
export type FlowDisclosureAttribute = Model & {
  __typename?: 'FlowDisclosureAttribute';
  /** The attribute the attributeUuid belongs to. */
  attribute: Attribute;
  /** The uuid of the flow attribute. */
  attributeUuid: Scalars['UUID']['output'];
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The flow disclosure the flow query belongs to. */
  flowDisclosureCredential: FlowDisclosureCredential;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};

/** The flow disclosure attribute connection definition. */
export type FlowDisclosureAttributeConnection = {
  __typename?: 'FlowDisclosureAttributeConnection';
  edges: Array<FlowDisclosureAttributeEdge>;
  pageInfo: PageInfo;
};

/** The flow disclosure attribute edge definition. */
export type FlowDisclosureAttributeEdge = {
  __typename?: 'FlowDisclosureAttributeEdge';
  cursor: Scalars['String']['output'];
  node: FlowDisclosureAttribute;
};

/** Fields which can be used to filter flow disclosure attribute on. Value must be camel case. */
export enum FlowDisclosureAttributeFilteringField {
  AttributeUuid = 'attributeUuid',
  FlowDisclosureCredentialUuid = 'flowDisclosureCredentialUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow disclosure attribute on. Value must be camel case. */
export enum FlowDisclosureAttributeSortEnum {
  AttributeUuid = 'attributeUuid',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow disclosure attribute. */
export type FlowDisclosureAttributeSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowDisclosureAttributeSortEnum;
};

/** Organization brand definition. */
export type FlowDisclosureBrand = Model & {
  __typename?: 'FlowDisclosureBrand';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The flow disclosure  */
  flowDisclosure: FlowDisclosure;
  /** Is default brand */
  isDefault: Scalars['Boolean']['output'];
  /** The user organization brand */
  organizationBrand: OrganizationBrand;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** An Connection */
export type FlowDisclosureBrandConnection = {
  __typename?: 'FlowDisclosureBrandConnection';
  edges: Array<FlowDisclosureBrandEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type FlowDisclosureBrandEdge = {
  __typename?: 'FlowDisclosureBrandEdge';
  cursor: Scalars['String']['output'];
  node: FlowDisclosureBrand;
};

/** Fields which can be used to filter brands on. Value must be camel case. */
export enum FlowDisclosureBrandFilteringField {
  FlowDisclosureUuid = 'flowDisclosureUuid',
  OrganizationBrandUuid = 'organizationBrandUuid',
  RedirectPath = 'redirectPath',
  Uuid = 'uuid'
}

/** Fields which can be used to sort brands on. Value must be camel case. */
export enum FlowDisclosureBrandSortEnum {
  CreatedAt = 'createdAt',
  RedirectPath = 'redirectPath',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting brands. */
export type FlowDisclosureBrandSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowDisclosureBrandSortEnum;
};

/** The flow disclosure connection definition. */
export type FlowDisclosureConnection = {
  __typename?: 'FlowDisclosureConnection';
  edges: Array<Maybe<FlowDisclosureEdge>>;
  pageInfo: PageInfo;
};

/** Flow disclosure credential definition. */
export type FlowDisclosureCredential = Model & {
  __typename?: 'FlowDisclosureCredential';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The credential the credentialUuid belongs to. */
  credential: Credential;
  /** The uuid of the credential. */
  credentialUuid: Scalars['UUID']['output'];
  /** The associated fields with this credential */
  flowDisclosureAttributes: FlowDisclosureAttributeConnection;
  /** The flow disclosure group the flow disclosure credential belongs to. */
  flowDisclosureGroup: FlowDisclosureGroup;
  /** The issuer the issuerUuid belongs to. */
  issuer: Issuer;
  /** The uuid of the issuer. */
  issuerUuid: Scalars['UUID']['output'];
  /** The scheme the schemeUuid belongs to. */
  scheme: Scheme;
  /** The uuid of the scheme. */
  schemeUuid: Scalars['UUID']['output'];
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Flow disclosure credential definition. */
export type FlowDisclosureCredentialFlowDisclosureAttributesArgs = {
  input?: InputMaybe<FindManyFlowDisclosureAttributesInput>;
};

/** The flow disclosure field connection definition. */
export type FlowDisclosureCredentialConnection = {
  __typename?: 'FlowDisclosureCredentialConnection';
  edges: Array<FlowDisclosureCredentialEdge>;
  pageInfo: PageInfo;
};

/** The flow disclosure field edge definition. */
export type FlowDisclosureCredentialEdge = {
  __typename?: 'FlowDisclosureCredentialEdge';
  cursor: Scalars['String']['output'];
  node: FlowDisclosureCredential;
};

/** Fields which can be used to filter flow disclosure field on. Value must be camel case. */
export enum FlowDisclosureCredentialFilteringField {
  CredentialUuid = 'credentialUuid',
  FlowDisclosureGroupUuid = 'flowDisclosureGroupUuid',
  IssuerUuid = 'issuerUuid',
  SchemeUuid = 'schemeUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow disclosure field on. Value must be camel case. */
export enum FlowDisclosureCredentialSortEnum {
  CreatedAt = 'createdAt',
  CredentialUuid = 'credentialUuid',
  IssuerUuid = 'issuerUuid',
  SchemeUuid = 'schemeUuid',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow disclosure field. */
export type FlowDisclosureCredentialSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowDisclosureCredentialSortEnum;
};

/** Organization domain definition. */
export type FlowDisclosureDomain = Model & {
  __typename?: 'FlowDisclosureDomain';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The flow disclosure  */
  flowDisclosure: FlowDisclosure;
  /** The user organization domain */
  organizationDomain: OrganizationDomain;
  /** The path value. */
  redirectPath: Scalars['RedirectPath']['output'];
  /** The port value. */
  redirectPort: Scalars['RedirectPort']['output'];
  /** The protocol value. */
  redirectProtocol: Scalars['RedirectProtocol']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** An Connection */
export type FlowDisclosureDomainConnection = {
  __typename?: 'FlowDisclosureDomainConnection';
  edges: Array<FlowDisclosureDomainEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type FlowDisclosureDomainEdge = {
  __typename?: 'FlowDisclosureDomainEdge';
  cursor: Scalars['String']['output'];
  node: FlowDisclosureDomain;
};

/** Fields which can be used to filter domains on. Value must be camel case. */
export enum FlowDisclosureDomainFilteringField {
  FlowDisclosureUuid = 'flowDisclosureUuid',
  OrganizationDomainUuid = 'organizationDomainUuid',
  RedirectPath = 'redirectPath',
  Uuid = 'uuid'
}

/** Fields which can be used to sort domains on. Value must be camel case. */
export enum FlowDisclosureDomainSortEnum {
  CreatedAt = 'createdAt',
  RedirectPath = 'redirectPath',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting domains. */
export type FlowDisclosureDomainSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowDisclosureDomainSortEnum;
};

/** The flow disclosure edge definition. */
export type FlowDisclosureEdge = {
  __typename?: 'FlowDisclosureEdge';
  cursor: Scalars['String']['output'];
  node: FlowDisclosure;
};

/** Fields which can be used to filter flow disclosures on. Value must be camel case. */
export enum FlowDisclosureFilteringField {
  Name = 'name',
  OrganizationUuid = 'organizationUuid',
  State = 'state',
  Uuid = 'uuid'
}

/** Flow disclosure group definition. */
export type FlowDisclosureGroup = Model & {
  __typename?: 'FlowDisclosureGroup';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** A list of flow queries belonging to this flow group. */
  flowDisclosureCredentials: FlowDisclosureCredentialConnection;
  /** The flow disclosure the flow group belongs to. */
  flowDisclosureProvider: FlowDisclosureProvider;
  /** The name */
  name?: Maybe<Scalars['NonEmpty']['output']>;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Flow disclosure group definition. */
export type FlowDisclosureGroupFlowDisclosureCredentialsArgs = {
  input?: InputMaybe<FindManyFlowDisclosureCredentialsInput>;
};

/** The flow disclosure group connection definition. */
export type FlowDisclosureGroupConnection = {
  __typename?: 'FlowDisclosureGroupConnection';
  edges: Array<FlowDisclosureGroupEdge>;
  pageInfo: PageInfo;
};

/** The flow disclosure group edge definition. */
export type FlowDisclosureGroupEdge = {
  __typename?: 'FlowDisclosureGroupEdge';
  cursor: Scalars['String']['output'];
  node: FlowDisclosureGroup;
};

/** Fields which can be used to filter flow disclosure group on. Value must be camel case. */
export enum FlowDisclosureGroupFilteringField {
  FlowDisclosureProviderUuid = 'flowDisclosureProviderUuid',
  Name = 'name',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow disclosure group on. Value must be camel case. */
export enum FlowDisclosureGroupSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow disclosure group. */
export type FlowDisclosureGroupSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowDisclosureGroupSortEnum;
};

/** Flow disclosure log definition. */
export type FlowDisclosureLog = Model & {
  __typename?: 'FlowDisclosureLog';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The flow disclosure */
  flowDisclosure: FlowDisclosure;
  /** The flow disclosure UUID */
  flowDisclosureUuid: Scalars['UUID']['output'];
  /** The log urn */
  logURN: Scalars['URN']['output'];
  /** The meta of the log */
  meta: Scalars['JSONObject']['output'];
  /** The request UUID */
  requestUuid: Scalars['UUID']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The flow disclosure log connection definition. */
export type FlowDisclosureLogConnection = {
  __typename?: 'FlowDisclosureLogConnection';
  edges: Array<Maybe<FlowDisclosureLogEdge>>;
  pageInfo: PageInfo;
};

/** The flow disclosure log edge definition. */
export type FlowDisclosureLogEdge = {
  __typename?: 'FlowDisclosureLogEdge';
  cursor: Scalars['String']['output'];
  node: FlowDisclosureLog;
};

/** Fields which can be used to filter flow disclosures log on. Value must be camel case. */
export enum FlowDisclosureLogFilteringField {
  CreatedAt = 'createdAt',
  FlowDisclosureUuid = 'flowDisclosureUuid',
  LogUrn = 'logURN',
  OrganizationUuid = 'organizationUuid',
  RequestUuid = 'requestUuid'
}

/** Fields which can be used to sort flow disclosures log on. Value must be camel case. */
export enum FlowDisclosureLogSortEnum {
  CreatedAt = 'createdAt',
  LogUrn = 'logURN'
}

/** Input options for sorting flow disclosures log. */
export type FlowDisclosureLogSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowDisclosureLogSortEnum;
};

/** Organization mapping definition. */
export type FlowDisclosureMapping = Model & {
  __typename?: 'FlowDisclosureMapping';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The flow disclosure  */
  flowDisclosure: FlowDisclosure;
  /** The user verification mapping */
  mappingVerification: MappingVerification;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** An Connection */
export type FlowDisclosureMappingConnection = {
  __typename?: 'FlowDisclosureMappingConnection';
  edges: Array<FlowDisclosureMappingEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type FlowDisclosureMappingEdge = {
  __typename?: 'FlowDisclosureMappingEdge';
  cursor: Scalars['String']['output'];
  node: FlowDisclosureMapping;
};

/** Fields which can be used to filter mappings on. Value must be camel case. */
export enum FlowDisclosureMappingFilteringField {
  FlowDisclosureUuid = 'flowDisclosureUuid',
  MappingVerificationUuid = 'mappingVerificationUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort mappings on. Value must be camel case. */
export enum FlowDisclosureMappingSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting mappings. */
export type FlowDisclosureMappingSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowDisclosureMappingSortEnum;
};

/** Flow disclosure provider definition. */
export type FlowDisclosureProvider = Model & {
  __typename?: 'FlowDisclosureProvider';
  /** The flow disclosure provider configuration. */
  configuration?: Maybe<FlowDisclosureProviderConfiguration>;
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The flow disclosure the flow provider belongs to. */
  flowDisclosure: FlowDisclosure;
  /** A list of flow queries belonging to this flow provider. */
  flowDisclosureGroups: FlowDisclosureGroupConnection;
  /** The provider the providerAppUuid belongs to. */
  providerApp: ProviderApp;
  /** The uuid of the flow provider app. */
  providerAppUuid: Scalars['UUID']['output'];
  /** Whether this provider is marked as recommended in this flow. */
  recommended: Scalars['Boolean']['output'];
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Flow disclosure provider definition. */
export type FlowDisclosureProviderFlowDisclosureGroupsArgs = {
  input?: InputMaybe<FindManyFlowDisclosureGroupsInput>;
};

/** Flow disclosure provider configuration definition */
export type FlowDisclosureProviderConfiguration = Model & {
  __typename?: 'FlowDisclosureProviderConfiguration';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The FlowDisclosureProvider this configuration belongs to */
  flowDisclosureProvider: FlowDisclosureProvider;
  /** The NL Wallet flow disclosure provider configuration */
  nlWallet?: Maybe<FlowDisclosureProviderConfigurationNlWallet>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The FlowDisclosureProviderConfiguration connection definition. */
export type FlowDisclosureProviderConfigurationConnection = {
  __typename?: 'FlowDisclosureProviderConfigurationConnection';
  edges: Array<Maybe<FlowDisclosureProviderConfigurationEdge>>;
  pageInfo: PageInfo;
};

/** The FlowDisclosureProviderConfiguration edge definition. */
export type FlowDisclosureProviderConfigurationEdge = {
  __typename?: 'FlowDisclosureProviderConfigurationEdge';
  cursor: Scalars['String']['output'];
  node: FlowDisclosureProviderConfiguration;
};

/** Fields which can be used to filter FlowDisclosureProviderConfiguration on. Value must be camel case. */
export enum FlowDisclosureProviderConfigurationFilteringField {
  FlowDisclosureProviderUuid = 'flowDisclosureProviderUuid'
}

/** FlowDisclosureProviderConfigurationNLWallet definition */
export type FlowDisclosureProviderConfigurationNlWallet = Model & {
  __typename?: 'FlowDisclosureProviderConfigurationNLWallet';
  /** The creation timestamp */
  createdAt: Scalars['DateTime']['output'];
  /** The FlowDisclosureProviderConfiguration this object belongs to. */
  flowDisclosureProviderConfiguration: FlowDisclosureProviderConfiguration;
  /** The timestamp of when the type has been last updated */
  updatedAt: Scalars['DateTime']['output'];
  /** The usecase */
  usecase: Scalars['String']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The FlowDisclosureProviderConfigurationNLWallet connection definition. */
export type FlowDisclosureProviderConfigurationNlWalletConnection = {
  __typename?: 'FlowDisclosureProviderConfigurationNLWalletConnection';
  edges: Array<Maybe<FlowDisclosureProviderConfigurationNlWalletEdge>>;
  pageInfo: PageInfo;
};

/** The FlowDisclosureProviderConfigurationNLWallet edge definition. */
export type FlowDisclosureProviderConfigurationNlWalletEdge = {
  __typename?: 'FlowDisclosureProviderConfigurationNLWalletEdge';
  cursor: Scalars['String']['output'];
  node: FlowDisclosureProviderConfigurationNlWallet;
};

/** Fields which can be used to filter FlowDisclosureProviderConfigurationNLWallet on. Value must be camel case. */
export enum FlowDisclosureProviderConfigurationNlWalletFilteringField {
  FlowDisclosureProviderConfigurationUuid = 'flowDisclosureProviderConfigurationUuid',
  Intent = 'intent'
}

/** Fields which can be used to sort FlowDisclosureProviderConfigurationNLWallet on. Value must be camel case. */
export enum FlowDisclosureProviderConfigurationNlWalletSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting FlowDisclosureProviderConfigurationNLWallet. */
export type FlowDisclosureProviderConfigurationNlWalletSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowDisclosureProviderConfigurationNlWalletSortEnum;
};

/** Fields which can be used to sort FlowDisclosureProviderConfiguration on. Value must be camel case. */
export enum FlowDisclosureProviderConfigurationSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting FlowDisclosureProviderConfiguration. */
export type FlowDisclosureProviderConfigurationSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowDisclosureProviderConfigurationSortEnum;
};

/** The flow disclosure provider connection definition. */
export type FlowDisclosureProviderConnection = {
  __typename?: 'FlowDisclosureProviderConnection';
  edges: Array<FlowDisclosureProviderEdge>;
  pageInfo: PageInfo;
};

/** The flow disclosure provider edge definition. */
export type FlowDisclosureProviderEdge = {
  __typename?: 'FlowDisclosureProviderEdge';
  cursor: Scalars['String']['output'];
  node: FlowDisclosureProvider;
};

/** Fields which can be used to filter flow disclosure providers on. Value must be camel case. */
export enum FlowDisclosureProviderFilteringField {
  FlowDisclosureUuid = 'flowDisclosureUuid',
  ProviderAppUuid = 'providerAppUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow disclosure providers on. Value must be camel case. */
export enum FlowDisclosureProviderSortEnum {
  CreatedAt = 'createdAt',
  ProviderAppUuid = 'providerAppUuid',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow disclosure providers. */
export type FlowDisclosureProviderSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowDisclosureProviderSortEnum;
};

/** Fields which can be used to sort flow disclosures on. Value must be camel case. */
export enum FlowDisclosureSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  State = 'state',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow disclosures. */
export type FlowDisclosureSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowDisclosureSortEnum;
};

/** FlowDisclosureState */
export enum FlowDisclosureState {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

/** Flow issuance definition. */
export type FlowIssuance = Model & {
  __typename?: 'FlowIssuance';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The associated brands with this issuance */
  flowIssuanceBrands: FlowIssuanceBrandConnection;
  /** The associated domains with this issuance */
  flowIssuanceDomains: FlowIssuanceDomainConnection;
  /** The associated mappings with this issuance */
  flowIssuanceMappings: FlowIssuanceMappingConnection;
  /** A list of flow providers belonging to this flow issuance. */
  flowIssuanceProviders: FlowIssuanceProviderConnection;
  /** The JWT media type */
  jwtMediaType: Scalars['JwtMediaType']['output'];
  /** The meta of the flow. */
  meta: Scalars['JSONObject']['output'];
  /** The name of the flow. */
  name: Scalars['NonEmpty']['output'];
  /** The organization the flow belongs to. */
  organization: Organization;
  /** The indicator if explicit consent is required */
  requireExplicitConsent: Scalars['Boolean']['output'];
  /** The state of the flow. */
  state: FlowIssuanceState;
  /** Shortcut to active studio controls associated to this object */
  studioControlCompacts: Array<StudioControlCompact>;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Flow issuance definition. */
export type FlowIssuanceFlowIssuanceBrandsArgs = {
  input?: InputMaybe<FindManyFlowIssuanceBrandsInput>;
};


/** Flow issuance definition. */
export type FlowIssuanceFlowIssuanceDomainsArgs = {
  input?: InputMaybe<FindManyFlowIssuanceDomainsInput>;
};


/** Flow issuance definition. */
export type FlowIssuanceFlowIssuanceMappingsArgs = {
  input?: InputMaybe<FindManyFlowIssuanceMappingsInput>;
};


/** Flow issuance definition. */
export type FlowIssuanceFlowIssuanceProvidersArgs = {
  input?: InputMaybe<FindManyFlowIssuanceProvidersInput>;
};

/** FlowIssuanceAction */
export enum FlowIssuanceAction {
  Activate = 'ACTIVATE',
  Deactivate = 'DEACTIVATE'
}

/** Flow issuance attribute definition. */
export type FlowIssuanceAttribute = Model & {
  __typename?: 'FlowIssuanceAttribute';
  /** The attribute the attributeURN belongs to. */
  attribute: Attribute;
  /** The uuid of the flow attribute. */
  attributeUuid: Scalars['UUID']['output'];
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The flow issuance the flow query belongs to. */
  flowIssuanceCredential: FlowIssuanceCredential;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};

/** The flow issuance attribute connection definition. */
export type FlowIssuanceAttributeConnection = {
  __typename?: 'FlowIssuanceAttributeConnection';
  edges: Array<FlowIssuanceAttributeEdge>;
  pageInfo: PageInfo;
};

/** The flow issuance attribute edge definition. */
export type FlowIssuanceAttributeEdge = {
  __typename?: 'FlowIssuanceAttributeEdge';
  cursor: Scalars['String']['output'];
  node: FlowIssuanceAttribute;
};

/** Fields which can be used to filter flow issuance attribute on. Value must be camel case. */
export enum FlowIssuanceAttributeFilteringField {
  AttributeUrn = 'attributeURN',
  FlowIssuanceCredentialUuid = 'flowIssuanceCredentialUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow issuance attribute on. Value must be camel case. */
export enum FlowIssuanceAttributeSortEnum {
  AttributeUrn = 'attributeURN',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow issuance attribute. */
export type FlowIssuanceAttributeSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowIssuanceAttributeSortEnum;
};

/** Organization brand definition. */
export type FlowIssuanceBrand = Model & {
  __typename?: 'FlowIssuanceBrand';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The flow issuance  */
  flowIssuance: FlowIssuance;
  /** Is default branding */
  isDefault: Scalars['Boolean']['output'];
  /** The user organization brand */
  organizationBrand: OrganizationBrand;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** An Connection */
export type FlowIssuanceBrandConnection = {
  __typename?: 'FlowIssuanceBrandConnection';
  edges: Array<FlowIssuanceBrandEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type FlowIssuanceBrandEdge = {
  __typename?: 'FlowIssuanceBrandEdge';
  cursor: Scalars['String']['output'];
  node: FlowIssuanceBrand;
};

/** Fields which can be used to filter brands on. Value must be camel case. */
export enum FlowIssuanceBrandFilteringField {
  FlowIssuanceUuid = 'flowIssuanceUuid',
  OrganizationBrandUuid = 'organizationBrandUuid',
  RedirectPath = 'redirectPath',
  Uuid = 'uuid'
}

/** Fields which can be used to sort brands on. Value must be camel case. */
export enum FlowIssuanceBrandSortEnum {
  CreatedAt = 'createdAt',
  RedirectPath = 'redirectPath',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting brands. */
export type FlowIssuanceBrandSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowIssuanceBrandSortEnum;
};

/** The flow issuance connection definition. */
export type FlowIssuanceConnection = {
  __typename?: 'FlowIssuanceConnection';
  edges: Array<Maybe<FlowIssuanceEdge>>;
  pageInfo: PageInfo;
};

/** Flow issuance credential definition. */
export type FlowIssuanceCredential = Model & {
  __typename?: 'FlowIssuanceCredential';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The credential the credentialURN belongs to. */
  credential: Credential;
  /** The uuid of the credential. */
  credentialUuid: Scalars['UUID']['output'];
  /** The associated fields with this credential */
  flowIssuanceAttributes: FlowIssuanceAttributeConnection;
  /** The flow issuance the flow provider belongs to. */
  flowIssuanceProvider: FlowIssuanceProvider;
  /** The issuer the issuerURN belongs to. */
  issuer: Issuer;
  /** The uuid of the issuer. */
  issuerUuid: Scalars['UUID']['output'];
  /** The meta */
  meta?: Maybe<FlowIssuanceCredentialMeta>;
  /** The meta type of the credential */
  metaType: FlowIssuanceCredentialMetaType;
  /** The scheme the schemeURN belongs to. */
  scheme: Scheme;
  /** The uuid of the scheme. */
  schemeUuid: Scalars['UUID']['output'];
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Flow issuance credential definition. */
export type FlowIssuanceCredentialFlowIssuanceAttributesArgs = {
  input?: InputMaybe<FindManyFlowIssuanceAttributesInput>;
};

/** The flow issuance field connection definition. */
export type FlowIssuanceCredentialConnection = {
  __typename?: 'FlowIssuanceCredentialConnection';
  edges: Array<FlowIssuanceCredentialEdge>;
  pageInfo: PageInfo;
};

/** The flow issuance field edge definition. */
export type FlowIssuanceCredentialEdge = {
  __typename?: 'FlowIssuanceCredentialEdge';
  cursor: Scalars['String']['output'];
  node: FlowIssuanceCredential;
};

/** Fields which can be used to filter flow issuance field on. Value must be camel case. */
export enum FlowIssuanceCredentialFilteringField {
  CredentialUrn = 'credentialURN',
  FlowIssuanceProviderUuid = 'flowIssuanceProviderUuid',
  IssuerUrn = 'issuerURN',
  MetaType = 'metaType',
  SchemeUrn = 'schemeURN',
  Uuid = 'uuid'
}

/** Flow issuance credential meta definition. */
export type FlowIssuanceCredentialMeta = Model & {
  __typename?: 'FlowIssuanceCredentialMeta';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The datakeeper credential meta */
  datakeeper?: Maybe<FlowIssuanceCredentialMetaDatakeeper>;
  /** The flow issuance credential the meta belongs to. */
  flowIssuanceCredential: FlowIssuanceCredential;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** The yivi credential meta */
  yivi?: Maybe<FlowIssuanceCredentialMetaYivi>;
};

/** The flow issuance credential meta connection definition. */
export type FlowIssuanceCredentialMetaConnection = {
  __typename?: 'FlowIssuanceCredentialMetaConnection';
  edges: Array<Maybe<FlowIssuanceCredentialMetaEdge>>;
  pageInfo: PageInfo;
};

/** Flow issuance credential meta datakapeer definition. */
export type FlowIssuanceCredentialMetaDatakeeper = Model & {
  __typename?: 'FlowIssuanceCredentialMetaDatakeeper';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The expiration duration, in milliseconds */
  expirationDuration: Scalars['Int']['output'];
  /** The flow issuance credential meta the datakeeper meta belongs to. */
  flowIssuanceCredentialMeta: FlowIssuanceCredentialMeta;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The flow credential meta datakeeper connection definition. */
export type FlowIssuanceCredentialMetaDatakeeperConnection = {
  __typename?: 'FlowIssuanceCredentialMetaDatakeeperConnection';
  edges: Array<Maybe<FlowIssuanceCredentialMetaDatakeeperEdge>>;
  pageInfo: PageInfo;
};

/** The flow credential meta datakeeper edge definition. */
export type FlowIssuanceCredentialMetaDatakeeperEdge = {
  __typename?: 'FlowIssuanceCredentialMetaDatakeeperEdge';
  cursor: Scalars['String']['output'];
  node: FlowIssuanceCredentialMetaDatakeeper;
};

/** Fields which can be used to filter flow issuance credential meta datakeeper on. Value must be camel case. */
export enum FlowIssuanceCredentialMetaDatakeeperFilteringField {
  Context = 'context',
  FlowIssuanceCredentialMetaUuid = 'flowIssuanceCredentialMetaUuid'
}

/** Fields which can be used to sort flow issuance credential meta datakeeper on. Value must be camel case. */
export enum FlowIssuanceCredentialMetaDatakeeperSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting flow issuance credential meta datakeeper. */
export type FlowIssuanceCredentialMetaDatakeeperSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowIssuanceCredentialMetaDatakeeperSortEnum;
};

/** The flow issuance credential meta edge definition. */
export type FlowIssuanceCredentialMetaEdge = {
  __typename?: 'FlowIssuanceCredentialMetaEdge';
  cursor: Scalars['String']['output'];
  node: FlowIssuanceCredentialMeta;
};

/** Fields which can be used to filter flow issuance credential meta on. Value must be camel case. */
export enum FlowIssuanceCredentialMetaFilteringField {
  FlowIssuanceCredentialUuid = 'flowIssuanceCredentialUuid'
}

/** Fields which can be used to sort flow issuance credential meta on. Value must be camel case. */
export enum FlowIssuanceCredentialMetaSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting flow issuance credential meta. */
export type FlowIssuanceCredentialMetaSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowIssuanceCredentialMetaSortEnum;
};

/** Flow issuance credential meta type. */
export enum FlowIssuanceCredentialMetaType {
  Datakeeper = 'DATAKEEPER',
  None = 'NONE',
  Yivi = 'YIVI'
}

/** Flow issuance credential meta datakapeer definition. */
export type FlowIssuanceCredentialMetaYivi = Model & {
  __typename?: 'FlowIssuanceCredentialMetaYivi';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The expiration duration, in milliseconds */
  expirationDuration: Scalars['Int']['output'];
  /** The flow issuance credential meta the yivi meta belongs to. */
  flowIssuanceCredentialMeta: FlowIssuanceCredentialMeta;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The flow credential meta yivi connection definition. */
export type FlowIssuanceCredentialMetaYiviConnection = {
  __typename?: 'FlowIssuanceCredentialMetaYiviConnection';
  edges: Array<Maybe<FlowIssuanceCredentialMetaYiviEdge>>;
  pageInfo: PageInfo;
};

/** The flow credential meta yivi edge definition. */
export type FlowIssuanceCredentialMetaYiviEdge = {
  __typename?: 'FlowIssuanceCredentialMetaYiviEdge';
  cursor: Scalars['String']['output'];
  node: FlowIssuanceCredentialMetaYivi;
};

/** Fields which can be used to filter flow issuance credential meta yivi on. Value must be camel case. */
export enum FlowIssuanceCredentialMetaYiviFilteringField {
  FlowIssuanceCredentialMetaUuid = 'flowIssuanceCredentialMetaUuid'
}

/** Fields which can be used to sort flow issuance credential meta yivi on. Value must be camel case. */
export enum FlowIssuanceCredentialMetaYiviSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting flow issuance credential meta yivi. */
export type FlowIssuanceCredentialMetaYiviSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowIssuanceCredentialMetaYiviSortEnum;
};

/** Fields which can be used to sort flow issuance field on. Value must be camel case. */
export enum FlowIssuanceCredentialSortEnum {
  CreatedAt = 'createdAt',
  CredentialUrn = 'credentialURN',
  IssuerUrn = 'issuerURN',
  SchemeUrn = 'schemeURN',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow issuance field. */
export type FlowIssuanceCredentialSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowIssuanceCredentialSortEnum;
};

/** Organization domain definition. */
export type FlowIssuanceDomain = Model & {
  __typename?: 'FlowIssuanceDomain';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The flow issuance  */
  flowIssuance: FlowIssuance;
  /** The user organization domain */
  organizationDomain: OrganizationDomain;
  /** The path value. */
  redirectPath: Scalars['RedirectPath']['output'];
  /** The port value. */
  redirectPort: Scalars['RedirectPort']['output'];
  /** The protocol value. */
  redirectProtocol: Scalars['RedirectProtocol']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** An Connection */
export type FlowIssuanceDomainConnection = {
  __typename?: 'FlowIssuanceDomainConnection';
  edges: Array<FlowIssuanceDomainEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type FlowIssuanceDomainEdge = {
  __typename?: 'FlowIssuanceDomainEdge';
  cursor: Scalars['String']['output'];
  node: FlowIssuanceDomain;
};

/** Fields which can be used to filter domains on. Value must be camel case. */
export enum FlowIssuanceDomainFilteringField {
  FlowIssuanceUuid = 'flowIssuanceUuid',
  OrganizationDomainUuid = 'organizationDomainUuid',
  RedirectPath = 'redirectPath',
  Uuid = 'uuid'
}

/** Fields which can be used to sort domains on. Value must be camel case. */
export enum FlowIssuanceDomainSortEnum {
  CreatedAt = 'createdAt',
  RedirectPath = 'redirectPath',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting domains. */
export type FlowIssuanceDomainSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowIssuanceDomainSortEnum;
};

/** The flow issuance edge definition. */
export type FlowIssuanceEdge = {
  __typename?: 'FlowIssuanceEdge';
  cursor: Scalars['String']['output'];
  node: FlowIssuance;
};

/** Fields which can be used to filter flow issuances on. Value must be camel case. */
export enum FlowIssuanceFilteringField {
  Name = 'name',
  OrganizationUuid = 'organizationUuid',
  State = 'state',
  Uuid = 'uuid'
}

/** Flow issuance log definition. */
export type FlowIssuanceLog = Model & {
  __typename?: 'FlowIssuanceLog';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The flow issuance */
  flowIssuance: FlowIssuance;
  /** The flow issuance UUID */
  flowIssuanceUuid: Scalars['UUID']['output'];
  /** The log urn */
  logURN: Scalars['URN']['output'];
  /** The meta of the log */
  meta: Scalars['JSONObject']['output'];
  /** The request UUID */
  requestUuid: Scalars['UUID']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The flow issuance log connection definition. */
export type FlowIssuanceLogConnection = {
  __typename?: 'FlowIssuanceLogConnection';
  edges: Array<Maybe<FlowIssuanceLogEdge>>;
  pageInfo: PageInfo;
};

/** The flow issuance log edge definition. */
export type FlowIssuanceLogEdge = {
  __typename?: 'FlowIssuanceLogEdge';
  cursor: Scalars['String']['output'];
  node: FlowIssuanceLog;
};

/** Fields which can be used to filter flow issuances log on. Value must be camel case. */
export enum FlowIssuanceLogFilteringField {
  CreatedAt = 'createdAt',
  FlowIssuanceUuid = 'flowIssuanceUuid',
  LogUrn = 'logURN',
  OrganizationUuid = 'organizationUuid',
  RequestUuid = 'requestUuid'
}

/** Fields which can be used to sort flow issuances log on. Value must be camel case. */
export enum FlowIssuanceLogSortEnum {
  CreatedAt = 'createdAt',
  LogUrn = 'logURN'
}

/** Input options for sorting flow issuances log. */
export type FlowIssuanceLogSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowIssuanceLogSortEnum;
};

/** Organization mapping definition. */
export type FlowIssuanceMapping = Model & {
  __typename?: 'FlowIssuanceMapping';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The flow issuance  */
  flowIssuance: FlowIssuance;
  /** The user mapping */
  mappingIssuance: MappingIssuance;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** An Connection */
export type FlowIssuanceMappingConnection = {
  __typename?: 'FlowIssuanceMappingConnection';
  edges: Array<FlowIssuanceMappingEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type FlowIssuanceMappingEdge = {
  __typename?: 'FlowIssuanceMappingEdge';
  cursor: Scalars['String']['output'];
  node: FlowIssuanceMapping;
};

/** Fields which can be used to filter mappings on. Value must be camel case. */
export enum FlowIssuanceMappingFilteringField {
  FlowIssuanceUuid = 'flowIssuanceUuid',
  MappingIssuanceUuid = 'mappingIssuanceUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort mappings on. Value must be camel case. */
export enum FlowIssuanceMappingSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting mappings. */
export type FlowIssuanceMappingSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowIssuanceMappingSortEnum;
};

/** Flow issuance provider definition. */
export type FlowIssuanceProvider = Model & {
  __typename?: 'FlowIssuanceProvider';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The flow issuance the flow provider belongs to. */
  flowIssuance: FlowIssuance;
  /** A list of flow queries belonging to this flow provider. */
  flowIssuanceCredentials: FlowIssuanceCredentialConnection;
  /** The provider app the providerAppUuid belongs to. */
  providerApp: ProviderApp;
  /** The uuid of the flow provider app. */
  providerAppUuid: Scalars['UUID']['output'];
  /** Whether this provider is marked as recommended in this flow. */
  recommended: Scalars['Boolean']['output'];
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Flow issuance provider definition. */
export type FlowIssuanceProviderFlowIssuanceCredentialsArgs = {
  input?: InputMaybe<FindManyFlowIssuanceCredentialsInput>;
};

/** The flow issuance provider connection definition. */
export type FlowIssuanceProviderConnection = {
  __typename?: 'FlowIssuanceProviderConnection';
  edges: Array<FlowIssuanceProviderEdge>;
  pageInfo: PageInfo;
};

/** The flow issuance provider edge definition. */
export type FlowIssuanceProviderEdge = {
  __typename?: 'FlowIssuanceProviderEdge';
  cursor: Scalars['String']['output'];
  node: FlowIssuanceProvider;
};

/** Fields which can be used to filter flow issuance providers on. Value must be camel case. */
export enum FlowIssuanceProviderFilteringField {
  FlowIssuanceUuid = 'flowIssuanceUuid',
  ProviderAppUuid = 'providerAppUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow issuance providers on. Value must be camel case. */
export enum FlowIssuanceProviderSortEnum {
  CreatedAt = 'createdAt',
  ProviderAppUuid = 'providerAppUuid',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow issuance providers. */
export type FlowIssuanceProviderSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowIssuanceProviderSortEnum;
};

/** Fields which can be used to sort flow issuances on. Value must be camel case. */
export enum FlowIssuanceSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  State = 'state',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow issuances. */
export type FlowIssuanceSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowIssuanceSortEnum;
};

/** FlowIssuanceState */
export enum FlowIssuanceState {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

/** Flow signature definition. */
export type FlowSignature = Model & {
  __typename?: 'FlowSignature';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The associated brands with this signature */
  flowSignatureBrands: FlowSignatureBrandConnection;
  /** The associated domains with this signature */
  flowSignatureDomains: FlowSignatureDomainConnection;
  /** The associated mappings with this signature */
  flowSignatureMappings: FlowSignatureMappingConnection;
  /** A list of flow providers belonging to this flow signature. */
  flowSignatureProviders: FlowSignatureProviderConnection;
  /** The JWT media type */
  jwtMediaType: Scalars['JwtMediaType']['output'];
  /** The meta of the flow. */
  meta: Scalars['JSONObject']['output'];
  /** The name of the flow. */
  name: Scalars['NonEmpty']['output'];
  /** The organization the flow belongs to. */
  organization: Organization;
  /** The indicator if explicit consent is required */
  requireExplicitConsent: Scalars['Boolean']['output'];
  /** The state of the flow. */
  state: FlowSignatureState;
  /** Shortcut to active studio controls associated to this object */
  studioControlCompacts: Array<StudioControlCompact>;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Flow signature definition. */
export type FlowSignatureFlowSignatureBrandsArgs = {
  input?: InputMaybe<FindManyFlowSignatureBrandsInput>;
};


/** Flow signature definition. */
export type FlowSignatureFlowSignatureDomainsArgs = {
  input?: InputMaybe<FindManyFlowSignatureDomainsInput>;
};


/** Flow signature definition. */
export type FlowSignatureFlowSignatureMappingsArgs = {
  input?: InputMaybe<FindManyFlowSignatureMappingsInput>;
};


/** Flow signature definition. */
export type FlowSignatureFlowSignatureProvidersArgs = {
  input?: InputMaybe<FindManyFlowSignatureProvidersInput>;
};

/** FlowSignatureAction */
export enum FlowSignatureAction {
  Activate = 'ACTIVATE',
  Deactivate = 'DEACTIVATE'
}

/** Flow signature attribute definition. */
export type FlowSignatureAttribute = Model & {
  __typename?: 'FlowSignatureAttribute';
  /** The attribute the attributeUuid belongs to. */
  attribute: Attribute;
  /** The uuid of the flow attribute. */
  attributeUuid: Scalars['UUID']['output'];
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The flow signature the flow query belongs to. */
  flowSignatureCredential: FlowSignatureCredential;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};

/** The flow signature attribute connection definition. */
export type FlowSignatureAttributeConnection = {
  __typename?: 'FlowSignatureAttributeConnection';
  edges: Array<FlowSignatureAttributeEdge>;
  pageInfo: PageInfo;
};

/** The flow signature attribute edge definition. */
export type FlowSignatureAttributeEdge = {
  __typename?: 'FlowSignatureAttributeEdge';
  cursor: Scalars['String']['output'];
  node: FlowSignatureAttribute;
};

/** Fields which can be used to filter flow signature attribute on. Value must be camel case. */
export enum FlowSignatureAttributeFilteringField {
  AttributeUuid = 'attributeUuid',
  FlowSignatureCredentialUuid = 'flowSignatureCredentialUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow signature attribute on. Value must be camel case. */
export enum FlowSignatureAttributeSortEnum {
  AttributeUuid = 'attributeUuid',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow signature attribute. */
export type FlowSignatureAttributeSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowSignatureAttributeSortEnum;
};

/** Organization brand definition. */
export type FlowSignatureBrand = Model & {
  __typename?: 'FlowSignatureBrand';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The flow signature  */
  flowSignature: FlowSignature;
  /** Is default branding */
  isDefault: Scalars['Boolean']['output'];
  /** The user organization brand */
  organizationBrand: OrganizationBrand;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** An Connection */
export type FlowSignatureBrandConnection = {
  __typename?: 'FlowSignatureBrandConnection';
  edges: Array<FlowSignatureBrandEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type FlowSignatureBrandEdge = {
  __typename?: 'FlowSignatureBrandEdge';
  cursor: Scalars['String']['output'];
  node: FlowSignatureBrand;
};

/** Fields which can be used to filter brands on. Value must be camel case. */
export enum FlowSignatureBrandFilteringField {
  FlowSignatureUuid = 'flowSignatureUuid',
  OrganizationBrandUuid = 'organizationBrandUuid',
  RedirectPath = 'redirectPath',
  Uuid = 'uuid'
}

/** Fields which can be used to sort brands on. Value must be camel case. */
export enum FlowSignatureBrandSortEnum {
  CreatedAt = 'createdAt',
  RedirectPath = 'redirectPath',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting brands. */
export type FlowSignatureBrandSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowSignatureBrandSortEnum;
};

/** The flow signature connection definition. */
export type FlowSignatureConnection = {
  __typename?: 'FlowSignatureConnection';
  edges: Array<Maybe<FlowSignatureEdge>>;
  pageInfo: PageInfo;
};

/** Flow signature credential definition. */
export type FlowSignatureCredential = Model & {
  __typename?: 'FlowSignatureCredential';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The credential the credentialUuid belongs to. */
  credential: Credential;
  /** The uuid of the credential. */
  credentialUuid: Scalars['UUID']['output'];
  /** The associated fields with this credential */
  flowSignatureAttributes: FlowSignatureAttributeConnection;
  /** The flow signature group the flow signature credential belongs to. */
  flowSignatureGroup: FlowSignatureGroup;
  /** The issuer the issuerUuid belongs to. */
  issuer: Issuer;
  /** The uuid of the issuer. */
  issuerUuid: Scalars['UUID']['output'];
  /** The scheme the schemeUuid belongs to. */
  scheme: Scheme;
  /** The uuid of the scheme. */
  schemeUuid: Scalars['UUID']['output'];
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Flow signature credential definition. */
export type FlowSignatureCredentialFlowSignatureAttributesArgs = {
  input?: InputMaybe<FindManyFlowSignatureAttributesInput>;
};

/** The flow signature field connection definition. */
export type FlowSignatureCredentialConnection = {
  __typename?: 'FlowSignatureCredentialConnection';
  edges: Array<FlowSignatureCredentialEdge>;
  pageInfo: PageInfo;
};

/** The flow signature field edge definition. */
export type FlowSignatureCredentialEdge = {
  __typename?: 'FlowSignatureCredentialEdge';
  cursor: Scalars['String']['output'];
  node: FlowSignatureCredential;
};

/** Fields which can be used to filter flow signature field on. Value must be camel case. */
export enum FlowSignatureCredentialFilteringField {
  CredentialUuid = 'credentialUuid',
  FlowSignatureGroupUuid = 'flowSignatureGroupUuid',
  IssuerUuid = 'issuerUuid',
  SchemeUuid = 'schemeUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow signature field on. Value must be camel case. */
export enum FlowSignatureCredentialSortEnum {
  CreatedAt = 'createdAt',
  CredentialUuid = 'credentialUuid',
  IssuerUuid = 'issuerUuid',
  SchemeUuid = 'schemeUuid',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow signature field. */
export type FlowSignatureCredentialSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowSignatureCredentialSortEnum;
};

/** Organization domain definition. */
export type FlowSignatureDomain = Model & {
  __typename?: 'FlowSignatureDomain';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The flow signature  */
  flowSignature: FlowSignature;
  /** The user organization domain */
  organizationDomain: OrganizationDomain;
  /** The path value. */
  redirectPath: Scalars['RedirectPath']['output'];
  /** The port value. */
  redirectPort: Scalars['RedirectPort']['output'];
  /** The protocol value. */
  redirectProtocol: Scalars['RedirectProtocol']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** An Connection */
export type FlowSignatureDomainConnection = {
  __typename?: 'FlowSignatureDomainConnection';
  edges: Array<FlowSignatureDomainEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type FlowSignatureDomainEdge = {
  __typename?: 'FlowSignatureDomainEdge';
  cursor: Scalars['String']['output'];
  node: FlowSignatureDomain;
};

/** Fields which can be used to filter domains on. Value must be camel case. */
export enum FlowSignatureDomainFilteringField {
  FlowSignatureUuid = 'flowSignatureUuid',
  OrganizationDomainUuid = 'organizationDomainUuid',
  RedirectPath = 'redirectPath',
  Uuid = 'uuid'
}

/** Fields which can be used to sort domains on. Value must be camel case. */
export enum FlowSignatureDomainSortEnum {
  CreatedAt = 'createdAt',
  RedirectPath = 'redirectPath',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting domains. */
export type FlowSignatureDomainSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowSignatureDomainSortEnum;
};

/** The flow signature edge definition. */
export type FlowSignatureEdge = {
  __typename?: 'FlowSignatureEdge';
  cursor: Scalars['String']['output'];
  node: FlowSignature;
};

/** Fields which can be used to filter flow signatures on. Value must be camel case. */
export enum FlowSignatureFilteringField {
  Name = 'name',
  OrganizationUuid = 'organizationUuid',
  State = 'state',
  Uuid = 'uuid'
}

/** Flow signature group definition. */
export type FlowSignatureGroup = Model & {
  __typename?: 'FlowSignatureGroup';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** A list of flow queries belonging to this flow group. */
  flowSignatureCredentials: FlowSignatureCredentialConnection;
  /** The flow signature the flow group belongs to. */
  flowSignatureProvider: FlowSignatureProvider;
  /** The name */
  name?: Maybe<Scalars['NonEmpty']['output']>;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Flow signature group definition. */
export type FlowSignatureGroupFlowSignatureCredentialsArgs = {
  input?: InputMaybe<FindManyFlowSignatureCredentialsInput>;
};

/** The flow signature group connection definition. */
export type FlowSignatureGroupConnection = {
  __typename?: 'FlowSignatureGroupConnection';
  edges: Array<FlowSignatureGroupEdge>;
  pageInfo: PageInfo;
};

/** The flow signature group edge definition. */
export type FlowSignatureGroupEdge = {
  __typename?: 'FlowSignatureGroupEdge';
  cursor: Scalars['String']['output'];
  node: FlowSignatureGroup;
};

/** Fields which can be used to filter flow signature group on. Value must be camel case. */
export enum FlowSignatureGroupFilteringField {
  FlowSignatureProviderUuid = 'flowSignatureProviderUuid',
  Name = 'name',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow signature group on. Value must be camel case. */
export enum FlowSignatureGroupSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow signature group. */
export type FlowSignatureGroupSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowSignatureGroupSortEnum;
};

/** Flow signature log definition. */
export type FlowSignatureLog = Model & {
  __typename?: 'FlowSignatureLog';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The flow signature */
  flowSignature: FlowSignature;
  /** The flow signature UUID */
  flowSignatureUuid: Scalars['UUID']['output'];
  /** The log urn */
  logURN: Scalars['URN']['output'];
  /** The meta of the log */
  meta: Scalars['JSONObject']['output'];
  /** The request UUID */
  requestUuid: Scalars['UUID']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The flow signature log connection definition. */
export type FlowSignatureLogConnection = {
  __typename?: 'FlowSignatureLogConnection';
  edges: Array<Maybe<FlowSignatureLogEdge>>;
  pageInfo: PageInfo;
};

/** The flow signature log edge definition. */
export type FlowSignatureLogEdge = {
  __typename?: 'FlowSignatureLogEdge';
  cursor: Scalars['String']['output'];
  node: FlowSignatureLog;
};

/** Fields which can be used to filter flow signatures log on. Value must be camel case. */
export enum FlowSignatureLogFilteringField {
  CreatedAt = 'createdAt',
  FlowSignatureUuid = 'flowSignatureUuid',
  LogUrn = 'logURN',
  OrganizationUuid = 'organizationUuid',
  RequestUuid = 'requestUuid'
}

/** Fields which can be used to sort flow signatures log on. Value must be camel case. */
export enum FlowSignatureLogSortEnum {
  CreatedAt = 'createdAt',
  LogUrn = 'logURN'
}

/** Input options for sorting flow signatures log. */
export type FlowSignatureLogSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowSignatureLogSortEnum;
};

/** Organization mapping definition. */
export type FlowSignatureMapping = Model & {
  __typename?: 'FlowSignatureMapping';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The flow signature  */
  flowSignature: FlowSignature;
  /** The user verification mapping */
  mappingVerification: MappingVerification;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** An Connection */
export type FlowSignatureMappingConnection = {
  __typename?: 'FlowSignatureMappingConnection';
  edges: Array<FlowSignatureMappingEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type FlowSignatureMappingEdge = {
  __typename?: 'FlowSignatureMappingEdge';
  cursor: Scalars['String']['output'];
  node: FlowSignatureMapping;
};

/** Fields which can be used to filter mappings on. Value must be camel case. */
export enum FlowSignatureMappingFilteringField {
  FlowSignatureUuid = 'flowSignatureUuid',
  MappingVerificationUuid = 'mappingVerificationUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort mappings on. Value must be camel case. */
export enum FlowSignatureMappingSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting mappings. */
export type FlowSignatureMappingSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowSignatureMappingSortEnum;
};

/** Flow signature provider definition. */
export type FlowSignatureProvider = Model & {
  __typename?: 'FlowSignatureProvider';
  /** The flow signature provider configuration. */
  configuration?: Maybe<FlowSignatureProviderConfiguration>;
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The flow signature the flow provider belongs to. */
  flowSignature: FlowSignature;
  /** A list of flow queries belonging to this flow provider. */
  flowSignatureGroups: FlowSignatureGroupConnection;
  /** The provider the providerUuid belongs to. */
  providerApp: ProviderApp;
  /** The URN of the flow provider. */
  providerAppUuid: Scalars['UUID']['output'];
  /** Whether this provider is marked as recommended in this flow. */
  recommended: Scalars['Boolean']['output'];
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Flow signature provider definition. */
export type FlowSignatureProviderFlowSignatureGroupsArgs = {
  input?: InputMaybe<FindManyFlowSignatureGroupsInput>;
};

/** Flow signature provider configuration definition */
export type FlowSignatureProviderConfiguration = Model & {
  __typename?: 'FlowSignatureProviderConfiguration';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The FlowSignatureProvider this configuration belongs to */
  flowSignatureProvider: FlowSignatureProvider;
  /** The NL Wallet flow signature provider configuration */
  nlWallet?: Maybe<FlowSignatureProviderConfigurationNlWallet>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The FlowSignatureProviderConfiguration connection definition. */
export type FlowSignatureProviderConfigurationConnection = {
  __typename?: 'FlowSignatureProviderConfigurationConnection';
  edges: Array<Maybe<FlowSignatureProviderConfigurationEdge>>;
  pageInfo: PageInfo;
};

/** The FlowSignatureProviderConfiguration edge definition. */
export type FlowSignatureProviderConfigurationEdge = {
  __typename?: 'FlowSignatureProviderConfigurationEdge';
  cursor: Scalars['String']['output'];
  node: FlowSignatureProviderConfiguration;
};

/** Fields which can be used to filter FlowSignatureProviderConfiguration on. Value must be camel case. */
export enum FlowSignatureProviderConfigurationFilteringField {
  FlowSignatureProviderUuid = 'flowSignatureProviderUuid'
}

/** FlowSignatureProviderConfigurationNLWallet definition */
export type FlowSignatureProviderConfigurationNlWallet = Model & {
  __typename?: 'FlowSignatureProviderConfigurationNLWallet';
  /** The creation timestamp */
  createdAt: Scalars['DateTime']['output'];
  /** The FlowSignatureProviderConfiguration this object belongs to. */
  flowSignatureProviderConfiguration: FlowSignatureProviderConfiguration;
  /** The timestamp of when the type has been last updated */
  updatedAt: Scalars['DateTime']['output'];
  /** The usecase */
  usecase: Scalars['String']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The FlowSignatureProviderConfigurationNLWallet connection definition. */
export type FlowSignatureProviderConfigurationNlWalletConnection = {
  __typename?: 'FlowSignatureProviderConfigurationNLWalletConnection';
  edges: Array<Maybe<FlowSignatureProviderConfigurationNlWalletEdge>>;
  pageInfo: PageInfo;
};

/** The FlowSignatureProviderConfigurationNLWallet edge definition. */
export type FlowSignatureProviderConfigurationNlWalletEdge = {
  __typename?: 'FlowSignatureProviderConfigurationNLWalletEdge';
  cursor: Scalars['String']['output'];
  node: FlowSignatureProviderConfigurationNlWallet;
};

/** Fields which can be used to filter FlowSignatureProviderConfigurationNLWallet on. Value must be camel case. */
export enum FlowSignatureProviderConfigurationNlWalletFilteringField {
  FlowSignatureProviderConfigurationUuid = 'flowSignatureProviderConfigurationUuid',
  Intent = 'intent'
}

/** Fields which can be used to sort FlowSignatureProviderConfigurationNLWallet on. Value must be camel case. */
export enum FlowSignatureProviderConfigurationNlWalletSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting FlowSignatureProviderConfigurationNLWallet. */
export type FlowSignatureProviderConfigurationNlWalletSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowSignatureProviderConfigurationNlWalletSortEnum;
};

/** Fields which can be used to sort FlowSignatureProviderConfiguration on. Value must be camel case. */
export enum FlowSignatureProviderConfigurationSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting FlowSignatureProviderConfiguration. */
export type FlowSignatureProviderConfigurationSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowSignatureProviderConfigurationSortEnum;
};

/** The flow signature provider connection definition. */
export type FlowSignatureProviderConnection = {
  __typename?: 'FlowSignatureProviderConnection';
  edges: Array<FlowSignatureProviderEdge>;
  pageInfo: PageInfo;
};

/** The flow signature provider edge definition. */
export type FlowSignatureProviderEdge = {
  __typename?: 'FlowSignatureProviderEdge';
  cursor: Scalars['String']['output'];
  node: FlowSignatureProvider;
};

/** Fields which can be used to filter flow signature providers on. Value must be camel case. */
export enum FlowSignatureProviderFilteringField {
  FlowSignatureUuid = 'flowSignatureUuid',
  ProviderUuid = 'providerUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow signature providers on. Value must be camel case. */
export enum FlowSignatureProviderSortEnum {
  CreatedAt = 'createdAt',
  ProviderUuid = 'providerUuid',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow signature providers. */
export type FlowSignatureProviderSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowSignatureProviderSortEnum;
};

/** Fields which can be used to sort flow signatures on. Value must be camel case. */
export enum FlowSignatureSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  State = 'state',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow signatures. */
export type FlowSignatureSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: FlowSignatureSortEnum;
};

/** FlowSignatureState */
export enum FlowSignatureState {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

/** FlowType */
export enum FlowType {
  Authentication = 'AUTHENTICATION',
  Disclosure = 'DISCLOSURE',
  Issuance = 'ISSUANCE',
  Signature = 'SIGNATURE'
}

/** Identity models */
export enum IdentityModel {
  App = 'APP',
  Attribute = 'ATTRIBUTE',
  Credential = 'CREDENTIAL',
  Issuer = 'ISSUER',
  Provider = 'PROVIDER',
  Scheme = 'SCHEME',
  Scope = 'SCOPE'
}

/** IdentityModelType */
export enum IdentityModelType {
  App = 'APP',
  Attribute = 'ATTRIBUTE',
  Credential = 'CREDENTIAL',
  Issuer = 'ISSUER',
  Provider = 'PROVIDER',
  Scheme = 'SCHEME',
  Scope = 'SCOPE'
}

/** Recurring intervals */
export enum Interval {
  Monthly = 'MONTHLY',
  None = 'NONE',
  Quarterly = 'QUARTERLY',
  Yearly = 'YEARLY'
}

/** Issuer definition. */
export type Issuer = Model & {
  __typename?: 'Issuer';
  /** The categories of the issuer */
  categories: Array<IssuerCategoryType>;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The collection of credentials */
  credentials: CredentialConnection;
  /** The collection of locale */
  locale: IssuerLocaleConnection;
  /** The meta */
  meta?: Maybe<IssuerMeta>;
  /** The meta type of the issuer */
  metaType: IssuerMetaType;
  /** The name */
  name: Scalars['NonEmpty']['output'];
  /** The organization uuid, this issuer belongs to, if any. */
  organizationUuid?: Maybe<Scalars['UUID']['output']>;
  /** The scheme, this issuer belongs to */
  scheme: Scheme;
  /** The state */
  state: State;
  /** The type of the issuer */
  type: IssuerType;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** Issuer definition. */
export type IssuerCredentialsArgs = {
  input?: InputMaybe<FindManyCredentialsInput>;
};


/** Issuer definition. */
export type IssuerLocaleArgs = {
  input?: InputMaybe<FindManyIssuerLocaleInput>;
};

/** Issuer category Type. */
export enum IssuerCategoryType {
  Development = 'DEVELOPMENT',
  Production = 'PRODUCTION',
  Test = 'TEST'
}

/** The issuer connection definition. */
export type IssuerConnection = {
  __typename?: 'IssuerConnection';
  edges: Array<Maybe<IssuerEdge>>;
  pageInfo: PageInfo;
};

/** The issuer edge definition. */
export type IssuerEdge = {
  __typename?: 'IssuerEdge';
  cursor: Scalars['String']['output'];
  node: Issuer;
};

/** Fields which can be used to filter issuer on. Value must be camel case. */
export enum IssuerFilteringField {
  Categories = 'categories',
  CreatedAt = 'createdAt',
  MetaType = 'metaType',
  Name = 'name',
  OrganizationUuid = 'organizationUuid',
  SchemeUuid = 'schemeUuid',
  State = 'state',
  Type = 'type',
  Uuid = 'uuid'
}

/** Issuer locale definition. */
export type IssuerLocale = Model & {
  __typename?: 'IssuerLocale';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The i18n object */
  i18n: Scalars['JSONObject']['output'];
  /** The issuer the locale belongs to. */
  issuer: Issuer;
  /** The locale */
  locale: Scalars['Locale']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The issuer locale connection definition. */
export type IssuerLocaleConnection = {
  __typename?: 'IssuerLocaleConnection';
  edges: Array<Maybe<IssuerLocaleEdge>>;
  pageInfo: PageInfo;
};

/** The issuer locale edge definition. */
export type IssuerLocaleEdge = {
  __typename?: 'IssuerLocaleEdge';
  cursor: Scalars['String']['output'];
  node: IssuerLocale;
};

/** Fields which can be used to filter issuer locale on. Value must be camel case. */
export enum IssuerLocaleFilteringField {
  IssuerUuid = 'issuerUuid',
  Locale = 'locale'
}

/** Fields which can be used to sort issuer locale on. Value must be camel case. */
export enum IssuerLocaleSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting issuer locale. */
export type IssuerLocaleSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuerLocaleSortEnum;
};

/** Issuer meta definition. */
export type IssuerMeta = Model & {
  __typename?: 'IssuerMeta';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The datakeeper issuer meta */
  datakeeper?: Maybe<IssuerMetaDatakeeper>;
  /** The issuer the meta belongs to. */
  issuer: Issuer;
  /** The mdoc issuer meta */
  mdoc?: Maybe<IssuerMetaMdoc>;
  /** The OID4VC MDOC issuer meta */
  oid4vcMdoc?: Maybe<IssuerMetaOid4Vcmdoc>;
  /** The OID4VC SD-JWT issuer meta */
  oid4vcSdJwt?: Maybe<IssuerMetaOid4Vcsdjwt>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** The yivi issuer meta */
  yivi?: Maybe<IssuerMetaYivi>;
};

/** The issuer meta connection definition. */
export type IssuerMetaConnection = {
  __typename?: 'IssuerMetaConnection';
  edges: Array<Maybe<IssuerMetaEdge>>;
  pageInfo: PageInfo;
};

/** Issuer meta definition. */
export type IssuerMetaDatakeeper = Model & {
  __typename?: 'IssuerMetaDatakeeper';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The did of the issuer */
  did: Scalars['NonEmpty']['output'];
  /** The issuer meta the datakeeper meta belongs to. */
  issuerMeta: IssuerMeta;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The issuer meta datakeeper connection definition. */
export type IssuerMetaDatakeeperConnection = {
  __typename?: 'IssuerMetaDatakeeperConnection';
  edges: Array<Maybe<IssuerMetaDatakeeperEdge>>;
  pageInfo: PageInfo;
};

/** The issuer meta datakeeper edge definition. */
export type IssuerMetaDatakeeperEdge = {
  __typename?: 'IssuerMetaDatakeeperEdge';
  cursor: Scalars['String']['output'];
  node: IssuerMetaDatakeeper;
};

/** Fields which can be used to filter issuer meta datakeeper on. Value must be camel case. */
export enum IssuerMetaDatakeeperFilteringField {
  Did = 'did',
  IssuerMetaUuid = 'issuerMetaUuid'
}

/** Fields which can be used to sort issuer meta datakeeper on. Value must be camel case. */
export enum IssuerMetaDatakeeperSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting issuer meta datakeeper. */
export type IssuerMetaDatakeeperSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuerMetaDatakeeperSortEnum;
};

/** The issuer meta edge definition. */
export type IssuerMetaEdge = {
  __typename?: 'IssuerMetaEdge';
  cursor: Scalars['String']['output'];
  node: IssuerMeta;
};

/** Fields which can be used to filter issuer meta on. Value must be camel case. */
export enum IssuerMetaFilteringField {
  IssuerUuid = 'issuerUuid'
}

/** Issuer meta definition. */
export type IssuerMetaMdoc = Model & {
  __typename?: 'IssuerMetaMDOC';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The issuer meta the mdoc meta belongs to. */
  issuerMeta: IssuerMeta;
  /** The issuer's public key as a JWK */
  jwk: Scalars['JSONObject']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The issuer meta mdoc connection definition. */
export type IssuerMetaMdocConnection = {
  __typename?: 'IssuerMetaMDOCConnection';
  edges: Array<Maybe<IssuerMetaMdocEdge>>;
  pageInfo: PageInfo;
};

/** The issuer meta mdoc edge definition. */
export type IssuerMetaMdocEdge = {
  __typename?: 'IssuerMetaMDOCEdge';
  cursor: Scalars['String']['output'];
  node: IssuerMetaMdoc;
};

/** Fields which can be used to filter issuer meta mdoc on. Value must be camel case. */
export enum IssuerMetaMdocFilteringField {
  IssuerMetaUuid = 'issuerMetaUuid'
}

/** Fields which can be used to sort issuer meta mdoc on. Value must be camel case. */
export enum IssuerMetaMdocSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting issuer meta mdoc. */
export type IssuerMetaMdocSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuerMetaMdocSortEnum;
};

/** Issuer meta definition. */
export type IssuerMetaOid4Vcmdoc = Model & {
  __typename?: 'IssuerMetaOID4VCMDOC';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The issuer meta the OID4VC meta belongs to. */
  issuerMeta: IssuerMeta;
  /** The issuer's public key as a JWK */
  jwk: Scalars['JSONObject']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The issuer meta OID4VC connection definition. */
export type IssuerMetaOid4VcmdocConnection = {
  __typename?: 'IssuerMetaOID4VCMDOCConnection';
  edges: Array<Maybe<IssuerMetaOid4VcmdocEdge>>;
  pageInfo: PageInfo;
};

/** The issuer meta OID4VC edge definition. */
export type IssuerMetaOid4VcmdocEdge = {
  __typename?: 'IssuerMetaOID4VCMDOCEdge';
  cursor: Scalars['String']['output'];
  node: IssuerMetaOid4Vcmdoc;
};

/** Fields which can be used to filter issuer meta OID4VC on. Value must be camel case. */
export enum IssuerMetaOid4VcmdocFilteringField {
  IssuerMetaUuid = 'issuerMetaUuid'
}

/** Fields which can be used to sort issuer meta OID4VC on. Value must be camel case. */
export enum IssuerMetaOid4VcmdocSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting issuer meta OID4VC. */
export type IssuerMetaOid4VcmdocSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuerMetaOid4VcmdocSortEnum;
};

/** Issuer meta definition. */
export type IssuerMetaOid4Vcsdjwt = Model & {
  __typename?: 'IssuerMetaOID4VCSDJWT';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The issuer's identifier (iss) */
  identifier: Scalars['NonEmpty']['output'];
  /** The issuer meta the OID4VC meta belongs to. */
  issuerMeta: IssuerMeta;
  /** The issuer's public key as a JWK */
  jwk: Scalars['JSONObject']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The issuer meta OID4VC connection definition. */
export type IssuerMetaOid4VcsdjwtConnection = {
  __typename?: 'IssuerMetaOID4VCSDJWTConnection';
  edges: Array<Maybe<IssuerMetaOid4VcsdjwtEdge>>;
  pageInfo: PageInfo;
};

/** The issuer meta OID4VC edge definition. */
export type IssuerMetaOid4VcsdjwtEdge = {
  __typename?: 'IssuerMetaOID4VCSDJWTEdge';
  cursor: Scalars['String']['output'];
  node: IssuerMetaOid4Vcsdjwt;
};

/** Fields which can be used to filter issuer meta OID4VC on. Value must be camel case. */
export enum IssuerMetaOid4VcsdjwtFilteringField {
  Identifier = 'identifier',
  IssuerMetaUuid = 'issuerMetaUuid'
}

/** Fields which can be used to sort issuer meta OID4VC on. Value must be camel case. */
export enum IssuerMetaOid4VcsdjwtSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting issuer meta OID4VC. */
export type IssuerMetaOid4VcsdjwtSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuerMetaOid4VcsdjwtSortEnum;
};

/** Fields which can be used to sort issuer meta on. Value must be camel case. */
export enum IssuerMetaSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting issuer meta. */
export type IssuerMetaSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuerMetaSortEnum;
};

/** Issuer meta type. */
export enum IssuerMetaType {
  Datakeeper = 'DATAKEEPER',
  Mdoc = 'MDOC',
  None = 'NONE',
  Oid4VcMdoc = 'OID4VC_MDOC',
  Oid4VcSdJwt = 'OID4VC_SD_JWT',
  Yivi = 'YIVI'
}

/** Issuer meta definition. */
export type IssuerMetaYivi = Model & {
  __typename?: 'IssuerMetaYivi';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The identifier of the issuer */
  id?: Maybe<Scalars['NonEmpty']['output']>;
  /** The issuer meta the yivi meta belongs to. */
  issuerMeta: IssuerMeta;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The issuer meta yivi connection definition. */
export type IssuerMetaYiviConnection = {
  __typename?: 'IssuerMetaYiviConnection';
  edges: Array<Maybe<IssuerMetaYiviEdge>>;
  pageInfo: PageInfo;
};

/** The issuer meta yivi edge definition. */
export type IssuerMetaYiviEdge = {
  __typename?: 'IssuerMetaYiviEdge';
  cursor: Scalars['String']['output'];
  node: IssuerMetaYivi;
};

/** Fields which can be used to filter issuer meta yivi on. Value must be camel case. */
export enum IssuerMetaYiviFilteringField {
  Id = 'id',
  IssuerMetaUuid = 'issuerMetaUuid'
}

/** Fields which can be used to sort issuer meta yivi on. Value must be camel case. */
export enum IssuerMetaYiviSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting issuer meta yivi. */
export type IssuerMetaYiviSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuerMetaYiviSortEnum;
};

/** Fields which can be used to sort issuer on. Value must be camel case. */
export enum IssuerSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  State = 'state'
}

/** Input options for sorting issuer. */
export type IssuerSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuerSortEnum;
};

/** Types */
export enum IssuerType {
  Custom = 'CUSTOM',
  Demo = 'DEMO',
  System = 'SYSTEM'
}

/** LocaleConfig definition. */
export type LocaleConfig = Model & {
  __typename?: 'LocaleConfig';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The locale */
  locale: Scalars['Locale']['output'];
  /** The model */
  model: IdentityModel;
  /** The collection of properties */
  properties: Array<Scalars['String']['output']>;
  /** The provider the locale belongs to. */
  provider?: Maybe<Provider>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The localeConfig connection definition. */
export type LocaleConfigConnection = {
  __typename?: 'LocaleConfigConnection';
  edges: Array<Maybe<LocaleConfigEdge>>;
  pageInfo: PageInfo;
};

/** The localeConfig edge definition. */
export type LocaleConfigEdge = {
  __typename?: 'LocaleConfigEdge';
  cursor: Scalars['String']['output'];
  node: LocaleConfig;
};

/** Fields which can be used to filter localeConfig on. Value must be camel case. */
export enum LocaleConfigFilteringField {
  Locale = 'locale',
  ProviderUuid = 'providerUuid'
}

/** Fields which can be used to sort localeConfig on. Value must be camel case. */
export enum LocaleConfigSortEnum {
  CreatedAt = 'createdAt',
  ProviderUuid = 'providerUuid'
}

/** Input options for sorting localeConfig. */
export type LocaleConfigSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: LocaleConfigSortEnum;
};

/** MappingIssuance definition. */
export type MappingIssuance = Model & {
  __typename?: 'MappingIssuance';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The issuance payload */
  issuancePayload: Scalars['JSONObject']['output'];
  /** A list of links belonging to this mapping. */
  mappingIssuanceLinks: MappingIssuanceLinkConnection;
  /** The name of the mappingIssuance. */
  name: Scalars['NonEmpty']['output'];
  /** The organization, this mappingIssuance belongs to. */
  organization: Organization;
  /** The state of the mappingIssuance */
  state: MappingIssuanceState;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** MappingIssuance definition. */
export type MappingIssuanceMappingIssuanceLinksArgs = {
  input?: InputMaybe<FindManyMappingIssuanceLinksInput>;
};

/** MappingIssuance actions */
export enum MappingIssuanceAction {
  Activate = 'ACTIVATE',
  Deactivate = 'DEACTIVATE'
}

/** Property definition. */
export type MappingIssuanceAttribute = Model & {
  __typename?: 'MappingIssuanceAttribute';
  /** The attribute the attributeUuid belongs to. */
  attribute: Attribute;
  /** The attribute UUID. */
  attributeUuid: Scalars['UUID']['output'];
  /** The claims, this attribute will be mapped to. */
  claims: Array<Scalars['NonEmpty']['output']>;
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The mappingIssuance link, the attribute associated to. */
  mappingIssuanceLink: MappingIssuanceLink;
  /** The transform function */
  transform: Scalars['NonEmpty']['output'];
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};

/** The mappingIssuance attribute connection definition. */
export type MappingIssuanceAttributeConnection = {
  __typename?: 'MappingIssuanceAttributeConnection';
  edges: Array<MappingIssuanceAttributeEdge>;
  pageInfo: PageInfo;
};

/** The mappingIssuance attribute edge definition. */
export type MappingIssuanceAttributeEdge = {
  __typename?: 'MappingIssuanceAttributeEdge';
  cursor: Scalars['String']['output'];
  node: MappingIssuanceAttribute;
};

/** Fields which can be used to filter mappingIssuance attribute on. Value must be camel case. */
export enum MappingIssuanceAttributeFilteringField {
  AttributeUuid = 'attributeUuid',
  Claim = 'claim',
  MappingIssuanceUuid = 'mappingIssuanceUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort mappingIssuance attribute on. Value must be camel case. */
export enum MappingIssuanceAttributeSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting mappingIssuance attribute. */
export type MappingIssuanceAttributeSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: MappingIssuanceAttributeSortEnum;
};

/** The connection definition for mappingIssuance. */
export type MappingIssuanceConnection = {
  __typename?: 'MappingIssuanceConnection';
  edges: Array<Maybe<MappingIssuanceEdge>>;
  pageInfo: PageInfo;
};

/** The edge definition for mappingIssuance. */
export type MappingIssuanceEdge = {
  __typename?: 'MappingIssuanceEdge';
  cursor: Scalars['String']['output'];
  node: MappingIssuance;
};

/** Fields which can be used to filter mappingIssuances on. Value must be camel case. */
export enum MappingIssuanceFilteringField {
  Name = 'name',
  OrganizationUuid = 'organizationUuid',
  State = 'state',
  Uuid = 'uuid'
}

/** Property definition. */
export type MappingIssuanceLink = Model & {
  __typename?: 'MappingIssuanceLink';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The credential the credentialUuid belongs to. */
  credential: Credential;
  /** The link credential uuid. */
  credentialUuid: Scalars['UUID']['output'];
  /** The issuer uuid. */
  issuerUuid: Scalars['UUID']['output'];
  /** The mappingIssuance, the link associated to. */
  mappingIssuance: MappingIssuance;
  /** The collection of defined attributes */
  mappingIssuanceAttributes: MappingIssuanceAttributeConnection;
  /** The provider uuid. */
  providerUuid: Scalars['UUID']['output'];
  /** The scheme uuid. */
  schemeUuid: Scalars['UUID']['output'];
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Property definition. */
export type MappingIssuanceLinkMappingIssuanceAttributesArgs = {
  input?: InputMaybe<FindManyMappingIssuanceAttributesInput>;
};

/** The mappingIssuance link connection definition. */
export type MappingIssuanceLinkConnection = {
  __typename?: 'MappingIssuanceLinkConnection';
  edges: Array<MappingIssuanceLinkEdge>;
  pageInfo: PageInfo;
};

/** The mappingIssuance link edge definition. */
export type MappingIssuanceLinkEdge = {
  __typename?: 'MappingIssuanceLinkEdge';
  cursor: Scalars['String']['output'];
  node: MappingIssuanceLink;
};

/** Fields which can be used to filter mappingIssuance link on. Value must be camel case. */
export enum MappingIssuanceLinkFilteringField {
  CredentialUuid = 'credentialUuid',
  IssuerUuid = 'issuerUuid',
  MappingIssuanceUuid = 'mappingIssuanceUuid',
  ProviderUuid = 'providerUuid',
  SchemeUuid = 'schemeUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort mappingIssuance link on. Value must be camel case. */
export enum MappingIssuanceLinkSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting mappingIssuance link. */
export type MappingIssuanceLinkSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: MappingIssuanceLinkSortEnum;
};

/** Fields which can be used to sort mappingIssuances on. Value must be camel case. */
export enum MappingIssuanceSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  State = 'state',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting mappingIssuances. */
export type MappingIssuanceSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: MappingIssuanceSortEnum;
};

/** The state of an mappingIssuance */
export enum MappingIssuanceState {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

/** MappingVerification definition. */
export type MappingVerification = Model & {
  __typename?: 'MappingVerification';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The collection of defined claims */
  mappingVerificationClaims: MappingVerificationClaimConnection;
  /** The name of the mappingVerification. */
  name: Scalars['NonEmpty']['output'];
  /** The organization, this mappingVerification belongs to. */
  organization: Organization;
  /** The state of the mappingVerification */
  state: MappingVerificationState;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** MappingVerification definition. */
export type MappingVerificationMappingVerificationClaimsArgs = {
  input?: InputMaybe<FindManyMappingVerificationClaimsInput>;
};

/** MappingVerification actions */
export enum MappingVerificationAction {
  Activate = 'ACTIVATE',
  Deactivate = 'DEACTIVATE'
}

/** Property definition. */
export type MappingVerificationAttribute = Model & {
  __typename?: 'MappingVerificationAttribute';
  /** The attribute the attributeUuid belongs to. */
  attribute: Attribute;
  /** The attribute UUID. */
  attributeUuid: Scalars['UUID']['output'];
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The key for the attribute */
  key: Scalars['NonEmpty']['output'];
  /** The mappingVerification link, the attribute associated to. */
  mappingVerificationLink: MappingVerificationLink;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};

/** The mappingVerification attribute connection definition. */
export type MappingVerificationAttributeConnection = {
  __typename?: 'MappingVerificationAttributeConnection';
  edges: Array<MappingVerificationAttributeEdge>;
  pageInfo: PageInfo;
};

/** The mappingVerification attribute edge definition. */
export type MappingVerificationAttributeEdge = {
  __typename?: 'MappingVerificationAttributeEdge';
  cursor: Scalars['String']['output'];
  node: MappingVerificationAttribute;
};

/** Fields which can be used to filter mappingVerification attribute on. Value must be camel case. */
export enum MappingVerificationAttributeFilteringField {
  AttributeUuid = 'attributeUuid',
  Key = 'key',
  MappingVerificationLinkUuid = 'mappingVerificationLinkUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort mappingVerification attribute on. Value must be camel case. */
export enum MappingVerificationAttributeSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting mappingVerification attribute. */
export type MappingVerificationAttributeSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: MappingVerificationAttributeSortEnum;
};

/** Property definition. */
export type MappingVerificationClaim = Model & {
  __typename?: 'MappingVerificationClaim';
  /** The actual claim */
  claim: Scalars['NonEmpty']['output'];
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The mappingVerification the claim belongs to. */
  mappingVerification: MappingVerification;
  /** A list of links belonging to this claim. */
  mappingVerificationLinks: MappingVerificationLinkConnection;
  /** The meta of the claim */
  meta: Scalars['JSONObject']['output'];
  /** The name of the claim. */
  name: Scalars['NonEmpty']['output'];
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Property definition. */
export type MappingVerificationClaimMappingVerificationLinksArgs = {
  input?: InputMaybe<FindManyMappingVerificationLinksInput>;
};

/** The mappingVerification claim connection definition. */
export type MappingVerificationClaimConnection = {
  __typename?: 'MappingVerificationClaimConnection';
  edges: Array<MappingVerificationClaimEdge>;
  pageInfo: PageInfo;
};

/** The mappingVerification claim edge definition. */
export type MappingVerificationClaimEdge = {
  __typename?: 'MappingVerificationClaimEdge';
  cursor: Scalars['String']['output'];
  node: MappingVerificationClaim;
};

/** Fields which can be used to filter mappingVerification claim on. Value must be camel case. */
export enum MappingVerificationClaimFilteringField {
  MappingVerificationUuid = 'mappingVerificationUuid',
  Name = 'name',
  Uuid = 'uuid'
}

/** Fields which can be used to sort mappingVerification claim on. Value must be camel case. */
export enum MappingVerificationClaimSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting mappingVerification claim. */
export type MappingVerificationClaimSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: MappingVerificationClaimSortEnum;
};

/** The connection definition for mappingVerification. */
export type MappingVerificationConnection = {
  __typename?: 'MappingVerificationConnection';
  edges: Array<Maybe<MappingVerificationEdge>>;
  pageInfo: PageInfo;
};

/** The edge definition for mappingVerification. */
export type MappingVerificationEdge = {
  __typename?: 'MappingVerificationEdge';
  cursor: Scalars['String']['output'];
  node: MappingVerification;
};

/** Fields which can be used to filter mappingVerifications on. Value must be camel case. */
export enum MappingVerificationFilteringField {
  Name = 'name',
  OrganizationUuid = 'organizationUuid',
  State = 'state',
  Uuid = 'uuid'
}

/** Property definition. */
export type MappingVerificationLink = Model & {
  __typename?: 'MappingVerificationLink';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The credential the credentialUuid belongs to. */
  credential: Credential;
  /** The link credential uuid. */
  credentialUuid: Scalars['UUID']['output'];
  /** The issuer uuid. */
  issuerUuid: Scalars['UUID']['output'];
  /** The collection of defined link credentials */
  mappingVerificationAttributes: MappingVerificationAttributeConnection;
  /** The mappingVerification claim, the link associated to. */
  mappingVerificationClaim: MappingVerificationClaim;
  /** The provider uuid. */
  providerUuid: Scalars['UUID']['output'];
  /** The scheme uuid. */
  schemeUuid: Scalars['UUID']['output'];
  /** The transform function. */
  transform?: Maybe<Scalars['NonEmpty']['output']>;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Property definition. */
export type MappingVerificationLinkMappingVerificationAttributesArgs = {
  input?: InputMaybe<FindManyMappingVerificationAttributesInput>;
};

/** The mappingVerification link connection definition. */
export type MappingVerificationLinkConnection = {
  __typename?: 'MappingVerificationLinkConnection';
  edges: Array<MappingVerificationLinkEdge>;
  pageInfo: PageInfo;
};

/** The mappingVerification link edge definition. */
export type MappingVerificationLinkEdge = {
  __typename?: 'MappingVerificationLinkEdge';
  cursor: Scalars['String']['output'];
  node: MappingVerificationLink;
};

/** Fields which can be used to filter mappingVerification link on. Value must be camel case. */
export enum MappingVerificationLinkFilteringField {
  CredentialUuid = 'credentialUuid',
  IssuerUuid = 'issuerUuid',
  MappingVerificationClaimUuid = 'mappingVerificationClaimUuid',
  ProviderUuid = 'providerUuid',
  SchemeUuid = 'schemeUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort mappingVerification link on. Value must be camel case. */
export enum MappingVerificationLinkSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting mappingVerification link. */
export type MappingVerificationLinkSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: MappingVerificationLinkSortEnum;
};

/** Fields which can be used to sort mappingVerifications on. Value must be camel case. */
export enum MappingVerificationSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  State = 'state',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting mappingVerifications. */
export type MappingVerificationSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: MappingVerificationSortEnum;
};

/** The state of an mappingVerification */
export enum MappingVerificationState {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

/** An object with an UUID */
export type Model = {
  /** The resource creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The resource update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** Money definition */
export type Money = {
  __typename?: 'Money';
  /** The amount of money in cents. */
  amount?: Maybe<Scalars['Int']['output']>;
  /** The currency of the amount. */
  currency?: Maybe<CurrencyCode>;
};

/** Moves credentials from groups */
export type MoveFlowDisclosureCredentialInput = {
  /** The credential to move */
  flowDisclosureCredentialUuid: Scalars['NonEmpty']['input'];
  /** Optionally provide options */
  options?: InputMaybe<MoveFlowDisclosureCredentialOptionsInput>;
  /** The flow disclosureGroupUuid */
  toFlowDisclosureGroupUuid?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Moves credentials from group options */
export type MoveFlowDisclosureCredentialOptionsInput = {
  /**
   * Delete the group if it becomes empty after the move
   * Default: true
   */
  deleteGroupIfEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Moves credentials from groups */
export type MoveFlowSignatureCredentialInput = {
  /** The credential to move */
  flowSignatureCredentialUuid: Scalars['NonEmpty']['input'];
  /** Optionally provide options */
  options?: InputMaybe<MoveFlowSignatureCredentialOptionsInput>;
  /** The flow disclosureGroupUuid */
  toFlowSignatureGroupUuid?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Moves credentials from group options */
export type MoveFlowSignatureCredentialOptionsInput = {
  /**
   * Delete the group if it becomes empty after the move
   * Default: true
   */
  deleteGroupIfEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Accept the user invitation using password. */
  acceptUserInvitationAndRegisterByPassword: Authentication;
  /** Accept the user invitation using openID Token. */
  acceptUserInvitationByOpenIdToken: Authentication;
  /** Accept the user invitation using password. */
  acceptUserInvitationByPassword: Authentication;
  /** Perform action on an app */
  actionApp: App;
  /** Perform action on an attribute */
  actionAttribute: Attribute;
  /** Action on billing wallet */
  actionBillingWallet: BillingWallet;
  /** Perform action on an credential */
  actionCredential: Credential;
  /** Perform action on credential request */
  actionCredentialRequest: CredentialRequest;
  /** Update a flow state. */
  actionFlowAuthentication: FlowAuthentication;
  /** Action a flow */
  actionFlowDisclosure: FlowDisclosure;
  /** Action a flow. */
  actionFlowIssuance: FlowIssuance;
  /** Action a flow. */
  actionFlowSignature: FlowSignature;
  /** Perform action on an issuer */
  actionIssuer: Issuer;
  /** Perform action on an mappingIssuance */
  actionMappingIssuance: MappingIssuance;
  /** Perform action on an mappingVerification */
  actionMappingVerification: MappingVerification;
  /** Action a user oauthProvider. */
  actionOAuthProvider: OAuthProvider;
  /** Action a user organization. */
  actionOrganization: Organization;
  /** Action */
  actionOrganizationAlert: OrganizationAlert;
  /** Action an organization app. */
  actionOrganizationApp: OrganizationApp;
  /** Perform action on organization app prerequisite */
  actionOrganizationAppPrerequisite: OrganizationAppPrerequisite;
  /** Update an brand. */
  actionOrganizationBrand: OrganizationBrand;
  /** Action an domain. */
  actionOrganizationDomain: OrganizationDomain;
  /** Action */
  actionOrganizationNotification: OrganizationNotification;
  /** Action a user. */
  actionOrganizationUser: OrganizationUser;
  /** Perform action on an provider */
  actionProvider: Provider;
  /** Perform action on an scheme */
  actionScheme: Scheme;
  /** Perform action on an scope */
  actionScope: Scope;
  /** Update a state. */
  actionStudioPlan: StudioPlan;
  /** Log in a user using Client Credentials. */
  authenticationByClientCredentials: Authentication;
  /** Log in a user using OpenId token. */
  authenticationByOpenIdToken: Authentication;
  /** Log in a user using password. */
  authenticationByPassword: Authentication;
  /** Create a app. */
  createApp: App;
  /** Create a app. */
  createAppLocale: AppLocale;
  /** Create a app prerequisite. */
  createAppPrerequisite: AppPrerequisite;
  /** Create a appPrerequisite. */
  createAppPrerequisiteLocale: AppPrerequisiteLocale;
  /** Create a app prerequisite state . */
  createAppPrerequisiteState: AppPrerequisiteState;
  /** Create a appPrerequisiteState. */
  createAppPrerequisiteStateLocale: AppPrerequisiteStateLocale;
  /** Create a attribute. */
  createAttribute: Attribute;
  /** Create a attribute. */
  createAttributeLocale: AttributeLocale;
  /** Create a attribute meta datakeeper. */
  createAttributeMetaDatakeeper: AttributeMetaDatakeeper;
  /** Create a attribute meta digidentity. */
  createAttributeMetaDigidentity: AttributeMetaDigidentity;
  /** Create a attribute meta mdoc. */
  createAttributeMetaMDOC: AttributeMetaMdoc;
  /** Create a attribute meta NL Wallet. */
  createAttributeMetaNLWallet: AttributeMetaNlWallet;
  /** Create a attribute meta nect. */
  createAttributeMetaNect: AttributeMetaNect;
  /** Create a attribute meta OID4VC. */
  createAttributeMetaOID4VCMDOC: AttributeMetaOid4Vcmdoc;
  /** Create a attribute meta OID4VC. */
  createAttributeMetaOID4VCSDJWT: AttributeMetaOid4Vcsdjwt;
  /** Create a attribute meta ReadID. */
  createAttributeMetaReadID: AttributeMetaReadId;
  /** Create a attribute meta truid. */
  createAttributeMetaTruid: AttributeMetaTruid;
  /** Create a attribute meta yivi. */
  createAttributeMetaYivi: AttributeMetaYivi;
  /** Create a attribute meta yoti. */
  createAttributeMetaYoti: AttributeMetaYoti;
  /** Create a attribute request. */
  createAttributeRequest: AttributeRequest;
  /** Create a attribute. */
  createAttributeRequestLocale: AttributeRequestLocale;
  /** Create a attribute request meta datakeeper. */
  createAttributeRequestMetaDatakeeper: AttributeRequestMetaDatakeeper;
  /** Create a attribute request meta yivi. */
  createAttributeRequestMetaYivi: AttributeRequestMetaYivi;
  /** Create a attribute request meta yoti. */
  createAttributeRequestMetaYoti: AttributeRequestMetaYoti;
  /** Create invitation. */
  createAuthenticationInvitation?: Maybe<Scalars['Null']['output']>;
  /** Forgot password, which send a password reset email. */
  createAuthenticationReset?: Maybe<Scalars['Null']['output']>;
  /** Initializes billing plan */
  createBillingPlan: BillingPlan;
  /** Create billing wallet */
  createBillingWallet: BillingWallet;
  /** Create a credential. */
  createCredential: Credential;
  /** Create a credential. */
  createCredentialLocale: CredentialLocale;
  /** Create a credential meta datakeeper. */
  createCredentialMetaDatakeeper: CredentialMetaDatakeeper;
  /** Create a credential meta digidentity. */
  createCredentialMetaDigidentity: CredentialMetaDigidentity;
  /** Create a credential meta mdoc. */
  createCredentialMetaMDOC: CredentialMetaMdoc;
  /** Create a credential meta NL Wallet. */
  createCredentialMetaNLWallet: CredentialMetaNlWallet;
  /** Create a credential meta nect. */
  createCredentialMetaNect: CredentialMetaNect;
  /** Create a credential meta OID4VC mdoc. */
  createCredentialMetaOID4VCMDOC: CredentialMetaOid4Vcmdoc;
  /** Create a credential meta OID4VC SD-JWT. */
  createCredentialMetaOID4VCSDJWT: CredentialMetaOid4Vcsdjwt;
  /** Create a credential meta ReadID. */
  createCredentialMetaReadID: CredentialMetaReadId;
  /** Create a credential meta truid. */
  createCredentialMetaTruid: CredentialMetaTruid;
  /** Create a credential meta yivi. */
  createCredentialMetaYivi: CredentialMetaYivi;
  /** Create a credential meta yoti. */
  createCredentialMetaYoti: CredentialMetaYoti;
  /** Create a credential request. */
  createCredentialRequest: CredentialRequest;
  /** Create a credential. */
  createCredentialRequestLocale: CredentialRequestLocale;
  /** Create a credential request meta datakeeper. */
  createCredentialRequestMetaDatakeeper: CredentialRequestMetaDatakeeper;
  /** Create a credential request meta yivi. */
  createCredentialRequestMetaYivi: CredentialRequestMetaYivi;
  /** Create a credential request meta yoti. */
  createCredentialRequestMetaYoti: CredentialRequestMetaYoti;
  /** Create a credential request state. */
  createCredentialRequestState: CredentialRequestState;
  /** Create a credentialRequestState. */
  createCredentialRequestStateLocale: CredentialRequestStateLocale;
  /** Create a flow. */
  createFlowAuthentication: FlowAuthentication;
  /** Create and store a new brand type. */
  createFlowAuthenticationBrand: FlowAuthenticationBrand;
  /** Create and store a new domain type. */
  createFlowAuthenticationDomain: FlowAuthenticationDomain;
  /** Create a flow authentication provider. */
  createFlowAuthenticationProvider: FlowAuthenticationProvider;
  /** Create a FlowAuthenticationProviderConfigurationNLWallet. */
  createFlowAuthenticationProviderConfigurationNLWallet: FlowAuthenticationProviderConfigurationNlWallet;
  /** Create a flow authentication scope. */
  createFlowAuthenticationScope: FlowAuthenticationScope;
  /** Create a flow. */
  createFlowDisclosure: FlowDisclosure;
  /** Create a flow disclosure attribute. */
  createFlowDisclosureAttribute: FlowDisclosureAttribute;
  /** Create and store a new brand type. */
  createFlowDisclosureBrand: FlowDisclosureBrand;
  /** Create a flow disclosure credential. */
  createFlowDisclosureCredential: FlowDisclosureCredential;
  /** Create and store a new domain type. */
  createFlowDisclosureDomain: FlowDisclosureDomain;
  /** Create a flow disclosure group. */
  createFlowDisclosureGroup: FlowDisclosureGroup;
  /** Create and store a new mapping type. */
  createFlowDisclosureMapping: FlowDisclosureMapping;
  /** Create a flow disclosure provider. */
  createFlowDisclosureProvider: FlowDisclosureProvider;
  /** Create a flow disclosure provider by attributes */
  createFlowDisclosureProviderByAttributes: FlowDisclosureProvider;
  /** Create a FlowDisclosureProviderConfigurationNLWallet. */
  createFlowDisclosureProviderConfigurationNLWallet: FlowDisclosureProviderConfigurationNlWallet;
  /** Create a flow. */
  createFlowIssuance: FlowIssuance;
  /** Create a flow issuance attribute. */
  createFlowIssuanceAttribute: FlowIssuanceAttribute;
  /** Create and store a new brand type. */
  createFlowIssuanceBrand: FlowIssuanceBrand;
  /** Create a flow issuance credential. */
  createFlowIssuanceCredential: FlowIssuanceCredential;
  /** Create a flow credential meta datakeeper. */
  createFlowIssuanceCredentialMetaDatakeeper: FlowIssuanceCredentialMetaDatakeeper;
  /** Create a flow credential meta yivi. */
  createFlowIssuanceCredentialMetaYivi: FlowIssuanceCredentialMetaYivi;
  /** Create and store a new domain type. */
  createFlowIssuanceDomain: FlowIssuanceDomain;
  /** Create and store a new mapping type. */
  createFlowIssuanceMapping: FlowIssuanceMapping;
  /** Create a flow issuance provider. */
  createFlowIssuanceProvider: FlowIssuanceProvider;
  /** Create many flow issuance provider by attributes */
  createFlowIssuanceProviderByAttributes: FlowIssuanceProvider;
  /** Create a flow. */
  createFlowSignature: FlowSignature;
  /** Create a flow signature attribute. */
  createFlowSignatureAttribute: FlowSignatureAttribute;
  /** Create and store a new brand type. */
  createFlowSignatureBrand: FlowSignatureBrand;
  /** Create a flow signature credential. */
  createFlowSignatureCredential: FlowSignatureCredential;
  /** Create and store a new domain type. */
  createFlowSignatureDomain: FlowSignatureDomain;
  /** Create a flow signature group. */
  createFlowSignatureGroup: FlowSignatureGroup;
  /** Create and store a new mapping type. */
  createFlowSignatureMapping: FlowSignatureMapping;
  /** Create a flow signature provider. */
  createFlowSignatureProvider: FlowSignatureProvider;
  /** Create a flow signature provider by attributes */
  createFlowSignatureProviderByAttributes: FlowSignatureProvider;
  /** Create a FlowSignatureProviderConfigurationNLWallet. */
  createFlowSignatureProviderConfigurationNLWallet: FlowSignatureProviderConfigurationNlWallet;
  /** Create a issuer. */
  createIssuer: Issuer;
  /** Create a issuer. */
  createIssuerLocale: IssuerLocale;
  /** Create a issuer meta datakeeper. */
  createIssuerMetaDatakeeper: IssuerMetaDatakeeper;
  /** Create a issuer meta mdoc. */
  createIssuerMetaMDOC: IssuerMetaMdoc;
  /** Create a issuer meta OID4VC. */
  createIssuerMetaOID4VCMDOC: IssuerMetaOid4Vcmdoc;
  /** Create a issuer meta OID4VC. */
  createIssuerMetaOID4VCSDJWT: IssuerMetaOid4Vcsdjwt;
  /** Create a issuer meta yivi. */
  createIssuerMetaYivi: IssuerMetaYivi;
  /** Create a localeConfig. */
  createLocaleConfig: LocaleConfig;
  /** Create many mappingIssuance attributes */
  createManyMappingIssuanceAttributes: Array<MappingIssuanceAttribute>;
  /** Create many mappingIssuance links */
  createManyMappingIssuanceLinks: Array<MappingIssuanceLink>;
  /** Create many mappingIssuance links by selected attributes */
  createManyMappingIssuanceLinksByAttributes: Array<MappingIssuanceLink>;
  /** Create many mappingVerification attributes */
  createManyMappingVerificationAttributes: Array<MappingVerificationAttribute>;
  /** Create many mappingVerification links */
  createManyMappingVerificationLinks: Array<MappingVerificationLink>;
  /** Create many mappingVerification links by selected attributes */
  createManyMappingVerificationLinksByAttributes: Array<MappingVerificationLink>;
  /** Create and store many new notification event. */
  createManyOrganizationNotificationEvents: Array<OrganizationNotificationEvent>;
  /** Create many StudioPlanControls. */
  createManyStudioPlanControls: Array<StudioPlanControl>;
  /** Create an mappingIssuance. */
  createMappingIssuance: MappingIssuance;
  /** Create an mappingIssuance attribute. */
  createMappingIssuanceAttribute: MappingIssuanceAttribute;
  /** Create an mappingIssuance link. */
  createMappingIssuanceLink: MappingIssuanceLink;
  /** Create an mappingVerification. */
  createMappingVerification: MappingVerification;
  /** Create an mappingVerification attribute. */
  createMappingVerificationAttribute: MappingVerificationAttribute;
  /** Create an mappingVerification claim. */
  createMappingVerificationClaim: MappingVerificationClaim;
  /** Create an mappingVerification link. */
  createMappingVerificationLink: MappingVerificationLink;
  /** Create and store a new oauthProvider type. */
  createOAuthProvider: OAuthProvider;
  /** Create and store a new organization type. */
  createOrganization: Organization;
  /** Create and store a new address. */
  createOrganizationAddress: OrganizationAddress;
  /** Create organization alert. */
  createOrganizationAlert: OrganizationAlert;
  /** Create organization alert. */
  createOrganizationAlertDeprecation: OrganizationAlertDeprecation;
  /** Create an organization app. */
  createOrganizationApp: OrganizationApp;
  /** Create a organization app meta datakeeper. */
  createOrganizationAppMetaDatakeeper: OrganizationAppMetaDatakeeper;
  /** Create a organization app meta kiwa. */
  createOrganizationAppMetaKiwa: OrganizationAppMetaKiwa;
  /** Create a organization app meta yoti. */
  createOrganizationAppMetaYoti: OrganizationAppMetaYoti;
  /** Create an organization app prerequisite. */
  createOrganizationAppPrerequisite: OrganizationAppPrerequisite;
  /** Create and store a new brand type. */
  createOrganizationBrand: OrganizationBrand;
  /** Create and store a new token type. */
  createOrganizationClient: OrganizationClient;
  /** Create and store a new domain type. */
  createOrganizationDomain: OrganizationDomain;
  /** Create a OrganizationDomainOAuthProvider. */
  createOrganizationDomainOAuthProvider: OrganizationDomainOAuthProvider;
  /** Create and store a new address. */
  createOrganizationNotification: OrganizationNotification;
  /** Create and store a new notification event. */
  createOrganizationNotificationEvent: OrganizationNotificationEvent;
  /** Create and store a new secret type. */
  createOrganizationSecret: OrganizationSecret;
  /** Create and store a new user type. */
  createOrganizationUser: OrganizationUser;
  /** Create a provider. */
  createProvider: Provider;
  /** Create a app. */
  createProviderApp: ProviderApp;
  /** Create an object */
  createProviderAppMetaOID4VC: ProviderAppMetaOid4Vc;
  /** Create a provider. */
  createProviderLocale: ProviderLocale;
  /** Create a scheme. */
  createScheme: Scheme;
  /** Create a scheme. */
  createSchemeLocale: SchemeLocale;
  /** Create a scope. */
  createScope: Scope;
  /** Create a scope claim. */
  createScopeClaim: ScopeClaim;
  /** Create a scope. */
  createScopeLocale: ScopeLocale;
  /** Create a scope resource. */
  createScopeResource: ScopeResource;
  /** Create a StudioPlan. */
  createStudioPlan: StudioPlan;
  /** Create a StudioPlanControl. */
  createStudioPlanControl: StudioPlanControl;
  /** Create a StudioPlanControlOverride. */
  createStudioPlanControlOverride: StudioPlanControlOverride;
  /** Create a StudioPlanInterval. */
  createStudioPlanInterval: StudioPlanInterval;
  /** Create a StudioPlanOrganization. */
  createStudioPlanOrganization: StudioPlanOrganization;
  /** Create and store a new user type. */
  createUser: User;
  /** Create and store a new userInvitation type. */
  createUserInvitation: UserInvitation;
  /** Delete an app. */
  deleteApp?: Maybe<Scalars['Null']['output']>;
  /** Delete an app. */
  deleteAppLocale?: Maybe<Scalars['Null']['output']>;
  /** Delete an app prerequisite. */
  deleteAppPrerequisite?: Maybe<Scalars['Null']['output']>;
  /** Delete an appPrerequisite. */
  deleteAppPrerequisiteLocale?: Maybe<Scalars['Null']['output']>;
  /** Delete a app prerequisite state . */
  deleteAppPrerequisiteState?: Maybe<Scalars['Null']['output']>;
  /** Delete an appPrerequisiteState. */
  deleteAppPrerequisiteStateLocale?: Maybe<Scalars['Null']['output']>;
  /** Delete an attribute. */
  deleteAttribute?: Maybe<Scalars['Null']['output']>;
  /** Delete an attribute. */
  deleteAttributeLocale?: Maybe<Scalars['Null']['output']>;
  /** Delete a attribute meta datakeeper. */
  deleteAttributeMetaDatakeeper?: Maybe<Scalars['Null']['output']>;
  /** Delete a attribute meta digidentity. */
  deleteAttributeMetaDigidentity?: Maybe<Scalars['Null']['output']>;
  /** Delete a attribute meta mdoc. */
  deleteAttributeMetaMDOC?: Maybe<Scalars['Null']['output']>;
  /** Delete a attribute meta NL Wallet. */
  deleteAttributeMetaNLWallet?: Maybe<Scalars['Null']['output']>;
  /** Delete a attribute meta nect. */
  deleteAttributeMetaNect?: Maybe<Scalars['Null']['output']>;
  /** Delete a attribute meta OID4VC. */
  deleteAttributeMetaOID4VCMDOC?: Maybe<Scalars['Null']['output']>;
  /** Delete a attribute meta OID4VC. */
  deleteAttributeMetaOID4VCSDJWT?: Maybe<Scalars['Null']['output']>;
  /** Delete a attribute meta ReadID. */
  deleteAttributeMetaReadID?: Maybe<Scalars['Null']['output']>;
  /** Delete a attribute meta truid. */
  deleteAttributeMetaTruid?: Maybe<Scalars['Null']['output']>;
  /** Delete a attribute meta yivi. */
  deleteAttributeMetaYivi?: Maybe<Scalars['Null']['output']>;
  /** Delete a attribute meta yoti. */
  deleteAttributeMetaYoti?: Maybe<Scalars['Null']['output']>;
  /** Delete an attribute request. */
  deleteAttributeRequest?: Maybe<Scalars['Null']['output']>;
  /** Delete an attribute. */
  deleteAttributeRequestLocale?: Maybe<Scalars['Null']['output']>;
  /** Delete a attribute request meta datakeeper. */
  deleteAttributeRequestMetaDatakeeper?: Maybe<Scalars['Null']['output']>;
  /** Delete a attribute request meta yivi. */
  deleteAttributeRequestMetaYivi?: Maybe<Scalars['Null']['output']>;
  /** Delete a attribute request meta yoti. */
  deleteAttributeRequestMetaYoti?: Maybe<Scalars['Null']['output']>;
  /** Delete billing plan. */
  deleteBillingPlan?: Maybe<Scalars['Null']['output']>;
  /** Delete an credential. */
  deleteCredential?: Maybe<Scalars['Null']['output']>;
  /** Delete an credential. */
  deleteCredentialLocale?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential meta datakeeper. */
  deleteCredentialMetaDatakeeper?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential meta digidentity. */
  deleteCredentialMetaDigidentity?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential meta mdoc. */
  deleteCredentialMetaMDOC?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential meta NL Wallet. */
  deleteCredentialMetaNLWallet?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential meta nect. */
  deleteCredentialMetaNect?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential meta OID4VC mdoc. */
  deleteCredentialMetaOID4VCMDOC?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential meta OID4VC SD-JWT. */
  deleteCredentialMetaOID4VCSDJWT?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential meta ReadID. */
  deleteCredentialMetaReadID?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential meta truid. */
  deleteCredentialMetaTruid?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential meta yivi. */
  deleteCredentialMetaYivi?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential meta yoti. */
  deleteCredentialMetaYoti?: Maybe<Scalars['Null']['output']>;
  /** Delete an credential request. */
  deleteCredentialRequest?: Maybe<Scalars['Null']['output']>;
  /** Delete an credential. */
  deleteCredentialRequestLocale?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential request meta datakeeper. */
  deleteCredentialRequestMetaDatakeeper?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential request meta yivi. */
  deleteCredentialRequestMetaYivi?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential request meta yoti. */
  deleteCredentialRequestMetaYoti?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential request state. */
  deleteCredentialRequestState?: Maybe<Scalars['Null']['output']>;
  /** Delete an credentialRequestState. */
  deleteCredentialRequestStateLocale?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow. */
  deleteFlowAuthentication?: Maybe<Scalars['Null']['output']>;
  /** Delete a brand. */
  deleteFlowAuthenticationBrand?: Maybe<Scalars['Null']['output']>;
  /** Delete a domain. */
  deleteFlowAuthenticationDomain?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow authentication provider. */
  deleteFlowAuthenticationProvider?: Maybe<Scalars['Null']['output']>;
  /** Delete a FlowAuthenticationProviderConfigurationNLWallet. */
  deleteFlowAuthenticationProviderConfigurationNLWallet?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow authentication scope. */
  deleteFlowAuthenticationScope?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow. */
  deleteFlowDisclosure?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow disclosure attribute. */
  deleteFlowDisclosureAttribute?: Maybe<Scalars['Null']['output']>;
  /** Delete a brand. */
  deleteFlowDisclosureBrand?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow disclosure credential. */
  deleteFlowDisclosureCredential?: Maybe<Scalars['Null']['output']>;
  /** Delete a domain. */
  deleteFlowDisclosureDomain?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow disclosure group. */
  deleteFlowDisclosureGroup?: Maybe<Scalars['Null']['output']>;
  /** Delete a mapping. */
  deleteFlowDisclosureMapping?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow disclosure provider. */
  deleteFlowDisclosureProvider?: Maybe<Scalars['Null']['output']>;
  /** Delete a FlowDisclosureProviderConfigurationNLWallet. */
  deleteFlowDisclosureProviderConfigurationNLWallet?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow. */
  deleteFlowIssuance?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow issuance attribute. */
  deleteFlowIssuanceAttribute?: Maybe<Scalars['Null']['output']>;
  /** Delete a brand. */
  deleteFlowIssuanceBrand?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow issuance credential. */
  deleteFlowIssuanceCredential?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow credential meta datakeeper. */
  deleteFlowIssuanceCredentialMetaDatakeeper?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow credential meta yivi. */
  deleteFlowIssuanceCredentialMetaYivi?: Maybe<Scalars['Null']['output']>;
  /** Delete a domain. */
  deleteFlowIssuanceDomain?: Maybe<Scalars['Null']['output']>;
  /** Delete a mapping. */
  deleteFlowIssuanceMapping?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow issuance provider. */
  deleteFlowIssuanceProvider?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow. */
  deleteFlowSignature?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow signature attribute. */
  deleteFlowSignatureAttribute?: Maybe<Scalars['Null']['output']>;
  /** Delete a brand. */
  deleteFlowSignatureBrand?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow signature credential. */
  deleteFlowSignatureCredential?: Maybe<Scalars['Null']['output']>;
  /** Delete a domain. */
  deleteFlowSignatureDomain?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow signature group. */
  deleteFlowSignatureGroup?: Maybe<Scalars['Null']['output']>;
  /** Delete a mapping. */
  deleteFlowSignatureMapping?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow signature provider. */
  deleteFlowSignatureProvider?: Maybe<Scalars['Null']['output']>;
  /** Delete a FlowSignatureProviderConfigurationNLWallet. */
  deleteFlowSignatureProviderConfigurationNLWallet?: Maybe<Scalars['Null']['output']>;
  /** Delete an issuer. */
  deleteIssuer?: Maybe<Scalars['Null']['output']>;
  /** Delete an issuer. */
  deleteIssuerLocale?: Maybe<Scalars['Null']['output']>;
  /** Delete a issuer meta datakeeper. */
  deleteIssuerMetaDatakeeper?: Maybe<Scalars['Null']['output']>;
  /** Delete a issuer meta mdoc. */
  deleteIssuerMetaMDOC?: Maybe<Scalars['Null']['output']>;
  /** Delete a issuer meta OID4VC. */
  deleteIssuerMetaOID4VCMDOC?: Maybe<Scalars['Null']['output']>;
  /** Delete a issuer meta OID4VC. */
  deleteIssuerMetaOID4VCSDJWT?: Maybe<Scalars['Null']['output']>;
  /** Delete a issuer meta yivi. */
  deleteIssuerMetaYivi?: Maybe<Scalars['Null']['output']>;
  /** Delete an localeConfig. */
  deleteLocaleConfig?: Maybe<Scalars['Null']['output']>;
  /** Delete an mappingIssuance. */
  deleteMappingIssuance?: Maybe<Scalars['Null']['output']>;
  /** Delete a mappingIssuance attribute */
  deleteMappingIssuanceAttribute?: Maybe<Scalars['Null']['output']>;
  /** Delete an mappingIssuance. */
  deleteMappingIssuanceLink?: Maybe<Scalars['Null']['output']>;
  /** Delete an mappingVerification. */
  deleteMappingVerification?: Maybe<Scalars['Null']['output']>;
  /** Delete a mappingVerification attribute */
  deleteMappingVerificationAttribute?: Maybe<Scalars['Null']['output']>;
  /** Delete an mappingVerification. */
  deleteMappingVerificationClaim?: Maybe<Scalars['Null']['output']>;
  /** Delete an mappingVerification. */
  deleteMappingVerificationLink?: Maybe<Scalars['Null']['output']>;
  /** Delete an existing oauthProvider. */
  deleteOAuthProvider?: Maybe<Scalars['Null']['output']>;
  /** Delete an existing organization. */
  deleteOrganization?: Maybe<Scalars['Null']['output']>;
  /** Delete an existing organization address. */
  deleteOrganizationAddress?: Maybe<Scalars['Null']['output']>;
  /** Delete an existing organization alert. */
  deleteOrganizationAlert?: Maybe<Scalars['Null']['output']>;
  /** Delete an existing organization alert. */
  deleteOrganizationAlertDeprecation?: Maybe<Scalars['Null']['output']>;
  /** Delete an organization app. */
  deleteOrganizationApp?: Maybe<Scalars['Null']['output']>;
  /** Delete a organization app meta datakeeper. */
  deleteOrganizationAppMetaDatakeeper?: Maybe<Scalars['Null']['output']>;
  /** Delete a organization app meta kiwa. */
  deleteOrganizationAppMetaKiwa?: Maybe<Scalars['Null']['output']>;
  /** Delete a organization app meta yoti. */
  deleteOrganizationAppMetaYoti?: Maybe<Scalars['Null']['output']>;
  /** Delete an organization app prerequisite. */
  deleteOrganizationAppPrerequisite?: Maybe<Scalars['Null']['output']>;
  /** Delete a brand. */
  deleteOrganizationBrand?: Maybe<Scalars['Null']['output']>;
  /** Delete a token. */
  deleteOrganizationClient?: Maybe<Scalars['Null']['output']>;
  /** Delete a domain. */
  deleteOrganizationDomain?: Maybe<Scalars['Null']['output']>;
  /** Delete an OrganizationDomainOAuthProvider. */
  deleteOrganizationDomainOAuthProvider?: Maybe<Scalars['Null']['output']>;
  /** Delete an existing organization address. */
  deleteOrganizationNotification?: Maybe<Scalars['Null']['output']>;
  /** Delete an existing organization notification event. */
  deleteOrganizationNotificationEvent?: Maybe<Scalars['Null']['output']>;
  /** Delete a secret. */
  deleteOrganizationSecret?: Maybe<Scalars['Null']['output']>;
  /** Delete an existing user. */
  deleteOrganizationUser?: Maybe<Scalars['Null']['output']>;
  /** Delete an provider. */
  deleteProvider?: Maybe<Scalars['Null']['output']>;
  /** Delete an app. */
  deleteProviderApp?: Maybe<Scalars['Null']['output']>;
  /** Delete an object */
  deleteProviderAppMetaOID4VC?: Maybe<Scalars['Null']['output']>;
  /** Delete an provider. */
  deleteProviderLocale?: Maybe<Scalars['Null']['output']>;
  /** Delete an scheme. */
  deleteScheme?: Maybe<Scalars['Null']['output']>;
  /** Delete an scheme. */
  deleteSchemeLocale?: Maybe<Scalars['Null']['output']>;
  /** Delete an scope. */
  deleteScope?: Maybe<Scalars['Null']['output']>;
  /** Delete an scope claim. */
  deleteScopeClaim?: Maybe<Scalars['Null']['output']>;
  /** Delete an scope. */
  deleteScopeLocale?: Maybe<Scalars['Null']['output']>;
  /** Delete an scope resource. */
  deleteScopeResource?: Maybe<Scalars['Null']['output']>;
  /** Delete a StudioPlan. */
  deleteStudioPlan?: Maybe<Scalars['Null']['output']>;
  /** Delete a StudioPlanControl. */
  deleteStudioPlanControl?: Maybe<Scalars['Null']['output']>;
  /** Delete a StudioPlanControlOverride. */
  deleteStudioPlanControlOverride?: Maybe<Scalars['Null']['output']>;
  /** Delete a StudioPlanInterval. */
  deleteStudioPlanInterval?: Maybe<Scalars['Null']['output']>;
  /** Delete a StudioPlanOrganization. */
  deleteStudioPlanOrganization?: Maybe<Scalars['Null']['output']>;
  /** Delete an existing user. */
  deleteUser?: Maybe<Scalars['Null']['output']>;
  /** Delete an existing userInvitation. */
  deleteUserInvitation?: Maybe<Scalars['Null']['output']>;
  /** Duplicate a flow. */
  duplicateFlowAuthentication: FlowAuthentication;
  /** Duplicate a flow. */
  duplicateFlowDisclosure: FlowDisclosure;
  /** Duplicate a flow. */
  duplicateFlowIssuance: FlowIssuance;
  /** Duplicate a flow. */
  duplicateFlowSignature: FlowSignature;
  /** Duplicate a plan. */
  duplicateStudioPlan: StudioPlan;
  /** Move a flow credential to new or existing groups */
  moveFlowDisclosureCredential: FlowDisclosureGroup;
  /** Move a flow credential to new or existing groups */
  moveFlowSignatureCredential: FlowSignatureGroup;
  /** Register a user with OpenID token. */
  registerByOpenIdToken: Authentication;
  /** Register a user with password. */
  registerByPassword: Authentication;
  /** Initializes billing method */
  setupBillingMethod: SetupBillingMethodOutput;
  /** Switch user organization. */
  switchUserOrganization: Authentication;
  /** Update an app. */
  updateApp: App;
  /** Update an app. */
  updateAppLocale: AppLocale;
  /** Update an app prerequisite. */
  updateAppPrerequisite: AppPrerequisite;
  /** Update an appPrerequisite. */
  updateAppPrerequisiteLocale: AppPrerequisiteLocale;
  /** Update a app prerequisite state . */
  updateAppPrerequisiteState: AppPrerequisiteState;
  /** Update an appPrerequisiteState. */
  updateAppPrerequisiteStateLocale: AppPrerequisiteStateLocale;
  /** Update an attribute. */
  updateAttribute: Attribute;
  /** Update an attribute. */
  updateAttributeLocale: AttributeLocale;
  /** Update a attribute meta datakeeper. */
  updateAttributeMetaDatakeeper: AttributeMetaDatakeeper;
  /** Update a attribute meta digidentity. */
  updateAttributeMetaDigidentity: AttributeMetaDigidentity;
  /** Update a attribute meta mdoc. */
  updateAttributeMetaMDOC: AttributeMetaMdoc;
  /** Update a attribute meta NL Wallet. */
  updateAttributeMetaNLWallet: AttributeMetaNlWallet;
  /** Update a attribute meta nect. */
  updateAttributeMetaNect: AttributeMetaNect;
  /** Update a attribute meta OID4VC. */
  updateAttributeMetaOID4VCMDOC: AttributeMetaOid4Vcmdoc;
  /** Update a attribute meta OID4VC. */
  updateAttributeMetaOID4VCSDJWT: AttributeMetaOid4Vcsdjwt;
  /** Update a attribute meta ReadID. */
  updateAttributeMetaReadID: AttributeMetaReadId;
  /** Update a attribute meta truid. */
  updateAttributeMetaTruid: AttributeMetaTruid;
  /** Update a attribute meta yivi. */
  updateAttributeMetaYivi: AttributeMetaYivi;
  /** Update a attribute meta yoti. */
  updateAttributeMetaYoti: AttributeMetaYoti;
  /** Update an attribute request. */
  updateAttributeRequest: AttributeRequest;
  /** Update an attribute. */
  updateAttributeRequestLocale: AttributeRequestLocale;
  /** Update a attribute request meta datakeeper. */
  updateAttributeRequestMetaDatakeeper: AttributeRequestMetaDatakeeper;
  /** Update a attribute request meta yivi. */
  updateAttributeRequestMetaYivi: AttributeRequestMetaYivi;
  /** Update a attribute request meta yoti. */
  updateAttributeRequestMetaYoti: AttributeRequestMetaYoti;
  /** Update billing method. */
  updateBillingMethod: BillingMethod;
  /** Update billing plan. */
  updateBillingPlan: BillingPlan;
  /** Update billing wallet */
  updateBillingWallet: BillingWallet;
  /** Update an credential. */
  updateCredential: Credential;
  /** Update an credential. */
  updateCredentialLocale: CredentialLocale;
  /** Update a credential meta datakeeper. */
  updateCredentialMetaDatakeeper: CredentialMetaDatakeeper;
  /** Update a credential meta digidentity. */
  updateCredentialMetaDigidentity: CredentialMetaDigidentity;
  /** Update a credential meta mdoc. */
  updateCredentialMetaMDOC: CredentialMetaMdoc;
  /** Update a credential meta NL Wallet. */
  updateCredentialMetaNLWallet: CredentialMetaNlWallet;
  /** Update a credential meta nect. */
  updateCredentialMetaNect: CredentialMetaNect;
  /** Update a credential meta OID4VC mdoc. */
  updateCredentialMetaOID4VCMDOC: CredentialMetaOid4Vcmdoc;
  /** Update a credential meta OID4VC SD-JWT. */
  updateCredentialMetaOID4VCSDJWT: CredentialMetaOid4Vcsdjwt;
  /** Update a credential meta ReadID. */
  updateCredentialMetaReadID: CredentialMetaReadId;
  /** Update a credential meta truid. */
  updateCredentialMetaTruid: CredentialMetaTruid;
  /** Update a credential meta yivi. */
  updateCredentialMetaYivi: CredentialMetaYivi;
  /** Update a credential meta yoti. */
  updateCredentialMetaYoti: CredentialMetaYoti;
  /** Update an credential request. */
  updateCredentialRequest: CredentialRequest;
  /** Update an credential. */
  updateCredentialRequestLocale: CredentialRequestLocale;
  /** Update a credential request meta datakeeper. */
  updateCredentialRequestMetaDatakeeper: CredentialRequestMetaDatakeeper;
  /** Update a credential request meta yivi. */
  updateCredentialRequestMetaYivi: CredentialRequestMetaYivi;
  /** Update a credential request meta yoti. */
  updateCredentialRequestMetaYoti: CredentialRequestMetaYoti;
  /** Update a credential request state. */
  updateCredentialRequestState: CredentialRequestState;
  /** Update an credentialRequestState. */
  updateCredentialRequestStateLocale: CredentialRequestStateLocale;
  /** Update a flow. */
  updateFlowAuthentication: FlowAuthentication;
  /** Update brand. */
  updateFlowAuthenticationBrand: FlowAuthenticationBrand;
  /** Update an domain. */
  updateFlowAuthenticationDomain: FlowAuthenticationDomain;
  /** Update a flow authentication provider. */
  updateFlowAuthenticationProvider: FlowAuthenticationProvider;
  /** Update a FlowAuthenticationProviderConfigurationNLWallet. */
  updateFlowAuthenticationProviderConfigurationNLWallet: FlowAuthenticationProviderConfigurationNlWallet;
  /** Update a flow. */
  updateFlowDisclosure: FlowDisclosure;
  /** Update brand */
  updateFlowDisclosureBrand: FlowDisclosureBrand;
  /** Update an domain. */
  updateFlowDisclosureDomain: FlowDisclosureDomain;
  /** Update a flow group. */
  updateFlowDisclosureGroup: FlowDisclosureGroup;
  /** Update a flow disclosure provider. */
  updateFlowDisclosureProvider: FlowDisclosureProvider;
  /** Update a FlowDisclosureProviderConfigurationNLWallet. */
  updateFlowDisclosureProviderConfigurationNLWallet: FlowDisclosureProviderConfigurationNlWallet;
  /** Update a flow. */
  updateFlowIssuance: FlowIssuance;
  /** Update brand */
  updateFlowIssuanceBrand: FlowIssuanceBrand;
  /** Update a flow credential meta datakeeper. */
  updateFlowIssuanceCredentialMetaDatakeeper: FlowIssuanceCredentialMetaDatakeeper;
  /** Update a flow credential meta yivi. */
  updateFlowIssuanceCredentialMetaYivi: FlowIssuanceCredentialMetaYivi;
  /** Update an domain. */
  updateFlowIssuanceDomain: FlowIssuanceDomain;
  /** Update a flow issuance provider. */
  updateFlowIssuanceProvider: FlowIssuanceProvider;
  /** Update a flow. */
  updateFlowSignature: FlowSignature;
  /** Update brand */
  updateFlowSignatureBrand: FlowSignatureBrand;
  /** Update an domain. */
  updateFlowSignatureDomain: FlowSignatureDomain;
  /** Update a flow group. */
  updateFlowSignatureGroup: FlowSignatureGroup;
  /** Update a flow signature provider. */
  updateFlowSignatureProvider: FlowSignatureProvider;
  /** Update a FlowSignatureProviderConfigurationNLWallet. */
  updateFlowSignatureProviderConfigurationNLWallet: FlowSignatureProviderConfigurationNlWallet;
  /** Update an issuer. */
  updateIssuer: Issuer;
  /** Update an issuer. */
  updateIssuerLocale: IssuerLocale;
  /** Update a issuer meta datakeeper. */
  updateIssuerMetaDatakeeper: IssuerMetaDatakeeper;
  /** Update a issuer meta mdoc. */
  updateIssuerMetaMDOC: IssuerMetaMdoc;
  /** Update a issuer meta OID4VC. */
  updateIssuerMetaOID4VCMDOC: IssuerMetaOid4Vcmdoc;
  /** Update a issuer meta OID4VC. */
  updateIssuerMetaOID4VCSDJWT: IssuerMetaOid4Vcsdjwt;
  /** Update a issuer meta yivi. */
  updateIssuerMetaYivi: IssuerMetaYivi;
  /** Update an localeConfig. */
  updateLocaleConfig: LocaleConfig;
  /** Update an mappingIssuance. */
  updateMappingIssuance: MappingIssuance;
  /** Update a mappingIssuance attribute. */
  updateMappingIssuanceAttribute: MappingIssuanceAttribute;
  /** Update an mappingVerification. */
  updateMappingVerification: MappingVerification;
  /** Update a mappingVerification attribute. */
  updateMappingVerificationAttribute: MappingVerificationAttribute;
  /** Update an mappingVerification. */
  updateMappingVerificationClaim: MappingVerificationClaim;
  /** Update an mappingVerification. */
  updateMappingVerificationLink: MappingVerificationLink;
  /** Update an existing oauthProvider. */
  updateOAuthProvider: OAuthProvider;
  /** Update an existing organization. */
  updateOrganization: Organization;
  /** Update an existing organization address. */
  updateOrganizationAddress: OrganizationAddress;
  /** Update an existing organization alert. */
  updateOrganizationAlert: OrganizationAlert;
  /** Update an existing organization alert. */
  updateOrganizationAlertDeprecation: OrganizationAlertDeprecation;
  /** Update a organization app meta datakeeper. */
  updateOrganizationAppMetaDatakeeper: OrganizationAppMetaDatakeeper;
  /** Update a organization app meta kiwa. */
  updateOrganizationAppMetaKiwa: OrganizationAppMetaKiwa;
  /** Update a organization app meta yoti. */
  updateOrganizationAppMetaYoti: OrganizationAppMetaYoti;
  /** Update an brand. */
  updateOrganizationBrand: OrganizationBrand;
  /** Update an token. */
  updateOrganizationClient: OrganizationClient;
  /** Update an domain. */
  updateOrganizationDomain: OrganizationDomain;
  /** Update an existing organization address. */
  updateOrganizationNotification: OrganizationNotification;
  /** Update an secret. */
  updateOrganizationSecret: OrganizationSecret;
  /** Update a user. */
  updateOrganizationUser: OrganizationUser;
  /** Update a user password. */
  updatePasswordUser: User;
  /** Update an provider. */
  updateProvider: Provider;
  /** Update an object */
  updateProviderAppMetaOID4VC: ProviderAppMetaOid4Vc;
  /** Update an provider. */
  updateProviderLocale: ProviderLocale;
  /** Update an scheme. */
  updateScheme: Scheme;
  /** Update an scheme. */
  updateSchemeLocale: SchemeLocale;
  /** Update an scope. */
  updateScope: Scope;
  /** Update an scope claim. */
  updateScopeClaim: ScopeClaim;
  /** Update an scope. */
  updateScopeLocale: ScopeLocale;
  /** Update an scope resource. */
  updateScopeResource: ScopeResource;
  /** Update a StudioPlan. */
  updateStudioPlan: StudioPlan;
  /** Update a StudioPlanControl. */
  updateStudioPlanControl: StudioPlanControl;
  /** Update a StudioPlanControlOverride. */
  updateStudioPlanControlOverride: StudioPlanControlOverride;
  /** Update a StudioPlanInterval. */
  updateStudioPlanInterval: StudioPlanInterval;
  /** Update a user. */
  updateUser: User;
  /** Update a userInvitation. */
  updateUserInvitation: UserInvitation;
  /** Accept the invitation and set the password. */
  useAuthenticationInvitation: Authentication;
  /** Use a reset token to reset password of a user */
  useAuthenticationReset: Authentication;
  /** Validate the invitation. */
  validateAuthenticationInvitation: Scalars['Boolean']['output'];
  /** Validate the invitation. */
  validateAuthenticationReset: Scalars['Boolean']['output'];
  /** Validate the user invitation. */
  validateUserInvitation: Scalars['Boolean']['output'];
};


export type MutationAcceptUserInvitationAndRegisterByPasswordArgs = {
  input: AcceptUserInvitationAndRegisterByPasswordInput;
};


export type MutationAcceptUserInvitationByOpenIdTokenArgs = {
  input: AcceptUserInvitationByOpenIdTokenInput;
};


export type MutationAcceptUserInvitationByPasswordArgs = {
  input: AcceptUserInvitationByPasswordInput;
};


export type MutationActionAppArgs = {
  input: ActionAppInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionAttributeArgs = {
  input: ActionAttributeInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionBillingWalletArgs = {
  input: ActionBillingWalletInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionCredentialArgs = {
  input: ActionCredentialInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionCredentialRequestArgs = {
  input: ActionCredentialRequestInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionFlowAuthenticationArgs = {
  input: ActionFlowAuthenticationInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionFlowDisclosureArgs = {
  input: ActionFlowDisclosureInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionFlowIssuanceArgs = {
  input: ActionFlowIssuanceInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionFlowSignatureArgs = {
  input: ActionFlowSignatureInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionIssuerArgs = {
  input: ActionIssuerInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionMappingIssuanceArgs = {
  input: ActionMappingIssuanceInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionMappingVerificationArgs = {
  input: ActionMappingVerificationInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionOAuthProviderArgs = {
  input: ActionOAuthProviderInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionOrganizationArgs = {
  input: ActionOrganizationInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionOrganizationAlertArgs = {
  input: ActionOrganizationAlertInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionOrganizationAppArgs = {
  input: ActionOrganizationAppInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionOrganizationAppPrerequisiteArgs = {
  input: ActionOrganizationAppPrerequisiteInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionOrganizationBrandArgs = {
  input: ActionOrganizationBrandInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionOrganizationDomainArgs = {
  input: ActionOrganizationDomainInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionOrganizationNotificationArgs = {
  input: ActionOrganizationNotificationInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionOrganizationUserArgs = {
  input: ActionOrganizationUserInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionProviderArgs = {
  input: ActionProviderInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionSchemeArgs = {
  input: ActionSchemeInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionScopeArgs = {
  input: ActionScopeInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionStudioPlanArgs = {
  input: ActionStudioPlanInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationAuthenticationByClientCredentialsArgs = {
  input: AuthenticationByClientCredentialsInput;
};


export type MutationAuthenticationByOpenIdTokenArgs = {
  input: AuthenticationByOpenIdTokenInput;
};


export type MutationAuthenticationByPasswordArgs = {
  input: AuthenticationByPasswordInput;
};


export type MutationCreateAppArgs = {
  input: CreateAppInput;
};


export type MutationCreateAppLocaleArgs = {
  input: CreateAppLocaleInput;
};


export type MutationCreateAppPrerequisiteArgs = {
  input: CreateAppPrerequisiteInput;
};


export type MutationCreateAppPrerequisiteLocaleArgs = {
  input: CreateAppPrerequisiteLocaleInput;
};


export type MutationCreateAppPrerequisiteStateArgs = {
  input: CreateAppPrerequisiteStateInput;
};


export type MutationCreateAppPrerequisiteStateLocaleArgs = {
  input: CreateAppPrerequisiteStateLocaleInput;
};


export type MutationCreateAttributeArgs = {
  input: CreateAttributeInput;
};


export type MutationCreateAttributeLocaleArgs = {
  input: CreateAttributeLocaleInput;
};


export type MutationCreateAttributeMetaDatakeeperArgs = {
  input: CreateAttributeMetaDatakeeperInput;
};


export type MutationCreateAttributeMetaDigidentityArgs = {
  input: CreateAttributeMetaDigidentityInput;
};


export type MutationCreateAttributeMetaMdocArgs = {
  input: CreateAttributeMetaMdocInput;
};


export type MutationCreateAttributeMetaNlWalletArgs = {
  input: CreateAttributeMetaNlWalletInput;
};


export type MutationCreateAttributeMetaNectArgs = {
  input: CreateAttributeMetaNectInput;
};


export type MutationCreateAttributeMetaOid4VcmdocArgs = {
  input: CreateAttributeMetaOid4VcmdocInput;
};


export type MutationCreateAttributeMetaOid4VcsdjwtArgs = {
  input: CreateAttributeMetaOid4VcsdjwtInput;
};


export type MutationCreateAttributeMetaReadIdArgs = {
  input: CreateAttributeMetaReadIdInput;
};


export type MutationCreateAttributeMetaTruidArgs = {
  input: CreateAttributeMetaTruidInput;
};


export type MutationCreateAttributeMetaYiviArgs = {
  input: CreateAttributeMetaYiviInput;
};


export type MutationCreateAttributeMetaYotiArgs = {
  input: CreateAttributeMetaYotiInput;
};


export type MutationCreateAttributeRequestArgs = {
  input: CreateAttributeRequestInput;
};


export type MutationCreateAttributeRequestLocaleArgs = {
  input: CreateAttributeRequestLocaleInput;
};


export type MutationCreateAttributeRequestMetaDatakeeperArgs = {
  input: CreateAttributeRequestMetaDatakeeperInput;
};


export type MutationCreateAttributeRequestMetaYiviArgs = {
  input: CreateAttributeRequestMetaYiviInput;
};


export type MutationCreateAttributeRequestMetaYotiArgs = {
  input: CreateAttributeRequestMetaYotiInput;
};


export type MutationCreateAuthenticationInvitationArgs = {
  userUuid: Scalars['UUID']['input'];
};


export type MutationCreateAuthenticationResetArgs = {
  input: CreateAuthenticationResetInput;
};


export type MutationCreateBillingPlanArgs = {
  input: CreateBillingPlanInput;
};


export type MutationCreateBillingWalletArgs = {
  input: CreateBillingWalletInput;
};


export type MutationCreateCredentialArgs = {
  input: CreateCredentialInput;
};


export type MutationCreateCredentialLocaleArgs = {
  input: CreateCredentialLocaleInput;
};


export type MutationCreateCredentialMetaDatakeeperArgs = {
  input: CreateCredentialMetaDatakeeperInput;
};


export type MutationCreateCredentialMetaDigidentityArgs = {
  input: CreateCredentialMetaDigidentityInput;
};


export type MutationCreateCredentialMetaMdocArgs = {
  input: CreateCredentialMetaMdocInput;
};


export type MutationCreateCredentialMetaNlWalletArgs = {
  input: CreateCredentialMetaNlWalletInput;
};


export type MutationCreateCredentialMetaNectArgs = {
  input: CreateCredentialMetaNectInput;
};


export type MutationCreateCredentialMetaOid4VcmdocArgs = {
  input: CreateCredentialMetaOid4VcmdocInput;
};


export type MutationCreateCredentialMetaOid4VcsdjwtArgs = {
  input: CreateCredentialMetaOid4VcsdjwtInput;
};


export type MutationCreateCredentialMetaReadIdArgs = {
  input: CreateCredentialMetaReadIdInput;
};


export type MutationCreateCredentialMetaTruidArgs = {
  input: CreateCredentialMetaTruidInput;
};


export type MutationCreateCredentialMetaYiviArgs = {
  input: CreateCredentialMetaYiviInput;
};


export type MutationCreateCredentialMetaYotiArgs = {
  input: CreateCredentialMetaYotiInput;
};


export type MutationCreateCredentialRequestArgs = {
  input: CreateCredentialRequestInput;
};


export type MutationCreateCredentialRequestLocaleArgs = {
  input: CreateCredentialRequestLocaleInput;
};


export type MutationCreateCredentialRequestMetaDatakeeperArgs = {
  input: CreateCredentialRequestMetaDatakeeperInput;
};


export type MutationCreateCredentialRequestMetaYiviArgs = {
  input: CreateCredentialRequestMetaYiviInput;
};


export type MutationCreateCredentialRequestMetaYotiArgs = {
  input: CreateCredentialRequestMetaYotiInput;
};


export type MutationCreateCredentialRequestStateArgs = {
  input: CreateCredentialRequestStateInput;
};


export type MutationCreateCredentialRequestStateLocaleArgs = {
  input: CreateCredentialRequestStateLocaleInput;
};


export type MutationCreateFlowAuthenticationArgs = {
  input: CreateFlowAuthenticationInput;
};


export type MutationCreateFlowAuthenticationBrandArgs = {
  input: CreateFlowAuthenticationBrandInput;
};


export type MutationCreateFlowAuthenticationDomainArgs = {
  input: CreateFlowAuthenticationDomainInput;
};


export type MutationCreateFlowAuthenticationProviderArgs = {
  input: CreateFlowAuthenticationProviderInput;
};


export type MutationCreateFlowAuthenticationProviderConfigurationNlWalletArgs = {
  input: CreateFlowAuthenticationProviderConfigurationNlWalletInput;
};


export type MutationCreateFlowAuthenticationScopeArgs = {
  input: CreateFlowAuthenticationScopeInput;
};


export type MutationCreateFlowDisclosureArgs = {
  input: CreateFlowDisclosureInput;
};


export type MutationCreateFlowDisclosureAttributeArgs = {
  input: CreateFlowDisclosureAttributeInput;
};


export type MutationCreateFlowDisclosureBrandArgs = {
  input: CreateFlowDisclosureBrandInput;
};


export type MutationCreateFlowDisclosureCredentialArgs = {
  input: CreateFlowDisclosureCredentialInput;
};


export type MutationCreateFlowDisclosureDomainArgs = {
  input: CreateFlowDisclosureDomainInput;
};


export type MutationCreateFlowDisclosureGroupArgs = {
  input: CreateFlowDisclosureGroupInput;
};


export type MutationCreateFlowDisclosureMappingArgs = {
  input: CreateFlowDisclosureMappingInput;
};


export type MutationCreateFlowDisclosureProviderArgs = {
  input: CreateFlowDisclosureProviderInput;
};


export type MutationCreateFlowDisclosureProviderByAttributesArgs = {
  input: CreateFlowDisclosureProviderByAttributesInput;
};


export type MutationCreateFlowDisclosureProviderConfigurationNlWalletArgs = {
  input: CreateFlowDisclosureProviderConfigurationNlWalletInput;
};


export type MutationCreateFlowIssuanceArgs = {
  input: CreateFlowIssuanceInput;
};


export type MutationCreateFlowIssuanceAttributeArgs = {
  input: CreateFlowIssuanceAttributeInput;
};


export type MutationCreateFlowIssuanceBrandArgs = {
  input: CreateFlowIssuanceBrandInput;
};


export type MutationCreateFlowIssuanceCredentialArgs = {
  input: CreateFlowIssuanceCredentialInput;
};


export type MutationCreateFlowIssuanceCredentialMetaDatakeeperArgs = {
  input: CreateFlowIssuanceCredentialMetaDatakeeperInput;
};


export type MutationCreateFlowIssuanceCredentialMetaYiviArgs = {
  input: CreateFlowIssuanceCredentialMetaYiviInput;
};


export type MutationCreateFlowIssuanceDomainArgs = {
  input: CreateFlowIssuanceDomainInput;
};


export type MutationCreateFlowIssuanceMappingArgs = {
  input: CreateFlowIssuanceMappingInput;
};


export type MutationCreateFlowIssuanceProviderArgs = {
  input: CreateFlowIssuanceProviderInput;
};


export type MutationCreateFlowIssuanceProviderByAttributesArgs = {
  input: CreateFlowIssuanceProviderByAttributesInput;
};


export type MutationCreateFlowSignatureArgs = {
  input: CreateFlowSignatureInput;
};


export type MutationCreateFlowSignatureAttributeArgs = {
  input: CreateFlowSignatureAttributeInput;
};


export type MutationCreateFlowSignatureBrandArgs = {
  input: CreateFlowSignatureBrandInput;
};


export type MutationCreateFlowSignatureCredentialArgs = {
  input: CreateFlowSignatureCredentialInput;
};


export type MutationCreateFlowSignatureDomainArgs = {
  input: CreateFlowSignatureDomainInput;
};


export type MutationCreateFlowSignatureGroupArgs = {
  input: CreateFlowSignatureGroupInput;
};


export type MutationCreateFlowSignatureMappingArgs = {
  input: CreateFlowSignatureMappingInput;
};


export type MutationCreateFlowSignatureProviderArgs = {
  input: CreateFlowSignatureProviderInput;
};


export type MutationCreateFlowSignatureProviderByAttributesArgs = {
  input: CreateFlowSignatureProviderByAttributesInput;
};


export type MutationCreateFlowSignatureProviderConfigurationNlWalletArgs = {
  input: CreateFlowSignatureProviderConfigurationNlWalletInput;
};


export type MutationCreateIssuerArgs = {
  input: CreateIssuerInput;
};


export type MutationCreateIssuerLocaleArgs = {
  input: CreateIssuerLocaleInput;
};


export type MutationCreateIssuerMetaDatakeeperArgs = {
  input: CreateIssuerMetaDatakeeperInput;
};


export type MutationCreateIssuerMetaMdocArgs = {
  input: CreateIssuerMetaMdocInput;
};


export type MutationCreateIssuerMetaOid4VcmdocArgs = {
  input: CreateIssuerMetaOid4VcmdocInput;
};


export type MutationCreateIssuerMetaOid4VcsdjwtArgs = {
  input: CreateIssuerMetaOid4VcsdjwtInput;
};


export type MutationCreateIssuerMetaYiviArgs = {
  input: CreateIssuerMetaYiviInput;
};


export type MutationCreateLocaleConfigArgs = {
  input: CreateLocaleConfigInput;
};


export type MutationCreateManyMappingIssuanceAttributesArgs = {
  input: Array<CreateManyMappingIssuanceAttributeInput>;
};


export type MutationCreateManyMappingIssuanceLinksArgs = {
  input: Array<CreateManyMappingIssuanceLinkInput>;
};


export type MutationCreateManyMappingIssuanceLinksByAttributesArgs = {
  input: CreateManyMappingIssuanceLinksByAttributesInput;
};


export type MutationCreateManyMappingVerificationAttributesArgs = {
  input: Array<CreateManyMappingVerificationAttributeInput>;
};


export type MutationCreateManyMappingVerificationLinksArgs = {
  input: Array<CreateManyMappingVerificationLinkInput>;
};


export type MutationCreateManyMappingVerificationLinksByAttributesArgs = {
  input: CreateManyMappingVerificationLinksByAttributesInput;
};


export type MutationCreateManyOrganizationNotificationEventsArgs = {
  input: Array<CreateManyOrganizationNotificationEventInput>;
};


export type MutationCreateManyStudioPlanControlsArgs = {
  input: Array<CreateManyStudioPlanControlInput>;
};


export type MutationCreateMappingIssuanceArgs = {
  input: CreateMappingIssuanceInput;
};


export type MutationCreateMappingIssuanceAttributeArgs = {
  input: CreateMappingIssuanceAttributeInput;
};


export type MutationCreateMappingIssuanceLinkArgs = {
  input: CreateMappingIssuanceLinkInput;
};


export type MutationCreateMappingVerificationArgs = {
  input: CreateMappingVerificationInput;
};


export type MutationCreateMappingVerificationAttributeArgs = {
  input: CreateMappingVerificationAttributeInput;
};


export type MutationCreateMappingVerificationClaimArgs = {
  input: CreateMappingVerificationClaimInput;
};


export type MutationCreateMappingVerificationLinkArgs = {
  input: CreateMappingVerificationLinkInput;
};


export type MutationCreateOAuthProviderArgs = {
  input: CreateOAuthProviderInput;
};


export type MutationCreateOrganizationArgs = {
  input: CreateOrganizationInput;
};


export type MutationCreateOrganizationAddressArgs = {
  input: CreateOrganizationAddressInput;
};


export type MutationCreateOrganizationAlertArgs = {
  input: CreateOrganizationAlertInput;
};


export type MutationCreateOrganizationAlertDeprecationArgs = {
  input: CreateOrganizationAlertDeprecationInput;
};


export type MutationCreateOrganizationAppArgs = {
  input: CreateOrganizationAppInput;
};


export type MutationCreateOrganizationAppMetaDatakeeperArgs = {
  input: CreateOrganizationAppMetaDatakeeperInput;
};


export type MutationCreateOrganizationAppMetaKiwaArgs = {
  input: CreateOrganizationAppMetaKiwaInput;
};


export type MutationCreateOrganizationAppMetaYotiArgs = {
  input: CreateOrganizationAppMetaYotiInput;
};


export type MutationCreateOrganizationAppPrerequisiteArgs = {
  input: CreateOrganizationAppPrerequisiteInput;
};


export type MutationCreateOrganizationBrandArgs = {
  input: CreateOrganizationBrandInput;
};


export type MutationCreateOrganizationClientArgs = {
  input: CreateOrganizationClientInput;
};


export type MutationCreateOrganizationDomainArgs = {
  input: CreateOrganizationDomainInput;
};


export type MutationCreateOrganizationDomainOAuthProviderArgs = {
  input: CreateOrganizationDomainOAuthProviderInput;
};


export type MutationCreateOrganizationNotificationArgs = {
  input: CreateOrganizationNotificationInput;
};


export type MutationCreateOrganizationNotificationEventArgs = {
  input: CreateOrganizationNotificationEventInput;
};


export type MutationCreateOrganizationSecretArgs = {
  input: CreateOrganizationSecretInput;
};


export type MutationCreateOrganizationUserArgs = {
  input: CreateOrganizationUserInput;
};


export type MutationCreateProviderArgs = {
  input: CreateProviderInput;
};


export type MutationCreateProviderAppArgs = {
  input: CreateProviderAppInput;
};


export type MutationCreateProviderAppMetaOid4VcArgs = {
  input: CreateProviderAppMetaOid4VcInput;
};


export type MutationCreateProviderLocaleArgs = {
  input: CreateProviderLocaleInput;
};


export type MutationCreateSchemeArgs = {
  input: CreateSchemeInput;
};


export type MutationCreateSchemeLocaleArgs = {
  input: CreateSchemeLocaleInput;
};


export type MutationCreateScopeArgs = {
  input: CreateScopeInput;
};


export type MutationCreateScopeClaimArgs = {
  input: CreateScopeClaimInput;
};


export type MutationCreateScopeLocaleArgs = {
  input: CreateScopeLocaleInput;
};


export type MutationCreateScopeResourceArgs = {
  input: CreateScopeResourceInput;
};


export type MutationCreateStudioPlanArgs = {
  input: CreateStudioPlanInput;
};


export type MutationCreateStudioPlanControlArgs = {
  input: CreateStudioPlanControlInput;
};


export type MutationCreateStudioPlanControlOverrideArgs = {
  input: CreateStudioPlanControlOverrideInput;
};


export type MutationCreateStudioPlanIntervalArgs = {
  input: CreateStudioPlanIntervalInput;
};


export type MutationCreateStudioPlanOrganizationArgs = {
  input: CreateStudioPlanOrganizationInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateUserInvitationArgs = {
  input: CreateUserInvitationInput;
};


export type MutationDeleteAppArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAppLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAppPrerequisiteArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAppPrerequisiteLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAppPrerequisiteStateArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAppPrerequisiteStateLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeMetaDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeMetaDigidentityArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeMetaMdocArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeMetaNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeMetaNectArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeMetaOid4VcmdocArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeMetaOid4VcsdjwtArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeMetaReadIdArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeMetaTruidArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeMetaYiviArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeMetaYotiArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeRequestArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeRequestLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeRequestMetaDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeRequestMetaYiviArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeRequestMetaYotiArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteBillingPlanArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialMetaDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialMetaDigidentityArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialMetaMdocArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialMetaNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialMetaNectArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialMetaOid4VcmdocArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialMetaOid4VcsdjwtArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialMetaReadIdArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialMetaTruidArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialMetaYiviArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialMetaYotiArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialRequestArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialRequestLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialRequestMetaDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialRequestMetaYiviArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialRequestMetaYotiArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialRequestStateArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialRequestStateLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowAuthenticationArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowAuthenticationBrandArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowAuthenticationDomainArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowAuthenticationProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowAuthenticationProviderConfigurationNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowAuthenticationScopeArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowDisclosureArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowDisclosureAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowDisclosureBrandArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowDisclosureCredentialArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowDisclosureDomainArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowDisclosureGroupArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowDisclosureMappingArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowDisclosureProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowDisclosureProviderConfigurationNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowIssuanceArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowIssuanceAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowIssuanceBrandArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowIssuanceCredentialArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowIssuanceCredentialMetaDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowIssuanceCredentialMetaYiviArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowIssuanceDomainArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowIssuanceMappingArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowIssuanceProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowSignatureArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowSignatureAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowSignatureBrandArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowSignatureCredentialArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowSignatureDomainArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowSignatureGroupArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowSignatureMappingArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowSignatureProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteFlowSignatureProviderConfigurationNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuerArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuerLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuerMetaDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuerMetaMdocArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuerMetaOid4VcmdocArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuerMetaOid4VcsdjwtArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuerMetaYiviArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteLocaleConfigArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteMappingIssuanceArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteMappingIssuanceAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteMappingIssuanceLinkArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteMappingVerificationArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteMappingVerificationAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteMappingVerificationClaimArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteMappingVerificationLinkArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteOAuthProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteOrganizationArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteOrganizationAddressArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteOrganizationAlertArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteOrganizationAlertDeprecationArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteOrganizationAppArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteOrganizationAppMetaDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteOrganizationAppMetaKiwaArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteOrganizationAppMetaYotiArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteOrganizationAppPrerequisiteArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteOrganizationBrandArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteOrganizationClientArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteOrganizationDomainArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteOrganizationDomainOAuthProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteOrganizationNotificationArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteOrganizationNotificationEventArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteOrganizationSecretArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteOrganizationUserArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteProviderAppArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteProviderAppMetaOid4VcArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteProviderLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteSchemeArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteSchemeLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteScopeArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteScopeClaimArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteScopeLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteScopeResourceArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteStudioPlanArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteStudioPlanControlArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteStudioPlanControlOverrideArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteStudioPlanIntervalArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteStudioPlanOrganizationArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteUserArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteUserInvitationArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDuplicateFlowAuthenticationArgs = {
  input: DuplicateFlowAuthenticationInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationDuplicateFlowDisclosureArgs = {
  input: DuplicateFlowDisclosureInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationDuplicateFlowIssuanceArgs = {
  input: DuplicateFlowIssuanceInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationDuplicateFlowSignatureArgs = {
  input: DuplicateFlowSignatureInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationDuplicateStudioPlanArgs = {
  input: DuplicateStudioPlanInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationMoveFlowDisclosureCredentialArgs = {
  input: MoveFlowDisclosureCredentialInput;
};


export type MutationMoveFlowSignatureCredentialArgs = {
  input: MoveFlowSignatureCredentialInput;
};


export type MutationRegisterByOpenIdTokenArgs = {
  input: RegisterByOpenIdTokenInput;
};


export type MutationRegisterByPasswordArgs = {
  input: RegisterByPasswordInput;
};


export type MutationSetupBillingMethodArgs = {
  input: SetupBillingMethodInput;
};


export type MutationSwitchUserOrganizationArgs = {
  input: SwitchOrganizationInput;
};


export type MutationUpdateAppArgs = {
  input: UpdateAppInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAppLocaleArgs = {
  input: UpdateAppLocaleInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAppPrerequisiteArgs = {
  input: UpdateAppPrerequisiteInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAppPrerequisiteLocaleArgs = {
  input: UpdateAppPrerequisiteLocaleInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAppPrerequisiteStateArgs = {
  input: UpdateAppPrerequisiteStateInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAppPrerequisiteStateLocaleArgs = {
  input: UpdateAppPrerequisiteStateLocaleInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeArgs = {
  input: UpdateAttributeInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeLocaleArgs = {
  input: UpdateAttributeLocaleInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeMetaDatakeeperArgs = {
  input: UpdateAttributeMetaDatakeeperInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeMetaDigidentityArgs = {
  input: UpdateAttributeMetaDigidentityInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeMetaMdocArgs = {
  input: UpdateAttributeMetaMdocInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeMetaNlWalletArgs = {
  input: UpdateAttributeMetaNlWalletInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeMetaNectArgs = {
  input: UpdateAttributeMetaNectInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeMetaOid4VcmdocArgs = {
  input: UpdateAttributeMetaOid4VcmdocInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeMetaOid4VcsdjwtArgs = {
  input: UpdateAttributeMetaOid4VcsdjwtInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeMetaReadIdArgs = {
  input: UpdateAttributeMetaReadIdInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeMetaTruidArgs = {
  input: UpdateAttributeMetaTruidInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeMetaYiviArgs = {
  input: UpdateAttributeMetaYiviInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeMetaYotiArgs = {
  input: UpdateAttributeMetaYotiInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeRequestArgs = {
  input: UpdateAttributeRequestInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeRequestLocaleArgs = {
  input: UpdateAttributeRequestLocaleInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeRequestMetaDatakeeperArgs = {
  input: UpdateAttributeRequestMetaDatakeeperInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeRequestMetaYiviArgs = {
  input: UpdateAttributeRequestMetaYiviInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeRequestMetaYotiArgs = {
  input: UpdateAttributeRequestMetaYotiInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateBillingMethodArgs = {
  input: UpdateBillingMethodInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateBillingPlanArgs = {
  input: UpdateBillingPlanInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateBillingWalletArgs = {
  input: UpdateBillingWalletInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialArgs = {
  input: UpdateCredentialInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialLocaleArgs = {
  input: UpdateCredentialLocaleInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialMetaDatakeeperArgs = {
  input: UpdateCredentialMetaDatakeeperInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialMetaDigidentityArgs = {
  input: UpdateCredentialMetaDigidentityInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialMetaMdocArgs = {
  input: UpdateCredentialMetaMdocInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialMetaNlWalletArgs = {
  input: UpdateCredentialMetaNlWalletInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialMetaNectArgs = {
  input: UpdateCredentialMetaNectInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialMetaOid4VcmdocArgs = {
  input: UpdateCredentialMetaOid4VcmdocInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialMetaOid4VcsdjwtArgs = {
  input: UpdateCredentialMetaOid4VcsdjwtInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialMetaReadIdArgs = {
  input: UpdateCredentialMetaReadIdInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialMetaTruidArgs = {
  input: UpdateCredentialMetaTruidInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialMetaYiviArgs = {
  input: UpdateCredentialMetaYiviInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialMetaYotiArgs = {
  input: UpdateCredentialMetaYotiInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialRequestArgs = {
  input: UpdateCredentialRequestInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialRequestLocaleArgs = {
  input: UpdateCredentialRequestLocaleInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialRequestMetaDatakeeperArgs = {
  input: UpdateCredentialRequestMetaDatakeeperInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialRequestMetaYiviArgs = {
  input: UpdateCredentialRequestMetaYiviInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialRequestMetaYotiArgs = {
  input: UpdateCredentialRequestMetaYotiInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialRequestStateArgs = {
  input: UpdateCredentialRequestStateInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialRequestStateLocaleArgs = {
  input: UpdateCredentialRequestStateLocaleInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateFlowAuthenticationArgs = {
  input: UpdateFlowAuthenticationInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateFlowAuthenticationBrandArgs = {
  input: UpdateFlowAuthenticationBrandInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateFlowAuthenticationDomainArgs = {
  input: UpdateFlowAuthenticationDomainInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateFlowAuthenticationProviderArgs = {
  input: UpdateFlowAuthenticationProviderInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateFlowAuthenticationProviderConfigurationNlWalletArgs = {
  input: UpdateFlowAuthenticationProviderConfigurationNlWalletInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateFlowDisclosureArgs = {
  input: UpdateFlowDisclosureInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateFlowDisclosureBrandArgs = {
  input: UpdateFlowDisclosureBrandInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateFlowDisclosureDomainArgs = {
  input: UpdateFlowDisclosureDomainInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateFlowDisclosureGroupArgs = {
  input: UpdateFlowDisclosureGroupInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateFlowDisclosureProviderArgs = {
  input: UpdateFlowDisclosureProviderInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateFlowDisclosureProviderConfigurationNlWalletArgs = {
  input: UpdateFlowDisclosureProviderConfigurationNlWalletInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateFlowIssuanceArgs = {
  input: UpdateFlowIssuanceInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateFlowIssuanceBrandArgs = {
  input: UpdateFlowIssuanceBrandInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateFlowIssuanceCredentialMetaDatakeeperArgs = {
  input: UpdateFlowIssuanceCredentialMetaDatakeeperInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateFlowIssuanceCredentialMetaYiviArgs = {
  input: UpdateFlowIssuanceCredentialMetaYiviInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateFlowIssuanceDomainArgs = {
  input: UpdateFlowIssuanceDomainInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateFlowIssuanceProviderArgs = {
  input: UpdateFlowIssuanceProviderInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateFlowSignatureArgs = {
  input: UpdateFlowSignatureInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateFlowSignatureBrandArgs = {
  input: UpdateFlowSignatureBrandInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateFlowSignatureDomainArgs = {
  input: UpdateFlowSignatureDomainInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateFlowSignatureGroupArgs = {
  input: UpdateFlowSignatureGroupInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateFlowSignatureProviderArgs = {
  input: UpdateFlowSignatureProviderInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateFlowSignatureProviderConfigurationNlWalletArgs = {
  input: UpdateFlowSignatureProviderConfigurationNlWalletInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateIssuerArgs = {
  input: UpdateIssuerInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateIssuerLocaleArgs = {
  input: UpdateIssuerLocaleInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateIssuerMetaDatakeeperArgs = {
  input: UpdateIssuerMetaDatakeeperInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateIssuerMetaMdocArgs = {
  input: UpdateIssuerMetaMdocInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateIssuerMetaOid4VcmdocArgs = {
  input: UpdateIssuerMetaOid4VcmdocInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateIssuerMetaOid4VcsdjwtArgs = {
  input: UpdateIssuerMetaOid4VcsdjwtInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateIssuerMetaYiviArgs = {
  input: UpdateIssuerMetaYiviInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateLocaleConfigArgs = {
  input: UpdateLocaleConfigInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateMappingIssuanceArgs = {
  input: UpdateMappingIssuanceInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateMappingIssuanceAttributeArgs = {
  input: UpdateMappingIssuanceAttributeInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateMappingVerificationArgs = {
  input: UpdateMappingVerificationInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateMappingVerificationAttributeArgs = {
  input: UpdateMappingVerificationAttributeInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateMappingVerificationClaimArgs = {
  input: UpdateMappingVerificationClaimInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateMappingVerificationLinkArgs = {
  input: UpdateMappingVerificationLinkInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateOAuthProviderArgs = {
  input: UpdateOAuthProviderInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateOrganizationArgs = {
  input: UpdateOrganizationInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateOrganizationAddressArgs = {
  input: UpdateOrganizationAddressInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateOrganizationAlertArgs = {
  input: UpdateOrganizationAlertInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateOrganizationAlertDeprecationArgs = {
  input: UpdateOrganizationAlertDeprecationInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateOrganizationAppMetaDatakeeperArgs = {
  input: UpdateOrganizationAppMetaDatakeeperInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateOrganizationAppMetaKiwaArgs = {
  input: UpdateOrganizationAppMetaKiwaInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateOrganizationAppMetaYotiArgs = {
  input: UpdateOrganizationAppMetaYotiInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateOrganizationBrandArgs = {
  input: UpdateOrganizationBrandInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateOrganizationClientArgs = {
  input: UpdateOrganizationClientInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateOrganizationDomainArgs = {
  input: UpdateOrganizationDomainInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateOrganizationNotificationArgs = {
  input: UpdateOrganizationNotificationInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateOrganizationSecretArgs = {
  input: UpdateOrganizationSecretInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateOrganizationUserArgs = {
  input: UpdateOrganizationUserInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdatePasswordUserArgs = {
  input: UpdatePasswordUserInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateProviderArgs = {
  input: UpdateProviderInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateProviderAppMetaOid4VcArgs = {
  input: UpdateProviderAppMetaOid4VcInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateProviderLocaleArgs = {
  input: UpdateProviderLocaleInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateSchemeArgs = {
  input: UpdateSchemeInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateSchemeLocaleArgs = {
  input: UpdateSchemeLocaleInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateScopeArgs = {
  input: UpdateScopeInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateScopeClaimArgs = {
  input: UpdateScopeClaimInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateScopeLocaleArgs = {
  input: UpdateScopeLocaleInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateScopeResourceArgs = {
  input: UpdateScopeResourceInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateStudioPlanArgs = {
  input: UpdateStudioPlanInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateStudioPlanControlArgs = {
  input: UpdateStudioPlanControlInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateStudioPlanControlOverrideArgs = {
  input: UpdateStudioPlanControlOverrideInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateStudioPlanIntervalArgs = {
  input: UpdateStudioPlanIntervalInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateUserInvitationArgs = {
  input: UpdateUserInvitationInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUseAuthenticationInvitationArgs = {
  input: AcceptAuthenticationInvitationInput;
};


export type MutationUseAuthenticationResetArgs = {
  input: UseAuthenticationResetInput;
};


export type MutationValidateAuthenticationInvitationArgs = {
  input: ValidateAuthenticationInvitationInput;
};


export type MutationValidateAuthenticationResetArgs = {
  input: ValidateAuthenticationResetInput;
};


export type MutationValidateUserInvitationArgs = {
  input: ValidateUserInvitationInput;
};

/** OAuth flow type */
export enum OAuthFlowType {
  Login = 'LOGIN',
  Signup = 'SIGNUP'
}

/** Return type for OAuth methods */
export type OAuthMethod = {
  __typename?: 'OAuthMethod';
  authUri: Scalars['NonEmpty']['output'];
  icon: Scalars['NonEmpty']['output'];
  name: Scalars['NonEmpty']['output'];
};

/** OAuthProvider definition. */
export type OAuthProvider = Model & {
  __typename?: 'OAuthProvider';
  /** The clientID of the OAuth Provider */
  clientId: Scalars['NonEmpty']['output'];
  /** The clientSecret of the OAuth Provider */
  clientSecret: Scalars['NonEmpty']['output'];
  /** The resource creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The discovery URI of the OAuth Provider */
  discoveryUri: Scalars['URL']['output'];
  /** The global flag */
  global: Scalars['Boolean']['output'];
  /** The icon of the OAuth Provider */
  icon: Scalars['NonEmpty']['output'];
  /** The scopes used for login */
  loginScopes: Scalars['NonEmpty']['output'];
  /** The name of the OAuth Provider */
  name: Scalars['NonEmpty']['output'];
  /** The registered redirect URI for the OAuth Provider */
  redirectUri: Scalars['URL']['output'];
  /** The scopes used for signup */
  signupScopes: Scalars['NonEmpty']['output'];
  /** The state of the OAuth Provider */
  state: OAuthProviderState;
  /** The tenantID of the OAuth Provider */
  tenantId?: Maybe<Scalars['NonEmpty']['output']>;
  /** The resource update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** OAuthProvider Action */
export enum OAuthProviderAction {
  Activate = 'ACTIVATE',
  Deactivate = 'DEACTIVATE'
}

export type OAuthProviderConnection = {
  __typename?: 'OAuthProviderConnection';
  edges: Array<OAuthProviderEdge>;
  pageInfo: PageInfo;
};

export type OAuthProviderEdge = {
  __typename?: 'OAuthProviderEdge';
  cursor: Scalars['String']['output'];
  node: OAuthProvider;
};

/** Fields which can be used to filter user oauthProviders on. Value must be camel case. */
export enum OAuthProviderFilteringField {
  Global = 'global',
  Name = 'name',
  State = 'state',
  Uuid = 'uuid'
}

/** Fields which can be used to sort user oauthProviders on. Value must be camel case. */
export enum OAuthProviderSortEnum {
  CreatedAt = 'createdAt',
  Global = 'global',
  Name = 'name',
  State = 'state',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting user oauthProviders. */
export type OAuthProviderSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: OAuthProviderSortEnum;
};

/** OAuthProvider State */
export enum OAuthProviderState {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export enum OrderDirection {
  /** Specifies an ascending order for a given `orderBy` argument. */
  Asc = 'ASC',
  /** Specifies a descending order for a given `orderBy` argument. */
  Desc = 'DESC'
}

/** Organization definition. */
export type Organization = Model & {
  __typename?: 'Organization';
  /** Gets billing */
  billing?: Maybe<Billing>;
  /** The time when the organization got blocked */
  blockedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The resource creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The organization description. */
  description?: Maybe<Scalars['NonEmpty']['output']>;
  /** The public email address of the organization. */
  email?: Maybe<Scalars['Email']['output']>;
  /** The logo of the organization. */
  logo?: Maybe<Scalars['ProfilePicture']['output']>;
  /** The organization name. */
  name: Scalars['NonEmpty']['output'];
  /** A list of addresses of this organization. */
  organizationAddresses?: Maybe<OrganizationAddressConnection>;
  /** A list of domains of this organization. */
  organizationDomains?: Maybe<OrganizationDomainConnection>;
  /** A list of associated OrganizationQuotas. */
  organizationQuotas?: Maybe<OrganizationQuotaConnection>;
  /** A list of users who are members of this organization. */
  organizationUsers?: Maybe<OrganizationUserConnection>;
  /** The phone number of the organization. */
  phone?: Maybe<Scalars['String']['output']>;
  /** The resource update time */
  updatedAt: Scalars['DateTime']['output'];
  /** A list of user invitations */
  userInvitations?: Maybe<UserInvitationConnection>;
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** The url of the website of the organization. */
  website?: Maybe<Scalars['URL']['output']>;
};


/** Organization definition. */
export type OrganizationOrganizationAddressesArgs = {
  input?: InputMaybe<FindManyOrganizationAddressesInput>;
};


/** Organization definition. */
export type OrganizationOrganizationDomainsArgs = {
  input?: InputMaybe<FindManyOrganizationDomainsInput>;
};


/** Organization definition. */
export type OrganizationOrganizationUsersArgs = {
  input?: InputMaybe<FindManyOrganizationUsersInput>;
};


/** Organization definition. */
export type OrganizationUserInvitationsArgs = {
  input?: InputMaybe<FindManyUserInvitationsInput>;
};

/** OrganizationAction */
export enum OrganizationAction {
  Block = 'BLOCK',
  Unblock = 'UNBLOCK'
}

/** User organization address type definition. */
export type OrganizationAddress = Model & {
  __typename?: 'OrganizationAddress';
  /** The city of the address. */
  city: Scalars['NonEmpty']['output'];
  /** The country of the address in ISO 3166 2 format. */
  country: Scalars['ISO3166']['output'];
  /** The resource creation time */
  createdAt: Scalars['DateTime']['output'];
  /** isDefaultTax */
  isDefaultTax: Scalars['Boolean']['output'];
  /** The number of the address. */
  number: Scalars['NonEmpty']['output'];
  /** The address of the organization. */
  organization: Organization;
  /** The street of the address. */
  street: Scalars['NonEmpty']['output'];
  /** The resource update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** The zipcode of the address. */
  zipcode: Scalars['NonEmpty']['output'];
};

export type OrganizationAddressConnection = {
  __typename?: 'OrganizationAddressConnection';
  edges: Array<OrganizationAddressEdge>;
  pageInfo: PageInfo;
};

export type OrganizationAddressEdge = {
  __typename?: 'OrganizationAddressEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationAddress;
};

/** Fields which can be used to filter user organizations on. Value must be camel case. */
export enum OrganizationAddressFilteringField {
  City = 'city',
  Country = 'country',
  Number = 'number',
  OrganizationUuid = 'organizationUuid',
  Street = 'street',
  Uuid = 'uuid',
  Zipcode = 'zipcode'
}

/** Fields which can be used to sort user organizations on. Value must be camel case. */
export enum OrganizationAddressSortEnum {
  City = 'city',
  Country = 'country',
  CreatedAt = 'createdAt',
  OrganizationUuid = 'organizationUuid',
  Street = 'street',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting user organizations. */
export type OrganizationAddressSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: OrganizationAddressSortEnum;
};

/** Organization alert type definition. */
export type OrganizationAlert = Model & {
  __typename?: 'OrganizationAlert';
  /** The resource creation time */
  createdAt: Scalars['DateTime']['output'];
  /** Deprecation alert */
  deprecation?: Maybe<OrganizationAlertDeprecation>;
  /** The message */
  message: Scalars['NonEmpty']['output'];
  /** The organization. */
  organization: Organization;
  /** The severity */
  severity: AlertSeverity;
  /** The state */
  state: AlertState;
  /** The type */
  type: AlertType;
  /** The resource update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** OrganizationAlertAction */
export enum OrganizationAlertAction {
  Activate = 'ACTIVATE',
  Deactivate = 'DEACTIVATE',
  Dismiss = 'DISMISS'
}

export type OrganizationAlertConnection = {
  __typename?: 'OrganizationAlertConnection';
  edges: Array<OrganizationAlertEdge>;
  pageInfo: PageInfo;
};

/** Organization alert type definition. */
export type OrganizationAlertDeprecation = Model & {
  __typename?: 'OrganizationAlertDeprecation';
  /** The resource creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The flow type */
  flow: FlowType;
  /** The flow UUID which is affected */
  flowUuid: Scalars['UUID']['output'];
  /** The deprecated model */
  model: IdentityModelType;
  /** The model UUID */
  modelUuid: Scalars['UUID']['output'];
  /** The organization alert. */
  organizationAlert: OrganizationAlert;
  /** The resource update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

export type OrganizationAlertDeprecationConnection = {
  __typename?: 'OrganizationAlertDeprecationConnection';
  edges: Array<OrganizationAlertDeprecationEdge>;
  pageInfo: PageInfo;
};

export type OrganizationAlertDeprecationEdge = {
  __typename?: 'OrganizationAlertDeprecationEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationAlertDeprecation;
};

/** Fields which can be used to filter user organizations on. Value must be camel case. */
export enum OrganizationAlertDeprecationFilteringField {
  FlowUuid = 'flowUuid',
  Model = 'model',
  ModelUuid = 'modelUuid',
  OrganizationAlertUuid = 'organizationAlertUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort user organizations on. Value must be camel case. */
export enum OrganizationAlertDeprecationSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting user organizations. */
export type OrganizationAlertDeprecationSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: OrganizationAlertDeprecationSortEnum;
};

export type OrganizationAlertEdge = {
  __typename?: 'OrganizationAlertEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationAlert;
};

/** Fields which can be used to filter user organizations on. Value must be camel case. */
export enum OrganizationAlertFilteringField {
  OrganizationUuid = 'organizationUuid',
  Severity = 'severity',
  State = 'state',
  Type = 'type',
  Uuid = 'uuid'
}

/** Fields which can be used to sort user organizations on. Value must be camel case. */
export enum OrganizationAlertSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting user organizations. */
export type OrganizationAlertSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: OrganizationAlertSortEnum;
};

/** OrganizationApp definition. */
export type OrganizationApp = Model & {
  __typename?: 'OrganizationApp';
  /** The app. */
  app: App;
  /** The creation time. */
  createdAt: Scalars['DateTime']['output'];
  /** The state for issuance. */
  issuanceState: OrganizationAppState;
  /** The meta */
  meta?: Maybe<OrganizationAppMeta>;
  /** The meta type of the organization app */
  metaType: OrganizationAppMetaType;
  /** The organization. */
  organization: Organization;
  /** The collection of organization app prerequisites */
  organizationAppPrerequisites: OrganizationAppPrerequisiteConnection;
  /** The uuid of the organization. */
  organizationUuid: Scalars['UUID']['output'];
  /** The update time. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
  /** The state for verification. */
  verificationState: OrganizationAppState;
};


/** OrganizationApp definition. */
export type OrganizationAppOrganizationAppPrerequisitesArgs = {
  input?: InputMaybe<FindManyOrganizationAppPrerequisiteInput>;
};

/** OrganizationAppAction */
export enum OrganizationAppAction {
  Activate = 'ACTIVATE',
  Deactivate = 'DEACTIVATE'
}

/** The app connection definition. */
export type OrganizationAppConnection = {
  __typename?: 'OrganizationAppConnection';
  edges: Array<Maybe<OrganizationAppEdge>>;
  pageInfo: PageInfo;
};

/** The app edge definition. */
export type OrganizationAppEdge = {
  __typename?: 'OrganizationAppEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationApp;
};

/** Fields which can be used to filter app on. Value must be camel case. */
export enum OrganizationAppFilteringField {
  CreatedAt = 'createdAt',
  IssuanceState = 'issuanceState',
  OrganizationUuid = 'organizationUuid',
  Uuid = 'uuid',
  VerificationState = 'verificationState'
}

/** Organization app meta. */
export type OrganizationAppMeta = Model & {
  __typename?: 'OrganizationAppMeta';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The datakeeper organization app meta */
  datakeeper?: Maybe<OrganizationAppMetaDatakeeper>;
  /** The kiwa organization app meta */
  kiwa?: Maybe<OrganizationAppMetaKiwa>;
  /** The organization app the meta belongs to. */
  organizationApp: OrganizationApp;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** The yoti organization app meta */
  yoti?: Maybe<OrganizationAppMetaYoti>;
};

/** The organization app meta connection request. */
export type OrganizationAppMetaConnection = {
  __typename?: 'OrganizationAppMetaConnection';
  edges: Array<Maybe<OrganizationAppMetaEdge>>;
  pageInfo: PageInfo;
};

/** Organization app meta datakeeper. */
export type OrganizationAppMetaDatakeeper = Model & {
  __typename?: 'OrganizationAppMetaDatakeeper';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The issuer did */
  issuerDid?: Maybe<Scalars['NonEmpty']['output']>;
  /** The organization app meta the datakeeper meta belongs to. */
  organizationAppMeta: OrganizationAppMeta;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The organization app meta datakeeper connection request. */
export type OrganizationAppMetaDatakeeperConnection = {
  __typename?: 'OrganizationAppMetaDatakeeperConnection';
  edges: Array<Maybe<OrganizationAppMetaDatakeeperEdge>>;
  pageInfo: PageInfo;
};

/** The organization app meta datakeeper edge request. */
export type OrganizationAppMetaDatakeeperEdge = {
  __typename?: 'OrganizationAppMetaDatakeeperEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationAppMetaDatakeeper;
};

/** Fields which can be used to filter organizationApp meta datakeeper on. Value must be camel case. */
export enum OrganizationAppMetaDatakeeperFilteringField {
  IssuerDid = 'issuerDid',
  OrganizationAppMetaUuid = 'organizationAppMetaUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort organization app meta datakeeper on. Value must be camel case. */
export enum OrganizationAppMetaDatakeeperSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting organization app meta datakeeper. */
export type OrganizationAppMetaDatakeeperSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: OrganizationAppMetaDatakeeperSortEnum;
};

/** The organization app meta edge request. */
export type OrganizationAppMetaEdge = {
  __typename?: 'OrganizationAppMetaEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationAppMeta;
};

/** Fields which can be used to filter organization app meta on. Value must be camel case. */
export enum OrganizationAppMetaFilteringField {
  OrganizationAppUuid = 'organizationAppUuid'
}

/** Organization app meta kiwa. */
export type OrganizationAppMetaKiwa = Model & {
  __typename?: 'OrganizationAppMetaKiwa';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The certificate serial */
  issuerId?: Maybe<Scalars['NonEmpty']['output']>;
  /** The private key identifier */
  keyIdentifier?: Maybe<Scalars['NonEmpty']['output']>;
  /** The organization app meta the kiwa meta belongs to. */
  organizationAppMeta: OrganizationAppMeta;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The organization app meta kiwa connection request. */
export type OrganizationAppMetaKiwaConnection = {
  __typename?: 'OrganizationAppMetaKiwaConnection';
  edges: Array<Maybe<OrganizationAppMetaKiwaEdge>>;
  pageInfo: PageInfo;
};

/** The organization app meta kiwa edge request. */
export type OrganizationAppMetaKiwaEdge = {
  __typename?: 'OrganizationAppMetaKiwaEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationAppMetaKiwa;
};

/** Fields which can be used to filter organizationApp meta kiwa on. Value must be camel case. */
export enum OrganizationAppMetaKiwaFilteringField {
  OrganizationAppMetaUuid = 'organizationAppMetaUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort organization app meta kiwa on. Value must be camel case. */
export enum OrganizationAppMetaKiwaSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting organization app meta kiwa. */
export type OrganizationAppMetaKiwaSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: OrganizationAppMetaKiwaSortEnum;
};

/** Fields which can be used to sort organization app meta on. Value must be camel case. */
export enum OrganizationAppMetaSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting organization app meta. */
export type OrganizationAppMetaSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: OrganizationAppMetaSortEnum;
};

/** Organization app meta types */
export enum OrganizationAppMetaType {
  Datakeeper = 'DATAKEEPER',
  Kiwa = 'KIWA',
  None = 'NONE',
  Yoti = 'YOTI'
}

/** Organization app meta yoti. */
export type OrganizationAppMetaYoti = Model & {
  __typename?: 'OrganizationAppMetaYoti';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The org domain registered at Yoti */
  domain?: Maybe<Scalars['URL']['output']>;
  /** The organization app meta the yoti meta belongs to. */
  organizationAppMeta: OrganizationAppMeta;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The organization app meta yoti connection request. */
export type OrganizationAppMetaYotiConnection = {
  __typename?: 'OrganizationAppMetaYotiConnection';
  edges: Array<Maybe<OrganizationAppMetaYotiEdge>>;
  pageInfo: PageInfo;
};

/** The organization app meta yoti edge request. */
export type OrganizationAppMetaYotiEdge = {
  __typename?: 'OrganizationAppMetaYotiEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationAppMetaYoti;
};

/** Fields which can be used to filter organizationApp meta yoti on. Value must be camel case. */
export enum OrganizationAppMetaYotiFilteringField {
  Domain = 'domain',
  OrganizationAppMetaUuid = 'organizationAppMetaUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort organization app meta yoti on. Value must be camel case. */
export enum OrganizationAppMetaYotiSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting organization app meta yoti. */
export type OrganizationAppMetaYotiSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: OrganizationAppMetaYotiSortEnum;
};

/** Organization app prerequisite. */
export type OrganizationAppPrerequisite = Model & {
  __typename?: 'OrganizationAppPrerequisite';
  /** The app prerequisite. */
  appPrerequisite: AppPrerequisite;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The organization app the meta belongs to. */
  organizationApp: OrganizationApp;
  /** The app prerequisite state. */
  state: AppPrerequisiteState;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** The collection of workflows */
  workflows: OrganizationAppPrerequisiteWorkflowConnection;
};


/** Organization app prerequisite. */
export type OrganizationAppPrerequisiteWorkflowsArgs = {
  input?: InputMaybe<FindManyOrganizationAppPrerequisiteWorkflowInput>;
};

/** The organization app prerequisite connection request. */
export type OrganizationAppPrerequisiteConnection = {
  __typename?: 'OrganizationAppPrerequisiteConnection';
  edges: Array<Maybe<OrganizationAppPrerequisiteEdge>>;
  pageInfo: PageInfo;
};

/** The organization app prerequisite edge request. */
export type OrganizationAppPrerequisiteEdge = {
  __typename?: 'OrganizationAppPrerequisiteEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationAppPrerequisite;
};

/** Fields which can be used to filter organization app prerequisite on. Value must be camel case. */
export enum OrganizationAppPrerequisiteFilteringField {
  OrganizationAppMetaUuid = 'organizationAppMetaUuid',
  SecretUuid = 'secretUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort organization app prerequisite on. Value must be camel case. */
export enum OrganizationAppPrerequisiteSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting organization app prerequisite. */
export type OrganizationAppPrerequisiteSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: OrganizationAppPrerequisiteSortEnum;
};

/** Organization app prerequisite workflow. */
export type OrganizationAppPrerequisiteWorkflow = Model & {
  __typename?: 'OrganizationAppPrerequisiteWorkflow';
  /** The app prerequisite state. */
  appPrerequisiteState: AppPrerequisiteState;
  /** The comments */
  comments?: Maybe<Scalars['String']['output']>;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The organization app prerequisite. */
  organizationAppPrerequisite: OrganizationAppPrerequisite;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The organization app prerequisite workflow connection request. */
export type OrganizationAppPrerequisiteWorkflowConnection = {
  __typename?: 'OrganizationAppPrerequisiteWorkflowConnection';
  edges: Array<Maybe<OrganizationAppPrerequisiteWorkflowEdge>>;
  pageInfo: PageInfo;
};

/** The organization app prerequisite workflow edge request. */
export type OrganizationAppPrerequisiteWorkflowEdge = {
  __typename?: 'OrganizationAppPrerequisiteWorkflowEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationAppPrerequisiteWorkflow;
};

/** Fields which can be used to filter organization app prerequisite workflow on. Value must be camel case. */
export enum OrganizationAppPrerequisiteWorkflowFilteringField {
  AppPrerequisiteStateUuid = 'appPrerequisiteStateUuid',
  OrganizationAppPrerequisiteUuid = 'organizationAppPrerequisiteUuid'
}

/** Fields which can be used to sort organization app prerequisite workflow on. Value must be camel case. */
export enum OrganizationAppPrerequisiteWorkflowSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting organization app prerequisite workflow. */
export type OrganizationAppPrerequisiteWorkflowSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: OrganizationAppPrerequisiteWorkflowSortEnum;
};

/** OrganizationAppProduct */
export enum OrganizationAppProduct {
  Issuance = 'ISSUANCE',
  Verification = 'VERIFICATION'
}

/** Fields which can be used to sort app on. Value must be camel case. */
export enum OrganizationAppSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting app. */
export type OrganizationAppSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: OrganizationAppSortEnum;
};

/** Organization app states */
export enum OrganizationAppState {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  NotSupported = 'NOT_SUPPORTED'
}

/** Organization brand definition. */
export type OrganizationBrand = Model & {
  __typename?: 'OrganizationBrand';
  /** The brand creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The brand value. */
  logo?: Maybe<Scalars['ClientPicture']['output']>;
  /** The brand value. */
  name: Scalars['NonEmpty']['output'];
  /** The organization the brand belongs to. */
  organization: Organization;
  /** The reject reason if any */
  rejectReason?: Maybe<Scalars['NonEmpty']['output']>;
  /** The state of the brand. */
  state: OrganizationBrandState;
  /** The brand update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** OrganizationBrandAction */
export enum OrganizationBrandAction {
  Activate = 'ACTIVATE',
  Approve = 'APPROVE',
  Deactivate = 'DEACTIVATE',
  Reject = 'REJECT',
  Request = 'REQUEST'
}

/** An Connection */
export type OrganizationBrandConnection = {
  __typename?: 'OrganizationBrandConnection';
  edges: Array<OrganizationBrandEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type OrganizationBrandEdge = {
  __typename?: 'OrganizationBrandEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationBrand;
};

/** Fields which can be used to filter brands on. Value must be camel case. */
export enum OrganizationBrandFilteringField {
  Name = 'name',
  OrganizationUuid = 'organizationUuid',
  State = 'state',
  Uuid = 'uuid'
}

/** Fields which can be used to sort brands on. Value must be camel case. */
export enum OrganizationBrandSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  OrganizationUuid = 'organizationUuid',
  State = 'state',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting brands. */
export type OrganizationBrandSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: OrganizationBrandSortEnum;
};

/** OrganizationBrandState */
export enum OrganizationBrandState {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING',
  Unapproved = 'UNAPPROVED'
}

/** Organization token definition. */
export type OrganizationClient = Model & {
  __typename?: 'OrganizationClient';
  /** Blocked */
  blockedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The OAuth entitlements of the token. */
  entitlements: Array<Scalars['Entitlement']['output']>;
  /** The token key */
  key: Scalars['NonEmpty']['output'];
  /** The token name */
  name: Scalars['NonEmpty']['output'];
  /** The user organization  */
  organization: Organization;
  /** The OAuth role of the token. */
  role: OrganizationUserRole;
  /** The last time the token was seen */
  spottedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** An Connection */
export type OrganizationClientConnection = {
  __typename?: 'OrganizationClientConnection';
  edges: Array<OrganizationClientEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type OrganizationClientEdge = {
  __typename?: 'OrganizationClientEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationClient;
};

/** Fields which can be used to filter tokens on. Value must be camel case. */
export enum OrganizationClientFilteringField {
  Name = 'name',
  OrganizationUuid = 'organizationUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort tokens on. Value must be camel case. */
export enum OrganizationClientSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting tokens. */
export type OrganizationClientSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: OrganizationClientSortEnum;
};

export type OrganizationConnection = {
  __typename?: 'OrganizationConnection';
  edges: Array<OrganizationEdge>;
  pageInfo: PageInfo;
};

/** Organization domain definition. */
export type OrganizationDomain = Model & {
  __typename?: 'OrganizationDomain';
  /** The domain creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The domain value. */
  name: Scalars['DomainName']['output'];
  /** The organization the domain belongs to. */
  organization: Organization;
  /** The reject reason if any */
  rejectReason?: Maybe<Scalars['NonEmpty']['output']>;
  /** The state of the domain. */
  state: OrganizationDomainState;
  /** The domain update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** The validation of the domain */
  validation?: Maybe<OrganizationDomainValidation>;
};

/** OrganizationDomainAction */
export enum OrganizationDomainAction {
  Activate = 'ACTIVATE',
  Approve = 'APPROVE',
  Deactivate = 'DEACTIVATE',
  Reject = 'REJECT',
  Request = 'REQUEST'
}

/** Reject input */
export type OrganizationDomainActionRejectInput = {
  /** The reject reason */
  reason: Scalars['NonEmpty']['input'];
};

/** An Connection */
export type OrganizationDomainConnection = {
  __typename?: 'OrganizationDomainConnection';
  edges: Array<OrganizationDomainEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type OrganizationDomainEdge = {
  __typename?: 'OrganizationDomainEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationDomain;
};

/** Fields which can be used to filter domains on. Value must be camel case. */
export enum OrganizationDomainFilteringField {
  Name = 'name',
  OrganizationUuid = 'organizationUuid',
  State = 'state',
  Uuid = 'uuid'
}

/** OrganizationDomainOAuthProvider definition. */
export type OrganizationDomainOAuthProvider = Model & {
  __typename?: 'OrganizationDomainOAuthProvider';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The OAuth Provider */
  oauthProvider: OAuthProvider;
  /** The organization domain */
  organizationDomain: OrganizationDomain;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The OrganizationDomainOAuthProvider connection definition. */
export type OrganizationDomainOAuthProviderConnection = {
  __typename?: 'OrganizationDomainOAuthProviderConnection';
  edges: Array<Maybe<OrganizationDomainOAuthProviderEdge>>;
  pageInfo: PageInfo;
};

/** The OrganizationDomainOAuthProvider edge definition. */
export type OrganizationDomainOAuthProviderEdge = {
  __typename?: 'OrganizationDomainOAuthProviderEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationDomainOAuthProvider;
};

/** Fields which can be used to filter app on. Value must be camel case. */
export enum OrganizationDomainOAuthProviderFilteringField {
  OauthProviderUuid = 'oauthProviderUuid',
  OrganizationDomainUuid = 'organizationDomainUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort app on. Value must be camel case. */
export enum OrganizationDomainOAuthProviderSortEnum {
  AppUuid = 'appUuid',
  CreatedAt = 'createdAt',
  OauthProviderUuid = 'oauthProviderUuid',
  OrganizationDomainUuid = 'organizationDomainUuid',
  Uuid = 'uuid'
}

/** Input options for sorting OrganizationDomainOAuthProvider. */
export type OrganizationDomainOAuthProviderSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: OrganizationDomainOAuthProviderSortEnum;
};

/** Fields which can be used to sort domains on. Value must be camel case. */
export enum OrganizationDomainSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  OrganizationUuid = 'organizationUuid',
  State = 'state',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting domains. */
export type OrganizationDomainSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: OrganizationDomainSortEnum;
};

/** OrganizationDomainState */
export enum OrganizationDomainState {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING',
  Unapproved = 'UNAPPROVED'
}

/** Organization domain validation definition. */
export type OrganizationDomainValidation = Model & {
  __typename?: 'OrganizationDomainValidation';
  /** The domain validation creation time */
  createdAt: Scalars['DateTime']['output'];
  /**
   * The scheduled time to deactivate the domain in case of many successive
   * failures
   */
  deactivateAt?: Maybe<Scalars['DateTime']['output']>;
  /** The last time the domain was validated */
  lastCheckAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The last time the organization has been notified regarding an issue with
   * the domain validation
   */
  lastNotifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The last time the domain was successfully validated */
  lastValidAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time of the next scheduled check */
  nextCheckAt: Scalars['DateTime']['output'];
  /** The organization domain this validation belongs to. */
  organizationDomain: OrganizationDomain;
  /** The validation token */
  token: Scalars['NonEmpty']['output'];
  /** The domain validation update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** An Connection */
export type OrganizationDomainValidationConnection = {
  __typename?: 'OrganizationDomainValidationConnection';
  edges: Array<OrganizationDomainValidationEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type OrganizationDomainValidationEdge = {
  __typename?: 'OrganizationDomainValidationEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationDomainValidation;
};

/** Fields which can be used to filter domain validations on. Value must be camel case. */
export enum OrganizationDomainValidationFilteringField {
  DeactivateAt = 'deactivateAt',
  LastCheckAt = 'lastCheckAt',
  LastNotifiedAt = 'lastNotifiedAt',
  LastValidAt = 'lastValidAt',
  NextCheckAt = 'nextCheckAt',
  OrganizationDomainUuid = 'organizationDomainUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort domain validations on. Value must be camel case. */
export enum OrganizationDomainValidationSortEnum {
  CreatedAt = 'createdAt',
  DeactivateAt = 'deactivateAt',
  LastCheckAt = 'lastCheckAt',
  LastNotifiedAt = 'lastNotifiedAt',
  LastValidAt = 'lastValidAt',
  NextCheckAt = 'nextCheckAt',
  OrganizationDomainUuid = 'organizationDomainUuid',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting domain validations. */
export type OrganizationDomainValidationSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: OrganizationDomainValidationSortEnum;
};

export type OrganizationEdge = {
  __typename?: 'OrganizationEdge';
  cursor: Scalars['String']['output'];
  node: Organization;
};

/** Fields which can be used to filter user organizations on. Value must be camel case. */
export enum OrganizationFilteringField {
  Description = 'description',
  Email = 'email',
  Name = 'name',
  Phone = 'phone',
  Uuid = 'uuid'
}

/** User organization address type definition. */
export type OrganizationNotification = Model & {
  __typename?: 'OrganizationNotification';
  /** The resource creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The email address */
  email: Scalars['Email']['output'];
  /** If notification is for all organizations */
  isForAllOrganizations: Scalars['Boolean']['output'];
  /** The address of the organization. */
  organization: Organization;
  /** The organizationNotificationEvent. */
  organizationNotificationEvent: OrganizationNotificationEvent;
  /** The resource update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** OrganizationNotificationAction */
export enum OrganizationNotificationAction {
  ToggleAll = 'TOGGLE_ALL'
}

export type OrganizationNotificationConnection = {
  __typename?: 'OrganizationNotificationConnection';
  edges: Array<OrganizationNotificationEdge>;
  pageInfo: PageInfo;
};

export type OrganizationNotificationEdge = {
  __typename?: 'OrganizationNotificationEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationNotification;
};

/** User organization address type definition. */
export type OrganizationNotificationEvent = Model & {
  __typename?: 'OrganizationNotificationEvent';
  /** The resource creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The URN */
  eventURN: Scalars['URN']['output'];
  /** The organizationNotification. */
  organizationNotification: OrganizationNotification;
  /** The resource update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

export type OrganizationNotificationEventConnection = {
  __typename?: 'OrganizationNotificationEventConnection';
  edges: Array<OrganizationNotificationEventEdge>;
  pageInfo: PageInfo;
};

export type OrganizationNotificationEventEdge = {
  __typename?: 'OrganizationNotificationEventEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationNotificationEvent;
};

/** Fields which can be used to filter user organizations on. Value must be camel case. */
export enum OrganizationNotificationEventFilteringField {
  Email = 'email',
  EventUrn = 'eventURN',
  OrganizationNotificationUuid = 'organizationNotificationUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort user organizations on. Value must be camel case. */
export enum OrganizationNotificationEventSortEnum {
  CreatedAt = 'createdAt',
  EventUrn = 'eventURN',
  OrganizationNotificationUuid = 'organizationNotificationUuid',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting user organizations. */
export type OrganizationNotificationEventSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: OrganizationNotificationEventSortEnum;
};

/** Fields which can be used to filter user organizations on. Value must be camel case. */
export enum OrganizationNotificationFilteringField {
  Email = 'email',
  OrganizationUuid = 'organizationUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort user organizations on. Value must be camel case. */
export enum OrganizationNotificationSortEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  OrganizationUuid = 'organizationUuid',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting user organizations. */
export type OrganizationNotificationSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: OrganizationNotificationSortEnum;
};

/** OrganizationQuota */
export type OrganizationQuota = Model & {
  __typename?: 'OrganizationQuota';
  /** The JSON Value */
  args: Scalars['JSONObject']['output'];
  /** The associated StudioControl */
  controlURN: Scalars['URN']['output'];
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The associated Organization */
  organization: Organization;
  /** The associated studio plan control */
  studioPlanControl: StudioPlanControlArgs;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};

/** The OrganizationQuota connection definition. */
export type OrganizationQuotaConnection = {
  __typename?: 'OrganizationQuotaConnection';
  edges: Array<Maybe<OrganizationQuotaEdge>>;
  pageInfo: PageInfo;
};

/** The OrganizationQuota edge definition. */
export type OrganizationQuotaEdge = {
  __typename?: 'OrganizationQuotaEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationQuota;
};

/** Fields which can be used to filter OrganizationQuota on. Value must be camel case. */
export enum OrganizationQuotaFilteringField {
  ControlUrn = 'controlURN',
  OrganizationUuid = 'organizationUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort OrganizationQuota on. Value must be camel case. */
export enum OrganizationQuotaSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting OrganizationQuota. */
export type OrganizationQuotaSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: OrganizationQuotaSortEnum;
};

/** Organization secret definition. */
export type OrganizationSecret = Model & {
  __typename?: 'OrganizationSecret';
  /** The algorithm */
  algorithm: OrganizationSecretAlgorithm;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** Expires */
  expiresAt: Scalars['DateTime']['output'];
  /** The key */
  key: Scalars['NonEmpty']['output'];
  /** The secret name */
  name: Scalars['NonEmpty']['output'];
  /** The user organization  */
  organization: Organization;
  /** The type */
  type: OrganizationSecretType;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The algorithms */
export enum OrganizationSecretAlgorithm {
  Hs384 = 'HS384',
  None = 'NONE'
}

/** An Connection */
export type OrganizationSecretConnection = {
  __typename?: 'OrganizationSecretConnection';
  edges: Array<OrganizationSecretEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type OrganizationSecretEdge = {
  __typename?: 'OrganizationSecretEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationSecret;
};

/** Fields which can be used to filter secrets on. Value must be camel case. */
export enum OrganizationSecretFilteringField {
  Algorithm = 'algorithm',
  Name = 'name',
  OrganizationUuid = 'organizationUuid',
  Type = 'type',
  Uuid = 'uuid'
}

/** Fields which can be used to sort secrets on. Value must be camel case. */
export enum OrganizationSecretSortEnum {
  Algorithm = 'algorithm',
  CreatedAt = 'createdAt',
  Name = 'name',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting secrets. */
export type OrganizationSecretSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: OrganizationSecretSortEnum;
};

/** The types */
export enum OrganizationSecretType {
  Oauth = 'OAUTH',
  Oct = 'OCT'
}

/** Fields which can be used to sort user organizations on. Value must be camel case. */
export enum OrganizationSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting user organizations. */
export type OrganizationSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: OrganizationSortEnum;
};

/** OrganizationUser definition. */
export type OrganizationUser = Model & {
  __typename?: 'OrganizationUser';
  /** The user blocked time. */
  blockedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The guide ids the user has completed */
  completedGuides: Array<Scalars['String']['output']>;
  /** The user creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The OAuth entitlements of the user. */
  entitlements: Array<Scalars['Entitlement']['output']>;
  /** The organization the organization user belongs to. */
  organization: Organization;
  /** The OAuth role of the user. */
  role: OrganizationUserRole;
  /** The last time the user was seen */
  spottedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The user the organization user belongs to. */
  user: User;
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** OrganizationUserAction */
export enum OrganizationUserAction {
  Block = 'BLOCK',
  Unblock = 'UNBLOCK'
}

export type OrganizationUserConnection = {
  __typename?: 'OrganizationUserConnection';
  edges: Array<OrganizationUserEdge>;
  pageInfo: PageInfo;
};

export type OrganizationUserEdge = {
  __typename?: 'OrganizationUserEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationUser;
};

/** Fields which can be used to filter users on. Value must be camel case. */
export enum OrganizationUserFilteringField {
  OrganizationUuid = 'organizationUuid',
  Role = 'role',
  Type = 'type',
  UserUuid = 'userUuid',
  Uuid = 'uuid'
}

/** OrganizationUser role enum. */
export enum OrganizationUserRole {
  Administrator = 'administrator',
  Auditor = 'auditor',
  Guest = 'guest',
  Owner = 'owner'
}

/** Fields which can be used to sort users on. Value must be camel case. */
export enum OrganizationUserSortEnum {
  CreatedAt = 'createdAt',
  OrganizationUuid = 'organizationUuid',
  UpdatedAt = 'updatedAt',
  UserUuid = 'userUuid',
  Uuid = 'uuid'
}

/** Input options for sorting users. */
export type OrganizationUserSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: OrganizationUserSortEnum;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** Input object used to pagination responses according to GraphQL Cursor Connections Specification. */
export type PaginationInput = {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: InputMaybe<Scalars['String']['input']>;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: InputMaybe<Scalars['String']['input']>;
  /** Returns the first _n_ elements from the list. */
  first?: InputMaybe<Scalars['Int']['input']>;
  /** Returns the last _n_ elements from the list. */
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** PaymentProvider definition. */
export type PaymentProvider = Model & {
  __typename?: 'PaymentProvider';
  /** The user creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The environment */
  environment: Scalars['NonEmpty']['output'];
  /** The identifier */
  identifier: Scalars['NonEmpty']['output'];
  /** The associated events */
  paymentProviderEvents: PaymentProviderEventConnection;
  /** The associated organizations */
  paymentProviderOrganizations: PaymentProviderOrganizationConnection;
  /** The user update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** PaymentProvider definition. */
export type PaymentProviderPaymentProviderEventsArgs = {
  input?: InputMaybe<FindManyPaymentProviderEventsInput>;
};


/** PaymentProvider definition. */
export type PaymentProviderPaymentProviderOrganizationsArgs = {
  input?: InputMaybe<FindManyPaymentProviderOrganizationsInput>;
};

export type PaymentProviderConnection = {
  __typename?: 'PaymentProviderConnection';
  edges: Array<PaymentProviderEdge>;
  pageInfo: PageInfo;
};

export type PaymentProviderEdge = {
  __typename?: 'PaymentProviderEdge';
  cursor: Scalars['String']['output'];
  node: PaymentProvider;
};

/** PaymentProviderEvent definition. */
export type PaymentProviderEvent = Model & {
  __typename?: 'PaymentProviderEvent';
  /** The api version */
  apiVersion: Scalars['NonEmpty']['output'];
  /** The state */
  blob: Scalars['JSONObject']['output'];
  /** The user creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The id */
  id: Scalars['NonEmpty']['output'];
  /** Billing */
  paymentProvider: PaymentProvider;
  /** The processing date */
  processedAt: Scalars['DateTime']['output'];
  /** The user update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

export type PaymentProviderEventConnection = {
  __typename?: 'PaymentProviderEventConnection';
  edges: Array<PaymentProviderEventEdge>;
  pageInfo: PageInfo;
};

export type PaymentProviderEventEdge = {
  __typename?: 'PaymentProviderEventEdge';
  cursor: Scalars['String']['output'];
  node: PaymentProviderEvent;
};

/** Fields which can be used to filter billings on. Value must be camel case. */
export enum PaymentProviderEventFilteringField {
  PaymentProviderUuid = 'paymentProviderUuid',
  State = 'state',
  Uuid = 'uuid'
}

/** Fields which can be used to sort billings on. Value must be camel case. */
export enum PaymentProviderEventSortEnum {
  CreatedAt = 'createdAt',
  State = 'state',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting billings. */
export type PaymentProviderEventSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: PaymentProviderEventSortEnum;
};

/** Fields which can be used to filter billings on. Value must be camel case. */
export enum PaymentProviderFilteringField {
  PaymentProviderUuid = 'paymentProviderUuid',
  State = 'state',
  Uuid = 'uuid'
}

/** PaymentProviderInvoice definition. */
export type PaymentProviderInvoice = Model & {
  __typename?: 'PaymentProviderInvoice';
  /** The state */
  blob: Scalars['JSONObject']['output'];
  /** The user creation time */
  createdAt: Scalars['DateTime']['output'];
  /** Remote id */
  id: Scalars['NonEmpty']['output'];
  /** Billing */
  paymentProviderOrganization: PaymentProviderOrganization;
  /** The state */
  state: PaymentProviderInvoiceState;
  /** The user update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

export type PaymentProviderInvoiceConnection = {
  __typename?: 'PaymentProviderInvoiceConnection';
  edges: Array<PaymentProviderInvoiceEdge>;
  pageInfo: PageInfo;
};

export type PaymentProviderInvoiceEdge = {
  __typename?: 'PaymentProviderInvoiceEdge';
  cursor: Scalars['String']['output'];
  node: PaymentProviderInvoice;
};

/** Fields which can be used to filter billings on. Value must be camel case. */
export enum PaymentProviderInvoiceFilteringField {
  PaymentProviderOrganizationUuid = 'paymentProviderOrganizationUuid',
  State = 'state',
  Uuid = 'uuid'
}

/** Fields which can be used to sort billings on. Value must be camel case. */
export enum PaymentProviderInvoiceSortEnum {
  CreatedAt = 'createdAt',
  State = 'state',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting billings. */
export type PaymentProviderInvoiceSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: PaymentProviderInvoiceSortEnum;
};

/** PaymentProviderInvoiceState */
export enum PaymentProviderInvoiceState {
  Deleted = 'DELETED',
  Draft = 'DRAFT',
  Open = 'OPEN',
  Paid = 'PAID',
  Void = 'VOID'
}

/** PaymentProviderMethod definition. */
export type PaymentProviderMethod = Model & {
  __typename?: 'PaymentProviderMethod';
  /** The state */
  blob: Scalars['JSONObject']['output'];
  /** The user creation time */
  createdAt: Scalars['DateTime']['output'];
  /** Remote id */
  id: Scalars['NonEmpty']['output'];
  /** Billing */
  paymentProviderOrganization: PaymentProviderOrganization;
  /** The state */
  state: PaymentProviderMethodState;
  /** The type */
  type: Scalars['NonEmpty']['output'];
  /** The user update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

export type PaymentProviderMethodConnection = {
  __typename?: 'PaymentProviderMethodConnection';
  edges: Array<PaymentProviderMethodEdge>;
  pageInfo: PageInfo;
};

export type PaymentProviderMethodEdge = {
  __typename?: 'PaymentProviderMethodEdge';
  cursor: Scalars['String']['output'];
  node: PaymentProviderMethod;
};

/** Fields which can be used to filter billings on. Value must be camel case. */
export enum PaymentProviderMethodFilteringField {
  PaymentProviderOrganizationUuid = 'paymentProviderOrganizationUuid',
  State = 'state',
  Uuid = 'uuid'
}

/** Fields which can be used to sort billings on. Value must be camel case. */
export enum PaymentProviderMethodSortEnum {
  CreatedAt = 'createdAt',
  State = 'state',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting billings. */
export type PaymentProviderMethodSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: PaymentProviderMethodSortEnum;
};

/** PaymentProviderMethodState */
export enum PaymentProviderMethodState {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING'
}

/** PaymentProviderOrganization definition. */
export type PaymentProviderOrganization = Model & {
  __typename?: 'PaymentProviderOrganization';
  /** The user creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The type */
  id: Scalars['NonEmpty']['output'];
  /** Provider */
  paymentProvider: PaymentProvider;
  /** The associated methods */
  paymentProviderInvoices: PaymentProviderInvoiceConnection;
  /** The associated methods */
  paymentProviderMethods: PaymentProviderMethodConnection;
  /** The user update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** PaymentProviderOrganization definition. */
export type PaymentProviderOrganizationPaymentProviderInvoicesArgs = {
  input?: InputMaybe<FindManyPaymentProviderInvoicesInput>;
};


/** PaymentProviderOrganization definition. */
export type PaymentProviderOrganizationPaymentProviderMethodsArgs = {
  input?: InputMaybe<FindManyPaymentProviderMethodsInput>;
};

export type PaymentProviderOrganizationConnection = {
  __typename?: 'PaymentProviderOrganizationConnection';
  edges: Array<PaymentProviderOrganizationEdge>;
  pageInfo: PageInfo;
};

export type PaymentProviderOrganizationEdge = {
  __typename?: 'PaymentProviderOrganizationEdge';
  cursor: Scalars['String']['output'];
  node: PaymentProviderOrganization;
};

/** Fields which can be used to filter billings on. Value must be camel case. */
export enum PaymentProviderOrganizationFilteringField {
  PaymentProviderUuid = 'paymentProviderUuid',
  State = 'state',
  Uuid = 'uuid'
}

/** Fields which can be used to sort billings on. Value must be camel case. */
export enum PaymentProviderOrganizationSortEnum {
  CreatedAt = 'createdAt',
  State = 'state',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting billings. */
export type PaymentProviderOrganizationSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: PaymentProviderOrganizationSortEnum;
};

/** Fields which can be used to sort billings on. Value must be camel case. */
export enum PaymentProviderSortEnum {
  CreatedAt = 'createdAt',
  State = 'state',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting billings. */
export type PaymentProviderSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: PaymentProviderSortEnum;
};

/** Provider definition. */
export type Provider = Model & {
  __typename?: 'Provider';
  /** The collection of apps */
  apps: ProviderAppConnection;
  /** The base64Logo of the provider */
  base64Logo: Scalars['NonEmpty']['output'];
  /** The categories of the provider */
  categories?: Maybe<Array<ProviderCategoryType>>;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The collection of credential request states */
  credentialRequestStates: CredentialRequestStateConnection;
  /** The collection of credential requests */
  credentialRequests: CredentialRequestConnection;
  /** The handler URI of the provider */
  handlerUri: Scalars['NonEmpty']['output'];
  /** The collection of locale */
  locale: ProviderLocaleConnection;
  /** The collection of locale configs */
  localeConfigs: LocaleConfigConnection;
  /** The name */
  name: Scalars['NonEmpty']['output'];
  /** The collection of schemes */
  schemes: SchemeConnection;
  /** The state */
  state: State;
  /** The supported flow */
  supportedFlow?: Maybe<Array<Scalars['NonEmpty']['output']>>;
  /** The type */
  type: ProviderType;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** Provider definition. */
export type ProviderAppsArgs = {
  input?: InputMaybe<FindManyProviderAppsInput>;
};


/** Provider definition. */
export type ProviderCredentialRequestStatesArgs = {
  input?: InputMaybe<FindManyCredentialRequestStateInput>;
};


/** Provider definition. */
export type ProviderCredentialRequestsArgs = {
  input?: InputMaybe<FindManyCredentialRequestsInput>;
};


/** Provider definition. */
export type ProviderLocaleArgs = {
  input?: InputMaybe<FindManyProviderLocaleInput>;
};


/** Provider definition. */
export type ProviderLocaleConfigsArgs = {
  input?: InputMaybe<FindManyLocaleConfigsInput>;
};


/** Provider definition. */
export type ProviderSchemesArgs = {
  input?: InputMaybe<FindManySchemesInput>;
};

/** ProviderApp definition. */
export type ProviderApp = Model & {
  __typename?: 'ProviderApp';
  /** The App this ProviderApp belongs to */
  app: App;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The meta */
  meta?: Maybe<ProviderAppMeta>;
  /** The meta type */
  metaType: ProviderAppMetaType;
  /** The Provider this ProviderApp belongs to */
  provider: Provider;
  /** The collection of scope */
  scopes: ScopeConnection;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** ProviderApp definition. */
export type ProviderAppScopesArgs = {
  input?: InputMaybe<FindManyScopesInput>;
};

/** The ProviderApp connection definition. */
export type ProviderAppConnection = {
  __typename?: 'ProviderAppConnection';
  edges: Array<Maybe<ProviderAppEdge>>;
  pageInfo: PageInfo;
};

/** The ProviderApp edge definition. */
export type ProviderAppEdge = {
  __typename?: 'ProviderAppEdge';
  cursor: Scalars['String']['output'];
  node: ProviderApp;
};

/** Fields which can be used to filter app on. Value must be camel case. */
export enum ProviderAppFilteringField {
  AppUuid = 'appUuid',
  MetaType = 'metaType',
  Name = 'name',
  ProviderUuid = 'providerUuid',
  Uuid = 'uuid'
}

/** Definition */
export type ProviderAppMeta = Model & {
  __typename?: 'ProviderAppMeta';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The ProviderAppMetaOID4VC */
  oid4vc?: Maybe<ProviderAppMetaOid4Vc>;
  /** The providerApp the meta belongs to. */
  providerApp: ProviderApp;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The connection definition. */
export type ProviderAppMetaConnection = {
  __typename?: 'ProviderAppMetaConnection';
  edges: Array<Maybe<ProviderAppMetaEdge>>;
  pageInfo: PageInfo;
};

/** The edge definition. */
export type ProviderAppMetaEdge = {
  __typename?: 'ProviderAppMetaEdge';
  cursor: Scalars['String']['output'];
  node: ProviderAppMeta;
};

/** Camel-case filtering fields */
export enum ProviderAppMetaFilteringField {
  ProviderAppUuid = 'providerAppUuid'
}

/** Definition */
export type ProviderAppMetaOid4Vc = Model & {
  __typename?: 'ProviderAppMetaOID4VC';
  /** The client identifier prefix */
  clientIdentifierPrefix?: Maybe<ProviderAppMetaTypeOid4VcClientIdentifierPrefix>;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** If DCQL is supported */
  dcql?: Maybe<Scalars['Boolean']['output']>;
  /** The latest draft version supported by this app */
  draftVersion: Scalars['Int']['output'];
  /** The protocol */
  protocol?: Maybe<Scalars['NonEmpty']['output']>;
  /** The ProviderAppMeta this ProviderAppMetaOID4VC belongs to */
  providerAppMeta: ProviderAppMeta;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The connection definition */
export type ProviderAppMetaOid4VcConnection = {
  __typename?: 'ProviderAppMetaOID4VCConnection';
  edges: Array<Maybe<ProviderAppMetaOid4VcEdge>>;
  pageInfo: PageInfo;
};

/** The edge definition. */
export type ProviderAppMetaOid4VcEdge = {
  __typename?: 'ProviderAppMetaOID4VCEdge';
  cursor: Scalars['String']['output'];
  node: ProviderAppMetaOid4Vc;
};

/** Camel-case fields to filter on */
export enum ProviderAppMetaOid4VcFilteringField {
  DraftVersion = 'draftVersion',
  ProviderAppMetaUuid = 'providerAppMetaUuid'
}

/** Camel-case fields to sort on */
export enum ProviderAppMetaOid4VcSortEnum {
  CreatedAt = 'createdAt'
}

/** Sorting input */
export type ProviderAppMetaOid4VcSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: ProviderAppMetaOid4VcSortEnum;
};

/** Camel-case sorting fields */
export enum ProviderAppMetaSortEnum {
  CreatedAt = 'createdAt'
}

/** Sorting input */
export type ProviderAppMetaSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: ProviderAppMetaSortEnum;
};

/** Meta Type */
export enum ProviderAppMetaType {
  None = 'NONE',
  Oid4Vc = 'OID4VC'
}

/** ProviderAppMetaTypeOID4VCClientIdentifierPrefix */
export enum ProviderAppMetaTypeOid4VcClientIdentifierPrefix {
  RedirectUri = 'REDIRECT_URI'
}

/** Fields which can be used to sort app on. Value must be camel case. */
export enum ProviderAppSortEnum {
  AppUuid = 'appUuid',
  CreatedAt = 'createdAt',
  Name = 'name',
  ProviderUuid = 'providerUuid'
}

/** Input options for sorting ProviderApp. */
export type ProviderAppSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: ProviderAppSortEnum;
};

/** Provider category type */
export enum ProviderCategoryType {
  Datakeeper = 'DATAKEEPER',
  Digidentity = 'DIGIDENTITY',
  Mdoc = 'MDOC',
  Nect = 'NECT',
  NlWallet = 'NL_WALLET',
  Oid4Vc = 'OID4VC',
  Readid = 'READID',
  Truid = 'TRUID',
  Yivi = 'YIVI',
  Yoti = 'YOTI'
}

/** The provider connection definition. */
export type ProviderConnection = {
  __typename?: 'ProviderConnection';
  edges: Array<Maybe<ProviderEdge>>;
  pageInfo: PageInfo;
};

/** The provider edge definition. */
export type ProviderEdge = {
  __typename?: 'ProviderEdge';
  cursor: Scalars['String']['output'];
  node: Provider;
};

/** Fields which can be used to filter provider on. Value must be camel case. */
export enum ProviderFilteringField {
  Categories = 'categories',
  CreatedAt = 'createdAt',
  Name = 'name',
  State = 'state',
  SupportedFlow = 'supportedFlow',
  Type = 'type',
  Uuid = 'uuid'
}

/** The output type of findManyProvidersForOrganization. */
export type ProviderForOrganization = {
  __typename?: 'ProviderForOrganization';
  /** Whether the provider has apps enabled for the given organization. */
  appsEnabled: Scalars['Boolean']['output'];
  /** The organization UUID. */
  organizationUuid: Scalars['UUID']['output'];
  /** The provider itself. */
  provider: Provider;
};

/** The provider for organization connection definition. */
export type ProviderForOrganizationConnection = {
  __typename?: 'ProviderForOrganizationConnection';
  edges: Array<Maybe<ProviderForOrganizationEdge>>;
  pageInfo: PageInfo;
};

/** The provider for organization edge definition. */
export type ProviderForOrganizationEdge = {
  __typename?: 'ProviderForOrganizationEdge';
  cursor: Scalars['String']['output'];
  node: ProviderForOrganization;
};

/** Provider locale definition. */
export type ProviderLocale = Model & {
  __typename?: 'ProviderLocale';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The i18n object */
  i18n: Scalars['JSONObject']['output'];
  /** The locale */
  locale: Scalars['Locale']['output'];
  /** The provider the locale belongs to. */
  provider: Provider;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The provider locale connection definition. */
export type ProviderLocaleConnection = {
  __typename?: 'ProviderLocaleConnection';
  edges: Array<Maybe<ProviderLocaleEdge>>;
  pageInfo: PageInfo;
};

/** The provider locale edge definition. */
export type ProviderLocaleEdge = {
  __typename?: 'ProviderLocaleEdge';
  cursor: Scalars['String']['output'];
  node: ProviderLocale;
};

/** Fields which can be used to filter provider locale on. Value must be camel case. */
export enum ProviderLocaleFilteringField {
  Locale = 'locale',
  ProviderUuid = 'providerUuid'
}

/** Fields which can be used to sort provider locale on. Value must be camel case. */
export enum ProviderLocaleSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting provider locale. */
export type ProviderLocaleSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: ProviderLocaleSortEnum;
};

/** Fields which can be used to sort provider on. Value must be camel case. */
export enum ProviderSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  State = 'state'
}

/** Input options for sorting provider. */
export type ProviderSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: ProviderSortEnum;
};

/** Types */
export enum ProviderType {
  Custom = 'CUSTOM',
  System = 'SYSTEM'
}

export type Query = {
  __typename?: 'Query';
  /** Get billing method configuration */
  configBillingMethod: ConfigBillingMethodOutput;
  /** Get constants */
  constants: Constants;
  /** Retrieve a single app. */
  findApp: App;
  /** Retrieve a single app locale. */
  findAppLocale: AppLocale;
  /** Retrieve a single app prerequisite. */
  findAppPrerequisite: AppPrerequisite;
  /** Retrieve a single appPrerequisite locale. */
  findAppPrerequisiteLocale: AppPrerequisiteLocale;
  /** Retrieve a single app prerequisite state . */
  findAppPrerequisiteState: AppPrerequisiteState;
  /** Retrieve a single appPrerequisiteState locale. */
  findAppPrerequisiteStateLocale: AppPrerequisiteStateLocale;
  /** Retrieve a single attribute. */
  findAttribute: Attribute;
  /** Retrieve a single attribute locale. */
  findAttributeLocale: AttributeLocale;
  /** Retrieve a single attribute meta. */
  findAttributeMeta: AttributeMeta;
  /** Retrieve a single attribute meta datakeeper. */
  findAttributeMetaDatakeeper: AttributeMetaDatakeeper;
  /** Retrieve a single attribute meta digidentity. */
  findAttributeMetaDigidentity: AttributeMetaDigidentity;
  /** Retrieve a single attribute meta mdoc. */
  findAttributeMetaMDOC: AttributeMetaMdoc;
  /** Retrieve a single attribute meta NL Wallet. */
  findAttributeMetaNLWallet: AttributeMetaNlWallet;
  /** Retrieve a single attribute meta nect. */
  findAttributeMetaNect: AttributeMetaNect;
  /** Retrieve a single attribute meta OID4VC. */
  findAttributeMetaOID4VCMDOC: AttributeMetaOid4Vcmdoc;
  /** Retrieve a single attribute meta OID4VC. */
  findAttributeMetaOID4VCSDJWT: AttributeMetaOid4Vcsdjwt;
  /** Retrieve a single attribute meta ReadID. */
  findAttributeMetaReadID: AttributeMetaReadId;
  /** Retrieve a single attribute meta truid. */
  findAttributeMetaTruid: AttributeMetaTruid;
  /** Retrieve a single attribute meta yivi. */
  findAttributeMetaYivi: AttributeMetaYivi;
  /** Retrieve a single attribute meta yoti. */
  findAttributeMetaYoti: AttributeMetaYoti;
  /** Retrieve a single attribute request. */
  findAttributeRequest: AttributeRequest;
  /** Retrieve a single attribute request locale. */
  findAttributeRequestLocale: AttributeRequestLocale;
  /** Retrieve a single attribute request meta. */
  findAttributeRequestMeta: AttributeRequestMeta;
  /** Retrieve a single attribute request meta datakeeper. */
  findAttributeRequestMetaDatakeeper: AttributeRequestMetaDatakeeper;
  /** Retrieve a single attribute request meta yivi. */
  findAttributeRequestMetaYivi: AttributeRequestMetaYivi;
  /** Retrieve a single attribute request meta yoti. */
  findAttributeRequestMetaYoti: AttributeRequestMetaYoti;
  /** Find billing */
  findBilling: Billing;
  /** Find billing */
  findBillingMethod: BillingMethod;
  /** Find billing */
  findBillingPlan: BillingPlan;
  /** Find billing wallet transactions */
  findBillingPlanPayment: BillingPlanPayment;
  /** Find billing */
  findBillingWallet: BillingWallet;
  /** Find billing wallet transactions */
  findBillingWalletPayment: BillingWalletPayment;
  /** Find billing wallet transactions */
  findBillingWalletTransaction: BillingWalletTransaction;
  /** Retrieve a single credential. */
  findCredential: Credential;
  /** Retrieve a single credential locale. */
  findCredentialLocale: CredentialLocale;
  /** Retrieve a single credential meta. */
  findCredentialMeta: CredentialMeta;
  /** Retrieve a single credential meta datakeeper. */
  findCredentialMetaDatakeeper: CredentialMetaDatakeeper;
  /** Retrieve a single credential meta digidentity. */
  findCredentialMetaDigidentity: CredentialMetaDigidentity;
  /** Retrieve a single credential meta mdoc. */
  findCredentialMetaMDOC: CredentialMetaMdoc;
  /** Retrieve a single credential meta NL Wallet. */
  findCredentialMetaNLWallet: CredentialMetaNlWallet;
  /** Retrieve a single credential meta nect. */
  findCredentialMetaNect: CredentialMetaNect;
  /** Retrieve a single credential meta OID4VC mdoc. */
  findCredentialMetaOID4VCMDOC: CredentialMetaOid4Vcmdoc;
  /** Retrieve a single credential meta OID4VC SD-JWT. */
  findCredentialMetaOID4VCSDJWT: CredentialMetaOid4Vcsdjwt;
  /** Retrieve a single credential meta ReadID. */
  findCredentialMetaReadID: CredentialMetaReadId;
  /** Retrieve a single credential meta truid. */
  findCredentialMetaTruid: CredentialMetaTruid;
  /** Retrieve a single credential meta yivi. */
  findCredentialMetaYivi: CredentialMetaYivi;
  /** Retrieve a single credential meta yoti. */
  findCredentialMetaYoti: CredentialMetaYoti;
  /** Retrieve a single credential request. */
  findCredentialRequest: CredentialRequest;
  /** Retrieve a single credential request locale. */
  findCredentialRequestLocale: CredentialRequestLocale;
  /** Retrieve a single credential request meta. */
  findCredentialRequestMeta: CredentialRequestMeta;
  /** Retrieve a single credential request meta datakeeper. */
  findCredentialRequestMetaDatakeeper: CredentialRequestMetaDatakeeper;
  /** Retrieve a single credential request meta yivi. */
  findCredentialRequestMetaYivi: CredentialRequestMetaYivi;
  /** Retrieve a single credential request meta yoti. */
  findCredentialRequestMetaYoti: CredentialRequestMetaYoti;
  /** Retrieve a single credential request state. */
  findCredentialRequestState: CredentialRequestState;
  /** Retrieve a single credentialRequestState locale. */
  findCredentialRequestStateLocale: CredentialRequestStateLocale;
  /** Retrieve a single credential request workflow. */
  findCredentialRequestWorkflow: CredentialRequestWorkflow;
  /** Retrieve a single flow authentication. */
  findFlowAuthentication: FlowAuthentication;
  /** Get brand */
  findFlowAuthenticationBrand: FlowAuthenticationBrand;
  /** Get domain */
  findFlowAuthenticationDomain: FlowAuthenticationDomain;
  /** Retrieve a single flow authentication log. */
  findFlowAuthenticationLog: FlowAuthenticationLog;
  /** Retrieve a single flow authentication provider. */
  findFlowAuthenticationProvider: FlowAuthenticationProvider;
  /** Retrieve a single FlowAuthenticationProviderConfiguration. */
  findFlowAuthenticationProviderConfiguration: FlowAuthenticationProviderConfiguration;
  /** Retrieve a single credential meta NL Wallet. */
  findFlowAuthenticationProviderConfigurationNLWallet: FlowAuthenticationProviderConfigurationNlWallet;
  /** Retrieve a single flow authentication scopes. */
  findFlowAuthenticationScope: FlowAuthenticationScope;
  /** Retrieve a single flow disclosure. */
  findFlowDisclosure: FlowDisclosure;
  /** Retreive a single flow disclosure attribute. */
  findFlowDisclosureAttribute: FlowDisclosureAttribute;
  /** Get brand */
  findFlowDisclosureBrand: FlowDisclosureBrand;
  /** Retrieve a single flow disclosure credential. */
  findFlowDisclosureCredential: FlowDisclosureCredential;
  /** Get domain */
  findFlowDisclosureDomain: FlowDisclosureDomain;
  /** Retrieve a single flow disclosure groups. */
  findFlowDisclosureGroup: FlowDisclosureGroup;
  /** Retrieve a single flow disclosure log. */
  findFlowDisclosureLog: FlowDisclosureLog;
  /** Get mapping */
  findFlowDisclosureMapping: FlowDisclosureMapping;
  /** Retrieve a single flow disclosure provider. */
  findFlowDisclosureProvider: FlowDisclosureProvider;
  /** Retrieve a single FlowDisclosureProviderConfiguration. */
  findFlowDisclosureProviderConfiguration: FlowDisclosureProviderConfiguration;
  /** Retrieve a single credential meta NL Wallet. */
  findFlowDisclosureProviderConfigurationNLWallet: FlowDisclosureProviderConfigurationNlWallet;
  /** Retrieve a single flow issuance. */
  findFlowIssuance: FlowIssuance;
  /** Retrieve a single flow issuance attribute. */
  findFlowIssuanceAttribute: FlowIssuanceAttribute;
  /** Get brand */
  findFlowIssuanceBrand: FlowIssuanceBrand;
  /** Retrieve a single flow issuance credential. */
  findFlowIssuanceCredential: FlowIssuanceCredential;
  /** Retrieve a single flow issuance credential meta. */
  findFlowIssuanceCredentialMeta: FlowIssuanceCredentialMeta;
  /** Retrieve a single flow issuance credential meta datakeeper. */
  findFlowIssuanceCredentialMetaDatakeeper: FlowIssuanceCredentialMetaDatakeeper;
  /** Retrieve a single flow issuance credential meta yivi. */
  findFlowIssuanceCredentialMetaYivi: FlowIssuanceCredentialMetaYivi;
  /** Get domain */
  findFlowIssuanceDomain: FlowIssuanceDomain;
  /** Retrieve a single flow issuance log. */
  findFlowIssuanceLog: FlowIssuanceLog;
  /** Get mapping */
  findFlowIssuanceMapping: FlowIssuanceMapping;
  /** Retrieve a single flow issuance provider. */
  findFlowIssuanceProvider: FlowIssuanceProvider;
  /** Retrieve a single flow signature. */
  findFlowSignature: FlowSignature;
  /** Retreive a single flow signature attribute. */
  findFlowSignatureAttribute: FlowSignatureAttribute;
  /** Get brand */
  findFlowSignatureBrand: FlowSignatureBrand;
  /** Retrieve a single flow signature credential. */
  findFlowSignatureCredential: FlowSignatureCredential;
  /** Get domain */
  findFlowSignatureDomain: FlowSignatureDomain;
  /** Retrieve a single flow signature groups. */
  findFlowSignatureGroup: FlowSignatureGroup;
  /** Retrieve a single flow signature log. */
  findFlowSignatureLog: FlowSignatureLog;
  /** Get mapping */
  findFlowSignatureMapping: FlowSignatureMapping;
  /** Retrieve a single flow signature provider. */
  findFlowSignatureProvider: FlowSignatureProvider;
  /** Retrieve a single FlowSignatureProviderConfiguration. */
  findFlowSignatureProviderConfiguration: FlowSignatureProviderConfiguration;
  /** Retrieve a single credential meta NL Wallet. */
  findFlowSignatureProviderConfigurationNLWallet: FlowSignatureProviderConfigurationNlWallet;
  findGlobalOAuthMethods?: Maybe<Array<Maybe<OAuthMethod>>>;
  /** Retrieve a single issuer. */
  findIssuer: Issuer;
  /** Retrieve a single issuer locale. */
  findIssuerLocale: IssuerLocale;
  /** Retrieve a single issuer meta. */
  findIssuerMeta: IssuerMeta;
  /** Retrieve a single issuer meta datakeeper. */
  findIssuerMetaDatakeeper: IssuerMetaDatakeeper;
  /** Retrieve a single issuer meta mdoc. */
  findIssuerMetaMDOC: IssuerMetaMdoc;
  /** Retrieve a single issuer meta OID4VC. */
  findIssuerMetaOID4VCMDOC: IssuerMetaOid4Vcmdoc;
  /** Retrieve a single issuer meta OID4VC. */
  findIssuerMetaOID4VCSDJWT: IssuerMetaOid4Vcsdjwt;
  /** Retrieve a single issuer meta yivi. */
  findIssuerMetaYivi: IssuerMetaYivi;
  /** Retrieve a single localeConfig. */
  findLocaleConfig: LocaleConfig;
  /** Retrieve many app locales. */
  findManyAppLocales: AppLocaleConnection;
  /** Retrieve many app prerequisite. */
  findManyAppPrerequisite: AppPrerequisiteConnection;
  /** Retrieve many appPrerequisite locales. */
  findManyAppPrerequisiteLocales: AppPrerequisiteLocaleConnection;
  /** Retrieve many app prerequisite state . */
  findManyAppPrerequisiteState: AppPrerequisiteStateConnection;
  /** Retrieve many appPrerequisiteState locales. */
  findManyAppPrerequisiteStateLocales: AppPrerequisiteStateLocaleConnection;
  /** Retreive many app. */
  findManyApps: AppConnection;
  /** Retrieve many attribute locales. */
  findManyAttributeLocales: AttributeLocaleConnection;
  /** Retrieve many attribute meta. */
  findManyAttributeMeta: AttributeMetaConnection;
  /** Retrieve many attribute meta datakeeper. */
  findManyAttributeMetaDatakeeper: AttributeMetaDatakeeperConnection;
  /** Retrieve many attribute meta digidentity. */
  findManyAttributeMetaDigidentity: AttributeMetaDigidentityConnection;
  /** Retrieve many attribute meta mdoc. */
  findManyAttributeMetaMDOC: AttributeMetaMdocConnection;
  /** Retrieve many attribute meta NL Wallet. */
  findManyAttributeMetaNLWallet: AttributeMetaNlWalletConnection;
  /** Retrieve many attribute meta nect. */
  findManyAttributeMetaNect: AttributeMetaNectConnection;
  /** Retrieve many attribute meta OID4VC. */
  findManyAttributeMetaOID4VCMDOC: AttributeMetaOid4VcmdocConnection;
  /** Retrieve many attribute meta OID4VC. */
  findManyAttributeMetaOID4VCSDJWT: AttributeMetaOid4VcsdjwtConnection;
  /** Retrieve many attribute meta ReadID. */
  findManyAttributeMetaReadID: AttributeMetaReadIdConnection;
  /** Retrieve many attribute meta truid. */
  findManyAttributeMetaTruid: AttributeMetaTruidConnection;
  /** Retrieve many attribute meta yivi. */
  findManyAttributeMetaYivi: AttributeMetaYiviConnection;
  /** Retrieve many attribute meta yoti. */
  findManyAttributeMetaYoti: AttributeMetaYotiConnection;
  /** Retrieve many attribute request. */
  findManyAttributeRequest: AttributeRequestConnection;
  /** Retrieve many attribute request locales. */
  findManyAttributeRequestLocales: AttributeRequestLocaleConnection;
  /** Retrieve many attribute request meta. */
  findManyAttributeRequestMeta: AttributeRequestMetaConnection;
  /** Retrieve many attribute request meta datakeeper. */
  findManyAttributeRequestMetaDatakeeper: AttributeRequestMetaDatakeeperConnection;
  /** Retrieve many attribute request meta yivi. */
  findManyAttributeRequestMetaYivi: AttributeRequestMetaYiviConnection;
  /** Retrieve many attribute request meta yoti. */
  findManyAttributeRequestMetaYoti: AttributeRequestMetaYotiConnection;
  /** Retrieve many attribute. */
  findManyAttributes: AttributeConnection;
  /** Retrieve a list of many billings. */
  findManyBillingMethods: BillingMethodConnection;
  /** Retrieve a list of many billing wallet transactions */
  findManyBillingPlanPayments: BillingPlanPaymentConnection;
  /** Retrieve a list of many billings. */
  findManyBillingPlans: BillingPlanConnection;
  /** Retrieve a list of many billing wallet transactions */
  findManyBillingWalletPayments: BillingWalletPaymentConnection;
  /** Retrieve a list of many billing wallet transactions */
  findManyBillingWalletTransactions: BillingWalletTransactionConnection;
  /** Retrieve a list of many billings. */
  findManyBillingWallets: BillingWalletConnection;
  /** Retrieve a list of many billings. */
  findManyBillings: BillingConnection;
  /** Retreive many credential locales. */
  findManyCredentialLocales: CredentialLocaleConnection;
  /** Retrieve many credential meta. */
  findManyCredentialMeta: CredentialMetaConnection;
  /** Retrieve many credential meta datakeeper. */
  findManyCredentialMetaDatakeeper: CredentialMetaDatakeeperConnection;
  /** Retrieve many credential meta digidentity. */
  findManyCredentialMetaDigidentity: CredentialMetaDigidentityConnection;
  /** Retrieve many credential meta mdoc. */
  findManyCredentialMetaMDOC: CredentialMetaMdocConnection;
  /** Retrieve many credential meta NL Wallet. */
  findManyCredentialMetaNLWallet: CredentialMetaNlWalletConnection;
  /** Retrieve many credential meta nect. */
  findManyCredentialMetaNect: CredentialMetaNectConnection;
  /** Retrieve many credential meta OID4VC mdoc. */
  findManyCredentialMetaOID4VCMDOC: CredentialMetaOid4VcmdocConnection;
  /** Retrieve many credential meta OID4VC SD-JWT. */
  findManyCredentialMetaOID4VCSDJWT: CredentialMetaOid4VcsdjwtConnection;
  /** Retrieve many credential meta ReadID. */
  findManyCredentialMetaReadID: CredentialMetaReadIdConnection;
  /** Retrieve many credential meta truid. */
  findManyCredentialMetaTruid: CredentialMetaTruidConnection;
  /** Retrieve many credential meta yivi. */
  findManyCredentialMetaYivi: CredentialMetaYiviConnection;
  /** Retrieve many credential meta yoti. */
  findManyCredentialMetaYoti: CredentialMetaYotiConnection;
  /** Retrieve many credential request. */
  findManyCredentialRequest: CredentialRequestConnection;
  /** Retreive many credential request locales. */
  findManyCredentialRequestLocales: CredentialRequestLocaleConnection;
  /** Retrieve many credential request meta. */
  findManyCredentialRequestMeta: CredentialRequestMetaConnection;
  /** Retrieve many credential request meta datakeeper. */
  findManyCredentialRequestMetaDatakeeper: CredentialRequestMetaDatakeeperConnection;
  /** Retrieve many credential request meta yivi. */
  findManyCredentialRequestMetaYivi: CredentialRequestMetaYiviConnection;
  /** Retrieve many credential request meta yoti. */
  findManyCredentialRequestMetaYoti: CredentialRequestMetaYotiConnection;
  /** Retrieve many credential request state. */
  findManyCredentialRequestState: CredentialRequestStateConnection;
  /** Retrieve many credentialRequestState locales. */
  findManyCredentialRequestStateLocales: CredentialRequestStateLocaleConnection;
  /** Retrieve many credential request workflow. */
  findManyCredentialRequestWorkflow: CredentialRequestWorkflowConnection;
  /** Retreive many credential. */
  findManyCredentials: CredentialConnection;
  /** Retrieve a list of many brands. */
  findManyFlowAuthenticationBrands: FlowAuthenticationBrandConnection;
  /** Retrieve a list of many domains. */
  findManyFlowAuthenticationDomains: FlowAuthenticationDomainConnection;
  /** Retreive many flow authentications log. */
  findManyFlowAuthenticationLogs: FlowAuthenticationLogConnection;
  /** Retrieve many credential meta NL Wallet. */
  findManyFlowAuthenticationProviderConfigurationNLWallets: FlowAuthenticationProviderConfigurationNlWalletConnection;
  /** Retrieve many FlowAuthenticationProviderConfiguration. */
  findManyFlowAuthenticationProviderConfigurations: FlowAuthenticationProviderConfigurationConnection;
  /** Retrieve many flow authentication providers. */
  findManyFlowAuthenticationProviders: FlowAuthenticationProviderConnection;
  /** Retrieve many flow authentication scopes. */
  findManyFlowAuthenticationScopes: FlowAuthenticationScopeConnection;
  /** Retreive many flow authentications. */
  findManyFlowAuthentications: FlowAuthenticationConnection;
  /** Retrieve many flow disclosure attributes. */
  findManyFlowDisclosureAttributes: FlowDisclosureAttributeConnection;
  /** Retrieve a list of many brands. */
  findManyFlowDisclosureBrands: FlowDisclosureBrandConnection;
  /** Retrieve many flow disclosure credentials. */
  findManyFlowDisclosureCredentials: FlowDisclosureCredentialConnection;
  /** Retrieve a list of many domains. */
  findManyFlowDisclosureDomains: FlowDisclosureDomainConnection;
  /** Retrieve many flow disclosure groups. */
  findManyFlowDisclosureGroups: FlowDisclosureGroupConnection;
  /** Retreive many flow disclosures log. */
  findManyFlowDisclosureLogs: FlowDisclosureLogConnection;
  /** Retrieve a list of many mappings. */
  findManyFlowDisclosureMappings: FlowDisclosureMappingConnection;
  /** Retrieve many credential meta NL Wallet. */
  findManyFlowDisclosureProviderConfigurationNLWallets: FlowDisclosureProviderConfigurationNlWalletConnection;
  /** Retrieve many FlowDisclosureProviderConfiguration. */
  findManyFlowDisclosureProviderConfigurations: FlowDisclosureProviderConfigurationConnection;
  /** Retrieve many flow disclosure providers. */
  findManyFlowDisclosureProviders: FlowDisclosureProviderConnection;
  /** Retreive many flow disclosures. */
  findManyFlowDisclosures: FlowDisclosureConnection;
  /** Retrieve many flow issuance attributes. */
  findManyFlowIssuanceAttributes: FlowIssuanceAttributeConnection;
  /** Retrieve a list of many brands. */
  findManyFlowIssuanceBrands: FlowIssuanceBrandConnection;
  /** Retrieve many flow issuance credential meta. */
  findManyFlowIssuanceCredentialMeta: FlowIssuanceCredentialMetaConnection;
  /** Retrieve many flow issuance credential meta datakeeper. */
  findManyFlowIssuanceCredentialMetaDatakeeper: FlowIssuanceCredentialMetaDatakeeperConnection;
  /** Retrieve many flow issuance credential meta yivi. */
  findManyFlowIssuanceCredentialMetaYivi: FlowIssuanceCredentialMetaYiviConnection;
  /** Retrieve many flow issuance credentials. */
  findManyFlowIssuanceCredentials: FlowIssuanceCredentialConnection;
  /** Retrieve a list of many domains. */
  findManyFlowIssuanceDomains: FlowIssuanceDomainConnection;
  /** Retrieve many flow issuances log. */
  findManyFlowIssuanceLogs: FlowIssuanceLogConnection;
  /** Retrieve a list of many mappings. */
  findManyFlowIssuanceMappings: FlowIssuanceMappingConnection;
  /** Retrieve many flow issuance providers. */
  findManyFlowIssuanceProviders: FlowIssuanceProviderConnection;
  /** Retreive many flow issuances. */
  findManyFlowIssuances: FlowIssuanceConnection;
  /** Retrieve many flow signature attributes. */
  findManyFlowSignatureAttributes: FlowSignatureAttributeConnection;
  /** Retrieve a list of many brands. */
  findManyFlowSignatureBrands: FlowSignatureBrandConnection;
  /** Retrieve many flow signature credentials. */
  findManyFlowSignatureCredentials: FlowSignatureCredentialConnection;
  /** Retrieve a list of many domains. */
  findManyFlowSignatureDomains: FlowSignatureDomainConnection;
  /** Retrieve many flow signature groups. */
  findManyFlowSignatureGroups: FlowSignatureGroupConnection;
  /** Retreive many flow signatures log. */
  findManyFlowSignatureLogs: FlowSignatureLogConnection;
  /** Retrieve a list of many mappings. */
  findManyFlowSignatureMappings: FlowSignatureMappingConnection;
  /** Retrieve many credential meta NL Wallet. */
  findManyFlowSignatureProviderConfigurationNLWallets: FlowSignatureProviderConfigurationNlWalletConnection;
  /** Retrieve many FlowSignatureProviderConfiguration. */
  findManyFlowSignatureProviderConfigurations: FlowSignatureProviderConfigurationConnection;
  /** Retrieve many flow signature providers. */
  findManyFlowSignatureProviders: FlowSignatureProviderConnection;
  /** Retreive many flow signatures. */
  findManyFlowSignatures: FlowSignatureConnection;
  /** Retreive many issuer locales. */
  findManyIssuerLocales: IssuerLocaleConnection;
  /** Retrieve many issuer meta. */
  findManyIssuerMeta: IssuerMetaConnection;
  /** Retrieve many issuer meta datakeeper. */
  findManyIssuerMetaDatakeeper: IssuerMetaDatakeeperConnection;
  /** Retrieve many issuer meta mdoc. */
  findManyIssuerMetaMDOC: IssuerMetaMdocConnection;
  /** Retrieve many issuer meta OID4VC. */
  findManyIssuerMetaOID4VCMDOC: IssuerMetaOid4VcmdocConnection;
  /** Retrieve many issuer meta OID4VC. */
  findManyIssuerMetaOID4VCSDJWT: IssuerMetaOid4VcsdjwtConnection;
  /** Retrieve many issuer meta yivi. */
  findManyIssuerMetaYivi: IssuerMetaYiviConnection;
  /** Retreive many issuer. */
  findManyIssuers: IssuerConnection;
  /** Retrieve many localeConfig. */
  findManyLocaleConfigs: LocaleConfigConnection;
  /** Retrieve many mappingIssuance attributes. */
  findManyMappingIssuanceAttributes: MappingIssuanceAttributeConnection;
  /** Retrieve many mappingIssuance links. */
  findManyMappingIssuanceLinks: MappingIssuanceLinkConnection;
  /** Retrieve many mappingIssuances. */
  findManyMappingIssuances: MappingIssuanceConnection;
  /** Retrieve many mappingVerification attributes. */
  findManyMappingVerificationAttributes: MappingVerificationAttributeConnection;
  /** Retrieve many mappingVerification claims. */
  findManyMappingVerificationClaims: MappingVerificationClaimConnection;
  /** Retrieve many mappingVerification claims. */
  findManyMappingVerificationLinks: MappingVerificationLinkConnection;
  /** Retreive many mappingVerifications. */
  findManyMappingVerifications: MappingVerificationConnection;
  /** Retrieve a list of many oauthProviders. */
  findManyOAuthProviders: OAuthProviderConnection;
  /** Retrieve a list of many organization addresses. */
  findManyOrganizationAddresses: OrganizationAddressConnection;
  /** Retrieve a list of many organization alerts. */
  findManyOrganizationAlertDeprecations: OrganizationAlertDeprecationConnection;
  /** Retrieve a list of many organization alerts. */
  findManyOrganizationAlerts: OrganizationAlertConnection;
  /** Retrieve many organization app. */
  findManyOrganizationApp: OrganizationAppConnection;
  /** Retrieve many organization app meta. */
  findManyOrganizationAppMeta: OrganizationAppMetaConnection;
  /** Retrieve many organization app meta datakeeper. */
  findManyOrganizationAppMetaDatakeeper: OrganizationAppMetaDatakeeperConnection;
  /** Retrieve many organization app meta kiwa. */
  findManyOrganizationAppMetaKiwa: OrganizationAppMetaKiwaConnection;
  /** Retrieve many organization app meta yoti. */
  findManyOrganizationAppMetaYoti: OrganizationAppMetaYotiConnection;
  /** Retrieve many organization app prerequisite. */
  findManyOrganizationAppPrerequisite: OrganizationAppPrerequisiteConnection;
  /** Retrieve many organization app prerequisite workflow. */
  findManyOrganizationAppPrerequisiteWorkflow: OrganizationAppPrerequisiteWorkflowConnection;
  /** Retrieve a list of many brands. */
  findManyOrganizationBrands: OrganizationBrandConnection;
  /** Retrieve a list of many tokens. */
  findManyOrganizationClients: OrganizationClientConnection;
  /** Retrieve many OrganizationDomainOAuthProvider. */
  findManyOrganizationDomainOAuthProviders: OrganizationDomainOAuthProviderConnection;
  /** Retrieve a list of many domain validations. */
  findManyOrganizationDomainValidations: OrganizationDomainValidationConnection;
  /** Retrieve a list of many domains. */
  findManyOrganizationDomains: OrganizationDomainConnection;
  /** Retrieve a list of many organization addresses. */
  findManyOrganizationNotificationEvents: OrganizationNotificationEventConnection;
  /** Retrieve a list of many organization addresses. */
  findManyOrganizationNotifications: OrganizationNotificationConnection;
  /** FindMany OrganizationQuota. */
  findManyOrganizationQuotas: OrganizationQuotaConnection;
  /** Retrieve a list of many secrets. */
  findManyOrganizationSecrets: OrganizationSecretConnection;
  /** Retrieve a list of many users. */
  findManyOrganizationUsers: OrganizationUserConnection;
  /** Retrieve a list of many organizations. */
  findManyOrganizations: OrganizationConnection;
  /** Retrieve a list of organizations with active studio plan. */
  findManyOrganizationsWithStudioPlan: OrganizationConnection;
  /** Retrieve a list of many billings. */
  findManyPaymentProviderEvents: PaymentProviderEventConnection;
  /** Retrieve a list of many payment provider invoices. */
  findManyPaymentProviderInvoices: PaymentProviderInvoiceConnection;
  /** Retrieve a list of many billings. */
  findManyPaymentProviderMethods: PaymentProviderMethodConnection;
  /** Retrieve a list of many billings. */
  findManyPaymentProviderOrganizations: PaymentProviderOrganizationConnection;
  /** Retrieve a list of many billings. */
  findManyPaymentProviders: PaymentProviderConnection;
  /** Retrieve many metas. */
  findManyProviderAppMeta: ProviderAppMetaConnection;
  /** Retrieve multiple objects */
  findManyProviderAppMetaOID4VC: ProviderAppMetaOid4VcConnection;
  /** Retrieve many ProviderApp. */
  findManyProviderApps: ProviderAppConnection;
  /** Retreive many provider locales. */
  findManyProviderLocales: ProviderLocaleConnection;
  /** Retrieve many provider. */
  findManyProviders: ProviderConnection;
  /** Retrieve many provider. */
  findManyProvidersForOrganization: ProviderForOrganizationConnection;
  /** Retreive many scheme locales. */
  findManySchemeLocales: SchemeLocaleConnection;
  /** Retrieve many scheme. */
  findManySchemes: SchemeConnection;
  /** Retreive many scope claim. */
  findManyScopeClaims: ScopeClaimConnection;
  /** Retreive many scope locales. */
  findManyScopeLocales: ScopeLocaleConnection;
  /** Retreive many scope resource. */
  findManyScopeResources: ScopeResourceConnection;
  /** Retreive many scope. */
  findManyScopes: ScopeConnection;
  /** FindMany StudioPlanControlOverride. */
  findManyStudioPlanControlOverrides: StudioPlanControlOverrideConnection;
  /** FindMany StudioPlanControl. */
  findManyStudioPlanControls: StudioPlanControlConnection;
  /** FindMany StudioPlanInterval. */
  findManyStudioPlanIntervals: StudioPlanIntervalConnection;
  /** FindMany StudioPlanOrganization. */
  findManyStudioPlanOrganizations: StudioPlanOrganizationConnection;
  /** FindMany StudioPlan. */
  findManyStudioPlans: StudioPlanConnection;
  /** Retrieve a list of many userInvitations. */
  findManyUserInvitations: UserInvitationConnection;
  /** Retrieve a list of many users. */
  findManyUsers: UserConnection;
  /** Retrieve a single mappingIssuance. */
  findMappingIssuance: MappingIssuance;
  /** Retrieve a single mappingIssuance attribute. */
  findMappingIssuanceAttribute: MappingIssuanceAttribute;
  /** Retrieve a single mappingIssuance link. */
  findMappingIssuanceLink: MappingIssuanceLink;
  /** Retrieve a single mappingVerification. */
  findMappingVerification: MappingVerification;
  /** Retrieve a single mappingVerification attribute. */
  findMappingVerificationAttribute: MappingVerificationAttribute;
  /** Retrieve a single mappingVerification claim. */
  findMappingVerificationClaim: MappingVerificationClaim;
  /** Retrieve a single mappingVerification link. */
  findMappingVerificationLink: MappingVerificationLink;
  /** Retrieve current user */
  findMe: OrganizationUser;
  findOAuthMethodsByOrganizationDomain?: Maybe<Array<Maybe<OAuthMethod>>>;
  findOAuthProvider: OAuthProvider;
  findOrganization: Organization;
  findOrganizationAddress: OrganizationAddress;
  /** Retrieve an organization alert. */
  findOrganizationAlert: OrganizationAlert;
  /** Retrieve an organization alert. */
  findOrganizationAlertDeprecation: OrganizationAlertDeprecation;
  /** Retrieve a single organization app. */
  findOrganizationApp: OrganizationApp;
  /** Retrieve a single organization app meta. */
  findOrganizationAppMeta: OrganizationAppMeta;
  /** Retrieve a single organization app meta datakeeper. */
  findOrganizationAppMetaDatakeeper: OrganizationAppMetaDatakeeper;
  /** Retrieve a single organization app meta kiwa. */
  findOrganizationAppMetaKiwa: OrganizationAppMetaKiwa;
  /** Retrieve a single organization app meta yoti. */
  findOrganizationAppMetaYoti: OrganizationAppMetaYoti;
  /** Retrieve a single organization app prerequisite. */
  findOrganizationAppPrerequisite: OrganizationAppPrerequisite;
  /** Retrieve a single organization app prerequisite workflow. */
  findOrganizationAppPrerequisiteWorkflow: OrganizationAppPrerequisiteWorkflow;
  /** Get brand */
  findOrganizationBrand: OrganizationBrand;
  /** Get token */
  findOrganizationClient: OrganizationClient;
  /** Get domain */
  findOrganizationDomain: OrganizationDomain;
  /** Retrieve a single OrganizationDomainOAuthProvider. */
  findOrganizationDomainOAuthProvider: OrganizationDomainOAuthProvider;
  /** Get domain validation */
  findOrganizationDomainValidation: OrganizationDomainValidation;
  findOrganizationNotification: OrganizationNotification;
  /** Retrieve a findOrganizationNotificationEvent by uuid */
  findOrganizationNotificationEvent: OrganizationNotificationEvent;
  /** Find OrganizationQuota. */
  findOrganizationQuota: OrganizationQuota;
  /** Get secret */
  findOrganizationSecret: OrganizationSecret;
  /** Find user by UUID */
  findOrganizationUser: OrganizationUser;
  /** Find billing */
  findPaymentProvider: PaymentProvider;
  /** Find billing */
  findPaymentProviderEvent: PaymentProviderEvent;
  /** Find payment provider invoices */
  findPaymentProviderInvoice: PaymentProviderInvoice;
  /** Find billing */
  findPaymentProviderMethod: PaymentProviderMethod;
  /** Find billing */
  findPaymentProviderOrganization: PaymentProviderOrganization;
  /** Retrieve a single provider. */
  findProvider: Provider;
  /** Retrieve a single ProviderApp. */
  findProviderApp: ProviderApp;
  /** Retrieve a single meta. */
  findProviderAppMeta: ProviderAppMeta;
  /** Retrieve a single object */
  findProviderAppMetaOID4VC: ProviderAppMetaOid4Vc;
  /** Retrieve a single provider locale. */
  findProviderLocale: ProviderLocale;
  /** Retrieve a single scheme. */
  findScheme: Scheme;
  /** Retrieve a single scheme locale. */
  findSchemeLocale: SchemeLocale;
  /** Retrieve a single scope. */
  findScope: Scope;
  /** Retrieve a single scope claim. */
  findScopeClaim: ScopeClaim;
  /** Retrieve a single scope locale. */
  findScopeLocale: ScopeLocale;
  /** Retrieve a single scope resource. */
  findScopeResource: ScopeResource;
  /** Find StudioPlan. */
  findStudioPlan: StudioPlan;
  /** Find StudioPlanControl. */
  findStudioPlanControl: StudioPlanControl;
  /** Find StudioPlanControlOverride. */
  findStudioPlanControlOverride: StudioPlanControlOverride;
  /** Find StudioPlanInterval. */
  findStudioPlanInterval: StudioPlanInterval;
  /** Find StudioPlanOrganization. */
  findStudioPlanOrganization: StudioPlanOrganization;
  /** Find user by UUID */
  findUser: User;
  /** Find userInvitation by UUID */
  findUserInvitation: UserInvitation;
  /** Get payment provider invoice receipt */
  getPaymentProviderInvoiceReceipt: Scalars['URL']['output'];
};


export type QueryFindAppArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindAppLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindAppPrerequisiteArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindAppPrerequisiteLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindAppPrerequisiteStateArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindAppPrerequisiteStateLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindAttributeLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindAttributeMetaArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindAttributeMetaDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindAttributeMetaDigidentityArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindAttributeMetaMdocArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindAttributeMetaNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindAttributeMetaNectArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindAttributeMetaOid4VcmdocArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindAttributeMetaOid4VcsdjwtArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindAttributeMetaReadIdArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindAttributeMetaTruidArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindAttributeMetaYiviArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindAttributeMetaYotiArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindAttributeRequestArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindAttributeRequestLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindAttributeRequestMetaArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindAttributeRequestMetaDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindAttributeRequestMetaYiviArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindAttributeRequestMetaYotiArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindBillingArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindBillingMethodArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindBillingPlanArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindBillingPlanPaymentArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindBillingWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindBillingWalletPaymentArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindBillingWalletTransactionArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindCredentialArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindCredentialLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindCredentialMetaArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindCredentialMetaDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindCredentialMetaDigidentityArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindCredentialMetaMdocArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindCredentialMetaNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindCredentialMetaNectArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindCredentialMetaOid4VcmdocArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindCredentialMetaOid4VcsdjwtArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindCredentialMetaReadIdArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindCredentialMetaTruidArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindCredentialMetaYiviArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindCredentialMetaYotiArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindCredentialRequestArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindCredentialRequestLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindCredentialRequestMetaArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindCredentialRequestMetaDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindCredentialRequestMetaYiviArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindCredentialRequestMetaYotiArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindCredentialRequestStateArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindCredentialRequestStateLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindCredentialRequestWorkflowArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowAuthenticationArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowAuthenticationBrandArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryFindFlowAuthenticationDomainArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryFindFlowAuthenticationLogArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowAuthenticationProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowAuthenticationProviderConfigurationArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowAuthenticationProviderConfigurationNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowAuthenticationScopeArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowDisclosureArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowDisclosureAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowDisclosureBrandArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryFindFlowDisclosureCredentialArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowDisclosureDomainArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryFindFlowDisclosureGroupArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowDisclosureLogArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowDisclosureMappingArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryFindFlowDisclosureProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowDisclosureProviderConfigurationArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowDisclosureProviderConfigurationNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowIssuanceArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowIssuanceAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowIssuanceBrandArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryFindFlowIssuanceCredentialArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowIssuanceCredentialMetaArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowIssuanceCredentialMetaDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowIssuanceCredentialMetaYiviArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowIssuanceDomainArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryFindFlowIssuanceLogArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowIssuanceMappingArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryFindFlowIssuanceProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowSignatureArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowSignatureAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowSignatureBrandArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryFindFlowSignatureCredentialArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowSignatureDomainArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryFindFlowSignatureGroupArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowSignatureLogArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowSignatureMappingArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryFindFlowSignatureProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowSignatureProviderConfigurationArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindFlowSignatureProviderConfigurationNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindGlobalOAuthMethodsArgs = {
  input: FindGlobalOAuthMethodsInput;
};


export type QueryFindIssuerArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindIssuerLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindIssuerMetaArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindIssuerMetaDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindIssuerMetaMdocArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindIssuerMetaOid4VcmdocArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindIssuerMetaOid4VcsdjwtArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindIssuerMetaYiviArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindLocaleConfigArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindManyAppLocalesArgs = {
  input?: InputMaybe<FindManyAppLocaleInput>;
};


export type QueryFindManyAppPrerequisiteArgs = {
  input?: InputMaybe<FindManyAppPrerequisitesInput>;
};


export type QueryFindManyAppPrerequisiteLocalesArgs = {
  input?: InputMaybe<FindManyAppPrerequisiteLocaleInput>;
};


export type QueryFindManyAppPrerequisiteStateArgs = {
  input?: InputMaybe<FindManyAppPrerequisiteStateInput>;
};


export type QueryFindManyAppPrerequisiteStateLocalesArgs = {
  input?: InputMaybe<FindManyAppPrerequisiteStateLocaleInput>;
};


export type QueryFindManyAppsArgs = {
  input?: InputMaybe<FindManyAppsInput>;
};


export type QueryFindManyAttributeLocalesArgs = {
  input?: InputMaybe<FindManyAttributeLocaleInput>;
};


export type QueryFindManyAttributeMetaArgs = {
  input?: InputMaybe<FindManyAttributeMetaInput>;
};


export type QueryFindManyAttributeMetaDatakeeperArgs = {
  input?: InputMaybe<FindManyAttributeMetaDatakeeperInput>;
};


export type QueryFindManyAttributeMetaDigidentityArgs = {
  input?: InputMaybe<FindManyAttributeMetaDigidentityInput>;
};


export type QueryFindManyAttributeMetaMdocArgs = {
  input?: InputMaybe<FindManyAttributeMetaMdocInput>;
};


export type QueryFindManyAttributeMetaNlWalletArgs = {
  input?: InputMaybe<FindManyAttributeMetaNlWalletInput>;
};


export type QueryFindManyAttributeMetaNectArgs = {
  input?: InputMaybe<FindManyAttributeMetaNectInput>;
};


export type QueryFindManyAttributeMetaOid4VcmdocArgs = {
  input?: InputMaybe<FindManyAttributeMetaOid4VcmdocInput>;
};


export type QueryFindManyAttributeMetaOid4VcsdjwtArgs = {
  input?: InputMaybe<FindManyAttributeMetaOid4VcsdjwtInput>;
};


export type QueryFindManyAttributeMetaReadIdArgs = {
  input?: InputMaybe<FindManyAttributeMetaReadIdInput>;
};


export type QueryFindManyAttributeMetaTruidArgs = {
  input?: InputMaybe<FindManyAttributeMetaTruidInput>;
};


export type QueryFindManyAttributeMetaYiviArgs = {
  input?: InputMaybe<FindManyAttributeMetaYiviInput>;
};


export type QueryFindManyAttributeMetaYotiArgs = {
  input?: InputMaybe<FindManyAttributeMetaYotiInput>;
};


export type QueryFindManyAttributeRequestArgs = {
  input?: InputMaybe<FindManyAttributeRequestsInput>;
};


export type QueryFindManyAttributeRequestLocalesArgs = {
  input?: InputMaybe<FindManyAttributeRequestLocaleInput>;
};


export type QueryFindManyAttributeRequestMetaArgs = {
  input?: InputMaybe<FindManyAttributeRequestMetaInput>;
};


export type QueryFindManyAttributeRequestMetaDatakeeperArgs = {
  input?: InputMaybe<FindManyAttributeRequestMetaDatakeeperInput>;
};


export type QueryFindManyAttributeRequestMetaYiviArgs = {
  input?: InputMaybe<FindManyAttributeRequestMetaYiviInput>;
};


export type QueryFindManyAttributeRequestMetaYotiArgs = {
  input?: InputMaybe<FindManyAttributeRequestMetaYotiInput>;
};


export type QueryFindManyAttributesArgs = {
  input?: InputMaybe<FindManyAttributesInput>;
};


export type QueryFindManyBillingMethodsArgs = {
  input?: InputMaybe<FindManyBillingMethodsInput>;
};


export type QueryFindManyBillingPlanPaymentsArgs = {
  input?: InputMaybe<FindManyBillingPlanPaymentsInput>;
};


export type QueryFindManyBillingPlansArgs = {
  input?: InputMaybe<FindManyBillingPlansInput>;
};


export type QueryFindManyBillingWalletPaymentsArgs = {
  input?: InputMaybe<FindManyBillingWalletPaymentsInput>;
};


export type QueryFindManyBillingWalletTransactionsArgs = {
  input?: InputMaybe<FindManyBillingWalletTransactionsInput>;
};


export type QueryFindManyBillingWalletsArgs = {
  input?: InputMaybe<FindManyBillingWalletsInput>;
};


export type QueryFindManyBillingsArgs = {
  input?: InputMaybe<FindManyBillingsInput>;
};


export type QueryFindManyCredentialLocalesArgs = {
  input?: InputMaybe<FindManyCredentialLocaleInput>;
};


export type QueryFindManyCredentialMetaArgs = {
  input?: InputMaybe<FindManyCredentialMetaInput>;
};


export type QueryFindManyCredentialMetaDatakeeperArgs = {
  input?: InputMaybe<FindManyCredentialMetaDatakeeperInput>;
};


export type QueryFindManyCredentialMetaDigidentityArgs = {
  input?: InputMaybe<FindManyCredentialMetaDigidentityInput>;
};


export type QueryFindManyCredentialMetaMdocArgs = {
  input?: InputMaybe<FindManyCredentialMetaMdocInput>;
};


export type QueryFindManyCredentialMetaNlWalletArgs = {
  input?: InputMaybe<FindManyCredentialMetaNlWalletInput>;
};


export type QueryFindManyCredentialMetaNectArgs = {
  input?: InputMaybe<FindManyCredentialMetaNectInput>;
};


export type QueryFindManyCredentialMetaOid4VcmdocArgs = {
  input?: InputMaybe<FindManyCredentialMetaOid4VcmdocInput>;
};


export type QueryFindManyCredentialMetaOid4VcsdjwtArgs = {
  input?: InputMaybe<FindManyCredentialMetaOid4VcsdjwtInput>;
};


export type QueryFindManyCredentialMetaReadIdArgs = {
  input?: InputMaybe<FindManyCredentialMetaReadIdInput>;
};


export type QueryFindManyCredentialMetaTruidArgs = {
  input?: InputMaybe<FindManyCredentialMetaTruidInput>;
};


export type QueryFindManyCredentialMetaYiviArgs = {
  input?: InputMaybe<FindManyCredentialMetaYiviInput>;
};


export type QueryFindManyCredentialMetaYotiArgs = {
  input?: InputMaybe<FindManyCredentialMetaYotiInput>;
};


export type QueryFindManyCredentialRequestArgs = {
  input?: InputMaybe<FindManyCredentialRequestsInput>;
};


export type QueryFindManyCredentialRequestLocalesArgs = {
  input?: InputMaybe<FindManyCredentialRequestLocaleInput>;
};


export type QueryFindManyCredentialRequestMetaArgs = {
  input?: InputMaybe<FindManyCredentialRequestMetaInput>;
};


export type QueryFindManyCredentialRequestMetaDatakeeperArgs = {
  input?: InputMaybe<FindManyCredentialRequestMetaDatakeeperInput>;
};


export type QueryFindManyCredentialRequestMetaYiviArgs = {
  input?: InputMaybe<FindManyCredentialRequestMetaYiviInput>;
};


export type QueryFindManyCredentialRequestMetaYotiArgs = {
  input?: InputMaybe<FindManyCredentialRequestMetaYotiInput>;
};


export type QueryFindManyCredentialRequestStateArgs = {
  input?: InputMaybe<FindManyCredentialRequestStateInput>;
};


export type QueryFindManyCredentialRequestStateLocalesArgs = {
  input?: InputMaybe<FindManyCredentialRequestStateLocaleInput>;
};


export type QueryFindManyCredentialRequestWorkflowArgs = {
  input?: InputMaybe<FindManyCredentialRequestWorkflowInput>;
};


export type QueryFindManyCredentialsArgs = {
  input?: InputMaybe<FindManyCredentialsInput>;
};


export type QueryFindManyFlowAuthenticationBrandsArgs = {
  input?: InputMaybe<FindManyFlowAuthenticationBrandsInput>;
};


export type QueryFindManyFlowAuthenticationDomainsArgs = {
  input?: InputMaybe<FindManyFlowAuthenticationDomainsInput>;
};


export type QueryFindManyFlowAuthenticationLogsArgs = {
  input?: InputMaybe<FindManyFlowAuthenticationLogsInput>;
};


export type QueryFindManyFlowAuthenticationProviderConfigurationNlWalletsArgs = {
  input?: InputMaybe<FindManyFlowAuthenticationProviderConfigurationNlWalletsInput>;
};


export type QueryFindManyFlowAuthenticationProviderConfigurationsArgs = {
  input?: InputMaybe<FindManyFlowAuthenticationProviderConfigurationsInput>;
};


export type QueryFindManyFlowAuthenticationProvidersArgs = {
  input?: InputMaybe<FindManyFlowAuthenticationProvidersInput>;
};


export type QueryFindManyFlowAuthenticationScopesArgs = {
  input?: InputMaybe<FindManyFlowAuthenticationScopesInput>;
};


export type QueryFindManyFlowAuthenticationsArgs = {
  input?: InputMaybe<FindManyFlowAuthenticationsInput>;
};


export type QueryFindManyFlowDisclosureAttributesArgs = {
  input?: InputMaybe<FindManyFlowDisclosureAttributesInput>;
};


export type QueryFindManyFlowDisclosureBrandsArgs = {
  input?: InputMaybe<FindManyFlowDisclosureBrandsInput>;
};


export type QueryFindManyFlowDisclosureCredentialsArgs = {
  input?: InputMaybe<FindManyFlowDisclosureCredentialsInput>;
};


export type QueryFindManyFlowDisclosureDomainsArgs = {
  input?: InputMaybe<FindManyFlowDisclosureDomainsInput>;
};


export type QueryFindManyFlowDisclosureGroupsArgs = {
  input?: InputMaybe<FindManyFlowDisclosureGroupsInput>;
};


export type QueryFindManyFlowDisclosureLogsArgs = {
  input?: InputMaybe<FindManyFlowDisclosureLogsInput>;
};


export type QueryFindManyFlowDisclosureMappingsArgs = {
  input?: InputMaybe<FindManyFlowDisclosureMappingsInput>;
};


export type QueryFindManyFlowDisclosureProviderConfigurationNlWalletsArgs = {
  input?: InputMaybe<FindManyFlowDisclosureProviderConfigurationNlWalletsInput>;
};


export type QueryFindManyFlowDisclosureProviderConfigurationsArgs = {
  input?: InputMaybe<FindManyFlowDisclosureProviderConfigurationsInput>;
};


export type QueryFindManyFlowDisclosureProvidersArgs = {
  input?: InputMaybe<FindManyFlowDisclosureProvidersInput>;
};


export type QueryFindManyFlowDisclosuresArgs = {
  input?: InputMaybe<FindManyFlowDisclosuresInput>;
};


export type QueryFindManyFlowIssuanceAttributesArgs = {
  input?: InputMaybe<FindManyFlowIssuanceAttributesInput>;
};


export type QueryFindManyFlowIssuanceBrandsArgs = {
  input?: InputMaybe<FindManyFlowIssuanceBrandsInput>;
};


export type QueryFindManyFlowIssuanceCredentialMetaArgs = {
  input?: InputMaybe<FindManyFlowIssuanceCredentialMetaInput>;
};


export type QueryFindManyFlowIssuanceCredentialMetaDatakeeperArgs = {
  input?: InputMaybe<FindManyFlowIssuanceCredentialMetaDatakeeperInput>;
};


export type QueryFindManyFlowIssuanceCredentialMetaYiviArgs = {
  input?: InputMaybe<FindManyFlowIssuanceCredentialMetaYiviInput>;
};


export type QueryFindManyFlowIssuanceCredentialsArgs = {
  input?: InputMaybe<FindManyFlowIssuanceCredentialsInput>;
};


export type QueryFindManyFlowIssuanceDomainsArgs = {
  input?: InputMaybe<FindManyFlowIssuanceDomainsInput>;
};


export type QueryFindManyFlowIssuanceLogsArgs = {
  input?: InputMaybe<FindManyFlowIssuanceLogsInput>;
};


export type QueryFindManyFlowIssuanceMappingsArgs = {
  input?: InputMaybe<FindManyFlowIssuanceMappingsInput>;
};


export type QueryFindManyFlowIssuanceProvidersArgs = {
  input?: InputMaybe<FindManyFlowIssuanceProvidersInput>;
};


export type QueryFindManyFlowIssuancesArgs = {
  input?: InputMaybe<FindManyFlowIssuancesInput>;
};


export type QueryFindManyFlowSignatureAttributesArgs = {
  input?: InputMaybe<FindManyFlowSignatureAttributesInput>;
};


export type QueryFindManyFlowSignatureBrandsArgs = {
  input?: InputMaybe<FindManyFlowSignatureBrandsInput>;
};


export type QueryFindManyFlowSignatureCredentialsArgs = {
  input?: InputMaybe<FindManyFlowSignatureCredentialsInput>;
};


export type QueryFindManyFlowSignatureDomainsArgs = {
  input?: InputMaybe<FindManyFlowSignatureDomainsInput>;
};


export type QueryFindManyFlowSignatureGroupsArgs = {
  input?: InputMaybe<FindManyFlowSignatureGroupsInput>;
};


export type QueryFindManyFlowSignatureLogsArgs = {
  input?: InputMaybe<FindManyFlowSignatureLogsInput>;
};


export type QueryFindManyFlowSignatureMappingsArgs = {
  input?: InputMaybe<FindManyFlowSignatureMappingsInput>;
};


export type QueryFindManyFlowSignatureProviderConfigurationNlWalletsArgs = {
  input?: InputMaybe<FindManyFlowSignatureProviderConfigurationNlWalletsInput>;
};


export type QueryFindManyFlowSignatureProviderConfigurationsArgs = {
  input?: InputMaybe<FindManyFlowSignatureProviderConfigurationsInput>;
};


export type QueryFindManyFlowSignatureProvidersArgs = {
  input?: InputMaybe<FindManyFlowSignatureProvidersInput>;
};


export type QueryFindManyFlowSignaturesArgs = {
  input?: InputMaybe<FindManyFlowSignaturesInput>;
};


export type QueryFindManyIssuerLocalesArgs = {
  input?: InputMaybe<FindManyIssuerLocaleInput>;
};


export type QueryFindManyIssuerMetaArgs = {
  input?: InputMaybe<FindManyIssuerMetaInput>;
};


export type QueryFindManyIssuerMetaDatakeeperArgs = {
  input?: InputMaybe<FindManyIssuerMetaDatakeeperInput>;
};


export type QueryFindManyIssuerMetaMdocArgs = {
  input?: InputMaybe<FindManyIssuerMetaMdocInput>;
};


export type QueryFindManyIssuerMetaOid4VcmdocArgs = {
  input?: InputMaybe<FindManyIssuerMetaOid4VcmdocInput>;
};


export type QueryFindManyIssuerMetaOid4VcsdjwtArgs = {
  input?: InputMaybe<FindManyIssuerMetaOid4VcsdjwtInput>;
};


export type QueryFindManyIssuerMetaYiviArgs = {
  input?: InputMaybe<FindManyIssuerMetaYiviInput>;
};


export type QueryFindManyIssuersArgs = {
  input?: InputMaybe<FindManyIssuersInput>;
};


export type QueryFindManyLocaleConfigsArgs = {
  input?: InputMaybe<FindManyLocaleConfigsInput>;
};


export type QueryFindManyMappingIssuanceAttributesArgs = {
  input?: InputMaybe<FindManyMappingIssuanceAttributesInput>;
};


export type QueryFindManyMappingIssuanceLinksArgs = {
  input?: InputMaybe<FindManyMappingIssuanceLinksInput>;
};


export type QueryFindManyMappingIssuancesArgs = {
  input?: InputMaybe<FindManyMappingIssuancesInput>;
};


export type QueryFindManyMappingVerificationAttributesArgs = {
  input?: InputMaybe<FindManyMappingVerificationAttributesInput>;
};


export type QueryFindManyMappingVerificationClaimsArgs = {
  input?: InputMaybe<FindManyMappingVerificationClaimsInput>;
};


export type QueryFindManyMappingVerificationLinksArgs = {
  input?: InputMaybe<FindManyMappingVerificationLinksInput>;
};


export type QueryFindManyMappingVerificationsArgs = {
  input?: InputMaybe<FindManyMappingVerificationsInput>;
};


export type QueryFindManyOAuthProvidersArgs = {
  input?: InputMaybe<FindManyOAuthProvidersInput>;
};


export type QueryFindManyOrganizationAddressesArgs = {
  input?: InputMaybe<FindManyOrganizationAddressesInput>;
};


export type QueryFindManyOrganizationAlertDeprecationsArgs = {
  input?: InputMaybe<FindManyOrganizationAlertDeprecationsInput>;
};


export type QueryFindManyOrganizationAlertsArgs = {
  input?: InputMaybe<FindManyOrganizationAlertsInput>;
};


export type QueryFindManyOrganizationAppArgs = {
  input?: InputMaybe<FindManyOrganizationAppsInput>;
};


export type QueryFindManyOrganizationAppMetaArgs = {
  input?: InputMaybe<FindManyOrganizationAppMetaInput>;
};


export type QueryFindManyOrganizationAppMetaDatakeeperArgs = {
  input?: InputMaybe<FindManyOrganizationAppMetaDatakeeperInput>;
};


export type QueryFindManyOrganizationAppMetaKiwaArgs = {
  input?: InputMaybe<FindManyOrganizationAppMetaKiwaInput>;
};


export type QueryFindManyOrganizationAppMetaYotiArgs = {
  input?: InputMaybe<FindManyOrganizationAppMetaYotiInput>;
};


export type QueryFindManyOrganizationAppPrerequisiteArgs = {
  input?: InputMaybe<FindManyOrganizationAppPrerequisiteInput>;
};


export type QueryFindManyOrganizationAppPrerequisiteWorkflowArgs = {
  input?: InputMaybe<FindManyOrganizationAppPrerequisiteWorkflowInput>;
};


export type QueryFindManyOrganizationBrandsArgs = {
  input?: InputMaybe<FindManyOrganizationBrandsInput>;
};


export type QueryFindManyOrganizationClientsArgs = {
  input?: InputMaybe<FindManyOrganizationClientsInput>;
};


export type QueryFindManyOrganizationDomainOAuthProvidersArgs = {
  input?: InputMaybe<FindManyOrganizationDomainOAuthProvidersInput>;
};


export type QueryFindManyOrganizationDomainValidationsArgs = {
  input?: InputMaybe<FindManyOrganizationDomainValidationsInput>;
};


export type QueryFindManyOrganizationDomainsArgs = {
  input?: InputMaybe<FindManyOrganizationDomainsInput>;
};


export type QueryFindManyOrganizationNotificationEventsArgs = {
  input?: InputMaybe<FindManyOrganizationNotificationEventsInput>;
};


export type QueryFindManyOrganizationNotificationsArgs = {
  input?: InputMaybe<FindManyOrganizationNotificationsInput>;
};


export type QueryFindManyOrganizationQuotasArgs = {
  input?: InputMaybe<FindManyOrganizationQuotasInput>;
};


export type QueryFindManyOrganizationSecretsArgs = {
  input?: InputMaybe<FindManyOrganizationSecretsInput>;
};


export type QueryFindManyOrganizationUsersArgs = {
  input?: InputMaybe<FindManyOrganizationUsersInput>;
};


export type QueryFindManyOrganizationsArgs = {
  input?: InputMaybe<FindManyOrganizationsInput>;
};


export type QueryFindManyOrganizationsWithStudioPlanArgs = {
  input?: InputMaybe<FindManyOrganizationsInput>;
  studioPlanUuid: Scalars['UUID']['input'];
};


export type QueryFindManyPaymentProviderEventsArgs = {
  input?: InputMaybe<FindManyPaymentProviderEventsInput>;
};


export type QueryFindManyPaymentProviderInvoicesArgs = {
  input?: InputMaybe<FindManyPaymentProviderInvoicesInput>;
};


export type QueryFindManyPaymentProviderMethodsArgs = {
  input?: InputMaybe<FindManyPaymentProviderMethodsInput>;
};


export type QueryFindManyPaymentProviderOrganizationsArgs = {
  input?: InputMaybe<FindManyPaymentProviderOrganizationsInput>;
};


export type QueryFindManyPaymentProvidersArgs = {
  input?: InputMaybe<FindManyPaymentProvidersInput>;
};


export type QueryFindManyProviderAppMetaArgs = {
  input?: InputMaybe<FindManyProviderAppMetaInput>;
};


export type QueryFindManyProviderAppMetaOid4VcArgs = {
  input?: InputMaybe<FindManyProviderAppMetaOid4VcInput>;
};


export type QueryFindManyProviderAppsArgs = {
  input?: InputMaybe<FindManyProviderAppsInput>;
};


export type QueryFindManyProviderLocalesArgs = {
  input?: InputMaybe<FindManyProviderLocaleInput>;
};


export type QueryFindManyProvidersArgs = {
  input?: InputMaybe<FindManyProvidersInput>;
};


export type QueryFindManyProvidersForOrganizationArgs = {
  input: FindManyProvidersForOrganizationInput;
};


export type QueryFindManySchemeLocalesArgs = {
  input?: InputMaybe<FindManySchemeLocaleInput>;
};


export type QueryFindManySchemesArgs = {
  input?: InputMaybe<FindManySchemesInput>;
};


export type QueryFindManyScopeClaimsArgs = {
  input?: InputMaybe<FindManyScopeClaimsInput>;
};


export type QueryFindManyScopeLocalesArgs = {
  input?: InputMaybe<FindManyScopeLocaleInput>;
};


export type QueryFindManyScopeResourcesArgs = {
  input?: InputMaybe<FindManyScopeResourcesInput>;
};


export type QueryFindManyScopesArgs = {
  input?: InputMaybe<FindManyScopesInput>;
};


export type QueryFindManyStudioPlanControlOverridesArgs = {
  input?: InputMaybe<FindManyStudioPlanControlOverridesInput>;
};


export type QueryFindManyStudioPlanControlsArgs = {
  input?: InputMaybe<FindManyStudioPlanControlsInput>;
};


export type QueryFindManyStudioPlanIntervalsArgs = {
  input?: InputMaybe<FindManyStudioPlanIntervalsInput>;
};


export type QueryFindManyStudioPlanOrganizationsArgs = {
  input?: InputMaybe<FindManyStudioPlanOrganizationsInput>;
};


export type QueryFindManyStudioPlansArgs = {
  input?: InputMaybe<FindManyStudioPlansInput>;
};


export type QueryFindManyUserInvitationsArgs = {
  input?: InputMaybe<FindManyUserInvitationsInput>;
};


export type QueryFindManyUsersArgs = {
  input?: InputMaybe<FindManyUsersInput>;
};


export type QueryFindMappingIssuanceArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindMappingIssuanceAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindMappingIssuanceLinkArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindMappingVerificationArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindMappingVerificationAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindMappingVerificationClaimArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindMappingVerificationLinkArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindOAuthMethodsByOrganizationDomainArgs = {
  input: FindOAuthMethodsByOrganizationDomainInput;
};


export type QueryFindOAuthProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindOrganizationArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindOrganizationAddressArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindOrganizationAlertArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindOrganizationAlertDeprecationArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindOrganizationAppArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindOrganizationAppMetaArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindOrganizationAppMetaDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindOrganizationAppMetaKiwaArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindOrganizationAppMetaYotiArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindOrganizationAppPrerequisiteArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindOrganizationAppPrerequisiteWorkflowArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindOrganizationBrandArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryFindOrganizationClientArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryFindOrganizationDomainArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryFindOrganizationDomainOAuthProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindOrganizationDomainValidationArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryFindOrganizationNotificationArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindOrganizationNotificationEventArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindOrganizationQuotaArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindOrganizationSecretArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryFindOrganizationUserArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindPaymentProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindPaymentProviderEventArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindPaymentProviderInvoiceArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindPaymentProviderMethodArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindPaymentProviderOrganizationArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindProviderAppArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindProviderAppMetaArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindProviderAppMetaOid4VcArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindProviderLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindSchemeArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindSchemeLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindScopeArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindScopeClaimArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindScopeLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindScopeResourceArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindStudioPlanArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindStudioPlanControlArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindStudioPlanControlOverrideArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindStudioPlanIntervalArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindStudioPlanOrganizationArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindUserArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryFindUserInvitationArgs = {
  uuid: Scalars['UUID']['input'];
};


export type QueryGetPaymentProviderInvoiceReceiptArgs = {
  invoiceId: Scalars['NonEmpty']['input'];
};

/** Register by OpenID token input */
export type RegisterByOpenIdTokenInput = {
  /** The organization description. */
  description: Scalars['NonEmpty']['input'];
  /** The OAuth provider UUID */
  oauthProviderUuid?: InputMaybe<Scalars['UUID']['input']>;
  /** The organization email */
  organizationEmail?: InputMaybe<Scalars['Email']['input']>;
  /** The organization name. */
  organizationName: Scalars['NonEmpty']['input'];
  /** The phone number of the organization. */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** The open id token which is obtained via SSI or an external OAuth provider. */
  token: Scalars['NonEmpty']['input'];
  /** The url of the website of the organization. */
  website: Scalars['URL']['input'];
};

/** Register by password input */
export type RegisterByPasswordInput = {
  /** The organization description. */
  description: Scalars['NonEmpty']['input'];
  /** The email address of the user. */
  email: Scalars['Email']['input'];
  /** The first name of the user. */
  firstName: Scalars['NonEmpty']['input'];
  /** The last name of the user. */
  lastName: Scalars['NonEmpty']['input'];
  /** The organization email */
  organizationEmail?: InputMaybe<Scalars['Email']['input']>;
  /** The organization name. */
  organizationName: Scalars['NonEmpty']['input'];
  /** The phone number of the organization. */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** The url of the website of the organization. */
  website: Scalars['URL']['input'];
};

/** Scheme definition. */
export type Scheme = Model & {
  __typename?: 'Scheme';
  /** The categories of the scheme */
  categories: Array<SchemeCategoryType>;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The collection of issuers */
  issuers: IssuerConnection;
  /** The collection of locale */
  locale: SchemeLocaleConnection;
  /** The name */
  name: Scalars['NonEmpty']['output'];
  /** The organization uuid */
  organizationUuid: Scalars['UUID']['output'];
  /** The provider, this scheme belongs to */
  provider: Provider;
  /** The state */
  state: State;
  /** The type */
  type: SchemeType;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** Scheme definition. */
export type SchemeIssuersArgs = {
  input?: InputMaybe<FindManyIssuersInput>;
};


/** Scheme definition. */
export type SchemeLocaleArgs = {
  input?: InputMaybe<FindManySchemeLocaleInput>;
};

/** Scheme category Type. */
export enum SchemeCategoryType {
  Development = 'DEVELOPMENT',
  Production = 'PRODUCTION',
  Test = 'TEST'
}

/** The scheme connection definition. */
export type SchemeConnection = {
  __typename?: 'SchemeConnection';
  edges: Array<Maybe<SchemeEdge>>;
  pageInfo: PageInfo;
};

/** The scheme edge definition. */
export type SchemeEdge = {
  __typename?: 'SchemeEdge';
  cursor: Scalars['String']['output'];
  node: Scheme;
};

/** Fields which can be used to filter scheme on. Value must be camel case. */
export enum SchemeFilteringField {
  Categories = 'categories',
  CreatedAt = 'createdAt',
  Name = 'name',
  ProviderUuid = 'providerUuid',
  State = 'state',
  Type = 'type',
  Uuid = 'uuid'
}

/** Scheme locale definition. */
export type SchemeLocale = Model & {
  __typename?: 'SchemeLocale';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The i18n object */
  i18n: Scalars['JSONObject']['output'];
  /** The locale */
  locale: Scalars['Locale']['output'];
  /** The scheme the locale belongs to. */
  scheme: Scheme;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The scheme locale connection definition. */
export type SchemeLocaleConnection = {
  __typename?: 'SchemeLocaleConnection';
  edges: Array<Maybe<SchemeLocaleEdge>>;
  pageInfo: PageInfo;
};

/** The scheme locale edge definition. */
export type SchemeLocaleEdge = {
  __typename?: 'SchemeLocaleEdge';
  cursor: Scalars['String']['output'];
  node: SchemeLocale;
};

/** Fields which can be used to filter scheme locale on. Value must be camel case. */
export enum SchemeLocaleFilteringField {
  Locale = 'locale',
  SchemeUuid = 'schemeUuid'
}

/** Fields which can be used to sort scheme locale on. Value must be camel case. */
export enum SchemeLocaleSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting scheme locale. */
export type SchemeLocaleSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: SchemeLocaleSortEnum;
};

/** Fields which can be used to sort scheme on. Value must be camel case. */
export enum SchemeSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  State = 'state'
}

/** Input options for sorting scheme. */
export type SchemeSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: SchemeSortEnum;
};

/** Types */
export enum SchemeType {
  Custom = 'CUSTOM',
  System = 'SYSTEM'
}

/** Scope definition. */
export type Scope = Model & {
  __typename?: 'Scope';
  /** The categories of the scope */
  categories?: Maybe<Array<ScopeCategoryType>>;
  /** The collection of claims */
  claims: ScopeClaimConnection;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The collection of locale */
  locale: ScopeLocaleConnection;
  /** The name */
  name: Scalars['NonEmpty']['output'];
  /** The provider app, this scope belongs to */
  providerApp: ProviderApp;
  /** The collection of resources */
  resources: ScopeResourceConnection;
  /** The scope */
  scope: Scalars['NonEmpty']['output'];
  /** The state */
  state: State;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** Scope definition. */
export type ScopeClaimsArgs = {
  input?: InputMaybe<FindManyScopeClaimsInput>;
};


/** Scope definition. */
export type ScopeLocaleArgs = {
  input?: InputMaybe<FindManyScopeLocaleInput>;
};


/** Scope definition. */
export type ScopeResourcesArgs = {
  input?: InputMaybe<FindManyScopeResourcesInput>;
};

/** Scope category type */
export enum ScopeCategoryType {
  Development = 'DEVELOPMENT',
  Production = 'PRODUCTION',
  Protected = 'PROTECTED',
  Test = 'TEST'
}

/** ScopeClaim definition. */
export type ScopeClaim = Model & {
  __typename?: 'ScopeClaim';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The name */
  name: Scalars['NonEmpty']['output'];
  /** The scope, this scope claim belongs to */
  scope: Scope;
  /** The transform function */
  transform: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The scope claim connection definition. */
export type ScopeClaimConnection = {
  __typename?: 'ScopeClaimConnection';
  edges: Array<Maybe<ScopeClaimEdge>>;
  pageInfo: PageInfo;
};

/** The scope claim edge definition. */
export type ScopeClaimEdge = {
  __typename?: 'ScopeClaimEdge';
  cursor: Scalars['String']['output'];
  node: ScopeClaim;
};

/** Fields which can be used to filter scope claim on. Value must be camel case. */
export enum ScopeClaimFilteringField {
  CreatedAt = 'createdAt',
  Name = 'name',
  ScopeUuid = 'scopeUuid'
}

/** Fields which can be used to sort scope claim on. Value must be camel case. */
export enum ScopeClaimSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name'
}

/** Input options for sorting scope claim. */
export type ScopeClaimSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: ScopeClaimSortEnum;
};

/** The scope connection definition. */
export type ScopeConnection = {
  __typename?: 'ScopeConnection';
  edges: Array<Maybe<ScopeEdge>>;
  pageInfo: PageInfo;
};

/** The scope edge definition. */
export type ScopeEdge = {
  __typename?: 'ScopeEdge';
  cursor: Scalars['String']['output'];
  node: Scope;
};

/** Fields which can be used to filter scope on. Value must be camel case. */
export enum ScopeFilteringField {
  Categories = 'categories',
  CreatedAt = 'createdAt',
  Name = 'name',
  ProviderAppUuid = 'providerAppUuid',
  State = 'state',
  Uuid = 'uuid'
}

/** Scope locale definition. */
export type ScopeLocale = Model & {
  __typename?: 'ScopeLocale';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The i18n object */
  i18n: Scalars['JSONObject']['output'];
  /** The locale */
  locale: Scalars['Locale']['output'];
  /** The scope the locale belongs to. */
  scope: Scope;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The scope locale connection definition. */
export type ScopeLocaleConnection = {
  __typename?: 'ScopeLocaleConnection';
  edges: Array<Maybe<ScopeLocaleEdge>>;
  pageInfo: PageInfo;
};

/** The scope locale edge definition. */
export type ScopeLocaleEdge = {
  __typename?: 'ScopeLocaleEdge';
  cursor: Scalars['String']['output'];
  node: ScopeLocale;
};

/** Fields which can be used to filter scope locale on. Value must be camel case. */
export enum ScopeLocaleFilteringField {
  Locale = 'locale',
  ScopeUuid = 'scopeUuid'
}

/** Fields which can be used to sort scope locale on. Value must be camel case. */
export enum ScopeLocaleSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting scope locale. */
export type ScopeLocaleSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: ScopeLocaleSortEnum;
};

/** ScopeResource definition. */
export type ScopeResource = Model & {
  __typename?: 'ScopeResource';
  /** The attribute, this scope resource refer to */
  attribute: Attribute;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The name */
  name: Scalars['NonEmpty']['output'];
  /** The scope, this scope resource belongs to */
  scope: Scope;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The scope resource connection definition. */
export type ScopeResourceConnection = {
  __typename?: 'ScopeResourceConnection';
  edges: Array<Maybe<ScopeResourceEdge>>;
  pageInfo: PageInfo;
};

/** The scope resource edge definition. */
export type ScopeResourceEdge = {
  __typename?: 'ScopeResourceEdge';
  cursor: Scalars['String']['output'];
  node: ScopeResource;
};

/** Fields which can be used to filter scope resource on. Value must be camel case. */
export enum ScopeResourceFilteringField {
  AttributeUuid = 'attributeUuid',
  CreatedAt = 'createdAt',
  Name = 'name',
  ScopeUuid = 'scopeUuid'
}

/** Fields which can be used to sort scope resource on. Value must be camel case. */
export enum ScopeResourceSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name'
}

/** Input options for sorting scope resource. */
export type ScopeResourceSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: ScopeResourceSortEnum;
};

/** Fields which can be used to sort scope on. Value must be camel case. */
export enum ScopeSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  State = 'state'
}

/** Input options for sorting scope. */
export type ScopeSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: ScopeSortEnum;
};

/** Input type used to create billing method types. */
export type SetupBillingMethodInput = {
  /** The uuid of billing */
  billingUuid: Scalars['UUID']['input'];
};

/** Output type used to create billing method types. */
export type SetupBillingMethodOutput = {
  __typename?: 'SetupBillingMethodOutput';
  /** A client secret to use to setup the method */
  clientSecret: Scalars['NonEmpty']['output'];
  /** The future billing method UUID on success */
  futureBillingMethodUuid: Scalars['UUID']['output'];
  /** A list of supported payment method types */
  paymentMethodTypes: Array<Scalars['NonEmpty']['output']>;
};

/** Lifecycle states */
export enum State {
  Active = 'ACTIVE',
  Deprecated = 'DEPRECATED',
  Inactive = 'INACTIVE'
}

/** Compact StudioPlanControl */
export type StudioControlCompact = {
  __typename?: 'StudioControlCompact';
  /** The JSON Value */
  args: Scalars['JSONObject']['output'];
  /** The associated StudioControl */
  controlURN: Scalars['URN']['output'];
};

/** StudioPlan */
export type StudioPlan = Model & {
  __typename?: 'StudioPlan';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The plan description */
  description: Scalars['NonEmpty']['output'];
  /** Eligible user organizations */
  isForAllOrganizations: Scalars['Boolean']['output'];
  /** The meta */
  meta: Scalars['JSONObject']['output'];
  /** The name */
  name: Scalars['NonEmpty']['output'];
  /** planURN */
  planURN: Scalars['NonEmpty']['output'];
  /** The state of the plan. */
  state: StudioPlanState;
  /** The associated studioPlanControls */
  studioPlanControls: StudioPlanControlConnection;
  /** The associated studioPlanIntervals */
  studioPlanIntervals: StudioPlanIntervalConnection;
  /** The associated studioPlanOrganizations */
  studioPlanOrganizations: StudioPlanOrganizationConnection;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** StudioPlan */
export type StudioPlanStudioPlanControlsArgs = {
  input?: InputMaybe<FindManyStudioPlanControlsInput>;
};


/** StudioPlan */
export type StudioPlanStudioPlanIntervalsArgs = {
  input?: InputMaybe<FindManyStudioPlanIntervalsInput>;
};


/** StudioPlan */
export type StudioPlanStudioPlanOrganizationsArgs = {
  input?: InputMaybe<FindManyStudioPlanOrganizationsInput>;
};

/** StudioPlanAction */
export enum StudioPlanAction {
  Activate = 'ACTIVATE',
  Deactivate = 'DEACTIVATE',
  Expire = 'EXPIRE'
}

/** The StudioPlan connection definition. */
export type StudioPlanConnection = {
  __typename?: 'StudioPlanConnection';
  edges: Array<Maybe<StudioPlanEdge>>;
  pageInfo: PageInfo;
};

/** StudioPlanControl */
export type StudioPlanControl = Model & {
  __typename?: 'StudioPlanControl';
  /** The JSON Value */
  args: Scalars['JSONObject']['output'];
  /** The associated StudioControl */
  controlURN: Scalars['URN']['output'];
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The associated StudioPlan  */
  studioPlan: StudioPlan;
  /** The associated StudioPlanControl overrides */
  studioPlanControlOverrides: StudioPlanControlOverrideConnection;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};

/** StudioPlanControlArgs */
export type StudioPlanControlArgs = {
  __typename?: 'StudioPlanControlArgs';
  /** The args */
  args: Scalars['JSONObject']['output'];
};

/** The StudioPlanControl connection definition. */
export type StudioPlanControlConnection = {
  __typename?: 'StudioPlanControlConnection';
  edges: Array<Maybe<StudioPlanControlEdge>>;
  pageInfo: PageInfo;
};

/** The StudioPlanControl edge definition. */
export type StudioPlanControlEdge = {
  __typename?: 'StudioPlanControlEdge';
  cursor: Scalars['String']['output'];
  node: StudioPlanControl;
};

/** Fields which can be used to filter StudioPlanControl on. Value must be camel case. */
export enum StudioPlanControlFilteringField {
  ControlUrn = 'controlURN',
  StudioPlanUuid = 'studioPlanUuid',
  Uuid = 'uuid'
}

/** StudioPlanControlOverride */
export type StudioPlanControlOverride = Model & {
  __typename?: 'StudioPlanControlOverride';
  /** The JSON Value */
  args: Scalars['JSONObject']['output'];
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The associated organization */
  organization: Organization;
  /** The associated StudioPlan  */
  studioPlanControl: StudioPlanControl;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};

/** The StudioPlanControlOverride connection definition. */
export type StudioPlanControlOverrideConnection = {
  __typename?: 'StudioPlanControlOverrideConnection';
  edges: Array<Maybe<StudioPlanControlOverrideEdge>>;
  pageInfo: PageInfo;
};

/** The StudioPlanControlOverride edge definition. */
export type StudioPlanControlOverrideEdge = {
  __typename?: 'StudioPlanControlOverrideEdge';
  cursor: Scalars['String']['output'];
  node: StudioPlanControlOverride;
};

/** Fields which can be used to filter StudioPlanControlOverride on. Value must be camel case. */
export enum StudioPlanControlOverrideFilteringField {
  OrganizationUuid = 'organizationUuid',
  StudioPlanControlUuid = 'studioPlanControlUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort StudioPlanControlOverride on. Value must be camel case. */
export enum StudioPlanControlOverrideSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting StudioPlanControlOverride. */
export type StudioPlanControlOverrideSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: StudioPlanControlOverrideSortEnum;
};

/** Fields which can be used to sort StudioPlanControl on. Value must be camel case. */
export enum StudioPlanControlSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting StudioPlanControl. */
export type StudioPlanControlSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: StudioPlanControlSortEnum;
};

/** The StudioPlan edge definition. */
export type StudioPlanEdge = {
  __typename?: 'StudioPlanEdge';
  cursor: Scalars['String']['output'];
  node: StudioPlan;
};

/** Fields which can be used to filter StudioPlan on. Value must be camel case. */
export enum StudioPlanFilteringField {
  Name = 'name',
  PlanUrn = 'planURN',
  State = 'state',
  Uuid = 'uuid'
}

/** StudioPlanInterval */
export type StudioPlanInterval = Model & {
  __typename?: 'StudioPlanInterval';
  /** The default cost per recurring interval */
  cost: Scalars['UInt']['output'];
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The default currency */
  currency: Currency;
  /** The default currency unit */
  currencyUnit: CurrencyUnit;
  /** The default recurring interval */
  interval: Interval;
  /** The default cost per setup */
  setupCost: Scalars['UInt']['output'];
  /** The associated StudioPlan  */
  studioPlan: StudioPlan;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};

/** The StudioPlanInterval connection definition. */
export type StudioPlanIntervalConnection = {
  __typename?: 'StudioPlanIntervalConnection';
  edges: Array<Maybe<StudioPlanIntervalEdge>>;
  pageInfo: PageInfo;
};

/** The StudioPlanInterval edge definition. */
export type StudioPlanIntervalEdge = {
  __typename?: 'StudioPlanIntervalEdge';
  cursor: Scalars['String']['output'];
  node: StudioPlanInterval;
};

/** Fields which can be used to filter StudioPlanInterval on. Value must be camel case. */
export enum StudioPlanIntervalFilteringField {
  Currency = 'currency',
  Interval = 'interval',
  StudioPlanUuid = 'studioPlanUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort StudioPlanInterval on. Value must be camel case. */
export enum StudioPlanIntervalSortEnum {
  CreatedAt = 'createdAt',
  Currency = 'currency',
  Interval = 'interval',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting StudioPlanInterval. */
export type StudioPlanIntervalSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: StudioPlanIntervalSortEnum;
};

/** StudioPlanOrganization */
export type StudioPlanOrganization = Model & {
  __typename?: 'StudioPlanOrganization';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The associated organization */
  organization: Organization;
  /** The associated StudioPlan  */
  studioPlan: StudioPlan;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};

/** The StudioPlanOrganization connection definition. */
export type StudioPlanOrganizationConnection = {
  __typename?: 'StudioPlanOrganizationConnection';
  edges: Array<Maybe<StudioPlanOrganizationEdge>>;
  pageInfo: PageInfo;
};

/** The StudioPlanOrganization edge definition. */
export type StudioPlanOrganizationEdge = {
  __typename?: 'StudioPlanOrganizationEdge';
  cursor: Scalars['String']['output'];
  node: StudioPlanOrganization;
};

/** Fields which can be used to filter StudioPlanOrganization on. Value must be camel case. */
export enum StudioPlanOrganizationFilteringField {
  OrganizationUuid = 'organizationUuid',
  StudioPlanUuid = 'studioPlanUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort StudioPlanOrganization on. Value must be camel case. */
export enum StudioPlanOrganizationSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting StudioPlanOrganization. */
export type StudioPlanOrganizationSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: StudioPlanOrganizationSortEnum;
};

/** Fields which can be used to sort StudioPlan on. Value must be camel case. */
export enum StudioPlanSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  PlanUrn = 'planURN',
  State = 'state',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting StudioPlan. */
export type StudioPlanSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: StudioPlanSortEnum;
};

/** StudioPlanState */
export enum StudioPlanState {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  Inactive = 'INACTIVE'
}

/** Switch organization input */
export type SwitchOrganizationInput = {
  /** The organization UUID. */
  organizationUuid: Scalars['UUID']['input'];
  /** The current access token */
  token: Scalars['NonEmpty']['input'];
};

/** Update Input */
export type UpdateAppInput = {
  /** The base64Logo of the app. */
  base64Logo?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The name of the app. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateAppLocaleInput = {
  /** The i18n object */
  i18n?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The locale */
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

/** Update Input */
export type UpdateAppPrerequisiteInput = {
  /** Is prerequisite required for issuance. */
  forIssuance?: InputMaybe<Scalars['Boolean']['input']>;
  /** Is prerequisite required for verification. */
  forVerification?: InputMaybe<Scalars['Boolean']['input']>;
  /** The name of the app prerequisite. */
  name?: InputMaybe<AppPrerequisites>;
};

/** Update Input */
export type UpdateAppPrerequisiteLocaleInput = {
  /** The i18n object */
  i18n?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The locale */
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

/** Update Input */
export type UpdateAppPrerequisiteStateInput = {
  /** The name of the state. */
  name?: InputMaybe<AppPrerequisiteStates>;
  /** The roles allowed to take action. */
  roles?: InputMaybe<Array<OrganizationUserRole>>;
  /** The json schema for the required meta. */
  schema?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The transition map. */
  transitionTo?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

/** Update Input */
export type UpdateAppPrerequisiteStateLocaleInput = {
  /** The i18n object */
  i18n?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The locale */
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

/** Update Input */
export type UpdateAttributeInput = {
  /** The categories of the attribute */
  categories?: InputMaybe<Array<AttributeCategoryType>>;
  /** The meta type of the attribute */
  metaType?: InputMaybe<AttributeMetaType>;
  /** The name of the attribute. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateAttributeLocaleInput = {
  /** The i18n object */
  i18n?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The locale */
  locale: Scalars['Locale']['input'];
};

/** Update Input */
export type UpdateAttributeMetaDatakeeperInput = {
  /** The predicate of the attribute */
  predicate?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateAttributeMetaDigidentityInput = {
  /** The claim of the attribute */
  claim?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateAttributeMetaMdocInput = {
  /** The mdoc data element identifier */
  dataElementIdentifier?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The mdoc namespace */
  namespace?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateAttributeMetaNlWalletInput = {
  /** The name of the attribute */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateAttributeMetaNectInput = {
  /** The field of the attribute */
  field?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateAttributeMetaOid4VcmdocInput = {
  /** The mdoc data element identifier */
  dataElementIdentifier?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The mdoc namespace */
  namespace?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateAttributeMetaOid4VcsdjwtInput = {
  /** The Claim Path of the attribute */
  claimPath?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The JSON Path of the attribute */
  jsonPath?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateAttributeMetaReadIdInput = {
  /** The field of the attribute */
  field?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateAttributeMetaTruidInput = {
  /** The claim of the attribute */
  claim?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The datapoint of the attribute */
  datapoint?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateAttributeMetaYiviInput = {
  /** The identifier of the attribute */
  id?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The optional flag */
  optional?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Update Input */
export type UpdateAttributeMetaYotiInput = {
  /** The identifier of the attribute */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateAttributeRequestInput = {
  /** The name of the attribute request. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateAttributeRequestLocaleInput = {
  /** The i18n object */
  i18n?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The locale */
  locale: Scalars['Locale']['input'];
};

/** Update Input */
export type UpdateAttributeRequestMetaDatakeeperInput = {
  /** The predicate of the attribute */
  predicate?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateAttributeRequestMetaYiviInput = {
  /** The identifier of this attribute. */
  id?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** Whether this attribute is optional or not */
  optional?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Update Input */
export type UpdateAttributeRequestMetaYotiInput = {
  /** The identifier of the attribute */
  identifier?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Input type used to update billing method types. */
export type UpdateBillingMethodInput = {
  /** isDefault */
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input type used to update billing plan types. */
export type UpdateBillingPlanInput = {
  /** autoRenew */
  autoRenew?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input type used to update billing types. */
export type UpdateBillingWalletInput = {
  /** autoRenew */
  autoRenew?: InputMaybe<Scalars['Boolean']['input']>;
  /** autoRenewAmount */
  autoRenewAmount?: InputMaybe<Scalars['UInt']['input']>;
  /** autoRenewThreshold */
  autoRenewThreshold?: InputMaybe<Scalars['UInt']['input']>;
  /** minimumBalance */
  minimumBalance?: InputMaybe<Scalars['Int']['input']>;
};

/** Update Input */
export type UpdateCredentialInput = {
  /** The categories of the credential */
  categories?: InputMaybe<Array<CredentialCategoryType>>;
  /** The meta type of the credential */
  metaType?: InputMaybe<CredentialMetaType>;
  /** The name of the credential. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateCredentialLocaleInput = {
  /** The i18n object */
  i18n?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The locale */
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

/** Update Input */
export type UpdateCredentialMetaDatakeeperInput = {
  /** The context of the credential */
  context?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateCredentialMetaDigidentityInput = {
  /** The scope of the credential */
  scope?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateCredentialMetaMdocInput = {
  /** mdoc document type */
  docType?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateCredentialMetaNlWalletInput = {
  /** The docType of the credential */
  docType?: InputMaybe<Scalars['String']['input']>;
  /** The namespace of the credential */
  nameSpace?: InputMaybe<Scalars['String']['input']>;
};

/** Update Input */
export type UpdateCredentialMetaNectInput = {
  /** The intent of the credential */
  intent?: InputMaybe<Scalars['Int']['input']>;
};

/** Update Input */
export type UpdateCredentialMetaOid4VcmdocInput = {
  /** mdoc document type */
  docType?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateCredentialMetaOid4VcsdjwtInput = {
  /** SD-JWT Key binding */
  keyBinding?: InputMaybe<Scalars['Boolean']['input']>;
  /** SD-JWT Type */
  type?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateCredentialMetaReadIdInput = {
  /** The document type of the credential */
  documentType?: InputMaybe<CredentialMetaReadIdDocumentType>;
};

/** Update Input */
export type UpdateCredentialMetaTruidInput = {
  /** The scope of the credential */
  scope?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateCredentialMetaYiviInput = {
  /** The identifier of the credential */
  id?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateCredentialMetaYotiInput = {
  /** The grouping predicate */
  groupingPredicate?: InputMaybe<Scalars['String']['input']>;
  /** The flag if grouping is allowed */
  isGroupingAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  /** The flag if source constraint available */
  isSourceConstraintAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  /** The name of the credential */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateCredentialRequestInput = {
  /** The name of the credential request. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateCredentialRequestLocaleInput = {
  /** The i18n object */
  i18n?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The locale */
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

/** Update Input */
export type UpdateCredentialRequestMetaDatakeeperInput = {
  /** The context of the credential */
  context?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The expiration date of the credential */
  expirationDate?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Update Input */
export type UpdateCredentialRequestMetaYiviInput = {
  /** The identifier of this credential */
  id?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateCredentialRequestMetaYotiInput = {
  /** The display configuration category of the credential */
  category?: InputMaybe<CredentialRequestMetaYotiCategoryType>;
  /** The icon of the credential */
  icon?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The identifier of the credential */
  identifier?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The info uri of the credential */
  infoUri?: InputMaybe<Scalars['URL']['input']>;
  /** The display configuration logo of the credential */
  logo?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The display configuration subtitle of the credential */
  subtitle?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The display configuration title of the credential */
  title?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateCredentialRequestStateInput = {
  /** Is delete allowed */
  canDelete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Is update allowed */
  canUpdate?: InputMaybe<Scalars['Boolean']['input']>;
  /** The name of the state */
  name?: InputMaybe<CredentialRequestStates>;
  /** The roles allowed to take action */
  roles?: InputMaybe<Array<OrganizationUserRole>>;
  /** The json schema for the required meta */
  schema?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The transition map */
  transitionTo?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

/** Update Input */
export type UpdateCredentialRequestStateLocaleInput = {
  /** The i18n object */
  i18n?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The locale */
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

/** Update input */
export type UpdateFlowAuthenticationBrandInput = {
  /** Sets flow brand as default */
  isDefault: Scalars['Boolean']['input'];
};

/** Update Input */
export type UpdateFlowAuthenticationDomainInput = {
  /** The path value. */
  redirectPath?: InputMaybe<Scalars['RedirectPath']['input']>;
  /** The port value. */
  redirectPort?: InputMaybe<Scalars['RedirectPort']['input']>;
  /** The protocol value. */
  redirectProtocol?: InputMaybe<Scalars['RedirectProtocol']['input']>;
};

/** Update Input */
export type UpdateFlowAuthenticationInput = {
  /** The name of the flow authentication. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateFlowAuthenticationProviderConfigurationNlWalletInput = {
  /** The usecase */
  usecase?: InputMaybe<Scalars['String']['input']>;
};

/** Update Input */
export type UpdateFlowAuthenticationProviderInput = {
  /** Whether this provider is marked as recommended in this flow. */
  recommended: Scalars['Boolean']['input'];
};

/** Update input */
export type UpdateFlowDisclosureBrandInput = {
  /** Sets flow brand as default */
  isDefault: Scalars['Boolean']['input'];
};

/** Update Input */
export type UpdateFlowDisclosureDomainInput = {
  /** The path value. */
  redirectPath?: InputMaybe<Scalars['RedirectPath']['input']>;
  /** The port value. */
  redirectPort?: InputMaybe<Scalars['RedirectPort']['input']>;
  /** The protocol value. */
  redirectProtocol?: InputMaybe<Scalars['RedirectProtocol']['input']>;
};

/** Update Input */
export type UpdateFlowDisclosureGroupInput = {
  /** The name of the flow group. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateFlowDisclosureInput = {
  /** The JWT media type */
  jwtMediaType?: InputMaybe<Scalars['JwtMediaType']['input']>;
  /** The meta of the flow disclosure. */
  meta?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The name of the flow disclosure. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The indicator if explicit consent is required */
  requireExplicitConsent?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Update Input */
export type UpdateFlowDisclosureProviderConfigurationNlWalletInput = {
  /** The usecase */
  usecase?: InputMaybe<Scalars['String']['input']>;
};

/** Update Input */
export type UpdateFlowDisclosureProviderInput = {
  /** Whether this provider is marked as recommended in this flow. */
  recommended: Scalars['Boolean']['input'];
};

/** Update input */
export type UpdateFlowIssuanceBrandInput = {
  /** Sets flow brand as default */
  isDefault: Scalars['Boolean']['input'];
};

/** The input for updating a flow credential meta datakeeper */
export type UpdateFlowIssuanceCredentialMetaDatakeeperInput = {
  /** The expiration duration, in milliseconds */
  expirationDuration: Scalars['Int']['input'];
};

/** The input for updating a flow credential meta yivi */
export type UpdateFlowIssuanceCredentialMetaYiviInput = {
  /** The expiration duration, in milliseconds */
  expirationDuration: Scalars['Int']['input'];
};

/** Update Input */
export type UpdateFlowIssuanceDomainInput = {
  /** The path value. */
  redirectPath?: InputMaybe<Scalars['RedirectPath']['input']>;
  /** The port value. */
  redirectPort?: InputMaybe<Scalars['RedirectPort']['input']>;
  /** The protocol value. */
  redirectProtocol?: InputMaybe<Scalars['RedirectProtocol']['input']>;
};

/** Update Input */
export type UpdateFlowIssuanceInput = {
  /** The JWT media type */
  jwtMediaType?: InputMaybe<Scalars['JwtMediaType']['input']>;
  /** The meta of the flow issuance. */
  meta?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The name of the flow issuance. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The indicator if explicit consent is required */
  requireExplicitConsent?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Update Input */
export type UpdateFlowIssuanceProviderInput = {
  /** Whether this provider is marked as recommended in this flow. */
  recommended: Scalars['Boolean']['input'];
};

/** Update input */
export type UpdateFlowSignatureBrandInput = {
  /** Sets flow brand as default */
  isDefault: Scalars['Boolean']['input'];
};

/** Update Input */
export type UpdateFlowSignatureDomainInput = {
  /** The path value. */
  redirectPath?: InputMaybe<Scalars['RedirectPath']['input']>;
  /** The port value. */
  redirectPort?: InputMaybe<Scalars['RedirectPort']['input']>;
  /** The protocol value. */
  redirectProtocol?: InputMaybe<Scalars['RedirectProtocol']['input']>;
};

/** Update Input */
export type UpdateFlowSignatureGroupInput = {
  /** The name of the flow group. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateFlowSignatureInput = {
  /** The JWT media type */
  jwtMediaType?: InputMaybe<Scalars['JwtMediaType']['input']>;
  /** The meta of the flow signature. */
  meta?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The name of the flow signature. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The indicator if explicit consent is required */
  requireExplicitConsent?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Update Input */
export type UpdateFlowSignatureProviderConfigurationNlWalletInput = {
  /** The usecase */
  usecase?: InputMaybe<Scalars['String']['input']>;
};

/** Update Input */
export type UpdateFlowSignatureProviderInput = {
  /** Whether this provider is marked as recommended in this flow. */
  recommended: Scalars['Boolean']['input'];
};

/** Update Input */
export type UpdateIssuerInput = {
  /** The categories of the issuer */
  categories?: InputMaybe<Array<IssuerCategoryType>>;
  /** The meta type of the issuer */
  metaType?: InputMaybe<IssuerMetaType>;
  /** The name of the issuer. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The organization uuid, this issuer belongs to, if any. */
  organizationUuid?: InputMaybe<Scalars['UUID']['input']>;
  /** The type of the issuer */
  type?: InputMaybe<IssuerType>;
};

/** Update Input */
export type UpdateIssuerLocaleInput = {
  /** The i18n object */
  i18n?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The locale */
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

/** Update Input */
export type UpdateIssuerMetaDatakeeperInput = {
  /** The did of the issuer */
  did?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateIssuerMetaMdocInput = {
  /** The issuer's public key as a JWK */
  jwk?: InputMaybe<Scalars['JSONObject']['input']>;
};

/** Update Input */
export type UpdateIssuerMetaOid4VcmdocInput = {
  /** The issuer's public key as a JWK */
  jwk?: InputMaybe<Scalars['JSONObject']['input']>;
};

/** Update Input */
export type UpdateIssuerMetaOid4VcsdjwtInput = {
  /** The issuer's identifier (iss) */
  identifier?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The issuer's public key as a JWK */
  jwk?: InputMaybe<Scalars['JSONObject']['input']>;
};

/** Update Input */
export type UpdateIssuerMetaYiviInput = {
  /** The identifier of the issuer */
  id?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateLocaleConfigInput = {
  /** The locale */
  locale?: InputMaybe<Scalars['Locale']['input']>;
  /** The model. */
  model?: InputMaybe<IdentityModel>;
  /** The properties */
  properties?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Update Input */
export type UpdateMappingIssuanceAttributeInput = {
  /** The claims, this attribute will be mapped to. */
  claims: Array<Scalars['NonEmpty']['input']>;
  /** The transform function */
  transform?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateMappingIssuanceInput = {
  /** The name of the mappingIssuance. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateMappingVerificationAttributeInput = {
  /** The key for the attribute */
  key?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateMappingVerificationClaimInput = {
  /** The claim */
  claim?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The meta of the claim */
  meta?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The name of the mappingVerification claim. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateMappingVerificationInput = {
  /** The name of the mappingVerification. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateMappingVerificationLinkInput = {
  /** The transform function. */
  transform?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Input type used to update oauthProvider. */
export type UpdateOAuthProviderInput = {
  /** The clientID of the OAuth Provider */
  clientId?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The clientSecret of the OAuth Provider */
  clientSecret?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The discovery URI of the OAuth Provider */
  discoveryUri?: InputMaybe<Scalars['URL']['input']>;
  /** The global flag */
  global?: InputMaybe<Scalars['Boolean']['input']>;
  /** The icon of the OAuth Provider */
  icon?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The scopes used for login */
  loginScopes?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The name of the OAuth Provider */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The registered redirect URI for the OAuth Provider */
  redirectUri?: InputMaybe<Scalars['URL']['input']>;
  /** The scopes used for signup */
  signupScopes?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The tenantID of the OAuth Provider */
  tenantId?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Input type used to update user organization address types. */
export type UpdateOrganizationAddressInput = {
  /** The city of the address. */
  city?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The country of the address in ISO 3166 2 format. */
  country?: InputMaybe<Scalars['ISO3166']['input']>;
  /** isDefaultTax */
  isDefaultTax?: InputMaybe<Scalars['Boolean']['input']>;
  /** The number of the address. */
  number?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The street of the address. */
  street?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The zipcode of the address. */
  zipcode?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateOrganizationAlertDeprecationInput = {
  /** The flow type */
  flow?: InputMaybe<FlowType>;
  /** The flow UUID which is affected */
  flowUuid?: InputMaybe<Scalars['UUID']['input']>;
  /** The deprecated model */
  model?: InputMaybe<IdentityModelType>;
  /** The model UUID */
  modelUuid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Update Input */
export type UpdateOrganizationAlertInput = {
  /** The message */
  message?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The severity */
  severity?: InputMaybe<AlertSeverity>;
};

/** Update Input */
export type UpdateOrganizationAppMetaDatakeeperInput = {
  /** The issuer did */
  issuerDid?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateOrganizationAppMetaKiwaInput = {
  /** The certificate serial */
  issuerId?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The private key identifier */
  keyIdentifier?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateOrganizationAppMetaYotiInput = {
  /** The org domain registered at Yoti */
  domain?: InputMaybe<Scalars['URL']['input']>;
};

/** Update Input */
export type UpdateOrganizationBrandInput = {
  /** The brand value. */
  logo?: InputMaybe<Scalars['ClientPicture']['input']>;
  /** The brand value which. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateOrganizationClientInput = {
  /** The OAuth entitlements of the token. */
  entitlements?: InputMaybe<Array<Scalars['Entitlement']['input']>>;
  /** The token name */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The OAuth role of the token. */
  role?: InputMaybe<OrganizationUserRole>;
};

/** Update Input */
export type UpdateOrganizationDomainInput = {
  /** The domain which. */
  name?: InputMaybe<Scalars['DomainName']['input']>;
};

/** Input type used to update user organization types. */
export type UpdateOrganizationInput = {
  /** The organization description. */
  description?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The public email address of the organization. */
  email?: InputMaybe<Scalars['Email']['input']>;
  /** The organization logo. */
  logo?: InputMaybe<Scalars['ProfilePicture']['input']>;
  /** The organization name. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The phone number of the organization. */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** The url of the website of the organization. */
  website?: InputMaybe<Scalars['URL']['input']>;
};

/** Input type used to update user organization address types. */
export type UpdateOrganizationNotificationInput = {
  /** The email address */
  email?: InputMaybe<Scalars['Email']['input']>;
};

/** Update Input */
export type UpdateOrganizationQuotaInput = {
  /** The JSON Value */
  args: Scalars['JSONObject']['input'];
};

/** Update Input */
export type UpdateOrganizationSecretInput = {
  /** The secret name */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Input type to update user properties. */
export type UpdateOrganizationUserInput = {
  /** The guide ids the user has completed */
  completedGuides?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The OAuth entitlements of the user. */
  entitlements?: InputMaybe<Array<Scalars['Entitlement']['input']>>;
  /** The OAuth role of the user. */
  role?: InputMaybe<OrganizationUserRole>;
};

/** Input type to update the password. */
export type UpdatePasswordUserInput = {
  /** The current password of the user. */
  currentPassword?: InputMaybe<Scalars['Password']['input']>;
  /** The password of the user. */
  password: Scalars['Password']['input'];
  /** The confirmed password of the user. */
  passwordConfirmation: Scalars['Password']['input'];
};

/** Update Input */
export type UpdateProviderAppMetaOid4VcInput = {
  /** The client identifier prefix */
  clientIdentifierPrefix?: InputMaybe<ProviderAppMetaTypeOid4VcClientIdentifierPrefix>;
  /** If DCQL is supported */
  dcql?: InputMaybe<Scalars['Boolean']['input']>;
  /** The latest draft version supported by this app */
  draftVersion?: InputMaybe<Scalars['Int']['input']>;
  /** The protocol */
  protocol?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateProviderInput = {
  /** The base64Logo of the provider */
  base64Logo?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The categories of the provider */
  categories?: InputMaybe<Array<ProviderCategoryType>>;
  /** The handler URI of the provider */
  handlerUri?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The name of the provider. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The supported flow */
  supportedFlow?: InputMaybe<Array<Scalars['NonEmpty']['input']>>;
  /** The type of the provider */
  type?: InputMaybe<ProviderType>;
};

/** Update Input */
export type UpdateProviderLocaleInput = {
  /** The i18n object */
  i18n?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The locale */
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

/** Update Input */
export type UpdateSchemeInput = {
  /** The categories of the scheme */
  categories?: InputMaybe<Array<SchemeCategoryType>>;
  /** The name of the scheme. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The type of the scheme */
  type?: InputMaybe<SchemeType>;
};

/** Update Input */
export type UpdateSchemeLocaleInput = {
  /** The i18n object */
  i18n?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The locale */
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

/** Update Input */
export type UpdateScopeClaimInput = {
  /** The name of the scope claim. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The transform function for the scope claim. */
  transform?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateScopeInput = {
  /** The categories of the scope */
  categories?: InputMaybe<Array<ScopeCategoryType>>;
  /** The name of the scope. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The scope itself. */
  scope?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateScopeLocaleInput = {
  /** The i18n object */
  i18n?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The locale */
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

/** Update Input */
export type UpdateScopeResourceInput = {
  /** The name of the scope resource. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateStudioPlanControlInput = {
  /** The JSON Value */
  args: Scalars['JSONObject']['input'];
};

/** Update Input */
export type UpdateStudioPlanControlOverrideInput = {
  /** The JSON Value */
  args: Scalars['JSONObject']['input'];
};

/** Update Input */
export type UpdateStudioPlanInput = {
  /** The plan description */
  description?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** Eligible user organizations */
  isForAllOrganizations?: InputMaybe<Scalars['Boolean']['input']>;
  /** The meta */
  meta?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The name */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** planURN */
  planURN?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateStudioPlanIntervalInput = {
  /** The default cost per recurring interval */
  cost?: InputMaybe<Scalars['UInt']['input']>;
  /** The default currency */
  currency?: InputMaybe<Currency>;
  /** The default currency unit */
  currencyUnit?: InputMaybe<CurrencyUnit>;
  /** The default recurring interval */
  interval?: InputMaybe<Interval>;
  /** The default cost per setup */
  setupCost?: InputMaybe<Scalars['UInt']['input']>;
};

/** Input type to update user properties. */
export type UpdateUserInput = {
  /** The default organization of the user. */
  defaultOrganizationUuid?: InputMaybe<Scalars['UUID']['input']>;
  /** The first name of the user. */
  firstName?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The last name of the user. */
  lastName?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The profile picture of the user. */
  profilePicture?: InputMaybe<Scalars['ProfilePicture']['input']>;
};

/** Input type to update userInvitation properties. */
export type UpdateUserInvitationInput = {
  /** The OAuth entitlements of the user. */
  entitlements?: InputMaybe<Array<Scalars['Entitlement']['input']>>;
  /** The first name of the user. */
  firstName?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The last name of the user. */
  lastName?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The OAuth role of the user. */
  role?: InputMaybe<OrganizationUserRole>;
};

export type UseAuthenticationResetInput = {
  /** The new password of the user. */
  password: Scalars['Password']['input'];
  /** The confirmed password of the user. */
  passwordConfirmation: Scalars['Password']['input'];
  /** The password reset token which is used to authorize the user. */
  token: Scalars['NonEmpty']['input'];
};

/** An input where a mappingVerification attribute may be used */
export type UseMappingVerificationAttributeInput = {
  /** The attribute UUID */
  attributeUuid: Scalars['UUID']['input'];
};

/** An input where a mappingVerification claim may be used */
export type UseMappingVerificationClaimInput = {
  /** Optionally define what mappingVerification links should be included */
  mappingVerificationLinks?: InputMaybe<Array<UseMappingVerificationLinkInput>>;
  /** The mappingVerification */
  name: Scalars['UUID']['input'];
};

/** An input where a mappingVerification may be used */
export type UseMappingVerificationInput = {
  /** Optionally define what claims should be included */
  mappingVerificationClaims?: InputMaybe<Array<UseMappingVerificationClaimInput>>;
  /** The mappingVerification */
  mappingVerificationUuid: Scalars['UUID']['input'];
};

/** An input where a mappingVerification link may be used */
export type UseMappingVerificationLinkInput = {
  /** The credential uuid */
  credentialUuid: Scalars['UUID']['input'];
  /** Optionally define what mappingVerification attributes should be included */
  mappingVerificationAttributes?: InputMaybe<Array<UseMappingVerificationAttributeInput>>;
};

/** User definition. */
export type User = Model & {
  __typename?: 'User';
  /** The user creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The default organization of the user. */
  defaultOrganization: Organization;
  /** The email address of the user. */
  email: Scalars['Email']['output'];
  /** The first name of the user. */
  firstName: Scalars['NonEmpty']['output'];
  /** The last name of the user. */
  lastName?: Maybe<Scalars['NonEmpty']['output']>;
  /** A list of organization user */
  organizationUsers?: Maybe<OrganizationUserConnection>;
  /** The profile picture of the user. */
  profilePicture?: Maybe<Scalars['ProfilePicture']['output']>;
  /** The user update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** The user verification time. */
  verifiedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** User definition. */
export type UserOrganizationUsersArgs = {
  input?: InputMaybe<FindManyOrganizationUsersInput>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

/** Fields which can be used to filter users on. Value must be camel case. */
export enum UserFilteringField {
  Email = 'email',
  FirstName = 'firstName',
  LastName = 'lastName',
  OrganizationUserUuid = 'organizationUserUuid'
}

/** UserInvitation definition. */
export type UserInvitation = Model & {
  __typename?: 'UserInvitation';
  /** The userInvitation creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The email of the user. */
  email: Scalars['Email']['output'];
  /** The OAuth entitlements of the user. */
  entitlements: Array<Scalars['Entitlement']['output']>;
  /** The expiration time of the invitation */
  expiresAt: Scalars['DateTime']['output'];
  /** The first name of the user. */
  firstName: Scalars['NonEmpty']['output'];
  /** The last name of the user. */
  lastName: Scalars['NonEmpty']['output'];
  /** The organization for which user is invited. */
  organization: Organization;
  /** The OAuth role of the user. */
  role: OrganizationUserRole;
  /** The state of the invitation */
  state: UserInvitationState;
  /** The userInvitation update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

export type UserInvitationConnection = {
  __typename?: 'UserInvitationConnection';
  edges: Array<UserInvitationEdge>;
  pageInfo: PageInfo;
};

export type UserInvitationEdge = {
  __typename?: 'UserInvitationEdge';
  cursor: Scalars['String']['output'];
  node: UserInvitation;
};

/** Fields which can be used to filter userInvitations on. Value must be camel case. */
export enum UserInvitationFilteringField {
  Email = 'email',
  FirstName = 'firstName',
  LastName = 'lastName',
  OrganizationUuid = 'organizationUuid',
  State = 'state'
}

/** Fields which can be used to sort userInvitations on. Value must be camel case. */
export enum UserInvitationSortEnum {
  CreatedAt = 'createdAt',
  ExpiresAt = 'expiresAt',
  State = 'state',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting userInvitations. */
export type UserInvitationSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: UserInvitationSortEnum;
};

/** User invitation state */
export enum UserInvitationState {
  Accepted = 'ACCEPTED',
  Cancelled = 'CANCELLED',
  Pending = 'PENDING'
}

/** Fields which can be used to sort users on. Value must be camel case. */
export enum UserSortEnum {
  CreatedAt = 'createdAt',
  FirstName = 'firstName',
  LastName = 'lastName',
  OrganizationUserUuid = 'organizationUserUuid',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting users. */
export type UserSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: UserSortEnum;
};

export type ValidateAuthenticationInvitationInput = {
  /** The invitation token which is used to authorize the user. */
  token: Scalars['NonEmpty']['input'];
};

export type ValidateAuthenticationResetInput = {
  /** The password reset token which is used to authorize the user. */
  token: Scalars['NonEmpty']['input'];
};

export type ValidateUserInvitationInput = {
  /** The user invitation token */
  token: Scalars['NonEmpty']['input'];
};
