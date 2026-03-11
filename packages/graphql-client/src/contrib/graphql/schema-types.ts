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
  FilteringValue: { input: string | number | boolean | string[]; output: string | number | boolean | string[]; }
  Grant: { input: unknown; output: unknown; }
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

export type AcceptUserInvitationTokenInput = {
  /** The new password of the user. */
  password: Scalars['Password']['input'];
  /** The confirmed password of the user. */
  passwordConfirmation: Scalars['Password']['input'];
  /** The invitation token which is used to authorize the user. */
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

/** Update state Input */
export type ActionAuthenticationInput = {
  /** The transition of the flow authentication. */
  action: AuthenticationAction;
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

/** ActionDisclosureInput */
export type ActionDisclosureInput = {
  /** The action */
  action: DisclosureAction;
};

/** Action Input */
export type ActionIssuanceInput = {
  /** The action */
  action: IssuanceAction;
};

/** Action Input */
export type ActionIssuerInput = {
  /** The action */
  action: Action;
};

/** ActionMaintenanceInput */
export type ActionMaintenanceInput = {
  /** The action */
  action: MaintenanceAction;
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
  /** Reject */
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
  /** Reject */
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

/** Update state Input */
export type ActionPricingRuleInput = {
  /** The transition of the pricing rule. */
  action: PricingRuleAction;
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

/** Action Input */
export type ActionSignatureInput = {
  /** The action */
  action: SignatureAction;
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
  /** The grants allowed to take action */
  grants: Array<Scalars['String']['output']>;
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

/** Identity attribute label definition. */
export type AttributeLabel = Model & {
  __typename?: 'AttributeLabel';
  /** The identity attribute (resolved via federation) */
  attribute: Attribute;
  /** The identity attribute UUID (no direct relation - separate database) */
  attributeUuid: Scalars['UUID']['output'];
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The Label */
  label: Label;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** Connection */
export type AttributeLabelConnection = {
  __typename?: 'AttributeLabelConnection';
  edges: Array<AttributeLabelEdge>;
  pageInfo: PageInfo;
};

/** Edge */
export type AttributeLabelEdge = {
  __typename?: 'AttributeLabelEdge';
  cursor: Scalars['String']['output'];
  node: AttributeLabel;
};

/** Fields which can be used to filter identity attribute labels. Value must be camel case. */
export enum AttributeLabelFilteringField {
  AttributeUuid = 'attributeUuid',
  LabelUuid = 'labelUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort identity attribute labels. Value must be camel case. */
export enum AttributeLabelSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting identity attribute labels. */
export type AttributeLabelSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeLabelSortEnum;
};

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
  /** The DCQL claim path for the attribute */
  claimPath: Scalars['JSONObject']['output'];
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
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

/** The input for filtering attribute meta */
export type AttributeNestedFilteringAttributeMetaField = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The input for filtering attribute meta */
  input: FindManyAttributeMetaInput;
};

/** The input for filtering credential */
export type AttributeNestedFilteringCredentialField = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The input for filtering credential */
  input: FindManyCredentialsInput;
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
  /** The OID4VC mdoc attribute request meta */
  oid4vcMdoc?: Maybe<AttributeRequestMetaOid4Vcmdoc>;
  /** The OID4VC SD-JWT attribute request meta */
  oid4vcSdJwt?: Maybe<AttributeRequestMetaOid4Vcsdjwt>;
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

/** Attribute request meta OID4VC mdoc definition. */
export type AttributeRequestMetaOid4Vcmdoc = Model & {
  __typename?: 'AttributeRequestMetaOID4VCMDOC';
  /** The attribute request meta the OID4VC mdoc meta belongs to. */
  attributeRequestMeta: AttributeRequestMeta;
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

/** The attribute request meta OID4VC mdoc connection definition. */
export type AttributeRequestMetaOid4VcmdocConnection = {
  __typename?: 'AttributeRequestMetaOID4VCMDOCConnection';
  edges: Array<Maybe<AttributeRequestMetaOid4VcmdocEdge>>;
  pageInfo: PageInfo;
};

/** The attribute request meta OID4VC mdoc edge definition. */
export type AttributeRequestMetaOid4VcmdocEdge = {
  __typename?: 'AttributeRequestMetaOID4VCMDOCEdge';
  cursor: Scalars['String']['output'];
  node: AttributeRequestMetaOid4Vcmdoc;
};

/** Fields which can be used to filter attribute request meta OID4VC mdoc on. Value must be camel case. */
export enum AttributeRequestMetaOid4VcmdocFilteringField {
  AttributeRequestMetaUuid = 'attributeRequestMetaUuid',
  DataElementIdentifier = 'dataElementIdentifier',
  Namespace = 'namespace'
}

/** Fields which can be used to sort attribute request meta OID4VC mdoc on. Value must be camel case. */
export enum AttributeRequestMetaOid4VcmdocSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute request meta OID4VC mdoc. */
export type AttributeRequestMetaOid4VcmdocSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeRequestMetaOid4VcmdocSortEnum;
};

/** Attribute request meta OID4VC SD-JWT definition. */
export type AttributeRequestMetaOid4Vcsdjwt = Model & {
  __typename?: 'AttributeRequestMetaOID4VCSDJWT';
  /** The attribute request meta the OID4VC SD-JWT meta belongs to. */
  attributeRequestMeta: AttributeRequestMeta;
  /** The claim path array */
  claimPath: Scalars['JSONObject']['output'];
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The JSON path for the SD-JWT claim */
  jsonPath: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The attribute request meta OID4VC SD-JWT connection definition. */
export type AttributeRequestMetaOid4VcsdjwtConnection = {
  __typename?: 'AttributeRequestMetaOID4VCSDJWTConnection';
  edges: Array<Maybe<AttributeRequestMetaOid4VcsdjwtEdge>>;
  pageInfo: PageInfo;
};

/** The attribute request meta OID4VC SD-JWT edge definition. */
export type AttributeRequestMetaOid4VcsdjwtEdge = {
  __typename?: 'AttributeRequestMetaOID4VCSDJWTEdge';
  cursor: Scalars['String']['output'];
  node: AttributeRequestMetaOid4Vcsdjwt;
};

/** Fields which can be used to filter attribute request meta OID4VC SD-JWT on. Value must be camel case. */
export enum AttributeRequestMetaOid4VcsdjwtFilteringField {
  AttributeRequestMetaUuid = 'attributeRequestMetaUuid',
  JsonPath = 'jsonPath'
}

/** Fields which can be used to sort attribute request meta OID4VC SD-JWT on. Value must be camel case. */
export enum AttributeRequestMetaOid4VcsdjwtSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute request meta OID4VC SD-JWT. */
export type AttributeRequestMetaOid4VcsdjwtSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeRequestMetaOid4VcsdjwtSortEnum;
};

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
  Oid4VcMdoc = 'OID4VC_MDOC',
  Oid4VcSdJwt = 'OID4VC_SD_JWT',
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

/** Flow authentication definition. */
export type Authentication = Model & {
  __typename?: 'Authentication';
  /** The associated brands with this authentication */
  authenticationBrands: AuthenticationBrandConnection;
  /** The associated domains with this authentication */
  authenticationDomains: AuthenticationDomainConnection;
  /** The associated labels with this authentication */
  authenticationLabels: AuthenticationLabelConnection;
  /** A list of flow providers belonging to this flow authentication. */
  authenticationProviders: AuthenticationProviderConnection;
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The name of the flow. */
  name: Scalars['NonEmpty']['output'];
  /** The organization the flow belongs to. */
  organization: Organization;
  /** The state of the flow. */
  state: AuthenticationState;
  /** Shortcut to active studio controls associated to this object */
  studioControlCompacts: Array<StudioControlCompact>;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Flow authentication definition. */
export type AuthenticationAuthenticationBrandsArgs = {
  input?: InputMaybe<FindManyAuthenticationBrandsInput>;
};


/** Flow authentication definition. */
export type AuthenticationAuthenticationDomainsArgs = {
  input?: InputMaybe<FindManyAuthenticationDomainsInput>;
};


/** Flow authentication definition. */
export type AuthenticationAuthenticationLabelsArgs = {
  input?: InputMaybe<FindManyAuthenticationLabelsInput>;
};


/** Flow authentication definition. */
export type AuthenticationAuthenticationProvidersArgs = {
  input?: InputMaybe<FindManyAuthenticationProvidersInput>;
};

/** AuthenticationAction */
export enum AuthenticationAction {
  Activate = 'ACTIVATE',
  Deactivate = 'DEACTIVATE'
}

/** Authentication activity definition. */
export type AuthenticationActivity = Model & {
  __typename?: 'AuthenticationActivity';
  /** The authentication UUID */
  authenticationUuid: Scalars['UUID']['output'];
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The event URN */
  eventURN: Scalars['URN']['output'];
  /** The metadata */
  meta: Scalars['JSONObject']['output'];
  /** The organization UUID */
  organizationUuid: Scalars['UUID']['output'];
  /** The request UUID */
  requestUuid: Scalars['UUID']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The authentication activity connection definition. */
export type AuthenticationActivityConnection = {
  __typename?: 'AuthenticationActivityConnection';
  edges: Array<Maybe<AuthenticationActivityEdge>>;
  pageInfo: PageInfo;
};

/** The authentication activity edge definition. */
export type AuthenticationActivityEdge = {
  __typename?: 'AuthenticationActivityEdge';
  cursor: Scalars['String']['output'];
  node: AuthenticationActivity;
};

/** Fields which can be used to filter authentication activities on. */
export enum AuthenticationActivityFilteringField {
  AuthenticationUuid = 'authenticationUuid',
  CreatedAt = 'createdAt',
  EventUrn = 'eventURN',
  OrganizationUuid = 'organizationUuid',
  RequestUuid = 'requestUuid'
}

/** Fields which can be used to sort authentication activities on. */
export enum AuthenticationActivitySortEnum {
  CreatedAt = 'createdAt',
  EventUrn = 'eventUrn'
}

/** Input options for sorting authentication activities. */
export type AuthenticationActivitySortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AuthenticationActivitySortEnum;
};

/** Organization brand definition. */
export type AuthenticationBrand = Model & {
  __typename?: 'AuthenticationBrand';
  /** The flow authentication */
  authentication: Authentication;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
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
export type AuthenticationBrandConnection = {
  __typename?: 'AuthenticationBrandConnection';
  edges: Array<AuthenticationBrandEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type AuthenticationBrandEdge = {
  __typename?: 'AuthenticationBrandEdge';
  cursor: Scalars['String']['output'];
  node: AuthenticationBrand;
};

/** Fields which can be used to filter brands on. Value must be camel case. */
export enum AuthenticationBrandFilteringField {
  AuthenticationUuid = 'authenticationUuid',
  OrganizationBrandUuid = 'organizationBrandUuid',
  RedirectPath = 'redirectPath',
  Uuid = 'uuid'
}

/** Fields which can be used to sort brands on. Value must be camel case. */
export enum AuthenticationBrandSortEnum {
  CreatedAt = 'createdAt',
  RedirectPath = 'redirectPath',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting brands. */
export type AuthenticationBrandSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AuthenticationBrandSortEnum;
};

/** The flow authentication connection definition. */
export type AuthenticationConnection = {
  __typename?: 'AuthenticationConnection';
  edges: Array<Maybe<AuthenticationEdge>>;
  pageInfo: PageInfo;
};

/** Organization domain definition. */
export type AuthenticationDomain = Model & {
  __typename?: 'AuthenticationDomain';
  /** The flow authentication */
  authentication: Authentication;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
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
export type AuthenticationDomainConnection = {
  __typename?: 'AuthenticationDomainConnection';
  edges: Array<AuthenticationDomainEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type AuthenticationDomainEdge = {
  __typename?: 'AuthenticationDomainEdge';
  cursor: Scalars['String']['output'];
  node: AuthenticationDomain;
};

/** Fields which can be used to filter domains on. Value must be camel case. */
export enum AuthenticationDomainFilteringField {
  AuthenticationUuid = 'authenticationUuid',
  OrganizationDomainUuid = 'organizationDomainUuid',
  RedirectPath = 'redirectPath',
  Uuid = 'uuid'
}

/** Fields which can be used to sort domains on. Value must be camel case. */
export enum AuthenticationDomainSortEnum {
  CreatedAt = 'createdAt',
  RedirectPath = 'redirectPath',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting domains. */
export type AuthenticationDomainSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AuthenticationDomainSortEnum;
};

/** The flow authentication edge definition. */
export type AuthenticationEdge = {
  __typename?: 'AuthenticationEdge';
  cursor: Scalars['String']['output'];
  node: Authentication;
};

/** Fields which can be used to filter flow authentications on. Value must be camel case. */
export enum AuthenticationFilteringField {
  Name = 'name',
  OrganizationUuid = 'organizationUuid',
  State = 'state',
  Uuid = 'uuid'
}

/** Organization Label definition. */
export type AuthenticationLabel = Model & {
  __typename?: 'AuthenticationLabel';
  /** The flow authentication */
  authentication: Authentication;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The Label */
  label: Label;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** An Connection */
export type AuthenticationLabelConnection = {
  __typename?: 'AuthenticationLabelConnection';
  edges: Array<AuthenticationLabelEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type AuthenticationLabelEdge = {
  __typename?: 'AuthenticationLabelEdge';
  cursor: Scalars['String']['output'];
  node: AuthenticationLabel;
};

/** Fields which can be used to filter Labels on. Value must be camel case. */
export enum AuthenticationLabelFilteringField {
  AuthenticationUuid = 'authenticationUuid',
  LabelUuid = 'labelUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort Labels on. Value must be camel case. */
export enum AuthenticationLabelSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting Labels. */
export type AuthenticationLabelSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AuthenticationLabelSortEnum;
};

/** The input for filtering flow authentication brands in nested filtering. */
export type AuthenticationNestedFilteringAuthenticationBrandField = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The input for filtering flow authentication brands */
  input: FindManyAuthenticationBrandsInput;
  /** The type of filtering */
  type?: InputMaybe<NestedFilteringType>;
};

/** The input for filtering flow authentication labels in nested filtering. */
export type AuthenticationNestedFilteringAuthenticationLabelField = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The input for filtering flow authentication labels */
  input: FindManyAuthenticationLabelsInput;
  /** The type of filtering */
  type?: InputMaybe<NestedFilteringType>;
};

/** Flow authentication provider definition. */
export type AuthenticationProvider = Model & {
  __typename?: 'AuthenticationProvider';
  /** The flow authentication the flow provider belongs to. */
  authentication: Authentication;
  /** A list of flow queries belonging to this flow provider. */
  authenticationScopes: AuthenticationScopeConnection;
  /** The flow authentication provider configuration. */
  configuration?: Maybe<AuthenticationProviderConfiguration>;
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
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
export type AuthenticationProviderAuthenticationScopesArgs = {
  input?: InputMaybe<FindManyAuthenticationScopesInput>;
};

/** Flow authentication provider configuration definition */
export type AuthenticationProviderConfiguration = Model & {
  __typename?: 'AuthenticationProviderConfiguration';
  /** The AuthenticationProvider this configuration belongs to */
  authenticationProvider: AuthenticationProvider;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The NL Wallet flow authentication provider configuration */
  nlWallet?: Maybe<AuthenticationProviderConfigurationNlWallet>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The AuthenticationProviderConfiguration connection definition. */
export type AuthenticationProviderConfigurationConnection = {
  __typename?: 'AuthenticationProviderConfigurationConnection';
  edges: Array<Maybe<AuthenticationProviderConfigurationEdge>>;
  pageInfo: PageInfo;
};

/** The AuthenticationProviderConfiguration edge definition. */
export type AuthenticationProviderConfigurationEdge = {
  __typename?: 'AuthenticationProviderConfigurationEdge';
  cursor: Scalars['String']['output'];
  node: AuthenticationProviderConfiguration;
};

/** Fields which can be used to filter AuthenticationProviderConfiguration on. Value must be camel case. */
export enum AuthenticationProviderConfigurationFilteringField {
  AuthenticationProviderUuid = 'authenticationProviderUuid'
}

/** AuthenticationProviderConfigurationNLWallet definition */
export type AuthenticationProviderConfigurationNlWallet = Model & {
  __typename?: 'AuthenticationProviderConfigurationNLWallet';
  /** The AuthenticationProviderConfiguration this object belongs to. */
  authenticationProviderConfiguration: AuthenticationProviderConfiguration;
  /** The creation timestamp */
  createdAt: Scalars['DateTime']['output'];
  /** The timestamp of when the type has been last updated */
  updatedAt: Scalars['DateTime']['output'];
  /** The usecase */
  usecase: Scalars['String']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The AuthenticationProviderConfigurationNLWallet connection definition. */
export type AuthenticationProviderConfigurationNlWalletConnection = {
  __typename?: 'AuthenticationProviderConfigurationNLWalletConnection';
  edges: Array<Maybe<AuthenticationProviderConfigurationNlWalletEdge>>;
  pageInfo: PageInfo;
};

/** The AuthenticationProviderConfigurationNLWallet edge definition. */
export type AuthenticationProviderConfigurationNlWalletEdge = {
  __typename?: 'AuthenticationProviderConfigurationNLWalletEdge';
  cursor: Scalars['String']['output'];
  node: AuthenticationProviderConfigurationNlWallet;
};

/** Fields which can be used to filter AuthenticationProviderConfigurationNLWallet on. Value must be camel case. */
export enum AuthenticationProviderConfigurationNlWalletFilteringField {
  AuthenticationProviderConfigurationUuid = 'authenticationProviderConfigurationUuid',
  Intent = 'intent'
}

/** Fields which can be used to sort AuthenticationProviderConfigurationNLWallet on. Value must be camel case. */
export enum AuthenticationProviderConfigurationNlWalletSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting AuthenticationProviderConfigurationNLWallet. */
export type AuthenticationProviderConfigurationNlWalletSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AuthenticationProviderConfigurationNlWalletSortEnum;
};

/** Fields which can be used to sort AuthenticationProviderConfiguration on. Value must be camel case. */
export enum AuthenticationProviderConfigurationSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting AuthenticationProviderConfiguration. */
export type AuthenticationProviderConfigurationSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AuthenticationProviderConfigurationSortEnum;
};

/** The flow authentication provider connection definition. */
export type AuthenticationProviderConnection = {
  __typename?: 'AuthenticationProviderConnection';
  edges: Array<AuthenticationProviderEdge>;
  pageInfo: PageInfo;
};

/** The flow authentication provider edge definition. */
export type AuthenticationProviderEdge = {
  __typename?: 'AuthenticationProviderEdge';
  cursor: Scalars['String']['output'];
  node: AuthenticationProvider;
};

/** Fields which can be used to filter flow authentication providers on. Value must be camel case. */
export enum AuthenticationProviderFilteringField {
  AuthenticationUuid = 'authenticationUuid',
  ProviderAppUuid = 'providerAppUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow authentication providers on. Value must be camel case. */
export enum AuthenticationProviderSortEnum {
  CreatedAt = 'createdAt',
  ProviderAppUuid = 'providerAppUuid',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow authentication providers. */
export type AuthenticationProviderSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AuthenticationProviderSortEnum;
};

/** Flow authentication scope definition. */
export type AuthenticationScope = Model & {
  __typename?: 'AuthenticationScope';
  /** The flow authentication the flow scope belongs to. */
  authenticationProvider: AuthenticationProvider;
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
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
export type AuthenticationScopeConnection = {
  __typename?: 'AuthenticationScopeConnection';
  edges: Array<AuthenticationScopeEdge>;
  pageInfo: PageInfo;
};

/** The flow authentication scope edge definition. */
export type AuthenticationScopeEdge = {
  __typename?: 'AuthenticationScopeEdge';
  cursor: Scalars['String']['output'];
  node: AuthenticationScope;
};

/** Fields which can be used to filter flow authentication scope on. Value must be camel case. */
export enum AuthenticationScopeFilteringField {
  AuthenticationProviderUuid = 'authenticationProviderUuid',
  ScopeUuid = 'scopeUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow authentication scope on. Value must be camel case. */
export enum AuthenticationScopeSortEnum {
  CreatedAt = 'createdAt',
  ScopeUuid = 'scopeUuid',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow authentication scope. */
export type AuthenticationScopeSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AuthenticationScopeSortEnum;
};

/** Fields which can be used to sort flow authentications on. Value must be camel case. */
export enum AuthenticationSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  State = 'state',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow authentications. */
export type AuthenticationSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AuthenticationSortEnum;
};

/** AuthenticationState */
export enum AuthenticationState {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

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

/** Wallet payment type enum. */
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
  /** Billing Wallet */
  billingWallet: BillingWallet;
  /** Transaction Meta */
  billingWalletTransactionMeta?: Maybe<BillingWalletTransactionMeta>;
  /** The user creation time */
  createdAt: Scalars['DateTime']['output'];
  /** Meta Type */
  metaType: BillingWalletTransactionMetaType;
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
  MetaType = 'metaType',
  ResourceUrn = 'resourceURN',
  State = 'state',
  Uuid = 'uuid'
}

/** BillingWalletTransactionMeta definition - container for payment details based on metaType */
export type BillingWalletTransactionMeta = Model & {
  __typename?: 'BillingWalletTransactionMeta';
  /** Transaction */
  billingWalletTransaction: BillingWalletTransaction;
  /** The user creation time */
  createdAt: Scalars['DateTime']['output'];
  /** Flow Payment Meta (when metaType = FLOW) */
  flow?: Maybe<BillingWalletTransactionMetaFlow>;
  /** Plan Payment Meta (when metaType = PLAN) */
  plan?: Maybe<BillingWalletTransactionMetaPlan>;
  /** The user update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** Wallet Payment Meta (when metaType = WALLET) */
  wallet?: Maybe<BillingWalletTransactionMetaWallet>;
};

export type BillingWalletTransactionMetaConnection = {
  __typename?: 'BillingWalletTransactionMetaConnection';
  edges: Array<BillingWalletTransactionMetaEdge>;
  pageInfo: PageInfo;
};

export type BillingWalletTransactionMetaEdge = {
  __typename?: 'BillingWalletTransactionMetaEdge';
  cursor: Scalars['String']['output'];
  node: BillingWalletTransactionMeta;
};

/** Fields which can be used to filter billing wallet transaction metas on. Value must be camel case. */
export enum BillingWalletTransactionMetaFilteringField {
  BillingWalletTransactionUuid = 'billingWalletTransactionUuid',
  Uuid = 'uuid'
}

/** BillingWalletTransactionMetaFlow definition - flow execution payment details. */
export type BillingWalletTransactionMetaFlow = Model & {
  __typename?: 'BillingWalletTransactionMetaFlow';
  /** Flow Payment Attributes */
  attributes: BillingWalletTransactionMetaFlowAttributeConnection;
  /** Transaction Meta */
  billingWalletTransactionMeta: BillingWalletTransactionMeta;
  /** Cost */
  cost: Scalars['Int']['output'];
  /** The user creation time */
  createdAt: Scalars['DateTime']['output'];
  /** Flow Type */
  flowType: FlowType;
  /** Flow UUID */
  flowUuid: Scalars['UUID']['output'];
  /** Organization UUID */
  organizationUuid: Scalars['UUID']['output'];
  /** Request UUID */
  requestUuid: Scalars['UUID']['output'];
  /** Revenue */
  revenue: Scalars['Int']['output'];
  /** Summary */
  summary?: Maybe<Scalars['String']['output']>;
  /** The user update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** BillingWalletTransactionMetaFlow definition - flow execution payment details. */
export type BillingWalletTransactionMetaFlowAttributesArgs = {
  input?: InputMaybe<FindManyBillingWalletTransactionMetaFlowAttributesInput>;
};

/** BillingWalletTransactionMetaFlowAttribute definition - attribute details for flow payments. */
export type BillingWalletTransactionMetaFlowAttribute = Model & {
  __typename?: 'BillingWalletTransactionMetaFlowAttribute';
  /** Attribute UUID */
  attributeUuid: Scalars['UUID']['output'];
  /** Flow Payment Meta */
  billingWalletTransactionMetaFlow: BillingWalletTransactionMetaFlow;
  /** The user creation time */
  createdAt: Scalars['DateTime']['output'];
  /** Credential UUID */
  credentialUuid: Scalars['UUID']['output'];
  /** Issuer UUID */
  issuerUuid: Scalars['UUID']['output'];
  /** Provider App UUID */
  providerAppUuid: Scalars['UUID']['output'];
  /** Provider UUID */
  providerUuid: Scalars['UUID']['output'];
  /** Scheme UUID */
  schemeUuid: Scalars['UUID']['output'];
  /** The user update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

export type BillingWalletTransactionMetaFlowAttributeConnection = {
  __typename?: 'BillingWalletTransactionMetaFlowAttributeConnection';
  edges: Array<BillingWalletTransactionMetaFlowAttributeEdge>;
  pageInfo: PageInfo;
};

export type BillingWalletTransactionMetaFlowAttributeEdge = {
  __typename?: 'BillingWalletTransactionMetaFlowAttributeEdge';
  cursor: Scalars['String']['output'];
  node: BillingWalletTransactionMetaFlowAttribute;
};

/** Fields which can be used to filter billing wallet transaction meta flow attributes on. Value must be camel case. */
export enum BillingWalletTransactionMetaFlowAttributeFilteringField {
  AttributeUuid = 'attributeUuid',
  BillingWalletTransactionMetaFlowUuid = 'billingWalletTransactionMetaFlowUuid',
  CredentialUuid = 'credentialUuid',
  IssuerUuid = 'issuerUuid',
  ProviderAppUuid = 'providerAppUuid',
  ProviderUuid = 'providerUuid',
  SchemeUuid = 'schemeUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort billing wallet transaction meta flow attributes on. Value must be camel case. */
export enum BillingWalletTransactionMetaFlowAttributeSortEnum {
  AttributeUuid = 'attributeUuid',
  BillingWalletTransactionMetaFlowUuid = 'billingWalletTransactionMetaFlowUuid',
  CreatedAt = 'createdAt',
  CredentialUuid = 'credentialUuid',
  IssuerUuid = 'issuerUuid',
  ProviderAppUuid = 'providerAppUuid',
  ProviderUuid = 'providerUuid',
  SchemeUuid = 'schemeUuid',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting billing wallet transaction meta flow attributes. */
export type BillingWalletTransactionMetaFlowAttributeSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: BillingWalletTransactionMetaFlowAttributeSortEnum;
};

export type BillingWalletTransactionMetaFlowConnection = {
  __typename?: 'BillingWalletTransactionMetaFlowConnection';
  edges: Array<BillingWalletTransactionMetaFlowEdge>;
  pageInfo: PageInfo;
};

export type BillingWalletTransactionMetaFlowEdge = {
  __typename?: 'BillingWalletTransactionMetaFlowEdge';
  cursor: Scalars['String']['output'];
  node: BillingWalletTransactionMetaFlow;
};

/** Fields which can be used to filter billing wallet transaction meta flows on. Value must be camel case. */
export enum BillingWalletTransactionMetaFlowFilteringField {
  BillingWalletTransactionMetaUuid = 'billingWalletTransactionMetaUuid',
  FlowType = 'flowType',
  FlowUuid = 'flowUuid',
  OrganizationUuid = 'organizationUuid',
  RequestUuid = 'requestUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort billing wallet transaction meta flows on. Value must be camel case. */
export enum BillingWalletTransactionMetaFlowSortEnum {
  BillingWalletTransactionMetaUuid = 'billingWalletTransactionMetaUuid',
  Cost = 'cost',
  CreatedAt = 'createdAt',
  FlowType = 'flowType',
  FlowUuid = 'flowUuid',
  OrganizationUuid = 'organizationUuid',
  RequestUuid = 'requestUuid',
  Revenue = 'revenue',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting billing wallet transaction meta flows. */
export type BillingWalletTransactionMetaFlowSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: BillingWalletTransactionMetaFlowSortEnum;
};

/** BillingWalletTransaction field. */
export type BillingWalletTransactionMetaNestedFilteringBillingWalletTransactionField = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The input for filtering billing wallet transactions */
  input: FindManyBillingWalletTransactionsInput;
};

/** BillingWalletTransactionMetaPlan definition - plan payment details. */
export type BillingWalletTransactionMetaPlan = Model & {
  __typename?: 'BillingWalletTransactionMetaPlan';
  /** Billing Plan */
  billingPlan: BillingPlan;
  /** Transaction Meta */
  billingWalletTransactionMeta: BillingWalletTransactionMeta;
  /** The user creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The interval end time */
  intervalEndAt: Scalars['DateTime']['output'];
  /** The interval start time */
  intervalStartAt: Scalars['DateTime']['output'];
  /** The user update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

export type BillingWalletTransactionMetaPlanConnection = {
  __typename?: 'BillingWalletTransactionMetaPlanConnection';
  edges: Array<BillingWalletTransactionMetaPlanEdge>;
  pageInfo: PageInfo;
};

export type BillingWalletTransactionMetaPlanEdge = {
  __typename?: 'BillingWalletTransactionMetaPlanEdge';
  cursor: Scalars['String']['output'];
  node: BillingWalletTransactionMetaPlan;
};

/** Fields which can be used to filter billing wallet transaction meta plans on. Value must be camel case. */
export enum BillingWalletTransactionMetaPlanFilteringField {
  BillingPlanUuid = 'billingPlanUuid',
  BillingWalletTransactionMetaUuid = 'billingWalletTransactionMetaUuid',
  IntervalEndAt = 'intervalEndAt',
  IntervalStartAt = 'intervalStartAt',
  Uuid = 'uuid'
}

/** Fields which can be used to sort billing wallet transaction meta plans on. Value must be camel case. */
export enum BillingWalletTransactionMetaPlanSortEnum {
  BillingPlanUuid = 'billingPlanUuid',
  BillingWalletTransactionMetaUuid = 'billingWalletTransactionMetaUuid',
  CreatedAt = 'createdAt',
  IntervalEndAt = 'intervalEndAt',
  IntervalStartAt = 'intervalStartAt',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting billing wallet transaction meta plans. */
export type BillingWalletTransactionMetaPlanSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: BillingWalletTransactionMetaPlanSortEnum;
};

/** Fields which can be used to sort billing wallet transaction metas on. Value must be camel case. */
export enum BillingWalletTransactionMetaSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting billing wallet transaction metas. */
export type BillingWalletTransactionMetaSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: BillingWalletTransactionMetaSortEnum;
};

/** Transaction meta types */
export enum BillingWalletTransactionMetaType {
  Flow = 'FLOW',
  Plan = 'PLAN',
  Wallet = 'WALLET'
}

/** BillingWalletTransactionMetaWallet definition - wallet top-up payment details. */
export type BillingWalletTransactionMetaWallet = Model & {
  __typename?: 'BillingWalletTransactionMetaWallet';
  /** Transaction Meta */
  billingWalletTransactionMeta: BillingWalletTransactionMeta;
  /** The user creation time */
  createdAt: Scalars['DateTime']['output'];
  /** Organization User */
  organizationUser?: Maybe<OrganizationUser>;
  /** Payment Provider Invoice */
  paymentProviderInvoice: PaymentProviderInvoice;
  /** The type of the payment */
  type: BillingWalletPaymentType;
  /** The user update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

export type BillingWalletTransactionMetaWalletConnection = {
  __typename?: 'BillingWalletTransactionMetaWalletConnection';
  edges: Array<BillingWalletTransactionMetaWalletEdge>;
  pageInfo: PageInfo;
};

export type BillingWalletTransactionMetaWalletEdge = {
  __typename?: 'BillingWalletTransactionMetaWalletEdge';
  cursor: Scalars['String']['output'];
  node: BillingWalletTransactionMetaWallet;
};

/** Fields which can be used to filter billing wallet transaction meta wallets on. Value must be camel case. */
export enum BillingWalletTransactionMetaWalletFilteringField {
  BillingWalletTransactionMetaUuid = 'billingWalletTransactionMetaUuid',
  PaymentProviderInvoiceUuid = 'paymentProviderInvoiceUuid',
  Type = 'type',
  Uuid = 'uuid'
}

/** BillingWalletTransactionMeta field. */
export type BillingWalletTransactionMetaWalletNestedFilteringBillingWalletTransactionMetaField = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The input for filtering payment provider invoices */
  input: FindManyBillingWalletTransactionMetasInput;
};

/** Fields which can be used to sort billing wallet transaction meta wallets on. Value must be camel case. */
export enum BillingWalletTransactionMetaWalletSortEnum {
  BillingWalletTransactionMetaUuid = 'billingWalletTransactionMetaUuid',
  CreatedAt = 'createdAt',
  PaymentProviderInvoiceUuid = 'paymentProviderInvoiceUuid',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting billing wallet transaction meta wallets. */
export type BillingWalletTransactionMetaWalletSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: BillingWalletTransactionMetaWalletSortEnum;
};

/** Fields which can be used to sort billings on. Value must be camel case. */
export enum BillingWalletTransactionSortEnum {
  Amount = 'amount',
  BillingWalletUuid = 'billingWalletUuid',
  CreatedAt = 'createdAt',
  MetaType = 'metaType',
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

/** CatalogModelType */
export enum CatalogModelType {
  App = 'APP',
  Attribute = 'ATTRIBUTE',
  Credential = 'CREDENTIAL',
  Issuer = 'ISSUER',
  Provider = 'PROVIDER',
  Scheme = 'SCHEME',
  Scope = 'SCOPE'
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
  /** The studio maintenance urns */
  studioMaintenanceUrns: Array<Scalars['NonEmpty']['output']>;
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
  /** The grants allowed to take action. */
  grants?: InputMaybe<Array<Scalars['String']['input']>>;
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

/** Create input */
export type CreateAttributeLabelInput = {
  /** The UUID of the identity attribute */
  attributeUuid: Scalars['UUID']['input'];
  /** The UUID of the label */
  labelUuid: Scalars['UUID']['input'];
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
  /** The DCQL claim path for the attribute */
  claimPath: Scalars['JSONObject']['input'];
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

/** The input for creating an attribute request meta OID4VC mdoc. */
export type CreateAttributeRequestMetaOid4VcmdocInput = {
  /** The attribute request UUID */
  attributeRequestUuid: Scalars['UUID']['input'];
  /** The mdoc data element identifier */
  dataElementIdentifier: Scalars['NonEmpty']['input'];
  /** The mdoc namespace */
  namespace: Scalars['NonEmpty']['input'];
};

/** The input for creating an attribute request meta OID4VC SD-JWT. */
export type CreateAttributeRequestMetaOid4VcsdjwtInput = {
  /** The attribute request UUID */
  attributeRequestUuid: Scalars['UUID']['input'];
  /** The claim path array */
  claimPath: Scalars['JSONObject']['input'];
  /** The JSON path for the SD-JWT claim */
  jsonPath: Scalars['NonEmpty']['input'];
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

/** Create input */
export type CreateAuthenticationBrandInput = {
  /** The UUID of the organization the brand belongs to. */
  authenticationUuid: Scalars['UUID']['input'];
  /** The UUID of the flow brand */
  organizationBrandUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateAuthenticationDomainInput = {
  /** The UUID of the organization the domain belongs to. */
  authenticationUuid: Scalars['UUID']['input'];
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
export type CreateAuthenticationInput = {
  /** The name of the flow. */
  name: Scalars['NonEmpty']['input'];
  /** The uuid of the organization the flow belongs to. */
  organizationUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateAuthenticationLabelInput = {
  /** The UUID of the organization the Label belongs to. */
  authenticationUuid: Scalars['UUID']['input'];
  /** The UUID of the flow Label */
  labelUuid: Scalars['UUID']['input'];
};

/** Create Input */
export type CreateAuthenticationProviderConfigurationNlWalletInput = {
  /** The AuthenticationProvider UUID */
  authenticationProviderUuid: Scalars['UUID']['input'];
  /** The usecase */
  usecase: Scalars['String']['input'];
};

/** The input for creating a flow authentication provider. */
export type CreateAuthenticationProviderInput = {
  /** The uuid of the flow the flow provider belongs to. */
  authenticationUuid: Scalars['UUID']['input'];
  /** The uuid of the flow provider app. */
  providerAppUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow authentication scope. */
export type CreateAuthenticationScopeInput = {
  /** The uuid of the provider. */
  authenticationProviderUuid: Scalars['UUID']['input'];
  /** The scope name */
  scopeUuid: Scalars['UUID']['input'];
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

/** Create input */
export type CreateCredentialLabelInput = {
  /** The UUID of the identity credential */
  credentialUuid: Scalars['UUID']['input'];
  /** The UUID of the label */
  labelUuid: Scalars['UUID']['input'];
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
  /** The credential background color */
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  /** The credential background image URI */
  backgroundImage?: InputMaybe<Scalars['String']['input']>;
  /** The credential UUID */
  credentialUuid: Scalars['UUID']['input'];
  /** mdoc document type */
  docType: Scalars['NonEmpty']['input'];
  /** The credential logo (uri and optional alt_text) */
  logo?: InputMaybe<Scalars['String']['input']>;
  /** The credential text color */
  textColor?: InputMaybe<Scalars['String']['input']>;
};

/** The input for creating a credential meta OID4VC SD-JWT. */
export type CreateCredentialMetaOid4VcsdjwtInput = {
  /** The credential background color */
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  /** The credential background image URI */
  backgroundImage?: InputMaybe<Scalars['String']['input']>;
  /** The credential UUID */
  credentialUuid: Scalars['UUID']['input'];
  /** SD-JWT Key binding */
  keyBinding: Scalars['Boolean']['input'];
  /** The credential logo (uri and optional alt_text) */
  logo?: InputMaybe<Scalars['String']['input']>;
  /** The credential text color */
  textColor?: InputMaybe<Scalars['String']['input']>;
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
  /** The issuer UUID */
  issuerUuid: Scalars['UUID']['input'];
};

/** The input for creating a credential request meta OID4VC mdoc. */
export type CreateCredentialRequestMetaOid4VcmdocInput = {
  /** The credential request UUID */
  credentialRequestUuid: Scalars['UUID']['input'];
  /** mdoc document type */
  docType: Scalars['NonEmpty']['input'];
  /** The issuer UUID */
  issuerUuid: Scalars['UUID']['input'];
};

/** The input for creating a credential request meta OID4VC SD-JWT. */
export type CreateCredentialRequestMetaOid4VcsdjwtInput = {
  /** The credential request UUID */
  credentialRequestUuid: Scalars['UUID']['input'];
  /** The issuer UUID */
  issuerUuid: Scalars['UUID']['input'];
  /** SD-JWT Key binding */
  keyBinding?: InputMaybe<Scalars['Boolean']['input']>;
  /** SD-JWT Type */
  type: Scalars['NonEmpty']['input'];
};

/** The input for creating a credential request meta yivi. */
export type CreateCredentialRequestMetaYiviInput = {
  /** The credential request UUID */
  credentialRequestUuid: Scalars['UUID']['input'];
  /** The identifier of this credential */
  id?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The issuer UUID */
  issuerUuid: Scalars['UUID']['input'];
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
  /** The issuer UUID */
  issuerUuid: Scalars['UUID']['input'];
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
  /** The grants allowed to take action */
  grants?: InputMaybe<Array<Scalars['String']['input']>>;
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

/** The input for creating a flow disclosure attribute. */
export type CreateDisclosureAttributeInput = {
  /** The uuid of the flow attribute. */
  attributeUuid: Scalars['UUID']['input'];
  /** The uuid of the query the attribute belongs to. */
  disclosureCredentialUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateDisclosureBrandInput = {
  /** The UUID of the organization the brand belongs to. */
  disclosureUuid: Scalars['UUID']['input'];
  /** The UUID of the flow brand */
  organizationBrandUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow disclosure field. */
export type CreateDisclosureCredentialInput = {
  /** The uuid of the credential. */
  credentialUuid: Scalars['UUID']['input'];
  /** The uuid of the group the credential belongs to. */
  disclosureGroupUuid: Scalars['UUID']['input'];
  /** The uuid of the issuer. */
  issuerUuid: Scalars['UUID']['input'];
  /** The uuid of the scheme. */
  schemeUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateDisclosureDomainInput = {
  /** The UUID of the organization the domain belongs to. */
  disclosureUuid: Scalars['UUID']['input'];
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
export type CreateDisclosureGroupInput = {
  /** The uuid of the provider. */
  disclosureProviderUuid: Scalars['UUID']['input'];
  /** The group name */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** The input for creating a flow disclosure. */
export type CreateDisclosureInput = {
  /** Optionally create a flow based on verification mappings */
  mappingVerifications?: InputMaybe<Array<UseMappingVerificationInput>>;
  /** The name of the flow. */
  name: Scalars['NonEmpty']['input'];
  /** The uuid of the organization the flow belongs to. */
  organizationUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateDisclosureLabelInput = {
  /** The UUID of the organization the Label belongs to. */
  disclosureUuid: Scalars['UUID']['input'];
  /** The UUID of the flow Label */
  labelUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateDisclosureMappingInput = {
  /** The UUID of the organization the mapping belongs to. */
  disclosureUuid: Scalars['UUID']['input'];
  /** The UUID of the verification mapping */
  mappingVerificationUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow disclosure provider by attributes. */
export type CreateDisclosureProviderByAttributesInput = {
  /** The uuids of all attributes to be created */
  attributeUuids: Array<Scalars['UUID']['input']>;
  /** The uuid of the flow the flow provider belongs to. */
  disclosureUuid: Scalars['UUID']['input'];
  /** The mode on how to create underlying structure */
  mode: CreateDisclosureProviderByAttributesMode;
  /** The uuid of the flow provider app. */
  providerAppUuid: Scalars['UUID']['input'];
};

/** Modes for creating a flow disclosure provider by attributes. */
export enum CreateDisclosureProviderByAttributesMode {
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
export type CreateDisclosureProviderConfigurationNlWalletInput = {
  /** The DisclosureProvider UUID */
  disclosureProviderUuid: Scalars['UUID']['input'];
  /** The usecase */
  usecase: Scalars['String']['input'];
};

/** The input for creating a flow disclosure provider. */
export type CreateDisclosureProviderInput = {
  /** The uuid of the flow the flow provider belongs to. */
  disclosureUuid: Scalars['UUID']['input'];
  /** The uuid of the flow provider app. */
  providerAppUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow issuance attribute. */
export type CreateIssuanceAttributeInput = {
  /** The uuid of the flow attribute. */
  attributeUuid: Scalars['UUID']['input'];
  /** The uuid of the query the attribute belongs to. */
  issuanceCredentialUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateIssuanceBrandInput = {
  /** The UUID of the organization the brand belongs to. */
  issuanceUuid: Scalars['UUID']['input'];
  /** The UUID of the flow brand */
  organizationBrandUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow issuance field. */
export type CreateIssuanceCredentialInput = {
  /** The uuid of the credential. */
  credentialUuid: Scalars['UUID']['input'];
  /** The uuid of the provider the credential belongs to. */
  issuanceProviderUuid: Scalars['UUID']['input'];
  /** The uuid of the issuer. */
  issuerUuid: Scalars['UUID']['input'];
  /** The meta type of the credential */
  metaType: IssuanceCredentialMetaType;
  /** The uuid of the scheme. */
  schemeUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow credential meta datakeeper */
export type CreateIssuanceCredentialMetaDatakeeperInput = {
  /** The expiration duration, in milliseconds */
  expirationDuration: Scalars['Int']['input'];
  /** The flow issuance credential UUID */
  issuanceCredentialUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow credential meta yivi */
export type CreateIssuanceCredentialMetaYiviInput = {
  /** The expiration duration, in milliseconds */
  expirationDuration: Scalars['Int']['input'];
  /** The flow issuance credential UUID */
  issuanceCredentialUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateIssuanceDomainInput = {
  /** The UUID of the organization the domain belongs to. */
  issuanceUuid: Scalars['UUID']['input'];
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
export type CreateIssuanceInput = {
  /** The name of the flow. */
  name: Scalars['NonEmpty']['input'];
  /** The uuid of the organization the flow belongs to. */
  organizationUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateIssuanceLabelInput = {
  /** The UUID of the organization the Label belongs to. */
  issuanceUuid: Scalars['UUID']['input'];
  /** The UUID of the flow Label */
  labelUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateIssuanceMappingInput = {
  /** The UUID of the organization the mapping belongs to. */
  issuanceUuid: Scalars['UUID']['input'];
  /** The UUID of the issuance mapping */
  mappingIssuanceUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow issuance attribute. */
export type CreateIssuanceProviderByAttributesInput = {
  /** The UUIDs of all attributes to be created */
  attributeUuids: Array<Scalars['UUID']['input']>;
  /** The uuid of the flow the flow provider belongs to. */
  issuanceUuid: Scalars['UUID']['input'];
  /** The uuid of the flow provider app. */
  providerAppUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow issuance provider. */
export type CreateIssuanceProviderInput = {
  /** The uuid of the flow the flow provider belongs to. */
  issuanceUuid: Scalars['UUID']['input'];
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

/** Create input */
export type CreateIssuerLabelInput = {
  /** The UUID of the identity issuer */
  issuerUuid: Scalars['UUID']['input'];
  /** The UUID of the label */
  labelUuid: Scalars['UUID']['input'];
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
  /** The issuer's logo image URI */
  logo?: InputMaybe<Scalars['String']['input']>;
};

/** The input for creating a issuer meta OID4VC. */
export type CreateIssuerMetaOid4VcsdjwtInput = {
  /** The issuer's identifier (iss) */
  identifier: Scalars['NonEmpty']['input'];
  /** The issuer UUID */
  issuerUuid: Scalars['UUID']['input'];
  /** The issuer's public key as a JWK */
  jwk: Scalars['JSONObject']['input'];
  /** The issuer's logo image URI */
  logo?: InputMaybe<Scalars['String']['input']>;
};

/** The input for creating a issuer meta yivi. */
export type CreateIssuerMetaYiviInput = {
  /** The identifier of the issuer */
  id: Scalars['NonEmpty']['input'];
  /** The issuer UUID */
  issuerUuid: Scalars['UUID']['input'];
};

/** Input for creating a label */
export type CreateLabelInput = {
  /** Color string */
  color: Scalars['NonEmpty']['input'];
  /** Label name */
  name: Scalars['NonEmpty']['input'];
  /** Organization UUID (required for non-catalog scopes) */
  organizationUuid?: InputMaybe<Scalars['UUID']['input']>;
  /** Label scope */
  scope: LabelScope;
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

/** The input for creating a maintenance. */
export type CreateMaintenanceInput = {
  /** The estimated duration in minutes. */
  estimatedMinutes?: InputMaybe<Scalars['Int']['input']>;
  /** The URN identifier for the maintenance scope (e.g., maintenance/global, maintenance/oauth/global). */
  maintenanceURN: Scalars['NonEmpty']['input'];
  /** The message body. */
  messageBody?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The message title. */
  messageTitle?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The name of the maintenance window. */
  name: Scalars['NonEmpty']['input'];
  /** The scheduled start time. */
  scheduledAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  model: CatalogModelType;
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
  /** The issuer ID */
  issuerId?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The private key identifier */
  keyIdentifier?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The organization app UUID */
  organizationAppUuid: Scalars['UUID']['input'];
};

/** The input for creating a organization app meta OID4VC. */
export type CreateOrganizationAppMetaOid4vcInput = {
  /** The organization app UUID */
  organizationAppUuid: Scalars['UUID']['input'];
  /** The verifier certificate identifier */
  verifierCertIdentifier?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The verifier key identifier */
  verifierKeyIdentifier?: InputMaybe<Scalars['NonEmpty']['input']>;
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
export type CreateOrganizationBrandLabelInput = {
  /** The UUID of the flow Label */
  labelUuid: Scalars['UUID']['input'];
  /** The UUID of the organization the Label belongs to. */
  organizationBrandUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateOrganizationClientInput = {
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

/** Create input */
export type CreateOrganizationDomainLabelInput = {
  /** The UUID of the flow Label */
  labelUuid: Scalars['UUID']['input'];
  /** The UUID of the organization the Label belongs to. */
  organizationDomainUuid: Scalars['UUID']['input'];
};

/** The input for creating a Provider App. */
export type CreateOrganizationDomainOAuthProviderInput = {
  /** The UUID of the oauth provider. */
  oauthProviderUuid: Scalars['UUID']['input'];
  /** The UUID of the organization domain. */
  organizationDomainUuid: Scalars['UUID']['input'];
};

/** Input type used to create DIRECT organizations. */
export type CreateOrganizationInput = {
  /** The organization description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The public email address of the organization. */
  email?: InputMaybe<Scalars['Email']['input']>;
  /** The organization name. */
  name: Scalars['NonEmpty']['input'];
  /** The phone number of the organization. */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** The organization type (DIRECT or PARTNER). Defaults to DIRECT. */
  type?: InputMaybe<OrganizationType>;
  /** The url of the website of the organization. */
  website?: InputMaybe<Scalars['URL']['input']>;
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
  /** The UUID of the organization the organization user belongs to. */
  organizationUuid: Scalars['UUID']['input'];
  /** The OAuth role of the user. */
  role: OrganizationUserRole;
  /** The UUID of the user the organization user belongs to. */
  userUuid: Scalars['UUID']['input'];
};

/** Input type used to create pricing catalog entries. */
export type CreatePricingCatalogInput = {
  /** The price amount */
  amount: Scalars['Int']['input'];
  /** The currency */
  currency: Currency;
  /** The currency unit */
  currencyUnit: CurrencyUnit;
  /** Unique key identifier */
  key: Scalars['NonEmpty']['input'];
};

/** Input type used to create pricing configuration for apps. */
export type CreatePricingConfigurationAppInput = {
  /** Aggregation strategy for combining multiple prices */
  aggregationStrategy: PricingAggregationStrategy;
  /** The app UUID */
  appUuid: Scalars['UUID']['input'];
  /** Target hierarchy level for pricing calculation */
  targetLevel: PricingHierarchyLevel;
};

/** Input type used to create pricing configuration for organizations. */
export type CreatePricingConfigurationOrganizationInput = {
  /** Aggregation strategy for combining multiple prices */
  aggregationStrategy: PricingAggregationStrategy;
  /** The organization UUID */
  organizationUuid: Scalars['UUID']['input'];
  /** Target hierarchy level for pricing calculation */
  targetLevel: PricingHierarchyLevel;
};

/** Input type used to create pricing configuration for studio plans. */
export type CreatePricingConfigurationStudioPlanInput = {
  /** Aggregation strategy for combining multiple prices */
  aggregationStrategy: PricingAggregationStrategy;
  /** The studio plan UUID */
  studioPlanUuid: Scalars['UUID']['input'];
  /** Target hierarchy level for pricing calculation */
  targetLevel: PricingHierarchyLevel;
};

/** Input type used to create pricing group assignments. */
export type CreatePricingGroupAssignmentInput = {
  /** The type of entity being assigned */
  entityType: PricingGroupAssignmentType;
  /** The UUID of the entity */
  entityUuid: Scalars['UUID']['input'];
  /** The UUID of the pricing group */
  pricingGroupUuid: Scalars['UUID']['input'];
};

/** Input type used to create pricing groups. */
export type CreatePricingGroupInput = {
  /** Description of the pricing group */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The name of the pricing group */
  name: Scalars['NonEmpty']['input'];
};

/** Input type used to create pricing rule constraints. */
export type CreatePricingRuleConstraintInput = {
  /** The pricing rule UUID */
  pricingRuleUuid: Scalars['UUID']['input'];
  /** The scope */
  scope: PricingHierarchyLevel;
  /** Scope group UUIDs */
  scopeGroupUuids?: InputMaybe<Array<Scalars['UUID']['input']>>;
  /** Specific scope UUID */
  scopeUuid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Input type used to create pricing rules. */
export type CreatePricingRuleInput = {
  /** The app UUID */
  appUuid: Scalars['UUID']['input'];
  /** Pricing conditions */
  conditions?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The pricing layer */
  layer: PricingLayer;
  /** The organization UUID (optional, for ORGANIZATION layer) */
  organizationUuid?: InputMaybe<Scalars['UUID']['input']>;
  /** The plan UUID (optional, for PLAN layer) */
  planUuid?: InputMaybe<Scalars['UUID']['input']>;
  /** The pricing catalog UUID */
  pricingCatalogUuid: Scalars['UUID']['input'];
  /** The pricing type */
  type: PricingType;
};

/** Input type used to create pricing rule targets. */
export type CreatePricingRuleTargetInput = {
  /** The hierarchy level */
  level: PricingHierarchyLevel;
  /** Entity group UUIDs (optional) */
  levelGroupUuids?: InputMaybe<Array<Scalars['UUID']['input']>>;
  /** Specific entity UUID (optional) */
  levelUuid?: InputMaybe<Scalars['UUID']['input']>;
  /** The pricing rule UUID */
  pricingRuleUuid: Scalars['UUID']['input'];
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
  draftVersion?: InputMaybe<Scalars['Int']['input']>;
  /** The protocol */
  protocol?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The ProviderApp UUID */
  providerAppUuid: Scalars['UUID']['input'];
  /** The spec type supported by this app */
  specType: ProviderAppMetaOid4VcSpecType;
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

/** Create input */
export type CreateProviderLabelInput = {
  /** The UUID of the label */
  labelUuid: Scalars['UUID']['input'];
  /** The UUID of the identity provider */
  providerUuid: Scalars['UUID']['input'];
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

/** Create input */
export type CreateSchemeLabelInput = {
  /** The UUID of the label */
  labelUuid: Scalars['UUID']['input'];
  /** The UUID of the identity scheme */
  schemeUuid: Scalars['UUID']['input'];
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

/** The input for creating a flow signature attribute. */
export type CreateSignatureAttributeInput = {
  /** The uuid of the flow attribute. */
  attributeUuid: Scalars['UUID']['input'];
  /** The uuid of the query the attribute belongs to. */
  signatureCredentialUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateSignatureBrandInput = {
  /** The UUID of the flow brand */
  organizationBrandUuid: Scalars['UUID']['input'];
  /** The UUID of the organization the brand belongs to. */
  signatureUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow signature field. */
export type CreateSignatureCredentialInput = {
  /** The uuid of the credential. */
  credentialUuid: Scalars['UUID']['input'];
  /** The uuid of the issuer. */
  issuerUuid: Scalars['UUID']['input'];
  /** The uuid of the scheme. */
  schemeUuid: Scalars['UUID']['input'];
  /** The uuid of the group the credential belongs to. */
  signatureGroupUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateSignatureDomainInput = {
  /** The UUID of the flow domain */
  organizationDomainUuid: Scalars['UUID']['input'];
  /** The path value. */
  redirectPath: Scalars['RedirectPath']['input'];
  /** The port value. */
  redirectPort: Scalars['RedirectPort']['input'];
  /** The protocol value. */
  redirectProtocol: Scalars['RedirectProtocol']['input'];
  /** The UUID of the organization the domain belongs to. */
  signatureUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow signature group. */
export type CreateSignatureGroupInput = {
  /** The group name */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The uuid of the provider. */
  signatureProviderUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow signature. */
export type CreateSignatureInput = {
  /** Optionally create a flow based on verification mappings */
  mappingVerifications?: InputMaybe<Array<UseMappingVerificationInput>>;
  /** The name of the flow. */
  name: Scalars['NonEmpty']['input'];
  /** The uuid of the organization the flow belongs to. */
  organizationUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateSignatureLabelInput = {
  /** The UUID of the flow Label */
  labelUuid: Scalars['UUID']['input'];
  /** The UUID of the organization the Label belongs to. */
  signatureUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateSignatureMappingInput = {
  /** The UUID of the verification mapping */
  mappingVerificationUuid: Scalars['UUID']['input'];
  /** The UUID of the organization the mapping belongs to. */
  signatureUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow signature by attributes. */
export type CreateSignatureProviderByAttributesInput = {
  /** The UUIDs of all attributes to be created */
  attributeUuids: Array<Scalars['UUID']['input']>;
  /** The mode on how to create underlying structure */
  mode: CreateSignatureProviderByAttributesMode;
  /** The uuid of the flow provider app. */
  providerAppUuid: Scalars['UUID']['input'];
  /** The uuid of the flow the flow provider belongs to. */
  signatureUuid: Scalars['UUID']['input'];
};

/** Modes for creating a flow signature provider by attributes. */
export enum CreateSignatureProviderByAttributesMode {
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
export type CreateSignatureProviderConfigurationNlWalletInput = {
  /** The SignatureProvider UUID */
  signatureProviderUuid: Scalars['UUID']['input'];
  /** The usecase */
  usecase: Scalars['String']['input'];
};

/** The input for creating a flow signature provider. */
export type CreateSignatureProviderInput = {
  /** The uuid of the flow provider app. */
  providerAppUuid: Scalars['UUID']['input'];
  /** The uuid of the flow the flow provider belongs to. */
  signatureUuid: Scalars['UUID']['input'];
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
  /** The first name of the user. */
  firstName: Scalars['NonEmpty']['input'];
  /** The grant classification of the user. */
  grant: Scalars['Grant']['input'];
  /** The last name of the user. */
  lastName: Scalars['NonEmpty']['input'];
  /** The organization for which user is invited. */
  organizationUuid: Scalars['UUID']['input'];
  /** The OAuth role of the user. */
  role: OrganizationUserRole;
};

export type CreateUserResetInput = {
  /** The email of the user which we're resetting the password of. */
  email: Scalars['Email']['input'];
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

/** Identity credential label definition. */
export type CredentialLabel = Model & {
  __typename?: 'CredentialLabel';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The identity credential (resolved via federation) */
  credential: Credential;
  /** The identity credential UUID (no direct relation - separate database) */
  credentialUuid: Scalars['UUID']['output'];
  /** The Label */
  label: Label;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** Connection */
export type CredentialLabelConnection = {
  __typename?: 'CredentialLabelConnection';
  edges: Array<CredentialLabelEdge>;
  pageInfo: PageInfo;
};

/** Edge */
export type CredentialLabelEdge = {
  __typename?: 'CredentialLabelEdge';
  cursor: Scalars['String']['output'];
  node: CredentialLabel;
};

/** Fields which can be used to filter identity credential labels. Value must be camel case. */
export enum CredentialLabelFilteringField {
  CredentialUuid = 'credentialUuid',
  LabelUuid = 'labelUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort identity credential labels. Value must be camel case. */
export enum CredentialLabelSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting identity credential labels. */
export type CredentialLabelSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialLabelSortEnum;
};

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
  /** The credential background color */
  backgroundColor?: Maybe<Scalars['String']['output']>;
  /** The credential background image URI */
  backgroundImage?: Maybe<Scalars['String']['output']>;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential meta the OID4VC mdoc meta belongs to. */
  credentialMeta: CredentialMeta;
  /** mdoc document type */
  docType: Scalars['NonEmpty']['output'];
  /** The credential logo (uri and optional alt_text) */
  logo?: Maybe<Scalars['String']['output']>;
  /** The credential text color */
  textColor?: Maybe<Scalars['String']['output']>;
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
  /** The credential background color */
  backgroundColor?: Maybe<Scalars['String']['output']>;
  /** The credential background image URI */
  backgroundImage?: Maybe<Scalars['String']['output']>;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential meta the OID4VC SD-JWT meta belongs to. */
  credentialMeta: CredentialMeta;
  /** SD-JWT Key binding */
  keyBinding: Scalars['Boolean']['output'];
  /** The credential logo (uri and optional alt_text) */
  logo?: Maybe<Scalars['String']['output']>;
  /** The credential text color */
  textColor?: Maybe<Scalars['String']['output']>;
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

/** The input for filtering attributes */
export type CredentialNestedFilteringAttributesField = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The input for filtering attributes */
  input: FindManyAttributesInput;
  /** The type of filtering */
  type?: InputMaybe<NestedFilteringType>;
};

/** The input for filtering credential meta */
export type CredentialNestedFilteringCredentialMetaField = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The input for filtering credential meta */
  input: FindManyCredentialMetaInput;
};

/** The input for filtering issuer */
export type CredentialNestedFilteringIssuerField = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The input for filtering issuer */
  input: FindManyIssuersInput;
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
  /** The OID4VC mdoc credential request meta */
  oid4vcMdoc?: Maybe<CredentialRequestMetaOid4Vcmdoc>;
  /** The OID4VC SD-JWT credential request meta */
  oid4vcSdJwt?: Maybe<CredentialRequestMetaOid4Vcsdjwt>;
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
  /** The issuer UUID */
  issuerUuid: Scalars['UUID']['output'];
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

/** Credential request meta OID4VC mdoc definition. */
export type CredentialRequestMetaOid4Vcmdoc = Model & {
  __typename?: 'CredentialRequestMetaOID4VCMDOC';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** mdoc document type */
  docType: Scalars['NonEmpty']['output'];
  /** The issuer UUID */
  issuerUuid: Scalars['UUID']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential request meta OID4VC mdoc connection definition. */
export type CredentialRequestMetaOid4VcmdocConnection = {
  __typename?: 'CredentialRequestMetaOID4VCMDOCConnection';
  edges: Array<Maybe<CredentialRequestMetaOid4VcmdocEdge>>;
  pageInfo: PageInfo;
};

/** The credential request meta OID4VC mdoc edge definition. */
export type CredentialRequestMetaOid4VcmdocEdge = {
  __typename?: 'CredentialRequestMetaOID4VCMDOCEdge';
  cursor: Scalars['String']['output'];
  node: CredentialRequestMetaOid4Vcmdoc;
};

/** Fields which can be used to filter credential request meta OID4VC mdoc on. Value must be camel case. */
export enum CredentialRequestMetaOid4VcmdocFilteringField {
  CredentialRequestMetaUuid = 'credentialRequestMetaUuid',
  DocType = 'docType'
}

/** Fields which can be used to sort credential request meta OID4VC mdoc on. Value must be camel case. */
export enum CredentialRequestMetaOid4VcmdocSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential request meta OID4VC mdoc. */
export type CredentialRequestMetaOid4VcmdocSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialRequestMetaOid4VcmdocSortEnum;
};

/** Credential request meta OID4VC SD-JWT definition. */
export type CredentialRequestMetaOid4Vcsdjwt = Model & {
  __typename?: 'CredentialRequestMetaOID4VCSDJWT';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential request meta the OID4VC SD-JWT meta belongs to. */
  credentialRequestMeta: CredentialRequestMeta;
  /** The issuer UUID */
  issuerUuid: Scalars['UUID']['output'];
  /** SD-JWT Key binding */
  keyBinding: Scalars['Boolean']['output'];
  /** SD-JWT Type */
  type: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential request meta OID4VC SD-JWT connection definition. */
export type CredentialRequestMetaOid4VcsdjwtConnection = {
  __typename?: 'CredentialRequestMetaOID4VCSDJWTConnection';
  edges: Array<Maybe<CredentialRequestMetaOid4VcsdjwtEdge>>;
  pageInfo: PageInfo;
};

/** The credential request meta OID4VC SD-JWT edge definition. */
export type CredentialRequestMetaOid4VcsdjwtEdge = {
  __typename?: 'CredentialRequestMetaOID4VCSDJWTEdge';
  cursor: Scalars['String']['output'];
  node: CredentialRequestMetaOid4Vcsdjwt;
};

/** Fields which can be used to filter credential request meta OID4VC SD-JWT on. Value must be camel case. */
export enum CredentialRequestMetaOid4VcsdjwtFilteringField {
  CredentialRequestMetaUuid = 'credentialRequestMetaUuid',
  Type = 'type'
}

/** Fields which can be used to sort credential request meta OID4VC SD-JWT on. Value must be camel case. */
export enum CredentialRequestMetaOid4VcsdjwtSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential request meta OID4VC SD-JWT. */
export type CredentialRequestMetaOid4VcsdjwtSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialRequestMetaOid4VcsdjwtSortEnum;
};

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
  Oid4VcMdoc = 'OID4VC_MDOC',
  Oid4VcSdJwt = 'OID4VC_SD_JWT',
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
  /** The issuer UUID */
  issuerUuid: Scalars['UUID']['output'];
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
  /** The issuer UUID */
  issuerUuid: Scalars['UUID']['output'];
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
  /** The grants allowed to take action */
  grants: Array<Scalars['String']['output']>;
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

/** Flow disclosure definition. */
export type Disclosure = Model & {
  __typename?: 'Disclosure';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The associated brand with this disclosure */
  disclosureBrands: DisclosureBrandConnection;
  /** The associated domains with this disclosure */
  disclosureDomains: DisclosureDomainConnection;
  /** The associated labels with this disclosure */
  disclosureLabels: DisclosureLabelConnection;
  /** The associated mappings with this disclosure */
  disclosureMappings: DisclosureMappingConnection;
  /** A list of flow providers belonging to this flow disclosure. */
  disclosureProviders: DisclosureProviderConnection;
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
  state: DisclosureState;
  /** Shortcut to active studio controls associated to this object */
  studioControlCompacts: Array<StudioControlCompact>;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Flow disclosure definition. */
export type DisclosureDisclosureBrandsArgs = {
  input?: InputMaybe<FindManyDisclosureBrandsInput>;
};


/** Flow disclosure definition. */
export type DisclosureDisclosureDomainsArgs = {
  input?: InputMaybe<FindManyDisclosureDomainsInput>;
};


/** Flow disclosure definition. */
export type DisclosureDisclosureLabelsArgs = {
  input?: InputMaybe<FindManyDisclosureLabelsInput>;
};


/** Flow disclosure definition. */
export type DisclosureDisclosureMappingsArgs = {
  input?: InputMaybe<FindManyDisclosureMappingsInput>;
};


/** Flow disclosure definition. */
export type DisclosureDisclosureProvidersArgs = {
  input?: InputMaybe<FindManyDisclosureProvidersInput>;
};

/** DisclosureAction */
export enum DisclosureAction {
  Activate = 'ACTIVATE',
  Deactivate = 'DEACTIVATE'
}

/** Disclosure activity definition. */
export type DisclosureActivity = Model & {
  __typename?: 'DisclosureActivity';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The disclosure UUID */
  disclosureUuid: Scalars['UUID']['output'];
  /** The event URN */
  eventURN: Scalars['URN']['output'];
  /** The metadata */
  meta: Scalars['JSONObject']['output'];
  /** The organization UUID */
  organizationUuid: Scalars['UUID']['output'];
  /** The request UUID */
  requestUuid: Scalars['UUID']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The disclosure activity connection definition. */
export type DisclosureActivityConnection = {
  __typename?: 'DisclosureActivityConnection';
  edges: Array<Maybe<DisclosureActivityEdge>>;
  pageInfo: PageInfo;
};

/** The disclosure activity edge definition. */
export type DisclosureActivityEdge = {
  __typename?: 'DisclosureActivityEdge';
  cursor: Scalars['String']['output'];
  node: DisclosureActivity;
};

/** Fields which can be used to filter disclosure activities on. */
export enum DisclosureActivityFilteringField {
  CreatedAt = 'createdAt',
  DisclosureUuid = 'disclosureUuid',
  EventUrn = 'eventURN',
  OrganizationUuid = 'organizationUuid',
  RequestUuid = 'requestUuid'
}

/** Fields which can be used to sort disclosure activities on. */
export enum DisclosureActivitySortEnum {
  CreatedAt = 'createdAt',
  EventUrn = 'eventUrn'
}

/** Input options for sorting disclosure activities. */
export type DisclosureActivitySortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: DisclosureActivitySortEnum;
};

/** Flow disclosure attribute definition. */
export type DisclosureAttribute = Model & {
  __typename?: 'DisclosureAttribute';
  /** The attribute the attributeUuid belongs to. */
  attribute: Attribute;
  /** The uuid of the flow attribute. */
  attributeUuid: Scalars['UUID']['output'];
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The flow disclosure the flow query belongs to. */
  disclosureCredential: DisclosureCredential;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};

/** The flow disclosure attribute connection definition. */
export type DisclosureAttributeConnection = {
  __typename?: 'DisclosureAttributeConnection';
  edges: Array<DisclosureAttributeEdge>;
  pageInfo: PageInfo;
};

/** The flow disclosure attribute edge definition. */
export type DisclosureAttributeEdge = {
  __typename?: 'DisclosureAttributeEdge';
  cursor: Scalars['String']['output'];
  node: DisclosureAttribute;
};

/** Fields which can be used to filter flow disclosure attribute on. Value must be camel case. */
export enum DisclosureAttributeFilteringField {
  AttributeUuid = 'attributeUuid',
  DisclosureCredentialUuid = 'disclosureCredentialUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow disclosure attribute on. Value must be camel case. */
export enum DisclosureAttributeSortEnum {
  AttributeUuid = 'attributeUuid',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow disclosure attribute. */
export type DisclosureAttributeSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: DisclosureAttributeSortEnum;
};

/** Organization brand definition. */
export type DisclosureBrand = Model & {
  __typename?: 'DisclosureBrand';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The flow disclosure */
  disclosure: Disclosure;
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
export type DisclosureBrandConnection = {
  __typename?: 'DisclosureBrandConnection';
  edges: Array<DisclosureBrandEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type DisclosureBrandEdge = {
  __typename?: 'DisclosureBrandEdge';
  cursor: Scalars['String']['output'];
  node: DisclosureBrand;
};

/** Fields which can be used to filter brands on. Value must be camel case. */
export enum DisclosureBrandFilteringField {
  DisclosureUuid = 'disclosureUuid',
  OrganizationBrandUuid = 'organizationBrandUuid',
  RedirectPath = 'redirectPath',
  Uuid = 'uuid'
}

/** Fields which can be used to sort brands on. Value must be camel case. */
export enum DisclosureBrandSortEnum {
  CreatedAt = 'createdAt',
  RedirectPath = 'redirectPath',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting brands. */
export type DisclosureBrandSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: DisclosureBrandSortEnum;
};

/** The flow disclosure connection definition. */
export type DisclosureConnection = {
  __typename?: 'DisclosureConnection';
  edges: Array<Maybe<DisclosureEdge>>;
  pageInfo: PageInfo;
};

/** Flow disclosure credential definition. */
export type DisclosureCredential = Model & {
  __typename?: 'DisclosureCredential';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The credential the credentialUuid belongs to. */
  credential: Credential;
  /** The uuid of the credential. */
  credentialUuid: Scalars['UUID']['output'];
  /** The associated fields with this credential */
  disclosureAttributes: DisclosureAttributeConnection;
  /** The flow disclosure group the flow disclosure credential belongs to. */
  disclosureGroup: DisclosureGroup;
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
export type DisclosureCredentialDisclosureAttributesArgs = {
  input?: InputMaybe<FindManyDisclosureAttributesInput>;
};

/** The flow disclosure field connection definition. */
export type DisclosureCredentialConnection = {
  __typename?: 'DisclosureCredentialConnection';
  edges: Array<DisclosureCredentialEdge>;
  pageInfo: PageInfo;
};

/** The flow disclosure field edge definition. */
export type DisclosureCredentialEdge = {
  __typename?: 'DisclosureCredentialEdge';
  cursor: Scalars['String']['output'];
  node: DisclosureCredential;
};

/** Fields which can be used to filter flow disclosure field on. Value must be camel case. */
export enum DisclosureCredentialFilteringField {
  CredentialUuid = 'credentialUuid',
  DisclosureGroupUuid = 'disclosureGroupUuid',
  IssuerUuid = 'issuerUuid',
  SchemeUuid = 'schemeUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow disclosure field on. Value must be camel case. */
export enum DisclosureCredentialSortEnum {
  CreatedAt = 'createdAt',
  CredentialUuid = 'credentialUuid',
  IssuerUuid = 'issuerUuid',
  SchemeUuid = 'schemeUuid',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow disclosure field. */
export type DisclosureCredentialSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: DisclosureCredentialSortEnum;
};

/** Organization domain definition. */
export type DisclosureDomain = Model & {
  __typename?: 'DisclosureDomain';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The flow disclosure */
  disclosure: Disclosure;
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
export type DisclosureDomainConnection = {
  __typename?: 'DisclosureDomainConnection';
  edges: Array<DisclosureDomainEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type DisclosureDomainEdge = {
  __typename?: 'DisclosureDomainEdge';
  cursor: Scalars['String']['output'];
  node: DisclosureDomain;
};

/** Fields which can be used to filter domains on. Value must be camel case. */
export enum DisclosureDomainFilteringField {
  DisclosureUuid = 'disclosureUuid',
  OrganizationDomainUuid = 'organizationDomainUuid',
  RedirectPath = 'redirectPath',
  Uuid = 'uuid'
}

/** Fields which can be used to sort domains on. Value must be camel case. */
export enum DisclosureDomainSortEnum {
  CreatedAt = 'createdAt',
  RedirectPath = 'redirectPath',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting domains. */
export type DisclosureDomainSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: DisclosureDomainSortEnum;
};

/** The flow disclosure edge definition. */
export type DisclosureEdge = {
  __typename?: 'DisclosureEdge';
  cursor: Scalars['String']['output'];
  node: Disclosure;
};

/** Fields which can be used to filter flow disclosures on. Value must be camel case. */
export enum DisclosureFilteringField {
  Name = 'name',
  OrganizationUuid = 'organizationUuid',
  State = 'state',
  Uuid = 'uuid'
}

/** Flow disclosure group definition. */
export type DisclosureGroup = Model & {
  __typename?: 'DisclosureGroup';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** A list of flow queries belonging to this flow group. */
  disclosureCredentials: DisclosureCredentialConnection;
  /** The flow disclosure the flow group belongs to. */
  disclosureProvider: DisclosureProvider;
  /** The name */
  name?: Maybe<Scalars['NonEmpty']['output']>;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Flow disclosure group definition. */
export type DisclosureGroupDisclosureCredentialsArgs = {
  input?: InputMaybe<FindManyDisclosureCredentialsInput>;
};

/** The flow disclosure group connection definition. */
export type DisclosureGroupConnection = {
  __typename?: 'DisclosureGroupConnection';
  edges: Array<DisclosureGroupEdge>;
  pageInfo: PageInfo;
};

/** The flow disclosure group edge definition. */
export type DisclosureGroupEdge = {
  __typename?: 'DisclosureGroupEdge';
  cursor: Scalars['String']['output'];
  node: DisclosureGroup;
};

/** Fields which can be used to filter flow disclosure group on. Value must be camel case. */
export enum DisclosureGroupFilteringField {
  DisclosureProviderUuid = 'disclosureProviderUuid',
  Name = 'name',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow disclosure group on. Value must be camel case. */
export enum DisclosureGroupSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow disclosure group. */
export type DisclosureGroupSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: DisclosureGroupSortEnum;
};

/** Organization Label definition. */
export type DisclosureLabel = Model & {
  __typename?: 'DisclosureLabel';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The flow disclosure */
  disclosure: Disclosure;
  /** The Label */
  label: Label;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** An Connection */
export type DisclosureLabelConnection = {
  __typename?: 'DisclosureLabelConnection';
  edges: Array<DisclosureLabelEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type DisclosureLabelEdge = {
  __typename?: 'DisclosureLabelEdge';
  cursor: Scalars['String']['output'];
  node: DisclosureLabel;
};

/** Fields which can be used to filter Labels on. Value must be camel case. */
export enum DisclosureLabelFilteringField {
  DisclosureUuid = 'disclosureUuid',
  LabelUuid = 'labelUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort Labels on. Value must be camel case. */
export enum DisclosureLabelSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting Labels. */
export type DisclosureLabelSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: DisclosureLabelSortEnum;
};

/** Organization mapping definition. */
export type DisclosureMapping = Model & {
  __typename?: 'DisclosureMapping';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The flow disclosure */
  disclosure: Disclosure;
  /** The user verification mapping */
  mappingVerification: MappingVerification;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** An Connection */
export type DisclosureMappingConnection = {
  __typename?: 'DisclosureMappingConnection';
  edges: Array<DisclosureMappingEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type DisclosureMappingEdge = {
  __typename?: 'DisclosureMappingEdge';
  cursor: Scalars['String']['output'];
  node: DisclosureMapping;
};

/** Fields which can be used to filter mappings on. Value must be camel case. */
export enum DisclosureMappingFilteringField {
  DisclosureUuid = 'disclosureUuid',
  MappingVerificationUuid = 'mappingVerificationUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort mappings on. Value must be camel case. */
export enum DisclosureMappingSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting mappings. */
export type DisclosureMappingSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: DisclosureMappingSortEnum;
};

/** The input for filtering flow disclosure brands in nested filtering. */
export type DisclosureNestedFilteringDisclosureBrandField = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The input for filtering flow disclosure brands */
  input: FindManyDisclosureBrandsInput;
  /** The type of filtering */
  type?: InputMaybe<NestedFilteringType>;
};

/** The input for filtering flow disclosure labels in nested filtering. */
export type DisclosureNestedFilteringDisclosureLabelField = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The input for filtering flow disclosure labels */
  input: FindManyDisclosureLabelsInput;
  /** The type of filtering */
  type?: InputMaybe<NestedFilteringType>;
};

/** Flow disclosure provider definition. */
export type DisclosureProvider = Model & {
  __typename?: 'DisclosureProvider';
  /** The flow disclosure provider configuration. */
  configuration?: Maybe<DisclosureProviderConfiguration>;
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The flow disclosure the flow provider belongs to. */
  disclosure: Disclosure;
  /** A list of flow queries belonging to this flow provider. */
  disclosureGroups: DisclosureGroupConnection;
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
export type DisclosureProviderDisclosureGroupsArgs = {
  input?: InputMaybe<FindManyDisclosureGroupsInput>;
};

/** Flow disclosure provider configuration definition */
export type DisclosureProviderConfiguration = Model & {
  __typename?: 'DisclosureProviderConfiguration';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The DisclosureProvider this configuration belongs to */
  disclosureProvider: DisclosureProvider;
  /** The NL Wallet flow disclosure provider configuration */
  nlWallet?: Maybe<DisclosureProviderConfigurationNlWallet>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The DisclosureProviderConfiguration connection definition. */
export type DisclosureProviderConfigurationConnection = {
  __typename?: 'DisclosureProviderConfigurationConnection';
  edges: Array<Maybe<DisclosureProviderConfigurationEdge>>;
  pageInfo: PageInfo;
};

/** The DisclosureProviderConfiguration edge definition. */
export type DisclosureProviderConfigurationEdge = {
  __typename?: 'DisclosureProviderConfigurationEdge';
  cursor: Scalars['String']['output'];
  node: DisclosureProviderConfiguration;
};

/** Fields which can be used to filter DisclosureProviderConfiguration on. Value must be camel case. */
export enum DisclosureProviderConfigurationFilteringField {
  DisclosureProviderUuid = 'disclosureProviderUuid'
}

/** DisclosureProviderConfigurationNLWallet definition */
export type DisclosureProviderConfigurationNlWallet = Model & {
  __typename?: 'DisclosureProviderConfigurationNLWallet';
  /** The creation timestamp */
  createdAt: Scalars['DateTime']['output'];
  /** The DisclosureProviderConfiguration this object belongs to. */
  disclosureProviderConfiguration: DisclosureProviderConfiguration;
  /** The timestamp of when the type has been last updated */
  updatedAt: Scalars['DateTime']['output'];
  /** The usecase */
  usecase: Scalars['String']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The DisclosureProviderConfigurationNLWallet connection definition. */
export type DisclosureProviderConfigurationNlWalletConnection = {
  __typename?: 'DisclosureProviderConfigurationNLWalletConnection';
  edges: Array<Maybe<DisclosureProviderConfigurationNlWalletEdge>>;
  pageInfo: PageInfo;
};

/** The DisclosureProviderConfigurationNLWallet edge definition. */
export type DisclosureProviderConfigurationNlWalletEdge = {
  __typename?: 'DisclosureProviderConfigurationNLWalletEdge';
  cursor: Scalars['String']['output'];
  node: DisclosureProviderConfigurationNlWallet;
};

/** Fields which can be used to filter DisclosureProviderConfigurationNLWallet on. Value must be camel case. */
export enum DisclosureProviderConfigurationNlWalletFilteringField {
  DisclosureProviderConfigurationUuid = 'disclosureProviderConfigurationUuid',
  Intent = 'intent'
}

/** Fields which can be used to sort DisclosureProviderConfigurationNLWallet on. Value must be camel case. */
export enum DisclosureProviderConfigurationNlWalletSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting DisclosureProviderConfigurationNLWallet. */
export type DisclosureProviderConfigurationNlWalletSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: DisclosureProviderConfigurationNlWalletSortEnum;
};

/** Fields which can be used to sort DisclosureProviderConfiguration on. Value must be camel case. */
export enum DisclosureProviderConfigurationSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting DisclosureProviderConfiguration. */
export type DisclosureProviderConfigurationSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: DisclosureProviderConfigurationSortEnum;
};

/** The flow disclosure provider connection definition. */
export type DisclosureProviderConnection = {
  __typename?: 'DisclosureProviderConnection';
  edges: Array<DisclosureProviderEdge>;
  pageInfo: PageInfo;
};

/** The flow disclosure provider edge definition. */
export type DisclosureProviderEdge = {
  __typename?: 'DisclosureProviderEdge';
  cursor: Scalars['String']['output'];
  node: DisclosureProvider;
};

/** Fields which can be used to filter flow disclosure providers on. Value must be camel case. */
export enum DisclosureProviderFilteringField {
  DisclosureUuid = 'disclosureUuid',
  ProviderAppUuid = 'providerAppUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow disclosure providers on. Value must be camel case. */
export enum DisclosureProviderSortEnum {
  CreatedAt = 'createdAt',
  ProviderAppUuid = 'providerAppUuid',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow disclosure providers. */
export type DisclosureProviderSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: DisclosureProviderSortEnum;
};

/** Fields which can be used to sort flow disclosures on. Value must be camel case. */
export enum DisclosureSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  State = 'state',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow disclosures. */
export type DisclosureSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: DisclosureSortEnum;
};

/** DisclosureState */
export enum DisclosureState {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

/** Update Input */
export type DuplicateAuthenticationInput = {
  /** The name of the new flow authentication. */
  name: Scalars['NonEmpty']['input'];
};

/** Update Input */
export type DuplicateDisclosureInput = {
  /** The name of the new flow disclosure. */
  name: Scalars['NonEmpty']['input'];
};

/** Update Input */
export type DuplicateIssuanceInput = {
  /** The name of the new flow issuance. */
  name: Scalars['NonEmpty']['input'];
};

/** Update Input */
export type DuplicateSignatureInput = {
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

/** Input for filtering identity attribute labels */
export type FindManyAttributeLabelsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeLabelFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many identity attribute labels on filters, pagination and sorting. */
export type FindManyAttributeLabelsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeLabelsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeLabelSortInput>;
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

/** Input for filtering attribute request meta OID4VC mdoc on provided fields. */
export type FindManyAttributeRequestMetaOid4VcmdocFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeRequestMetaOid4VcmdocFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute request meta OID4VC mdoc on filters, pagination and sorting. */
export type FindManyAttributeRequestMetaOid4VcmdocInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeRequestMetaOid4VcmdocFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeRequestMetaOid4VcmdocSortInput>;
};

/** Input for filtering attribute request meta OID4VC SD-JWT on provided fields. */
export type FindManyAttributeRequestMetaOid4VcsdjwtFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeRequestMetaOid4VcsdjwtFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute request meta OID4VC SD-JWT on filters, pagination and sorting. */
export type FindManyAttributeRequestMetaOid4VcsdjwtInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeRequestMetaOid4VcsdjwtFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeRequestMetaOid4VcsdjwtSortInput>;
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
  /** Nested filtering options. */
  nestedFiltering?: InputMaybe<Array<FindManyAttributesNestedFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeSortInput>;
};

/** Input for filtering attributes on nested fields. */
export type FindManyAttributesNestedFilter = {
  /** Attribute meta nested filter */
  attributeMeta?: InputMaybe<AttributeNestedFilteringAttributeMetaField>;
  /** Credential nested filter */
  credential?: InputMaybe<AttributeNestedFilteringCredentialField>;
};

/** Input for filtering authentication activities on provided fields. */
export type FindManyAuthenticationActivitiesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AuthenticationActivityFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many authentication activities. */
export type FindManyAuthenticationActivitiesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAuthenticationActivitiesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AuthenticationActivitySortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyAuthenticationBrandsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AuthenticationBrandFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many brands on filters, pagination and sorting. */
export type FindManyAuthenticationBrandsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAuthenticationBrandsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AuthenticationBrandSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyAuthenticationDomainsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AuthenticationDomainFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many domains on filters, pagination and sorting. */
export type FindManyAuthenticationDomainsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAuthenticationDomainsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AuthenticationDomainSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyAuthenticationLabelsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AuthenticationLabelFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many Labels on filters, pagination and sorting. */
export type FindManyAuthenticationLabelsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAuthenticationLabelsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AuthenticationLabelSortInput>;
};

/** Input for filtering finding many AuthenticationProviderConfigurationNLWallet. */
export type FindManyAuthenticationProviderConfigurationNlWalletsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AuthenticationProviderConfigurationNlWalletFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for finding many AuthenticationProviderConfigurationNLWallet. */
export type FindManyAuthenticationProviderConfigurationNlWalletsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAuthenticationProviderConfigurationNlWalletsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AuthenticationProviderConfigurationNlWalletSortInput>;
};

/** Input for filtering AuthenticationProviderConfiguration on provided fields. */
export type FindManyAuthenticationProviderConfigurationsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AuthenticationProviderConfigurationFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many AuthenticationProviderConfiguration on filters, pagination and sorting. */
export type FindManyAuthenticationProviderConfigurationsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAuthenticationProviderConfigurationsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AuthenticationProviderConfigurationSortInput>;
};

/** Input for filtering flow authentication provider on provided fields. */
export type FindManyAuthenticationProvidersFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AuthenticationProviderFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow authentication providers on filters, pagination and sorting. */
export type FindManyAuthenticationProvidersInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAuthenticationProvidersFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AuthenticationProviderSortInput>;
};

/** Input for filtering flow authentication scope on provided fields. */
export type FindManyAuthenticationScopesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AuthenticationScopeFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow authentication scope on filters, pagination and sorting. */
export type FindManyAuthenticationScopesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAuthenticationScopesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AuthenticationScopeSortInput>;
};

/** Input for filtering flow authentication on provided fields. */
export type FindManyAuthenticationsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AuthenticationFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow authentications on filters, pagination and sorting. */
export type FindManyAuthenticationsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAuthenticationsFilter>>;
  /** Nested filtering options. */
  nestedFiltering?: InputMaybe<Array<FindManyAuthenticationsNestedFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AuthenticationSortInput>;
};

/** Input for filtering flow authentications on nested fields. */
export type FindManyAuthenticationsNestedFilter = {
  /** Flow authentication brands nested filter */
  authenticationBrands?: InputMaybe<AuthenticationNestedFilteringAuthenticationBrandField>;
  /** Flow authentication labels nested filter */
  authenticationLabels?: InputMaybe<AuthenticationNestedFilteringAuthenticationLabelField>;
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

/** Input for filtering billing wallet transaction meta flow attributes on provided fields. */
export type FindManyBillingWalletTransactionMetaFlowAttributesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: BillingWalletTransactionMetaFlowAttributeFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many billing wallet transaction meta flow attributes on filters, pagination and sorting. */
export type FindManyBillingWalletTransactionMetaFlowAttributesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyBillingWalletTransactionMetaFlowAttributesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<BillingWalletTransactionMetaFlowAttributeSortInput>;
};

/** Input for filtering billing wallet transaction meta flows on provided fields. */
export type FindManyBillingWalletTransactionMetaFlowsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: BillingWalletTransactionMetaFlowFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many billing wallet transaction meta flows on filters, pagination and sorting. */
export type FindManyBillingWalletTransactionMetaFlowsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyBillingWalletTransactionMetaFlowsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<BillingWalletTransactionMetaFlowSortInput>;
};

/** Input for filtering billing wallet transaction meta on nested fields. */
export type FindManyBillingWalletTransactionMetaNestedFilter = {
  /** Billing Wallet Transaction nested filter */
  billingWalletTransaction: BillingWalletTransactionMetaNestedFilteringBillingWalletTransactionField;
};

/** Input for filtering billing wallet transaction meta plans on provided fields. */
export type FindManyBillingWalletTransactionMetaPlansFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: BillingWalletTransactionMetaPlanFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many billing wallet transaction meta plans on filters, pagination and sorting. */
export type FindManyBillingWalletTransactionMetaPlansInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyBillingWalletTransactionMetaPlansFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<BillingWalletTransactionMetaPlanSortInput>;
};

/** Input for filtering billing wallet transaction meta wallets on provided fields. */
export type FindManyBillingWalletTransactionMetaWalletsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: BillingWalletTransactionMetaWalletFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many billing wallet transaction meta wallets on filters, pagination and sorting. */
export type FindManyBillingWalletTransactionMetaWalletsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyBillingWalletTransactionMetaWalletsFilter>>;
  /** Nested filtering options. */
  nestedFiltering?: InputMaybe<Array<FindManyBillingWalletTransactionMetaWalletsNestedFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<BillingWalletTransactionMetaWalletSortInput>;
};

/** Input for filtering billing wallet transaction meta wallets on nested fields. */
export type FindManyBillingWalletTransactionMetaWalletsNestedFilter = {
  /** Billing Wallet Transaction Meta nested filter */
  billingWalletTransactionMeta?: InputMaybe<BillingWalletTransactionMetaWalletNestedFilteringBillingWalletTransactionMetaField>;
};

/** Input for filtering billing wallet transaction metas on provided fields. */
export type FindManyBillingWalletTransactionMetasFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: BillingWalletTransactionMetaFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many billing wallet transaction metas on filters, pagination and sorting. */
export type FindManyBillingWalletTransactionMetasInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyBillingWalletTransactionMetasFilter>>;
  /** Nested filtering options. */
  nestedFiltering?: InputMaybe<Array<FindManyBillingWalletTransactionMetaNestedFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<BillingWalletTransactionMetaSortInput>;
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

/** Input for filtering identity credential labels */
export type FindManyCredentialLabelsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialLabelFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many identity credential labels on filters, pagination and sorting. */
export type FindManyCredentialLabelsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialLabelsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialLabelSortInput>;
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

/** Input for filtering credential request meta OID4VC mdoc on provided fields. */
export type FindManyCredentialRequestMetaOid4VcmdocFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialRequestMetaOid4VcmdocFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential request meta OID4VC mdoc on filters, pagination and sorting. */
export type FindManyCredentialRequestMetaOid4VcmdocInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialRequestMetaOid4VcmdocFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialRequestMetaOid4VcmdocSortInput>;
};

/** Input for filtering credential request meta OID4VC SD-JWT on provided fields. */
export type FindManyCredentialRequestMetaOid4VcsdjwtFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialRequestMetaOid4VcsdjwtFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential request meta OID4VC SD-JWT on filters, pagination and sorting. */
export type FindManyCredentialRequestMetaOid4VcsdjwtInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialRequestMetaOid4VcsdjwtFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialRequestMetaOid4VcsdjwtSortInput>;
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
  /** Nested filtering options. */
  nestedFiltering?: InputMaybe<Array<FindManyCredentialsNestedFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialSortInput>;
};

/** Input for filtering credentials on nested fields. */
export type FindManyCredentialsNestedFilter = {
  /** Attributes nested filter */
  attributes?: InputMaybe<CredentialNestedFilteringAttributesField>;
  /** Credential meta nested filter */
  credentialMeta?: InputMaybe<CredentialNestedFilteringCredentialMetaField>;
  /** Issuer nested filter */
  issuer?: InputMaybe<CredentialNestedFilteringIssuerField>;
};

/** Input for filtering disclosure activities on provided fields. */
export type FindManyDisclosureActivitiesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: DisclosureActivityFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many disclosure activities. */
export type FindManyDisclosureActivitiesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyDisclosureActivitiesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<DisclosureActivitySortInput>;
};

/** Input for filtering flow disclosure attribute on provided attributes. */
export type FindManyDisclosureAttributesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: DisclosureAttributeFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow disclosure attribute on filters, pagination and sorting. */
export type FindManyDisclosureAttributesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyDisclosureAttributesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<DisclosureAttributeSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyDisclosureBrandsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: DisclosureBrandFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many brands on filters, pagination and sorting. */
export type FindManyDisclosureBrandsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyDisclosureBrandsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<DisclosureBrandSortInput>;
};

/** Input for filtering flow disclosure field on provided fields. */
export type FindManyDisclosureCredentialsFilter = {
  /** The connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: DisclosureCredentialFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow disclosure field on filters, pagination and sorting. */
export type FindManyDisclosureCredentialsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyDisclosureCredentialsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<DisclosureCredentialSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyDisclosureDomainsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: DisclosureDomainFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many domains on filters, pagination and sorting. */
export type FindManyDisclosureDomainsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyDisclosureDomainsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<DisclosureDomainSortInput>;
};

/** Input for filtering flow disclosure group on provided fields. */
export type FindManyDisclosureGroupsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: DisclosureGroupFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow disclosure group on filters, pagination and sorting. */
export type FindManyDisclosureGroupsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyDisclosureGroupsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<DisclosureGroupSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyDisclosureLabelsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: DisclosureLabelFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many Labels on filters, pagination and sorting. */
export type FindManyDisclosureLabelsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyDisclosureLabelsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<DisclosureLabelSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyDisclosureMappingsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: DisclosureMappingFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many mappings on filters, pagination and sorting. */
export type FindManyDisclosureMappingsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyDisclosureMappingsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<DisclosureMappingSortInput>;
};

/** Input for filtering finding many DisclosureProviderConfigurationNLWallet. */
export type FindManyDisclosureProviderConfigurationNlWalletsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: DisclosureProviderConfigurationNlWalletFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for finding many DisclosureProviderConfigurationNLWallet. */
export type FindManyDisclosureProviderConfigurationNlWalletsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyDisclosureProviderConfigurationNlWalletsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<DisclosureProviderConfigurationNlWalletSortInput>;
};

/** Input for filtering DisclosureProviderConfiguration on provided fields. */
export type FindManyDisclosureProviderConfigurationsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: DisclosureProviderConfigurationFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many DisclosureProviderConfiguration on filters, pagination and sorting. */
export type FindManyDisclosureProviderConfigurationsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyDisclosureProviderConfigurationsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<DisclosureProviderConfigurationSortInput>;
};

/** Input for filtering flow disclosure provider on provided fields. */
export type FindManyDisclosureProvidersFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: DisclosureProviderFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow disclosure providers on filters, pagination and sorting. */
export type FindManyDisclosureProvidersInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyDisclosureProvidersFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<DisclosureProviderSortInput>;
};

/** Input for filtering flow disclosure on provided fields. */
export type FindManyDisclosuresFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: DisclosureFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow disclosures on filters, pagination and sorting. */
export type FindManyDisclosuresInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyDisclosuresFilter>>;
  /** Nested filtering options. */
  nestedFiltering?: InputMaybe<Array<FindManyDisclosuresNestedFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<DisclosureSortInput>;
};

/** Input for filtering flow disclosures on nested fields. */
export type FindManyDisclosuresNestedFilter = {
  /** Flow disclosure brands nested filter */
  disclosureBrands?: InputMaybe<DisclosureNestedFilteringDisclosureBrandField>;
  /** Flow disclosure labels nested filter */
  disclosureLabels?: InputMaybe<DisclosureNestedFilteringDisclosureLabelField>;
};

/** Input for filtering issuance activities on provided fields. */
export type FindManyIssuanceActivitiesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuanceActivityFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many issuance activities. */
export type FindManyIssuanceActivitiesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuanceActivitiesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuanceActivitySortInput>;
};

/** Input for filtering flow issuance attribute on provided attributes. */
export type FindManyIssuanceAttributesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuanceAttributeFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow issuance attribute on filters, pagination and sorting. */
export type FindManyIssuanceAttributesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuanceAttributesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuanceAttributeSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyIssuanceBrandsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuanceBrandFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many brands on filters, pagination and sorting. */
export type FindManyIssuanceBrandsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuanceBrandsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuanceBrandSortInput>;
};

/** Input for filtering flow issuance credential meta datakeeper on provided fields. */
export type FindManyIssuanceCredentialMetaDatakeeperFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuanceCredentialMetaDatakeeperFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential meta datakeeper on filters, pagination and sorting. */
export type FindManyIssuanceCredentialMetaDatakeeperInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuanceCredentialMetaDatakeeperFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuanceCredentialMetaDatakeeperSortInput>;
};

/** Input for filtering flow issuance credential meta on provided fields. */
export type FindManyIssuanceCredentialMetaFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuanceCredentialMetaFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow issuance credential meta on filters, pagination and sorting. */
export type FindManyIssuanceCredentialMetaInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuanceCredentialMetaFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuanceCredentialMetaSortInput>;
};

/** Input for filtering flow issuance credential meta yivi on provided fields. */
export type FindManyIssuanceCredentialMetaYiviFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuanceCredentialMetaYiviFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential meta yivi on filters, pagination and sorting. */
export type FindManyIssuanceCredentialMetaYiviInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuanceCredentialMetaYiviFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuanceCredentialMetaYiviSortInput>;
};

/** Input for filtering flow issuance field on provided fields. */
export type FindManyIssuanceCredentialsFilter = {
  /** The connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuanceCredentialFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow issuance field on filters, pagination and sorting. */
export type FindManyIssuanceCredentialsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuanceCredentialsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuanceCredentialSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyIssuanceDomainsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuanceDomainFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many domains on filters, pagination and sorting. */
export type FindManyIssuanceDomainsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuanceDomainsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuanceDomainSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyIssuanceLabelsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuanceLabelFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many Labels on filters, pagination and sorting. */
export type FindManyIssuanceLabelsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuanceLabelsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuanceLabelSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManyIssuanceMappingsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuanceMappingFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many mappings on filters, pagination and sorting. */
export type FindManyIssuanceMappingsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuanceMappingsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuanceMappingSortInput>;
};

/** Input for filtering flow issuance provider on provided fields. */
export type FindManyIssuanceProvidersFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuanceProviderFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow issuance providers on filters, pagination and sorting. */
export type FindManyIssuanceProvidersInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuanceProvidersFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuanceProviderSortInput>;
};

/** Input for filtering flow issuance on provided fields. */
export type FindManyIssuancesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuanceFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow issuances on filters, pagination and sorting. */
export type FindManyIssuancesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuancesFilter>>;
  /** Nested filtering options. */
  nestedFiltering?: InputMaybe<Array<FindManyIssuancesNestedFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuanceSortInput>;
};

/** Input for filtering flow issuances on nested fields. */
export type FindManyIssuancesNestedFilter = {
  /** Flow issuance brands nested filter */
  issuanceBrands?: InputMaybe<IssuanceNestedFilteringIssuanceBrandField>;
  /** Flow issuance labels nested filter */
  issuanceLabels?: InputMaybe<IssuanceNestedFilteringIssuanceLabelField>;
};

/** Input for filtering identity issuer labels */
export type FindManyIssuerLabelsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuerLabelFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many identity issuer labels on filters, pagination and sorting. */
export type FindManyIssuerLabelsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuerLabelsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuerLabelSortInput>;
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
  /** Nested filtering options. */
  nestedFiltering?: InputMaybe<Array<FindManyIssuersNestedFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuerSortInput>;
};

/** Input for filtering issuers on nested fields. */
export type FindManyIssuersNestedFilter = {
  /** Credentials nested filter */
  credentials?: InputMaybe<IssuerNestedFilteringCredentialsField>;
  /** Issuer meta nested filter */
  issuerMeta?: InputMaybe<IssuerNestedFilteringIssuerMetaField>;
  /** Scheme nested filter */
  scheme?: InputMaybe<IssuerNestedFilteringSchemeField>;
};

/** Input for filtering labels on provided fields. */
export type FindManyLabelsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: LabelFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many labels on filters, pagination and sorting. */
export type FindManyLabelsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyLabelsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<LabelSortInput>;
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

/** Input for filtering maintenance on provided fields. */
export type FindManyMaintenancesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: MaintenanceFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many maintenances on filters, pagination and sorting. */
export type FindManyMaintenancesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyMaintenancesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<MaintenanceSortInput>;
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

/** Input for filtering organization app meta OID4VC on provided fields. */
export type FindManyOrganizationAppMetaOid4vcFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: OrganizationAppMetaOid4vcFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many organization app meta OID4VC on filters, pagination and sorting. */
export type FindManyOrganizationAppMetaOid4vcInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyOrganizationAppMetaOid4vcFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationAppMetaOid4vcSortInput>;
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
  /** Nested filtering options. */
  nestedFiltering?: InputMaybe<Array<FindManyOrganizationAppsNestedFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationAppSortInput>;
};

/** Input for filtering organization apps on nested fields. */
export type FindManyOrganizationAppsNestedFilter = {
  /** App nested filter */
  app?: InputMaybe<OrganizationAppNestedFilteringAppField>;
};

/** Input for filtering user on provided fields. */
export type FindManyOrganizationBrandLabelsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: OrganizationBrandLabelFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many Labels on filters, pagination and sorting. */
export type FindManyOrganizationBrandLabelsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyOrganizationBrandLabelsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationBrandLabelSortInput>;
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
  /** Nested filtering options. */
  nestedFiltering?: InputMaybe<Array<FindManyOrganizationBrandsNestedFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationBrandSortInput>;
};

/** Input for filtering organization brands on nested fields. */
export type FindManyOrganizationBrandsNestedFilter = {
  /** Organization brand labels nested filter */
  organizationBrandLabels?: InputMaybe<OrganizationBrandNestedFilteringOrganizationBrandLabelField>;
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

/** Input for filtering user on provided fields. */
export type FindManyOrganizationDomainLabelsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: OrganizationDomainLabelFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many Labels on filters, pagination and sorting. */
export type FindManyOrganizationDomainLabelsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyOrganizationDomainLabelsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationDomainLabelSortInput>;
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
  /** Nested filtering options. */
  nestedFiltering?: InputMaybe<Array<FindManyOrganizationDomainsNestedFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationDomainSortInput>;
};

/** Input for filtering organization domains on nested fields. */
export type FindManyOrganizationDomainsNestedFilter = {
  /** Organization domain labels nested filter */
  organizationDomainLabels?: InputMaybe<OrganizationDomainNestedFilteringOrganizationDomainLabelField>;
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
  /** Nested filtering options. */
  nestedFiltering?: InputMaybe<Array<FindManyOrganizationUsersNestedFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationUserSortInput>;
};

/** Input for filtering organization users on nested fields. */
export type FindManyOrganizationUsersNestedFilter = {
  /** User nested filter. */
  user?: InputMaybe<OrganizationUserNestedFilteringUserField>;
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

/** Input for filtering pricing catalogs on provided fields. */
export type FindManyPricingCatalogsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: PricingCatalogFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many pricing catalogs on filters, pagination and sorting. */
export type FindManyPricingCatalogsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyPricingCatalogsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<PricingCatalogSortInput>;
};

/** Input for filtering pricing configuration apps on provided fields. */
export type FindManyPricingConfigurationAppsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: PricingConfigurationAppFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many pricing configuration apps on filters, pagination and sorting. */
export type FindManyPricingConfigurationAppsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyPricingConfigurationAppsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<PricingConfigurationAppSortInput>;
};

/** Input for filtering pricing configuration organizations on provided fields. */
export type FindManyPricingConfigurationOrganizationsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: PricingConfigurationOrganizationFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many pricing configuration organizations on filters, pagination and sorting. */
export type FindManyPricingConfigurationOrganizationsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyPricingConfigurationOrganizationsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<PricingConfigurationOrganizationSortInput>;
};

/** Input for filtering pricing configuration studio plans on provided fields. */
export type FindManyPricingConfigurationStudioPlansFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: PricingConfigurationStudioPlanFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many pricing configuration studio plans on filters, pagination and sorting. */
export type FindManyPricingConfigurationStudioPlansInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyPricingConfigurationStudioPlansFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<PricingConfigurationStudioPlanSortInput>;
};

/** Input for filtering pricing group assignments on provided fields. */
export type FindManyPricingGroupAssignmentsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: PricingGroupAssignmentFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many pricing group assignments on filters, pagination and sorting. */
export type FindManyPricingGroupAssignmentsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyPricingGroupAssignmentsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<PricingGroupAssignmentSortInput>;
};

/** Input for filtering pricing groups on provided fields. */
export type FindManyPricingGroupsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: PricingGroupFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many pricing groups on filters, pagination and sorting. */
export type FindManyPricingGroupsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyPricingGroupsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<PricingGroupSortInput>;
};

/** Input for filtering pricing rule constraints on provided fields. */
export type FindManyPricingRuleConstraintsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: PricingRuleConstraintFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many pricing rule constraints on filters, pagination and sorting. */
export type FindManyPricingRuleConstraintsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyPricingRuleConstraintsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<PricingRuleConstraintSortInput>;
};

/** Input for filtering pricing rule targets on provided fields. */
export type FindManyPricingRuleTargetsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: PricingRuleTargetFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many pricing rule targets on filters, pagination and sorting. */
export type FindManyPricingRuleTargetsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyPricingRuleTargetsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<PricingRuleTargetSortInput>;
};

/** Input for filtering pricing rules on provided fields. */
export type FindManyPricingRulesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: PricingRuleFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many pricing rules on filters, pagination and sorting. */
export type FindManyPricingRulesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyPricingRulesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<PricingRuleSortInput>;
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

/** Input for filtering identity provider labels */
export type FindManyProviderLabelsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: ProviderLabelFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many identity provider labels on filters, pagination and sorting. */
export type FindManyProviderLabelsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyProviderLabelsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<ProviderLabelSortInput>;
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

/** Input for filtering identity scheme labels */
export type FindManySchemeLabelsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: SchemeLabelFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many identity scheme labels on filters, pagination and sorting. */
export type FindManySchemeLabelsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManySchemeLabelsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<SchemeLabelSortInput>;
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

/** Input for filtering signature activities on provided fields. */
export type FindManySignatureActivitiesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: SignatureActivityFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many signature activities. */
export type FindManySignatureActivitiesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManySignatureActivitiesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<SignatureActivitySortInput>;
};

/** Input for filtering flow signature attribute on provided attributes. */
export type FindManySignatureAttributesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: SignatureAttributeFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow signature attribute on filters, pagination and sorting. */
export type FindManySignatureAttributesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManySignatureAttributesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<SignatureAttributeSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManySignatureBrandsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: SignatureBrandFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many brands on filters, pagination and sorting. */
export type FindManySignatureBrandsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManySignatureBrandsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<SignatureBrandSortInput>;
};

/** Input for filtering flow signature field on provided fields. */
export type FindManySignatureCredentialsFilter = {
  /** The connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: SignatureCredentialFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow signature field on filters, pagination and sorting. */
export type FindManySignatureCredentialsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManySignatureCredentialsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<SignatureCredentialSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManySignatureDomainsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: SignatureDomainFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many domains on filters, pagination and sorting. */
export type FindManySignatureDomainsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManySignatureDomainsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<SignatureDomainSortInput>;
};

/** Input for filtering flow signature group on provided fields. */
export type FindManySignatureGroupsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: SignatureGroupFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow signature group on filters, pagination and sorting. */
export type FindManySignatureGroupsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManySignatureGroupsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<SignatureGroupSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManySignatureLabelsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: SignatureLabelFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many Labels on filters, pagination and sorting. */
export type FindManySignatureLabelsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManySignatureLabelsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<SignatureLabelSortInput>;
};

/** Input for filtering user on provided fields. */
export type FindManySignatureMappingsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: SignatureMappingFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many mappings on filters, pagination and sorting. */
export type FindManySignatureMappingsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManySignatureMappingsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<SignatureMappingSortInput>;
};

/** Input for filtering finding many SignatureProviderConfigurationNLWallet. */
export type FindManySignatureProviderConfigurationNlWalletsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: SignatureProviderConfigurationNlWalletFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for finding many SignatureProviderConfigurationNLWallet. */
export type FindManySignatureProviderConfigurationNlWalletsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManySignatureProviderConfigurationNlWalletsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<SignatureProviderConfigurationNlWalletSortInput>;
};

/** Input for filtering SignatureProviderConfiguration on provided fields. */
export type FindManySignatureProviderConfigurationsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: SignatureProviderConfigurationFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many SignatureProviderConfiguration on filters, pagination and sorting. */
export type FindManySignatureProviderConfigurationsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManySignatureProviderConfigurationsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<SignatureProviderConfigurationSortInput>;
};

/** Input for filtering flow signature provider on provided fields. */
export type FindManySignatureProvidersFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: SignatureProviderFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow signature providers on filters, pagination and sorting. */
export type FindManySignatureProvidersInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManySignatureProvidersFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<SignatureProviderSortInput>;
};

/** Input for filtering flow signature on provided fields. */
export type FindManySignaturesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: SignatureFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow signatures on filters, pagination and sorting. */
export type FindManySignaturesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManySignaturesFilter>>;
  /** Nested filtering options. */
  nestedFiltering?: InputMaybe<Array<FindManySignaturesNestedFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<SignatureSortInput>;
};

/** Input for filtering flow signatures on nested fields. */
export type FindManySignaturesNestedFilter = {
  /** Flow signature brands nested filter */
  signatureBrands?: InputMaybe<SignatureNestedFilteringSignatureBrandField>;
  /** Flow signature labels nested filter */
  signatureLabels?: InputMaybe<SignatureNestedFilteringSignatureLabelField>;
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

/** Recurring intervals */
export enum Interval {
  Monthly = 'MONTHLY',
  None = 'NONE',
  Quarterly = 'QUARTERLY',
  Yearly = 'YEARLY'
}

/** Flow issuance definition. */
export type Issuance = Model & {
  __typename?: 'Issuance';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The associated brands with this issuance */
  issuanceBrands: IssuanceBrandConnection;
  /** The associated domains with this issuance */
  issuanceDomains: IssuanceDomainConnection;
  /** The associated labels with this issuance */
  issuanceLabels: IssuanceLabelConnection;
  /** The associated mappings with this issuance */
  issuanceMappings: IssuanceMappingConnection;
  /** A list of flow providers belonging to this flow issuance. */
  issuanceProviders: IssuanceProviderConnection;
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
  state: IssuanceState;
  /** Shortcut to active studio controls associated to this object */
  studioControlCompacts: Array<StudioControlCompact>;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Flow issuance definition. */
export type IssuanceIssuanceBrandsArgs = {
  input?: InputMaybe<FindManyIssuanceBrandsInput>;
};


/** Flow issuance definition. */
export type IssuanceIssuanceDomainsArgs = {
  input?: InputMaybe<FindManyIssuanceDomainsInput>;
};


/** Flow issuance definition. */
export type IssuanceIssuanceLabelsArgs = {
  input?: InputMaybe<FindManyIssuanceLabelsInput>;
};


/** Flow issuance definition. */
export type IssuanceIssuanceMappingsArgs = {
  input?: InputMaybe<FindManyIssuanceMappingsInput>;
};


/** Flow issuance definition. */
export type IssuanceIssuanceProvidersArgs = {
  input?: InputMaybe<FindManyIssuanceProvidersInput>;
};

/** IssuanceAction */
export enum IssuanceAction {
  Activate = 'ACTIVATE',
  Deactivate = 'DEACTIVATE'
}

/** Issuance activity definition. */
export type IssuanceActivity = Model & {
  __typename?: 'IssuanceActivity';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The event URN */
  eventURN: Scalars['URN']['output'];
  /** The issuance UUID */
  issuanceUuid: Scalars['UUID']['output'];
  /** The metadata */
  meta: Scalars['JSONObject']['output'];
  /** The organization UUID */
  organizationUuid: Scalars['UUID']['output'];
  /** The request UUID */
  requestUuid: Scalars['UUID']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The issuance activity connection definition. */
export type IssuanceActivityConnection = {
  __typename?: 'IssuanceActivityConnection';
  edges: Array<Maybe<IssuanceActivityEdge>>;
  pageInfo: PageInfo;
};

/** The issuance activity edge definition. */
export type IssuanceActivityEdge = {
  __typename?: 'IssuanceActivityEdge';
  cursor: Scalars['String']['output'];
  node: IssuanceActivity;
};

/** Fields which can be used to filter issuance activities on. */
export enum IssuanceActivityFilteringField {
  CreatedAt = 'createdAt',
  EventUrn = 'eventURN',
  IssuanceUuid = 'issuanceUuid',
  OrganizationUuid = 'organizationUuid',
  RequestUuid = 'requestUuid'
}

/** Fields which can be used to sort issuance activities on. */
export enum IssuanceActivitySortEnum {
  CreatedAt = 'createdAt',
  EventUrn = 'eventUrn'
}

/** Input options for sorting issuance activities. */
export type IssuanceActivitySortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuanceActivitySortEnum;
};

/** Flow issuance attribute definition. */
export type IssuanceAttribute = Model & {
  __typename?: 'IssuanceAttribute';
  /** The attribute the attributeURN belongs to. */
  attribute: Attribute;
  /** The uuid of the flow attribute. */
  attributeUuid: Scalars['UUID']['output'];
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The flow issuance the flow query belongs to. */
  issuanceCredential: IssuanceCredential;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};

/** The flow issuance attribute connection definition. */
export type IssuanceAttributeConnection = {
  __typename?: 'IssuanceAttributeConnection';
  edges: Array<IssuanceAttributeEdge>;
  pageInfo: PageInfo;
};

/** The flow issuance attribute edge definition. */
export type IssuanceAttributeEdge = {
  __typename?: 'IssuanceAttributeEdge';
  cursor: Scalars['String']['output'];
  node: IssuanceAttribute;
};

/** Fields which can be used to filter flow issuance attribute on. Value must be camel case. */
export enum IssuanceAttributeFilteringField {
  AttributeUrn = 'attributeURN',
  IssuanceCredentialUuid = 'issuanceCredentialUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow issuance attribute on. Value must be camel case. */
export enum IssuanceAttributeSortEnum {
  AttributeUrn = 'attributeURN',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow issuance attribute. */
export type IssuanceAttributeSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuanceAttributeSortEnum;
};

/** Organization brand definition. */
export type IssuanceBrand = Model & {
  __typename?: 'IssuanceBrand';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** Is default branding */
  isDefault: Scalars['Boolean']['output'];
  /** The flow issuance */
  issuance: Issuance;
  /** The user organization brand */
  organizationBrand: OrganizationBrand;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** An Connection */
export type IssuanceBrandConnection = {
  __typename?: 'IssuanceBrandConnection';
  edges: Array<IssuanceBrandEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type IssuanceBrandEdge = {
  __typename?: 'IssuanceBrandEdge';
  cursor: Scalars['String']['output'];
  node: IssuanceBrand;
};

/** Fields which can be used to filter brands on. Value must be camel case. */
export enum IssuanceBrandFilteringField {
  IssuanceUuid = 'issuanceUuid',
  OrganizationBrandUuid = 'organizationBrandUuid',
  RedirectPath = 'redirectPath',
  Uuid = 'uuid'
}

/** Fields which can be used to sort brands on. Value must be camel case. */
export enum IssuanceBrandSortEnum {
  CreatedAt = 'createdAt',
  RedirectPath = 'redirectPath',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting brands. */
export type IssuanceBrandSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuanceBrandSortEnum;
};

/** The flow issuance connection definition. */
export type IssuanceConnection = {
  __typename?: 'IssuanceConnection';
  edges: Array<Maybe<IssuanceEdge>>;
  pageInfo: PageInfo;
};

/** Flow issuance credential definition. */
export type IssuanceCredential = Model & {
  __typename?: 'IssuanceCredential';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The credential the credentialURN belongs to. */
  credential: Credential;
  /** The uuid of the credential. */
  credentialUuid: Scalars['UUID']['output'];
  /** The associated fields with this credential */
  issuanceAttributes: IssuanceAttributeConnection;
  /** The flow issuance the flow provider belongs to. */
  issuanceProvider: IssuanceProvider;
  /** The issuer the issuerURN belongs to. */
  issuer: Issuer;
  /** The uuid of the issuer. */
  issuerUuid: Scalars['UUID']['output'];
  /** The meta */
  meta?: Maybe<IssuanceCredentialMeta>;
  /** The meta type of the credential */
  metaType: IssuanceCredentialMetaType;
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
export type IssuanceCredentialIssuanceAttributesArgs = {
  input?: InputMaybe<FindManyIssuanceAttributesInput>;
};

/** The flow issuance field connection definition. */
export type IssuanceCredentialConnection = {
  __typename?: 'IssuanceCredentialConnection';
  edges: Array<IssuanceCredentialEdge>;
  pageInfo: PageInfo;
};

/** The flow issuance field edge definition. */
export type IssuanceCredentialEdge = {
  __typename?: 'IssuanceCredentialEdge';
  cursor: Scalars['String']['output'];
  node: IssuanceCredential;
};

/** Fields which can be used to filter flow issuance field on. Value must be camel case. */
export enum IssuanceCredentialFilteringField {
  CredentialUrn = 'credentialURN',
  IssuanceProviderUuid = 'issuanceProviderUuid',
  IssuerUrn = 'issuerURN',
  MetaType = 'metaType',
  SchemeUrn = 'schemeURN',
  Uuid = 'uuid'
}

/** Flow issuance credential meta definition. */
export type IssuanceCredentialMeta = Model & {
  __typename?: 'IssuanceCredentialMeta';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The datakeeper credential meta */
  datakeeper?: Maybe<IssuanceCredentialMetaDatakeeper>;
  /** The flow issuance credential the meta belongs to. */
  issuanceCredential: IssuanceCredential;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** The yivi credential meta */
  yivi?: Maybe<IssuanceCredentialMetaYivi>;
};

/** The flow issuance credential meta connection definition. */
export type IssuanceCredentialMetaConnection = {
  __typename?: 'IssuanceCredentialMetaConnection';
  edges: Array<Maybe<IssuanceCredentialMetaEdge>>;
  pageInfo: PageInfo;
};

/** Flow issuance credential meta datakapeer definition. */
export type IssuanceCredentialMetaDatakeeper = Model & {
  __typename?: 'IssuanceCredentialMetaDatakeeper';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The expiration duration, in milliseconds */
  expirationDuration: Scalars['Int']['output'];
  /** The flow issuance credential meta the datakeeper meta belongs to. */
  issuanceCredentialMeta: IssuanceCredentialMeta;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The flow credential meta datakeeper connection definition. */
export type IssuanceCredentialMetaDatakeeperConnection = {
  __typename?: 'IssuanceCredentialMetaDatakeeperConnection';
  edges: Array<Maybe<IssuanceCredentialMetaDatakeeperEdge>>;
  pageInfo: PageInfo;
};

/** The flow credential meta datakeeper edge definition. */
export type IssuanceCredentialMetaDatakeeperEdge = {
  __typename?: 'IssuanceCredentialMetaDatakeeperEdge';
  cursor: Scalars['String']['output'];
  node: IssuanceCredentialMetaDatakeeper;
};

/** Fields which can be used to filter flow issuance credential meta datakeeper on. Value must be camel case. */
export enum IssuanceCredentialMetaDatakeeperFilteringField {
  Context = 'context',
  IssuanceCredentialMetaUuid = 'issuanceCredentialMetaUuid'
}

/** Fields which can be used to sort flow issuance credential meta datakeeper on. Value must be camel case. */
export enum IssuanceCredentialMetaDatakeeperSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting flow issuance credential meta datakeeper. */
export type IssuanceCredentialMetaDatakeeperSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuanceCredentialMetaDatakeeperSortEnum;
};

/** The flow issuance credential meta edge definition. */
export type IssuanceCredentialMetaEdge = {
  __typename?: 'IssuanceCredentialMetaEdge';
  cursor: Scalars['String']['output'];
  node: IssuanceCredentialMeta;
};

/** Fields which can be used to filter flow issuance credential meta on. Value must be camel case. */
export enum IssuanceCredentialMetaFilteringField {
  IssuanceCredentialUuid = 'issuanceCredentialUuid'
}

/** Fields which can be used to sort flow issuance credential meta on. Value must be camel case. */
export enum IssuanceCredentialMetaSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting flow issuance credential meta. */
export type IssuanceCredentialMetaSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuanceCredentialMetaSortEnum;
};

/** Flow issuance credential meta type. */
export enum IssuanceCredentialMetaType {
  Datakeeper = 'DATAKEEPER',
  None = 'NONE',
  Yivi = 'YIVI'
}

/** Flow issuance credential meta datakapeer definition. */
export type IssuanceCredentialMetaYivi = Model & {
  __typename?: 'IssuanceCredentialMetaYivi';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The expiration duration, in milliseconds */
  expirationDuration: Scalars['Int']['output'];
  /** The flow issuance credential meta the yivi meta belongs to. */
  issuanceCredentialMeta: IssuanceCredentialMeta;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The flow credential meta yivi connection definition. */
export type IssuanceCredentialMetaYiviConnection = {
  __typename?: 'IssuanceCredentialMetaYiviConnection';
  edges: Array<Maybe<IssuanceCredentialMetaYiviEdge>>;
  pageInfo: PageInfo;
};

/** The flow credential meta yivi edge definition. */
export type IssuanceCredentialMetaYiviEdge = {
  __typename?: 'IssuanceCredentialMetaYiviEdge';
  cursor: Scalars['String']['output'];
  node: IssuanceCredentialMetaYivi;
};

/** Fields which can be used to filter flow issuance credential meta yivi on. Value must be camel case. */
export enum IssuanceCredentialMetaYiviFilteringField {
  IssuanceCredentialMetaUuid = 'issuanceCredentialMetaUuid'
}

/** Fields which can be used to sort flow issuance credential meta yivi on. Value must be camel case. */
export enum IssuanceCredentialMetaYiviSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting flow issuance credential meta yivi. */
export type IssuanceCredentialMetaYiviSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuanceCredentialMetaYiviSortEnum;
};

/** Fields which can be used to sort flow issuance field on. Value must be camel case. */
export enum IssuanceCredentialSortEnum {
  CreatedAt = 'createdAt',
  CredentialUrn = 'credentialURN',
  IssuerUrn = 'issuerURN',
  SchemeUrn = 'schemeURN',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow issuance field. */
export type IssuanceCredentialSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuanceCredentialSortEnum;
};

/** Organization domain definition. */
export type IssuanceDomain = Model & {
  __typename?: 'IssuanceDomain';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The flow issuance */
  issuance: Issuance;
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
export type IssuanceDomainConnection = {
  __typename?: 'IssuanceDomainConnection';
  edges: Array<IssuanceDomainEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type IssuanceDomainEdge = {
  __typename?: 'IssuanceDomainEdge';
  cursor: Scalars['String']['output'];
  node: IssuanceDomain;
};

/** Fields which can be used to filter domains on. Value must be camel case. */
export enum IssuanceDomainFilteringField {
  IssuanceUuid = 'issuanceUuid',
  OrganizationDomainUuid = 'organizationDomainUuid',
  RedirectPath = 'redirectPath',
  Uuid = 'uuid'
}

/** Fields which can be used to sort domains on. Value must be camel case. */
export enum IssuanceDomainSortEnum {
  CreatedAt = 'createdAt',
  RedirectPath = 'redirectPath',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting domains. */
export type IssuanceDomainSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuanceDomainSortEnum;
};

/** The flow issuance edge definition. */
export type IssuanceEdge = {
  __typename?: 'IssuanceEdge';
  cursor: Scalars['String']['output'];
  node: Issuance;
};

/** Fields which can be used to filter flow issuances on. Value must be camel case. */
export enum IssuanceFilteringField {
  Name = 'name',
  OrganizationUuid = 'organizationUuid',
  State = 'state',
  Uuid = 'uuid'
}

/** Organization Label definition. */
export type IssuanceLabel = Model & {
  __typename?: 'IssuanceLabel';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The flow issuance */
  issuance: Issuance;
  /** The Label */
  label: Label;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** An Connection */
export type IssuanceLabelConnection = {
  __typename?: 'IssuanceLabelConnection';
  edges: Array<IssuanceLabelEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type IssuanceLabelEdge = {
  __typename?: 'IssuanceLabelEdge';
  cursor: Scalars['String']['output'];
  node: IssuanceLabel;
};

/** Fields which can be used to filter Labels on. Value must be camel case. */
export enum IssuanceLabelFilteringField {
  IssuanceUuid = 'issuanceUuid',
  LabelUuid = 'labelUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort Labels on. Value must be camel case. */
export enum IssuanceLabelSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting Labels. */
export type IssuanceLabelSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuanceLabelSortEnum;
};

/** Organization mapping definition. */
export type IssuanceMapping = Model & {
  __typename?: 'IssuanceMapping';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The flow issuance */
  issuance: Issuance;
  /** The user mapping */
  mappingIssuance: MappingIssuance;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** An Connection */
export type IssuanceMappingConnection = {
  __typename?: 'IssuanceMappingConnection';
  edges: Array<IssuanceMappingEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type IssuanceMappingEdge = {
  __typename?: 'IssuanceMappingEdge';
  cursor: Scalars['String']['output'];
  node: IssuanceMapping;
};

/** Fields which can be used to filter mappings on. Value must be camel case. */
export enum IssuanceMappingFilteringField {
  IssuanceUuid = 'issuanceUuid',
  MappingIssuanceUuid = 'mappingIssuanceUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort mappings on. Value must be camel case. */
export enum IssuanceMappingSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting mappings. */
export type IssuanceMappingSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuanceMappingSortEnum;
};

/** The input for filtering flow issuance brands in nested filtering. */
export type IssuanceNestedFilteringIssuanceBrandField = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The input for filtering flow issuance brands */
  input: FindManyIssuanceBrandsInput;
  /** The type of filtering */
  type?: InputMaybe<NestedFilteringType>;
};

/** The input for filtering flow issuance labels in nested filtering. */
export type IssuanceNestedFilteringIssuanceLabelField = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The input for filtering flow issuance labels */
  input: FindManyIssuanceLabelsInput;
  /** The type of filtering */
  type?: InputMaybe<NestedFilteringType>;
};

/** Flow issuance provider definition. */
export type IssuanceProvider = Model & {
  __typename?: 'IssuanceProvider';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The flow issuance the flow provider belongs to. */
  issuance: Issuance;
  /** A list of flow queries belonging to this flow provider. */
  issuanceCredentials: IssuanceCredentialConnection;
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
export type IssuanceProviderIssuanceCredentialsArgs = {
  input?: InputMaybe<FindManyIssuanceCredentialsInput>;
};

/** The flow issuance provider connection definition. */
export type IssuanceProviderConnection = {
  __typename?: 'IssuanceProviderConnection';
  edges: Array<IssuanceProviderEdge>;
  pageInfo: PageInfo;
};

/** The flow issuance provider edge definition. */
export type IssuanceProviderEdge = {
  __typename?: 'IssuanceProviderEdge';
  cursor: Scalars['String']['output'];
  node: IssuanceProvider;
};

/** Fields which can be used to filter flow issuance providers on. Value must be camel case. */
export enum IssuanceProviderFilteringField {
  IssuanceUuid = 'issuanceUuid',
  ProviderAppUuid = 'providerAppUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow issuance providers on. Value must be camel case. */
export enum IssuanceProviderSortEnum {
  CreatedAt = 'createdAt',
  ProviderAppUuid = 'providerAppUuid',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow issuance providers. */
export type IssuanceProviderSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuanceProviderSortEnum;
};

/** Fields which can be used to sort flow issuances on. Value must be camel case. */
export enum IssuanceSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  State = 'state',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow issuances. */
export type IssuanceSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuanceSortEnum;
};

/** IssuanceState */
export enum IssuanceState {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
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

/** Identity issuer label definition. */
export type IssuerLabel = Model & {
  __typename?: 'IssuerLabel';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The identity issuer (resolved via federation) */
  issuer: Issuer;
  /** The identity issuer UUID (no direct relation - separate database) */
  issuerUuid: Scalars['UUID']['output'];
  /** The Label */
  label: Label;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** Connection */
export type IssuerLabelConnection = {
  __typename?: 'IssuerLabelConnection';
  edges: Array<IssuerLabelEdge>;
  pageInfo: PageInfo;
};

/** Edge */
export type IssuerLabelEdge = {
  __typename?: 'IssuerLabelEdge';
  cursor: Scalars['String']['output'];
  node: IssuerLabel;
};

/** Fields which can be used to filter identity issuer labels. Value must be camel case. */
export enum IssuerLabelFilteringField {
  IssuerUuid = 'issuerUuid',
  LabelUuid = 'labelUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort identity issuer labels. Value must be camel case. */
export enum IssuerLabelSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting identity issuer labels. */
export type IssuerLabelSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuerLabelSortEnum;
};

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
  /** The issuer's logo image URI */
  logo?: Maybe<Scalars['String']['output']>;
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
  /** The issuer's logo image URI */
  logo?: Maybe<Scalars['String']['output']>;
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

/** The input for filtering credentials */
export type IssuerNestedFilteringCredentialsField = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The input for filtering credentials */
  input: FindManyCredentialsInput;
  /** The type of nested filtering */
  type?: InputMaybe<NestedFilteringType>;
};

/** The input for filtering issuer meta */
export type IssuerNestedFilteringIssuerMetaField = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The input for filtering issuer meta */
  input: FindManyIssuerMetaInput;
};

/** The input for filtering scheme */
export type IssuerNestedFilteringSchemeField = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The input for filtering scheme */
  input: FindManySchemesInput;
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

/** Label type for categorizing and visually distinguishing entities */
export type Label = Model & {
  __typename?: 'Label';
  /** Identity attribute labels using this label */
  attributeLabels: AttributeLabelConnection;
  /** Flow authentication labels using this label */
  authenticationLabels: AuthenticationLabelConnection;
  /** Color string (e.g., '#FF5733') */
  color: Scalars['NonEmpty']['output'];
  /** Creation timestamp */
  createdAt: Scalars['DateTime']['output'];
  /** Identity credential labels using this label */
  credentialLabels: CredentialLabelConnection;
  /** Flow disclosure labels using this label */
  disclosureLabels: DisclosureLabelConnection;
  /** Flow issuance labels using this label */
  issuanceLabels: IssuanceLabelConnection;
  /** Identity issuer labels using this label */
  issuerLabels: IssuerLabelConnection;
  /** The name (e.g., 'trust:high', 'category:bank') */
  name: Scalars['NonEmpty']['output'];
  /** The organization (null for admin labels) */
  organization?: Maybe<Organization>;
  /** Organization brand labels using this label */
  organizationBrandLabels: OrganizationBrandLabelConnection;
  /** Organization domain labels using this label */
  organizationDomainLabels: OrganizationDomainLabelConnection;
  /** Identity provider labels using this label */
  providerLabels: ProviderLabelConnection;
  /** Identity scheme labels using this label */
  schemeLabels: SchemeLabelConnection;
  /** The scope of the label */
  scope: LabelScope;
  /** Flow signature labels using this label */
  signatureLabels: SignatureLabelConnection;
  /** Last update timestamp */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** Label type for categorizing and visually distinguishing entities */
export type LabelAttributeLabelsArgs = {
  input?: InputMaybe<FindManyAttributeLabelsInput>;
};


/** Label type for categorizing and visually distinguishing entities */
export type LabelAuthenticationLabelsArgs = {
  input?: InputMaybe<FindManyAuthenticationLabelsInput>;
};


/** Label type for categorizing and visually distinguishing entities */
export type LabelCredentialLabelsArgs = {
  input?: InputMaybe<FindManyCredentialLabelsInput>;
};


/** Label type for categorizing and visually distinguishing entities */
export type LabelDisclosureLabelsArgs = {
  input?: InputMaybe<FindManyDisclosureLabelsInput>;
};


/** Label type for categorizing and visually distinguishing entities */
export type LabelIssuanceLabelsArgs = {
  input?: InputMaybe<FindManyIssuanceLabelsInput>;
};


/** Label type for categorizing and visually distinguishing entities */
export type LabelIssuerLabelsArgs = {
  input?: InputMaybe<FindManyIssuerLabelsInput>;
};


/** Label type for categorizing and visually distinguishing entities */
export type LabelOrganizationBrandLabelsArgs = {
  input?: InputMaybe<FindManyOrganizationBrandLabelsInput>;
};


/** Label type for categorizing and visually distinguishing entities */
export type LabelOrganizationDomainLabelsArgs = {
  input?: InputMaybe<FindManyOrganizationDomainLabelsInput>;
};


/** Label type for categorizing and visually distinguishing entities */
export type LabelProviderLabelsArgs = {
  input?: InputMaybe<FindManyProviderLabelsInput>;
};


/** Label type for categorizing and visually distinguishing entities */
export type LabelSchemeLabelsArgs = {
  input?: InputMaybe<FindManySchemeLabelsInput>;
};


/** Label type for categorizing and visually distinguishing entities */
export type LabelSignatureLabelsArgs = {
  input?: InputMaybe<FindManySignatureLabelsInput>;
};

/** Label connection for pagination */
export type LabelConnection = {
  __typename?: 'LabelConnection';
  edges: Array<LabelEdge>;
  pageInfo: PageInfo;
};

export type LabelEdge = {
  __typename?: 'LabelEdge';
  cursor: Scalars['String']['output'];
  node: Label;
};

/** Fields which can be used to filter labels on. Value must be camel case. */
export enum LabelFilteringField {
  Color = 'color',
  Name = 'name',
  OrganizationUuid = 'organizationUuid',
  Scope = 'scope',
  Uuid = 'uuid'
}

/** Label scope determines where labels can be applied and who can manage them */
export enum LabelScope {
  /** Admin-only labels for catalog entities */
  Catalog = 'CATALOG',
  /** Organization-level labels for platform entities */
  Platform = 'PLATFORM'
}

/** Fields which can be used to sort labels on. Value must be camel case. */
export enum LabelSortEnum {
  Color = 'color',
  CreatedAt = 'createdAt',
  Name = 'name',
  Scope = 'scope',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting labels. */
export type LabelSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: LabelSortEnum;
};

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

/** Login by client credentials input */
export type LoginByClientCredentialsInput = {
  /** The client identifier */
  client_id: Scalars['NonEmpty']['input'];
  /** The client secret */
  client_secret: Scalars['NonEmpty']['input'];
};

/** Login by OpenID token input */
export type LoginByOpenIdTokenInput = {
  /** The OAuth provider UUID */
  oauthProviderUuid?: InputMaybe<Scalars['UUID']['input']>;
  /** The organization UUID. */
  organizationUuid?: InputMaybe<Scalars['UUID']['input']>;
  /** The open id token which is obtained via SSI or an external OAuth provider. */
  token: Scalars['NonEmpty']['input'];
};

/** Login by password input */
export type LoginByPasswordInput = {
  /** The email which we should use to log in the user. */
  email: Scalars['Email']['input'];
  /** The organization UUID. */
  organizationUuid?: InputMaybe<Scalars['UUID']['input']>;
  /** The password which we should use to log in the user. */
  password: Scalars['Password']['input'];
};

/** Maintenance window definition. */
export type Maintenance = Model & {
  __typename?: 'Maintenance';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The actual end time. */
  endedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The estimated duration in minutes. */
  estimatedMinutes?: Maybe<Scalars['Int']['output']>;
  /** The URN identifier for the maintenance scope. */
  maintenanceURN: Scalars['NonEmpty']['output'];
  /** The message body displayed to users. */
  messageBody?: Maybe<Scalars['NonEmpty']['output']>;
  /** The message title displayed to users. */
  messageTitle?: Maybe<Scalars['NonEmpty']['output']>;
  /** The name of the maintenance window. */
  name: Scalars['NonEmpty']['output'];
  /** The scheduled start time. */
  scheduledAt?: Maybe<Scalars['DateTime']['output']>;
  /** The actual start time. */
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The state of the maintenance. */
  state: MaintenanceState;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};

/** MaintenanceAction */
export enum MaintenanceAction {
  Activate = 'ACTIVATE',
  Complete = 'COMPLETE',
  Deactivate = 'DEACTIVATE',
  Start = 'START'
}

/** The maintenance connection definition. */
export type MaintenanceConnection = {
  __typename?: 'MaintenanceConnection';
  edges: Array<Maybe<MaintenanceEdge>>;
  pageInfo: PageInfo;
};

/** The maintenance edge definition. */
export type MaintenanceEdge = {
  __typename?: 'MaintenanceEdge';
  cursor: Scalars['String']['output'];
  node: Maintenance;
};

/** Fields which can be used to filter maintenances on. Value must be camel case. */
export enum MaintenanceFilteringField {
  Name = 'name',
  State = 'state',
  Urn = 'urn',
  Uuid = 'uuid'
}

/** Fields which can be used to sort maintenances on. Value must be camel case. */
export enum MaintenanceSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  ScheduledAt = 'scheduledAt',
  State = 'state',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting maintenances. */
export type MaintenanceSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: MaintenanceSortEnum;
};

/** MaintenanceState */
export enum MaintenanceState {
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
  Inactive = 'INACTIVE',
  Pending = 'PENDING'
}

/** MappingIssuance definition. */
export type MappingIssuance = Model & {
  __typename?: 'MappingIssuance';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The associated issuance flow mappings. */
  issuanceMappings: IssuanceMappingConnection;
  /** The issuance payload */
  issuancePayload: Scalars['JSONObject']['output'];
  /** The collection of defined attributes. */
  mappingIssuanceAttributes: MappingIssuanceAttributeConnection;
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
export type MappingIssuanceIssuanceMappingsArgs = {
  input?: InputMaybe<FindManyIssuanceMappingsInput>;
};


/** MappingIssuance definition. */
export type MappingIssuanceMappingIssuanceAttributesArgs = {
  input?: InputMaybe<FindManyMappingIssuanceAttributesInput>;
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
  /** The associated disclosures with this mapping */
  disclosureMappings: DisclosureMappingConnection;
  /** The collection of defined attributes. */
  mappingVerificationAttributes: MappingVerificationAttributeConnection;
  /** The collection of defined claims */
  mappingVerificationClaims: MappingVerificationClaimConnection;
  /** A list of links belonging to this verification. */
  mappingVerificationLinks: MappingVerificationLinkConnection;
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
export type MappingVerificationDisclosureMappingsArgs = {
  input?: InputMaybe<FindManyDisclosureMappingsInput>;
};


/** MappingVerification definition. */
export type MappingVerificationMappingVerificationAttributesArgs = {
  input?: InputMaybe<FindManyMappingVerificationAttributesInput>;
};


/** MappingVerification definition. */
export type MappingVerificationMappingVerificationClaimsArgs = {
  input?: InputMaybe<FindManyMappingVerificationClaimsInput>;
};


/** MappingVerification definition. */
export type MappingVerificationMappingVerificationLinksArgs = {
  input?: InputMaybe<FindManyMappingVerificationLinksInput>;
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
export type MoveDisclosureCredentialInput = {
  /** The credential to move */
  disclosureCredentialUuid: Scalars['NonEmpty']['input'];
  /** Optionally provide options */
  options?: InputMaybe<MoveDisclosureCredentialOptionsInput>;
  /** The flow disclosureGroupUuid */
  toDisclosureGroupUuid?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Moves credentials from group options */
export type MoveDisclosureCredentialOptionsInput = {
  /**
   * Delete the group if it becomes empty after the move
   * Default: true
   */
  deleteGroupIfEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Moves credentials from groups */
export type MoveSignatureCredentialInput = {
  /** Optionally provide options */
  options?: InputMaybe<MoveSignatureCredentialOptionsInput>;
  /** The credential to move */
  signatureCredentialUuid: Scalars['NonEmpty']['input'];
  /** The flow disclosureGroupUuid */
  toSignatureGroupUuid?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Moves credentials from group options */
export type MoveSignatureCredentialOptionsInput = {
  /**
   * Delete the group if it becomes empty after the move
   * Default: true
   */
  deleteGroupIfEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Accept the user invitation using password. */
  acceptUserInvitationAndRegisterByPassword: UserToken;
  /** Accept the user invitation using openID Token. */
  acceptUserInvitationByOpenIdToken: UserToken;
  /** Accept the user invitation using password. */
  acceptUserInvitationByPassword: UserToken;
  /** Perform action on an app */
  actionApp: App;
  /** Perform action on an attribute */
  actionAttribute: Attribute;
  /** Update a flow state. */
  actionAuthentication: Authentication;
  /** Action on billing wallet */
  actionBillingWallet: BillingWallet;
  /** Perform action on an credential */
  actionCredential: Credential;
  /** Perform action on credential request */
  actionCredentialRequest: CredentialRequest;
  /** Action a flow */
  actionDisclosure: Disclosure;
  /** Action a flow. */
  actionIssuance: Issuance;
  /** Perform action on an issuer */
  actionIssuer: Issuer;
  /** Action a maintenance */
  actionMaintenance: Maintenance;
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
  /** Update a pricing rule state. */
  actionPricingRule: PricingRule;
  /** Perform action on an provider */
  actionProvider: Provider;
  /** Perform action on an scheme */
  actionScheme: Scheme;
  /** Perform action on an scope */
  actionScope: Scope;
  /** Action a flow. */
  actionSignature: Signature;
  /** Update a state. */
  actionStudioPlan: StudioPlan;
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
  /** Create and store a new identity attribute label. */
  createAttributeLabel: AttributeLabel;
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
  /** Create an attribute request meta OID4VC mdoc. */
  createAttributeRequestMetaOID4VCMDOC: AttributeRequestMetaOid4Vcmdoc;
  /** Create an attribute request meta OID4VC SD-JWT. */
  createAttributeRequestMetaOID4VCSDJWT: AttributeRequestMetaOid4Vcsdjwt;
  /** Create a attribute request meta yivi. */
  createAttributeRequestMetaYivi: AttributeRequestMetaYivi;
  /** Create a attribute request meta yoti. */
  createAttributeRequestMetaYoti: AttributeRequestMetaYoti;
  /** Create a flow. */
  createAuthentication: Authentication;
  /** Create and store a new brand type. */
  createAuthenticationBrand: AuthenticationBrand;
  /** Create and store a new domain type. */
  createAuthenticationDomain: AuthenticationDomain;
  /** Create and store a new Label type. */
  createAuthenticationLabel: AuthenticationLabel;
  /** Create a flow authentication provider. */
  createAuthenticationProvider: AuthenticationProvider;
  /** Create a AuthenticationProviderConfigurationNLWallet. */
  createAuthenticationProviderConfigurationNLWallet: AuthenticationProviderConfigurationNlWallet;
  /** Create a flow authentication scope. */
  createAuthenticationScope: AuthenticationScope;
  /** Initializes billing plan */
  createBillingPlan: BillingPlan;
  /** Create billing wallet */
  createBillingWallet: BillingWallet;
  /** Create a credential. */
  createCredential: Credential;
  /** Create and store a new identity credential label. */
  createCredentialLabel: CredentialLabel;
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
  /** Create a credential request meta OID4VC mdoc. */
  createCredentialRequestMetaOID4VCMDOC: CredentialRequestMetaOid4Vcmdoc;
  /** Create a credential request meta OID4VC SD-JWT. */
  createCredentialRequestMetaOID4VCSDJWT: CredentialRequestMetaOid4Vcsdjwt;
  /** Create a credential request meta yivi. */
  createCredentialRequestMetaYivi: CredentialRequestMetaYivi;
  /** Create a credential request meta yoti. */
  createCredentialRequestMetaYoti: CredentialRequestMetaYoti;
  /** Create a credential request state. */
  createCredentialRequestState: CredentialRequestState;
  /** Create a credentialRequestState. */
  createCredentialRequestStateLocale: CredentialRequestStateLocale;
  /** Create a flow. */
  createDisclosure: Disclosure;
  /** Create a flow disclosure attribute. */
  createDisclosureAttribute: DisclosureAttribute;
  /** Create and store a new brand type. */
  createDisclosureBrand: DisclosureBrand;
  /** Create a flow disclosure credential. */
  createDisclosureCredential: DisclosureCredential;
  /** Create and store a new domain type. */
  createDisclosureDomain: DisclosureDomain;
  /** Create a flow disclosure group. */
  createDisclosureGroup: DisclosureGroup;
  /** Create and store a new Label type. */
  createDisclosureLabel: DisclosureLabel;
  /** Create and store a new mapping type. */
  createDisclosureMapping: DisclosureMapping;
  /** Create a flow disclosure provider. */
  createDisclosureProvider: DisclosureProvider;
  /** Create a flow disclosure provider by attributes */
  createDisclosureProviderByAttributes: DisclosureProvider;
  /** Create a DisclosureProviderConfigurationNLWallet. */
  createDisclosureProviderConfigurationNLWallet: DisclosureProviderConfigurationNlWallet;
  /** Create a flow. */
  createIssuance: Issuance;
  /** Create a flow issuance attribute. */
  createIssuanceAttribute: IssuanceAttribute;
  /** Create and store a new brand type. */
  createIssuanceBrand: IssuanceBrand;
  /** Create a flow issuance credential. */
  createIssuanceCredential: IssuanceCredential;
  /** Create a flow credential meta datakeeper. */
  createIssuanceCredentialMetaDatakeeper: IssuanceCredentialMetaDatakeeper;
  /** Create a flow credential meta yivi. */
  createIssuanceCredentialMetaYivi: IssuanceCredentialMetaYivi;
  /** Create and store a new domain type. */
  createIssuanceDomain: IssuanceDomain;
  /** Create and store a new Label type. */
  createIssuanceLabel: IssuanceLabel;
  /** Create and store a new mapping type. */
  createIssuanceMapping: IssuanceMapping;
  /** Create a flow issuance provider. */
  createIssuanceProvider: IssuanceProvider;
  /** Create many flow issuance provider by attributes */
  createIssuanceProviderByAttributes: IssuanceProvider;
  /** Create a issuer. */
  createIssuer: Issuer;
  /** Create and store a new identity issuer label. */
  createIssuerLabel: IssuerLabel;
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
  /** Create a new label */
  createLabel: Label;
  /** Create a localeConfig. */
  createLocaleConfig: LocaleConfig;
  /** Create a maintenance. */
  createMaintenance: Maintenance;
  /** Create and store a new MANAGED organization type. */
  createManagedOrganization: Organization;
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
  /** Create and store a new DIRECT organization type. */
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
  /** Create a organization app meta OID4VC. */
  createOrganizationAppMetaOid4vc: OrganizationAppMetaOid4vc;
  /** Create a organization app meta yoti. */
  createOrganizationAppMetaYoti: OrganizationAppMetaYoti;
  /** Create an organization app prerequisite. */
  createOrganizationAppPrerequisite: OrganizationAppPrerequisite;
  /** Create and store a new brand type. */
  createOrganizationBrand: OrganizationBrand;
  /** Create and store a new Label type. */
  createOrganizationBrandLabel: OrganizationBrandLabel;
  /** Create and store a new token type. */
  createOrganizationClient: OrganizationClient;
  /** Create and store a new domain type. */
  createOrganizationDomain: OrganizationDomain;
  /** Create and store a new Label type. */
  createOrganizationDomainLabel: OrganizationDomainLabel;
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
  /** Create a pricing catalog entry. */
  createPricingCatalog: PricingCatalog;
  /** Create a pricing configuration app. */
  createPricingConfigurationApp: PricingConfigurationApp;
  /** Create a pricing configuration organization. */
  createPricingConfigurationOrganization: PricingConfigurationOrganization;
  /** Create a pricing configuration studio plan. */
  createPricingConfigurationStudioPlan: PricingConfigurationStudioPlan;
  /** Create a pricing group. */
  createPricingGroup: PricingGroup;
  /** Create a pricing group assignment. */
  createPricingGroupAssignment: PricingGroupAssignment;
  /** Create a pricing rule. */
  createPricingRule: PricingRule;
  /** Create a pricing rule constraint. */
  createPricingRuleConstraint: PricingRuleConstraint;
  /** Create a pricing rule target. */
  createPricingRuleTarget: PricingRuleTarget;
  /** Create a provider. */
  createProvider: Provider;
  /** Create a app. */
  createProviderApp: ProviderApp;
  /** Create an object */
  createProviderAppMetaOID4VC: ProviderAppMetaOid4Vc;
  /** Create and store a new identity provider label. */
  createProviderLabel: ProviderLabel;
  /** Create a provider. */
  createProviderLocale: ProviderLocale;
  /** Create a scheme. */
  createScheme: Scheme;
  /** Create and store a new identity scheme label. */
  createSchemeLabel: SchemeLabel;
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
  /** Create a flow. */
  createSignature: Signature;
  /** Create a flow signature attribute. */
  createSignatureAttribute: SignatureAttribute;
  /** Create and store a new brand type. */
  createSignatureBrand: SignatureBrand;
  /** Create a flow signature credential. */
  createSignatureCredential: SignatureCredential;
  /** Create and store a new domain type. */
  createSignatureDomain: SignatureDomain;
  /** Create a flow signature group. */
  createSignatureGroup: SignatureGroup;
  /** Create and store a new Label type. */
  createSignatureLabel: SignatureLabel;
  /** Create and store a new mapping type. */
  createSignatureMapping: SignatureMapping;
  /** Create a flow signature provider. */
  createSignatureProvider: SignatureProvider;
  /** Create a flow signature provider by attributes */
  createSignatureProviderByAttributes: SignatureProvider;
  /** Create a SignatureProviderConfigurationNLWallet. */
  createSignatureProviderConfigurationNLWallet: SignatureProviderConfigurationNlWallet;
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
  /** Create invitation. */
  createUserInvitationToken?: Maybe<Scalars['Null']['output']>;
  /** Forgot password, which send a password reset email. */
  createUserReset?: Maybe<Scalars['Null']['output']>;
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
  /** Delete an identity attribute label. */
  deleteAttributeLabel?: Maybe<Scalars['Null']['output']>;
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
  /** Delete an attribute request meta OID4VC mdoc. */
  deleteAttributeRequestMetaOID4VCMDOC?: Maybe<Scalars['Null']['output']>;
  /** Delete an attribute request meta OID4VC SD-JWT. */
  deleteAttributeRequestMetaOID4VCSDJWT?: Maybe<Scalars['Null']['output']>;
  /** Delete a attribute request meta yivi. */
  deleteAttributeRequestMetaYivi?: Maybe<Scalars['Null']['output']>;
  /** Delete a attribute request meta yoti. */
  deleteAttributeRequestMetaYoti?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow. */
  deleteAuthentication?: Maybe<Scalars['Null']['output']>;
  /** Delete a brand. */
  deleteAuthenticationBrand?: Maybe<Scalars['Null']['output']>;
  /** Delete a domain. */
  deleteAuthenticationDomain?: Maybe<Scalars['Null']['output']>;
  /** Delete a Label. */
  deleteAuthenticationLabel?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow authentication provider. */
  deleteAuthenticationProvider?: Maybe<Scalars['Null']['output']>;
  /** Delete a AuthenticationProviderConfigurationNLWallet. */
  deleteAuthenticationProviderConfigurationNLWallet?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow authentication scope. */
  deleteAuthenticationScope?: Maybe<Scalars['Null']['output']>;
  /** Delete billing plan. */
  deleteBillingPlan?: Maybe<Scalars['Null']['output']>;
  /** Delete an credential. */
  deleteCredential?: Maybe<Scalars['Null']['output']>;
  /** Delete an identity credential label. */
  deleteCredentialLabel?: Maybe<Scalars['Null']['output']>;
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
  /** Delete a credential request meta OID4VC mdoc. */
  deleteCredentialRequestMetaOID4VCMDOC?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential request meta OID4VC SD-JWT. */
  deleteCredentialRequestMetaOID4VCSDJWT?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential request meta yivi. */
  deleteCredentialRequestMetaYivi?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential request meta yoti. */
  deleteCredentialRequestMetaYoti?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential request state. */
  deleteCredentialRequestState?: Maybe<Scalars['Null']['output']>;
  /** Delete an credentialRequestState. */
  deleteCredentialRequestStateLocale?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow. */
  deleteDisclosure?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow disclosure attribute. */
  deleteDisclosureAttribute?: Maybe<Scalars['Null']['output']>;
  /** Delete a brand. */
  deleteDisclosureBrand?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow disclosure credential. */
  deleteDisclosureCredential?: Maybe<Scalars['Null']['output']>;
  /** Delete a domain. */
  deleteDisclosureDomain?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow disclosure group. */
  deleteDisclosureGroup?: Maybe<Scalars['Null']['output']>;
  /** Delete a Label. */
  deleteDisclosureLabel?: Maybe<Scalars['Null']['output']>;
  /** Delete a mapping. */
  deleteDisclosureMapping?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow disclosure provider. */
  deleteDisclosureProvider?: Maybe<Scalars['Null']['output']>;
  /** Delete a DisclosureProviderConfigurationNLWallet. */
  deleteDisclosureProviderConfigurationNLWallet?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow. */
  deleteIssuance?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow issuance attribute. */
  deleteIssuanceAttribute?: Maybe<Scalars['Null']['output']>;
  /** Delete a brand. */
  deleteIssuanceBrand?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow issuance credential. */
  deleteIssuanceCredential?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow credential meta datakeeper. */
  deleteIssuanceCredentialMetaDatakeeper?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow credential meta yivi. */
  deleteIssuanceCredentialMetaYivi?: Maybe<Scalars['Null']['output']>;
  /** Delete a domain. */
  deleteIssuanceDomain?: Maybe<Scalars['Null']['output']>;
  /** Delete a Label. */
  deleteIssuanceLabel?: Maybe<Scalars['Null']['output']>;
  /** Delete a mapping. */
  deleteIssuanceMapping?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow issuance provider. */
  deleteIssuanceProvider?: Maybe<Scalars['Null']['output']>;
  /** Delete an issuer. */
  deleteIssuer?: Maybe<Scalars['Null']['output']>;
  /** Delete an identity issuer label. */
  deleteIssuerLabel?: Maybe<Scalars['Null']['output']>;
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
  /** Delete a label */
  deleteLabel: Scalars['Boolean']['output'];
  /** Delete an localeConfig. */
  deleteLocaleConfig?: Maybe<Scalars['Null']['output']>;
  /** Delete a maintenance. */
  deleteMaintenance?: Maybe<Scalars['Null']['output']>;
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
  /** Delete a organization app meta OID4VC. */
  deleteOrganizationAppMetaOid4vc?: Maybe<Scalars['Null']['output']>;
  /** Delete a organization app meta yoti. */
  deleteOrganizationAppMetaYoti?: Maybe<Scalars['Null']['output']>;
  /** Delete an organization app prerequisite. */
  deleteOrganizationAppPrerequisite?: Maybe<Scalars['Null']['output']>;
  /** Delete a brand. */
  deleteOrganizationBrand?: Maybe<Scalars['Null']['output']>;
  /** Delete a Label. */
  deleteOrganizationBrandLabel?: Maybe<Scalars['Null']['output']>;
  /** Delete a token. */
  deleteOrganizationClient?: Maybe<Scalars['Null']['output']>;
  /** Delete a domain. */
  deleteOrganizationDomain?: Maybe<Scalars['Null']['output']>;
  /** Delete a Label. */
  deleteOrganizationDomainLabel?: Maybe<Scalars['Null']['output']>;
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
  /** Delete a pricing catalog entry. */
  deletePricingCatalog?: Maybe<Scalars['Null']['output']>;
  /** Delete a pricing configuration app. */
  deletePricingConfigurationApp?: Maybe<Scalars['Null']['output']>;
  /** Delete a pricing configuration organization. */
  deletePricingConfigurationOrganization?: Maybe<Scalars['Null']['output']>;
  /** Delete a pricing configuration studio plan. */
  deletePricingConfigurationStudioPlan?: Maybe<Scalars['Null']['output']>;
  /** Delete a pricing group. */
  deletePricingGroup?: Maybe<Scalars['Null']['output']>;
  /** Delete a pricing group assignment. */
  deletePricingGroupAssignment?: Maybe<Scalars['Null']['output']>;
  /** Delete a pricing rule. */
  deletePricingRule?: Maybe<Scalars['Null']['output']>;
  /** Delete a pricing rule constraint. */
  deletePricingRuleConstraint?: Maybe<Scalars['Null']['output']>;
  /** Delete a pricing rule target. */
  deletePricingRuleTarget?: Maybe<Scalars['Null']['output']>;
  /** Delete an provider. */
  deleteProvider?: Maybe<Scalars['Null']['output']>;
  /** Delete an app. */
  deleteProviderApp?: Maybe<Scalars['Null']['output']>;
  /** Delete an object */
  deleteProviderAppMetaOID4VC?: Maybe<Scalars['Null']['output']>;
  /** Delete an identity provider label. */
  deleteProviderLabel?: Maybe<Scalars['Null']['output']>;
  /** Delete an provider. */
  deleteProviderLocale?: Maybe<Scalars['Null']['output']>;
  /** Delete an scheme. */
  deleteScheme?: Maybe<Scalars['Null']['output']>;
  /** Delete an identity scheme label. */
  deleteSchemeLabel?: Maybe<Scalars['Null']['output']>;
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
  /** Delete a flow. */
  deleteSignature?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow signature attribute. */
  deleteSignatureAttribute?: Maybe<Scalars['Null']['output']>;
  /** Delete a brand. */
  deleteSignatureBrand?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow signature credential. */
  deleteSignatureCredential?: Maybe<Scalars['Null']['output']>;
  /** Delete a domain. */
  deleteSignatureDomain?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow signature group. */
  deleteSignatureGroup?: Maybe<Scalars['Null']['output']>;
  /** Delete a Label. */
  deleteSignatureLabel?: Maybe<Scalars['Null']['output']>;
  /** Delete a mapping. */
  deleteSignatureMapping?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow signature provider. */
  deleteSignatureProvider?: Maybe<Scalars['Null']['output']>;
  /** Delete a SignatureProviderConfigurationNLWallet. */
  deleteSignatureProviderConfigurationNLWallet?: Maybe<Scalars['Null']['output']>;
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
  duplicateAuthentication: Authentication;
  /** Duplicate a flow. */
  duplicateDisclosure: Disclosure;
  /** Duplicate a flow. */
  duplicateIssuance: Issuance;
  /** Duplicate a flow. */
  duplicateSignature: Signature;
  /** Duplicate a plan. */
  duplicateStudioPlan: StudioPlan;
  /** Log in a user using Client Credentials. */
  loginByClientCredentials: UserToken;
  /** Log in a user using OpenId token. */
  loginByOpenIdToken: UserToken;
  /** Log in a user using password. */
  loginByPassword: UserToken;
  /** Move a flow credential to new or existing groups */
  moveDisclosureCredential: DisclosureGroup;
  /** Move a flow credential to new or existing groups */
  moveSignatureCredential: SignatureGroup;
  /** Register a user with OpenID token. */
  registerByOpenIdToken: UserToken;
  /** Register a user with password. */
  registerByPassword: UserToken;
  /** Renew access token. */
  renewAccessToken: UserToken;
  /** Resend an existing userInvitation. */
  resendUserInvitation: UserInvitation;
  /** Initializes billing method */
  setupBillingMethod: SetupBillingMethodOutput;
  /** Transition a user organization type. */
  transitionOrganizationType: Organization;
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
  /** Update an attribute request meta OID4VC mdoc. */
  updateAttributeRequestMetaOID4VCMDOC: AttributeRequestMetaOid4Vcmdoc;
  /** Update an attribute request meta OID4VC SD-JWT. */
  updateAttributeRequestMetaOID4VCSDJWT: AttributeRequestMetaOid4Vcsdjwt;
  /** Update a attribute request meta yivi. */
  updateAttributeRequestMetaYivi: AttributeRequestMetaYivi;
  /** Update a attribute request meta yoti. */
  updateAttributeRequestMetaYoti: AttributeRequestMetaYoti;
  /** Update a flow. */
  updateAuthentication: Authentication;
  /** Update brand. */
  updateAuthenticationBrand: AuthenticationBrand;
  /** Update an domain. */
  updateAuthenticationDomain: AuthenticationDomain;
  /** Update a flow authentication provider. */
  updateAuthenticationProvider: AuthenticationProvider;
  /** Update a AuthenticationProviderConfigurationNLWallet. */
  updateAuthenticationProviderConfigurationNLWallet: AuthenticationProviderConfigurationNlWallet;
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
  /** Update a credential request meta OID4VC mdoc. */
  updateCredentialRequestMetaOID4VCMDOC: CredentialRequestMetaOid4Vcmdoc;
  /** Update a credential request meta OID4VC SD-JWT. */
  updateCredentialRequestMetaOID4VCSDJWT: CredentialRequestMetaOid4Vcsdjwt;
  /** Update a credential request meta yivi. */
  updateCredentialRequestMetaYivi: CredentialRequestMetaYivi;
  /** Update a credential request meta yoti. */
  updateCredentialRequestMetaYoti: CredentialRequestMetaYoti;
  /** Update a credential request state. */
  updateCredentialRequestState: CredentialRequestState;
  /** Update an credentialRequestState. */
  updateCredentialRequestStateLocale: CredentialRequestStateLocale;
  /** Update a flow. */
  updateDisclosure: Disclosure;
  /** Update brand */
  updateDisclosureBrand: DisclosureBrand;
  /** Update an domain. */
  updateDisclosureDomain: DisclosureDomain;
  /** Update a flow group. */
  updateDisclosureGroup: DisclosureGroup;
  /** Update a flow disclosure provider. */
  updateDisclosureProvider: DisclosureProvider;
  /** Update a DisclosureProviderConfigurationNLWallet. */
  updateDisclosureProviderConfigurationNLWallet: DisclosureProviderConfigurationNlWallet;
  /** Update a flow. */
  updateIssuance: Issuance;
  /** Update brand */
  updateIssuanceBrand: IssuanceBrand;
  /** Update a flow credential meta datakeeper. */
  updateIssuanceCredentialMetaDatakeeper: IssuanceCredentialMetaDatakeeper;
  /** Update a flow credential meta yivi. */
  updateIssuanceCredentialMetaYivi: IssuanceCredentialMetaYivi;
  /** Update an domain. */
  updateIssuanceDomain: IssuanceDomain;
  /** Update a flow issuance provider. */
  updateIssuanceProvider: IssuanceProvider;
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
  /** Update an existing label */
  updateLabel: Label;
  /** Update an localeConfig. */
  updateLocaleConfig: LocaleConfig;
  /** Update a maintenance. */
  updateMaintenance: Maintenance;
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
  /** Update a organization app meta OID4VC. */
  updateOrganizationAppMetaOid4vc: OrganizationAppMetaOid4vc;
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
  /** Update a pricing catalog entry. */
  updatePricingCatalog: PricingCatalog;
  /** Update a pricing configuration app. */
  updatePricingConfigurationApp: PricingConfigurationApp;
  /** Update a pricing configuration organization. */
  updatePricingConfigurationOrganization: PricingConfigurationOrganization;
  /** Update a pricing configuration studio plan. */
  updatePricingConfigurationStudioPlan: PricingConfigurationStudioPlan;
  /** Update a pricing group. */
  updatePricingGroup: PricingGroup;
  /** Update a pricing rule. */
  updatePricingRule: PricingRule;
  /** Update a pricing rule constraint. */
  updatePricingRuleConstraint: PricingRuleConstraint;
  /** Update a pricing rule target. */
  updatePricingRuleTarget: PricingRuleTarget;
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
  /** Update a flow. */
  updateSignature: Signature;
  /** Update brand */
  updateSignatureBrand: SignatureBrand;
  /** Update an domain. */
  updateSignatureDomain: SignatureDomain;
  /** Update a flow group. */
  updateSignatureGroup: SignatureGroup;
  /** Update a flow signature provider. */
  updateSignatureProvider: SignatureProvider;
  /** Update a SignatureProviderConfigurationNLWallet. */
  updateSignatureProviderConfigurationNLWallet: SignatureProviderConfigurationNlWallet;
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
  useUserInvitationToken: UserToken;
  /** Use a reset token to reset password of a user */
  useUserReset: UserToken;
  /** Validate the user invitation. */
  validateUserInvitation: Scalars['Boolean']['output'];
  /** Validate the invitation. */
  validateUserInvitationToken: Scalars['Boolean']['output'];
  /** Validate the invitation. */
  validateUserReset: Scalars['Boolean']['output'];
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


export type MutationActionAuthenticationArgs = {
  input: ActionAuthenticationInput;
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


export type MutationActionDisclosureArgs = {
  input: ActionDisclosureInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionIssuanceArgs = {
  input: ActionIssuanceInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionIssuerArgs = {
  input: ActionIssuerInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionMaintenanceArgs = {
  input: ActionMaintenanceInput;
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


export type MutationActionPricingRuleArgs = {
  input: ActionPricingRuleInput;
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


export type MutationActionSignatureArgs = {
  input: ActionSignatureInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionStudioPlanArgs = {
  input: ActionStudioPlanInput;
  uuid: Scalars['UUID']['input'];
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


export type MutationCreateAttributeLabelArgs = {
  input: CreateAttributeLabelInput;
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


export type MutationCreateAttributeRequestMetaOid4VcmdocArgs = {
  input: CreateAttributeRequestMetaOid4VcmdocInput;
};


export type MutationCreateAttributeRequestMetaOid4VcsdjwtArgs = {
  input: CreateAttributeRequestMetaOid4VcsdjwtInput;
};


export type MutationCreateAttributeRequestMetaYiviArgs = {
  input: CreateAttributeRequestMetaYiviInput;
};


export type MutationCreateAttributeRequestMetaYotiArgs = {
  input: CreateAttributeRequestMetaYotiInput;
};


export type MutationCreateAuthenticationArgs = {
  input: CreateAuthenticationInput;
};


export type MutationCreateAuthenticationBrandArgs = {
  input: CreateAuthenticationBrandInput;
};


export type MutationCreateAuthenticationDomainArgs = {
  input: CreateAuthenticationDomainInput;
};


export type MutationCreateAuthenticationLabelArgs = {
  input: CreateAuthenticationLabelInput;
};


export type MutationCreateAuthenticationProviderArgs = {
  input: CreateAuthenticationProviderInput;
};


export type MutationCreateAuthenticationProviderConfigurationNlWalletArgs = {
  input: CreateAuthenticationProviderConfigurationNlWalletInput;
};


export type MutationCreateAuthenticationScopeArgs = {
  input: CreateAuthenticationScopeInput;
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


export type MutationCreateCredentialLabelArgs = {
  input: CreateCredentialLabelInput;
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


export type MutationCreateCredentialRequestMetaOid4VcmdocArgs = {
  input: CreateCredentialRequestMetaOid4VcmdocInput;
};


export type MutationCreateCredentialRequestMetaOid4VcsdjwtArgs = {
  input: CreateCredentialRequestMetaOid4VcsdjwtInput;
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


export type MutationCreateDisclosureArgs = {
  input: CreateDisclosureInput;
};


export type MutationCreateDisclosureAttributeArgs = {
  input: CreateDisclosureAttributeInput;
};


export type MutationCreateDisclosureBrandArgs = {
  input: CreateDisclosureBrandInput;
};


export type MutationCreateDisclosureCredentialArgs = {
  input: CreateDisclosureCredentialInput;
};


export type MutationCreateDisclosureDomainArgs = {
  input: CreateDisclosureDomainInput;
};


export type MutationCreateDisclosureGroupArgs = {
  input: CreateDisclosureGroupInput;
};


export type MutationCreateDisclosureLabelArgs = {
  input: CreateDisclosureLabelInput;
};


export type MutationCreateDisclosureMappingArgs = {
  input: CreateDisclosureMappingInput;
};


export type MutationCreateDisclosureProviderArgs = {
  input: CreateDisclosureProviderInput;
};


export type MutationCreateDisclosureProviderByAttributesArgs = {
  input: CreateDisclosureProviderByAttributesInput;
};


export type MutationCreateDisclosureProviderConfigurationNlWalletArgs = {
  input: CreateDisclosureProviderConfigurationNlWalletInput;
};


export type MutationCreateIssuanceArgs = {
  input: CreateIssuanceInput;
};


export type MutationCreateIssuanceAttributeArgs = {
  input: CreateIssuanceAttributeInput;
};


export type MutationCreateIssuanceBrandArgs = {
  input: CreateIssuanceBrandInput;
};


export type MutationCreateIssuanceCredentialArgs = {
  input: CreateIssuanceCredentialInput;
};


export type MutationCreateIssuanceCredentialMetaDatakeeperArgs = {
  input: CreateIssuanceCredentialMetaDatakeeperInput;
};


export type MutationCreateIssuanceCredentialMetaYiviArgs = {
  input: CreateIssuanceCredentialMetaYiviInput;
};


export type MutationCreateIssuanceDomainArgs = {
  input: CreateIssuanceDomainInput;
};


export type MutationCreateIssuanceLabelArgs = {
  input: CreateIssuanceLabelInput;
};


export type MutationCreateIssuanceMappingArgs = {
  input: CreateIssuanceMappingInput;
};


export type MutationCreateIssuanceProviderArgs = {
  input: CreateIssuanceProviderInput;
};


export type MutationCreateIssuanceProviderByAttributesArgs = {
  input: CreateIssuanceProviderByAttributesInput;
};


export type MutationCreateIssuerArgs = {
  input: CreateIssuerInput;
};


export type MutationCreateIssuerLabelArgs = {
  input: CreateIssuerLabelInput;
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


export type MutationCreateLabelArgs = {
  input: CreateLabelInput;
};


export type MutationCreateLocaleConfigArgs = {
  input: CreateLocaleConfigInput;
};


export type MutationCreateMaintenanceArgs = {
  input: CreateMaintenanceInput;
};


export type MutationCreateManagedOrganizationArgs = {
  input: CreateOrganizationInput;
  partnerOrganizationUuid: Scalars['UUID']['input'];
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


export type MutationCreateOrganizationAppMetaOid4vcArgs = {
  input: CreateOrganizationAppMetaOid4vcInput;
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


export type MutationCreateOrganizationBrandLabelArgs = {
  input: CreateOrganizationBrandLabelInput;
};


export type MutationCreateOrganizationClientArgs = {
  input: CreateOrganizationClientInput;
};


export type MutationCreateOrganizationDomainArgs = {
  input: CreateOrganizationDomainInput;
};


export type MutationCreateOrganizationDomainLabelArgs = {
  input: CreateOrganizationDomainLabelInput;
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


export type MutationCreatePricingCatalogArgs = {
  input: CreatePricingCatalogInput;
};


export type MutationCreatePricingConfigurationAppArgs = {
  input: CreatePricingConfigurationAppInput;
};


export type MutationCreatePricingConfigurationOrganizationArgs = {
  input: CreatePricingConfigurationOrganizationInput;
};


export type MutationCreatePricingConfigurationStudioPlanArgs = {
  input: CreatePricingConfigurationStudioPlanInput;
};


export type MutationCreatePricingGroupArgs = {
  input: CreatePricingGroupInput;
};


export type MutationCreatePricingGroupAssignmentArgs = {
  input: CreatePricingGroupAssignmentInput;
};


export type MutationCreatePricingRuleArgs = {
  input: CreatePricingRuleInput;
};


export type MutationCreatePricingRuleConstraintArgs = {
  input: CreatePricingRuleConstraintInput;
};


export type MutationCreatePricingRuleTargetArgs = {
  input: CreatePricingRuleTargetInput;
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


export type MutationCreateProviderLabelArgs = {
  input: CreateProviderLabelInput;
};


export type MutationCreateProviderLocaleArgs = {
  input: CreateProviderLocaleInput;
};


export type MutationCreateSchemeArgs = {
  input: CreateSchemeInput;
};


export type MutationCreateSchemeLabelArgs = {
  input: CreateSchemeLabelInput;
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


export type MutationCreateSignatureArgs = {
  input: CreateSignatureInput;
};


export type MutationCreateSignatureAttributeArgs = {
  input: CreateSignatureAttributeInput;
};


export type MutationCreateSignatureBrandArgs = {
  input: CreateSignatureBrandInput;
};


export type MutationCreateSignatureCredentialArgs = {
  input: CreateSignatureCredentialInput;
};


export type MutationCreateSignatureDomainArgs = {
  input: CreateSignatureDomainInput;
};


export type MutationCreateSignatureGroupArgs = {
  input: CreateSignatureGroupInput;
};


export type MutationCreateSignatureLabelArgs = {
  input: CreateSignatureLabelInput;
};


export type MutationCreateSignatureMappingArgs = {
  input: CreateSignatureMappingInput;
};


export type MutationCreateSignatureProviderArgs = {
  input: CreateSignatureProviderInput;
};


export type MutationCreateSignatureProviderByAttributesArgs = {
  input: CreateSignatureProviderByAttributesInput;
};


export type MutationCreateSignatureProviderConfigurationNlWalletArgs = {
  input: CreateSignatureProviderConfigurationNlWalletInput;
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


export type MutationCreateUserInvitationTokenArgs = {
  userUuid: Scalars['UUID']['input'];
};


export type MutationCreateUserResetArgs = {
  input: CreateUserResetInput;
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


export type MutationDeleteAttributeLabelArgs = {
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


export type MutationDeleteAttributeRequestMetaOid4VcmdocArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeRequestMetaOid4VcsdjwtArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeRequestMetaYiviArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeRequestMetaYotiArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAuthenticationArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAuthenticationBrandArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAuthenticationDomainArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAuthenticationLabelArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAuthenticationProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAuthenticationProviderConfigurationNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAuthenticationScopeArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteBillingPlanArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialLabelArgs = {
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


export type MutationDeleteCredentialRequestMetaOid4VcmdocArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialRequestMetaOid4VcsdjwtArgs = {
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


export type MutationDeleteDisclosureArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteDisclosureAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteDisclosureBrandArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteDisclosureCredentialArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteDisclosureDomainArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteDisclosureGroupArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteDisclosureLabelArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteDisclosureMappingArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteDisclosureProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteDisclosureProviderConfigurationNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuanceArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuanceAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuanceBrandArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuanceCredentialArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuanceCredentialMetaDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuanceCredentialMetaYiviArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuanceDomainArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuanceLabelArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuanceMappingArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuanceProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuerArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuerLabelArgs = {
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


export type MutationDeleteLabelArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteLocaleConfigArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteMaintenanceArgs = {
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


export type MutationDeleteOrganizationAppMetaOid4vcArgs = {
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


export type MutationDeleteOrganizationBrandLabelArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteOrganizationClientArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteOrganizationDomainArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteOrganizationDomainLabelArgs = {
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


export type MutationDeletePricingCatalogArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeletePricingConfigurationAppArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeletePricingConfigurationOrganizationArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeletePricingConfigurationStudioPlanArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeletePricingGroupArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeletePricingGroupAssignmentArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeletePricingRuleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeletePricingRuleConstraintArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeletePricingRuleTargetArgs = {
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


export type MutationDeleteProviderLabelArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteProviderLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteSchemeArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteSchemeLabelArgs = {
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


export type MutationDeleteSignatureArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteSignatureAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteSignatureBrandArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteSignatureCredentialArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteSignatureDomainArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteSignatureGroupArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteSignatureLabelArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteSignatureMappingArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteSignatureProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteSignatureProviderConfigurationNlWalletArgs = {
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


export type MutationDuplicateAuthenticationArgs = {
  input: DuplicateAuthenticationInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationDuplicateDisclosureArgs = {
  input: DuplicateDisclosureInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationDuplicateIssuanceArgs = {
  input: DuplicateIssuanceInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationDuplicateSignatureArgs = {
  input: DuplicateSignatureInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationDuplicateStudioPlanArgs = {
  input: DuplicateStudioPlanInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationLoginByClientCredentialsArgs = {
  input: LoginByClientCredentialsInput;
};


export type MutationLoginByOpenIdTokenArgs = {
  input: LoginByOpenIdTokenInput;
};


export type MutationLoginByPasswordArgs = {
  input: LoginByPasswordInput;
};


export type MutationMoveDisclosureCredentialArgs = {
  input: MoveDisclosureCredentialInput;
};


export type MutationMoveSignatureCredentialArgs = {
  input: MoveSignatureCredentialInput;
};


export type MutationRegisterByOpenIdTokenArgs = {
  input: RegisterByOpenIdTokenInput;
};


export type MutationRegisterByPasswordArgs = {
  input: RegisterByPasswordInput;
};


export type MutationRenewAccessTokenArgs = {
  input: RenewAccessTokenInput;
};


export type MutationResendUserInvitationArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationSetupBillingMethodArgs = {
  input: SetupBillingMethodInput;
};


export type MutationTransitionOrganizationTypeArgs = {
  input: TransitionOrganizationTypeInput;
  uuid: Scalars['UUID']['input'];
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


export type MutationUpdateAttributeRequestMetaOid4VcmdocArgs = {
  input: UpdateAttributeRequestMetaOid4VcmdocInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeRequestMetaOid4VcsdjwtArgs = {
  input: UpdateAttributeRequestMetaOid4VcsdjwtInput;
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


export type MutationUpdateAuthenticationArgs = {
  input: UpdateAuthenticationInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAuthenticationBrandArgs = {
  input: UpdateAuthenticationBrandInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAuthenticationDomainArgs = {
  input: UpdateAuthenticationDomainInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAuthenticationProviderArgs = {
  input: UpdateAuthenticationProviderInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAuthenticationProviderConfigurationNlWalletArgs = {
  input: UpdateAuthenticationProviderConfigurationNlWalletInput;
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


export type MutationUpdateCredentialRequestMetaOid4VcmdocArgs = {
  input: UpdateCredentialRequestMetaOid4VcmdocInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialRequestMetaOid4VcsdjwtArgs = {
  input: UpdateCredentialRequestMetaOid4VcsdjwtInput;
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


export type MutationUpdateDisclosureArgs = {
  input: UpdateDisclosureInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateDisclosureBrandArgs = {
  input: UpdateDisclosureBrandInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateDisclosureDomainArgs = {
  input: UpdateDisclosureDomainInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateDisclosureGroupArgs = {
  input: UpdateDisclosureGroupInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateDisclosureProviderArgs = {
  input: UpdateDisclosureProviderInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateDisclosureProviderConfigurationNlWalletArgs = {
  input: UpdateDisclosureProviderConfigurationNlWalletInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateIssuanceArgs = {
  input: UpdateIssuanceInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateIssuanceBrandArgs = {
  input: UpdateIssuanceBrandInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateIssuanceCredentialMetaDatakeeperArgs = {
  input: UpdateIssuanceCredentialMetaDatakeeperInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateIssuanceCredentialMetaYiviArgs = {
  input: UpdateIssuanceCredentialMetaYiviInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateIssuanceDomainArgs = {
  input: UpdateIssuanceDomainInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateIssuanceProviderArgs = {
  input: UpdateIssuanceProviderInput;
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


export type MutationUpdateLabelArgs = {
  input: UpdateLabelInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateLocaleConfigArgs = {
  input: UpdateLocaleConfigInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateMaintenanceArgs = {
  input: UpdateMaintenanceInput;
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


export type MutationUpdateOrganizationAppMetaOid4vcArgs = {
  input: UpdateOrganizationAppMetaOid4vcInput;
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


export type MutationUpdatePricingCatalogArgs = {
  input: UpdatePricingCatalogInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdatePricingConfigurationAppArgs = {
  input: UpdatePricingConfigurationAppInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdatePricingConfigurationOrganizationArgs = {
  input: UpdatePricingConfigurationOrganizationInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdatePricingConfigurationStudioPlanArgs = {
  input: UpdatePricingConfigurationStudioPlanInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdatePricingGroupArgs = {
  input: UpdatePricingGroupInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdatePricingRuleArgs = {
  input: UpdatePricingRuleInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdatePricingRuleConstraintArgs = {
  input: UpdatePricingRuleConstraintInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdatePricingRuleTargetArgs = {
  input: UpdatePricingRuleTargetInput;
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


export type MutationUpdateSignatureArgs = {
  input: UpdateSignatureInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateSignatureBrandArgs = {
  input: UpdateSignatureBrandInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateSignatureDomainArgs = {
  input: UpdateSignatureDomainInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateSignatureGroupArgs = {
  input: UpdateSignatureGroupInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateSignatureProviderArgs = {
  input: UpdateSignatureProviderInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateSignatureProviderConfigurationNlWalletArgs = {
  input: UpdateSignatureProviderConfigurationNlWalletInput;
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


export type MutationUseUserInvitationTokenArgs = {
  input: AcceptUserInvitationTokenInput;
};


export type MutationUseUserResetArgs = {
  input: UseUserResetInput;
};


export type MutationValidateUserInvitationArgs = {
  input: ValidateUserInvitationInput;
};


export type MutationValidateUserInvitationTokenArgs = {
  input: ValidateUserInvitationTokenInput;
};


export type MutationValidateUserResetArgs = {
  input: ValidateUserResetInput;
};

/** All the different types to filter on nested fields. */
export enum NestedFilteringType {
  /** Filter type where every nested record must fulfill the condition. */
  Every = 'EVERY',
  /** Filter type where no nested record must fulfill the condition. */
  None = 'NONE',
  /** Filter type where some nested record must fulfill the condition. */
  Some = 'SOME'
}

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
  /** A list of organization domains using oauthProvider. */
  organizationDomainOAuthProviders?: Maybe<OrganizationDomainOAuthProviderConnection>;
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


/** OAuthProvider definition. */
export type OAuthProviderOrganizationDomainOAuthProvidersArgs = {
  input?: InputMaybe<FindManyOrganizationDomainOAuthProvidersInput>;
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
  /** Labels created by this organization */
  labels?: Maybe<LabelConnection>;
  /** The logo of the organization. */
  logo?: Maybe<Scalars['ProfilePicture']['output']>;
  /** A list of managed organizations */
  managedOrganizations?: Maybe<OrganizationConnection>;
  /** The organization name. */
  name: Scalars['NonEmpty']['output'];
  /** A list of addresses of this organization. */
  organizationAddresses?: Maybe<OrganizationAddressConnection>;
  /** A list of brands belonging to this organization. */
  organizationBrands: OrganizationBrandConnection;
  /** A list of domains of this organization. */
  organizationDomains?: Maybe<OrganizationDomainConnection>;
  /** A list of associated OrganizationQuotas. */
  organizationQuotas?: Maybe<OrganizationQuotaConnection>;
  /** A list of users who are members of this organization. */
  organizationUsers?: Maybe<OrganizationUserConnection>;
  /** The partner organization that manages this organization (only for MANAGED type) */
  partnerOrganization?: Maybe<Organization>;
  /** The phone number of the organization. */
  phone?: Maybe<Scalars['String']['output']>;
  /** Shortcut to active studio controls associated to this object */
  studioControlCompacts: Array<StudioControlCompact>;
  /** The type of the organization */
  type: OrganizationType;
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
export type OrganizationLabelsArgs = {
  input?: InputMaybe<FindManyLabelsInput>;
};


/** Organization definition. */
export type OrganizationManagedOrganizationsArgs = {
  input?: InputMaybe<FindManyOrganizationsInput>;
};


/** Organization definition. */
export type OrganizationOrganizationAddressesArgs = {
  input?: InputMaybe<FindManyOrganizationAddressesInput>;
};


/** Organization definition. */
export type OrganizationOrganizationBrandsArgs = {
  input?: InputMaybe<FindManyOrganizationBrandsInput>;
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
  model: CatalogModelType;
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
  /** The OID4VC organization app meta */
  oid4vc?: Maybe<OrganizationAppMetaOid4vc>;
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
  /** The issuer ID */
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

/** Organization app meta OID4VC. */
export type OrganizationAppMetaOid4vc = Model & {
  __typename?: 'OrganizationAppMetaOid4vc';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The organization app meta the OID4VC meta belongs to. */
  organizationAppMeta: OrganizationAppMeta;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** The verifier certificate identifier */
  verifierCertIdentifier?: Maybe<Scalars['String']['output']>;
  /** The verifier key identifier */
  verifierKeyIdentifier?: Maybe<Scalars['String']['output']>;
};

/** The organization app meta OID4VC connection request. */
export type OrganizationAppMetaOid4vcConnection = {
  __typename?: 'OrganizationAppMetaOid4vcConnection';
  edges: Array<Maybe<OrganizationAppMetaOid4vcEdge>>;
  pageInfo: PageInfo;
};

/** The organization app meta OID4VC edge request. */
export type OrganizationAppMetaOid4vcEdge = {
  __typename?: 'OrganizationAppMetaOid4vcEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationAppMetaOid4vc;
};

/** Fields which can be used to filter organization app meta OID4VC on. Value must be camel case. */
export enum OrganizationAppMetaOid4vcFilteringField {
  OrganizationAppMetaUuid = 'organizationAppMetaUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort organization app meta OID4VC on. Value must be camel case. */
export enum OrganizationAppMetaOid4vcSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting organization app meta OID4VC. */
export type OrganizationAppMetaOid4vcSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: OrganizationAppMetaOid4vcSortEnum;
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
  Oid4Vc = 'OID4VC',
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

/** The input for filtering app */
export type OrganizationAppNestedFilteringAppField = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The input for filtering app */
  input: FindManyAppsInput;
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
  /** The associated labels with this brand */
  organizationBrandLabels: OrganizationBrandLabelConnection;
  /** The reject reason if any */
  rejectReason?: Maybe<Scalars['NonEmpty']['output']>;
  /** The state of the brand. */
  state: OrganizationBrandState;
  /** The brand update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** Organization brand definition. */
export type OrganizationBrandOrganizationBrandLabelsArgs = {
  input?: InputMaybe<FindManyOrganizationBrandLabelsInput>;
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

/** Organization Label definition. */
export type OrganizationBrandLabel = Model & {
  __typename?: 'OrganizationBrandLabel';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The Label */
  label: Label;
  /** The organization brand */
  organizationBrand: OrganizationBrand;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** An Connection */
export type OrganizationBrandLabelConnection = {
  __typename?: 'OrganizationBrandLabelConnection';
  edges: Array<OrganizationBrandLabelEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type OrganizationBrandLabelEdge = {
  __typename?: 'OrganizationBrandLabelEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationBrandLabel;
};

/** Fields which can be used to filter Labels on. Value must be camel case. */
export enum OrganizationBrandLabelFilteringField {
  LabelUuid = 'labelUuid',
  OrganizationBrandUuid = 'organizationBrandUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort Labels on. Value must be camel case. */
export enum OrganizationBrandLabelSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting Labels. */
export type OrganizationBrandLabelSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: OrganizationBrandLabelSortEnum;
};

/** The input for filtering organization brand labels in nested filtering. */
export type OrganizationBrandNestedFilteringOrganizationBrandLabelField = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The input for filtering organization brand labels */
  input: FindManyOrganizationBrandLabelsInput;
  /** The type of filtering */
  type?: InputMaybe<NestedFilteringType>;
};

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
  /** The token key */
  key: Scalars['NonEmpty']['output'];
  /** The token name */
  name: Scalars['NonEmpty']['output'];
  /** The user organization */
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
  /** The associated labels with this domain */
  organizationDomainLabels: OrganizationDomainLabelConnection;
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


/** Organization domain definition. */
export type OrganizationDomainOrganizationDomainLabelsArgs = {
  input?: InputMaybe<FindManyOrganizationDomainLabelsInput>;
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

/** Organization Label definition. */
export type OrganizationDomainLabel = Model & {
  __typename?: 'OrganizationDomainLabel';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The Label */
  label: Label;
  /** The organization domain */
  organizationDomain: OrganizationDomain;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** An Connection */
export type OrganizationDomainLabelConnection = {
  __typename?: 'OrganizationDomainLabelConnection';
  edges: Array<OrganizationDomainLabelEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type OrganizationDomainLabelEdge = {
  __typename?: 'OrganizationDomainLabelEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationDomainLabel;
};

/** Fields which can be used to filter Labels on. Value must be camel case. */
export enum OrganizationDomainLabelFilteringField {
  LabelUuid = 'labelUuid',
  OrganizationDomainUuid = 'organizationDomainUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort Labels on. Value must be camel case. */
export enum OrganizationDomainLabelSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting Labels. */
export type OrganizationDomainLabelSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: OrganizationDomainLabelSortEnum;
};

/** The input for filtering organization domain labels in nested filtering. */
export type OrganizationDomainNestedFilteringOrganizationDomainLabelField = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The input for filtering organization domain labels */
  input: FindManyOrganizationDomainLabelsInput;
  /** The type of filtering */
  type?: InputMaybe<NestedFilteringType>;
};

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
  PartnerOrganizationUuid = 'partnerOrganizationUuid',
  Phone = 'phone',
  Type = 'type',
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
  /** The user organization */
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

/** OrganizationType */
export enum OrganizationType {
  Direct = 'DIRECT',
  Managed = 'MANAGED',
  Partner = 'PARTNER'
}

/** OrganizationUser definition. */
export type OrganizationUser = Model & {
  __typename?: 'OrganizationUser';
  /** The user blocked time. */
  blockedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The guide ids the user has completed */
  completedGuides: Array<Scalars['String']['output']>;
  /** The user creation time */
  createdAt: Scalars['DateTime']['output'];
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

/** User nested filter field (1:1 relation). */
export type OrganizationUserNestedFilteringUserField = {
  /** The query connector. */
  connector?: InputMaybe<FilteringConnector>;
  /** The input for filtering users. */
  input: FindManyUsersInput;
};

/** OrganizationUser role enum. */
export enum OrganizationUserRole {
  Auditor = 'auditor',
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

/** Pricing aggregation strategy */
export enum PricingAggregationStrategy {
  Average = 'AVERAGE',
  Highest = 'HIGHEST',
  Lowest = 'LOWEST',
  Sum = 'SUM'
}

/** Pricing catalog */
export type PricingCatalog = Model & {
  __typename?: 'PricingCatalog';
  /** The price amount (stored as integer in smallest currency unit) */
  amount: Scalars['Int']['output'];
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The currency (USD, EUR, etc.) */
  currency: Currency;
  /** The currency unit (CENTI, MILLI, etc.) */
  currencyUnit: CurrencyUnit;
  /** Unique key identifier for this price entry */
  key: Scalars['NonEmpty']['output'];
  /** A list of pricing rules using this catalog entry */
  rules: PricingRuleConnection;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** Pricing catalog */
export type PricingCatalogRulesArgs = {
  input?: InputMaybe<FindManyPricingRulesInput>;
};

export type PricingCatalogConnection = {
  __typename?: 'PricingCatalogConnection';
  edges: Array<PricingCatalogEdge>;
  pageInfo: PageInfo;
};

export type PricingCatalogEdge = {
  __typename?: 'PricingCatalogEdge';
  cursor: Scalars['String']['output'];
  node: PricingCatalog;
};

/** Fields which can be used to filter pricing catalogs on. Value must be camel case. */
export enum PricingCatalogFilteringField {
  Currency = 'currency',
  Key = 'key',
  Uuid = 'uuid'
}

/** Fields which can be used to sort pricing catalogs on. Value must be camel case. */
export enum PricingCatalogSortEnum {
  Amount = 'amount',
  CreatedAt = 'createdAt',
  Key = 'key',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting pricing catalogs. */
export type PricingCatalogSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: PricingCatalogSortEnum;
};

/** Pricing configuration for apps */
export type PricingConfigurationApp = Model & {
  __typename?: 'PricingConfigurationApp';
  /** Aggregation strategy for combining multiple prices */
  aggregationStrategy: PricingAggregationStrategy;
  /** The app UUID */
  appUuid: Scalars['UUID']['output'];
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** Target hierarchy level for pricing calculation */
  targetLevel: PricingHierarchyLevel;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

export type PricingConfigurationAppConnection = {
  __typename?: 'PricingConfigurationAppConnection';
  edges: Array<PricingConfigurationAppEdge>;
  pageInfo: PageInfo;
};

export type PricingConfigurationAppEdge = {
  __typename?: 'PricingConfigurationAppEdge';
  cursor: Scalars['String']['output'];
  node: PricingConfigurationApp;
};

/** Fields which can be used to filter pricing configuration apps on. Value must be camel case. */
export enum PricingConfigurationAppFilteringField {
  AggregationStrategy = 'aggregationStrategy',
  AppUuid = 'appUuid',
  TargetLevel = 'targetLevel',
  Uuid = 'uuid'
}

/** Fields which can be used to sort pricing configuration apps on. Value must be camel case. */
export enum PricingConfigurationAppSortEnum {
  AppUuid = 'appUuid',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting pricing configuration apps. */
export type PricingConfigurationAppSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: PricingConfigurationAppSortEnum;
};

/** Pricing configuration for organizations */
export type PricingConfigurationOrganization = Model & {
  __typename?: 'PricingConfigurationOrganization';
  /** Aggregation strategy for combining multiple prices */
  aggregationStrategy: PricingAggregationStrategy;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The organization UUID */
  organizationUuid: Scalars['UUID']['output'];
  /** Target hierarchy level for pricing calculation */
  targetLevel: PricingHierarchyLevel;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

export type PricingConfigurationOrganizationConnection = {
  __typename?: 'PricingConfigurationOrganizationConnection';
  edges: Array<PricingConfigurationOrganizationEdge>;
  pageInfo: PageInfo;
};

export type PricingConfigurationOrganizationEdge = {
  __typename?: 'PricingConfigurationOrganizationEdge';
  cursor: Scalars['String']['output'];
  node: PricingConfigurationOrganization;
};

/** Fields which can be used to filter pricing configuration organizations on. Value must be camel case. */
export enum PricingConfigurationOrganizationFilteringField {
  AggregationStrategy = 'aggregationStrategy',
  OrganizationUuid = 'organizationUuid',
  TargetLevel = 'targetLevel',
  Uuid = 'uuid'
}

/** Fields which can be used to sort pricing configuration organizations on. Value must be camel case. */
export enum PricingConfigurationOrganizationSortEnum {
  CreatedAt = 'createdAt',
  OrganizationUuid = 'organizationUuid',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting pricing configuration organizations. */
export type PricingConfigurationOrganizationSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: PricingConfigurationOrganizationSortEnum;
};

/** Pricing configuration for studio plans */
export type PricingConfigurationStudioPlan = Model & {
  __typename?: 'PricingConfigurationStudioPlan';
  /** Aggregation strategy for combining multiple prices */
  aggregationStrategy: PricingAggregationStrategy;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The studio plan UUID */
  studioPlanUuid: Scalars['UUID']['output'];
  /** Target hierarchy level for pricing calculation */
  targetLevel: PricingHierarchyLevel;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

export type PricingConfigurationStudioPlanConnection = {
  __typename?: 'PricingConfigurationStudioPlanConnection';
  edges: Array<PricingConfigurationStudioPlanEdge>;
  pageInfo: PageInfo;
};

export type PricingConfigurationStudioPlanEdge = {
  __typename?: 'PricingConfigurationStudioPlanEdge';
  cursor: Scalars['String']['output'];
  node: PricingConfigurationStudioPlan;
};

/** Fields which can be used to filter pricing configuration studio plans on. Value must be camel case. */
export enum PricingConfigurationStudioPlanFilteringField {
  AggregationStrategy = 'aggregationStrategy',
  StudioPlanUuid = 'studioPlanUuid',
  TargetLevel = 'targetLevel',
  Uuid = 'uuid'
}

/** Fields which can be used to sort pricing configuration studio plans on. Value must be camel case. */
export enum PricingConfigurationStudioPlanSortEnum {
  CreatedAt = 'createdAt',
  StudioPlanUuid = 'studioPlanUuid',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting pricing configuration studio plans. */
export type PricingConfigurationStudioPlanSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: PricingConfigurationStudioPlanSortEnum;
};

/** Pricing group */
export type PricingGroup = Model & {
  __typename?: 'PricingGroup';
  /** A list of entity assignments to this group */
  assignments: PricingGroupAssignmentConnection;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** Description of the pricing group */
  description?: Maybe<Scalars['String']['output']>;
  /** The name of the pricing group */
  name: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** Pricing group */
export type PricingGroupAssignmentsArgs = {
  input?: InputMaybe<FindManyPricingGroupAssignmentsInput>;
};

/** Pricing group assignment */
export type PricingGroupAssignment = Model & {
  __typename?: 'PricingGroupAssignment';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The type of entity being assigned (ATTRIBUTE, CREDENTIAL, ISSUER, SCHEME, FLOW_AUTHENTICATION, etc.) */
  entityType: PricingGroupAssignmentType;
  /** The UUID of the entity in the Identity DB */
  entityUuid: Scalars['UUID']['output'];
  /** The pricing group this assignment belongs to */
  pricingGroup: PricingGroup;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

export type PricingGroupAssignmentConnection = {
  __typename?: 'PricingGroupAssignmentConnection';
  edges: Array<PricingGroupAssignmentEdge>;
  pageInfo: PageInfo;
};

export type PricingGroupAssignmentEdge = {
  __typename?: 'PricingGroupAssignmentEdge';
  cursor: Scalars['String']['output'];
  node: PricingGroupAssignment;
};

/** Fields which can be used to filter pricing group assignments on. Value must be camel case. */
export enum PricingGroupAssignmentFilteringField {
  EntityType = 'entityType',
  EntityUuid = 'entityUuid',
  PricingGroupUuid = 'pricingGroupUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort pricing group assignments on. Value must be camel case. */
export enum PricingGroupAssignmentSortEnum {
  CreatedAt = 'createdAt',
  EntityType = 'entityType',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting pricing group assignments. */
export type PricingGroupAssignmentSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: PricingGroupAssignmentSortEnum;
};

/** Type of entity that can be assigned to a pricing group */
export enum PricingGroupAssignmentType {
  Attribute = 'ATTRIBUTE',
  Credential = 'CREDENTIAL',
  FlowAuthentication = 'FLOW_AUTHENTICATION',
  FlowDisclosure = 'FLOW_DISCLOSURE',
  FlowIssuance = 'FLOW_ISSUANCE',
  FlowSignature = 'FLOW_SIGNATURE',
  Issuer = 'ISSUER',
  Scheme = 'SCHEME'
}

export type PricingGroupConnection = {
  __typename?: 'PricingGroupConnection';
  edges: Array<PricingGroupEdge>;
  pageInfo: PageInfo;
};

export type PricingGroupEdge = {
  __typename?: 'PricingGroupEdge';
  cursor: Scalars['String']['output'];
  node: PricingGroup;
};

/** Fields which can be used to filter pricing groups on. Value must be camel case. */
export enum PricingGroupFilteringField {
  Name = 'name',
  Uuid = 'uuid'
}

/** Fields which can be used to sort pricing groups on. Value must be camel case. */
export enum PricingGroupSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting pricing groups. */
export type PricingGroupSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: PricingGroupSortEnum;
};

/** Pricing hierarchy level */
export enum PricingHierarchyLevel {
  Attribute = 'ATTRIBUTE',
  Credential = 'CREDENTIAL',
  Flow = 'FLOW',
  Issuer = 'ISSUER',
  Scheme = 'SCHEME'
}

/**
 * Pricing layer
 *
 * If the pricing layer is APP, the PricingType should be PURCHASE
 * Otherwise, the PricingType should be MARGIN
 *
 * This might change in the future.
 */
export enum PricingLayer {
  App = 'APP',
  Organization = 'ORGANIZATION',
  Plan = 'PLAN'
}

/** Pricing rule - defines when a specific price applies */
export type PricingRule = Model & {
  __typename?: 'PricingRule';
  /** The app UUID this rule applies to */
  appUuid: Scalars['UUID']['output'];
  /** Pricing conditions */
  conditions: Scalars['JSONObject']['output'];
  /** The constraints for this rule */
  constraints: PricingRuleConstraintConnection;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The pricing layer (APP, PLAN, ORGANIZATION) */
  layer: PricingLayer;
  /** The organization UUID (if layer is ORGANIZATION) */
  organizationUuid?: Maybe<Scalars['UUID']['output']>;
  /** The plan UUID (if layer is PLAN) */
  planUuid?: Maybe<Scalars['UUID']['output']>;
  /** The pricing catalog entry */
  pricingCatalog: PricingCatalog;
  /** The state of the rule (ACTIVE, INACTIVE) */
  state: PricingRuleState;
  /** The target this rule applies to */
  target?: Maybe<PricingRuleTarget>;
  /** The pricing type (PURCHASE, MARGIN) */
  type: PricingType;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** Pricing rule - defines when a specific price applies */
export type PricingRuleConstraintsArgs = {
  findManyPricingRuleConstraintsInput?: InputMaybe<FindManyPricingRuleConstraintsInput>;
};

/** PricingRuleAction */
export enum PricingRuleAction {
  Activate = 'ACTIVATE',
  Deactivate = 'DEACTIVATE',
  PendingDeprecate = 'PENDING_DEPRECATE'
}

export type PricingRuleConnection = {
  __typename?: 'PricingRuleConnection';
  edges: Array<PricingRuleEdge>;
  pageInfo: PageInfo;
};

/** Pricing rule constraint */
export type PricingRuleConstraint = Model & {
  __typename?: 'PricingRuleConstraint';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The pricing rule this constraint belongs to */
  pricingRule: PricingRule;
  /** The scope (hierarchy level) this constraint applies to */
  scope: PricingHierarchyLevel;
  /** Scope group UUIDs */
  scopeGroupUuids: Array<Scalars['UUID']['output']>;
  /** Specific scope UUID (most specific constraint) */
  scopeUuid?: Maybe<Scalars['UUID']['output']>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

export type PricingRuleConstraintConnection = {
  __typename?: 'PricingRuleConstraintConnection';
  edges: Array<PricingRuleConstraintEdge>;
  pageInfo: PageInfo;
};

export type PricingRuleConstraintEdge = {
  __typename?: 'PricingRuleConstraintEdge';
  cursor: Scalars['String']['output'];
  node: PricingRuleConstraint;
};

/** Fields which can be used to filter pricing rule constraints on. Value must be camel case. */
export enum PricingRuleConstraintFilteringField {
  Scope = 'scope',
  ScopeUuid = 'scopeUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort pricing rule constraints on. Value must be camel case. */
export enum PricingRuleConstraintSortEnum {
  CreatedAt = 'createdAt',
  Scope = 'scope',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting pricing rule constraints. */
export type PricingRuleConstraintSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: PricingRuleConstraintSortEnum;
};

export type PricingRuleEdge = {
  __typename?: 'PricingRuleEdge';
  cursor: Scalars['String']['output'];
  node: PricingRule;
};

/** Fields which can be used to filter pricing rules on. Value must be camel case. */
export enum PricingRuleFilteringField {
  AppUuid = 'appUuid',
  Layer = 'layer',
  OrganizationUuid = 'organizationUuid',
  PlanUuid = 'planUuid',
  State = 'state',
  Type = 'type',
  Uuid = 'uuid'
}

/** Fields which can be used to sort pricing rules on. Value must be camel case. */
export enum PricingRuleSortEnum {
  CreatedAt = 'createdAt',
  Layer = 'layer',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting pricing rules. */
export type PricingRuleSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: PricingRuleSortEnum;
};

/** Pricing rule state */
export enum PricingRuleState {
  Active = 'ACTIVE',
  Draft = 'DRAFT',
  Inactive = 'INACTIVE',
  PendingDeprecation = 'PENDING_DEPRECATION'
}

/** Pricing rule target - defines what entity the rule applies to */
export type PricingRuleTarget = Model & {
  __typename?: 'PricingRuleTarget';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The hierarchy level (FLOW, SCHEME, ISSUER, CREDENTIAL, ATTRIBUTE) */
  level: PricingHierarchyLevel;
  /** Entity group UUIDs */
  levelGroupUuids: Array<Scalars['UUID']['output']>;
  /** Specific entity UUID (most specific) */
  levelUuid?: Maybe<Scalars['UUID']['output']>;
  /** The pricing rule this target belongs to */
  pricingRule: PricingRule;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

export type PricingRuleTargetConnection = {
  __typename?: 'PricingRuleTargetConnection';
  edges: Array<PricingRuleTargetEdge>;
  pageInfo: PageInfo;
};

export type PricingRuleTargetEdge = {
  __typename?: 'PricingRuleTargetEdge';
  cursor: Scalars['String']['output'];
  node: PricingRuleTarget;
};

/** Fields which can be used to filter pricing rule targets on. Value must be camel case. */
export enum PricingRuleTargetFilteringField {
  Level = 'level',
  LevelUuid = 'levelUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort pricing rule targets on. Value must be camel case. */
export enum PricingRuleTargetSortEnum {
  CreatedAt = 'createdAt',
  Level = 'level',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

/** Input options for sorting pricing rule targets. */
export type PricingRuleTargetSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: PricingRuleTargetSortEnum;
};

/**
 * Pricing type.
 *
 * PURCHASE: What the app charges us.
 *
 * MARGIN: The extra amount we charge on top of the purchase price. Typically,
 * there will be two margin prices, one for each plan and one for each reseller.
 * Final price is the sum of these.
 */
export enum PricingType {
  Margin = 'MARGIN',
  Purchase = 'PURCHASE'
}

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
  draftVersion?: Maybe<Scalars['Int']['output']>;
  /** The protocol */
  protocol?: Maybe<Scalars['NonEmpty']['output']>;
  /** The ProviderAppMeta this ProviderAppMetaOID4VC belongs to */
  providerAppMeta: ProviderAppMeta;
  /** The spec type supported by this app */
  specType: ProviderAppMetaOid4VcSpecType;
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

/** ProviderAppMetaOID4VCSpecType */
export enum ProviderAppMetaOid4VcSpecType {
  Draft = 'DRAFT',
  V1 = 'V1'
}

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
  NlWallet = 'NL_WALLET',
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

/** Identity provider label definition. */
export type ProviderLabel = Model & {
  __typename?: 'ProviderLabel';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The Label */
  label: Label;
  /** The identity provider (resolved via federation) */
  provider: Provider;
  /** The identity provider UUID (no direct relation - separate database) */
  providerUuid: Scalars['UUID']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** Connection */
export type ProviderLabelConnection = {
  __typename?: 'ProviderLabelConnection';
  edges: Array<ProviderLabelEdge>;
  pageInfo: PageInfo;
};

/** Edge */
export type ProviderLabelEdge = {
  __typename?: 'ProviderLabelEdge';
  cursor: Scalars['String']['output'];
  node: ProviderLabel;
};

/** Fields which can be used to filter identity provider labels. Value must be camel case. */
export enum ProviderLabelFilteringField {
  LabelUuid = 'labelUuid',
  ProviderUuid = 'providerUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort identity provider labels. Value must be camel case. */
export enum ProviderLabelSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting identity provider labels. */
export type ProviderLabelSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: ProviderLabelSortEnum;
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

/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type Query = {
  __typename?: 'Query';
  /** Get billing method configuration */
  configBillingMethod: ConfigBillingMethodOutput;
  /** Get constants */
  constants: Constants;
  /** Retrieve all active maintenances (public query for SPAs to check maintenance mode). */
  findActiveMaintenances: Array<Maintenance>;
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
  /** Get identity attribute label */
  findAttributeLabel: AttributeLabel;
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
  /** Retrieve a single attribute request meta OID4VC mdoc. */
  findAttributeRequestMetaOID4VCMDOC: AttributeRequestMetaOid4Vcmdoc;
  /** Retrieve a single attribute request meta OID4VC SD-JWT. */
  findAttributeRequestMetaOID4VCSDJWT: AttributeRequestMetaOid4Vcsdjwt;
  /** Retrieve a single attribute request meta yivi. */
  findAttributeRequestMetaYivi: AttributeRequestMetaYivi;
  /** Retrieve a single attribute request meta yoti. */
  findAttributeRequestMetaYoti: AttributeRequestMetaYoti;
  /** Retrieve a single flow authentication. */
  findAuthentication: Authentication;
  /** Retrieve a single authentication activity. */
  findAuthenticationActivity: AuthenticationActivity;
  /** Get brand */
  findAuthenticationBrand: AuthenticationBrand;
  /** Get domain */
  findAuthenticationDomain: AuthenticationDomain;
  /** Get Label */
  findAuthenticationLabel: AuthenticationLabel;
  /** Retrieve a single flow authentication provider. */
  findAuthenticationProvider: AuthenticationProvider;
  /** Retrieve a single AuthenticationProviderConfiguration. */
  findAuthenticationProviderConfiguration: AuthenticationProviderConfiguration;
  /** Retrieve a single credential meta NL Wallet. */
  findAuthenticationProviderConfigurationNLWallet: AuthenticationProviderConfigurationNlWallet;
  /** Retrieve a single flow authentication scopes. */
  findAuthenticationScope: AuthenticationScope;
  /** Find billing */
  findBilling: Billing;
  /** Find billing */
  findBillingMethod: BillingMethod;
  /** Find billing */
  findBillingPlan: BillingPlan;
  /** Find billing */
  findBillingWallet: BillingWallet;
  /** Find billing wallet transactions */
  findBillingWalletTransaction: BillingWalletTransaction;
  /** Find a single billing wallet transaction meta */
  findBillingWalletTransactionMeta: BillingWalletTransactionMeta;
  /** Find billing wallet transaction meta flow */
  findBillingWalletTransactionMetaFlow: BillingWalletTransactionMetaFlow;
  /** Find billing wallet transaction meta flow attribute */
  findBillingWalletTransactionMetaFlowAttribute: BillingWalletTransactionMetaFlowAttribute;
  /** Find billing wallet transaction meta plan */
  findBillingWalletTransactionMetaPlan: BillingWalletTransactionMetaPlan;
  /** Find billing wallet transaction meta wallet */
  findBillingWalletTransactionMetaWallet: BillingWalletTransactionMetaWallet;
  /** Retrieve a single credential. */
  findCredential: Credential;
  /** Get identity credential label */
  findCredentialLabel: CredentialLabel;
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
  /** Retrieve a single credential request meta OID4VC mdoc. */
  findCredentialRequestMetaOID4VCMDOC: CredentialRequestMetaOid4Vcmdoc;
  /** Retrieve a single credential request meta OID4VC SD-JWT. */
  findCredentialRequestMetaOID4VCSDJWT: CredentialRequestMetaOid4Vcsdjwt;
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
  /** Retrieve a single flow disclosure. */
  findDisclosure: Disclosure;
  /** Retrieve a single disclosure activity. */
  findDisclosureActivity: DisclosureActivity;
  /** Retreive a single flow disclosure attribute. */
  findDisclosureAttribute: DisclosureAttribute;
  /** Get brand */
  findDisclosureBrand: DisclosureBrand;
  /** Retrieve a single flow disclosure credential. */
  findDisclosureCredential: DisclosureCredential;
  /** Get domain */
  findDisclosureDomain: DisclosureDomain;
  /** Retrieve a single flow disclosure groups. */
  findDisclosureGroup: DisclosureGroup;
  /** Get Label */
  findDisclosureLabel: DisclosureLabel;
  /** Get mapping */
  findDisclosureMapping: DisclosureMapping;
  /** Retrieve a single flow disclosure provider. */
  findDisclosureProvider: DisclosureProvider;
  /** Retrieve a single DisclosureProviderConfiguration. */
  findDisclosureProviderConfiguration: DisclosureProviderConfiguration;
  /** Retrieve a single credential meta NL Wallet. */
  findDisclosureProviderConfigurationNLWallet: DisclosureProviderConfigurationNlWallet;
  findGlobalOAuthMethods?: Maybe<Array<Maybe<OAuthMethod>>>;
  /** Retrieve a single flow issuance. */
  findIssuance: Issuance;
  /** Retrieve a single issuance activity. */
  findIssuanceActivity: IssuanceActivity;
  /** Retrieve a single flow issuance attribute. */
  findIssuanceAttribute: IssuanceAttribute;
  /** Get brand */
  findIssuanceBrand: IssuanceBrand;
  /** Retrieve a single flow issuance credential. */
  findIssuanceCredential: IssuanceCredential;
  /** Retrieve a single flow issuance credential meta. */
  findIssuanceCredentialMeta: IssuanceCredentialMeta;
  /** Retrieve a single flow issuance credential meta datakeeper. */
  findIssuanceCredentialMetaDatakeeper: IssuanceCredentialMetaDatakeeper;
  /** Retrieve a single flow issuance credential meta yivi. */
  findIssuanceCredentialMetaYivi: IssuanceCredentialMetaYivi;
  /** Get domain */
  findIssuanceDomain: IssuanceDomain;
  /** Get Label */
  findIssuanceLabel: IssuanceLabel;
  /** Get mapping */
  findIssuanceMapping: IssuanceMapping;
  /** Retrieve a single flow issuance provider. */
  findIssuanceProvider: IssuanceProvider;
  /** Retrieve a single issuer. */
  findIssuer: Issuer;
  /** Get identity issuer label */
  findIssuerLabel: IssuerLabel;
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
  /** Find a single label */
  findLabel: Label;
  /** Retrieve a single localeConfig. */
  findLocaleConfig: LocaleConfig;
  /** Retrieve a single maintenance. */
  findMaintenance: Maintenance;
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
  /** Retrieve a list of many identity attribute labels. */
  findManyAttributeLabels: AttributeLabelConnection;
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
  /** Retrieve many attribute request meta OID4VC mdoc. */
  findManyAttributeRequestMetaOID4VCMDOC: AttributeRequestMetaOid4VcmdocConnection;
  /** Retrieve many attribute request meta OID4VC SD-JWT. */
  findManyAttributeRequestMetaOID4VCSDJWT: AttributeRequestMetaOid4VcsdjwtConnection;
  /** Retrieve many attribute request meta yivi. */
  findManyAttributeRequestMetaYivi: AttributeRequestMetaYiviConnection;
  /** Retrieve many attribute request meta yoti. */
  findManyAttributeRequestMetaYoti: AttributeRequestMetaYotiConnection;
  /** Retrieve many attribute. */
  findManyAttributes: AttributeConnection;
  /** Retrieve many authentication activities. */
  findManyAuthenticationActivities: AuthenticationActivityConnection;
  /** Retrieve a list of many brands. */
  findManyAuthenticationBrands: AuthenticationBrandConnection;
  /** Retrieve a list of many domains. */
  findManyAuthenticationDomains: AuthenticationDomainConnection;
  /** Retrieve a list of many Labels. */
  findManyAuthenticationLabels: AuthenticationLabelConnection;
  /** Retrieve many credential meta NL Wallet. */
  findManyAuthenticationProviderConfigurationNLWallets: AuthenticationProviderConfigurationNlWalletConnection;
  /** Retrieve many AuthenticationProviderConfiguration. */
  findManyAuthenticationProviderConfigurations: AuthenticationProviderConfigurationConnection;
  /** Retrieve many flow authentication providers. */
  findManyAuthenticationProviders: AuthenticationProviderConnection;
  /** Retrieve many flow authentication scopes. */
  findManyAuthenticationScopes: AuthenticationScopeConnection;
  /** Retreive many flow authentications. */
  findManyAuthentications: AuthenticationConnection;
  /** Retrieve a list of many billings. */
  findManyBillingMethods: BillingMethodConnection;
  /** Retrieve a list of many billings. */
  findManyBillingPlans: BillingPlanConnection;
  /** Retrieve a list of many billing wallet transaction meta flow attributes */
  findManyBillingWalletTransactionMetaFlowAttributes: BillingWalletTransactionMetaFlowAttributeConnection;
  /** Retrieve a list of many billing wallet transaction meta flows */
  findManyBillingWalletTransactionMetaFlows: BillingWalletTransactionMetaFlowConnection;
  /** Retrieve a list of many billing wallet transaction meta plans */
  findManyBillingWalletTransactionMetaPlans: BillingWalletTransactionMetaPlanConnection;
  /** Retrieve a list of many billing wallet transaction meta wallets */
  findManyBillingWalletTransactionMetaWallets: BillingWalletTransactionMetaWalletConnection;
  /** Retrieve a list of many billing wallet transaction metas */
  findManyBillingWalletTransactionMetas: BillingWalletTransactionMetaConnection;
  /** Retrieve a list of many billing wallet transactions */
  findManyBillingWalletTransactions: BillingWalletTransactionConnection;
  /** Retrieve a list of many billings. */
  findManyBillingWallets: BillingWalletConnection;
  /** Retrieve a list of many billings. */
  findManyBillings: BillingConnection;
  /** Retrieve a list of many identity credential labels. */
  findManyCredentialLabels: CredentialLabelConnection;
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
  /** Retrieve many credential request meta OID4VC mdoc. */
  findManyCredentialRequestMetaOID4VCMDOC: CredentialRequestMetaOid4VcmdocConnection;
  /** Retrieve many credential request meta OID4VC SD-JWT. */
  findManyCredentialRequestMetaOID4VCSDJWT: CredentialRequestMetaOid4VcsdjwtConnection;
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
  /** Retrieve many disclosure activities. */
  findManyDisclosureActivities: DisclosureActivityConnection;
  /** Retrieve many flow disclosure attributes. */
  findManyDisclosureAttributes: DisclosureAttributeConnection;
  /** Retrieve a list of many brands. */
  findManyDisclosureBrands: DisclosureBrandConnection;
  /** Retrieve many flow disclosure credentials. */
  findManyDisclosureCredentials: DisclosureCredentialConnection;
  /** Retrieve a list of many domains. */
  findManyDisclosureDomains: DisclosureDomainConnection;
  /** Retrieve many flow disclosure groups. */
  findManyDisclosureGroups: DisclosureGroupConnection;
  /** Retrieve a list of many Labels. */
  findManyDisclosureLabels: DisclosureLabelConnection;
  /** Retrieve a list of many mappings. */
  findManyDisclosureMappings: DisclosureMappingConnection;
  /** Retrieve many credential meta NL Wallet. */
  findManyDisclosureProviderConfigurationNLWallets: DisclosureProviderConfigurationNlWalletConnection;
  /** Retrieve many DisclosureProviderConfiguration. */
  findManyDisclosureProviderConfigurations: DisclosureProviderConfigurationConnection;
  /** Retrieve many flow disclosure providers. */
  findManyDisclosureProviders: DisclosureProviderConnection;
  /** Retreive many flow disclosures. */
  findManyDisclosures: DisclosureConnection;
  /** Retrieve many issuance activities. */
  findManyIssuanceActivities: IssuanceActivityConnection;
  /** Retrieve many flow issuance attributes. */
  findManyIssuanceAttributes: IssuanceAttributeConnection;
  /** Retrieve a list of many brands. */
  findManyIssuanceBrands: IssuanceBrandConnection;
  /** Retrieve many flow issuance credential meta. */
  findManyIssuanceCredentialMeta: IssuanceCredentialMetaConnection;
  /** Retrieve many flow issuance credential meta datakeeper. */
  findManyIssuanceCredentialMetaDatakeeper: IssuanceCredentialMetaDatakeeperConnection;
  /** Retrieve many flow issuance credential meta yivi. */
  findManyIssuanceCredentialMetaYivi: IssuanceCredentialMetaYiviConnection;
  /** Retrieve many flow issuance credentials. */
  findManyIssuanceCredentials: IssuanceCredentialConnection;
  /** Retrieve a list of many domains. */
  findManyIssuanceDomains: IssuanceDomainConnection;
  /** Retrieve a list of many Labels. */
  findManyIssuanceLabels: IssuanceLabelConnection;
  /** Retrieve a list of many mappings. */
  findManyIssuanceMappings: IssuanceMappingConnection;
  /** Retrieve many flow issuance providers. */
  findManyIssuanceProviders: IssuanceProviderConnection;
  /** Retreive many flow issuances. */
  findManyIssuances: IssuanceConnection;
  /** Retrieve a list of many identity issuer labels. */
  findManyIssuerLabels: IssuerLabelConnection;
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
  /** Find many labels */
  findManyLabels: LabelConnection;
  /** Retrieve many localeConfig. */
  findManyLocaleConfigs: LocaleConfigConnection;
  /** Retreive many maintenances. */
  findManyMaintenances: MaintenanceConnection;
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
  /** Retrieve many organization app meta OID4VC. */
  findManyOrganizationAppMetaOid4vc: OrganizationAppMetaOid4vcConnection;
  /** Retrieve many organization app meta yoti. */
  findManyOrganizationAppMetaYoti: OrganizationAppMetaYotiConnection;
  /** Retrieve many organization app prerequisite. */
  findManyOrganizationAppPrerequisite: OrganizationAppPrerequisiteConnection;
  /** Retrieve many organization app prerequisite workflow. */
  findManyOrganizationAppPrerequisiteWorkflow: OrganizationAppPrerequisiteWorkflowConnection;
  /** Retrieve a list of many Labels. */
  findManyOrganizationBrandLabels: OrganizationBrandLabelConnection;
  /** Retrieve a list of many brands. */
  findManyOrganizationBrands: OrganizationBrandConnection;
  /** Retrieve a list of many tokens. */
  findManyOrganizationClients: OrganizationClientConnection;
  /** Retrieve a list of many Labels. */
  findManyOrganizationDomainLabels: OrganizationDomainLabelConnection;
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
  /** Retrieve a list of many pricing catalogs. */
  findManyPricingCatalogs: PricingCatalogConnection;
  /** Retrieve a list of many pricing configuration apps. */
  findManyPricingConfigurationApps: PricingConfigurationAppConnection;
  /** Retrieve a list of many pricing configuration organizations. */
  findManyPricingConfigurationOrganizations: PricingConfigurationOrganizationConnection;
  /** Retrieve a list of many pricing configuration studio plans. */
  findManyPricingConfigurationStudioPlans: PricingConfigurationStudioPlanConnection;
  /** Retrieve a list of many pricing group assignments. */
  findManyPricingGroupAssignments: PricingGroupAssignmentConnection;
  /** Retrieve a list of many pricing groups. */
  findManyPricingGroups: PricingGroupConnection;
  /** Retrieve a list of many pricing rule constraints. */
  findManyPricingRuleConstraints: PricingRuleConstraintConnection;
  /** Retrieve a list of many pricing rule targets. */
  findManyPricingRuleTargets: PricingRuleTargetConnection;
  /** Retrieve a list of many pricing rules. */
  findManyPricingRules: PricingRuleConnection;
  /** Retrieve many metas. */
  findManyProviderAppMeta: ProviderAppMetaConnection;
  /** Retrieve multiple objects */
  findManyProviderAppMetaOID4VC: ProviderAppMetaOid4VcConnection;
  /** Retrieve many ProviderApp. */
  findManyProviderApps: ProviderAppConnection;
  /** Retrieve a list of many identity provider labels. */
  findManyProviderLabels: ProviderLabelConnection;
  /** Retreive many provider locales. */
  findManyProviderLocales: ProviderLocaleConnection;
  /** Retrieve many provider. */
  findManyProviders: ProviderConnection;
  /** Retrieve many provider. */
  findManyProvidersForOrganization: ProviderForOrganizationConnection;
  /** Retrieve a list of many identity scheme labels. */
  findManySchemeLabels: SchemeLabelConnection;
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
  /** Retrieve many signature activities. */
  findManySignatureActivities: SignatureActivityConnection;
  /** Retrieve many flow signature attributes. */
  findManySignatureAttributes: SignatureAttributeConnection;
  /** Retrieve a list of many brands. */
  findManySignatureBrands: SignatureBrandConnection;
  /** Retrieve many flow signature credentials. */
  findManySignatureCredentials: SignatureCredentialConnection;
  /** Retrieve a list of many domains. */
  findManySignatureDomains: SignatureDomainConnection;
  /** Retrieve many flow signature groups. */
  findManySignatureGroups: SignatureGroupConnection;
  /** Retrieve a list of many Labels. */
  findManySignatureLabels: SignatureLabelConnection;
  /** Retrieve a list of many mappings. */
  findManySignatureMappings: SignatureMappingConnection;
  /** Retrieve many credential meta NL Wallet. */
  findManySignatureProviderConfigurationNLWallets: SignatureProviderConfigurationNlWalletConnection;
  /** Retrieve many SignatureProviderConfiguration. */
  findManySignatureProviderConfigurations: SignatureProviderConfigurationConnection;
  /** Retrieve many flow signature providers. */
  findManySignatureProviders: SignatureProviderConnection;
  /** Retreive many flow signatures. */
  findManySignatures: SignatureConnection;
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
  findMe: User;
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
  /** Retrieve a single organization app meta OID4VC. */
  findOrganizationAppMetaOid4vc: OrganizationAppMetaOid4vc;
  /** Retrieve a single organization app meta yoti. */
  findOrganizationAppMetaYoti: OrganizationAppMetaYoti;
  /** Retrieve a single organization app prerequisite. */
  findOrganizationAppPrerequisite: OrganizationAppPrerequisite;
  /** Retrieve a single organization app prerequisite workflow. */
  findOrganizationAppPrerequisiteWorkflow: OrganizationAppPrerequisiteWorkflow;
  /** Get brand */
  findOrganizationBrand: OrganizationBrand;
  /** Get Label */
  findOrganizationBrandLabel: OrganizationBrandLabel;
  /** Get token */
  findOrganizationClient: OrganizationClient;
  /** Get domain */
  findOrganizationDomain: OrganizationDomain;
  /** Get Label */
  findOrganizationDomainLabel: OrganizationDomainLabel;
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
  /** Find pricing catalog */
  findPricingCatalog: PricingCatalog;
  /** Find pricing configuration app */
  findPricingConfigurationApp: PricingConfigurationApp;
  /** Find pricing configuration organization */
  findPricingConfigurationOrganization: PricingConfigurationOrganization;
  /** Find pricing configuration studio plan */
  findPricingConfigurationStudioPlan: PricingConfigurationStudioPlan;
  /** Find pricing group */
  findPricingGroup: PricingGroup;
  /** Find pricing group assignment */
  findPricingGroupAssignment: PricingGroupAssignment;
  /** Find pricing rule */
  findPricingRule: PricingRule;
  /** Find pricing rule constraint */
  findPricingRuleConstraint: PricingRuleConstraint;
  /** Find pricing rule target */
  findPricingRuleTarget: PricingRuleTarget;
  /** Retrieve a single provider. */
  findProvider: Provider;
  /** Retrieve a single ProviderApp. */
  findProviderApp: ProviderApp;
  /** Retrieve a single meta. */
  findProviderAppMeta: ProviderAppMeta;
  /** Retrieve a single object */
  findProviderAppMetaOID4VC: ProviderAppMetaOid4Vc;
  /** Get identity provider label */
  findProviderLabel: ProviderLabel;
  /** Retrieve a single provider locale. */
  findProviderLocale: ProviderLocale;
  /** Retrieve a single scheme. */
  findScheme: Scheme;
  /** Get identity scheme label */
  findSchemeLabel: SchemeLabel;
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
  /** Retrieve a single flow signature. */
  findSignature: Signature;
  /** Retrieve a single signature activity. */
  findSignatureActivity: SignatureActivity;
  /** Retreive a single flow signature attribute. */
  findSignatureAttribute: SignatureAttribute;
  /** Get brand */
  findSignatureBrand: SignatureBrand;
  /** Retrieve a single flow signature credential. */
  findSignatureCredential: SignatureCredential;
  /** Get domain */
  findSignatureDomain: SignatureDomain;
  /** Retrieve a single flow signature groups. */
  findSignatureGroup: SignatureGroup;
  /** Get Label */
  findSignatureLabel: SignatureLabel;
  /** Get mapping */
  findSignatureMapping: SignatureMapping;
  /** Retrieve a single flow signature provider. */
  findSignatureProvider: SignatureProvider;
  /** Retrieve a single SignatureProviderConfiguration. */
  findSignatureProviderConfiguration: SignatureProviderConfiguration;
  /** Retrieve a single credential meta NL Wallet. */
  findSignatureProviderConfigurationNLWallet: SignatureProviderConfigurationNlWallet;
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
  /**
   * Returns a JSON Schema for the given GraphQL input type name.
   * Fields annotated with `@excludeFromJsonSchema` are excluded.
   */
  jsonSchema: Scalars['JSONObject']['output'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAppArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAppLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAppPrerequisiteArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAppPrerequisiteLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAppPrerequisiteStateArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAppPrerequisiteStateLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAttributeLabelArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAttributeLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAttributeMetaArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAttributeMetaDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAttributeMetaDigidentityArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAttributeMetaMdocArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAttributeMetaNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAttributeMetaNectArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAttributeMetaOid4VcmdocArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAttributeMetaOid4VcsdjwtArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAttributeMetaReadIdArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAttributeMetaTruidArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAttributeMetaYiviArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAttributeMetaYotiArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAttributeRequestArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAttributeRequestLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAttributeRequestMetaArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAttributeRequestMetaDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAttributeRequestMetaOid4VcmdocArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAttributeRequestMetaOid4VcsdjwtArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAttributeRequestMetaYiviArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAttributeRequestMetaYotiArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAuthenticationArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAuthenticationActivityArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAuthenticationBrandArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAuthenticationDomainArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAuthenticationLabelArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAuthenticationProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAuthenticationProviderConfigurationArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAuthenticationProviderConfigurationNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindAuthenticationScopeArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindBillingArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindBillingMethodArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindBillingPlanArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindBillingWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindBillingWalletTransactionArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindBillingWalletTransactionMetaArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindBillingWalletTransactionMetaFlowArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindBillingWalletTransactionMetaFlowAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindBillingWalletTransactionMetaPlanArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindBillingWalletTransactionMetaWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindCredentialArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindCredentialLabelArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindCredentialLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindCredentialMetaArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindCredentialMetaDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindCredentialMetaDigidentityArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindCredentialMetaMdocArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindCredentialMetaNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindCredentialMetaNectArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindCredentialMetaOid4VcmdocArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindCredentialMetaOid4VcsdjwtArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindCredentialMetaReadIdArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindCredentialMetaTruidArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindCredentialMetaYiviArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindCredentialMetaYotiArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindCredentialRequestArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindCredentialRequestLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindCredentialRequestMetaArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindCredentialRequestMetaDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindCredentialRequestMetaOid4VcmdocArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindCredentialRequestMetaOid4VcsdjwtArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindCredentialRequestMetaYiviArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindCredentialRequestMetaYotiArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindCredentialRequestStateArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindCredentialRequestStateLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindCredentialRequestWorkflowArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindDisclosureArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindDisclosureActivityArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindDisclosureAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindDisclosureBrandArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindDisclosureCredentialArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindDisclosureDomainArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindDisclosureGroupArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindDisclosureLabelArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindDisclosureMappingArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindDisclosureProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindDisclosureProviderConfigurationArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindDisclosureProviderConfigurationNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindGlobalOAuthMethodsArgs = {
  input: FindGlobalOAuthMethodsInput;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindIssuanceArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindIssuanceActivityArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindIssuanceAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindIssuanceBrandArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindIssuanceCredentialArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindIssuanceCredentialMetaArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindIssuanceCredentialMetaDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindIssuanceCredentialMetaYiviArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindIssuanceDomainArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindIssuanceLabelArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindIssuanceMappingArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindIssuanceProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindIssuerArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindIssuerLabelArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindIssuerLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindIssuerMetaArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindIssuerMetaDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindIssuerMetaMdocArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindIssuerMetaOid4VcmdocArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindIssuerMetaOid4VcsdjwtArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindIssuerMetaYiviArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindLabelArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindLocaleConfigArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindMaintenanceArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAppLocalesArgs = {
  input?: InputMaybe<FindManyAppLocaleInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAppPrerequisiteArgs = {
  input?: InputMaybe<FindManyAppPrerequisitesInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAppPrerequisiteLocalesArgs = {
  input?: InputMaybe<FindManyAppPrerequisiteLocaleInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAppPrerequisiteStateArgs = {
  input?: InputMaybe<FindManyAppPrerequisiteStateInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAppPrerequisiteStateLocalesArgs = {
  input?: InputMaybe<FindManyAppPrerequisiteStateLocaleInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAppsArgs = {
  input?: InputMaybe<FindManyAppsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAttributeLabelsArgs = {
  input?: InputMaybe<FindManyAttributeLabelsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAttributeLocalesArgs = {
  input?: InputMaybe<FindManyAttributeLocaleInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAttributeMetaArgs = {
  input?: InputMaybe<FindManyAttributeMetaInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAttributeMetaDatakeeperArgs = {
  input?: InputMaybe<FindManyAttributeMetaDatakeeperInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAttributeMetaDigidentityArgs = {
  input?: InputMaybe<FindManyAttributeMetaDigidentityInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAttributeMetaMdocArgs = {
  input?: InputMaybe<FindManyAttributeMetaMdocInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAttributeMetaNlWalletArgs = {
  input?: InputMaybe<FindManyAttributeMetaNlWalletInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAttributeMetaNectArgs = {
  input?: InputMaybe<FindManyAttributeMetaNectInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAttributeMetaOid4VcmdocArgs = {
  input?: InputMaybe<FindManyAttributeMetaOid4VcmdocInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAttributeMetaOid4VcsdjwtArgs = {
  input?: InputMaybe<FindManyAttributeMetaOid4VcsdjwtInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAttributeMetaReadIdArgs = {
  input?: InputMaybe<FindManyAttributeMetaReadIdInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAttributeMetaTruidArgs = {
  input?: InputMaybe<FindManyAttributeMetaTruidInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAttributeMetaYiviArgs = {
  input?: InputMaybe<FindManyAttributeMetaYiviInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAttributeMetaYotiArgs = {
  input?: InputMaybe<FindManyAttributeMetaYotiInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAttributeRequestArgs = {
  input?: InputMaybe<FindManyAttributeRequestsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAttributeRequestLocalesArgs = {
  input?: InputMaybe<FindManyAttributeRequestLocaleInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAttributeRequestMetaArgs = {
  input?: InputMaybe<FindManyAttributeRequestMetaInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAttributeRequestMetaDatakeeperArgs = {
  input?: InputMaybe<FindManyAttributeRequestMetaDatakeeperInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAttributeRequestMetaOid4VcmdocArgs = {
  input?: InputMaybe<FindManyAttributeRequestMetaOid4VcmdocInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAttributeRequestMetaOid4VcsdjwtArgs = {
  input?: InputMaybe<FindManyAttributeRequestMetaOid4VcsdjwtInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAttributeRequestMetaYiviArgs = {
  input?: InputMaybe<FindManyAttributeRequestMetaYiviInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAttributeRequestMetaYotiArgs = {
  input?: InputMaybe<FindManyAttributeRequestMetaYotiInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAttributesArgs = {
  input?: InputMaybe<FindManyAttributesInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAuthenticationActivitiesArgs = {
  input?: InputMaybe<FindManyAuthenticationActivitiesInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAuthenticationBrandsArgs = {
  input?: InputMaybe<FindManyAuthenticationBrandsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAuthenticationDomainsArgs = {
  input?: InputMaybe<FindManyAuthenticationDomainsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAuthenticationLabelsArgs = {
  input?: InputMaybe<FindManyAuthenticationLabelsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAuthenticationProviderConfigurationNlWalletsArgs = {
  input?: InputMaybe<FindManyAuthenticationProviderConfigurationNlWalletsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAuthenticationProviderConfigurationsArgs = {
  input?: InputMaybe<FindManyAuthenticationProviderConfigurationsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAuthenticationProvidersArgs = {
  input?: InputMaybe<FindManyAuthenticationProvidersInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAuthenticationScopesArgs = {
  input?: InputMaybe<FindManyAuthenticationScopesInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyAuthenticationsArgs = {
  input?: InputMaybe<FindManyAuthenticationsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyBillingMethodsArgs = {
  input?: InputMaybe<FindManyBillingMethodsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyBillingPlansArgs = {
  input?: InputMaybe<FindManyBillingPlansInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyBillingWalletTransactionMetaFlowAttributesArgs = {
  input?: InputMaybe<FindManyBillingWalletTransactionMetaFlowAttributesInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyBillingWalletTransactionMetaFlowsArgs = {
  input?: InputMaybe<FindManyBillingWalletTransactionMetaFlowsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyBillingWalletTransactionMetaPlansArgs = {
  input?: InputMaybe<FindManyBillingWalletTransactionMetaPlansInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyBillingWalletTransactionMetaWalletsArgs = {
  input?: InputMaybe<FindManyBillingWalletTransactionMetaWalletsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyBillingWalletTransactionMetasArgs = {
  input?: InputMaybe<FindManyBillingWalletTransactionMetasInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyBillingWalletTransactionsArgs = {
  input?: InputMaybe<FindManyBillingWalletTransactionsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyBillingWalletsArgs = {
  input?: InputMaybe<FindManyBillingWalletsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyBillingsArgs = {
  input?: InputMaybe<FindManyBillingsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyCredentialLabelsArgs = {
  input?: InputMaybe<FindManyCredentialLabelsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyCredentialLocalesArgs = {
  input?: InputMaybe<FindManyCredentialLocaleInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyCredentialMetaArgs = {
  input?: InputMaybe<FindManyCredentialMetaInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyCredentialMetaDatakeeperArgs = {
  input?: InputMaybe<FindManyCredentialMetaDatakeeperInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyCredentialMetaDigidentityArgs = {
  input?: InputMaybe<FindManyCredentialMetaDigidentityInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyCredentialMetaMdocArgs = {
  input?: InputMaybe<FindManyCredentialMetaMdocInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyCredentialMetaNlWalletArgs = {
  input?: InputMaybe<FindManyCredentialMetaNlWalletInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyCredentialMetaNectArgs = {
  input?: InputMaybe<FindManyCredentialMetaNectInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyCredentialMetaOid4VcmdocArgs = {
  input?: InputMaybe<FindManyCredentialMetaOid4VcmdocInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyCredentialMetaOid4VcsdjwtArgs = {
  input?: InputMaybe<FindManyCredentialMetaOid4VcsdjwtInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyCredentialMetaReadIdArgs = {
  input?: InputMaybe<FindManyCredentialMetaReadIdInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyCredentialMetaTruidArgs = {
  input?: InputMaybe<FindManyCredentialMetaTruidInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyCredentialMetaYiviArgs = {
  input?: InputMaybe<FindManyCredentialMetaYiviInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyCredentialMetaYotiArgs = {
  input?: InputMaybe<FindManyCredentialMetaYotiInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyCredentialRequestArgs = {
  input?: InputMaybe<FindManyCredentialRequestsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyCredentialRequestLocalesArgs = {
  input?: InputMaybe<FindManyCredentialRequestLocaleInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyCredentialRequestMetaArgs = {
  input?: InputMaybe<FindManyCredentialRequestMetaInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyCredentialRequestMetaDatakeeperArgs = {
  input?: InputMaybe<FindManyCredentialRequestMetaDatakeeperInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyCredentialRequestMetaOid4VcmdocArgs = {
  input?: InputMaybe<FindManyCredentialRequestMetaOid4VcmdocInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyCredentialRequestMetaOid4VcsdjwtArgs = {
  input?: InputMaybe<FindManyCredentialRequestMetaOid4VcsdjwtInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyCredentialRequestMetaYiviArgs = {
  input?: InputMaybe<FindManyCredentialRequestMetaYiviInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyCredentialRequestMetaYotiArgs = {
  input?: InputMaybe<FindManyCredentialRequestMetaYotiInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyCredentialRequestStateArgs = {
  input?: InputMaybe<FindManyCredentialRequestStateInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyCredentialRequestStateLocalesArgs = {
  input?: InputMaybe<FindManyCredentialRequestStateLocaleInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyCredentialRequestWorkflowArgs = {
  input?: InputMaybe<FindManyCredentialRequestWorkflowInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyCredentialsArgs = {
  input?: InputMaybe<FindManyCredentialsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyDisclosureActivitiesArgs = {
  input?: InputMaybe<FindManyDisclosureActivitiesInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyDisclosureAttributesArgs = {
  input?: InputMaybe<FindManyDisclosureAttributesInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyDisclosureBrandsArgs = {
  input?: InputMaybe<FindManyDisclosureBrandsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyDisclosureCredentialsArgs = {
  input?: InputMaybe<FindManyDisclosureCredentialsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyDisclosureDomainsArgs = {
  input?: InputMaybe<FindManyDisclosureDomainsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyDisclosureGroupsArgs = {
  input?: InputMaybe<FindManyDisclosureGroupsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyDisclosureLabelsArgs = {
  input?: InputMaybe<FindManyDisclosureLabelsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyDisclosureMappingsArgs = {
  input?: InputMaybe<FindManyDisclosureMappingsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyDisclosureProviderConfigurationNlWalletsArgs = {
  input?: InputMaybe<FindManyDisclosureProviderConfigurationNlWalletsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyDisclosureProviderConfigurationsArgs = {
  input?: InputMaybe<FindManyDisclosureProviderConfigurationsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyDisclosureProvidersArgs = {
  input?: InputMaybe<FindManyDisclosureProvidersInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyDisclosuresArgs = {
  input?: InputMaybe<FindManyDisclosuresInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyIssuanceActivitiesArgs = {
  input?: InputMaybe<FindManyIssuanceActivitiesInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyIssuanceAttributesArgs = {
  input?: InputMaybe<FindManyIssuanceAttributesInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyIssuanceBrandsArgs = {
  input?: InputMaybe<FindManyIssuanceBrandsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyIssuanceCredentialMetaArgs = {
  input?: InputMaybe<FindManyIssuanceCredentialMetaInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyIssuanceCredentialMetaDatakeeperArgs = {
  input?: InputMaybe<FindManyIssuanceCredentialMetaDatakeeperInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyIssuanceCredentialMetaYiviArgs = {
  input?: InputMaybe<FindManyIssuanceCredentialMetaYiviInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyIssuanceCredentialsArgs = {
  input?: InputMaybe<FindManyIssuanceCredentialsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyIssuanceDomainsArgs = {
  input?: InputMaybe<FindManyIssuanceDomainsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyIssuanceLabelsArgs = {
  input?: InputMaybe<FindManyIssuanceLabelsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyIssuanceMappingsArgs = {
  input?: InputMaybe<FindManyIssuanceMappingsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyIssuanceProvidersArgs = {
  input?: InputMaybe<FindManyIssuanceProvidersInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyIssuancesArgs = {
  input?: InputMaybe<FindManyIssuancesInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyIssuerLabelsArgs = {
  input?: InputMaybe<FindManyIssuerLabelsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyIssuerLocalesArgs = {
  input?: InputMaybe<FindManyIssuerLocaleInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyIssuerMetaArgs = {
  input?: InputMaybe<FindManyIssuerMetaInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyIssuerMetaDatakeeperArgs = {
  input?: InputMaybe<FindManyIssuerMetaDatakeeperInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyIssuerMetaMdocArgs = {
  input?: InputMaybe<FindManyIssuerMetaMdocInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyIssuerMetaOid4VcmdocArgs = {
  input?: InputMaybe<FindManyIssuerMetaOid4VcmdocInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyIssuerMetaOid4VcsdjwtArgs = {
  input?: InputMaybe<FindManyIssuerMetaOid4VcsdjwtInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyIssuerMetaYiviArgs = {
  input?: InputMaybe<FindManyIssuerMetaYiviInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyIssuersArgs = {
  input?: InputMaybe<FindManyIssuersInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyLabelsArgs = {
  input?: InputMaybe<FindManyLabelsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyLocaleConfigsArgs = {
  input?: InputMaybe<FindManyLocaleConfigsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyMaintenancesArgs = {
  input?: InputMaybe<FindManyMaintenancesInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyMappingIssuanceAttributesArgs = {
  input?: InputMaybe<FindManyMappingIssuanceAttributesInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyMappingIssuanceLinksArgs = {
  input?: InputMaybe<FindManyMappingIssuanceLinksInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyMappingIssuancesArgs = {
  input?: InputMaybe<FindManyMappingIssuancesInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyMappingVerificationAttributesArgs = {
  input?: InputMaybe<FindManyMappingVerificationAttributesInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyMappingVerificationClaimsArgs = {
  input?: InputMaybe<FindManyMappingVerificationClaimsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyMappingVerificationLinksArgs = {
  input?: InputMaybe<FindManyMappingVerificationLinksInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyMappingVerificationsArgs = {
  input?: InputMaybe<FindManyMappingVerificationsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyOAuthProvidersArgs = {
  input?: InputMaybe<FindManyOAuthProvidersInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyOrganizationAddressesArgs = {
  input?: InputMaybe<FindManyOrganizationAddressesInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyOrganizationAlertDeprecationsArgs = {
  input?: InputMaybe<FindManyOrganizationAlertDeprecationsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyOrganizationAlertsArgs = {
  input?: InputMaybe<FindManyOrganizationAlertsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyOrganizationAppArgs = {
  input?: InputMaybe<FindManyOrganizationAppsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyOrganizationAppMetaArgs = {
  input?: InputMaybe<FindManyOrganizationAppMetaInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyOrganizationAppMetaDatakeeperArgs = {
  input?: InputMaybe<FindManyOrganizationAppMetaDatakeeperInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyOrganizationAppMetaKiwaArgs = {
  input?: InputMaybe<FindManyOrganizationAppMetaKiwaInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyOrganizationAppMetaOid4vcArgs = {
  input?: InputMaybe<FindManyOrganizationAppMetaOid4vcInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyOrganizationAppMetaYotiArgs = {
  input?: InputMaybe<FindManyOrganizationAppMetaYotiInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyOrganizationAppPrerequisiteArgs = {
  input?: InputMaybe<FindManyOrganizationAppPrerequisiteInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyOrganizationAppPrerequisiteWorkflowArgs = {
  input?: InputMaybe<FindManyOrganizationAppPrerequisiteWorkflowInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyOrganizationBrandLabelsArgs = {
  input?: InputMaybe<FindManyOrganizationBrandLabelsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyOrganizationBrandsArgs = {
  input?: InputMaybe<FindManyOrganizationBrandsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyOrganizationClientsArgs = {
  input?: InputMaybe<FindManyOrganizationClientsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyOrganizationDomainLabelsArgs = {
  input?: InputMaybe<FindManyOrganizationDomainLabelsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyOrganizationDomainOAuthProvidersArgs = {
  input?: InputMaybe<FindManyOrganizationDomainOAuthProvidersInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyOrganizationDomainValidationsArgs = {
  input?: InputMaybe<FindManyOrganizationDomainValidationsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyOrganizationDomainsArgs = {
  input?: InputMaybe<FindManyOrganizationDomainsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyOrganizationNotificationEventsArgs = {
  input?: InputMaybe<FindManyOrganizationNotificationEventsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyOrganizationNotificationsArgs = {
  input?: InputMaybe<FindManyOrganizationNotificationsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyOrganizationQuotasArgs = {
  input?: InputMaybe<FindManyOrganizationQuotasInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyOrganizationSecretsArgs = {
  input?: InputMaybe<FindManyOrganizationSecretsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyOrganizationUsersArgs = {
  input?: InputMaybe<FindManyOrganizationUsersInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyOrganizationsArgs = {
  input?: InputMaybe<FindManyOrganizationsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyOrganizationsWithStudioPlanArgs = {
  input?: InputMaybe<FindManyOrganizationsInput>;
  studioPlanUuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyPaymentProviderEventsArgs = {
  input?: InputMaybe<FindManyPaymentProviderEventsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyPaymentProviderInvoicesArgs = {
  input?: InputMaybe<FindManyPaymentProviderInvoicesInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyPaymentProviderMethodsArgs = {
  input?: InputMaybe<FindManyPaymentProviderMethodsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyPaymentProviderOrganizationsArgs = {
  input?: InputMaybe<FindManyPaymentProviderOrganizationsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyPaymentProvidersArgs = {
  input?: InputMaybe<FindManyPaymentProvidersInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyPricingCatalogsArgs = {
  input?: InputMaybe<FindManyPricingCatalogsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyPricingConfigurationAppsArgs = {
  input?: InputMaybe<FindManyPricingConfigurationAppsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyPricingConfigurationOrganizationsArgs = {
  input?: InputMaybe<FindManyPricingConfigurationOrganizationsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyPricingConfigurationStudioPlansArgs = {
  input?: InputMaybe<FindManyPricingConfigurationStudioPlansInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyPricingGroupAssignmentsArgs = {
  input?: InputMaybe<FindManyPricingGroupAssignmentsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyPricingGroupsArgs = {
  input?: InputMaybe<FindManyPricingGroupsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyPricingRuleConstraintsArgs = {
  input?: InputMaybe<FindManyPricingRuleConstraintsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyPricingRuleTargetsArgs = {
  input?: InputMaybe<FindManyPricingRuleTargetsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyPricingRulesArgs = {
  input?: InputMaybe<FindManyPricingRulesInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyProviderAppMetaArgs = {
  input?: InputMaybe<FindManyProviderAppMetaInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyProviderAppMetaOid4VcArgs = {
  input?: InputMaybe<FindManyProviderAppMetaOid4VcInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyProviderAppsArgs = {
  input?: InputMaybe<FindManyProviderAppsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyProviderLabelsArgs = {
  input?: InputMaybe<FindManyProviderLabelsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyProviderLocalesArgs = {
  input?: InputMaybe<FindManyProviderLocaleInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyProvidersArgs = {
  input?: InputMaybe<FindManyProvidersInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyProvidersForOrganizationArgs = {
  input: FindManyProvidersForOrganizationInput;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManySchemeLabelsArgs = {
  input?: InputMaybe<FindManySchemeLabelsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManySchemeLocalesArgs = {
  input?: InputMaybe<FindManySchemeLocaleInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManySchemesArgs = {
  input?: InputMaybe<FindManySchemesInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyScopeClaimsArgs = {
  input?: InputMaybe<FindManyScopeClaimsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyScopeLocalesArgs = {
  input?: InputMaybe<FindManyScopeLocaleInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyScopeResourcesArgs = {
  input?: InputMaybe<FindManyScopeResourcesInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyScopesArgs = {
  input?: InputMaybe<FindManyScopesInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManySignatureActivitiesArgs = {
  input?: InputMaybe<FindManySignatureActivitiesInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManySignatureAttributesArgs = {
  input?: InputMaybe<FindManySignatureAttributesInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManySignatureBrandsArgs = {
  input?: InputMaybe<FindManySignatureBrandsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManySignatureCredentialsArgs = {
  input?: InputMaybe<FindManySignatureCredentialsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManySignatureDomainsArgs = {
  input?: InputMaybe<FindManySignatureDomainsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManySignatureGroupsArgs = {
  input?: InputMaybe<FindManySignatureGroupsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManySignatureLabelsArgs = {
  input?: InputMaybe<FindManySignatureLabelsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManySignatureMappingsArgs = {
  input?: InputMaybe<FindManySignatureMappingsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManySignatureProviderConfigurationNlWalletsArgs = {
  input?: InputMaybe<FindManySignatureProviderConfigurationNlWalletsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManySignatureProviderConfigurationsArgs = {
  input?: InputMaybe<FindManySignatureProviderConfigurationsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManySignatureProvidersArgs = {
  input?: InputMaybe<FindManySignatureProvidersInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManySignaturesArgs = {
  input?: InputMaybe<FindManySignaturesInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyStudioPlanControlOverridesArgs = {
  input?: InputMaybe<FindManyStudioPlanControlOverridesInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyStudioPlanControlsArgs = {
  input?: InputMaybe<FindManyStudioPlanControlsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyStudioPlanIntervalsArgs = {
  input?: InputMaybe<FindManyStudioPlanIntervalsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyStudioPlanOrganizationsArgs = {
  input?: InputMaybe<FindManyStudioPlanOrganizationsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyStudioPlansArgs = {
  input?: InputMaybe<FindManyStudioPlansInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyUserInvitationsArgs = {
  input?: InputMaybe<FindManyUserInvitationsInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindManyUsersArgs = {
  input?: InputMaybe<FindManyUsersInput>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindMappingIssuanceArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindMappingIssuanceAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindMappingIssuanceLinkArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindMappingVerificationArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindMappingVerificationAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindMappingVerificationClaimArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindMappingVerificationLinkArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindOAuthMethodsByOrganizationDomainArgs = {
  input: FindOAuthMethodsByOrganizationDomainInput;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindOAuthProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindOrganizationArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindOrganizationAddressArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindOrganizationAlertArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindOrganizationAlertDeprecationArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindOrganizationAppArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindOrganizationAppMetaArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindOrganizationAppMetaDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindOrganizationAppMetaKiwaArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindOrganizationAppMetaOid4vcArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindOrganizationAppMetaYotiArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindOrganizationAppPrerequisiteArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindOrganizationAppPrerequisiteWorkflowArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindOrganizationBrandArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindOrganizationBrandLabelArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindOrganizationClientArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindOrganizationDomainArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindOrganizationDomainLabelArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindOrganizationDomainOAuthProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindOrganizationDomainValidationArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindOrganizationNotificationArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindOrganizationNotificationEventArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindOrganizationQuotaArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindOrganizationSecretArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindOrganizationUserArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindPaymentProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindPaymentProviderEventArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindPaymentProviderInvoiceArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindPaymentProviderMethodArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindPaymentProviderOrganizationArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindPricingCatalogArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindPricingConfigurationAppArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindPricingConfigurationOrganizationArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindPricingConfigurationStudioPlanArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindPricingGroupArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindPricingGroupAssignmentArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindPricingRuleArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindPricingRuleConstraintArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindPricingRuleTargetArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindProviderAppArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindProviderAppMetaArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindProviderAppMetaOid4VcArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindProviderLabelArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindProviderLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindSchemeArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindSchemeLabelArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindSchemeLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindScopeArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindScopeClaimArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindScopeLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindScopeResourceArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindSignatureArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindSignatureActivityArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindSignatureAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindSignatureBrandArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindSignatureCredentialArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindSignatureDomainArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindSignatureGroupArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindSignatureLabelArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindSignatureMappingArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindSignatureProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindSignatureProviderConfigurationArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindSignatureProviderConfigurationNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindStudioPlanArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindStudioPlanControlArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindStudioPlanControlOverrideArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindStudioPlanIntervalArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindStudioPlanOrganizationArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindUserArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryFindUserInvitationArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryGetPaymentProviderInvoiceReceiptArgs = {
  invoiceId: Scalars['NonEmpty']['input'];
};


/**
 * Introspect a GraphQL input type and return its JSON Schema
 * representation. All fields are included by default; fields decorated
 * with `@excludeFromJsonSchema` are excluded.
 *
 * Returns a standard JSON Schema object with `type`, `properties`, and
 * `required` keys that the UI can use to render typed form controls.
 */
export type QueryJsonSchemaArgs = {
  type: Scalars['String']['input'];
};

/** Register by OpenID token input */
export type RegisterByOpenIdTokenInput = {
  /** The organization description. */
  description?: InputMaybe<Scalars['String']['input']>;
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
  description?: InputMaybe<Scalars['String']['input']>;
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

/** Renew access token input */
export type RenewAccessTokenInput = {
  /** The current access token */
  token: Scalars['NonEmpty']['input'];
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

/** Identity scheme label definition. */
export type SchemeLabel = Model & {
  __typename?: 'SchemeLabel';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The Label */
  label: Label;
  /** The identity scheme (resolved via federation) */
  scheme: Scheme;
  /** The identity scheme UUID (no direct relation - separate database) */
  schemeUuid: Scalars['UUID']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** Connection */
export type SchemeLabelConnection = {
  __typename?: 'SchemeLabelConnection';
  edges: Array<SchemeLabelEdge>;
  pageInfo: PageInfo;
};

/** Edge */
export type SchemeLabelEdge = {
  __typename?: 'SchemeLabelEdge';
  cursor: Scalars['String']['output'];
  node: SchemeLabel;
};

/** Fields which can be used to filter identity scheme labels. Value must be camel case. */
export enum SchemeLabelFilteringField {
  LabelUuid = 'labelUuid',
  SchemeUuid = 'schemeUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort identity scheme labels. Value must be camel case. */
export enum SchemeLabelSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting identity scheme labels. */
export type SchemeLabelSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: SchemeLabelSortEnum;
};

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

/** Flow signature definition. */
export type Signature = Model & {
  __typename?: 'Signature';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
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
  /** The associated brands with this signature */
  signatureBrands: SignatureBrandConnection;
  /** The associated domains with this signature */
  signatureDomains: SignatureDomainConnection;
  /** The associated labels with this signature */
  signatureLabels: SignatureLabelConnection;
  /** The associated mappings with this signature */
  signatureMappings: SignatureMappingConnection;
  /** A list of flow providers belonging to this flow signature. */
  signatureProviders: SignatureProviderConnection;
  /** The state of the flow. */
  state: SignatureState;
  /** Shortcut to active studio controls associated to this object */
  studioControlCompacts: Array<StudioControlCompact>;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Flow signature definition. */
export type SignatureSignatureBrandsArgs = {
  input?: InputMaybe<FindManySignatureBrandsInput>;
};


/** Flow signature definition. */
export type SignatureSignatureDomainsArgs = {
  input?: InputMaybe<FindManySignatureDomainsInput>;
};


/** Flow signature definition. */
export type SignatureSignatureLabelsArgs = {
  input?: InputMaybe<FindManySignatureLabelsInput>;
};


/** Flow signature definition. */
export type SignatureSignatureMappingsArgs = {
  input?: InputMaybe<FindManySignatureMappingsInput>;
};


/** Flow signature definition. */
export type SignatureSignatureProvidersArgs = {
  input?: InputMaybe<FindManySignatureProvidersInput>;
};

/** SignatureAction */
export enum SignatureAction {
  Activate = 'ACTIVATE',
  Deactivate = 'DEACTIVATE'
}

/** Signature activity definition. */
export type SignatureActivity = Model & {
  __typename?: 'SignatureActivity';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The event URN */
  eventURN: Scalars['URN']['output'];
  /** The metadata */
  meta: Scalars['JSONObject']['output'];
  /** The organization UUID */
  organizationUuid: Scalars['UUID']['output'];
  /** The request UUID */
  requestUuid: Scalars['UUID']['output'];
  /** The signature UUID */
  signatureUuid: Scalars['UUID']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The signature activity connection definition. */
export type SignatureActivityConnection = {
  __typename?: 'SignatureActivityConnection';
  edges: Array<Maybe<SignatureActivityEdge>>;
  pageInfo: PageInfo;
};

/** The signature activity edge definition. */
export type SignatureActivityEdge = {
  __typename?: 'SignatureActivityEdge';
  cursor: Scalars['String']['output'];
  node: SignatureActivity;
};

/** Fields which can be used to filter signature activities on. */
export enum SignatureActivityFilteringField {
  CreatedAt = 'createdAt',
  EventUrn = 'eventURN',
  OrganizationUuid = 'organizationUuid',
  RequestUuid = 'requestUuid',
  SignatureUuid = 'signatureUuid'
}

/** Fields which can be used to sort signature activities on. */
export enum SignatureActivitySortEnum {
  CreatedAt = 'createdAt',
  EventUrn = 'eventUrn'
}

/** Input options for sorting signature activities. */
export type SignatureActivitySortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: SignatureActivitySortEnum;
};

/** Flow signature attribute definition. */
export type SignatureAttribute = Model & {
  __typename?: 'SignatureAttribute';
  /** The attribute the attributeUuid belongs to. */
  attribute: Attribute;
  /** The uuid of the flow attribute. */
  attributeUuid: Scalars['UUID']['output'];
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The flow signature the flow query belongs to. */
  signatureCredential: SignatureCredential;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};

/** The flow signature attribute connection definition. */
export type SignatureAttributeConnection = {
  __typename?: 'SignatureAttributeConnection';
  edges: Array<SignatureAttributeEdge>;
  pageInfo: PageInfo;
};

/** The flow signature attribute edge definition. */
export type SignatureAttributeEdge = {
  __typename?: 'SignatureAttributeEdge';
  cursor: Scalars['String']['output'];
  node: SignatureAttribute;
};

/** Fields which can be used to filter flow signature attribute on. Value must be camel case. */
export enum SignatureAttributeFilteringField {
  AttributeUuid = 'attributeUuid',
  SignatureCredentialUuid = 'signatureCredentialUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow signature attribute on. Value must be camel case. */
export enum SignatureAttributeSortEnum {
  AttributeUuid = 'attributeUuid',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow signature attribute. */
export type SignatureAttributeSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: SignatureAttributeSortEnum;
};

/** Organization brand definition. */
export type SignatureBrand = Model & {
  __typename?: 'SignatureBrand';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** Is default branding */
  isDefault: Scalars['Boolean']['output'];
  /** The user organization brand */
  organizationBrand: OrganizationBrand;
  /** The flow signature */
  signature: Signature;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** An Connection */
export type SignatureBrandConnection = {
  __typename?: 'SignatureBrandConnection';
  edges: Array<SignatureBrandEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type SignatureBrandEdge = {
  __typename?: 'SignatureBrandEdge';
  cursor: Scalars['String']['output'];
  node: SignatureBrand;
};

/** Fields which can be used to filter brands on. Value must be camel case. */
export enum SignatureBrandFilteringField {
  OrganizationBrandUuid = 'organizationBrandUuid',
  RedirectPath = 'redirectPath',
  SignatureUuid = 'signatureUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort brands on. Value must be camel case. */
export enum SignatureBrandSortEnum {
  CreatedAt = 'createdAt',
  RedirectPath = 'redirectPath',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting brands. */
export type SignatureBrandSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: SignatureBrandSortEnum;
};

/** The flow signature connection definition. */
export type SignatureConnection = {
  __typename?: 'SignatureConnection';
  edges: Array<Maybe<SignatureEdge>>;
  pageInfo: PageInfo;
};

/** Flow signature credential definition. */
export type SignatureCredential = Model & {
  __typename?: 'SignatureCredential';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The credential the credentialUuid belongs to. */
  credential: Credential;
  /** The uuid of the credential. */
  credentialUuid: Scalars['UUID']['output'];
  /** The issuer the issuerUuid belongs to. */
  issuer: Issuer;
  /** The uuid of the issuer. */
  issuerUuid: Scalars['UUID']['output'];
  /** The scheme the schemeUuid belongs to. */
  scheme: Scheme;
  /** The uuid of the scheme. */
  schemeUuid: Scalars['UUID']['output'];
  /** The associated fields with this credential */
  signatureAttributes: SignatureAttributeConnection;
  /** The flow signature group the flow signature credential belongs to. */
  signatureGroup: SignatureGroup;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Flow signature credential definition. */
export type SignatureCredentialSignatureAttributesArgs = {
  input?: InputMaybe<FindManySignatureAttributesInput>;
};

/** The flow signature field connection definition. */
export type SignatureCredentialConnection = {
  __typename?: 'SignatureCredentialConnection';
  edges: Array<SignatureCredentialEdge>;
  pageInfo: PageInfo;
};

/** The flow signature field edge definition. */
export type SignatureCredentialEdge = {
  __typename?: 'SignatureCredentialEdge';
  cursor: Scalars['String']['output'];
  node: SignatureCredential;
};

/** Fields which can be used to filter flow signature field on. Value must be camel case. */
export enum SignatureCredentialFilteringField {
  CredentialUuid = 'credentialUuid',
  IssuerUuid = 'issuerUuid',
  SchemeUuid = 'schemeUuid',
  SignatureGroupUuid = 'signatureGroupUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow signature field on. Value must be camel case. */
export enum SignatureCredentialSortEnum {
  CreatedAt = 'createdAt',
  CredentialUuid = 'credentialUuid',
  IssuerUuid = 'issuerUuid',
  SchemeUuid = 'schemeUuid',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow signature field. */
export type SignatureCredentialSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: SignatureCredentialSortEnum;
};

/** Organization domain definition. */
export type SignatureDomain = Model & {
  __typename?: 'SignatureDomain';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The user organization domain */
  organizationDomain: OrganizationDomain;
  /** The path value. */
  redirectPath: Scalars['RedirectPath']['output'];
  /** The port value. */
  redirectPort: Scalars['RedirectPort']['output'];
  /** The protocol value. */
  redirectProtocol: Scalars['RedirectProtocol']['output'];
  /** The flow signature */
  signature: Signature;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** An Connection */
export type SignatureDomainConnection = {
  __typename?: 'SignatureDomainConnection';
  edges: Array<SignatureDomainEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type SignatureDomainEdge = {
  __typename?: 'SignatureDomainEdge';
  cursor: Scalars['String']['output'];
  node: SignatureDomain;
};

/** Fields which can be used to filter domains on. Value must be camel case. */
export enum SignatureDomainFilteringField {
  OrganizationDomainUuid = 'organizationDomainUuid',
  RedirectPath = 'redirectPath',
  SignatureUuid = 'signatureUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort domains on. Value must be camel case. */
export enum SignatureDomainSortEnum {
  CreatedAt = 'createdAt',
  RedirectPath = 'redirectPath',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting domains. */
export type SignatureDomainSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: SignatureDomainSortEnum;
};

/** The flow signature edge definition. */
export type SignatureEdge = {
  __typename?: 'SignatureEdge';
  cursor: Scalars['String']['output'];
  node: Signature;
};

/** Fields which can be used to filter flow signatures on. Value must be camel case. */
export enum SignatureFilteringField {
  Name = 'name',
  OrganizationUuid = 'organizationUuid',
  State = 'state',
  Uuid = 'uuid'
}

/** Flow signature group definition. */
export type SignatureGroup = Model & {
  __typename?: 'SignatureGroup';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The name */
  name?: Maybe<Scalars['NonEmpty']['output']>;
  /** A list of flow queries belonging to this flow group. */
  signatureCredentials: SignatureCredentialConnection;
  /** The flow signature the flow group belongs to. */
  signatureProvider: SignatureProvider;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Flow signature group definition. */
export type SignatureGroupSignatureCredentialsArgs = {
  input?: InputMaybe<FindManySignatureCredentialsInput>;
};

/** The flow signature group connection definition. */
export type SignatureGroupConnection = {
  __typename?: 'SignatureGroupConnection';
  edges: Array<SignatureGroupEdge>;
  pageInfo: PageInfo;
};

/** The flow signature group edge definition. */
export type SignatureGroupEdge = {
  __typename?: 'SignatureGroupEdge';
  cursor: Scalars['String']['output'];
  node: SignatureGroup;
};

/** Fields which can be used to filter flow signature group on. Value must be camel case. */
export enum SignatureGroupFilteringField {
  Name = 'name',
  SignatureProviderUuid = 'signatureProviderUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow signature group on. Value must be camel case. */
export enum SignatureGroupSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow signature group. */
export type SignatureGroupSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: SignatureGroupSortEnum;
};

/** Organization Label definition. */
export type SignatureLabel = Model & {
  __typename?: 'SignatureLabel';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The Label */
  label: Label;
  /** The flow signature */
  signature: Signature;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** An Connection */
export type SignatureLabelConnection = {
  __typename?: 'SignatureLabelConnection';
  edges: Array<SignatureLabelEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type SignatureLabelEdge = {
  __typename?: 'SignatureLabelEdge';
  cursor: Scalars['String']['output'];
  node: SignatureLabel;
};

/** Fields which can be used to filter Labels on. Value must be camel case. */
export enum SignatureLabelFilteringField {
  LabelUuid = 'labelUuid',
  SignatureUuid = 'signatureUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort Labels on. Value must be camel case. */
export enum SignatureLabelSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting Labels. */
export type SignatureLabelSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: SignatureLabelSortEnum;
};

/** Organization mapping definition. */
export type SignatureMapping = Model & {
  __typename?: 'SignatureMapping';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The user verification mapping */
  mappingVerification: MappingVerification;
  /** The flow signature */
  signature: Signature;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** An Connection */
export type SignatureMappingConnection = {
  __typename?: 'SignatureMappingConnection';
  edges: Array<SignatureMappingEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type SignatureMappingEdge = {
  __typename?: 'SignatureMappingEdge';
  cursor: Scalars['String']['output'];
  node: SignatureMapping;
};

/** Fields which can be used to filter mappings on. Value must be camel case. */
export enum SignatureMappingFilteringField {
  MappingVerificationUuid = 'mappingVerificationUuid',
  SignatureUuid = 'signatureUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort mappings on. Value must be camel case. */
export enum SignatureMappingSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting mappings. */
export type SignatureMappingSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: SignatureMappingSortEnum;
};

/** The input for filtering flow signature brands in nested filtering. */
export type SignatureNestedFilteringSignatureBrandField = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The input for filtering flow signature brands */
  input: FindManySignatureBrandsInput;
  /** The type of filtering */
  type?: InputMaybe<NestedFilteringType>;
};

/** The input for filtering flow signature labels in nested filtering. */
export type SignatureNestedFilteringSignatureLabelField = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The input for filtering flow signature labels */
  input: FindManySignatureLabelsInput;
  /** The type of filtering */
  type?: InputMaybe<NestedFilteringType>;
};

/** Flow signature provider definition. */
export type SignatureProvider = Model & {
  __typename?: 'SignatureProvider';
  /** The flow signature provider configuration. */
  configuration?: Maybe<SignatureProviderConfiguration>;
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The provider the providerUuid belongs to. */
  providerApp: ProviderApp;
  /** The URN of the flow provider. */
  providerAppUuid: Scalars['UUID']['output'];
  /** Whether this provider is marked as recommended in this flow. */
  recommended: Scalars['Boolean']['output'];
  /** The flow signature the flow provider belongs to. */
  signature: Signature;
  /** A list of flow queries belonging to this flow provider. */
  signatureGroups: SignatureGroupConnection;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Flow signature provider definition. */
export type SignatureProviderSignatureGroupsArgs = {
  input?: InputMaybe<FindManySignatureGroupsInput>;
};

/** Flow signature provider configuration definition */
export type SignatureProviderConfiguration = Model & {
  __typename?: 'SignatureProviderConfiguration';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The NL Wallet flow signature provider configuration */
  nlWallet?: Maybe<SignatureProviderConfigurationNlWallet>;
  /** The SignatureProvider this configuration belongs to */
  signatureProvider: SignatureProvider;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The SignatureProviderConfiguration connection definition. */
export type SignatureProviderConfigurationConnection = {
  __typename?: 'SignatureProviderConfigurationConnection';
  edges: Array<Maybe<SignatureProviderConfigurationEdge>>;
  pageInfo: PageInfo;
};

/** The SignatureProviderConfiguration edge definition. */
export type SignatureProviderConfigurationEdge = {
  __typename?: 'SignatureProviderConfigurationEdge';
  cursor: Scalars['String']['output'];
  node: SignatureProviderConfiguration;
};

/** Fields which can be used to filter SignatureProviderConfiguration on. Value must be camel case. */
export enum SignatureProviderConfigurationFilteringField {
  SignatureProviderUuid = 'signatureProviderUuid'
}

/** SignatureProviderConfigurationNLWallet definition */
export type SignatureProviderConfigurationNlWallet = Model & {
  __typename?: 'SignatureProviderConfigurationNLWallet';
  /** The creation timestamp */
  createdAt: Scalars['DateTime']['output'];
  /** The SignatureProviderConfiguration this object belongs to. */
  signatureProviderConfiguration: SignatureProviderConfiguration;
  /** The timestamp of when the type has been last updated */
  updatedAt: Scalars['DateTime']['output'];
  /** The usecase */
  usecase: Scalars['String']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The SignatureProviderConfigurationNLWallet connection definition. */
export type SignatureProviderConfigurationNlWalletConnection = {
  __typename?: 'SignatureProviderConfigurationNLWalletConnection';
  edges: Array<Maybe<SignatureProviderConfigurationNlWalletEdge>>;
  pageInfo: PageInfo;
};

/** The SignatureProviderConfigurationNLWallet edge definition. */
export type SignatureProviderConfigurationNlWalletEdge = {
  __typename?: 'SignatureProviderConfigurationNLWalletEdge';
  cursor: Scalars['String']['output'];
  node: SignatureProviderConfigurationNlWallet;
};

/** Fields which can be used to filter SignatureProviderConfigurationNLWallet on. Value must be camel case. */
export enum SignatureProviderConfigurationNlWalletFilteringField {
  Intent = 'intent',
  SignatureProviderConfigurationUuid = 'signatureProviderConfigurationUuid'
}

/** Fields which can be used to sort SignatureProviderConfigurationNLWallet on. Value must be camel case. */
export enum SignatureProviderConfigurationNlWalletSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting SignatureProviderConfigurationNLWallet. */
export type SignatureProviderConfigurationNlWalletSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: SignatureProviderConfigurationNlWalletSortEnum;
};

/** Fields which can be used to sort SignatureProviderConfiguration on. Value must be camel case. */
export enum SignatureProviderConfigurationSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting SignatureProviderConfiguration. */
export type SignatureProviderConfigurationSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: SignatureProviderConfigurationSortEnum;
};

/** The flow signature provider connection definition. */
export type SignatureProviderConnection = {
  __typename?: 'SignatureProviderConnection';
  edges: Array<SignatureProviderEdge>;
  pageInfo: PageInfo;
};

/** The flow signature provider edge definition. */
export type SignatureProviderEdge = {
  __typename?: 'SignatureProviderEdge';
  cursor: Scalars['String']['output'];
  node: SignatureProvider;
};

/** Fields which can be used to filter flow signature providers on. Value must be camel case. */
export enum SignatureProviderFilteringField {
  ProviderUuid = 'providerUuid',
  SignatureUuid = 'signatureUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow signature providers on. Value must be camel case. */
export enum SignatureProviderSortEnum {
  CreatedAt = 'createdAt',
  ProviderUuid = 'providerUuid',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow signature providers. */
export type SignatureProviderSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: SignatureProviderSortEnum;
};

/** Fields which can be used to sort flow signatures on. Value must be camel case. */
export enum SignatureSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  State = 'state',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow signatures. */
export type SignatureSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: SignatureSortEnum;
};

/** SignatureState */
export enum SignatureState {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

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
  /** The associated StudioPlan */
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
  /** The associated StudioPlan */
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
  /** The associated StudioPlan */
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
  /** The associated StudioPlan */
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

/** Transition Organization Type Input */
export type TransitionOrganizationTypeInput = {
  /** The type */
  type: OrganizationType;
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
  /** The grants allowed to take action. */
  grants?: InputMaybe<Array<Scalars['String']['input']>>;
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
  /** The DCQL claim path for the attribute */
  claimPath?: InputMaybe<Scalars['JSONObject']['input']>;
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
  /** The meta type of the attribute request. */
  metaType?: InputMaybe<AttributeRequestMetaType>;
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
export type UpdateAttributeRequestMetaOid4VcmdocInput = {
  /** The mdoc data element identifier */
  dataElementIdentifier?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The mdoc namespace */
  namespace?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateAttributeRequestMetaOid4VcsdjwtInput = {
  /** The claim path array */
  claimPath?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The JSON path for the SD-JWT claim */
  jsonPath?: InputMaybe<Scalars['NonEmpty']['input']>;
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

/** Update input */
export type UpdateAuthenticationBrandInput = {
  /** Sets flow brand as default */
  isDefault: Scalars['Boolean']['input'];
};

/** Update Input */
export type UpdateAuthenticationDomainInput = {
  /** The path value. */
  redirectPath?: InputMaybe<Scalars['RedirectPath']['input']>;
  /** The port value. */
  redirectPort?: InputMaybe<Scalars['RedirectPort']['input']>;
  /** The protocol value. */
  redirectProtocol?: InputMaybe<Scalars['RedirectProtocol']['input']>;
};

/** Update Input */
export type UpdateAuthenticationInput = {
  /** The name of the flow authentication. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateAuthenticationProviderConfigurationNlWalletInput = {
  /** The usecase */
  usecase?: InputMaybe<Scalars['String']['input']>;
};

/** Update Input */
export type UpdateAuthenticationProviderInput = {
  /** Whether this provider is marked as recommended in this flow. */
  recommended: Scalars['Boolean']['input'];
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
  /** The credential background color */
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  /** The credential background image URI */
  backgroundImage?: InputMaybe<Scalars['String']['input']>;
  /** mdoc document type */
  docType?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The credential logo (uri and optional alt_text) */
  logo?: InputMaybe<Scalars['String']['input']>;
  /** The credential text color */
  textColor?: InputMaybe<Scalars['String']['input']>;
};

/** Update Input */
export type UpdateCredentialMetaOid4VcsdjwtInput = {
  /** The credential background color */
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  /** The credential background image URI */
  backgroundImage?: InputMaybe<Scalars['String']['input']>;
  /** SD-JWT Key binding */
  keyBinding?: InputMaybe<Scalars['Boolean']['input']>;
  /** The credential logo (uri and optional alt_text) */
  logo?: InputMaybe<Scalars['String']['input']>;
  /** The credential text color */
  textColor?: InputMaybe<Scalars['String']['input']>;
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
  /** The meta type of the credential request. */
  metaType?: InputMaybe<CredentialRequestMetaType>;
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
  /** The issuer UUID */
  issuerUuid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Update Input */
export type UpdateCredentialRequestMetaOid4VcmdocInput = {
  /** mdoc document type */
  docType?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The issuer UUID */
  issuerUuid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Update Input */
export type UpdateCredentialRequestMetaOid4VcsdjwtInput = {
  /** The issuer UUID */
  issuerUuid?: InputMaybe<Scalars['UUID']['input']>;
  /** SD-JWT Key binding */
  keyBinding?: InputMaybe<Scalars['Boolean']['input']>;
  /** SD-JWT Type */
  type?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateCredentialRequestMetaYiviInput = {
  /** The identifier of this credential */
  id?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The issuer UUID */
  issuerUuid?: InputMaybe<Scalars['UUID']['input']>;
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
  /** The issuer UUID */
  issuerUuid?: InputMaybe<Scalars['UUID']['input']>;
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
  /** The grants allowed to take action */
  grants?: InputMaybe<Array<Scalars['String']['input']>>;
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
export type UpdateDisclosureBrandInput = {
  /** Sets flow brand as default */
  isDefault: Scalars['Boolean']['input'];
};

/** Update Input */
export type UpdateDisclosureDomainInput = {
  /** The path value. */
  redirectPath?: InputMaybe<Scalars['RedirectPath']['input']>;
  /** The port value. */
  redirectPort?: InputMaybe<Scalars['RedirectPort']['input']>;
  /** The protocol value. */
  redirectProtocol?: InputMaybe<Scalars['RedirectProtocol']['input']>;
};

/** Update Input */
export type UpdateDisclosureGroupInput = {
  /** The name of the flow group. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateDisclosureInput = {
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
export type UpdateDisclosureProviderConfigurationNlWalletInput = {
  /** The usecase */
  usecase?: InputMaybe<Scalars['String']['input']>;
};

/** Update Input */
export type UpdateDisclosureProviderInput = {
  /** Whether this provider is marked as recommended in this flow. */
  recommended: Scalars['Boolean']['input'];
};

/** Update input */
export type UpdateIssuanceBrandInput = {
  /** Sets flow brand as default */
  isDefault: Scalars['Boolean']['input'];
};

/** The input for updating a flow credential meta datakeeper */
export type UpdateIssuanceCredentialMetaDatakeeperInput = {
  /** The expiration duration, in milliseconds */
  expirationDuration: Scalars['Int']['input'];
};

/** The input for updating a flow credential meta yivi */
export type UpdateIssuanceCredentialMetaYiviInput = {
  /** The expiration duration, in milliseconds */
  expirationDuration: Scalars['Int']['input'];
};

/** Update Input */
export type UpdateIssuanceDomainInput = {
  /** The path value. */
  redirectPath?: InputMaybe<Scalars['RedirectPath']['input']>;
  /** The port value. */
  redirectPort?: InputMaybe<Scalars['RedirectPort']['input']>;
  /** The protocol value. */
  redirectProtocol?: InputMaybe<Scalars['RedirectProtocol']['input']>;
};

/** Update Input */
export type UpdateIssuanceInput = {
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
export type UpdateIssuanceProviderInput = {
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
  /** The issuer's logo image URI */
  logo?: InputMaybe<Scalars['String']['input']>;
};

/** Update Input */
export type UpdateIssuerMetaOid4VcsdjwtInput = {
  /** The issuer's identifier (iss) */
  identifier?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The issuer's public key as a JWK */
  jwk?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The issuer's logo image URI */
  logo?: InputMaybe<Scalars['String']['input']>;
};

/** Update Input */
export type UpdateIssuerMetaYiviInput = {
  /** The identifier of the issuer */
  id?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Input for updating a label */
export type UpdateLabelInput = {
  /** Color string */
  color?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** Label name */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
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
export type UpdateMaintenanceInput = {
  /** The estimated duration in minutes. */
  estimatedMinutes?: InputMaybe<Scalars['Int']['input']>;
  /** The message body. */
  messageBody?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The message title. */
  messageTitle?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The name of the maintenance window. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The scheduled start time. */
  scheduledAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  model?: InputMaybe<CatalogModelType>;
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
  /** The issuer ID */
  issuerId?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The private key identifier */
  keyIdentifier?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateOrganizationAppMetaOid4vcInput = {
  /** The verifier certificate identifier */
  verifierCertIdentifier?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The verifier key identifier */
  verifierKeyIdentifier?: InputMaybe<Scalars['NonEmpty']['input']>;
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

/** Input type used to update pricing catalog entries. */
export type UpdatePricingCatalogInput = {
  /** The price amount */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** The currency */
  currency?: InputMaybe<Currency>;
  /** The currency unit */
  currencyUnit?: InputMaybe<CurrencyUnit>;
};

/** Input type used to update pricing configuration for apps. */
export type UpdatePricingConfigurationAppInput = {
  /** Aggregation strategy for combining multiple prices */
  aggregationStrategy?: InputMaybe<PricingAggregationStrategy>;
  /** Target hierarchy level for pricing calculation */
  targetLevel?: InputMaybe<PricingHierarchyLevel>;
};

/** Input type used to update pricing configuration for organizations. */
export type UpdatePricingConfigurationOrganizationInput = {
  /** Aggregation strategy for combining multiple prices */
  aggregationStrategy?: InputMaybe<PricingAggregationStrategy>;
  /** Target hierarchy level for pricing calculation */
  targetLevel?: InputMaybe<PricingHierarchyLevel>;
};

/** Input type used to update pricing configuration for studio plans. */
export type UpdatePricingConfigurationStudioPlanInput = {
  /** Aggregation strategy for combining multiple prices */
  aggregationStrategy?: InputMaybe<PricingAggregationStrategy>;
  /** Target hierarchy level for pricing calculation */
  targetLevel?: InputMaybe<PricingHierarchyLevel>;
};

/** Input type used to update pricing groups. */
export type UpdatePricingGroupInput = {
  /** Description of the pricing group */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The name of the pricing group */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Input type used to update pricing rule constraints. */
export type UpdatePricingRuleConstraintInput = {
  /** The scope */
  scope?: InputMaybe<PricingHierarchyLevel>;
  /** Scope group UUIDs */
  scopeGroupUuids?: InputMaybe<Array<Scalars['UUID']['input']>>;
  /** Specific scope UUID */
  scopeUuid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Input type used to update pricing rules. */
export type UpdatePricingRuleInput = {
  /** The app UUID */
  appUuid?: InputMaybe<Scalars['UUID']['input']>;
  /**
   * Pricing conditions
   *
   * Eg:
   * ```
   * {
   *   "country": "NL",
   *   "usageRange": "0-100",
   *   "logicalKey": "cred.default"
   * }
   * ```
   */
  conditions?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The pricing layer */
  layer?: InputMaybe<PricingLayer>;
  /** The organization UUID (optional, for ORGANIZATION layer) */
  organizationUuid?: InputMaybe<Scalars['UUID']['input']>;
  /** The plan UUID (optional, for PLAN layer) */
  planUuid?: InputMaybe<Scalars['UUID']['input']>;
  /** The pricing catalog UUID */
  pricingCatalogUuid?: InputMaybe<Scalars['UUID']['input']>;
  /** The pricing type */
  type?: InputMaybe<PricingType>;
};

/** Input type used to update pricing rule targets. */
export type UpdatePricingRuleTargetInput = {
  /** The hierarchy level */
  level?: InputMaybe<PricingHierarchyLevel>;
  /** Entity group UUIDs */
  levelGroupUuids?: InputMaybe<Array<Scalars['UUID']['input']>>;
  /** Specific entity UUID */
  levelUuid?: InputMaybe<Scalars['UUID']['input']>;
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
  /** The spec type supported by this app */
  specType?: InputMaybe<ProviderAppMetaOid4VcSpecType>;
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

/** Update input */
export type UpdateSignatureBrandInput = {
  /** Sets flow brand as default */
  isDefault: Scalars['Boolean']['input'];
};

/** Update Input */
export type UpdateSignatureDomainInput = {
  /** The path value. */
  redirectPath?: InputMaybe<Scalars['RedirectPath']['input']>;
  /** The port value. */
  redirectPort?: InputMaybe<Scalars['RedirectPort']['input']>;
  /** The protocol value. */
  redirectProtocol?: InputMaybe<Scalars['RedirectProtocol']['input']>;
};

/** Update Input */
export type UpdateSignatureGroupInput = {
  /** The name of the flow group. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateSignatureInput = {
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
export type UpdateSignatureProviderConfigurationNlWalletInput = {
  /** The usecase */
  usecase?: InputMaybe<Scalars['String']['input']>;
};

/** Update Input */
export type UpdateSignatureProviderInput = {
  /** Whether this provider is marked as recommended in this flow. */
  recommended: Scalars['Boolean']['input'];
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
  /** The first name of the user. */
  firstName?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The grant classification of the user. */
  grant?: InputMaybe<Scalars['Grant']['input']>;
  /** The last name of the user. */
  lastName?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The OAuth role of the user. */
  role?: InputMaybe<OrganizationUserRole>;
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

export type UseUserResetInput = {
  /** The new password of the user. */
  password: Scalars['Password']['input'];
  /** The confirmed password of the user. */
  passwordConfirmation: Scalars['Password']['input'];
  /** The password reset token which is used to authorize the user. */
  token: Scalars['NonEmpty']['input'];
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
  /** The grant classification of the user. */
  grant: Scalars['Grant']['output'];
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
  /** The expiration time of the invitation */
  expiresAt: Scalars['DateTime']['output'];
  /** The first name of the user. */
  firstName: Scalars['NonEmpty']['output'];
  /** The grant classification of the user. */
  grant: Scalars['Grant']['output'];
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

/** A response to a successful login or registration. */
export type UserToken = {
  __typename?: 'UserToken';
  /** The login response token. */
  token: Scalars['NonEmpty']['output'];
};

export type ValidateUserInvitationInput = {
  /** The user invitation token */
  token: Scalars['NonEmpty']['input'];
};

export type ValidateUserInvitationTokenInput = {
  /** The invitation token which is used to authorize the user. */
  token: Scalars['NonEmpty']['input'];
};

export type ValidateUserResetInput = {
  /** The password reset token which is used to authorize the user. */
  token: Scalars['NonEmpty']['input'];
};
