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
  NACECode: { input: unknown; output: unknown; }
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
export type ActionCredentialRecordInput = {
  /** The action */
  action: CredentialRecordAction;
  /**
   * When true and the record belongs to a batch, apply the action to all
   * eligible records in the batch. Defaults to false.
   */
  applyToBatch?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optional reason for the action. */
  reason?: InputMaybe<Scalars['String']['input']>;
};

/** ActionDisclosureInput */
export type ActionDisclosureInput = {
  /** The action */
  action: DisclosureAction;
};

/** Action Input */
export type ActionHandlerInput = {
  /** The action */
  action: Action;
};

/** Action Input */
export type ActionIssuanceInput = {
  /** The action */
  action: IssuanceAction;
};

/** Action Input */
export type ActionIssuanceRunInput = {
  /** The action */
  action: IssuanceRunAction;
  /** Optional reason for the action. */
  reason?: InputMaybe<Scalars['String']['input']>;
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

/** Cryptographic algorithm types for trust issuer keys. */
export enum Algorithm {
  DidEth = 'DID_ETH',
  EcP256 = 'EC_P256',
  EcP384 = 'EC_P384',
  Idemix = 'IDEMIX'
}

/** Trust verification anchor types. */
export enum Anchor {
  Did = 'DID',
  Idemix = 'IDEMIX',
  None = 'NONE',
  X509 = 'X509'
}

/** App definition. */
export type App = Model & {
  __typename?: 'App';
  /** The collection of trust apps */
  appTrusts: TrustAppConnection;
  /** The base64Logo of the app. */
  base64Logo: Scalars['NonEmpty']['output'];
  /**
   * Primary operating regions as ISO 3166-1 alpha-2 country codes.
   * Most apps can also be used outside these regions.
   */
  countries: Array<Scalars['ISO3166']['output']>;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The collection of handler apps */
  handlerApps: HandlerAppConnection;
  /** The collection of locale */
  locales: AppLocaleConnection;
  /** The maturity level */
  maturity: Maturity;
  /** The name */
  name: Scalars['NonEmpty']['output'];
  /** The state */
  state: State;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** App definition. */
export type AppAppTrustsArgs = {
  input?: InputMaybe<FindManyTrustAppsInput>;
};


/** App definition. */
export type AppHandlerAppsArgs = {
  input?: InputMaybe<FindManyHandlerAppsInput>;
};


/** App definition. */
export type AppLocalesArgs = {
  input?: InputMaybe<FindManyAppLocalesInput>;
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
  Maturity = 'maturity',
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
  /** The description */
  description?: Maybe<Scalars['String']['output']>;
  /** The locale */
  locale: Scalars['Locale']['output'];
  /** The name */
  name: Scalars['NonEmpty']['output'];
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

/** Fields which can be used to sort app on. Value must be camel case. */
export enum AppSortEnum {
  CreatedAt = 'createdAt',
  Maturity = 'maturity',
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
  /** The categories. */
  categories: Array<CategoryType>;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential this attribute belongs to. */
  credential: Credential;
  /** The Datakeeper format configuration. */
  formatDatakeeper?: Maybe<AttributeFormatDatakeeper>;
  /** The Digidentity format configuration. */
  formatDigidentity?: Maybe<AttributeFormatDigidentity>;
  /** The MSO MDOC format configuration. */
  formatMsoMdoc?: Maybe<AttributeFormatMsoMdoc>;
  /** The Nect format configuration. */
  formatNect?: Maybe<AttributeFormatNect>;
  /** The NL Wallet format configuration. */
  formatNlWallet?: Maybe<AttributeFormatNlWallet>;
  /** The ReadID format configuration. */
  formatReadid?: Maybe<AttributeFormatReadid>;
  /** The SD-JWT format configuration. */
  formatSdJwt?: Maybe<AttributeFormatSdJwt>;
  /** The Yivi format configuration. */
  formatYivi?: Maybe<AttributeFormatYivi>;
  /** The Yoti format configuration. */
  formatYoti?: Maybe<AttributeFormatYoti>;
  /** The collection of locales. */
  locales: AttributeLocaleConnection;
  /** The name of the attribute. */
  name: Scalars['NonEmpty']['output'];
  /** The collection of scope resources. */
  scopeResources: ScopeResourceConnection;
  /** The sort order. */
  sortOrder: Scalars['Int']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** Attribute definition. */
export type AttributeLocalesArgs = {
  input?: InputMaybe<FindManyAttributeLocalesInput>;
};


/** Attribute definition. */
export type AttributeScopeResourcesArgs = {
  input?: InputMaybe<FindManyScopeResourcesInput>;
};

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
  Name = 'name',
  Uuid = 'uuid'
}

/** Attribute format Datakeeper definition. */
export type AttributeFormatDatakeeper = Model & {
  __typename?: 'AttributeFormatDatakeeper';
  /** The attribute this format configuration belongs to. */
  attribute: Attribute;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The predicate. */
  predicate: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The attribute format Datakeeper connection definition. */
export type AttributeFormatDatakeeperConnection = {
  __typename?: 'AttributeFormatDatakeeperConnection';
  edges: Array<Maybe<AttributeFormatDatakeeperEdge>>;
  pageInfo: PageInfo;
};

/** The attribute format Datakeeper edge definition. */
export type AttributeFormatDatakeeperEdge = {
  __typename?: 'AttributeFormatDatakeeperEdge';
  cursor: Scalars['String']['output'];
  node: AttributeFormatDatakeeper;
};

/** Fields which can be used to filter attribute format Datakeeper on. Value must be camel case. */
export enum AttributeFormatDatakeeperFilteringField {
  AttributeUuid = 'attributeUuid',
  CreatedAt = 'createdAt'
}

/** Fields which can be used to sort attribute format Datakeeper on. Value must be camel case. */
export enum AttributeFormatDatakeeperSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute format Datakeeper. */
export type AttributeFormatDatakeeperSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeFormatDatakeeperSortEnum;
};

/** Attribute format Digidentity definition. */
export type AttributeFormatDigidentity = Model & {
  __typename?: 'AttributeFormatDigidentity';
  /** The attribute this format configuration belongs to. */
  attribute: Attribute;
  /** The claim. */
  claim: Scalars['NonEmpty']['output'];
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The attribute format Digidentity connection definition. */
export type AttributeFormatDigidentityConnection = {
  __typename?: 'AttributeFormatDigidentityConnection';
  edges: Array<Maybe<AttributeFormatDigidentityEdge>>;
  pageInfo: PageInfo;
};

/** The attribute format Digidentity edge definition. */
export type AttributeFormatDigidentityEdge = {
  __typename?: 'AttributeFormatDigidentityEdge';
  cursor: Scalars['String']['output'];
  node: AttributeFormatDigidentity;
};

/** Fields which can be used to filter attribute format Digidentity on. Value must be camel case. */
export enum AttributeFormatDigidentityFilteringField {
  AttributeUuid = 'attributeUuid',
  CreatedAt = 'createdAt'
}

/** Fields which can be used to sort attribute format Digidentity on. Value must be camel case. */
export enum AttributeFormatDigidentitySortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute format Digidentity. */
export type AttributeFormatDigidentitySortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeFormatDigidentitySortEnum;
};

/** Attribute format MSO MDOC definition. */
export type AttributeFormatMsoMdoc = Model & {
  __typename?: 'AttributeFormatMsoMdoc';
  /** The attribute this format configuration belongs to. */
  attribute: Attribute;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The data element identifier. */
  dataElementIdentifier: Scalars['NonEmpty']['output'];
  /** The namespace. */
  namespace: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The attribute format MSO MDOC connection definition. */
export type AttributeFormatMsoMdocConnection = {
  __typename?: 'AttributeFormatMsoMdocConnection';
  edges: Array<Maybe<AttributeFormatMsoMdocEdge>>;
  pageInfo: PageInfo;
};

/** The attribute format MSO MDOC edge definition. */
export type AttributeFormatMsoMdocEdge = {
  __typename?: 'AttributeFormatMsoMdocEdge';
  cursor: Scalars['String']['output'];
  node: AttributeFormatMsoMdoc;
};

/** Fields which can be used to filter attribute format MSO MDOC on. Value must be camel case. */
export enum AttributeFormatMsoMdocFilteringField {
  AttributeUuid = 'attributeUuid',
  CreatedAt = 'createdAt'
}

/** Fields which can be used to sort attribute format MSO MDOC on. Value must be camel case. */
export enum AttributeFormatMsoMdocSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute format MSO MDOC. */
export type AttributeFormatMsoMdocSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeFormatMsoMdocSortEnum;
};

/** Attribute format Nect definition. */
export type AttributeFormatNect = Model & {
  __typename?: 'AttributeFormatNect';
  /** The attribute this format configuration belongs to. */
  attribute: Attribute;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The field. */
  field: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The attribute format Nect connection definition. */
export type AttributeFormatNectConnection = {
  __typename?: 'AttributeFormatNectConnection';
  edges: Array<Maybe<AttributeFormatNectEdge>>;
  pageInfo: PageInfo;
};

/** The attribute format Nect edge definition. */
export type AttributeFormatNectEdge = {
  __typename?: 'AttributeFormatNectEdge';
  cursor: Scalars['String']['output'];
  node: AttributeFormatNect;
};

/** Fields which can be used to filter attribute format Nect on. Value must be camel case. */
export enum AttributeFormatNectFilteringField {
  AttributeUuid = 'attributeUuid',
  CreatedAt = 'createdAt'
}

/** Fields which can be used to sort attribute format Nect on. Value must be camel case. */
export enum AttributeFormatNectSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute format Nect. */
export type AttributeFormatNectSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeFormatNectSortEnum;
};

/** Attribute format NL Wallet definition. */
export type AttributeFormatNlWallet = Model & {
  __typename?: 'AttributeFormatNlWallet';
  /** The attribute this format configuration belongs to. */
  attribute: Attribute;
  /** The claim path. */
  claimPath: Scalars['JSONObject']['output'];
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The attribute format NL Wallet connection definition. */
export type AttributeFormatNlWalletConnection = {
  __typename?: 'AttributeFormatNlWalletConnection';
  edges: Array<Maybe<AttributeFormatNlWalletEdge>>;
  pageInfo: PageInfo;
};

/** The attribute format NL Wallet edge definition. */
export type AttributeFormatNlWalletEdge = {
  __typename?: 'AttributeFormatNlWalletEdge';
  cursor: Scalars['String']['output'];
  node: AttributeFormatNlWallet;
};

/** Fields which can be used to filter attribute format NL Wallet on. Value must be camel case. */
export enum AttributeFormatNlWalletFilteringField {
  AttributeUuid = 'attributeUuid',
  CreatedAt = 'createdAt'
}

/** Fields which can be used to sort attribute format NL Wallet on. Value must be camel case. */
export enum AttributeFormatNlWalletSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute format NL Wallet. */
export type AttributeFormatNlWalletSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeFormatNlWalletSortEnum;
};

/** Attribute format ReadID definition. */
export type AttributeFormatReadid = Model & {
  __typename?: 'AttributeFormatReadid';
  /** The attribute this format configuration belongs to. */
  attribute: Attribute;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The field. */
  field: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The attribute format ReadID connection definition. */
export type AttributeFormatReadidConnection = {
  __typename?: 'AttributeFormatReadidConnection';
  edges: Array<Maybe<AttributeFormatReadidEdge>>;
  pageInfo: PageInfo;
};

/** The attribute format ReadID edge definition. */
export type AttributeFormatReadidEdge = {
  __typename?: 'AttributeFormatReadidEdge';
  cursor: Scalars['String']['output'];
  node: AttributeFormatReadid;
};

/** Fields which can be used to filter attribute format ReadID on. Value must be camel case. */
export enum AttributeFormatReadidFilteringField {
  AttributeUuid = 'attributeUuid',
  CreatedAt = 'createdAt'
}

/** Fields which can be used to sort attribute format ReadID on. Value must be camel case. */
export enum AttributeFormatReadidSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute format ReadID. */
export type AttributeFormatReadidSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeFormatReadidSortEnum;
};

/** Attribute format SD-JWT definition. */
export type AttributeFormatSdJwt = Model & {
  __typename?: 'AttributeFormatSdJwt';
  /** The attribute this format configuration belongs to. */
  attribute: Attribute;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** Whether the attribute is mandatory. */
  mandatory: Scalars['Boolean']['output'];
  /** The path. */
  path: Scalars['JSONObject']['output'];
  /** The selective disclosure. */
  sd: SelectiveDisclosure;
  /** The SVG identifier. */
  svgId?: Maybe<Scalars['String']['output']>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The attribute format SD-JWT connection definition. */
export type AttributeFormatSdJwtConnection = {
  __typename?: 'AttributeFormatSdJwtConnection';
  edges: Array<Maybe<AttributeFormatSdJwtEdge>>;
  pageInfo: PageInfo;
};

/** The attribute format SD-JWT edge definition. */
export type AttributeFormatSdJwtEdge = {
  __typename?: 'AttributeFormatSdJwtEdge';
  cursor: Scalars['String']['output'];
  node: AttributeFormatSdJwt;
};

/** Fields which can be used to filter attribute format SD-JWT on. Value must be camel case. */
export enum AttributeFormatSdJwtFilteringField {
  AttributeUuid = 'attributeUuid',
  CreatedAt = 'createdAt'
}

/** Fields which can be used to sort attribute format SD-JWT on. Value must be camel case. */
export enum AttributeFormatSdJwtSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute format SD-JWT. */
export type AttributeFormatSdJwtSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeFormatSdJwtSortEnum;
};

/** Attribute format Yivi definition. */
export type AttributeFormatYivi = Model & {
  __typename?: 'AttributeFormatYivi';
  /** The attribute this format configuration belongs to. */
  attribute: Attribute;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The Yivi identifier. */
  id: Scalars['NonEmpty']['output'];
  /** Whether the attribute is optional. */
  optional: Scalars['Boolean']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The attribute format Yivi connection definition. */
export type AttributeFormatYiviConnection = {
  __typename?: 'AttributeFormatYiviConnection';
  edges: Array<Maybe<AttributeFormatYiviEdge>>;
  pageInfo: PageInfo;
};

/** The attribute format Yivi edge definition. */
export type AttributeFormatYiviEdge = {
  __typename?: 'AttributeFormatYiviEdge';
  cursor: Scalars['String']['output'];
  node: AttributeFormatYivi;
};

/** Fields which can be used to filter attribute format Yivi on. Value must be camel case. */
export enum AttributeFormatYiviFilteringField {
  AttributeUuid = 'attributeUuid',
  CreatedAt = 'createdAt'
}

/** Fields which can be used to sort attribute format Yivi on. Value must be camel case. */
export enum AttributeFormatYiviSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute format Yivi. */
export type AttributeFormatYiviSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeFormatYiviSortEnum;
};

/** Attribute format Yoti definition. */
export type AttributeFormatYoti = Model & {
  __typename?: 'AttributeFormatYoti';
  /** The attribute this format configuration belongs to. */
  attribute: Attribute;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The name. */
  name: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The attribute format Yoti connection definition. */
export type AttributeFormatYotiConnection = {
  __typename?: 'AttributeFormatYotiConnection';
  edges: Array<Maybe<AttributeFormatYotiEdge>>;
  pageInfo: PageInfo;
};

/** The attribute format Yoti edge definition. */
export type AttributeFormatYotiEdge = {
  __typename?: 'AttributeFormatYotiEdge';
  cursor: Scalars['String']['output'];
  node: AttributeFormatYoti;
};

/** Fields which can be used to filter attribute format Yoti on. Value must be camel case. */
export enum AttributeFormatYotiFilteringField {
  AttributeUuid = 'attributeUuid',
  CreatedAt = 'createdAt'
}

/** Fields which can be used to sort attribute format Yoti on. Value must be camel case. */
export enum AttributeFormatYotiSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting attribute format Yoti. */
export type AttributeFormatYotiSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AttributeFormatYotiSortEnum;
};

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
  /** The attribute this locale belongs to. */
  attribute: Attribute;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The localized description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The localized label. */
  label: Scalars['NonEmpty']['output'];
  /** The locale. */
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

/** Fields which can be used to sort attribute on. Value must be camel case. */
export enum AttributeSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  SortOrder = 'sortOrder'
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
  /** A list of flow providers belonging to this flow authentication. */
  authenticationHandlers: AuthenticationHandlerConnection;
  /** The associated labels with this authentication */
  authenticationLabels: AuthenticationLabelConnection;
  /** The associated secrets with this authentication */
  authenticationSecrets: AuthenticationSecretConnection;
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The data deletion policy. */
  deletionPolicy?: Maybe<Scalars['String']['output']>;
  /** The name of the flow. */
  name: Scalars['NonEmpty']['output'];
  /** The organization the flow belongs to. */
  organization: Organization;
  /** The active provisioning task, if the flow is currently being provisioned. */
  provisioningTask?: Maybe<ProvisioningTask>;
  /** The purpose statement describing why attributes are being attested. */
  purposeStatement?: Maybe<Scalars['String']['output']>;
  /** The data retention policy. */
  retentionPolicy?: Maybe<Scalars['String']['output']>;
  /** The data sharing policy. */
  sharingPolicy?: Maybe<Scalars['String']['output']>;
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
export type AuthenticationAuthenticationHandlersArgs = {
  input?: InputMaybe<FindManyAuthenticationHandlersInput>;
};


/** Flow authentication definition. */
export type AuthenticationAuthenticationLabelsArgs = {
  input?: InputMaybe<FindManyAuthenticationLabelsInput>;
};


/** Flow authentication definition. */
export type AuthenticationAuthenticationSecretsArgs = {
  input?: InputMaybe<FindManyAuthenticationSecretsInput>;
};

/** AuthenticationAction */
export enum AuthenticationAction {
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

/** Flow authentication handler definition. */
export type AuthenticationHandler = Model & {
  __typename?: 'AuthenticationHandler';
  /** The flow authentication the handler belongs to. */
  authentication: Authentication;
  /** A list of flow queries belonging to this handler. */
  authenticationScopes: AuthenticationScopeConnection;
  /** The flow authentication handler configuration. */
  configuration?: Maybe<AuthenticationHandlerConfiguration>;
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The handler app the handlerAppUuid belongs to. */
  handlerApp: HandlerApp;
  /** The uuid of the handler app. */
  handlerAppUuid: Scalars['UUID']['output'];
  /** Whether this handler is marked as recommended in this flow. */
  recommended: Scalars['Boolean']['output'];
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Flow authentication handler definition. */
export type AuthenticationHandlerAuthenticationScopesArgs = {
  input?: InputMaybe<FindManyAuthenticationScopesInput>;
};

/** Flow authentication handler configuration definition */
export type AuthenticationHandlerConfiguration = Model & {
  __typename?: 'AuthenticationHandlerConfiguration';
  /** The AuthenticationHandler this configuration belongs to */
  authenticationHandler: AuthenticationHandler;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The NL Wallet flow authentication handler configuration */
  nlWallet?: Maybe<AuthenticationHandlerConfigurationNlWallet>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The AuthenticationHandlerConfiguration connection definition. */
export type AuthenticationHandlerConfigurationConnection = {
  __typename?: 'AuthenticationHandlerConfigurationConnection';
  edges: Array<Maybe<AuthenticationHandlerConfigurationEdge>>;
  pageInfo: PageInfo;
};

/** The AuthenticationHandlerConfiguration edge definition. */
export type AuthenticationHandlerConfigurationEdge = {
  __typename?: 'AuthenticationHandlerConfigurationEdge';
  cursor: Scalars['String']['output'];
  node: AuthenticationHandlerConfiguration;
};

/** Fields which can be used to filter AuthenticationHandlerConfiguration on. Value must be camel case. */
export enum AuthenticationHandlerConfigurationFilteringField {
  AuthenticationHandlerUuid = 'authenticationHandlerUuid'
}

/** AuthenticationHandlerConfigurationNLWallet definition */
export type AuthenticationHandlerConfigurationNlWallet = Model & {
  __typename?: 'AuthenticationHandlerConfigurationNLWallet';
  /** The AuthenticationHandlerConfiguration this object belongs to. */
  authenticationHandlerConfiguration: AuthenticationHandlerConfiguration;
  /** The creation timestamp */
  createdAt: Scalars['DateTime']['output'];
  /** Whether the user can request deletion of their retained data. */
  deletable: Scalars['Boolean']['output'];
  /** Whether the organization intends to retain the disclosed data. */
  intentToRetain: Scalars['Boolean']['output'];
  /** Whether the organization intends to share the disclosed data with third parties. */
  intentToShare: Scalars['Boolean']['output'];
  /** Maximum retention duration in minutes. Leave empty for no maximum. */
  maxRetentionDuration?: Maybe<Scalars['Int']['output']>;
  /** Purpose statement */
  purposeStatement: Scalars['JSONObject']['output'];
  /** The timestamp of when the type has been last updated */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The AuthenticationHandlerConfigurationNLWallet connection definition. */
export type AuthenticationHandlerConfigurationNlWalletConnection = {
  __typename?: 'AuthenticationHandlerConfigurationNLWalletConnection';
  edges: Array<Maybe<AuthenticationHandlerConfigurationNlWalletEdge>>;
  pageInfo: PageInfo;
};

/** The AuthenticationHandlerConfigurationNLWallet edge definition. */
export type AuthenticationHandlerConfigurationNlWalletEdge = {
  __typename?: 'AuthenticationHandlerConfigurationNLWalletEdge';
  cursor: Scalars['String']['output'];
  node: AuthenticationHandlerConfigurationNlWallet;
};

/** Fields which can be used to filter AuthenticationHandlerConfigurationNLWallet on. Value must be camel case. */
export enum AuthenticationHandlerConfigurationNlWalletFilteringField {
  AuthenticationHandlerConfigurationUuid = 'authenticationHandlerConfigurationUuid',
  Intent = 'intent'
}

/** Fields which can be used to sort AuthenticationHandlerConfigurationNLWallet on. Value must be camel case. */
export enum AuthenticationHandlerConfigurationNlWalletSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting AuthenticationHandlerConfigurationNLWallet. */
export type AuthenticationHandlerConfigurationNlWalletSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AuthenticationHandlerConfigurationNlWalletSortEnum;
};

/** Fields which can be used to sort AuthenticationHandlerConfiguration on. Value must be camel case. */
export enum AuthenticationHandlerConfigurationSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting AuthenticationHandlerConfiguration. */
export type AuthenticationHandlerConfigurationSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AuthenticationHandlerConfigurationSortEnum;
};

/** The flow authentication handler connection definition. */
export type AuthenticationHandlerConnection = {
  __typename?: 'AuthenticationHandlerConnection';
  edges: Array<AuthenticationHandlerEdge>;
  pageInfo: PageInfo;
};

/** The flow authentication handler edge definition. */
export type AuthenticationHandlerEdge = {
  __typename?: 'AuthenticationHandlerEdge';
  cursor: Scalars['String']['output'];
  node: AuthenticationHandler;
};

/** Fields which can be used to filter flow authentication handlers on. Value must be camel case. */
export enum AuthenticationHandlerFilteringField {
  AuthenticationUuid = 'authenticationUuid',
  HandlerAppUuid = 'handlerAppUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow authentication handlers on. Value must be camel case. */
export enum AuthenticationHandlerSortEnum {
  CreatedAt = 'createdAt',
  HandlerAppUuid = 'handlerAppUuid',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow authentication handlers. */
export type AuthenticationHandlerSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AuthenticationHandlerSortEnum;
};

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

/** Flow authentication scope definition. */
export type AuthenticationScope = Model & {
  __typename?: 'AuthenticationScope';
  /** The flow authentication the flow scope belongs to. */
  authenticationHandler: AuthenticationHandler;
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
  AuthenticationHandlerUuid = 'authenticationHandlerUuid',
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

/** Authentication secret definition. Links an organization secret to an authentication flow. */
export type AuthenticationSecret = Model & {
  __typename?: 'AuthenticationSecret';
  /** The flow authentication */
  authentication: Authentication;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The organization secret */
  organizationSecret: OrganizationSecret;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** A connection */
export type AuthenticationSecretConnection = {
  __typename?: 'AuthenticationSecretConnection';
  edges: Array<AuthenticationSecretEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type AuthenticationSecretEdge = {
  __typename?: 'AuthenticationSecretEdge';
  cursor: Scalars['String']['output'];
  node: AuthenticationSecret;
};

/** Fields which can be used to filter authentication secrets on. Value must be camel case. */
export enum AuthenticationSecretFilteringField {
  AuthenticationUuid = 'authenticationUuid',
  OrganizationSecretUuid = 'organizationSecretUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort authentication secrets on. Value must be camel case. */
export enum AuthenticationSecretSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting authentication secrets. */
export type AuthenticationSecretSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: AuthenticationSecretSortEnum;
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
  Inactive = 'INACTIVE',
  Provisioning = 'PROVISIONING'
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

/**
 * BillingFlowAppCostOverview definition - aggregated flow cost grouped by flow and
 * handler app over a time window. It powers the per-flow detail view: scope it to a
 * single flow with the `flowUuid` filter to see that flow's cost broken down per
 * handler app. Each node represents a single (flow, handler app) combination with
 * the summed cost and revenue of all of its executions inside the requested window.
 */
export type BillingFlowAppCostOverview = {
  __typename?: 'BillingFlowAppCostOverview';
  /** The authentication flow these costs belong to (only set when flowType is AUTHENTICATION) */
  authentication?: Maybe<Authentication>;
  /** The disclosure flow these costs belong to (only set when flowType is DISCLOSURE) */
  disclosure?: Maybe<Disclosure>;
  /** Number of flow executions aggregated in the window */
  flowCount: Scalars['Int']['output'];
  /** Flow Type */
  flowType: FlowType;
  /** Flow UUID the costs are aggregated for */
  flowUuid: Scalars['UUID']['output'];
  /** The handler app that handled these flow executions */
  handlerApp?: Maybe<HandlerApp>;
  /** Handler app UUID the costs are aggregated for (the app that handled the flow) */
  handlerAppUuid?: Maybe<Scalars['UUID']['output']>;
  /** The issuance flow these costs belong to (only set when flowType is ISSUANCE) */
  issuance?: Maybe<Issuance>;
  /** Timestamp of the most recent flow execution in the window */
  lastActivityAt: Scalars['DateTime']['output'];
  /** The signature flow these costs belong to (only set when flowType is SIGNATURE) */
  signature?: Maybe<Signature>;
  /** Total cost of all flow executions in the window (in the wallet currency unit) */
  totalCost: Scalars['Int']['output'];
  /** Total revenue of all flow executions in the window (in the wallet currency unit) */
  totalRevenue: Scalars['Int']['output'];
};

export type BillingFlowAppCostOverviewConnection = {
  __typename?: 'BillingFlowAppCostOverviewConnection';
  edges: Array<BillingFlowAppCostOverviewEdge>;
  pageInfo: PageInfo;
};

export type BillingFlowAppCostOverviewEdge = {
  __typename?: 'BillingFlowAppCostOverviewEdge';
  cursor: Scalars['String']['output'];
  node: BillingFlowAppCostOverview;
};

/** Fields which can be used to filter billing flow app cost overviews on. Value must be camel case. */
export enum BillingFlowAppCostOverviewFilteringField {
  BillingWalletUuid = 'billingWalletUuid',
  FlowType = 'flowType',
  FlowUuid = 'flowUuid'
}

/** Fields which can be used to sort billing flow app cost overviews on. Value must be camel case. */
export enum BillingFlowAppCostOverviewSortEnum {
  FlowCount = 'flowCount',
  LastActivityAt = 'lastActivityAt',
  TotalCost = 'totalCost',
  TotalRevenue = 'totalRevenue'
}

/** Input options for sorting billing flow app cost overviews. */
export type BillingFlowAppCostOverviewSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: BillingFlowAppCostOverviewSortEnum;
};

/**
 * BillingFlowCostOverview definition - aggregated flow cost grouped by flow over a time window.
 * Each node represents a single flow (by flowUuid) with the summed cost and revenue of all
 * of its executions inside the requested window.
 */
export type BillingFlowCostOverview = {
  __typename?: 'BillingFlowCostOverview';
  /** The authentication flow these costs belong to (only set when flowType is AUTHENTICATION) */
  authentication?: Maybe<Authentication>;
  /** The disclosure flow these costs belong to (only set when flowType is DISCLOSURE) */
  disclosure?: Maybe<Disclosure>;
  /** Number of flow executions aggregated in the window */
  flowCount: Scalars['Int']['output'];
  /** Flow Type */
  flowType: FlowType;
  /** Flow UUID the costs are aggregated for */
  flowUuid: Scalars['UUID']['output'];
  /** The issuance flow these costs belong to (only set when flowType is ISSUANCE) */
  issuance?: Maybe<Issuance>;
  /** Timestamp of the most recent flow execution in the window */
  lastActivityAt: Scalars['DateTime']['output'];
  /** The signature flow these costs belong to (only set when flowType is SIGNATURE) */
  signature?: Maybe<Signature>;
  /** Total cost of all flow executions in the window (in the wallet currency unit) */
  totalCost: Scalars['Int']['output'];
  /** Total revenue of all flow executions in the window (in the wallet currency unit) */
  totalRevenue: Scalars['Int']['output'];
};

export type BillingFlowCostOverviewConnection = {
  __typename?: 'BillingFlowCostOverviewConnection';
  edges: Array<BillingFlowCostOverviewEdge>;
  pageInfo: PageInfo;
};

export type BillingFlowCostOverviewEdge = {
  __typename?: 'BillingFlowCostOverviewEdge';
  cursor: Scalars['String']['output'];
  node: BillingFlowCostOverview;
};

/** Fields which can be used to filter billing flow cost overviews on. Value must be camel case. */
export enum BillingFlowCostOverviewFilteringField {
  BillingWalletUuid = 'billingWalletUuid',
  FlowType = 'flowType'
}

/** Fields which can be used to sort billing flow cost overviews on. Value must be camel case. */
export enum BillingFlowCostOverviewSortEnum {
  FlowCount = 'flowCount',
  LastActivityAt = 'lastActivityAt',
  TotalCost = 'totalCost',
  TotalRevenue = 'totalRevenue'
}

/** Input options for sorting billing flow cost overviews. */
export type BillingFlowCostOverviewSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: BillingFlowCostOverviewSortEnum;
};

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
  /** Handler App UUID */
  handlerAppUuid: Scalars['UUID']['output'];
  /** Handler UUID */
  handlerUuid: Scalars['UUID']['output'];
  /** Issuer UUID */
  issuerUuid: Scalars['UUID']['output'];
  /** Trust UUID */
  trustUuid: Scalars['UUID']['output'];
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
  HandlerAppUuid = 'handlerAppUuid',
  HandlerUuid = 'handlerUuid',
  IssuerUuid = 'issuerUuid',
  TrustUuid = 'trustUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort billing wallet transaction meta flow attributes on. Value must be camel case. */
export enum BillingWalletTransactionMetaFlowAttributeSortEnum {
  AttributeUuid = 'attributeUuid',
  BillingWalletTransactionMetaFlowUuid = 'billingWalletTransactionMetaFlowUuid',
  CreatedAt = 'createdAt',
  CredentialUuid = 'credentialUuid',
  HandlerAppUuid = 'handlerAppUuid',
  HandlerUuid = 'handlerUuid',
  IssuerUuid = 'issuerUuid',
  TrustUuid = 'trustUuid',
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
  Handler = 'HANDLER',
  Issuer = 'ISSUER',
  Scope = 'SCOPE',
  Trust = 'TRUST'
}

/** Category types for entity classification. */
export enum CategoryType {
  Development = 'DEVELOPMENT',
  Production = 'PRODUCTION',
  Protected = 'PROTECTED',
  Test = 'TEST'
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

/** The input for creating an app. */
export type CreateAppInput = {
  /** The base64Logo of the app. */
  base64Logo: Scalars['NonEmpty']['input'];
  /**
   * Primary operating regions as ISO 3166-1 alpha-2 country codes.
   * Most apps can also be used outside these regions.
   */
  countries?: InputMaybe<Array<Scalars['ISO3166']['input']>>;
  /** The maturity level of the app. */
  maturity?: InputMaybe<Maturity>;
  /** The name of the app. */
  name: Scalars['NonEmpty']['input'];
};

/** The input for creating an app locale. */
export type CreateAppLocaleInput = {
  /** The uuid of the app. */
  appUuid: Scalars['UUID']['input'];
  /** The description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The locale */
  locale: Scalars['Locale']['input'];
  /** The name */
  name: Scalars['NonEmpty']['input'];
};

/** The input for creating an attribute format Datakeeper. */
export type CreateAttributeFormatDatakeeperInput = {
  /** The UUID of the attribute. */
  attributeUuid: Scalars['UUID']['input'];
  /** The predicate. */
  predicate: Scalars['NonEmpty']['input'];
};

/** The input for creating an attribute format Digidentity. */
export type CreateAttributeFormatDigidentityInput = {
  /** The UUID of the attribute. */
  attributeUuid: Scalars['UUID']['input'];
  /** The claim. */
  claim: Scalars['NonEmpty']['input'];
};

/** The input for creating an attribute format MSO MDOC. */
export type CreateAttributeFormatMsoMdocInput = {
  /** The UUID of the attribute. */
  attributeUuid: Scalars['UUID']['input'];
  /** The data element identifier. */
  dataElementIdentifier: Scalars['NonEmpty']['input'];
  /** The namespace. */
  namespace: Scalars['NonEmpty']['input'];
};

/** The input for creating an attribute format Nect. */
export type CreateAttributeFormatNectInput = {
  /** The UUID of the attribute. */
  attributeUuid: Scalars['UUID']['input'];
  /** The field. */
  field: Scalars['NonEmpty']['input'];
};

/** The input for creating an attribute format NL Wallet. */
export type CreateAttributeFormatNlWalletInput = {
  /** The UUID of the attribute. */
  attributeUuid: Scalars['UUID']['input'];
  /** The claim path. */
  claimPath: Scalars['JSONObject']['input'];
};

/** The input for creating an attribute format ReadID. */
export type CreateAttributeFormatReadidInput = {
  /** The UUID of the attribute. */
  attributeUuid: Scalars['UUID']['input'];
  /** The field. */
  field: Scalars['NonEmpty']['input'];
};

/** The input for creating an attribute format SD-JWT. */
export type CreateAttributeFormatSdJwtInput = {
  /** The UUID of the attribute. */
  attributeUuid: Scalars['UUID']['input'];
  /** Whether the attribute is mandatory. */
  mandatory?: InputMaybe<Scalars['Boolean']['input']>;
  /** The path. */
  path: Scalars['JSONObject']['input'];
  /** The selective disclosure. */
  sd?: InputMaybe<SelectiveDisclosure>;
  /** The SVG identifier. */
  svgId?: InputMaybe<Scalars['String']['input']>;
};

/** The input for creating an attribute format Yivi. */
export type CreateAttributeFormatYiviInput = {
  /** The UUID of the attribute. */
  attributeUuid: Scalars['UUID']['input'];
  /** The Yivi identifier. */
  id: Scalars['NonEmpty']['input'];
  /** Whether the attribute is optional. */
  optional?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The input for creating an attribute format Yoti. */
export type CreateAttributeFormatYotiInput = {
  /** The UUID of the attribute. */
  attributeUuid: Scalars['UUID']['input'];
  /** The name. */
  name: Scalars['NonEmpty']['input'];
};

/** The input for creating an attribute. */
export type CreateAttributeInput = {
  /** The categories. */
  categories?: InputMaybe<Array<CategoryType>>;
  /** The UUID of the credential. */
  credentialUuid: Scalars['UUID']['input'];
  /** The name of the attribute. */
  name: Scalars['NonEmpty']['input'];
  /** The sort order. */
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
};

/** Create input */
export type CreateAttributeLabelInput = {
  /** The UUID of the identity attribute */
  attributeUuid: Scalars['UUID']['input'];
  /** The UUID of the label */
  labelUuid: Scalars['UUID']['input'];
};

/** The input for creating an attribute locale. */
export type CreateAttributeLocaleInput = {
  /** The UUID of the attribute. */
  attributeUuid: Scalars['UUID']['input'];
  /** The localized description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The localized label. */
  label: Scalars['NonEmpty']['input'];
  /** The locale. */
  locale: Scalars['Locale']['input'];
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

/** Create Input */
export type CreateAuthenticationHandlerConfigurationNlWalletInput = {
  /** The AuthenticationHandler UUID */
  authenticationHandlerUuid: Scalars['UUID']['input'];
  /** Whether the user can request deletion of their retained data. */
  deletable: Scalars['Boolean']['input'];
  /** Whether the organization intends to retain the disclosed data. */
  intentToRetain: Scalars['Boolean']['input'];
  /** Whether the organization intends to share the disclosed data with third parties. */
  intentToShare: Scalars['Boolean']['input'];
  /** Maximum retention duration in minutes. Leave empty for no maximum. */
  maxRetentionDuration?: InputMaybe<Scalars['Int']['input']>;
  /** Purpose statement */
  purposeStatement: Scalars['JSONObject']['input'];
};

/** The input for creating a flow authentication handler. */
export type CreateAuthenticationHandlerInput = {
  /** The uuid of the flow the handler belongs to. */
  authenticationUuid: Scalars['UUID']['input'];
  /** The uuid of the handler app. */
  handlerAppUuid: Scalars['UUID']['input'];
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

/** The input for creating a flow authentication scope. */
export type CreateAuthenticationScopeInput = {
  /** The uuid of the handler. */
  authenticationHandlerUuid: Scalars['UUID']['input'];
  /** The scope name */
  scopeUuid: Scalars['UUID']['input'];
};

/** Create input */
export type CreateAuthenticationSecretInput = {
  /** The UUID of the authentication flow */
  authenticationUuid: Scalars['UUID']['input'];
  /** The UUID of the organization secret */
  organizationSecretUuid: Scalars['UUID']['input'];
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

/** The input for creating a credential draft (RFC 0012). */
export type CreateCredentialDraftInput = {
  /** The categories of the credential. */
  categories?: InputMaybe<Array<CategoryType>>;
  /** The format of the credential. */
  format: Format;
  /** The name of the credential. */
  name: Scalars['NonEmpty']['input'];
  /** The organization UUID. */
  organizationUuid: Scalars['UUID']['input'];
  /** The slug. */
  slug: Scalars['NonEmpty']['input'];
};

/** The input for creating a credential Datakeeper format. */
export type CreateCredentialFormatDatakeeperInput = {
  /** The context. */
  context: Scalars['NonEmpty']['input'];
  /** The UUID of the credential. */
  credentialUuid: Scalars['UUID']['input'];
  /** The UUID of the issuer. */
  issuerUuid: Scalars['UUID']['input'];
};

/** The input for creating a credential Digidentity format. */
export type CreateCredentialFormatDigidentityInput = {
  /** The UUID of the credential. */
  credentialUuid: Scalars['UUID']['input'];
  /** The UUID of the issuer. */
  issuerUuid: Scalars['UUID']['input'];
  /** The scope. */
  scope: Scalars['NonEmpty']['input'];
};

/** The input for creating a credential MSO MDOC format. */
export type CreateCredentialFormatMsoMdocInput = {
  /** The UUID of the credential. */
  credentialUuid: Scalars['UUID']['input'];
  /** The document type. */
  docType: Scalars['NonEmpty']['input'];
};

/** The input for creating a credential Nect format. */
export type CreateCredentialFormatNectInput = {
  /** The UUID of the credential. */
  credentialUuid: Scalars['UUID']['input'];
  /** The intent. */
  intent: Scalars['Int']['input'];
  /** The UUID of the issuer. */
  issuerUuid: Scalars['UUID']['input'];
};

/** The input for creating a credential NL Wallet format. */
export type CreateCredentialFormatNlWalletInput = {
  /** The UUID of the credential. */
  credentialUuid: Scalars['UUID']['input'];
  /** The document type. */
  docType: Scalars['NonEmpty']['input'];
  /** The NL Wallet format. */
  format?: InputMaybe<NlWalletFormat>;
  /** The namespace. */
  nameSpace?: InputMaybe<Scalars['String']['input']>;
};

/** The input for creating a credential ReadID format. */
export type CreateCredentialFormatReadidInput = {
  /** The UUID of the credential. */
  credentialUuid: Scalars['UUID']['input'];
  /** The document type. */
  documentType: ReadidDocumentType;
  /** The UUID of the issuer. */
  issuerUuid: Scalars['UUID']['input'];
};

/** The input for creating a credential SD-JWT format. */
export type CreateCredentialFormatSdJwtInput = {
  /** The UUID of the credential. */
  credentialUuid: Scalars['UUID']['input'];
  /** The extended verifiable credential type. */
  extendsVct?: InputMaybe<Scalars['String']['input']>;
  /** The extended VCT integrity hash. */
  extendsVctIntegrity?: InputMaybe<Scalars['String']['input']>;
  /** Whether key binding is enabled. */
  keyBinding: Scalars['Boolean']['input'];
  /** The status list URI. */
  statusListUri?: InputMaybe<Scalars['String']['input']>;
  /** The verifiable credential type. */
  vct: Scalars['NonEmpty']['input'];
  /** The VCT integrity hash. */
  vctIntegrity?: InputMaybe<Scalars['String']['input']>;
};

/** The input for creating a credential Yivi format. */
export type CreateCredentialFormatYiviInput = {
  /** The UUID of the credential. */
  credentialUuid: Scalars['UUID']['input'];
  /** The Yivi credential type identifier. */
  id: Scalars['NonEmpty']['input'];
  /** The UUID of the issuer. */
  issuerUuid: Scalars['UUID']['input'];
};

/** The input for creating a credential Yoti format. */
export type CreateCredentialFormatYotiInput = {
  /** The UUID of the credential. */
  credentialUuid: Scalars['UUID']['input'];
  /** The grouping predicate. */
  groupingPredicate?: InputMaybe<Scalars['String']['input']>;
  /** Whether grouping is allowed. */
  isGroupingAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether source constraint is available. */
  isSourceConstraintAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  /** The UUID of the issuer. */
  issuerUuid: Scalars['UUID']['input'];
  /** The name. */
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
  /** The background color. */
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  /** The background image. */
  backgroundImage?: InputMaybe<Scalars['String']['input']>;
  /** The background image integrity hash. */
  backgroundImageIntegrity?: InputMaybe<Scalars['String']['input']>;
  /** The UUID of the credential. */
  credentialUuid: Scalars['UUID']['input'];
  /** The localized description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The locale. */
  locale: Scalars['Locale']['input'];
  /** The logo. */
  logo?: InputMaybe<Scalars['String']['input']>;
  /** The logo alt text. */
  logoAltText?: InputMaybe<Scalars['String']['input']>;
  /** The logo integrity hash. */
  logoIntegrity?: InputMaybe<Scalars['String']['input']>;
  /** The localized name. */
  name: Scalars['NonEmpty']['input'];
  /** The text color. */
  textColor?: InputMaybe<Scalars['String']['input']>;
};

/** The input for creating a credential trust issuer. */
export type CreateCredentialTrustIssuerInput = {
  /** The UUID of the credential. */
  credentialUuid: Scalars['UUID']['input'];
  /** The UUID of the trust issuer. */
  trustIssuerUuid: Scalars['UUID']['input'];
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
  /** The uuid of the trust. */
  trustUuid: Scalars['UUID']['input'];
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
  /** The uuid of the handler. */
  disclosureHandlerUuid: Scalars['UUID']['input'];
  /** The group name */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** A single attribute entry for creating a disclosure handler by attributes. */
export type CreateDisclosureHandlerByAttributesAttributeInput = {
  /** The uuid of the catalog attribute. */
  attributeUuid: Scalars['UUID']['input'];
  /** The uuid of the issuer. */
  issuerUuid: Scalars['UUID']['input'];
  /** The uuid of the trust. */
  trustUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow disclosure handler by attributes. */
export type CreateDisclosureHandlerByAttributesInput = {
  /** The attributes to be created, each with their trust-issuer context. */
  attributes: Array<CreateDisclosureHandlerByAttributesAttributeInput>;
  /** The uuid of the flow the flow handler belongs to. */
  disclosureUuid: Scalars['UUID']['input'];
  /** The uuid of the flow handler app. */
  handlerAppUuid: Scalars['UUID']['input'];
  /** The mode on how to create underlying structure */
  mode: CreateDisclosureHandlerByAttributesMode;
};

/** Modes for creating a flow disclosure handler by attributes. */
export enum CreateDisclosureHandlerByAttributesMode {
  /** Create groups for each credential. */
  Conjunction = 'Conjunction',
  /** Append attributes to existing groups if a credential is found in them; otherwise, create a group for each credential. */
  ConjunctionMerge = 'ConjunctionMerge',
  /** Create a single group that includes all credentials. */
  Disjunction = 'Disjunction',
  /** Append attributes to existing groups if a credential is found in them; otherwise, combine all credentials into a single group. */
  DisjunctionMerge = 'DisjunctionMerge'
}

/** Input for creating DisclosureHandlerConfiguration */
export type CreateDisclosureHandlerConfigurationInput = {
  nlWallet?: InputMaybe<CreateDisclosureHandlerConfigurationNlWalletInput>;
  oid4vc?: InputMaybe<CreateDisclosureHandlerConfigurationOid4VcInput>;
};

/** Create Input */
export type CreateDisclosureHandlerConfigurationNlWalletInput = {
  /** Whether the user can request deletion of their retained data. */
  deletable: Scalars['Boolean']['input'];
  /** The DisclosureHandler UUID */
  disclosureHandlerUuid: Scalars['UUID']['input'];
  /** Whether the organization intends to retain the disclosed data. */
  intentToRetain: Scalars['Boolean']['input'];
  /** Whether the organization intends to share the disclosed data with third parties. */
  intentToShare: Scalars['Boolean']['input'];
  /** Maximum retention duration in minutes. Leave empty for no maximum. */
  maxRetentionDuration?: InputMaybe<Scalars['Int']['input']>;
  /** The OID4VC verification profile */
  profile?: InputMaybe<Oid4vcVerificationProfile>;
  /** Purpose statement */
  purposeStatement: Scalars['JSONObject']['input'];
};

/** Create Input */
export type CreateDisclosureHandlerConfigurationOid4VcInput = {
  /** The DisclosureHandler UUID */
  disclosureHandlerUuid: Scalars['UUID']['input'];
  /** The OID4VC verification profile */
  profile?: InputMaybe<Oid4vcVerificationProfile>;
};

/** The input for creating a flow disclosure handler. */
export type CreateDisclosureHandlerInput = {
  /** The uuid of the flow the flow handler belongs to. */
  disclosureUuid: Scalars['UUID']['input'];
  /** The uuid of the flow handler app. */
  handlerAppUuid: Scalars['UUID']['input'];
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

/** Create input */
export type CreateDisclosureSecretInput = {
  /** The UUID of the disclosure flow */
  disclosureUuid: Scalars['UUID']['input'];
  /** The UUID of the organization secret */
  organizationSecretUuid: Scalars['UUID']['input'];
};

/** The input for creating a handler app. */
export type CreateHandlerAppInput = {
  /** The UUID of the app. */
  appUuid: Scalars['UUID']['input'];
  /** The configuration type for this handler app. */
  configurationType?: InputMaybe<HandlerAppConfigurationType>;
  /** The UUID of the handler. */
  handlerUuid: Scalars['UUID']['input'];
  /** The provisioning requirements for this handler app. */
  provisioningRequirements?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** The input for creating a handler app protocol mDOC configuration. */
export type CreateHandlerAppProtocolMdocInput = {
  /** The UUID of the handler app. */
  handlerAppUuid: Scalars['UUID']['input'];
};

/** The input for creating a handler app protocol OID4VC configuration. */
export type CreateHandlerAppProtocolOid4vcInput = {
  /** The UUID of the handler app. */
  handlerAppUuid: Scalars['UUID']['input'];
  /** The supported issuance flows. */
  supportedIssuanceFlows?: InputMaybe<Array<HandlerAppProtocolOid4vcIssuanceFlow>>;
  /** The supported issuance profiles. */
  supportedIssuanceProfiles?: InputMaybe<Array<HandlerAppProtocolOid4vcIssuanceProfile>>;
  /** The supported verification profiles. */
  supportedVerificationProfiles?: InputMaybe<Array<HandlerAppProtocolOid4vcVerificationProfile>>;
  /** The wallet implementation. */
  walletImplementation?: InputMaybe<HandlerAppProtocolOid4vcWalletImplementation>;
};

/** The input for creating a handler. */
export type CreateHandlerInput = {
  /** The handler URI. */
  handlerUri: Scalars['NonEmpty']['input'];
  /** The name of the handler. */
  name: Scalars['NonEmpty']['input'];
  /** The protocol. */
  protocol: Protocol;
  /** The supported flow types. */
  supportedFlows: Array<FlowType>;
};

/** Create input */
export type CreateHandlerLabelInput = {
  /** The UUID of the identity handler */
  handlerUuid: Scalars['UUID']['input'];
  /** The UUID of the label */
  labelUuid: Scalars['UUID']['input'];
};

/** The input for creating a handler locale. */
export type CreateHandlerLocaleInput = {
  /** The description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The uuid of the handler. */
  handlerUuid: Scalars['UUID']['input'];
  /** The locale */
  locale: Scalars['Locale']['input'];
  /** The name */
  name: Scalars['NonEmpty']['input'];
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
  /** The uuid of the handler the credential belongs to. */
  issuanceHandlerUuid: Scalars['UUID']['input'];
  /** The uuid of the issuer. */
  issuerUuid: Scalars['UUID']['input'];
  /** The meta type of the credential */
  metaType: IssuanceCredentialMetaType;
  /** The uuid of the trust. */
  trustUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow credential meta datakeeper */
export type CreateIssuanceCredentialMetaDatakeeperInput = {
  /** The expiration duration, in seconds */
  expirationDuration: Scalars['Int']['input'];
  /** The flow issuance credential UUID */
  issuanceCredentialUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow credential meta oid4vc */
export type CreateIssuanceCredentialMetaOid4vcInput = {
  /** The expiration duration, in seconds */
  expirationDuration: Scalars['Int']['input'];
  /** The flow issuance credential UUID */
  issuanceCredentialUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow credential meta yivi */
export type CreateIssuanceCredentialMetaYiviInput = {
  /** The expiration duration, in seconds */
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

/** A single attribute entry for creating an issuance handler by attributes. */
export type CreateIssuanceHandlerByAttributesAttributeInput = {
  /** The uuid of the catalog attribute. */
  attributeUuid: Scalars['UUID']['input'];
  /** The uuid of the issuer. */
  issuerUuid: Scalars['UUID']['input'];
  /** The uuid of the trust. */
  trustUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow issuance handler by attributes. */
export type CreateIssuanceHandlerByAttributesInput = {
  /** The attributes to be created, each with their trust-issuer context. */
  attributes: Array<CreateIssuanceHandlerByAttributesAttributeInput>;
  /** The uuid of the handler app. */
  handlerAppUuid: Scalars['UUID']['input'];
  /** The uuid of the flow the handler belongs to. */
  issuanceUuid: Scalars['UUID']['input'];
};

/** Create Input */
export type CreateIssuanceHandlerConfigurationNlWalletInput = {
  /** The attribute UUIDs that must be disclosed before issuance */
  attributeUuids: Array<Scalars['UUID']['input']>;
  /** Whether the user can request deletion of their retained data. */
  deletable: Scalars['Boolean']['input'];
  /** Whether the organization intends to retain the disclosed data. */
  intentToRetain: Scalars['Boolean']['input'];
  /** Whether the organization intends to share the disclosed data with third parties. */
  intentToShare: Scalars['Boolean']['input'];
  /** The IssuanceHandler UUID */
  issuanceHandlerUuid: Scalars['UUID']['input'];
  /** Maximum retention duration in minutes. Leave empty for no maximum. */
  maxRetentionDuration?: InputMaybe<Scalars['Int']['input']>;
  /** Purpose statement */
  purposeStatement: Scalars['JSONObject']['input'];
};

/** Create Input */
export type CreateIssuanceHandlerConfigurationOid4VcInput = {
  /** The OID4VC issuance flow */
  flow?: InputMaybe<Oid4vcIssuanceFlow>;
  /** The IssuanceHandler UUID */
  issuanceHandlerUuid: Scalars['UUID']['input'];
  /** The OID4VC issuance profile */
  profile?: InputMaybe<Oid4vcIssuanceProfile>;
};

/** The input for creating a flow issuance handler. */
export type CreateIssuanceHandlerInput = {
  /** The uuid of the handler app. */
  handlerAppUuid: Scalars['UUID']['input'];
  /** The uuid of the flow the handler belongs to. */
  issuanceUuid: Scalars['UUID']['input'];
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

/** Create input */
export type CreateIssuanceSecretInput = {
  /** The UUID of the issuance flow */
  issuanceUuid: Scalars['UUID']['input'];
  /** The UUID of the organization secret */
  organizationSecretUuid: Scalars['UUID']['input'];
};

/** The input for creating an issuer draft (RFC 0012). */
export type CreateIssuerDraftInput = {
  /** The base64 encoded logo. */
  base64Logo: Scalars['NonEmpty']['input'];
  /** The name of the issuer. */
  name: Scalars['NonEmpty']['input'];
  /** The organization UUID. */
  organizationUuid: Scalars['UUID']['input'];
  /** The slug. */
  slug: Scalars['NonEmpty']['input'];
};

/** Create input */
export type CreateIssuerLabelInput = {
  /** The UUID of the identity issuer */
  issuerUuid: Scalars['UUID']['input'];
  /** The UUID of the label */
  labelUuid: Scalars['UUID']['input'];
};

/** The input for creating an issuer locale. */
export type CreateIssuerLocaleInput = {
  /** The localized description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The UUID of the issuer. */
  issuerUuid: Scalars['UUID']['input'];
  /** The locale. */
  locale: Scalars['Locale']['input'];
  /** The localized name. */
  name: Scalars['NonEmpty']['input'];
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

/** The input for creating a locale config. */
export type CreateLocaleConfigInput = {
  /** The handler UUID */
  handlerUuid?: InputMaybe<Scalars['UUID']['input']>;
  /** The locale */
  locale: Scalars['Locale']['input'];
  /** The model. */
  model: Models;
  /** The properties */
  properties: Array<Scalars['String']['input']>;
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
  /** The uuid of the mappingIssuance link. */
  mappingIssuanceLinkUuid: Scalars['UUID']['input'];
};

/** The input for creating many mappingIssuance links. */
export type CreateManyMappingIssuanceLinkInput = {
  /** The uuid of the link. */
  credentialUuid: Scalars['UUID']['input'];
  /** The uuid of the issuer. */
  issuerUuid: Scalars['UUID']['input'];
  /** The uuid of the mappingIssuance. */
  mappingIssuanceUuid: Scalars['UUID']['input'];
  /** The uuid of the trust. */
  trustUuid: Scalars['UUID']['input'];
};

/** The input for creating many mappingIssuance links by selected attributes. */
export type CreateManyMappingIssuanceLinksByAttributesInput = {
  /** The uuids of all attributes to be linked. */
  attributeUuids: Array<Scalars['UUID']['input']>;
  /** The uuid of the issuer. */
  issuerUuid: Scalars['UUID']['input'];
  /** The uuid of the mappingIssuance. */
  mappingIssuanceUuid: Scalars['UUID']['input'];
  /** The uuid of the trust. */
  trustUuid: Scalars['UUID']['input'];
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
  /** The uuid of the issuer. */
  issuerUuid: Scalars['UUID']['input'];
  /** The uuid of the mappingVerification claim. */
  mappingVerificationClaimUuid: Scalars['UUID']['input'];
  /** The uuid of the trust. */
  trustUuid: Scalars['UUID']['input'];
};

/** The input for creating many mappingVerification links by selected attributes. */
export type CreateManyMappingVerificationLinksByAttributesInput = {
  /** The uuids of all attributes to be linked. */
  attributeUuids: Array<Scalars['UUID']['input']>;
  /** The uuid of the issuer. */
  issuerUuid: Scalars['UUID']['input'];
  /** The uuid of the mappingVerification claim. */
  mappingVerificationClaimUuid: Scalars['UUID']['input'];
  /** The uuid of the trust. */
  trustUuid: Scalars['UUID']['input'];
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
  /** The uuid of the mappingIssuance link. */
  mappingIssuanceLinkUuid: Scalars['UUID']['input'];
};

/** The input for creating a mappingIssuance claim. */
export type CreateMappingIssuanceClaimInput = {
  /** The claim */
  claim: Scalars['NonEmpty']['input'];
  /** The uuid of the mappingIssuance attribute, this claim belongs to. */
  mappingIssuanceAttributeUuid: Scalars['UUID']['input'];
  /** The name of the claim. */
  name: Scalars['NonEmpty']['input'];
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
  /** The uuid of the issuer. */
  issuerUuid: Scalars['UUID']['input'];
  /** The uuid of the mappingIssuance. */
  mappingIssuanceUuid: Scalars['UUID']['input'];
  /** The uuid of the trust. */
  trustUuid: Scalars['UUID']['input'];
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
  /** The uuid of the issuer. */
  issuerUuid: Scalars['UUID']['input'];
  /** The uuid of the mappingVerification claim. */
  mappingVerificationClaimUuid: Scalars['UUID']['input'];
  /** The uuid of the trust. */
  trustUuid: Scalars['UUID']['input'];
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
  /** The ISO 3166-1 alpha-2 country code of the organization. */
  countryCode?: InputMaybe<Scalars['ISO3166']['input']>;
  /** The organization description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The public email address of the organization. */
  email?: InputMaybe<Scalars['Email']['input']>;
  /** The chamber of commerce registration number. */
  kvk?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The legal registered name of the organization. */
  legalName?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The NACE Rev. 2.1 economic activity code of the organization. */
  naceCode?: InputMaybe<Scalars['NACECode']['input']>;
  /** The organization name. */
  name: Scalars['NonEmpty']['input'];
  /** The phone number of the organization. */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** The URL of the organization's privacy policy. */
  privacyPolicyUrl?: InputMaybe<Scalars['URL']['input']>;
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

/** The input for creating an organization trust issuer key. */
export type CreateOrganizationTrustIssuerKeyInput = {
  /** The organization UUID. */
  organizationUuid: Scalars['UUID']['input'];
  /** The Vault Transit private key identifier. */
  privateKeyIdentifier: Scalars['NonEmpty']['input'];
  /** The trust issuer key UUID (cross-db reference to catalog). */
  trustIssuerKeyUuid: Scalars['UUID']['input'];
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

/** The input for creating a scope claim. */
export type CreateScopeClaimInput = {
  /** The name of the scope claim. */
  name: Scalars['NonEmpty']['input'];
  /** The UUID of the scope. */
  scopeUuid: Scalars['UUID']['input'];
  /** The transform expression. */
  transform: Scalars['NonEmpty']['input'];
};

/** The input for creating a scope. */
export type CreateScopeInput = {
  /** The categories. */
  categories?: InputMaybe<Array<CategoryType>>;
  /** The UUID of the handler app. */
  handlerAppUuid: Scalars['UUID']['input'];
  /** The name of the scope. */
  name: Scalars['NonEmpty']['input'];
  /** The scope value. */
  scope: Scalars['NonEmpty']['input'];
};

/** The input for creating a scope locale. */
export type CreateScopeLocaleInput = {
  /** The description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The locale */
  locale: Scalars['Locale']['input'];
  /** The name */
  name: Scalars['NonEmpty']['input'];
  /** The UUID of the scope. */
  scopeUuid: Scalars['UUID']['input'];
};

/** The input for creating a scope resource. */
export type CreateScopeResourceInput = {
  /** The UUID of the attribute. */
  attributeUuid: Scalars['UUID']['input'];
  /** The name of the scope resource. */
  name: Scalars['NonEmpty']['input'];
  /** The UUID of the scope. */
  scopeUuid: Scalars['UUID']['input'];
  /** The UUID of the trust issuer. */
  trustIssuerUuid: Scalars['UUID']['input'];
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
  /** The uuid of the group the credential belongs to. */
  signatureGroupUuid: Scalars['UUID']['input'];
  /** The uuid of the trust. */
  trustUuid: Scalars['UUID']['input'];
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
  /** The uuid of the handler. */
  signatureHandlerUuid: Scalars['UUID']['input'];
};

/** A single attribute entry for creating a signature handler by attributes. */
export type CreateSignatureHandlerByAttributesAttributeInput = {
  /** The uuid of the catalog attribute. */
  attributeUuid: Scalars['UUID']['input'];
  /** The uuid of the issuer. */
  issuerUuid: Scalars['UUID']['input'];
  /** The uuid of the trust. */
  trustUuid: Scalars['UUID']['input'];
};

/** The input for creating a flow signature handler by attributes. */
export type CreateSignatureHandlerByAttributesInput = {
  /** The attributes to be created, each with their trust-issuer context. */
  attributes: Array<CreateSignatureHandlerByAttributesAttributeInput>;
  /** The uuid of the handler app. */
  handlerAppUuid: Scalars['UUID']['input'];
  /** The mode on how to create underlying structure */
  mode: CreateSignatureHandlerByAttributesMode;
  /** The uuid of the flow the handler belongs to. */
  signatureUuid: Scalars['UUID']['input'];
};

/** Modes for creating a flow signature handler by attributes. */
export enum CreateSignatureHandlerByAttributesMode {
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
export type CreateSignatureHandlerConfigurationNlWalletInput = {
  /** The SignatureHandler UUID */
  signatureHandlerUuid: Scalars['UUID']['input'];
  /** The usecase */
  usecase: Scalars['String']['input'];
};

/** The input for creating a flow signature handler. */
export type CreateSignatureHandlerInput = {
  /** The uuid of the handler app. */
  handlerAppUuid: Scalars['UUID']['input'];
  /** The uuid of the flow the handler belongs to. */
  signatureUuid: Scalars['UUID']['input'];
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

/** Create input */
export type CreateSignatureSecretInput = {
  /** The UUID of the organization secret */
  organizationSecretUuid: Scalars['UUID']['input'];
  /** The UUID of the signature flow */
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

/** The input for creating a trust anchor DID. */
export type CreateTrustAnchorDidInput = {
  /** The DID method */
  didMethod: Scalars['NonEmpty']['input'];
  /** The resolver URI */
  resolverUri?: InputMaybe<Scalars['String']['input']>;
  /** The uuid of the trust. */
  trustUuid: Scalars['UUID']['input'];
};

/** The input for creating a trust anchor Idemix. */
export type CreateTrustAnchorIdemixInput = {
  /** The uuid of the trust. */
  trustUuid: Scalars['UUID']['input'];
};

/** The input for creating a trust anchor X.509. */
export type CreateTrustAnchorX509Input = {
  /** The uuid of the trust. */
  trustUuid: Scalars['UUID']['input'];
};

/** The input for creating a trust anchor X.509 root certificate. */
export type CreateTrustAnchorX509RootCertificateInput = {
  /** The Authority Key Identifier */
  aki: Scalars['NonEmpty']['input'];
  /** The certificate name */
  name: Scalars['NonEmpty']['input'];
  /** The not-after validity date */
  notAfter: Scalars['DateTime']['input'];
  /** The not-before validity date */
  notBefore: Scalars['DateTime']['input'];
  /** The uuid of the trust anchor X.509. */
  trustAnchorX509Uuid: Scalars['UUID']['input'];
  /** The status of the entry in the trusted list */
  trustedListEntryStatus?: InputMaybe<TrustedListEntryStatus>;
  /** The URI of the trusted list this certificate belongs to */
  trustedListUri?: InputMaybe<Scalars['String']['input']>;
  /** The X.509 certificate chain (PEM) */
  x5c: Scalars['NonEmpty']['input'];
};

/** The input for creating a trust app. */
export type CreateTrustAppInput = {
  /** The UUID of the app. */
  appUuid: Scalars['UUID']['input'];
  /** The UUID of the trust. */
  trustUuid: Scalars['UUID']['input'];
};

/**
 * The input for creating a trust draft. Creates both the TrustVersion envelope
 * and the first DRAFT version (RFC 0012).
 */
export type CreateTrustDraftInput = {
  /** The verification anchor type */
  anchor: Anchor;
  /** The trust environment */
  environment: TrustEnvironment;
  /** The name of the trust framework */
  name: Scalars['NonEmpty']['input'];
  /** The organization uuid */
  organizationUuid: Scalars['UUID']['input'];
  /** The unique slug within the organization */
  slug: Scalars['NonEmpty']['input'];
  /** The trust type */
  type: TrustType;
};

/** The input for creating a trust issuer. */
export type CreateTrustIssuerInput = {
  /** The UUID of the issuer. */
  issuerUuid: Scalars['UUID']['input'];
  /** The UUID of the trust. */
  trustUuid: Scalars['UUID']['input'];
};

/** The input for creating a trust issuer key algorithm Idemix. */
export type CreateTrustIssuerKeyAlgorithmIdemixInput = {
  /** The Idemix identifier. */
  id: Scalars['NonEmpty']['input'];
  /** The UUID of the trust issuer key. */
  trustIssuerKeyUuid: Scalars['UUID']['input'];
};

/** The input for creating a trust issuer key DID binding. */
export type CreateTrustIssuerKeyDidBindingInput = {
  /** The DID. */
  did: Scalars['NonEmpty']['input'];
  /** The UUID of the trust issuer key. */
  trustIssuerKeyUuid: Scalars['UUID']['input'];
};

/** The input for creating a trust issuer key. */
export type CreateTrustIssuerKeyInput = {
  /** The algorithm. */
  algorithm: Algorithm;
  /** The JSON Web Key. */
  jwk?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The key identifier. */
  kid?: InputMaybe<Scalars['String']['input']>;
  /** The UUID of the trust issuer. */
  trustIssuerUuid: Scalars['UUID']['input'];
};

/** The input for creating a trust issuer key X.509 certificate. */
export type CreateTrustIssuerKeyX509CertInput = {
  /** The not after date. */
  notAfter: Scalars['DateTime']['input'];
  /** The not before date. */
  notBefore: Scalars['DateTime']['input'];
  /** The UUID of the trust anchor X.509 root certificate. */
  trustAnchorX509RootCertificateUuid: Scalars['UUID']['input'];
  /** The UUID of the trust issuer key. */
  trustIssuerKeyUuid: Scalars['UUID']['input'];
  /** The X.509 certificate chain. */
  x5c: Array<Scalars['NonEmpty']['input']>;
};

/** Create input */
export type CreateTrustLabelInput = {
  /** The UUID of the label */
  labelUuid: Scalars['UUID']['input'];
  /** The UUID of the identity trust */
  trustUuid: Scalars['UUID']['input'];
};

/** The input for creating a trust locale. */
export type CreateTrustLocaleInput = {
  /** The localized description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The locale */
  locale: Scalars['Locale']['input'];
  /** The localized name */
  name: Scalars['NonEmpty']['input'];
  /** The uuid of the trust. */
  trustUuid: Scalars['UUID']['input'];
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

/** Credential definition (RFC 0012 versioned). */
export type Credential = Model & {
  __typename?: 'Credential';
  /** The collection of attributes. */
  attributes: AttributeConnection;
  /** The UUID of the version this was based on. */
  basedOnUuid?: Maybe<Scalars['UUID']['output']>;
  /** The categories of the credential. */
  categories: Array<CategoryType>;
  /** The change note. */
  changeNote?: Maybe<Scalars['String']['output']>;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The UUID of the user who created this version. */
  createdByUserUuid: Scalars['UUID']['output'];
  /** The collection of trust issuers. */
  credentialTrustIssuers: CredentialTrustIssuerConnection;
  /** The credential version this credential belongs to. */
  credentialVersion: CredentialVersion;
  /** The UUID of the credential version. */
  credentialVersionUuid: Scalars['UUID']['output'];
  /** The format of the credential. */
  format: Format;
  /** The Datakeeper format configuration, if applicable. */
  formatDatakeeper?: Maybe<CredentialFormatDatakeeper>;
  /** The Digidentity format configuration, if applicable. */
  formatDigidentity?: Maybe<CredentialFormatDigidentity>;
  /** The MSO MDOC format configuration, if applicable. */
  formatMsoMdoc?: Maybe<CredentialFormatMsoMdoc>;
  /** The Nect format configuration, if applicable. */
  formatNect?: Maybe<CredentialFormatNect>;
  /** The NL Wallet format configuration, if applicable. */
  formatNlWallet?: Maybe<CredentialFormatNlWallet>;
  /** The ReadID format configuration, if applicable. */
  formatReadid?: Maybe<CredentialFormatReadid>;
  /** The SD-JWT format configuration, if applicable. */
  formatSdJwt?: Maybe<CredentialFormatSdJwt>;
  /** The Yivi format configuration, if applicable. */
  formatYivi?: Maybe<CredentialFormatYivi>;
  /** The Yoti format configuration, if applicable. */
  formatYoti?: Maybe<CredentialFormatYoti>;
  /** The last edited time. */
  lastEditedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The UUID of the user who last edited this version. */
  lastEditedByUserUuid?: Maybe<Scalars['UUID']['output']>;
  /** The collection of locales. */
  locales: CredentialLocaleConnection;
  /** The name of the credential. */
  name: Scalars['NonEmpty']['output'];
  /** The publish time, if published. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The UUID of the user who published this version. */
  publishedByUserUuid?: Maybe<Scalars['UUID']['output']>;
  /** The version status. */
  status: VersionStatus;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** The version number. */
  versionNumber: Scalars['Int']['output'];
};


/** Credential definition (RFC 0012 versioned). */
export type CredentialAttributesArgs = {
  input?: InputMaybe<FindManyAttributesInput>;
};


/** Credential definition (RFC 0012 versioned). */
export type CredentialCredentialTrustIssuersArgs = {
  input?: InputMaybe<FindManyCredentialTrustIssuersInput>;
};


/** Credential definition (RFC 0012 versioned). */
export type CredentialLocalesArgs = {
  input?: InputMaybe<FindManyCredentialLocalesInput>;
};

/** Credential change log definition (RFC 0012). */
export type CredentialChangeLog = Model & {
  __typename?: 'CredentialChangeLog';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential version this change log belongs to. */
  credentialVersion: CredentialVersion;
  /** The metadata of the change. */
  metadata: Scalars['JSONObject']['output'];
  /** The UUID of the user who performed the change. */
  performedByUserUuid: Scalars['UUID']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** The version number at the time of the change. */
  versionNumber: Scalars['Int']['output'];
};

/** The credential change log connection definition. */
export type CredentialChangeLogConnection = {
  __typename?: 'CredentialChangeLogConnection';
  edges: Array<Maybe<CredentialChangeLogEdge>>;
  pageInfo: PageInfo;
};

/** The credential change log edge definition. */
export type CredentialChangeLogEdge = {
  __typename?: 'CredentialChangeLogEdge';
  cursor: Scalars['String']['output'];
  node: CredentialChangeLog;
};

/** Fields which can be used to filter credential change log on. Value must be camel case. */
export enum CredentialChangeLogFilteringField {
  CreatedAt = 'createdAt',
  CredentialVersionUuid = 'credentialVersionUuid',
  PerformedByUserUuid = 'performedByUserUuid',
  VersionNumber = 'versionNumber'
}

/** Fields which can be used to sort credential change log on. Value must be camel case. */
export enum CredentialChangeLogSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential change log. */
export type CredentialChangeLogSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialChangeLogSortEnum;
};

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
  CredentialVersionUuid = 'credentialVersionUuid',
  Format = 'format',
  Name = 'name',
  Status = 'status',
  Uuid = 'uuid'
}

/** Credential Datakeeper format definition. */
export type CredentialFormatDatakeeper = Model & {
  __typename?: 'CredentialFormatDatakeeper';
  /** The context. */
  context: Scalars['String']['output'];
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential this format belongs to. */
  credential: Credential;
  /** The issuer. */
  issuer: Issuer;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential Datakeeper format connection definition. */
export type CredentialFormatDatakeeperConnection = {
  __typename?: 'CredentialFormatDatakeeperConnection';
  edges: Array<Maybe<CredentialFormatDatakeeperEdge>>;
  pageInfo: PageInfo;
};

/** The credential Datakeeper format edge definition. */
export type CredentialFormatDatakeeperEdge = {
  __typename?: 'CredentialFormatDatakeeperEdge';
  cursor: Scalars['String']['output'];
  node: CredentialFormatDatakeeper;
};

/** Fields which can be used to filter credential Datakeeper format on. Value must be camel case. */
export enum CredentialFormatDatakeeperFilteringField {
  CreatedAt = 'createdAt',
  CredentialUuid = 'credentialUuid',
  IssuerUuid = 'issuerUuid'
}

/** Fields which can be used to sort credential Datakeeper format on. Value must be camel case. */
export enum CredentialFormatDatakeeperSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential Datakeeper format. */
export type CredentialFormatDatakeeperSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialFormatDatakeeperSortEnum;
};

/** Credential Digidentity format definition. */
export type CredentialFormatDigidentity = Model & {
  __typename?: 'CredentialFormatDigidentity';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential this format belongs to. */
  credential: Credential;
  /** The issuer. */
  issuer: Issuer;
  /** The scope. */
  scope: Scalars['String']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential Digidentity format connection definition. */
export type CredentialFormatDigidentityConnection = {
  __typename?: 'CredentialFormatDigidentityConnection';
  edges: Array<Maybe<CredentialFormatDigidentityEdge>>;
  pageInfo: PageInfo;
};

/** The credential Digidentity format edge definition. */
export type CredentialFormatDigidentityEdge = {
  __typename?: 'CredentialFormatDigidentityEdge';
  cursor: Scalars['String']['output'];
  node: CredentialFormatDigidentity;
};

/** Fields which can be used to filter credential Digidentity format on. Value must be camel case. */
export enum CredentialFormatDigidentityFilteringField {
  CreatedAt = 'createdAt',
  CredentialUuid = 'credentialUuid',
  IssuerUuid = 'issuerUuid'
}

/** Fields which can be used to sort credential Digidentity format on. Value must be camel case. */
export enum CredentialFormatDigidentitySortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential Digidentity format. */
export type CredentialFormatDigidentitySortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialFormatDigidentitySortEnum;
};

/** Credential MSO MDOC format definition. */
export type CredentialFormatMsoMdoc = Model & {
  __typename?: 'CredentialFormatMsoMdoc';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential this format belongs to. */
  credential: Credential;
  /** The document type. */
  docType: Scalars['String']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential MSO MDOC format connection definition. */
export type CredentialFormatMsoMdocConnection = {
  __typename?: 'CredentialFormatMsoMdocConnection';
  edges: Array<Maybe<CredentialFormatMsoMdocEdge>>;
  pageInfo: PageInfo;
};

/** The credential MSO MDOC format edge definition. */
export type CredentialFormatMsoMdocEdge = {
  __typename?: 'CredentialFormatMsoMdocEdge';
  cursor: Scalars['String']['output'];
  node: CredentialFormatMsoMdoc;
};

/** Fields which can be used to filter credential MSO MDOC format on. Value must be camel case. */
export enum CredentialFormatMsoMdocFilteringField {
  CreatedAt = 'createdAt',
  CredentialUuid = 'credentialUuid'
}

/** Fields which can be used to sort credential MSO MDOC format on. Value must be camel case. */
export enum CredentialFormatMsoMdocSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential MSO MDOC format. */
export type CredentialFormatMsoMdocSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialFormatMsoMdocSortEnum;
};

/** Credential Nect format definition. */
export type CredentialFormatNect = Model & {
  __typename?: 'CredentialFormatNect';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential this format belongs to. */
  credential: Credential;
  /** The intent. */
  intent: Scalars['Int']['output'];
  /** The issuer. */
  issuer: Issuer;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential Nect format connection definition. */
export type CredentialFormatNectConnection = {
  __typename?: 'CredentialFormatNectConnection';
  edges: Array<Maybe<CredentialFormatNectEdge>>;
  pageInfo: PageInfo;
};

/** The credential Nect format edge definition. */
export type CredentialFormatNectEdge = {
  __typename?: 'CredentialFormatNectEdge';
  cursor: Scalars['String']['output'];
  node: CredentialFormatNect;
};

/** Fields which can be used to filter credential Nect format on. Value must be camel case. */
export enum CredentialFormatNectFilteringField {
  CreatedAt = 'createdAt',
  CredentialUuid = 'credentialUuid',
  IssuerUuid = 'issuerUuid'
}

/** Fields which can be used to sort credential Nect format on. Value must be camel case. */
export enum CredentialFormatNectSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential Nect format. */
export type CredentialFormatNectSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialFormatNectSortEnum;
};

/** Credential NL Wallet format definition. */
export type CredentialFormatNlWallet = Model & {
  __typename?: 'CredentialFormatNlWallet';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential this format belongs to. */
  credential: Credential;
  /** The document type. */
  docType: Scalars['String']['output'];
  /** The NL Wallet format. */
  format: NlWalletFormat;
  /** The namespace. */
  nameSpace?: Maybe<Scalars['String']['output']>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential NL Wallet format connection definition. */
export type CredentialFormatNlWalletConnection = {
  __typename?: 'CredentialFormatNlWalletConnection';
  edges: Array<Maybe<CredentialFormatNlWalletEdge>>;
  pageInfo: PageInfo;
};

/** The credential NL Wallet format edge definition. */
export type CredentialFormatNlWalletEdge = {
  __typename?: 'CredentialFormatNlWalletEdge';
  cursor: Scalars['String']['output'];
  node: CredentialFormatNlWallet;
};

/** Fields which can be used to filter credential NL Wallet format on. Value must be camel case. */
export enum CredentialFormatNlWalletFilteringField {
  CreatedAt = 'createdAt',
  CredentialUuid = 'credentialUuid'
}

/** Fields which can be used to sort credential NL Wallet format on. Value must be camel case. */
export enum CredentialFormatNlWalletSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential NL Wallet format. */
export type CredentialFormatNlWalletSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialFormatNlWalletSortEnum;
};

/** Credential ReadID format definition. */
export type CredentialFormatReadid = Model & {
  __typename?: 'CredentialFormatReadid';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential this format belongs to. */
  credential: Credential;
  /** The document type. */
  documentType: ReadidDocumentType;
  /** The issuer. */
  issuer: Issuer;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential ReadID format connection definition. */
export type CredentialFormatReadidConnection = {
  __typename?: 'CredentialFormatReadidConnection';
  edges: Array<Maybe<CredentialFormatReadidEdge>>;
  pageInfo: PageInfo;
};

/** The credential ReadID format edge definition. */
export type CredentialFormatReadidEdge = {
  __typename?: 'CredentialFormatReadidEdge';
  cursor: Scalars['String']['output'];
  node: CredentialFormatReadid;
};

/** Fields which can be used to filter credential ReadID format on. Value must be camel case. */
export enum CredentialFormatReadidFilteringField {
  CreatedAt = 'createdAt',
  CredentialUuid = 'credentialUuid',
  DocumentType = 'documentType',
  IssuerUuid = 'issuerUuid'
}

/** Fields which can be used to sort credential ReadID format on. Value must be camel case. */
export enum CredentialFormatReadidSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential ReadID format. */
export type CredentialFormatReadidSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialFormatReadidSortEnum;
};

/** Credential SD-JWT format definition. */
export type CredentialFormatSdJwt = Model & {
  __typename?: 'CredentialFormatSdJwt';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential this format belongs to. */
  credential: Credential;
  /** The extended verifiable credential type. */
  extendsVct?: Maybe<Scalars['String']['output']>;
  /** The extended VCT integrity hash. */
  extendsVctIntegrity?: Maybe<Scalars['String']['output']>;
  /** Whether key binding is enabled. */
  keyBinding: Scalars['Boolean']['output'];
  /** The status list URI. */
  statusListUri?: Maybe<Scalars['String']['output']>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** The verifiable credential type. */
  vct: Scalars['String']['output'];
  /** The VCT integrity hash. */
  vctIntegrity?: Maybe<Scalars['String']['output']>;
};

/** The credential SD-JWT format connection definition. */
export type CredentialFormatSdJwtConnection = {
  __typename?: 'CredentialFormatSdJwtConnection';
  edges: Array<Maybe<CredentialFormatSdJwtEdge>>;
  pageInfo: PageInfo;
};

/** The credential SD-JWT format edge definition. */
export type CredentialFormatSdJwtEdge = {
  __typename?: 'CredentialFormatSdJwtEdge';
  cursor: Scalars['String']['output'];
  node: CredentialFormatSdJwt;
};

/** Fields which can be used to filter credential SD-JWT format on. Value must be camel case. */
export enum CredentialFormatSdJwtFilteringField {
  CreatedAt = 'createdAt',
  CredentialUuid = 'credentialUuid'
}

/** Fields which can be used to sort credential SD-JWT format on. Value must be camel case. */
export enum CredentialFormatSdJwtSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential SD-JWT format. */
export type CredentialFormatSdJwtSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialFormatSdJwtSortEnum;
};

/** Credential Yivi format definition. */
export type CredentialFormatYivi = Model & {
  __typename?: 'CredentialFormatYivi';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential this format belongs to. */
  credential: Credential;
  /** The Yivi credential type identifier. */
  id: Scalars['String']['output'];
  /** The issuer. */
  issuer: Issuer;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential Yivi format connection definition. */
export type CredentialFormatYiviConnection = {
  __typename?: 'CredentialFormatYiviConnection';
  edges: Array<Maybe<CredentialFormatYiviEdge>>;
  pageInfo: PageInfo;
};

/** The credential Yivi format edge definition. */
export type CredentialFormatYiviEdge = {
  __typename?: 'CredentialFormatYiviEdge';
  cursor: Scalars['String']['output'];
  node: CredentialFormatYivi;
};

/** Fields which can be used to filter credential Yivi format on. Value must be camel case. */
export enum CredentialFormatYiviFilteringField {
  CreatedAt = 'createdAt',
  CredentialUuid = 'credentialUuid',
  IssuerUuid = 'issuerUuid'
}

/** Fields which can be used to sort credential Yivi format on. Value must be camel case. */
export enum CredentialFormatYiviSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential Yivi format. */
export type CredentialFormatYiviSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialFormatYiviSortEnum;
};

/** Credential Yoti format definition. */
export type CredentialFormatYoti = Model & {
  __typename?: 'CredentialFormatYoti';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential this format belongs to. */
  credential: Credential;
  /** The grouping predicate. */
  groupingPredicate: Scalars['String']['output'];
  /** Whether grouping is allowed. */
  isGroupingAllowed: Scalars['Boolean']['output'];
  /** Whether source constraint is available. */
  isSourceConstraintAvailable: Scalars['Boolean']['output'];
  /** The issuer. */
  issuer: Issuer;
  /** The name. */
  name: Scalars['String']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential Yoti format connection definition. */
export type CredentialFormatYotiConnection = {
  __typename?: 'CredentialFormatYotiConnection';
  edges: Array<Maybe<CredentialFormatYotiEdge>>;
  pageInfo: PageInfo;
};

/** The credential Yoti format edge definition. */
export type CredentialFormatYotiEdge = {
  __typename?: 'CredentialFormatYotiEdge';
  cursor: Scalars['String']['output'];
  node: CredentialFormatYoti;
};

/** Fields which can be used to filter credential Yoti format on. Value must be camel case. */
export enum CredentialFormatYotiFilteringField {
  CreatedAt = 'createdAt',
  CredentialUuid = 'credentialUuid',
  IssuerUuid = 'issuerUuid'
}

/** Fields which can be used to sort credential Yoti format on. Value must be camel case. */
export enum CredentialFormatYotiSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential Yoti format. */
export type CredentialFormatYotiSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialFormatYotiSortEnum;
};

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
  /** The background color. */
  backgroundColor?: Maybe<Scalars['String']['output']>;
  /** The background image. */
  backgroundImage?: Maybe<Scalars['String']['output']>;
  /** The background image integrity hash. */
  backgroundImageIntegrity?: Maybe<Scalars['String']['output']>;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential this locale belongs to. */
  credential: Credential;
  /** The localized description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The locale. */
  locale: Scalars['Locale']['output'];
  /** The logo. */
  logo?: Maybe<Scalars['String']['output']>;
  /** The logo alt text. */
  logoAltText?: Maybe<Scalars['String']['output']>;
  /** The logo integrity hash. */
  logoIntegrity?: Maybe<Scalars['String']['output']>;
  /** The localized name. */
  name: Scalars['NonEmpty']['output'];
  /** The text color. */
  textColor?: Maybe<Scalars['String']['output']>;
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

/** Credential record definition. Tracks every credential instance issued through a flow. */
export type CredentialRecord = Model & {
  __typename?: 'CredentialRecord';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The issuance run this record belongs to */
  credentialRecordBatch?: Maybe<IssuanceRun>;
  /** The collection of events */
  credentialRecordEvents: CredentialRecordEventConnection;
  /** The mechanism-specific revocation meta */
  credentialRecordMeta?: Maybe<CredentialRecordMeta>;
  /**
   * Immutable point-in-time snapshot of all referenced entities at issuance.
   * All display data comes from this — cross-DB references are for filtering only.
   */
  credentialRecordSnapshot?: Maybe<CredentialRecordSnapshot>;
  /** Origin reference for filtering (source may be deleted). For display data, use snapshot. */
  credentialUuid: Scalars['UUID']['output'];
  /** The expiry timestamp */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** The credential format */
  format: CredentialRecordFormat;
  /** Origin reference for filtering (source may be deleted). For display data, use snapshot. */
  handlerAppUuid: Scalars['UUID']['output'];
  /** The issuance run UUID */
  issuanceRunUuid?: Maybe<Scalars['UUID']['output']>;
  /** Origin reference for filtering (source may be deleted). For display data, use snapshot. */
  issuanceUuid: Scalars['UUID']['output'];
  /** The issuance timestamp */
  issuedAt: Scalars['DateTime']['output'];
  /** Origin reference for filtering (source may be deleted). For display data, use snapshot. */
  issuerUuid: Scalars['UUID']['output'];
  /** The revocation mechanism type */
  metaType: CredentialRecordMetaType;
  /** Origin reference for filtering (source may be deleted). For display data, use snapshot. */
  organizationUuid: Scalars['UUID']['output'];
  /** The revocation timestamp */
  revokedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The current lifecycle state */
  state: CredentialRecordState;
  /** The suspension timestamp */
  suspendedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Origin reference for filtering (source may be deleted). For display data, use snapshot. */
  trustUuid: Scalars['UUID']['output'];
  /** The EAA regulatory category */
  type: CredentialRecordType;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** Credential record definition. Tracks every credential instance issued through a flow. */
export type CredentialRecordCredentialRecordEventsArgs = {
  input?: InputMaybe<FindManyCredentialRecordEventsInput>;
};

/** Actions available on a credential record. */
export enum CredentialRecordAction {
  Reinstate = 'REINSTATE',
  Revoke = 'REVOKE',
  Suspend = 'SUSPEND'
}

/** The credential record connection definition. */
export type CredentialRecordConnection = {
  __typename?: 'CredentialRecordConnection';
  edges: Array<Maybe<CredentialRecordEdge>>;
  pageInfo: PageInfo;
};

/** The credential record edge definition. */
export type CredentialRecordEdge = {
  __typename?: 'CredentialRecordEdge';
  cursor: Scalars['String']['output'];
  node: CredentialRecord;
};

/** Credential record event definition. Immutable audit trail for every status transition. */
export type CredentialRecordEvent = Model & {
  __typename?: 'CredentialRecordEvent';
  /** The actor type (organization_user, system, provider) */
  actorType?: Maybe<Scalars['String']['output']>;
  /** The actor UUID (org user or system) */
  actorUuid?: Maybe<Scalars['UUID']['output']>;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential record this event belongs to */
  credentialRecord: CredentialRecord;
  /** The credential record UUID */
  credentialRecordUuid: Scalars['UUID']['output'];
  /** The state after the transition */
  newState: CredentialRecordState;
  /** The state before the transition */
  previousState: CredentialRecordState;
  /** The reason for the transition */
  reason?: Maybe<Scalars['String']['output']>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential record event connection definition. */
export type CredentialRecordEventConnection = {
  __typename?: 'CredentialRecordEventConnection';
  edges: Array<Maybe<CredentialRecordEventEdge>>;
  pageInfo: PageInfo;
};

/** The credential record event edge definition. */
export type CredentialRecordEventEdge = {
  __typename?: 'CredentialRecordEventEdge';
  cursor: Scalars['String']['output'];
  node: CredentialRecordEvent;
};

/** Fields which can be used to filter credential record events on. Value must be camel case. */
export enum CredentialRecordEventFilteringField {
  ActorType = 'actorType',
  CreatedAt = 'createdAt',
  CredentialRecordUuid = 'credentialRecordUuid',
  NewState = 'newState'
}

/** Fields which can be used to sort credential record events on. Value must be camel case. */
export enum CredentialRecordEventSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential record events. */
export type CredentialRecordEventSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialRecordEventSortEnum;
};

/** Fields which can be used to filter credential records on. Value must be camel case. */
export enum CredentialRecordFilteringField {
  CreatedAt = 'createdAt',
  CredentialUuid = 'credentialUuid',
  Format = 'format',
  HandlerAppUuid = 'handlerAppUuid',
  IssuanceRunUuid = 'issuanceRunUuid',
  IssuedAt = 'issuedAt',
  IssuerUuid = 'issuerUuid',
  MetaType = 'metaType',
  OrganizationUuid = 'organizationUuid',
  State = 'state',
  Type = 'type',
  Uuid = 'uuid'
}

/** Credential format. */
export enum CredentialRecordFormat {
  External = 'EXTERNAL',
  Idemix = 'IDEMIX',
  Mdoc = 'MDOC',
  SdJwt = 'SD_JWT'
}

/** Credential record meta definition. Hub model with one-to-one relations per revocation mechanism. */
export type CredentialRecordMeta = Model & {
  __typename?: 'CredentialRecordMeta';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential record the meta belongs to. */
  credentialRecord: CredentialRecord;
  /** The Token Status List meta (present when metaType = TOKEN_STATUS_LIST) */
  tokenStatusList?: Maybe<CredentialRecordMetaTokenStatusList>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** The Yivi revocation meta (present when metaType = YIVI_REVOCATION) */
  yiviRevocation?: Maybe<CredentialRecordMetaYiviRevocation>;
};

/** The credential record meta connection definition. */
export type CredentialRecordMetaConnection = {
  __typename?: 'CredentialRecordMetaConnection';
  edges: Array<Maybe<CredentialRecordMetaEdge>>;
  pageInfo: PageInfo;
};

/** The credential record meta edge definition. */
export type CredentialRecordMetaEdge = {
  __typename?: 'CredentialRecordMetaEdge';
  cursor: Scalars['String']['output'];
  node: CredentialRecordMeta;
};

/** Fields which can be used to filter credential record meta on. Value must be camel case. */
export enum CredentialRecordMetaFilteringField {
  CredentialRecordUuid = 'credentialRecordUuid'
}

/** Fields which can be used to sort credential record meta on. Value must be camel case. */
export enum CredentialRecordMetaSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential record meta. */
export type CredentialRecordMetaSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialRecordMetaSortEnum;
};

/**
 * Token Status List meta definition. Stores the index and status list reference
 * for credentials using draft-ietf-oauth-status-list revocation.
 */
export type CredentialRecordMetaTokenStatusList = Model & {
  __typename?: 'CredentialRecordMetaTokenStatusList';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential record meta the token status list meta belongs to. */
  credentialRecordMeta: CredentialRecordMeta;
  /** The status list this entry belongs to */
  statusList: StatusList;
  /** The entry index in the StatusList (bit position = index * bits) */
  statusListIndex: Scalars['Int']['output'];
  /** The status list UUID */
  statusListUuid: Scalars['UUID']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential record meta token status list connection definition. */
export type CredentialRecordMetaTokenStatusListConnection = {
  __typename?: 'CredentialRecordMetaTokenStatusListConnection';
  edges: Array<Maybe<CredentialRecordMetaTokenStatusListEdge>>;
  pageInfo: PageInfo;
};

/** The credential record meta token status list edge definition. */
export type CredentialRecordMetaTokenStatusListEdge = {
  __typename?: 'CredentialRecordMetaTokenStatusListEdge';
  cursor: Scalars['String']['output'];
  node: CredentialRecordMetaTokenStatusList;
};

/** Fields which can be used to filter credential record meta token status list on. Value must be camel case. */
export enum CredentialRecordMetaTokenStatusListFilteringField {
  CredentialRecordMetaUuid = 'credentialRecordMetaUuid',
  StatusListIndex = 'statusListIndex',
  StatusListUuid = 'statusListUuid'
}

/** Fields which can be used to sort credential record meta token status list on. Value must be camel case. */
export enum CredentialRecordMetaTokenStatusListSortEnum {
  CreatedAt = 'createdAt',
  StatusListIndex = 'statusListIndex'
}

/** Input options for sorting credential record meta token status list. */
export type CredentialRecordMetaTokenStatusListSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialRecordMetaTokenStatusListSortEnum;
};

/** Credential record revocation mechanism type. */
export enum CredentialRecordMetaType {
  None = 'NONE',
  TokenStatusList = 'TOKEN_STATUS_LIST',
  YiviRevocation = 'YIVI_REVOCATION'
}

/**
 * Yivi RSA-B accumulator revocation meta definition. Stores the data needed
 * to construct a RevocationRequest to the IRMA server.
 */
export type CredentialRecordMetaYiviRevocation = Model & {
  __typename?: 'CredentialRecordMetaYiviRevocation';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential record meta the yivi revocation meta belongs to. */
  credentialRecordMeta: CredentialRecordMeta;
  /** The Yivi credential type identifier (e.g. "pbdf.gemeente.personalData") */
  credentialTypeId: Scalars['String']['output'];
  /** The issuer-chosen revocation key assigned during issuance */
  revocationKey: Scalars['String']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential record meta yivi revocation connection definition. */
export type CredentialRecordMetaYiviRevocationConnection = {
  __typename?: 'CredentialRecordMetaYiviRevocationConnection';
  edges: Array<Maybe<CredentialRecordMetaYiviRevocationEdge>>;
  pageInfo: PageInfo;
};

/** The credential record meta yivi revocation edge definition. */
export type CredentialRecordMetaYiviRevocationEdge = {
  __typename?: 'CredentialRecordMetaYiviRevocationEdge';
  cursor: Scalars['String']['output'];
  node: CredentialRecordMetaYiviRevocation;
};

/** Fields which can be used to filter credential record meta yivi revocation on. Value must be camel case. */
export enum CredentialRecordMetaYiviRevocationFilteringField {
  CredentialRecordMetaUuid = 'credentialRecordMetaUuid',
  CredentialTypeId = 'credentialTypeId',
  RevocationKey = 'revocationKey'
}

/** Fields which can be used to sort credential record meta yivi revocation on. Value must be camel case. */
export enum CredentialRecordMetaYiviRevocationSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential record meta yivi revocation. */
export type CredentialRecordMetaYiviRevocationSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialRecordMetaYiviRevocationSortEnum;
};

/**
 * Immutable point-in-time snapshot of issuer and credential data at issuance.
 * Written once when a CredentialRecord is created, never updated.
 */
export type CredentialRecordSnapshot = Model & {
  __typename?: 'CredentialRecordSnapshot';
  /** The creation time. */
  createdAt: Scalars['DateTime']['output'];
  /** Whether holder key binding (proof-of-possession) was required. */
  credentialKeyBinding: Scalars['Boolean']['output'];
  /** The human-readable credential name. */
  credentialName: Scalars['String']['output'];
  /** The credential record this snapshot belongs to. */
  credentialRecord: CredentialRecord;
  /** The credential type identifier (vct for SD-JWT, docType for mDOC). */
  credentialType: Scalars['String']['output'];
  /** The handler app name. */
  handlerAppName: Scalars['String']['output'];
  /** The issuer identifier URL. */
  issuerIdentifier: Scalars['String']['output'];
  /** The issuer name. */
  issuerName: Scalars['String']['output'];
  /** The public key (JWK) that signed this credential. */
  issuerPublicKey: Scalars['String']['output'];
  /** The signing algorithm. */
  issuerPublicKeyAlgorithm: CredentialRecordSnapshotSigningAlgorithm;
  /** The SHA-256 hex fingerprint of the signing public key. */
  issuerPublicKeyFingerprint: Scalars['String']['output'];
  /** The trust framework name. */
  trustName: Scalars['String']['output'];
  /** The update time. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};

/** The credential record snapshot connection definition. */
export type CredentialRecordSnapshotConnection = {
  __typename?: 'CredentialRecordSnapshotConnection';
  edges: Array<Maybe<CredentialRecordSnapshotEdge>>;
  pageInfo: PageInfo;
};

/** The credential record snapshot edge definition. */
export type CredentialRecordSnapshotEdge = {
  __typename?: 'CredentialRecordSnapshotEdge';
  cursor: Scalars['String']['output'];
  node: CredentialRecordSnapshot;
};

/** Fields which can be used to filter credential record snapshots on. */
export enum CredentialRecordSnapshotFilteringField {
  CreatedAt = 'createdAt',
  CredentialRecordUuid = 'credentialRecordUuid',
  CredentialType = 'credentialType',
  IssuerIdentifier = 'issuerIdentifier',
  IssuerName = 'issuerName',
  IssuerPublicKeyAlgorithm = 'issuerPublicKeyAlgorithm',
  IssuerPublicKeyFingerprint = 'issuerPublicKeyFingerprint'
}

/** Signing algorithm used to sign the EAA. */
export enum CredentialRecordSnapshotSigningAlgorithm {
  Cl = 'CL',
  Ed25519 = 'ED25519',
  Es256 = 'ES256',
  Es384 = 'ES384',
  Es512 = 'ES512',
  Rs256 = 'RS256',
  Unknown = 'UNKNOWN'
}

/** Fields which can be used to sort credential record snapshots on. */
export enum CredentialRecordSnapshotSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential record snapshots. */
export type CredentialRecordSnapshotSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialRecordSnapshotSortEnum;
};

/** Fields which can be used to sort credential records on. Value must be camel case. */
export enum CredentialRecordSortEnum {
  CreatedAt = 'createdAt',
  IssuedAt = 'issuedAt',
  State = 'state'
}

/** Input options for sorting credential records. */
export type CredentialRecordSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialRecordSortEnum;
};

/** Credential record lifecycle state. */
export enum CredentialRecordState {
  Issued = 'ISSUED',
  Pending = 'PENDING',
  Revoked = 'REVOKED',
  Suspended = 'SUSPENDED'
}

/** EAA regulatory category (ETSI TS 119 472-1 §4.2.2). */
export enum CredentialRecordType {
  NonQualified = 'NON_QUALIFIED',
  Pub = 'PUB',
  Qualified = 'QUALIFIED'
}

/** Fields which can be used to sort credential on. Value must be camel case. */
export enum CredentialSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  VersionNumber = 'versionNumber'
}

/** Input options for sorting credential. */
export type CredentialSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialSortEnum;
};

/** Credential trust issuer definition. */
export type CredentialTrustIssuer = Model & {
  __typename?: 'CredentialTrustIssuer';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential this credential trust issuer belongs to. */
  credential: Credential;
  /** The trust issuer this credential trust issuer belongs to. */
  trustIssuer: TrustIssuer;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The credential trust issuer connection definition. */
export type CredentialTrustIssuerConnection = {
  __typename?: 'CredentialTrustIssuerConnection';
  edges: Array<Maybe<CredentialTrustIssuerEdge>>;
  pageInfo: PageInfo;
};

/** The credential trust issuer edge definition. */
export type CredentialTrustIssuerEdge = {
  __typename?: 'CredentialTrustIssuerEdge';
  cursor: Scalars['String']['output'];
  node: CredentialTrustIssuer;
};

/** Fields which can be used to filter credential trust issuer on. Value must be camel case. */
export enum CredentialTrustIssuerFilteringField {
  CreatedAt = 'createdAt',
  CredentialUuid = 'credentialUuid',
  TrustIssuerUuid = 'trustIssuerUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort credential trust issuer on. Value must be camel case. */
export enum CredentialTrustIssuerSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting credential trust issuer. */
export type CredentialTrustIssuerSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialTrustIssuerSortEnum;
};

/** Credential version definition (RFC 0012). */
export type CredentialVersion = Model & {
  __typename?: 'CredentialVersion';
  /** The collection of change logs. */
  changeLogs: CredentialChangeLogConnection;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The collection of all credentials for this version. */
  credentials: CredentialConnection;
  /** The deprecation reason, if any. */
  deprecationReason?: Maybe<Scalars['String']['output']>;
  /** The draft version of the credential, if any. */
  draft?: Maybe<Credential>;
  /** Whether a draft version exists. */
  hasDraft: Scalars['Boolean']['output'];
  /** Whether a live version exists. */
  hasLive: Scalars['Boolean']['output'];
  /** Whether this credential is deprecated. */
  isDeprecated: Scalars['Boolean']['output'];
  /** The live version of the credential, if any. */
  live?: Maybe<Credential>;
  /** The organization this credential version belongs to. */
  organization: Organization;
  /** The organization UUID */
  organizationUuid: Scalars['UUID']['output'];
  /** The slug */
  slug: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** Credential version definition (RFC 0012). */
export type CredentialVersionChangeLogsArgs = {
  input?: InputMaybe<FindManyCredentialChangeLogsInput>;
};


/** Credential version definition (RFC 0012). */
export type CredentialVersionCredentialsArgs = {
  input?: InputMaybe<FindManyCredentialsInput>;
};

/** The credential version connection definition. */
export type CredentialVersionConnection = {
  __typename?: 'CredentialVersionConnection';
  edges: Array<Maybe<CredentialVersionEdge>>;
  pageInfo: PageInfo;
};

/** The credential version edge definition. */
export type CredentialVersionEdge = {
  __typename?: 'CredentialVersionEdge';
  cursor: Scalars['String']['output'];
  node: CredentialVersion;
};

/** Fields which can be used to filter credential version on. Value must be camel case. */
export enum CredentialVersionFilteringField {
  CreatedAt = 'createdAt',
  HasDraft = 'hasDraft',
  HasLive = 'hasLive',
  IsDeprecated = 'isDeprecated',
  OrganizationUuid = 'organizationUuid',
  Slug = 'slug'
}

/** Fields which can be used to sort credential version on. Value must be camel case. */
export enum CredentialVersionSortEnum {
  CreatedAt = 'createdAt',
  Slug = 'slug'
}

/** Input options for sorting credential version. */
export type CredentialVersionSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: CredentialVersionSortEnum;
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

/** The input for deprecating a credential (RFC 0012). */
export type DeprecateCredentialInput = {
  /** The deprecation reason. */
  reason: Scalars['NonEmpty']['input'];
};

/** The input for deprecating an issuer (RFC 0012). */
export type DeprecateIssuerInput = {
  /** The deprecation reason. */
  reason: Scalars['NonEmpty']['input'];
};

/** The input for deprecating a trust framework. */
export type DeprecateTrustInput = {
  /** The reason for deprecation */
  reason: Scalars['NonEmpty']['input'];
};

/** Flow disclosure definition. */
export type Disclosure = Model & {
  __typename?: 'Disclosure';
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The data deletion policy. */
  deletionPolicy?: Maybe<Scalars['String']['output']>;
  /** The associated brand with this disclosure */
  disclosureBrands: DisclosureBrandConnection;
  /** The associated domains with this disclosure */
  disclosureDomains: DisclosureDomainConnection;
  /** A list of flow handlers belonging to this flow disclosure. */
  disclosureHandlers: DisclosureHandlerConnection;
  /** The associated labels with this disclosure */
  disclosureLabels: DisclosureLabelConnection;
  /** The associated mappings with this disclosure */
  disclosureMappings: DisclosureMappingConnection;
  /** The associated secrets with this disclosure */
  disclosureSecrets: DisclosureSecretConnection;
  /** The JWT media type */
  jwtMediaType: Scalars['JwtMediaType']['output'];
  /** The meta of the flow. */
  meta: Scalars['JSONObject']['output'];
  /** The name of the flow. */
  name: Scalars['NonEmpty']['output'];
  /** The organization the flow belongs to. */
  organization: Organization;
  /** The active provisioning task, if the flow is currently being provisioned. */
  provisioningTask?: Maybe<ProvisioningTask>;
  /** The purpose statement describing why attributes are being attested. */
  purposeStatement?: Maybe<Scalars['String']['output']>;
  /** The indicator if explicit consent is required */
  requireExplicitConsent: Scalars['Boolean']['output'];
  /** The data retention policy. */
  retentionPolicy?: Maybe<Scalars['String']['output']>;
  /** The data sharing policy. */
  sharingPolicy?: Maybe<Scalars['String']['output']>;
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
export type DisclosureDisclosureHandlersArgs = {
  input?: InputMaybe<FindManyDisclosureHandlersInput>;
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
export type DisclosureDisclosureSecretsArgs = {
  input?: InputMaybe<FindManyDisclosureSecretsInput>;
};

/** DisclosureAction */
export enum DisclosureAction {
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
  /** The trust the trustUuid belongs to. */
  trust: Trust;
  /** The uuid of the trust. */
  trustUuid: Scalars['UUID']['output'];
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
  TrustUuid = 'trustUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow disclosure field on. Value must be camel case. */
export enum DisclosureCredentialSortEnum {
  CreatedAt = 'createdAt',
  CredentialUuid = 'credentialUuid',
  IssuerUuid = 'issuerUuid',
  TrustUuid = 'trustUuid',
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
  disclosureHandler: DisclosureHandler;
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
  DisclosureHandlerUuid = 'disclosureHandlerUuid',
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

/** Flow disclosure handler definition. */
export type DisclosureHandler = Model & {
  __typename?: 'DisclosureHandler';
  /** The flow disclosure handler configuration. */
  configuration?: Maybe<DisclosureHandlerConfiguration>;
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The flow disclosure the flow handler belongs to. */
  disclosure: Disclosure;
  /** A list of flow queries belonging to this flow handler. */
  disclosureGroups: DisclosureGroupConnection;
  /** The handler the handlerAppUuid belongs to. */
  handlerApp: HandlerApp;
  /** The uuid of the flow handler app. */
  handlerAppUuid: Scalars['UUID']['output'];
  /** Whether this handler is marked as recommended in this flow. */
  recommended: Scalars['Boolean']['output'];
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Flow disclosure handler definition. */
export type DisclosureHandlerDisclosureGroupsArgs = {
  input?: InputMaybe<FindManyDisclosureGroupsInput>;
};

/** Flow disclosure handler configuration definition */
export type DisclosureHandlerConfiguration = Model & {
  __typename?: 'DisclosureHandlerConfiguration';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The DisclosureHandler this configuration belongs to */
  disclosureHandler: DisclosureHandler;
  /** The NL Wallet flow disclosure handler configuration */
  nlWallet?: Maybe<DisclosureHandlerConfigurationNlWallet>;
  /** The OID4VC flow disclosure handler configuration */
  oid4vc?: Maybe<DisclosureHandlerConfigurationOid4Vc>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The DisclosureHandlerConfiguration connection definition. */
export type DisclosureHandlerConfigurationConnection = {
  __typename?: 'DisclosureHandlerConfigurationConnection';
  edges: Array<Maybe<DisclosureHandlerConfigurationEdge>>;
  pageInfo: PageInfo;
};

/** The DisclosureHandlerConfiguration edge definition. */
export type DisclosureHandlerConfigurationEdge = {
  __typename?: 'DisclosureHandlerConfigurationEdge';
  cursor: Scalars['String']['output'];
  node: DisclosureHandlerConfiguration;
};

/** Fields which can be used to filter DisclosureHandlerConfiguration on. Value must be camel case. */
export enum DisclosureHandlerConfigurationFilteringField {
  DisclosureHandlerUuid = 'disclosureHandlerUuid'
}

/** DisclosureHandlerConfigurationNLWallet definition */
export type DisclosureHandlerConfigurationNlWallet = Model & {
  __typename?: 'DisclosureHandlerConfigurationNLWallet';
  /** The creation timestamp */
  createdAt: Scalars['DateTime']['output'];
  /** Whether the user can request deletion of their retained data. */
  deletable?: Maybe<Scalars['Boolean']['output']>;
  /** The DisclosureHandlerConfiguration this object belongs to. */
  disclosureHandlerConfiguration: DisclosureHandlerConfiguration;
  /** Whether the organization intends to retain the disclosed data. */
  intentToRetain?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the organization intends to share the disclosed data with third parties. */
  intentToShare?: Maybe<Scalars['Boolean']['output']>;
  /** Maximum retention duration in minutes. Leave empty for no maximum. */
  maxRetentionDuration?: Maybe<Scalars['Int']['output']>;
  /** The OID4VC verification profile */
  profile: Oid4vcVerificationProfile;
  /** Purpose statement */
  purposeStatement?: Maybe<Scalars['JSONObject']['output']>;
  /** The timestamp of when the type has been last updated */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The DisclosureHandlerConfigurationNLWallet connection definition. */
export type DisclosureHandlerConfigurationNlWalletConnection = {
  __typename?: 'DisclosureHandlerConfigurationNLWalletConnection';
  edges: Array<Maybe<DisclosureHandlerConfigurationNlWalletEdge>>;
  pageInfo: PageInfo;
};

/** The DisclosureHandlerConfigurationNLWallet edge definition. */
export type DisclosureHandlerConfigurationNlWalletEdge = {
  __typename?: 'DisclosureHandlerConfigurationNLWalletEdge';
  cursor: Scalars['String']['output'];
  node: DisclosureHandlerConfigurationNlWallet;
};

/** Fields which can be used to filter DisclosureHandlerConfigurationNLWallet on. Value must be camel case. */
export enum DisclosureHandlerConfigurationNlWalletFilteringField {
  DisclosureHandlerConfigurationUuid = 'disclosureHandlerConfigurationUuid',
  Intent = 'intent'
}

/** Fields which can be used to sort DisclosureHandlerConfigurationNLWallet on. Value must be camel case. */
export enum DisclosureHandlerConfigurationNlWalletSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting DisclosureHandlerConfigurationNLWallet. */
export type DisclosureHandlerConfigurationNlWalletSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: DisclosureHandlerConfigurationNlWalletSortEnum;
};

/** DisclosureHandlerConfigurationOID4VC definition */
export type DisclosureHandlerConfigurationOid4Vc = Model & {
  __typename?: 'DisclosureHandlerConfigurationOID4VC';
  /** The creation timestamp */
  createdAt: Scalars['DateTime']['output'];
  /** The DisclosureHandlerConfiguration this object belongs to. */
  disclosureHandlerConfiguration: DisclosureHandlerConfiguration;
  /** The OID4VC verification profile */
  profile: Oid4vcVerificationProfile;
  /** The timestamp of when the type has been last updated */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The DisclosureHandlerConfigurationOID4VC connection definition. */
export type DisclosureHandlerConfigurationOid4VcConnection = {
  __typename?: 'DisclosureHandlerConfigurationOID4VCConnection';
  edges: Array<Maybe<DisclosureHandlerConfigurationOid4VcEdge>>;
  pageInfo: PageInfo;
};

/** The DisclosureHandlerConfigurationOID4VC edge definition. */
export type DisclosureHandlerConfigurationOid4VcEdge = {
  __typename?: 'DisclosureHandlerConfigurationOID4VCEdge';
  cursor: Scalars['String']['output'];
  node: DisclosureHandlerConfigurationOid4Vc;
};

/** Fields which can be used to filter DisclosureHandlerConfigurationOID4VC on. Value must be camel case. */
export enum DisclosureHandlerConfigurationOid4VcFilteringField {
  DisclosureHandlerConfigurationUuid = 'disclosureHandlerConfigurationUuid'
}

/** Fields which can be used to sort DisclosureHandlerConfigurationOID4VC on. Value must be camel case. */
export enum DisclosureHandlerConfigurationOid4VcSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting DisclosureHandlerConfigurationOID4VC. */
export type DisclosureHandlerConfigurationOid4VcSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: DisclosureHandlerConfigurationOid4VcSortEnum;
};

/** Fields which can be used to sort DisclosureHandlerConfiguration on. Value must be camel case. */
export enum DisclosureHandlerConfigurationSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting DisclosureHandlerConfiguration. */
export type DisclosureHandlerConfigurationSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: DisclosureHandlerConfigurationSortEnum;
};

/** The flow disclosure handler connection definition. */
export type DisclosureHandlerConnection = {
  __typename?: 'DisclosureHandlerConnection';
  edges: Array<DisclosureHandlerEdge>;
  pageInfo: PageInfo;
};

/** The flow disclosure handler edge definition. */
export type DisclosureHandlerEdge = {
  __typename?: 'DisclosureHandlerEdge';
  cursor: Scalars['String']['output'];
  node: DisclosureHandler;
};

/** Fields which can be used to filter flow disclosure handlers on. Value must be camel case. */
export enum DisclosureHandlerFilteringField {
  DisclosureUuid = 'disclosureUuid',
  HandlerAppUuid = 'handlerAppUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow disclosure handlers on. Value must be camel case. */
export enum DisclosureHandlerSortEnum {
  CreatedAt = 'createdAt',
  HandlerAppUuid = 'handlerAppUuid',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow disclosure handlers. */
export type DisclosureHandlerSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: DisclosureHandlerSortEnum;
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

/** Disclosure secret definition. Links an organization secret to a disclosure flow. */
export type DisclosureSecret = Model & {
  __typename?: 'DisclosureSecret';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The flow disclosure */
  disclosure: Disclosure;
  /** The organization secret */
  organizationSecret: OrganizationSecret;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** A connection */
export type DisclosureSecretConnection = {
  __typename?: 'DisclosureSecretConnection';
  edges: Array<DisclosureSecretEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type DisclosureSecretEdge = {
  __typename?: 'DisclosureSecretEdge';
  cursor: Scalars['String']['output'];
  node: DisclosureSecret;
};

/** Fields which can be used to filter disclosure secrets on. Value must be camel case. */
export enum DisclosureSecretFilteringField {
  DisclosureUuid = 'disclosureUuid',
  OrganizationSecretUuid = 'organizationSecretUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort disclosure secrets on. Value must be camel case. */
export enum DisclosureSecretSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting disclosure secrets. */
export type DisclosureSecretSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: DisclosureSecretSortEnum;
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
  Inactive = 'INACTIVE',
  Provisioning = 'PROVISIONING'
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
export type FindManyAppLocalesFilter = {
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
export type FindManyAppLocalesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAppLocalesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AppLocaleSortInput>;
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

/** Input for filtering attribute format Datakeeper on provided fields. */
export type FindManyAttributeFormatDatakeepersFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeFormatDatakeeperFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute format Datakeepers on filters, pagination and sorting. */
export type FindManyAttributeFormatDatakeepersInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeFormatDatakeepersFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeFormatDatakeeperSortInput>;
};

/** Input for filtering attribute format Digidentity on provided fields. */
export type FindManyAttributeFormatDigidentitiesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeFormatDigidentityFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute format Digidentities on filters, pagination and sorting. */
export type FindManyAttributeFormatDigidentitiesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeFormatDigidentitiesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeFormatDigidentitySortInput>;
};

/** Input for filtering attribute format MSO MDOC on provided fields. */
export type FindManyAttributeFormatMsoMdocsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeFormatMsoMdocFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute format MSO MDOCs on filters, pagination and sorting. */
export type FindManyAttributeFormatMsoMdocsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeFormatMsoMdocsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeFormatMsoMdocSortInput>;
};

/** Input for filtering attribute format Nect on provided fields. */
export type FindManyAttributeFormatNectsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeFormatNectFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute format Nects on filters, pagination and sorting. */
export type FindManyAttributeFormatNectsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeFormatNectsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeFormatNectSortInput>;
};

/** Input for filtering attribute format NL Wallet on provided fields. */
export type FindManyAttributeFormatNlWalletsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeFormatNlWalletFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute format NL Wallets on filters, pagination and sorting. */
export type FindManyAttributeFormatNlWalletsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeFormatNlWalletsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeFormatNlWalletSortInput>;
};

/** Input for filtering attribute format ReadID on provided fields. */
export type FindManyAttributeFormatReadidsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeFormatReadidFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute format ReadIDs on filters, pagination and sorting. */
export type FindManyAttributeFormatReadidsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeFormatReadidsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeFormatReadidSortInput>;
};

/** Input for filtering attribute format SD-JWT on provided fields. */
export type FindManyAttributeFormatSdJwtsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeFormatSdJwtFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute format SD-JWTs on filters, pagination and sorting. */
export type FindManyAttributeFormatSdJwtsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeFormatSdJwtsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeFormatSdJwtSortInput>;
};

/** Input for filtering attribute format Yivi on provided fields. */
export type FindManyAttributeFormatYivisFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeFormatYiviFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute format Yivis on filters, pagination and sorting. */
export type FindManyAttributeFormatYivisInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeFormatYivisFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeFormatYiviSortInput>;
};

/** Input for filtering attribute format Yoti on provided fields. */
export type FindManyAttributeFormatYotisFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AttributeFormatYotiFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many attribute format Yotis on filters, pagination and sorting. */
export type FindManyAttributeFormatYotisInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeFormatYotisFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeFormatYotiSortInput>;
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
export type FindManyAttributeLocalesFilter = {
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

/** Input for filtering many attribute locales on filters, pagination and sorting. */
export type FindManyAttributeLocalesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAttributeLocalesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AttributeLocaleSortInput>;
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

/** Input for filtering finding many AuthenticationHandlerConfigurationNLWallet. */
export type FindManyAuthenticationHandlerConfigurationNlWalletsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AuthenticationHandlerConfigurationNlWalletFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for finding many AuthenticationHandlerConfigurationNLWallet. */
export type FindManyAuthenticationHandlerConfigurationNlWalletsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAuthenticationHandlerConfigurationNlWalletsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AuthenticationHandlerConfigurationNlWalletSortInput>;
};

/** Input for filtering AuthenticationHandlerConfiguration on provided fields. */
export type FindManyAuthenticationHandlerConfigurationsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AuthenticationHandlerConfigurationFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many AuthenticationHandlerConfiguration on filters, pagination and sorting. */
export type FindManyAuthenticationHandlerConfigurationsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAuthenticationHandlerConfigurationsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AuthenticationHandlerConfigurationSortInput>;
};

/** Input for filtering flow authentication handler on provided fields. */
export type FindManyAuthenticationHandlersFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AuthenticationHandlerFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow authentication handlers on filters, pagination and sorting. */
export type FindManyAuthenticationHandlersInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAuthenticationHandlersFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AuthenticationHandlerSortInput>;
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

/** Input for filtering authentication secrets on provided fields. */
export type FindManyAuthenticationSecretsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: AuthenticationSecretFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many authentication secrets on filters, pagination and sorting. */
export type FindManyAuthenticationSecretsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyAuthenticationSecretsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<AuthenticationSecretSortInput>;
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

/** Input for filtering billing flow app cost overviews on provided fields. */
export type FindManyBillingFlowAppCostOverviewsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: BillingFlowAppCostOverviewFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for retrieving aggregated flow app cost overviews on filters, pagination, sorting and a time window. */
export type FindManyBillingFlowAppCostOverviewsInput = {
  /**
   * Filtering options. A `billingWalletUuid` filter is required to scope the overview
   * to a wallet, and a `flowUuid` filter is required to scope it to a single flow.
   */
  filtering?: InputMaybe<Array<FindManyBillingFlowAppCostOverviewsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<BillingFlowAppCostOverviewSortInput>;
};

/** Input for filtering billing flow cost overviews on provided fields. */
export type FindManyBillingFlowCostOverviewsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: BillingFlowCostOverviewFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for retrieving aggregated flow cost overviews on filters, pagination, sorting and a time window. */
export type FindManyBillingFlowCostOverviewsInput = {
  /** Filtering options. A `billingWalletUuid` filter is required to scope the overview to a wallet. */
  filtering?: InputMaybe<Array<FindManyBillingFlowCostOverviewsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<BillingFlowCostOverviewSortInput>;
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

/** Input for filtering credential change log on provided fields. */
export type FindManyCredentialChangeLogsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialChangeLogFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential change logs on filters, pagination and sorting. */
export type FindManyCredentialChangeLogsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialChangeLogsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialChangeLogSortInput>;
};

/** Input for filtering credential Datakeeper format on provided fields. */
export type FindManyCredentialFormatDatakeepersFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialFormatDatakeeperFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential Datakeeper formats on filters, pagination and sorting. */
export type FindManyCredentialFormatDatakeepersInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialFormatDatakeepersFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialFormatDatakeeperSortInput>;
};

/** Input for filtering credential Digidentity format on provided fields. */
export type FindManyCredentialFormatDigidentitiesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialFormatDigidentityFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential Digidentity formats on filters, pagination and sorting. */
export type FindManyCredentialFormatDigidentitiesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialFormatDigidentitiesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialFormatDigidentitySortInput>;
};

/** Input for filtering credential MSO MDOC format on provided fields. */
export type FindManyCredentialFormatMsoMdocsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialFormatMsoMdocFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential MSO MDOC formats on filters, pagination and sorting. */
export type FindManyCredentialFormatMsoMdocsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialFormatMsoMdocsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialFormatMsoMdocSortInput>;
};

/** Input for filtering credential Nect format on provided fields. */
export type FindManyCredentialFormatNectsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialFormatNectFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential Nect formats on filters, pagination and sorting. */
export type FindManyCredentialFormatNectsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialFormatNectsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialFormatNectSortInput>;
};

/** Input for filtering credential NL Wallet format on provided fields. */
export type FindManyCredentialFormatNlWalletsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialFormatNlWalletFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential NL Wallet formats on filters, pagination and sorting. */
export type FindManyCredentialFormatNlWalletsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialFormatNlWalletsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialFormatNlWalletSortInput>;
};

/** Input for filtering credential ReadID format on provided fields. */
export type FindManyCredentialFormatReadidsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialFormatReadidFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential ReadID formats on filters, pagination and sorting. */
export type FindManyCredentialFormatReadidsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialFormatReadidsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialFormatReadidSortInput>;
};

/** Input for filtering credential SD-JWT format on provided fields. */
export type FindManyCredentialFormatSdJwtsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialFormatSdJwtFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential SD-JWT formats on filters, pagination and sorting. */
export type FindManyCredentialFormatSdJwtsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialFormatSdJwtsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialFormatSdJwtSortInput>;
};

/** Input for filtering credential Yivi format on provided fields. */
export type FindManyCredentialFormatYivisFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialFormatYiviFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential Yivi formats on filters, pagination and sorting. */
export type FindManyCredentialFormatYivisInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialFormatYivisFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialFormatYiviSortInput>;
};

/** Input for filtering credential Yoti format on provided fields. */
export type FindManyCredentialFormatYotisFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialFormatYotiFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential Yoti formats on filters, pagination and sorting. */
export type FindManyCredentialFormatYotisInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialFormatYotisFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialFormatYotiSortInput>;
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
export type FindManyCredentialLocalesFilter = {
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

/** Input for filtering many credential locales on filters, pagination and sorting. */
export type FindManyCredentialLocalesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialLocalesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialLocaleSortInput>;
};

/** Input for filtering credential record events on provided fields. */
export type FindManyCredentialRecordEventsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialRecordEventFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential record events on filters, pagination and sorting. */
export type FindManyCredentialRecordEventsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialRecordEventsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialRecordEventSortInput>;
};

/** Input for filtering credential record meta on provided fields. */
export type FindManyCredentialRecordMetaFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialRecordMetaFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential record meta on filters, pagination and sorting. */
export type FindManyCredentialRecordMetaInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialRecordMetaFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialRecordMetaSortInput>;
};

/** Input for filtering credential record meta token status list on provided fields. */
export type FindManyCredentialRecordMetaTokenStatusListFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialRecordMetaTokenStatusListFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential record meta token status list on filters, pagination and sorting. */
export type FindManyCredentialRecordMetaTokenStatusListInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialRecordMetaTokenStatusListFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialRecordMetaTokenStatusListSortInput>;
};

/** Input for filtering credential record meta yivi revocation on provided fields. */
export type FindManyCredentialRecordMetaYiviRevocationFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialRecordMetaYiviRevocationFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential record meta yivi revocation on filters, pagination and sorting. */
export type FindManyCredentialRecordMetaYiviRevocationInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialRecordMetaYiviRevocationFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialRecordMetaYiviRevocationSortInput>;
};

/** Input for filtering credential record snapshots on provided fields. */
export type FindManyCredentialRecordSnapshotsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialRecordSnapshotFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential record snapshots on filters, pagination and sorting. */
export type FindManyCredentialRecordSnapshotsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialRecordSnapshotsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialRecordSnapshotSortInput>;
};

/** Input for filtering credential records on provided fields. */
export type FindManyCredentialRecordsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialRecordFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential records on filters, pagination and sorting. */
export type FindManyCredentialRecordsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialRecordsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialRecordSortInput>;
};

/** Input for filtering credential trust issuer on provided fields. */
export type FindManyCredentialTrustIssuersFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialTrustIssuerFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential trust issuers on filters, pagination and sorting. */
export type FindManyCredentialTrustIssuersInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialTrustIssuersFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialTrustIssuerSortInput>;
};

/** Input for filtering credential version on provided fields. */
export type FindManyCredentialVersionsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: CredentialVersionFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential versions on filters, pagination and sorting. */
export type FindManyCredentialVersionsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyCredentialVersionsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<CredentialVersionSortInput>;
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

/** Input for filtering finding many DisclosureHandlerConfigurationNLWallet. */
export type FindManyDisclosureHandlerConfigurationNlWalletsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: DisclosureHandlerConfigurationNlWalletFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for finding many DisclosureHandlerConfigurationNLWallet. */
export type FindManyDisclosureHandlerConfigurationNlWalletsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyDisclosureHandlerConfigurationNlWalletsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<DisclosureHandlerConfigurationNlWalletSortInput>;
};

/** Input for filtering finding many DisclosureHandlerConfigurationOID4VC. */
export type FindManyDisclosureHandlerConfigurationOid4VCsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: DisclosureHandlerConfigurationOid4VcFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for finding many DisclosureHandlerConfigurationOID4VC. */
export type FindManyDisclosureHandlerConfigurationOid4VCsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyDisclosureHandlerConfigurationOid4VCsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<DisclosureHandlerConfigurationOid4VcSortInput>;
};

/** Input for filtering DisclosureHandlerConfiguration on provided fields. */
export type FindManyDisclosureHandlerConfigurationsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: DisclosureHandlerConfigurationFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many DisclosureHandlerConfiguration on filters, pagination and sorting. */
export type FindManyDisclosureHandlerConfigurationsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyDisclosureHandlerConfigurationsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<DisclosureHandlerConfigurationSortInput>;
};

/** Input for filtering flow disclosure handler on provided fields. */
export type FindManyDisclosureHandlersFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: DisclosureHandlerFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow disclosure handlers on filters, pagination and sorting. */
export type FindManyDisclosureHandlersInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyDisclosureHandlersFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<DisclosureHandlerSortInput>;
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

/** Input for filtering disclosure secrets on provided fields. */
export type FindManyDisclosureSecretsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: DisclosureSecretFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many disclosure secrets on filters, pagination and sorting. */
export type FindManyDisclosureSecretsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyDisclosureSecretsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<DisclosureSecretSortInput>;
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

/** Input for filtering handler app protocol mDOC on provided fields. */
export type FindManyHandlerAppProtocolMdocsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: HandlerAppProtocolMdocFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many handler app protocol mDOC on filters, pagination and sorting. */
export type FindManyHandlerAppProtocolMdocsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyHandlerAppProtocolMdocsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<HandlerAppProtocolMdocSortInput>;
};

/** Input for filtering handler app protocol OID4VC on provided fields. */
export type FindManyHandlerAppProtocolOid4vcsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: HandlerAppProtocolOid4vcFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many handler app protocol OID4VC on filters, pagination and sorting. */
export type FindManyHandlerAppProtocolOid4vcsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyHandlerAppProtocolOid4vcsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<HandlerAppProtocolOid4vcSortInput>;
};

/** Input for filtering handler app on provided fields. */
export type FindManyHandlerAppsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: HandlerAppFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many handler apps on filters, pagination and sorting. */
export type FindManyHandlerAppsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyHandlerAppsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<HandlerAppSortInput>;
};

/** Input for filtering identity handler labels */
export type FindManyHandlerLabelsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: HandlerLabelFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many identity handler labels on filters, pagination and sorting. */
export type FindManyHandlerLabelsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyHandlerLabelsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<HandlerLabelSortInput>;
};

/** Input for filtering handler locale on provided fields. */
export type FindManyHandlerLocalesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: HandlerLocaleFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many handler locale on filters, pagination and sorting. */
export type FindManyHandlerLocalesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyHandlerLocalesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<HandlerLocaleSortInput>;
};

/** Input for filtering handler on provided fields. */
export type FindManyHandlersFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: HandlerFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many handlers on filters, pagination and sorting. */
export type FindManyHandlersInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyHandlersFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<HandlerSortInput>;
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

/** Input for filtering flow issuance credential meta oid4vc on provided fields. */
export type FindManyIssuanceCredentialMetaOid4vcFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuanceCredentialMetaOid4vcFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many credential meta oid4vc on filters, pagination and sorting. */
export type FindManyIssuanceCredentialMetaOid4vcInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuanceCredentialMetaOid4vcFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuanceCredentialMetaOid4vcSortInput>;
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

/** Input for filtering finding many IssuanceHandlerConfigurationNLWallet. */
export type FindManyIssuanceHandlerConfigurationNlWalletsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuanceHandlerConfigurationNlWalletFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for finding many IssuanceHandlerConfigurationNLWallet. */
export type FindManyIssuanceHandlerConfigurationNlWalletsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuanceHandlerConfigurationNlWalletsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuanceHandlerConfigurationNlWalletSortInput>;
};

/** Input for filtering finding many IssuanceHandlerConfigurationOID4VC. */
export type FindManyIssuanceHandlerConfigurationOid4VCsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuanceHandlerConfigurationOid4VcFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for finding many IssuanceHandlerConfigurationOID4VC. */
export type FindManyIssuanceHandlerConfigurationOid4VCsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuanceHandlerConfigurationOid4VCsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuanceHandlerConfigurationOid4VcSortInput>;
};

/** Input for filtering IssuanceHandlerConfiguration on provided fields. */
export type FindManyIssuanceHandlerConfigurationsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuanceHandlerConfigurationFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many IssuanceHandlerConfiguration on filters, pagination and sorting. */
export type FindManyIssuanceHandlerConfigurationsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuanceHandlerConfigurationsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuanceHandlerConfigurationSortInput>;
};

/** Input for filtering flow issuance handler on provided fields. */
export type FindManyIssuanceHandlersFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuanceHandlerFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow issuance handlers on filters, pagination and sorting. */
export type FindManyIssuanceHandlersInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuanceHandlersFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuanceHandlerSortInput>;
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

/** Input for filtering issuance run events on provided fields. */
export type FindManyIssuanceRunEventsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuanceRunEventFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many issuance run events on filters, pagination and sorting. */
export type FindManyIssuanceRunEventsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuanceRunEventsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuanceRunEventSortInput>;
};

/** Input for filtering issuance runs on provided fields. */
export type FindManyIssuanceRunsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuanceRunFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many issuance runs on filters, pagination and sorting. */
export type FindManyIssuanceRunsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuanceRunsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuanceRunSortInput>;
};

/** Input for filtering issuance secrets on provided fields. */
export type FindManyIssuanceSecretsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuanceSecretFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many issuance secrets on filters, pagination and sorting. */
export type FindManyIssuanceSecretsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuanceSecretsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuanceSecretSortInput>;
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

/** Input for filtering issuer change log on provided fields. */
export type FindManyIssuerChangeLogsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuerChangeLogFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many issuer change logs on filters, pagination and sorting. */
export type FindManyIssuerChangeLogsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuerChangeLogsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuerChangeLogSortInput>;
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
export type FindManyIssuerLocalesFilter = {
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

/** Input for filtering many issuer locales on filters, pagination and sorting. */
export type FindManyIssuerLocalesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuerLocalesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuerLocaleSortInput>;
};

/** Input for filtering issuer version on provided fields. */
export type FindManyIssuerVersionsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: IssuerVersionFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many issuer versions on filters, pagination and sorting. */
export type FindManyIssuerVersionsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyIssuerVersionsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<IssuerVersionSortInput>;
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
  value: Scalars['FilteringValue']['input'];
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

/** Input for filtering locale config on provided fields. */
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

/** Input for filtering many locale configs on filters, pagination and sorting. */
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

/** Input for filtering mappingIssuance claim on provided fields. */
export type FindManyMappingIssuanceClaimsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: MappingIssuanceClaimFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many mappingIssuance claims on filters, pagination and sorting. */
export type FindManyMappingIssuanceClaimsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyMappingIssuanceClaimsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<MappingIssuanceClaimSortInput>;
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

/** Input for filtering OrganizationTrustIssuerKey on provided fields. */
export type FindManyOrganizationTrustIssuerKeysFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: OrganizationTrustIssuerKeyFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many OrganizationTrustIssuerKeys on filters, pagination and sorting. */
export type FindManyOrganizationTrustIssuerKeysInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyOrganizationTrustIssuerKeysFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<OrganizationTrustIssuerKeySortInput>;
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

/** Input for filtering many scope claims on filters, pagination and sorting. */
export type FindManyScopeClaimsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyScopeClaimsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<ScopeClaimSortInput>;
};

/** Input for filtering scope locale on provided fields. */
export type FindManyScopeLocalesFilter = {
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

/** Input for filtering many scope locales on filters, pagination and sorting. */
export type FindManyScopeLocalesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyScopeLocalesFilter>>;
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

/** Input for filtering many scope resources on filters, pagination and sorting. */
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

/** Input for filtering finding many SignatureHandlerConfigurationNLWallet. */
export type FindManySignatureHandlerConfigurationNlWalletsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: SignatureHandlerConfigurationNlWalletFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for finding many SignatureHandlerConfigurationNLWallet. */
export type FindManySignatureHandlerConfigurationNlWalletsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManySignatureHandlerConfigurationNlWalletsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<SignatureHandlerConfigurationNlWalletSortInput>;
};

/** Input for filtering SignatureHandlerConfiguration on provided fields. */
export type FindManySignatureHandlerConfigurationsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: SignatureHandlerConfigurationFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many SignatureHandlerConfiguration on filters, pagination and sorting. */
export type FindManySignatureHandlerConfigurationsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManySignatureHandlerConfigurationsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<SignatureHandlerConfigurationSortInput>;
};

/** Input for filtering flow signature handler on provided fields. */
export type FindManySignatureHandlersFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: SignatureHandlerFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many flow signature handlers on filters, pagination and sorting. */
export type FindManySignatureHandlersInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManySignatureHandlersFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<SignatureHandlerSortInput>;
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

/** Input for filtering signature secrets on provided fields. */
export type FindManySignatureSecretsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: SignatureSecretFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many signature secrets on filters, pagination and sorting. */
export type FindManySignatureSecretsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManySignatureSecretsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<SignatureSecretSortInput>;
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

/** Input for filtering status lists on provided fields. */
export type FindManyStatusListsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: StatusListFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many status lists on filters, pagination and sorting. */
export type FindManyStatusListsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyStatusListsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<StatusListSortInput>;
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

/** Input for filtering trust anchor DID on provided fields. */
export type FindManyTrustAnchorDidsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: TrustAnchorDidFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many trust anchor DID on filters, pagination and sorting. */
export type FindManyTrustAnchorDidsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyTrustAnchorDidsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<TrustAnchorDidSortInput>;
};

/** Input for filtering trust anchor Idemix on provided fields. */
export type FindManyTrustAnchorIdemixesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: TrustAnchorIdemixFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many trust anchor Idemix on filters, pagination and sorting. */
export type FindManyTrustAnchorIdemixesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyTrustAnchorIdemixesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<TrustAnchorIdemixSortInput>;
};

/** Input for filtering trust anchor X.509 root certificates on provided fields. */
export type FindManyTrustAnchorX509RootCertificatesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: TrustAnchorX509RootCertificateFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many trust anchor X.509 root certificates on filters, pagination and sorting. */
export type FindManyTrustAnchorX509RootCertificatesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyTrustAnchorX509RootCertificatesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<TrustAnchorX509RootCertificateSortInput>;
};

/** Input for filtering trust anchor X.509 on provided fields. */
export type FindManyTrustAnchorX509sFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: TrustAnchorX509FilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many trust anchor X.509 on filters, pagination and sorting. */
export type FindManyTrustAnchorX509sInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyTrustAnchorX509sFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<TrustAnchorX509SortInput>;
};

/** Input for filtering trust app on provided fields. */
export type FindManyTrustAppsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: TrustAppFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many trust apps on filters, pagination and sorting. */
export type FindManyTrustAppsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyTrustAppsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<TrustAppSortInput>;
};

/** Input for filtering trust change logs on provided fields. */
export type FindManyTrustChangeLogsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: TrustChangeLogFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many trust change logs on filters, pagination and sorting. */
export type FindManyTrustChangeLogsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyTrustChangeLogsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<TrustChangeLogSortInput>;
};

/** Input for filtering trust issuer key algorithm Idemix on provided fields. */
export type FindManyTrustIssuerKeyAlgorithmIdemixesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: TrustIssuerKeyAlgorithmIdemixFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many trust issuer key algorithm Idemixes on filters, pagination and sorting. */
export type FindManyTrustIssuerKeyAlgorithmIdemixesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyTrustIssuerKeyAlgorithmIdemixesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<TrustIssuerKeyAlgorithmIdemixSortInput>;
};

/** Input for filtering trust issuer key DID binding on provided fields. */
export type FindManyTrustIssuerKeyDidBindingsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: TrustIssuerKeyDidBindingFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many trust issuer key DID bindings on filters, pagination and sorting. */
export type FindManyTrustIssuerKeyDidBindingsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyTrustIssuerKeyDidBindingsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<TrustIssuerKeyDidBindingSortInput>;
};

/** Input for filtering trust issuer key X.509 certificate on provided fields. */
export type FindManyTrustIssuerKeyX509CertsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: TrustIssuerKeyX509CertFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many trust issuer key X.509 certificates on filters, pagination and sorting. */
export type FindManyTrustIssuerKeyX509CertsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyTrustIssuerKeyX509CertsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<TrustIssuerKeyX509CertSortInput>;
};

/** Input for filtering trust issuer key on provided fields. */
export type FindManyTrustIssuerKeysFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: TrustIssuerKeyFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many trust issuer keys on filters, pagination and sorting. */
export type FindManyTrustIssuerKeysInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyTrustIssuerKeysFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<TrustIssuerKeySortInput>;
};

/** Input for filtering trust issuer on provided fields. */
export type FindManyTrustIssuersFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: TrustIssuerFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many trust issuers on filters, pagination and sorting. */
export type FindManyTrustIssuersInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyTrustIssuersFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<TrustIssuerSortInput>;
};

/** Input for filtering identity trust labels */
export type FindManyTrustLabelsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: TrustLabelFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many identity trust labels on filters, pagination and sorting. */
export type FindManyTrustLabelsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyTrustLabelsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<TrustLabelSortInput>;
};

/** Input for filtering trust locales on provided fields. */
export type FindManyTrustLocalesFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: TrustLocaleFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many trust locales on filters, pagination and sorting. */
export type FindManyTrustLocalesInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyTrustLocalesFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<TrustLocaleSortInput>;
};

/** Input for filtering trust versions on provided fields. */
export type FindManyTrustVersionsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: TrustVersionFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many trust versions on filters, pagination and sorting. */
export type FindManyTrustVersionsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyTrustVersionsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<TrustVersionSortInput>;
};

/** Input for filtering trusts on provided fields. */
export type FindManyTrustsFilter = {
  /** The query connector */
  connector?: InputMaybe<FilteringConnector>;
  /** The field to filter on. */
  field: TrustFilteringField;
  /** The filter mode. */
  mode?: InputMaybe<FilteringMode>;
  /** The filter type. */
  type?: InputMaybe<FilteringType>;
  /** The value to filter on. */
  value: Scalars['FilteringValue']['input'];
};

/** Input for filtering many trusts on filters, pagination and sorting. */
export type FindManyTrustsInput = {
  /** Filtering options. */
  filtering?: InputMaybe<Array<FindManyTrustsFilter>>;
  /** Pagination options. */
  pagination?: InputMaybe<PaginationInput>;
  /** Sorting options. */
  sorting?: InputMaybe<TrustSortInput>;
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

/** Supported flow types for handlers. */
export enum FlowType {
  Authentication = 'AUTHENTICATION',
  Disclosure = 'DISCLOSURE',
  Issuance = 'ISSUANCE',
  Signature = 'SIGNATURE'
}

/** Credential wire format types. */
export enum Format {
  Datakeeper = 'DATAKEEPER',
  Digidentity = 'DIGIDENTITY',
  MsoMdoc = 'MSO_MDOC',
  Nect = 'NECT',
  NlWallet = 'NL_WALLET',
  None = 'NONE',
  Readid = 'READID',
  SdJwt = 'SD_JWT',
  Yivi = 'YIVI',
  Yoti = 'YOTI'
}

/** Handler definition. */
export type Handler = Model & {
  __typename?: 'Handler';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The collection of handler apps */
  handlerApps: HandlerAppConnection;
  /** The handler URI. */
  handlerUri: Scalars['NonEmpty']['output'];
  /** The collection of locale config */
  localeConfig: LocaleConfigConnection;
  /** The collection of locale */
  locales: HandlerLocaleConnection;
  /** The name */
  name: Scalars['NonEmpty']['output'];
  /** The protocol. */
  protocol: Protocol;
  /** The state */
  state: State;
  /** The supported flow types. */
  supportedFlows: Array<FlowType>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** Handler definition. */
export type HandlerHandlerAppsArgs = {
  input?: InputMaybe<FindManyHandlerAppsInput>;
};


/** Handler definition. */
export type HandlerLocaleConfigArgs = {
  input?: InputMaybe<FindManyLocaleConfigsInput>;
};


/** Handler definition. */
export type HandlerLocalesArgs = {
  input?: InputMaybe<FindManyHandlerLocalesInput>;
};

/** Handler app definition. */
export type HandlerApp = Model & {
  __typename?: 'HandlerApp';
  /** The app this handler app belongs to. */
  app: App;
  /** The configuration type for this handler app. */
  configurationType: HandlerAppConfigurationType;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The handler this handler app belongs to. */
  handler: Handler;
  /** The mDOC protocol configuration. */
  protocolMdoc?: Maybe<HandlerAppProtocolMdoc>;
  /** The OID4VC protocol configuration. */
  protocolOid4vc?: Maybe<HandlerAppProtocolOid4vc>;
  /** The provisioning requirements for this handler app. */
  provisioningRequirements: Array<Scalars['String']['output']>;
  /** The collection of scopes */
  scopes: ScopeConnection;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** Handler app definition. */
export type HandlerAppScopesArgs = {
  input?: InputMaybe<FindManyScopesInput>;
};

/** The configuration type for a handler app. */
export enum HandlerAppConfigurationType {
  NlWallet = 'NL_WALLET',
  None = 'NONE',
  Oid4Vc = 'OID4VC'
}

/** The handler app connection definition. */
export type HandlerAppConnection = {
  __typename?: 'HandlerAppConnection';
  edges: Array<Maybe<HandlerAppEdge>>;
  pageInfo: PageInfo;
};

/** The handler app edge definition. */
export type HandlerAppEdge = {
  __typename?: 'HandlerAppEdge';
  cursor: Scalars['String']['output'];
  node: HandlerApp;
};

/** Fields which can be used to filter handler app on. Value must be camel case. */
export enum HandlerAppFilteringField {
  AppUuid = 'appUuid',
  CreatedAt = 'createdAt',
  HandlerUuid = 'handlerUuid',
  Uuid = 'uuid'
}

/** Handler app protocol mDOC definition. */
export type HandlerAppProtocolMdoc = Model & {
  __typename?: 'HandlerAppProtocolMdoc';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The handler app this protocol configuration belongs to. */
  handlerApp: HandlerApp;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The handler app protocol mDOC connection definition. */
export type HandlerAppProtocolMdocConnection = {
  __typename?: 'HandlerAppProtocolMdocConnection';
  edges: Array<Maybe<HandlerAppProtocolMdocEdge>>;
  pageInfo: PageInfo;
};

/** The handler app protocol mDOC edge definition. */
export type HandlerAppProtocolMdocEdge = {
  __typename?: 'HandlerAppProtocolMdocEdge';
  cursor: Scalars['String']['output'];
  node: HandlerAppProtocolMdoc;
};

/** Fields which can be used to filter handler app protocol mDOC on. Value must be camel case. */
export enum HandlerAppProtocolMdocFilteringField {
  CreatedAt = 'createdAt',
  HandlerAppUuid = 'handlerAppUuid'
}

/** Fields which can be used to sort handler app protocol mDOC on. Value must be camel case. */
export enum HandlerAppProtocolMdocSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting handler app protocol mDOC. */
export type HandlerAppProtocolMdocSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: HandlerAppProtocolMdocSortEnum;
};

/** Handler app protocol OID4VC definition. */
export type HandlerAppProtocolOid4vc = Model & {
  __typename?: 'HandlerAppProtocolOid4vc';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The handler app this protocol configuration belongs to. */
  handlerApp: HandlerApp;
  /** The supported issuance flows. */
  supportedIssuanceFlows: Array<HandlerAppProtocolOid4vcIssuanceFlow>;
  /** The supported issuance profiles. */
  supportedIssuanceProfiles: Array<HandlerAppProtocolOid4vcIssuanceProfile>;
  /** The supported verification profiles. */
  supportedVerificationProfiles: Array<HandlerAppProtocolOid4vcVerificationProfile>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** The wallet implementation. */
  walletImplementation?: Maybe<HandlerAppProtocolOid4vcWalletImplementation>;
};

/** The handler app protocol OID4VC connection definition. */
export type HandlerAppProtocolOid4vcConnection = {
  __typename?: 'HandlerAppProtocolOid4vcConnection';
  edges: Array<Maybe<HandlerAppProtocolOid4vcEdge>>;
  pageInfo: PageInfo;
};

/** The handler app protocol OID4VC edge definition. */
export type HandlerAppProtocolOid4vcEdge = {
  __typename?: 'HandlerAppProtocolOid4vcEdge';
  cursor: Scalars['String']['output'];
  node: HandlerAppProtocolOid4vc;
};

/** Fields which can be used to filter handler app protocol OID4VC on. Value must be camel case. */
export enum HandlerAppProtocolOid4vcFilteringField {
  CreatedAt = 'createdAt',
  HandlerAppUuid = 'handlerAppUuid'
}

/** Issuance flow for OID4VC protocol. */
export enum HandlerAppProtocolOid4vcIssuanceFlow {
  DisclosureBasedIssuance = 'DISCLOSURE_BASED_ISSUANCE',
  PreAuthIssuance = 'PRE_AUTH_ISSUANCE'
}

/** Issuance profile for OID4VC protocol. */
export enum HandlerAppProtocolOid4vcIssuanceProfile {
  EuAv = 'EU_AV',
  Standard = 'STANDARD'
}

/** Fields which can be used to sort handler app protocol OID4VC on. Value must be camel case. */
export enum HandlerAppProtocolOid4vcSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting handler app protocol OID4VC. */
export type HandlerAppProtocolOid4vcSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: HandlerAppProtocolOid4vcSortEnum;
};

/** Verification profile for OID4VC protocol. */
export enum HandlerAppProtocolOid4vcVerificationProfile {
  EuAv = 'EU_AV',
  Haip = 'HAIP',
  Standard = 'STANDARD'
}

/** Wallet implementation identifier for OID4VC protocol. */
export enum HandlerAppProtocolOid4vcWalletImplementation {
  FranceIdentite = 'FRANCE_IDENTITE',
  Lissi = 'LISSI',
  NlWalletDemo = 'NL_WALLET_DEMO',
  NlWalletPreprod = 'NL_WALLET_PREPROD',
  ThalesWallet = 'THALES_WALLET'
}

/** Fields which can be used to sort handler app on. Value must be camel case. */
export enum HandlerAppSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting handler app. */
export type HandlerAppSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: HandlerAppSortEnum;
};

/** The handler connection definition. */
export type HandlerConnection = {
  __typename?: 'HandlerConnection';
  edges: Array<Maybe<HandlerEdge>>;
  pageInfo: PageInfo;
};

/** The handler edge definition. */
export type HandlerEdge = {
  __typename?: 'HandlerEdge';
  cursor: Scalars['String']['output'];
  node: Handler;
};

/** Fields which can be used to filter handler on. Value must be camel case. */
export enum HandlerFilteringField {
  CreatedAt = 'createdAt',
  Name = 'name',
  Protocol = 'protocol',
  State = 'state',
  Uuid = 'uuid'
}

/** Handler label definition. */
export type HandlerLabel = Model & {
  __typename?: 'HandlerLabel';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The identity handler (resolved via federation) */
  handler: Handler;
  /** The identity handler UUID (no direct relation - separate database) */
  handlerUuid: Scalars['UUID']['output'];
  /** The Label */
  label: Label;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** Connection */
export type HandlerLabelConnection = {
  __typename?: 'HandlerLabelConnection';
  edges: Array<HandlerLabelEdge>;
  pageInfo: PageInfo;
};

/** Edge */
export type HandlerLabelEdge = {
  __typename?: 'HandlerLabelEdge';
  cursor: Scalars['String']['output'];
  node: HandlerLabel;
};

/** Fields which can be used to filter identity handler labels. Value must be camel case. */
export enum HandlerLabelFilteringField {
  HandlerUuid = 'handlerUuid',
  LabelUuid = 'labelUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort identity handler labels. Value must be camel case. */
export enum HandlerLabelSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting identity handler labels. */
export type HandlerLabelSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: HandlerLabelSortEnum;
};

/** Handler locale definition. */
export type HandlerLocale = Model & {
  __typename?: 'HandlerLocale';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The description */
  description?: Maybe<Scalars['String']['output']>;
  /** The handler the locale belongs to. */
  handler: Handler;
  /** The locale */
  locale: Scalars['Locale']['output'];
  /** The name */
  name: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The handler locale connection definition. */
export type HandlerLocaleConnection = {
  __typename?: 'HandlerLocaleConnection';
  edges: Array<Maybe<HandlerLocaleEdge>>;
  pageInfo: PageInfo;
};

/** The handler locale edge definition. */
export type HandlerLocaleEdge = {
  __typename?: 'HandlerLocaleEdge';
  cursor: Scalars['String']['output'];
  node: HandlerLocale;
};

/** Fields which can be used to filter handler locale on. Value must be camel case. */
export enum HandlerLocaleFilteringField {
  HandlerUuid = 'handlerUuid',
  Locale = 'locale'
}

/** Fields which can be used to sort handler locale on. Value must be camel case. */
export enum HandlerLocaleSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting handler locale. */
export type HandlerLocaleSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: HandlerLocaleSortEnum;
};

/** Fields which can be used to sort handler on. Value must be camel case. */
export enum HandlerSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  State = 'state'
}

/** Input options for sorting handler. */
export type HandlerSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: HandlerSortEnum;
};

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
  /** The data deletion policy. */
  deletionPolicy?: Maybe<Scalars['String']['output']>;
  /** The associated brands with this issuance */
  issuanceBrands: IssuanceBrandConnection;
  /** The associated domains with this issuance */
  issuanceDomains: IssuanceDomainConnection;
  /** A list of flow providers belonging to this flow issuance. */
  issuanceHandlers: IssuanceHandlerConnection;
  /** The associated labels with this issuance */
  issuanceLabels: IssuanceLabelConnection;
  /** The associated mappings with this issuance */
  issuanceMappings: IssuanceMappingConnection;
  /** The associated secrets with this issuance */
  issuanceSecrets: IssuanceSecretConnection;
  /** The JWT media type */
  jwtMediaType: Scalars['JwtMediaType']['output'];
  /** The meta of the flow. */
  meta: Scalars['JSONObject']['output'];
  /** The name of the flow. */
  name: Scalars['NonEmpty']['output'];
  /** The organization the flow belongs to. */
  organization: Organization;
  /** The active provisioning task, if the flow is currently being provisioned. */
  provisioningTask?: Maybe<ProvisioningTask>;
  /** The purpose statement describing why attributes are being attested. */
  purposeStatement?: Maybe<Scalars['String']['output']>;
  /** The indicator if explicit consent is required */
  requireExplicitConsent: Scalars['Boolean']['output'];
  /** The data retention policy. */
  retentionPolicy?: Maybe<Scalars['String']['output']>;
  /** The data sharing policy. */
  sharingPolicy?: Maybe<Scalars['String']['output']>;
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
export type IssuanceIssuanceHandlersArgs = {
  input?: InputMaybe<FindManyIssuanceHandlersInput>;
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
export type IssuanceIssuanceSecretsArgs = {
  input?: InputMaybe<FindManyIssuanceSecretsInput>;
};

/** IssuanceAction */
export enum IssuanceAction {
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
  /** The credential the credentialUuid belongs to. */
  credential: Credential;
  /** The uuid of the credential. */
  credentialUuid: Scalars['UUID']['output'];
  /** The associated fields with this credential */
  issuanceAttributes: IssuanceAttributeConnection;
  /** The flow issuance handler this credential belongs to. */
  issuanceHandler: IssuanceHandler;
  /** The issuer the issuerUuid belongs to. */
  issuer: Issuer;
  /** The uuid of the issuer. */
  issuerUuid: Scalars['UUID']['output'];
  /** The meta */
  meta?: Maybe<IssuanceCredentialMeta>;
  /** The meta type of the credential */
  metaType: IssuanceCredentialMetaType;
  /** The trust the trustUuid belongs to. */
  trust: Trust;
  /** The uuid of the trust. */
  trustUuid: Scalars['UUID']['output'];
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
  CredentialUuid = 'credentialUuid',
  IssuanceHandlerUuid = 'issuanceHandlerUuid',
  IssuerUuid = 'issuerUuid',
  MetaType = 'metaType',
  TrustUuid = 'trustUuid',
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
  /** The oid4vc credential meta */
  oid4vc?: Maybe<IssuanceCredentialMetaOid4vc>;
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
  /** The expiration duration, in seconds */
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

/** Flow issuance credential meta oid4vc definition. */
export type IssuanceCredentialMetaOid4vc = Model & {
  __typename?: 'IssuanceCredentialMetaOid4vc';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The expiration duration, in seconds */
  expirationDuration: Scalars['Int']['output'];
  /** The flow issuance credential meta the oid4vc meta belongs to. */
  issuanceCredentialMeta: IssuanceCredentialMeta;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The flow credential meta oid4vc connection definition. */
export type IssuanceCredentialMetaOid4vcConnection = {
  __typename?: 'IssuanceCredentialMetaOid4vcConnection';
  edges: Array<Maybe<IssuanceCredentialMetaOid4vcEdge>>;
  pageInfo: PageInfo;
};

/** The flow credential meta oid4vc edge definition. */
export type IssuanceCredentialMetaOid4vcEdge = {
  __typename?: 'IssuanceCredentialMetaOid4vcEdge';
  cursor: Scalars['String']['output'];
  node: IssuanceCredentialMetaOid4vc;
};

/** Fields which can be used to filter flow issuance credential meta oid4vc on. Value must be camel case. */
export enum IssuanceCredentialMetaOid4vcFilteringField {
  IssuanceCredentialMetaUuid = 'issuanceCredentialMetaUuid'
}

/** Fields which can be used to sort flow issuance credential meta oid4vc on. Value must be camel case. */
export enum IssuanceCredentialMetaOid4vcSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting flow issuance credential meta oid4vc. */
export type IssuanceCredentialMetaOid4vcSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuanceCredentialMetaOid4vcSortEnum;
};

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
  Oid4Vc = 'OID4VC',
  Yivi = 'YIVI'
}

/** Flow issuance credential meta datakapeer definition. */
export type IssuanceCredentialMetaYivi = Model & {
  __typename?: 'IssuanceCredentialMetaYivi';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The expiration duration, in seconds */
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
  CredentialUuid = 'credentialUuid',
  IssuerUuid = 'issuerUuid',
  TrustUuid = 'trustUuid',
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

/** Flow issuance handler definition. */
export type IssuanceHandler = Model & {
  __typename?: 'IssuanceHandler';
  /** The flow issuance handler configuration. */
  configuration?: Maybe<IssuanceHandlerConfiguration>;
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The handler app the handlerAppUuid belongs to. */
  handlerApp: HandlerApp;
  /** The uuid of the handler app. */
  handlerAppUuid: Scalars['UUID']['output'];
  /** The flow issuance the handler belongs to. */
  issuance: Issuance;
  /** A list of flow credentials belonging to this handler. */
  issuanceCredentials: IssuanceCredentialConnection;
  /** Whether this handler is marked as recommended in this flow. */
  recommended: Scalars['Boolean']['output'];
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Flow issuance handler definition. */
export type IssuanceHandlerIssuanceCredentialsArgs = {
  input?: InputMaybe<FindManyIssuanceCredentialsInput>;
};

/** Flow issuance handler configuration definition */
export type IssuanceHandlerConfiguration = Model & {
  __typename?: 'IssuanceHandlerConfiguration';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The IssuanceHandler this configuration belongs to */
  issuanceHandler: IssuanceHandler;
  /** The NL Wallet flow issuance handler configuration */
  nlWallet?: Maybe<IssuanceHandlerConfigurationNlWallet>;
  /** The OID4VC flow issuance handler configuration */
  oid4vc?: Maybe<IssuanceHandlerConfigurationOid4Vc>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The IssuanceHandlerConfiguration connection definition. */
export type IssuanceHandlerConfigurationConnection = {
  __typename?: 'IssuanceHandlerConfigurationConnection';
  edges: Array<Maybe<IssuanceHandlerConfigurationEdge>>;
  pageInfo: PageInfo;
};

/** The IssuanceHandlerConfiguration edge definition. */
export type IssuanceHandlerConfigurationEdge = {
  __typename?: 'IssuanceHandlerConfigurationEdge';
  cursor: Scalars['String']['output'];
  node: IssuanceHandlerConfiguration;
};

/** Fields which can be used to filter IssuanceHandlerConfiguration on. Value must be camel case. */
export enum IssuanceHandlerConfigurationFilteringField {
  IssuanceHandlerUuid = 'issuanceHandlerUuid'
}

/** IssuanceHandlerConfigurationNLWallet definition */
export type IssuanceHandlerConfigurationNlWallet = Model & {
  __typename?: 'IssuanceHandlerConfigurationNLWallet';
  /** The attribute UUIDs that must be disclosed before issuance */
  attributeUuids: Array<Scalars['UUID']['output']>;
  /** The creation timestamp */
  createdAt: Scalars['DateTime']['output'];
  /** Whether the user can request deletion of their retained data. */
  deletable?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the organization intends to retain the disclosed data. */
  intentToRetain?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the organization intends to share the disclosed data with third parties. */
  intentToShare?: Maybe<Scalars['Boolean']['output']>;
  /** The IssuanceHandlerConfiguration this object belongs to. */
  issuanceHandlerConfiguration: IssuanceHandlerConfiguration;
  /** Maximum retention duration in minutes. Leave empty for no maximum. */
  maxRetentionDuration?: Maybe<Scalars['Int']['output']>;
  /** Purpose statement */
  purposeStatement?: Maybe<Scalars['JSONObject']['output']>;
  /** The timestamp of when the type has been last updated */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The IssuanceHandlerConfigurationNLWallet connection definition. */
export type IssuanceHandlerConfigurationNlWalletConnection = {
  __typename?: 'IssuanceHandlerConfigurationNLWalletConnection';
  edges: Array<Maybe<IssuanceHandlerConfigurationNlWalletEdge>>;
  pageInfo: PageInfo;
};

/** The IssuanceHandlerConfigurationNLWallet edge definition. */
export type IssuanceHandlerConfigurationNlWalletEdge = {
  __typename?: 'IssuanceHandlerConfigurationNLWalletEdge';
  cursor: Scalars['String']['output'];
  node: IssuanceHandlerConfigurationNlWallet;
};

/** Fields which can be used to filter IssuanceHandlerConfigurationNLWallet on. Value must be camel case. */
export enum IssuanceHandlerConfigurationNlWalletFilteringField {
  IssuanceHandlerConfigurationUuid = 'issuanceHandlerConfigurationUuid'
}

/** Fields which can be used to sort IssuanceHandlerConfigurationNLWallet on. Value must be camel case. */
export enum IssuanceHandlerConfigurationNlWalletSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting IssuanceHandlerConfigurationNLWallet. */
export type IssuanceHandlerConfigurationNlWalletSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuanceHandlerConfigurationNlWalletSortEnum;
};

/** IssuanceHandlerConfigurationOID4VC definition */
export type IssuanceHandlerConfigurationOid4Vc = Model & {
  __typename?: 'IssuanceHandlerConfigurationOID4VC';
  /** The creation timestamp */
  createdAt: Scalars['DateTime']['output'];
  /** The OID4VC issuance flow */
  flow: Oid4vcIssuanceFlow;
  /** The IssuanceHandlerConfiguration this object belongs to. */
  issuanceHandlerConfiguration: IssuanceHandlerConfiguration;
  /** The OID4VC issuance profile */
  profile: Oid4vcIssuanceProfile;
  /** The timestamp of when the type has been last updated */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The IssuanceHandlerConfigurationOID4VC connection definition. */
export type IssuanceHandlerConfigurationOid4VcConnection = {
  __typename?: 'IssuanceHandlerConfigurationOID4VCConnection';
  edges: Array<Maybe<IssuanceHandlerConfigurationOid4VcEdge>>;
  pageInfo: PageInfo;
};

/** The IssuanceHandlerConfigurationOID4VC edge definition. */
export type IssuanceHandlerConfigurationOid4VcEdge = {
  __typename?: 'IssuanceHandlerConfigurationOID4VCEdge';
  cursor: Scalars['String']['output'];
  node: IssuanceHandlerConfigurationOid4Vc;
};

/** Fields which can be used to filter IssuanceHandlerConfigurationOID4VC on. Value must be camel case. */
export enum IssuanceHandlerConfigurationOid4VcFilteringField {
  IssuanceHandlerConfigurationUuid = 'issuanceHandlerConfigurationUuid'
}

/** Fields which can be used to sort IssuanceHandlerConfigurationOID4VC on. Value must be camel case. */
export enum IssuanceHandlerConfigurationOid4VcSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting IssuanceHandlerConfigurationOID4VC. */
export type IssuanceHandlerConfigurationOid4VcSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuanceHandlerConfigurationOid4VcSortEnum;
};

/** Fields which can be used to sort IssuanceHandlerConfiguration on. Value must be camel case. */
export enum IssuanceHandlerConfigurationSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting IssuanceHandlerConfiguration. */
export type IssuanceHandlerConfigurationSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuanceHandlerConfigurationSortEnum;
};

/** The flow issuance handler connection definition. */
export type IssuanceHandlerConnection = {
  __typename?: 'IssuanceHandlerConnection';
  edges: Array<IssuanceHandlerEdge>;
  pageInfo: PageInfo;
};

/** The flow issuance handler edge definition. */
export type IssuanceHandlerEdge = {
  __typename?: 'IssuanceHandlerEdge';
  cursor: Scalars['String']['output'];
  node: IssuanceHandler;
};

/** Fields which can be used to filter flow issuance handlers on. Value must be camel case. */
export enum IssuanceHandlerFilteringField {
  HandlerAppUuid = 'handlerAppUuid',
  IssuanceUuid = 'issuanceUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow issuance handlers on. Value must be camel case. */
export enum IssuanceHandlerSortEnum {
  CreatedAt = 'createdAt',
  HandlerAppUuid = 'handlerAppUuid',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow issuance handlers. */
export type IssuanceHandlerSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuanceHandlerSortEnum;
};

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

/**
 * Issuance run definition. Groups credential records issued together.
 * Per TS 119 471 4.2.5.2-07: revocation of one EAA from the batch results
 * in revocation of all EAAs in that batch.
 */
export type IssuanceRun = Model & {
  __typename?: 'IssuanceRun';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The credential records in this batch */
  credentialRecords: CredentialRecordConnection;
  /** The immutable snapshot of organization and issuance flow data. */
  issuanceRunSnapshot?: Maybe<IssuanceRunSnapshot>;
  /** The issuance UUID (cross-DB reference to studio.Issuance) */
  issuanceUuid: Scalars['UUID']['output'];
  /** The organization UUID (cross-DB reference to studio.Organization) */
  organizationUuid: Scalars['UUID']['output'];
  /** The lifecycle state */
  state: IssuanceRunState;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/**
 * Issuance run definition. Groups credential records issued together.
 * Per TS 119 471 4.2.5.2-07: revocation of one EAA from the batch results
 * in revocation of all EAAs in that batch.
 */
export type IssuanceRunCredentialRecordsArgs = {
  input?: InputMaybe<FindManyCredentialRecordsInput>;
};

/** Actions available on an issuance run. */
export enum IssuanceRunAction {
  Reinstate = 'REINSTATE',
  Revoke = 'REVOKE',
  Suspend = 'SUSPEND'
}

/** The issuance run connection definition. */
export type IssuanceRunConnection = {
  __typename?: 'IssuanceRunConnection';
  edges: Array<Maybe<IssuanceRunEdge>>;
  pageInfo: PageInfo;
};

/** The issuance run edge definition. */
export type IssuanceRunEdge = {
  __typename?: 'IssuanceRunEdge';
  cursor: Scalars['String']['output'];
  node: IssuanceRun;
};

/** Issuance run event definition. Immutable audit trail for every status transition. */
export type IssuanceRunEvent = Model & {
  __typename?: 'IssuanceRunEvent';
  /** The actor type (organization_user, system, provider) */
  actorType?: Maybe<Scalars['String']['output']>;
  /** The actor UUID (org user or system) */
  actorUuid?: Maybe<Scalars['UUID']['output']>;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The issuance run this event belongs to */
  issuanceRun: IssuanceRun;
  /** The issuance run UUID */
  issuanceRunUuid: Scalars['UUID']['output'];
  /** The state after the transition */
  newState: IssuanceRunState;
  /** The state before the transition */
  previousState: IssuanceRunState;
  /** The reason for the transition */
  reason?: Maybe<Scalars['String']['output']>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The issuance run event connection definition. */
export type IssuanceRunEventConnection = {
  __typename?: 'IssuanceRunEventConnection';
  edges: Array<Maybe<IssuanceRunEventEdge>>;
  pageInfo: PageInfo;
};

/** The issuance run event edge definition. */
export type IssuanceRunEventEdge = {
  __typename?: 'IssuanceRunEventEdge';
  cursor: Scalars['String']['output'];
  node: IssuanceRunEvent;
};

/** Fields which can be used to filter issuance run events on. Value must be camel case. */
export enum IssuanceRunEventFilteringField {
  ActorType = 'actorType',
  CreatedAt = 'createdAt',
  IssuanceRunUuid = 'issuanceRunUuid',
  NewState = 'newState'
}

/** Fields which can be used to sort issuance run events on. Value must be camel case. */
export enum IssuanceRunEventSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting issuance run events. */
export type IssuanceRunEventSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuanceRunEventSortEnum;
};

/** Fields which can be used to filter issuance runs on. Value must be camel case. */
export enum IssuanceRunFilteringField {
  CreatedAt = 'createdAt',
  IssuanceUuid = 'issuanceUuid',
  OrganizationUuid = 'organizationUuid',
  State = 'state',
  Uuid = 'uuid'
}

/**
 * Immutable point-in-time snapshot of organization and issuance flow data.
 * Written once when an IssuanceRun transitions to ISSUED, never updated.
 */
export type IssuanceRunSnapshot = Model & {
  __typename?: 'IssuanceRunSnapshot';
  /** The creation time. */
  createdAt: Scalars['DateTime']['output'];
  /** The data deletion policy. */
  issuanceDeletionPolicy?: Maybe<Scalars['String']['output']>;
  /** The JWT media type. */
  issuanceJwtMediaType: Scalars['String']['output'];
  /** The issuance flow name. */
  issuanceName: Scalars['String']['output'];
  /** The purpose statement. */
  issuancePurposeStatement?: Maybe<Scalars['String']['output']>;
  /** The data retention policy. */
  issuanceRetentionPolicy?: Maybe<Scalars['String']['output']>;
  /** The issuance run this snapshot belongs to. */
  issuanceRun: IssuanceRun;
  /** The data sharing policy. */
  issuanceSharingPolicy?: Maybe<Scalars['String']['output']>;
  /** The organization country code (ISO 3166-1 Alpha-2). */
  organizationCountryCode?: Maybe<Scalars['String']['output']>;
  /** The organization registration identifier (e.g. KVK). */
  organizationKvk?: Maybe<Scalars['String']['output']>;
  /** The organization legal name. */
  organizationLegalName?: Maybe<Scalars['String']['output']>;
  /** The organization economic activity code (NACE). */
  organizationNaceCode?: Maybe<Scalars['String']['output']>;
  /** The organization name. */
  organizationName: Scalars['String']['output'];
  /** The organization privacy policy URL. */
  organizationPrivacyPolicyUrl?: Maybe<Scalars['String']['output']>;
  /** The update time. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};

/** Fields which can be used to sort issuance runs on. Value must be camel case. */
export enum IssuanceRunSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting issuance runs. */
export type IssuanceRunSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuanceRunSortEnum;
};

/** Lifecycle state of an issuance run. */
export enum IssuanceRunState {
  Abandoned = 'ABANDONED',
  Allocated = 'ALLOCATED',
  Issued = 'ISSUED',
  Pending = 'PENDING',
  Revoked = 'REVOKED',
  Suspended = 'SUSPENDED'
}

/** Issuance secret definition. Links an organization secret to an issuance flow. */
export type IssuanceSecret = Model & {
  __typename?: 'IssuanceSecret';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The flow issuance */
  issuance: Issuance;
  /** The organization secret */
  organizationSecret: OrganizationSecret;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** A connection */
export type IssuanceSecretConnection = {
  __typename?: 'IssuanceSecretConnection';
  edges: Array<IssuanceSecretEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type IssuanceSecretEdge = {
  __typename?: 'IssuanceSecretEdge';
  cursor: Scalars['String']['output'];
  node: IssuanceSecret;
};

/** Fields which can be used to filter issuance secrets on. Value must be camel case. */
export enum IssuanceSecretFilteringField {
  IssuanceUuid = 'issuanceUuid',
  OrganizationSecretUuid = 'organizationSecretUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort issuance secrets on. Value must be camel case. */
export enum IssuanceSecretSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting issuance secrets. */
export type IssuanceSecretSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuanceSecretSortEnum;
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
  Inactive = 'INACTIVE',
  Provisioning = 'PROVISIONING'
}

/** Issuer definition (RFC 0012 versioned). */
export type Issuer = Model & {
  __typename?: 'Issuer';
  /** The base64 encoded logo. */
  base64Logo: Scalars['NonEmpty']['output'];
  /** The UUID of the version this was based on. */
  basedOnUuid?: Maybe<Scalars['UUID']['output']>;
  /** The change note. */
  changeNote?: Maybe<Scalars['String']['output']>;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The UUID of the user who created this version. */
  createdByUserUuid: Scalars['UUID']['output'];
  /** The collection of Datakeeper credential format variants referencing this issuer. */
  credentialFormatsDatakeeper: CredentialFormatDatakeeperConnection;
  /** The collection of Digidentity credential format variants referencing this issuer. */
  credentialFormatsDigidentity: CredentialFormatDigidentityConnection;
  /** The collection of Nect credential format variants referencing this issuer. */
  credentialFormatsNect: CredentialFormatNectConnection;
  /** The collection of ReadID credential format variants referencing this issuer. */
  credentialFormatsReadid: CredentialFormatReadidConnection;
  /** The collection of Yivi credential format variants referencing this issuer. */
  credentialFormatsYivi: CredentialFormatYiviConnection;
  /** The collection of Yoti credential format variants referencing this issuer. */
  credentialFormatsYoti: CredentialFormatYotiConnection;
  /** The issuer version this issuer belongs to. */
  issuerVersion: IssuerVersion;
  /** The UUID of the issuer version. */
  issuerVersionUuid: Scalars['UUID']['output'];
  /** The last edited time. */
  lastEditedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The UUID of the user who last edited this version. */
  lastEditedByUserUuid?: Maybe<Scalars['UUID']['output']>;
  /** The collection of locales. */
  locales: IssuerLocaleConnection;
  /** The name of the issuer. */
  name: Scalars['NonEmpty']['output'];
  /** The publish time, if published. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The UUID of the user who published this version. */
  publishedByUserUuid?: Maybe<Scalars['UUID']['output']>;
  /** The version status. */
  status: VersionStatus;
  /** The collection of trust issuers. */
  trustIssuers: TrustIssuerConnection;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** The version number. */
  versionNumber: Scalars['Int']['output'];
};


/** Issuer definition (RFC 0012 versioned). */
export type IssuerCredentialFormatsDatakeeperArgs = {
  input?: InputMaybe<FindManyCredentialFormatDatakeepersInput>;
};


/** Issuer definition (RFC 0012 versioned). */
export type IssuerCredentialFormatsDigidentityArgs = {
  input?: InputMaybe<FindManyCredentialFormatDigidentitiesInput>;
};


/** Issuer definition (RFC 0012 versioned). */
export type IssuerCredentialFormatsNectArgs = {
  input?: InputMaybe<FindManyCredentialFormatNectsInput>;
};


/** Issuer definition (RFC 0012 versioned). */
export type IssuerCredentialFormatsReadidArgs = {
  input?: InputMaybe<FindManyCredentialFormatReadidsInput>;
};


/** Issuer definition (RFC 0012 versioned). */
export type IssuerCredentialFormatsYiviArgs = {
  input?: InputMaybe<FindManyCredentialFormatYivisInput>;
};


/** Issuer definition (RFC 0012 versioned). */
export type IssuerCredentialFormatsYotiArgs = {
  input?: InputMaybe<FindManyCredentialFormatYotisInput>;
};


/** Issuer definition (RFC 0012 versioned). */
export type IssuerLocalesArgs = {
  input?: InputMaybe<FindManyIssuerLocalesInput>;
};


/** Issuer definition (RFC 0012 versioned). */
export type IssuerTrustIssuersArgs = {
  input?: InputMaybe<FindManyTrustIssuersInput>;
};

/** Issuer change log definition (RFC 0012). */
export type IssuerChangeLog = Model & {
  __typename?: 'IssuerChangeLog';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The issuer version this change log belongs to. */
  issuerVersion: IssuerVersion;
  /** The metadata of the change. */
  metadata: Scalars['JSONObject']['output'];
  /** The UUID of the user who performed the change. */
  performedByUserUuid: Scalars['UUID']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** The version number at the time of the change. */
  versionNumber: Scalars['Int']['output'];
};

/** The issuer change log connection definition. */
export type IssuerChangeLogConnection = {
  __typename?: 'IssuerChangeLogConnection';
  edges: Array<Maybe<IssuerChangeLogEdge>>;
  pageInfo: PageInfo;
};

/** The issuer change log edge definition. */
export type IssuerChangeLogEdge = {
  __typename?: 'IssuerChangeLogEdge';
  cursor: Scalars['String']['output'];
  node: IssuerChangeLog;
};

/** Fields which can be used to filter issuer change log on. Value must be camel case. */
export enum IssuerChangeLogFilteringField {
  CreatedAt = 'createdAt',
  IssuerVersionUuid = 'issuerVersionUuid',
  PerformedByUserUuid = 'performedByUserUuid',
  VersionNumber = 'versionNumber'
}

/** Fields which can be used to sort issuer change log on. Value must be camel case. */
export enum IssuerChangeLogSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting issuer change log. */
export type IssuerChangeLogSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuerChangeLogSortEnum;
};

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
  CreatedAt = 'createdAt',
  IssuerVersionUuid = 'issuerVersionUuid',
  Name = 'name',
  Status = 'status',
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
  /** The localized description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The issuer this locale belongs to. */
  issuer: Issuer;
  /** The locale. */
  locale: Scalars['Locale']['output'];
  /** The localized name. */
  name: Scalars['NonEmpty']['output'];
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

/** Fields which can be used to sort issuer on. Value must be camel case. */
export enum IssuerSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  VersionNumber = 'versionNumber'
}

/** Input options for sorting issuer. */
export type IssuerSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuerSortEnum;
};

/** Issuer version definition (RFC 0012). */
export type IssuerVersion = Model & {
  __typename?: 'IssuerVersion';
  /** The collection of change logs. */
  changeLogs: IssuerChangeLogConnection;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The deprecation reason, if any. */
  deprecationReason?: Maybe<Scalars['String']['output']>;
  /** The draft version of the issuer, if any. */
  draft?: Maybe<Issuer>;
  /** Whether a draft version exists. */
  hasDraft: Scalars['Boolean']['output'];
  /** Whether a live version exists. */
  hasLive: Scalars['Boolean']['output'];
  /** Whether this issuer is deprecated. */
  isDeprecated: Scalars['Boolean']['output'];
  /** The collection of all issuers for this version. */
  issuers: IssuerConnection;
  /** The live version of the issuer, if any. */
  live?: Maybe<Issuer>;
  /** The organization this issuer version belongs to. */
  organization: Organization;
  /** The organization UUID */
  organizationUuid: Scalars['UUID']['output'];
  /** The slug */
  slug: Scalars['NonEmpty']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** Issuer version definition (RFC 0012). */
export type IssuerVersionChangeLogsArgs = {
  input?: InputMaybe<FindManyIssuerChangeLogsInput>;
};


/** Issuer version definition (RFC 0012). */
export type IssuerVersionIssuersArgs = {
  input?: InputMaybe<FindManyIssuersInput>;
};

/** The issuer version connection definition. */
export type IssuerVersionConnection = {
  __typename?: 'IssuerVersionConnection';
  edges: Array<Maybe<IssuerVersionEdge>>;
  pageInfo: PageInfo;
};

/** The issuer version edge definition. */
export type IssuerVersionEdge = {
  __typename?: 'IssuerVersionEdge';
  cursor: Scalars['String']['output'];
  node: IssuerVersion;
};

/** Fields which can be used to filter issuer version on. Value must be camel case. */
export enum IssuerVersionFilteringField {
  CreatedAt = 'createdAt',
  HasDraft = 'hasDraft',
  HasLive = 'hasLive',
  IsDeprecated = 'isDeprecated',
  OrganizationUuid = 'organizationUuid',
  Slug = 'slug'
}

/** Fields which can be used to sort issuer version on. Value must be camel case. */
export enum IssuerVersionSortEnum {
  CreatedAt = 'createdAt',
  Slug = 'slug'
}

/** Input options for sorting issuer version. */
export type IssuerVersionSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: IssuerVersionSortEnum;
};

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
  /** Identity handler labels using this label */
  handlerLabels: HandlerLabelConnection;
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
  /** The scope of the label */
  scope: LabelScope;
  /** Flow signature labels using this label */
  signatureLabels: SignatureLabelConnection;
  /** Identity trust labels using this label */
  trustLabels: TrustLabelConnection;
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
export type LabelHandlerLabelsArgs = {
  input?: InputMaybe<FindManyHandlerLabelsInput>;
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
export type LabelSignatureLabelsArgs = {
  input?: InputMaybe<FindManySignatureLabelsInput>;
};


/** Label type for categorizing and visually distinguishing entities */
export type LabelTrustLabelsArgs = {
  input?: InputMaybe<FindManyTrustLabelsInput>;
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
  /** The handler the locale config belongs to. */
  handler?: Maybe<Handler>;
  /** The locale */
  locale: Scalars['Locale']['output'];
  /** The model */
  model: Models;
  /** The collection of properties */
  properties: Array<Scalars['String']['output']>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The locale config connection definition. */
export type LocaleConfigConnection = {
  __typename?: 'LocaleConfigConnection';
  edges: Array<Maybe<LocaleConfigEdge>>;
  pageInfo: PageInfo;
};

/** The locale config edge definition. */
export type LocaleConfigEdge = {
  __typename?: 'LocaleConfigEdge';
  cursor: Scalars['String']['output'];
  node: LocaleConfig;
};

/** Fields which can be used to filter locale config on. */
export enum LocaleConfigFilteringField {
  HandlerUuid = 'handlerUuid',
  Locale = 'locale'
}

/** Fields which can be used to sort locale config on. */
export enum LocaleConfigSortEnum {
  CreatedAt = 'createdAt',
  HandlerUuid = 'handlerUuid'
}

/** Input options for sorting locale config. */
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
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** A list of claims belonging to this attribute. */
  mappingIssuanceClaims: MappingIssuanceClaimConnection;
  /** The mappingIssuance link, the attribute associated to. */
  mappingIssuanceLink: MappingIssuanceLink;
  /** The transform function */
  transform: Scalars['NonEmpty']['output'];
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Property definition. */
export type MappingIssuanceAttributeMappingIssuanceClaimsArgs = {
  input?: InputMaybe<FindManyMappingIssuanceClaimsInput>;
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

/** Property definition. */
export type MappingIssuanceClaim = Model & {
  __typename?: 'MappingIssuanceClaim';
  /** The actual claim */
  claim: Scalars['NonEmpty']['output'];
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The mappingIssuance attribute the claim belongs to. */
  mappingIssuanceAttribute: MappingIssuanceAttribute;
  /** The name of the claim. */
  name: Scalars['NonEmpty']['output'];
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};

/** The mappingIssuance claim connection definition. */
export type MappingIssuanceClaimConnection = {
  __typename?: 'MappingIssuanceClaimConnection';
  edges: Array<MappingIssuanceClaimEdge>;
  pageInfo: PageInfo;
};

/** The mappingIssuance claim edge definition. */
export type MappingIssuanceClaimEdge = {
  __typename?: 'MappingIssuanceClaimEdge';
  cursor: Scalars['String']['output'];
  node: MappingIssuanceClaim;
};

/** Fields which can be used to filter mappingIssuance claim on. Value must be camel case. */
export enum MappingIssuanceClaimFilteringField {
  MappingIssuanceAttributeUuid = 'mappingIssuanceAttributeUuid',
  Name = 'name',
  Uuid = 'uuid'
}

/** Fields which can be used to sort mappingIssuance claim on. Value must be camel case. */
export enum MappingIssuanceClaimSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting mappingIssuance claim. */
export type MappingIssuanceClaimSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: MappingIssuanceClaimSortEnum;
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
  /** The issuer the issuerUuid belongs to. */
  issuer: Issuer;
  /** The issuer uuid. */
  issuerUuid: Scalars['UUID']['output'];
  /** The mappingIssuance, the link associated to. */
  mappingIssuance: MappingIssuance;
  /** The collection of defined attributes */
  mappingIssuanceAttributes: MappingIssuanceAttributeConnection;
  /** The trust the trustUuid belongs to. */
  trust: Trust;
  /** The trust uuid. */
  trustUuid: Scalars['UUID']['output'];
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
  TrustUuid = 'trustUuid',
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
  /** The issuer the issuerUuid belongs to. */
  issuer: Issuer;
  /** The issuer uuid. */
  issuerUuid: Scalars['UUID']['output'];
  /** The collection of defined link credentials */
  mappingVerificationAttributes: MappingVerificationAttributeConnection;
  /** The mappingVerification claim, the link associated to. */
  mappingVerificationClaim: MappingVerificationClaim;
  /** The transform function. */
  transform?: Maybe<Scalars['NonEmpty']['output']>;
  /** The trust the trustUuid belongs to. */
  trust: Trust;
  /** The trust uuid. */
  trustUuid: Scalars['UUID']['output'];
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
  TrustUuid = 'trustUuid',
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

/** Maturity levels */
export enum Maturity {
  Deprecated = 'DEPRECATED',
  Preproduction = 'PREPRODUCTION',
  Production = 'PRODUCTION',
  Testing = 'TESTING'
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

/** Catalog model types for locale configuration. */
export enum Models {
  App = 'APP',
  Attribute = 'ATTRIBUTE',
  Credential = 'CREDENTIAL',
  Handler = 'HANDLER',
  Issuer = 'ISSUER',
  Scope = 'SCOPE',
  Trust = 'TRUST'
}

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
  /** Perform action on an app. */
  actionApp: App;
  /** Update a flow state. */
  actionAuthentication: Authentication;
  /** Action on billing wallet */
  actionBillingWallet: BillingWallet;
  /** Perform action on a credential record (e.g. revoke). */
  actionCredentialRecord: CredentialRecord;
  /** Action a flow */
  actionDisclosure: Disclosure;
  /** Perform action on a handler. */
  actionHandler: Handler;
  /** Action a flow. */
  actionIssuance: Issuance;
  /** Perform action on an issuance run (e.g. revoke all records in batch). */
  actionIssuanceRun: IssuanceRun;
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
  /** Perform action on a scope. */
  actionScope: Scope;
  /** Action a flow. */
  actionSignature: Signature;
  /** Update a state. */
  actionStudioPlan: StudioPlan;
  /** Clone a credential from an existing version (RFC 0012). */
  cloneCredentialFromVersion: Credential;
  /** Clone an issuer from an existing version (RFC 0012). */
  cloneIssuerFromVersion: Issuer;
  /** Clone a new draft from an existing trust version. */
  cloneTrustFromVersion: Trust;
  /** Create an app. */
  createApp: App;
  /** Create an app locale. */
  createAppLocale: AppLocale;
  /** Create an attribute. */
  createAttribute: Attribute;
  /** Create an attribute format Datakeeper. */
  createAttributeFormatDatakeeper: AttributeFormatDatakeeper;
  /** Create an attribute format Digidentity. */
  createAttributeFormatDigidentity: AttributeFormatDigidentity;
  /** Create an attribute format MSO MDOC. */
  createAttributeFormatMsoMdoc: AttributeFormatMsoMdoc;
  /** Create an attribute format Nect. */
  createAttributeFormatNect: AttributeFormatNect;
  /** Create an attribute format NL Wallet. */
  createAttributeFormatNlWallet: AttributeFormatNlWallet;
  /** Create an attribute format ReadID. */
  createAttributeFormatReadid: AttributeFormatReadid;
  /** Create an attribute format SD-JWT. */
  createAttributeFormatSdJwt: AttributeFormatSdJwt;
  /** Create an attribute format Yivi. */
  createAttributeFormatYivi: AttributeFormatYivi;
  /** Create an attribute format Yoti. */
  createAttributeFormatYoti: AttributeFormatYoti;
  /** Create and store a new identity attribute label. */
  createAttributeLabel: AttributeLabel;
  /** Create an attribute locale. */
  createAttributeLocale: AttributeLocale;
  /** Create a flow. */
  createAuthentication: Authentication;
  /** Create and store a new brand type. */
  createAuthenticationBrand: AuthenticationBrand;
  /** Create and store a new domain type. */
  createAuthenticationDomain: AuthenticationDomain;
  /** Create a flow authentication handler. */
  createAuthenticationHandler: AuthenticationHandler;
  /** Create a AuthenticationHandlerConfigurationNLWallet. */
  createAuthenticationHandlerConfigurationNLWallet: AuthenticationHandlerConfigurationNlWallet;
  /** Create and store a new Label type. */
  createAuthenticationLabel: AuthenticationLabel;
  /** Create a flow authentication scope. */
  createAuthenticationScope: AuthenticationScope;
  /** Bind an organization secret to an authentication flow. */
  createAuthenticationSecret: AuthenticationSecret;
  /** Initializes billing plan */
  createBillingPlan: BillingPlan;
  /** Create billing wallet */
  createBillingWallet: BillingWallet;
  /** Create a credential draft (RFC 0012). */
  createCredentialDraft: Credential;
  /** Create a credential Datakeeper format. */
  createCredentialFormatDatakeeper: CredentialFormatDatakeeper;
  /** Create a credential Digidentity format. */
  createCredentialFormatDigidentity: CredentialFormatDigidentity;
  /** Create a credential MSO MDOC format. */
  createCredentialFormatMsoMdoc: CredentialFormatMsoMdoc;
  /** Create a credential Nect format. */
  createCredentialFormatNect: CredentialFormatNect;
  /** Create a credential NL Wallet format. */
  createCredentialFormatNlWallet: CredentialFormatNlWallet;
  /** Create a credential ReadID format. */
  createCredentialFormatReadid: CredentialFormatReadid;
  /** Create a credential SD-JWT format. */
  createCredentialFormatSdJwt: CredentialFormatSdJwt;
  /** Create a credential Yivi format. */
  createCredentialFormatYivi: CredentialFormatYivi;
  /** Create a credential Yoti format. */
  createCredentialFormatYoti: CredentialFormatYoti;
  /** Create and store a new identity credential label. */
  createCredentialLabel: CredentialLabel;
  /** Create a credential locale. */
  createCredentialLocale: CredentialLocale;
  /** Create a credential trust issuer. */
  createCredentialTrustIssuer: CredentialTrustIssuer;
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
  /** Create a flow disclosure handler. */
  createDisclosureHandler: DisclosureHandler;
  /** Create a flow disclosure handler by attributes */
  createDisclosureHandlerByAttributes: DisclosureHandler;
  /** Create a DisclosureHandlerConfigurationNLWallet. */
  createDisclosureHandlerConfigurationNLWallet: DisclosureHandlerConfigurationNlWallet;
  /** Create a DisclosureHandlerConfigurationOID4VC. */
  createDisclosureHandlerConfigurationOID4VC: DisclosureHandlerConfigurationOid4Vc;
  /** Create and store a new Label type. */
  createDisclosureLabel: DisclosureLabel;
  /** Create and store a new mapping type. */
  createDisclosureMapping: DisclosureMapping;
  /** Bind an organization secret to a disclosure flow. */
  createDisclosureSecret: DisclosureSecret;
  /** Create a handler. */
  createHandler: Handler;
  /** Create a handler app. */
  createHandlerApp: HandlerApp;
  /** Create a handler app protocol mDOC configuration. */
  createHandlerAppProtocolMdoc: HandlerAppProtocolMdoc;
  /** Create a handler app protocol OID4VC configuration. */
  createHandlerAppProtocolOid4vc: HandlerAppProtocolOid4vc;
  /** Create and store a new identity handler label. */
  createHandlerLabel: HandlerLabel;
  /** Create a handler locale. */
  createHandlerLocale: HandlerLocale;
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
  /** Create a flow credential meta oid4vc. */
  createIssuanceCredentialMetaOid4vc: IssuanceCredentialMetaOid4vc;
  /** Create a flow credential meta yivi. */
  createIssuanceCredentialMetaYivi: IssuanceCredentialMetaYivi;
  /** Create and store a new domain type. */
  createIssuanceDomain: IssuanceDomain;
  /** Create a flow issuance handler. */
  createIssuanceHandler: IssuanceHandler;
  /** Create a flow issuance handler by attributes. */
  createIssuanceHandlerByAttributes: IssuanceHandler;
  /** Create a IssuanceHandlerConfigurationNLWallet. */
  createIssuanceHandlerConfigurationNLWallet: IssuanceHandlerConfigurationNlWallet;
  /** Create an IssuanceHandlerConfigurationOID4VC. */
  createIssuanceHandlerConfigurationOID4VC: IssuanceHandlerConfigurationOid4Vc;
  /** Create and store a new Label type. */
  createIssuanceLabel: IssuanceLabel;
  /** Create and store a new mapping type. */
  createIssuanceMapping: IssuanceMapping;
  /** Bind an organization secret to an issuance flow. */
  createIssuanceSecret: IssuanceSecret;
  /** Create an issuer draft (RFC 0012). */
  createIssuerDraft: Issuer;
  /** Create and store a new identity issuer label. */
  createIssuerLabel: IssuerLabel;
  /** Create an issuer locale. */
  createIssuerLocale: IssuerLocale;
  /** Create a new label */
  createLabel: Label;
  /** Create a locale config. */
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
  /** Create a mappingIssuance claim. */
  createMappingIssuanceClaim: MappingIssuanceClaim;
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
  /** Create an organization trust issuer key. */
  createOrganizationTrustIssuerKey: OrganizationTrustIssuerKey;
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
  /** Create a scope. */
  createScope: Scope;
  /** Create a scope claim. */
  createScopeClaim: ScopeClaim;
  /** Create a scope locale. */
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
  /** Create a flow signature handler. */
  createSignatureHandler: SignatureHandler;
  /** Create a flow signature handler by attributes. */
  createSignatureHandlerByAttributes: SignatureHandler;
  /** Create a SignatureHandlerConfigurationNLWallet. */
  createSignatureHandlerConfigurationNLWallet: SignatureHandlerConfigurationNlWallet;
  /** Create and store a new Label type. */
  createSignatureLabel: SignatureLabel;
  /** Create and store a new mapping type. */
  createSignatureMapping: SignatureMapping;
  /** Bind an organization secret to a signature flow. */
  createSignatureSecret: SignatureSecret;
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
  /** Create a trust anchor DID. */
  createTrustAnchorDid: TrustAnchorDid;
  /** Create a trust anchor Idemix. */
  createTrustAnchorIdemix: TrustAnchorIdemix;
  /** Create a trust anchor X.509. */
  createTrustAnchorX509: TrustAnchorX509;
  /** Create a trust anchor X.509 root certificate. */
  createTrustAnchorX509RootCertificate: TrustAnchorX509RootCertificate;
  /** Create a trust app. */
  createTrustApp: TrustApp;
  /**
   * Create a new trust draft. Creates the TrustVersion envelope and the first
   * DRAFT version.
   */
  createTrustDraft: Trust;
  /** Create a trust issuer. */
  createTrustIssuer: TrustIssuer;
  /** Create a trust issuer key. */
  createTrustIssuerKey: TrustIssuerKey;
  /** Create a trust issuer key algorithm Idemix. */
  createTrustIssuerKeyAlgorithmIdemix: TrustIssuerKeyAlgorithmIdemix;
  /** Create a trust issuer key DID binding. */
  createTrustIssuerKeyDidBinding: TrustIssuerKeyDidBinding;
  /** Create a trust issuer key X.509 certificate. */
  createTrustIssuerKeyX509Cert: TrustIssuerKeyX509Cert;
  /** Create and store a new identity trust label. */
  createTrustLabel: TrustLabel;
  /** Create a trust locale. */
  createTrustLocale: TrustLocale;
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
  /** Delete an app locale. */
  deleteAppLocale?: Maybe<Scalars['Null']['output']>;
  /** Delete an attribute. */
  deleteAttribute?: Maybe<Scalars['Null']['output']>;
  /** Delete an attribute format Datakeeper. */
  deleteAttributeFormatDatakeeper?: Maybe<Scalars['Null']['output']>;
  /** Delete an attribute format Digidentity. */
  deleteAttributeFormatDigidentity?: Maybe<Scalars['Null']['output']>;
  /** Delete an attribute format MSO MDOC. */
  deleteAttributeFormatMsoMdoc?: Maybe<Scalars['Null']['output']>;
  /** Delete an attribute format Nect. */
  deleteAttributeFormatNect?: Maybe<Scalars['Null']['output']>;
  /** Delete an attribute format NL Wallet. */
  deleteAttributeFormatNlWallet?: Maybe<Scalars['Null']['output']>;
  /** Delete an attribute format ReadID. */
  deleteAttributeFormatReadid?: Maybe<Scalars['Null']['output']>;
  /** Delete an attribute format SD-JWT. */
  deleteAttributeFormatSdJwt?: Maybe<Scalars['Null']['output']>;
  /** Delete an attribute format Yivi. */
  deleteAttributeFormatYivi?: Maybe<Scalars['Null']['output']>;
  /** Delete an attribute format Yoti. */
  deleteAttributeFormatYoti?: Maybe<Scalars['Null']['output']>;
  /** Delete an identity attribute label. */
  deleteAttributeLabel?: Maybe<Scalars['Null']['output']>;
  /** Delete an attribute locale. */
  deleteAttributeLocale?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow. */
  deleteAuthentication?: Maybe<Scalars['Null']['output']>;
  /** Delete a brand. */
  deleteAuthenticationBrand?: Maybe<Scalars['Null']['output']>;
  /** Delete a domain. */
  deleteAuthenticationDomain?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow authentication handler. */
  deleteAuthenticationHandler?: Maybe<Scalars['Null']['output']>;
  /** Delete a AuthenticationHandlerConfigurationNLWallet. */
  deleteAuthenticationHandlerConfigurationNLWallet?: Maybe<Scalars['Null']['output']>;
  /** Delete a Label. */
  deleteAuthenticationLabel?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow authentication scope. */
  deleteAuthenticationScope?: Maybe<Scalars['Null']['output']>;
  /** Unbind an organization secret from an authentication flow. */
  deleteAuthenticationSecret?: Maybe<Scalars['Null']['output']>;
  /** Delete billing plan. */
  deleteBillingPlan?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential Datakeeper format. */
  deleteCredentialFormatDatakeeper?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential Digidentity format. */
  deleteCredentialFormatDigidentity?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential MSO MDOC format. */
  deleteCredentialFormatMsoMdoc?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential Nect format. */
  deleteCredentialFormatNect?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential NL Wallet format. */
  deleteCredentialFormatNlWallet?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential ReadID format. */
  deleteCredentialFormatReadid?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential SD-JWT format. */
  deleteCredentialFormatSdJwt?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential Yivi format. */
  deleteCredentialFormatYivi?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential Yoti format. */
  deleteCredentialFormatYoti?: Maybe<Scalars['Null']['output']>;
  /** Delete an identity credential label. */
  deleteCredentialLabel?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential locale. */
  deleteCredentialLocale?: Maybe<Scalars['Null']['output']>;
  /** Delete a credential trust issuer. */
  deleteCredentialTrustIssuer?: Maybe<Scalars['Null']['output']>;
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
  /** Delete a flow disclosure handler. */
  deleteDisclosureHandler?: Maybe<Scalars['Null']['output']>;
  /** Delete a DisclosureHandlerConfigurationNLWallet. */
  deleteDisclosureHandlerConfigurationNLWallet?: Maybe<Scalars['Null']['output']>;
  /** Delete a DisclosureHandlerConfigurationOID4VC. */
  deleteDisclosureHandlerConfigurationOID4VC?: Maybe<Scalars['Null']['output']>;
  /** Delete a Label. */
  deleteDisclosureLabel?: Maybe<Scalars['Null']['output']>;
  /** Delete a mapping. */
  deleteDisclosureMapping?: Maybe<Scalars['Null']['output']>;
  /** Unbind an organization secret from a disclosure flow. */
  deleteDisclosureSecret?: Maybe<Scalars['Null']['output']>;
  /** Delete a handler. */
  deleteHandler?: Maybe<Scalars['Null']['output']>;
  /** Delete a handler app. */
  deleteHandlerApp?: Maybe<Scalars['Null']['output']>;
  /** Delete a handler app protocol mDOC configuration. */
  deleteHandlerAppProtocolMdoc?: Maybe<Scalars['Null']['output']>;
  /** Delete a handler app protocol OID4VC configuration. */
  deleteHandlerAppProtocolOid4vc?: Maybe<Scalars['Null']['output']>;
  /** Delete an identity handler label. */
  deleteHandlerLabel?: Maybe<Scalars['Null']['output']>;
  /** Delete a handler locale. */
  deleteHandlerLocale?: Maybe<Scalars['Null']['output']>;
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
  /** Delete a flow credential meta oid4vc. */
  deleteIssuanceCredentialMetaOid4vc?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow credential meta yivi. */
  deleteIssuanceCredentialMetaYivi?: Maybe<Scalars['Null']['output']>;
  /** Delete a domain. */
  deleteIssuanceDomain?: Maybe<Scalars['Null']['output']>;
  /** Delete a flow issuance handler. */
  deleteIssuanceHandler?: Maybe<Scalars['Null']['output']>;
  /** Delete a IssuanceHandlerConfigurationNLWallet. */
  deleteIssuanceHandlerConfigurationNLWallet?: Maybe<Scalars['Null']['output']>;
  /** Delete an IssuanceHandlerConfigurationOID4VC. */
  deleteIssuanceHandlerConfigurationOID4VC?: Maybe<Scalars['Null']['output']>;
  /** Delete a Label. */
  deleteIssuanceLabel?: Maybe<Scalars['Null']['output']>;
  /** Delete a mapping. */
  deleteIssuanceMapping?: Maybe<Scalars['Null']['output']>;
  /** Unbind an organization secret from an issuance flow. */
  deleteIssuanceSecret?: Maybe<Scalars['Null']['output']>;
  /** Delete an identity issuer label. */
  deleteIssuerLabel?: Maybe<Scalars['Null']['output']>;
  /** Delete an issuer locale. */
  deleteIssuerLocale?: Maybe<Scalars['Null']['output']>;
  /** Delete a label */
  deleteLabel: Scalars['Boolean']['output'];
  /** Delete a locale config. */
  deleteLocaleConfig?: Maybe<Scalars['Null']['output']>;
  /** Delete a maintenance. */
  deleteMaintenance?: Maybe<Scalars['Null']['output']>;
  /** Delete an mappingIssuance. */
  deleteMappingIssuance?: Maybe<Scalars['Null']['output']>;
  /** Delete a mappingIssuance attribute */
  deleteMappingIssuanceAttribute?: Maybe<Scalars['Null']['output']>;
  /** Delete a mappingIssuance claim. */
  deleteMappingIssuanceClaim?: Maybe<Scalars['Null']['output']>;
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
  /** Delete an organization trust issuer key. */
  deleteOrganizationTrustIssuerKey?: Maybe<Scalars['Null']['output']>;
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
  /** Delete a scope. */
  deleteScope?: Maybe<Scalars['Null']['output']>;
  /** Delete a scope claim. */
  deleteScopeClaim?: Maybe<Scalars['Null']['output']>;
  /** Delete a scope locale. */
  deleteScopeLocale?: Maybe<Scalars['Null']['output']>;
  /** Delete a scope resource. */
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
  /** Delete a flow signature handler. */
  deleteSignatureHandler?: Maybe<Scalars['Null']['output']>;
  /** Delete a SignatureHandlerConfigurationNLWallet. */
  deleteSignatureHandlerConfigurationNLWallet?: Maybe<Scalars['Null']['output']>;
  /** Delete a Label. */
  deleteSignatureLabel?: Maybe<Scalars['Null']['output']>;
  /** Delete a mapping. */
  deleteSignatureMapping?: Maybe<Scalars['Null']['output']>;
  /** Unbind an organization secret from a signature flow. */
  deleteSignatureSecret?: Maybe<Scalars['Null']['output']>;
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
  /** Delete a trust anchor DID. */
  deleteTrustAnchorDid?: Maybe<Scalars['Null']['output']>;
  /** Delete a trust anchor Idemix. */
  deleteTrustAnchorIdemix?: Maybe<Scalars['Null']['output']>;
  /** Delete a trust anchor X.509. */
  deleteTrustAnchorX509?: Maybe<Scalars['Null']['output']>;
  /** Delete a trust anchor X.509 root certificate. */
  deleteTrustAnchorX509RootCertificate?: Maybe<Scalars['Null']['output']>;
  /** Delete a trust app. */
  deleteTrustApp?: Maybe<Scalars['Null']['output']>;
  /** Delete a trust issuer. */
  deleteTrustIssuer?: Maybe<Scalars['Null']['output']>;
  /** Delete a trust issuer key. */
  deleteTrustIssuerKey?: Maybe<Scalars['Null']['output']>;
  /** Delete a trust issuer key algorithm Idemix. */
  deleteTrustIssuerKeyAlgorithmIdemix?: Maybe<Scalars['Null']['output']>;
  /** Delete a trust issuer key DID binding. */
  deleteTrustIssuerKeyDidBinding?: Maybe<Scalars['Null']['output']>;
  /** Delete a trust issuer key X.509 certificate. */
  deleteTrustIssuerKeyX509Cert?: Maybe<Scalars['Null']['output']>;
  /** Delete an identity trust label. */
  deleteTrustLabel?: Maybe<Scalars['Null']['output']>;
  /** Delete a trust locale. */
  deleteTrustLocale?: Maybe<Scalars['Null']['output']>;
  /** Delete an existing user. */
  deleteUser?: Maybe<Scalars['Null']['output']>;
  /** Delete an existing userInvitation. */
  deleteUserInvitation?: Maybe<Scalars['Null']['output']>;
  /** Deprecate a credential (RFC 0012). */
  deprecateCredential: Credential;
  /** Deprecate an issuer (RFC 0012). */
  deprecateIssuer: Issuer;
  /** Deprecate a trust framework. */
  deprecateTrust: Trust;
  /** Discard a credential draft (RFC 0012). */
  discardCredentialDraft: Credential;
  /** Discard an issuer draft (RFC 0012). */
  discardIssuerDraft: Issuer;
  /** Discard a trust draft, transitioning it from DRAFT to DISCARDED. */
  discardTrustDraft: Trust;
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
  /**
   * Activate an authentication. Provisions required handler app infrastructure,
   * then transitions to ACTIVE. Subscribe to `provisioningProgressUpdated` for progress.
   * If no provisioning is needed, the task resolves immediately.
   */
  provisionAuthenticationActivation: ProvisioningTask;
  /**
   * Activate a disclosure. Provisions required handler app infrastructure,
   * then transitions to ACTIVE. Subscribe to `provisioningProgressUpdated` for progress.
   * If no provisioning is needed, the task resolves immediately.
   */
  provisionDisclosureActivation: ProvisioningTask;
  /**
   * Activate an issuance. Provisions required handler app infrastructure,
   * then transitions to ACTIVE. Subscribe to `provisioningProgressUpdated` for progress.
   * If no provisioning is needed, the task resolves immediately.
   */
  provisionIssuanceActivation: ProvisioningTask;
  /** Publish a credential (RFC 0012). */
  publishCredential: Credential;
  /** Publish an issuer (RFC 0012). */
  publishIssuer: Issuer;
  /** Publish a trust draft, transitioning it from DRAFT to LIVE. */
  publishTrust: Trust;
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
  /** Update an app locale. */
  updateAppLocale: AppLocale;
  /** Update an attribute. */
  updateAttribute: Attribute;
  /** Update an attribute format Datakeeper. */
  updateAttributeFormatDatakeeper: AttributeFormatDatakeeper;
  /** Update an attribute format Digidentity. */
  updateAttributeFormatDigidentity: AttributeFormatDigidentity;
  /** Update an attribute format MSO MDOC. */
  updateAttributeFormatMsoMdoc: AttributeFormatMsoMdoc;
  /** Update an attribute format Nect. */
  updateAttributeFormatNect: AttributeFormatNect;
  /** Update an attribute format NL Wallet. */
  updateAttributeFormatNlWallet: AttributeFormatNlWallet;
  /** Update an attribute format ReadID. */
  updateAttributeFormatReadid: AttributeFormatReadid;
  /** Update an attribute format SD-JWT. */
  updateAttributeFormatSdJwt: AttributeFormatSdJwt;
  /** Update an attribute format Yivi. */
  updateAttributeFormatYivi: AttributeFormatYivi;
  /** Update an attribute format Yoti. */
  updateAttributeFormatYoti: AttributeFormatYoti;
  /** Update an attribute locale. */
  updateAttributeLocale: AttributeLocale;
  /** Update a flow. */
  updateAuthentication: Authentication;
  /** Update brand. */
  updateAuthenticationBrand: AuthenticationBrand;
  /** Update an domain. */
  updateAuthenticationDomain: AuthenticationDomain;
  /** Update a flow authentication handler. */
  updateAuthenticationHandler: AuthenticationHandler;
  /** Update a AuthenticationHandlerConfigurationNLWallet. */
  updateAuthenticationHandlerConfigurationNLWallet: AuthenticationHandlerConfigurationNlWallet;
  /** Update billing method. */
  updateBillingMethod: BillingMethod;
  /** Update billing plan. */
  updateBillingPlan: BillingPlan;
  /** Update billing wallet */
  updateBillingWallet: BillingWallet;
  /** Update a credential draft (RFC 0012). */
  updateCredentialDraft: Credential;
  /** Update a credential Datakeeper format. */
  updateCredentialFormatDatakeeper: CredentialFormatDatakeeper;
  /** Update a credential Digidentity format. */
  updateCredentialFormatDigidentity: CredentialFormatDigidentity;
  /** Update a credential MSO MDOC format. */
  updateCredentialFormatMsoMdoc: CredentialFormatMsoMdoc;
  /** Update a credential Nect format. */
  updateCredentialFormatNect: CredentialFormatNect;
  /** Update a credential NL Wallet format. */
  updateCredentialFormatNlWallet: CredentialFormatNlWallet;
  /** Update a credential ReadID format. */
  updateCredentialFormatReadid: CredentialFormatReadid;
  /** Update a credential SD-JWT format. */
  updateCredentialFormatSdJwt: CredentialFormatSdJwt;
  /** Update a credential Yivi format. */
  updateCredentialFormatYivi: CredentialFormatYivi;
  /** Update a credential Yoti format. */
  updateCredentialFormatYoti: CredentialFormatYoti;
  /** Update a credential locale. */
  updateCredentialLocale: CredentialLocale;
  /** Update a flow. */
  updateDisclosure: Disclosure;
  /** Update brand */
  updateDisclosureBrand: DisclosureBrand;
  /** Update an domain. */
  updateDisclosureDomain: DisclosureDomain;
  /** Update a flow group. */
  updateDisclosureGroup: DisclosureGroup;
  /** Update a flow disclosure handler. */
  updateDisclosureHandler: DisclosureHandler;
  /** Update a DisclosureHandlerConfigurationNLWallet. */
  updateDisclosureHandlerConfigurationNLWallet: DisclosureHandlerConfigurationNlWallet;
  /** Update a DisclosureHandlerConfigurationOID4VC. */
  updateDisclosureHandlerConfigurationOID4VC: DisclosureHandlerConfigurationOid4Vc;
  /** Update a handler. */
  updateHandler: Handler;
  /** Update a handler app protocol OID4VC configuration. */
  updateHandlerAppProtocolOid4vc: HandlerAppProtocolOid4vc;
  /** Update a handler locale. */
  updateHandlerLocale: HandlerLocale;
  /** Update a flow. */
  updateIssuance: Issuance;
  /** Update brand */
  updateIssuanceBrand: IssuanceBrand;
  /** Update a flow credential meta datakeeper. */
  updateIssuanceCredentialMetaDatakeeper: IssuanceCredentialMetaDatakeeper;
  /** Update a flow credential meta oid4vc. */
  updateIssuanceCredentialMetaOid4vc: IssuanceCredentialMetaOid4vc;
  /** Update a flow credential meta yivi. */
  updateIssuanceCredentialMetaYivi: IssuanceCredentialMetaYivi;
  /** Update an domain. */
  updateIssuanceDomain: IssuanceDomain;
  /** Update a flow issuance handler. */
  updateIssuanceHandler: IssuanceHandler;
  /** Update a IssuanceHandlerConfigurationNLWallet. */
  updateIssuanceHandlerConfigurationNLWallet: IssuanceHandlerConfigurationNlWallet;
  /** Update an IssuanceHandlerConfigurationOID4VC. */
  updateIssuanceHandlerConfigurationOID4VC: IssuanceHandlerConfigurationOid4Vc;
  /** Update an issuer draft (RFC 0012). */
  updateIssuerDraft: Issuer;
  /** Update an issuer locale. */
  updateIssuerLocale: IssuerLocale;
  /** Update an existing label */
  updateLabel: Label;
  /** Update a locale config. */
  updateLocaleConfig: LocaleConfig;
  /** Update a maintenance. */
  updateMaintenance: Maintenance;
  /** Update an mappingIssuance. */
  updateMappingIssuance: MappingIssuance;
  /** Update a mappingIssuance attribute. */
  updateMappingIssuanceAttribute: MappingIssuanceAttribute;
  /** Update a mappingIssuance claim. */
  updateMappingIssuanceClaim: MappingIssuanceClaim;
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
  /** Update an organization trust issuer key. */
  updateOrganizationTrustIssuerKey: OrganizationTrustIssuerKey;
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
  /** Update a scope. */
  updateScope: Scope;
  /** Update a scope claim. */
  updateScopeClaim: ScopeClaim;
  /** Update a scope locale. */
  updateScopeLocale: ScopeLocale;
  /** Update a scope resource. */
  updateScopeResource: ScopeResource;
  /** Update a flow. */
  updateSignature: Signature;
  /** Update brand */
  updateSignatureBrand: SignatureBrand;
  /** Update an domain. */
  updateSignatureDomain: SignatureDomain;
  /** Update a flow group. */
  updateSignatureGroup: SignatureGroup;
  /** Update a flow signature handler. */
  updateSignatureHandler: SignatureHandler;
  /** Update a SignatureHandlerConfigurationNLWallet. */
  updateSignatureHandlerConfigurationNLWallet: SignatureHandlerConfigurationNlWallet;
  /** Update a StudioPlan. */
  updateStudioPlan: StudioPlan;
  /** Update a StudioPlanControl. */
  updateStudioPlanControl: StudioPlanControl;
  /** Update a StudioPlanControlOverride. */
  updateStudioPlanControlOverride: StudioPlanControlOverride;
  /** Update a StudioPlanInterval. */
  updateStudioPlanInterval: StudioPlanInterval;
  /** Update a trust anchor DID. */
  updateTrustAnchorDid: TrustAnchorDid;
  /** Update a trust anchor X.509 root certificate. */
  updateTrustAnchorX509RootCertificate: TrustAnchorX509RootCertificate;
  /** Update an existing trust draft. */
  updateTrustDraft: Trust;
  /** Update a trust issuer key. */
  updateTrustIssuerKey: TrustIssuerKey;
  /** Update a trust issuer key algorithm Idemix. */
  updateTrustIssuerKeyAlgorithmIdemix: TrustIssuerKeyAlgorithmIdemix;
  /** Update a trust issuer key DID binding. */
  updateTrustIssuerKeyDidBinding: TrustIssuerKeyDidBinding;
  /** Update a trust issuer key X.509 certificate. */
  updateTrustIssuerKeyX509Cert: TrustIssuerKeyX509Cert;
  /** Update a trust locale. */
  updateTrustLocale: TrustLocale;
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


export type MutationActionAuthenticationArgs = {
  input: ActionAuthenticationInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionBillingWalletArgs = {
  input: ActionBillingWalletInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionCredentialRecordArgs = {
  input: ActionCredentialRecordInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionDisclosureArgs = {
  input: ActionDisclosureInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionHandlerArgs = {
  input: ActionHandlerInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionIssuanceArgs = {
  input: ActionIssuanceInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationActionIssuanceRunArgs = {
  input: ActionIssuanceRunInput;
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


export type MutationCloneCredentialFromVersionArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationCloneIssuerFromVersionArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationCloneTrustFromVersionArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationCreateAppArgs = {
  input: CreateAppInput;
};


export type MutationCreateAppLocaleArgs = {
  input: CreateAppLocaleInput;
};


export type MutationCreateAttributeArgs = {
  input: CreateAttributeInput;
};


export type MutationCreateAttributeFormatDatakeeperArgs = {
  input: CreateAttributeFormatDatakeeperInput;
};


export type MutationCreateAttributeFormatDigidentityArgs = {
  input: CreateAttributeFormatDigidentityInput;
};


export type MutationCreateAttributeFormatMsoMdocArgs = {
  input: CreateAttributeFormatMsoMdocInput;
};


export type MutationCreateAttributeFormatNectArgs = {
  input: CreateAttributeFormatNectInput;
};


export type MutationCreateAttributeFormatNlWalletArgs = {
  input: CreateAttributeFormatNlWalletInput;
};


export type MutationCreateAttributeFormatReadidArgs = {
  input: CreateAttributeFormatReadidInput;
};


export type MutationCreateAttributeFormatSdJwtArgs = {
  input: CreateAttributeFormatSdJwtInput;
};


export type MutationCreateAttributeFormatYiviArgs = {
  input: CreateAttributeFormatYiviInput;
};


export type MutationCreateAttributeFormatYotiArgs = {
  input: CreateAttributeFormatYotiInput;
};


export type MutationCreateAttributeLabelArgs = {
  input: CreateAttributeLabelInput;
};


export type MutationCreateAttributeLocaleArgs = {
  input: CreateAttributeLocaleInput;
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


export type MutationCreateAuthenticationHandlerArgs = {
  input: CreateAuthenticationHandlerInput;
};


export type MutationCreateAuthenticationHandlerConfigurationNlWalletArgs = {
  input: CreateAuthenticationHandlerConfigurationNlWalletInput;
};


export type MutationCreateAuthenticationLabelArgs = {
  input: CreateAuthenticationLabelInput;
};


export type MutationCreateAuthenticationScopeArgs = {
  input: CreateAuthenticationScopeInput;
};


export type MutationCreateAuthenticationSecretArgs = {
  input: CreateAuthenticationSecretInput;
};


export type MutationCreateBillingPlanArgs = {
  input: CreateBillingPlanInput;
};


export type MutationCreateBillingWalletArgs = {
  input: CreateBillingWalletInput;
};


export type MutationCreateCredentialDraftArgs = {
  input: CreateCredentialDraftInput;
};


export type MutationCreateCredentialFormatDatakeeperArgs = {
  input: CreateCredentialFormatDatakeeperInput;
};


export type MutationCreateCredentialFormatDigidentityArgs = {
  input: CreateCredentialFormatDigidentityInput;
};


export type MutationCreateCredentialFormatMsoMdocArgs = {
  input: CreateCredentialFormatMsoMdocInput;
};


export type MutationCreateCredentialFormatNectArgs = {
  input: CreateCredentialFormatNectInput;
};


export type MutationCreateCredentialFormatNlWalletArgs = {
  input: CreateCredentialFormatNlWalletInput;
};


export type MutationCreateCredentialFormatReadidArgs = {
  input: CreateCredentialFormatReadidInput;
};


export type MutationCreateCredentialFormatSdJwtArgs = {
  input: CreateCredentialFormatSdJwtInput;
};


export type MutationCreateCredentialFormatYiviArgs = {
  input: CreateCredentialFormatYiviInput;
};


export type MutationCreateCredentialFormatYotiArgs = {
  input: CreateCredentialFormatYotiInput;
};


export type MutationCreateCredentialLabelArgs = {
  input: CreateCredentialLabelInput;
};


export type MutationCreateCredentialLocaleArgs = {
  input: CreateCredentialLocaleInput;
};


export type MutationCreateCredentialTrustIssuerArgs = {
  input: CreateCredentialTrustIssuerInput;
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


export type MutationCreateDisclosureHandlerArgs = {
  input: CreateDisclosureHandlerInput;
};


export type MutationCreateDisclosureHandlerByAttributesArgs = {
  input: CreateDisclosureHandlerByAttributesInput;
};


export type MutationCreateDisclosureHandlerConfigurationNlWalletArgs = {
  input: CreateDisclosureHandlerConfigurationNlWalletInput;
};


export type MutationCreateDisclosureHandlerConfigurationOid4VcArgs = {
  input: CreateDisclosureHandlerConfigurationOid4VcInput;
};


export type MutationCreateDisclosureLabelArgs = {
  input: CreateDisclosureLabelInput;
};


export type MutationCreateDisclosureMappingArgs = {
  input: CreateDisclosureMappingInput;
};


export type MutationCreateDisclosureSecretArgs = {
  input: CreateDisclosureSecretInput;
};


export type MutationCreateHandlerArgs = {
  input: CreateHandlerInput;
};


export type MutationCreateHandlerAppArgs = {
  input: CreateHandlerAppInput;
};


export type MutationCreateHandlerAppProtocolMdocArgs = {
  input: CreateHandlerAppProtocolMdocInput;
};


export type MutationCreateHandlerAppProtocolOid4vcArgs = {
  input: CreateHandlerAppProtocolOid4vcInput;
};


export type MutationCreateHandlerLabelArgs = {
  input: CreateHandlerLabelInput;
};


export type MutationCreateHandlerLocaleArgs = {
  input: CreateHandlerLocaleInput;
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


export type MutationCreateIssuanceCredentialMetaOid4vcArgs = {
  input: CreateIssuanceCredentialMetaOid4vcInput;
};


export type MutationCreateIssuanceCredentialMetaYiviArgs = {
  input: CreateIssuanceCredentialMetaYiviInput;
};


export type MutationCreateIssuanceDomainArgs = {
  input: CreateIssuanceDomainInput;
};


export type MutationCreateIssuanceHandlerArgs = {
  input: CreateIssuanceHandlerInput;
};


export type MutationCreateIssuanceHandlerByAttributesArgs = {
  input: CreateIssuanceHandlerByAttributesInput;
};


export type MutationCreateIssuanceHandlerConfigurationNlWalletArgs = {
  input: CreateIssuanceHandlerConfigurationNlWalletInput;
};


export type MutationCreateIssuanceHandlerConfigurationOid4VcArgs = {
  input: CreateIssuanceHandlerConfigurationOid4VcInput;
};


export type MutationCreateIssuanceLabelArgs = {
  input: CreateIssuanceLabelInput;
};


export type MutationCreateIssuanceMappingArgs = {
  input: CreateIssuanceMappingInput;
};


export type MutationCreateIssuanceSecretArgs = {
  input: CreateIssuanceSecretInput;
};


export type MutationCreateIssuerDraftArgs = {
  input: CreateIssuerDraftInput;
};


export type MutationCreateIssuerLabelArgs = {
  input: CreateIssuerLabelInput;
};


export type MutationCreateIssuerLocaleArgs = {
  input: CreateIssuerLocaleInput;
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


export type MutationCreateMappingIssuanceClaimArgs = {
  input: CreateMappingIssuanceClaimInput;
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


export type MutationCreateOrganizationTrustIssuerKeyArgs = {
  input: CreateOrganizationTrustIssuerKeyInput;
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


export type MutationCreateSignatureHandlerArgs = {
  input: CreateSignatureHandlerInput;
};


export type MutationCreateSignatureHandlerByAttributesArgs = {
  input: CreateSignatureHandlerByAttributesInput;
};


export type MutationCreateSignatureHandlerConfigurationNlWalletArgs = {
  input: CreateSignatureHandlerConfigurationNlWalletInput;
};


export type MutationCreateSignatureLabelArgs = {
  input: CreateSignatureLabelInput;
};


export type MutationCreateSignatureMappingArgs = {
  input: CreateSignatureMappingInput;
};


export type MutationCreateSignatureSecretArgs = {
  input: CreateSignatureSecretInput;
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


export type MutationCreateTrustAnchorDidArgs = {
  input: CreateTrustAnchorDidInput;
};


export type MutationCreateTrustAnchorIdemixArgs = {
  input: CreateTrustAnchorIdemixInput;
};


export type MutationCreateTrustAnchorX509Args = {
  input: CreateTrustAnchorX509Input;
};


export type MutationCreateTrustAnchorX509RootCertificateArgs = {
  input: CreateTrustAnchorX509RootCertificateInput;
};


export type MutationCreateTrustAppArgs = {
  input: CreateTrustAppInput;
};


export type MutationCreateTrustDraftArgs = {
  input: CreateTrustDraftInput;
};


export type MutationCreateTrustIssuerArgs = {
  input: CreateTrustIssuerInput;
};


export type MutationCreateTrustIssuerKeyArgs = {
  input: CreateTrustIssuerKeyInput;
};


export type MutationCreateTrustIssuerKeyAlgorithmIdemixArgs = {
  input: CreateTrustIssuerKeyAlgorithmIdemixInput;
};


export type MutationCreateTrustIssuerKeyDidBindingArgs = {
  input: CreateTrustIssuerKeyDidBindingInput;
};


export type MutationCreateTrustIssuerKeyX509CertArgs = {
  input: CreateTrustIssuerKeyX509CertInput;
};


export type MutationCreateTrustLabelArgs = {
  input: CreateTrustLabelInput;
};


export type MutationCreateTrustLocaleArgs = {
  input: CreateTrustLocaleInput;
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


export type MutationDeleteAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeFormatDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeFormatDigidentityArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeFormatMsoMdocArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeFormatNectArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeFormatNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeFormatReadidArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeFormatSdJwtArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeFormatYiviArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeFormatYotiArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeLabelArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAttributeLocaleArgs = {
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


export type MutationDeleteAuthenticationHandlerArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAuthenticationHandlerConfigurationNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAuthenticationLabelArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAuthenticationScopeArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteAuthenticationSecretArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteBillingPlanArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialFormatDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialFormatDigidentityArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialFormatMsoMdocArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialFormatNectArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialFormatNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialFormatReadidArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialFormatSdJwtArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialFormatYiviArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialFormatYotiArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialLabelArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteCredentialTrustIssuerArgs = {
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


export type MutationDeleteDisclosureHandlerArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteDisclosureHandlerConfigurationNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteDisclosureHandlerConfigurationOid4VcArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteDisclosureLabelArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteDisclosureMappingArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteDisclosureSecretArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteHandlerArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteHandlerAppArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteHandlerAppProtocolMdocArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteHandlerAppProtocolOid4vcArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteHandlerLabelArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteHandlerLocaleArgs = {
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


export type MutationDeleteIssuanceCredentialMetaOid4vcArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuanceCredentialMetaYiviArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuanceDomainArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuanceHandlerArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuanceHandlerConfigurationNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuanceHandlerConfigurationOid4VcArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuanceLabelArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuanceMappingArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuanceSecretArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuerLabelArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteIssuerLocaleArgs = {
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


export type MutationDeleteMappingIssuanceClaimArgs = {
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


export type MutationDeleteOrganizationTrustIssuerKeyArgs = {
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


export type MutationDeleteSignatureHandlerArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteSignatureHandlerConfigurationNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteSignatureLabelArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteSignatureMappingArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteSignatureSecretArgs = {
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


export type MutationDeleteTrustAnchorDidArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteTrustAnchorIdemixArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteTrustAnchorX509Args = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteTrustAnchorX509RootCertificateArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteTrustAppArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteTrustIssuerArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteTrustIssuerKeyArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteTrustIssuerKeyAlgorithmIdemixArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteTrustIssuerKeyDidBindingArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteTrustIssuerKeyX509CertArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteTrustLabelArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteTrustLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteUserArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeleteUserInvitationArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDeprecateCredentialArgs = {
  input: DeprecateCredentialInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationDeprecateIssuerArgs = {
  input: DeprecateIssuerInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationDeprecateTrustArgs = {
  input: DeprecateTrustInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationDiscardCredentialDraftArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDiscardIssuerDraftArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationDiscardTrustDraftArgs = {
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


export type MutationProvisionAuthenticationActivationArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationProvisionDisclosureActivationArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationProvisionIssuanceActivationArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationPublishCredentialArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationPublishIssuerArgs = {
  uuid: Scalars['UUID']['input'];
};


export type MutationPublishTrustArgs = {
  uuid: Scalars['UUID']['input'];
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


export type MutationUpdateAttributeArgs = {
  input: UpdateAttributeInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeFormatDatakeeperArgs = {
  input: UpdateAttributeFormatDatakeeperInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeFormatDigidentityArgs = {
  input: UpdateAttributeFormatDigidentityInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeFormatMsoMdocArgs = {
  input: UpdateAttributeFormatMsoMdocInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeFormatNectArgs = {
  input: UpdateAttributeFormatNectInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeFormatNlWalletArgs = {
  input: UpdateAttributeFormatNlWalletInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeFormatReadidArgs = {
  input: UpdateAttributeFormatReadidInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeFormatSdJwtArgs = {
  input: UpdateAttributeFormatSdJwtInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeFormatYiviArgs = {
  input: UpdateAttributeFormatYiviInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeFormatYotiArgs = {
  input: UpdateAttributeFormatYotiInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAttributeLocaleArgs = {
  input: UpdateAttributeLocaleInput;
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


export type MutationUpdateAuthenticationHandlerArgs = {
  input: UpdateAuthenticationHandlerInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateAuthenticationHandlerConfigurationNlWalletArgs = {
  input: UpdateAuthenticationHandlerConfigurationNlWalletInput;
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


export type MutationUpdateCredentialDraftArgs = {
  input: UpdateCredentialDraftInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialFormatDatakeeperArgs = {
  input: UpdateCredentialFormatDatakeeperInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialFormatDigidentityArgs = {
  input: UpdateCredentialFormatDigidentityInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialFormatMsoMdocArgs = {
  input: UpdateCredentialFormatMsoMdocInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialFormatNectArgs = {
  input: UpdateCredentialFormatNectInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialFormatNlWalletArgs = {
  input: UpdateCredentialFormatNlWalletInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialFormatReadidArgs = {
  input: UpdateCredentialFormatReadidInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialFormatSdJwtArgs = {
  input: UpdateCredentialFormatSdJwtInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialFormatYiviArgs = {
  input: UpdateCredentialFormatYiviInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialFormatYotiArgs = {
  input: UpdateCredentialFormatYotiInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateCredentialLocaleArgs = {
  input: UpdateCredentialLocaleInput;
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


export type MutationUpdateDisclosureHandlerArgs = {
  input: UpdateDisclosureHandlerInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateDisclosureHandlerConfigurationNlWalletArgs = {
  input: UpdateDisclosureHandlerConfigurationNlWalletInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateDisclosureHandlerConfigurationOid4VcArgs = {
  input: UpdateDisclosureHandlerConfigurationOid4VcInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateHandlerArgs = {
  input: UpdateHandlerInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateHandlerAppProtocolOid4vcArgs = {
  input: UpdateHandlerAppProtocolOid4vcInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateHandlerLocaleArgs = {
  input: UpdateHandlerLocaleInput;
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


export type MutationUpdateIssuanceCredentialMetaOid4vcArgs = {
  input: UpdateIssuanceCredentialMetaOid4vcInput;
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


export type MutationUpdateIssuanceHandlerArgs = {
  input: UpdateIssuanceHandlerInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateIssuanceHandlerConfigurationNlWalletArgs = {
  input: UpdateIssuanceHandlerConfigurationNlWalletInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateIssuanceHandlerConfigurationOid4VcArgs = {
  input: UpdateIssuanceHandlerConfigurationOid4VcInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateIssuerDraftArgs = {
  input: UpdateIssuerDraftInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateIssuerLocaleArgs = {
  input: UpdateIssuerLocaleInput;
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


export type MutationUpdateMappingIssuanceClaimArgs = {
  input: UpdateMappingIssuanceClaimInput;
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


export type MutationUpdateOrganizationTrustIssuerKeyArgs = {
  input: UpdateOrganizationTrustIssuerKeyInput;
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


export type MutationUpdateSignatureHandlerArgs = {
  input: UpdateSignatureHandlerInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateSignatureHandlerConfigurationNlWalletArgs = {
  input: UpdateSignatureHandlerConfigurationNlWalletInput;
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


export type MutationUpdateTrustAnchorDidArgs = {
  input: UpdateTrustAnchorDidInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateTrustAnchorX509RootCertificateArgs = {
  input: UpdateTrustAnchorX509RootCertificateInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateTrustDraftArgs = {
  input: UpdateTrustDraftInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateTrustIssuerKeyArgs = {
  input: UpdateTrustIssuerKeyInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateTrustIssuerKeyAlgorithmIdemixArgs = {
  input: UpdateTrustIssuerKeyAlgorithmIdemixInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateTrustIssuerKeyDidBindingArgs = {
  input: UpdateTrustIssuerKeyDidBindingInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateTrustIssuerKeyX509CertArgs = {
  input: UpdateTrustIssuerKeyX509CertInput;
  uuid: Scalars['UUID']['input'];
};


export type MutationUpdateTrustLocaleArgs = {
  input: UpdateTrustLocaleInput;
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

/** NL Wallet credential format types. */
export enum NlWalletFormat {
  DcSdJwt = 'dc_sd_jwt',
  MsoMdoc = 'mso_mdoc'
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

/** OID4VC issuance flow type */
export enum Oid4vcIssuanceFlow {
  DisclosureBasedIssuance = 'DISCLOSURE_BASED_ISSUANCE',
  PreAuthIssuance = 'PRE_AUTH_ISSUANCE'
}

/** OID4VC issuance profile type */
export enum Oid4vcIssuanceProfile {
  EuAv = 'EU_AV',
  Standard = 'STANDARD'
}

/** OID4VC verification profile type */
export enum Oid4vcVerificationProfile {
  EuAv = 'EU_AV',
  Haip = 'HAIP',
  Standard = 'STANDARD'
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
  /** The ISO 3166-1 alpha-2 country code of the organization. */
  countryCode?: Maybe<Scalars['ISO3166']['output']>;
  /** The resource creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The organization description. */
  description?: Maybe<Scalars['NonEmpty']['output']>;
  /** The public email address of the organization. */
  email?: Maybe<Scalars['Email']['output']>;
  /** The chamber of commerce registration number. */
  kvk?: Maybe<Scalars['NonEmpty']['output']>;
  /** Labels created by this organization */
  labels?: Maybe<LabelConnection>;
  /** The legal registered name of the organization. */
  legalName?: Maybe<Scalars['NonEmpty']['output']>;
  /** The logo of the organization. */
  logo?: Maybe<Scalars['ProfilePicture']['output']>;
  /** A list of managed organizations */
  managedOrganizations?: Maybe<OrganizationConnection>;
  /** The NACE Rev. 2.1 economic activity code of the organization. */
  naceCode?: Maybe<Scalars['NACECode']['output']>;
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
  /** The URL of the organization's privacy policy. */
  privacyPolicyUrl?: Maybe<Scalars['URL']['output']>;
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
  /** The uuid of the organization. */
  organizationUuid: Scalars['UUID']['output'];
  /** The update time. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
  /** The state for verification. */
  verificationState: OrganizationAppState;
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
  CountryCode = 'countryCode',
  Description = 'description',
  Email = 'email',
  Kvk = 'kvk',
  LegalName = 'legalName',
  NaceCode = 'naceCode',
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
  Oauth = 'OAUTH'
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

/**
 * OrganizationTrustIssuerKey definition.
 *
 * Binds an organization to a catalog TrustIssuerKey and stores the
 * Vault Transit key name used for signing. The public key material
 * (JWK, x5c) lives on TrustIssuerKey in the catalog database.
 */
export type OrganizationTrustIssuerKey = Model & {
  __typename?: 'OrganizationTrustIssuerKey';
  /** The creation time. */
  createdAt: Scalars['DateTime']['output'];
  /** The organization. */
  organization: Organization;
  /** The organization UUID. */
  organizationUuid: Scalars['UUID']['output'];
  /** The Vault Transit private key identifier. */
  privateKeyIdentifier: Scalars['String']['output'];
  /** The trust issuer key UUID (cross-db reference to catalog). */
  trustIssuerKeyUuid: Scalars['UUID']['output'];
  /** The update time. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};

/** The OrganizationTrustIssuerKey connection definition. */
export type OrganizationTrustIssuerKeyConnection = {
  __typename?: 'OrganizationTrustIssuerKeyConnection';
  edges: Array<Maybe<OrganizationTrustIssuerKeyEdge>>;
  pageInfo: PageInfo;
};

/** The OrganizationTrustIssuerKey edge definition. */
export type OrganizationTrustIssuerKeyEdge = {
  __typename?: 'OrganizationTrustIssuerKeyEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationTrustIssuerKey;
};

/** Fields which can be used to filter OrganizationTrustIssuerKey on. Value must be camel case. */
export enum OrganizationTrustIssuerKeyFilteringField {
  CreatedAt = 'createdAt',
  OrganizationUuid = 'organizationUuid',
  TrustIssuerKeyUuid = 'trustIssuerKeyUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort OrganizationTrustIssuerKey on. Value must be camel case. */
export enum OrganizationTrustIssuerKeySortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting OrganizationTrustIssuerKey. */
export type OrganizationTrustIssuerKeySortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: OrganizationTrustIssuerKeySortEnum;
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
  /** Returns the first _n_ elements from the list. Accepts at most 100. */
  first?: InputMaybe<Scalars['Int']['input']>;
  /** Returns the last _n_ elements from the list. Accepts at most 100. */
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
  /** The type of entity being assigned (ATTRIBUTE, CREDENTIAL, ISSUER, TRUST, FLOW_AUTHENTICATION, etc.) */
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
  Trust = 'TRUST'
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
  Trust = 'TRUST'
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
  /** The hierarchy level (FLOW, TRUST, ISSUER, CREDENTIAL, ATTRIBUTE) */
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

/** Handler protocol types. */
export enum Protocol {
  Datakeeper = 'DATAKEEPER',
  Digidentity = 'DIGIDENTITY',
  Mdoc = 'MDOC',
  Nect = 'NECT',
  None = 'NONE',
  Oid4Vc = 'OID4VC',
  Readid = 'READID',
  Yivi = 'YIVI',
  Yoti = 'YOTI'
}

/** Progress of a single provisioning child task. */
export type ProvisioningChildProgress = {
  __typename?: 'ProvisioningChildProgress';
  /** Error category (TRANSIENT or PERMANENT) if the task failed. */
  errorCategory?: Maybe<Scalars['String']['output']>;
  /** Error code if the task failed. */
  errorCode?: Maybe<Scalars['String']['output']>;
  /** Error hint (suggested action) if the task failed. */
  errorHint?: Maybe<Scalars['String']['output']>;
  /** Error message if the task failed. */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** Human-readable label for the task. */
  label: Scalars['NonEmpty']['output'];
  /** Current status of the child task. */
  status: ProvisioningTaskStatus;
  /** The task type (maps to a ProvisioningTaskTemplate). */
  taskType: ProvisioningTaskType;
  /** The child job UUID. */
  uuid: Scalars['UUID']['output'];
};

/** Progress of a provisioning task group (parent + children). */
export type ProvisioningProgress = {
  __typename?: 'ProvisioningProgress';
  /** Per-child task progress. */
  children: Array<ProvisioningChildProgress>;
  /** Overall status of the provisioning task. */
  status: ProvisioningTaskStatus;
};

/**
 * A handle to an async provisioning operation.
 * Use the returned UUID with the `provisioningProgressUpdated` subscription.
 */
export type ProvisioningTask = {
  __typename?: 'ProvisioningTask';
  /** Unique identifier for this task. Use with `provisioningProgressUpdated` subscription. */
  uuid: Scalars['UUID']['output'];
};

/** ProvisioningTaskStatus — domain-level task status mapped from collector job states. */
export enum ProvisioningTaskStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

/** ProvisioningTaskType — certificate task types. */
export enum ProvisioningTaskType {
  NlWalletDemoIssuance = 'NL_WALLET_DEMO_ISSUANCE',
  NlWalletDemoVerification = 'NL_WALLET_DEMO_VERIFICATION',
  NlWalletPreprodIssuance = 'NL_WALLET_PREPROD_ISSUANCE',
  NlWalletPreprodVerification = 'NL_WALLET_PREPROD_VERIFICATION',
  PkiIssuance = 'PKI_ISSUANCE',
  PkiVerification = 'PKI_VERIFICATION'
}

/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type Query = {
  __typename?: 'Query';
  /**
   * Returns a JSON Schema for the given GraphQL input type name.
   * Fields annotated with @excludeFromJsonSchema are excluded.
   */
  catalogJsonSchema: Scalars['JSONObject']['output'];
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
  /** Retrieve a single attribute. */
  findAttribute: Attribute;
  /** Retrieve a single attribute format Datakeeper. */
  findAttributeFormatDatakeeper: AttributeFormatDatakeeper;
  /** Retrieve a single attribute format Digidentity. */
  findAttributeFormatDigidentity: AttributeFormatDigidentity;
  /** Retrieve a single attribute format MSO MDOC. */
  findAttributeFormatMsoMdoc: AttributeFormatMsoMdoc;
  /** Retrieve a single attribute format Nect. */
  findAttributeFormatNect: AttributeFormatNect;
  /** Retrieve a single attribute format NL Wallet. */
  findAttributeFormatNlWallet: AttributeFormatNlWallet;
  /** Retrieve a single attribute format ReadID. */
  findAttributeFormatReadid: AttributeFormatReadid;
  /** Retrieve a single attribute format SD-JWT. */
  findAttributeFormatSdJwt: AttributeFormatSdJwt;
  /** Retrieve a single attribute format Yivi. */
  findAttributeFormatYivi: AttributeFormatYivi;
  /** Retrieve a single attribute format Yoti. */
  findAttributeFormatYoti: AttributeFormatYoti;
  /** Get identity attribute label */
  findAttributeLabel: AttributeLabel;
  /** Retrieve a single attribute locale. */
  findAttributeLocale: AttributeLocale;
  /** Retrieve a single flow authentication. */
  findAuthentication: Authentication;
  /** Retrieve a single authentication activity. */
  findAuthenticationActivity: AuthenticationActivity;
  /** Get brand */
  findAuthenticationBrand: AuthenticationBrand;
  /** Get domain */
  findAuthenticationDomain: AuthenticationDomain;
  /** Retrieve a single flow authentication handler. */
  findAuthenticationHandler: AuthenticationHandler;
  /** Retrieve a single AuthenticationHandlerConfiguration. */
  findAuthenticationHandlerConfiguration: AuthenticationHandlerConfiguration;
  /** Retrieve a single credential meta NL Wallet. */
  findAuthenticationHandlerConfigurationNLWallet: AuthenticationHandlerConfigurationNlWallet;
  /** Get Label */
  findAuthenticationLabel: AuthenticationLabel;
  /** Retrieve a single flow authentication scopes. */
  findAuthenticationScope: AuthenticationScope;
  /** Get authentication secret */
  findAuthenticationSecret: AuthenticationSecret;
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
  /** Retrieve a single credential change log. */
  findCredentialChangeLog: CredentialChangeLog;
  /** Retrieve a single credential Datakeeper format. */
  findCredentialFormatDatakeeper: CredentialFormatDatakeeper;
  /** Retrieve a single credential Digidentity format. */
  findCredentialFormatDigidentity: CredentialFormatDigidentity;
  /** Retrieve a single credential MSO MDOC format. */
  findCredentialFormatMsoMdoc: CredentialFormatMsoMdoc;
  /** Retrieve a single credential Nect format. */
  findCredentialFormatNect: CredentialFormatNect;
  /** Retrieve a single credential NL Wallet format. */
  findCredentialFormatNlWallet: CredentialFormatNlWallet;
  /** Retrieve a single credential ReadID format. */
  findCredentialFormatReadid: CredentialFormatReadid;
  /** Retrieve a single credential SD-JWT format. */
  findCredentialFormatSdJwt: CredentialFormatSdJwt;
  /** Retrieve a single credential Yivi format. */
  findCredentialFormatYivi: CredentialFormatYivi;
  /** Retrieve a single credential Yoti format. */
  findCredentialFormatYoti: CredentialFormatYoti;
  /** Get identity credential label */
  findCredentialLabel: CredentialLabel;
  /** Retrieve a single credential locale. */
  findCredentialLocale: CredentialLocale;
  /** Retrieve a single credential record. */
  findCredentialRecord: CredentialRecord;
  /** Retrieve a single credential record event. */
  findCredentialRecordEvent: CredentialRecordEvent;
  /** Retrieve a single credential record meta. */
  findCredentialRecordMeta: CredentialRecordMeta;
  /** Retrieve a single credential record meta token status list. */
  findCredentialRecordMetaTokenStatusList: CredentialRecordMetaTokenStatusList;
  /** Retrieve a single credential record meta yivi revocation. */
  findCredentialRecordMetaYiviRevocation: CredentialRecordMetaYiviRevocation;
  /** Retrieve a single credential record snapshot. */
  findCredentialRecordSnapshot: CredentialRecordSnapshot;
  /** Retrieve a single credential trust issuer. */
  findCredentialTrustIssuer: CredentialTrustIssuer;
  /** Retrieve a single credential version. */
  findCredentialVersion: CredentialVersion;
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
  /** Retrieve a single flow disclosure handler. */
  findDisclosureHandler: DisclosureHandler;
  /** Retrieve a single DisclosureHandlerConfiguration. */
  findDisclosureHandlerConfiguration: DisclosureHandlerConfiguration;
  /** Retrieve a single credential meta NL Wallet. */
  findDisclosureHandlerConfigurationNLWallet: DisclosureHandlerConfigurationNlWallet;
  /** Retrieve a single DisclosureHandlerConfigurationOID4VC. */
  findDisclosureHandlerConfigurationOID4VC: DisclosureHandlerConfigurationOid4Vc;
  /** Get Label */
  findDisclosureLabel: DisclosureLabel;
  /** Get mapping */
  findDisclosureMapping: DisclosureMapping;
  /** Get disclosure secret */
  findDisclosureSecret: DisclosureSecret;
  findGlobalOAuthMethods?: Maybe<Array<Maybe<OAuthMethod>>>;
  /** Retrieve a single handler. */
  findHandler: Handler;
  /** Retrieve a single handler app. */
  findHandlerApp: HandlerApp;
  /** Retrieve a single handler app protocol mDOC configuration. */
  findHandlerAppProtocolMdoc: HandlerAppProtocolMdoc;
  /** Retrieve a single handler app protocol OID4VC configuration. */
  findHandlerAppProtocolOid4vc: HandlerAppProtocolOid4vc;
  /** Get identity handler label */
  findHandlerLabel: HandlerLabel;
  /** Retrieve a single handler locale. */
  findHandlerLocale: HandlerLocale;
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
  /** Retrieve a single flow issuance credential meta oid4vc. */
  findIssuanceCredentialMetaOid4vc: IssuanceCredentialMetaOid4vc;
  /** Retrieve a single flow issuance credential meta yivi. */
  findIssuanceCredentialMetaYivi: IssuanceCredentialMetaYivi;
  /** Get domain */
  findIssuanceDomain: IssuanceDomain;
  /** Retrieve a single flow issuance handler. */
  findIssuanceHandler: IssuanceHandler;
  /** Retrieve a single IssuanceHandlerConfiguration. */
  findIssuanceHandlerConfiguration: IssuanceHandlerConfiguration;
  /** Retrieve a single IssuanceHandlerConfigurationNLWallet. */
  findIssuanceHandlerConfigurationNLWallet: IssuanceHandlerConfigurationNlWallet;
  /** Retrieve a single IssuanceHandlerConfigurationOID4VC. */
  findIssuanceHandlerConfigurationOID4VC: IssuanceHandlerConfigurationOid4Vc;
  /** Get Label */
  findIssuanceLabel: IssuanceLabel;
  /** Get mapping */
  findIssuanceMapping: IssuanceMapping;
  /** Retrieve a single issuance run. */
  findIssuanceRun: IssuanceRun;
  /** Retrieve a single issuance run event. */
  findIssuanceRunEvent: IssuanceRunEvent;
  /** Retrieve a single issuance run snapshot. */
  findIssuanceRunSnapshot: IssuanceRunSnapshot;
  /** Get issuance secret */
  findIssuanceSecret: IssuanceSecret;
  /** Retrieve a single issuer. */
  findIssuer: Issuer;
  /** Retrieve a single issuer change log. */
  findIssuerChangeLog: IssuerChangeLog;
  /** Get identity issuer label */
  findIssuerLabel: IssuerLabel;
  /** Retrieve a single issuer locale. */
  findIssuerLocale: IssuerLocale;
  /** Retrieve a single issuer version. */
  findIssuerVersion: IssuerVersion;
  /** Find a single label */
  findLabel: Label;
  /** Retrieve a single locale config. */
  findLocaleConfig: LocaleConfig;
  /** Retrieve a single maintenance. */
  findMaintenance: Maintenance;
  /** Retrieve many app locales. */
  findManyAppLocales: AppLocaleConnection;
  /** Retrieve many apps. */
  findManyApps: AppConnection;
  /** Retrieve many attribute format Datakeepers. */
  findManyAttributeFormatDatakeepers: AttributeFormatDatakeeperConnection;
  /** Retrieve many attribute format Digidentities. */
  findManyAttributeFormatDigidentities: AttributeFormatDigidentityConnection;
  /** Retrieve many attribute format MSO MDOCs. */
  findManyAttributeFormatMsoMdocs: AttributeFormatMsoMdocConnection;
  /** Retrieve many attribute format Nects. */
  findManyAttributeFormatNects: AttributeFormatNectConnection;
  /** Retrieve many attribute format NL Wallets. */
  findManyAttributeFormatNlWallets: AttributeFormatNlWalletConnection;
  /** Retrieve many attribute format ReadIDs. */
  findManyAttributeFormatReadids: AttributeFormatReadidConnection;
  /** Retrieve many attribute format SD-JWTs. */
  findManyAttributeFormatSdJwts: AttributeFormatSdJwtConnection;
  /** Retrieve many attribute format Yivis. */
  findManyAttributeFormatYivis: AttributeFormatYiviConnection;
  /** Retrieve many attribute format Yotis. */
  findManyAttributeFormatYotis: AttributeFormatYotiConnection;
  /** Retrieve a list of many identity attribute labels. */
  findManyAttributeLabels: AttributeLabelConnection;
  /** Retrieve many attribute locales. */
  findManyAttributeLocales: AttributeLocaleConnection;
  /** Retrieve many attributes. */
  findManyAttributes: AttributeConnection;
  /** Retrieve many authentication activities. */
  findManyAuthenticationActivities: AuthenticationActivityConnection;
  /** Retrieve a list of many brands. */
  findManyAuthenticationBrands: AuthenticationBrandConnection;
  /** Retrieve a list of many domains. */
  findManyAuthenticationDomains: AuthenticationDomainConnection;
  /** Retrieve many credential meta NL Wallet. */
  findManyAuthenticationHandlerConfigurationNLWallets: AuthenticationHandlerConfigurationNlWalletConnection;
  /** Retrieve many AuthenticationHandlerConfiguration. */
  findManyAuthenticationHandlerConfigurations: AuthenticationHandlerConfigurationConnection;
  /** Retrieve many flow authentication handlers. */
  findManyAuthenticationHandlers: AuthenticationHandlerConnection;
  /** Retrieve a list of many Labels. */
  findManyAuthenticationLabels: AuthenticationLabelConnection;
  /** Retrieve many flow authentication scopes. */
  findManyAuthenticationScopes: AuthenticationScopeConnection;
  /** Retrieve a list of many authentication secrets. */
  findManyAuthenticationSecrets: AuthenticationSecretConnection;
  /** Retreive many flow authentications. */
  findManyAuthentications: AuthenticationConnection;
  /** Retrieve aggregated flow costs grouped by handler app for a single flow over a time window */
  findManyBillingFlowAppCostOverviews: BillingFlowAppCostOverviewConnection;
  /** Retrieve aggregated flow costs grouped by flow over a time window */
  findManyBillingFlowCostOverviews: BillingFlowCostOverviewConnection;
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
  /** Retrieve many credential change logs. */
  findManyCredentialChangeLogs: CredentialChangeLogConnection;
  /** Retrieve many credential Datakeeper formats. */
  findManyCredentialFormatDatakeepers: CredentialFormatDatakeeperConnection;
  /** Retrieve many credential Digidentity formats. */
  findManyCredentialFormatDigidentities: CredentialFormatDigidentityConnection;
  /** Retrieve many credential MSO MDOC formats. */
  findManyCredentialFormatMsoMdocs: CredentialFormatMsoMdocConnection;
  /** Retrieve many credential Nect formats. */
  findManyCredentialFormatNects: CredentialFormatNectConnection;
  /** Retrieve many credential NL Wallet formats. */
  findManyCredentialFormatNlWallets: CredentialFormatNlWalletConnection;
  /** Retrieve many credential ReadID formats. */
  findManyCredentialFormatReadids: CredentialFormatReadidConnection;
  /** Retrieve many credential SD-JWT formats. */
  findManyCredentialFormatSdJwts: CredentialFormatSdJwtConnection;
  /** Retrieve many credential Yivi formats. */
  findManyCredentialFormatYivis: CredentialFormatYiviConnection;
  /** Retrieve many credential Yoti formats. */
  findManyCredentialFormatYotis: CredentialFormatYotiConnection;
  /** Retrieve a list of many identity credential labels. */
  findManyCredentialLabels: CredentialLabelConnection;
  /** Retrieve many credential locales. */
  findManyCredentialLocales: CredentialLocaleConnection;
  /** Retrieve many credential record events. */
  findManyCredentialRecordEvents: CredentialRecordEventConnection;
  /** Retrieve many credential record meta. */
  findManyCredentialRecordMeta: CredentialRecordMetaConnection;
  /** Retrieve many credential record meta token status list. */
  findManyCredentialRecordMetaTokenStatusList: CredentialRecordMetaTokenStatusListConnection;
  /** Retrieve many credential record meta yivi revocation. */
  findManyCredentialRecordMetaYiviRevocation: CredentialRecordMetaYiviRevocationConnection;
  /** Retrieve many credential record snapshots. */
  findManyCredentialRecordSnapshots: CredentialRecordSnapshotConnection;
  /** Retrieve many credential records. */
  findManyCredentialRecords: CredentialRecordConnection;
  /** Retrieve many credential trust issuers. */
  findManyCredentialTrustIssuers: CredentialTrustIssuerConnection;
  /** Retrieve many credential versions. */
  findManyCredentialVersions: CredentialVersionConnection;
  /** Retrieve many credentials. */
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
  /** Retrieve many credential meta NL Wallet. */
  findManyDisclosureHandlerConfigurationNLWallets: DisclosureHandlerConfigurationNlWalletConnection;
  /** Retrieve many DisclosureHandlerConfigurationOID4VC. */
  findManyDisclosureHandlerConfigurationOID4VCs: DisclosureHandlerConfigurationOid4VcConnection;
  /** Retrieve many DisclosureHandlerConfiguration. */
  findManyDisclosureHandlerConfigurations: DisclosureHandlerConfigurationConnection;
  /** Retrieve many flow disclosure handlers. */
  findManyDisclosureHandlers: DisclosureHandlerConnection;
  /** Retrieve a list of many Labels. */
  findManyDisclosureLabels: DisclosureLabelConnection;
  /** Retrieve a list of many mappings. */
  findManyDisclosureMappings: DisclosureMappingConnection;
  /** Retrieve a list of many disclosure secrets. */
  findManyDisclosureSecrets: DisclosureSecretConnection;
  /** Retreive many flow disclosures. */
  findManyDisclosures: DisclosureConnection;
  /** Retrieve many handler app protocol mDOC configurations. */
  findManyHandlerAppProtocolMdocs: HandlerAppProtocolMdocConnection;
  /** Retrieve many handler app protocol OID4VC configurations. */
  findManyHandlerAppProtocolOid4vcs: HandlerAppProtocolOid4vcConnection;
  /** Retrieve many handler apps. */
  findManyHandlerApps: HandlerAppConnection;
  /** Retrieve a list of many identity handler labels. */
  findManyHandlerLabels: HandlerLabelConnection;
  /** Retrieve many handler locales. */
  findManyHandlerLocales: HandlerLocaleConnection;
  /** Retrieve many handlers. */
  findManyHandlers: HandlerConnection;
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
  /** Retrieve many flow issuance credential meta oid4vc. */
  findManyIssuanceCredentialMetaOid4vc: IssuanceCredentialMetaOid4vcConnection;
  /** Retrieve many flow issuance credential meta yivi. */
  findManyIssuanceCredentialMetaYivi: IssuanceCredentialMetaYiviConnection;
  /** Retrieve many flow issuance credentials. */
  findManyIssuanceCredentials: IssuanceCredentialConnection;
  /** Retrieve a list of many domains. */
  findManyIssuanceDomains: IssuanceDomainConnection;
  /** Retrieve many IssuanceHandlerConfigurationNLWallet. */
  findManyIssuanceHandlerConfigurationNLWallets: IssuanceHandlerConfigurationNlWalletConnection;
  /** Retrieve many IssuanceHandlerConfigurationOID4VC. */
  findManyIssuanceHandlerConfigurationOID4VCs: IssuanceHandlerConfigurationOid4VcConnection;
  /** Retrieve many IssuanceHandlerConfiguration. */
  findManyIssuanceHandlerConfigurations: IssuanceHandlerConfigurationConnection;
  /** Retrieve many flow issuance handlers. */
  findManyIssuanceHandlers: IssuanceHandlerConnection;
  /** Retrieve a list of many Labels. */
  findManyIssuanceLabels: IssuanceLabelConnection;
  /** Retrieve a list of many mappings. */
  findManyIssuanceMappings: IssuanceMappingConnection;
  /** Retrieve many issuance run events. */
  findManyIssuanceRunEvents: IssuanceRunEventConnection;
  /** Retrieve many issuance runs. */
  findManyIssuanceRuns: IssuanceRunConnection;
  /** Retrieve a list of many issuance secrets. */
  findManyIssuanceSecrets: IssuanceSecretConnection;
  /** Retreive many flow issuances. */
  findManyIssuances: IssuanceConnection;
  /** Retrieve many issuer change logs. */
  findManyIssuerChangeLogs: IssuerChangeLogConnection;
  /** Retrieve a list of many identity issuer labels. */
  findManyIssuerLabels: IssuerLabelConnection;
  /** Retrieve many issuer locales. */
  findManyIssuerLocales: IssuerLocaleConnection;
  /** Retrieve many issuer versions. */
  findManyIssuerVersions: IssuerVersionConnection;
  /** Retrieve many issuers. */
  findManyIssuers: IssuerConnection;
  /** Find many labels */
  findManyLabels: LabelConnection;
  /** Retrieve many locale configs. */
  findManyLocaleConfigs: LocaleConfigConnection;
  /** Retreive many maintenances. */
  findManyMaintenances: MaintenanceConnection;
  /** Retrieve many mappingIssuance attributes. */
  findManyMappingIssuanceAttributes: MappingIssuanceAttributeConnection;
  /** Retrieve many mappingIssuance claims. */
  findManyMappingIssuanceClaims: MappingIssuanceClaimConnection;
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
  /** Retrieve many organization trust issuer keys. */
  findManyOrganizationTrustIssuerKey: OrganizationTrustIssuerKeyConnection;
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
  /** Retrieve many scope claims. */
  findManyScopeClaims: ScopeClaimConnection;
  /** Retrieve many scope locales. */
  findManyScopeLocales: ScopeLocaleConnection;
  /** Retrieve many scope resources. */
  findManyScopeResources: ScopeResourceConnection;
  /** Retrieve many scopes. */
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
  /** Retrieve many credential meta NL Wallet. */
  findManySignatureHandlerConfigurationNLWallets: SignatureHandlerConfigurationNlWalletConnection;
  /** Retrieve many SignatureHandlerConfiguration. */
  findManySignatureHandlerConfigurations: SignatureHandlerConfigurationConnection;
  /** Retrieve many flow signature handlers. */
  findManySignatureHandlers: SignatureHandlerConnection;
  /** Retrieve a list of many Labels. */
  findManySignatureLabels: SignatureLabelConnection;
  /** Retrieve a list of many mappings. */
  findManySignatureMappings: SignatureMappingConnection;
  /** Retrieve a list of many signature secrets. */
  findManySignatureSecrets: SignatureSecretConnection;
  /** Retreive many flow signatures. */
  findManySignatures: SignatureConnection;
  /** Retrieve many status lists. */
  findManyStatusLists: StatusListConnection;
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
  /** Retrieve many trust anchor DID. */
  findManyTrustAnchorDids: TrustAnchorDidConnection;
  /** Retrieve many trust anchor Idemix. */
  findManyTrustAnchorIdemixes: TrustAnchorIdemixConnection;
  /** Retrieve many trust anchor X.509 root certificates. */
  findManyTrustAnchorX509RootCertificates: TrustAnchorX509RootCertificateConnection;
  /** Retrieve many trust anchor X.509. */
  findManyTrustAnchorX509s: TrustAnchorX509Connection;
  /** Retrieve many trust apps. */
  findManyTrustApps: TrustAppConnection;
  /** Retrieve many trust change logs. */
  findManyTrustChangeLogs: TrustChangeLogConnection;
  /** Retrieve many trust issuer key algorithm Idemixes. */
  findManyTrustIssuerKeyAlgorithmIdemixes: TrustIssuerKeyAlgorithmIdemixConnection;
  /** Retrieve many trust issuer key DID bindings. */
  findManyTrustIssuerKeyDidBindings: TrustIssuerKeyDidBindingConnection;
  /** Retrieve many trust issuer key X.509 certificates. */
  findManyTrustIssuerKeyX509Certs: TrustIssuerKeyX509CertConnection;
  /** Retrieve many trust issuer keys. */
  findManyTrustIssuerKeys: TrustIssuerKeyConnection;
  /** Retrieve many trust issuers. */
  findManyTrustIssuers: TrustIssuerConnection;
  /** Retrieve a list of many identity trust labels. */
  findManyTrustLabels: TrustLabelConnection;
  /** Retrieve many trust locales. */
  findManyTrustLocales: TrustLocaleConnection;
  /** Retrieve many trust versions. */
  findManyTrustVersions: TrustVersionConnection;
  /** Retrieve many trusts. */
  findManyTrusts: TrustConnection;
  /** Retrieve a list of many userInvitations. */
  findManyUserInvitations: UserInvitationConnection;
  /** Retrieve a list of many users. */
  findManyUsers: UserConnection;
  /** Retrieve a single mappingIssuance. */
  findMappingIssuance: MappingIssuance;
  /** Retrieve a single mappingIssuance attribute. */
  findMappingIssuanceAttribute: MappingIssuanceAttribute;
  /** Retrieve a single mappingIssuance claim. */
  findMappingIssuanceClaim: MappingIssuanceClaim;
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
  /** Retrieve a single organization trust issuer key. */
  findOrganizationTrustIssuerKey: OrganizationTrustIssuerKey;
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
  /** Retrieve a single flow signature handler. */
  findSignatureHandler: SignatureHandler;
  /** Retrieve a single SignatureHandlerConfiguration. */
  findSignatureHandlerConfiguration: SignatureHandlerConfiguration;
  /** Retrieve a single credential meta NL Wallet. */
  findSignatureHandlerConfigurationNLWallet: SignatureHandlerConfigurationNlWallet;
  /** Get Label */
  findSignatureLabel: SignatureLabel;
  /** Get mapping */
  findSignatureMapping: SignatureMapping;
  /** Get signature secret */
  findSignatureSecret: SignatureSecret;
  /** Retrieve a single status list. */
  findStatusList: StatusList;
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
  /** Retrieve a single trust. */
  findTrust: Trust;
  /** Retrieve a single trust anchor DID. */
  findTrustAnchorDid: TrustAnchorDid;
  /** Retrieve a single trust anchor Idemix. */
  findTrustAnchorIdemix: TrustAnchorIdemix;
  /** Retrieve a single trust anchor X.509. */
  findTrustAnchorX509: TrustAnchorX509;
  /** Retrieve a single trust anchor X.509 root certificate. */
  findTrustAnchorX509RootCertificate: TrustAnchorX509RootCertificate;
  /** Retrieve a single trust app. */
  findTrustApp: TrustApp;
  /** Retrieve a single trust change log. */
  findTrustChangeLog: TrustChangeLog;
  /** Retrieve a single trust issuer. */
  findTrustIssuer: TrustIssuer;
  /** Retrieve a single trust issuer key. */
  findTrustIssuerKey: TrustIssuerKey;
  /** Retrieve a single trust issuer key algorithm Idemix. */
  findTrustIssuerKeyAlgorithmIdemix: TrustIssuerKeyAlgorithmIdemix;
  /** Retrieve a single trust issuer key DID binding. */
  findTrustIssuerKeyDidBinding: TrustIssuerKeyDidBinding;
  /** Retrieve a single trust issuer key X.509 certificate. */
  findTrustIssuerKeyX509Cert: TrustIssuerKeyX509Cert;
  /** Get identity trust label */
  findTrustLabel: TrustLabel;
  /** Retrieve a single trust locale. */
  findTrustLocale: TrustLocale;
  /** Retrieve a single trust version. */
  findTrustVersion: TrustVersion;
  /** Find user by UUID */
  findUser: User;
  /** Find userInvitation by UUID */
  findUserInvitation: UserInvitation;
  /** Get payment provider invoice receipt */
  getPaymentProviderInvoiceReceipt: Scalars['URL']['output'];
  studioJsonSchema: Scalars['JSONObject']['output'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryCatalogJsonSchemaArgs = {
  type: Scalars['String']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindAppArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindAppLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindAttributeFormatDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindAttributeFormatDigidentityArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindAttributeFormatMsoMdocArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindAttributeFormatNectArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindAttributeFormatNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindAttributeFormatReadidArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindAttributeFormatSdJwtArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindAttributeFormatYiviArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindAttributeFormatYotiArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindAttributeLabelArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindAttributeLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindAuthenticationArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindAuthenticationActivityArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindAuthenticationBrandArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindAuthenticationDomainArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindAuthenticationHandlerArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindAuthenticationHandlerConfigurationArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindAuthenticationHandlerConfigurationNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindAuthenticationLabelArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindAuthenticationScopeArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindAuthenticationSecretArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindBillingArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindBillingMethodArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindBillingPlanArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindBillingWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindBillingWalletTransactionArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindBillingWalletTransactionMetaArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindBillingWalletTransactionMetaFlowArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindBillingWalletTransactionMetaFlowAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindBillingWalletTransactionMetaPlanArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindBillingWalletTransactionMetaWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindCredentialArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindCredentialChangeLogArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindCredentialFormatDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindCredentialFormatDigidentityArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindCredentialFormatMsoMdocArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindCredentialFormatNectArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindCredentialFormatNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindCredentialFormatReadidArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindCredentialFormatSdJwtArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindCredentialFormatYiviArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindCredentialFormatYotiArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindCredentialLabelArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindCredentialLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindCredentialRecordArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindCredentialRecordEventArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindCredentialRecordMetaArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindCredentialRecordMetaTokenStatusListArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindCredentialRecordMetaYiviRevocationArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindCredentialRecordSnapshotArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindCredentialTrustIssuerArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindCredentialVersionArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindDisclosureArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindDisclosureActivityArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindDisclosureAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindDisclosureBrandArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindDisclosureCredentialArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindDisclosureDomainArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindDisclosureGroupArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindDisclosureHandlerArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindDisclosureHandlerConfigurationArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindDisclosureHandlerConfigurationNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindDisclosureHandlerConfigurationOid4VcArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindDisclosureLabelArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindDisclosureMappingArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindDisclosureSecretArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindGlobalOAuthMethodsArgs = {
  input: FindGlobalOAuthMethodsInput;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindHandlerArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindHandlerAppArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindHandlerAppProtocolMdocArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindHandlerAppProtocolOid4vcArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindHandlerLabelArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindHandlerLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindIssuanceArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindIssuanceActivityArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindIssuanceAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindIssuanceBrandArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindIssuanceCredentialArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindIssuanceCredentialMetaArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindIssuanceCredentialMetaDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindIssuanceCredentialMetaOid4vcArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindIssuanceCredentialMetaYiviArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindIssuanceDomainArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindIssuanceHandlerArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindIssuanceHandlerConfigurationArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindIssuanceHandlerConfigurationNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindIssuanceHandlerConfigurationOid4VcArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindIssuanceLabelArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindIssuanceMappingArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindIssuanceRunArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindIssuanceRunEventArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindIssuanceRunSnapshotArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindIssuanceSecretArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindIssuerArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindIssuerChangeLogArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindIssuerLabelArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindIssuerLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindIssuerVersionArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindLabelArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindLocaleConfigArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindMaintenanceArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyAppLocalesArgs = {
  input?: InputMaybe<FindManyAppLocalesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyAppsArgs = {
  input?: InputMaybe<FindManyAppsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyAttributeFormatDatakeepersArgs = {
  input?: InputMaybe<FindManyAttributeFormatDatakeepersInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyAttributeFormatDigidentitiesArgs = {
  input?: InputMaybe<FindManyAttributeFormatDigidentitiesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyAttributeFormatMsoMdocsArgs = {
  input?: InputMaybe<FindManyAttributeFormatMsoMdocsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyAttributeFormatNectsArgs = {
  input?: InputMaybe<FindManyAttributeFormatNectsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyAttributeFormatNlWalletsArgs = {
  input?: InputMaybe<FindManyAttributeFormatNlWalletsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyAttributeFormatReadidsArgs = {
  input?: InputMaybe<FindManyAttributeFormatReadidsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyAttributeFormatSdJwtsArgs = {
  input?: InputMaybe<FindManyAttributeFormatSdJwtsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyAttributeFormatYivisArgs = {
  input?: InputMaybe<FindManyAttributeFormatYivisInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyAttributeFormatYotisArgs = {
  input?: InputMaybe<FindManyAttributeFormatYotisInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyAttributeLabelsArgs = {
  input?: InputMaybe<FindManyAttributeLabelsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyAttributeLocalesArgs = {
  input?: InputMaybe<FindManyAttributeLocalesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyAttributesArgs = {
  input?: InputMaybe<FindManyAttributesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyAuthenticationActivitiesArgs = {
  input?: InputMaybe<FindManyAuthenticationActivitiesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyAuthenticationBrandsArgs = {
  input?: InputMaybe<FindManyAuthenticationBrandsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyAuthenticationDomainsArgs = {
  input?: InputMaybe<FindManyAuthenticationDomainsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyAuthenticationHandlerConfigurationNlWalletsArgs = {
  input?: InputMaybe<FindManyAuthenticationHandlerConfigurationNlWalletsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyAuthenticationHandlerConfigurationsArgs = {
  input?: InputMaybe<FindManyAuthenticationHandlerConfigurationsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyAuthenticationHandlersArgs = {
  input?: InputMaybe<FindManyAuthenticationHandlersInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyAuthenticationLabelsArgs = {
  input?: InputMaybe<FindManyAuthenticationLabelsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyAuthenticationScopesArgs = {
  input?: InputMaybe<FindManyAuthenticationScopesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyAuthenticationSecretsArgs = {
  input?: InputMaybe<FindManyAuthenticationSecretsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyAuthenticationsArgs = {
  input?: InputMaybe<FindManyAuthenticationsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyBillingFlowAppCostOverviewsArgs = {
  input?: InputMaybe<FindManyBillingFlowAppCostOverviewsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyBillingFlowCostOverviewsArgs = {
  input?: InputMaybe<FindManyBillingFlowCostOverviewsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyBillingMethodsArgs = {
  input?: InputMaybe<FindManyBillingMethodsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyBillingPlansArgs = {
  input?: InputMaybe<FindManyBillingPlansInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyBillingWalletTransactionMetaFlowAttributesArgs = {
  input?: InputMaybe<FindManyBillingWalletTransactionMetaFlowAttributesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyBillingWalletTransactionMetaFlowsArgs = {
  input?: InputMaybe<FindManyBillingWalletTransactionMetaFlowsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyBillingWalletTransactionMetaPlansArgs = {
  input?: InputMaybe<FindManyBillingWalletTransactionMetaPlansInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyBillingWalletTransactionMetaWalletsArgs = {
  input?: InputMaybe<FindManyBillingWalletTransactionMetaWalletsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyBillingWalletTransactionMetasArgs = {
  input?: InputMaybe<FindManyBillingWalletTransactionMetasInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyBillingWalletTransactionsArgs = {
  input?: InputMaybe<FindManyBillingWalletTransactionsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyBillingWalletsArgs = {
  input?: InputMaybe<FindManyBillingWalletsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyBillingsArgs = {
  input?: InputMaybe<FindManyBillingsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyCredentialChangeLogsArgs = {
  input?: InputMaybe<FindManyCredentialChangeLogsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyCredentialFormatDatakeepersArgs = {
  input?: InputMaybe<FindManyCredentialFormatDatakeepersInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyCredentialFormatDigidentitiesArgs = {
  input?: InputMaybe<FindManyCredentialFormatDigidentitiesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyCredentialFormatMsoMdocsArgs = {
  input?: InputMaybe<FindManyCredentialFormatMsoMdocsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyCredentialFormatNectsArgs = {
  input?: InputMaybe<FindManyCredentialFormatNectsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyCredentialFormatNlWalletsArgs = {
  input?: InputMaybe<FindManyCredentialFormatNlWalletsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyCredentialFormatReadidsArgs = {
  input?: InputMaybe<FindManyCredentialFormatReadidsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyCredentialFormatSdJwtsArgs = {
  input?: InputMaybe<FindManyCredentialFormatSdJwtsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyCredentialFormatYivisArgs = {
  input?: InputMaybe<FindManyCredentialFormatYivisInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyCredentialFormatYotisArgs = {
  input?: InputMaybe<FindManyCredentialFormatYotisInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyCredentialLabelsArgs = {
  input?: InputMaybe<FindManyCredentialLabelsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyCredentialLocalesArgs = {
  input?: InputMaybe<FindManyCredentialLocalesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyCredentialRecordEventsArgs = {
  input?: InputMaybe<FindManyCredentialRecordEventsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyCredentialRecordMetaArgs = {
  input?: InputMaybe<FindManyCredentialRecordMetaInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyCredentialRecordMetaTokenStatusListArgs = {
  input?: InputMaybe<FindManyCredentialRecordMetaTokenStatusListInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyCredentialRecordMetaYiviRevocationArgs = {
  input?: InputMaybe<FindManyCredentialRecordMetaYiviRevocationInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyCredentialRecordSnapshotsArgs = {
  input?: InputMaybe<FindManyCredentialRecordSnapshotsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyCredentialRecordsArgs = {
  input?: InputMaybe<FindManyCredentialRecordsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyCredentialTrustIssuersArgs = {
  input?: InputMaybe<FindManyCredentialTrustIssuersInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyCredentialVersionsArgs = {
  input?: InputMaybe<FindManyCredentialVersionsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyCredentialsArgs = {
  input?: InputMaybe<FindManyCredentialsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyDisclosureActivitiesArgs = {
  input?: InputMaybe<FindManyDisclosureActivitiesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyDisclosureAttributesArgs = {
  input?: InputMaybe<FindManyDisclosureAttributesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyDisclosureBrandsArgs = {
  input?: InputMaybe<FindManyDisclosureBrandsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyDisclosureCredentialsArgs = {
  input?: InputMaybe<FindManyDisclosureCredentialsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyDisclosureDomainsArgs = {
  input?: InputMaybe<FindManyDisclosureDomainsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyDisclosureGroupsArgs = {
  input?: InputMaybe<FindManyDisclosureGroupsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyDisclosureHandlerConfigurationNlWalletsArgs = {
  input?: InputMaybe<FindManyDisclosureHandlerConfigurationNlWalletsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyDisclosureHandlerConfigurationOid4VCsArgs = {
  input?: InputMaybe<FindManyDisclosureHandlerConfigurationOid4VCsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyDisclosureHandlerConfigurationsArgs = {
  input?: InputMaybe<FindManyDisclosureHandlerConfigurationsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyDisclosureHandlersArgs = {
  input?: InputMaybe<FindManyDisclosureHandlersInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyDisclosureLabelsArgs = {
  input?: InputMaybe<FindManyDisclosureLabelsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyDisclosureMappingsArgs = {
  input?: InputMaybe<FindManyDisclosureMappingsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyDisclosureSecretsArgs = {
  input?: InputMaybe<FindManyDisclosureSecretsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyDisclosuresArgs = {
  input?: InputMaybe<FindManyDisclosuresInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyHandlerAppProtocolMdocsArgs = {
  input?: InputMaybe<FindManyHandlerAppProtocolMdocsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyHandlerAppProtocolOid4vcsArgs = {
  input?: InputMaybe<FindManyHandlerAppProtocolOid4vcsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyHandlerAppsArgs = {
  input?: InputMaybe<FindManyHandlerAppsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyHandlerLabelsArgs = {
  input?: InputMaybe<FindManyHandlerLabelsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyHandlerLocalesArgs = {
  input?: InputMaybe<FindManyHandlerLocalesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyHandlersArgs = {
  input?: InputMaybe<FindManyHandlersInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyIssuanceActivitiesArgs = {
  input?: InputMaybe<FindManyIssuanceActivitiesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyIssuanceAttributesArgs = {
  input?: InputMaybe<FindManyIssuanceAttributesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyIssuanceBrandsArgs = {
  input?: InputMaybe<FindManyIssuanceBrandsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyIssuanceCredentialMetaArgs = {
  input?: InputMaybe<FindManyIssuanceCredentialMetaInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyIssuanceCredentialMetaDatakeeperArgs = {
  input?: InputMaybe<FindManyIssuanceCredentialMetaDatakeeperInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyIssuanceCredentialMetaOid4vcArgs = {
  input?: InputMaybe<FindManyIssuanceCredentialMetaOid4vcInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyIssuanceCredentialMetaYiviArgs = {
  input?: InputMaybe<FindManyIssuanceCredentialMetaYiviInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyIssuanceCredentialsArgs = {
  input?: InputMaybe<FindManyIssuanceCredentialsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyIssuanceDomainsArgs = {
  input?: InputMaybe<FindManyIssuanceDomainsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyIssuanceHandlerConfigurationNlWalletsArgs = {
  input?: InputMaybe<FindManyIssuanceHandlerConfigurationNlWalletsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyIssuanceHandlerConfigurationOid4VCsArgs = {
  input?: InputMaybe<FindManyIssuanceHandlerConfigurationOid4VCsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyIssuanceHandlerConfigurationsArgs = {
  input?: InputMaybe<FindManyIssuanceHandlerConfigurationsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyIssuanceHandlersArgs = {
  input?: InputMaybe<FindManyIssuanceHandlersInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyIssuanceLabelsArgs = {
  input?: InputMaybe<FindManyIssuanceLabelsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyIssuanceMappingsArgs = {
  input?: InputMaybe<FindManyIssuanceMappingsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyIssuanceRunEventsArgs = {
  input?: InputMaybe<FindManyIssuanceRunEventsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyIssuanceRunsArgs = {
  input?: InputMaybe<FindManyIssuanceRunsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyIssuanceSecretsArgs = {
  input?: InputMaybe<FindManyIssuanceSecretsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyIssuancesArgs = {
  input?: InputMaybe<FindManyIssuancesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyIssuerChangeLogsArgs = {
  input?: InputMaybe<FindManyIssuerChangeLogsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyIssuerLabelsArgs = {
  input?: InputMaybe<FindManyIssuerLabelsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyIssuerLocalesArgs = {
  input?: InputMaybe<FindManyIssuerLocalesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyIssuerVersionsArgs = {
  input?: InputMaybe<FindManyIssuerVersionsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyIssuersArgs = {
  input?: InputMaybe<FindManyIssuersInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyLabelsArgs = {
  input?: InputMaybe<FindManyLabelsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyLocaleConfigsArgs = {
  input?: InputMaybe<FindManyLocaleConfigsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyMaintenancesArgs = {
  input?: InputMaybe<FindManyMaintenancesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyMappingIssuanceAttributesArgs = {
  input?: InputMaybe<FindManyMappingIssuanceAttributesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyMappingIssuanceClaimsArgs = {
  input?: InputMaybe<FindManyMappingIssuanceClaimsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyMappingIssuanceLinksArgs = {
  input?: InputMaybe<FindManyMappingIssuanceLinksInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyMappingIssuancesArgs = {
  input?: InputMaybe<FindManyMappingIssuancesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyMappingVerificationAttributesArgs = {
  input?: InputMaybe<FindManyMappingVerificationAttributesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyMappingVerificationClaimsArgs = {
  input?: InputMaybe<FindManyMappingVerificationClaimsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyMappingVerificationLinksArgs = {
  input?: InputMaybe<FindManyMappingVerificationLinksInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyMappingVerificationsArgs = {
  input?: InputMaybe<FindManyMappingVerificationsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyOAuthProvidersArgs = {
  input?: InputMaybe<FindManyOAuthProvidersInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyOrganizationAddressesArgs = {
  input?: InputMaybe<FindManyOrganizationAddressesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyOrganizationAlertDeprecationsArgs = {
  input?: InputMaybe<FindManyOrganizationAlertDeprecationsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyOrganizationAlertsArgs = {
  input?: InputMaybe<FindManyOrganizationAlertsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyOrganizationAppArgs = {
  input?: InputMaybe<FindManyOrganizationAppsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyOrganizationAppMetaArgs = {
  input?: InputMaybe<FindManyOrganizationAppMetaInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyOrganizationAppMetaDatakeeperArgs = {
  input?: InputMaybe<FindManyOrganizationAppMetaDatakeeperInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyOrganizationAppMetaKiwaArgs = {
  input?: InputMaybe<FindManyOrganizationAppMetaKiwaInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyOrganizationAppMetaOid4vcArgs = {
  input?: InputMaybe<FindManyOrganizationAppMetaOid4vcInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyOrganizationAppMetaYotiArgs = {
  input?: InputMaybe<FindManyOrganizationAppMetaYotiInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyOrganizationBrandLabelsArgs = {
  input?: InputMaybe<FindManyOrganizationBrandLabelsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyOrganizationBrandsArgs = {
  input?: InputMaybe<FindManyOrganizationBrandsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyOrganizationClientsArgs = {
  input?: InputMaybe<FindManyOrganizationClientsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyOrganizationDomainLabelsArgs = {
  input?: InputMaybe<FindManyOrganizationDomainLabelsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyOrganizationDomainOAuthProvidersArgs = {
  input?: InputMaybe<FindManyOrganizationDomainOAuthProvidersInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyOrganizationDomainValidationsArgs = {
  input?: InputMaybe<FindManyOrganizationDomainValidationsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyOrganizationDomainsArgs = {
  input?: InputMaybe<FindManyOrganizationDomainsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyOrganizationNotificationEventsArgs = {
  input?: InputMaybe<FindManyOrganizationNotificationEventsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyOrganizationNotificationsArgs = {
  input?: InputMaybe<FindManyOrganizationNotificationsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyOrganizationQuotasArgs = {
  input?: InputMaybe<FindManyOrganizationQuotasInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyOrganizationSecretsArgs = {
  input?: InputMaybe<FindManyOrganizationSecretsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyOrganizationTrustIssuerKeyArgs = {
  input?: InputMaybe<FindManyOrganizationTrustIssuerKeysInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyOrganizationUsersArgs = {
  input?: InputMaybe<FindManyOrganizationUsersInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyOrganizationsArgs = {
  input?: InputMaybe<FindManyOrganizationsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyOrganizationsWithStudioPlanArgs = {
  input?: InputMaybe<FindManyOrganizationsInput>;
  studioPlanUuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyPaymentProviderEventsArgs = {
  input?: InputMaybe<FindManyPaymentProviderEventsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyPaymentProviderInvoicesArgs = {
  input?: InputMaybe<FindManyPaymentProviderInvoicesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyPaymentProviderMethodsArgs = {
  input?: InputMaybe<FindManyPaymentProviderMethodsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyPaymentProviderOrganizationsArgs = {
  input?: InputMaybe<FindManyPaymentProviderOrganizationsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyPaymentProvidersArgs = {
  input?: InputMaybe<FindManyPaymentProvidersInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyPricingCatalogsArgs = {
  input?: InputMaybe<FindManyPricingCatalogsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyPricingConfigurationAppsArgs = {
  input?: InputMaybe<FindManyPricingConfigurationAppsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyPricingConfigurationOrganizationsArgs = {
  input?: InputMaybe<FindManyPricingConfigurationOrganizationsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyPricingConfigurationStudioPlansArgs = {
  input?: InputMaybe<FindManyPricingConfigurationStudioPlansInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyPricingGroupAssignmentsArgs = {
  input?: InputMaybe<FindManyPricingGroupAssignmentsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyPricingGroupsArgs = {
  input?: InputMaybe<FindManyPricingGroupsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyPricingRuleConstraintsArgs = {
  input?: InputMaybe<FindManyPricingRuleConstraintsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyPricingRuleTargetsArgs = {
  input?: InputMaybe<FindManyPricingRuleTargetsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyPricingRulesArgs = {
  input?: InputMaybe<FindManyPricingRulesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyScopeClaimsArgs = {
  input?: InputMaybe<FindManyScopeClaimsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyScopeLocalesArgs = {
  input?: InputMaybe<FindManyScopeLocalesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyScopeResourcesArgs = {
  input?: InputMaybe<FindManyScopeResourcesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyScopesArgs = {
  input?: InputMaybe<FindManyScopesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManySignatureActivitiesArgs = {
  input?: InputMaybe<FindManySignatureActivitiesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManySignatureAttributesArgs = {
  input?: InputMaybe<FindManySignatureAttributesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManySignatureBrandsArgs = {
  input?: InputMaybe<FindManySignatureBrandsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManySignatureCredentialsArgs = {
  input?: InputMaybe<FindManySignatureCredentialsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManySignatureDomainsArgs = {
  input?: InputMaybe<FindManySignatureDomainsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManySignatureGroupsArgs = {
  input?: InputMaybe<FindManySignatureGroupsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManySignatureHandlerConfigurationNlWalletsArgs = {
  input?: InputMaybe<FindManySignatureHandlerConfigurationNlWalletsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManySignatureHandlerConfigurationsArgs = {
  input?: InputMaybe<FindManySignatureHandlerConfigurationsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManySignatureHandlersArgs = {
  input?: InputMaybe<FindManySignatureHandlersInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManySignatureLabelsArgs = {
  input?: InputMaybe<FindManySignatureLabelsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManySignatureMappingsArgs = {
  input?: InputMaybe<FindManySignatureMappingsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManySignatureSecretsArgs = {
  input?: InputMaybe<FindManySignatureSecretsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManySignaturesArgs = {
  input?: InputMaybe<FindManySignaturesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyStatusListsArgs = {
  input?: InputMaybe<FindManyStatusListsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyStudioPlanControlOverridesArgs = {
  input?: InputMaybe<FindManyStudioPlanControlOverridesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyStudioPlanControlsArgs = {
  input?: InputMaybe<FindManyStudioPlanControlsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyStudioPlanIntervalsArgs = {
  input?: InputMaybe<FindManyStudioPlanIntervalsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyStudioPlanOrganizationsArgs = {
  input?: InputMaybe<FindManyStudioPlanOrganizationsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyStudioPlansArgs = {
  input?: InputMaybe<FindManyStudioPlansInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyTrustAnchorDidsArgs = {
  input?: InputMaybe<FindManyTrustAnchorDidsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyTrustAnchorIdemixesArgs = {
  input?: InputMaybe<FindManyTrustAnchorIdemixesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyTrustAnchorX509RootCertificatesArgs = {
  input?: InputMaybe<FindManyTrustAnchorX509RootCertificatesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyTrustAnchorX509sArgs = {
  input?: InputMaybe<FindManyTrustAnchorX509sInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyTrustAppsArgs = {
  input?: InputMaybe<FindManyTrustAppsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyTrustChangeLogsArgs = {
  input?: InputMaybe<FindManyTrustChangeLogsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyTrustIssuerKeyAlgorithmIdemixesArgs = {
  input?: InputMaybe<FindManyTrustIssuerKeyAlgorithmIdemixesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyTrustIssuerKeyDidBindingsArgs = {
  input?: InputMaybe<FindManyTrustIssuerKeyDidBindingsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyTrustIssuerKeyX509CertsArgs = {
  input?: InputMaybe<FindManyTrustIssuerKeyX509CertsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyTrustIssuerKeysArgs = {
  input?: InputMaybe<FindManyTrustIssuerKeysInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyTrustIssuersArgs = {
  input?: InputMaybe<FindManyTrustIssuersInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyTrustLabelsArgs = {
  input?: InputMaybe<FindManyTrustLabelsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyTrustLocalesArgs = {
  input?: InputMaybe<FindManyTrustLocalesInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyTrustVersionsArgs = {
  input?: InputMaybe<FindManyTrustVersionsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyTrustsArgs = {
  input?: InputMaybe<FindManyTrustsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyUserInvitationsArgs = {
  input?: InputMaybe<FindManyUserInvitationsInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindManyUsersArgs = {
  input?: InputMaybe<FindManyUsersInput>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindMappingIssuanceArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindMappingIssuanceAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindMappingIssuanceClaimArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindMappingIssuanceLinkArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindMappingVerificationArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindMappingVerificationAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindMappingVerificationClaimArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindMappingVerificationLinkArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindOAuthMethodsByOrganizationDomainArgs = {
  input: FindOAuthMethodsByOrganizationDomainInput;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindOAuthProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindOrganizationArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindOrganizationAddressArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindOrganizationAlertArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindOrganizationAlertDeprecationArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindOrganizationAppArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindOrganizationAppMetaArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindOrganizationAppMetaDatakeeperArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindOrganizationAppMetaKiwaArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindOrganizationAppMetaOid4vcArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindOrganizationAppMetaYotiArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindOrganizationBrandArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindOrganizationBrandLabelArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindOrganizationClientArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindOrganizationDomainArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindOrganizationDomainLabelArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindOrganizationDomainOAuthProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindOrganizationDomainValidationArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindOrganizationNotificationArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindOrganizationNotificationEventArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindOrganizationQuotaArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindOrganizationSecretArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindOrganizationTrustIssuerKeyArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindOrganizationUserArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindPaymentProviderArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindPaymentProviderEventArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindPaymentProviderInvoiceArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindPaymentProviderMethodArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindPaymentProviderOrganizationArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindPricingCatalogArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindPricingConfigurationAppArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindPricingConfigurationOrganizationArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindPricingConfigurationStudioPlanArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindPricingGroupArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindPricingGroupAssignmentArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindPricingRuleArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindPricingRuleConstraintArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindPricingRuleTargetArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindScopeArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindScopeClaimArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindScopeLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindScopeResourceArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindSignatureArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindSignatureActivityArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindSignatureAttributeArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindSignatureBrandArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindSignatureCredentialArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindSignatureDomainArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindSignatureGroupArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindSignatureHandlerArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindSignatureHandlerConfigurationArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindSignatureHandlerConfigurationNlWalletArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindSignatureLabelArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindSignatureMappingArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindSignatureSecretArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindStatusListArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindStudioPlanArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindStudioPlanControlArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindStudioPlanControlOverrideArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindStudioPlanIntervalArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindStudioPlanOrganizationArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindTrustArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindTrustAnchorDidArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindTrustAnchorIdemixArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindTrustAnchorX509Args = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindTrustAnchorX509RootCertificateArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindTrustAppArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindTrustChangeLogArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindTrustIssuerArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindTrustIssuerKeyArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindTrustIssuerKeyAlgorithmIdemixArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindTrustIssuerKeyDidBindingArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindTrustIssuerKeyX509CertArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindTrustLabelArgs = {
  uuid?: InputMaybe<Scalars['UUID']['input']>;
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindTrustLocaleArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindTrustVersionArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindUserArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryFindUserInvitationArgs = {
  uuid: Scalars['UUID']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryGetPaymentProviderInvoiceReceiptArgs = {
  invoiceId: Scalars['NonEmpty']['input'];
};


/**
 * Returns a JSON Schema for a GraphQL input type owned by the catalog subgraph.
 * Fields annotated with `@excludeFromJsonSchema` are excluded.
 */
export type QueryStudioJsonSchemaArgs = {
  type: Scalars['String']['input'];
};

/** ReadID document types. */
export enum ReadidDocumentType {
  EuDrivingLicense = 'EU_DRIVING_LICENSE',
  IcaoIdentityCard = 'ICAO_IDENTITY_CARD',
  IcaoPassport = 'ICAO_PASSPORT'
}

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

/** Scope definition. */
export type Scope = Model & {
  __typename?: 'Scope';
  /** The categories. */
  categories: Array<CategoryType>;
  /** The collection of claims */
  claims: ScopeClaimConnection;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The handler app this scope belongs to. */
  handlerApp: HandlerApp;
  /** The collection of locales */
  locales: ScopeLocaleConnection;
  /** The name */
  name: Scalars['NonEmpty']['output'];
  /** The collection of resources */
  resources: ScopeResourceConnection;
  /** The scope value. */
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
export type ScopeLocalesArgs = {
  input?: InputMaybe<FindManyScopeLocalesInput>;
};


/** Scope definition. */
export type ScopeResourcesArgs = {
  input?: InputMaybe<FindManyScopeResourcesInput>;
};

/** Scope claim definition. */
export type ScopeClaim = Model & {
  __typename?: 'ScopeClaim';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The name */
  name: Scalars['NonEmpty']['output'];
  /** The scope this claim belongs to. */
  scope: Scope;
  /** The transform expression. */
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
  HandlerAppUuid = 'handlerAppUuid',
  Name = 'name',
  State = 'state',
  Uuid = 'uuid'
}

/** Scope locale definition. */
export type ScopeLocale = Model & {
  __typename?: 'ScopeLocale';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The description */
  description?: Maybe<Scalars['String']['output']>;
  /** The locale */
  locale: Scalars['Locale']['output'];
  /** The name */
  name: Scalars['NonEmpty']['output'];
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

/** Scope resource definition. */
export type ScopeResource = Model & {
  __typename?: 'ScopeResource';
  /** The attribute this resource references. */
  attribute: Attribute;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The name */
  name: Scalars['NonEmpty']['output'];
  /** The scope this resource belongs to. */
  scope: Scope;
  /** The trust issuer this resource references. */
  trustIssuer: TrustIssuer;
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
  ScopeUuid = 'scopeUuid',
  TrustIssuerUuid = 'trustIssuerUuid'
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

/** SD-JWT selective disclosure policy for attributes. */
export enum SelectiveDisclosure {
  Allowed = 'ALLOWED',
  Always = 'ALWAYS',
  Never = 'NEVER'
}

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
  /** The data deletion policy. */
  deletionPolicy?: Maybe<Scalars['String']['output']>;
  /** The JWT media type */
  jwtMediaType: Scalars['JwtMediaType']['output'];
  /** The meta of the flow. */
  meta: Scalars['JSONObject']['output'];
  /** The name of the flow. */
  name: Scalars['NonEmpty']['output'];
  /** The organization the flow belongs to. */
  organization: Organization;
  /** The purpose statement describing why attributes are being attested. */
  purposeStatement?: Maybe<Scalars['String']['output']>;
  /** The indicator if explicit consent is required */
  requireExplicitConsent: Scalars['Boolean']['output'];
  /** The data retention policy. */
  retentionPolicy?: Maybe<Scalars['String']['output']>;
  /** The data sharing policy. */
  sharingPolicy?: Maybe<Scalars['String']['output']>;
  /** The associated brands with this signature */
  signatureBrands: SignatureBrandConnection;
  /** The associated domains with this signature */
  signatureDomains: SignatureDomainConnection;
  /** A list of flow providers belonging to this flow signature. */
  signatureHandlers: SignatureHandlerConnection;
  /** The associated labels with this signature */
  signatureLabels: SignatureLabelConnection;
  /** The associated mappings with this signature */
  signatureMappings: SignatureMappingConnection;
  /** The associated secrets with this signature */
  signatureSecrets: SignatureSecretConnection;
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
export type SignatureSignatureHandlersArgs = {
  input?: InputMaybe<FindManySignatureHandlersInput>;
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
export type SignatureSignatureSecretsArgs = {
  input?: InputMaybe<FindManySignatureSecretsInput>;
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
  /** The associated fields with this credential */
  signatureAttributes: SignatureAttributeConnection;
  /** The flow signature group the flow signature credential belongs to. */
  signatureGroup: SignatureGroup;
  /** The trust the trustUuid belongs to. */
  trust: Trust;
  /** The uuid of the trust. */
  trustUuid: Scalars['UUID']['output'];
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
  SignatureGroupUuid = 'signatureGroupUuid',
  TrustUuid = 'trustUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow signature field on. Value must be camel case. */
export enum SignatureCredentialSortEnum {
  CreatedAt = 'createdAt',
  CredentialUuid = 'credentialUuid',
  IssuerUuid = 'issuerUuid',
  TrustUuid = 'trustUuid',
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
  signatureHandler: SignatureHandler;
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
  SignatureHandlerUuid = 'signatureHandlerUuid',
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

/** Flow signature handler definition. */
export type SignatureHandler = Model & {
  __typename?: 'SignatureHandler';
  /** The flow signature handler configuration. */
  configuration?: Maybe<SignatureHandlerConfiguration>;
  /** The creation timestamp. */
  createdAt: Scalars['DateTime']['output'];
  /** The handler app the handlerAppUuid belongs to. */
  handlerApp: HandlerApp;
  /** The uuid of the handler app. */
  handlerAppUuid: Scalars['UUID']['output'];
  /** Whether this handler is marked as recommended in this flow. */
  recommended: Scalars['Boolean']['output'];
  /** The flow signature the handler belongs to. */
  signature: Signature;
  /** A list of flow groups belonging to this handler. */
  signatureGroups: SignatureGroupConnection;
  /** The timestamp of when the type has been last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID. */
  uuid: Scalars['UUID']['output'];
};


/** Flow signature handler definition. */
export type SignatureHandlerSignatureGroupsArgs = {
  input?: InputMaybe<FindManySignatureGroupsInput>;
};

/** Flow signature handler configuration definition */
export type SignatureHandlerConfiguration = Model & {
  __typename?: 'SignatureHandlerConfiguration';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The NL Wallet flow signature handler configuration */
  nlWallet?: Maybe<SignatureHandlerConfigurationNlWallet>;
  /** The SignatureHandler this configuration belongs to */
  signatureHandler: SignatureHandler;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The SignatureHandlerConfiguration connection definition. */
export type SignatureHandlerConfigurationConnection = {
  __typename?: 'SignatureHandlerConfigurationConnection';
  edges: Array<Maybe<SignatureHandlerConfigurationEdge>>;
  pageInfo: PageInfo;
};

/** The SignatureHandlerConfiguration edge definition. */
export type SignatureHandlerConfigurationEdge = {
  __typename?: 'SignatureHandlerConfigurationEdge';
  cursor: Scalars['String']['output'];
  node: SignatureHandlerConfiguration;
};

/** Fields which can be used to filter SignatureHandlerConfiguration on. Value must be camel case. */
export enum SignatureHandlerConfigurationFilteringField {
  SignatureHandlerUuid = 'signatureHandlerUuid'
}

/** SignatureHandlerConfigurationNLWallet definition */
export type SignatureHandlerConfigurationNlWallet = Model & {
  __typename?: 'SignatureHandlerConfigurationNLWallet';
  /** The creation timestamp */
  createdAt: Scalars['DateTime']['output'];
  /** The SignatureHandlerConfiguration this object belongs to. */
  signatureHandlerConfiguration: SignatureHandlerConfiguration;
  /** The timestamp of when the type has been last updated */
  updatedAt: Scalars['DateTime']['output'];
  /** The usecase */
  usecase: Scalars['String']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The SignatureHandlerConfigurationNLWallet connection definition. */
export type SignatureHandlerConfigurationNlWalletConnection = {
  __typename?: 'SignatureHandlerConfigurationNLWalletConnection';
  edges: Array<Maybe<SignatureHandlerConfigurationNlWalletEdge>>;
  pageInfo: PageInfo;
};

/** The SignatureHandlerConfigurationNLWallet edge definition. */
export type SignatureHandlerConfigurationNlWalletEdge = {
  __typename?: 'SignatureHandlerConfigurationNLWalletEdge';
  cursor: Scalars['String']['output'];
  node: SignatureHandlerConfigurationNlWallet;
};

/** Fields which can be used to filter SignatureHandlerConfigurationNLWallet on. Value must be camel case. */
export enum SignatureHandlerConfigurationNlWalletFilteringField {
  Intent = 'intent',
  SignatureHandlerConfigurationUuid = 'signatureHandlerConfigurationUuid'
}

/** Fields which can be used to sort SignatureHandlerConfigurationNLWallet on. Value must be camel case. */
export enum SignatureHandlerConfigurationNlWalletSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting SignatureHandlerConfigurationNLWallet. */
export type SignatureHandlerConfigurationNlWalletSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: SignatureHandlerConfigurationNlWalletSortEnum;
};

/** Fields which can be used to sort SignatureHandlerConfiguration on. Value must be camel case. */
export enum SignatureHandlerConfigurationSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting SignatureHandlerConfiguration. */
export type SignatureHandlerConfigurationSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: SignatureHandlerConfigurationSortEnum;
};

/** The flow signature handler connection definition. */
export type SignatureHandlerConnection = {
  __typename?: 'SignatureHandlerConnection';
  edges: Array<SignatureHandlerEdge>;
  pageInfo: PageInfo;
};

/** The flow signature handler edge definition. */
export type SignatureHandlerEdge = {
  __typename?: 'SignatureHandlerEdge';
  cursor: Scalars['String']['output'];
  node: SignatureHandler;
};

/** Fields which can be used to filter flow signature handlers on. Value must be camel case. */
export enum SignatureHandlerFilteringField {
  HandlerAppUuid = 'handlerAppUuid',
  SignatureUuid = 'signatureUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort flow signature handlers on. Value must be camel case. */
export enum SignatureHandlerSortEnum {
  CreatedAt = 'createdAt',
  HandlerAppUuid = 'handlerAppUuid',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting flow signature handlers. */
export type SignatureHandlerSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: SignatureHandlerSortEnum;
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

/** Signature secret definition. Links an organization secret to a signature flow. */
export type SignatureSecret = Model & {
  __typename?: 'SignatureSecret';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The organization secret */
  organizationSecret: OrganizationSecret;
  /** The flow signature */
  signature: Signature;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** A connection */
export type SignatureSecretConnection = {
  __typename?: 'SignatureSecretConnection';
  edges: Array<SignatureSecretEdge>;
  pageInfo: PageInfo;
};

/** An edge */
export type SignatureSecretEdge = {
  __typename?: 'SignatureSecretEdge';
  cursor: Scalars['String']['output'];
  node: SignatureSecret;
};

/** Fields which can be used to filter signature secrets on. Value must be camel case. */
export enum SignatureSecretFilteringField {
  OrganizationSecretUuid = 'organizationSecretUuid',
  SignatureUuid = 'signatureUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort signature secrets on. Value must be camel case. */
export enum SignatureSecretSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting signature secrets. */
export type SignatureSecretSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: SignatureSecretSortEnum;
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

/**
 * Status list definition. Manages Token Status List bitstrings per draft-ietf-oauth-status-list.
 * The lst byte array is intentionally excluded -- RPs fetch the signed Status List Token
 * from the revocation service's .well-known/ endpoint.
 */
export type StatusList = Model & {
  __typename?: 'StatusList';
  /** Whether this list is still accepting new entries */
  active: Scalars['Boolean']['output'];
  /** Bits per entry: 1, 2, 4, or 8 (draft-ietf-oauth-status-list Section 4.1) */
  bits: Scalars['Int']['output'];
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The handler app UUID (cross-DB reference to catalog.HandlerApp) */
  handlerAppUuid: Scalars['UUID']['output'];
  /** Next available entry index */
  nextIndex: Scalars['Int']['output'];
  /** The organization UUID (cross-DB reference to studio.Organization) */
  organizationUuid: Scalars['UUID']['output'];
  /** Max entries in this list */
  size: Scalars['Int']['output'];
  /** Time-to-live in seconds for caching (draft-ietf-oauth-status-list Section 5.1) */
  ttl?: Maybe<Scalars['Int']['output']>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** Optimistic locking version, incremented on every publish */
  version: Scalars['Int']['output'];
};

/** The status list connection definition. */
export type StatusListConnection = {
  __typename?: 'StatusListConnection';
  edges: Array<Maybe<StatusListEdge>>;
  pageInfo: PageInfo;
};

/** The status list edge definition. */
export type StatusListEdge = {
  __typename?: 'StatusListEdge';
  cursor: Scalars['String']['output'];
  node: StatusList;
};

/** Fields which can be used to filter status lists on. Value must be camel case. */
export enum StatusListFilteringField {
  Active = 'active',
  CreatedAt = 'createdAt',
  HandlerAppUuid = 'handlerAppUuid',
  OrganizationUuid = 'organizationUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort status lists on. Value must be camel case. */
export enum StatusListSortEnum {
  CreatedAt = 'createdAt',
  NextIndex = 'nextIndex'
}

/** Input options for sorting status lists. */
export type StatusListSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: StatusListSortEnum;
};

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

export type Subscription = {
  __typename?: 'Subscription';
  /**
   * Subscribe to provisioning task progress updates.
   * Yields per-child state changes. Stream ends when the parent reaches a terminal state.
   */
  provisioningProgressUpdated: ProvisioningProgress;
};


export type SubscriptionProvisioningProgressUpdatedArgs = {
  taskUuid: Scalars['UUID']['input'];
};

/** Transition Organization Type Input */
export type TransitionOrganizationTypeInput = {
  /** The type */
  type: OrganizationType;
};

/**
 * Trust framework version (RFC 0012). A single versioned snapshot of a trust
 * framework definition, managed through lifecycle mutations.
 */
export type Trust = Model & {
  __typename?: 'Trust';
  /** The verification anchor type */
  anchor: Anchor;
  /** The DID anchor configuration */
  anchorDid?: Maybe<TrustAnchorDid>;
  /** The Idemix anchor configuration */
  anchorIdemix?: Maybe<TrustAnchorIdemix>;
  /** The X.509 anchor configuration */
  anchorX509?: Maybe<TrustAnchorX509>;
  /** The collection of app trusts */
  appTrusts: TrustAppConnection;
  /** The uuid of the version this was based on */
  basedOnUuid?: Maybe<Scalars['UUID']['output']>;
  /** Optional note describing changes in this version */
  changeNote?: Maybe<Scalars['String']['output']>;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The uuid of the user who created this version */
  createdByUserUuid: Scalars['UUID']['output'];
  /** The trust environment */
  environment: TrustEnvironment;
  /** The timestamp of the last edit */
  lastEditedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The uuid of the user who last edited this version */
  lastEditedByUserUuid?: Maybe<Scalars['UUID']['output']>;
  /** The collection of locales */
  locales: TrustLocaleConnection;
  /** The name of the trust framework */
  name: Scalars['NonEmpty']['output'];
  /** The publication timestamp */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The uuid of the user who published this version */
  publishedByUserUuid?: Maybe<Scalars['UUID']['output']>;
  /** The version lifecycle status */
  status: VersionStatus;
  /** The collection of trust issuers */
  trustIssuers: TrustIssuerConnection;
  /** The trust version envelope */
  trustVersion: TrustVersion;
  /** The trust version envelope uuid */
  trustVersionUuid: Scalars['UUID']['output'];
  /** The trust type */
  type: TrustType;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** The version number */
  versionNumber: Scalars['Int']['output'];
};


/**
 * Trust framework version (RFC 0012). A single versioned snapshot of a trust
 * framework definition, managed through lifecycle mutations.
 */
export type TrustAppTrustsArgs = {
  input?: InputMaybe<FindManyTrustAppsInput>;
};


/**
 * Trust framework version (RFC 0012). A single versioned snapshot of a trust
 * framework definition, managed through lifecycle mutations.
 */
export type TrustLocalesArgs = {
  input?: InputMaybe<FindManyTrustLocalesInput>;
};


/**
 * Trust framework version (RFC 0012). A single versioned snapshot of a trust
 * framework definition, managed through lifecycle mutations.
 */
export type TrustTrustIssuersArgs = {
  input?: InputMaybe<FindManyTrustIssuersInput>;
};

/**
 * Trust anchor DID definition. 1:1 relation with a Trust when the anchor type
 * is DID.
 */
export type TrustAnchorDid = Model & {
  __typename?: 'TrustAnchorDid';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The DID method */
  didMethod: Scalars['NonEmpty']['output'];
  /** The resolver URI */
  resolverUri?: Maybe<Scalars['String']['output']>;
  /** The trust this anchor belongs to. */
  trust: Trust;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The trust anchor DID connection definition. */
export type TrustAnchorDidConnection = {
  __typename?: 'TrustAnchorDidConnection';
  edges: Array<Maybe<TrustAnchorDidEdge>>;
  pageInfo: PageInfo;
};

/** The trust anchor DID edge definition. */
export type TrustAnchorDidEdge = {
  __typename?: 'TrustAnchorDidEdge';
  cursor: Scalars['String']['output'];
  node: TrustAnchorDid;
};

/** Fields which can be used to filter trust anchor DID on. Value must be camel case. */
export enum TrustAnchorDidFilteringField {
  CreatedAt = 'createdAt',
  TrustUuid = 'trustUuid'
}

/** Fields which can be used to sort trust anchor DID on. Value must be camel case. */
export enum TrustAnchorDidSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting trust anchor DID. */
export type TrustAnchorDidSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: TrustAnchorDidSortEnum;
};

/**
 * Trust anchor Idemix definition. 1:1 relation with a Trust when the anchor type
 * is IDEMIX.
 */
export type TrustAnchorIdemix = Model & {
  __typename?: 'TrustAnchorIdemix';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The trust this anchor belongs to. */
  trust: Trust;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The trust anchor Idemix connection definition. */
export type TrustAnchorIdemixConnection = {
  __typename?: 'TrustAnchorIdemixConnection';
  edges: Array<Maybe<TrustAnchorIdemixEdge>>;
  pageInfo: PageInfo;
};

/** The trust anchor Idemix edge definition. */
export type TrustAnchorIdemixEdge = {
  __typename?: 'TrustAnchorIdemixEdge';
  cursor: Scalars['String']['output'];
  node: TrustAnchorIdemix;
};

/** Fields which can be used to filter trust anchor Idemix on. Value must be camel case. */
export enum TrustAnchorIdemixFilteringField {
  CreatedAt = 'createdAt',
  TrustUuid = 'trustUuid'
}

/** Fields which can be used to sort trust anchor Idemix on. Value must be camel case. */
export enum TrustAnchorIdemixSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting trust anchor Idemix. */
export type TrustAnchorIdemixSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: TrustAnchorIdemixSortEnum;
};

/**
 * Trust anchor X.509 definition. 1:1 relation with a Trust when the anchor type
 * is X509.
 */
export type TrustAnchorX509 = Model & {
  __typename?: 'TrustAnchorX509';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The collection of root certificates */
  rootCertificates: TrustAnchorX509RootCertificateConnection;
  /** The trust this anchor belongs to. */
  trust: Trust;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/**
 * Trust anchor X.509 definition. 1:1 relation with a Trust when the anchor type
 * is X509.
 */
export type TrustAnchorX509RootCertificatesArgs = {
  input?: InputMaybe<FindManyTrustAnchorX509RootCertificatesInput>;
};

/** The trust anchor X.509 connection definition. */
export type TrustAnchorX509Connection = {
  __typename?: 'TrustAnchorX509Connection';
  edges: Array<Maybe<TrustAnchorX509Edge>>;
  pageInfo: PageInfo;
};

/** The trust anchor X.509 edge definition. */
export type TrustAnchorX509Edge = {
  __typename?: 'TrustAnchorX509Edge';
  cursor: Scalars['String']['output'];
  node: TrustAnchorX509;
};

/** Fields which can be used to filter trust anchor X.509 on. Value must be camel case. */
export enum TrustAnchorX509FilteringField {
  CreatedAt = 'createdAt',
  TrustUuid = 'trustUuid'
}

/** Trust anchor X.509 root certificate definition. */
export type TrustAnchorX509RootCertificate = Model & {
  __typename?: 'TrustAnchorX509RootCertificate';
  /** The Authority Key Identifier */
  aki: Scalars['NonEmpty']['output'];
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The certificate name */
  name: Scalars['NonEmpty']['output'];
  /** The not-after validity date */
  notAfter: Scalars['DateTime']['output'];
  /** The not-before validity date */
  notBefore: Scalars['DateTime']['output'];
  /** Whether the certificate is revoked */
  revoked: Scalars['Boolean']['output'];
  /** The revocation timestamp */
  revokedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The trust anchor X.509 this certificate belongs to. */
  trustAnchorX509: TrustAnchorX509;
  /** The collection of trust issuer key X.509 certificates */
  trustIssuerKeyX509Certs: TrustIssuerKeyX509CertConnection;
  /** The status of the entry in the trusted list */
  trustedListEntryStatus: TrustedListEntryStatus;
  /** The URI of the trusted list this certificate belongs to */
  trustedListUri?: Maybe<Scalars['String']['output']>;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** The X.509 certificate chain (PEM) */
  x5c: Scalars['NonEmpty']['output'];
};


/** Trust anchor X.509 root certificate definition. */
export type TrustAnchorX509RootCertificateTrustIssuerKeyX509CertsArgs = {
  input?: InputMaybe<FindManyTrustIssuerKeyX509CertsInput>;
};

/** The trust anchor X.509 root certificate connection definition. */
export type TrustAnchorX509RootCertificateConnection = {
  __typename?: 'TrustAnchorX509RootCertificateConnection';
  edges: Array<Maybe<TrustAnchorX509RootCertificateEdge>>;
  pageInfo: PageInfo;
};

/** The trust anchor X.509 root certificate edge definition. */
export type TrustAnchorX509RootCertificateEdge = {
  __typename?: 'TrustAnchorX509RootCertificateEdge';
  cursor: Scalars['String']['output'];
  node: TrustAnchorX509RootCertificate;
};

/** Fields which can be used to filter trust anchor X.509 root certificates on. Value must be camel case. */
export enum TrustAnchorX509RootCertificateFilteringField {
  Aki = 'aki',
  CreatedAt = 'createdAt',
  Revoked = 'revoked',
  TrustAnchorX509Uuid = 'trustAnchorX509Uuid',
  TrustedListEntryStatus = 'trustedListEntryStatus'
}

/** Fields which can be used to sort trust anchor X.509 root certificates on. Value must be camel case. */
export enum TrustAnchorX509RootCertificateSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  NotAfter = 'notAfter'
}

/** Input options for sorting trust anchor X.509 root certificates. */
export type TrustAnchorX509RootCertificateSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: TrustAnchorX509RootCertificateSortEnum;
};

/** Fields which can be used to sort trust anchor X.509 on. Value must be camel case. */
export enum TrustAnchorX509SortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting trust anchor X.509. */
export type TrustAnchorX509SortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: TrustAnchorX509SortEnum;
};

/** Trust app definition. */
export type TrustApp = Model & {
  __typename?: 'TrustApp';
  /** The app this trust app belongs to. */
  app: App;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The trust this trust app belongs to. */
  trust: Trust;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The trust app connection definition. */
export type TrustAppConnection = {
  __typename?: 'TrustAppConnection';
  edges: Array<Maybe<TrustAppEdge>>;
  pageInfo: PageInfo;
};

/** The trust app edge definition. */
export type TrustAppEdge = {
  __typename?: 'TrustAppEdge';
  cursor: Scalars['String']['output'];
  node: TrustApp;
};

/** Fields which can be used to filter trust app on. Value must be camel case. */
export enum TrustAppFilteringField {
  AppUuid = 'appUuid',
  CreatedAt = 'createdAt',
  TrustUuid = 'trustUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort trust app on. Value must be camel case. */
export enum TrustAppSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting trust app. */
export type TrustAppSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: TrustAppSortEnum;
};

/**
 * Trust change log entry (RFC 0012). Created internally by lifecycle operations
 * to record an audit trail of version transitions.
 */
export type TrustChangeLog = Model & {
  __typename?: 'TrustChangeLog';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** Metadata describing the change */
  metadata: Scalars['JSONObject']['output'];
  /** The uuid of the user who performed the action */
  performedByUserUuid: Scalars['UUID']['output'];
  /** The trust version envelope */
  trustVersion: TrustVersion;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** The version number at the time of the change */
  versionNumber: Scalars['Int']['output'];
};

/** The trust change log connection definition. */
export type TrustChangeLogConnection = {
  __typename?: 'TrustChangeLogConnection';
  edges: Array<Maybe<TrustChangeLogEdge>>;
  pageInfo: PageInfo;
};

/** The trust change log edge definition. */
export type TrustChangeLogEdge = {
  __typename?: 'TrustChangeLogEdge';
  cursor: Scalars['String']['output'];
  node: TrustChangeLog;
};

/** Fields which can be used to filter trust change logs on. Value must be camel case. */
export enum TrustChangeLogFilteringField {
  CreatedAt = 'createdAt',
  PerformedByUserUuid = 'performedByUserUuid',
  TrustVersionUuid = 'trustVersionUuid',
  VersionNumber = 'versionNumber'
}

/** Fields which can be used to sort trust change logs on. Value must be camel case. */
export enum TrustChangeLogSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting trust change logs. */
export type TrustChangeLogSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: TrustChangeLogSortEnum;
};

/** The trust connection definition. */
export type TrustConnection = {
  __typename?: 'TrustConnection';
  edges: Array<Maybe<TrustEdge>>;
  pageInfo: PageInfo;
};

/** The trust edge definition. */
export type TrustEdge = {
  __typename?: 'TrustEdge';
  cursor: Scalars['String']['output'];
  node: Trust;
};

/** Trust framework environment types. */
export enum TrustEnvironment {
  Demo = 'DEMO',
  Production = 'PRODUCTION'
}

/** Fields which can be used to filter trusts on. Value must be camel case. */
export enum TrustFilteringField {
  Anchor = 'anchor',
  CreatedAt = 'createdAt',
  Environment = 'environment',
  Name = 'name',
  Status = 'status',
  TrustVersionUuid = 'trustVersionUuid',
  Type = 'type',
  Uuid = 'uuid'
}

/** Trust issuer definition. */
export type TrustIssuer = Model & {
  __typename?: 'TrustIssuer';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The collection of credential trust issuers */
  credentialTrustIssuers: CredentialTrustIssuerConnection;
  /** The issuer this trust issuer belongs to. */
  issuer: Issuer;
  /** The collection of keys */
  keys: TrustIssuerKeyConnection;
  /** The collection of scope resources */
  scopeResources: ScopeResourceConnection;
  /** The trust this trust issuer belongs to. */
  trust: Trust;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/** Trust issuer definition. */
export type TrustIssuerCredentialTrustIssuersArgs = {
  input?: InputMaybe<FindManyCredentialTrustIssuersInput>;
};


/** Trust issuer definition. */
export type TrustIssuerKeysArgs = {
  input?: InputMaybe<FindManyTrustIssuerKeysInput>;
};


/** Trust issuer definition. */
export type TrustIssuerScopeResourcesArgs = {
  input?: InputMaybe<FindManyScopeResourcesInput>;
};

/** The trust issuer connection definition. */
export type TrustIssuerConnection = {
  __typename?: 'TrustIssuerConnection';
  edges: Array<Maybe<TrustIssuerEdge>>;
  pageInfo: PageInfo;
};

/** The trust issuer edge definition. */
export type TrustIssuerEdge = {
  __typename?: 'TrustIssuerEdge';
  cursor: Scalars['String']['output'];
  node: TrustIssuer;
};

/** Fields which can be used to filter trust issuer on. Value must be camel case. */
export enum TrustIssuerFilteringField {
  CreatedAt = 'createdAt',
  IssuerUuid = 'issuerUuid',
  TrustUuid = 'trustUuid',
  Uuid = 'uuid'
}

/** Trust issuer key definition. */
export type TrustIssuerKey = Model & {
  __typename?: 'TrustIssuerKey';
  /** The algorithm. */
  algorithm: Algorithm;
  /** The Idemix algorithm configuration. */
  algorithmIdemix?: Maybe<TrustIssuerKeyAlgorithmIdemix>;
  /** The DID binding anchor. */
  anchorDidBinding?: Maybe<TrustIssuerKeyDidBinding>;
  /** The X.509 certificate anchor. */
  anchorX509Cert?: Maybe<TrustIssuerKeyX509Cert>;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The JSON Web Key. */
  jwk?: Maybe<Scalars['JSONObject']['output']>;
  /** The key identifier. */
  kid?: Maybe<Scalars['String']['output']>;
  /** The trust issuer this key belongs to. */
  trustIssuer: TrustIssuer;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** Trust issuer key algorithm Idemix definition. */
export type TrustIssuerKeyAlgorithmIdemix = Model & {
  __typename?: 'TrustIssuerKeyAlgorithmIdemix';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The Idemix identifier. */
  id: Scalars['NonEmpty']['output'];
  /** The trust issuer key this Idemix configuration belongs to. */
  trustIssuerKey: TrustIssuerKey;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The trust issuer key algorithm Idemix connection definition. */
export type TrustIssuerKeyAlgorithmIdemixConnection = {
  __typename?: 'TrustIssuerKeyAlgorithmIdemixConnection';
  edges: Array<Maybe<TrustIssuerKeyAlgorithmIdemixEdge>>;
  pageInfo: PageInfo;
};

/** The trust issuer key algorithm Idemix edge definition. */
export type TrustIssuerKeyAlgorithmIdemixEdge = {
  __typename?: 'TrustIssuerKeyAlgorithmIdemixEdge';
  cursor: Scalars['String']['output'];
  node: TrustIssuerKeyAlgorithmIdemix;
};

/** Fields which can be used to filter trust issuer key algorithm Idemix on. Value must be camel case. */
export enum TrustIssuerKeyAlgorithmIdemixFilteringField {
  CreatedAt = 'createdAt',
  TrustIssuerKeyUuid = 'trustIssuerKeyUuid'
}

/** Fields which can be used to sort trust issuer key algorithm Idemix on. Value must be camel case. */
export enum TrustIssuerKeyAlgorithmIdemixSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting trust issuer key algorithm Idemix. */
export type TrustIssuerKeyAlgorithmIdemixSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: TrustIssuerKeyAlgorithmIdemixSortEnum;
};

/** The trust issuer key connection definition. */
export type TrustIssuerKeyConnection = {
  __typename?: 'TrustIssuerKeyConnection';
  edges: Array<Maybe<TrustIssuerKeyEdge>>;
  pageInfo: PageInfo;
};

/** Trust issuer key DID binding definition. */
export type TrustIssuerKeyDidBinding = Model & {
  __typename?: 'TrustIssuerKeyDidBinding';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The DID. */
  did: Scalars['NonEmpty']['output'];
  /** The trust issuer key this DID binding belongs to. */
  trustIssuerKey: TrustIssuerKey;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The trust issuer key DID binding connection definition. */
export type TrustIssuerKeyDidBindingConnection = {
  __typename?: 'TrustIssuerKeyDidBindingConnection';
  edges: Array<Maybe<TrustIssuerKeyDidBindingEdge>>;
  pageInfo: PageInfo;
};

/** The trust issuer key DID binding edge definition. */
export type TrustIssuerKeyDidBindingEdge = {
  __typename?: 'TrustIssuerKeyDidBindingEdge';
  cursor: Scalars['String']['output'];
  node: TrustIssuerKeyDidBinding;
};

/** Fields which can be used to filter trust issuer key DID binding on. Value must be camel case. */
export enum TrustIssuerKeyDidBindingFilteringField {
  CreatedAt = 'createdAt',
  TrustIssuerKeyUuid = 'trustIssuerKeyUuid'
}

/** Fields which can be used to sort trust issuer key DID binding on. Value must be camel case. */
export enum TrustIssuerKeyDidBindingSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting trust issuer key DID binding. */
export type TrustIssuerKeyDidBindingSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: TrustIssuerKeyDidBindingSortEnum;
};

/** The trust issuer key edge definition. */
export type TrustIssuerKeyEdge = {
  __typename?: 'TrustIssuerKeyEdge';
  cursor: Scalars['String']['output'];
  node: TrustIssuerKey;
};

/** Fields which can be used to filter trust issuer key on. Value must be camel case. */
export enum TrustIssuerKeyFilteringField {
  Algorithm = 'algorithm',
  CreatedAt = 'createdAt',
  Kid = 'kid',
  TrustIssuerUuid = 'trustIssuerUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort trust issuer key on. Value must be camel case. */
export enum TrustIssuerKeySortEnum {
  Algorithm = 'algorithm',
  CreatedAt = 'createdAt'
}

/** Input options for sorting trust issuer key. */
export type TrustIssuerKeySortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: TrustIssuerKeySortEnum;
};

/** Trust issuer key X.509 certificate definition. */
export type TrustIssuerKeyX509Cert = Model & {
  __typename?: 'TrustIssuerKeyX509Cert';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The not after date. */
  notAfter: Scalars['DateTime']['output'];
  /** The not before date. */
  notBefore: Scalars['DateTime']['output'];
  /** Whether the certificate is revoked. */
  revoked: Scalars['Boolean']['output'];
  /** The revocation time. */
  revokedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The trust anchor X.509 root certificate. */
  trustAnchorX509RootCertificate: TrustAnchorX509RootCertificate;
  /** The trust issuer key this X.509 certificate belongs to. */
  trustIssuerKey: TrustIssuerKey;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
  /** The X.509 certificate chain. */
  x5c: Array<Scalars['NonEmpty']['output']>;
};

/** The trust issuer key X.509 certificate connection definition. */
export type TrustIssuerKeyX509CertConnection = {
  __typename?: 'TrustIssuerKeyX509CertConnection';
  edges: Array<Maybe<TrustIssuerKeyX509CertEdge>>;
  pageInfo: PageInfo;
};

/** The trust issuer key X.509 certificate edge definition. */
export type TrustIssuerKeyX509CertEdge = {
  __typename?: 'TrustIssuerKeyX509CertEdge';
  cursor: Scalars['String']['output'];
  node: TrustIssuerKeyX509Cert;
};

/** Fields which can be used to filter trust issuer key X.509 certificate on. Value must be camel case. */
export enum TrustIssuerKeyX509CertFilteringField {
  CreatedAt = 'createdAt',
  Revoked = 'revoked',
  TrustAnchorX509RootCertificateUuid = 'trustAnchorX509RootCertificateUuid',
  TrustIssuerKeyUuid = 'trustIssuerKeyUuid'
}

/** Fields which can be used to sort trust issuer key X.509 certificate on. Value must be camel case. */
export enum TrustIssuerKeyX509CertSortEnum {
  CreatedAt = 'createdAt',
  NotAfter = 'notAfter'
}

/** Input options for sorting trust issuer key X.509 certificate. */
export type TrustIssuerKeyX509CertSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: TrustIssuerKeyX509CertSortEnum;
};

/** Fields which can be used to sort trust issuer on. Value must be camel case. */
export enum TrustIssuerSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting trust issuer. */
export type TrustIssuerSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: TrustIssuerSortEnum;
};

/** Trust label definition. */
export type TrustLabel = Model & {
  __typename?: 'TrustLabel';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The Label */
  label: Label;
  /** The identity trust (resolved via federation) */
  trust: Trust;
  /** The identity trust UUID (no direct relation - separate database) */
  trustUuid: Scalars['UUID']['output'];
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** Connection */
export type TrustLabelConnection = {
  __typename?: 'TrustLabelConnection';
  edges: Array<TrustLabelEdge>;
  pageInfo: PageInfo;
};

/** Edge */
export type TrustLabelEdge = {
  __typename?: 'TrustLabelEdge';
  cursor: Scalars['String']['output'];
  node: TrustLabel;
};

/** Fields which can be used to filter identity trust labels. Value must be camel case. */
export enum TrustLabelFilteringField {
  LabelUuid = 'labelUuid',
  TrustUuid = 'trustUuid',
  Uuid = 'uuid'
}

/** Fields which can be used to sort identity trust labels. Value must be camel case. */
export enum TrustLabelSortEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Input options for sorting identity trust labels. */
export type TrustLabelSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: TrustLabelSortEnum;
};

/** Trust locale definition. */
export type TrustLocale = Model & {
  __typename?: 'TrustLocale';
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The localized description */
  description?: Maybe<Scalars['String']['output']>;
  /** The locale */
  locale: Scalars['Locale']['output'];
  /** The localized name */
  name: Scalars['NonEmpty']['output'];
  /** The trust this locale belongs to. */
  trust: Trust;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};

/** The trust locale connection definition. */
export type TrustLocaleConnection = {
  __typename?: 'TrustLocaleConnection';
  edges: Array<Maybe<TrustLocaleEdge>>;
  pageInfo: PageInfo;
};

/** The trust locale edge definition. */
export type TrustLocaleEdge = {
  __typename?: 'TrustLocaleEdge';
  cursor: Scalars['String']['output'];
  node: TrustLocale;
};

/** Fields which can be used to filter trust locales on. Value must be camel case. */
export enum TrustLocaleFilteringField {
  Locale = 'locale',
  TrustUuid = 'trustUuid'
}

/** Fields which can be used to sort trust locales on. Value must be camel case. */
export enum TrustLocaleSortEnum {
  CreatedAt = 'createdAt'
}

/** Input options for sorting trust locales. */
export type TrustLocaleSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: TrustLocaleSortEnum;
};

/** Fields which can be used to sort trusts on. Value must be camel case. */
export enum TrustSortEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  VersionNumber = 'versionNumber'
}

/** Input options for sorting trusts. */
export type TrustSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: TrustSortEnum;
};

/** Trust framework category types per EUDI ARF. */
export enum TrustType {
  Attestation = 'ATTESTATION',
  EudiEaa = 'EUDI_EAA',
  EudiPid = 'EUDI_PID',
  EudiPubeaa = 'EUDI_PUBEAA',
  EudiQeaa = 'EUDI_QEAA'
}

/**
 * Trust version envelope (RFC 0012). Tracks the identity of a trust framework
 * definition across its full version history.
 */
export type TrustVersion = Model & {
  __typename?: 'TrustVersion';
  /** The collection of change logs */
  changeLogs: TrustChangeLogConnection;
  /** The creation time */
  createdAt: Scalars['DateTime']['output'];
  /** The reason for deprecation */
  deprecationReason?: Maybe<Scalars['String']['output']>;
  /** The current draft trust version */
  draft?: Maybe<Trust>;
  /** Whether a draft version exists */
  hasDraft: Scalars['Boolean']['output'];
  /** Whether a live version exists */
  hasLive: Scalars['Boolean']['output'];
  /** Whether the trust framework is deprecated */
  isDeprecated: Scalars['Boolean']['output'];
  /** The current live trust version */
  live?: Maybe<Trust>;
  /** The organization this trust version belongs to */
  organization: Organization;
  /** The organization uuid */
  organizationUuid: Scalars['UUID']['output'];
  /** The unique slug within the organization */
  slug: Scalars['NonEmpty']['output'];
  /** The collection of all trust versions */
  trusts: TrustConnection;
  /** The update time */
  updatedAt: Scalars['DateTime']['output'];
  /** The UUID */
  uuid: Scalars['UUID']['output'];
};


/**
 * Trust version envelope (RFC 0012). Tracks the identity of a trust framework
 * definition across its full version history.
 */
export type TrustVersionChangeLogsArgs = {
  input?: InputMaybe<FindManyTrustChangeLogsInput>;
};


/**
 * Trust version envelope (RFC 0012). Tracks the identity of a trust framework
 * definition across its full version history.
 */
export type TrustVersionTrustsArgs = {
  input?: InputMaybe<FindManyTrustsInput>;
};

/** The trust version connection definition. */
export type TrustVersionConnection = {
  __typename?: 'TrustVersionConnection';
  edges: Array<Maybe<TrustVersionEdge>>;
  pageInfo: PageInfo;
};

/** The trust version edge definition. */
export type TrustVersionEdge = {
  __typename?: 'TrustVersionEdge';
  cursor: Scalars['String']['output'];
  node: TrustVersion;
};

/** Fields which can be used to filter trust versions on. Value must be camel case. */
export enum TrustVersionFilteringField {
  CreatedAt = 'createdAt',
  HasDraft = 'hasDraft',
  HasLive = 'hasLive',
  IsDeprecated = 'isDeprecated',
  OrganizationUuid = 'organizationUuid',
  Slug = 'slug'
}

/** Fields which can be used to sort trust versions on. Value must be camel case. */
export enum TrustVersionSortEnum {
  CreatedAt = 'createdAt',
  Slug = 'slug'
}

/** Input options for sorting trust versions. */
export type TrustVersionSortInput = {
  /** The direction to sort on. */
  direction: OrderDirection;
  /** The field to sort on. */
  field: TrustVersionSortEnum;
};

/** Status of an entry in a Trusted List or LoTE. */
export enum TrustedListEntryStatus {
  Suspended = 'SUSPENDED',
  Valid = 'VALID',
  Withdrawn = 'WITHDRAWN'
}

/** Update Input */
export type UpdateAppInput = {
  /** The base64Logo of the app. */
  base64Logo?: InputMaybe<Scalars['NonEmpty']['input']>;
  /**
   * Primary operating regions as ISO 3166-1 alpha-2 country codes.
   * Most apps can also be used outside these regions.
   */
  countries?: InputMaybe<Array<Scalars['ISO3166']['input']>>;
  /** The maturity level of the app. */
  maturity?: InputMaybe<Maturity>;
  /** The name of the app. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateAppLocaleInput = {
  /** The description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The locale */
  locale?: InputMaybe<Scalars['Locale']['input']>;
  /** The name */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateAttributeFormatDatakeeperInput = {
  /** The predicate. */
  predicate?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateAttributeFormatDigidentityInput = {
  /** The claim. */
  claim?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateAttributeFormatMsoMdocInput = {
  /** The data element identifier. */
  dataElementIdentifier?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The namespace. */
  namespace?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateAttributeFormatNectInput = {
  /** The field. */
  field?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateAttributeFormatNlWalletInput = {
  /** The claim path. */
  claimPath?: InputMaybe<Scalars['JSONObject']['input']>;
};

/** Update Input */
export type UpdateAttributeFormatReadidInput = {
  /** The field. */
  field?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateAttributeFormatSdJwtInput = {
  /** Whether the attribute is mandatory. */
  mandatory?: InputMaybe<Scalars['Boolean']['input']>;
  /** The path. */
  path?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The selective disclosure. */
  sd?: InputMaybe<SelectiveDisclosure>;
  /** The SVG identifier. */
  svgId?: InputMaybe<Scalars['String']['input']>;
};

/** Update Input */
export type UpdateAttributeFormatYiviInput = {
  /** The Yivi identifier. */
  id?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** Whether the attribute is optional. */
  optional?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Update Input */
export type UpdateAttributeFormatYotiInput = {
  /** The name. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateAttributeInput = {
  /** The categories. */
  categories?: InputMaybe<Array<CategoryType>>;
  /** The name of the attribute. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The sort order. */
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
};

/** Update Input */
export type UpdateAttributeLocaleInput = {
  /** The localized description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The localized label. */
  label?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The locale. */
  locale?: InputMaybe<Scalars['Locale']['input']>;
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
export type UpdateAuthenticationHandlerConfigurationNlWalletInput = {
  /** Whether the user can request deletion of their retained data. */
  deletable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the organization intends to retain the disclosed data. */
  intentToRetain?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the organization intends to share the disclosed data with third parties. */
  intentToShare?: InputMaybe<Scalars['Boolean']['input']>;
  /** Maximum retention duration in minutes. Leave empty for no maximum. */
  maxRetentionDuration?: InputMaybe<Scalars['Int']['input']>;
  /** Purpose statement */
  purposeStatement?: InputMaybe<Scalars['JSONObject']['input']>;
};

/** Update Input */
export type UpdateAuthenticationHandlerInput = {
  /** Whether this handler is marked as recommended in this flow. */
  recommended: Scalars['Boolean']['input'];
};

/** Update Input */
export type UpdateAuthenticationInput = {
  /** The data deletion policy. */
  deletionPolicy?: InputMaybe<Scalars['String']['input']>;
  /** The name of the flow authentication. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The purpose statement describing why attributes are being attested. */
  purposeStatement?: InputMaybe<Scalars['String']['input']>;
  /** The data retention policy. */
  retentionPolicy?: InputMaybe<Scalars['String']['input']>;
  /** The data sharing policy. */
  sharingPolicy?: InputMaybe<Scalars['String']['input']>;
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

/** The input for updating a credential draft (RFC 0012). */
export type UpdateCredentialDraftInput = {
  /** The categories of the credential. */
  categories?: InputMaybe<Array<CategoryType>>;
  /** The change note. */
  changeNote?: InputMaybe<Scalars['String']['input']>;
  /** The format of the credential. */
  format?: InputMaybe<Format>;
  /** The name of the credential. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The last known update time for optimistic concurrency. */
  updatedAt: Scalars['DateTime']['input'];
};

/** Update Input */
export type UpdateCredentialFormatDatakeeperInput = {
  /** The context. */
  context?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The UUID of the issuer. */
  issuerUuid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Update Input */
export type UpdateCredentialFormatDigidentityInput = {
  /** The UUID of the issuer. */
  issuerUuid?: InputMaybe<Scalars['UUID']['input']>;
  /** The scope. */
  scope?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateCredentialFormatMsoMdocInput = {
  /** The document type. */
  docType?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateCredentialFormatNectInput = {
  /** The intent. */
  intent?: InputMaybe<Scalars['Int']['input']>;
  /** The UUID of the issuer. */
  issuerUuid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Update Input */
export type UpdateCredentialFormatNlWalletInput = {
  /** The document type. */
  docType?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The NL Wallet format. */
  format?: InputMaybe<NlWalletFormat>;
  /** The namespace. */
  nameSpace?: InputMaybe<Scalars['String']['input']>;
};

/** Update Input */
export type UpdateCredentialFormatReadidInput = {
  /** The document type. */
  documentType?: InputMaybe<ReadidDocumentType>;
  /** The UUID of the issuer. */
  issuerUuid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Update Input */
export type UpdateCredentialFormatSdJwtInput = {
  /** The extended verifiable credential type. */
  extendsVct?: InputMaybe<Scalars['String']['input']>;
  /** The extended VCT integrity hash. */
  extendsVctIntegrity?: InputMaybe<Scalars['String']['input']>;
  /** Whether key binding is enabled. */
  keyBinding?: InputMaybe<Scalars['Boolean']['input']>;
  /** The status list URI. */
  statusListUri?: InputMaybe<Scalars['String']['input']>;
  /** The verifiable credential type. */
  vct?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The VCT integrity hash. */
  vctIntegrity?: InputMaybe<Scalars['String']['input']>;
};

/** Update Input */
export type UpdateCredentialFormatYiviInput = {
  /** The Yivi credential type identifier. */
  id?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The UUID of the issuer. */
  issuerUuid?: InputMaybe<Scalars['UUID']['input']>;
};

/** Update Input */
export type UpdateCredentialFormatYotiInput = {
  /** The grouping predicate. */
  groupingPredicate?: InputMaybe<Scalars['String']['input']>;
  /** Whether grouping is allowed. */
  isGroupingAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether source constraint is available. */
  isSourceConstraintAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  /** The UUID of the issuer. */
  issuerUuid?: InputMaybe<Scalars['UUID']['input']>;
  /** The name. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateCredentialLocaleInput = {
  /** The background color. */
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  /** The background image. */
  backgroundImage?: InputMaybe<Scalars['String']['input']>;
  /** The background image integrity hash. */
  backgroundImageIntegrity?: InputMaybe<Scalars['String']['input']>;
  /** The localized description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The locale. */
  locale?: InputMaybe<Scalars['Locale']['input']>;
  /** The logo. */
  logo?: InputMaybe<Scalars['String']['input']>;
  /** The logo alt text. */
  logoAltText?: InputMaybe<Scalars['String']['input']>;
  /** The logo integrity hash. */
  logoIntegrity?: InputMaybe<Scalars['String']['input']>;
  /** The localized name. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The text color. */
  textColor?: InputMaybe<Scalars['String']['input']>;
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

/** Input for updating DisclosureHandlerConfiguration */
export type UpdateDisclosureHandlerConfigurationInput = {
  nlWallet?: InputMaybe<UpdateDisclosureHandlerConfigurationNlWalletInput>;
  oid4vc?: InputMaybe<UpdateDisclosureHandlerConfigurationOid4VcInput>;
};

/** Update Input */
export type UpdateDisclosureHandlerConfigurationNlWalletInput = {
  /** Whether the user can request deletion of their retained data. */
  deletable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the organization intends to retain the disclosed data. */
  intentToRetain?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the organization intends to share the disclosed data with third parties. */
  intentToShare?: InputMaybe<Scalars['Boolean']['input']>;
  /** Maximum retention duration in minutes. Leave empty for no maximum. */
  maxRetentionDuration?: InputMaybe<Scalars['Int']['input']>;
  /** The OID4VC verification profile */
  profile?: InputMaybe<Oid4vcVerificationProfile>;
  /** Purpose statement */
  purposeStatement?: InputMaybe<Scalars['JSONObject']['input']>;
};

/** Update Input */
export type UpdateDisclosureHandlerConfigurationOid4VcInput = {
  /** The OID4VC verification profile */
  profile?: InputMaybe<Oid4vcVerificationProfile>;
};

/** Update Input */
export type UpdateDisclosureHandlerInput = {
  /** Whether this handler is marked as recommended in this flow. */
  recommended: Scalars['Boolean']['input'];
};

/** Update Input */
export type UpdateDisclosureInput = {
  /** The data deletion policy. */
  deletionPolicy?: InputMaybe<Scalars['String']['input']>;
  /** The JWT media type */
  jwtMediaType?: InputMaybe<Scalars['JwtMediaType']['input']>;
  /** The meta of the flow disclosure. */
  meta?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The name of the flow disclosure. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The purpose statement describing why attributes are being attested. */
  purposeStatement?: InputMaybe<Scalars['String']['input']>;
  /** The indicator if explicit consent is required */
  requireExplicitConsent?: InputMaybe<Scalars['Boolean']['input']>;
  /** The data retention policy. */
  retentionPolicy?: InputMaybe<Scalars['String']['input']>;
  /** The data sharing policy. */
  sharingPolicy?: InputMaybe<Scalars['String']['input']>;
};

/** Update Input */
export type UpdateHandlerAppProtocolOid4vcInput = {
  /** The supported issuance flows. */
  supportedIssuanceFlows?: InputMaybe<Array<HandlerAppProtocolOid4vcIssuanceFlow>>;
  /** The supported issuance profiles. */
  supportedIssuanceProfiles?: InputMaybe<Array<HandlerAppProtocolOid4vcIssuanceProfile>>;
  /** The supported verification profiles. */
  supportedVerificationProfiles?: InputMaybe<Array<HandlerAppProtocolOid4vcVerificationProfile>>;
  /** The wallet implementation. */
  walletImplementation?: InputMaybe<HandlerAppProtocolOid4vcWalletImplementation>;
};

/** Update Input */
export type UpdateHandlerInput = {
  /** The handler URI. */
  handlerUri?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The name of the handler. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The protocol. */
  protocol?: InputMaybe<Protocol>;
  /** The supported flow types. */
  supportedFlows?: InputMaybe<Array<FlowType>>;
};

/** Update Input */
export type UpdateHandlerLocaleInput = {
  /** The description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The locale */
  locale?: InputMaybe<Scalars['Locale']['input']>;
  /** The name */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update input */
export type UpdateIssuanceBrandInput = {
  /** Sets flow brand as default */
  isDefault: Scalars['Boolean']['input'];
};

/** The input for updating a flow credential meta datakeeper */
export type UpdateIssuanceCredentialMetaDatakeeperInput = {
  /** The expiration duration, in seconds */
  expirationDuration: Scalars['Int']['input'];
};

/** The input for updating a flow credential meta oid4vc */
export type UpdateIssuanceCredentialMetaOid4vcInput = {
  /** The expiration duration, in seconds */
  expirationDuration: Scalars['Int']['input'];
};

/** The input for updating a flow credential meta yivi */
export type UpdateIssuanceCredentialMetaYiviInput = {
  /** The expiration duration, in seconds */
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
export type UpdateIssuanceHandlerConfigurationNlWalletInput = {
  /** The attribute UUIDs that must be disclosed before issuance */
  attributeUuids?: InputMaybe<Array<Scalars['UUID']['input']>>;
  /** Whether the user can request deletion of their retained data. */
  deletable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the organization intends to retain the disclosed data. */
  intentToRetain?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the organization intends to share the disclosed data with third parties. */
  intentToShare?: InputMaybe<Scalars['Boolean']['input']>;
  /** Maximum retention duration in minutes. Leave empty for no maximum. */
  maxRetentionDuration?: InputMaybe<Scalars['Int']['input']>;
  /** Purpose statement */
  purposeStatement?: InputMaybe<Scalars['JSONObject']['input']>;
};

/** Update Input */
export type UpdateIssuanceHandlerConfigurationOid4VcInput = {
  /** The OID4VC issuance flow */
  flow?: InputMaybe<Oid4vcIssuanceFlow>;
  /** The OID4VC issuance profile */
  profile?: InputMaybe<Oid4vcIssuanceProfile>;
};

/** Update Input */
export type UpdateIssuanceHandlerInput = {
  /** Whether this handler is marked as recommended in this flow. */
  recommended: Scalars['Boolean']['input'];
};

/** Update Input */
export type UpdateIssuanceInput = {
  /** The data deletion policy. */
  deletionPolicy?: InputMaybe<Scalars['String']['input']>;
  /** The JWT media type */
  jwtMediaType?: InputMaybe<Scalars['JwtMediaType']['input']>;
  /** The meta of the flow issuance. */
  meta?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The name of the flow issuance. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The purpose statement describing why attributes are being attested. */
  purposeStatement?: InputMaybe<Scalars['String']['input']>;
  /** The indicator if explicit consent is required */
  requireExplicitConsent?: InputMaybe<Scalars['Boolean']['input']>;
  /** The data retention policy. */
  retentionPolicy?: InputMaybe<Scalars['String']['input']>;
  /** The data sharing policy. */
  sharingPolicy?: InputMaybe<Scalars['String']['input']>;
};

/** The input for updating an issuer draft (RFC 0012). */
export type UpdateIssuerDraftInput = {
  /** The base64 encoded logo. */
  base64Logo?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The change note. */
  changeNote?: InputMaybe<Scalars['String']['input']>;
  /** The name of the issuer. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The last known update time for optimistic concurrency. */
  updatedAt: Scalars['DateTime']['input'];
};

/** Update Input */
export type UpdateIssuerLocaleInput = {
  /** The localized description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The locale. */
  locale?: InputMaybe<Scalars['Locale']['input']>;
  /** The localized name. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
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
  model?: InputMaybe<Models>;
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
  /** The transform function */
  transform?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateMappingIssuanceClaimInput = {
  /** The claim */
  claim?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The name of the mappingIssuance claim. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
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
  /** The ISO 3166-1 alpha-2 country code of the organization. */
  countryCode?: InputMaybe<Scalars['ISO3166']['input']>;
  /** The organization description. */
  description?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The public email address of the organization. */
  email?: InputMaybe<Scalars['Email']['input']>;
  /** The chamber of commerce registration number. */
  kvk?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The legal registered name of the organization. */
  legalName?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The organization logo. */
  logo?: InputMaybe<Scalars['ProfilePicture']['input']>;
  /** The NACE Rev. 2.1 economic activity code of the organization. */
  naceCode?: InputMaybe<Scalars['NACECode']['input']>;
  /** The organization name. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The phone number of the organization. */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** The URL of the organization's privacy policy. */
  privacyPolicyUrl?: InputMaybe<Scalars['URL']['input']>;
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

/** The input for updating an organization trust issuer key. */
export type UpdateOrganizationTrustIssuerKeyInput = {
  /** The Vault Transit private key identifier. */
  privateKeyIdentifier?: InputMaybe<Scalars['NonEmpty']['input']>;
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
export type UpdateScopeClaimInput = {
  /** The name of the scope claim. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The transform expression. */
  transform?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateScopeInput = {
  /** The categories. */
  categories?: InputMaybe<Array<CategoryType>>;
  /** The name of the scope. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The scope value. */
  scope?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateScopeLocaleInput = {
  /** The description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The locale */
  locale?: InputMaybe<Scalars['Locale']['input']>;
  /** The name */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
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
export type UpdateSignatureHandlerConfigurationNlWalletInput = {
  /** The usecase */
  usecase?: InputMaybe<Scalars['String']['input']>;
};

/** Update Input */
export type UpdateSignatureHandlerInput = {
  /** Whether this handler is marked as recommended in this flow. */
  recommended: Scalars['Boolean']['input'];
};

/** Update Input */
export type UpdateSignatureInput = {
  /** The data deletion policy. */
  deletionPolicy?: InputMaybe<Scalars['String']['input']>;
  /** The JWT media type */
  jwtMediaType?: InputMaybe<Scalars['JwtMediaType']['input']>;
  /** The meta of the flow signature. */
  meta?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The name of the flow signature. */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The purpose statement describing why attributes are being attested. */
  purposeStatement?: InputMaybe<Scalars['String']['input']>;
  /** The indicator if explicit consent is required */
  requireExplicitConsent?: InputMaybe<Scalars['Boolean']['input']>;
  /** The data retention policy. */
  retentionPolicy?: InputMaybe<Scalars['String']['input']>;
  /** The data sharing policy. */
  sharingPolicy?: InputMaybe<Scalars['String']['input']>;
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

/** Update Input */
export type UpdateTrustAnchorDidInput = {
  /** The DID method */
  didMethod?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The resolver URI */
  resolverUri?: InputMaybe<Scalars['String']['input']>;
};

/** Update Input */
export type UpdateTrustAnchorX509RootCertificateInput = {
  /** The Authority Key Identifier */
  aki?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The certificate name */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The not-after validity date */
  notAfter?: InputMaybe<Scalars['DateTime']['input']>;
  /** The not-before validity date */
  notBefore?: InputMaybe<Scalars['DateTime']['input']>;
  /** Whether the certificate is revoked */
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  /** The revocation timestamp */
  revokedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The status of the entry in the trusted list */
  trustedListEntryStatus?: InputMaybe<TrustedListEntryStatus>;
  /** The URI of the trusted list this certificate belongs to */
  trustedListUri?: InputMaybe<Scalars['String']['input']>;
  /** The X.509 certificate chain (PEM) */
  x5c?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** The input for updating a trust draft. */
export type UpdateTrustDraftInput = {
  /** The verification anchor type */
  anchor?: InputMaybe<Anchor>;
  /** Optional note describing changes in this version */
  changeNote?: InputMaybe<Scalars['String']['input']>;
  /** The trust environment */
  environment?: InputMaybe<TrustEnvironment>;
  /** The name of the trust framework */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
  /** The trust type */
  type?: InputMaybe<TrustType>;
  /** Optimistic locking timestamp */
  updatedAt: Scalars['DateTime']['input'];
};

/** Update Input */
export type UpdateTrustIssuerKeyAlgorithmIdemixInput = {
  /** The Idemix identifier. */
  id?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateTrustIssuerKeyDidBindingInput = {
  /** The DID. */
  did?: InputMaybe<Scalars['NonEmpty']['input']>;
};

/** Update Input */
export type UpdateTrustIssuerKeyInput = {
  /** The algorithm. */
  algorithm?: InputMaybe<Algorithm>;
  /** The JSON Web Key. */
  jwk?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The key identifier. */
  kid?: InputMaybe<Scalars['String']['input']>;
};

/** Update Input */
export type UpdateTrustIssuerKeyX509CertInput = {
  /** The not after date. */
  notAfter?: InputMaybe<Scalars['DateTime']['input']>;
  /** The not before date. */
  notBefore?: InputMaybe<Scalars['DateTime']['input']>;
  /** Whether the certificate is revoked. */
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  /** The revocation time. */
  revokedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The UUID of the trust anchor X.509 root certificate. */
  trustAnchorX509RootCertificateUuid?: InputMaybe<Scalars['UUID']['input']>;
  /** The X.509 certificate chain. */
  x5c?: InputMaybe<Array<Scalars['NonEmpty']['input']>>;
};

/** Update Input */
export type UpdateTrustLocaleInput = {
  /** The localized description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The locale */
  locale?: InputMaybe<Scalars['Locale']['input']>;
  /** The localized name */
  name?: InputMaybe<Scalars['NonEmpty']['input']>;
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

/** Version lifecycle status for versioned entities (RFC 0012). */
export enum VersionStatus {
  Deprecated = 'DEPRECATED',
  Discarded = 'DISCARDED',
  Draft = 'DRAFT',
  Live = 'LIVE',
  Superseded = 'SUPERSEDED'
}
