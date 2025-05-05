/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  JSON: { input: any; output: any; }
  Void: { input: any; output: any; }
  join__FieldSet: { input: any; output: any; }
  link__Import: { input: any; output: any; }
};

/** docs: hide */
export enum AchievementId {
  DailyLeaderboardRank_1Badge = 'DAILY_LEADERBOARD_RANK_1_BADGE',
  DailyLeaderboardTop_1PercentBadge = 'DAILY_LEADERBOARD_TOP_1_PERCENT_BADGE',
  DailyLeaderboardTop_20PercentBadge = 'DAILY_LEADERBOARD_TOP_20_PERCENT_BADGE',
  DailyLeaderboardTop_50PercentBadge = 'DAILY_LEADERBOARD_TOP_50_PERCENT_BADGE',
  DefinedEmployeeBadge = 'DEFINED_EMPLOYEE_BADGE',
  DungHolderBadgeT1 = 'DUNG_HOLDER_BADGE_T1',
  DungHolderBadgeT2 = 'DUNG_HOLDER_BADGE_T2',
  DungHolderBadgeT3 = 'DUNG_HOLDER_BADGE_T3',
  Pnl_10Achievement = 'PNL_10_ACHIEVEMENT',
  Pnl_100Achievement = 'PNL_100_ACHIEVEMENT',
  Pnl_1000Achievement = 'PNL_1000_ACHIEVEMENT',
  Pnl_10000Achievement = 'PNL_10000_ACHIEVEMENT',
  Pnl_100000Achievement = 'PNL_100000_ACHIEVEMENT',
  PnlRepeatable_100AchievementV2 = 'PNL_REPEATABLE_100_ACHIEVEMENT_V2',
  RevenueShareT1Badge = 'REVENUE_SHARE_T1_BADGE',
  RevenueShareT2Badge = 'REVENUE_SHARE_T2_BADGE',
  RevenueShareT3Badge = 'REVENUE_SHARE_T3_BADGE',
  TradeVolume_10Achievement = 'TRADE_VOLUME_10_ACHIEVEMENT',
  TradeVolume_100Achievement = 'TRADE_VOLUME_100_ACHIEVEMENT',
  TradeVolume_1000Achievement = 'TRADE_VOLUME_1000_ACHIEVEMENT',
  TradeVolume_10000Achievement = 'TRADE_VOLUME_10000_ACHIEVEMENT',
  TradeVolume_100000Achievement = 'TRADE_VOLUME_100000_ACHIEVEMENT',
  UniqueNetworks_1Achievement = 'UNIQUE_NETWORKS_1_ACHIEVEMENT',
  UniqueNetworks_3Achievement = 'UNIQUE_NETWORKS_3_ACHIEVEMENT',
  UniqueNetworks_5Achievement = 'UNIQUE_NETWORKS_5_ACHIEVEMENT'
}

/** Response returned by `onEventsCreated`. */
export type AddEventsOutput = {
  __typename?: 'AddEventsOutput';
  /** The contract address of the pair. */
  address: Scalars['String']['output'];
  /** A list of transactions for the token. */
  events: Array<Maybe<Event>>;
  /** The ID of the event (`address`:`networkId`). For example, `0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2:1`. */
  id: Scalars['String']['output'];
  /** The network ID that the token is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The token of interest within the pair. Can be `token0` or `token1`. */
  quoteToken?: Maybe<QuoteToken>;
};

/** Response returned by `onNftEventsCreated`. */
export type AddNftEventsOutput = {
  __typename?: 'AddNftEventsOutput';
  /** The contract address of the NFT collection. */
  address: Scalars['String']['output'];
  /** A list of NFT transactions streaming real-time. */
  events: Array<Maybe<NftEvent>>;
  /** The id of the collection (`address`:`networkId`). */
  id: Scalars['String']['output'];
  /** The network ID the collection is deployed on. */
  networkId: Scalars['Int']['output'];
};

/** Response returned by `onNftPoolEventsCreated`. */
export type AddNftPoolEventsOutput = {
  __typename?: 'AddNftPoolEventsOutput';
  collectionAddress: Scalars['String']['output'];
  events: Array<Maybe<NftPoolEvent>>;
  exchangeAddress: Scalars['String']['output'];
  id: Scalars['String']['output'];
  networkId: Scalars['Int']['output'];
  poolAddress: Scalars['String']['output'];
};

/** Response returned by `onTokenEventsCreated`. */
export type AddTokenEventsOutput = {
  __typename?: 'AddTokenEventsOutput';
  /** A list of transactions for the token. */
  events: Array<Event>;
  /** The ID of the event (`address`:`networkId`). For example, `0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2:1`. */
  id: Scalars['String']['output'];
};

/** Response returned by `onTokenLifecycleEventsCreated`. */
export type AddTokenLifecycleEventsOutput = {
  __typename?: 'AddTokenLifecycleEventsOutput';
  events: Array<TokenLifecycleEvent>;
  id: Scalars['String']['output'];
};

export type AddTrackedWalletEventsOutput = {
  __typename?: 'AddTrackedWalletEventsOutput';
  events: Array<TrackedWalletEvent>;
  userId: Scalars['String']['output'];
};

/** Response returned by `onUnconfirmedEventsCreated`. */
export type AddUnconfirmedEventsOutput = {
  __typename?: 'AddUnconfirmedEventsOutput';
  /** The contract address of the pair. */
  address: Scalars['String']['output'];
  /** A list of transactions for the token. */
  events: Array<Maybe<UnconfirmedEvent>>;
  /** The ID of the event (`address`:`networkId`). For example, `0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2:1`. */
  id: Scalars['String']['output'];
  /** The network ID that the token is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The token of interest within the pair. Can be `token0` or `token1`. */
  quoteToken?: Maybe<QuoteToken>;
};

export type AddUserAchievementInput = {
  achievementId: AchievementId;
  pointsSeason: PointsSeason;
  quantity: Scalars['Int']['input'];
  userId: Scalars['String']['input'];
};

export enum AddressType {
  Evm = 'EVM',
  Sol = 'SOL',
  Tron = 'TRON'
}

/** The recurrence of the webhook. Can be `INDEFINITE` or `ONCE`. */
export enum AlertRecurrence {
  Indefinite = 'INDEFINITE',
  Once = 'ONCE'
}

export type ApiToken = {
  __typename?: 'ApiToken';
  /** ISO time string for the expiry of the token */
  expiresTimeString: Scalars['String']['output'];
  /** Unique identifier for the token */
  id: Scalars['String']['output'];
  /** Approximate number of remaining resolutions before this token is rate limited */
  remaining?: Maybe<Scalars['String']['output']>;
  /** Number of root fields this api token is allowed to resolve before it's rate limited */
  requestLimit: Scalars['String']['output'];
  /** JWT to be passed into the Authorization header for API requests */
  token: Scalars['String']['output'];
};

export type AptosNetworkConfig = NetworkConfigBase & {
  __typename?: 'AptosNetworkConfig';
  baseTokenAddress: Scalars['String']['output'];
  baseTokenSymbol: Scalars['String']['output'];
  color?: Maybe<Scalars['String']['output']>;
  defaultPairAddress: Scalars['String']['output'];
  defaultPairQuoteToken: QuoteToken;
  enabled: Scalars['Boolean']['output'];
  explorer: ExplorerConfig;
  id: Scalars['ID']['output'];
  mainnet: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  networkIconUrl: Scalars['String']['output'];
  networkId: Scalars['Int']['output'];
  networkName: Scalars['String']['output'];
  networkShortName: Scalars['String']['output'];
  networkType: NetworkConfigType;
  newTokensEnabled?: Maybe<Scalars['Boolean']['output']>;
  pricing: Array<NetworkPriceConfig>;
  rpcs: Array<AptosRpcConfig>;
  stableCoinAddresses?: Maybe<Array<Scalars['String']['output']>>;
  wrappedBaseTokenSymbol: Scalars['String']['output'];
};

/** docs: hide */
export type AptosRpcConfig = {
  __typename?: 'AptosRpcConfig';
  apiKey?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

/** docs: hide */
export type AptosRpcConfigInput = {
  apiKey?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

/** docs: hide */
export type AuthenticationResponse = {
  __typename?: 'AuthenticationResponse';
  AccessToken?: Maybe<Scalars['String']['output']>;
  ExpiresIn?: Maybe<Scalars['Int']['output']>;
  IdToken?: Maybe<Scalars['String']['output']>;
  NewDeviceMetadata?: Maybe<NewDeviceMetadataType>;
  RefreshToken?: Maybe<Scalars['String']['output']>;
  TokenType?: Maybe<Scalars['String']['output']>;
};

/** docs: hide */
export type BackfillHoldersInput = {
  networkId: Scalars['Int']['input'];
  tokenAddress: Scalars['String']['input'];
};

/** docs: hide */
export type BackfillHoldersResponse = {
  __typename?: 'BackfillHoldersResponse';
  message: Scalars['String']['output'];
  status: BackfillHoldersStatus;
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** docs: hide */
export enum BackfillHoldersStatus {
  Completed = 'COMPLETED',
  Error = 'ERROR',
  Running = 'RUNNING'
}

/** docs: hide */
export type BackfillWalletInput = {
  networkId: Scalars['Int']['input'];
  walletAddress: Scalars['String']['input'];
};

/** docs: hide */
export type BackfillWalletResponse = {
  __typename?: 'BackfillWalletResponse';
  balances: Array<Balance>;
};

/** Wallet balance of a token. */
export type Balance = {
  __typename?: 'Balance';
  /** The wallet address. */
  address: Scalars['String']['output'];
  /** The balance held by the wallet. */
  balance: Scalars['String']['output'];
  /** The time that this address first held a token. */
  firstHeldTimestamp?: Maybe<Scalars['Int']['output']>;
  /** The wallet network. */
  networkId: Scalars['Int']['output'];
  /** The balance held by the wallet, adjusted by the number of decimals in the token. */
  shiftedBalance: Scalars['Float']['output'];
  /** The contract address of the token. */
  tokenAddress: Scalars['String']['output'];
  /** The ID of the token (`tokenAddress:networkId`). */
  tokenId: Scalars['String']['output'];
  /** The ID of the wallet (`walletAddress:networkId`). */
  walletId: Scalars['String']['output'];
};

/** docs: hide */
export type BalanceInput = {
  /** The wallet's token balance. */
  balance: Scalars['String']['input'];
  /** The ID of the token (`tokenAddress:networkId`). */
  tokenId: Scalars['String']['input'];
  /** The ID of the wallet (`walletAddress:networkId`) */
  walletId: Scalars['String']['input'];
};

export type BalancesInput = {
  /** A cursor for use in pagination. */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Optional token specifically request the balance for.
   * @deprecated Use tokens list instead
   */
  filterToken?: InputMaybe<Scalars['String']['input']>;
  /** If set to true, native tokens in the response, they will have the id: native:<networkId> */
  includeNative?: InputMaybe<Scalars['Boolean']['input']>;
  /** The maximum number of holdings to return. */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** The network IDs to filter by. */
  networks?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** The token IDs (`address:networkId`) or addresses to request the balance for. Only applied when using `walletAddress` and `networks` (not `walletId`). */
  tokens?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The wallet address to filter by. */
  walletAddress?: InputMaybe<Scalars['String']['input']>;
  /**
   * The ID of the wallet (`walletAddress:networkId`).
   * @deprecated Use walletAddress and networkId instead
   */
  walletId?: InputMaybe<Scalars['String']['input']>;
};

export type BalancesResponse = {
  __typename?: 'BalancesResponse';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The list of token balances that a wallet has. */
  items: Array<Balance>;
};

/** docs: hide */
export type BanDetails = {
  __typename?: 'BanDetails';
  bannedAt: Scalars['Int']['output'];
  bannedBy: Scalars['String']['output'];
  bannedReason?: Maybe<Scalars['String']['output']>;
};

/** docs: hide */
export type BanUserInput = {
  bannedReason?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

/** Bar chart data to track price changes over time. */
export type BarsResponse = {
  __typename?: 'BarsResponse';
  /** The buy volume in USD */
  buyVolume: Array<Maybe<Scalars['String']['output']>>;
  /** The number of unique buyers */
  buyers: Array<Maybe<Scalars['Int']['output']>>;
  /** The number of buys */
  buys: Array<Maybe<Scalars['Int']['output']>>;
  /** The closing price. */
  c: Array<Maybe<Scalars['Float']['output']>>;
  /** The high price. */
  h: Array<Maybe<Scalars['Float']['output']>>;
  /** The low price. */
  l: Array<Maybe<Scalars['Float']['output']>>;
  /** Liquidity in USD */
  liquidity: Array<Maybe<Scalars['String']['output']>>;
  /** The opening price. */
  o: Array<Maybe<Scalars['Float']['output']>>;
  /** The pair that is being returned */
  pair: Pair;
  /** The status code for the batch: `ok` for successful data retrieval and `no_data` for empty responses signaling the end of server data. */
  s: Scalars['String']['output'];
  /** The sell volume in USD */
  sellVolume: Array<Maybe<Scalars['String']['output']>>;
  /** The number of unique sellers */
  sellers: Array<Maybe<Scalars['Int']['output']>>;
  /** The number of sells */
  sells: Array<Maybe<Scalars['Int']['output']>>;
  /** The timestamp for the bar. */
  t: Array<Scalars['Int']['output']>;
  /** The number of traders */
  traders: Array<Maybe<Scalars['Int']['output']>>;
  /** The number of transactions */
  transactions: Array<Maybe<Scalars['Int']['output']>>;
  /**
   * The volume.
   * @deprecated Use volume field instead
   */
  v: Array<Maybe<Scalars['Int']['output']>>;
  /** The volume with higher precision. */
  volume?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The volume in the native token for the network */
  volumeNativeToken?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** docs: hide */
export type BetaUser = {
  __typename?: 'BetaUser';
  id: Scalars['String']['output'];
  roles?: Maybe<Array<Scalars['String']['output']>>;
  walletAddress?: Maybe<Scalars['String']['output']>;
};

/** docs: hide */
export type BetaUsersResponse = {
  __typename?: 'BetaUsersResponse';
  cursor?: Maybe<Scalars['String']['output']>;
  items: Array<BetaUser>;
};

/** The mathematical formula that defines how the prices of NFTs change after each buy or sell within a pool. */
export enum BondingCurveType {
  Exponential = 'EXPONENTIAL',
  Gda = 'GDA',
  Linear = 'LINEAR',
  Xyk = 'XYK'
}

/** docs: hide */
export type BridgeQuote = {
  __typename?: 'BridgeQuote';
  requestId?: Maybe<Scalars['String']['output']>;
  route: Route;
  totalFees?: Maybe<Scalars['String']['output']>;
};

/** docs: hide */
export type BridgeQuoteParams = {
  __typename?: 'BridgeQuoteParams';
  amount: Scalars['String']['output'];
  fromAddress: Scalars['String']['output'];
  fromNetwork: Scalars['Int']['output'];
  fromToken: Scalars['String']['output'];
  slippage?: Maybe<Scalars['Float']['output']>;
  toAddress?: Maybe<Scalars['String']['output']>;
  toNetwork: Scalars['Int']['output'];
  toToken: Scalars['String']['output'];
};

/** docs: hide */
export type BridgeRequestStatus = {
  __typename?: 'BridgeRequestStatus';
  axelarTransactionUrl?: Maybe<Scalars['String']['output']>;
  squidTransactionStatus?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** Event data for a token burn event. */
export type BurnEventData = {
  __typename?: 'BurnEventData';
  /** The amount of `token0` removed from the pair. */
  amount0?: Maybe<Scalars['String']['output']>;
  /** The amount of `token0` removed from the pair, adjusted by the number of decimals in the token. For example, if `amount0` is in WEI, `amount0Shifted` will be in ETH. */
  amount0Shifted?: Maybe<Scalars['String']['output']>;
  /** The amount of `token1` removed from the pair. */
  amount1?: Maybe<Scalars['String']['output']>;
  /** The amount of `token1` removed from the pair, adjusted by the number of decimals in the token. For example, USDC `amount1Shifted` will be by 6 decimals. */
  amount1Shifted?: Maybe<Scalars['String']['output']>;
  /** The lower tick boundary of the position. Only applicable for UniswapV3 events. */
  tickLower?: Maybe<Scalars['String']['output']>;
  /** The upper tick boundary of the position. Only applicable for UniswapV3 events. */
  tickUpper?: Maybe<Scalars['String']['output']>;
  /** The type of token event, `Burn`. */
  type: EventType;
};

/** docs: hide */
export type ChartDrawingsRecord = {
  __typename?: 'ChartDrawingsRecord';
  chartId: Scalars['String']['output'];
  layoutId: Scalars['String']['output'];
  state: Scalars['String']['output'];
  timestamp?: Maybe<Scalars['Int']['output']>;
  userId: Scalars['String']['output'];
};

/** Input options for the chart image. */
export type ChartImageOptions = {
  /** The expiry time of the image in seconds. Max: 172800 (2 days). Default: 900 (15 minutes). */
  expirationSeconds?: InputMaybe<Scalars['Int']['input']>;
  /** The height of the image in pixels. Max: 1200. Default: 450. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** The width of the image in pixels. Max: 1200. Default: 800. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** Input type of `chartUrls`. */
export type ChartInput = {
  /** The input required to fetch a pair chart. */
  pair?: InputMaybe<PairChartInput>;
};

/** docs: hide */
export type ChartLayout = {
  __typename?: 'ChartLayout';
  content: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  resolution: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
};

/** docs: hide */
export type ChartLayoutInput = {
  content: Scalars['String']['input'];
  name: Scalars['String']['input'];
  resolution: Scalars['String']['input'];
  symbol: Scalars['String']['input'];
};

/** The color theme of the chart. */
export enum ChartTheme {
  Dark = 'DARK',
  Light = 'LIGHT'
}

/** The chart url. */
export type ChartUrl = {
  __typename?: 'ChartUrl';
  /** The chart url. */
  url: Scalars['String']['output'];
};

/** The response type for a chart url query. */
export type ChartUrlsResponse = {
  __typename?: 'ChartUrlsResponse';
  /** The pair chart url. */
  pair: ChartUrl;
};

/** docs: hide */
export type CheckTradeableInput = {
  exchangeAddress: Scalars['String']['input'];
  inputTokenAddress: Scalars['String']['input'];
  networkId: Scalars['Int']['input'];
  outputTokenAddress: Scalars['String']['input'];
  poolAddress?: InputMaybe<Scalars['String']['input']>;
};

/** docs: hide */
export type CheckTradeableResponse = {
  __typename?: 'CheckTradeableResponse';
  reason?: Maybe<Scalars['String']['output']>;
  tradeable: Scalars['Boolean']['output'];
};

/** Community gathered proposals for an asset. */
export type CommunityNote = {
  __typename?: 'CommunityNote';
  /** The contract address of the contract. */
  address: Scalars['String']['output'];
  contractType: ContractType;
  currentContract?: Maybe<EnhancedContract>;
  /** The contract after the community note was applied. */
  currentData?: Maybe<Scalars['JSON']['output']>;
  /** The ID of the contract (`address:id`). */
  id: Scalars['String']['output'];
  /** The unix timestamp of when the community note was moderated. */
  moderatedAt?: Maybe<Scalars['Int']['output']>;
  /** The network ID the contract is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The contract before the community note was applied. */
  previousData?: Maybe<Scalars['JSON']['output']>;
  /** The data of the community note. */
  proposalData: Scalars['JSON']['output'];
  /** The ordinal number of the community note. */
  proposalNum: Scalars['Int']['output'];
  /** The type of the community note. */
  proposalType: CommunityNoteType;
  /** The unix timestamp of when the community note was created. */
  proposedAt: Scalars['Int']['output'];
  sortKey: Scalars['String']['output'];
  /** The status of the community note. */
  status: ContractProposalStatus;
};

/** Type of the community gathered note. */
export enum CommunityNoteType {
  /** An contract attribute change. */
  Attribute = 'ATTRIBUTE',
  /** A logo change. */
  Logo = 'LOGO',
  /** A scam report. */
  Scam = 'SCAM'
}

/** Filters for community notes. */
export type CommunityNotesFilter = {
  /** The contract address of the contract. */
  address?: InputMaybe<Scalars['String']['input']>;
  contractType?: InputMaybe<ContractType>;
  /** The network ID the contract is deployed on. */
  networkId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** The type of the proposal. */
  proposalType?: InputMaybe<CommunityNoteType>;
};

/** Input type of `getCommunityNotes`. */
export type CommunityNotesInput = {
  /** The cursor to use for pagination. */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** A set of filters to apply */
  filter?: InputMaybe<CommunityNotesFilter>;
  /** The maximum number of community notes to return. */
  limit?: InputMaybe<Scalars['Int']['input']>;
};

/** Community notes data */
export type CommunityNotesResponse = {
  __typename?: 'CommunityNotesResponse';
  /** The number of community notes returned. */
  count: Scalars['Int']['output'];
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The list of community notes matching the filter parameters. */
  items: Array<CommunityNote>;
};

/** Comparison operators. */
export type ComparisonOperator = {
  __typename?: 'ComparisonOperator';
  /** Equal to. */
  eq?: Maybe<Scalars['String']['output']>;
  /** Greater than. */
  gt?: Maybe<Scalars['String']['output']>;
  /** Greater than or equal to. */
  gte?: Maybe<Scalars['String']['output']>;
  /** Less than. */
  lt?: Maybe<Scalars['String']['output']>;
  /** Less than or equal to. */
  lte?: Maybe<Scalars['String']['output']>;
};

/** Input for comparison operators. */
export type ComparisonOperatorInput = {
  /** Equal to. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Greater than. */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal. */
  gte?: InputMaybe<Scalars['String']['input']>;
  /** Less than. */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal. */
  lte?: InputMaybe<Scalars['String']['input']>;
};

/** docs: hide */
export type ConstantPriceConfig = {
  __typename?: 'ConstantPriceConfig';
  tokenAddress: Scalars['String']['output'];
  type: NetworkPriceType;
  value: Scalars['String']['output'];
};

/** Metadata for a contract label. */
export type ContractLabel = {
  __typename?: 'ContractLabel';
  /** The unix timestamp for when the contract label was created. */
  createdAt: Scalars['Int']['output'];
  /** The contract label sub-type. Can be `Generic`, `HighTax`, `HoneyPot` or `Imitator`. */
  subType: ContractLabelSubType;
  /** The contract label type. Can be `Scam`. */
  type: ContractLabelType;
};

/** The contract label sub-type. */
export enum ContractLabelSubType {
  Generic = 'Generic',
  HighTax = 'HighTax',
  HoneyPot = 'HoneyPot',
  Imitator = 'Imitator'
}

/** The contract label type. */
export enum ContractLabelType {
  Scam = 'Scam',
  Verified = 'Verified'
}

/** docs: hide */
export type ContractProposalStats = {
  __typename?: 'ContractProposalStats';
  acceptanceRate?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  numAccepted?: Maybe<Scalars['Int']['output']>;
  numRejected?: Maybe<Scalars['Int']['output']>;
  rejectionRate?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  totalProposals?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

/** docs: hide */
export enum ContractProposalStatsSortColumn {
  NumAccepted = 'numAccepted',
  NumRejected = 'numRejected',
  Score = 'score'
}

/** docs: hide */
export enum ContractProposalStatus {
  Accepted = 'ACCEPTED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  Reverted = 'REVERTED'
}

/** docs: hide */
export enum ContractProposalType {
  Field = 'FIELD',
  Label = 'LABEL',
  Logo = 'LOGO'
}

export enum ContractType {
  Nft = 'NFT',
  Token = 'TOKEN'
}

export enum CostBasisMethod {
  Fifo = 'FIFO'
}

export type CreateApiTokensInput = {
  /** Number of tokens to create, default is 1 */
  count?: InputMaybe<Scalars['Int']['input']>;
  /** Number of seconds until the token expires, defaults to 1 hour (3600) */
  expiresIn?: InputMaybe<Scalars['Int']['input']>;
  /** Number of requests allowed per token, represented as a string, default is 5000 */
  requestLimit?: InputMaybe<Scalars['String']['input']>;
};

/** docs: hide */
export type CreateAptosNetworkConfigInput = {
  rpcs: Array<AptosRpcConfigInput>;
};

/** docs: hide */
export type CreateConstantPriceConfigInput = {
  tokenAddress: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

/** docs: hide */
export type CreateDecodingInput = {
  abi: Scalars['JSON']['input'];
  contractAddress: Scalars['String']['input'];
  contractName: Scalars['String']['input'];
  endBlock?: InputMaybe<Scalars['Int']['input']>;
  networkId: Scalars['Int']['input'];
  projectName: Scalars['String']['input'];
  startBlock?: InputMaybe<Scalars['Int']['input']>;
};

/** docs: hide */
export type CreateEvmNetworkConfigInput = {
  evmConfig: EvmConfigInput;
  evmConstants: EvmConstantsInput;
  rpcs: Array<EvmRpcConfigInput>;
};

/** docs: hide */
export type CreateExternalPriceConfigInput = {
  referenceToken: ExternalPrices;
  tokenAddress: Scalars['String']['input'];
};

/** docs: hide */
export type CreateLimitOrderInput = {
  creationContext?: InputMaybe<CreationContext>;
  deadline?: InputMaybe<Scalars['Int']['input']>;
  direction: OrderDirection;
  exchangeAddress?: InputMaybe<Scalars['String']['input']>;
  exitStrategyId?: InputMaybe<Scalars['Int']['input']>;
  gasPrice?: InputMaybe<GasPrice>;
  inputTokenAddress: Scalars['String']['input'];
  inputTokenAmount: Scalars['String']['input'];
  limitMaximumTokenLiquidityGuard?: InputMaybe<Scalars['String']['input']>;
  limitMaximumTokenMarketCapGuard?: InputMaybe<Scalars['String']['input']>;
  limitMaximumTokenPriceGuard?: InputMaybe<Scalars['String']['input']>;
  limitMinimumTokenLiquidityGuard?: InputMaybe<Scalars['String']['input']>;
  limitMinimumTokenMarketCapGuard?: InputMaybe<Scalars['String']['input']>;
  limitMinimumTokenPriceGuard?: InputMaybe<Scalars['String']['input']>;
  limitTriggerDirection: LimitTriggerDirection;
  limitTriggerType: LimitTriggerType;
  limitTriggerValue: Scalars['String']['input'];
  networkId: Scalars['Int']['input'];
  outputAmountMax?: InputMaybe<Scalars['String']['input']>;
  outputAmountMin: Scalars['String']['input'];
  outputTokenAddress: Scalars['String']['input'];
  poolAddress?: InputMaybe<Scalars['String']['input']>;
  sendWithPrivateRpc?: InputMaybe<Scalars['Boolean']['input']>;
  simulate?: InputMaybe<Scalars['Boolean']['input']>;
  slippage?: InputMaybe<Scalars['Float']['input']>;
  userId: Scalars['Int']['input'];
  walletIds: Array<Scalars['Int']['input']>;
};

/** docs: hide */
export type CreateMappedPriceConfigInput = {
  referenceNetworkId: Scalars['Int']['input'];
  referenceTokenAddress: Scalars['String']['input'];
  tokenAddress: Scalars['String']['input'];
};

/** docs: hide */
export type CreateMarketOrderInput = {
  creationContext?: InputMaybe<CreationContext>;
  customGas?: InputMaybe<Scalars['String']['input']>;
  direction: OrderDirection;
  exchangeAddress?: InputMaybe<Scalars['String']['input']>;
  exitStrategyId?: InputMaybe<Scalars['Int']['input']>;
  gasPrice?: InputMaybe<GasPrice>;
  inputTokenAddress: Scalars['String']['input'];
  inputTokenAmount: Scalars['String']['input'];
  networkId: Scalars['Int']['input'];
  outputAmountMax?: InputMaybe<Scalars['String']['input']>;
  outputAmountMin: Scalars['String']['input'];
  outputTokenAddress: Scalars['String']['input'];
  poolAddress?: InputMaybe<Scalars['String']['input']>;
  sendWithPrivateRpc?: InputMaybe<Scalars['Boolean']['input']>;
  simulate?: InputMaybe<Scalars['Boolean']['input']>;
  slippage?: InputMaybe<Scalars['Float']['input']>;
  userId: Scalars['Int']['input'];
  walletIds: Array<Scalars['Int']['input']>;
};

/** docs: hide */
export type CreateNetworkConfigInput = {
  aptosInput?: InputMaybe<CreateAptosNetworkConfigInput>;
  baseTokenAddress: Scalars['String']['input'];
  baseTokenSymbol: Scalars['String']['input'];
  color: Scalars['String']['input'];
  defaultPairAddress: Scalars['String']['input'];
  defaultPairQuoteToken: QuoteToken;
  enabled: Scalars['Boolean']['input'];
  evmInput?: InputMaybe<CreateEvmNetworkConfigInput>;
  explorer: ExplorerConfigInput;
  mainnet: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  networkIconUrl: Scalars['String']['input'];
  networkId: Scalars['Int']['input'];
  networkName: Scalars['String']['input'];
  networkShortName: Scalars['String']['input'];
  networkType: NetworkConfigType;
  newTokensEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  pricing?: InputMaybe<Array<InputMaybe<CreatePriceConfigInput>>>;
  solanaInput?: InputMaybe<CreateSolanaNetworkConfigInput>;
  stableCoinAddresses?: InputMaybe<Array<Scalars['String']['input']>>;
  stablecoinAddresses?: InputMaybe<Array<Scalars['String']['input']>>;
  starknetInput?: InputMaybe<CreateStarknetNetworkConfigInput>;
  suiInput?: InputMaybe<CreateSuiNetworkConfigInput>;
  wrappedBaseTokenSymbol: Scalars['String']['input'];
};

/** Input for creating an NFT event webhook. */
export type CreateNftEventWebhookArgs = {
  /** The recurrence of the webhook. Can be `INDEFINITE` or `ONCE`. */
  alertRecurrence: AlertRecurrence;
  /** An optional bucket ID (max 64 characters). Can be used to query for subgroups of webhooks (useful if you have a large number of webhooks). */
  bucketId?: InputMaybe<Scalars['String']['input']>;
  /** An optional bucket sort key (max 64 characters). Can be used to query for subgroups of webhooks (useful if you have a large number of webhooks). */
  bucketSortkey?: InputMaybe<Scalars['String']['input']>;
  /** The url to which the webhook message should be sent. */
  callbackUrl: Scalars['String']['input'];
  /** The conditions which must be met in order for the webhook to send a message. */
  conditions: NftEventWebhookConditionInput;
  /** If enabled, new webhooks won't be created if a webhook with the same parameters already exists. If callbackUrl, conditions, publishingType, and alertRecurrence all match, then we return the existing webhook. */
  deduplicate?: InputMaybe<Scalars['Boolean']['input']>;
  /** A webhook group ID (max 64 characters). Can be used to group webhooks so that their messages are kept in order as a group rather than by individual webhook. */
  groupId?: InputMaybe<Scalars['String']['input']>;
  /** The name of the webhook (max 128 characters). */
  name: Scalars['String']['input'];
  /** The type of publishing for the webhook. If not set, it defaults to `SINGLE`. */
  publishingType?: InputMaybe<PublishingType>;
  /** The settings for retrying failed webhook messages. */
  retrySettings?: InputMaybe<RetrySettingsInput>;
  /** A string value to hash along with `deduplicationId` using SHA-256. Included in the webhook message for added security. */
  securityToken: Scalars['String']['input'];
};

/** Input for creating NFT event webhooks. */
export type CreateNftEventWebhooksInput = {
  /** A list of NFT event webhooks to create. */
  webhooks: Array<CreateNftEventWebhookArgs>;
};

/** docs: hide */
export type CreateNotableWalletInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  walletAddress: Scalars['String']['input'];
};

/** docs: hide */
export type CreatePriceConfigInput = {
  constantPriceInput?: InputMaybe<CreateConstantPriceConfigInput>;
  externalPriceInput?: InputMaybe<CreateExternalPriceConfigInput>;
  mappedPriceInput?: InputMaybe<CreateMappedPriceConfigInput>;
};

/** Input for creating a price webhook. */
export type CreatePriceWebhookArgs = {
  /** The recurrence of the webhook. Can be `INDEFINITE` or `ONCE`. */
  alertRecurrence: AlertRecurrence;
  /** An optional bucket ID (max 64 characters). Can be used to query for subgroups of webhooks (useful if you have a large number of webhooks). */
  bucketId?: InputMaybe<Scalars['String']['input']>;
  /** An optional bucket sort key (max 64 characters). Can be used to query for subgroups of webhooks (useful if you have a large number of webhooks). */
  bucketSortkey?: InputMaybe<Scalars['String']['input']>;
  /** The url to which the webhook message should be sent. */
  callbackUrl: Scalars['String']['input'];
  /** The conditions which must be met in order for the webhook to send a message. */
  conditions: PriceEventWebhookConditionInput;
  /** If enabled, new webhooks won't be created if a webhook with the same parameters already exists. If callbackUrl, conditions, publishingType, and alertRecurrence all match, then we return the existing webhook. */
  deduplicate?: InputMaybe<Scalars['Boolean']['input']>;
  /** A webhook group ID (max 64 characters). Can be used to group webhooks so that their messages are kept in order as a group rather than by individual webhook. */
  groupId?: InputMaybe<Scalars['String']['input']>;
  /** The name of the webhook (max 128 characters). */
  name: Scalars['String']['input'];
  /** The type of publishing for the webhook. If not set, it defaults to `SINGLE`. */
  publishingType?: InputMaybe<PublishingType>;
  /** The settings for retrying failed webhook messages. */
  retrySettings?: InputMaybe<RetrySettingsInput>;
  /** A string value to hash along with `deduplicationId` using SHA-256. Included in the webhook message for added security. */
  securityToken: Scalars['String']['input'];
};

/** Input for creating price webhooks. */
export type CreatePriceWebhooksInput = {
  /** A list of price webhooks to create. */
  webhooks: Array<CreatePriceWebhookArgs>;
};

/** docs: hide */
export type CreateProposalResponse = {
  __typename?: 'CreateProposalResponse';
  status?: Maybe<ContractProposalStatus>;
};

/** docs: hide */
export type CreateProposalsInput = {
  address: Scalars['String']['input'];
  contractType: ContractType;
  networkId: Scalars['Int']['input'];
  proposalData: Scalars['JSON']['input'];
  proposalType: ContractProposalType;
};

/** Input for creating a Raw Transaction webhook. */
export type CreateRawTransactionWebhookArgs = {
  /** The recurrence of the webhook. Can be `INDEFINITE` or `ONCE`. */
  alertRecurrence: AlertRecurrence;
  /** An optional bucket ID (max 64 characters). Can be used to query for subgroups of webhooks (useful if you have a large number of webhooks). */
  bucketId?: InputMaybe<Scalars['String']['input']>;
  /** An optional bucket sort key (max 64 characters). Can be used to query for subgroups of webhooks (useful if you have a large number of webhooks). */
  bucketSortkey?: InputMaybe<Scalars['String']['input']>;
  /** The url to which the webhook message should be sent. */
  callbackUrl: Scalars['String']['input'];
  /** The conditions which must be met in order for the webhook to send a message. */
  conditions: RawTransactionWebhookConditionInput;
  /** If enabled, new webhooks won't be created if a webhook with the same parameters already exists. If callbackUrl, conditions, publishingType, and alertRecurrence all match, then we return the existing webhook. */
  deduplicate?: InputMaybe<Scalars['Boolean']['input']>;
  /** A webhook group ID (max 64 characters). Can be used to group webhooks so that their messages are kept in order as a group rather than by individual webhook. */
  groupId?: InputMaybe<Scalars['String']['input']>;
  /** The name of the webhook (max 128 characters). */
  name: Scalars['String']['input'];
  /** The type of publishing for the webhook. If not set, it defaults to `SINGLE`. */
  publishingType?: InputMaybe<PublishingType>;
  /** The settings for retrying failed webhook messages. */
  retrySettings?: InputMaybe<RetrySettingsInput>;
  /** A string value to hash along with `deduplicationId` using SHA-256. Included in the webhook message for added security. */
  securityToken: Scalars['String']['input'];
};

/** Input for creating Raw Transaction webhooks. */
export type CreateRawTransactionWebhooksInput = {
  /** A list of Raw Transaction webhooks to create. */
  webhooks: Array<CreateRawTransactionWebhookArgs>;
};

/** docs: hide */
export type CreateSolanaNetworkConfigInput = {
  rpcs: Array<SolanaRpcConfigInput>;
};

/** docs: hide */
export type CreateStarknetNetworkConfigInput = {
  rpcs: Array<StarknetRpcConfigInput>;
};

/** docs: hide */
export type CreateStrategyInput = {
  name: Scalars['String']['input'];
  orderParams: Array<CreateStrategyOrderParamInput>;
  userId: Scalars['Int']['input'];
};

/** docs: hide */
export type CreateStrategyOrderParamInput = {
  amountRatio: Scalars['Float']['input'];
  triggerDirection: LimitTriggerDirection;
  triggerPercentChange: Scalars['Float']['input'];
};

/** docs: hide */
export type CreateSuiNetworkConfigInput = {
  rpcs: Array<SuiRpcConfigInput>;
};

/** Input for creating a token pair event webhook. */
export type CreateTokenPairEventWebhookArgs = {
  /** The recurrence of the webhook. Can be `INDEFINITE` or `ONCE`. */
  alertRecurrence: AlertRecurrence;
  /** An optional bucket ID (max 64 characters). Can be used to query for subgroups of webhooks (useful if you have a large number of webhooks). */
  bucketId?: InputMaybe<Scalars['String']['input']>;
  /** An optional bucket sort key (max 64 characters). Can be used to query for subgroups of webhooks (useful if you have a large number of webhooks). */
  bucketSortkey?: InputMaybe<Scalars['String']['input']>;
  /** The url to which the webhook message should be sent. */
  callbackUrl: Scalars['String']['input'];
  /** The conditions which must be met in order for the webhook to send a message. */
  conditions: TokenPairEventWebhookConditionInput;
  /** If enabled, new webhooks won't be created if a webhook with the same parameters already exists. If callbackUrl, conditions, publishingType, and alertRecurrence all match, then we return the existing webhook. */
  deduplicate?: InputMaybe<Scalars['Boolean']['input']>;
  /** A webhook group ID (max 64 characters). Can be used to group webhooks so that their messages are kept in order as a group rather than by individual webhook. */
  groupId?: InputMaybe<Scalars['String']['input']>;
  /** The name of the webhook (max 128 characters). */
  name: Scalars['String']['input'];
  /** The type of publishing for the webhook. If not set, it defaults to `SINGLE`. */
  publishingType?: InputMaybe<PublishingType>;
  /** The settings for retrying failed webhook messages. */
  retrySettings?: InputMaybe<RetrySettingsInput>;
  /** A string value to hash along with `deduplicationId` using SHA-256. Included in the webhook message for added security. */
  securityToken: Scalars['String']['input'];
};

/** Input for creating token pair event webhooks. */
export type CreateTokenPairEventWebhooksInput = {
  /** A list of token pair event webhooks to create. */
  webhooks: Array<CreateTokenPairEventWebhookArgs>;
};

/** docs: hide */
export type CreateTrackedWalletsInput = {
  userId: Scalars['String']['input'];
  wallets: Array<TrackedWalletInput>;
};

/** docs: hide */
export type CreateUserContractListInput = {
  icon: Scalars['String']['input'];
  public?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
};

/** docs: hide */
export type CreateUserContractListItemInput = {
  address: Scalars['String']['input'];
  contractType: ContractType;
  listId: Scalars['String']['input'];
  networkId: Scalars['Int']['input'];
  symbol: Scalars['String']['input'];
  tokenId?: InputMaybe<Scalars['String']['input']>;
};

/** docs: hide */
export type CreateWalletInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  networkType: NetworkType;
  signedRequest: SignedRequest;
};

/** docs: hide */
export type CreateWalletSuborgInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  passkey: WalletPasskey;
};

/** docs: hide */
export type CreateWalletSuborgResponse = {
  __typename?: 'CreateWalletSuborgResponse';
  wallet: ScarabWallet;
  wallets: Array<ScarabWallet>;
};

/** Input for creating webhooks. */
export type CreateWebhooksInput = {
  /** Input for creating NFT event webhooks. */
  nftEventWebhooksInput?: InputMaybe<CreateNftEventWebhooksInput>;
  /** Input for creating price webhooks. */
  priceWebhooksInput?: InputMaybe<CreatePriceWebhooksInput>;
  /** Input for creating raw transaction webhooks. */
  rawTransactionWebhooksInput?: InputMaybe<CreateRawTransactionWebhooksInput>;
  /** Input for creating token pair event webhooks. */
  tokenPairEventWebhooksInput?: InputMaybe<CreateTokenPairEventWebhooksInput>;
};

/** Result returned by `createWebhooks`. */
export type CreateWebhooksOutput = {
  __typename?: 'CreateWebhooksOutput';
  /** The list of NFT event webhooks that were created. */
  nftEventWebhooks: Array<Maybe<Webhook>>;
  /** The list of price webhooks that were created. */
  priceWebhooks: Array<Maybe<Webhook>>;
  /** The list of raw transaction webhooks that were created. */
  rawTransactionWebhooks: Array<Maybe<Webhook>>;
  /** The list of token pair event webhooks that were created. */
  tokenPairEventWebhooks: Array<Maybe<Webhook>>;
};

export enum CreationContext {
  Mobile = 'MOBILE',
  Telegram = 'TELEGRAM',
  Web = 'WEB'
}

/** Price data for a bar at a specific resolution. */
export type CurrencyBarData = {
  __typename?: 'CurrencyBarData';
  /** The timestamp for the bar. */
  t: Scalars['Int']['output'];
  /** Bar chart data in the network's base token. */
  token: IndividualBarData;
  /** Bar chart data in USD. */
  usd: IndividualBarData;
};

/** docs: hide */
export type CustomNotification = {
  __typename?: 'CustomNotification';
  message?: Maybe<Scalars['String']['output']>;
};

/** docs: hide */
export type DailyPointBoostRecord = {
  __typename?: 'DailyPointBoostRecord';
  boostMultiplier: Scalars['Float']['output'];
  boostType: Scalars['String']['output'];
  endTimestamp?: Maybe<Scalars['Int']['output']>;
  heldTokenAddress?: Maybe<Scalars['String']['output']>;
  minimumHolding?: Maybe<Scalars['Float']['output']>;
  networkId?: Maybe<Scalars['Int']['output']>;
  startTimestamp: Scalars['Int']['output'];
  streakAmount?: Maybe<Scalars['Int']['output']>;
};

/** docs: hide */
export type Decoding = {
  __typename?: 'Decoding';
  abi: Scalars['JSON']['output'];
  /** Contract address to scope the decoding to */
  contractAddress?: Maybe<Scalars['String']['output']>;
  /** User defined contract name for the decoding (ex: pair) */
  contractName: Scalars['String']['output'];
  eventNames: Array<Scalars['String']['output']>;
  /** Unique identifier for the decoding */
  id: Scalars['ID']['output'];
  methodNames: Array<Scalars['String']['output']>;
  methods: Array<Scalars['String']['output']>;
  /** Network ID that this decoding is on */
  networkId: Scalars['Int']['output'];
  /** User defined project name of the decoding (ex: uniswap) */
  projectName: Scalars['String']['output'];
  startBlockNumber?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<DecodingStatus>;
  topics: Array<Scalars['String']['output']>;
};

/** docs: hide */
export type DecodingStatus = {
  __typename?: 'DecodingStatus';
  complete: Scalars['Int']['output'];
  decoding?: Maybe<Decoding>;
  decodingId: Scalars['ID']['output'];
  statusMessage: Scalars['String']['output'];
  step: Scalars['String']['output'];
  total: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

/** docs: hide */
export type DefinedUser = {
  __typename?: 'DefinedUser';
  admin?: Maybe<Scalars['Boolean']['output']>;
  ban?: Maybe<BanDetails>;
  contractProposalStats?: Maybe<ContractProposalStats>;
  createdAt: Scalars['Int']['output'];
  email?: Maybe<DefinedUserEmail>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  roles: Array<Scalars['String']['output']>;
  telegramId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Int']['output'];
  walletAddress?: Maybe<Scalars['String']['output']>;
};

/** docs: hide */
export type DefinedUserEmail = {
  __typename?: 'DefinedUserEmail';
  address: Scalars['String']['output'];
};

/** docs: hide */
export type DeleteChartLayoutInput = {
  id: Scalars['Int']['input'];
};

/** docs: hide */
export type DeleteTrackedWalletsInput = {
  userId: Scalars['String']['input'];
  walletAddresses: Array<Scalars['String']['input']>;
};

/** docs: hide */
export type DeleteTurnkeySignerKeyInput = {
  request: SignedRequest;
};

/** docs: hide */
export type DeleteUserContractListInput = {
  id: Scalars['String']['input'];
};

/** docs: hide */
export type DeleteUserContractListItemInput = {
  listId: Scalars['String']['input'];
  sortKey: Scalars['String']['input'];
};

/** docs: hide */
export type DeleteUserContractListItemResponse = {
  __typename?: 'DeleteUserContractListItemResponse';
  listId: Scalars['String']['output'];
  sortKey: Scalars['String']['output'];
};

/** docs: hide */
export type DeleteUserContractListResponse = {
  __typename?: 'DeleteUserContractListResponse';
  id: Scalars['String']['output'];
};

/** Input for deleting webhooks. */
export type DeleteWebhooksInput = {
  /** A list of webhook IDs to delete. */
  webhookIds: Array<Scalars['String']['input']>;
};

/** Result returned by `deleteWebhooks`. */
export type DeleteWebhooksOutput = {
  __typename?: 'DeleteWebhooksOutput';
  /** The list of webhook IDs that were deleted. */
  deletedIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Detailed stats for an NFT collection. */
export type DetailedNftStats = {
  __typename?: 'DetailedNftStats';
  /** The contract address of the NFT collection. */
  collectionAddress: Scalars['String']['output'];
  /** The marketplace address or `all`. Can be used to get marketplace-specific metrics. */
  grouping?: Maybe<Scalars['String']['output']>;
  /** The network ID the NFT collection is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The breakdown of stats over a 24 hour window. */
  stats_day1?: Maybe<WindowedDetailedNftStats>;
  /** The breakdown of stats over a 30 day window. */
  stats_day30?: Maybe<WindowedDetailedNftStats>;
  /** The breakdown of stats over an hour window. */
  stats_hour1?: Maybe<WindowedDetailedNftStats>;
  /** The breakdown of stats over a 4 hour window. */
  stats_hour4?: Maybe<WindowedDetailedNftStats>;
  /** The breakdown of stats over a 12 hour window. */
  stats_hour12?: Maybe<WindowedDetailedNftStats>;
  /** The breakdown of stats over a 7 day window. */
  stats_week1?: Maybe<WindowedDetailedNftStats>;
};

/** The start/end timestamp for a given bucket within the window. */
export type DetailedNftStatsBucketTimestamp = {
  __typename?: 'DetailedNftStatsBucketTimestamp';
  /** The unix timestamp for the end of the window. */
  end: Scalars['Int']['output'];
  /** The unix timestamp for the start of the window. */
  start: Scalars['Int']['output'];
};

/** The duration used to request detailed NFT stats. */
export enum DetailedNftStatsDuration {
  Day1 = 'day1',
  Day30 = 'day30',
  Hour1 = 'hour1',
  Hour4 = 'hour4',
  Hour12 = 'hour12',
  Week1 = 'week1'
}

/** Number metrics for detailed NFT stats. */
export type DetailedNftStatsNumberMetrics = {
  __typename?: 'DetailedNftStatsNumberMetrics';
  /** The list of aggregated values for each bucket. */
  buckets: Array<Maybe<Scalars['Int']['output']>>;
  /** The percent change between the `currentValue` and `previousValue`. */
  change?: Maybe<Scalars['Float']['output']>;
  /** The total value for the most recent duration. */
  currentValue?: Maybe<Scalars['Int']['output']>;
  /** The total value for the previous duration. */
  previousValue?: Maybe<Scalars['Int']['output']>;
};

/** String metrics for detailed NFT stats. */
export type DetailedNftStatsStringMetrics = {
  __typename?: 'DetailedNftStatsStringMetrics';
  /** The list of aggregated values for each bucket. */
  buckets: Array<Maybe<Scalars['String']['output']>>;
  /** The percent change between the `currentValue` and `previousValue`. */
  change?: Maybe<Scalars['Float']['output']>;
  /** The total value for the most recent duration. */
  currentValue?: Maybe<Scalars['String']['output']>;
  /** The total value for the previous duration. */
  previousValue?: Maybe<Scalars['String']['output']>;
};

/** Detailed stats for a token within a pair. */
export type DetailedPairStats = {
  __typename?: 'DetailedPairStats';
  /** Number of aggregated buckets specified in input */
  bucketCount?: Maybe<Scalars['Int']['output']>;
  /** The unix timestamp for the last transaction to happen on the pair. */
  lastTransaction?: Maybe<Scalars['Int']['output']>;
  /** The network ID the pair is deployed on. */
  networkId: Scalars['Int']['output'];
  pair?: Maybe<Pair>;
  /** The contract address of the pair. */
  pairAddress: Scalars['String']['output'];
  /** The timestamp specified as input to the query */
  queryTimestamp?: Maybe<Scalars['Int']['output']>;
  /** The type of statistics returned. Can be `FILTERED` or `UNFILTERED` */
  statsType: TokenPairStatisticsType;
  /** The breakdown of stats over a 24 hour window. */
  stats_day1?: Maybe<WindowedDetailedPairStats>;
  /** The breakdown of stats over a 30 day window. */
  stats_day30?: Maybe<WindowedDetailedPairStats>;
  /** The breakdown of stats over an hour window. */
  stats_hour1?: Maybe<WindowedDetailedPairStats>;
  /** The breakdown of stats over a 4 hour window. */
  stats_hour4?: Maybe<WindowedDetailedPairStats>;
  /** The breakdown of stats over a 12 hour window. */
  stats_hour12?: Maybe<WindowedDetailedPairStats>;
  /** The breakdown of stats over a 5 minute window. */
  stats_min5?: Maybe<WindowedDetailedPairStats>;
  /** The breakdown of stats over a 15 minute window. */
  stats_min15?: Maybe<WindowedDetailedPairStats>;
  /** The breakdown of stats over a 7 day window. */
  stats_week1?: Maybe<WindowedDetailedPairStats>;
  /** The token of interest used to calculate token-specific stats. */
  tokenOfInterest?: Maybe<TokenOfInterest>;
};

/** The start/end timestamp for a given bucket within the window. */
export type DetailedPairStatsBucketTimestamp = {
  __typename?: 'DetailedPairStatsBucketTimestamp';
  /** The unix timestamp for the start of the bucket. */
  end: Scalars['Int']['output'];
  /** The unix timestamp for the start of the bucket. */
  start: Scalars['Int']['output'];
};

/** The duration used to request detailed pair stats. */
export enum DetailedPairStatsDuration {
  Day1 = 'day1',
  Day30 = 'day30',
  Hour1 = 'hour1',
  Hour4 = 'hour4',
  Hour12 = 'hour12',
  Min5 = 'min5',
  Min15 = 'min15',
  Week1 = 'week1'
}

/** Number metrics for detailed pair stats. */
export type DetailedPairStatsNumberMetrics = {
  __typename?: 'DetailedPairStatsNumberMetrics';
  /** The list of aggregated values for each bucket. */
  buckets: Array<Maybe<Scalars['Int']['output']>>;
  /** The percent change between the `currentValue` and `previousValue`. Decimal format. */
  change?: Maybe<Scalars['Float']['output']>;
  /** The total value for the most recent duration. */
  currentValue?: Maybe<Scalars['Int']['output']>;
  /** The total value for the previous duration. */
  previousValue?: Maybe<Scalars['Int']['output']>;
};

/** String metrics for detailed pair stats. */
export type DetailedPairStatsStringMetrics = {
  __typename?: 'DetailedPairStatsStringMetrics';
  /** The list of aggregated values for each bucket. */
  buckets: Array<Maybe<Scalars['String']['output']>>;
  /** The percent change between the `currentValue` and `previousValue`. Decimal format. */
  change?: Maybe<Scalars['Float']['output']>;
  /** The total value for the most recent duration. */
  currentValue?: Maybe<Scalars['String']['output']>;
  /** The total value for the previous duration. */
  previousValue?: Maybe<Scalars['String']['output']>;
};

/** Detailed stats for a token within a pair. */
export type DetailedStats = {
  __typename?: 'DetailedStats';
  /** Number of aggregated buckets specified in input */
  bucketCount?: Maybe<Scalars['Int']['output']>;
  /** The ID of the pair (`pairAddress:networkId`). */
  pairId: Scalars['String']['output'];
  /** The timestamp specified as input to the query */
  queryTimestamp?: Maybe<Scalars['Int']['output']>;
  /** The type of statistics returned. Can be `FILTERED` or `UNFILTERED` */
  statsType: TokenPairStatisticsType;
  /** The breakdown of stats over a 24 hour window. */
  stats_day1?: Maybe<WindowedDetailedStats>;
  /** The breakdown of stats over an hour window. */
  stats_hour1?: Maybe<WindowedDetailedStats>;
  /** The breakdown of stats over a 4 hour window. */
  stats_hour4?: Maybe<WindowedDetailedStats>;
  /** The breakdown of stats over a 12 hour window. */
  stats_hour12?: Maybe<WindowedDetailedStats>;
  /** The breakdown of stats over a 5 minute window. */
  stats_min5?: Maybe<WindowedDetailedStats>;
  /** The token of interest used to calculate token-specific stats. */
  tokenOfInterest: TokenOfInterest;
};

/** The start/end timestamp for a given bucket within the window. */
export type DetailedStatsBucketTimestamp = {
  __typename?: 'DetailedStatsBucketTimestamp';
  /** The unix timestamp for the start of the bucket. */
  end: Scalars['Int']['output'];
  /** The unix timestamp for the start of the bucket. */
  start: Scalars['Int']['output'];
};

/** Number metrics for detailed stats. */
export type DetailedStatsNumberMetrics = {
  __typename?: 'DetailedStatsNumberMetrics';
  /** The list of aggregated values for each bucket. */
  buckets: Array<Maybe<Scalars['Int']['output']>>;
  /** The percent change between the `currentValue` and `previousValue`. Decimal format. */
  change: Scalars['Float']['output'];
  /** The total value for the most recent window. */
  currentValue: Scalars['Int']['output'];
  /** The total value for the previous window. */
  previousValue: Scalars['Int']['output'];
};

/** String metrics for detailed stats. */
export type DetailedStatsStringMetrics = {
  __typename?: 'DetailedStatsStringMetrics';
  /** The list of aggregated values for each bucket. */
  buckets: Array<Maybe<Scalars['String']['output']>>;
  /** The percent change between the `currentValue` and `previousValue`. Decimal format. */
  change: Scalars['Float']['output'];
  /** The total value for the most recent window. */
  currentValue: Scalars['String']['output'];
  /** The total value for the previous window. */
  previousValue: Scalars['String']['output'];
};

/** The window size used to request detailed stats. */
export enum DetailedStatsWindowSize {
  Day1 = 'day1',
  Hour1 = 'hour1',
  Hour4 = 'hour4',
  Hour12 = 'hour12',
  Min5 = 'min5'
}

/** docs: hide */
export type DetailedWalletStats = {
  __typename?: 'DetailedWalletStats';
  labels: Array<Scalars['String']['output']>;
  lastTransactionAt: Scalars['Int']['output'];
  networkBreakdown?: Maybe<Array<NetworkBreakdown>>;
  networkSpecificStats?: Maybe<Array<NetworkWalletStats>>;
  scammerScore?: Maybe<Scalars['Int']['output']>;
  statsDay1?: Maybe<WindowedWalletStats>;
  statsDay30?: Maybe<WindowedWalletStats>;
  statsWeek1?: Maybe<WindowedWalletStats>;
  statsYear1?: Maybe<WindowedWalletStats>;
  walletAddress: Scalars['String']['output'];
};

/** docs: hide */
export type DetailedWalletStatsInput = {
  includeNetworkBreakdown?: InputMaybe<Scalars['Boolean']['input']>;
  networkId?: InputMaybe<Scalars['Int']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  walletAddress: Scalars['String']['input'];
};

/** Metadata for a contract. */
export type EnhancedContract = EnhancedNftContract | EnhancedToken;

/** Metadata for an NFT collection. */
export type EnhancedNftContract = {
  __typename?: 'EnhancedNftContract';
  /** The contract address of the NFT collection. */
  address: Scalars['String']['output'];
  /** The description of the NFT collection. */
  description?: Maybe<Scalars['String']['output']>;
  /** The token standard. Can be a variation of `ERC-721` or `ERC-1155`. */
  ercType: Scalars['String']['output'];
  /** The ID of the NFT collection (`address`:`networkId`). */
  id: Scalars['String']['output'];
  /** The URL for an image of the NFT collection. */
  image?: Maybe<Scalars['String']['output']>;
  /** A list of labels for the NFT collection. */
  labels?: Maybe<Array<Maybe<ContractLabel>>>;
  /** The name of the NFT collection. */
  name?: Maybe<Scalars['String']['output']>;
  /** The network ID the NFT collection is deployed on. */
  networkId: Scalars['Int']['output'];
  /** Community gathered links for the socials of this NFT collection. */
  socialLinks?: Maybe<SocialLinks>;
  /** The symbol of the NFT collection. */
  symbol?: Maybe<Scalars['String']['output']>;
  /** The total supply of the NFT collection. */
  totalSupply?: Maybe<Scalars['String']['output']>;
};

/** Metadata for a token. */
export type EnhancedToken = {
  __typename?: 'EnhancedToken';
  /** The contract address of the token. */
  address: Scalars['String']['output'];
  /**
   * The circulating supply of the token.
   * @deprecated Use the TokenInfo type
   */
  circulatingSupply?: Maybe<Scalars['String']['output']>;
  /** The token ID on CoinMarketCap. */
  cmcId?: Maybe<Scalars['Int']['output']>;
  /** The block height the token was created at. */
  createBlockNumber?: Maybe<Scalars['Int']['output']>;
  /** The transaction hash of the token's creation. */
  createTransactionHash?: Maybe<Scalars['String']['output']>;
  /** The unix timestamp for the creation of the token. */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The token creator's wallet address. */
  creatorAddress?: Maybe<Scalars['String']['output']>;
  /** docs: hide */
  creatorBalanceNBT?: Maybe<Scalars['String']['output']>;
  /** The precision to which the token can be divided. For example, the smallest unit for USDC is 0.000001 (6 decimals). */
  decimals: Scalars['Int']['output'];
  /** A list of exchanges where the token has been traded. */
  exchanges?: Maybe<Array<Exchange>>;
  /**
   * Information about the token from 3rd party sources.
   * @deprecated Use the TokenInfo type
   */
  explorerData?: Maybe<ExplorerTokenData>;
  /** Whether or not the token is freezable */
  freezable?: Maybe<Scalars['String']['output']>;
  /** The ID of the token (`address:networkId`). */
  id: Scalars['String']['output'];
  /**
   * The large token logo URL.
   * @deprecated Use the TokenInfo type
   */
  imageLargeUrl?: Maybe<Scalars['String']['output']>;
  /**
   * The small token logo URL.
   * @deprecated Use the TokenInfo type
   */
  imageSmallUrl?: Maybe<Scalars['String']['output']>;
  /**
   * The thumbnail token logo URL.
   * @deprecated Use the TokenInfo type
   */
  imageThumbUrl?: Maybe<Scalars['String']['output']>;
  /** More metadata about the token. */
  info?: Maybe<TokenInfo>;
  /** Whether the token has been flagged as a scam. */
  isScam?: Maybe<Scalars['Boolean']['output']>;
  /** The launchpad data for the token, if applicable. */
  launchpad?: Maybe<LaunchpadData>;
  /** Whether or not the token is mintable */
  mintable?: Maybe<Scalars['String']['output']>;
  /** The token name. For example, `ApeCoin`. */
  name?: Maybe<Scalars['String']['output']>;
  /** The network ID the token is deployed on. */
  networkId: Scalars['Int']['output'];
  /**
   * The amount of this token in the pair.
   * @deprecated Pooled can be found on the pair instead
   */
  pooled?: Maybe<Scalars['String']['output']>;
  /** Community gathered links for the socials of this token. */
  socialLinks?: Maybe<SocialLinks>;
  /** The token symbol. For example, `APE`. */
  symbol?: Maybe<Scalars['String']['output']>;
  /**
   * The total supply of the token.
   * @deprecated Use the TokenInfo type
   */
  totalSupply?: Maybe<Scalars['String']['output']>;
};

export enum Entitlement {
  BalanceFeed = 'BalanceFeed',
  PriceFeed = 'PriceFeed',
  TopTraders = 'TopTraders',
  WalletStats = 'WalletStats'
}

/** docs: hide */
export type EthBalance = {
  __typename?: 'EthBalance';
  combinedBalance: Scalars['String']['output'];
  combinedBalanceShifted: Scalars['String']['output'];
  ethBalance: Scalars['String']['output'];
  ethBalanceShifted: Scalars['String']['output'];
  walletAddress: Scalars['String']['output'];
  wethBalance: Scalars['String']['output'];
  wethBalanceShifted: Scalars['String']['output'];
};

/** docs: hide */
export type EthBalancesInput = {
  networkId?: InputMaybe<Scalars['Int']['input']>;
  walletAddresses: Array<Scalars['String']['input']>;
};

/** docs: hide */
export type EthBalancesResponse = {
  __typename?: 'EthBalancesResponse';
  items: Array<EthBalance>;
};

/** A token transaction. */
export type Event = Trackable & {
  __typename?: 'Event';
  /** The contract address of the token's top pair. */
  address: Scalars['String']['output'];
  /** The price of the network's base token. */
  baseTokenPrice?: Maybe<Scalars['String']['output']>;
  /** The hash of the block where the transaction occurred. */
  blockHash: Scalars['String']['output'];
  /** The block number for the transaction. */
  blockNumber: Scalars['Int']['output'];
  /** The event-specific data for the transaction. Can be `BurnEventData` or `MintEventData` or `SwapEventData`. */
  data?: Maybe<EventData>;
  /** A more specific breakdown of `eventType`. Splits `Swap` into `Buy` or `Sell`. */
  eventDisplayType?: Maybe<EventDisplayType>;
  /** The type of transaction event. Can be `Burn`, `Mint`, `Swap`, `Sync`, `Collect`, or `CollectProtocol`. */
  eventType: EventType;
  /** The ID of the event (`address:networkId`). For example, `0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2:1`. */
  id: Scalars['String']['output'];
  /** Labels attributed to the event. */
  labels?: Maybe<LabelsForEvent>;
  /** The contract address of the token with higher liquidity in the token's top pair. */
  liquidityToken?: Maybe<Scalars['String']['output']>;
  /** The index of the log in the block. */
  logIndex: Scalars['Int']['output'];
  /** The wallet address that performed the transaction. */
  maker?: Maybe<Scalars['String']['output']>;
  /** The network ID that the token is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The token of interest within the token's top pair. Can be `token0` or `token1`. */
  quoteToken?: Maybe<QuoteToken>;
  /** The unix timestamp for when the transaction occurred. */
  timestamp: Scalars['Int']['output'];
  /** The address of the event's token0. */
  token0Address?: Maybe<Scalars['String']['output']>;
  /** The updated price of `token0` in USD, calculated after the transaction. */
  token0PoolValueUsd?: Maybe<Scalars['String']['output']>;
  /** The price of `token0` paid/received in USD, including any fees. */
  token0SwapValueUsd?: Maybe<Scalars['String']['output']>;
  /** The price of `token0` paid/received in the network's base token, including fees. */
  token0ValueBase?: Maybe<Scalars['String']['output']>;
  /** The address of the event's token1. */
  token1Address?: Maybe<Scalars['String']['output']>;
  /** The updated price of `token1` in USD, calculated after the transaction. */
  token1PoolValueUsd?: Maybe<Scalars['String']['output']>;
  /** The price of `token1` paid/received in USD, including any fees. */
  token1SwapValueUsd?: Maybe<Scalars['String']['output']>;
  /** The price of `token1` paid/received in the network's base token, including fees. */
  token1ValueBase?: Maybe<Scalars['String']['output']>;
  /** The unique hash for the transaction. */
  transactionHash: Scalars['String']['output'];
  /** The index of the transaction within the block. */
  transactionIndex: Scalars['Int']['output'];
};

/** Response returned by `getTokenEvents`. */
export type EventConnection = {
  __typename?: 'EventConnection';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** A list of transactions for a token's top pair. */
  items?: Maybe<Array<Maybe<Event>>>;
};

/** Event-specific data for a token transaction. */
export type EventData = BurnEventData | MintEventData | PoolBalanceChangedEventData | SwapEventData;

/** A more specific breakdown of `EventType`. Splits `Swap` into `Buy` and `Sell`. */
export enum EventDisplayType {
  Burn = 'Burn',
  Buy = 'Buy',
  Collect = 'Collect',
  CollectProtocol = 'CollectProtocol',
  Mint = 'Mint',
  Sell = 'Sell',
  Sync = 'Sync'
}

/** Metadata for an event label. */
export type EventLabel = {
  __typename?: 'EventLabel';
  /** Specific data for the event label type. */
  data: EventLabelData;
  /** The ID of the pair (`address:networkId`). */
  id: Scalars['String']['output'];
  /** The event label type. */
  label: EventLabelType;
  /** The index of the log in the block. */
  logIndex: Scalars['Int']['output'];
  /** The network ID the pair is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The unix timestamp for the transaction. */
  timestamp: Scalars['Int']['output'];
  /** The unique hash for the transaction. */
  transactionHash: Scalars['String']['output'];
  /** The index of the transaction within the block. */
  transactionIndex: Scalars['Int']['output'];
};

/** Response returned by `getEventLabels`. */
export type EventLabelConnection = {
  __typename?: 'EventLabelConnection';
  /** The cursor to use for pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** A list of event labels for a pair. */
  items?: Maybe<Array<Maybe<EventLabel>>>;
};

/** Specific data for an event label. */
export type EventLabelData = FrontRunLabelData | SandwichedLabelData;

/** The event label type. */
export enum EventLabelType {
  FrontRun = 'FrontRun',
  Sandwiched = 'Sandwiched'
}

/** Input type of `EventQueryTimestamp`. */
export type EventQueryTimestampInput = {
  /** The unix timestamp for the start of the requested range. */
  from: Scalars['Int']['input'];
  /** The unix timestamp for the end of the requested range. */
  to: Scalars['Int']['input'];
};

/** The event type for a token transaction. */
export enum EventType {
  Burn = 'Burn',
  Collect = 'Collect',
  CollectProtocol = 'CollectProtocol',
  Mint = 'Mint',
  PoolBalanceChanged = 'PoolBalanceChanged',
  Swap = 'Swap',
  Sync = 'Sync'
}

/** Input type of `EventsQuery`. */
export type EventsQueryInput = {
  /** The pair contract address to filter by. If you pass a token address in here, it will instead find the top pair for that token and use that. */
  address: Scalars['String']['input'];
  /** The amount of `quoteToken` involved in the swap. */
  amountNonLiquidityToken?: InputMaybe<NumberFilter>;
  /** The list of event display types to filter by. */
  eventDisplayType?: InputMaybe<Array<InputMaybe<EventDisplayType>>>;
  /** The specific event type to filter by. */
  eventType?: InputMaybe<EventType>;
  /** The specific wallet address to filter by. */
  maker?: InputMaybe<Scalars['String']['input']>;
  /** The network ID to filter by. */
  networkId: Scalars['Int']['input'];
  /** The price per `quoteToken` at the time of the swap in the network's base token. */
  priceBaseToken?: InputMaybe<NumberFilter>;
  /** The total amount of `quoteToken` involved in the swap in the network's base token (`amountNonLiquidityToken` x `priceBaseToken`). */
  priceBaseTokenTotal?: InputMaybe<NumberFilter>;
  /** The price per `quoteToken` at the time of the swap in USD. */
  priceUsd?: InputMaybe<NumberFilter>;
  /** The total amount of `quoteToken` involved in the swap in USD (`amountNonLiquidityToken` x `priceUsd`). */
  priceUsdTotal?: InputMaybe<NumberFilter>;
  /** The token of interest. Can be `token0` or `token1`. */
  quoteToken?: InputMaybe<QuoteToken>;
  /** Specify the type of symbol you want to fetch values for (TOKEN | POOL) */
  symbolType?: InputMaybe<SymbolType>;
  /** The time range to filter by. */
  timestamp?: InputMaybe<EventQueryTimestampInput>;
};

/** docs: hide */
export type EvmConfig = {
  __typename?: 'EvmConfig';
  finalityDelay: Scalars['Int']['output'];
  reorgsEnabled: Scalars['Boolean']['output'];
  tracesEnabled: Scalars['Boolean']['output'];
};

/** docs: hide */
export type EvmConfigInput = {
  finalityDelay: Scalars['Int']['input'];
  reorgsEnabled: Scalars['Boolean']['input'];
  tracesEnabled: Scalars['Boolean']['input'];
};

/** docs: hide */
export type EvmConstants = {
  __typename?: 'EvmConstants';
  cangetTxWithBlock: Scalars['Boolean']['output'];
  multicallAddress: Scalars['String']['output'];
  validBlockHashInLogs: Scalars['Boolean']['output'];
  validLogBlooms: Scalars['Boolean']['output'];
  validPastLogs: Scalars['Boolean']['output'];
};

/** docs: hide */
export type EvmConstantsInput = {
  cangetTxWithBlock: Scalars['Boolean']['input'];
  multicallAddress: Scalars['String']['input'];
  validBlockHashInLogs: Scalars['Boolean']['input'];
  validLogBlooms: Scalars['Boolean']['input'];
  validPastLogs: Scalars['Boolean']['input'];
};

/** docs: hide */
export type EvmNetworkConfig = NetworkConfigBase & {
  __typename?: 'EvmNetworkConfig';
  baseTokenAddress: Scalars['String']['output'];
  baseTokenSymbol: Scalars['String']['output'];
  color?: Maybe<Scalars['String']['output']>;
  defaultPairAddress: Scalars['String']['output'];
  defaultPairQuoteToken: QuoteToken;
  enabled: Scalars['Boolean']['output'];
  evmConfig: EvmConfig;
  evmConstants: EvmConstants;
  explorer: ExplorerConfig;
  id: Scalars['ID']['output'];
  mainnet: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  networkIconUrl: Scalars['String']['output'];
  networkId: Scalars['Int']['output'];
  networkName: Scalars['String']['output'];
  networkShortName: Scalars['String']['output'];
  networkType: NetworkConfigType;
  newTokensEnabled?: Maybe<Scalars['Boolean']['output']>;
  pricing: Array<NetworkPriceConfig>;
  rpcs: Array<EvmRpcConfig>;
  stableCoinAddresses?: Maybe<Array<Scalars['String']['output']>>;
  wrappedBaseTokenSymbol: Scalars['String']['output'];
};

/** docs: hide */
export type EvmRpcConfig = {
  __typename?: 'EvmRpcConfig';
  archiveNode: Scalars['Boolean']['output'];
  jwt?: Maybe<Scalars['String']['output']>;
  public: Scalars['Boolean']['output'];
  tracesEnabled: Scalars['Boolean']['output'];
  url: Scalars['String']['output'];
};

/** docs: hide */
export type EvmRpcConfigInput = {
  archiveNode: Scalars['Boolean']['input'];
  jwt?: InputMaybe<Scalars['String']['input']>;
  public: Scalars['Boolean']['input'];
  tracesEnabled: Scalars['Boolean']['input'];
  url: Scalars['String']['input'];
};

/** Metadata for a decentralized exchange. */
export type Exchange = {
  __typename?: 'Exchange';
  /** The contract address of the exchange. */
  address: Scalars['String']['output'];
  /** The hex string for the exchange color. */
  color?: Maybe<Scalars['String']['output']>;
  /** docs: hide */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The version of the exchange, if applicable. */
  exchangeVersion?: Maybe<Scalars['String']['output']>;
  /** The exchange logo URL. */
  iconUrl?: Maybe<Scalars['String']['output']>;
  /** The ID of the exchange (`address:id`). */
  id: Scalars['String']['output'];
  /** The name of the exchange. */
  name?: Maybe<Scalars['String']['output']>;
  /** The network ID the exchange is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The URL for the exchange. */
  tradeUrl?: Maybe<Scalars['String']['output']>;
};

/** Response returned by `filterExchanges`. */
export type ExchangeFilterConnection = {
  __typename?: 'ExchangeFilterConnection';
  /** The number of exchanges returned. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Where in the list the server started when returning items. */
  offset?: Maybe<Scalars['Int']['output']>;
  /** The list of exchanges matching the filter parameters. */
  results?: Maybe<Array<Maybe<ExchangeFilterResult>>>;
};

/** An exchange matching a set of filter parameters. */
export type ExchangeFilterResult = {
  __typename?: 'ExchangeFilterResult';
  /** The total unique daily active users. */
  dailyActiveUsers?: Maybe<Scalars['Int']['output']>;
  /** Exchange metadata. */
  exchange?: Maybe<FilterExchange>;
  /** The total unique monthly active users (30 days). */
  monthlyActiveUsers?: Maybe<Scalars['Int']['output']>;
  /** The number of transactions on the exchange in the past hour. */
  txnCount1?: Maybe<Scalars['String']['output']>;
  /** The number of transactions on the exchange in the past 4 hours. */
  txnCount4?: Maybe<Scalars['String']['output']>;
  /** The number of transactions on the exchange in the past 12 hours. */
  txnCount12?: Maybe<Scalars['String']['output']>;
  /** The number of transactions on the exchange in the past 24 hours. */
  txnCount24?: Maybe<Scalars['String']['output']>;
  /** The trade volume in the network's base token in the past hour. */
  volumeNBT1?: Maybe<Scalars['String']['output']>;
  /** The trade volume in the network's base token in the past 4 hours. */
  volumeNBT4?: Maybe<Scalars['String']['output']>;
  /** The trade volume in the network's base token in the past 12 hours. */
  volumeNBT12?: Maybe<Scalars['String']['output']>;
  /** The trade volume in the network's base token in the past 24 hours. */
  volumeNBT24?: Maybe<Scalars['String']['output']>;
  /** The trade volume in USD in the past hour. */
  volumeUSD1?: Maybe<Scalars['String']['output']>;
  /** The trade volume in USD in the past 4 hours. */
  volumeUSD4?: Maybe<Scalars['String']['output']>;
  /** The trade volume in USD in the past 12 hours. */
  volumeUSD12?: Maybe<Scalars['String']['output']>;
  /** The trade volume in USD in the past 24 hours. */
  volumeUSD24?: Maybe<Scalars['String']['output']>;
};

/** Input type of `ExchangeFilters`. */
export type ExchangeFilters = {
  /** The list of exchange contract addresses to filter by. */
  address?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The total unique daily active users. */
  dailyActiveUsers?: InputMaybe<NumberFilter>;
  /** The total unique monthly active users (30 days). */
  monthlyActiveUsers?: InputMaybe<NumberFilter>;
  /** The list of network IDs to filter by. */
  network?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** The number of transactions on the exchange in the past hour. */
  txnCount1?: InputMaybe<StringFilter>;
  /** The number of transactions on the exchange in the past 4 hours. */
  txnCount4?: InputMaybe<StringFilter>;
  /** The number of transactions on the exchange in the past 12 hours. */
  txnCount12?: InputMaybe<StringFilter>;
  /** The number of transactions on the exchange in the past 24 hours. */
  txnCount24?: InputMaybe<StringFilter>;
  /** The trade volume in the network's base token in the past hour. */
  volumeNBT1?: InputMaybe<StringFilter>;
  /** The trade volume in the network's base token in the past 4 hours. */
  volumeNBT4?: InputMaybe<StringFilter>;
  /** The trade volume in the network's base token in the past 12 hours. */
  volumeNBT12?: InputMaybe<StringFilter>;
  /** The trade volume in the network's base token in the past 24 hours. */
  volumeNBT24?: InputMaybe<StringFilter>;
  /** The trade volume in USD in the past hour. */
  volumeUSD1?: InputMaybe<StringFilter>;
  /** The trade volume in USD in the past 4 hours. */
  volumeUSD4?: InputMaybe<StringFilter>;
  /** The trade volume in USD in the past 12 hours. */
  volumeUSD12?: InputMaybe<StringFilter>;
  /** The trade volume in USD in the past 24 hours. */
  volumeUSD24?: InputMaybe<StringFilter>;
};

/** docs: hide */
export type ExchangeIconUpdateUrlResponse = {
  __typename?: 'ExchangeIconUpdateUrlResponse';
  url?: Maybe<Scalars['String']['output']>;
  viewUrl?: Maybe<Scalars['String']['output']>;
};

/** Input type of `ExchangeRanking`. */
export type ExchangeRanking = {
  /** The attribute to rank exchanges by. */
  attribute?: InputMaybe<ExchangeRankingAttribute>;
  /** The direction to apply to the ranking attribute. */
  direction?: InputMaybe<RankingDirection>;
};

/** The attribute used to rank exchanges. */
export enum ExchangeRankingAttribute {
  DailyActiveUsers = 'dailyActiveUsers',
  MonthlyActiveUsers = 'monthlyActiveUsers',
  TxnCount1 = 'txnCount1',
  TxnCount4 = 'txnCount4',
  TxnCount12 = 'txnCount12',
  TxnCount24 = 'txnCount24',
  VolumeNbt1 = 'volumeNBT1',
  VolumeNbt4 = 'volumeNBT4',
  VolumeNbt12 = 'volumeNBT12',
  VolumeNbt24 = 'volumeNBT24',
  VolumeUsd1 = 'volumeUSD1',
  VolumeUsd4 = 'volumeUSD4',
  VolumeUsd12 = 'volumeUSD12',
  VolumeUsd24 = 'volumeUSD24'
}

/** docs: hide */
export type ExplorerConfig = {
  __typename?: 'ExplorerConfig';
  checksummed: Scalars['Boolean']['output'];
  icon: Scalars['String']['output'];
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

/** docs: hide */
export type ExplorerConfigInput = {
  checksummed: Scalars['Boolean']['input'];
  icon: Scalars['String']['input'];
  name: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

/** Third party token data sourced from off chain. */
export type ExplorerTokenData = {
  __typename?: 'ExplorerTokenData';
  /** Whether the token has been verified on CoinGecko. */
  blueCheckmark?: Maybe<Scalars['Boolean']['output']>;
  /** A description of the token. */
  description?: Maybe<Scalars['String']['output']>;
  /** The precision to which the token can be divided. */
  divisor?: Maybe<Scalars['String']['output']>;
  /** The ID of the token (`address:networkId`). */
  id: Scalars['String']['output'];
  /** The token price in USD. */
  tokenPriceUSD?: Maybe<Scalars['String']['output']>;
  /** The token type. */
  tokenType?: Maybe<Scalars['String']['output']>;
};

/** docs: hide */
export type ExternalPriceConfig = {
  __typename?: 'ExternalPriceConfig';
  referenceToken: ExternalPrices;
  tokenAddress: Scalars['String']['output'];
  type: NetworkPriceType;
};

/** docs: hide */
export enum ExternalPrices {
  Busd = 'BUSD',
  Dai = 'DAI',
  Doge = 'DOGE',
  Eth = 'ETH',
  Frax = 'FRAX',
  One = 'ONE',
  Tusd = 'TUSD',
  Usdc = 'USDC',
  Usdt = 'USDT'
}

export type Feature = {
  __typename?: 'Feature';
  enabled: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

/** Filter for fillsource based NFT stats. */
export type FillsourceStatsFilter = {
  /** The percent change between the `current` and `previous`. */
  change?: InputMaybe<NumberFilter>;
  /** The total value for the current window. */
  current?: InputMaybe<NumberFilter>;
  /** The fillsource to target for the current window. */
  fillsource: Scalars['String']['input'];
  /** The total value for the previous window. */
  previous?: InputMaybe<NumberFilter>;
};

/** Metadata for an exchange. */
export type FilterExchange = {
  __typename?: 'FilterExchange';
  /** The address for the exchange factory contract. */
  address: Scalars['String']['output'];
  /** The version of the exchange. For example, `3` for UniswapV3. */
  exchangeVersion?: Maybe<Scalars['String']['output']>;
  /** The URL for the exchange's icon. */
  iconUrl?: Maybe<Scalars['String']['output']>;
  /** The ID of the exchange (`address:networkId`). */
  id: Scalars['String']['output'];
  /** The name of the exchange. */
  name?: Maybe<Scalars['String']['output']>;
  /** The network ID the factory is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The URL for the exchange's trading platform. */
  tradeUrl?: Maybe<Scalars['String']['output']>;
};

/** docs: hide */
export type FilterNetworkWalletsInput = {
  /** Exclude wallets with these labels. */
  excludeLabels?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A set of filters to apply. */
  filters?: InputMaybe<WalletNetworkFilters>;
  /** Include wallets with these labels. */
  includeLabels?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The maximum number of wallets to return. */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** The network ID to filter wallets for */
  networkId: Scalars['Int']['input'];
  /** Where in the list the server should start when returning items. Use `count`+`offset` from the previous query to request the next page of results. */
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** A list of ranking attributes to apply. */
  rankings?: InputMaybe<Array<InputMaybe<WalletNetworkRanking>>>;
  /** A list of wallet addresses to filter by. */
  wallets?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** docs: hide */
export type FilterTokenWalletsInput = {
  /** Exclude wallets with these labels. */
  excludeLabels?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * A set of filters to apply
   * @deprecated Use filtersV2 instead
   */
  filters?: InputMaybe<WalletTokenFilters>;
  /** A set of filters to apply */
  filtersV2?: InputMaybe<WalletTokenFiltersV2>;
  /** Include wallets with these labels. */
  includeLabels?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The maximum number of wallets to return */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** The network ID to filter wallets for */
  networkId?: InputMaybe<Scalars['Int']['input']>;
  /** Where in the list the server should start when returning items */
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** A phrase to search for in token symbol and name */
  phrase?: InputMaybe<Scalars['String']['input']>;
  /** A list of ranking attributes to apply */
  rankings?: InputMaybe<Array<InputMaybe<WalletTokenRanking>>>;
  /** The ID of the token to filter wallets for */
  tokenId?: InputMaybe<Scalars['String']['input']>;
  /** The wallet address to filter wallets for */
  walletAddress?: InputMaybe<Scalars['String']['input']>;
};

/** docs: hide */
export type FilterWalletsInput = {
  /** Exclude wallets with these labels. */
  excludeLabels?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A set of filters to apply. */
  filters?: InputMaybe<WalletFilters>;
  /** Include wallets with these labels. */
  includeLabels?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The maximum number of wallets to return. */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Where in the list the server should start when returning items. Use `count`+`offset` from the previous query to request the next page of results. */
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** A list of ranking attributes to apply. */
  rankings?: InputMaybe<Array<InputMaybe<WalletRanking>>>;
  /** A list of wallet addresses to filter by. */
  wallets?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Metadata for a front-run label. */
export type FrontRunLabelData = {
  __typename?: 'FrontRunLabelData';
  /** The index of the front-run label. Can be 0 or 1. */
  index?: Maybe<Scalars['Int']['output']>;
  /** The amount of `token0` drained in the attack. */
  token0DrainedAmount: Scalars['String']['output'];
  /** The amount of `token1` drained in the attack. */
  token1DrainedAmount: Scalars['String']['output'];
};

export type GasEstimate = {
  __typename?: 'GasEstimate';
  error?: Maybe<Scalars['String']['output']>;
  errorReason?: Maybe<Scalars['String']['output']>;
  gasLimitEstimate?: Maybe<Scalars['String']['output']>;
  gasPrice?: Maybe<Scalars['String']['output']>;
  totalFee?: Maybe<Scalars['String']['output']>;
};

export type GasFee = {
  __typename?: 'GasFee';
  confirmationTime: Scalars['Float']['output'];
  gasPrice: Scalars['String']['output'];
};

export type GasFees = {
  __typename?: 'GasFees';
  high?: Maybe<GasFee>;
  low?: Maybe<GasFee>;
  medium?: Maybe<GasFee>;
};

export enum GasPrice {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM'
}

/** docs: hide */
export type GenericWindowedWalletStats = {
  __typename?: 'GenericWindowedWalletStats';
  end: Scalars['Int']['output'];
  lastTransactionAt: Scalars['Int']['output'];
  start: Scalars['Int']['output'];
  statsNonCurrency: WindowedDetailedNonCurrencyWalletStats;
  statsUsd: WindowedDetailedCurrencyWalletStats;
  walletAddress: Scalars['String']['output'];
};

/** docs: hide */
export type GetBridgeQuoteInput = {
  amount: Scalars['String']['input'];
  fromAddress: Scalars['String']['input'];
  fromNetwork: Scalars['Int']['input'];
  toAddress: Scalars['String']['input'];
  toNetwork: Scalars['Int']['input'];
};

/** docs: hide */
export type GetBridgeRequestStatusInput = {
  requestId?: InputMaybe<Scalars['String']['input']>;
  transactionId: Scalars['String']['input'];
};

/** Input type of `getDetailedPairsStats`. */
export type GetDetailedPairsStatsInput = {
  /** The number of aggregated values to receive. Note: Each duration has predetermined bucket sizes.<br>  The first n-1 buckets are historical. The last bucket is a snapshot of current data.<br> duration `day1`: 6 buckets (4 hours each) plus 1 partial bucket<br> duration `hour12`: 12 buckets (1 hour each) plus 1 partial bucket<br> duration `hour4`: 8 buckets (30 min each) plus 1 partial bucket<br> duration `hour1`: 12 buckets (5 min each) plus 1 partial bucket<br> duration `min5`: 5 buckets (1 min each) plus 1 partial bucket<br> For example, requesting 11 buckets for a `min5` duration will return the last 10 minutes worth of data plus a snapshot for the current minute. */
  bucketCount?: InputMaybe<Scalars['Int']['input']>;
  /** The list of durations to get detailed pair stats for. */
  durations?: InputMaybe<Array<InputMaybe<DetailedPairStatsDuration>>>;
  /** The network ID the pair is deployed on. */
  networkId: Scalars['Int']['input'];
  /** The contract address of the pair. */
  pairAddress: Scalars['String']['input'];
  /** The type of statistics returned. Can be `FILTERED` or `UNFILTERED` */
  statsType?: InputMaybe<TokenPairStatisticsType>;
  /** The unix timestamp for the stats. Defaults to current. */
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  /** The token of interest used to calculate token-specific stats for the pair. Can be `token0` or `token1`. */
  tokenOfInterest?: InputMaybe<TokenOfInterest>;
};

export type GetGasEstimateInput = {
  customGas?: InputMaybe<Scalars['String']['input']>;
  direction: OrderDirection;
  exchangeAddress?: InputMaybe<Scalars['String']['input']>;
  gasPrice?: InputMaybe<GasPrice>;
  inputTokenAddress: Scalars['String']['input'];
  inputTokenAmount: Scalars['String']['input'];
  networkId: Scalars['Int']['input'];
  outputTokenAddress: Scalars['String']['input'];
  poolAddress?: InputMaybe<Scalars['String']['input']>;
  sendWithPrivateRpc?: InputMaybe<Scalars['Boolean']['input']>;
  slippage?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  walletId?: InputMaybe<Scalars['Int']['input']>;
};

/** Response returned by `getNetworkStats`. */
export type GetNetworkStatsResponse = {
  __typename?: 'GetNetworkStatsResponse';
  /** The network liquidity in USD. */
  liquidity: Scalars['Float']['output'];
  /** The unique number of transactions in the past hour. */
  transactions1: Scalars['Int']['output'];
  /** The unique number of transactions in the past 4 hours. */
  transactions4: Scalars['Int']['output'];
  /** The unique number of transactions in the past 5 minutes. */
  transactions5m: Scalars['Int']['output'];
  /** The unique number of transactions in the past 12 hours. */
  transactions12: Scalars['Int']['output'];
  /** The unique number of transactions in the past 24 hours. */
  transactions24: Scalars['Int']['output'];
  /** The network trade volume in USD over the past hour. */
  volume1: Scalars['Float']['output'];
  /** The network trade volume in USD over the past 4 hours. */
  volume4: Scalars['Float']['output'];
  /** The network trade volume in USD over the past 5 minutes. */
  volume5m: Scalars['Float']['output'];
  /** The network trade volume in USD over the past 12 hours. */
  volume12: Scalars['Float']['output'];
  /** The network trade volume in USD over the past 24 hours. */
  volume24: Scalars['Float']['output'];
  /** The network trade volume change over the last hour */
  volumeChange1: Scalars['Float']['output'];
  /** The network trade volume change over the last 4 hours */
  volumeChange4: Scalars['Float']['output'];
  /** The network trade volume change over the last 5 minutes */
  volumeChange5m: Scalars['Float']['output'];
  /** The network trade volume change over the last 12 hours */
  volumeChange12: Scalars['Float']['output'];
  /** The network trade volume change over the last 24 hours */
  volumeChange24: Scalars['Float']['output'];
};

/** Response returned by `getNftPoolCollectionsByExchange`. */
export type GetNftPoolCollectionsResponse = {
  __typename?: 'GetNftPoolCollectionsResponse';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** A list of NFT collections. */
  items?: Maybe<Array<Maybe<NftPoolCollectionResponse>>>;
};

/** Response returned by `getNftPoolsByCollectionAndExchange` and `getNftPoolsByOwner`. */
export type GetNftPoolsResponse = {
  __typename?: 'GetNftPoolsResponse';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** A list of NFT pools. */
  items: Array<Maybe<NftPoolResponse>>;
};

/** docs: hide */
export type GetNftRankingsOutput = {
  __typename?: 'GetNftRankingsOutput';
  items: Array<Maybe<NftRankingsOutputItem>>;
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
};

/** docs: hide */
export type GetOrdersInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<OrdersFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

/** docs: hide */
export type GetPointsLeaderboardResponse = {
  __typename?: 'GetPointsLeaderboardResponse';
  items: Array<UserPointsLeaderboard>;
  leaderboardType: PointsLeaderboardType;
  pointsSeason: PointsSeason;
};

/** Input type of `getTokenPrices`. */
export type GetPriceInput = {
  /** The contract address of the token. */
  address: Scalars['String']['input'];
  /**
   * The maximum number of deviations from the token's Liquidity-Weighted Mean Price. This is used to mitigate low liquidity pairs producing prices that are not representative of reality. Default is `1`.
   * @deprecated This isn't taken into account anymore.
   */
  maxDeviations?: InputMaybe<Scalars['Float']['input']>;
  /** The network ID the token is deployed on. */
  networkId: Scalars['Int']['input'];
  /** The address of the pool, when omitted the top pool is used. */
  poolAddress?: InputMaybe<Scalars['String']['input']>;
  /** The unix timestamp for the price. */
  timestamp?: InputMaybe<Scalars['Int']['input']>;
};

export type GetQuoteInput = {
  customGas?: InputMaybe<Scalars['String']['input']>;
  direction: OrderDirection;
  exchangeAddress?: InputMaybe<Scalars['String']['input']>;
  inputTokenAddress: Scalars['String']['input'];
  inputTokenAmount: Scalars['String']['input'];
  networkId: Scalars['Int']['input'];
  outputTokenAddress: Scalars['String']['input'];
  poolAddress?: InputMaybe<Scalars['String']['input']>;
  slippage?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type GetSimulateTokenContractResultsConnection = {
  __typename?: 'GetSimulateTokenContractResultsConnection';
  cursor?: Maybe<Scalars['String']['output']>;
  results: Array<SimulateTokenContractResult>;
};

/** Input type of `getTokensInfo`. */
export type GetTokensInfoInput = {
  /** The contract address of the token. */
  address: Scalars['String']['input'];
  /** The network ID the token is deployed on. */
  networkId: Scalars['Int']['input'];
};

/** docs: hide */
export type GetUserAchievementsResponse = {
  __typename?: 'GetUserAchievementsResponse';
  badges: Array<UserAchievement>;
  pointsSeason: PointsSeason;
  quests: Array<UserQuest>;
  userId: Scalars['String']['output'];
};

/** docs: hide */
export type GetUserContractListItemInput = {
  listId?: InputMaybe<Scalars['String']['input']>;
  sortKey: Scalars['String']['input'];
};

/** docs: hide */
export type GetUserContractListItemsInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated hardcoded to 30 */
  limit?: InputMaybe<Scalars['Int']['input']>;
  listId: Scalars['String']['input'];
};

/** docs: hide */
export type GetUserContractListsInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated hardcoded to 30 */
  limit?: InputMaybe<Scalars['Int']['input']>;
};

/** docs: hide */
export type GetUserPointEventsResponse = {
  __typename?: 'GetUserPointEventsResponse';
  /** The cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The list of point events. */
  items: Array<PointEvent>;
};

/** docs: hide */
export type GetUserPointsResponse = {
  __typename?: 'GetUserPointsResponse';
  level: Scalars['Int']['output'];
  levelTier: LevelTier;
  points: Scalars['Int']['output'];
  pointsSeason: PointsSeason;
  pointsTotal: Scalars['Int']['output'];
  rank?: Maybe<Scalars['Int']['output']>;
  tradeStats: UserPointsLeaderboardStats;
  userId: Scalars['String']['output'];
};

/** docs: hide */
export type GetUserPointsResponsePointsData = {
  __typename?: 'GetUserPointsResponsePointsData';
  ALL?: Maybe<Scalars['Float']['output']>;
  DAILY?: Maybe<Scalars['Float']['output']>;
  PNL_PERCENT?: Maybe<Scalars['Float']['output']>;
  PNL_USD?: Maybe<Scalars['String']['output']>;
  QUEST?: Maybe<Scalars['Float']['output']>;
  VOLUME_USD?: Maybe<Scalars['String']['output']>;
};

/** docs: hide */
export type GetUserPointsResponseRankData = {
  __typename?: 'GetUserPointsResponseRankData';
  ALL?: Maybe<Scalars['Float']['output']>;
  DAILY?: Maybe<Scalars['Float']['output']>;
  PNL_PERCENT?: Maybe<Scalars['Float']['output']>;
  PNL_USD?: Maybe<Scalars['Float']['output']>;
  QUEST?: Maybe<Scalars['Float']['output']>;
  VOLUME_USD?: Maybe<Scalars['Float']['output']>;
};

/** docs: hide */
export type GetUserPointsResponseV2 = {
  __typename?: 'GetUserPointsResponseV2';
  level: Scalars['Int']['output'];
  levelTier: LevelTier;
  points: Scalars['Int']['output'];
  pointsSeason: PointsSeason;
  pointsTotal: Scalars['Int']['output'];
  rank?: Maybe<Scalars['Int']['output']>;
  tradeStats: UserPointsLeaderboardStats;
  userId: Scalars['String']['output'];
};

/** docs: hide */
export type GetUserReferralEventsResponse = {
  __typename?: 'GetUserReferralEventsResponse';
  cursor?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<Maybe<ReferralsEventModel>>>;
  referrerUserId: Scalars['String']['output'];
};

/** Response returned by `getWebhooks`. */
export type GetWebhooksResponse = {
  __typename?: 'GetWebhooksResponse';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** A list of webhooks belonging to a user. */
  items?: Maybe<Array<Maybe<Webhook>>>;
};

/** The pool variant. */
export enum GraphQlNftPoolVariant {
  Erc20 = 'ERC20',
  Native = 'NATIVE'
}

export type HoldersInput = {
  /** A cursor for use in pagination. */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** The attribute to sort the list on */
  sort?: InputMaybe<HoldersInputSort>;
  /** The ID of the token (`tokenAddress:networkId`). */
  tokenId: Scalars['String']['input'];
};

export type HoldersInputSort = {
  /** The attribute to sort the list on */
  attribute?: InputMaybe<HoldersSortAttribute>;
  /** The direction to apply to the ranking attribute. */
  direction?: InputMaybe<RankingDirection>;
};

/** Response returned by `holders`. */
export type HoldersResponse = {
  __typename?: 'HoldersResponse';
  /** The unique count of holders for the token. */
  count: Scalars['Int']['output'];
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The list of wallets holding the token. */
  items: Array<Balance>;
  /** Status of holder. Disabled if on unsupported network or there is insufficient holder data. */
  status: HoldersStatus;
  /** What percentage of the total supply do the top 10 holders hold. */
  top10HoldersPercent?: Maybe<Scalars['Float']['output']>;
};

export enum HoldersSortAttribute {
  Balance = 'BALANCE',
  Date = 'DATE'
}

export enum HoldersStatus {
  Disabled = 'DISABLED',
  Enabled = 'ENABLED'
}

/** Response returned by `onHoldersUpdated`. */
export type HoldersUpdate = {
  __typename?: 'HoldersUpdate';
  /** The list of wallets holding the token. */
  balances: Array<Balance>;
  /** The number of different wallets holding the token. */
  holders: Scalars['Int']['output'];
  /** The network ID that the token is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The token's contract address. */
  tokenAddress: Scalars['String']['output'];
  /** The ID of the token (`tokenAddress:networkId`). */
  tokenId: Scalars['String']['output'];
};

/** docs: hide */
export type HydrationResponse = {
  __typename?: 'HydrationResponse';
  hydrationId: Scalars['String']['output'];
  queryExecutionId?: Maybe<Scalars['String']['output']>;
  queryExecutionState?: Maybe<Scalars['String']['output']>;
  status: HydrationStatus;
};

/** docs: hide */
export enum HydrationStatus {
  Failed = 'Failed',
  Finished = 'Finished',
  Queued = 'Queued',
  Running = 'Running'
}

/** docs: hide */
export type ImportUserContractListInput = {
  icon?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

/** Bar chart data. */
export type IndividualBarData = {
  __typename?: 'IndividualBarData';
  /** The buy volume in USD */
  buyVolume: Scalars['String']['output'];
  /** The number of unique buyers */
  buyers: Scalars['Int']['output'];
  /** The number of buys */
  buys: Scalars['Int']['output'];
  /** The closing price. */
  c: Scalars['Float']['output'];
  /** The high price. */
  h: Scalars['Float']['output'];
  /** The low price. */
  l: Scalars['Float']['output'];
  /** Liquidity in USD */
  liquidity: Scalars['String']['output'];
  /** The opening price. */
  o: Scalars['Float']['output'];
  /** The sell volume in USD */
  sellVolume: Scalars['String']['output'];
  /** The number of unique sellers */
  sellers: Scalars['Int']['output'];
  /** The number of sells */
  sells: Scalars['Int']['output'];
  /** The timestamp for the bar. */
  t: Scalars['Int']['output'];
  /** The number of traders */
  traders: Scalars['Int']['output'];
  /** The number of transactions */
  transactions: Scalars['Int']['output'];
  /** The volume. */
  v?: Maybe<Scalars['Int']['output']>;
  /** The volume with higher precision. */
  volume: Scalars['String']['output'];
  /** The volume in the network's base token */
  volumeNativeToken: Scalars['String']['output'];
};

/** Integer equals condition. */
export type IntEqualsCondition = {
  __typename?: 'IntEqualsCondition';
  /** The integer to equal. */
  eq: Scalars['Int']['output'];
};

/** Input for integer equals condition. */
export type IntEqualsConditionInput = {
  /** The integer to equal. */
  eq: Scalars['Int']['input'];
};

/** Event labels. Can be `sandwich` or `washtrade`. */
export type LabelsForEvent = {
  __typename?: 'LabelsForEvent';
  sandwich?: Maybe<SandwichLabelForEvent>;
  washtrade?: Maybe<WashtradeLabelForEvent>;
};

/** Metadata for a newly listed pair. */
export type LatestPair = {
  __typename?: 'LatestPair';
  /** The contract address for the pair. */
  address: Scalars['String']['output'];
  /** The contract address for the exchange. */
  exchangeHash: Scalars['String']['output'];
  /** The ID of the pair (`address:networkId`). */
  id: Scalars['String']['output'];
  /** The listing price, or first known price for the pair, in USD. */
  initialPriceUsd: Scalars['String']['output'];
  /** The unix timestamp for when liquidity was added to the pair. */
  liquidAt?: Maybe<Scalars['Int']['output']>;
  /** The total liquidity in the pair. */
  liquidity: Scalars['String']['output'];
  /** The token with higher liquidity within the pair. Can be `token0` or `token1`. */
  liquidityToken?: Maybe<Scalars['String']['output']>;
  /** The network ID the pair is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The newly added token within the pair. Can be `token0` or `token1`. */
  newToken: Scalars['String']['output'];
  /** The token with lower liquidity within the pair. Can be `token0` or `token1`. */
  nonLiquidityToken?: Maybe<Scalars['String']['output']>;
  /** The pre-existing token within the pair. Can be `token0` or `token1`. */
  oldToken: Scalars['String']['output'];
  /** The percent price change between the listing price and the current price. */
  priceChange: Scalars['Float']['output'];
  /** The newly added token price in USD. */
  priceUsd: Scalars['String']['output'];
  /** Metadata for `token0`. */
  token0: LatestPairToken;
  /** Metadata for `token1`. */
  token1: LatestPairToken;
  /** The unique hash for the transaction that added liquidity, if applicable, otherwise the transaction that added the pair. */
  transactionHash: Scalars['String']['output'];
};

/** Response returned by `getLatestPairs`. */
export type LatestPairConnection = {
  __typename?: 'LatestPairConnection';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** A list of newly listed pairs. */
  items: Array<LatestPair>;
};

/** Metadata for a token within a newly listed pair. */
export type LatestPairToken = {
  __typename?: 'LatestPairToken';
  /** The contract address for the token. */
  address: Scalars['String']['output'];
  /** The amount of `token` currently in the pair. */
  currentPoolAmount: Scalars['String']['output'];
  /** The precision to which the token can be divided. For example, the smallest unit for USDC is 0.000001 (6 decimals). */
  decimals: Scalars['Int']['output'];
  /** The ID of the token (`address:networkId`). */
  id: Scalars['String']['output'];
  /** The initial amount of `token` added to the pair. */
  initialPoolAmount: Scalars['String']['output'];
  /** The name of the token. */
  name: Scalars['String']['output'];
  /** The network ID the token is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The ID of the pair (`pairAddress:networkId`). */
  pairId: Scalars['String']['output'];
  /** The percent change `token` remaining in the pair since the initial add. */
  poolVariation: Scalars['Float']['output'];
  /** The symbol for the token. */
  symbol: Scalars['String']['output'];
};

/** Metadata for a newly created token. */
export type LatestToken = {
  __typename?: 'LatestToken';
  /** The unique hash for the token contract's creation block. */
  blockHash: Scalars['String']['output'];
  /** The block number of the token contract's creation. */
  blockNumber: Scalars['Int']['output'];
  /** The address of the token creator. */
  creatorAddress: Scalars['String']['output'];
  /** The token creator's network token balance. */
  creatorBalance: Scalars['String']['output'];
  /** The token's number of decimals. */
  decimals: Scalars['Int']['output'];
  /** The id of the new token. (tokenAddress:networkId) */
  id: Scalars['String']['output'];
  /** The network ID the token is deployed on. */
  networkId: Scalars['Int']['output'];
  /** Simulated token contract results, if available. */
  simulationResults: Array<LatestTokenSimResults>;
  /** The unix timestamp for the creation of the token. */
  timeCreated: Scalars['Int']['output'];
  /** The contract address of the new token. */
  tokenAddress: Scalars['String']['output'];
  /** The name of the token. */
  tokenName: Scalars['String']['output'];
  /** The symbol of the token. */
  tokenSymbol: Scalars['String']['output'];
  /** The total supply of the token. */
  totalSupply: Scalars['String']['output'];
  /** The index of the trace within the token contract's creation transaction. */
  traceIndex: Scalars['Int']['output'];
  /** The unique hash for the token contract's creation transaction. */
  transactionHash: Scalars['String']['output'];
  /** The index of the transaction within the block. */
  transactionIndex: Scalars['Int']['output'];
};

/** Response returned by `getLatestTokens`. */
export type LatestTokenConnection = {
  __typename?: 'LatestTokenConnection';
  /** A list of newly created tokens. */
  items: Array<LatestToken>;
};

export type LatestTokenSimResults = {
  __typename?: 'LatestTokenSimResults';
  /** Gas used for a buy transaction during simulation. */
  buyGasUsed?: Maybe<Scalars['String']['output']>;
  /** Whether or not a token was able to be succesfully bought during simulation. */
  buySuccess?: Maybe<Scalars['Boolean']['output']>;
  /** Tax paid for a buy transaction during simulation. */
  buyTax?: Maybe<Scalars['String']['output']>;
  /** Whether or not the contract ownership was able to be renounced during simulation. */
  canRenounceOwnership?: Maybe<Scalars['Boolean']['output']>;
  /** Whether or not the contract ownership was able to be transferred during simulation. */
  canTransferOwnership?: Maybe<Scalars['Boolean']['output']>;
  /** Whether or not the contract ownership is already renounced during simulation (owner is 0x0). */
  isOwnerRenounced?: Maybe<Scalars['Boolean']['output']>;
  /** The maximum token amount an address can buy during simulation. */
  maxBuyAmount?: Maybe<Scalars['String']['output']>;
  /** The maximum token amount an address can sell during simulation. */
  maxSellAmount?: Maybe<Scalars['String']['output']>;
  /** If a call was found to trigger liquidity & trading, this is the call name. */
  openTradingCall?: Maybe<Scalars['String']['output']>;
  /** Gas used for a sell transaction during simulation. */
  sellGasUsed?: Maybe<Scalars['String']['output']>;
  /** Whether or not a token was able to be succesfully sold during simulation. */
  sellSuccess?: Maybe<Scalars['Boolean']['output']>;
  /** Tax paid for a sell transaction during simulation. */
  sellTax?: Maybe<Scalars['String']['output']>;
};

export type LaunchpadData = {
  __typename?: 'LaunchpadData';
  /** Indicates if the launchpad is completed. */
  completed?: Maybe<Scalars['Boolean']['output']>;
  /** The unix timestamp when the launchpad was completed. */
  completedAt?: Maybe<Scalars['Int']['output']>;
  /** The slot number when the launchpad was completed. */
  completedSlot?: Maybe<Scalars['Int']['output']>;
  /** The percentage of the pool that was sold to the public. */
  graduationPercent?: Maybe<Scalars['Float']['output']>;
  /** The launchpad protocol */
  launchpadProtocol?: Maybe<Scalars['String']['output']>;
  /** Indicates if the launchpad was migrated. */
  migrated?: Maybe<Scalars['Boolean']['output']>;
  /** The unix timestamp when the launchpad was migrated. */
  migratedAt?: Maybe<Scalars['Int']['output']>;
  /** The pool address after the launchpad was migrated. */
  migratedPoolAddress?: Maybe<Scalars['String']['output']>;
  /** The slot number when the launchpad was migrated. */
  migratedSlot?: Maybe<Scalars['Int']['output']>;
  /** The name of the launchpad. */
  name?: Maybe<Scalars['String']['output']>;
  /** The address of the pool. */
  poolAddress?: Maybe<Scalars['String']['output']>;
};

/** Response returned by `onLaunchpadTokenEvent`. */
export type LaunchpadTokenEventOutput = {
  __typename?: 'LaunchpadTokenEventOutput';
  /** The contract address of the token. */
  address: Scalars['String']['output'];
  /** The number of buys in the last 24 hours. */
  buyCount1?: Maybe<Scalars['Int']['output']>;
  /** docs: hide */
  devBurnt?: Maybe<Scalars['Boolean']['output']>;
  /** docs: hide */
  devSold?: Maybe<Scalars['Boolean']['output']>;
  /** docs: hide */
  devSoldAll?: Maybe<Scalars['Boolean']['output']>;
  /** The type of event. */
  eventType: LaunchpadTokenEventType;
  /** The number of holders. */
  holders?: Maybe<Scalars['Int']['output']>;
  /** The market cap of the token. */
  marketCap?: Maybe<Scalars['String']['output']>;
  /** The network ID that the token is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The price of the token. */
  price?: Maybe<Scalars['Float']['output']>;
  /** The protocol of the token. */
  protocol: Scalars['String']['output'];
  /** The number of sells in the last 24 hours. */
  sellCount1?: Maybe<Scalars['Int']['output']>;
  /** Metadata for the token. */
  token: EnhancedToken;
  /** The number of transactions in the last 24 hours. */
  transactions1?: Maybe<Scalars['Int']['output']>;
  /** The volume of the token in the last 24 hours. */
  volume1?: Maybe<Scalars['Int']['output']>;
};

/** The type of event. Note that associated statistics such as `buyCount1`, `price`, etc. are only available for `Updated` events. */
export enum LaunchpadTokenEventType {
  /** The token has been completed */
  Completed = 'Completed',
  /** The token has been created with metadata */
  Created = 'Created',
  /** The token has been discovered */
  Deployed = 'Deployed',
  /** The token has been migrated */
  Migrated = 'Migrated',
  /** The token's statistics have been updated */
  Updated = 'Updated'
}

/** The protocol of the token. */
export enum LaunchpadTokenProtocol {
  FourMeme = 'FourMeme',
  Pump = 'Pump',
  RaydiumLaunchpad = 'RaydiumLaunchpad'
}

/** docs: hide */
export enum LevelTier {
  Bronze = 'BRONZE',
  Diamond = 'DIAMOND',
  Emerald = 'EMERALD',
  Gold = 'GOLD',
  Iron = 'IRON',
  Platinum = 'PLATINUM',
  Ruby = 'RUBY',
  Silver = 'SILVER'
}

/** docs: hide */
export enum LimitTriggerDirection {
  Gt = 'GT',
  Gte = 'GTE',
  Lt = 'LT',
  Lte = 'LTE'
}

/** docs: hide */
export enum LimitTriggerType {
  Marketcap = 'MARKETCAP',
  Price = 'PRICE'
}

export type LiquidityData = {
  __typename?: 'LiquidityData';
  /** The active liquidity in the pair. */
  active: Scalars['String']['output'];
  /** The inactive liquidity in the pair. */
  inactive: Scalars['String']['output'];
};

/** A record of locked liquidity */
export type LiquidityLock = {
  __typename?: 'LiquidityLock';
  /** The unix timestamp for when the lock was created. */
  createdAt: Scalars['Int']['output'];
  /** The inital amount of token0 locked. */
  initialAmountToken0: Scalars['String']['output'];
  /** The inital amount of token1 locked. */
  initialAmountToken1: Scalars['String']['output'];
  /** The amount of liquidity locked. */
  liquidityAmount: Scalars['String']['output'];
  /** If the liquidity position is represented by an NFT, this will contain the NFT data. */
  liquidityNftData?: Maybe<LiquidityNftData>;
  /**
   * The protocol that created the pair
   * @deprecated Use liquidityProtocolV2 instead
   */
  liquidityProtocol: LiquidityProtocol;
  /** The protocol that created the pair */
  liquidityProtocolV2: Scalars['String']['output'];
  /** The protocol with which the liquidity is locked. */
  lockProtocol: LiquidityLockProtocol;
  /** The address of the locker contract. */
  lockerAddress: Scalars['String']['output'];
  /** The network ID the pair is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The wallet address of the owner. */
  ownerAddress: Scalars['String']['output'];
  /** The pair address. */
  pairAddress: Scalars['String']['output'];
  /** The unix timestamp for when the lock expires. */
  unlockAt?: Maybe<Scalars['Int']['output']>;
};

export type LiquidityLockConnection = {
  __typename?: 'LiquidityLockConnection';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** A list of liquidity locks. */
  items: Array<LiquidityLock>;
};

/** Protocols that can lock liquidity */
export enum LiquidityLockProtocol {
  BasecampV1 = 'BASECAMP_V1',
  Bitbond = 'BITBOND',
  Burn = 'BURN',
  UncxV2 = 'UNCX_V2',
  UncxV3 = 'UNCX_V3'
}

/** Metadata about a pair's liquidity. Includes locked liquidity data. */
export type LiquidityMetadata = {
  __typename?: 'LiquidityMetadata';
  /** Data about unlocked liquidity. */
  liquidity: LiquidityData;
  /** Data about locked liquidity. */
  lockedLiquidity: LockedLiquidityData;
};

/** Liquidity NFT position data */
export type LiquidityNftData = {
  __typename?: 'LiquidityNftData';
  /** The address of the nft position manager contract. */
  nftPositionManagerAddress: Scalars['String']['output'];
  /** The tokenId of the liquidity position nft. */
  nftTokenId: Scalars['String']['output'];
};

/** Protocols that create trading pairs */
export enum LiquidityProtocol {
  PumpV1 = 'PUMP_V1',
  RaydiumV4 = 'RAYDIUM_V4',
  UniswapV2 = 'UNISWAP_V2',
  UniswapV3 = 'UNISWAP_V3',
  UseLiquidityProtocolV2 = 'USE_LIQUIDITY_PROTOCOL_V2'
}

/** docs: hide */
export type ListChartLayoutResponse = {
  __typename?: 'ListChartLayoutResponse';
  items?: Maybe<Array<Maybe<ChartLayout>>>;
};

/** Response returned by `listPairsWithMetadataForToken`. */
export type ListPairsForTokenResponse = {
  __typename?: 'ListPairsForTokenResponse';
  /** A list of pairs containing a given token. */
  results: Array<ListPairsForTokenValue>;
};

/** Metadata for a pair containing a given token. */
export type ListPairsForTokenValue = {
  __typename?: 'ListPairsForTokenValue';
  /** Metadata for token with lower liquidity within the pair. */
  backingToken: EnhancedToken;
  /** Exchange metadata for the pair. */
  exchange: Exchange;
  /** The total liquidity in the pair. */
  liquidity: Scalars['String']['output'];
  /** Metadata for the pair. */
  pair: Pair;
  /** The token of interest within the pair. Can be `token0` or `token1`. */
  quoteToken?: Maybe<QuoteToken>;
  /** Metadata for token with higher liquidity within the pair. */
  token: EnhancedToken;
  /** The volume for the pair in USD. */
  volume: Scalars['String']['output'];
};

/** docs: hide */
export type ListTopProposalStatsInput = {
  includeAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sortColumn?: InputMaybe<ContractProposalStatsSortColumn>;
};

/** Breakdown of how much and where liquidity is locked. */
export type LockBreakdown = {
  __typename?: 'LockBreakdown';
  /** The amount of active liquidity locked. */
  active: Scalars['String']['output'];
  /** The amount of inactive liquidity locked. */
  inactive: Scalars['String']['output'];
  /** The protocol with which the liquidity is locked. */
  lockProtocol: LiquidityLockProtocol;
};

/** Data about locked liquidity. */
export type LockedLiquidityData = {
  __typename?: 'LockedLiquidityData';
  /** The amount of active liquidity locked. */
  active: Scalars['String']['output'];
  /** The amount of inactive liquidity locked. */
  inactive: Scalars['String']['output'];
  /** A breakdown of how much and where liquidity is locked. */
  lockBreakdown: Array<Maybe<LockBreakdown>>;
};

/** Response returned by `getTokenEventsForMaker`. */
export type MakerEventConnection = {
  __typename?: 'MakerEventConnection';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** A list of transactions for a token's top pair. */
  items?: Maybe<Array<Maybe<Event>>>;
};

export type MakerEventsQueryInput = {
  /** The specific event type to filter by. */
  eventType?: InputMaybe<EventType>;
  /** The specific wallet address to filter by. */
  maker: Scalars['String']['input'];
  /** The network ID to filter by. */
  networkId?: InputMaybe<Scalars['Int']['input']>;
  /** The total amount of `quoteToken` involved in the swap in USD (`amountNonLiquidityToken` x `priceUsd`). */
  priceUsdTotal?: InputMaybe<NumberFilter>;
  /**
   * docs: hide
   * @deprecated Not used
   */
  quoteToken?: InputMaybe<QuoteToken>;
  /** The time range to filter by. */
  timestamp?: InputMaybe<EventQueryTimestampInput>;
  /** The token involved in the event. */
  tokenAddress?: InputMaybe<Scalars['String']['input']>;
};

/** docs: hide */
export type MappedPriceConfig = {
  __typename?: 'MappedPriceConfig';
  referenceNetworkId: Scalars['Int']['output'];
  referenceTokenAddress: Scalars['String']['output'];
  tokenAddress: Scalars['String']['output'];
  type: NetworkPriceType;
};

/** The status for a network supported on Defined. */
export type MetadataResponse = {
  __typename?: 'MetadataResponse';
  /** The last processed block on the network. */
  lastProcessedBlock?: Maybe<Scalars['Int']['output']>;
  /** The unix timestamp for the last processed block on the network. */
  lastProcessedTimestamp?: Maybe<Scalars['Int']['output']>;
  /** The network ID. */
  networkId: Scalars['Int']['output'];
  /** The name of the network. */
  networkName: Scalars['String']['output'];
};

export type MigrateTrackedWalletsInput = {
  fromUserId: Scalars['String']['input'];
  toUserId: Scalars['String']['input'];
};

export type MigrateTrackedWalletsOutput = {
  __typename?: 'MigrateTrackedWalletsOutput';
  fromUserId: Scalars['String']['output'];
  status: Scalars['String']['output'];
  toUserId: Scalars['String']['output'];
};

/** Event data for a token mint event. */
export type MintEventData = {
  __typename?: 'MintEventData';
  /** The amount of `token0` added to the pair. */
  amount0?: Maybe<Scalars['String']['output']>;
  /** The amount of `token0` added to the pair, adjusted by the number of decimals in the token. For example, if `amount0` is in WEI, `amount0Shifted` will be in ETH. */
  amount0Shifted?: Maybe<Scalars['String']['output']>;
  /** The amount of `token1` added to the pair. */
  amount1?: Maybe<Scalars['String']['output']>;
  /** The amount of `token1` added to the pair, adjusted by the number of decimals in the token. For example, USDC `amount1Shifted` will be by 6 decimals. */
  amount1Shifted?: Maybe<Scalars['String']['output']>;
  /** The lower tick boundary of the position. Only applicable for UniswapV3 events. */
  tickLower?: Maybe<Scalars['String']['output']>;
  /** The upper tick boundary of the position. Only applicable for UniswapV3 events. */
  tickUpper?: Maybe<Scalars['String']['output']>;
  /** The type of token event, `Mint`. */
  type: EventType;
};

/** docs: hide */
export type ModerateProposalInput = {
  address: Scalars['String']['input'];
  networkId: Scalars['Int']['input'];
  proposalNum: Scalars['Int']['input'];
  proposedAt: Scalars['Int']['input'];
  proposedBy: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** docs: hide */
  acceptProposal?: Maybe<Proposal>;
  /** docs: hide */
  addBetaUser: Scalars['String']['output'];
  /** docs: hide */
  addUserAchievement: UserAchievement;
  /** docs: hide */
  backfillHolders: BackfillHoldersResponse;
  /** docs: hide */
  backfillWallet: BackfillWalletResponse;
  /** docs: hide */
  backfillWalletAggregates: WalletAggregateBackfillStateResponse;
  /** docs: hide */
  banUser?: Maybe<User>;
  /** docs: hide */
  botUserLogin?: Maybe<ScarabUser>;
  /** docs: hide */
  cancelOrder: Scalars['Int']['output'];
  /** Create a new set of short-lived api access tokens */
  createApiTokens: Array<ApiToken>;
  /**
   * docs: hide
   * @deprecated use SaveChartLayout instead
   */
  createChartLayout?: Maybe<ChartLayout>;
  /** docs: hide */
  createDecoding: DecodingStatus;
  /** docs: hide */
  createLimitOrder: Order;
  /** docs: hide */
  createMarketOrder: Order;
  /** docs: hide */
  createNetworkConfig: NetworkConfig;
  /** docs: hide */
  createNotableWallet: NotableWallet;
  /** docs: hide */
  createProposals?: Maybe<Array<Maybe<CreateProposalResponse>>>;
  /** docs: hide */
  createScarabStrategy: Strategy;
  /** docs: hide */
  createTrackedWallets: Array<Maybe<TrackedWallet>>;
  /** docs: hide */
  createTurnkeySession: SessionKey;
  /** docs: hide */
  createTurnkeySignerKey: SignerKey;
  /** docs: hide */
  createUserContractList?: Maybe<UserContractList>;
  /** docs: hide */
  createUserContractListItem?: Maybe<UserContractListItem>;
  /** docs: hide */
  createWallet: ScarabWallet;
  /** docs: hide */
  createWalletSuborg: CreateWalletSuborgResponse;
  /** Create price, raw transaction, token/pair event, and NFT event webhooks. */
  createWebhooks: CreateWebhooksOutput;
  /** docs: hide */
  definedUserLinkWallet?: Maybe<DefinedUser>;
  /** docs: hide */
  definedUserLogin?: Maybe<DefinedUser>;
  /** Delete a single short-lived api access token by id */
  deleteApiToken: Scalars['String']['output'];
  /**
   * docs: hide
   * @deprecated unused (users cannot delete layouts)
   */
  deleteChartLayout?: Maybe<ChartLayout>;
  /** docs: hide */
  deleteDefinedUser: Scalars['Boolean']['output'];
  /** docs: hide */
  deleteNotableWallet: Scalars['Boolean']['output'];
  /** docs: hide */
  deleteScarabStrategy: Scalars['Boolean']['output'];
  /** docs: hide */
  deleteTrackedWallets: Array<Maybe<Scalars['String']['output']>>;
  /** docs: hide */
  deleteTurnkeySignerKey: Scalars['Int']['output'];
  /** docs: hide */
  deleteUserContractList?: Maybe<DeleteUserContractListResponse>;
  /** docs: hide */
  deleteUserContractListItem?: Maybe<DeleteUserContractListItemResponse>;
  /** Delete multiple webhooks. */
  deleteWebhooks?: Maybe<DeleteWebhooksOutput>;
  /** docs: hide */
  exportWallet: Scalars['String']['output'];
  /** docs: hide */
  getExchangeIconUpdateUrl?: Maybe<ExchangeIconUpdateUrlResponse>;
  /** docs: hide */
  getTokenIconUpdateUrl?: Maybe<TokenIconUpdateUrlResponse>;
  /** docs: hide */
  hidePortfolioToken: Scalars['String']['output'];
  /** docs: hide */
  importPrivateKey: ScarabWallet;
  /** docs: hide */
  importUserContractList?: Maybe<Scalars['Void']['output']>;
  /** docs: hide */
  initPrivateKeyImport: Scalars['String']['output'];
  /** docs: hide */
  linkReferralUserToReferrer?: Maybe<UserModel>;
  /** docs: hide */
  migrateTrackedWallets: MigrateTrackedWalletsOutput;
  /** docs: hide */
  payoutUserReferralRewards?: Maybe<PayoutUserReferralRewardsResponse>;
  /** docs: hide */
  refreshBalances: Array<Balance>;
  /** docs: hide */
  refreshHolderCount: Scalars['Int']['output'];
  /** docs: hide */
  refreshNftMetadata?: Maybe<RefreshNftMetadataResponse>;
  /** docs: hide */
  refreshToken?: Maybe<AuthenticationResponse>;
  /** docs: hide */
  rejectProposal?: Maybe<Proposal>;
  /** docs: hide */
  removeBetaUser: Scalars['String']['output'];
  /** docs: hide */
  removeUserAchievement: Scalars['Boolean']['output'];
  /** docs: hide */
  resetTurnkeySignerKey: Scalars['Int']['output'];
  /** docs: hide */
  revokeToken?: Maybe<RevokeTokenResponse>;
  /** docs: hide */
  saveChartDrawings?: Maybe<ChartDrawingsRecord>;
  /** docs: hide */
  saveChartLayout?: Maybe<ChartLayout>;
  /** docs: hide */
  setTurnkeySignerKey: Scalars['Int']['output'];
  /** docs: hide */
  setTurnkeyUserEmail?: Maybe<Scalars['Void']['output']>;
  /** docs: hide */
  setUserTrackedWalletSettings: UserTrackedWalletSettings;
  /** docs: hide */
  simulateTokenContract?: Maybe<SimulateTokenContractResponse>;
  /** docs: hide */
  startTurnkeyEmailRecovery?: Maybe<Scalars['Void']['output']>;
  /** docs: hide */
  unbanUser?: Maybe<User>;
  /** docs: hide */
  unhidePortfolioToken: Scalars['String']['output'];
  /**
   * docs: hide
   * @deprecated use SaveChartLayout instead (which creates if not found)
   */
  updateChartLayout?: Maybe<ChartLayout>;
  /** docs: hide */
  updateExchange?: Maybe<Exchange>;
  /** docs: hide */
  updateFeature?: Maybe<Feature>;
  /** docs: hide */
  updateNetworkConfig: NetworkConfig;
  /** docs: hide */
  updateScarabStrategy: Strategy;
  /** docs: hide */
  updateTrackedWallets: Array<Maybe<TrackedWallet>>;
  /** docs: hide */
  updateUserContractList?: Maybe<UserContractList>;
  /** docs: hide */
  updateUserNonce?: Maybe<UserModel>;
  /** docs: hide */
  updateUserReferralCode?: Maybe<UpdateUserReferralCodeResponse>;
  /** docs: hide */
  updateWalletLabel?: Maybe<ScarabWallet>;
  /** docs: hide */
  userConnectScarab?: Maybe<ScarabUser>;
  /** docs: hide */
  userLogin?: Maybe<AuthenticationResponse>;
};


export type MutationAcceptProposalArgs = {
  input?: InputMaybe<ModerateProposalInput>;
};


export type MutationAddBetaUserArgs = {
  address: Scalars['String']['input'];
};


export type MutationAddUserAchievementArgs = {
  payload: AddUserAchievementInput;
};


export type MutationBackfillHoldersArgs = {
  input: BackfillHoldersInput;
};


export type MutationBackfillWalletArgs = {
  input: BackfillWalletInput;
};


export type MutationBackfillWalletAggregatesArgs = {
  input: WalletAggregateBackfillInput;
};


export type MutationBanUserArgs = {
  input?: InputMaybe<BanUserInput>;
};


export type MutationBotUserLoginArgs = {
  verificationToken: Scalars['String']['input'];
};


export type MutationCancelOrderArgs = {
  orderId: Scalars['Int']['input'];
};


export type MutationCreateApiTokensArgs = {
  input: CreateApiTokensInput;
};


export type MutationCreateChartLayoutArgs = {
  input?: InputMaybe<NewChartLayoutInput>;
};


export type MutationCreateDecodingArgs = {
  input: CreateDecodingInput;
};


export type MutationCreateLimitOrderArgs = {
  input: CreateLimitOrderInput;
};


export type MutationCreateMarketOrderArgs = {
  input: CreateMarketOrderInput;
};


export type MutationCreateNetworkConfigArgs = {
  input: CreateNetworkConfigInput;
};


export type MutationCreateNotableWalletArgs = {
  input: CreateNotableWalletInput;
};


export type MutationCreateProposalsArgs = {
  input: CreateProposalsInput;
};


export type MutationCreateScarabStrategyArgs = {
  input: CreateStrategyInput;
};


export type MutationCreateTrackedWalletsArgs = {
  input: CreateTrackedWalletsInput;
};


export type MutationCreateUserContractListArgs = {
  input?: InputMaybe<CreateUserContractListInput>;
};


export type MutationCreateUserContractListItemArgs = {
  input?: InputMaybe<CreateUserContractListItemInput>;
};


export type MutationCreateWalletArgs = {
  payload: CreateWalletInput;
};


export type MutationCreateWalletSuborgArgs = {
  payload: CreateWalletSuborgInput;
};


export type MutationCreateWebhooksArgs = {
  input: CreateWebhooksInput;
};


export type MutationDefinedUserLinkWalletArgs = {
  walletAddress: Scalars['String']['input'];
};


export type MutationDeleteApiTokenArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteChartLayoutArgs = {
  input?: InputMaybe<DeleteChartLayoutInput>;
};


export type MutationDeleteNotableWalletArgs = {
  walletAddress: Scalars['String']['input'];
};


export type MutationDeleteScarabStrategyArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteTrackedWalletsArgs = {
  input: DeleteTrackedWalletsInput;
};


export type MutationDeleteUserContractListArgs = {
  input?: InputMaybe<DeleteUserContractListInput>;
};


export type MutationDeleteUserContractListItemArgs = {
  input?: InputMaybe<DeleteUserContractListItemInput>;
};


export type MutationDeleteWebhooksArgs = {
  input: DeleteWebhooksInput;
};


export type MutationExportWalletArgs = {
  payload: SignedRequest;
};


export type MutationGetExchangeIconUpdateUrlArgs = {
  id: Scalars['String']['input'];
};


export type MutationGetTokenIconUpdateUrlArgs = {
  id: Scalars['String']['input'];
};


export type MutationHidePortfolioTokenArgs = {
  tokenId: Scalars['String']['input'];
};


export type MutationImportPrivateKeyArgs = {
  payload: PrivateKeyInput;
};


export type MutationImportUserContractListArgs = {
  input: ImportUserContractListInput;
};


export type MutationInitPrivateKeyImportArgs = {
  payload: SignedRequest;
};


export type MutationLinkReferralUserToReferrerArgs = {
  referralCode: Scalars['String']['input'];
  referralUserId: Scalars['String']['input'];
};


export type MutationMigrateTrackedWalletsArgs = {
  input: MigrateTrackedWalletsInput;
};


export type MutationPayoutUserReferralRewardsArgs = {
  userIds: Array<Scalars['String']['input']>;
};


export type MutationRefreshBalancesArgs = {
  input: Array<RefreshBalancesInput>;
};


export type MutationRefreshHolderCountArgs = {
  input: RefreshHolderCountInput;
};


export type MutationRefreshNftMetadataArgs = {
  input?: InputMaybe<RefreshNftMetadataInput>;
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRejectProposalArgs = {
  input?: InputMaybe<ModerateProposalInput>;
};


export type MutationRemoveBetaUserArgs = {
  address: Scalars['String']['input'];
};


export type MutationRemoveUserAchievementArgs = {
  payload: RemoveUserAchievementInput;
};


export type MutationResetTurnkeySignerKeyArgs = {
  payload: ResetSignerKeyInput;
  sessionMetadata?: InputMaybe<SessionMetadata>;
};


export type MutationRevokeTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationSaveChartDrawingsArgs = {
  input: SaveChartDrawingsInput;
};


export type MutationSaveChartLayoutArgs = {
  input: ChartLayoutInput;
};


export type MutationSetTurnkeySignerKeyArgs = {
  payload: SignerKeyInput;
  sessionMetadata?: InputMaybe<SessionMetadata>;
};


export type MutationSetTurnkeyUserEmailArgs = {
  id: Scalars['String']['input'];
  payload: TurnkeyUserEmailInput;
};


export type MutationSetUserTrackedWalletSettingsArgs = {
  input: UserTrackedWalletSettingsInput;
};


export type MutationSimulateTokenContractArgs = {
  input: SimulateTokenContractInput;
};


export type MutationStartTurnkeyEmailRecoveryArgs = {
  payload: TurnkeyEmailRecoveryInput;
};


export type MutationUnbanUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationUnhidePortfolioTokenArgs = {
  tokenId: Scalars['String']['input'];
};


export type MutationUpdateChartLayoutArgs = {
  input?: InputMaybe<UpdateChartLayoutInput>;
};


export type MutationUpdateExchangeArgs = {
  id: Scalars['String']['input'];
  input: UpdateExchangeInput;
};


export type MutationUpdateFeatureArgs = {
  input: UpdateFeatureInput;
};


export type MutationUpdateNetworkConfigArgs = {
  id: Scalars['ID']['input'];
  input: UpdateNetworkConfigInput;
};


export type MutationUpdateScarabStrategyArgs = {
  id: Scalars['Int']['input'];
  input: UpdateStrategyInput;
};


export type MutationUpdateTrackedWalletsArgs = {
  input: UpdateTrackedWalletsInput;
};


export type MutationUpdateUserContractListArgs = {
  input?: InputMaybe<UpdateUserContractListInput>;
};


export type MutationUpdateUserNonceArgs = {
  publicWalletAddress?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateUserReferralCodeArgs = {
  newReferralCode: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationUpdateWalletLabelArgs = {
  label: Scalars['String']['input'];
  walletId: Scalars['Int']['input'];
};


export type MutationUserConnectScarabArgs = {
  message: Scalars['String']['input'];
  signature: Scalars['String']['input'];
};


export type MutationUserLoginArgs = {
  message: Scalars['String']['input'];
  referralCode?: InputMaybe<Scalars['String']['input']>;
  signature: Scalars['String']['input'];
};

/** A network supported on Defined. */
export type Network = {
  __typename?: 'Network';
  /** The network ID. For example, `42161` for `arbitrum`. */
  id: Scalars['Int']['output'];
  /** The name of the network. For example, `arbitrum`. */
  name: Scalars['String']['output'];
  networkShortName?: Maybe<Scalars['String']['output']>;
};

/** docs: hide */
export type NetworkBreakdown = {
  __typename?: 'NetworkBreakdown';
  nativeTokenBalance: Scalars['String']['output'];
  networkId: Scalars['Int']['output'];
  statsDay1?: Maybe<WindowedWalletStats>;
  statsDay30?: Maybe<WindowedWalletStats>;
  statsWeek1?: Maybe<WindowedWalletStats>;
  statsYear1?: Maybe<WindowedWalletStats>;
};

/** docs: hide */
export type NetworkConfig = AptosNetworkConfig | EvmNetworkConfig | SolanaNetworkConfig | StarknetNetworkConfig | SuiNetworkConfig;

/** docs: hide */
export type NetworkConfigBase = {
  baseTokenAddress: Scalars['String']['output'];
  baseTokenSymbol: Scalars['String']['output'];
  color?: Maybe<Scalars['String']['output']>;
  defaultPairAddress: Scalars['String']['output'];
  defaultPairQuoteToken: QuoteToken;
  enabled: Scalars['Boolean']['output'];
  explorer: ExplorerConfig;
  id: Scalars['ID']['output'];
  mainnet: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  networkIconUrl: Scalars['String']['output'];
  networkId: Scalars['Int']['output'];
  networkName: Scalars['String']['output'];
  networkShortName: Scalars['String']['output'];
  networkType: NetworkConfigType;
  newTokensEnabled?: Maybe<Scalars['Boolean']['output']>;
  pricing: Array<NetworkPriceConfig>;
  stableCoinAddresses?: Maybe<Array<Scalars['String']['output']>>;
  wrappedBaseTokenSymbol: Scalars['String']['output'];
};

/** docs: hide */
export enum NetworkConfigType {
  Aptos = 'APTOS',
  Evm = 'EVM',
  Solana = 'SOLANA',
  Starknet = 'STARKNET',
  Sui = 'SUI'
}

/** docs: hide */
export enum NetworkOrderBy {
  Liquidity = 'LIQUIDITY',
  Transactions = 'TRANSACTIONS',
  Volume = 'VOLUME'
}

/** docs: hide */
export type NetworkPriceConfig = ConstantPriceConfig | ExternalPriceConfig | MappedPriceConfig;

/** docs: hide */
export enum NetworkPriceType {
  Constant = 'CONSTANT',
  External = 'EXTERNAL',
  Mapped = 'MAPPED'
}

/** docs: hide */
export enum NetworkType {
  Ethereum = 'ETHEREUM',
  Solana = 'SOLANA',
  Starknet = 'STARKNET',
  Tron = 'TRON'
}

/** docs: hide */
export type NetworkWalletFilterConnection = {
  __typename?: 'NetworkWalletFilterConnection';
  /** The number of wallets returned. */
  count: Scalars['Int']['output'];
  /** Where in the list the server started when returning items. */
  offset: Scalars['Int']['output'];
  /** The list of wallets matching the filter parameters. */
  results: Array<NetworkWalletFilterResult>;
};

/** docs: hide */
export type NetworkWalletFilterResult = {
  __typename?: 'NetworkWalletFilterResult';
  /** The wallet address */
  address: Scalars['String']['output'];
  /** Average profit in USD per trade in the past day */
  averageProfitUsdPerTrade1d: Scalars['String']['output'];
  /** Average profit in USD per trade in the past week */
  averageProfitUsdPerTrade1w: Scalars['String']['output'];
  /** Average profit in USD per trade in the past year */
  averageProfitUsdPerTrade1y: Scalars['String']['output'];
  /** Average profit in USD per trade in the past 30 days */
  averageProfitUsdPerTrade30d: Scalars['String']['output'];
  /** Average swap amount in USD in the past day */
  averageSwapAmountUsd1d: Scalars['String']['output'];
  /** Average swap amount in USD in the past week */
  averageSwapAmountUsd1w: Scalars['String']['output'];
  /** Average swap amount in USD in the past year */
  averageSwapAmountUsd1y: Scalars['String']['output'];
  /** Average swap amount in USD in the past 30 days */
  averageSwapAmountUsd30d: Scalars['String']['output'];
  /** The unix timestamp for the first transaction from this wallet */
  firstTransactionAt?: Maybe<Scalars['Int']['output']>;
  /** The labels associated with the wallet */
  labels: Array<Scalars['String']['output']>;
  /** The unix timestamp for the last transaction from this wallet */
  lastTransactionAt: Scalars['Int']['output'];
  /** The native token balance of the wallet */
  nativeTokenBalance: Scalars['String']['output'];
  /** The network ID of the wallet */
  networkId: Scalars['Int']['output'];
  /** Realized profit percentage in the past day */
  realizedProfitPercentage1d: Scalars['Float']['output'];
  /** Realized profit percentage in the past week */
  realizedProfitPercentage1w: Scalars['Float']['output'];
  /** Realized profit percentage in the past year */
  realizedProfitPercentage1y: Scalars['Float']['output'];
  /** Realized profit percentage in the past 30 days */
  realizedProfitPercentage30d: Scalars['Float']['output'];
  /** Realized profit in USD in the past day */
  realizedProfitUsd1d: Scalars['String']['output'];
  /** Realized profit in USD in the past week */
  realizedProfitUsd1w: Scalars['String']['output'];
  /** Realized profit in USD in the past year */
  realizedProfitUsd1y: Scalars['String']['output'];
  /** Realized profit in USD in the past 30 days */
  realizedProfitUsd30d: Scalars['String']['output'];
  /** The scammer score for the wallet. */
  scammerScore?: Maybe<Scalars['Int']['output']>;
  /** Number of swaps in the past day */
  swaps1d: Scalars['Int']['output'];
  /** Number of swaps in the past week */
  swaps1w: Scalars['Int']['output'];
  /** Number of swaps in the past year */
  swaps1y: Scalars['Int']['output'];
  /** Number of swaps in the past 30 days */
  swaps30d: Scalars['Int']['output'];
  /** Total number of swaps in the past day including all tokens */
  swapsAll1d: Scalars['Int']['output'];
  /** Total number of swaps in the past week including all tokens */
  swapsAll1w: Scalars['Int']['output'];
  /** Total number of swaps in the past year including all tokens */
  swapsAll1y: Scalars['Int']['output'];
  /** Total number of swaps in the past 30 days including all tokens */
  swapsAll30d: Scalars['Int']['output'];
  /** Number of unique tokens traded in the past day */
  uniqueTokens1d: Scalars['Int']['output'];
  /** Number of unique tokens traded in the past week */
  uniqueTokens1w: Scalars['Int']['output'];
  /** Number of unique tokens traded in the past year */
  uniqueTokens1y: Scalars['Int']['output'];
  /** Number of unique tokens traded in the past 30 days */
  uniqueTokens30d: Scalars['Int']['output'];
  /** Volume in USD in the past day */
  volumeUsd1d: Scalars['String']['output'];
  /** Volume in USD in the past week */
  volumeUsd1w: Scalars['String']['output'];
  /** Volume in USD in the past year */
  volumeUsd1y: Scalars['String']['output'];
  /** Volume in USD in the past 30 days */
  volumeUsd30d: Scalars['String']['output'];
  /** Total volume in USD in the past day including all tokens */
  volumeUsdAll1d: Scalars['String']['output'];
  /** Total volume in USD in the past week including all tokens */
  volumeUsdAll1w: Scalars['String']['output'];
  /** Total volume in USD in the past year including all tokens */
  volumeUsdAll1y: Scalars['String']['output'];
  /** Total volume in USD in the past 30 days including all tokens */
  volumeUsdAll30d: Scalars['String']['output'];
  /** Win rate in the past day */
  winRate1d: Scalars['Float']['output'];
  /** Win rate in the past week */
  winRate1w: Scalars['Float']['output'];
  /** Win rate in the past year */
  winRate1y: Scalars['Float']['output'];
  /** Win rate in the past 30 days */
  winRate30d: Scalars['Float']['output'];
};

/** docs: hide */
export type NetworkWalletStats = {
  __typename?: 'NetworkWalletStats';
  nativeTokenBalance: Scalars['String']['output'];
  networkId: Scalars['Int']['output'];
};

/** docs: hide */
export type NewChartLayoutInput = {
  content: Scalars['String']['input'];
  name: Scalars['String']['input'];
  resolution: Scalars['String']['input'];
  symbol: Scalars['String']['input'];
};

/** docs: hide */
export type NewDeviceMetadataType = {
  __typename?: 'NewDeviceMetadataType';
  DeviceGroupKey?: Maybe<Scalars['String']['output']>;
  DeviceKey?: Maybe<Scalars['String']['output']>;
};

/** docs: hide */
export type NewPolicy = {
  __typename?: 'NewPolicy';
  condition?: Maybe<Scalars['String']['output']>;
  consensus?: Maybe<Scalars['String']['output']>;
  effect: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  policyName: Scalars['String']['output'];
};

/** Event data for creating a new NFT pool. */
export type NewPoolEventData = {
  __typename?: 'NewPoolEventData';
  /** The wallet address that will receive the tokens or NFT sent to the pair during swaps. */
  assetRecipientAddress: Scalars['String']['output'];
  /** The contract address of the bonding curve. */
  bondingCurveAddress: Scalars['String']['output'];
  /** The bonding curve type that defines how the prices of NFTs change after each buy or sell within a pool. */
  bondingCurveType: BondingCurveType;
  /** The initial price at which the pool is willing to buy an NFT in the pool's liquidity token. */
  buyPriceT: Scalars['String']['output'];
  /** The contract address of the NFT collection. */
  collectionAddress: Scalars['String']['output'];
  /** The unix timestamp for the time the pool was created. */
  createdAt: Scalars['Int']['output'];
  /** The initial delta used in the bonding curve. */
  delta: Scalars['String']['output'];
  /** The pool fee amount in the pool's liquidity token. */
  feeAmountT: Scalars['String']['output'];
  /** The ratio of the transaction token to the network's base token. */
  nbtRatio: Scalars['String']['output'];
  /** The network ID the NFT collection is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The number of NFTs in the contract after the block has processed. */
  nftTokenBalance: Scalars['String']['output'];
  /** The wallet address of the pool owner. */
  ownerAddress: Scalars['String']['output'];
  /** The contract address of the NFT pool. */
  poolAddress: Scalars['String']['output'];
  /** The initial price at which the pool is willing to sell an NFT in the pool's liquidity token. */
  sellPriceT: Scalars['String']['output'];
  /** The initial spot price in the pool's liquidity token. */
  startPriceT: Scalars['String']['output'];
  /** The contract address of the liquidity token of the pool (usually WETH). */
  tokenAddress: Scalars['String']['output'];
  /** The amount of token in the contract after the block has processed in the pool's liquidity token. */
  tokenBalanceT: Scalars['String']['output'];
  /** The type of NFT pool event, `NEW_POOL`. */
  type: NftPoolEventType;
  /** The ratio of the transaction token to USD. */
  usdRatio: Scalars['String']['output'];
};

/** Event data for creating a new NFT pool. */
export type NewPoolEventDataV2 = {
  __typename?: 'NewPoolEventDataV2';
  /** The wallet address that will receive the tokens or NFT sent to the pair during swaps. */
  assetRecipientAddress: Scalars['String']['output'];
  /** The contract address of the bonding curve. */
  bondingCurveAddress: Scalars['String']['output'];
  /** The bonding curve type that defines how the prices of NFTs change after each buy or sell within a pool. */
  bondingCurveType: BondingCurveType;
  /** The initial price at which the pool is willing to buy an NFT in the pool's liquidity token. */
  buyPriceT: Scalars['String']['output'];
  /** The contract address of the NFT collection. */
  collectionAddress: Scalars['String']['output'];
  /** The unix timestamp for the time the pool was created. */
  createdAt: Scalars['Int']['output'];
  /** The initial delta used in the bonding curve. */
  delta: Scalars['String']['output'];
  /** The pool fee amount in the pool's liquidity token. */
  feeAmountT: Scalars['String']['output'];
  /** The ratio of the transaction token to the network's base token. */
  nbtRatio: Scalars['String']['output'];
  /** The network ID the NFT collection is deployed on. */
  networkId: Scalars['Int']['output'];
  /** *New Param*: The list of NFT assets withdrawn. More extensive info than nftTokenIds. */
  nftAssets?: Maybe<Array<Maybe<NftAsset>>>;
  /** The list of NFT token IDs initially deposited. */
  nftTokenIds: Array<Scalars['String']['output']>;
  /** The amount of each NFT token initially deposited. */
  nftTokenQuantities: Array<Maybe<Scalars['String']['output']>>;
  /** The wallet address of the pool owner. */
  ownerAddress: Scalars['String']['output'];
  /** The contract address of the NFT pool. */
  poolAddress: Scalars['String']['output'];
  /** The type of NFT in the pool. */
  poolNftType: PoolNftType;
  /** The property checker contract address for the pool. */
  propertyChecker?: Maybe<Scalars['String']['output']>;
  /** The list of royalties for the pool. Only applicable for `SUDOSWAP_V2` pools. */
  royalties?: Maybe<Array<Maybe<NftPoolRoyalty>>>;
  /** The initial price at which the pool is willing to sell an NFT in the pool's liquidity token. */
  sellPriceT: Scalars['String']['output'];
  /** The initial spot price in the pool's liquidity token. */
  startPriceT: Scalars['String']['output'];
  /** The contract address of the liquidity token of the pool (usually WETH). */
  tokenAddress: Scalars['String']['output'];
  /** The amount of token in the contract after the block has processed in the pool's liquidity token. */
  tokenBalanceT: Scalars['String']['output'];
  /** The type of NFT pool event, `NEW_POOL`. */
  type: NftPoolEventType;
  /** The ratio of the transaction token to USD. */
  usdRatio: Scalars['String']['output'];
};

/** docs: hide */
export type NewProposalInput = {
  address: Scalars['String']['input'];
  contractType: ContractType;
  networkId: Scalars['Int']['input'];
  proposalData: Scalars['JSON']['input'];
  proposalType: ContractProposalType;
};

/** An NFT asset. */
export type NftAsset = {
  __typename?: 'NftAsset';
  /** The contract address of the NFT collection. */
  address: Scalars['String']['output'];
  /** The attributes for the NFT asset. */
  attributes?: Maybe<Array<NftAssetAttribute>>;
  /** The description of the NFT asset. */
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of the NFT asset (`address`:`networkId`). */
  id: Scalars['String']['output'];
  /** The NFT asset media. */
  media?: Maybe<NftAssetMedia>;
  /** The name of the NFT asset. */
  name?: Maybe<Scalars['String']['output']>;
  /** The network ID the NFT collection is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The source image URI linked by smart contract metadata. */
  originalImage?: Maybe<Scalars['String']['output']>;
  /** The number of NFT assets with the same NFT token ID. Only applicable for ERC1155 tokens. */
  quantity?: Maybe<Scalars['String']['output']>;
  /** Raw NFT metadata from the smart contract. */
  rawAssetData?: Maybe<RawNftAssetData>;
  /** The token ID of the NFT asset. */
  tokenId: Scalars['String']['output'];
  /** The URI provided by the smart contract. Typically JSON that contains metadata. */
  uri?: Maybe<Scalars['String']['output']>;
};

/** Attributes for an NFT asset. */
export type NftAssetAttribute = {
  __typename?: 'NftAssetAttribute';
  /** Suggested class name to use for css styling. An optional attribute of ERC-1155 assets. */
  class?: Maybe<Scalars['String']['output']>;
  /** Suggested CSS styling. An optional attribute of ERC-1155 assets. */
  css?: Maybe<Scalars['String']['output']>;
  /** The attribute display type. Can be `Trait`, `Stat`, `Ranking`, `BoostNumber`, `BoostPercentage` or `Date`. */
  displayType: NftAssetAttributeDisplayType;
  /** The max value, if applicable. */
  maxValue?: Maybe<Scalars['String']['output']>;
  /** The name of the attribute. */
  name: Scalars['String']['output'];
  /** The value of the attribute. */
  value: Scalars['String']['output'];
  /** The type for the `value` field. Can be `String`, `Number` or `Array`. */
  valueType: NftAssetAttributeType;
};

/** The display type for the NFT asset attribute. */
export enum NftAssetAttributeDisplayType {
  BoostNumber = 'BoostNumber',
  BoostPercentage = 'BoostPercentage',
  Date = 'Date',
  Ranking = 'Ranking',
  Stat = 'Stat',
  Trait = 'Trait'
}

/** The type for the NFT asset attribute `value` field. */
export enum NftAssetAttributeType {
  Array = 'Array',
  Number = 'Number',
  String = 'String'
}

export type NftAssetError = {
  __typename?: 'NftAssetError';
  /** The contract address of the NFT collection. */
  address: Scalars['String']['output'];
  /** The ID of the NFT asset (`address`:`networkId`). */
  id: Scalars['String']['output'];
  /** The message of the asset error. */
  message: Scalars['String']['output'];
  /** The network ID the NFT collection is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The status of the asset error. */
  status: NftAssetErrorStatus;
  /** The token ID of the NFT asset. */
  tokenId: Scalars['String']['output'];
};

export enum NftAssetErrorStatus {
  IndexingInProgress = 'INDEXING_IN_PROGRESS',
  NotFound = 'NOT_FOUND'
}

/** NFT asset media. */
export type NftAssetMedia = {
  __typename?: 'NftAssetMedia';
  /** The URL for a full size image of the NFT asset. */
  image: Scalars['String']['output'];
  /** Whether the NFT asset media has finished processing. */
  processed?: Maybe<Scalars['Boolean']['output']>;
  /** The URL for large generated thumbnail of the NFT asset. */
  thumbLg: Scalars['String']['output'];
  /** The URL for small generated thumbnail of the NFT asset. */
  thumbSm: Scalars['String']['output'];
};

/** Response returned by `getNftAssets`. */
export type NftAssetsConnection = {
  __typename?: 'NftAssetsConnection';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** A list of errors encountered while fetching the NFT assets. Errors correspond to null values in `items` by array index. */
  itemErrors?: Maybe<Array<Maybe<NftAssetError>>>;
  /** A list of NFT assets. */
  items?: Maybe<Array<Maybe<NftAsset>>>;
};

/** Wallet balance of an Nft Collection. */
export type NftBalance = {
  __typename?: 'NftBalance';
  /** The number of items held by the wallet. */
  balance: Scalars['String']['output'];
  /** The ID of the collection (`collectionAddress:networkId`). */
  collectionId: Scalars['String']['output'];
  /** The address of the wallet. */
  walletAddress: Scalars['String']['output'];
};

/** Price stats for an NFT collection over a time frame. Either in USD or the network's base token. */
export type NftCollectionCurrencyStats = {
  __typename?: 'NftCollectionCurrencyStats';
  /** The average sale price in the time frame. */
  average?: Maybe<NftStatsStringMetrics>;
  /** The closing price for the time frame. */
  close?: Maybe<NftStatsStringMetrics>;
  /** The highest sale price in the time frame. */
  highestSale?: Maybe<NftStatsStringMetrics>;
  /** The lowest sale price in the time frame. */
  lowestSale?: Maybe<NftStatsStringMetrics>;
  /** The opening price for the time frame. */
  open?: Maybe<NftStatsStringMetrics>;
  /** The volume over the time frame. */
  volume?: Maybe<NftStatsStringMetrics>;
  /** The volume partitioned by fillsource over the time frame */
  volumeByFillsource?: Maybe<Array<Maybe<NftFillsourceStatsStringMetrics>>>;
  /** The percentages of total volume partitioned by fillsource over the time frame */
  volumePercentByFillsource?: Maybe<Array<Maybe<NftFillsourceStatsNumberMetrics>>>;
};

/** Stat and change for a string based fillsource amount. */
export type NftCollectionFillsourceNumberStat = {
  __typename?: 'NftCollectionFillsourceNumberStat';
  /** The amount of the stat traded in the current time frame. */
  amount: Scalars['Float']['output'];
  /** The change in fillsource volume between the previous and current time frame. */
  change?: Maybe<Scalars['Float']['output']>;
  /** The marketplace that filled the NFT order volume. (ex. OPENSEA, BLUR, etc.) */
  fillsource: Scalars['String']['output'];
};

/** Stat and change for a string based fillsource amount. */
export type NftCollectionFillsourceStringStat = {
  __typename?: 'NftCollectionFillsourceStringStat';
  /** The amount of the stat traded in the current time frame. */
  amount: Scalars['String']['output'];
  /** The change in fillsource volume between the previous and current time frame. */
  change?: Maybe<Scalars['Float']['output']>;
  /** The marketplace that filled the NFT order volume. (ex. OPENSEA, BLUR, etc.) */
  fillsource: Scalars['String']['output'];
};

/** Response returned by `filterNftCollections`. */
export type NftCollectionFilterConnection = {
  __typename?: 'NftCollectionFilterConnection';
  /** The number of NFT collections returned. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Where in the list the server started when returning items. */
  offset?: Maybe<Scalars['Int']['output']>;
  /** The list of NFT collections matching the filter parameters. */
  results?: Maybe<Array<Maybe<NftCollectionFilterResult>>>;
};

/** An NFT collection matching a set of filter parameters. */
export type NftCollectionFilterResult = {
  __typename?: 'NftCollectionFilterResult';
  /** The contract address of the NFT collection. */
  address?: Maybe<Scalars['String']['output']>;
  /** The token standard. Can be a variation of `ERC-721` or `ERC-1155`. */
  ercType?: Maybe<Scalars['String']['output']>;
  /** The marketplace address or `all`. Can be used to get marketplace-specific metrics. */
  grouping?: Maybe<Scalars['String']['output']>;
  /** The ID of the NFT collection (`address`:`networkId`). */
  id?: Maybe<Scalars['String']['output']>;
  /** The image URL for the collection or one of the assets within the collection. */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** The unix timestamp for the last event. */
  lastEventTimestamp?: Maybe<Scalars['Int']['output']>;
  /** The name of the NFT collection. */
  name?: Maybe<Scalars['String']['output']>;
  /** The network ID the NFT collection is deployed on. */
  networkId?: Maybe<Scalars['Int']['output']>;
  /** Stats for the past hour. */
  stats1h?: Maybe<NftStatsWindowWithChange>;
  /** Stats for the past 4 hours. */
  stats4h?: Maybe<NftStatsWindowWithChange>;
  /** Stats for the past 12 hours. */
  stats12h?: Maybe<NftStatsWindowWithChange>;
  /** Stats for the past 24 hours. */
  stats24h?: Maybe<NftStatsWindowWithChange>;
  /** The symbol of the NFT collection. */
  symbol?: Maybe<Scalars['String']['output']>;
  /** The unix timestamp indicating the last time the data was updated. Updates daily. */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The total supply of the NFT collection. */
  totalSupply?: Maybe<Scalars['String']['output']>;
};

/** Input filters for `filterNftCollections`. */
export type NftCollectionFilters = {
  /** The list of token standards to filter by. */
  ercType?: InputMaybe<Array<InputMaybe<NftContractErcType>>>;
  /** The unix timestamp for the last event. */
  lastEventTimestamp?: InputMaybe<NumberFilter>;
  /** The list of network IDs to filter by. */
  network?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Stats for the past hour. */
  stats1h?: InputMaybe<NftStatsWindowFilter>;
  /** Stats for the past 4 hours. */
  stats4h?: InputMaybe<NftStatsWindowFilter>;
  /** Stats for the past 12 hours. */
  stats12h?: InputMaybe<NftStatsWindowFilter>;
  /** Stats for the past 24 hours. */
  stats24h?: InputMaybe<NftStatsWindowFilter>;
  /** The total supply of the NFT collection. */
  totalSupply?: InputMaybe<NumberFilter>;
};

/** Response returned by `getNftCollectionMetadata`. */
export type NftCollectionMetadataResponse = {
  __typename?: 'NftCollectionMetadataResponse';
  /** Metadata for the NFT collection. */
  contract: NftContract;
  /** The ID of the NFT collection (`address`:`networkId`). */
  id: Scalars['String']['output'];
  /** The media for one of the assets within the NFT collection. */
  media?: Maybe<NftAssetMedia>;
  /** A list of stats for the NFT collection across different time frames. */
  stats?: Maybe<Array<Maybe<NftCollectionWindowStats>>>;
};

/** Numerical stats for an NFT collection over a time frame. */
export type NftCollectionNonCurrencyStats = {
  __typename?: 'NftCollectionNonCurrencyStats';
  /** The number of mints over the time frame. */
  mints?: Maybe<NftStatsNumberMetrics>;
  /** The number of sales over the time frame. */
  sales?: Maybe<NftStatsNumberMetrics>;
  /** The number of tokens sold over the time frame. */
  tokensSold?: Maybe<NftStatsStringMetrics>;
  /** The number of transfers over the time frame. */
  transfers?: Maybe<NftStatsNumberMetrics>;
  /** The number of unique buyers over the time frame. */
  uniqueBuyers?: Maybe<NftStatsNumberMetrics>;
  /** The number of unique minters over the time frame. */
  uniqueMinters?: Maybe<NftStatsNumberMetrics>;
  /** The number of unique wallets (buyers or sellers) over the time frame. */
  uniqueSalesWallets?: Maybe<NftStatsNumberMetrics>;
  /** The number of unique sellers over the time frame. */
  uniqueSellers?: Maybe<NftStatsNumberMetrics>;
};

/** Price stats for an NFT collection over a time frame. Either in USD or the network's base token. */
export type NftCollectionPriceStats = {
  __typename?: 'NftCollectionPriceStats';
  /** The average sale price. */
  average: Scalars['String']['output'];
  /** The change in average price between the previous and current time frame. */
  averageChange?: Maybe<Scalars['Float']['output']>;
  /** The highest sale price. */
  ceiling: Scalars['String']['output'];
  /** The change in ceiling price between the previous and current time frame. */
  ceilingChange?: Maybe<Scalars['Float']['output']>;
  /** The lowest sale price. */
  floor: Scalars['String']['output'];
  /** The change in floor price between the previous and current time frame. */
  floorChange?: Maybe<Scalars['Float']['output']>;
  /** The trade volume. */
  volume: Scalars['String']['output'];
  /** The volume partitioned by fillsource over the time frame */
  volumeByFillsource?: Maybe<Array<Maybe<NftCollectionFillsourceStringStat>>>;
  /** The change in volume between the previous and current time frame. */
  volumeChange?: Maybe<Scalars['Float']['output']>;
  /** The percentages of total volume partitioned by fillsource over the time frame */
  volumePercentByFillsource?: Maybe<Array<Maybe<NftCollectionFillsourceNumberStat>>>;
};

/** Input type of `NftCollectionRanking`. */
export type NftCollectionRanking = {
  /** The attribute to rank NFT collections by. */
  attribute?: InputMaybe<NftCollectionRankingAttribute>;
  /** The direction to apply to the ranking attribute. */
  direction?: InputMaybe<RankingDirection>;
};

/** The attribute used to rank NFT collections. */
export enum NftCollectionRankingAttribute {
  LastEventTimestamp = 'lastEventTimestamp',
  Stats1hNetworkBaseTokenAverageChange = 'stats1hNetworkBaseTokenAverageChange',
  Stats1hNetworkBaseTokenAverageCurrent = 'stats1hNetworkBaseTokenAverageCurrent',
  Stats1hNetworkBaseTokenAveragePrevious = 'stats1hNetworkBaseTokenAveragePrevious',
  Stats1hNetworkBaseTokenCloseChange = 'stats1hNetworkBaseTokenCloseChange',
  Stats1hNetworkBaseTokenCloseCurrent = 'stats1hNetworkBaseTokenCloseCurrent',
  Stats1hNetworkBaseTokenClosePrevious = 'stats1hNetworkBaseTokenClosePrevious',
  Stats1hNetworkBaseTokenHighestSaleChange = 'stats1hNetworkBaseTokenHighestSaleChange',
  Stats1hNetworkBaseTokenHighestSaleCurrent = 'stats1hNetworkBaseTokenHighestSaleCurrent',
  Stats1hNetworkBaseTokenHighestSalePrevious = 'stats1hNetworkBaseTokenHighestSalePrevious',
  Stats1hNetworkBaseTokenLowestSaleChange = 'stats1hNetworkBaseTokenLowestSaleChange',
  Stats1hNetworkBaseTokenLowestSaleCurrent = 'stats1hNetworkBaseTokenLowestSaleCurrent',
  Stats1hNetworkBaseTokenLowestSalePrevious = 'stats1hNetworkBaseTokenLowestSalePrevious',
  Stats1hNetworkBaseTokenOpenChange = 'stats1hNetworkBaseTokenOpenChange',
  Stats1hNetworkBaseTokenOpenCurrent = 'stats1hNetworkBaseTokenOpenCurrent',
  Stats1hNetworkBaseTokenOpenPrevious = 'stats1hNetworkBaseTokenOpenPrevious',
  Stats1hNetworkBaseTokenVolumeByFillsourceBlendChange = 'stats1hNetworkBaseTokenVolumeByFillsourceBlendChange',
  Stats1hNetworkBaseTokenVolumeByFillsourceBlendCurrent = 'stats1hNetworkBaseTokenVolumeByFillsourceBlendCurrent',
  Stats1hNetworkBaseTokenVolumeByFillsourceBlendPrevious = 'stats1hNetworkBaseTokenVolumeByFillsourceBlendPrevious',
  Stats1hNetworkBaseTokenVolumeByFillsourceBlurChange = 'stats1hNetworkBaseTokenVolumeByFillsourceBlurChange',
  Stats1hNetworkBaseTokenVolumeByFillsourceBlurCurrent = 'stats1hNetworkBaseTokenVolumeByFillsourceBlurCurrent',
  Stats1hNetworkBaseTokenVolumeByFillsourceBlurPrevious = 'stats1hNetworkBaseTokenVolumeByFillsourceBlurPrevious',
  Stats1hNetworkBaseTokenVolumeByFillsourceBlurV2Change = 'stats1hNetworkBaseTokenVolumeByFillsourceBlurV2Change',
  Stats1hNetworkBaseTokenVolumeByFillsourceBlurV2Current = 'stats1hNetworkBaseTokenVolumeByFillsourceBlurV2Current',
  Stats1hNetworkBaseTokenVolumeByFillsourceBlurV2Previous = 'stats1hNetworkBaseTokenVolumeByFillsourceBlurV2Previous',
  Stats1hNetworkBaseTokenVolumeByFillsourceCryptopunksChange = 'stats1hNetworkBaseTokenVolumeByFillsourceCryptopunksChange',
  Stats1hNetworkBaseTokenVolumeByFillsourceCryptopunksCurrent = 'stats1hNetworkBaseTokenVolumeByFillsourceCryptopunksCurrent',
  Stats1hNetworkBaseTokenVolumeByFillsourceCryptopunksPrevious = 'stats1hNetworkBaseTokenVolumeByFillsourceCryptopunksPrevious',
  Stats1hNetworkBaseTokenVolumeByFillsourceGemChange = 'stats1hNetworkBaseTokenVolumeByFillsourceGemChange',
  Stats1hNetworkBaseTokenVolumeByFillsourceGemCurrent = 'stats1hNetworkBaseTokenVolumeByFillsourceGemCurrent',
  Stats1hNetworkBaseTokenVolumeByFillsourceGemPrevious = 'stats1hNetworkBaseTokenVolumeByFillsourceGemPrevious',
  Stats1hNetworkBaseTokenVolumeByFillsourceLooksrareChange = 'stats1hNetworkBaseTokenVolumeByFillsourceLooksrareChange',
  Stats1hNetworkBaseTokenVolumeByFillsourceLooksrareCurrent = 'stats1hNetworkBaseTokenVolumeByFillsourceLooksrareCurrent',
  Stats1hNetworkBaseTokenVolumeByFillsourceLooksrarePrevious = 'stats1hNetworkBaseTokenVolumeByFillsourceLooksrarePrevious',
  Stats1hNetworkBaseTokenVolumeByFillsourceLooksrareV2Change = 'stats1hNetworkBaseTokenVolumeByFillsourceLooksrareV2Change',
  Stats1hNetworkBaseTokenVolumeByFillsourceLooksrareV2Current = 'stats1hNetworkBaseTokenVolumeByFillsourceLooksrareV2Current',
  Stats1hNetworkBaseTokenVolumeByFillsourceLooksrareV2Previous = 'stats1hNetworkBaseTokenVolumeByFillsourceLooksrareV2Previous',
  Stats1hNetworkBaseTokenVolumeByFillsourceOpenseaChange = 'stats1hNetworkBaseTokenVolumeByFillsourceOpenseaChange',
  Stats1hNetworkBaseTokenVolumeByFillsourceOpenseaCurrent = 'stats1hNetworkBaseTokenVolumeByFillsourceOpenseaCurrent',
  Stats1hNetworkBaseTokenVolumeByFillsourceOpenseaPrevious = 'stats1hNetworkBaseTokenVolumeByFillsourceOpenseaPrevious',
  Stats1hNetworkBaseTokenVolumeByFillsourceOpenseaProChange = 'stats1hNetworkBaseTokenVolumeByFillsourceOpenseaProChange',
  Stats1hNetworkBaseTokenVolumeByFillsourceOpenseaProCurrent = 'stats1hNetworkBaseTokenVolumeByFillsourceOpenseaProCurrent',
  Stats1hNetworkBaseTokenVolumeByFillsourceOpenseaProPrevious = 'stats1hNetworkBaseTokenVolumeByFillsourceOpenseaProPrevious',
  Stats1hNetworkBaseTokenVolumeByFillsourceSeaportChange = 'stats1hNetworkBaseTokenVolumeByFillsourceSeaportChange',
  Stats1hNetworkBaseTokenVolumeByFillsourceSeaportCurrent = 'stats1hNetworkBaseTokenVolumeByFillsourceSeaportCurrent',
  Stats1hNetworkBaseTokenVolumeByFillsourceSeaportPrevious = 'stats1hNetworkBaseTokenVolumeByFillsourceSeaportPrevious',
  Stats1hNetworkBaseTokenVolumeByFillsourceSudoswapChange = 'stats1hNetworkBaseTokenVolumeByFillsourceSudoswapChange',
  Stats1hNetworkBaseTokenVolumeByFillsourceSudoswapCurrent = 'stats1hNetworkBaseTokenVolumeByFillsourceSudoswapCurrent',
  Stats1hNetworkBaseTokenVolumeByFillsourceSudoswapPrevious = 'stats1hNetworkBaseTokenVolumeByFillsourceSudoswapPrevious',
  Stats1hNetworkBaseTokenVolumeByFillsourceSudoswapV2Change = 'stats1hNetworkBaseTokenVolumeByFillsourceSudoswapV2Change',
  Stats1hNetworkBaseTokenVolumeByFillsourceSudoswapV2Current = 'stats1hNetworkBaseTokenVolumeByFillsourceSudoswapV2Current',
  Stats1hNetworkBaseTokenVolumeByFillsourceSudoswapV2Previous = 'stats1hNetworkBaseTokenVolumeByFillsourceSudoswapV2Previous',
  Stats1hNetworkBaseTokenVolumeByFillsourceX2Y2Change = 'stats1hNetworkBaseTokenVolumeByFillsourceX2Y2Change',
  Stats1hNetworkBaseTokenVolumeByFillsourceX2Y2Current = 'stats1hNetworkBaseTokenVolumeByFillsourceX2Y2Current',
  Stats1hNetworkBaseTokenVolumeByFillsourceX2Y2Previous = 'stats1hNetworkBaseTokenVolumeByFillsourceX2Y2Previous',
  Stats1hNetworkBaseTokenVolumeChange = 'stats1hNetworkBaseTokenVolumeChange',
  Stats1hNetworkBaseTokenVolumeCurrent = 'stats1hNetworkBaseTokenVolumeCurrent',
  Stats1hNetworkBaseTokenVolumePrevious = 'stats1hNetworkBaseTokenVolumePrevious',
  Stats1hNonCurrencyMintsChange = 'stats1hNonCurrencyMintsChange',
  Stats1hNonCurrencyMintsCurrent = 'stats1hNonCurrencyMintsCurrent',
  Stats1hNonCurrencyMintsPrevious = 'stats1hNonCurrencyMintsPrevious',
  Stats1hNonCurrencySalesChange = 'stats1hNonCurrencySalesChange',
  Stats1hNonCurrencySalesCurrent = 'stats1hNonCurrencySalesCurrent',
  Stats1hNonCurrencySalesPrevious = 'stats1hNonCurrencySalesPrevious',
  Stats1hNonCurrencyTokensSoldChange = 'stats1hNonCurrencyTokensSoldChange',
  Stats1hNonCurrencyTokensSoldCurrent = 'stats1hNonCurrencyTokensSoldCurrent',
  Stats1hNonCurrencyTokensSoldPrevious = 'stats1hNonCurrencyTokensSoldPrevious',
  Stats1hNonCurrencyTransfersChange = 'stats1hNonCurrencyTransfersChange',
  Stats1hNonCurrencyTransfersCurrent = 'stats1hNonCurrencyTransfersCurrent',
  Stats1hNonCurrencyTransfersPrevious = 'stats1hNonCurrencyTransfersPrevious',
  Stats1hNonCurrencyUniqueBuyersChange = 'stats1hNonCurrencyUniqueBuyersChange',
  Stats1hNonCurrencyUniqueBuyersCurrent = 'stats1hNonCurrencyUniqueBuyersCurrent',
  Stats1hNonCurrencyUniqueBuyersPrevious = 'stats1hNonCurrencyUniqueBuyersPrevious',
  Stats1hNonCurrencyUniqueMintersChange = 'stats1hNonCurrencyUniqueMintersChange',
  Stats1hNonCurrencyUniqueMintersCurrent = 'stats1hNonCurrencyUniqueMintersCurrent',
  Stats1hNonCurrencyUniqueMintersPrevious = 'stats1hNonCurrencyUniqueMintersPrevious',
  Stats1hNonCurrencyUniqueSalesWalletsChange = 'stats1hNonCurrencyUniqueSalesWalletsChange',
  Stats1hNonCurrencyUniqueSalesWalletsCurrent = 'stats1hNonCurrencyUniqueSalesWalletsCurrent',
  Stats1hNonCurrencyUniqueSalesWalletsPrevious = 'stats1hNonCurrencyUniqueSalesWalletsPrevious',
  Stats1hNonCurrencyUniqueSellersChange = 'stats1hNonCurrencyUniqueSellersChange',
  Stats1hNonCurrencyUniqueSellersCurrent = 'stats1hNonCurrencyUniqueSellersCurrent',
  Stats1hNonCurrencyUniqueSellersPrevious = 'stats1hNonCurrencyUniqueSellersPrevious',
  Stats1hUsdAverageChange = 'stats1hUsdAverageChange',
  Stats1hUsdAverageCurrent = 'stats1hUsdAverageCurrent',
  Stats1hUsdAveragePrevious = 'stats1hUsdAveragePrevious',
  Stats1hUsdCloseChange = 'stats1hUsdCloseChange',
  Stats1hUsdCloseCurrent = 'stats1hUsdCloseCurrent',
  Stats1hUsdClosePrevious = 'stats1hUsdClosePrevious',
  Stats1hUsdHighestSaleChange = 'stats1hUsdHighestSaleChange',
  Stats1hUsdHighestSaleCurrent = 'stats1hUsdHighestSaleCurrent',
  Stats1hUsdHighestSalePrevious = 'stats1hUsdHighestSalePrevious',
  Stats1hUsdLowestSaleChange = 'stats1hUsdLowestSaleChange',
  Stats1hUsdLowestSaleCurrent = 'stats1hUsdLowestSaleCurrent',
  Stats1hUsdLowestSalePrevious = 'stats1hUsdLowestSalePrevious',
  Stats1hUsdOpenChange = 'stats1hUsdOpenChange',
  Stats1hUsdOpenCurrent = 'stats1hUsdOpenCurrent',
  Stats1hUsdOpenPrevious = 'stats1hUsdOpenPrevious',
  Stats1hUsdVolumeByFillsourceBlendChange = 'stats1hUsdVolumeByFillsourceBlendChange',
  Stats1hUsdVolumeByFillsourceBlendCurrent = 'stats1hUsdVolumeByFillsourceBlendCurrent',
  Stats1hUsdVolumeByFillsourceBlendPrevious = 'stats1hUsdVolumeByFillsourceBlendPrevious',
  Stats1hUsdVolumeByFillsourceBlurChange = 'stats1hUsdVolumeByFillsourceBlurChange',
  Stats1hUsdVolumeByFillsourceBlurCurrent = 'stats1hUsdVolumeByFillsourceBlurCurrent',
  Stats1hUsdVolumeByFillsourceBlurPrevious = 'stats1hUsdVolumeByFillsourceBlurPrevious',
  Stats1hUsdVolumeByFillsourceBlurV2Change = 'stats1hUsdVolumeByFillsourceBlurV2Change',
  Stats1hUsdVolumeByFillsourceBlurV2Current = 'stats1hUsdVolumeByFillsourceBlurV2Current',
  Stats1hUsdVolumeByFillsourceBlurV2Previous = 'stats1hUsdVolumeByFillsourceBlurV2Previous',
  Stats1hUsdVolumeByFillsourceCryptopunksChange = 'stats1hUsdVolumeByFillsourceCryptopunksChange',
  Stats1hUsdVolumeByFillsourceCryptopunksCurrent = 'stats1hUsdVolumeByFillsourceCryptopunksCurrent',
  Stats1hUsdVolumeByFillsourceCryptopunksPrevious = 'stats1hUsdVolumeByFillsourceCryptopunksPrevious',
  Stats1hUsdVolumeByFillsourceGemChange = 'stats1hUsdVolumeByFillsourceGemChange',
  Stats1hUsdVolumeByFillsourceGemCurrent = 'stats1hUsdVolumeByFillsourceGemCurrent',
  Stats1hUsdVolumeByFillsourceGemPrevious = 'stats1hUsdVolumeByFillsourceGemPrevious',
  Stats1hUsdVolumeByFillsourceLooksrareChange = 'stats1hUsdVolumeByFillsourceLooksrareChange',
  Stats1hUsdVolumeByFillsourceLooksrareCurrent = 'stats1hUsdVolumeByFillsourceLooksrareCurrent',
  Stats1hUsdVolumeByFillsourceLooksrarePrevious = 'stats1hUsdVolumeByFillsourceLooksrarePrevious',
  Stats1hUsdVolumeByFillsourceLooksrareV2Change = 'stats1hUsdVolumeByFillsourceLooksrareV2Change',
  Stats1hUsdVolumeByFillsourceLooksrareV2Current = 'stats1hUsdVolumeByFillsourceLooksrareV2Current',
  Stats1hUsdVolumeByFillsourceLooksrareV2Previous = 'stats1hUsdVolumeByFillsourceLooksrareV2Previous',
  Stats1hUsdVolumeByFillsourceOpenseaChange = 'stats1hUsdVolumeByFillsourceOpenseaChange',
  Stats1hUsdVolumeByFillsourceOpenseaCurrent = 'stats1hUsdVolumeByFillsourceOpenseaCurrent',
  Stats1hUsdVolumeByFillsourceOpenseaPrevious = 'stats1hUsdVolumeByFillsourceOpenseaPrevious',
  Stats1hUsdVolumeByFillsourceOpenseaProChange = 'stats1hUsdVolumeByFillsourceOpenseaProChange',
  Stats1hUsdVolumeByFillsourceOpenseaProCurrent = 'stats1hUsdVolumeByFillsourceOpenseaProCurrent',
  Stats1hUsdVolumeByFillsourceOpenseaProPrevious = 'stats1hUsdVolumeByFillsourceOpenseaProPrevious',
  Stats1hUsdVolumeByFillsourceSeaportChange = 'stats1hUsdVolumeByFillsourceSeaportChange',
  Stats1hUsdVolumeByFillsourceSeaportCurrent = 'stats1hUsdVolumeByFillsourceSeaportCurrent',
  Stats1hUsdVolumeByFillsourceSeaportPrevious = 'stats1hUsdVolumeByFillsourceSeaportPrevious',
  Stats1hUsdVolumeByFillsourceSudoswapChange = 'stats1hUsdVolumeByFillsourceSudoswapChange',
  Stats1hUsdVolumeByFillsourceSudoswapCurrent = 'stats1hUsdVolumeByFillsourceSudoswapCurrent',
  Stats1hUsdVolumeByFillsourceSudoswapPrevious = 'stats1hUsdVolumeByFillsourceSudoswapPrevious',
  Stats1hUsdVolumeByFillsourceSudoswapV2Change = 'stats1hUsdVolumeByFillsourceSudoswapV2Change',
  Stats1hUsdVolumeByFillsourceSudoswapV2Current = 'stats1hUsdVolumeByFillsourceSudoswapV2Current',
  Stats1hUsdVolumeByFillsourceSudoswapV2Previous = 'stats1hUsdVolumeByFillsourceSudoswapV2Previous',
  Stats1hUsdVolumeByFillsourceX2Y2Change = 'stats1hUsdVolumeByFillsourceX2Y2Change',
  Stats1hUsdVolumeByFillsourceX2Y2Current = 'stats1hUsdVolumeByFillsourceX2Y2Current',
  Stats1hUsdVolumeByFillsourceX2Y2Previous = 'stats1hUsdVolumeByFillsourceX2Y2Previous',
  Stats1hUsdVolumeChange = 'stats1hUsdVolumeChange',
  Stats1hUsdVolumeCurrent = 'stats1hUsdVolumeCurrent',
  Stats1hUsdVolumePrevious = 'stats1hUsdVolumePrevious',
  Stats4hNetworkBaseTokenAverageChange = 'stats4hNetworkBaseTokenAverageChange',
  Stats4hNetworkBaseTokenAverageCurrent = 'stats4hNetworkBaseTokenAverageCurrent',
  Stats4hNetworkBaseTokenAveragePrevious = 'stats4hNetworkBaseTokenAveragePrevious',
  Stats4hNetworkBaseTokenCloseChange = 'stats4hNetworkBaseTokenCloseChange',
  Stats4hNetworkBaseTokenCloseCurrent = 'stats4hNetworkBaseTokenCloseCurrent',
  Stats4hNetworkBaseTokenClosePrevious = 'stats4hNetworkBaseTokenClosePrevious',
  Stats4hNetworkBaseTokenHighestSaleChange = 'stats4hNetworkBaseTokenHighestSaleChange',
  Stats4hNetworkBaseTokenHighestSaleCurrent = 'stats4hNetworkBaseTokenHighestSaleCurrent',
  Stats4hNetworkBaseTokenHighestSalePrevious = 'stats4hNetworkBaseTokenHighestSalePrevious',
  Stats4hNetworkBaseTokenLowestSaleChange = 'stats4hNetworkBaseTokenLowestSaleChange',
  Stats4hNetworkBaseTokenLowestSaleCurrent = 'stats4hNetworkBaseTokenLowestSaleCurrent',
  Stats4hNetworkBaseTokenLowestSalePrevious = 'stats4hNetworkBaseTokenLowestSalePrevious',
  Stats4hNetworkBaseTokenOpenChange = 'stats4hNetworkBaseTokenOpenChange',
  Stats4hNetworkBaseTokenOpenCurrent = 'stats4hNetworkBaseTokenOpenCurrent',
  Stats4hNetworkBaseTokenOpenPrevious = 'stats4hNetworkBaseTokenOpenPrevious',
  Stats4hNetworkBaseTokenVolumeByFillsourceBlendChange = 'stats4hNetworkBaseTokenVolumeByFillsourceBlendChange',
  Stats4hNetworkBaseTokenVolumeByFillsourceBlendCurrent = 'stats4hNetworkBaseTokenVolumeByFillsourceBlendCurrent',
  Stats4hNetworkBaseTokenVolumeByFillsourceBlendPrevious = 'stats4hNetworkBaseTokenVolumeByFillsourceBlendPrevious',
  Stats4hNetworkBaseTokenVolumeByFillsourceBlurChange = 'stats4hNetworkBaseTokenVolumeByFillsourceBlurChange',
  Stats4hNetworkBaseTokenVolumeByFillsourceBlurCurrent = 'stats4hNetworkBaseTokenVolumeByFillsourceBlurCurrent',
  Stats4hNetworkBaseTokenVolumeByFillsourceBlurPrevious = 'stats4hNetworkBaseTokenVolumeByFillsourceBlurPrevious',
  Stats4hNetworkBaseTokenVolumeByFillsourceBlurV2Change = 'stats4hNetworkBaseTokenVolumeByFillsourceBlurV2Change',
  Stats4hNetworkBaseTokenVolumeByFillsourceBlurV2Current = 'stats4hNetworkBaseTokenVolumeByFillsourceBlurV2Current',
  Stats4hNetworkBaseTokenVolumeByFillsourceBlurV2Previous = 'stats4hNetworkBaseTokenVolumeByFillsourceBlurV2Previous',
  Stats4hNetworkBaseTokenVolumeByFillsourceCryptopunksChange = 'stats4hNetworkBaseTokenVolumeByFillsourceCryptopunksChange',
  Stats4hNetworkBaseTokenVolumeByFillsourceCryptopunksCurrent = 'stats4hNetworkBaseTokenVolumeByFillsourceCryptopunksCurrent',
  Stats4hNetworkBaseTokenVolumeByFillsourceCryptopunksPrevious = 'stats4hNetworkBaseTokenVolumeByFillsourceCryptopunksPrevious',
  Stats4hNetworkBaseTokenVolumeByFillsourceGemChange = 'stats4hNetworkBaseTokenVolumeByFillsourceGemChange',
  Stats4hNetworkBaseTokenVolumeByFillsourceGemCurrent = 'stats4hNetworkBaseTokenVolumeByFillsourceGemCurrent',
  Stats4hNetworkBaseTokenVolumeByFillsourceGemPrevious = 'stats4hNetworkBaseTokenVolumeByFillsourceGemPrevious',
  Stats4hNetworkBaseTokenVolumeByFillsourceLooksrareChange = 'stats4hNetworkBaseTokenVolumeByFillsourceLooksrareChange',
  Stats4hNetworkBaseTokenVolumeByFillsourceLooksrareCurrent = 'stats4hNetworkBaseTokenVolumeByFillsourceLooksrareCurrent',
  Stats4hNetworkBaseTokenVolumeByFillsourceLooksrarePrevious = 'stats4hNetworkBaseTokenVolumeByFillsourceLooksrarePrevious',
  Stats4hNetworkBaseTokenVolumeByFillsourceLooksrareV2Change = 'stats4hNetworkBaseTokenVolumeByFillsourceLooksrareV2Change',
  Stats4hNetworkBaseTokenVolumeByFillsourceLooksrareV2Current = 'stats4hNetworkBaseTokenVolumeByFillsourceLooksrareV2Current',
  Stats4hNetworkBaseTokenVolumeByFillsourceLooksrareV2Previous = 'stats4hNetworkBaseTokenVolumeByFillsourceLooksrareV2Previous',
  Stats4hNetworkBaseTokenVolumeByFillsourceOpenseaChange = 'stats4hNetworkBaseTokenVolumeByFillsourceOpenseaChange',
  Stats4hNetworkBaseTokenVolumeByFillsourceOpenseaCurrent = 'stats4hNetworkBaseTokenVolumeByFillsourceOpenseaCurrent',
  Stats4hNetworkBaseTokenVolumeByFillsourceOpenseaPrevious = 'stats4hNetworkBaseTokenVolumeByFillsourceOpenseaPrevious',
  Stats4hNetworkBaseTokenVolumeByFillsourceOpenseaProChange = 'stats4hNetworkBaseTokenVolumeByFillsourceOpenseaProChange',
  Stats4hNetworkBaseTokenVolumeByFillsourceOpenseaProCurrent = 'stats4hNetworkBaseTokenVolumeByFillsourceOpenseaProCurrent',
  Stats4hNetworkBaseTokenVolumeByFillsourceOpenseaProPrevious = 'stats4hNetworkBaseTokenVolumeByFillsourceOpenseaProPrevious',
  Stats4hNetworkBaseTokenVolumeByFillsourceSeaportChange = 'stats4hNetworkBaseTokenVolumeByFillsourceSeaportChange',
  Stats4hNetworkBaseTokenVolumeByFillsourceSeaportCurrent = 'stats4hNetworkBaseTokenVolumeByFillsourceSeaportCurrent',
  Stats4hNetworkBaseTokenVolumeByFillsourceSeaportPrevious = 'stats4hNetworkBaseTokenVolumeByFillsourceSeaportPrevious',
  Stats4hNetworkBaseTokenVolumeByFillsourceSudoswapChange = 'stats4hNetworkBaseTokenVolumeByFillsourceSudoswapChange',
  Stats4hNetworkBaseTokenVolumeByFillsourceSudoswapCurrent = 'stats4hNetworkBaseTokenVolumeByFillsourceSudoswapCurrent',
  Stats4hNetworkBaseTokenVolumeByFillsourceSudoswapPrevious = 'stats4hNetworkBaseTokenVolumeByFillsourceSudoswapPrevious',
  Stats4hNetworkBaseTokenVolumeByFillsourceSudoswapV2Change = 'stats4hNetworkBaseTokenVolumeByFillsourceSudoswapV2Change',
  Stats4hNetworkBaseTokenVolumeByFillsourceSudoswapV2Current = 'stats4hNetworkBaseTokenVolumeByFillsourceSudoswapV2Current',
  Stats4hNetworkBaseTokenVolumeByFillsourceSudoswapV2Previous = 'stats4hNetworkBaseTokenVolumeByFillsourceSudoswapV2Previous',
  Stats4hNetworkBaseTokenVolumeByFillsourceX2Y2Change = 'stats4hNetworkBaseTokenVolumeByFillsourceX2Y2Change',
  Stats4hNetworkBaseTokenVolumeByFillsourceX2Y2Current = 'stats4hNetworkBaseTokenVolumeByFillsourceX2Y2Current',
  Stats4hNetworkBaseTokenVolumeByFillsourceX2Y2Previous = 'stats4hNetworkBaseTokenVolumeByFillsourceX2Y2Previous',
  Stats4hNetworkBaseTokenVolumeChange = 'stats4hNetworkBaseTokenVolumeChange',
  Stats4hNetworkBaseTokenVolumeCurrent = 'stats4hNetworkBaseTokenVolumeCurrent',
  Stats4hNetworkBaseTokenVolumePrevious = 'stats4hNetworkBaseTokenVolumePrevious',
  Stats4hNonCurrencyMintsChange = 'stats4hNonCurrencyMintsChange',
  Stats4hNonCurrencyMintsCurrent = 'stats4hNonCurrencyMintsCurrent',
  Stats4hNonCurrencyMintsPrevious = 'stats4hNonCurrencyMintsPrevious',
  Stats4hNonCurrencySalesChange = 'stats4hNonCurrencySalesChange',
  Stats4hNonCurrencySalesCurrent = 'stats4hNonCurrencySalesCurrent',
  Stats4hNonCurrencySalesPrevious = 'stats4hNonCurrencySalesPrevious',
  Stats4hNonCurrencyTokensSoldChange = 'stats4hNonCurrencyTokensSoldChange',
  Stats4hNonCurrencyTokensSoldCurrent = 'stats4hNonCurrencyTokensSoldCurrent',
  Stats4hNonCurrencyTokensSoldPrevious = 'stats4hNonCurrencyTokensSoldPrevious',
  Stats4hNonCurrencyTransfersChange = 'stats4hNonCurrencyTransfersChange',
  Stats4hNonCurrencyTransfersCurrent = 'stats4hNonCurrencyTransfersCurrent',
  Stats4hNonCurrencyTransfersPrevious = 'stats4hNonCurrencyTransfersPrevious',
  Stats4hNonCurrencyUniqueBuyersChange = 'stats4hNonCurrencyUniqueBuyersChange',
  Stats4hNonCurrencyUniqueBuyersCurrent = 'stats4hNonCurrencyUniqueBuyersCurrent',
  Stats4hNonCurrencyUniqueBuyersPrevious = 'stats4hNonCurrencyUniqueBuyersPrevious',
  Stats4hNonCurrencyUniqueMintersChange = 'stats4hNonCurrencyUniqueMintersChange',
  Stats4hNonCurrencyUniqueMintersCurrent = 'stats4hNonCurrencyUniqueMintersCurrent',
  Stats4hNonCurrencyUniqueMintersPrevious = 'stats4hNonCurrencyUniqueMintersPrevious',
  Stats4hNonCurrencyUniqueSalesWalletsChange = 'stats4hNonCurrencyUniqueSalesWalletsChange',
  Stats4hNonCurrencyUniqueSalesWalletsCurrent = 'stats4hNonCurrencyUniqueSalesWalletsCurrent',
  Stats4hNonCurrencyUniqueSalesWalletsPrevious = 'stats4hNonCurrencyUniqueSalesWalletsPrevious',
  Stats4hNonCurrencyUniqueSellersChange = 'stats4hNonCurrencyUniqueSellersChange',
  Stats4hNonCurrencyUniqueSellersCurrent = 'stats4hNonCurrencyUniqueSellersCurrent',
  Stats4hNonCurrencyUniqueSellersPrevious = 'stats4hNonCurrencyUniqueSellersPrevious',
  Stats4hUsdAverageChange = 'stats4hUsdAverageChange',
  Stats4hUsdAverageCurrent = 'stats4hUsdAverageCurrent',
  Stats4hUsdAveragePrevious = 'stats4hUsdAveragePrevious',
  Stats4hUsdCloseChange = 'stats4hUsdCloseChange',
  Stats4hUsdCloseCurrent = 'stats4hUsdCloseCurrent',
  Stats4hUsdClosePrevious = 'stats4hUsdClosePrevious',
  Stats4hUsdHighestSaleChange = 'stats4hUsdHighestSaleChange',
  Stats4hUsdHighestSaleCurrent = 'stats4hUsdHighestSaleCurrent',
  Stats4hUsdHighestSalePrevious = 'stats4hUsdHighestSalePrevious',
  Stats4hUsdLowestSaleChange = 'stats4hUsdLowestSaleChange',
  Stats4hUsdLowestSaleCurrent = 'stats4hUsdLowestSaleCurrent',
  Stats4hUsdLowestSalePrevious = 'stats4hUsdLowestSalePrevious',
  Stats4hUsdOpenChange = 'stats4hUsdOpenChange',
  Stats4hUsdOpenCurrent = 'stats4hUsdOpenCurrent',
  Stats4hUsdOpenPrevious = 'stats4hUsdOpenPrevious',
  Stats4hUsdVolumeByFillsourceBlendChange = 'stats4hUsdVolumeByFillsourceBlendChange',
  Stats4hUsdVolumeByFillsourceBlendCurrent = 'stats4hUsdVolumeByFillsourceBlendCurrent',
  Stats4hUsdVolumeByFillsourceBlendPrevious = 'stats4hUsdVolumeByFillsourceBlendPrevious',
  Stats4hUsdVolumeByFillsourceBlurChange = 'stats4hUsdVolumeByFillsourceBlurChange',
  Stats4hUsdVolumeByFillsourceBlurCurrent = 'stats4hUsdVolumeByFillsourceBlurCurrent',
  Stats4hUsdVolumeByFillsourceBlurPrevious = 'stats4hUsdVolumeByFillsourceBlurPrevious',
  Stats4hUsdVolumeByFillsourceBlurV2Change = 'stats4hUsdVolumeByFillsourceBlurV2Change',
  Stats4hUsdVolumeByFillsourceBlurV2Current = 'stats4hUsdVolumeByFillsourceBlurV2Current',
  Stats4hUsdVolumeByFillsourceBlurV2Previous = 'stats4hUsdVolumeByFillsourceBlurV2Previous',
  Stats4hUsdVolumeByFillsourceCryptopunksChange = 'stats4hUsdVolumeByFillsourceCryptopunksChange',
  Stats4hUsdVolumeByFillsourceCryptopunksCurrent = 'stats4hUsdVolumeByFillsourceCryptopunksCurrent',
  Stats4hUsdVolumeByFillsourceCryptopunksPrevious = 'stats4hUsdVolumeByFillsourceCryptopunksPrevious',
  Stats4hUsdVolumeByFillsourceGemChange = 'stats4hUsdVolumeByFillsourceGemChange',
  Stats4hUsdVolumeByFillsourceGemCurrent = 'stats4hUsdVolumeByFillsourceGemCurrent',
  Stats4hUsdVolumeByFillsourceGemPrevious = 'stats4hUsdVolumeByFillsourceGemPrevious',
  Stats4hUsdVolumeByFillsourceLooksrareChange = 'stats4hUsdVolumeByFillsourceLooksrareChange',
  Stats4hUsdVolumeByFillsourceLooksrareCurrent = 'stats4hUsdVolumeByFillsourceLooksrareCurrent',
  Stats4hUsdVolumeByFillsourceLooksrarePrevious = 'stats4hUsdVolumeByFillsourceLooksrarePrevious',
  Stats4hUsdVolumeByFillsourceLooksrareV2Change = 'stats4hUsdVolumeByFillsourceLooksrareV2Change',
  Stats4hUsdVolumeByFillsourceLooksrareV2Current = 'stats4hUsdVolumeByFillsourceLooksrareV2Current',
  Stats4hUsdVolumeByFillsourceLooksrareV2Previous = 'stats4hUsdVolumeByFillsourceLooksrareV2Previous',
  Stats4hUsdVolumeByFillsourceOpenseaChange = 'stats4hUsdVolumeByFillsourceOpenseaChange',
  Stats4hUsdVolumeByFillsourceOpenseaCurrent = 'stats4hUsdVolumeByFillsourceOpenseaCurrent',
  Stats4hUsdVolumeByFillsourceOpenseaPrevious = 'stats4hUsdVolumeByFillsourceOpenseaPrevious',
  Stats4hUsdVolumeByFillsourceOpenseaProChange = 'stats4hUsdVolumeByFillsourceOpenseaProChange',
  Stats4hUsdVolumeByFillsourceOpenseaProCurrent = 'stats4hUsdVolumeByFillsourceOpenseaProCurrent',
  Stats4hUsdVolumeByFillsourceOpenseaProPrevious = 'stats4hUsdVolumeByFillsourceOpenseaProPrevious',
  Stats4hUsdVolumeByFillsourceSeaportChange = 'stats4hUsdVolumeByFillsourceSeaportChange',
  Stats4hUsdVolumeByFillsourceSeaportCurrent = 'stats4hUsdVolumeByFillsourceSeaportCurrent',
  Stats4hUsdVolumeByFillsourceSeaportPrevious = 'stats4hUsdVolumeByFillsourceSeaportPrevious',
  Stats4hUsdVolumeByFillsourceSudoswapChange = 'stats4hUsdVolumeByFillsourceSudoswapChange',
  Stats4hUsdVolumeByFillsourceSudoswapCurrent = 'stats4hUsdVolumeByFillsourceSudoswapCurrent',
  Stats4hUsdVolumeByFillsourceSudoswapPrevious = 'stats4hUsdVolumeByFillsourceSudoswapPrevious',
  Stats4hUsdVolumeByFillsourceSudoswapV2Change = 'stats4hUsdVolumeByFillsourceSudoswapV2Change',
  Stats4hUsdVolumeByFillsourceSudoswapV2Current = 'stats4hUsdVolumeByFillsourceSudoswapV2Current',
  Stats4hUsdVolumeByFillsourceSudoswapV2Previous = 'stats4hUsdVolumeByFillsourceSudoswapV2Previous',
  Stats4hUsdVolumeByFillsourceX2Y2Change = 'stats4hUsdVolumeByFillsourceX2Y2Change',
  Stats4hUsdVolumeByFillsourceX2Y2Current = 'stats4hUsdVolumeByFillsourceX2Y2Current',
  Stats4hUsdVolumeByFillsourceX2Y2Previous = 'stats4hUsdVolumeByFillsourceX2Y2Previous',
  Stats4hUsdVolumeChange = 'stats4hUsdVolumeChange',
  Stats4hUsdVolumeCurrent = 'stats4hUsdVolumeCurrent',
  Stats4hUsdVolumePrevious = 'stats4hUsdVolumePrevious',
  Stats12hNetworkBaseTokenAverageChange = 'stats12hNetworkBaseTokenAverageChange',
  Stats12hNetworkBaseTokenAverageCurrent = 'stats12hNetworkBaseTokenAverageCurrent',
  Stats12hNetworkBaseTokenAveragePrevious = 'stats12hNetworkBaseTokenAveragePrevious',
  Stats12hNetworkBaseTokenCloseChange = 'stats12hNetworkBaseTokenCloseChange',
  Stats12hNetworkBaseTokenCloseCurrent = 'stats12hNetworkBaseTokenCloseCurrent',
  Stats12hNetworkBaseTokenClosePrevious = 'stats12hNetworkBaseTokenClosePrevious',
  Stats12hNetworkBaseTokenHighestSaleChange = 'stats12hNetworkBaseTokenHighestSaleChange',
  Stats12hNetworkBaseTokenHighestSaleCurrent = 'stats12hNetworkBaseTokenHighestSaleCurrent',
  Stats12hNetworkBaseTokenHighestSalePrevious = 'stats12hNetworkBaseTokenHighestSalePrevious',
  Stats12hNetworkBaseTokenLowestSaleChange = 'stats12hNetworkBaseTokenLowestSaleChange',
  Stats12hNetworkBaseTokenLowestSaleCurrent = 'stats12hNetworkBaseTokenLowestSaleCurrent',
  Stats12hNetworkBaseTokenLowestSalePrevious = 'stats12hNetworkBaseTokenLowestSalePrevious',
  Stats12hNetworkBaseTokenOpenChange = 'stats12hNetworkBaseTokenOpenChange',
  Stats12hNetworkBaseTokenOpenCurrent = 'stats12hNetworkBaseTokenOpenCurrent',
  Stats12hNetworkBaseTokenOpenPrevious = 'stats12hNetworkBaseTokenOpenPrevious',
  Stats12hNetworkBaseTokenVolumeByFillsourceBlendChange = 'stats12hNetworkBaseTokenVolumeByFillsourceBlendChange',
  Stats12hNetworkBaseTokenVolumeByFillsourceBlendCurrent = 'stats12hNetworkBaseTokenVolumeByFillsourceBlendCurrent',
  Stats12hNetworkBaseTokenVolumeByFillsourceBlendPrevious = 'stats12hNetworkBaseTokenVolumeByFillsourceBlendPrevious',
  Stats12hNetworkBaseTokenVolumeByFillsourceBlurChange = 'stats12hNetworkBaseTokenVolumeByFillsourceBlurChange',
  Stats12hNetworkBaseTokenVolumeByFillsourceBlurCurrent = 'stats12hNetworkBaseTokenVolumeByFillsourceBlurCurrent',
  Stats12hNetworkBaseTokenVolumeByFillsourceBlurPrevious = 'stats12hNetworkBaseTokenVolumeByFillsourceBlurPrevious',
  Stats12hNetworkBaseTokenVolumeByFillsourceBlurV2Change = 'stats12hNetworkBaseTokenVolumeByFillsourceBlurV2Change',
  Stats12hNetworkBaseTokenVolumeByFillsourceBlurV2Current = 'stats12hNetworkBaseTokenVolumeByFillsourceBlurV2Current',
  Stats12hNetworkBaseTokenVolumeByFillsourceBlurV2Previous = 'stats12hNetworkBaseTokenVolumeByFillsourceBlurV2Previous',
  Stats12hNetworkBaseTokenVolumeByFillsourceCryptopunksChange = 'stats12hNetworkBaseTokenVolumeByFillsourceCryptopunksChange',
  Stats12hNetworkBaseTokenVolumeByFillsourceCryptopunksCurrent = 'stats12hNetworkBaseTokenVolumeByFillsourceCryptopunksCurrent',
  Stats12hNetworkBaseTokenVolumeByFillsourceCryptopunksPrevious = 'stats12hNetworkBaseTokenVolumeByFillsourceCryptopunksPrevious',
  Stats12hNetworkBaseTokenVolumeByFillsourceGemChange = 'stats12hNetworkBaseTokenVolumeByFillsourceGemChange',
  Stats12hNetworkBaseTokenVolumeByFillsourceGemCurrent = 'stats12hNetworkBaseTokenVolumeByFillsourceGemCurrent',
  Stats12hNetworkBaseTokenVolumeByFillsourceGemPrevious = 'stats12hNetworkBaseTokenVolumeByFillsourceGemPrevious',
  Stats12hNetworkBaseTokenVolumeByFillsourceLooksrareChange = 'stats12hNetworkBaseTokenVolumeByFillsourceLooksrareChange',
  Stats12hNetworkBaseTokenVolumeByFillsourceLooksrareCurrent = 'stats12hNetworkBaseTokenVolumeByFillsourceLooksrareCurrent',
  Stats12hNetworkBaseTokenVolumeByFillsourceLooksrarePrevious = 'stats12hNetworkBaseTokenVolumeByFillsourceLooksrarePrevious',
  Stats12hNetworkBaseTokenVolumeByFillsourceLooksrareV2Change = 'stats12hNetworkBaseTokenVolumeByFillsourceLooksrareV2Change',
  Stats12hNetworkBaseTokenVolumeByFillsourceLooksrareV2Current = 'stats12hNetworkBaseTokenVolumeByFillsourceLooksrareV2Current',
  Stats12hNetworkBaseTokenVolumeByFillsourceLooksrareV2Previous = 'stats12hNetworkBaseTokenVolumeByFillsourceLooksrareV2Previous',
  Stats12hNetworkBaseTokenVolumeByFillsourceOpenseaChange = 'stats12hNetworkBaseTokenVolumeByFillsourceOpenseaChange',
  Stats12hNetworkBaseTokenVolumeByFillsourceOpenseaCurrent = 'stats12hNetworkBaseTokenVolumeByFillsourceOpenseaCurrent',
  Stats12hNetworkBaseTokenVolumeByFillsourceOpenseaPrevious = 'stats12hNetworkBaseTokenVolumeByFillsourceOpenseaPrevious',
  Stats12hNetworkBaseTokenVolumeByFillsourceOpenseaProChange = 'stats12hNetworkBaseTokenVolumeByFillsourceOpenseaProChange',
  Stats12hNetworkBaseTokenVolumeByFillsourceOpenseaProCurrent = 'stats12hNetworkBaseTokenVolumeByFillsourceOpenseaProCurrent',
  Stats12hNetworkBaseTokenVolumeByFillsourceOpenseaProPrevious = 'stats12hNetworkBaseTokenVolumeByFillsourceOpenseaProPrevious',
  Stats12hNetworkBaseTokenVolumeByFillsourceSeaportChange = 'stats12hNetworkBaseTokenVolumeByFillsourceSeaportChange',
  Stats12hNetworkBaseTokenVolumeByFillsourceSeaportCurrent = 'stats12hNetworkBaseTokenVolumeByFillsourceSeaportCurrent',
  Stats12hNetworkBaseTokenVolumeByFillsourceSeaportPrevious = 'stats12hNetworkBaseTokenVolumeByFillsourceSeaportPrevious',
  Stats12hNetworkBaseTokenVolumeByFillsourceSudoswapChange = 'stats12hNetworkBaseTokenVolumeByFillsourceSudoswapChange',
  Stats12hNetworkBaseTokenVolumeByFillsourceSudoswapCurrent = 'stats12hNetworkBaseTokenVolumeByFillsourceSudoswapCurrent',
  Stats12hNetworkBaseTokenVolumeByFillsourceSudoswapPrevious = 'stats12hNetworkBaseTokenVolumeByFillsourceSudoswapPrevious',
  Stats12hNetworkBaseTokenVolumeByFillsourceSudoswapV2Change = 'stats12hNetworkBaseTokenVolumeByFillsourceSudoswapV2Change',
  Stats12hNetworkBaseTokenVolumeByFillsourceSudoswapV2Current = 'stats12hNetworkBaseTokenVolumeByFillsourceSudoswapV2Current',
  Stats12hNetworkBaseTokenVolumeByFillsourceSudoswapV2Previous = 'stats12hNetworkBaseTokenVolumeByFillsourceSudoswapV2Previous',
  Stats12hNetworkBaseTokenVolumeByFillsourceX2Y2Change = 'stats12hNetworkBaseTokenVolumeByFillsourceX2Y2Change',
  Stats12hNetworkBaseTokenVolumeByFillsourceX2Y2Current = 'stats12hNetworkBaseTokenVolumeByFillsourceX2Y2Current',
  Stats12hNetworkBaseTokenVolumeByFillsourceX2Y2Previous = 'stats12hNetworkBaseTokenVolumeByFillsourceX2Y2Previous',
  Stats12hNetworkBaseTokenVolumeChange = 'stats12hNetworkBaseTokenVolumeChange',
  Stats12hNetworkBaseTokenVolumeCurrent = 'stats12hNetworkBaseTokenVolumeCurrent',
  Stats12hNetworkBaseTokenVolumePrevious = 'stats12hNetworkBaseTokenVolumePrevious',
  Stats12hNonCurrencyMintsChange = 'stats12hNonCurrencyMintsChange',
  Stats12hNonCurrencyMintsCurrent = 'stats12hNonCurrencyMintsCurrent',
  Stats12hNonCurrencyMintsPrevious = 'stats12hNonCurrencyMintsPrevious',
  Stats12hNonCurrencySalesChange = 'stats12hNonCurrencySalesChange',
  Stats12hNonCurrencySalesCurrent = 'stats12hNonCurrencySalesCurrent',
  Stats12hNonCurrencySalesPrevious = 'stats12hNonCurrencySalesPrevious',
  Stats12hNonCurrencyTokensSoldChange = 'stats12hNonCurrencyTokensSoldChange',
  Stats12hNonCurrencyTokensSoldCurrent = 'stats12hNonCurrencyTokensSoldCurrent',
  Stats12hNonCurrencyTokensSoldPrevious = 'stats12hNonCurrencyTokensSoldPrevious',
  Stats12hNonCurrencyTransfersChange = 'stats12hNonCurrencyTransfersChange',
  Stats12hNonCurrencyTransfersCurrent = 'stats12hNonCurrencyTransfersCurrent',
  Stats12hNonCurrencyTransfersPrevious = 'stats12hNonCurrencyTransfersPrevious',
  Stats12hNonCurrencyUniqueBuyersChange = 'stats12hNonCurrencyUniqueBuyersChange',
  Stats12hNonCurrencyUniqueBuyersCurrent = 'stats12hNonCurrencyUniqueBuyersCurrent',
  Stats12hNonCurrencyUniqueBuyersPrevious = 'stats12hNonCurrencyUniqueBuyersPrevious',
  Stats12hNonCurrencyUniqueMintersChange = 'stats12hNonCurrencyUniqueMintersChange',
  Stats12hNonCurrencyUniqueMintersCurrent = 'stats12hNonCurrencyUniqueMintersCurrent',
  Stats12hNonCurrencyUniqueMintersPrevious = 'stats12hNonCurrencyUniqueMintersPrevious',
  Stats12hNonCurrencyUniqueSalesWalletsChange = 'stats12hNonCurrencyUniqueSalesWalletsChange',
  Stats12hNonCurrencyUniqueSalesWalletsCurrent = 'stats12hNonCurrencyUniqueSalesWalletsCurrent',
  Stats12hNonCurrencyUniqueSalesWalletsPrevious = 'stats12hNonCurrencyUniqueSalesWalletsPrevious',
  Stats12hNonCurrencyUniqueSellersChange = 'stats12hNonCurrencyUniqueSellersChange',
  Stats12hNonCurrencyUniqueSellersCurrent = 'stats12hNonCurrencyUniqueSellersCurrent',
  Stats12hNonCurrencyUniqueSellersPrevious = 'stats12hNonCurrencyUniqueSellersPrevious',
  Stats12hUsdAverageChange = 'stats12hUsdAverageChange',
  Stats12hUsdAverageCurrent = 'stats12hUsdAverageCurrent',
  Stats12hUsdAveragePrevious = 'stats12hUsdAveragePrevious',
  Stats12hUsdCloseChange = 'stats12hUsdCloseChange',
  Stats12hUsdCloseCurrent = 'stats12hUsdCloseCurrent',
  Stats12hUsdClosePrevious = 'stats12hUsdClosePrevious',
  Stats12hUsdHighestSaleChange = 'stats12hUsdHighestSaleChange',
  Stats12hUsdHighestSaleCurrent = 'stats12hUsdHighestSaleCurrent',
  Stats12hUsdHighestSalePrevious = 'stats12hUsdHighestSalePrevious',
  Stats12hUsdLowestSaleChange = 'stats12hUsdLowestSaleChange',
  Stats12hUsdLowestSaleCurrent = 'stats12hUsdLowestSaleCurrent',
  Stats12hUsdLowestSalePrevious = 'stats12hUsdLowestSalePrevious',
  Stats12hUsdOpenChange = 'stats12hUsdOpenChange',
  Stats12hUsdOpenCurrent = 'stats12hUsdOpenCurrent',
  Stats12hUsdOpenPrevious = 'stats12hUsdOpenPrevious',
  Stats12hUsdVolumeByFillsourceBlendChange = 'stats12hUsdVolumeByFillsourceBlendChange',
  Stats12hUsdVolumeByFillsourceBlendCurrent = 'stats12hUsdVolumeByFillsourceBlendCurrent',
  Stats12hUsdVolumeByFillsourceBlendPrevious = 'stats12hUsdVolumeByFillsourceBlendPrevious',
  Stats12hUsdVolumeByFillsourceBlurChange = 'stats12hUsdVolumeByFillsourceBlurChange',
  Stats12hUsdVolumeByFillsourceBlurCurrent = 'stats12hUsdVolumeByFillsourceBlurCurrent',
  Stats12hUsdVolumeByFillsourceBlurPrevious = 'stats12hUsdVolumeByFillsourceBlurPrevious',
  Stats12hUsdVolumeByFillsourceBlurV2Change = 'stats12hUsdVolumeByFillsourceBlurV2Change',
  Stats12hUsdVolumeByFillsourceBlurV2Current = 'stats12hUsdVolumeByFillsourceBlurV2Current',
  Stats12hUsdVolumeByFillsourceBlurV2Previous = 'stats12hUsdVolumeByFillsourceBlurV2Previous',
  Stats12hUsdVolumeByFillsourceCryptopunksChange = 'stats12hUsdVolumeByFillsourceCryptopunksChange',
  Stats12hUsdVolumeByFillsourceCryptopunksCurrent = 'stats12hUsdVolumeByFillsourceCryptopunksCurrent',
  Stats12hUsdVolumeByFillsourceCryptopunksPrevious = 'stats12hUsdVolumeByFillsourceCryptopunksPrevious',
  Stats12hUsdVolumeByFillsourceGemChange = 'stats12hUsdVolumeByFillsourceGemChange',
  Stats12hUsdVolumeByFillsourceGemCurrent = 'stats12hUsdVolumeByFillsourceGemCurrent',
  Stats12hUsdVolumeByFillsourceGemPrevious = 'stats12hUsdVolumeByFillsourceGemPrevious',
  Stats12hUsdVolumeByFillsourceLooksrareChange = 'stats12hUsdVolumeByFillsourceLooksrareChange',
  Stats12hUsdVolumeByFillsourceLooksrareCurrent = 'stats12hUsdVolumeByFillsourceLooksrareCurrent',
  Stats12hUsdVolumeByFillsourceLooksrarePrevious = 'stats12hUsdVolumeByFillsourceLooksrarePrevious',
  Stats12hUsdVolumeByFillsourceLooksrareV2Change = 'stats12hUsdVolumeByFillsourceLooksrareV2Change',
  Stats12hUsdVolumeByFillsourceLooksrareV2Current = 'stats12hUsdVolumeByFillsourceLooksrareV2Current',
  Stats12hUsdVolumeByFillsourceLooksrareV2Previous = 'stats12hUsdVolumeByFillsourceLooksrareV2Previous',
  Stats12hUsdVolumeByFillsourceOpenseaChange = 'stats12hUsdVolumeByFillsourceOpenseaChange',
  Stats12hUsdVolumeByFillsourceOpenseaCurrent = 'stats12hUsdVolumeByFillsourceOpenseaCurrent',
  Stats12hUsdVolumeByFillsourceOpenseaPrevious = 'stats12hUsdVolumeByFillsourceOpenseaPrevious',
  Stats12hUsdVolumeByFillsourceOpenseaProChange = 'stats12hUsdVolumeByFillsourceOpenseaProChange',
  Stats12hUsdVolumeByFillsourceOpenseaProCurrent = 'stats12hUsdVolumeByFillsourceOpenseaProCurrent',
  Stats12hUsdVolumeByFillsourceOpenseaProPrevious = 'stats12hUsdVolumeByFillsourceOpenseaProPrevious',
  Stats12hUsdVolumeByFillsourceSeaportChange = 'stats12hUsdVolumeByFillsourceSeaportChange',
  Stats12hUsdVolumeByFillsourceSeaportCurrent = 'stats12hUsdVolumeByFillsourceSeaportCurrent',
  Stats12hUsdVolumeByFillsourceSeaportPrevious = 'stats12hUsdVolumeByFillsourceSeaportPrevious',
  Stats12hUsdVolumeByFillsourceSudoswapChange = 'stats12hUsdVolumeByFillsourceSudoswapChange',
  Stats12hUsdVolumeByFillsourceSudoswapCurrent = 'stats12hUsdVolumeByFillsourceSudoswapCurrent',
  Stats12hUsdVolumeByFillsourceSudoswapPrevious = 'stats12hUsdVolumeByFillsourceSudoswapPrevious',
  Stats12hUsdVolumeByFillsourceSudoswapV2Change = 'stats12hUsdVolumeByFillsourceSudoswapV2Change',
  Stats12hUsdVolumeByFillsourceSudoswapV2Current = 'stats12hUsdVolumeByFillsourceSudoswapV2Current',
  Stats12hUsdVolumeByFillsourceSudoswapV2Previous = 'stats12hUsdVolumeByFillsourceSudoswapV2Previous',
  Stats12hUsdVolumeByFillsourceX2Y2Change = 'stats12hUsdVolumeByFillsourceX2Y2Change',
  Stats12hUsdVolumeByFillsourceX2Y2Current = 'stats12hUsdVolumeByFillsourceX2Y2Current',
  Stats12hUsdVolumeByFillsourceX2Y2Previous = 'stats12hUsdVolumeByFillsourceX2Y2Previous',
  Stats12hUsdVolumeChange = 'stats12hUsdVolumeChange',
  Stats12hUsdVolumeCurrent = 'stats12hUsdVolumeCurrent',
  Stats12hUsdVolumePrevious = 'stats12hUsdVolumePrevious',
  Stats24hNetworkBaseTokenAverageChange = 'stats24hNetworkBaseTokenAverageChange',
  Stats24hNetworkBaseTokenAverageCurrent = 'stats24hNetworkBaseTokenAverageCurrent',
  Stats24hNetworkBaseTokenAveragePrevious = 'stats24hNetworkBaseTokenAveragePrevious',
  Stats24hNetworkBaseTokenCloseChange = 'stats24hNetworkBaseTokenCloseChange',
  Stats24hNetworkBaseTokenCloseCurrent = 'stats24hNetworkBaseTokenCloseCurrent',
  Stats24hNetworkBaseTokenClosePrevious = 'stats24hNetworkBaseTokenClosePrevious',
  Stats24hNetworkBaseTokenHighestSaleChange = 'stats24hNetworkBaseTokenHighestSaleChange',
  Stats24hNetworkBaseTokenHighestSaleCurrent = 'stats24hNetworkBaseTokenHighestSaleCurrent',
  Stats24hNetworkBaseTokenHighestSalePrevious = 'stats24hNetworkBaseTokenHighestSalePrevious',
  Stats24hNetworkBaseTokenLowestSaleChange = 'stats24hNetworkBaseTokenLowestSaleChange',
  Stats24hNetworkBaseTokenLowestSaleCurrent = 'stats24hNetworkBaseTokenLowestSaleCurrent',
  Stats24hNetworkBaseTokenLowestSalePrevious = 'stats24hNetworkBaseTokenLowestSalePrevious',
  Stats24hNetworkBaseTokenOpenChange = 'stats24hNetworkBaseTokenOpenChange',
  Stats24hNetworkBaseTokenOpenCurrent = 'stats24hNetworkBaseTokenOpenCurrent',
  Stats24hNetworkBaseTokenOpenPrevious = 'stats24hNetworkBaseTokenOpenPrevious',
  Stats24hNetworkBaseTokenVolumeByFillsourceBlendChange = 'stats24hNetworkBaseTokenVolumeByFillsourceBlendChange',
  Stats24hNetworkBaseTokenVolumeByFillsourceBlendCurrent = 'stats24hNetworkBaseTokenVolumeByFillsourceBlendCurrent',
  Stats24hNetworkBaseTokenVolumeByFillsourceBlendPrevious = 'stats24hNetworkBaseTokenVolumeByFillsourceBlendPrevious',
  Stats24hNetworkBaseTokenVolumeByFillsourceBlurChange = 'stats24hNetworkBaseTokenVolumeByFillsourceBlurChange',
  Stats24hNetworkBaseTokenVolumeByFillsourceBlurCurrent = 'stats24hNetworkBaseTokenVolumeByFillsourceBlurCurrent',
  Stats24hNetworkBaseTokenVolumeByFillsourceBlurPrevious = 'stats24hNetworkBaseTokenVolumeByFillsourceBlurPrevious',
  Stats24hNetworkBaseTokenVolumeByFillsourceBlurV2Change = 'stats24hNetworkBaseTokenVolumeByFillsourceBlurV2Change',
  Stats24hNetworkBaseTokenVolumeByFillsourceBlurV2Current = 'stats24hNetworkBaseTokenVolumeByFillsourceBlurV2Current',
  Stats24hNetworkBaseTokenVolumeByFillsourceBlurV2Previous = 'stats24hNetworkBaseTokenVolumeByFillsourceBlurV2Previous',
  Stats24hNetworkBaseTokenVolumeByFillsourceCryptopunksChange = 'stats24hNetworkBaseTokenVolumeByFillsourceCryptopunksChange',
  Stats24hNetworkBaseTokenVolumeByFillsourceCryptopunksCurrent = 'stats24hNetworkBaseTokenVolumeByFillsourceCryptopunksCurrent',
  Stats24hNetworkBaseTokenVolumeByFillsourceCryptopunksPrevious = 'stats24hNetworkBaseTokenVolumeByFillsourceCryptopunksPrevious',
  Stats24hNetworkBaseTokenVolumeByFillsourceGemChange = 'stats24hNetworkBaseTokenVolumeByFillsourceGemChange',
  Stats24hNetworkBaseTokenVolumeByFillsourceGemCurrent = 'stats24hNetworkBaseTokenVolumeByFillsourceGemCurrent',
  Stats24hNetworkBaseTokenVolumeByFillsourceGemPrevious = 'stats24hNetworkBaseTokenVolumeByFillsourceGemPrevious',
  Stats24hNetworkBaseTokenVolumeByFillsourceLooksrareChange = 'stats24hNetworkBaseTokenVolumeByFillsourceLooksrareChange',
  Stats24hNetworkBaseTokenVolumeByFillsourceLooksrareCurrent = 'stats24hNetworkBaseTokenVolumeByFillsourceLooksrareCurrent',
  Stats24hNetworkBaseTokenVolumeByFillsourceLooksrarePrevious = 'stats24hNetworkBaseTokenVolumeByFillsourceLooksrarePrevious',
  Stats24hNetworkBaseTokenVolumeByFillsourceLooksrareV2Change = 'stats24hNetworkBaseTokenVolumeByFillsourceLooksrareV2Change',
  Stats24hNetworkBaseTokenVolumeByFillsourceLooksrareV2Current = 'stats24hNetworkBaseTokenVolumeByFillsourceLooksrareV2Current',
  Stats24hNetworkBaseTokenVolumeByFillsourceLooksrareV2Previous = 'stats24hNetworkBaseTokenVolumeByFillsourceLooksrareV2Previous',
  Stats24hNetworkBaseTokenVolumeByFillsourceOpenseaChange = 'stats24hNetworkBaseTokenVolumeByFillsourceOpenseaChange',
  Stats24hNetworkBaseTokenVolumeByFillsourceOpenseaCurrent = 'stats24hNetworkBaseTokenVolumeByFillsourceOpenseaCurrent',
  Stats24hNetworkBaseTokenVolumeByFillsourceOpenseaPrevious = 'stats24hNetworkBaseTokenVolumeByFillsourceOpenseaPrevious',
  Stats24hNetworkBaseTokenVolumeByFillsourceOpenseaProChange = 'stats24hNetworkBaseTokenVolumeByFillsourceOpenseaProChange',
  Stats24hNetworkBaseTokenVolumeByFillsourceOpenseaProCurrent = 'stats24hNetworkBaseTokenVolumeByFillsourceOpenseaProCurrent',
  Stats24hNetworkBaseTokenVolumeByFillsourceOpenseaProPrevious = 'stats24hNetworkBaseTokenVolumeByFillsourceOpenseaProPrevious',
  Stats24hNetworkBaseTokenVolumeByFillsourceSeaportChange = 'stats24hNetworkBaseTokenVolumeByFillsourceSeaportChange',
  Stats24hNetworkBaseTokenVolumeByFillsourceSeaportCurrent = 'stats24hNetworkBaseTokenVolumeByFillsourceSeaportCurrent',
  Stats24hNetworkBaseTokenVolumeByFillsourceSeaportPrevious = 'stats24hNetworkBaseTokenVolumeByFillsourceSeaportPrevious',
  Stats24hNetworkBaseTokenVolumeByFillsourceSudoswapChange = 'stats24hNetworkBaseTokenVolumeByFillsourceSudoswapChange',
  Stats24hNetworkBaseTokenVolumeByFillsourceSudoswapCurrent = 'stats24hNetworkBaseTokenVolumeByFillsourceSudoswapCurrent',
  Stats24hNetworkBaseTokenVolumeByFillsourceSudoswapPrevious = 'stats24hNetworkBaseTokenVolumeByFillsourceSudoswapPrevious',
  Stats24hNetworkBaseTokenVolumeByFillsourceSudoswapV2Change = 'stats24hNetworkBaseTokenVolumeByFillsourceSudoswapV2Change',
  Stats24hNetworkBaseTokenVolumeByFillsourceSudoswapV2Current = 'stats24hNetworkBaseTokenVolumeByFillsourceSudoswapV2Current',
  Stats24hNetworkBaseTokenVolumeByFillsourceSudoswapV2Previous = 'stats24hNetworkBaseTokenVolumeByFillsourceSudoswapV2Previous',
  Stats24hNetworkBaseTokenVolumeByFillsourceX2Y2Change = 'stats24hNetworkBaseTokenVolumeByFillsourceX2Y2Change',
  Stats24hNetworkBaseTokenVolumeByFillsourceX2Y2Current = 'stats24hNetworkBaseTokenVolumeByFillsourceX2Y2Current',
  Stats24hNetworkBaseTokenVolumeByFillsourceX2Y2Previous = 'stats24hNetworkBaseTokenVolumeByFillsourceX2Y2Previous',
  Stats24hNetworkBaseTokenVolumeChange = 'stats24hNetworkBaseTokenVolumeChange',
  Stats24hNetworkBaseTokenVolumeCurrent = 'stats24hNetworkBaseTokenVolumeCurrent',
  Stats24hNetworkBaseTokenVolumePrevious = 'stats24hNetworkBaseTokenVolumePrevious',
  Stats24hNonCurrencyMintsChange = 'stats24hNonCurrencyMintsChange',
  Stats24hNonCurrencyMintsCurrent = 'stats24hNonCurrencyMintsCurrent',
  Stats24hNonCurrencyMintsPrevious = 'stats24hNonCurrencyMintsPrevious',
  Stats24hNonCurrencySalesChange = 'stats24hNonCurrencySalesChange',
  Stats24hNonCurrencySalesCurrent = 'stats24hNonCurrencySalesCurrent',
  Stats24hNonCurrencySalesPrevious = 'stats24hNonCurrencySalesPrevious',
  Stats24hNonCurrencyTokensSoldChange = 'stats24hNonCurrencyTokensSoldChange',
  Stats24hNonCurrencyTokensSoldCurrent = 'stats24hNonCurrencyTokensSoldCurrent',
  Stats24hNonCurrencyTokensSoldPrevious = 'stats24hNonCurrencyTokensSoldPrevious',
  Stats24hNonCurrencyTransfersChange = 'stats24hNonCurrencyTransfersChange',
  Stats24hNonCurrencyTransfersCurrent = 'stats24hNonCurrencyTransfersCurrent',
  Stats24hNonCurrencyTransfersPrevious = 'stats24hNonCurrencyTransfersPrevious',
  Stats24hNonCurrencyUniqueBuyersChange = 'stats24hNonCurrencyUniqueBuyersChange',
  Stats24hNonCurrencyUniqueBuyersCurrent = 'stats24hNonCurrencyUniqueBuyersCurrent',
  Stats24hNonCurrencyUniqueBuyersPrevious = 'stats24hNonCurrencyUniqueBuyersPrevious',
  Stats24hNonCurrencyUniqueMintersChange = 'stats24hNonCurrencyUniqueMintersChange',
  Stats24hNonCurrencyUniqueMintersCurrent = 'stats24hNonCurrencyUniqueMintersCurrent',
  Stats24hNonCurrencyUniqueMintersPrevious = 'stats24hNonCurrencyUniqueMintersPrevious',
  Stats24hNonCurrencyUniqueSalesWalletsChange = 'stats24hNonCurrencyUniqueSalesWalletsChange',
  Stats24hNonCurrencyUniqueSalesWalletsCurrent = 'stats24hNonCurrencyUniqueSalesWalletsCurrent',
  Stats24hNonCurrencyUniqueSalesWalletsPrevious = 'stats24hNonCurrencyUniqueSalesWalletsPrevious',
  Stats24hNonCurrencyUniqueSellersChange = 'stats24hNonCurrencyUniqueSellersChange',
  Stats24hNonCurrencyUniqueSellersCurrent = 'stats24hNonCurrencyUniqueSellersCurrent',
  Stats24hNonCurrencyUniqueSellersPrevious = 'stats24hNonCurrencyUniqueSellersPrevious',
  Stats24hUsdAverageChange = 'stats24hUsdAverageChange',
  Stats24hUsdAverageCurrent = 'stats24hUsdAverageCurrent',
  Stats24hUsdAveragePrevious = 'stats24hUsdAveragePrevious',
  Stats24hUsdCloseChange = 'stats24hUsdCloseChange',
  Stats24hUsdCloseCurrent = 'stats24hUsdCloseCurrent',
  Stats24hUsdClosePrevious = 'stats24hUsdClosePrevious',
  Stats24hUsdHighestSaleChange = 'stats24hUsdHighestSaleChange',
  Stats24hUsdHighestSaleCurrent = 'stats24hUsdHighestSaleCurrent',
  Stats24hUsdHighestSalePrevious = 'stats24hUsdHighestSalePrevious',
  Stats24hUsdLowestSaleChange = 'stats24hUsdLowestSaleChange',
  Stats24hUsdLowestSaleCurrent = 'stats24hUsdLowestSaleCurrent',
  Stats24hUsdLowestSalePrevious = 'stats24hUsdLowestSalePrevious',
  Stats24hUsdOpenChange = 'stats24hUsdOpenChange',
  Stats24hUsdOpenCurrent = 'stats24hUsdOpenCurrent',
  Stats24hUsdOpenPrevious = 'stats24hUsdOpenPrevious',
  Stats24hUsdVolumeByFillsourceBlendChange = 'stats24hUsdVolumeByFillsourceBlendChange',
  Stats24hUsdVolumeByFillsourceBlendCurrent = 'stats24hUsdVolumeByFillsourceBlendCurrent',
  Stats24hUsdVolumeByFillsourceBlendPrevious = 'stats24hUsdVolumeByFillsourceBlendPrevious',
  Stats24hUsdVolumeByFillsourceBlurChange = 'stats24hUsdVolumeByFillsourceBlurChange',
  Stats24hUsdVolumeByFillsourceBlurCurrent = 'stats24hUsdVolumeByFillsourceBlurCurrent',
  Stats24hUsdVolumeByFillsourceBlurPrevious = 'stats24hUsdVolumeByFillsourceBlurPrevious',
  Stats24hUsdVolumeByFillsourceBlurV2Change = 'stats24hUsdVolumeByFillsourceBlurV2Change',
  Stats24hUsdVolumeByFillsourceBlurV2Current = 'stats24hUsdVolumeByFillsourceBlurV2Current',
  Stats24hUsdVolumeByFillsourceBlurV2Previous = 'stats24hUsdVolumeByFillsourceBlurV2Previous',
  Stats24hUsdVolumeByFillsourceCryptopunksChange = 'stats24hUsdVolumeByFillsourceCryptopunksChange',
  Stats24hUsdVolumeByFillsourceCryptopunksCurrent = 'stats24hUsdVolumeByFillsourceCryptopunksCurrent',
  Stats24hUsdVolumeByFillsourceCryptopunksPrevious = 'stats24hUsdVolumeByFillsourceCryptopunksPrevious',
  Stats24hUsdVolumeByFillsourceGemChange = 'stats24hUsdVolumeByFillsourceGemChange',
  Stats24hUsdVolumeByFillsourceGemCurrent = 'stats24hUsdVolumeByFillsourceGemCurrent',
  Stats24hUsdVolumeByFillsourceGemPrevious = 'stats24hUsdVolumeByFillsourceGemPrevious',
  Stats24hUsdVolumeByFillsourceLooksrareChange = 'stats24hUsdVolumeByFillsourceLooksrareChange',
  Stats24hUsdVolumeByFillsourceLooksrareCurrent = 'stats24hUsdVolumeByFillsourceLooksrareCurrent',
  Stats24hUsdVolumeByFillsourceLooksrarePrevious = 'stats24hUsdVolumeByFillsourceLooksrarePrevious',
  Stats24hUsdVolumeByFillsourceLooksrareV2Change = 'stats24hUsdVolumeByFillsourceLooksrareV2Change',
  Stats24hUsdVolumeByFillsourceLooksrareV2Current = 'stats24hUsdVolumeByFillsourceLooksrareV2Current',
  Stats24hUsdVolumeByFillsourceLooksrareV2Previous = 'stats24hUsdVolumeByFillsourceLooksrareV2Previous',
  Stats24hUsdVolumeByFillsourceOpenseaChange = 'stats24hUsdVolumeByFillsourceOpenseaChange',
  Stats24hUsdVolumeByFillsourceOpenseaCurrent = 'stats24hUsdVolumeByFillsourceOpenseaCurrent',
  Stats24hUsdVolumeByFillsourceOpenseaPrevious = 'stats24hUsdVolumeByFillsourceOpenseaPrevious',
  Stats24hUsdVolumeByFillsourceOpenseaProChange = 'stats24hUsdVolumeByFillsourceOpenseaProChange',
  Stats24hUsdVolumeByFillsourceOpenseaProCurrent = 'stats24hUsdVolumeByFillsourceOpenseaProCurrent',
  Stats24hUsdVolumeByFillsourceOpenseaProPrevious = 'stats24hUsdVolumeByFillsourceOpenseaProPrevious',
  Stats24hUsdVolumeByFillsourceSeaportChange = 'stats24hUsdVolumeByFillsourceSeaportChange',
  Stats24hUsdVolumeByFillsourceSeaportCurrent = 'stats24hUsdVolumeByFillsourceSeaportCurrent',
  Stats24hUsdVolumeByFillsourceSeaportPrevious = 'stats24hUsdVolumeByFillsourceSeaportPrevious',
  Stats24hUsdVolumeByFillsourceSudoswapChange = 'stats24hUsdVolumeByFillsourceSudoswapChange',
  Stats24hUsdVolumeByFillsourceSudoswapCurrent = 'stats24hUsdVolumeByFillsourceSudoswapCurrent',
  Stats24hUsdVolumeByFillsourceSudoswapPrevious = 'stats24hUsdVolumeByFillsourceSudoswapPrevious',
  Stats24hUsdVolumeByFillsourceSudoswapV2Change = 'stats24hUsdVolumeByFillsourceSudoswapV2Change',
  Stats24hUsdVolumeByFillsourceSudoswapV2Current = 'stats24hUsdVolumeByFillsourceSudoswapV2Current',
  Stats24hUsdVolumeByFillsourceSudoswapV2Previous = 'stats24hUsdVolumeByFillsourceSudoswapV2Previous',
  Stats24hUsdVolumeByFillsourceX2Y2Change = 'stats24hUsdVolumeByFillsourceX2Y2Change',
  Stats24hUsdVolumeByFillsourceX2Y2Current = 'stats24hUsdVolumeByFillsourceX2Y2Current',
  Stats24hUsdVolumeByFillsourceX2Y2Previous = 'stats24hUsdVolumeByFillsourceX2Y2Previous',
  Stats24hUsdVolumeChange = 'stats24hUsdVolumeChange',
  Stats24hUsdVolumeCurrent = 'stats24hUsdVolumeCurrent',
  Stats24hUsdVolumePrevious = 'stats24hUsdVolumePrevious',
  TotalSupply = 'totalSupply'
}

/** Stats for an NFT collection for a time frame. */
export type NftCollectionWindowStats = {
  __typename?: 'NftCollectionWindowStats';
  /** The price stats for the NFT collection in the network's base token. */
  networkBaseTokenPriceStats: NftCollectionPriceStats;
  /** The trade count over the `window`. */
  tradeCount: Scalars['String']['output'];
  /** The change in trade count between the previous and current `window`. */
  tradeCountChange: Scalars['Float']['output'];
  /** The price stats for the NFT collection in USD. */
  usdPriceStats: NftCollectionPriceStats;
  /** The time frame used to calculate the stats. */
  window: Scalars['String']['output'];
};

/** The duration used to rank NFTs. */
export enum NftCollectionsLeaderboardDuration {
  Day1 = 'day1',
  Day30 = 'day30',
  Hour1 = 'hour1',
  Hour4 = 'hour4',
  Hour12 = 'hour12',
  Min15 = 'min15',
  Week1 = 'week1'
}

/** The attribute used to rank NFT collections. */
export enum NftCollectionsLeaderboardMetric {
  Buyers = 'buyers',
  BuyersGain = 'buyersGain',
  Mints = 'mints',
  MintsGain = 'mintsGain',
  Sales = 'sales',
  SalesGain = 'salesGain',
  Sellers = 'sellers',
  SellersGain = 'sellersGain',
  TokensSold = 'tokensSold',
  TokensSoldGain = 'tokensSoldGain',
  VolumeBase = 'volumeBase',
  VolumeBaseGain = 'volumeBaseGain',
  VolumeUsd = 'volumeUsd',
  VolumeUsdGain = 'volumeUsdGain'
}

/** docs: hide */
export type NftCollectionsLeaderboardModel = {
  __typename?: 'NftCollectionsLeaderboardModel';
  averageBase: Scalars['String']['output'];
  averageBaseGain: Scalars['Float']['output'];
  averageBasePrev: Scalars['String']['output'];
  averageUsd: Scalars['String']['output'];
  averageUsdGain: Scalars['Float']['output'];
  averageUsdPrev: Scalars['String']['output'];
  buyers?: Maybe<Scalars['Int']['output']>;
  buyersGain?: Maybe<Scalars['Float']['output']>;
  buyersPrev?: Maybe<Scalars['Int']['output']>;
  collectionAddress: Scalars['String']['output'];
  duration: NftCollectionsLeaderboardDuration;
  exchangeAddress: Scalars['String']['output'];
  floorBase?: Maybe<Scalars['String']['output']>;
  floorBaseGain?: Maybe<Scalars['Float']['output']>;
  floorBasePrev?: Maybe<Scalars['String']['output']>;
  floorUsd?: Maybe<Scalars['String']['output']>;
  floorUsdGain?: Maybe<Scalars['Float']['output']>;
  floorUsdPrev?: Maybe<Scalars['String']['output']>;
  lastEvent: Scalars['Int']['output'];
  minters?: Maybe<Scalars['Int']['output']>;
  mintersGain?: Maybe<Scalars['Float']['output']>;
  mintersPrev?: Maybe<Scalars['Int']['output']>;
  mints: Scalars['Int']['output'];
  mintsGain: Scalars['Float']['output'];
  mintsPrev: Scalars['Int']['output'];
  networkId: Scalars['Int']['output'];
  nftLeaderboardItemId: Scalars['String']['output'];
  sales: Scalars['Int']['output'];
  salesGain: Scalars['Float']['output'];
  salesPrev: Scalars['Int']['output'];
  sellers?: Maybe<Scalars['Int']['output']>;
  sellersGain?: Maybe<Scalars['Float']['output']>;
  sellersPrev?: Maybe<Scalars['Int']['output']>;
  tokensSold: Scalars['String']['output'];
  tokensSoldGain: Scalars['Float']['output'];
  tokensSoldPrev: Scalars['String']['output'];
  updatedAt: Scalars['Int']['output'];
  volumeBase: Scalars['String']['output'];
  volumeBaseGain: Scalars['Float']['output'];
  volumeBasePrev: Scalars['String']['output'];
  volumeUsd: Scalars['String']['output'];
  volumeUsdGain: Scalars['Float']['output'];
  volumeUsdPrev: Scalars['String']['output'];
};

/** Metadata for an NFT collection. */
export type NftContract = {
  __typename?: 'NftContract';
  /** The contract address of the NFT collection. */
  address: Scalars['String']['output'];
  /** The description of the NFT collection. */
  description?: Maybe<Scalars['String']['output']>;
  /** The token standard. Can be a variation of `ERC-721` or `ERC-1155`. */
  ercType: Scalars['String']['output'];
  /** The ID of the NFT collection (`address`:`networkId`). */
  id: Scalars['String']['output'];
  /** The URL for an image of the NFT collection. */
  image?: Maybe<Scalars['String']['output']>;
  /** The name of the NFT collection. */
  name?: Maybe<Scalars['String']['output']>;
  /** The network ID the NFT collection is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The symbol for the NFT collection. */
  symbol?: Maybe<Scalars['String']['output']>;
  /** The total supply of the NFT collection. */
  totalSupply?: Maybe<Scalars['String']['output']>;
};

/** Token standards. */
export enum NftContractErcType {
  Erc721 = 'ERC721',
  Erc721Enumerable = 'ERC721Enumerable',
  Erc721Metadata = 'ERC721Metadata',
  Erc1155 = 'ERC1155',
  Erc1155Metadata = 'ERC1155Metadata',
  Unsupported = 'Unsupported'
}

/** Input type of `getNftContracts`. */
export type NftContractInput = {
  /** The NFT contract address. */
  address: Scalars['String']['input'];
  /** The network ID the NFT collection is deployed on. */
  networkId: Scalars['Int']['input'];
};

/** An NFT collection transaction. */
export type NftEvent = Trackable & {
  __typename?: 'NftEvent';
  /** The contract address of the marketplace aggregator that routed the transaction. */
  aggregatorAddress?: Maybe<Scalars['String']['output']>;
  /** @deprecated Field no longer supported */
  baseTokenAddress: Scalars['String']['output'];
  /** @deprecated Field no longer supported */
  baseTokenPrice?: Maybe<Scalars['String']['output']>;
  /** The block number for the transaction. */
  blockNumber: Scalars['Int']['output'];
  /** The contract address of the NFT collection. */
  contractAddress: Scalars['String']['output'];
  /**
   * docs: hide
   * @deprecated Field no longer supported
   */
  data: NftEventData;
  /** The event type of the transaction. */
  eventType: Scalars['String']['output'];
  /** The NFT marketplace address of the transaction. */
  exchangeAddress: Scalars['String']['output'];
  /** The name of the marketplace that processed the transaction. */
  fillSource?: Maybe<Scalars['String']['output']>;
  /** The ID of the NFT event (`contractAddress`:`tokenId`:`networkId`). */
  id: Scalars['String']['output'];
  /** @deprecated Field no longer supported */
  individualBaseTokenPrice?: Maybe<Scalars['String']['output']>;
  /** @deprecated Field no longer supported */
  individualNetworkBaseTokenPrice?: Maybe<Scalars['String']['output']>;
  /** @deprecated Some events may lack this value - use the nullable individualTradePrice. individualPrice will return null values as an empty string. */
  individualPrice?: Maybe<Scalars['String']['output']>;
  /** The price of each individual NFT in the network's base token. */
  individualPriceNetworkBaseToken?: Maybe<Scalars['String']['output']>;
  /** The price of each individual NFT in USD. */
  individualPriceUsd?: Maybe<Scalars['String']['output']>;
  /** @deprecated Some events may lack this value - use the nullable individualTradePrice. individualTokenPrice will return null values as an empty string. */
  individualTokenPrice?: Maybe<Scalars['String']['output']>;
  /** The price of each individual NFT in the purchasing token. */
  individualTradePrice?: Maybe<Scalars['String']['output']>;
  /** The index of the log in the block. */
  logIndex: Scalars['Int']['output'];
  /** The wallet address of the buyer. */
  maker: Scalars['String']['output'];
  /** @deprecated Field no longer supported */
  networkBaseTokenPrice?: Maybe<Scalars['String']['output']>;
  /** The network ID the NFT collection is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The number of assets involved in the transaction. */
  numberOfTokens?: Maybe<Scalars['String']['output']>;
  /** The direction of the order. One of 'BUY', 'SELL', or 'OFFER_ACCEPTED'. */
  orderDirection?: Maybe<NftEventOrderDirection>;
  /** The contract address of the purchasing token. */
  paymentTokenAddress: Scalars['String']['output'];
  /** The contract address of the NFT pool, if applicable. */
  poolAddress?: Maybe<Scalars['String']['output']>;
  /** The reason for the price error, if applicable. Can be `NO_TOKEN_DATA`, `NO_TOKEN_PRICE`, or `LOW_LIQUIDITY_PAIR`. */
  priceError?: Maybe<Scalars['String']['output']>;
  /** The sortKey for the event (`blockNumber`#`transactionIndex`#`logIndex` (+ #`marketplaceEventLogIndex` if applicable), zero padded). For example, `0000000016414564#00000224#00000413#00000414`. */
  sortKey: Scalars['String']['output'];
  /** The wallet address of the seller. */
  taker: Scalars['String']['output'];
  /** The unix timestamp for the transaction. */
  timestamp: Scalars['Int']['output'];
  /** The token ID of the NFT asset involved in the transaction. */
  tokenId: Scalars['String']['output'];
  /** @deprecated Some events may lack this value - use the nullable totalTradePrice. tokenPrice will return null values as an empty string. */
  tokenPrice: Scalars['String']['output'];
  /** @deprecated Some events may lack this value - use the nullable totalTradePrice. totalPrice will return null values as an empty string. */
  totalPrice: Scalars['String']['output'];
  /** The total trade price for the transaction in the network's base token. (The transaction can include more than 1 token). */
  totalPriceNetworkBaseToken?: Maybe<Scalars['String']['output']>;
  /** The total trade price for the transaction in USD. (The transaction can include more than 1 token). */
  totalPriceUsd?: Maybe<Scalars['String']['output']>;
  /** The total trade price for the transaction in the purchasing token. (The transaction can include more than 1 token). */
  totalTradePrice?: Maybe<Scalars['String']['output']>;
  /** The tokens/NFTs that were offered to make this transaction occur. */
  tradeOffer?: Maybe<Array<NftEventTradeItem>>;
  /** The tokens/NFTs that were received in this transaction. */
  tradeReceived?: Maybe<Array<NftEventTradeItem>>;
  /** The unique hash for the transaction. */
  transactionHash: Scalars['String']['output'];
  /** The index of the transaction within the block. */
  transactionIndex: Scalars['Int']['output'];
};

/** docs: hide */
export type NftEventData = {
  __typename?: 'NftEventData';
  buyHash?: Maybe<Scalars['String']['output']>;
  maker?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  sellHash?: Maybe<Scalars['String']['output']>;
  taker?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

/** NFT marketplaces for a webhook to listen on. */
export type NftEventFillSourceCondition = {
  __typename?: 'NftEventFillSourceCondition';
  /** The list of NFT marketplaces. */
  oneOf: Array<WebhookNftEventFillSource>;
};

/** Input for NFT event fill source condition. */
export type NftEventFillSourceConditionInput = {
  /** The list of NFT marketplace to equal. */
  oneOf: Array<WebhookNftEventFillSource>;
};

/** Details for an NFT offered or received as part of an nft trade. */
export type NftEventNftTradeItem = NftEventTradeItemBase & {
  __typename?: 'NftEventNftTradeItem';
  /** The contract address for the NFT. */
  address: Scalars['String']['output'];
  /** The number of tokens transferred. (Always 1 for ERC721 NFTs) */
  amount: Scalars['String']['output'];
  /** The recipient of the NFT. */
  recipient?: Maybe<Scalars['String']['output']>;
  /** The token ID of the exchanged NFT */
  tokenId: Scalars['String']['output'];
  /** The type of item involved in the trade. (Always NFT) */
  type: NftEventTradeItemType;
};

/** The direction of the nft sale event. */
export enum NftEventOrderDirection {
  Buy = 'BUY',
  OfferAccepted = 'OFFER_ACCEPTED',
  Sell = 'SELL'
}

/** Details for a token(s) offered or received as part of an nft trade. */
export type NftEventTokenTradeItem = NftEventTradeItemBase & {
  __typename?: 'NftEventTokenTradeItem';
  /** The contract address for the token. */
  address: Scalars['String']['output'];
  /** The number of tokens transferred. */
  amount: Scalars['String']['output'];
  /** The price of each individual NFT in the network's base token. */
  individualPriceNetworkBaseToken?: Maybe<Scalars['String']['output']>;
  /** The price of each individual NFT in USD. */
  individualPriceUsd?: Maybe<Scalars['String']['output']>;
  /** The price of each individual NFT in the purchasing token. */
  individualTradePrice?: Maybe<Scalars['String']['output']>;
  /** Whether this should be summed to calculate the price of the NFT received in the base event. Tokens that are payment fees or involved with other sales in the transaction are often represented in sales and would have a value of `false`. */
  isPrice: Scalars['Boolean']['output'];
  /** The reason for the price error, if applicable. Can be `NO_TOKEN_DATA`, `NO_TOKEN_PRICE`, or `LOW_LIQUIDITY_PAIR`. */
  priceError?: Maybe<Scalars['String']['output']>;
  /** The recipient of the tokens. */
  recipient?: Maybe<Scalars['String']['output']>;
  /** The total trade price for the transaction in the network's base token. (The transaction can include more than 1 token). */
  totalPriceNetworkBaseToken?: Maybe<Scalars['String']['output']>;
  /** The total trade price for the transaction in USD. (The transaction can include more than 1 token). */
  totalPriceUsd?: Maybe<Scalars['String']['output']>;
  /** The total trade price for the transaction in the purchasing token. (The transaction can include more than 1 token). */
  totalTradePrice?: Maybe<Scalars['String']['output']>;
  /** The type of item involved in the trade. (Always TOKEN) */
  type: NftEventTradeItemType;
};

/** An item that was either offered or received as part of an NFT trade. */
export type NftEventTradeItem = NftEventNftTradeItem | NftEventTokenTradeItem;

/** Fields that are common in all items offered or received as part of an nft trade. */
export type NftEventTradeItemBase = {
  /** The contract address for the item. */
  address: Scalars['String']['output'];
  /** The number of items transferred. */
  amount?: Maybe<Scalars['String']['output']>;
  /** The recipient of the items. */
  recipient?: Maybe<Scalars['String']['output']>;
  /** The type of item involved in the trade. (NFT or TOKEN) */
  type: NftEventTradeItemType;
};

/** The type of item involved in the trade. */
export enum NftEventTradeItemType {
  Nft = 'NFT',
  Token = 'TOKEN'
}

/** An NFT event type for a webhook to listen for. */
export type NftEventTypeCondition = {
  __typename?: 'NftEventTypeCondition';
  /** The NFT event type. */
  eq: WebhookNftEventType;
};

/** Input for NFT event type. */
export type NftEventTypeConditionInput = {
  /** The NFT event type to equal. */
  eq: WebhookNftEventType;
};

/** Webhook conditions for an NFT event. */
export type NftEventWebhookCondition = {
  __typename?: 'NftEventWebhookCondition';
  /** The NFT collection contract address the webhook is listening for. */
  contractAddress?: Maybe<StringEqualsCondition>;
  /** The NFT event type the webhook is listening for. */
  eventType?: Maybe<NftEventTypeCondition>;
  /** The exchange contract address the webhook is listening for. */
  exchangeAddress?: Maybe<StringEqualsCondition>;
  /** The NFT marketplaces the webhook is listening on. */
  fillSource?: Maybe<NftEventFillSourceCondition>;
  /** Option to ignore all nft transfer events */
  ignoreTransfers?: Maybe<Scalars['Boolean']['output']>;
  /** The base token price the webhook is listening for. */
  individualBaseTokenPrice?: Maybe<ComparisonOperator>;
  /** The maker wallet address the webhook is listening for. */
  maker?: Maybe<StringEqualsCondition>;
  /** The list of network IDs the webhook is listening on. */
  networkId?: Maybe<OneOfNumberCondition>;
  /** The token contract address the webhook is listening for. */
  tokenAddress?: Maybe<StringEqualsCondition>;
  /** The token ID the webhook is listening for. */
  tokenId?: Maybe<StringEqualsCondition>;
};

/** Input conditions for an NFT event webhook. */
export type NftEventWebhookConditionInput = {
  /** The NFT collection contract address to listen for. */
  contractAddress?: InputMaybe<StringEqualsConditionInput>;
  /** The NFT event type to listen for. */
  eventType?: InputMaybe<NftEventTypeConditionInput>;
  /** The exchange contract address to listen for. */
  exchangeAddress?: InputMaybe<StringEqualsConditionInput>;
  /** The NFT marketplaces to listen for. */
  fillSource?: InputMaybe<NftEventFillSourceConditionInput>;
  /** Option to ignore all nft transfer events */
  ignoreTransfers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The maker wallet address to listen for. */
  maker?: InputMaybe<StringEqualsConditionInput>;
  /** A list of network IDs to listen on. */
  networkId?: InputMaybe<OneOfNumberConditionInput>;
  /** The token ID to listen for. */
  tokenId?: InputMaybe<StringEqualsConditionInput>;
};

/** Response returned by `getNftEvents`. */
export type NftEventsConnection = {
  __typename?: 'NftEventsConnection';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** A list of transactions for an NFT collection. */
  items?: Maybe<Array<Maybe<NftEvent>>>;
};

/** NFT marketplaces. */
export enum NftExchange {
  Alto = 'ALTO',
  Bitkeep = 'BITKEEP',
  Blend = 'BLEND',
  Blur = 'BLUR',
  Blurv2 = 'BLURV2',
  Cryptopunks = 'CRYPTOPUNKS',
  Joepegs = 'JOEPEGS',
  Looksrare = 'LOOKSRARE',
  Looksrarev2 = 'LOOKSRAREV2',
  Minted = 'MINTED',
  Opensea = 'OPENSEA',
  Playdapp = 'PLAYDAPP',
  Provenant = 'PROVENANT',
  Quixotic = 'QUIXOTIC',
  Seaport = 'SEAPORT',
  Stratos = 'STRATOS',
  Sudoswapammv2 = 'SUDOSWAPAMMV2',
  Sudoswapv2 = 'SUDOSWAPV2',
  Tofunft = 'TOFUNFT',
  Treasure = 'TREASURE',
  X2Y2 = 'X2Y2',
  Zeroexv3 = 'ZEROEXV3',
  Zeroexv4 = 'ZEROEXV4'
}

/** Number metrics for NFT fillsource stats. */
export type NftFillsourceStatsNumberMetrics = {
  __typename?: 'NftFillsourceStatsNumberMetrics';
  /** The percent change between the `current` and `previous`. */
  change?: Maybe<Scalars['Float']['output']>;
  /** The total value for the current window. */
  current?: Maybe<Scalars['Float']['output']>;
  /** Marketplace that filled the NFT order volume. (ex. OPENSEA, BLUR, etc.) */
  fillsource?: Maybe<Scalars['String']['output']>;
  /** The total value for the previous window. */
  previous?: Maybe<Scalars['Float']['output']>;
};

/** String metrics for NFT stats. */
export type NftFillsourceStatsStringMetrics = {
  __typename?: 'NftFillsourceStatsStringMetrics';
  /** The percent change between the `current` and `previous`. */
  change?: Maybe<Scalars['Float']['output']>;
  /** The total value for the current window. */
  current?: Maybe<Scalars['String']['output']>;
  /** Marketplace that filled the NFT order volume. (ex. OPENSEA, BLUR, etc.) */
  fillsource?: Maybe<Scalars['String']['output']>;
  /** The total value for the previous window. */
  previous?: Maybe<Scalars['String']['output']>;
};

export type NftHoldersInput = {
  /** The address of the collection contract. */
  collectionAddress: Scalars['String']['input'];
  /** A cursor for use in pagination. */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** The network ID the collection is deployed on. */
  networkId: Scalars['Int']['input'];
};

export type NftHoldersResponse = {
  __typename?: 'NftHoldersResponse';
  /** the unique count of holders for the collection. */
  count: Scalars['Int']['output'];
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The list wallets for a collection. */
  items: Array<NftBalance>;
  /** Status of holder. Disabled if on unsupported network or there is insufficient holder data. */
  status: HoldersStatus;
};

/** docs: hide */
export type NftHoldersUpdate = {
  __typename?: 'NftHoldersUpdate';
  balances: Array<NftBalance>;
  collectionAddress: Scalars['String']['output'];
  holders: Scalars['Int']['output'];
  networkId: Scalars['Int']['output'];
};

/** Event data for updating the asset recipient of a pool. */
export type NftPoolAssetRecipientUpdateEventData = {
  __typename?: 'NftPoolAssetRecipientUpdateEventData';
  /** The updated wallet address that will receive the tokens or NFT sent to the pair during swaps. */
  newAssetRecipient: Scalars['String']['output'];
  /** The type of NFT pool event, `ASSET_RECIPIENT_CHANGE`. */
  type: NftPoolEventType;
};

/** Response returned by `filterNftPoolCollections`. */
export type NftPoolCollectionFilterConnection = {
  __typename?: 'NftPoolCollectionFilterConnection';
  /** The number of NFT collections returned. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Where in the list the server started when returning items. */
  page?: Maybe<Scalars['Int']['output']>;
  /** The list of NFT collections matching the filter parameters. */
  results?: Maybe<Array<Maybe<NftPoolCollectionFilterResult>>>;
};

/** An NFT pool collection. */
export type NftPoolCollectionFilterResult = {
  __typename?: 'NftPoolCollectionFilterResult';
  /** The total liquidity of the collection in the network's base token. */
  balanceNBT?: Maybe<Scalars['String']['output']>;
  /** The total liquidity of the collection in USD. */
  balanceUSD?: Maybe<Scalars['String']['output']>;
  /** The contract address of the NFT collection. */
  collectionAddress?: Maybe<Scalars['String']['output']>;
  /** The token standard. Can be a variation of `ERC-721` or `ERC-1155`. */
  ercType?: Maybe<Scalars['String']['output']>;
  /** The contract address of the NFT AMM marketplace. */
  exchangeAddress?: Maybe<Scalars['String']['output']>;
  /** The total sell volume of the collection in the network's base token over the past 24 hours. */
  expenseNBT24?: Maybe<Scalars['String']['output']>;
  /** The total sell volume of the collection in the network's base token over the collection's lifetime. */
  expenseNBTAll?: Maybe<Scalars['String']['output']>;
  /** The total sell volume of the collection in USD over the past 24 hours. */
  expenseUSD24?: Maybe<Scalars['String']['output']>;
  /** The total sell volume of the collection in USD over the collection's lifetime. */
  expenseUSDAll?: Maybe<Scalars['String']['output']>;
  /** The lowest price at which any of the collection's pools are willing to sell an NFT in the network's base token. */
  floorNBT?: Maybe<Scalars['String']['output']>;
  /** The lowest price at which any of the collection's pools are willing to sell an NFT in USD. */
  floorUSD?: Maybe<Scalars['String']['output']>;
  /** The highest sale price within the collection in the network's base token in the past 24 hours. */
  highPriceNBT24?: Maybe<Scalars['String']['output']>;
  /** The highest sale price within the collection in the network's base token in the collection's lifetime. */
  highPriceNBTAll?: Maybe<Scalars['String']['output']>;
  /** The highest sale price within the collection in USD in the past 24 hours. */
  highPriceUSD24?: Maybe<Scalars['String']['output']>;
  /** The highest sale price within the collection in USD in the collection's lifetime. */
  highPriceUSDAll?: Maybe<Scalars['String']['output']>;
  /** The ID of the NFT collection (`collectionAddress`:`exchangeAddress`:`networkId`). */
  id: Scalars['String']['output'];
  /** The image URL for the collection or one of the assets within the collection. */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** The lowest sale price within the collection in the network's base token in the past 24 hours. */
  lowPriceNBT24?: Maybe<Scalars['String']['output']>;
  /** The lowest sale price within the collection in the network's base token in the collection's lifetime. */
  lowPriceNBTAll?: Maybe<Scalars['String']['output']>;
  /** The lowest sale price within the collection in USD in the past 24 hours. */
  lowPriceUSD24?: Maybe<Scalars['String']['output']>;
  /** The lowest sale price within the collection in USD in the collection's lifetime. */
  lowPriceUSDAll?: Maybe<Scalars['String']['output']>;
  /** The name of the NFT collection. */
  name?: Maybe<Scalars['String']['output']>;
  /** The network ID the NFT collection is deployed on. */
  networkId?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of NFTs in all of the collection's pools.
   * @deprecated nftBalance is changing from Int to String - use nftBalanceV2 instead.
   */
  nftBalance?: Maybe<Scalars['Int']['output']>;
  /** The number of NFTs in all of the collection's pools. */
  nftBalanceV2?: Maybe<Scalars['String']['output']>;
  /**
   * The number of NFTs bought and sold in any of the collection's pools over the past 24 hours.
   * @deprecated nftVolume24 is changing from Int to String - use nftVolume24V2 instead.
   */
  nftVolume24?: Maybe<Scalars['Int']['output']>;
  /** The number of NFTs bought and sold in any of the collection's pools over the past 24 hours. */
  nftVolume24V2?: Maybe<Scalars['String']['output']>;
  /**
   * The number of NFTs bought or sold in any of the collection's pools over the collection's lifetime.
   * @deprecated nftVolumeAll is changing from Int to String - use nftVolumeAllV2 instead.
   */
  nftVolumeAll?: Maybe<Scalars['Int']['output']>;
  /** The number of NFTs bought or sold in any of the collection's pools over the collection's lifetime. */
  nftVolumeAllV2?: Maybe<Scalars['String']['output']>;
  /**
   * The number of NFTs bought in any of the collection's pools over the past 24 hours.
   * @deprecated nftsBought24 is changing from Int to String - use nftsBought24V2 instead.
   */
  nftsBought24?: Maybe<Scalars['Int']['output']>;
  /** The number of NFTs bought in any of the collection's pools over the past 24 hours. */
  nftsBought24V2?: Maybe<Scalars['String']['output']>;
  /**
   * The number of NFTs bought in any of the collection's pools over the collection's lifetime.
   * @deprecated nftsBoughtAll is changing from Int to String - use nftsBoughtAllV2 instead.
   */
  nftsBoughtAll?: Maybe<Scalars['Int']['output']>;
  /** The number of NFTs bought in any of the collection's pools over the collection's lifetime. */
  nftsBoughtAllV2?: Maybe<Scalars['String']['output']>;
  /**
   * The number of NFTs sold in any of the collection's pools over the past 24 hours.
   * @deprecated nftsSold24 is changing from Int to String - use nftsSold24V2 instead.
   */
  nftsSold24?: Maybe<Scalars['Int']['output']>;
  /** The number of NFTs sold in any of the collection's pools over the past 24 hours. */
  nftsSold24V2?: Maybe<Scalars['String']['output']>;
  /**
   * The number of NFTs sold in any of the collection's pools over the collection's lifetime.
   * @deprecated nftsSoldAll is changing from Int to String - use nftsSoldAllV2 instead.
   */
  nftsSoldAll?: Maybe<Scalars['Int']['output']>;
  /** The number of NFTs sold in any of the collection's pools over the collection's lifetime. */
  nftsSoldAllV2?: Maybe<Scalars['String']['output']>;
  /** The highest price at which any of the collection's pools are willing to buy an NFT in the network's base token. */
  offerNBT?: Maybe<Scalars['String']['output']>;
  /** The highest price at which any of the collection's pools are willing to buy an NFT in USD. */
  offerUSD?: Maybe<Scalars['String']['output']>;
  /** The sum of pool fees generated by the collection in the network's base token over the past 24 hours. */
  poolFeesNBT24?: Maybe<Scalars['String']['output']>;
  /** The sum of pool fees generated by the collection in the network's base token over the collection's lifetime. */
  poolFeesNBTAll?: Maybe<Scalars['String']['output']>;
  /** The sum of pool fees generated by the collection in USD over the past 24 hours. */
  poolFeesUSD24?: Maybe<Scalars['String']['output']>;
  /** The sum of pool fees generated by the collection in USD over the collection's lifetime. */
  poolFeesUSDAll?: Maybe<Scalars['String']['output']>;
  /** The sum of protocol fees generated by the collection in the network's base token over the past 24 hours. */
  protocolFeesNBT24?: Maybe<Scalars['String']['output']>;
  /** The sum of protocol fees generated by the collection in the network's base token over the collection's lifetime. */
  protocolFeesNBTAll?: Maybe<Scalars['String']['output']>;
  /** The sum of protocol fees generated by the collection in USD over the past 24 hours. */
  protocolFeesUSD24?: Maybe<Scalars['String']['output']>;
  /** The sum of protocol fees generated by the collection in USD over the collection's lifetime. */
  protocolFeesUSDAll?: Maybe<Scalars['String']['output']>;
  /** The total buy volume of the collection in the network's base token over the past 24 hours. */
  revenueNBT24?: Maybe<Scalars['String']['output']>;
  /** The total buy volume of the collection in the network's base token over the collection's lifetime. */
  revenueNBTAll?: Maybe<Scalars['String']['output']>;
  /** The total buy volume of the collection in USD over the past 24 hours. */
  revenueUSD24?: Maybe<Scalars['String']['output']>;
  /** The total buy volume of the collection in USD over the collection's lifetime. */
  revenueUSDAll?: Maybe<Scalars['String']['output']>;
  /** The symbol for the NFT collection. */
  symbol?: Maybe<Scalars['String']['output']>;
  /** The unix timestamp indicating the last time the data was updated. Updates every 2 hours. */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /**
   * The total supply of the collection.
   * @deprecated totalSupply is changing from Int to String - use totalSupplyV2 instead.
   */
  totalSupply?: Maybe<Scalars['Int']['output']>;
  totalSupplyV2?: Maybe<Scalars['String']['output']>;
  /** The total volume of the collection in the network's base token over the past 24 hours. */
  volumeNBT24?: Maybe<Scalars['String']['output']>;
  /** The total volume of the collection in the network's base token over the collection's lifetime. */
  volumeNBTAll?: Maybe<Scalars['String']['output']>;
  /** The total volume of the collection in USD over the past 24 hours. */
  volumeUSD24?: Maybe<Scalars['String']['output']>;
  /** The total volume of the collection in USD over the collection's lifetime. */
  volumeUSDAll?: Maybe<Scalars['String']['output']>;
};

/** Input type of `NftPoolCollectionFilters`. */
export type NftPoolCollectionFilters = {
  /** The total liquidity of the collection in the network's base token. */
  balanceNBT?: InputMaybe<NumberFilter>;
  /** The total liquidity of the collection in USD. */
  balanceUSD?: InputMaybe<NumberFilter>;
  /** The list of token standards to filter by. Can be a variation of `ERC-721` or `ERC-1155`. */
  ercType?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The list of NFT AMM marketplace addresses to filter by. */
  exchange?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The total sell volume of the collection in the network's base token over the past 24 hours. */
  expenseNBT24?: InputMaybe<NumberFilter>;
  /** The total sell volume of the collection in the network's base token over the collection's lifetime. */
  expenseNBTAll?: InputMaybe<NumberFilter>;
  /** The total sell volume of the collection in USD over the past 24 hours. */
  expenseUSD24?: InputMaybe<NumberFilter>;
  /** The total sell volume of the collection in USD over the collection's lifetime. */
  expenseUSDAll?: InputMaybe<NumberFilter>;
  /** The lowest price at which any of the collection's pools are willing to sell an NFT in the network's base token. */
  floorNBT?: InputMaybe<NumberFilter>;
  /** The lowest price at which any of the collection's pools are willing to sell an NFT in USD. */
  floorUSD?: InputMaybe<NumberFilter>;
  /** The highest sale price within the collection in the network's base token in the past 24 hours. */
  highPriceNBT24?: InputMaybe<NumberFilter>;
  /** The highest sale price within the collection in the network's base token in the collection's lifetime. */
  highPriceNBTAll?: InputMaybe<NumberFilter>;
  /** The highest sale price within the collection in USD in the past 24 hours. */
  highPriceUSD24?: InputMaybe<NumberFilter>;
  /** The highest sale price within the collection in USD in the collection's lifetime. */
  highPriceUSDAll?: InputMaybe<NumberFilter>;
  /** The lowest sale price within the collection in the network's base token in the past 24 hours. */
  lowPriceNBT24?: InputMaybe<NumberFilter>;
  /** The lowest sale price within the collection in the network's base token in the collection's lifetime. */
  lowPriceNBTAll?: InputMaybe<NumberFilter>;
  /** The lowest sale price within the collection in USD in the past 24 hours. */
  lowPriceUSD24?: InputMaybe<NumberFilter>;
  /** The lowest sale price within the collection in USD in the collection's lifetime. */
  lowPriceUSDAll?: InputMaybe<NumberFilter>;
  /** The list of network IDs to filter by. */
  network?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** The number of NFTs in all of the collection's pools. */
  nftBalance?: InputMaybe<NumberFilter>;
  /** The number of NFTs bought in any of the collection's pools over the past 24 hours. */
  nftVolume24?: InputMaybe<NumberFilter>;
  /** The number of NFTs bought or sold in any of the collection's pools over the collection's lifetime. */
  nftVolumeAll?: InputMaybe<NumberFilter>;
  /** The number of NFTs bought in any of the collection's pools over the past 24 hours. */
  nftsBought24?: InputMaybe<NumberFilter>;
  /** The number of NFTs bought in any of the collection's pools over the collection's lifetime. */
  nftsBoughtAll?: InputMaybe<NumberFilter>;
  /** The number of NFTs sold in any of the collection's pools over the past 24 hours. */
  nftsSold24?: InputMaybe<NumberFilter>;
  /** The number of NFTs sold in any of the collection's pools over the collection's lifetime. */
  nftsSoldAll?: InputMaybe<NumberFilter>;
  /** The highest price at which any of the collection's pools are willing to buy an NFT in the network's base token. */
  offerNBT?: InputMaybe<NumberFilter>;
  /** The highest price at which any of the collection's pools are willing to buy an NFT in USD. */
  offerUSD?: InputMaybe<NumberFilter>;
  /** The sum of pool fees generated by the collection in the network's base token over the past 24 hours. */
  poolFeesNBT24?: InputMaybe<NumberFilter>;
  /** The sum of pool fees generated by the collection in the network's base token over the collection's lifetime. */
  poolFeesNBTAll?: InputMaybe<NumberFilter>;
  /** The sum of pool fees generated by the collection in USD over the past 24 hours. */
  poolFeesUSD24?: InputMaybe<NumberFilter>;
  /** The sum of pool fees generated by the collection in USD over the collection's lifetime. */
  poolFeesUSDAll?: InputMaybe<NumberFilter>;
  /** The sum of protocol fees generated by the collection in the network's base token over the past 24 hours. */
  protocolFeesNBT24?: InputMaybe<NumberFilter>;
  /** The sum of protocol fees generated by the collection in the network's base token over the collection's lifetime. */
  protocolFeesNBTAll?: InputMaybe<NumberFilter>;
  /** The sum of protocol fees generated by the collection in USD over the past 24 hours. */
  protocolFeesUSD24?: InputMaybe<NumberFilter>;
  /** The sum of protocol fees generated by the collection in USD over the collection's lifetime. */
  protocolFeesUSDAll?: InputMaybe<NumberFilter>;
  /** The total buy volume of the collection in the network's base token over the past 24 hours. */
  revenueNBT24?: InputMaybe<NumberFilter>;
  /** The total buy volume of the collection in the network's base token over the collection's lifetime. */
  revenueNBTAll?: InputMaybe<NumberFilter>;
  /** The total buy volume of the collection in USD over the past 24 hours. */
  revenueUSD24?: InputMaybe<NumberFilter>;
  /** The total buy volume of the collection in USD over the collection's lifetime. */
  revenueUSDAll?: InputMaybe<NumberFilter>;
  /** The total supply of the collection. */
  totalSupply?: InputMaybe<NumberFilter>;
  /** The total volume of the collection in the network's base token over the past 24 hours. */
  volumeNBT24?: InputMaybe<NumberFilter>;
  /** The total volume of the collection in the network's base token over the collection's lifetime. */
  volumeNBTAll?: InputMaybe<NumberFilter>;
  /** The total volume of the collection in USD over the past 24 hours. */
  volumeUSD24?: InputMaybe<NumberFilter>;
  /** The total volume of the collection in USD over the collection's lifetime. */
  volumeUSDAll?: InputMaybe<NumberFilter>;
};

/** Input type of `NftPoolCollectionRanking`. */
export type NftPoolCollectionRanking = {
  /** The attribute to rank NFT collections by. */
  attribute?: InputMaybe<NftPoolCollectionRankingAttribute>;
  /** The direction to apply to the ranking attribute. */
  direction?: InputMaybe<RankingDirection>;
};

/** The attribute used to rank NFT collections. */
export enum NftPoolCollectionRankingAttribute {
  BalanceNbt = 'balanceNBT',
  BalanceUsd = 'balanceUSD',
  ExpenseNbt24 = 'expenseNBT24',
  ExpenseNbtAll = 'expenseNBTAll',
  ExpenseUsd24 = 'expenseUSD24',
  ExpenseUsdAll = 'expenseUSDAll',
  FloorNbt = 'floorNBT',
  FloorUsd = 'floorUSD',
  HighPriceNbt24 = 'highPriceNBT24',
  HighPriceNbtAll = 'highPriceNBTAll',
  HighPriceUsd24 = 'highPriceUSD24',
  HighPriceUsdAll = 'highPriceUSDAll',
  LowPriceNbt24 = 'lowPriceNBT24',
  LowPriceNbtAll = 'lowPriceNBTAll',
  LowPriceUsd24 = 'lowPriceUSD24',
  LowPriceUsdAll = 'lowPriceUSDAll',
  NftBalance = 'nftBalance',
  NftVolume24 = 'nftVolume24',
  NftVolumeAll = 'nftVolumeAll',
  NftsBought24 = 'nftsBought24',
  NftsBoughtAll = 'nftsBoughtAll',
  NftsSold24 = 'nftsSold24',
  NftsSoldAll = 'nftsSoldAll',
  OfferNbt = 'offerNBT',
  OfferUsd = 'offerUSD',
  PoolFeesNbt24 = 'poolFeesNBT24',
  PoolFeesNbtAll = 'poolFeesNBTAll',
  PoolFeesUsd24 = 'poolFeesUSD24',
  PoolFeesUsdAll = 'poolFeesUSDAll',
  ProtocolFeesNbt24 = 'protocolFeesNBT24',
  ProtocolFeesNbtAll = 'protocolFeesNBTAll',
  ProtocolFeesUsd24 = 'protocolFeesUSD24',
  ProtocolFeesUsdAll = 'protocolFeesUSDAll',
  RevenueNbt24 = 'revenueNBT24',
  RevenueNbtAll = 'revenueNBTAll',
  RevenueUsd24 = 'revenueUSD24',
  RevenueUsdAll = 'revenueUSDAll',
  TotalSupply = 'totalSupply',
  VolumeNbt24 = 'volumeNBT24',
  VolumeNbtAll = 'volumeNBTAll',
  VolumeUsd24 = 'volumeUSD24',
  VolumeUsdAll = 'volumeUSDAll'
}

/** An NFT collection in an NFT pool. */
export type NftPoolCollectionResponse = {
  __typename?: 'NftPoolCollectionResponse';
  /** The total liquidity of the collection in the network's base token. */
  balanceNBT: Scalars['String']['output'];
  /** The contract address of the NFT collection. */
  collectionAddress: Scalars['String']['output'];
  /** The ID of the NFT collection (`collectionAddress`:`networkId`). */
  collectionId: Scalars['String']['output'];
  /** The symbol of the NFT collection. */
  collectionSymbol: Scalars['String']['output'];
  /** The contract address of the NFT AMM marketplace. */
  exchangeAddress: Scalars['String']['output'];
  /** The ID of the exchange (`exchangeAddress`:`networkId`). */
  exchangeId: Scalars['String']['output'];
  /** The lowest price at which any of the NFT collection's pools are willing to sell an NFT in the network's base token. */
  floorNBT?: Maybe<Scalars['String']['output']>;
  /** An image associated with the NFT collection. */
  image?: Maybe<Scalars['String']['output']>;
  /**
   * The media for one of the assets within the NFT collection.
   * @deprecated Use `image` from `NftContract` instead.
   */
  media?: Maybe<NftAssetMedia>;
  /** The name of the NFT collection. */
  name?: Maybe<Scalars['String']['output']>;
  /** The network ID the NFT collection is deployed on. */
  networkId: Scalars['Int']['output'];
  /**
   * The current number of NFTs in all the NFT collection's pools.
   * @deprecated nftBalance is changing from Int to String - use nftBalanceV2 instead.
   */
  nftBalance: Scalars['Int']['output'];
  /** The current number of NFTs in all the NFT collection's pools. */
  nftBalanceV2: Scalars['String']['output'];
  /**
   * The total number of NFTs bought and sold over the collection's lifetime.
   * @deprecated nftVolumeAllTime is changing from Int to String - use nftVolumeAllTimeV2 instead.
   */
  nftVolumeAllTime?: Maybe<Scalars['Int']['output']>;
  /** The total number of NFTs bought and sold over the collection's lifetime. */
  nftVolumeAllTimeV2?: Maybe<Scalars['String']['output']>;
  /** The highest price at which any of the NFT collection's pools are willing to buy an NFT in the network's base token. */
  offerNBT?: Maybe<Scalars['String']['output']>;
  /** The sum of pool fees generated by the collection in the network's base token over the collection's lifetime. */
  poolFeesNBTAll?: Maybe<Scalars['String']['output']>;
  /** The sum of pool fees generated by the collection in USD over the collection's lifetime. */
  poolFeesUSDAll?: Maybe<Scalars['String']['output']>;
  /** The sum of protocol fees generated by the collection in the network's base token over the collection's lifetime. */
  protocolFeesNBTAll?: Maybe<Scalars['String']['output']>;
  /** The sum of protocol fees generated by the collection in USD over the collection's lifetime. */
  protocolFeesUSDAll?: Maybe<Scalars['String']['output']>;
  /** As estimated sum in the network's base token of the collection's royalties paid to creators by pool swaps over the collection's lifetime. */
  royaltiesNBTAllEstimate?: Maybe<Scalars['String']['output']>;
  /** An estimated sum in USD of the collection's royalties paid to creators by pool swaps over the collection's lifetime. */
  royaltiesUSDAllEstimate?: Maybe<Scalars['String']['output']>;
  /** The total volume of the collection in the network's base token over the collection's lifetime. */
  volumeAllTimeNBT?: Maybe<Scalars['String']['output']>;
  /** The total volume of the collection in USD over the collection's lifetime. */
  volumeAllTimeUSD?: Maybe<Scalars['String']['output']>;
};

/** The NFT pool contract version. */
export enum NftPoolContractVersion {
  SudoswapV1 = 'SUDOSWAP_V1',
  SudoswapV2 = 'SUDOSWAP_V2'
}

/** Event data for updating the delta of a pool. */
export type NftPoolDeltaUpdateEventData = {
  __typename?: 'NftPoolDeltaUpdateEventData';
  /** The updated delta used in the bonding curve. */
  newDelta: Scalars['String']['output'];
  /** The type of NFT pool event, `DELTA_UPDATE`. */
  type: NftPoolEventType;
};

/** An NFT pool transaction. */
export type NftPoolEvent = {
  __typename?: 'NftPoolEvent';
  /** The hash of the block where the transaction occurred. */
  blockHash: Scalars['String']['output'];
  /** The block number for the transaction. */
  blockNumber: Scalars['Int']['output'];
  /** The contract address of the NFT collection. */
  collectionAddress: Scalars['String']['output'];
  /** The ID of the NFT collection (`collectionAddress`:`networkId`). */
  collectionId: Scalars['String']['output'];
  /** The event-specific data for the transaction. */
  data: NftPoolEventData;
  /** The event type of the transaction. */
  eventType: NftPoolEventType;
  /** The contract address of the NFT AMM marketplace. */
  exchangeAddress: Scalars['String']['output'];
  /** The ID of the NFT pool (`poolAddress`:`networkId`). For example, `0xdbea289dcc10eed8431e78753414a3d81b8e7201:1`. */
  id: Scalars['String']['output'];
  /** The index of the log in the block. */
  logIndex: Scalars['Int']['output'];
  /** The wallet address that transacted. */
  maker: Scalars['String']['output'];
  /** The network ID the NFT collection is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The contract address of the NFT pool. */
  poolAddress: Scalars['String']['output'];
  /** The type of liquidity pool. */
  poolType: NftPoolType;
  /** The unix timestamp for the transaction. */
  timestamp: Scalars['Int']['output'];
  /** The contract address of the liquidity token of the pool (usually WETH). */
  tokenAddress: Scalars['String']['output'];
  /** The unique hash for the transaction. */
  transactionHash: Scalars['String']['output'];
  /** The index of the transaction within the block. */
  transactionIndex: Scalars['Int']['output'];
};

/** Event-specific data for an NFT pool transaction. */
export type NftPoolEventData = NewPoolEventData | NewPoolEventDataV2 | NftPoolAssetRecipientUpdateEventData | NftPoolDeltaUpdateEventData | NftPoolFeeUpdateEventData | NftPoolNftDepositEventData | NftPoolNftDepositEventDataV2 | NftPoolNftWithdrawalEventData | NftPoolNftWithdrawalEventDataV2 | NftPoolOwnershipTransferredEventDataV2 | NftPoolSpotPriceUpdateEventData | NftPoolSpotPriceUpdateEventDataV2 | NftPoolTokenDepositEventData | NftPoolTokenDepositEventDataV2 | NftPoolTokenWithdrawalEventData | NftPoolTokenWithdrawalEventDataV2 | SwapNftInPoolEventData | SwapNftInPoolEventDataV2 | SwapNftOutPoolEventData | SwapNftOutPoolEventDataV2;

/** Metadata for an NFT transfer. */
export type NftPoolEventNftTransfer = {
  __typename?: 'NftPoolEventNftTransfer';
  /** The value of the NFT at the time of transfer. */
  amountT: Scalars['String']['output'];
  /** The NFT token ID involved in the transfer. */
  nftTokenId: Scalars['String']['output'];
};

/** Metadata for an NFT transfer. */
export type NftPoolEventNftTransferV2 = {
  __typename?: 'NftPoolEventNftTransferV2';
  /** The value of the token at the time of transfer. */
  amountT: Scalars['String']['output'];
  /** The number of tokens involved in the transfer. */
  nftQuantity: Scalars['String']['output'];
  /** The NFT token ID involved in the transfer. */
  nftTokenId: Scalars['String']['output'];
  /**
   * The number of tokens involved in the transfer.
   * @deprecated nftTokenQuantity is no longer supported - use nftQuantity instead.
   */
  nftTokenQuantity: Scalars['String']['output'];
};

/** The type of an NFT pool event. */
export enum NftPoolEventType {
  AssetRecipientChange = 'ASSET_RECIPIENT_CHANGE',
  DeltaUpdate = 'DELTA_UPDATE',
  FeeUpdate = 'FEE_UPDATE',
  NewPool = 'NEW_POOL',
  NewPoolV2 = 'NEW_POOL_V2',
  NftDeposit = 'NFT_DEPOSIT',
  NftDepositV2 = 'NFT_DEPOSIT_V2',
  NftWithdrawal = 'NFT_WITHDRAWAL',
  NftWithdrawalV2 = 'NFT_WITHDRAWAL_V2',
  OwnershipTransferred = 'OWNERSHIP_TRANSFERRED',
  SpotPriceUpdate = 'SPOT_PRICE_UPDATE',
  SpotPriceUpdateV2 = 'SPOT_PRICE_UPDATE_V2',
  SwapNftInPool = 'SWAP_NFT_IN_POOL',
  SwapNftInPoolV2 = 'SWAP_NFT_IN_POOL_V2',
  SwapNftOutPool = 'SWAP_NFT_OUT_POOL',
  SwapNftOutPoolV2 = 'SWAP_NFT_OUT_POOL_V2',
  TokenDeposit = 'TOKEN_DEPOSIT',
  TokenDepositV2 = 'TOKEN_DEPOSIT_V2',
  TokenWithdrawal = 'TOKEN_WITHDRAWAL',
  TokenWithdrawalV2 = 'TOKEN_WITHDRAWAL_V2'
}

/** Response returned by `getNftPoolEvents`. */
export type NftPoolEventsResponse = {
  __typename?: 'NftPoolEventsResponse';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** A list of transactions for an NFT pool. */
  items?: Maybe<Array<Maybe<NftPoolEvent>>>;
};

/** Event data for updating the fee of a pool. */
export type NftPoolFeeUpdateEventData = {
  __typename?: 'NftPoolFeeUpdateEventData';
  /** The ratio of the transaction token to the network's base token. */
  nbtRatio: Scalars['String']['output'];
  /** The updated pool fee in the pool's liquidity token. */
  newFeeT: Scalars['String']['output'];
  /** The type of NFT pool event, `FEE_UPDATE`. */
  type: NftPoolEventType;
  /** The ratio of the transaction token to USD. */
  usdRatio: Scalars['String']['output'];
};

/** Response returned by `filterNftPools`. */
export type NftPoolFilterConnection = {
  __typename?: 'NftPoolFilterConnection';
  /** The number of NFT pools returned. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Where in the list the server started when returning items. */
  page?: Maybe<Scalars['Int']['output']>;
  /** The list of NFT pools matching the filter parameters. */
  results?: Maybe<Array<Maybe<NftPoolFilterResult>>>;
};

/** An NFT pool matching a set of filter parameters. */
export type NftPoolFilterResult = {
  __typename?: 'NftPoolFilterResult';
  /** For ERC1155 pools, the list of NFT token IDs that are accepted by the pool. */
  acceptedNftTokenIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The wallet address that will receive the tokens or NFT sent to the pair during swaps. */
  assetRecipientAddress?: Maybe<Scalars['String']['output']>;
  /** The current pool liquidity in the network's base token. */
  balanceNBT?: Maybe<Scalars['String']['output']>;
  /** The current value of the collection in the pool's liquidity token. */
  balanceT?: Maybe<Scalars['String']['output']>;
  /** The current pool liquidity in USD. */
  balanceUSD?: Maybe<Scalars['String']['output']>;
  /** The contract address of the bonding curve. */
  bondingCurveAddress: Scalars['String']['output'];
  /** The contract address of the NFT collection. */
  collectionAddress: Scalars['String']['output'];
  /** The name of the NFT collection. */
  collectionName: Scalars['String']['output'];
  /** The symbol of the NFT collection. */
  collectionSymbol: Scalars['String']['output'];
  /** The delta used in the pool's bonding curve. */
  delta: Scalars['String']['output'];
  /** The contract address of the NFT AMM marketplace. */
  exchangeAddress: Scalars['String']['output'];
  /** The total sell volume of the pool in the network's base token over the past 24 hours. */
  expenseNBT24?: Maybe<Scalars['String']['output']>;
  /** The total sell volume of the pool in the network's base token over the pool's lifetime. */
  expenseNBTAll?: Maybe<Scalars['String']['output']>;
  /** The total sell volume of the pool in the pool's liquidity token over the past 24 hours. */
  expenseT24?: Maybe<Scalars['String']['output']>;
  /** The total sell volume of the pool in the pool's liquidity token over the pool's lifetime. */
  expenseTAll?: Maybe<Scalars['String']['output']>;
  /** The total sell volume of the pool in USD over the past 24 hours. */
  expenseUSD24?: Maybe<Scalars['String']['output']>;
  /** The total sell volume of the pool in USD over the pool's lifetime. */
  expenseUSDAll?: Maybe<Scalars['String']['output']>;
  /** The fee amount for the pool. */
  feeAmount: Scalars['String']['output'];
  /** The ID of the NFT pool (`poolAddress`:`networkId`). */
  id: Scalars['String']['output'];
  /** The network ID the NFT collection is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The list of NFT assets in the pool. */
  nftAssets?: Maybe<Array<Maybe<NftAsset>>>;
  /**
   * The current number of NFTs in the pool.
   * @deprecated nftBalance is changing from Int to String - use nftBalanceV2 instead.
   */
  nftBalance?: Maybe<Scalars['Int']['output']>;
  /** The current number of NFTs in the pool. */
  nftBalanceV2?: Maybe<Scalars['String']['output']>;
  /**
   * The total number of NFTs bought and sold over the past 24 hours.
   * @deprecated nftVolume24 is changing from Int to String - use nftVolume24V2 instead.
   */
  nftVolume24?: Maybe<Scalars['Int']['output']>;
  /** The total number of NFTs bought and sold over the past 24 hours. */
  nftVolume24V2?: Maybe<Scalars['String']['output']>;
  /**
   * The total number of NFTs bought and sold over the pool's lifetime.
   * @deprecated nftVolumeAll is changing from Int to String - use nftVolumeAllV2 instead.
   */
  nftVolumeAll?: Maybe<Scalars['Int']['output']>;
  /** The total number of NFTs bought and sold over the pool's lifetime. */
  nftVolumeAllV2?: Maybe<Scalars['String']['output']>;
  /**
   * The total number of NFTs bought by the pool over the past 24 hours.
   * @deprecated nftsBought24 is changing from Int to String - use nftsBought24V2 instead.
   */
  nftsBought24?: Maybe<Scalars['Int']['output']>;
  /** The total number of NFTs bought by the pool over the past 24 hours. */
  nftsBought24V2?: Maybe<Scalars['String']['output']>;
  /**
   * The total number of NFTs bought over the pool's lifetime.
   * @deprecated nftsBoughtAll is changing from Int to String - use nftsBoughtAllV2 instead.
   */
  nftsBoughtAll?: Maybe<Scalars['Int']['output']>;
  /** The total number of NFTs bought over the pool's lifetime. */
  nftsBoughtAllV2?: Maybe<Scalars['String']['output']>;
  /**
   * The total number of NFTs sold by the pool over the past 24 hours.
   * @deprecated nftsSold24 is changing from Int to String - use nftsSold24V2 instead.
   */
  nftsSold24?: Maybe<Scalars['Int']['output']>;
  /** The total number of NFTs sold by the pool over the past 24 hours. */
  nftsSold24V2?: Maybe<Scalars['String']['output']>;
  /**
   * The total number of NFTs sold over the pool's lifetime.
   * @deprecated nftsSoldAll is changing from Int to String - use nftsSoldAllV2 instead.
   */
  nftsSoldAll?: Maybe<Scalars['Int']['output']>;
  /** The total number of NFTs sold over the pool's lifetime. */
  nftsSoldAllV2?: Maybe<Scalars['String']['output']>;
  /** The current price at which the pool is willing to buy an NFT in the network's base token. */
  offerNBT?: Maybe<Scalars['String']['output']>;
  /** The current price at which the pool is willing to buy an NFT in the pool's liquidity token. */
  offerT?: Maybe<Scalars['String']['output']>;
  /** The current price at which the pool is willing to buy an NFT in USD. */
  offerUSD?: Maybe<Scalars['String']['output']>;
  /** The wallet address of the pool owner. */
  ownerAddress: Scalars['String']['output'];
  /** The contract address of the NFT pool. */
  poolAddress: Scalars['String']['output'];
  /** The sum of pool fees generated by the pool in the network's base token over the past 24 hours. */
  poolFeesNBT24?: Maybe<Scalars['String']['output']>;
  /** The sum of pool fees generated by the pool in the network's base token over the pool's lifetime. */
  poolFeesNBTAll?: Maybe<Scalars['String']['output']>;
  /** The sum of pool fees generated by the pool in the pool's liquidity token over the past 24 hours. */
  poolFeesT24?: Maybe<Scalars['String']['output']>;
  /** The sum of pool fees generated by the pool in the pool's liquidity token over the pool's lifetime. */
  poolFeesTAll?: Maybe<Scalars['String']['output']>;
  /** The sum of pool fees generated by the pool in USD over the past 24 hours. */
  poolFeesUSD24?: Maybe<Scalars['String']['output']>;
  /** The sum of pool fees generated by the pool in USD over the pool's lifetime. */
  poolFeesUSDAll?: Maybe<Scalars['String']['output']>;
  /** The type of NFT in the pool. */
  poolNftType?: Maybe<PoolNftType>;
  /** The type of liquidity pool. */
  poolType: NftPoolType;
  /** The pool variant. Can be `ERC20` or `NATIVE`. */
  poolVariant: GraphQlNftPoolVariant;
  /** The property checker contract address for the pool. */
  propertyChecker?: Maybe<Scalars['String']['output']>;
  /** The sum of protocol fees generated by the pool in the network's base token over the past 24 hours. */
  protocolFeesNBT24?: Maybe<Scalars['String']['output']>;
  /** The sum of protocol fees generated by the pool in the network's base token over the pool's lifetime. */
  protocolFeesNBTAll?: Maybe<Scalars['String']['output']>;
  /** The sum of protocol fees generated by the pool in the pool's liquidity token over the past 24 hours. */
  protocolFeesT24?: Maybe<Scalars['String']['output']>;
  /** The sum of protocol fees generated by the pool in the pool's liquidity token over the pool's lifetime. */
  protocolFeesTAll?: Maybe<Scalars['String']['output']>;
  /** The sum of protocol fees generated by the pool in USD over the past 24 hours. */
  protocolFeesUSD24?: Maybe<Scalars['String']['output']>;
  /** The sum of protocol fees generated by the pool in USD over the pool's lifetime. */
  protocolFeesUSDAll?: Maybe<Scalars['String']['output']>;
  /** The total buy volume of the pool in the network's base token over the past 24 hours. */
  revenueNBT24?: Maybe<Scalars['String']['output']>;
  /** The total buy volume of the pool in the network's base token over the pool's lifetime. */
  revenueNBTAll?: Maybe<Scalars['String']['output']>;
  /** The total buy volume of the pool in the pool's liquidity token over the past 24 hours. */
  revenueT24?: Maybe<Scalars['String']['output']>;
  /** The total buy volume of the pool in the pool's liquidity token over the pool's lifetime. */
  revenueTAll?: Maybe<Scalars['String']['output']>;
  /** The total buy volume of the pool in USD over the past 24 hours. */
  revenueUSD24?: Maybe<Scalars['String']['output']>;
  /** The total buy volume of the pool in USD over the pool's lifetime. */
  revenueUSDAll?: Maybe<Scalars['String']['output']>;
  /** The list of royalties for the pool. Only applicable for `SUDOSWAP_V2` pools. */
  royalties?: Maybe<Array<Maybe<NftPoolRoyalty>>>;
  /** The current price at which the pool is willing to sell an NFT. */
  sellNBT?: Maybe<Scalars['String']['output']>;
  /** The current price at which the pool is willing to sell an NFT in the network's base token. */
  sellT?: Maybe<Scalars['String']['output']>;
  /** The current price at which the pool is willing to sell an NFT in USD. */
  sellUSD?: Maybe<Scalars['String']['output']>;
  /** The current spot price for the pool in the network's base token. */
  spotNBT?: Maybe<Scalars['String']['output']>;
  /** The current spot price for the pool in the pool's liquidity token. */
  spotT?: Maybe<Scalars['String']['output']>;
  /** The unix timestamp indicating the last time the data was updated. Updates every 2 hours. */
  timestamp: Scalars['Int']['output'];
  /** The contract address of the liquidity token of the pool. */
  tokenAddress: Scalars['String']['output'];
  /** The NFT pool contract version. Can be `SUDOSWAP_V1` or `SUDOSWAP_V2`. */
  version?: Maybe<NftPoolContractVersion>;
  /** The total volume of the pool in the network's base token over the past 24 hours. */
  volumeNBT24?: Maybe<Scalars['String']['output']>;
  /** The total volume of the pool in the network's base token over the pool's lifetime. */
  volumeNBTAll?: Maybe<Scalars['String']['output']>;
  /** The total volume of the pool in the pool's liquidity token over the past 24 hours. */
  volumeT24?: Maybe<Scalars['String']['output']>;
  /** The total volume of the pool in the pool's liquidity token over the pool's lifetime. */
  volumeTAll?: Maybe<Scalars['String']['output']>;
  /** The total volume of the pool in USD over the past 24 hours. */
  volumeUSD24?: Maybe<Scalars['String']['output']>;
  /** The total volume of the pool in USD over the pool's lifetime. */
  volumeUSDAll?: Maybe<Scalars['String']['output']>;
};

/** Input type of `NftPoolFilters`. */
export type NftPoolFilters = {
  /** For ERC1155 pools, the list of NFT token IDs that are accepted by the pool. */
  acceptedNftTokenIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The pool liquidity in the network's base token. */
  balanceNBT?: InputMaybe<NftPoolNumberFilter>;
  /** The pool liquidity in USD. */
  balanceUSD?: InputMaybe<NftPoolNumberFilter>;
  /** The contract address of the NFT collection. */
  collectionAddress?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The list of NFT AMM marketplace addresses to filter by. */
  exchangeAddress?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The total sell volume of the pool in the network's base token over the past 24 hours. */
  expenseNBT24?: InputMaybe<NftPoolNumberFilter>;
  /** The total sell volume of the pool in the network's base token over the pool's lifetime. */
  expenseNBTAll?: InputMaybe<NftPoolNumberFilter>;
  /** The total sell volume of the pool in USD over the past 24 hours. */
  expenseUSD24?: InputMaybe<NftPoolNumberFilter>;
  /** The total sell volume of the pool in USD over the pool's lifetime. */
  expenseUSDAll?: InputMaybe<NftPoolNumberFilter>;
  /** The list of network IDs to filter by. */
  network?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** The number of NFTs in the pool. */
  nftBalance?: InputMaybe<NftPoolNumberFilter>;
  /** The number of NFTs bought or sold over the past 24 hours. */
  nftVolume24?: InputMaybe<NftPoolNumberFilter>;
  /** The number of NFTs bought or sold over the pool's lifetime. */
  nftVolumeAll?: InputMaybe<NftPoolNumberFilter>;
  /** The number of NFTs bought over the past 24 hours. */
  nftsBought24?: InputMaybe<NftPoolNumberFilter>;
  /** The number of NFTs bought over the pool's lifetime. */
  nftsBoughtAll?: InputMaybe<NftPoolNumberFilter>;
  /** The number of NFTs sold over the past 24 hours. */
  nftsSold24?: InputMaybe<NftPoolNumberFilter>;
  /** The number of NFTs sold over the pool's lifetime. */
  nftsSoldAll?: InputMaybe<NftPoolNumberFilter>;
  /** The price at which the pool is willing to buy an NFT in the network's base token. */
  offerNBT?: InputMaybe<NftPoolNumberFilter>;
  /** The price at which the pool is willing to buy an NFT in USD. */
  offerUSD?: InputMaybe<NftPoolNumberFilter>;
  /** The wallet address of the pool owner. */
  ownerAddress?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The sum of fees generated by the pool in the network's base token in the past 24 hours. */
  poolFeesNBT24?: InputMaybe<NftPoolNumberFilter>;
  /** The sum of fees generated by the pool in the network's base token over the pool's lifetime. */
  poolFeesNBTAll?: InputMaybe<NftPoolNumberFilter>;
  /** The sum of fees generated by the pool in USD in the past 24 hours. */
  poolFeesUSD24?: InputMaybe<NftPoolNumberFilter>;
  /** The sum of fees generated by the pool in USD over the pool's lifetime. */
  poolFeesUSDAll?: InputMaybe<NftPoolNumberFilter>;
  /** The sum of protocol fees generated by the pool in the network's base token over the past 24 hours. */
  protocolFeesNBT24?: InputMaybe<NftPoolNumberFilter>;
  /** The sum of protocol fees generated by the pool in the network's base token over the pool's lifetime. */
  protocolFeesNBTAll?: InputMaybe<NftPoolNumberFilter>;
  /** The sum of protocol fees generated by the pool in USD over the past 24 hours. */
  protocolFeesUSD24?: InputMaybe<NftPoolNumberFilter>;
  /** The sum of protocol fees generated by the pool in USD over the pool's lifetime. */
  protocolFeesUSDAll?: InputMaybe<NftPoolNumberFilter>;
  /** The total buy volume of the pool in the network's base token over the past 24 hours. */
  revenueNBT24?: InputMaybe<NftPoolNumberFilter>;
  /** The total buy volume of the pool in the network's base token over the pool's lifetime. */
  revenueNBTAll?: InputMaybe<NftPoolNumberFilter>;
  /** The total buy volume of the pool in USD over the past 24 hours. */
  revenueUSD24?: InputMaybe<NftPoolNumberFilter>;
  /** The total buy volume of the pool in USD over the pool's lifetime. */
  revenueUSDAll?: InputMaybe<NftPoolNumberFilter>;
  /** The current sell price of the pool in the network's base token. */
  sellNBT?: InputMaybe<NftPoolNumberFilter>;
  /** The current sell price of the pool in USD. */
  sellUSD?: InputMaybe<NftPoolNumberFilter>;
  /** The total volume of the pool in the network's base token over the past 24 hours. */
  volumeNBT24?: InputMaybe<NftPoolNumberFilter>;
  /** The total volume of the pool in the network's base token over the pool's lifetime. */
  volumeNBTAll?: InputMaybe<NftPoolNumberFilter>;
  /** The total volume of the pool in USD over the past 24 hours. */
  volumeUSD24?: InputMaybe<NftPoolNumberFilter>;
  /** The total volume of the pool in USD over the pool's lifetime. */
  volumeUSDAll?: InputMaybe<NftPoolNumberFilter>;
};

/** Event data for depositing an NFT into a pool. */
export type NftPoolNftDepositEventData = {
  __typename?: 'NftPoolNftDepositEventData';
  /** The number of NFTs in the contract after the block has processed. */
  nftTokenBalance: Scalars['String']['output'];
  /** The list of NFT token IDs deposited. */
  nftTokenIds: Array<Scalars['String']['output']>;
  /** The amount of token in the contract after the block has processed in the pool's liquidity token. */
  tokenBalanceT: Scalars['String']['output'];
  /** The type of NFT pool event, `NFT_DEPOSIT`. */
  type: NftPoolEventType;
};

/** Event data for depositing an NFT into a pool. */
export type NftPoolNftDepositEventDataV2 = {
  __typename?: 'NftPoolNftDepositEventDataV2';
  /** *New Param*: The list of NFT assets withdrawn. More extensive info than nftTokenIds. */
  nftAssets?: Maybe<Array<Maybe<NftAsset>>>;
  /** The amount of each NFT token deposited. */
  nftTokenAmounts: Array<Scalars['String']['output']>;
  /** The list of NFT token IDs deposited. */
  nftTokenIds: Array<Scalars['String']['output']>;
  /** The amount of token in the contract after the block has processed in the pool's liquidity token. */
  tokenBalanceT: Scalars['String']['output'];
  /** The type of NFT pool event, `NFT_DEPOSIT`. */
  type: NftPoolEventType;
};

/** Event data for withdrawing an NFT from a pool. */
export type NftPoolNftWithdrawalEventData = {
  __typename?: 'NftPoolNftWithdrawalEventData';
  /** The number of NFTs in the contract after the block has processed. */
  nftTokenBalance: Scalars['String']['output'];
  /** The NFT token IDs withdrawn. */
  nftTokenIds: Array<Scalars['String']['output']>;
  /** The amount of token in the contract after the block has processed in the pool's liquidity token. */
  tokenBalanceT: Scalars['String']['output'];
  /** The type of NFT pool event, `NFT_WITHDRAWAL`. */
  type: NftPoolEventType;
};

/** Event data for withdrawing an NFT from a pool. */
export type NftPoolNftWithdrawalEventDataV2 = {
  __typename?: 'NftPoolNftWithdrawalEventDataV2';
  /** *New Param*: The list of NFT assets withdrawn. More extensive info than nftTokenIds. */
  nftAssets?: Maybe<Array<Maybe<NftAsset>>>;
  /** The amount of each NFT token withdrawn. */
  nftTokenAmounts: Array<Scalars['String']['output']>;
  /** The list of NFT token IDs withdrawn. */
  nftTokenIds: Array<Scalars['String']['output']>;
  /** The amount of token in the contract after the block has processed in the pool's liquidity token. */
  tokenBalanceT: Scalars['String']['output'];
  /** The type of NFT pool event, `NFT_WITHDRAWAL`. */
  type: NftPoolEventType;
};

/** Input type of `NftPoolNumberFilter`. */
export type NftPoolNumberFilter = {
  /** Greater than. */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to. */
  gte?: InputMaybe<Scalars['String']['input']>;
  /** Less than. */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to. */
  lte?: InputMaybe<Scalars['String']['input']>;
};

export type NftPoolOwnershipTransferredEventDataV2 = {
  __typename?: 'NftPoolOwnershipTransferredEventDataV2';
  /** The new owner of the pool. */
  newOwner: Scalars['String']['output'];
  /** The type of NFT pool event, `OWNERSHIP_TRANSFERRED`. */
  type: NftPoolEventType;
};

/** Input type of `NftPoolRanking`. */
export type NftPoolRanking = {
  /** The attribute to rank NFT pools by. */
  attribute?: InputMaybe<NftPoolRankingAttribute>;
  /** The direction to apply to the ranking attribute. */
  direction?: InputMaybe<RankingDirection>;
};

/** The attribute used to rank NFT pools. */
export enum NftPoolRankingAttribute {
  BalanceNbt = 'balanceNBT',
  BalanceUsd = 'balanceUSD',
  ExpenseNbt24 = 'expenseNBT24',
  ExpenseNbtAll = 'expenseNBTAll',
  ExpenseUsd24 = 'expenseUSD24',
  ExpenseUsdAll = 'expenseUSDAll',
  NftBalance = 'nftBalance',
  NftVolume24 = 'nftVolume24',
  NftVolumeAll = 'nftVolumeAll',
  NftsBought24 = 'nftsBought24',
  NftsBoughtAll = 'nftsBoughtAll',
  NftsSold24 = 'nftsSold24',
  NftsSoldAll = 'nftsSoldAll',
  OfferNbt = 'offerNBT',
  OfferUsd = 'offerUSD',
  PoolFeesNbt24 = 'poolFeesNBT24',
  PoolFeesNbtAll = 'poolFeesNBTAll',
  PoolFeesUsd24 = 'poolFeesUSD24',
  PoolFeesUsdAll = 'poolFeesUSDAll',
  ProtocolFeesNbt24 = 'protocolFeesNBT24',
  ProtocolFeesNbtAll = 'protocolFeesNBTAll',
  ProtocolFeesUsd24 = 'protocolFeesUSD24',
  ProtocolFeesUsdAll = 'protocolFeesUSDAll',
  RevenueNbt24 = 'revenueNBT24',
  RevenueNbtAll = 'revenueNBTAll',
  RevenueUsd24 = 'revenueUSD24',
  RevenueUsdAll = 'revenueUSDAll',
  SellNbt = 'sellNBT',
  SellUsd = 'sellUSD',
  VolumeNbt24 = 'volumeNBT24',
  VolumeNbtAll = 'volumeNBTAll',
  VolumeUsd24 = 'volumeUSD24',
  VolumeUsdAll = 'volumeUSDAll'
}

/** An NFT pool. */
export type NftPoolResponse = {
  __typename?: 'NftPoolResponse';
  /** For ERC1155 pools, the list of NFT token IDs that are accepted by the pool. */
  acceptedNftTokenIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The wallet address that will receive the tokens or NFT sent to the pair during swaps. */
  assetRecipientAddress: Scalars['String']['output'];
  /** The current pool liquidity in the network's base token. */
  balanceNBT: Scalars['String']['output'];
  /** The current pool liquidity in the pool's liquidity token. */
  balanceT: Scalars['String']['output'];
  /** The contract address of the bonding curve. */
  bondingCurveAddress: Scalars['String']['output'];
  /** The bonding curve type that defines how the prices of NFTs change after each buy or sell within a pool. */
  bondingCurveType: BondingCurveType;
  /** The contract address of the NFT collection. */
  collectionAddress: Scalars['String']['output'];
  /** The contract name of the NFT collection. */
  collectionName: Scalars['String']['output'];
  /** The symbol of the NFT collection. */
  collectionSymbol?: Maybe<Scalars['String']['output']>;
  /** The current delta used in the bonding curve. */
  delta: Scalars['String']['output'];
  /** The contract address of the NFT AMM marketplace. */
  exchangeAddress: Scalars['String']['output'];
  /** The current fee for pool. */
  fee: Scalars['String']['output'];
  /** The current price at which the pool is willing to sell an NFT in the network's base token. Only applicable for `SELL` and `BUY_AND_SELL` pool types. */
  floorNBT?: Maybe<Scalars['String']['output']>;
  /** The current price at which the pool is willing to sell an NFT in the pool's liquidity token. Only applicable for `SELL` and `BUY_AND_SELL` pool types. */
  floorT?: Maybe<Scalars['String']['output']>;
  /** The network ID the NFT collection is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The list of NFT assets in the pool. */
  nftAssets?: Maybe<Array<Maybe<NftAsset>>>;
  /**
   * The current number of NFTs in the pool.
   * @deprecated nftBalance is changing from Int to String - use nftBalanceV2 instead.
   */
  nftBalance?: Maybe<Scalars['Int']['output']>;
  /** The current number of NFTs in the pool. */
  nftBalanceV2: Scalars['String']['output'];
  /**
   * The total number of NFTs bought and sold over the pool's lifetime.
   * @deprecated nftVolumeAllTime is changing from Int to String - use nftVolumeAllTimeV2 instead.
   */
  nftVolumeAllTime: Scalars['Int']['output'];
  /** The total number of NFTs bought and sold over the pool's lifetime. */
  nftVolumeAllTimeV2: Scalars['String']['output'];
  /** The current price at which the pool is willing to buy an NFT in the network's base token. Only applicable for `BUY` and `BUY_AND_SELL` pool types. */
  offerNBT?: Maybe<Scalars['String']['output']>;
  /** The current price at which the pool is willing to buy an NFT in the pool's liquidity token. Only applicable for `BUY` and `BUY_AND_SELL` pool types. */
  offerT?: Maybe<Scalars['String']['output']>;
  /** The wallet address of the pool owner. */
  owner: Scalars['String']['output'];
  /** The contract address of the NFT pool. */
  poolAddress: Scalars['String']['output'];
  poolFeesAllTimeNBT?: Maybe<Scalars['String']['output']>;
  poolFeesAllTimeT?: Maybe<Scalars['String']['output']>;
  /** The ID of the NFT pool (`poolAddress`:`networkId`). For example, `0xdbea289dcc10eed8431e78753414a3d81b8e7201:1`. */
  poolId: Scalars['String']['output'];
  /** The type of NFT in the pool. */
  poolNftType?: Maybe<PoolNftType>;
  /** The type of liquidity pool. */
  poolType: NftPoolType;
  /** The pool variant. Can be `ERC20` or `NATIVE`. */
  poolVariant: GraphQlNftPoolVariant;
  /** The property checker contract address for the pool. */
  propertyChecker?: Maybe<Scalars['String']['output']>;
  /** The list of royalties for the pool. Only applicable for `SUDOSWAP_V2` pools. */
  royalties?: Maybe<Array<Maybe<NftPoolRoyalty>>>;
  /** The spot price in the network's base token. */
  spotPriceNBT: Scalars['String']['output'];
  /** The instantaneous price for selling 1 NFT to the pool in the pool's liquidity token. */
  spotPriceT: Scalars['String']['output'];
  /** The contract address of the liquidity token of the pool (usually WETH). */
  tokenAddress: Scalars['String']['output'];
  /** The NFT pool contract version. Can be `SUDOSWAP_V1` or `SUDOSWAP_V2`. */
  version?: Maybe<NftPoolContractVersion>;
  /** The total volume of the pool in the network's base token over the pool's lifetime. */
  volumeAllTimeNBT: Scalars['String']['output'];
  /** The total volume of the pool in the pool's liquidity token over the pool's lifetime. */
  volumeAllTimeT: Scalars['String']['output'];
};

/** The royalty for a SUDOSWAP_V2 pool. */
export type NftPoolRoyalty = {
  __typename?: 'NftPoolRoyalty';
  /** The royalty percent. */
  percent?: Maybe<Scalars['String']['output']>;
  /** The wallet address of recipient. */
  recipient?: Maybe<Scalars['String']['output']>;
};

/** Event data for updating the spot price of a pool. */
export type NftPoolSpotPriceUpdateEventData = {
  __typename?: 'NftPoolSpotPriceUpdateEventData';
  /** The ratio of the transaction token to the network's base token. */
  nbtRatio: Scalars['String']['output'];
  /** The updated price at which the pool is willing to buy an NFT in the pool's liquidity token. */
  newBuyPriceT: Scalars['String']['output'];
  /** The updated price at which the pool is willing to sell an NFT in the pool's liquidity token. */
  newSellPriceT: Scalars['String']['output'];
  /** The updated spot price in the pool's liquidity token. */
  newSpotPriceT: Scalars['String']['output'];
  /** The type of NFT pool event, `SPOT_PRICE_UPDATE`. */
  type: NftPoolEventType;
  /** The ratio of the transaction token to USD. */
  usdRatio: Scalars['String']['output'];
};

/** Event data for updating the spot price of a pool. */
export type NftPoolSpotPriceUpdateEventDataV2 = {
  __typename?: 'NftPoolSpotPriceUpdateEventDataV2';
  /** The ratio of the transaction token to the network's base token. */
  nbtRatio: Scalars['String']['output'];
  /** The updated price at which the pool is willing to buy an NFT in the pool's liquidity token. */
  newBuyPriceT: Scalars['String']['output'];
  /** The updated price at which the pool is willing to sell an NFT in the pool's liquidity token. */
  newSellPriceT: Scalars['String']['output'];
  /** The updated spot price in the pool's liquidity token. */
  newSpotPriceT: Scalars['String']['output'];
  /** The type of NFT pool event, `SPOT_PRICE_UPDATE`. */
  type: NftPoolEventType;
  /** The ratio of the transaction token to USD. */
  usdRatio: Scalars['String']['output'];
};

/** Stats for an NFT pool. */
export type NftPoolStatsResponse = {
  __typename?: 'NftPoolStatsResponse';
  /** The pool liquidity in the network's base token at the end of the time frame. */
  closeBalanceNBT?: Maybe<Scalars['String']['output']>;
  /** The number of NFTs in the pool at the end of the time frame. */
  closeNftBalanceV2?: Maybe<Scalars['String']['output']>;
  /** The contract address of the NFT collection. */
  collectionAddress: Scalars['String']['output'];
  /** The unix timestamp for the end of the time frame. */
  endTime: Scalars['Int']['output'];
  /** The contract address of the NFT AMM marketplace. */
  exchangeAddress: Scalars['String']['output'];
  /** The total sell volume of the pool in the network's base token over the time frame. */
  expenseNBT?: Maybe<Scalars['String']['output']>;
  /** The highest price at which the pool was willing to sell an NFT in the network's base token over the time frame. */
  highFloorNBT?: Maybe<Scalars['String']['output']>;
  /** The highest price at which the pool was willing to buy an NFT in the network's base token over the time frame. */
  highOfferNBT?: Maybe<Scalars['String']['output']>;
  /** The lowest price at which the pool was willing to sell an NFT in the network's base token over the time frame. */
  lowFloorNBT?: Maybe<Scalars['String']['output']>;
  /** The lowest price at which the pool was willing to buy an NFT in the network's base token over the time frame. */
  lowOfferNBT?: Maybe<Scalars['String']['output']>;
  /** The network ID the NFT collection is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The total number of NFTs bought and sold over the time frame. */
  nftVolumeV2?: Maybe<Scalars['String']['output']>;
  /** The total number of NFTs bought over the time frame. */
  nftsBoughtV2?: Maybe<Scalars['String']['output']>;
  /** The total number of NFTs sold over the time frame. */
  nftsSoldV2?: Maybe<Scalars['String']['output']>;
  /** The pool liquidity in the network's base token at the start of the time frame. */
  openBalanceNBT?: Maybe<Scalars['String']['output']>;
  /** The number of NFTs in the pool at the start of the time frame. */
  openNftBalanceV2?: Maybe<Scalars['String']['output']>;
  /** The contract address of the NFT pool. */
  poolAddress?: Maybe<Scalars['String']['output']>;
  /** The sum of pool fees generated by the pool in the network's base token over the time frame. */
  poolFeesNBT?: Maybe<Scalars['String']['output']>;
  /** The sum of protocol fees generated by the pool in the network's base token over the time frame. */
  protocolFeesNBT?: Maybe<Scalars['String']['output']>;
  /** The total buy volume of the pool in the network's base token over the time frame. */
  revenueNBT?: Maybe<Scalars['String']['output']>;
  /** The unix timestamp for the start of the time frame. */
  startTime: Scalars['Int']['output'];
  /** The total volume of the pool in the network's base token over the time frame. */
  volumeNBT?: Maybe<Scalars['String']['output']>;
};

/** Event data for depositing a token into a pool. */
export type NftPoolTokenDepositEventData = {
  __typename?: 'NftPoolTokenDepositEventData';
  /** The total value of token deposited in the pool's liquidity token. */
  amountT: Scalars['String']['output'];
  /** The ratio of the transaction token to the network's base token. */
  nbtRatio: Scalars['String']['output'];
  /** The number of NFTs in the contract after the block has processed. */
  nftTokenBalance: Scalars['String']['output'];
  /** The amount of token in the contract after the block has processed in the pool's liquidity token. */
  tokenBalanceT: Scalars['String']['output'];
  /** The type of NFT pool event, `TOKEN_DEPOSIT`. */
  type: NftPoolEventType;
  /** The ratio of the transaction token to USD. */
  usdRatio: Scalars['String']['output'];
};

/** Event data for depositing a token into a pool. */
export type NftPoolTokenDepositEventDataV2 = {
  __typename?: 'NftPoolTokenDepositEventDataV2';
  /** The total value of token deposited in the pool's liquidity token. */
  amountT: Scalars['String']['output'];
  /** The ratio of the transaction token to the network's base token. */
  nbtRatio: Scalars['String']['output'];
  /** The amount of token in the contract after the block has processed in the pool's liquidity token. */
  tokenBalanceT: Scalars['String']['output'];
  /** The type of NFT pool event, `TOKEN_DEPOSIT`. */
  type: NftPoolEventType;
  /** The ratio of the transaction token to USD. */
  usdRatio: Scalars['String']['output'];
};

/** Event data for withdrawing a token from a pool. */
export type NftPoolTokenWithdrawalEventData = {
  __typename?: 'NftPoolTokenWithdrawalEventData';
  /** The total value of token withdrawn in the pool's liquidity token. */
  amountT: Scalars['String']['output'];
  /** The ratio of the transaction token to the network's base token. */
  nbtRatio: Scalars['String']['output'];
  /** The number of NFTs in the contract after the block has processed. */
  nftTokenBalance: Scalars['String']['output'];
  /** The amount of token in the contract after the block has processed in the pool's liquidity token. */
  tokenBalanceT: Scalars['String']['output'];
  /** The type of NFT pool event, `TOKEN_WITHDRAWAL`. */
  type: NftPoolEventType;
  /** The ratio of the transaction token to USD. */
  usdRatio: Scalars['String']['output'];
};

/** Event data for withdrawing a token from a pool. */
export type NftPoolTokenWithdrawalEventDataV2 = {
  __typename?: 'NftPoolTokenWithdrawalEventDataV2';
  /** The total value of token withdrawn in the pool's liquidity token. */
  amountT: Scalars['String']['output'];
  /** The ratio of the transaction token to the network's base token. */
  nbtRatio: Scalars['String']['output'];
  /** The amount of token in the contract after the block has processed in the pool's liquidity token. */
  tokenBalanceT: Scalars['String']['output'];
  /** The type of NFT pool event, `TOKEN_WITHDRAWAL`. */
  type: NftPoolEventType;
  /** The ratio of the transaction token to USD. */
  usdRatio: Scalars['String']['output'];
};

/** The pool type selected by the pool creator. */
export enum NftPoolType {
  Buy = 'BUY',
  BuyAndSell = 'BUY_AND_SELL',
  Sell = 'SELL'
}

/** docs: hide */
export type NftRankingsOutputItem = {
  __typename?: 'NftRankingsOutputItem';
  contract?: Maybe<NftContract>;
  model: NftCollectionsLeaderboardModel;
};

/** docs: hide */
export type NftScatterplotEvent = {
  __typename?: 'NftScatterplotEvent';
  np: Scalars['String']['output'];
  tid: Scalars['String']['output'];
  ts: Scalars['Int']['output'];
  up: Scalars['String']['output'];
};

/** docs: hide */
export type NftScatterplotEventsConnection = {
  __typename?: 'NftScatterplotEventsConnection';
  cursor?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<NftScatterplotEvent>>>;
  mean?: Maybe<Scalars['Float']['output']>;
};

/** Response returned by `searchNfts`. */
export type NftSearchResponse = {
  __typename?: 'NftSearchResponse';
  /** The number of additional results found. */
  hasMore: Scalars['Int']['output'];
  /** A list of NFT collections matching a given query string. */
  items?: Maybe<Array<Maybe<NftSearchResponseCollection>>>;
};

/** An NFT collection matching a given query string. */
export type NftSearchResponseCollection = {
  __typename?: 'NftSearchResponseCollection';
  /** The contract address of the NFT collection. */
  address: Scalars['String']['output'];
  /** The average sale price over the `window`. */
  average: Scalars['String']['output'];
  /** The highest sale price over the `window`. */
  ceiling: Scalars['String']['output'];
  /** The lowest sale price over the `window`. */
  floor: Scalars['String']['output'];
  /** The ID of the NFT collection (`address`:`networkId`). */
  id: Scalars['String']['output'];
  /** The image URL for the collection or one of the assets within the collection. */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** The name of the NFT collection. For example, `Bored Ape Yacht Club`. */
  name?: Maybe<Scalars['String']['output']>;
  /** The network ID the NFT collection is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The symbol of the NFT collection. For example, `BAYC`. */
  symbol?: Maybe<Scalars['String']['output']>;
  /** The trade count over the `window`. */
  tradeCount: Scalars['String']['output'];
  /** The change in trade count between the previous and current `window`. */
  tradeCountChange: Scalars['Float']['output'];
  /** The trade volume in USD over the `window`. */
  volume: Scalars['String']['output'];
  /** The change in volume between the previous and current `window`. */
  volumeChange: Scalars['Float']['output'];
  /** The time frame used for calculating stats. */
  window: Scalars['String']['output'];
};

/** The level of NFTs to search. */
export enum NftSearchable {
  Asset = 'Asset',
  Collection = 'Collection'
}

/** Number metrics for NFT stats. */
export type NftStatsNumberMetrics = {
  __typename?: 'NftStatsNumberMetrics';
  /** The percent change between the `current` and `previous`. */
  change?: Maybe<Scalars['Float']['output']>;
  /** The total value for the current window. */
  current?: Maybe<Scalars['Float']['output']>;
  /** The total value for the previous window. */
  previous?: Maybe<Scalars['Float']['output']>;
};

/** String metrics for NFT stats. */
export type NftStatsStringMetrics = {
  __typename?: 'NftStatsStringMetrics';
  /** The percent change between the `current` and `previous`. */
  change?: Maybe<Scalars['Float']['output']>;
  /** The total value for the current window. */
  current?: Maybe<Scalars['String']['output']>;
  /** The total value for the previous window. */
  previous?: Maybe<Scalars['String']['output']>;
};

/** NFT stats for a given time frame. */
export type NftStatsWindowFilter = {
  /** The currency stats in the network's base token, such as volume. */
  networkBaseToken?: InputMaybe<StatsCurrency>;
  /** The numerical stats, such as number of sales. */
  nonCurrency?: InputMaybe<StatsNonCurrency>;
  /** The currency stats in USD, such as volume. */
  usd?: InputMaybe<StatsCurrency>;
};

/** NFT stats over a time frame. */
export type NftStatsWindowWithChange = {
  __typename?: 'NftStatsWindowWithChange';
  /** The unix timestamp for the end of the window. */
  endTime?: Maybe<Scalars['Int']['output']>;
  /** The currency stats in the network's base token, such as volume. */
  networkBaseToken?: Maybe<NftCollectionCurrencyStats>;
  /** The numerical stats, such as number of sales. */
  nonCurrency?: Maybe<NftCollectionNonCurrencyStats>;
  /** The unix timestamp for the start of the window. */
  startTime?: Maybe<Scalars['Int']['output']>;
  /** The currency stats in USD, such as volume. */
  usd?: Maybe<NftCollectionCurrencyStats>;
};

/** docs: hide */
export enum NotableEventType {
  Burn = 'Burn',
  Mint = 'Mint',
  Swap = 'Swap'
}

/** docs: hide */
export type NotableHoldersConnection = {
  __typename?: 'NotableHoldersConnection';
  cursor?: Maybe<Scalars['String']['output']>;
  items: Array<Balance>;
};

/** docs: hide */
export type NotableHoldersInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  networkId: Scalars['Int']['input'];
  tokenAddress: Scalars['String']['input'];
};

/** docs: hide */
export type NotableWallet = {
  __typename?: 'NotableWallet';
  addType: NotableWalletAddType;
  addressType: Scalars['String']['output'];
  createdAt: Scalars['Int']['output'];
  label?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  walletAddress: Scalars['String']['output'];
};

/** docs: hide */
export enum NotableWalletAddType {
  Import = 'Import',
  Manual = 'Manual',
  Tracked = 'Tracked'
}

/** docs: hide */
export type NotableWalletEvent = {
  __typename?: 'NotableWalletEvent';
  notableEvent: Scalars['JSON']['output'];
  notableEventType: NotableEventType;
  sortKey: Scalars['String']['output'];
  swapDirection?: Maybe<NotableWalletEventSwapDirection>;
  tokenId?: Maybe<Scalars['String']['output']>;
  walletAddress: Scalars['String']['output'];
};

/** docs: hide */
export type NotableWalletEventSubscriptionInput = {
  tokenId?: InputMaybe<Scalars['String']['input']>;
  walletAddress?: InputMaybe<Scalars['String']['input']>;
};

/** docs: hide */
export enum NotableWalletEventSwapDirection {
  Buy = 'Buy',
  Sell = 'Sell'
}

/** docs: hide */
export type NotableWalletEventsConnection = {
  __typename?: 'NotableWalletEventsConnection';
  cursor?: Maybe<Scalars['String']['output']>;
  items: Array<NotableWalletEvent>;
};

/** docs: hide */
export type NotableWalletEventsInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  tokenId?: InputMaybe<Scalars['String']['input']>;
  walletAddress?: InputMaybe<Scalars['String']['input']>;
};

/** docs: hide */
export type NotableWalletsConnection = {
  __typename?: 'NotableWalletsConnection';
  cursor?: Maybe<Scalars['String']['output']>;
  items: Array<NotableWallet>;
};

/** docs: hide */
export type NotableWalletsInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
};

/** Input type of `NumberFilter`. */
export type NumberFilter = {
  /** Greater than. */
  gt?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than or equal to. */
  gte?: InputMaybe<Scalars['Float']['input']>;
  /** Less than. */
  lt?: InputMaybe<Scalars['Float']['input']>;
  /** Less than or equal to. */
  lte?: InputMaybe<Scalars['Float']['input']>;
};

/** Response returned by `onBarsUpdated`. */
export type OnBarsUpdatedResponse = {
  __typename?: 'OnBarsUpdatedResponse';
  /** Price data broken down by resolution. */
  aggregates: ResolutionBarData;
  /**
   * The sortKey for the bar (`blockNumber`#`transactionIndex`#`logIndex`, zero padded).
   * For example, `0000000016414564#00000224#00000413`.
   */
  eventSortKey: Scalars['String']['output'];
  /** The network ID the pair is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The contract address for the pair. */
  pairAddress: Scalars['String']['output'];
  /** The ID for the pair (`pairAddress`:`networkId`). */
  pairId: Scalars['String']['output'];
  /** The quote token within the pair. */
  quoteToken?: Maybe<QuoteToken>;
  /** The address of the token being quoted */
  quoteTokenAddress: Scalars['String']['output'];
  /** The type of statistics used. Can be `Filtered` or `Unfiltered`. */
  statsType: TokenPairStatisticsType;
  /** The unix timestamp for the new bar. */
  timestamp: Scalars['Int']['output'];
};

/** docs: hide */
export type OnLaunchpadTokenEventBatchInput = {
  networkId?: InputMaybe<Scalars['Int']['input']>;
  protocol?: InputMaybe<LaunchpadTokenProtocol>;
};

/** Input for `onLaunchpadTokenEvent`. */
export type OnLaunchpadTokenEventInput = {
  /** The contract address of the token. Required when `networkId` is provided. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** The type of event. */
  eventType?: InputMaybe<LaunchpadTokenEventType>;
  /** The network ID that the token is deployed on. Required when `address` is provided. */
  networkId?: InputMaybe<Scalars['Int']['input']>;
  /** The protocol of the token. */
  protocol?: InputMaybe<LaunchpadTokenProtocol>;
};

/** docs: hide */
export type OnNotableHolderUpdatedInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  networkId?: InputMaybe<Scalars['Int']['input']>;
  tokenAddress?: InputMaybe<Scalars['String']['input']>;
};

export type OnPricesUpdatedInput = {
  address: Scalars['String']['input'];
  networkId: Scalars['Int']['input'];
  sourcePairAddress?: InputMaybe<Scalars['String']['input']>;
};

/** Response returned by `onBarsUpdated`. */
export type OnTokenBarsUpdatedResponse = {
  __typename?: 'OnTokenBarsUpdatedResponse';
  /** Price data broken down by resolution. */
  aggregates: ResolutionBarData;
  /**
   * The sortKey for the bar (`blockNumber`#`transactionIndex`#`logIndex`, zero padded).
   * For example, `0000000016414564#00000224#00000413`.
   */
  eventSortKey: Scalars['String']['output'];
  /** The network ID the pair is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The contract address for the pair. */
  pairAddress: Scalars['String']['output'];
  /** The ID for the pair (`pairAddress`:`networkId`). */
  pairId: Scalars['String']['output'];
  /** The quote token within the pair. */
  quoteToken?: Maybe<QuoteToken>;
  /** The type of statistics used. Can be `Filtered` or `Unfiltered`. */
  statsType: TokenPairStatisticsType;
  /** The unix timestamp for the new bar. */
  timestamp: Scalars['Int']['output'];
  /** The address of the token being quoted */
  tokenAddress: Scalars['String']['output'];
  /** The address of the token being quoted */
  tokenId: Scalars['String']['output'];
};

export type OnTokenEventsCreatedInput = {
  networkId: Scalars['Int']['input'];
  tokenAddress?: InputMaybe<Scalars['String']['input']>;
};

/** Response returned by `onUnconfirmedBarsUpdated`. */
export type OnUnconfirmedBarsUpdated = {
  __typename?: 'OnUnconfirmedBarsUpdated';
  /** Price data broken down by resolution. */
  aggregates: UnconfirmedResolutionBarData;
  /**
   * The sortKey for the bar (`blockNumber`#`transactionIndex`#`logIndex`, zero padded).
   * For example, `0000000016414564#00000224#00000413`.
   */
  eventSortKey: Scalars['String']['output'];
  /** The network ID the pair is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The contract address for the pair. */
  pairAddress: Scalars['String']['output'];
  /** The ID for the pair (`pairAddress`:`networkId`). */
  pairId: Scalars['String']['output'];
  /** The quote token within the pair. */
  quoteToken?: Maybe<QuoteToken>;
  /** The address of the token being quoted */
  quoteTokenAddress: Scalars['String']['output'];
  /** The unix timestamp for the new bar. */
  timestamp: Scalars['Int']['output'];
};

/** Integer list condition. */
export type OneOfNumberCondition = {
  __typename?: 'OneOfNumberCondition';
  /** The list of integers. */
  oneOf: Array<Scalars['Int']['output']>;
};

/** Input for integer list condition. */
export type OneOfNumberConditionInput = {
  /** The list of integers. */
  oneOf: Array<Scalars['Int']['input']>;
};

/** docs: hide */
export type Order = {
  __typename?: 'Order';
  amountEth: Scalars['Float']['output'];
  amountToken: Scalars['Float']['output'];
  amountUsd: Scalars['Float']['output'];
  blockDelay?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['Int']['output'];
  creationContext: Scalars['String']['output'];
  deadline?: Maybe<Scalars['Int']['output']>;
  direction: Scalars['String']['output'];
  error?: Maybe<Scalars['String']['output']>;
  exactAmountToken: Scalars['String']['output'];
  exchangeAddress?: Maybe<Scalars['String']['output']>;
  executedPriceEth?: Maybe<Scalars['Float']['output']>;
  executedPriceUsd?: Maybe<Scalars['Float']['output']>;
  exitStrategyId?: Maybe<Scalars['Int']['output']>;
  gasPrice?: Maybe<GasPrice>;
  id: Scalars['Int']['output'];
  inputTokenAddress: Scalars['String']['output'];
  inputTokenAmount: Scalars['String']['output'];
  limitMaximumTokenLiquidityGuard?: Maybe<Scalars['String']['output']>;
  limitMaximumTokenMarketCapGuard?: Maybe<Scalars['String']['output']>;
  limitMaximumTokenPriceGuard?: Maybe<Scalars['String']['output']>;
  limitMinimumTokenLiquidityGuard?: Maybe<Scalars['String']['output']>;
  limitMinimumTokenMarketCapGuard?: Maybe<Scalars['String']['output']>;
  limitMinimumTokenPriceGuard?: Maybe<Scalars['String']['output']>;
  limitTriggerDirection?: Maybe<Scalars['String']['output']>;
  limitTriggerType?: Maybe<Scalars['String']['output']>;
  limitTriggerValue?: Maybe<Scalars['String']['output']>;
  networkId: Scalars['Int']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  orderType: Scalars['String']['output'];
  outputTokenAddress: Scalars['String']['output'];
  outputTokenMax?: Maybe<Scalars['String']['output']>;
  outputTokenMin: Scalars['String']['output'];
  pnl?: Maybe<Scalars['Float']['output']>;
  poolAddress?: Maybe<Scalars['String']['output']>;
  privateRpcCustomFee?: Maybe<Scalars['String']['output']>;
  referralFeeBps: Scalars['Float']['output'];
  referrerPayoutAddress?: Maybe<Scalars['String']['output']>;
  sendWithPrivateRpc?: Maybe<Scalars['Boolean']['output']>;
  simulate?: Maybe<Scalars['Boolean']['output']>;
  soldAmount?: Maybe<Scalars['String']['output']>;
  state: Scalars['String']['output'];
  token: ScarabToken;
  tradeFeeBps: Scalars['Float']['output'];
  transactions?: Maybe<Array<ScarabTransaction>>;
  triggerFunction?: Maybe<Scalars['String']['output']>;
  triggerOnLiquidity?: Maybe<Scalars['Boolean']['output']>;
  triggerOrderId?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
  wallets: Array<ScarabWallet>;
  webhookId?: Maybe<Scalars['String']['output']>;
};

/** docs: hide */
export enum OrderConfirmationStatus {
  Confirmed = 'CONFIRMED',
  Rejected = 'REJECTED'
}

/** docs: hide */
export type OrderConfirmedMessage = {
  __typename?: 'OrderConfirmedMessage';
  hash: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  networkId: Scalars['Int']['output'];
  status: OrderConfirmationStatus;
  userId: Scalars['Int']['output'];
};

/** docs: hide */
export type OrderConnection = {
  __typename?: 'OrderConnection';
  cursor?: Maybe<Scalars['String']['output']>;
  items: Array<Order>;
};

/** docs: hide */
export enum OrderDirection {
  Buy = 'BUY',
  Sell = 'SELL'
}

export enum OrderState {
  Completed = 'COMPLETED',
  Created = 'CREATED',
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  Pending = 'PENDING'
}

/** docs: hide */
export enum OrderTransactionStatus {
  Completed = 'COMPLETED',
  Created = 'CREATED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Submitted = 'SUBMITTED'
}

export enum OrderType {
  Limit = 'LIMIT',
  LimitStrategy = 'LIMIT_STRATEGY',
  Manual = 'MANUAL'
}

/** docs: hide */
export type OrderUpdate = {
  __typename?: 'OrderUpdate';
  altHash?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Int']['output'];
  error?: Maybe<Scalars['String']['output']>;
  hash: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  networkId: Scalars['Int']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
  walletId: Scalars['Int']['output'];
};

/** docs: hide */
export type OrdersFilter = {
  direction?: InputMaybe<OrderDirection>;
  networkId?: InputMaybe<Scalars['Int']['input']>;
  orderType?: InputMaybe<OrderType>;
  poolAddress?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<OrderState>;
  tokenAddress?: InputMaybe<Scalars['String']['input']>;
};

/** Metadata for a token pair. */
export type Pair = {
  __typename?: 'Pair';
  /** The contract address of the pair. */
  address: Scalars['String']['output'];
  /**
   * docs: hide
   * @deprecated Age isn't supported - use createdAt instead
   */
  age?: Maybe<Scalars['Int']['output']>;
  /** The unix timestamp for the creation of the pair. */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The address for the exchange factory contract. */
  exchangeHash: Scalars['String']['output'];
  /** The exchange fee for swaps. */
  fee?: Maybe<Scalars['Int']['output']>;
  /** The ID for the pair (`address:networkId`). */
  id: Scalars['String']['output'];
  /** The network ID the pair is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The pooled amounts of each token in the pair. */
  pooled?: Maybe<PooledTokenValues>;
  /** The amount of required tick separation. Only applicable for pairs on UniswapV3. */
  tickSpacing?: Maybe<Scalars['Int']['output']>;
  /** The contract address of `token0`. */
  token0: Scalars['String']['output'];
  /** Metadata for the first token in the pair. */
  token0Data?: Maybe<EnhancedToken>;
  /** The contract address of `token1`. */
  token1: Scalars['String']['output'];
  /** Metadata for the second token in the pair. */
  token1Data?: Maybe<EnhancedToken>;
};

/** Input type of `PairChartInput`. */
export type PairChartInput = {
  /** Settings that pertain to the chart. */
  chartSettings: PairChartSettings;
  /** Options that pertain to the image itself. */
  imageOptions?: InputMaybe<ChartImageOptions>;
};

/** Input options for the chart. */
export type PairChartSettings = {
  /** The unix timestamp for the start of the requested range. */
  from?: InputMaybe<Scalars['Int']['input']>;
  /** The network ID the pair is deployed on. */
  networkId: Scalars['Int']['input'];
  /** The contract address of the pair. */
  pairAddress: Scalars['String']['input'];
  /** The token of interest within the token's top pair. Can be `token0` or `token1`. */
  quoteToken?: InputMaybe<QuoteToken>;
  /** The time frame for each candle. Available options are `1`, `5`, `15`, `30`, `60`, `240`, `720`, `1D`, `7D`. */
  resolution?: InputMaybe<Scalars['String']['input']>;
  /** The color theme of the chart. */
  theme?: InputMaybe<ChartTheme>;
  /** The unix timestamp for the end of the requested range. */
  to?: InputMaybe<Scalars['Int']['input']>;
};

/** Response returned by `filterPairs`. */
export type PairFilterConnection = {
  __typename?: 'PairFilterConnection';
  /** The number of pairs returned. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Where in the list the server started when returning items. */
  offset?: Maybe<Scalars['Int']['output']>;
  /** The list of pairs matching the filter parameters. */
  results?: Maybe<Array<Maybe<PairFilterResult>>>;
};

/** Input type of `PairFilterMatchTokens`. */
export type PairFilterMatchTokens = {
  /** The contract address of `token0` to filter by. */
  token0?: InputMaybe<Scalars['String']['input']>;
  /** The contract address of `token1` to filter by. */
  token1?: InputMaybe<Scalars['String']['input']>;
};

/** A pair matching a set of filter parameters. */
export type PairFilterResult = {
  __typename?: 'PairFilterResult';
  /** The number of buys in the past hour. */
  buyCount1?: Maybe<Scalars['Int']['output']>;
  /** The number of buys in the past 4 hours. */
  buyCount4?: Maybe<Scalars['Int']['output']>;
  /** The number of buys in the past 12 hours. */
  buyCount12?: Maybe<Scalars['Int']['output']>;
  /** The number of buys in the past 24 hours. */
  buyCount24?: Maybe<Scalars['Int']['output']>;
  /** The unix timestamp for the creation of the pair. */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** Exchange metadata for the pair. */
  exchange?: Maybe<FilterExchange>;
  /** The highest price in USD in the past hour. */
  highPrice1?: Maybe<Scalars['String']['output']>;
  /** The highest price in USD in the past 4 hours. */
  highPrice4?: Maybe<Scalars['String']['output']>;
  /** The highest price in USD in the past 12 hours. */
  highPrice12?: Maybe<Scalars['String']['output']>;
  /** The highest price in USD in the past 24 hours. */
  highPrice24?: Maybe<Scalars['String']['output']>;
  /** The unix timestamp for the last transaction to happen on the pair. */
  lastTransaction?: Maybe<Scalars['Int']['output']>;
  /** Amount of liquidity in the pair. */
  liquidity?: Maybe<Scalars['String']['output']>;
  /** The token with higher liquidity in the pair. Can be `token0` or `token1`. */
  liquidityToken?: Maybe<Scalars['String']['output']>;
  /** The locked liquidity percentage. */
  lockedLiquidityPercentage: Scalars['Float']['output'];
  /** The lowest price in USD in the past hour. */
  lowPrice1?: Maybe<Scalars['String']['output']>;
  /** The lowest price in USD in the past 4 hours. */
  lowPrice4?: Maybe<Scalars['String']['output']>;
  /** The lowest price in USD in the past 12 hours. */
  lowPrice12?: Maybe<Scalars['String']['output']>;
  /** The lowest price in USD in the past 24 hours. */
  lowPrice24?: Maybe<Scalars['String']['output']>;
  /** The fully diluted market cap. */
  marketCap?: Maybe<Scalars['String']['output']>;
  /** Metadata for the pair. */
  pair?: Maybe<Pair>;
  /** The token price in USD. */
  price?: Maybe<Scalars['String']['output']>;
  /** The percent price change in the past hour. Decimal format. */
  priceChange1?: Maybe<Scalars['String']['output']>;
  /** The percent price change in the past 4 hours. Decimal format. */
  priceChange4?: Maybe<Scalars['String']['output']>;
  /** The percent price change in the past 12 hours. Decimal format. */
  priceChange12?: Maybe<Scalars['String']['output']>;
  /** The percent price change in the past 24 hours. Decimal format. */
  priceChange24?: Maybe<Scalars['String']['output']>;
  /** 10^n, where n is the number of decimal places the price has. Max 16. Used for TradingView settings. */
  priceScale?: Maybe<Scalars['String']['output']>;
  /** The token of interest. Can be `token0` or `token1`. */
  quoteToken?: Maybe<Scalars['String']['output']>;
  /** The number of sells in the past hour. */
  sellCount1?: Maybe<Scalars['Int']['output']>;
  /** The number of sells in the past 4 hours. */
  sellCount4?: Maybe<Scalars['Int']['output']>;
  /** The number of sells in the past 12 hours. */
  sellCount12?: Maybe<Scalars['Int']['output']>;
  /** The number of sells in the past 24 hours. */
  sellCount24?: Maybe<Scalars['Int']['output']>;
  /** The percentage of wallets that are less than 1d old that have traded in the last 24h */
  swapPct1dOldWallet?: Maybe<Scalars['String']['output']>;
  /** The percentage of wallets that are less than 7d old that have traded in the last 24h */
  swapPct7dOldWallet?: Maybe<Scalars['String']['output']>;
  /** Metadata for the first token in the pair. */
  token0?: Maybe<EnhancedToken>;
  /** Metadata for the second token in the pair. */
  token1?: Maybe<EnhancedToken>;
  /** The number of transactions in the past hour. */
  txnCount1?: Maybe<Scalars['Int']['output']>;
  /** The number of transactions in the past 4 hours. */
  txnCount4?: Maybe<Scalars['Int']['output']>;
  /** The number of transactions in the past 12 hours. */
  txnCount12?: Maybe<Scalars['Int']['output']>;
  /** The number of transactions in the past 24 hours. */
  txnCount24?: Maybe<Scalars['Int']['output']>;
  /** The unique number of buys in the past hour. */
  uniqueBuys1?: Maybe<Scalars['Int']['output']>;
  /** The unique number of buys in the past 4 hours. */
  uniqueBuys4?: Maybe<Scalars['Int']['output']>;
  /** The unique number of buys in the past 12 hours. */
  uniqueBuys12?: Maybe<Scalars['Int']['output']>;
  /** The unique number of buys in the past 24 hours. */
  uniqueBuys24?: Maybe<Scalars['Int']['output']>;
  /** The unique number of sells in the past hour. */
  uniqueSells1?: Maybe<Scalars['Int']['output']>;
  /** The unique number of sells in the past 4 hours. */
  uniqueSells4?: Maybe<Scalars['Int']['output']>;
  /** The unique number of sells in the past 12 hours. */
  uniqueSells12?: Maybe<Scalars['Int']['output']>;
  /** The unique number of sells in the past 24 hours. */
  uniqueSells24?: Maybe<Scalars['Int']['output']>;
  /** The unique number of transactions in the past hour. */
  uniqueTransactions1?: Maybe<Scalars['Int']['output']>;
  /** The unique number of transactions in the past 4 hours. */
  uniqueTransactions4?: Maybe<Scalars['Int']['output']>;
  /** The unique number of transactions in the past 12 hours. */
  uniqueTransactions12?: Maybe<Scalars['Int']['output']>;
  /** The unique number of transactions in the past 24 hours. */
  uniqueTransactions24?: Maybe<Scalars['Int']['output']>;
  /** The percent volume change in the past hour. Decimal format. */
  volumeChange1?: Maybe<Scalars['String']['output']>;
  /** The percent volume change in the past 4 hours. Decimal format. */
  volumeChange4?: Maybe<Scalars['String']['output']>;
  /** The percent volume change in the past 12 hours. Decimal format. */
  volumeChange12?: Maybe<Scalars['String']['output']>;
  /** The percent volume change in the past 24 hours. Decimal format. */
  volumeChange24?: Maybe<Scalars['String']['output']>;
  /** The trade volume in USD in the past hour. */
  volumeUSD1?: Maybe<Scalars['String']['output']>;
  /** The trade volume in USD in the past 4 hours. */
  volumeUSD4?: Maybe<Scalars['String']['output']>;
  /** The trade volume in USD in the past 12 hours. */
  volumeUSD12?: Maybe<Scalars['String']['output']>;
  /** The trade volume in USD in the past 24 hours. */
  volumeUSD24?: Maybe<Scalars['String']['output']>;
  /** The average age of the wallets that traded in the last 24h */
  walletAgeAvg?: Maybe<Scalars['String']['output']>;
  /** The standard deviation of age of the wallets that traded in the last 24h */
  walletAgeStd?: Maybe<Scalars['String']['output']>;
};

/** Input type of `PairFilters`. */
export type PairFilters = {
  /** The number of buys in the past hour. */
  buyCount1?: InputMaybe<NumberFilter>;
  /** The number of buys in the past 4 hours. */
  buyCount4?: InputMaybe<NumberFilter>;
  /** The number of buys in the past 12 hours. */
  buyCount12?: InputMaybe<NumberFilter>;
  /** The number of buys in the past 24 hours. */
  buyCount24?: InputMaybe<NumberFilter>;
  /** The unix timestamp for the creation of the pair. */
  createdAt?: InputMaybe<NumberFilter>;
  /** The list of exchange contract addresses to filter by. */
  exchangeAddress?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The highest price in USD in the past hour. */
  highPrice1?: InputMaybe<NumberFilter>;
  /** The highest price in USD in the past 4 hours. */
  highPrice4?: InputMaybe<NumberFilter>;
  /** The highest price in USD in the past 12 hours. */
  highPrice12?: InputMaybe<NumberFilter>;
  /** The highest price in USD in the past 24 hours. */
  highPrice24?: InputMaybe<NumberFilter>;
  /** Whether to filter for pairs on testnet networks. Use `true` for testnet pairs only, `false` for mainnet pairs only and `undefined` (default) for both. */
  isTestnet?: InputMaybe<Scalars['Boolean']['input']>;
  /** The unix timestamp for the last transaction to happen on the pair. */
  lastTransaction?: InputMaybe<NumberFilter>;
  /** The amount of liquidity in the pair. */
  liquidity?: InputMaybe<NumberFilter>;
  /** The percent amount of liquidity that is locked */
  lockedLiquidityPercentage?: InputMaybe<NumberFilter>;
  /** The lowest price in USD in the past hour. */
  lowPrice1?: InputMaybe<NumberFilter>;
  /** The lowest price in USD in the past 4 hours. */
  lowPrice4?: InputMaybe<NumberFilter>;
  /** The lowest price in USD in the past 12 hours. */
  lowPrice12?: InputMaybe<NumberFilter>;
  /** The lowest price in USD in the past 24 hours. */
  lowPrice24?: InputMaybe<NumberFilter>;
  /** The list of network IDs to filter by. */
  network?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Filter potential Scams */
  potentialScam?: InputMaybe<Scalars['Boolean']['input']>;
  /** The token price in USD. */
  price?: InputMaybe<NumberFilter>;
  /** The percent price change in the past hour. Decimal format. */
  priceChange1?: InputMaybe<NumberFilter>;
  /** The percent price change in the past 4 hours. Decimal format. */
  priceChange4?: InputMaybe<NumberFilter>;
  /** The percent price change in the past 12 hours. Decimal format. */
  priceChange12?: InputMaybe<NumberFilter>;
  /** The percent price change in the past 24 hours. Decimal format. */
  priceChange24?: InputMaybe<NumberFilter>;
  /** The number of sells in the past hour. */
  sellCount1?: InputMaybe<NumberFilter>;
  /** The number of sells in the past 4 hours. */
  sellCount4?: InputMaybe<NumberFilter>;
  /** The number of sells in the past 12 hours. */
  sellCount12?: InputMaybe<NumberFilter>;
  /** The number of sells in the past 24 hours. */
  sellCount24?: InputMaybe<NumberFilter>;
  /** The percentage of wallets that are less than 1d old that have traded in the last 24h */
  swapPct1dOldWallet?: InputMaybe<NumberFilter>;
  /** The percentage of wallets that are less than 7d old that have traded in the last 24h */
  swapPct7dOldWallet?: InputMaybe<NumberFilter>;
  /** The list of token contract addresses to filter by. */
  tokenAddress?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Whether to ignore pairs/tokens not relevant to trending */
  trendingIgnored?: InputMaybe<Scalars['Boolean']['input']>;
  /** The number of transactions in the past hour. */
  txnCount1?: InputMaybe<NumberFilter>;
  /** The number of transactions in the past 4 hours. */
  txnCount4?: InputMaybe<NumberFilter>;
  /** The number of transactions in the past 12 hours. */
  txnCount12?: InputMaybe<NumberFilter>;
  /** The number of transactions in the past 24 hours. */
  txnCount24?: InputMaybe<NumberFilter>;
  /** The unique number of buys in the past hour. */
  uniqueBuys1?: InputMaybe<NumberFilter>;
  /** The unique number of buys in the past 4 hours. */
  uniqueBuys4?: InputMaybe<NumberFilter>;
  /** The unique number of buys in the past 12 hours. */
  uniqueBuys12?: InputMaybe<NumberFilter>;
  /** The unique number of buys in the past 24 hours. */
  uniqueBuys24?: InputMaybe<NumberFilter>;
  /** The unique number of sells in the past hour. */
  uniqueSells1?: InputMaybe<NumberFilter>;
  /** The unique number of sells in the past 4 hours. */
  uniqueSells4?: InputMaybe<NumberFilter>;
  /** The unique number of sells in the past 12 hours. */
  uniqueSells12?: InputMaybe<NumberFilter>;
  /** The unique number of sells in the past 24 hours. */
  uniqueSells24?: InputMaybe<NumberFilter>;
  /** The unique number of transactions in the past hour. */
  uniqueTransactions1?: InputMaybe<NumberFilter>;
  /** The unique number of transactions in the past 4 hours. */
  uniqueTransactions4?: InputMaybe<NumberFilter>;
  /** The unique number of transactions in the past 12 hours. */
  uniqueTransactions12?: InputMaybe<NumberFilter>;
  /** The unique number of transactions in the past 24 hours. */
  uniqueTransactions24?: InputMaybe<NumberFilter>;
  /** The percent volume change in the past hour. Decimal format. */
  volumeChange1?: InputMaybe<NumberFilter>;
  /** The percent volume change in the past 4 hours. Decimal format. */
  volumeChange4?: InputMaybe<NumberFilter>;
  /** The percent volume change in the past 12 hours. Decimal format. */
  volumeChange12?: InputMaybe<NumberFilter>;
  /** The percent volume change in the past 24 hours. Decimal format. */
  volumeChange24?: InputMaybe<NumberFilter>;
  /** The trade volume in USD in the past hour. */
  volumeUSD1?: InputMaybe<NumberFilter>;
  /** The trade volume in USD in the past 4 hours. */
  volumeUSD4?: InputMaybe<NumberFilter>;
  /** The trade volume in USD in the past 12 hours. */
  volumeUSD12?: InputMaybe<NumberFilter>;
  /** The trade volume in USD in the past 24 hours. */
  volumeUSD24?: InputMaybe<NumberFilter>;
  /** The average age of the wallets that traded in the last 24h */
  walletAgeAvg?: InputMaybe<NumberFilter>;
  /** The standard deviation of age of the wallets that traded in the last 24h */
  walletAgeStd?: InputMaybe<NumberFilter>;
};

export type PairMetadata = {
  __typename?: 'PairMetadata';
  /** The unix timestamp for the creation of the pair. */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** Token metadata for the first token in the pair. */
  enhancedToken0?: Maybe<EnhancedToken>;
  /** Token metadata for the second token in the pair. */
  enhancedToken1?: Maybe<EnhancedToken>;
  /** The exchange contract ID. */
  exchangeId?: Maybe<Scalars['String']['output']>;
  /** The exchange fee for swaps. */
  fee?: Maybe<Scalars['Int']['output']>;
  /** The highest price in USD in the past hour. */
  highPrice1?: Maybe<Scalars['String']['output']>;
  /** The highest price in USD in the past week. */
  highPrice1w?: Maybe<Scalars['String']['output']>;
  /** The highest price in USD in the past 4 hours. */
  highPrice4?: Maybe<Scalars['String']['output']>;
  /** The highest price in USD in the past 5 minutes. */
  highPrice5m?: Maybe<Scalars['String']['output']>;
  /** The highest price in USD in the past 12 hours. */
  highPrice12?: Maybe<Scalars['String']['output']>;
  /** The highest price in USD in the past 24 hours. */
  highPrice24?: Maybe<Scalars['String']['output']>;
  /** The ID for the pair (`address:networkId`). */
  id: Scalars['String']['output'];
  /** The total liquidity in the pair. */
  liquidity: Scalars['String']['output'];
  /** The token with higher liquidity within the pair. Can be `token0` or `token1`. */
  liquidityToken?: Maybe<Scalars['String']['output']>;
  /** The lowest price in USD in the past hour. */
  lowPrice1?: Maybe<Scalars['String']['output']>;
  /** The lowest price in USD in the past week. */
  lowPrice1w?: Maybe<Scalars['String']['output']>;
  /** The lowest price in USD in the past 4 hours. */
  lowPrice4?: Maybe<Scalars['String']['output']>;
  /** The lowest price in USD in the past 5 minutes. */
  lowPrice5m?: Maybe<Scalars['String']['output']>;
  /** The lowest price in USD in the past 12 hours. */
  lowPrice12?: Maybe<Scalars['String']['output']>;
  /** The lowest price in USD in the past 24 hours. */
  lowPrice24?: Maybe<Scalars['String']['output']>;
  /** The network ID the pair is deployed on. */
  networkId?: Maybe<Scalars['Int']['output']>;
  /** The token with lower liquidity within the pair. Can be `token0` or `token1`. */
  nonLiquidityToken?: Maybe<Scalars['String']['output']>;
  /** The contract address of the pair. */
  pairAddress: Scalars['String']['output'];
  /** The quote token price in USD. */
  price: Scalars['String']['output'];
  /** The percent price change in the past hour. Decimal format. */
  priceChange1?: Maybe<Scalars['Float']['output']>;
  /** The percent price change in the past week. Decimal format. */
  priceChange1w?: Maybe<Scalars['Float']['output']>;
  /** The percent price change in the past 4 hours. Decimal format. */
  priceChange4?: Maybe<Scalars['Float']['output']>;
  /** The percent price change in the past 5 minutes. Decimal format. */
  priceChange5m?: Maybe<Scalars['Float']['output']>;
  /** The percent price change in the past 12 hours. Decimal format. */
  priceChange12?: Maybe<Scalars['Float']['output']>;
  /** The percent price change in the past 24 hours. Decimal format. */
  priceChange24?: Maybe<Scalars['Float']['output']>;
  /** The token of interest within the pair. Can be `token0` or `token1`. */
  quoteToken?: Maybe<QuoteToken>;
  /** The type of statistics returned. Can be `FILTERED` or `UNFILTERED` */
  statsType: TokenPairStatisticsType;
  /** The amount of required tick separation. Only applicable for pairs on UniswapV3. */
  tickSpacing?: Maybe<Scalars['Int']['output']>;
  /** Pair metadata for the first token in the pair. */
  token0: PairMetadataToken;
  /** Pair metadata for the second token in the pair. */
  token1: PairMetadataToken;
  /** The trade volume in USD in the past hour. */
  volume1?: Maybe<Scalars['String']['output']>;
  /** The trade trade volume in USD in the past week. */
  volume1w?: Maybe<Scalars['String']['output']>;
  /** The trade volume in USD in the past 4 hours. */
  volume4?: Maybe<Scalars['String']['output']>;
  /** The trade volume in USD in the past 5 minutes. */
  volume5m?: Maybe<Scalars['String']['output']>;
  /** The trade volume in USD in the past 12 hours. */
  volume12?: Maybe<Scalars['String']['output']>;
  /** The trade volume in USD in the past 24 hours. */
  volume24?: Maybe<Scalars['String']['output']>;
};

export type PairMetadataToken = {
  __typename?: 'PairMetadataToken';
  address: Scalars['String']['output'];
  decimals?: Maybe<Scalars['Int']['output']>;
  labels?: Maybe<Array<Maybe<ContractLabel>>>;
  name: Scalars['String']['output'];
  networkId: Scalars['Int']['output'];
  pooled: Scalars['String']['output'];
  price: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
};

/** Input type of `PairRanking`. */
export type PairRanking = {
  /** The attribute to rank pairs by. */
  attribute?: InputMaybe<PairRankingAttribute>;
  /** The direction to apply to the ranking attribute. */
  direction?: InputMaybe<RankingDirection>;
};

/** The attribute used to rank tokens. */
export enum PairRankingAttribute {
  BuyCount1 = 'buyCount1',
  BuyCount4 = 'buyCount4',
  BuyCount12 = 'buyCount12',
  BuyCount24 = 'buyCount24',
  CreatedAt = 'createdAt',
  HighPrice1 = 'highPrice1',
  HighPrice4 = 'highPrice4',
  HighPrice12 = 'highPrice12',
  HighPrice24 = 'highPrice24',
  LastTransaction = 'lastTransaction',
  Liquidity = 'liquidity',
  LockedLiquidityPercentage = 'lockedLiquidityPercentage',
  LowPrice1 = 'lowPrice1',
  LowPrice4 = 'lowPrice4',
  LowPrice12 = 'lowPrice12',
  LowPrice24 = 'lowPrice24',
  MarketCap = 'marketCap',
  Price = 'price',
  PriceChange1 = 'priceChange1',
  PriceChange4 = 'priceChange4',
  PriceChange12 = 'priceChange12',
  PriceChange24 = 'priceChange24',
  SellCount1 = 'sellCount1',
  SellCount4 = 'sellCount4',
  SellCount12 = 'sellCount12',
  SellCount24 = 'sellCount24',
  SwapPct1dOldWallet = 'swapPct1dOldWallet',
  SwapPct7dOldWallet = 'swapPct7dOldWallet',
  TrendingScore = 'trendingScore',
  TrendingScore1 = 'trendingScore1',
  TrendingScore4 = 'trendingScore4',
  TrendingScore5m = 'trendingScore5m',
  TrendingScore12 = 'trendingScore12',
  TrendingScore24 = 'trendingScore24',
  TxnCount1 = 'txnCount1',
  TxnCount4 = 'txnCount4',
  TxnCount12 = 'txnCount12',
  TxnCount24 = 'txnCount24',
  UniqueBuys1 = 'uniqueBuys1',
  UniqueBuys4 = 'uniqueBuys4',
  UniqueBuys12 = 'uniqueBuys12',
  UniqueBuys24 = 'uniqueBuys24',
  UniqueSells1 = 'uniqueSells1',
  UniqueSells4 = 'uniqueSells4',
  UniqueSells12 = 'uniqueSells12',
  UniqueSells24 = 'uniqueSells24',
  UniqueTransactions1 = 'uniqueTransactions1',
  UniqueTransactions4 = 'uniqueTransactions4',
  UniqueTransactions12 = 'uniqueTransactions12',
  UniqueTransactions24 = 'uniqueTransactions24',
  VolumeChange1 = 'volumeChange1',
  VolumeChange4 = 'volumeChange4',
  VolumeChange12 = 'volumeChange12',
  VolumeChange24 = 'volumeChange24',
  VolumeUsd1 = 'volumeUSD1',
  VolumeUsd4 = 'volumeUSD4',
  VolumeUsd12 = 'volumeUSD12',
  VolumeUsd24 = 'volumeUSD24',
  WalletAgeAvg = 'walletAgeAvg',
  WalletAgeStd = 'walletAgeStd'
}

/** docs: hide */
export type ParallelAsset = {
  __typename?: 'ParallelAsset';
  /** The contract address of the NFT collection. */
  address: Scalars['String']['output'];
  /** The attributes for the NFT asset. */
  attributes?: Maybe<Array<NftAssetAttribute>>;
  /** The description of the NFT asset. */
  description?: Maybe<Scalars['String']['output']>;
  /** The game data for the NFT asset. */
  gameData?: Maybe<ParallelAssetGameData>;
  /** The ID of the NFT asset (`address`:`tokenId`). */
  id: Scalars['String']['output'];
  /** The NFT asset media. */
  media?: Maybe<NftAssetMedia>;
  /** Metadata for the NFT asset. */
  metadata?: Maybe<ParallelAssetMetadata>;
  /** The name of the NFT asset. */
  name?: Maybe<Scalars['String']['output']>;
  /** The network ID the NFT collection is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The source image URI linked by smart contract metadata. */
  originalImage?: Maybe<Scalars['String']['output']>;
  /** The token ID of the NFT asset. */
  tokenId: Scalars['String']['output'];
  /** The URI provided by the smart contract. Typically JSON that contains metadata. */
  uri?: Maybe<Scalars['String']['output']>;
};

/** Response returned by `filterNftParallelAssets`. */
export type ParallelAssetFilterConnection = {
  __typename?: 'ParallelAssetFilterConnection';
  /** The number of Parallel assets returned. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Where in the list the server started when returning items. */
  offset?: Maybe<Scalars['Int']['output']>;
  /** The list of Parallel assets matching the filter parameters. */
  results?: Maybe<Array<Maybe<ParallelAssetFilterResult>>>;
};

/** A Parallel asset matching a set of filter parameters. */
export type ParallelAssetFilterResult = {
  __typename?: 'ParallelAssetFilterResult';
  /** The contract address of the NFT collection. */
  address: Scalars['String']['output'];
  /** The description of the NFT asset. */
  description?: Maybe<Scalars['String']['output']>;
  /** The game data for the NFT asset. */
  gameData?: Maybe<ParallelAssetGameData>;
  /** The ID of the NFT asset (`address`:`tokenId`). */
  id: Scalars['String']['output'];
  /** The last sale price in the network's base token. */
  lastPriceNetworkBaseToken?: Maybe<Scalars['String']['output']>;
  /** The last sale price in USD. */
  lastPriceUsd?: Maybe<Scalars['String']['output']>;
  /** The NFT asset media. */
  media?: Maybe<NftAssetMedia>;
  /** Metadata for the NFT asset. */
  metadata?: Maybe<ParallelAssetMetadata>;
  /** The name of the NFT asset. */
  name?: Maybe<Scalars['String']['output']>;
  /** The network ID the NFT collection is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The source image URI linked by smart contract metadata. */
  originalImage?: Maybe<Scalars['String']['output']>;
  /** The internal Parallel ID of the NFT asset. */
  parallelId: Scalars['Int']['output'];
  /** The unix timestamp for the last trade. */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The token ID of the NFT asset. */
  tokenId: Scalars['String']['output'];
  /** The URI provided by the smart contract. Typically JSON that contains metadata. */
  uri?: Maybe<Scalars['String']['output']>;
};

/** Input type of `ParallelAssetFilters`. */
export type ParallelAssetFilters = {
  /** The damage dealt when engaged in combat. */
  attack?: InputMaybe<NumberFilter>;
  /** The energy used to play in-game. */
  cost?: InputMaybe<NumberFilter>;
  /** The possible damage received before being destroyed. */
  health?: InputMaybe<NumberFilter>;
  /** The last sale price in the network's base token. */
  lastPriceNetworkBaseToken?: InputMaybe<NumberFilter>;
  /** The last sale price in USD. */
  lastPriceUsd?: InputMaybe<NumberFilter>;
  /** The total supply of this individual asset. */
  supply?: InputMaybe<NumberFilter>;
};

/** Game data for a Parallel asset. */
export type ParallelAssetGameData = {
  __typename?: 'ParallelAssetGameData';
  /** The damage dealt when engaged in combat. */
  attack?: Maybe<Scalars['String']['output']>;
  /** The card type. Can be `Effect`, `Relic`, `Unit`, `Upgrade` or `Paragon`. */
  cardType?: Maybe<Scalars['String']['output']>;
  /** The energy used to play in-game. */
  cost?: Maybe<Scalars['String']['output']>;
  /** The description of the card's in-game abilities. */
  functionText?: Maybe<Scalars['String']['output']>;
  /** The possible damage received before being destroyed. */
  health?: Maybe<Scalars['String']['output']>;
  /** The Parallel the asset belongs to. */
  parallel?: Maybe<Scalars['String']['output']>;
  /** The description of the card's passive ability. */
  passiveAbility?: Maybe<Scalars['String']['output']>;
  /** The rarity of the asset. Can be `Common`, `Uncommon`, `Rare`, `Legendary`, or `Prime`. */
  rarity?: Maybe<Scalars['String']['output']>;
  /** The card subtype. Can be `Pirate`, `Vehicle` or `Clone`. */
  subtype?: Maybe<Scalars['String']['output']>;
};

/** The Parallel asset card type. */
export enum ParallelAssetMatcherCardType {
  Effect = 'Effect',
  Paragon = 'Paragon',
  Relic = 'Relic',
  Unit = 'Unit',
  Upgrade = 'Upgrade'
}

/** The Parallel asset class. */
export enum ParallelAssetMatcherClass {
  ArtCard = 'ArtCard',
  Asset = 'Asset',
  CardBack = 'CardBack',
  Fe = 'FE',
  Masterpiece = 'Masterpiece',
  Pl = 'PL',
  Se = 'SE'
}

/** The Parallel stream of evolution. */
export enum ParallelAssetMatcherParallel {
  Augencore = 'Augencore',
  Earthen = 'Earthen',
  Kathari = 'Kathari',
  Marcolian = 'Marcolian',
  Shroud = 'Shroud',
  Universal = 'Universal',
  UnknownOrigins = 'UnknownOrigins'
}

/** The Parallel asset rarity. */
export enum ParallelAssetMatcherRarity {
  Common = 'Common',
  Legendary = 'Legendary',
  Prime = 'Prime',
  Rare = 'Rare',
  Uncommon = 'Uncommon'
}

/** The Parallel asset subtype. */
export enum ParallelAssetMatcherSubtype {
  Clone = 'Clone',
  Pirate = 'Pirate',
  Vehicle = 'Vehicle'
}

/** Input type of `ParallelAssetMatchers`. */
export type ParallelAssetMatchers = {
  /** The card type. Can be `Effect`, `Relic`, `Unit`, `Upgrade` or `Paragon`. */
  cardType?: InputMaybe<Array<InputMaybe<ParallelAssetMatcherCardType>>>;
  /** The card class. Can be `Art Card`, `Asset`, `Card Back`, `FE`, `Masterpiece`, `PL`, or `SE`. */
  class?: InputMaybe<Array<InputMaybe<ParallelAssetMatcherClass>>>;
  /** The expansion used for naming base and expansion sets. */
  expansion?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The Parallel the asset belongs to. */
  parallel?: InputMaybe<Array<InputMaybe<ParallelAssetMatcherParallel>>>;
  /** The paraset the asset belongs to. */
  paraset?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The list of rarities. Can be `Common`, `Uncommon`, `Rare`, `Legendary`, or `Prime`. */
  rarity?: InputMaybe<Array<InputMaybe<ParallelAssetMatcherRarity>>>;
  /** The card subtype. Can be `Pirate`, `Vehicle` or `Clone`. */
  subtype?: InputMaybe<Array<InputMaybe<ParallelAssetMatcherSubtype>>>;
  tokenId?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ParallelAssetMetadata = {
  __typename?: 'ParallelAssetMetadata';
  /** The artist name. */
  artist?: Maybe<Scalars['String']['output']>;
  /** The card class. Can be `Art Card`, `Asset`, `Card Back`, `FE`, `Masterpiece`, `PL`, or `SE`. */
  class?: Maybe<Scalars['String']['output']>;
  /** The expansion used for naming base and expansion sets. */
  expansion?: Maybe<Scalars['String']['output']>;
  /** The asset description, sourced off-chain. Usually equal to the asset's on-chain `description`. */
  flavourText?: Maybe<Scalars['String']['output']>;
  /** The ID used to match other cards with the same name but different class. */
  parallelId?: Maybe<Scalars['String']['output']>;
  /** The paraset the asset belongs to. */
  paraset?: Maybe<Scalars['String']['output']>;
  /** The total supply of this individual asset. */
  supply?: Maybe<Scalars['String']['output']>;
};

/** Input type of `ParallelAssetRanking`. */
export type ParallelAssetRanking = {
  /** The attribute to rank Parallel assets by. */
  attribute?: InputMaybe<ParallelAssetRankingAttribute>;
  /** The direction to apply to the ranking attribute. */
  direction?: InputMaybe<RankingDirection>;
};

/** Attribute used to rank Parallel assets. */
export enum ParallelAssetRankingAttribute {
  Attack = 'attack',
  Cost = 'cost',
  Health = 'health',
  LastPriceNetworkBaseToken = 'lastPriceNetworkBaseToken',
  LastPriceUsd = 'lastPriceUsd',
  Supply = 'supply'
}

/** docs: hide */
export type ParallelAssetsConnection = {
  __typename?: 'ParallelAssetsConnection';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** A list of Parallel assets. */
  items?: Maybe<Array<Maybe<ParallelAsset>>>;
};

/** Tracked changes made to a Parallel card. */
export type ParallelCardChange = {
  __typename?: 'ParallelCardChange';
  /** The Parallel card metadata before and after the card change. */
  diff: ParallelCardChangeDiff;
  /** The unix timestamp for the card change. */
  timestamp: Scalars['Int']['output'];
  /** The token ID of the Parallel asset. */
  tokenId: Scalars['String']['output'];
};

/** Parallel card metadata before and after a card change. */
export type ParallelCardChangeDiff = {
  __typename?: 'ParallelCardChangeDiff';
  /** Metadata for a Parallel card after the card change. */
  new: ParallelCardChangeFields;
  /** Metadata for a Parallel card before the card change. */
  old: ParallelCardChangeFields;
};

/** Metadata for a Parallel card. */
export type ParallelCardChangeFields = {
  __typename?: 'ParallelCardChangeFields';
  /** The artist name. */
  artist?: Maybe<Scalars['String']['output']>;
  /** The damage dealt when engaged in combat. */
  attack?: Maybe<Scalars['String']['output']>;
  /** The card type. Can be `Effect`, `Relic`, `Unit`, `Upgrade` or `Paragon`. */
  cardType?: Maybe<Scalars['String']['output']>;
  /** The card class. Can be `Art Card`, `Asset`, `Card Back`, `FE`, `Masterpiece`, `PL`, or `SE`. */
  class?: Maybe<Scalars['String']['output']>;
  /** The energy used to play in-game. */
  cost?: Maybe<Scalars['String']['output']>;
  /** The expansion used for naming base and expansion sets. */
  expansion?: Maybe<Scalars['String']['output']>;
  /** The asset description, sourced off-chain. Usually equal to the asset's on-chain `description`. */
  flavourText?: Maybe<Scalars['String']['output']>;
  /** The description of the card's in-game abilities. */
  functionText?: Maybe<Scalars['String']['output']>;
  /** The possible damage received before being destroyed. */
  health?: Maybe<Scalars['String']['output']>;
  /** The Parallel the asset belongs to. */
  parallel?: Maybe<Scalars['String']['output']>;
  /** The ID used to match other cards with the same name but different class. */
  parallelId?: Maybe<Scalars['String']['output']>;
  /** The paraset the asset belongs to. */
  paraset?: Maybe<Scalars['String']['output']>;
  /** The description of the card's passive ability. */
  passiveAbility?: Maybe<Scalars['String']['output']>;
  /** The rarity of the asset. Can be `Common`, `Uncommon`, `Rare`, `Legendary`, or `Prime`. */
  rarity?: Maybe<Scalars['String']['output']>;
  /** The card subtype. Can be `Pirate`, `Vehicle` or `Clone`. */
  subtype?: Maybe<Scalars['String']['output']>;
  /** The total supply of this individual asset. */
  supply?: Maybe<Scalars['String']['output']>;
};

/** Input type of `ParallelCardChangeQueryTimestamp. */
export type ParallelCardChangeQueryTimestampInput = {
  /** The unix timestamp for the start of the requested range. */
  from?: InputMaybe<Scalars['Int']['input']>;
  /** The unix timestamp for the end of the requested range. */
  to?: InputMaybe<Scalars['Int']['input']>;
};

/** Response returned by `getParallelCardChanges`. */
export type ParallelCardChangesConnection = {
  __typename?: 'ParallelCardChangesConnection';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** A list of tracked changes made to a Parallel card. */
  items?: Maybe<Array<Maybe<ParallelCardChange>>>;
};

/** docs: hide */
export type PayoutUserReferralRewardsResponse = {
  __typename?: 'PayoutUserReferralRewardsResponse';
  payoutEvents: Array<ReferralsEventModel>;
};

export enum Plan {
  Defined = 'DEFINED',
  Enterprise = 'ENTERPRISE',
  Free = 'FREE',
  Standard = 'STANDARD'
}

/** docs: hide */
export type PointEvent = {
  __typename?: 'PointEvent';
  amount: Scalars['Float']['output'];
  appliedBoosts?: Maybe<Array<DailyPointBoostRecord>>;
  dailyStreak?: Maybe<Scalars['Int']['output']>;
  eventIdentifier: Scalars['String']['output'];
  id: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  points: PointEventData;
  pointsSeason: PointsSeason;
  questId?: Maybe<Scalars['String']['output']>;
  sortKey: Scalars['String']['output'];
  source: Scalars['String']['output'];
  stats: PointEventStats;
  timestamp: Scalars['Int']['output'];
  type: Scalars['String']['output'];
  userDailyRanks?: Maybe<UserDailyRanks>;
  userId: Scalars['String']['output'];
};

/** docs: hide */
export type PointEventData = {
  __typename?: 'PointEventData';
  PNL_PERCENT?: Maybe<Scalars['Float']['output']>;
  PNL_USD?: Maybe<Scalars['Float']['output']>;
  VOLUME_USD?: Maybe<Scalars['Float']['output']>;
};

/** docs: hide */
export type PointEventStats = {
  __typename?: 'PointEventStats';
  NUM_ORDERS?: Maybe<Scalars['Int']['output']>;
  PNL_PERCENT?: Maybe<Scalars['Float']['output']>;
  PNL_USD?: Maybe<Scalars['Float']['output']>;
  VOLUME_USD?: Maybe<Scalars['Float']['output']>;
};

/** docs: hide */
export enum PointsEventSource {
  Daily = 'DAILY',
  Historic = 'HISTORIC',
  Quest = 'QUEST'
}

/** docs: hide */
export enum PointsLeaderboardType {
  All = 'ALL',
  Daily = 'DAILY',
  PnlPercent = 'PNL_PERCENT',
  PnlUsd = 'PNL_USD',
  Quest = 'QUEST',
  VolumeUsd = 'VOLUME_USD'
}

/** docs: hide */
export enum PointsSeason {
  BetaSeason_1 = 'BETA_SEASON_1',
  BetaSeason_2 = 'BETA_SEASON_2',
  BetaSeason_3 = 'BETA_SEASON_3',
  BetaSeason_4 = 'BETA_SEASON_4',
  BetaSeason_5 = 'BETA_SEASON_5',
  DefinedxpSeason_1 = 'DEFINEDXP_SEASON_1',
  Season_1 = 'SEASON_1'
}

/** Event data for a BalancerV2 Pool Balance Changed event. */
export type PoolBalanceChangedEventData = {
  __typename?: 'PoolBalanceChangedEventData';
  /** The amount of `token0` added or removed from the pair. */
  amount0?: Maybe<Scalars['String']['output']>;
  /** The amount of `token0` added or removed from the pair, adjusted by the number of decimals in the token. For example, if `amount0` is in WEI, `amount0Shifted` will be in ETH. */
  amount0Shifted?: Maybe<Scalars['String']['output']>;
  /** The amount of `token1` added or from the pair. */
  amount1?: Maybe<Scalars['String']['output']>;
  /** The amount of `token1` added or removed from the pair, adjusted by the number of decimals in the token. For example, USDC `amount1Shifted` will be by 6 decimals. */
  amount1Shifted?: Maybe<Scalars['String']['output']>;
  /** The amount of token0 now in the pool. */
  liquidity0?: Maybe<Scalars['String']['output']>;
  /** The amount of token1 now in the pool. */
  liquidity1?: Maybe<Scalars['String']['output']>;
  /** The amount of token0 captured by the protocol. */
  protocolFeeAmount0?: Maybe<Scalars['String']['output']>;
  /** The amount of token1 captured by the protocol. */
  protocolFeeAmount1?: Maybe<Scalars['String']['output']>;
  /** The address of account that added or removed liquidity. */
  sender?: Maybe<Scalars['String']['output']>;
  /** The address of `token0` in the pair. */
  token0?: Maybe<Scalars['String']['output']>;
  /** The address of `token1` in the pair. */
  token1?: Maybe<Scalars['String']['output']>;
  /** The type of token event, `Burn`. */
  type: EventType;
};

/** The type of NFT in the pool. */
export enum PoolNftType {
  Erc721Erc20 = 'ERC721ERC20',
  Erc721Eth = 'ERC721ETH',
  Erc1155Erc20 = 'ERC1155ERC20',
  Erc1155Eth = 'ERC1155ETH'
}

export type PooledTokenValues = {
  __typename?: 'PooledTokenValues';
  token0?: Maybe<Scalars['String']['output']>;
  token1?: Maybe<Scalars['String']['output']>;
};

/** docs: hide */
export type Portfolio = {
  __typename?: 'Portfolio';
  wallets: Array<PortfolioWallet>;
};

/** docs: hide */
export type PortfolioToken = {
  __typename?: 'PortfolioToken';
  address: Scalars['String']['output'];
  balance: Scalars['String']['output'];
  decimals: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  networkId: Scalars['Int']['output'];
  shiftedBalance: Scalars['Float']['output'];
  symbol?: Maybe<Scalars['String']['output']>;
};

/** docs: hide */
export type PortfolioWallet = {
  __typename?: 'PortfolioWallet';
  address: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  tokens: Array<PortfolioToken>;
};

/** docs: hide */
export type Position = {
  __typename?: 'Position';
  amountUnsold?: Maybe<Scalars['String']['output']>;
  /** @deprecated broken */
  chart: Array<Maybe<Price>>;
  end?: Maybe<Scalars['Int']['output']>;
  /** @deprecated use entryIds instead */
  entries: Array<Order>;
  entryIds: Array<Scalars['Int']['output']>;
  exitIds: Array<Scalars['Int']['output']>;
  /** @deprecated use exitIds instead */
  exits: Array<Order>;
  open: Scalars['Boolean']['output'];
  pnl: Scalars['Float']['output'];
  pnlPercent: Scalars['Float']['output'];
  price?: Maybe<Price>;
  realizedCostBasis?: Maybe<Scalars['Float']['output']>;
  start: Scalars['Int']['output'];
  token: EnhancedToken;
  totalTokensBought: Scalars['String']['output'];
  totalTokensSold: Scalars['String']['output'];
  totalVolumeNative: Scalars['Float']['output'];
  totalVolumeToken: Scalars['String']['output'];
  totalVolumeUsd: Scalars['Float']['output'];
  unrealizedCostBasis?: Maybe<Scalars['Float']['output']>;
  unrealizedCostBasisPerToken?: Maybe<Scalars['Float']['output']>;
  /** The last timestamp that an order in this position was updated */
  updatedAt: Scalars['Int']['output'];
};

/** docs: hide */
export enum PositionStatus {
  Closed = 'Closed',
  Open = 'Open'
}

/** docs: hide */
export type PositionsInput = {
  status?: InputMaybe<PositionStatus>;
  tokenId?: InputMaybe<Scalars['String']['input']>;
};

/** Real-time or historical prices for a token. */
export type Price = {
  __typename?: 'Price';
  /** The contract address of the token. */
  address: Scalars['String']['output'];
  /** Ratio of how confident we are in the price */
  confidence?: Maybe<Scalars['Float']['output']>;
  /** The network ID the token is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The pool that emitted the swap generating this price */
  poolAddress: Scalars['String']['output'];
  /** The token price in USD. */
  priceUsd: Scalars['Float']['output'];
  /** The unix timestamp for the price. */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** Webhook conditions for a price event. */
export type PriceEventWebhookCondition = {
  __typename?: 'PriceEventWebhookCondition';
  /** The network ID the webhook is listening on. */
  networkId: IntEqualsCondition;
  /** The pair contract address the webhook is listening for. */
  pairAddress?: Maybe<StringEqualsCondition>;
  /** The price condition that must be met in order for the webhook to send. */
  priceUsd: ComparisonOperator;
  /** The token contract address the webhook is listening for. */
  tokenAddress: StringEqualsCondition;
};

/** Input conditions for a price event webhook. */
export type PriceEventWebhookConditionInput = {
  /** The network ID to listen on. */
  networkId: IntEqualsConditionInput;
  /** The contract address of the pair to listen for. */
  pairAddress?: InputMaybe<StringEqualsConditionInput>;
  /** The price conditions to listen for. */
  priceUsd: ComparisonOperatorInput;
  /** The contract address of the token to listen for. */
  tokenAddress: StringEqualsConditionInput;
};

/** Response returned by `primeHolders`. */
export type PrimeHolders = {
  __typename?: 'PrimeHolders';
  /** The number of holders returned. */
  count: Scalars['Int']['output'];
  /** The cursor to use for pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** A list of holders of PRIME. Each request returns 50 results. */
  items: Array<Balance>;
};

/** An Echelon Prime Pool. */
export type PrimePool = {
  __typename?: 'PrimePool';
  /** Values calculated by Defined using on-chain data. */
  calcData?: Maybe<PrimePoolCalcData>;
  /** Values obtained directly from the chain. */
  chainData?: Maybe<PrimePoolChainData>;
  /** When the pool was created by Defined. */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The block number for when Defined discovered this pool. */
  discoveryBlockNumber?: Maybe<Scalars['Int']['output']>;
  /** The transaction hash of when Defined discovered this pool. */
  discoveryTransactionHash?: Maybe<Scalars['String']['output']>;
  /** The ID of the contract-level Prime Pool (poolContractAddress:networkId). For example, `0x89bb49d06610b4b18e355504551809be5177f3d0:1`. */
  id?: Maybe<Scalars['String']['output']>;
  /** The network ID the Prime Pool is deployed on. */
  networkId?: Maybe<Scalars['Int']['output']>;
  /** The contract address for the tokens cached ib the pool. */
  nftContractAddress?: Maybe<Scalars['String']['output']>;
  /** The contract address for the Prime Pool. */
  poolContractAddress?: Maybe<Scalars['String']['output']>;
  /** The ID of the pool within the contract. */
  poolId?: Maybe<Scalars['String']['output']>;
  /** The type of pool for this Prime Pool. */
  poolType?: Maybe<Scalars['String']['output']>;
  /** The Parallel tokenIds required to cache in the pool. */
  tokenIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The # of cached sets in the pool. */
  totalSupply?: Maybe<Scalars['String']['output']>;
};

/** A cached Prime pool asset. */
export type PrimePoolAsset = {
  __typename?: 'PrimePoolAsset';
  /** The number of cached Prime pool assets of this type by this owner. */
  amount: Scalars['String']['output'];
  /** The amount of ETH the user is not eligible for either from having already harvesting or from not caching in the past. */
  ethRewardDebt?: Maybe<Scalars['String']['output']>;
  /** The owner wallet address of the cached Prime pool asset. */
  from: Scalars['String']['output'];
  /** The owner wallet address of the cached Prime pool asset, and network ID (from:networkId). */
  fromHashKey: Scalars['String']['output'];
  /** The Prime pool ID and Prime pool contract address (poolId:poolContractAddress). */
  fromSortKey: Scalars['String']['output'];
  /** The Prime pool asset ID (poolContractAddress:poolId:networkId) */
  id: Scalars['String']['output'];
  /** The network ID of the cached Prime pool asset. */
  networkId: Scalars['Int']['output'];
  /** THe contract address of the Prime pool. */
  poolContractAddress: Scalars['String']['output'];
  /** The Prime pool ID. */
  poolId: Scalars['String']['output'];
  /** The amount of PRIME the user is not eligible for either from having already harvesting or from not caching in the past. */
  primeRewardDebt?: Maybe<Scalars['String']['output']>;
  /** The owner wallet address of the cached Prime pool asset. */
  sortKey: Scalars['String']['output'];
};

/** Response returned by `getPrimePoolAssets`. */
export type PrimePoolAssetConnection = {
  __typename?: 'PrimePoolAssetConnection';
  /** The cursor to use for pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The list of cached Prime pool assets returned by the query. */
  items?: Maybe<Array<Maybe<PrimePoolAsset>>>;
};

/** Event-specific data for a Prime pool Cache transaction. */
export type PrimePoolCacheData = {
  __typename?: 'PrimePoolCacheData';
  /** The amount of Prime pool asset(s) cached. */
  eventAmount: Scalars['String']['output'];
  /** The total supply of assets cached in this Prime pool, including the amount cached in this transaction. */
  totalSupply: Scalars['String']['output'];
  /** The Prime pool event type. */
  type: PrimePoolEventType;
  /** The owner wallet address of the cached Prime pool asset(s). */
  user: Scalars['String']['output'];
  /** The total number of Prime pool asset(s) cached in this pool by this owner. */
  userCachedAmount: Scalars['String']['output'];
  /** The amount of ETH the user is not eligible for either from having already harvesting or from not caching in the past. */
  userEthRewardDebt: Scalars['String']['output'];
  /** The amount of PRIME the user is not eligible for either from having already harvesting or from not caching in the past. */
  userPrimeRewardDebt: Scalars['String']['output'];
};

/** Event-specific data for a Prime pool CachingPaused transaction. */
export type PrimePoolCachingPausedData = {
  __typename?: 'PrimePoolCachingPausedData';
  /** The state of caching paused set on the pool. */
  cachingPaused: Scalars['Boolean']['output'];
  /** The Prime pool event type. */
  type: PrimePoolEventType;
};

export type PrimePoolCalcData = {
  __typename?: 'PrimePoolCalcData';
  /** The amount of accumulated ETH rewards in total for the pool. */
  poolAccumulatedEth?: Maybe<Scalars['String']['output']>;
  /** The amount of accumulated PRIME rewards in total for the pool. */
  poolAccumulatedPrime?: Maybe<Scalars['String']['output']>;
  /** The amount of ETH for the pool to pay out as caching rewards. */
  poolEthAmount?: Maybe<Scalars['String']['output']>;
  /** The amount of ETH paid out daily by the pool as caching rewards. */
  poolEthPerDay?: Maybe<Scalars['String']['output']>;
  /** The amount of ETH paid out per second by the pool as caching rewards. */
  poolEthPerSecond?: Maybe<Scalars['String']['output']>;
  /** The amount of PRIME for the pool to pay out as caching rewards. */
  poolPrimeAmount?: Maybe<Scalars['String']['output']>;
  /** The amount of PRIME paid out daily by the pool as caching rewards. */
  poolPrimePerDay?: Maybe<Scalars['String']['output']>;
  /** The amount of PRIME paid out per second by the pool as caching rewards. */
  poolPrimePerSecond?: Maybe<Scalars['String']['output']>;
  /** The amount of accumulated ETH rewards per share for the pool. */
  shareAccumulatedEth?: Maybe<Scalars['String']['output']>;
  /** The amount of accumulated PRIME rewards per share for the pool. */
  shareAccumulatedPrime?: Maybe<Scalars['String']['output']>;
  /** The amount of ETH paid out daily by the pool, per share of the pool's total cached supply. */
  shareEthPerDay?: Maybe<Scalars['String']['output']>;
  /** The amount of ETH paid out per second by the pool, per share of the pool's total cached supply. */
  shareEthPerSecond?: Maybe<Scalars['String']['output']>;
  /** The amount of PRIME paid out daily by the pool, per share of the pool's total cached supply. */
  sharePrimePerDay?: Maybe<Scalars['String']['output']>;
  /** The amount of PRIME paid out per second by the pool, per share of the pool's total cached supply. */
  sharePrimePerSecond?: Maybe<Scalars['String']['output']>;
};

/** Values obtained directly from the chain. */
export type PrimePoolChainData = {
  __typename?: 'PrimePoolChainData';
  /** Whether caching is paused for this pool. */
  cachingPaused?: Maybe<Scalars['Boolean']['output']>;
  /** The pool's allocation of the contract's per-second ETH rewards. */
  ethAllocPoint?: Maybe<Scalars['String']['output']>;
  /** How much ETH has been claimed for this pool. */
  ethClaimed?: Maybe<Scalars['String']['output']>;
  /** Caching ETH rewards period end timestamp. */
  ethEndTimestamp?: Maybe<Scalars['Int']['output']>;
  /** Last timestamp at which ETH rewards were assigned. */
  ethLastRewardTimestamp?: Maybe<Scalars['Int']['output']>;
  /** How much ETH reward has been accrued for this pool. */
  ethReward?: Maybe<Scalars['String']['output']>;
  /** Caching ETH rewards period start timestamp. */
  ethStartTimestamp?: Maybe<Scalars['Int']['output']>;
  /** Minimum number of timed cache seconds per ETH. */
  ethTimedCachePeriod?: Maybe<Scalars['String']['output']>;
  /** Total share points of the contract's per-second ETH rewards to the pool. */
  ethTotalAllocPoint?: Maybe<Scalars['String']['output']>;
  /** The pool's allocation of the contract's per second PRIME rewards. */
  primeAllocPoint?: Maybe<Scalars['String']['output']>;
  /** Caching rewards period end timestamp. */
  primeEndTimestamp?: Maybe<Scalars['Int']['output']>;
  /** Last timestamp at which PRIME rewards were assigned. */
  primeLastRewardTimestamp?: Maybe<Scalars['Int']['output']>;
  /** Caching rewards period start timestamp. */
  primeStartTimestamp?: Maybe<Scalars['String']['output']>;
  /** Total share points of the contract's per second PRIME rewards to the pool. */
  primeTotalAllocPoint?: Maybe<Scalars['String']['output']>;
};

/** Event-specific data for a Prime pool ClaimEth transaction. */
export type PrimePoolClaimEthData = {
  __typename?: 'PrimePoolClaimEthData';
  /** The currency type of the event. */
  currency: PrimePoolCurrency;
  /** The total amount of ETH claimed for a pool. */
  ethClaimed?: Maybe<Scalars['String']['output']>;
  /** The amount of ETH claimed. */
  eventAmount: Scalars['String']['output'];
  /** The Prime pool event type. */
  type: PrimePoolEventType;
  /** The wallet address claiming ETH rewards. */
  user: Scalars['String']['output'];
  /** The amount of ETH the user is not eligible for either from having already harvesting or from not caching in the past. */
  userEthRewardDebt: Scalars['String']['output'];
};

/** Event-specific data for a Prime pool ClaimPrime transaction. */
export type PrimePoolClaimPrimeData = {
  __typename?: 'PrimePoolClaimPrimeData';
  /** The currency type of the event. */
  currency: PrimePoolCurrency;
  /** The amount of PRIME claimed. */
  eventAmount: Scalars['String']['output'];
  /** The Prime pool event type. */
  type: PrimePoolEventType;
  /** The wallet address claiming PRIME rewards. */
  user: Scalars['String']['output'];
  /** The total amount of PRIME claimed for a pool. */
  userPrimeRewardDebt: Scalars['String']['output'];
};

/** Response returned by `getPrimePools`. */
export type PrimePoolConnection = {
  __typename?: 'PrimePoolConnection';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** A list of prime pools. */
  items?: Maybe<Array<Maybe<PrimePool>>>;
};

/** Currency types for Prime pool events. */
export enum PrimePoolCurrency {
  Eth = 'ETH',
  Prime = 'PRIME'
}

/** Event-specific data for a Prime pool EmergencyWithdraw transaction. */
export type PrimePoolEmergencyWithdrawData = {
  __typename?: 'PrimePoolEmergencyWithdrawData';
  /** The amount of Prime pool asset(s) emergency withdrawn. */
  eventAmount: Scalars['String']['output'];
  /** The total supply of assets cached in this Prime pool. */
  totalSupply: Scalars['String']['output'];
  /** The Prime pool event type. */
  type: PrimePoolEventType;
  /** The wallet address emergency withdrawing from the pool. */
  user: Scalars['String']['output'];
  /** The updated total number of Prime pool asset(s) cached in this pool by this owner. */
  userCachedAmount: Scalars['String']['output'];
  /** The amount of ETH the user is not eligible for either from having already harvesting or from not caching in the past. */
  userEthRewardDebt: Scalars['String']['output'];
  /** The amount of PRIME the user is not eligible for either from having already harvesting or from not caching in the past. */
  userPrimeRewardDebt: Scalars['String']['output'];
};

/** Event-specific data for a Prime pool EndTimestampUpdatedEth transaction. */
export type PrimePoolEndTimestampUpdatedEthData = {
  __typename?: 'PrimePoolEndTimestampUpdatedEthData';
  /** The currency type of the event. */
  currency: PrimePoolCurrency;
  /** The updated ETH reward end timestamp for the pool. */
  ethEndTimestamp: Scalars['Int']['output'];
  /** The updated reward per second for the pool. */
  ethPerSecond: Scalars['String']['output'];
  /** The updated ETH reward start timestamp for the pool. */
  ethStartTimestamp: Scalars['Int']['output'];
  /** The Prime pool event type. */
  type: PrimePoolEventType;
};

/** Event-specific data for a Prime pool EndTimestampUpdatedPrime transaction. */
export type PrimePoolEndTimestampUpdatedPrimeData = {
  __typename?: 'PrimePoolEndTimestampUpdatedPrimeData';
  /** The currency type of the event. */
  currency: PrimePoolCurrency;
  /** The updated PRIME reward end timestamp for the pool. */
  primeEndTimestamp: Scalars['Int']['output'];
  /** The updated reward per second for the pool. */
  primePerSecond: Scalars['String']['output'];
  /** The updated PRIME reward start timestamp for the pool. */
  primeStartTimestamp: Scalars['Int']['output'];
  /** The Prime pool event type. */
  type: PrimePoolEventType;
};

/** Event-specific data for a Prime pool LogUpdatePool transaction. */
export type PrimePoolEthRewardsAddedData = {
  __typename?: 'PrimePoolEthRewardsAddedData';
  /** The amount of ETH rewards added to the pool. */
  amount: Scalars['String']['output'];
  /** The total ETH rewards for the pool. */
  totalRewards: Scalars['String']['output'];
  /** The Prime pool event type. */
  type: PrimePoolEventType;
};

/** Event-specific data for a Prime pool EthRewardsSet transaction. */
export type PrimePoolEthRewardsSetData = {
  __typename?: 'PrimePoolEthRewardsSetData';
  /** The amount of ETH rewards set for the pool. */
  amount: Scalars['String']['output'];
  /** The total ETH rewards for the pool. */
  totalRewards: Scalars['String']['output'];
  /** The Prime pool event type. */
  type: PrimePoolEventType;
};

/** A Prime pool event. */
export type PrimePoolEvent = {
  __typename?: 'PrimePoolEvent';
  /** The blockHash of the Prime pool event. */
  blockHash: Scalars['String']['output'];
  /** The blockNumber of the Prime pool event. */
  blockNumber: Scalars['Int']['output'];
  /** The event data for the Prime pool event. */
  data: PrimePoolEventData;
  /** The Prime pool event type. */
  eventType: PrimePoolEventType;
  /** The Prime pool event's calling address. */
  from: Scalars['String']['output'];
  /** The Prime pool event's calling address, and network ID (from:networkId). */
  fromHashKey: Scalars['String']['output'];
  /** The Prime pool event ID (poolContractAddress:poolId:networkId) */
  id: Scalars['String']['output'];
  /** The logIndex of the Prime pool event. */
  logIndex: Scalars['Int']['output'];
  /** The network ID of the Prime pool event. */
  networkId: Scalars['Int']['output'];
  /** The Prime pool contract address. */
  poolContractAddress: Scalars['String']['output'];
  /** The Prime pool ID. */
  poolId: Scalars['String']['output'];
  /** The Prime pool type. */
  poolType: PrimePoolType;
  /** The sort key of the Prime pool event (blockNumber:transactionIndex:logIndex). */
  sortKey: Scalars['String']['output'];
  /** The timestamp of the Prime pool event. */
  timestamp: Scalars['Int']['output'];
  /** The transactionHash of the Prime pool event. */
  transactionHash: Scalars['String']['output'];
  /** The transactionIndex of the Prime pool event. */
  transactionIndex: Scalars['Int']['output'];
};

/** Response returned by `getPrimePoolEvents`. */
export type PrimePoolEventConnection = {
  __typename?: 'PrimePoolEventConnection';
  /** The cursor to use for pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The list of Prime pool events returned by the query. */
  items?: Maybe<Array<Maybe<PrimePoolEvent>>>;
};

/** Event-specific data for a Prime pool transaction. */
export type PrimePoolEventData = PrimePoolCacheData | PrimePoolCachingPausedData | PrimePoolClaimEthData | PrimePoolClaimPrimeData | PrimePoolEmergencyWithdrawData | PrimePoolEndTimestampUpdatedEthData | PrimePoolEndTimestampUpdatedPrimeData | PrimePoolEthRewardsAddedData | PrimePoolEthRewardsSetData | PrimePoolLogPoolAdditionData | PrimePoolLogPoolSetAllocPointData | PrimePoolLogSetPerSecondData | PrimePoolLogUpdatePoolData | PrimePoolRewardDecreaseData | PrimePoolRewardIncreaseData | PrimePoolTimeCachePeriodUpdateData | PrimePoolWithdrawData;

/** A Prime pool event type. */
export enum PrimePoolEventType {
  Cache = 'CACHE',
  CachingPaused = 'CACHING_PAUSED',
  Claim = 'CLAIM',
  EmergencyWithdraw = 'EMERGENCY_WITHDRAW',
  EndTimestampUpdated = 'END_TIMESTAMP_UPDATED',
  EthRewardsAdded = 'ETH_REWARDS_ADDED',
  EthRewardsSet = 'ETH_REWARDS_SET',
  LogPoolAddition = 'LOG_POOL_ADDITION',
  LogPoolSetAllocPoint = 'LOG_POOL_SET_ALLOC_POINT',
  LogSetPerSecond = 'LOG_SET_PER_SECOND',
  LogUpdatePool = 'LOG_UPDATE_POOL',
  PoolDiscovered = 'POOL_DISCOVERED',
  RewardDecrease = 'REWARD_DECREASE',
  RewardIncrease = 'REWARD_INCREASE',
  TimeCachePeriodUpdated = 'TIME_CACHE_PERIOD_UPDATED',
  Withdraw = 'WITHDRAW'
}

/** Input Type of `PrimePoolQuery` */
export type PrimePoolInput = {
  /** The address of the pool contract. */
  address: Scalars['String']['input'];
  /** The network that the pool is deployed on. */
  networkId: Scalars['Int']['input'];
  /** Optional list of pool ids to fetch. */
  poolIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Event-specific data for a Prime pool LogPoolAddition (new Prime pool) transaction. */
export type PrimePoolLogPoolAdditionData = {
  __typename?: 'PrimePoolLogPoolAdditionData';
  /** The token ID's added to the new Prime pool. */
  tokenIds: Array<Scalars['String']['output']>;
  /** The Prime pool event type. */
  type: PrimePoolEventType;
};

/** Event-specific data for a Prime pool LogPoolSetAllocPoint transaction. */
export type PrimePoolLogPoolSetAllocPointData = {
  __typename?: 'PrimePoolLogPoolSetAllocPointData';
  /** The updated alloc point for the pool (the pool's share of the contract's total rewards). */
  allocPoint: Scalars['String']['output'];
  /** The currency type of the event. */
  currency: PrimePoolCurrency;
  /** The updated total alloc point for the pool (the sum of all pools' alloc points). */
  totalAllocPoint: Scalars['String']['output'];
  /** The Prime pool event type. */
  type: PrimePoolEventType;
};

/** Event-specific data for a Prime pool LogSetPerSecond transaction. */
export type PrimePoolLogSetPerSecondData = {
  __typename?: 'PrimePoolLogSetPerSecondData';
  /** The updated reward per second for the pool. */
  amount: Scalars['String']['output'];
  /** The currency type of the event. */
  currency: PrimePoolCurrency;
  /** The updated reward end timestamp for the pool. */
  endTimestamp: Scalars['Int']['output'];
  /** The updated ETH reward per second for the pool. */
  ethAmountPerSecond?: Maybe<Scalars['String']['output']>;
  /** The updated PRIME reward per second for the pool. */
  primeAmountPerSecond?: Maybe<Scalars['String']['output']>;
  /** The updated reward start timestamp for the pool. */
  startTimestamp: Scalars['Int']['output'];
  /** The Prime pool event type. */
  type: PrimePoolEventType;
};

/** Event-specific data for a Prime pool LogUpdatePool transaction. */
export type PrimePoolLogUpdatePoolData = {
  __typename?: 'PrimePoolLogUpdatePoolData';
  /** The amount of accumulated rewards per share. */
  accPerShare: Scalars['String']['output'];
  /** The currency type of the event. */
  currency: PrimePoolCurrency;
  /** The ETH amount of the pool. */
  ethAmount?: Maybe<Scalars['String']['output']>;
  /** The timestamp at which rewards were last assigned. */
  lastRewardTimestamp: Scalars['Int']['output'];
  /** The PRIME amount of the pool. */
  primeAmount?: Maybe<Scalars['String']['output']>;
  /** The total amount of assets cached in the pool (emitted by the event, before the transaction). */
  supply: Scalars['String']['output'];
  /** The total amount of assets cached in the pool (queried from the pool after the transaction). */
  totalSupply: Scalars['String']['output'];
  /** The Prime pool event type. */
  type: PrimePoolEventType;
};

/** Event-specific data for a Prime pool RewardDecrease transaction. */
export type PrimePoolRewardDecreaseData = {
  __typename?: 'PrimePoolRewardDecreaseData';
  /** The currency type of the event. */
  currency: PrimePoolCurrency;
  /** The amount of rewards decreased. */
  eventAmount: Scalars['String']['output'];
  /** The Prime pool event type. */
  type: PrimePoolEventType;
  /** The updated total rewards for the pool. */
  updatedAmount: Scalars['String']['output'];
};

/** Event-specific data for a Prime pool RewardIncrease transaction. */
export type PrimePoolRewardIncreaseData = {
  __typename?: 'PrimePoolRewardIncreaseData';
  /** The currency type of the event. */
  currency: PrimePoolCurrency;
  /** The amount of rewards increased. */
  eventAmount: Scalars['String']['output'];
  /** The Prime pool event type. */
  type: PrimePoolEventType;
  /** The updated total rewards for the pool. */
  updatedAmount: Scalars['String']['output'];
};

/** Event-specific data for a Prime pool TimeCachePeriodUpdate transaction. */
export type PrimePoolTimeCachePeriodUpdateData = {
  __typename?: 'PrimePoolTimeCachePeriodUpdateData';
  /** The currency type of the event. */
  currency: PrimePoolCurrency;
  /** The minimum number of timed cache seconds per ETH reward. */
  timedCachePeriod: Scalars['String']['output'];
  /** The Prime pool event type. */
  type: PrimePoolEventType;
};

/** The type of Prime pool caching contract. */
export enum PrimePoolType {
  EthAndPrimeRewards = 'ETH_AND_PRIME_REWARDS',
  PrimeRewards = 'PRIME_REWARDS',
  TimedCacheEthAndPrimeRewards = 'TIMED_CACHE_ETH_AND_PRIME_REWARDS'
}

/** Event-specific data for a Prime pool Withdraw transaction. */
export type PrimePoolWithdrawData = {
  __typename?: 'PrimePoolWithdrawData';
  /** The amount of assets withdrawn. */
  eventAmount: Scalars['String']['output'];
  /** The updated total assets for the pool after the withdrawal. */
  totalSupply: Scalars['String']['output'];
  /** The Prime pool event type. */
  type: PrimePoolEventType;
  /** The address of the wallet who withdrew. */
  user: Scalars['String']['output'];
  /** The amount of cached asset the user has in the pool, following the withdrawal. */
  userCachedAmount: Scalars['String']['output'];
  /** The amount of ETH the user is not eligible for either from having already harvesting or from not caching in the past. */
  userEthRewardDebt: Scalars['String']['output'];
  /** The amount of PRIME the user is not eligible for either from having already harvesting or from not caching in the past. */
  userPrimeRewardDebt: Scalars['String']['output'];
};

/** docs: hide */
export type PrivateKeyInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  signedRequest: SignedRequest;
};

/** docs: hide */
export type Proposal = {
  __typename?: 'Proposal';
  address: Scalars['String']['output'];
  contractType: ContractType;
  currentContract?: Maybe<EnhancedContract>;
  currentData?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['String']['output'];
  moderatedAt?: Maybe<Scalars['Int']['output']>;
  moderatedBy?: Maybe<Scalars['String']['output']>;
  networkId: Scalars['Int']['output'];
  previousData?: Maybe<Scalars['JSON']['output']>;
  proposalData: Scalars['JSON']['output'];
  proposalNum: Scalars['Int']['output'];
  proposalType: ContractProposalType;
  proposedAt: Scalars['Int']['output'];
  proposedBy: Scalars['String']['output'];
  sortKey: Scalars['String']['output'];
  status: ContractProposalStatus;
};

/** docs: hide */
export type ProposalFilter = {
  address?: InputMaybe<Scalars['String']['input']>;
  contractType?: InputMaybe<ContractType>;
  moderatedBy?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated Not useful */
  networkId?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposalType?: InputMaybe<ContractProposalType>;
  proposedBy?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ContractProposalStatus>;
};

/** docs: hide */
export type ProposalQueryInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProposalFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

/** docs: hide */
export type ProposalsConnection = {
  __typename?: 'ProposalsConnection';
  cursor?: Maybe<Scalars['String']['output']>;
  items: Array<Proposal>;
};

export enum PublishingType {
  Batch = 'BATCH',
  Single = 'SINGLE'
}

export type Query = {
  __typename?: 'Query';
  /** Get the active short-lived api token for this api key by the short-lived token */
  apiToken: ApiToken;
  /** Get all active short-lived api tokens for this api key */
  apiTokens: Array<ApiToken>;
  /** docs: hide */
  backfillHoldersStatus?: Maybe<BackfillHoldersResponse>;
  /** docs: hide */
  backfillWalletState: Scalars['Boolean']['output'];
  /** Returns list of token balances that a wallet has */
  balances: BalancesResponse;
  /** docs: hide */
  betaUsers?: Maybe<BetaUsersResponse>;
  /** Returns a URL for a pair chart. */
  chartUrls?: Maybe<ChartUrlsResponse>;
  /** docs: hide */
  decoding?: Maybe<Decoding>;
  /** docs: hide */
  decodingStatus?: Maybe<DecodingStatus>;
  /** docs: hide */
  decodings: Array<Decoding>;
  /** docs: hide */
  detailedWalletStats?: Maybe<DetailedWalletStats>;
  /** docs: hide */
  ethBalances: EthBalancesResponse;
  /** Returns a list of exchanges based on a variety of filters. */
  filterExchanges?: Maybe<ExchangeFilterConnection>;
  /** docs: hide */
  filterNetworkWallets: NetworkWalletFilterConnection;
  /** Returns a list of NFT collection based on a variety of filters. */
  filterNftCollections?: Maybe<NftCollectionFilterConnection>;
  /** Returns a list of Parallel assets based on a variety of filters. */
  filterNftParallelAssets?: Maybe<ParallelAssetFilterConnection>;
  /** Returns a list of NFT collections based on a variety of filters. */
  filterNftPoolCollections?: Maybe<NftPoolCollectionFilterConnection>;
  /** Returns a list of NFT pools based on a variety of filters. */
  filterNftPools?: Maybe<NftPoolFilterConnection>;
  /** Returns a list of pairs based on a variety of filters. */
  filterPairs?: Maybe<PairFilterConnection>;
  /** docs: hide */
  filterTokenWallets: TokenWalletFilterConnection;
  /** Returns a list of tokens based on a variety of filters. */
  filterTokens?: Maybe<TokenFilterConnection>;
  /** docs: hide */
  filterWallets: WalletFilterConnection;
  /** Returns bar chart data to track price changes over time. */
  getBars?: Maybe<BarsResponse>;
  /** docs: hide */
  getBridgeQuote: BridgeQuote;
  /** docs: hide */
  getBridgeRequestStatus: BridgeRequestStatus;
  /** docs: hide */
  getBridgeSupportedNetworks?: Maybe<Array<Scalars['Int']['output']>>;
  /** docs: hide */
  getChartDrawings?: Maybe<ChartDrawingsRecord>;
  /** docs: hide */
  getChartLayout?: Maybe<ChartLayout>;
  /** Returns community gathered notes. */
  getCommunityNotes: CommunityNotesResponse;
  /** docs: hide */
  getCurrentUser?: Maybe<DefinedUser>;
  /** docs: hide */
  getCustomNotification?: Maybe<CustomNotification>;
  /** Returns bucketed stats for a given NFT collection. */
  getDetailedNftStats?: Maybe<DetailedNftStats>;
  /** Returns bucketed stats for a given token within a pair. */
  getDetailedPairStats?: Maybe<DetailedPairStats>;
  /** Returns bucketed stats for a given token within a list of pairs. */
  getDetailedPairsStats?: Maybe<Array<Maybe<DetailedPairStats>>>;
  /**
   * Returns bucketed stats for a given token within a pair.
   * @deprecated Use `getDetailedPairStats` instead, it has more resolutions and better support
   */
  getDetailedStats?: Maybe<DetailedStats>;
  /** Returns a list of event labels for a pair. */
  getEventLabels?: Maybe<EventLabelConnection>;
  /** Returns a list of decentralized exchange metadata. */
  getExchanges: Array<Exchange>;
  /** docs: hide */
  getFeatures: Array<Feature>;
  /**
   * Returns new tokens listed over the last three days.
   * @deprecated This query is longer supported. Instead use filterPairs with sort order on createdAt DESC
   */
  getLatestPairs?: Maybe<LatestPairConnection>;
  /** @deprecated This query is no longer supported. Use `filterTokens` with a createdAt: DESC filter instead. */
  getLatestTokens?: Maybe<LatestTokenConnection>;
  /** docs: hide */
  getNetworkConfigs: Array<NetworkConfig>;
  /** Returns metadata for a given network supported on Codex. */
  getNetworkStats?: Maybe<GetNetworkStatsResponse>;
  /** Returns the status of a list of networks supported on Codex. */
  getNetworkStatus?: Maybe<Array<MetadataResponse>>;
  /** Returns a list of all networks supported on Codex. */
  getNetworks: Array<Network>;
  /** Returns a list of NFT assets in a given collection. */
  getNftAssets?: Maybe<NftAssetsConnection>;
  /** Returns stats for an NFT collection across different time frames. */
  getNftCollectionMetadata?: Maybe<NftCollectionMetadataResponse>;
  /** Returns a list of NFT collection metadata. */
  getNftContracts?: Maybe<Array<Maybe<EnhancedNftContract>>>;
  /** Returns transactions for an NFT collection across any marketplace(s). */
  getNftEvents?: Maybe<NftEventsConnection>;
  /** Returns an NFT pool. */
  getNftPool?: Maybe<NftPoolResponse>;
  /** Returns an NFT pool collection with pool stats for a given AMM NFT marketplace. */
  getNftPoolCollection?: Maybe<NftPoolCollectionResponse>;
  /** Returns an NFT collection with pool stats for a given AMM NFT marketplace. */
  getNftPoolCollectionsByExchange?: Maybe<GetNftPoolCollectionsResponse>;
  /** Returns transactions for an NFT collection across all NFT pools or within a given pool. */
  getNftPoolEvents?: Maybe<NftPoolEventsResponse>;
  /** Returns aggregated NFT pool/collection stats for a given time frame. */
  getNftPoolStats?: Maybe<NftPoolStatsResponse>;
  /** Returns NFT pools for a given collection and AMM NFT marketplace. */
  getNftPoolsByCollectionAndExchange?: Maybe<GetNftPoolsResponse>;
  /** Returns a list of NFT pools for a given owner. */
  getNftPoolsByOwner?: Maybe<GetNftPoolsResponse>;
  /** docs: hide */
  getNftRankings?: Maybe<GetNftRankingsOutput>;
  /** docs: hide */
  getNftScatterplotEvents?: Maybe<NftScatterplotEventsConnection>;
  /** docs: hide */
  getOrderedNetworks: Array<Scalars['Int']['output']>;
  /** docs: hide */
  getParallelAssets?: Maybe<ParallelAssetsConnection>;
  /** Returns changes made to Parallel card metadata over time. */
  getParallelCardChanges?: Maybe<ParallelCardChangesConnection>;
  /** docs: hide */
  getPointsLeaderboard: GetPointsLeaderboardResponse;
  /**
   * docs: hide
   * @deprecated use positions instead
   */
  getPositions: Array<Position>;
  /** Returns a list of Prime pool cached assets. */
  getPrimePoolAssets?: Maybe<PrimePoolAssetConnection>;
  /** Returns a list of Prime pool events. */
  getPrimePoolEvents?: Maybe<PrimePoolEventConnection>;
  /** Returns a list of Prime pools. */
  getPrimePools?: Maybe<PrimePoolConnection>;
  /** docs: hide */
  getProposals?: Maybe<ProposalsConnection>;
  /** docs: hide */
  getReleaseVersion?: Maybe<ReleaseVersion>;
  getSimulateTokenContractResults: GetSimulateTokenContractResultsConnection;
  /** docs: hide */
  getSolanaLatestBlock: SolanaLatestBlockResponse;
  /** docs: hide */
  getSolanaRawTransaction: RawTransactionResponse;
  /** docs: hide */
  getSolanaTransactionConfirmation?: Maybe<SolanaTransactionConfirmationResponse>;
  /** Returns charting metadata for a given pair. Used for implementing a Trading View datafeed. */
  getSymbol?: Maybe<SymbolResponse>;
  /** docs: hide */
  getTokenCount: Scalars['String']['output'];
  /** Returns transactions for a pair. */
  getTokenEvents?: Maybe<EventConnection>;
  /** Returns a list of token events for a given maker. */
  getTokenEventsForMaker?: Maybe<MakerEventConnection>;
  /**
   * docs: hide
   * @deprecated Use `token` instead
   */
  getTokenInfo?: Maybe<TokenInfo>;
  /** Returns real-time or historical prices for a list of tokens, fetched in batches. */
  getTokenPrices?: Maybe<Array<Maybe<Price>>>;
  /**
   * docs: hide
   * @deprecated Use `tokens` instead
   */
  getTokensInfo?: Maybe<Array<Maybe<TokenInfo>>>;
  /** docs: hide */
  getTurnkeyUser?: Maybe<TurnkeyPasskeyUser>;
  /** docs: hide */
  getUniV3Ticks?: Maybe<UniV3TickConnection>;
  /** docs: hide */
  getUser?: Maybe<DefinedUser>;
  /** docs: hide */
  getUserAchievements: GetUserAchievementsResponse;
  /** docs: hide */
  getUserContractListBySlug?: Maybe<UserContractListAndItems>;
  /** docs: hide */
  getUserContractListItem?: Maybe<UserContractListItem>;
  /** docs: hide */
  getUserContractListItems?: Maybe<UserContractListItemConnection>;
  /** docs: hide */
  getUserContractLists?: Maybe<UserContractListConnection>;
  /** docs: hide */
  getUserNonce?: Maybe<UserModel>;
  /** docs: hide */
  getUserPointEvents: GetUserPointEventsResponse;
  /** docs: hide */
  getUserPoints: GetUserPointsResponse;
  /** docs: hide */
  getUserReferralCode?: Maybe<UserModel>;
  /** docs: hide */
  getUserReferralEvents?: Maybe<GetUserReferralEventsResponse>;
  /** Returns a user's list of webhooks. */
  getWebhooks?: Maybe<GetWebhooksResponse>;
  /** Returns list of wallets that hold a given token, ordered by holdings descending. Also has the unique count of holders for that token */
  holders: HoldersResponse;
  /** docs: hide */
  isBetaUser: Scalars['Boolean']['output'];
  /** Returns liquidity locks for a given pair. */
  liquidityLocks?: Maybe<LiquidityLockConnection>;
  /** Returns liquidity metadata for a given pair. Includes liquidity lock data. */
  liquidityMetadata?: Maybe<LiquidityMetadata>;
  /**
   * docs: hide
   * @deprecated use getChartLayout instead (only 1 layout per user)
   */
  listChartLayouts?: Maybe<ListChartLayoutResponse>;
  /** docs: hide */
  listFavoriteTokens?: Maybe<Array<TokenWithMetadata>>;
  /** Returns a list of pairs containing a given token. */
  listPairsForToken: Array<Maybe<Pair>>;
  /** Returns a list of pair metadata for a token. */
  listPairsWithMetadataForToken: ListPairsForTokenResponse;
  /** docs: hide */
  listTopProposalStats?: Maybe<Array<ContractProposalStats>>;
  /** Returns a list of trending tokens across any given network(s). */
  listTopTokens?: Maybe<Array<TokenWithMetadata>>;
  /** Returns list of wallets that hold a given collection, ordered by holdings descending. Also has the unique count of holders for that collection */
  nftHolders: NftHoldersResponse;
  /** docs: hide */
  notableHolders: NotableHoldersConnection;
  /** docs: hide */
  notableWalletEvents: NotableWalletEventsConnection;
  /** docs: hide */
  notableWallets: NotableWalletsConnection;
  /** Returns metadata for a pair of tokens. */
  pairMetadata: PairMetadata;
  /** docs: hide */
  portfolio: Portfolio;
  /** docs: hide */
  positions: Array<Position>;
  /** docs: hide */
  primeBalance: BalancesResponse;
  /** Returns a list of holders of the PRIME token on ethereum. */
  primeHolders: PrimeHolders;
  /** docs: hide */
  referralsMeta: ReferralsMeta;
  /** docs: hide */
  scarabCheckTradeable: CheckTradeableResponse;
  /** docs: hide */
  scarabClient: ScarabClientAttributes;
  /** docs: hide */
  scarabDefaultStrategies: Array<Strategy>;
  /** docs: hide */
  scarabExchanges: Array<ScarabExchange>;
  /** docs: hide */
  scarabGasEstimate: GasEstimate;
  /** docs: hide */
  scarabGasFees: GasFees;
  /** docs: hide */
  scarabOrder: Order;
  /** docs: hide */
  scarabOrders: OrderConnection;
  /** docs: hide */
  scarabQuote?: Maybe<Quote>;
  /** docs: hide */
  scarabStrategies: Array<Strategy>;
  /** docs: hide */
  scarabUser: ScarabUser;
  /** docs: hide */
  scarabUserStrategies: Array<Strategy>;
  /** docs: hide */
  scarabWallet: ScarabWallet;
  /** docs: hide */
  scarabWallets: Array<ScarabWallet>;
  /** Returns a list of NFT collections matching a given query string. */
  searchNfts?: Maybe<NftSearchResponse>;
  /**
   * Returns a list of tokens matching a given query string.
   * @deprecated This query is no longer supported and will not return up to date data. Use `filterTokens` instead.
   */
  searchTokens?: Maybe<TokenSearchResponse>;
  /** Returns a single token by its address & network id. */
  token: EnhancedToken;
  /** Returns a list of token lifecycle events. */
  tokenLifecycleEvents?: Maybe<TokenLifecycleEventConnection>;
  /** Returns a list of token simple chart data (sparklines) for the given tokens. */
  tokenSparklines: Array<TokenSparkline>;
  /** docs: hide */
  tokenSummary?: Maybe<TokenSummary>;
  /** Returns a list of top traders for a given token. */
  tokenTopTraders: TokenTopTradersConnection;
  /** Returns a list of tokens by their addresses & network id, with pagination. */
  tokens: Array<Maybe<EnhancedToken>>;
  /** Returns the percentage of a token’s total supply held collectively by its top 10 holders. */
  top10HoldersPercent?: Maybe<Scalars['Float']['output']>;
  /** docs: hide */
  trackedWalletEvents?: Maybe<TrackedWalletEventsConnection>;
  /** docs: hide */
  trackedWallets: TrackedWalletConnection;
  /** docs: hide */
  userRevShare?: Maybe<UserRevShareResponse>;
  /** docs: hide */
  userRevShareEvents: UserRevShareEventsResponse;
  /** docs: hide */
  userRevShareMeta: UserRevShareMeta;
  /** docs: hide */
  userTrackedWalletSettings: UserTrackedWalletSettings;
  /** docs: hide */
  userWallets: Array<ScarabWallet>;
  /** docs: hide */
  walletAggregateBackfillState: WalletAggregateBackfillStateResponse;
  /** docs: hide */
  walletChart?: Maybe<WalletChartResponse>;
  /** Returns list of NFT assets held by a given wallet for a single collection. */
  walletNftCollectionAssets: WalletNftCollectionAssetsResponse;
  /** Returns list of collections and quantity of NFTs held by a given wallet. */
  walletNftCollections: WalletNftCollectionsResponse;
};


export type QueryApiTokenArgs = {
  token: Scalars['String']['input'];
};


export type QueryBackfillHoldersStatusArgs = {
  input: BackfillHoldersInput;
};


export type QueryBackfillWalletStateArgs = {
  input: BackfillWalletInput;
};


export type QueryBalancesArgs = {
  input: BalancesInput;
};


export type QueryChartUrlsArgs = {
  input: ChartInput;
};


export type QueryDecodingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDecodingStatusArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDetailedWalletStatsArgs = {
  input: DetailedWalletStatsInput;
};


export type QueryEthBalancesArgs = {
  input: EthBalancesInput;
};


export type QueryFilterExchangesArgs = {
  filters?: InputMaybe<ExchangeFilters>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  phrase?: InputMaybe<Scalars['String']['input']>;
  rankings?: InputMaybe<Array<InputMaybe<ExchangeRanking>>>;
};


export type QueryFilterNetworkWalletsArgs = {
  input: FilterNetworkWalletsInput;
};


export type QueryFilterNftCollectionsArgs = {
  collections?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filters?: InputMaybe<NftCollectionFilters>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  phrase?: InputMaybe<Scalars['String']['input']>;
  rankings?: InputMaybe<Array<InputMaybe<NftCollectionRanking>>>;
};


export type QueryFilterNftParallelAssetsArgs = {
  filters?: InputMaybe<ParallelAssetFilters>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  match?: InputMaybe<ParallelAssetMatchers>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  phrase?: InputMaybe<Scalars['String']['input']>;
  rankings?: InputMaybe<Array<InputMaybe<ParallelAssetRanking>>>;
};


export type QueryFilterNftPoolCollectionsArgs = {
  filters?: InputMaybe<NftPoolCollectionFilters>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  phrase?: InputMaybe<Scalars['String']['input']>;
  rankings?: InputMaybe<Array<InputMaybe<NftPoolCollectionRanking>>>;
};


export type QueryFilterNftPoolsArgs = {
  filters?: InputMaybe<NftPoolFilters>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  phrase?: InputMaybe<Scalars['String']['input']>;
  rankings?: InputMaybe<Array<InputMaybe<NftPoolRanking>>>;
};


export type QueryFilterPairsArgs = {
  filters?: InputMaybe<PairFilters>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  matchTokens?: InputMaybe<PairFilterMatchTokens>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  pairs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phrase?: InputMaybe<Scalars['String']['input']>;
  rankings?: InputMaybe<Array<InputMaybe<PairRanking>>>;
  statsType?: InputMaybe<TokenPairStatisticsType>;
};


export type QueryFilterTokenWalletsArgs = {
  input: FilterTokenWalletsInput;
};


export type QueryFilterTokensArgs = {
  excludeTokens?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filters?: InputMaybe<TokenFilters>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  phrase?: InputMaybe<Scalars['String']['input']>;
  rankings?: InputMaybe<Array<InputMaybe<TokenRanking>>>;
  statsType?: InputMaybe<TokenPairStatisticsType>;
  tokens?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFilterWalletsArgs = {
  input: FilterWalletsInput;
};


export type QueryGetBarsArgs = {
  countback?: InputMaybe<Scalars['Int']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  from: Scalars['Int']['input'];
  quoteToken?: InputMaybe<QuoteToken>;
  removeEmptyBars?: InputMaybe<Scalars['Boolean']['input']>;
  removeLeadingNullValues?: InputMaybe<Scalars['Boolean']['input']>;
  resolution: Scalars['String']['input'];
  statsType?: InputMaybe<TokenPairStatisticsType>;
  symbol: Scalars['String']['input'];
  symbolType?: InputMaybe<SymbolType>;
  to: Scalars['Int']['input'];
};


export type QueryGetBridgeQuoteArgs = {
  input: GetBridgeQuoteInput;
};


export type QueryGetBridgeRequestStatusArgs = {
  input: GetBridgeRequestStatusInput;
};


export type QueryGetChartDrawingsArgs = {
  chartId: Scalars['String']['input'];
  layoutId: Scalars['String']['input'];
};


export type QueryGetChartLayoutArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetCommunityNotesArgs = {
  input?: InputMaybe<CommunityNotesInput>;
};


export type QueryGetDetailedNftStatsArgs = {
  bucketCount?: InputMaybe<Scalars['Int']['input']>;
  collectionAddress: Scalars['String']['input'];
  durations?: InputMaybe<Array<InputMaybe<DetailedNftStatsDuration>>>;
  grouping?: InputMaybe<Scalars['String']['input']>;
  networkId: Scalars['Int']['input'];
  timestamp?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetDetailedPairStatsArgs = {
  bucketCount?: InputMaybe<Scalars['Int']['input']>;
  durations?: InputMaybe<Array<InputMaybe<DetailedPairStatsDuration>>>;
  networkId: Scalars['Int']['input'];
  pairAddress: Scalars['String']['input'];
  statsType?: InputMaybe<TokenPairStatisticsType>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  tokenOfInterest?: InputMaybe<TokenOfInterest>;
};


export type QueryGetDetailedPairsStatsArgs = {
  input: Array<GetDetailedPairsStatsInput>;
};


export type QueryGetDetailedStatsArgs = {
  bucketCount?: InputMaybe<Scalars['Int']['input']>;
  pairId: Scalars['String']['input'];
  statsType?: InputMaybe<TokenPairStatisticsType>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  tokenOfInterest?: InputMaybe<TokenOfInterest>;
  windowSizes?: InputMaybe<Array<InputMaybe<DetailedStatsWindowSize>>>;
};


export type QueryGetEventLabelsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  direction?: InputMaybe<RankingDirection>;
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetExchangesArgs = {
  showNameless?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetLatestPairsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  exchangeFilter?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  minLiquidityFilter?: InputMaybe<Scalars['Int']['input']>;
  networkFilter?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QueryGetLatestTokensArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  networkFilter?: InputMaybe<Array<Scalars['Int']['input']>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetNetworkConfigsArgs = {
  networkIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QueryGetNetworkStatsArgs = {
  exchangeAddress?: InputMaybe<Scalars['String']['input']>;
  networkId: Scalars['Int']['input'];
};


export type QueryGetNetworkStatusArgs = {
  networkIds: Array<Scalars['Int']['input']>;
};


export type QueryGetNftAssetsArgs = {
  address: Scalars['String']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
  fetchMissingAssets?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  networkId: Scalars['Int']['input'];
  tokenIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGetNftCollectionMetadataArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  collectionId?: InputMaybe<Scalars['String']['input']>;
  networkId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetNftContractsArgs = {
  contracts?: InputMaybe<Array<InputMaybe<NftContractInput>>>;
};


export type QueryGetNftEventsArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  exchangeAddress?: InputMaybe<Scalars['String']['input']>;
  includeTransfers?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  networkId: Scalars['Int']['input'];
  poolAddress?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<EventQueryTimestampInput>;
  tokenId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetNftPoolArgs = {
  address: Scalars['String']['input'];
  networkId: Scalars['Int']['input'];
};


export type QueryGetNftPoolCollectionArgs = {
  collectionAddress: Scalars['String']['input'];
  exchangeAddress: Scalars['String']['input'];
  networkId: Scalars['Int']['input'];
};


export type QueryGetNftPoolCollectionsByExchangeArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  exchangeAddress: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  networkId: Scalars['Int']['input'];
};


export type QueryGetNftPoolEventsArgs = {
  collectionAddress?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  eventTypes?: InputMaybe<Array<NftPoolEventType>>;
  exchangeAddress?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  networkId: Scalars['Int']['input'];
  poolAddress?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<EventQueryTimestampInput>;
};


export type QueryGetNftPoolStatsArgs = {
  collectionAddress: Scalars['String']['input'];
  endTime: Scalars['Int']['input'];
  exchangeAddress: Scalars['String']['input'];
  networkId: Scalars['Int']['input'];
  poolAddress?: InputMaybe<Scalars['String']['input']>;
  startTime: Scalars['Int']['input'];
};


export type QueryGetNftPoolsByCollectionAndExchangeArgs = {
  collectionAddress: Scalars['String']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
  exchangeAddress: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  networkId: Scalars['Int']['input'];
};


export type QueryGetNftPoolsByOwnerArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  exchangeAddress?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  networkId: Scalars['Int']['input'];
  ownerAddress: Scalars['String']['input'];
};


export type QueryGetNftRankingsArgs = {
  duration?: InputMaybe<NftCollectionsLeaderboardDuration>;
  exchange?: InputMaybe<NftExchange>;
  filterWashTrading?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  metric?: InputMaybe<NftCollectionsLeaderboardMetric>;
  networkIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetNftScatterplotEventsArgs = {
  address: Scalars['String']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
  networkId: Scalars['Int']['input'];
  timestamp?: InputMaybe<EventQueryTimestampInput>;
};


export type QueryGetOrderedNetworksArgs = {
  networkIds: Array<Scalars['Int']['input']>;
  orderBy: NetworkOrderBy;
};


export type QueryGetParallelAssetsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  tokenIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGetParallelCardChangesArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  timestamp?: InputMaybe<ParallelCardChangeQueryTimestampInput>;
  tokenId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetPointsLeaderboardArgs = {
  leaderboardType: PointsLeaderboardType;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  pointsSeason: PointsSeason;
};


export type QueryGetPositionsArgs = {
  input?: InputMaybe<PositionsInput>;
};


export type QueryGetPrimePoolAssetsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  networkId: Scalars['Int']['input'];
  poolContractAddress?: InputMaybe<Scalars['String']['input']>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  walletAddress?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetPrimePoolEventsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  eventTypes?: InputMaybe<Array<InputMaybe<PrimePoolEventType>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  networkId: Scalars['Int']['input'];
  poolContractAddress?: InputMaybe<Scalars['String']['input']>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  walletAddress?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetPrimePoolsArgs = {
  address: Scalars['String']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  networkId: Scalars['Int']['input'];
  poolIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGetProposalsArgs = {
  input?: InputMaybe<ProposalQueryInput>;
};


export type QueryGetReleaseVersionArgs = {
  service?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetSimulateTokenContractResultsArgs = {
  contractAddress: Scalars['String']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  networkId: Scalars['Int']['input'];
  simulationId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetSolanaRawTransactionArgs = {
  rawTransaction: Scalars['String']['input'];
};


export type QueryGetSolanaTransactionConfirmationArgs = {
  txId: Scalars['String']['input'];
};


export type QueryGetSymbolArgs = {
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  symbol: Scalars['String']['input'];
};


export type QueryGetTokenEventsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  direction?: InputMaybe<RankingDirection>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  query: EventsQueryInput;
};


export type QueryGetTokenEventsForMakerArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  direction?: InputMaybe<RankingDirection>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  query: MakerEventsQueryInput;
};


export type QueryGetTokenInfoArgs = {
  address: Scalars['String']['input'];
  networkId: Scalars['Int']['input'];
};


export type QueryGetTokenPricesArgs = {
  inputs?: InputMaybe<Array<InputMaybe<GetPriceInput>>>;
};


export type QueryGetTokensInfoArgs = {
  input: Array<GetTokensInfoInput>;
};


export type QueryGetUniV3TicksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  networkId: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  poolAddress: Scalars['String']['input'];
};


export type QueryGetUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetUserAchievementsArgs = {
  pointsSeason: PointsSeason;
  userId: Scalars['String']['input'];
};


export type QueryGetUserContractListBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetUserContractListItemArgs = {
  input: GetUserContractListItemInput;
};


export type QueryGetUserContractListItemsArgs = {
  input: GetUserContractListItemsInput;
};


export type QueryGetUserContractListsArgs = {
  input: GetUserContractListsInput;
};


export type QueryGetUserNonceArgs = {
  publicWalletAddress?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetUserPointEventsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  pointsEventSource?: InputMaybe<PointsEventSource>;
  pointsSeason: PointsSeason;
  userId: Scalars['String']['input'];
};


export type QueryGetUserPointsArgs = {
  leaderboardType?: InputMaybe<Array<PointsLeaderboardType>>;
  pointsSeason: PointsSeason;
  userId: Scalars['String']['input'];
};


export type QueryGetUserReferralCodeArgs = {
  referrerUserId: Scalars['String']['input'];
};


export type QueryGetUserReferralEventsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  eventType: ReferralsEventType;
  limit?: InputMaybe<Scalars['Int']['input']>;
  referrerUserId: Scalars['String']['input'];
};


export type QueryGetWebhooksArgs = {
  bucketId?: InputMaybe<Scalars['String']['input']>;
  bucketSortkey?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  webhookId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryHoldersArgs = {
  input: HoldersInput;
};


export type QueryIsBetaUserArgs = {
  address: Scalars['String']['input'];
};


export type QueryLiquidityLocksArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  networkId: Scalars['Int']['input'];
  pairAddress: Scalars['String']['input'];
};


export type QueryLiquidityMetadataArgs = {
  networkId: Scalars['Int']['input'];
  pairAddress: Scalars['String']['input'];
};


export type QueryListFavoriteTokensArgs = {
  keys: Array<Scalars['String']['input']>;
  networkFilter?: InputMaybe<Array<Scalars['Int']['input']>>;
  resolution?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListPairsForTokenArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  networkId: Scalars['Int']['input'];
  tokenAddress: Scalars['String']['input'];
};


export type QueryListPairsWithMetadataForTokenArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  networkId: Scalars['Int']['input'];
  tokenAddress: Scalars['String']['input'];
};


export type QueryListTopProposalStatsArgs = {
  input?: InputMaybe<ListTopProposalStatsInput>;
};


export type QueryListTopTokensArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  networkFilter?: InputMaybe<Array<Scalars['Int']['input']>>;
  resolution?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNftHoldersArgs = {
  input: NftHoldersInput;
};


export type QueryNotableHoldersArgs = {
  input: NotableHoldersInput;
};


export type QueryNotableWalletEventsArgs = {
  input: NotableWalletEventsInput;
};


export type QueryNotableWalletsArgs = {
  input?: InputMaybe<NotableWalletsInput>;
};


export type QueryPairMetadataArgs = {
  pairId: Scalars['String']['input'];
  quoteToken?: InputMaybe<QuoteToken>;
  statsType?: InputMaybe<TokenPairStatisticsType>;
};


export type QueryPortfolioArgs = {
  hidden?: InputMaybe<Scalars['Boolean']['input']>;
  networkId?: InputMaybe<Scalars['Int']['input']>;
  walletId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPositionsArgs = {
  input?: InputMaybe<PositionsInput>;
};


export type QueryPrimeBalanceArgs = {
  walletAddress: Scalars['String']['input'];
};


export type QueryPrimeHoldersArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
};


export type QueryScarabCheckTradeableArgs = {
  input: CheckTradeableInput;
};


export type QueryScarabGasEstimateArgs = {
  input: GetGasEstimateInput;
};


export type QueryScarabGasFeesArgs = {
  chainId: Scalars['Int']['input'];
};


export type QueryScarabOrderArgs = {
  orderId: Scalars['Int']['input'];
};


export type QueryScarabOrdersArgs = {
  input?: InputMaybe<GetOrdersInput>;
};


export type QueryScarabQuoteArgs = {
  input: GetQuoteInput;
};


export type QueryScarabWalletArgs = {
  walletId: Scalars['Int']['input'];
};


export type QuerySearchNftsArgs = {
  filterWashTrading?: InputMaybe<Scalars['Boolean']['input']>;
  include?: InputMaybe<Array<NftSearchable>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  networkFilter?: InputMaybe<Array<Scalars['Int']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  window?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySearchTokensArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowVolumeFilter?: InputMaybe<Scalars['Boolean']['input']>;
  networkFilter?: InputMaybe<Array<Scalars['Int']['input']>>;
  resolution?: InputMaybe<Scalars['String']['input']>;
  search: Scalars['String']['input'];
};


export type QueryTokenArgs = {
  input: TokenInput;
};


export type QueryTokenLifecycleEventsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  query: TokenLifecycleEventsQueryInput;
};


export type QueryTokenSparklinesArgs = {
  input: TokenSparklineInput;
};


export type QueryTokenSummaryArgs = {
  refresh?: InputMaybe<Scalars['Boolean']['input']>;
  tokenId: Scalars['String']['input'];
};


export type QueryTokenTopTradersArgs = {
  input: TokenTopTradersInput;
};


export type QueryTokensArgs = {
  ids?: InputMaybe<Array<TokenInput>>;
};


export type QueryTop10HoldersPercentArgs = {
  tokenId: Scalars['String']['input'];
};


export type QueryTrackedWalletEventsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  eventType?: InputMaybe<Array<InputMaybe<TrackedWalletEventType>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['String']['input'];
};


export type QueryTrackedWalletsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
  walletAddresses?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUserRevShareArgs = {
  input: UserRevShareInput;
};


export type QueryUserRevShareEventsArgs = {
  input: UserRevShareEventsInput;
};


export type QueryUserRevShareMetaArgs = {
  pointsSeason: PointsSeason;
};


export type QueryUserTrackedWalletSettingsArgs = {
  userId: Scalars['String']['input'];
};


export type QueryUserWalletsArgs = {
  userId: Scalars['String']['input'];
};


export type QueryWalletAggregateBackfillStateArgs = {
  input: WalletAggregateBackfillStateInput;
};


export type QueryWalletChartArgs = {
  input: WalletChartInput;
};


export type QueryWalletNftCollectionAssetsArgs = {
  input: WalletNftCollectionAssetsInput;
};


export type QueryWalletNftCollectionsArgs = {
  input: WalletNftCollectionsInput;
};

export type Quote = {
  __typename?: 'Quote';
  exchange: QuoteExchange;
  outputAmountMin?: Maybe<Scalars['String']['output']>;
  poolFee?: Maybe<Scalars['String']['output']>;
  poolFeeBps?: Maybe<Scalars['Float']['output']>;
  quoteType: QuoteType;
  quotedAmount: Scalars['String']['output'];
  tradeFee: Scalars['String']['output'];
  tradeFeeBps: Scalars['Float']['output'];
};

export enum QuoteCurrency {
  Token = 'TOKEN',
  Usd = 'USD'
}

export type QuoteExchange = {
  __typename?: 'QuoteExchange';
  factory: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  networkId: Scalars['Int']['output'];
  protocol: Scalars['String']['output'];
  quoter?: Maybe<Scalars['String']['output']>;
  quoterInterface?: Maybe<Scalars['String']['output']>;
  router: Scalars['String']['output'];
};

/** The quote token within the pair. */
export enum QuoteToken {
  Token0 = 'token0',
  Token1 = 'token1'
}

export enum QuoteType {
  Input = 'INPUT',
  Output = 'OUTPUT'
}

/** docs: hide */
export type RangeInput = {
  end: Scalars['Int']['input'];
  start: Scalars['Int']['input'];
};

/** The order of ranking. */
export enum RankingDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** docs: hide */
export type RawEvent = {
  __typename?: 'RawEvent';
  /** The contract address of the token's top pair. */
  address: Scalars['String']['output'];
  /** The hash of the block where the transaction occurred. */
  blockHash: Scalars['String']['output'];
  /** The block number for the transaction. */
  blockNumber: Scalars['Int']['output'];
  /** The event-specific data for the transaction. Can be `BurnEventData` or `MintEventData` or `SwapEventData`. */
  data?: Maybe<EventData>;
  /** The type of transaction event. Can be `Burn`, `Mint`, `Swap`, `Sync`, `Collect`, or `CollectProtocol`. */
  eventType: EventType;
  /** The ID of the event (`address:networkId`). For example, `0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2:1`. */
  id: Scalars['String']['output'];
  /** The index of the log in the block. */
  logIndex: Scalars['Int']['output'];
  /** The wallet address that performed the transaction. */
  maker?: Maybe<Scalars['String']['output']>;
  /** The network ID that the token is deployed on. */
  networkId: Scalars['Int']['output'];
  sortKey: Scalars['String']['output'];
  /** The unix timestamp for when the transaction occurred. */
  timestamp: Scalars['Int']['output'];
  /** The unique hash for the transaction. */
  transactionHash: Scalars['String']['output'];
  /** The index of the transaction within the block. */
  transactionIndex: Scalars['Int']['output'];
};

export type RawNftAssetData = {
  __typename?: 'RawNftAssetData';
  /** An optional image field that may or may not be present on the requested NFT asset smart contract. */
  animationUrl?: Maybe<Scalars['String']['output']>;
  /** An optional field that may or may not be present on the requested NFT asset smart contract. */
  externalUrl?: Maybe<Scalars['String']['output']>;
  /** An optional image field that may or may not be present on the requested NFT asset smart contract. */
  imageData?: Maybe<Scalars['String']['output']>;
  /** An optional image field that may or may not be present on the requested NFT asset smart contract. */
  imageUrl?: Maybe<Scalars['String']['output']>;
};

/** docs: hide */
export type RawTransaction = Trackable & {
  __typename?: 'RawTransaction';
  accessList: Array<Maybe<Scalars['String']['output']>>;
  blockHash: Scalars['String']['output'];
  blockNumber: Scalars['Int']['output'];
  from: Scalars['String']['output'];
  gas: Scalars['Int']['output'];
  gasPrice: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  input: Scalars['String']['output'];
  maxFeePerGas?: Maybe<Scalars['String']['output']>;
  maxPriorityFeePerGas?: Maybe<Scalars['String']['output']>;
  networkId: Scalars['Int']['output'];
  nonce: Scalars['Int']['output'];
  r?: Maybe<Scalars['String']['output']>;
  s?: Maybe<Scalars['String']['output']>;
  to: Scalars['String']['output'];
  transactionIndex: Scalars['Int']['output'];
  type?: Maybe<Scalars['String']['output']>;
  v?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

/** docs: hide */
export type RawTransactionResponse = {
  __typename?: 'RawTransactionResponse';
  txId?: Maybe<Scalars['String']['output']>;
};

/** Webhook conditions for a raw transaction. */
export type RawTransactionWebhookCondition = {
  __typename?: 'RawTransactionWebhookCondition';
  /** The from address to listen for. */
  from?: Maybe<StringEqualsCondition>;
  /** Do not trigger the webhook if the raw transaction is handled by the NftEvent webhook. */
  ignoreNftEvents?: Maybe<Scalars['Boolean']['output']>;
  /** Do not trigger the webhook if the raw transaction is handled by the TokenPairEvent webhook. */
  ignoreTokenPairEvents?: Maybe<Scalars['Boolean']['output']>;
  /** Trigger the webhook if the  contains or doesn't contain the specified string. */
  input?: Maybe<StringContainsCondition>;
  /** A list of network IDs to listen on. */
  networkId?: Maybe<OneOfNumberCondition>;
  /** The to address to listen for. */
  to?: Maybe<StringEqualsCondition>;
  /** Trigger the webhook if either the to or the from address matches. */
  toOrFrom?: Maybe<StringEqualsCondition>;
};

/** Input conditions for a Raw Transaction webhook. */
export type RawTransactionWebhookConditionInput = {
  /** The from address to listen for. */
  from?: InputMaybe<StringEqualsConditionInput>;
  /** Do not trigger the webhook if the raw transaction is handled by the NftEvent webhook. */
  ignoreNftEvents?: InputMaybe<Scalars['Boolean']['input']>;
  /** Do not trigger the webhook if the raw transaction is handled by the TokenPairEvent webhook. */
  ignoreTokenPairEvents?: InputMaybe<Scalars['Boolean']['input']>;
  /** Trigger the webhook if the input contains or doesn't contain the specified string. */
  input?: InputMaybe<StringContainsConditionInput>;
  /** A list of network IDs to listen on. */
  networkId?: InputMaybe<OneOfNumberConditionInput>;
  /** The to address to listen for. */
  to?: InputMaybe<StringEqualsConditionInput>;
  /** Trigger the webhook if either the to or the from address matches. */
  toOrFrom?: InputMaybe<StringEqualsConditionInput>;
};

export type ReferralEventData = ReferralsEventPayoutData | ReferralsEventRewardData;

/** docs: hide */
export type ReferralUsersInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** docs: hide */
export type ReferralsEventModel = {
  __typename?: 'ReferralsEventModel';
  data: ReferralEventData;
  eventType: ReferralsEventType;
  id: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  referralsRewardPeriod?: Maybe<Scalars['String']['output']>;
  referrerUserId: Scalars['String']['output'];
  source: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
};

export type ReferralsEventPayoutData = {
  __typename?: 'ReferralsEventPayoutData';
  payouts: Array<ReferralsPayoutData>;
};

export type ReferralsEventRewardData = {
  __typename?: 'ReferralsEventRewardData';
  inputTokenAddress: Scalars['String']['output'];
  networkId: Scalars['Int']['output'];
  outputTokenAddress: Scalars['String']['output'];
  payoutPercent: Scalars['Float']['output'];
  referralUserId: Scalars['String']['output'];
  rewardTokenAddress?: Maybe<Scalars['String']['output']>;
  rewardTokenAmount?: Maybe<Scalars['String']['output']>;
  transactionFee: Scalars['String']['output'];
  transactionId: Scalars['String']['output'];
  transactionTokenAddress: Scalars['String']['output'];
  transactionTokenAmount: Scalars['String']['output'];
};

/** docs: hide */
export enum ReferralsEventType {
  AddReward = 'ADD_REWARD',
  Payout = 'PAYOUT',
  RemoveReward = 'REMOVE_REWARD'
}

/** docs: hide */
export type ReferralsMeta = {
  __typename?: 'ReferralsMeta';
  items: Array<UserModel>;
  referralEarnings: Scalars['JSON']['output'];
  referralTradeVolume: Scalars['JSON']['output'];
  userCount: Scalars['Int']['output'];
};

export type ReferralsPayoutData = {
  __typename?: 'ReferralsPayoutData';
  tokenAddressNetworkIdPaid: Scalars['String']['output'];
  tokenAmountPaid: Scalars['String']['output'];
};

/** docs: hide */
export type RefreshBalancesInput = {
  /** The token to check balance of */
  tokenId: Scalars['String']['input'];
  /** The wallet address(es) in question */
  walletId: Scalars['String']['input'];
};

/** docs: hide */
export type RefreshHolderCountInput = {
  networkId: Scalars['Int']['input'];
  tokenAddress: Scalars['String']['input'];
};

/** docs: hide */
export type RefreshNftMetadataInput = {
  /** The contract address of the NFT collection. */
  collectionAddress: Scalars['String']['input'];
  /** The maximum enumerable token ID to refresh */
  maxTokenId: Scalars['Int']['input'];
  /** The minimum enumerable token ID to refresh */
  minTokenId: Scalars['Int']['input'];
  /** The network ID the NFT collection is deployed on. */
  networkId: Scalars['Int']['input'];
};

/** docs: hide */
export type RefreshNftMetadataResponse = {
  __typename?: 'RefreshNftMetadataResponse';
  /** The contract address of the NFT collection. */
  collectionAddress: Scalars['String']['output'];
  /** The network ID the NFT collection is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The number of tokens refreshed. */
  refreshedTokens: Array<Scalars['Int']['output']>;
};

/** docs: hide */
export type ReleaseVersion = {
  __typename?: 'ReleaseVersion';
  hardRefresh?: Maybe<Scalars['Boolean']['output']>;
  service: Scalars['String']['output'];
  sha: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
};

export type RemoveUserAchievementInput = {
  achievementId: AchievementId;
  pointsSeason: PointsSeason;
  userId: Scalars['String']['input'];
};

/** docs: hide */
export type ResetSignerKeyInput = {
  bundlePublicKey: Scalars['String']['input'];
  createSessionRequest: SignedRequest;
  expiresInSeconds?: InputMaybe<Scalars['Int']['input']>;
};

/** Price data for each supported resolution. */
export type ResolutionBarData = {
  __typename?: 'ResolutionBarData';
  /** 1 minute resolution. */
  r1?: Maybe<CurrencyBarData>;
  /** 1 day resolution. */
  r1D?: Maybe<CurrencyBarData>;
  /** 1 second resolution. */
  r1S?: Maybe<CurrencyBarData>;
  /** 5 minute resolution. */
  r5?: Maybe<CurrencyBarData>;
  /** 5 second resolution. */
  r5S?: Maybe<CurrencyBarData>;
  /** 1 week resolution. */
  r7D?: Maybe<CurrencyBarData>;
  /** 15 minute resolution. */
  r15?: Maybe<CurrencyBarData>;
  /** 15 second resolution. */
  r15S?: Maybe<CurrencyBarData>;
  /** 30 minute resolution. */
  r30?: Maybe<CurrencyBarData>;
  /** 30 second resolution. */
  r30S?: Maybe<CurrencyBarData>;
  /** 60 minute resolution. */
  r60?: Maybe<CurrencyBarData>;
  /** 4 hour resolution. */
  r240?: Maybe<CurrencyBarData>;
  /** 12 hour resolution. */
  r720?: Maybe<CurrencyBarData>;
};

/** Config for retrying failed webhook messages */
export type RetrySettings = {
  __typename?: 'RetrySettings';
  /** docs: hide */
  email?: Maybe<Scalars['String']['output']>;
  /** The maximum number of times the webhook will retry sending a message */
  maxRetries?: Maybe<Scalars['Int']['output']>;
  /** The maximum time in seconds that the webhook will wait before retrying a failed message */
  maxRetryDelay?: Maybe<Scalars['Int']['output']>;
  /** The maximum time in seconds that the webhook will retry sending a message */
  maxTimeElapsed?: Maybe<Scalars['Int']['output']>;
  /** The minimum time in seconds that the webhook will wait before retrying a failed message */
  minRetryDelay?: Maybe<Scalars['Int']['output']>;
};

/** Config input for retrying failed webhook messages */
export type RetrySettingsInput = {
  /** The maximum number of times the webhook will retry sending a message */
  maxRetries?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum time in seconds that the webhook will wait before retrying a failed message */
  maxRetryDelay?: InputMaybe<Scalars['Int']['input']>;
  /** The maximum time in seconds that the webhook will retry sending a message */
  maxTimeElapsed?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum time in seconds that the webhook will wait before retrying a failed message */
  minRetryDelay?: InputMaybe<Scalars['Int']['input']>;
};

/** docs: hide */
export type RevokeTokenResponse = {
  __typename?: 'RevokeTokenResponse';
  success: Scalars['Boolean']['output'];
};

/** docs: hide */
export type Route = {
  __typename?: 'Route';
  estimate: RouteEstimate;
  params: BridgeQuoteParams;
  transactionRequest?: Maybe<RouteTransactionRequest>;
};

/** docs: hide */
export type RouteEstimate = {
  __typename?: 'RouteEstimate';
  feeCosts: Array<RouteFeeCost>;
  fromAmount: Scalars['String']['output'];
  gasCosts: Array<RouteGasCost>;
  toAmount: Scalars['String']['output'];
};

/** docs: hide */
export type RouteFeeCost = {
  __typename?: 'RouteFeeCost';
  amount: Scalars['String']['output'];
  amountUsd: Scalars['String']['output'];
  name: Scalars['String']['output'];
  token: RouteToken;
};

/** docs: hide */
export type RouteGasCost = {
  __typename?: 'RouteGasCost';
  amount: Scalars['String']['output'];
  amountUsd: Scalars['String']['output'];
  token: RouteToken;
  type: Scalars['String']['output'];
};

/** docs: hide */
export type RouteToken = {
  __typename?: 'RouteToken';
  address: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  decimals: Scalars['Int']['output'];
  symbol: Scalars['String']['output'];
};

/** docs: hide */
export type RouteTransactionRequest = {
  __typename?: 'RouteTransactionRequest';
  data: Scalars['String']['output'];
  gasLimit?: Maybe<Scalars['String']['output']>;
  gasPrice?: Maybe<Scalars['String']['output']>;
  maxFeePerGas?: Maybe<Scalars['String']['output']>;
  maxPriorityFeePerGas?: Maybe<Scalars['String']['output']>;
  target: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** Metadata for a sandwich label. */
export type SandwichLabelForEvent = {
  __typename?: 'SandwichLabelForEvent';
  /** The label type, 'sandwiched'. */
  label: Scalars['String']['output'];
  /** The sandwich event label types. */
  sandwichType: SandwichLabelForEventType;
  /** The amount of `token0` drained in the attack. */
  token0DrainedAmount: Scalars['String']['output'];
  /** The amount of `token1` drained in the attack. */
  token1DrainedAmount: Scalars['String']['output'];
};

/** Sandwich event label types. */
export enum SandwichLabelForEventType {
  Backrun = 'backrun',
  Frontrun = 'frontrun',
  Sandwiched = 'sandwiched'
}

/** Metadata for a sandwich label. */
export type SandwichedLabelData = {
  __typename?: 'SandwichedLabelData';
  /** The amount of `token0` drained in the attack. */
  token0DrainedAmount?: Maybe<Scalars['String']['output']>;
  /** The amount of `token1` drained in the attack. */
  token1DrainedAmount?: Maybe<Scalars['String']['output']>;
};

/** docs: hide */
export type SaveChartDrawingsInput = {
  chartId: Scalars['String']['input'];
  layoutId: Scalars['String']['input'];
  state: Scalars['String']['input'];
  /** @deprecated generated automatically */
  timestamp?: InputMaybe<Scalars['Int']['input']>;
};

/** docs: hide */
export type ScarabClientAttributes = {
  __typename?: 'ScarabClientAttributes';
  host: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** docs: hide */
export type ScarabExchange = {
  __typename?: 'ScarabExchange';
  factory: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  networkId: Scalars['Int']['output'];
  router: Scalars['String']['output'];
};

/** docs: hide */
export type ScarabToken = {
  __typename?: 'ScarabToken';
  address: Scalars['String']['output'];
  decimals: Scalars['Int']['output'];
  functions: Array<Maybe<Scalars['String']['output']>>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalSupply?: Maybe<Scalars['String']['output']>;
};

/** docs: hide */
export type ScarabTransaction = {
  __typename?: 'ScarabTransaction';
  altHash?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  direction: OrderDirection;
  error?: Maybe<Scalars['String']['output']>;
  hash: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  networkId: Scalars['Int']['output'];
  orderId?: Maybe<Scalars['Int']['output']>;
  /** @deprecated No longer tracked */
  privateRpc?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated No longer tracked */
  rpcId?: Maybe<Scalars['Int']['output']>;
  status: OrderTransactionStatus;
  updatedAt: Scalars['String']['output'];
  /** @deprecated No longer tracked */
  userInitiated?: Maybe<Scalars['Boolean']['output']>;
  wallet: ScarabWallet;
  walletId: Scalars['Int']['output'];
};

/** docs: hide */
export type ScarabUser = {
  __typename?: 'ScarabUser';
  address?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  referralCode?: Maybe<Scalars['String']['output']>;
  referrerCode?: Maybe<Scalars['String']['output']>;
  telegramId?: Maybe<Scalars['String']['output']>;
};

/** docs: hide */
export type ScarabWallet = {
  __typename?: 'ScarabWallet';
  address: Scalars['String']['output'];
  expiration?: Maybe<Scalars['String']['output']>;
  exported?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['Int']['output'];
  imported?: Maybe<Scalars['Boolean']['output']>;
  invalidKey?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  networkType: NetworkType;
  owner?: Maybe<Scalars['String']['output']>;
  walletType?: Maybe<Scalars['String']['output']>;
};

/** docs: hide */
export type SessionKey = {
  __typename?: 'SessionKey';
  publicKey: Scalars['String']['output'];
  publicKeyUncompressed: Scalars['String']['output'];
  sessionUserId: Scalars['String']['output'];
  subOrgId: Scalars['String']['output'];
};

export type SessionMetadata = {
  shouldNotify?: InputMaybe<Scalars['Boolean']['input']>;
};

/** docs: hide */
export type SignedRequest = {
  body: Scalars['String']['input'];
  stamp: SignedRequestStamp;
  url: Scalars['String']['input'];
};

/** docs: hide */
export type SignedRequestStamp = {
  stampHeaderName: Scalars['String']['input'];
  stampHeaderValue: Scalars['String']['input'];
};

/** docs: hide */
export type SignerKey = {
  __typename?: 'SignerKey';
  newPolicies: Array<NewPolicy>;
  publicKey: Scalars['String']['output'];
  signingUserId: Scalars['String']['output'];
  subOrgId: Scalars['String']['output'];
};

/** docs: hide */
export type SignerKeyInput = {
  createPoliciesRequest?: InputMaybe<SignedRequest>;
  expiresInSeconds?: InputMaybe<Scalars['Int']['input']>;
  publicKey: Scalars['String']['input'];
  request: SignedRequest;
};

/** docs: hide */
export type SignerKeysResponse = {
  __typename?: 'SignerKeysResponse';
  keyIds: Array<Scalars['String']['output']>;
  signingUserId: Scalars['String']['output'];
  subOrgId: Scalars['String']['output'];
};

export type SimulateContractBalanceErrorsType = {
  __typename?: 'SimulateContractBalanceErrorsType';
  tokenContractEthBalanceError?: Maybe<Scalars['String']['output']>;
  tokenContractTokenBalanceError?: Maybe<Scalars['String']['output']>;
};

export type SimulateContractBalanceType = {
  __typename?: 'SimulateContractBalanceType';
  tokenContractEthBalance?: Maybe<Scalars['String']['output']>;
  tokenContractTokenBalance?: Maybe<Scalars['String']['output']>;
};

export type SimulateCreateTransactionInput = {
  /** The block number to simulate the contract at. */
  blockNumber: Scalars['Int']['input'];
  /** The contract address of the token. */
  contractAddress: Scalars['String']['input'];
  /** The contract creation transaction hash from the live network. */
  createTransactionHash: Scalars['String']['input'];
  /** The network ID the token is deployed on. Currently only supports 1 (mainnet). */
  networkId: Scalars['Int']['input'];
};

export type SimulateCreatorErrorsType = {
  __typename?: 'SimulateCreatorErrorsType';
  creatorEthBalanceError?: Maybe<Scalars['String']['output']>;
  creatorTokenBalanceError?: Maybe<Scalars['String']['output']>;
};

export type SimulateCreatorType = {
  __typename?: 'SimulateCreatorType';
  creatorAddress?: Maybe<Scalars['String']['output']>;
  creatorEthBalance?: Maybe<Scalars['String']['output']>;
  creatorTokenBalance?: Maybe<Scalars['String']['output']>;
};

export type SimulateDeployErrorsType = {
  __typename?: 'SimulateDeployErrorsType';
  deployError?: Maybe<Scalars['String']['output']>;
  tokenMintedToDeployerError?: Maybe<Scalars['String']['output']>;
};

export type SimulateDeployInput = {
  /** The block number to simulate the contract at. */
  blockNumber: Scalars['Int']['input'];
  /** The contract address of the token. */
  contractAddress: Scalars['String']['input'];
  /** The contract creation transaction input to simulate. */
  contractInput: Scalars['String']['input'];
  /** The network ID the token is deployed on. Currently only supports 1 (mainnet). */
  networkId: Scalars['Int']['input'];
};

export type SimulateDeployType = {
  __typename?: 'SimulateDeployType';
  deploySuccess?: Maybe<Scalars['Boolean']['output']>;
  tokenMintedToDeployer?: Maybe<Scalars['String']['output']>;
};

export type SimulateLiquidityErrorsType = {
  __typename?: 'SimulateLiquidityErrorsType';
  addLiquidityError?: Maybe<Scalars['String']['output']>;
  lpTotalSupplyError?: Maybe<Scalars['String']['output']>;
  postLiquidityEnableTradingError?: Maybe<Scalars['String']['output']>;
  preLiquidityEnableTradingError?: Maybe<Scalars['String']['output']>;
};

export type SimulateLiquidityType = {
  __typename?: 'SimulateLiquidityType';
  addLiquiditySuccess?: Maybe<Scalars['Boolean']['output']>;
  liquiditySetByPreLiquidityOpenTradingCall?: Maybe<Scalars['Boolean']['output']>;
  lpTotalSupply?: Maybe<Scalars['String']['output']>;
  pairAddress?: Maybe<Scalars['String']['output']>;
  postLiquidityEnableTradingCall?: Maybe<Scalars['String']['output']>;
  postLiquidityEnableTradingSuccess?: Maybe<Scalars['Boolean']['output']>;
  preLiquidityEnableTradingCall?: Maybe<Scalars['String']['output']>;
  preLiquidityEnableTradingSuccess?: Maybe<Scalars['Boolean']['output']>;
  preLiquidityEnableTradingSupportsTransfer?: Maybe<Scalars['Boolean']['output']>;
};

export type SimulateLiveContractInput = {
  /** The block number to simulate the contract at. */
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  /** The contract address of the token. */
  contractAddress: Scalars['String']['input'];
  /** The network ID the token is deployed on. Currently only supports 1 (mainnet). */
  networkId: Scalars['Int']['input'];
};

export type SimulateOwnerErrorsType = {
  __typename?: 'SimulateOwnerErrorsType';
  ownerAddressError?: Maybe<Scalars['String']['output']>;
  ownerEthBalanceError?: Maybe<Scalars['String']['output']>;
  ownerTokenBalanceError?: Maybe<Scalars['String']['output']>;
};

export type SimulateOwnerType = {
  __typename?: 'SimulateOwnerType';
  ownerAddress?: Maybe<Scalars['String']['output']>;
  ownerEthBalance?: Maybe<Scalars['String']['output']>;
  ownerTokenBalance?: Maybe<Scalars['String']['output']>;
};

export type SimulateSwapErrorsType = {
  __typename?: 'SimulateSwapErrorsType';
  buyError?: Maybe<Scalars['String']['output']>;
  buyErrorEnum?: Maybe<SimulateTokenContractBuySellErrorEnum>;
  sellError?: Maybe<Scalars['String']['output']>;
  sellErrorEnum?: Maybe<SimulateTokenContractBuySellErrorEnum>;
};

export type SimulateSwapType = {
  __typename?: 'SimulateSwapType';
  buyGasUsed?: Maybe<Scalars['String']['output']>;
  buySuccess?: Maybe<Scalars['Boolean']['output']>;
  buyTax?: Maybe<Scalars['String']['output']>;
  maxBuyAmount?: Maybe<Scalars['String']['output']>;
  maxSellAmount?: Maybe<Scalars['String']['output']>;
  sellGasUsed?: Maybe<Scalars['String']['output']>;
  sellSuccess?: Maybe<Scalars['Boolean']['output']>;
  sellTax?: Maybe<Scalars['String']['output']>;
};

export enum SimulateTokenContractBuySellErrorEnum {
  InsufficientLiquidity = 'INSUFFICIENT_LIQUIDITY',
  InsufficientOutputAmount = 'INSUFFICIENT_OUTPUT_AMOUNT',
  TransferFailed = 'TRANSFER_FAILED',
  UnknownError = 'UNKNOWN_ERROR'
}

export type SimulateTokenContractErrors = {
  __typename?: 'SimulateTokenContractErrors';
  contractBalanceErrors: SimulateContractBalanceErrorsType;
  creatorErrors: SimulateCreatorErrorsType;
  deployErrors: SimulateDeployErrorsType;
  liquidityErrors: SimulateLiquidityErrorsType;
  ownerErrors: SimulateOwnerErrorsType;
  simulatorError?: Maybe<Scalars['String']['output']>;
  swapErrors: SimulateSwapErrorsType;
  tokenErrors: SimulateTokenErrorsType;
  transferErrors: SimulateTransferErrorsType;
};

export type SimulateTokenContractInput = {
  /** Input for a token contract create transaction simulation. */
  simulateCreateTransactionInput?: InputMaybe<SimulateCreateTransactionInput>;
  /** Input for a token contract deploy simulation. */
  simulateDeployInput?: InputMaybe<SimulateDeployInput>;
  /** Input for a live token contract simulation. */
  simulateLiveContractInput?: InputMaybe<SimulateLiveContractInput>;
};

export type SimulateTokenContractResponse = {
  __typename?: 'SimulateTokenContractResponse';
  error?: Maybe<Scalars['String']['output']>;
  result: Scalars['Boolean']['output'];
  simulationId?: Maybe<Scalars['String']['output']>;
};

export type SimulateTokenContractResult = {
  __typename?: 'SimulateTokenContractResult';
  analysisType: Scalars['Int']['output'];
  blockNumber: Scalars['String']['output'];
  contractBalance: SimulateContractBalanceType;
  contractHashKey: Scalars['String']['output'];
  creator: SimulateCreatorType;
  deploy: SimulateDeployType;
  errors: SimulateTokenContractErrors;
  id: Scalars['String']['output'];
  liquidity: SimulateLiquidityType;
  networkId: Scalars['Int']['output'];
  owner: SimulateOwnerType;
  sortKey: Scalars['String']['output'];
  status: SimulateTokenContractResultStatusEnum;
  swap: SimulateSwapType;
  timestamp: Scalars['Int']['output'];
  token: SimulateTokenType;
  transfer: SimulateTransferType;
  uuid: Scalars['String']['output'];
  uuidHashKey: Scalars['String']['output'];
};

export enum SimulateTokenContractResultStatusEnum {
  Failure = 'FAILURE',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export type SimulateTokenErrorsType = {
  __typename?: 'SimulateTokenErrorsType';
  canRenounceOwnershipError?: Maybe<Scalars['String']['output']>;
  canTransferOwnershipError?: Maybe<Scalars['String']['output']>;
  decimalsError?: Maybe<Scalars['String']['output']>;
  tokenNameError?: Maybe<Scalars['String']['output']>;
  tokenSymbolError?: Maybe<Scalars['String']['output']>;
  totalSupplyError?: Maybe<Scalars['String']['output']>;
};

export type SimulateTokenType = {
  __typename?: 'SimulateTokenType';
  canRenounceOwnership?: Maybe<Scalars['Boolean']['output']>;
  canTransferOwnership?: Maybe<Scalars['Boolean']['output']>;
  contractAddress: Scalars['String']['output'];
  decimals?: Maybe<Scalars['Int']['output']>;
  isOwnerRenounced?: Maybe<Scalars['Boolean']['output']>;
  tokenName?: Maybe<Scalars['String']['output']>;
  tokenSymbol?: Maybe<Scalars['String']['output']>;
  totalSupply?: Maybe<Scalars['String']['output']>;
};

export type SimulateTransferErrorsType = {
  __typename?: 'SimulateTransferErrorsType';
  tokenContractApprovalError?: Maybe<Scalars['String']['output']>;
  tokenTransferredToContractError?: Maybe<Scalars['String']['output']>;
  userApprovalError?: Maybe<Scalars['String']['output']>;
};

export type SimulateTransferType = {
  __typename?: 'SimulateTransferType';
  tokenContractApprovalSuccess?: Maybe<Scalars['Boolean']['output']>;
  tokenTransferredToContractSuccess?: Maybe<Scalars['Boolean']['output']>;
  userApprovalSuccess?: Maybe<Scalars['Boolean']['output']>;
};

/** Community gathered social links of tokens/NFTs. */
export type SocialLinks = {
  __typename?: 'SocialLinks';
  bitcointalk?: Maybe<Scalars['String']['output']>;
  blog?: Maybe<Scalars['String']['output']>;
  coingecko?: Maybe<Scalars['String']['output']>;
  coinmarketcap?: Maybe<Scalars['String']['output']>;
  discord?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  facebook?: Maybe<Scalars['String']['output']>;
  github?: Maybe<Scalars['String']['output']>;
  instagram?: Maybe<Scalars['String']['output']>;
  linkedin?: Maybe<Scalars['String']['output']>;
  reddit?: Maybe<Scalars['String']['output']>;
  slack?: Maybe<Scalars['String']['output']>;
  telegram?: Maybe<Scalars['String']['output']>;
  twitch?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  wechat?: Maybe<Scalars['String']['output']>;
  whitepaper?: Maybe<Scalars['String']['output']>;
  youtube?: Maybe<Scalars['String']['output']>;
};

/** docs: hide */
export type SolanaLatestBlockResponse = {
  __typename?: 'SolanaLatestBlockResponse';
  blockHash: Scalars['String']['output'];
  blockHeight: Scalars['Int']['output'];
};

/** docs: hide */
export type SolanaNetworkConfig = NetworkConfigBase & {
  __typename?: 'SolanaNetworkConfig';
  baseTokenAddress: Scalars['String']['output'];
  baseTokenSymbol: Scalars['String']['output'];
  color?: Maybe<Scalars['String']['output']>;
  defaultPairAddress: Scalars['String']['output'];
  defaultPairQuoteToken: QuoteToken;
  enabled: Scalars['Boolean']['output'];
  explorer: ExplorerConfig;
  id: Scalars['ID']['output'];
  mainnet: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  networkIconUrl: Scalars['String']['output'];
  networkId: Scalars['Int']['output'];
  networkName: Scalars['String']['output'];
  networkShortName: Scalars['String']['output'];
  networkType: NetworkConfigType;
  newTokensEnabled?: Maybe<Scalars['Boolean']['output']>;
  pricing: Array<NetworkPriceConfig>;
  rpcs: Array<SolanaRpcConfig>;
  stableCoinAddresses?: Maybe<Array<Scalars['String']['output']>>;
  wrappedBaseTokenSymbol: Scalars['String']['output'];
};

/** docs: hide */
export type SolanaRpcConfig = {
  __typename?: 'SolanaRpcConfig';
  geyserApiKey?: Maybe<Scalars['String']['output']>;
  geyserUrl?: Maybe<Scalars['String']['output']>;
  public: Scalars['Boolean']['output'];
  url: Scalars['String']['output'];
};

/** docs: hide */
export type SolanaRpcConfigInput = {
  geyserApiKey?: InputMaybe<Scalars['String']['input']>;
  geyserUrl?: InputMaybe<Scalars['String']['input']>;
  public: Scalars['Boolean']['input'];
  url: Scalars['String']['input'];
};

/** docs: hide */
export type SolanaTransactionConfirmationResponse = {
  __typename?: 'SolanaTransactionConfirmationResponse';
  confirmationStatus?: Maybe<Scalars['String']['output']>;
  confirmations?: Maybe<Scalars['Int']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  slot: Scalars['Int']['output'];
};

export enum SparklineAttribute {
  Price = 'PRICE'
}

export type SparklineValue = {
  __typename?: 'SparklineValue';
  timestamp: Scalars['Int']['output'];
  value: Scalars['Float']['output'];
};

export type StarknetNetworkConfig = NetworkConfigBase & {
  __typename?: 'StarknetNetworkConfig';
  baseTokenAddress: Scalars['String']['output'];
  baseTokenSymbol: Scalars['String']['output'];
  color?: Maybe<Scalars['String']['output']>;
  defaultPairAddress: Scalars['String']['output'];
  defaultPairQuoteToken: QuoteToken;
  enabled: Scalars['Boolean']['output'];
  explorer: ExplorerConfig;
  id: Scalars['ID']['output'];
  mainnet: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  networkIconUrl: Scalars['String']['output'];
  networkId: Scalars['Int']['output'];
  networkName: Scalars['String']['output'];
  networkShortName: Scalars['String']['output'];
  networkType: NetworkConfigType;
  newTokensEnabled?: Maybe<Scalars['Boolean']['output']>;
  pricing: Array<NetworkPriceConfig>;
  rpcs: Array<StarknetRpcConfig>;
  stableCoinAddresses?: Maybe<Array<Scalars['String']['output']>>;
  wrappedBaseTokenSymbol: Scalars['String']['output'];
};

/** docs: hide */
export type StarknetRpcConfig = {
  __typename?: 'StarknetRpcConfig';
  url: Scalars['String']['output'];
};

/** docs: hide */
export type StarknetRpcConfigInput = {
  url: Scalars['String']['input'];
};

/** Filter for NFT stats. */
export type StatsFilter = {
  /** The percent change between the `current` and `previous`. */
  change?: InputMaybe<NumberFilter>;
  /** The total value for the current window. */
  current?: InputMaybe<NumberFilter>;
  /** The total value for the previous window. */
  previous?: InputMaybe<NumberFilter>;
};

/** docs: hide */
export type Strategy = {
  __typename?: 'Strategy';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  orderParams: Array<StrategyOrderParam>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** docs: hide */
export type StrategyOrderParam = {
  __typename?: 'StrategyOrderParam';
  amountRatio: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  strategyId: Scalars['Int']['output'];
  triggerDirection: Scalars['String']['output'];
  triggerPercentChange: Scalars['Float']['output'];
};

/** String contains condition. */
export type StringContainsCondition = {
  __typename?: 'StringContainsCondition';
  /** A list of substrings included within the string. */
  contains?: Maybe<Array<Scalars['String']['output']>>;
  /** A list of substrings not included within the string. */
  notContains?: Maybe<Array<Scalars['String']['output']>>;
};

/** Input for string contains condition. */
export type StringContainsConditionInput = {
  /** A list of substrings to be included within the string. */
  contains?: InputMaybe<Array<Scalars['String']['input']>>;
  /** A list of substrings not to be included within the string. */
  notContains?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** String equals condition. */
export type StringEqualsCondition = {
  __typename?: 'StringEqualsCondition';
  /** The string to equal. */
  eq: Scalars['String']['output'];
};

/** Input for string equals condition. */
export type StringEqualsConditionInput = {
  /** The string to equal. */
  eq: Scalars['String']['input'];
};

/** Input type of `StringFilter`. */
export type StringFilter = {
  /** Greater than. */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to. */
  gte?: InputMaybe<Scalars['String']['input']>;
  /** Less than. */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to. */
  lte?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Live-streamed balance updates for a given wallet. */
  onBalanceUpdated: Balance;
  /** Live-streamed bar chart data to track price changes over time. */
  onBarsUpdated?: Maybe<OnBarsUpdatedResponse>;
  /** Live-streamed bucketed stats for a given token within a pair. */
  onDetailedStatsUpdated?: Maybe<DetailedStats>;
  /** Live-streamed event labels for a token. */
  onEventLabelCreated?: Maybe<EventLabel>;
  /** Live-streamed transactions for a token. */
  onEventsCreated?: Maybe<AddEventsOutput>;
  /** Live-streamed list of wallets that hold a given token. Also has the unique count of holders for that token. */
  onHoldersUpdated?: Maybe<HoldersUpdate>;
  /** Live-streamed updates for newly listed pairs. */
  onLatestPairUpdated?: Maybe<LatestPair>;
  onLatestTokens?: Maybe<LatestToken>;
  onLaunchpadTokenEvent: LaunchpadTokenEventOutput;
  onLaunchpadTokenEventBatch: Array<LaunchpadTokenEventOutput>;
  /** Live-streamed transactions for an NFT asset. */
  onNftAssetsCreated?: Maybe<NftAsset>;
  /** Live-streamed transactions for an NFT collection. */
  onNftEventsCreated?: Maybe<AddNftEventsOutput>;
  /** docs: hide */
  onNftHoldersUpdated?: Maybe<NftHoldersUpdate>;
  /** Live streamed NFT pool events for a given pool address or collection address. */
  onNftPoolEventsCreated?: Maybe<AddNftPoolEventsOutput>;
  /** docs: hide */
  onNotableHolderUpdated?: Maybe<Balance>;
  /** docs: hide */
  onNotableWalletEventCreated: NotableWalletEvent;
  /** docs: hide */
  onOrderConfirmed: OrderConfirmedMessage;
  /** docs: hide */
  onOrderUpdated: Order;
  /** Live-streamed stat updates for a given token within a pair. */
  onPairMetadataUpdated?: Maybe<PairMetadata>;
  /** Live-streamed price updates for a token. */
  onPriceUpdated?: Maybe<Price>;
  /** Live-streamed price updates for multiple tokens. */
  onPricesUpdated: Price;
  /** docs: hide */
  onRawEventsCreated: Array<RawEvent>;
  onSimulateTokenContract: SimulateTokenContractResult;
  /** Live-streamed bar chart data to track price changes over time for a token. */
  onTokenBarsUpdated?: Maybe<OnTokenBarsUpdatedResponse>;
  /** Live-streamed events for a given token across all it's pools */
  onTokenEventsCreated: AddTokenEventsOutput;
  /** Live-streamed token lifecycle events (mints and burns). */
  onTokenLifecycleEventsCreated: AddTokenLifecycleEventsOutput;
  /** docs: hide */
  onTrackedWalletEventsCreated: AddTrackedWalletEventsOutput;
  /** Unconfirmed live-streamed bar chart data to track price changes over time. (Solana only) */
  onUnconfirmedBarsUpdated?: Maybe<OnUnconfirmedBarsUpdated>;
  /** Live-streamed unconfirmed transactions for a token. (Solana only) */
  onUnconfirmedEventsCreated?: Maybe<AddUnconfirmedEventsOutput>;
};


export type SubscriptionOnBalanceUpdatedArgs = {
  walletAddress: Scalars['String']['input'];
};


export type SubscriptionOnBarsUpdatedArgs = {
  pairId?: InputMaybe<Scalars['String']['input']>;
  quoteToken?: InputMaybe<QuoteToken>;
  statsType?: InputMaybe<TokenPairStatisticsType>;
};


export type SubscriptionOnDetailedStatsUpdatedArgs = {
  pairId?: InputMaybe<Scalars['String']['input']>;
  statsType?: InputMaybe<TokenPairStatisticsType>;
  tokenOfInterest?: InputMaybe<TokenOfInterest>;
};


export type SubscriptionOnEventLabelCreatedArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnEventsCreatedArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  networkId?: InputMaybe<Scalars['Int']['input']>;
  quoteToken?: InputMaybe<QuoteToken>;
};


export type SubscriptionOnHoldersUpdatedArgs = {
  tokenId: Scalars['String']['input'];
};


export type SubscriptionOnLatestPairUpdatedArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  networkId?: InputMaybe<Scalars['Int']['input']>;
};


export type SubscriptionOnLatestTokensArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  networkId?: InputMaybe<Scalars['Int']['input']>;
  tokenAddress?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnLaunchpadTokenEventArgs = {
  input?: InputMaybe<OnLaunchpadTokenEventInput>;
};


export type SubscriptionOnLaunchpadTokenEventBatchArgs = {
  input?: InputMaybe<OnLaunchpadTokenEventBatchInput>;
};


export type SubscriptionOnNftAssetsCreatedArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  networkId?: InputMaybe<Scalars['Int']['input']>;
  tokenId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnNftEventsCreatedArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  networkId?: InputMaybe<Scalars['Int']['input']>;
};


export type SubscriptionOnNftHoldersUpdatedArgs = {
  collectionAddress: Scalars['String']['input'];
  networkId: Scalars['Int']['input'];
};


export type SubscriptionOnNftPoolEventsCreatedArgs = {
  collectionAddress?: InputMaybe<Scalars['String']['input']>;
  exchangeAddress?: InputMaybe<Scalars['String']['input']>;
  networkId?: InputMaybe<Scalars['Int']['input']>;
  poolAddress?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnNotableHolderUpdatedArgs = {
  input?: InputMaybe<OnNotableHolderUpdatedInput>;
};


export type SubscriptionOnNotableWalletEventCreatedArgs = {
  input?: InputMaybe<NotableWalletEventSubscriptionInput>;
};


export type SubscriptionOnPairMetadataUpdatedArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  quoteToken?: InputMaybe<QuoteToken>;
  statsType?: InputMaybe<TokenPairStatisticsType>;
};


export type SubscriptionOnPriceUpdatedArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  networkId?: InputMaybe<Scalars['Int']['input']>;
  sourcePairAddress?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnPricesUpdatedArgs = {
  input: Array<OnPricesUpdatedInput>;
};


export type SubscriptionOnRawEventsCreatedArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnSimulateTokenContractArgs = {
  contractAddress?: InputMaybe<Scalars['String']['input']>;
  networkId: Scalars['Int']['input'];
  simulationId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnTokenBarsUpdatedArgs = {
  networkId?: InputMaybe<Scalars['Int']['input']>;
  statsType?: InputMaybe<TokenPairStatisticsType>;
  tokenId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnTokenEventsCreatedArgs = {
  input: OnTokenEventsCreatedInput;
};


export type SubscriptionOnTokenLifecycleEventsCreatedArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  networkId?: InputMaybe<Scalars['Int']['input']>;
};


export type SubscriptionOnTrackedWalletEventsCreatedArgs = {
  eventType?: InputMaybe<Array<TrackedWalletEventType>>;
  userId: Scalars['String']['input'];
};


export type SubscriptionOnUnconfirmedBarsUpdatedArgs = {
  pairId?: InputMaybe<Scalars['String']['input']>;
  quoteToken?: InputMaybe<QuoteToken>;
};


export type SubscriptionOnUnconfirmedEventsCreatedArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  quoteToken?: InputMaybe<QuoteToken>;
};

export type SuiNetworkConfig = NetworkConfigBase & {
  __typename?: 'SuiNetworkConfig';
  baseTokenAddress: Scalars['String']['output'];
  baseTokenSymbol: Scalars['String']['output'];
  color?: Maybe<Scalars['String']['output']>;
  defaultPairAddress: Scalars['String']['output'];
  defaultPairQuoteToken: QuoteToken;
  enabled: Scalars['Boolean']['output'];
  explorer: ExplorerConfig;
  id: Scalars['ID']['output'];
  mainnet: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  networkIconUrl: Scalars['String']['output'];
  networkId: Scalars['Int']['output'];
  networkName: Scalars['String']['output'];
  networkShortName: Scalars['String']['output'];
  networkType: NetworkConfigType;
  newTokensEnabled?: Maybe<Scalars['Boolean']['output']>;
  pricing: Array<NetworkPriceConfig>;
  rpcs: Array<SuiRpcConfig>;
  stableCoinAddresses?: Maybe<Array<Scalars['String']['output']>>;
  wrappedBaseTokenSymbol: Scalars['String']['output'];
};

/** docs: hide */
export type SuiRpcConfig = {
  __typename?: 'SuiRpcConfig';
  url: Scalars['String']['output'];
};

/** docs: hide */
export type SuiRpcConfigInput = {
  url: Scalars['String']['input'];
};

/** Event data for a token swap event. */
export type SwapEventData = {
  __typename?: 'SwapEventData';
  /** The amount of `token0` involved in the swap. Only applicable for UniswapV3 events. */
  amount0?: Maybe<Scalars['String']['output']>;
  /** The amount of `token0` that was sold. Only applicable for UniswapV2 events. */
  amount0In?: Maybe<Scalars['String']['output']>;
  /** The amount of `token0` that was bought. Only applicable for UniswapV2 events. */
  amount0Out?: Maybe<Scalars['String']['output']>;
  /** The amount of `token1` involved in the swap. Only applicable for UniswapV3 events. */
  amount1?: Maybe<Scalars['String']['output']>;
  /** The amount of `token1` that was sold. Only applicable for UniswapV2 events. */
  amount1In?: Maybe<Scalars['String']['output']>;
  /** The amount of `token1` that was bought. Only applicable for UniswapV2 events. */
  amount1Out?: Maybe<Scalars['String']['output']>;
  /** The amount of `quoteToken` involved in the swap. For example, if `quoteToken` is USDC for a USDC/WETH pair, `amountNonLiquidityToken` would be the amount of USDC involved in the swap. */
  amountNonLiquidityToken?: Maybe<Scalars['String']['output']>;
  /** The price per `quoteToken` at the time of the swap in the network's base token. For example, if `quoteToken` is USDC for a USDC/WETH pair on ETH network, `priceBaseToken` would the price of USDC in ETH. */
  priceBaseToken?: Maybe<Scalars['String']['output']>;
  /** The total amount of `quoteToken` involved in the swap in the network's base token (`amountNonLiquidityToken` x `priceBaseToken`). */
  priceBaseTokenTotal?: Maybe<Scalars['String']['output']>;
  /** The price per `quoteToken` at the time of the swap in USD. For example, if `quoteToken` is USDC for a USDC/WETH pair on ETH network, `priceBaseToken` would the price of USDC in USD ($1.00). */
  priceUsd?: Maybe<Scalars['String']['output']>;
  /** The total amount of `quoteToken` involved in the swap in USD (`amountNonLiquidityToken` x `priceUsd`). */
  priceUsdTotal?: Maybe<Scalars['String']['output']>;
  /** The tick index that the swap occurred in. Only applicable for UniswapV3 events. */
  tick?: Maybe<Scalars['String']['output']>;
  /** The type of token event, `Swap`. */
  type: EventType;
};

/** Event data for swapping an NFT into a pool. */
export type SwapNftInPoolEventData = {
  __typename?: 'SwapNftInPoolEventData';
  /** The total value of all NFTs involved in the swap in the pool's liquidity token. */
  amountT: Scalars['String']['output'];
  /** The ratio of the transaction token to the network's base token. */
  nbtRatio: Scalars['String']['output'];
  /** The updated price at which the pool is willing to buy an NFT in the pool's liquidity token. */
  newBuyPriceT: Scalars['String']['output'];
  /** The updated delta used in the bonding curve. */
  newDelta: Scalars['String']['output'];
  /** The updated price at which the pool is willing to sell an NFT in the pool's liquidity token. */
  newSellPriceT: Scalars['String']['output'];
  /** The updated spot price in the pool's liquidity token. */
  newSpotPriceT: Scalars['String']['output'];
  /** The number of NFTs in the contract after the block has processed. */
  nftTokenBalance: Scalars['String']['output'];
  /** Metadata for each of the NFTs involved in the swap. */
  nftsTransfered?: Maybe<Array<Maybe<NftPoolEventNftTransfer>>>;
  /** The fee for the pool in the pool's liquidity token. */
  poolFeeT: Scalars['String']['output'];
  /** The protocol fee in the pool's liquidity token. */
  protocolFeeT: Scalars['String']['output'];
  /** The amount of token in the contract after the block has processed in the pool's liquidity token. */
  tokenBalanceT: Scalars['String']['output'];
  /** The ID of the token involved in the swap (`address`:`networkId`). */
  tokenId: Scalars['String']['output'];
  /** The type of NFT pool event, `SWAP_NFT_IN_POOL`. */
  type: NftPoolEventType;
  /** The ratio of the transaction token to USD. */
  usdRatio: Scalars['String']['output'];
};

/** Event data for swapping an NFT into a pool. */
export type SwapNftInPoolEventDataV2 = {
  __typename?: 'SwapNftInPoolEventDataV2';
  /** The total value of all NFTs involved in the swap in the pool's liquidity token. */
  amountT: Scalars['String']['output'];
  /** The ratio of the transaction token to the network's base token. */
  nbtRatio: Scalars['String']['output'];
  /** The updated price at which the pool is willing to buy an NFT in the pool's liquidity token. */
  newBuyPriceT: Scalars['String']['output'];
  /** The updated delta used in the bonding curve. */
  newDelta: Scalars['String']['output'];
  /** The updated price at which the pool is willing to sell an NFT in the pool's liquidity token. */
  newSellPriceT: Scalars['String']['output'];
  /** The updated spot price in the pool's liquidity token. */
  newSpotPriceT: Scalars['String']['output'];
  /** *New Param*: The list of NFT assets withdrawn. More extensive info than nftTokenIds. */
  nftAssets?: Maybe<Array<Maybe<NftAsset>>>;
  /** Metadata for each of the NFTs involved in the swap. */
  nftsTransfered?: Maybe<Array<Maybe<NftPoolEventNftTransferV2>>>;
  /** The fee for the pool in the pool's liquidity token. */
  poolFeeT: Scalars['String']['output'];
  /** The protocol fee in the pool's liquidity token. */
  protocolFeeT: Scalars['String']['output'];
  /** The amount of token in the contract after the block has processed in the pool's liquidity token. */
  tokenBalanceT: Scalars['String']['output'];
  /** The ID of the token involved in the swap (`address`:`networkId`). */
  tokenId: Scalars['String']['output'];
  /** The type of NFT pool event, `SWAP_NFT_IN_POOL`. */
  type: NftPoolEventType;
  /** The ratio of the transaction token to USD. */
  usdRatio: Scalars['String']['output'];
};

/** Event data for swapping an NFT out of a pool. */
export type SwapNftOutPoolEventData = {
  __typename?: 'SwapNftOutPoolEventData';
  /** The total value of all NFTs involved in the swap in the pool's liquidity token. */
  amountT: Scalars['String']['output'];
  /** The ratio of the transaction token to the network's base token. */
  nbtRatio: Scalars['String']['output'];
  /** The updated price at which the pool is willing to buy an NFT in the pool's liquidity token. */
  newBuyPriceT: Scalars['String']['output'];
  /** The updated delta used in the bonding curve. */
  newDelta: Scalars['String']['output'];
  /** The updated price at which the pool is willing to sell an NFT in the pool's liquidity token. */
  newSellPriceT: Scalars['String']['output'];
  /** The updated spot price in the pool's liquidity token. */
  newSpotPriceT: Scalars['String']['output'];
  /** The number of NFTs in the contract after the block has processed. */
  nftTokenBalance: Scalars['String']['output'];
  /** Metadata for each of the NFTs involved in the swap. */
  nftsTransfered?: Maybe<Array<Maybe<NftPoolEventNftTransfer>>>;
  /** The fee for the pool in the pool's liquidity token. */
  poolFeeT: Scalars['String']['output'];
  /** The protocol fee in the pool's liquidity token. */
  protocolFeeT: Scalars['String']['output'];
  /** The amount of token in the contract after the block has processed in the pool's liquidity token. */
  tokenBalanceT: Scalars['String']['output'];
  /** The ID of the token involved in the swap (`address`:`networkId`). */
  tokenId: Scalars['String']['output'];
  /** The type of NFT pool event, `SWAP_NFT_OUT_POOL`. */
  type: NftPoolEventType;
  /** The ratio of the transaction token to USD. */
  usdRatio: Scalars['String']['output'];
};

/** Event data for swapping an NFT out of a pool. */
export type SwapNftOutPoolEventDataV2 = {
  __typename?: 'SwapNftOutPoolEventDataV2';
  /** The total value of all NFTs involved in the swap in the pool's liquidity token. */
  amountT: Scalars['String']['output'];
  /** The ratio of the transaction token to the network's base token. */
  nbtRatio: Scalars['String']['output'];
  /** The updated price at which the pool is willing to buy an NFT in the pool's liquidity token. */
  newBuyPriceT: Scalars['String']['output'];
  /** The updated delta used in the bonding curve. */
  newDelta: Scalars['String']['output'];
  /** The updated price at which the pool is willing to sell an NFT in the pool's liquidity token. */
  newSellPriceT: Scalars['String']['output'];
  /** The updated spot price in the pool's liquidity token. */
  newSpotPriceT: Scalars['String']['output'];
  /** *New Param*: The list of NFT assets withdrawn. More extensive info than nftTokenIds. */
  nftAssets?: Maybe<Array<Maybe<NftAsset>>>;
  /** Metadata for each of the NFTs involved in the swap. */
  nftsTransfered?: Maybe<Array<Maybe<NftPoolEventNftTransferV2>>>;
  /** The fee for the pool in the pool's liquidity token. */
  poolFeeT: Scalars['String']['output'];
  /** The protocol fee in the pool's liquidity token. */
  protocolFeeT: Scalars['String']['output'];
  /** The amount of token in the contract after the block has processed in the pool's liquidity token. */
  tokenBalanceT: Scalars['String']['output'];
  /** The ID of the token involved in the swap (`address`:`networkId`). */
  tokenId: Scalars['String']['output'];
  /** The type of NFT pool event, `SWAP_NFT_OUT_POOL`. */
  type: NftPoolEventType;
  /** The ratio of the transaction token to USD. */
  usdRatio: Scalars['String']['output'];
};

/** Response returned by `getSymbol`. */
export type SymbolResponse = {
  __typename?: 'SymbolResponse';
  /** The currencyCode argument passed in (`TOKEN` or `USD`). */
  currency_code: Scalars['String']['output'];
  /** The trading pair. If currencyCode is TOKEN, the base token will be used, otherwise USD. */
  description: Scalars['String']['output'];
  /** The symbols of the pair. */
  name: Scalars['String']['output'];
  /** The base token symbol. */
  original_currency_code: Scalars['String']['output'];
  /** 10^n, where n is the number of decimal places the price has. Max 16. Used for charting. */
  pricescale: Scalars['Float']['output'];
  /** The list of time frames supported for the symbol in other charting endpoints, eg. getBars. */
  supported_resolutions: Array<Scalars['String']['output']>;
  /** The ID of the pair (`address:networkId`). */
  ticker: Scalars['String']['output'];
};

export enum SymbolType {
  Pool = 'POOL',
  Token = 'TOKEN'
}

/** Token burn event data. */
export type TokenBurnEventData = {
  __typename?: 'TokenBurnEventData';
  /** The amount of tokens burned. */
  amount: Scalars['String']['output'];
  /** The new circulating supply for the token. */
  circulatingSupply?: Maybe<Scalars['String']['output']>;
  /** The new total supply for the token. */
  totalSupply?: Maybe<Scalars['String']['output']>;
};

/** Response returned by `filterTokens`. */
export type TokenFilterConnection = {
  __typename?: 'TokenFilterConnection';
  /** The number of tokens returned. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Where in the list the server started when returning items. */
  page?: Maybe<Scalars['Int']['output']>;
  /** The list of tokens matching the filter parameters. */
  results?: Maybe<Array<Maybe<TokenFilterResult>>>;
};

/** A token matching a set of filter parameters. */
export type TokenFilterResult = {
  __typename?: 'TokenFilterResult';
  /** @deprecated Age isn't supported - use createdAt instead */
  age?: Maybe<Scalars['Int']['output']>;
  /** The number of buys in the past hour. */
  buyCount1?: Maybe<Scalars['Int']['output']>;
  /** The number of buys in the past 4 hours. */
  buyCount4?: Maybe<Scalars['Int']['output']>;
  /** The number of buys in the past 5 minutes. */
  buyCount5m?: Maybe<Scalars['Int']['output']>;
  /** The number of buys in the past 12 hours. */
  buyCount12?: Maybe<Scalars['Int']['output']>;
  /** The number of buys in the past 24 hours. */
  buyCount24?: Maybe<Scalars['Int']['output']>;
  /** The percent price change in the past hour. Decimal format. */
  change1?: Maybe<Scalars['String']['output']>;
  /** The percent price change in the past 4 hours. Decimal format. */
  change4?: Maybe<Scalars['String']['output']>;
  /** The percent price change in the past 5 minutes. Decimal format. */
  change5m?: Maybe<Scalars['String']['output']>;
  /** The percent price change in the past 12 hours. Decimal format. */
  change12?: Maybe<Scalars['String']['output']>;
  /** The percent price change in the past 24 hours. Decimal format. */
  change24?: Maybe<Scalars['String']['output']>;
  /** The unix timestamp for the creation of the token's first pair. */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The exchanges the token is listed on. */
  exchanges?: Maybe<Array<Maybe<Exchange>>>;
  /** @deprecated FDV isn't supported - use marketCap instead */
  fdv?: Maybe<Scalars['String']['output']>;
  /** The highest price in USD in the past hour. */
  high1?: Maybe<Scalars['String']['output']>;
  /** The highest price in USD in the past 4 hours. */
  high4?: Maybe<Scalars['String']['output']>;
  /** The highest price in USD in the past 5 minutes. */
  high5m?: Maybe<Scalars['String']['output']>;
  /** The highest price in USD in the past 12 hours. */
  high12?: Maybe<Scalars['String']['output']>;
  /** The highest price in USD in the past 24 hours. */
  high24?: Maybe<Scalars['String']['output']>;
  /** The number of different wallets holding the token. */
  holders?: Maybe<Scalars['Int']['output']>;
  /** Whether the token has been flagged as a scam. */
  isScam?: Maybe<Scalars['Boolean']['output']>;
  /** The unix timestamp for the token's last transaction. */
  lastTransaction?: Maybe<Scalars['Int']['output']>;
  /** Amount of liquidity in the token's top pair. */
  liquidity?: Maybe<Scalars['String']['output']>;
  /** The lowest price in USD in the past hour. */
  low1?: Maybe<Scalars['String']['output']>;
  /** The lowest price in USD in the past 4 hours. */
  low4?: Maybe<Scalars['String']['output']>;
  /** The lowest price in USD in the past 5 minutes. */
  low5m?: Maybe<Scalars['String']['output']>;
  /** The lowest price in USD in the past 12 hours. */
  low12?: Maybe<Scalars['String']['output']>;
  /** The lowest price in USD in the past 24 hours. */
  low24?: Maybe<Scalars['String']['output']>;
  /** The fully diluted market cap. For circulating market cap multiply `token { info { circulatingSupply } }` by `priceUSD`. */
  marketCap?: Maybe<Scalars['String']['output']>;
  /** docs: hide */
  notableHolderCount?: Maybe<Scalars['Int']['output']>;
  /** Metadata for the token's top pair. */
  pair?: Maybe<Pair>;
  /** The token price in USD. */
  priceUSD?: Maybe<Scalars['String']['output']>;
  /** The token of interest. Can be `token0` or `token1`. */
  quoteToken?: Maybe<Scalars['String']['output']>;
  /** The number of sells in the past hour. */
  sellCount1?: Maybe<Scalars['Int']['output']>;
  /** The number of sells in the past 4 hours. */
  sellCount4?: Maybe<Scalars['Int']['output']>;
  /** The number of sells in the past 5 minutes. */
  sellCount5m?: Maybe<Scalars['Int']['output']>;
  /** The number of sells in the past 12 hours. */
  sellCount12?: Maybe<Scalars['Int']['output']>;
  /** The number of sells in the past 24 hours. */
  sellCount24?: Maybe<Scalars['Int']['output']>;
  /** The percentage of wallets that are less than 1d old that have traded in the last 24h */
  swapPct1dOldWallet?: Maybe<Scalars['String']['output']>;
  /** The percentage of wallets that are less than 7d old that have traded in the last 24h */
  swapPct7dOldWallet?: Maybe<Scalars['String']['output']>;
  /** Metadata for the token. */
  token?: Maybe<EnhancedToken>;
  /** The number of transactions in the past hour. */
  txnCount1?: Maybe<Scalars['Int']['output']>;
  /** The number of transactions in the past 4 hours. */
  txnCount4?: Maybe<Scalars['Int']['output']>;
  /** The number of transactions in the past 5 minutes. */
  txnCount5m?: Maybe<Scalars['Int']['output']>;
  /** The number of transactions in the past 12 hours. */
  txnCount12?: Maybe<Scalars['Int']['output']>;
  /** The number of transactions in the past 24 hours. */
  txnCount24?: Maybe<Scalars['Int']['output']>;
  /** The unique number of buys in the past hour. */
  uniqueBuys1?: Maybe<Scalars['Int']['output']>;
  /** The unique number of buys in the past 4 hours. */
  uniqueBuys4?: Maybe<Scalars['Int']['output']>;
  /** The unique number of buys in the past 5 minutes. */
  uniqueBuys5m?: Maybe<Scalars['Int']['output']>;
  /** The unique number of buys in the past 12 hours. */
  uniqueBuys12?: Maybe<Scalars['Int']['output']>;
  /** The unique number of buys in the past 24 hours. */
  uniqueBuys24?: Maybe<Scalars['Int']['output']>;
  /** The unique number of sells in the past hour. */
  uniqueSells1?: Maybe<Scalars['Int']['output']>;
  /** The unique number of sells in the past 4 hours. */
  uniqueSells4?: Maybe<Scalars['Int']['output']>;
  /** The unique number of sells in the past 5 minutes. */
  uniqueSells5m?: Maybe<Scalars['Int']['output']>;
  /** The unique number of sells in the past 12 hours. */
  uniqueSells12?: Maybe<Scalars['Int']['output']>;
  /** The unique number of sells in the past 24 hours. */
  uniqueSells24?: Maybe<Scalars['Int']['output']>;
  /** The unique number of transactions in the past hour. */
  uniqueTransactions1?: Maybe<Scalars['Int']['output']>;
  /** The unique number of transactions in the past 4 hours. */
  uniqueTransactions4?: Maybe<Scalars['Int']['output']>;
  /** The unique number of transactions in the past 5 minutes. */
  uniqueTransactions5m?: Maybe<Scalars['Int']['output']>;
  /** The unique number of transactions in the past 12 hours. */
  uniqueTransactions12?: Maybe<Scalars['Int']['output']>;
  /** The unique number of transactions in the past 24 hours. */
  uniqueTransactions24?: Maybe<Scalars['Int']['output']>;
  /** The trade volume in USD in the past hour. */
  volume1?: Maybe<Scalars['String']['output']>;
  /** The trade volume in USD in the past 4 hours. */
  volume4?: Maybe<Scalars['String']['output']>;
  /** The trade volume in USD in the past 5 minutes. */
  volume5m?: Maybe<Scalars['String']['output']>;
  /** The trade volume in USD in the past 12 hours. */
  volume12?: Maybe<Scalars['String']['output']>;
  /** The trade volume in USD in the past 24 hours. */
  volume24?: Maybe<Scalars['String']['output']>;
  /** The percent volume change in the past hour. Decimal format. */
  volumeChange1?: Maybe<Scalars['String']['output']>;
  /** The percent volume change in the past 4 hours. Decimal format. */
  volumeChange4?: Maybe<Scalars['String']['output']>;
  /** The percent volume change in the past 5 minutes. Decimal format. */
  volumeChange5m?: Maybe<Scalars['String']['output']>;
  /** The percent volume change in the past 12 hours. Decimal format. */
  volumeChange12?: Maybe<Scalars['String']['output']>;
  /** The percent volume change in the past 24 hours. Decimal format. */
  volumeChange24?: Maybe<Scalars['String']['output']>;
  /** The average age of the wallets that traded in the last 24h */
  walletAgeAvg?: Maybe<Scalars['String']['output']>;
  /** The standard deviation of age of the wallets that traded in the last 24h */
  walletAgeStd?: Maybe<Scalars['String']['output']>;
};

/** Input type of `TokenFilters`. */
export type TokenFilters = {
  /** @deprecated Age isn't supported - use createdAt instead */
  age?: InputMaybe<NumberFilter>;
  /** The number of buys in the past hour. */
  buyCount1?: InputMaybe<NumberFilter>;
  /** The number of buys in the past 4 hours. */
  buyCount4?: InputMaybe<NumberFilter>;
  /** The number of buys in the past 5 minutes. */
  buyCount5m?: InputMaybe<NumberFilter>;
  /** The number of buys in the past 12 hours. */
  buyCount12?: InputMaybe<NumberFilter>;
  /** The number of buys in the past 24 hours. */
  buyCount24?: InputMaybe<NumberFilter>;
  /** The percent price change in the past hour. Decimal format. */
  change1?: InputMaybe<NumberFilter>;
  /** The percent price change in the past 4 hours. Decimal format. */
  change4?: InputMaybe<NumberFilter>;
  /** The percent price change in the past 5 minutes. Decimal format. */
  change5m?: InputMaybe<NumberFilter>;
  /** The percent price change in the past 12 hours. Decimal format. */
  change12?: InputMaybe<NumberFilter>;
  /** The percent price change in the past 24 hours. Decimal format. */
  change24?: InputMaybe<NumberFilter>;
  /** The unix timestamp for the creation of the token's first pair. */
  createdAt?: InputMaybe<NumberFilter>;
  /** The address of the creator of the token */
  creatorAddress?: InputMaybe<Scalars['String']['input']>;
  /** The list of exchange contract addresses to filter by. */
  exchangeAddress?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The list of exchange contract IDs to filter by. Applied in conjunction with `network` filter using an OR condition. When used together, the query returns results that match either the specified exchanges or the specified network. */
  exchangeId?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** @deprecated FDV isn't supported - use marketCap instead */
  fdv?: InputMaybe<NumberFilter>;
  /** The token in freezable */
  freezable?: InputMaybe<Scalars['Boolean']['input']>;
  /** The highest price in USD in the past hour. */
  high1?: InputMaybe<NumberFilter>;
  /** The highest price in USD in the past 4 hours. */
  high4?: InputMaybe<NumberFilter>;
  /** The highest price in USD in the past 5 minutes. */
  high5m?: InputMaybe<NumberFilter>;
  /** The highest price in USD in the past 12 hours. */
  high12?: InputMaybe<NumberFilter>;
  /** The highest price in USD in the past 24 hours. */
  high24?: InputMaybe<NumberFilter>;
  /** The number of different wallets holding the token. */
  holders?: InputMaybe<NumberFilter>;
  /** Whether to include tokens that have been flagged as scams. Default: false */
  includeScams?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to filter for tokens on testnet networks. Use `true` for testnet tokens only, `false` for mainnet tokens only and `undefined` (default) for both. */
  isTestnet?: InputMaybe<Scalars['Boolean']['input']>;
  /** Only include verified tokens */
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  /** The unix timestamp for the token's last transaction. */
  lastTransaction?: InputMaybe<NumberFilter>;
  /** Indicates if the launchpad is completed */
  launchpadCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  /** The timestamp when the launchpad was completed */
  launchpadCompletedAt?: InputMaybe<NumberFilter>;
  /** The graduation percentage */
  launchpadGraduationPercent?: InputMaybe<NumberFilter>;
  /** Indicates if the launchpad has migrated */
  launchpadMigrated?: InputMaybe<Scalars['Boolean']['input']>;
  /** The timestamp when the launchpad was migrated */
  launchpadMigratedAt?: InputMaybe<NumberFilter>;
  /** The launchpad protocol */
  launchpadProtocol?: InputMaybe<Scalars['String']['input']>;
  /** The amount of liquidity in the token's top pair. */
  liquidity?: InputMaybe<NumberFilter>;
  /** The lowest price in USD in the past hour. */
  low1?: InputMaybe<NumberFilter>;
  /** The lowest price in USD in the past 4 hours. */
  low4?: InputMaybe<NumberFilter>;
  /** The lowest price in USD in the past 5 minutes. */
  low5m?: InputMaybe<NumberFilter>;
  /** The lowest price in USD in the past 12 hours. */
  low12?: InputMaybe<NumberFilter>;
  /** The lowest price in USD in the past 24 hours. */
  low24?: InputMaybe<NumberFilter>;
  /** The market cap of circulating supply. */
  marketCap?: InputMaybe<NumberFilter>;
  /** The token in mintable */
  mintable?: InputMaybe<Scalars['Boolean']['input']>;
  /** The list of network IDs to filter by. Applied in conjunction with `exchangeId` filter using an OR condition. When used together, the query returns results that match either the specified exchanges or the specified network. */
  network?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** docs: hide */
  notableHolderCount?: InputMaybe<NumberFilter>;
  /** Filter potential Scams */
  potentialScam?: InputMaybe<Scalars['Boolean']['input']>;
  /** The token price in USD. */
  priceUSD?: InputMaybe<NumberFilter>;
  /** The number of sells in the past hour. */
  sellCount1?: InputMaybe<NumberFilter>;
  /** The number of sells in the past 4 hours. */
  sellCount4?: InputMaybe<NumberFilter>;
  /** The number of sells in the past 5 minutes. */
  sellCount5m?: InputMaybe<NumberFilter>;
  /** The number of sells in the past 12 hours. */
  sellCount12?: InputMaybe<NumberFilter>;
  /** The number of sells in the past 24 hours. */
  sellCount24?: InputMaybe<NumberFilter>;
  /** The percentage of wallets that are less than 1d old that have traded in the last 24h */
  swapPct1dOldWallet?: InputMaybe<NumberFilter>;
  /** The percentage of wallets that are less than 7d old that have traded in the last 24h */
  swapPct7dOldWallet?: InputMaybe<NumberFilter>;
  /** Whether to ignore pairs/tokens not relevant to trending */
  trendingIgnored?: InputMaybe<Scalars['Boolean']['input']>;
  /** The number of transactions in the past hour. */
  txnCount1?: InputMaybe<NumberFilter>;
  /** The number of transactions in the past 4 hours. */
  txnCount4?: InputMaybe<NumberFilter>;
  /** The number of transactions in the past 5 minutes. */
  txnCount5m?: InputMaybe<NumberFilter>;
  /** The number of transactions in the past 12 hours. */
  txnCount12?: InputMaybe<NumberFilter>;
  /** The number of transactions in the past 24 hours. */
  txnCount24?: InputMaybe<NumberFilter>;
  /** The unique number of buys in the past hour. */
  uniqueBuys1?: InputMaybe<NumberFilter>;
  /** The unique number of buys in the past 4 hours. */
  uniqueBuys4?: InputMaybe<NumberFilter>;
  /** The unique number of buys in the past 5 minutes. */
  uniqueBuys5m?: InputMaybe<NumberFilter>;
  /** The unique number of buys in the past 12 hours. */
  uniqueBuys12?: InputMaybe<NumberFilter>;
  /** The unique number of buys in the past 24 hours. */
  uniqueBuys24?: InputMaybe<NumberFilter>;
  /** The unique number of sells in the past hour. */
  uniqueSells1?: InputMaybe<NumberFilter>;
  /** The unique number of sells in the past 4 hours. */
  uniqueSells4?: InputMaybe<NumberFilter>;
  /** The unique number of sells in the past 5 minutes. */
  uniqueSells5m?: InputMaybe<NumberFilter>;
  /** The unique number of sells in the past 12 hours. */
  uniqueSells12?: InputMaybe<NumberFilter>;
  /** The unique number of sells in the past 24 hours. */
  uniqueSells24?: InputMaybe<NumberFilter>;
  /** The unique number of transactions in the past hour. */
  uniqueTransactions1?: InputMaybe<NumberFilter>;
  /** The unique number of transactions in the past 4 hours. */
  uniqueTransactions4?: InputMaybe<NumberFilter>;
  /** The unique number of transactions in the past 5 minutes. */
  uniqueTransactions5m?: InputMaybe<NumberFilter>;
  /** The unique number of transactions in the past 12 hours. */
  uniqueTransactions12?: InputMaybe<NumberFilter>;
  /** The unique number of transactions in the past 24 hours. */
  uniqueTransactions24?: InputMaybe<NumberFilter>;
  /** The trade volume in USD in the past hour. */
  volume1?: InputMaybe<NumberFilter>;
  /** The trade volume in USD in the past 4 hours. */
  volume4?: InputMaybe<NumberFilter>;
  /** The trade volume in USD in the past 5 minutes. */
  volume5m?: InputMaybe<NumberFilter>;
  /** The trade volume in USD in the past 12 hours. */
  volume12?: InputMaybe<NumberFilter>;
  /** The trade volume in USD in the past 24 hours. */
  volume24?: InputMaybe<NumberFilter>;
  /** The percent volume change in the past hour. Decimal format. */
  volumeChange1?: InputMaybe<NumberFilter>;
  /** The percent volume change in the past 4 hours. Decimal format. */
  volumeChange4?: InputMaybe<NumberFilter>;
  /** The percent volume change in the past 5 minutes. Decimal format. */
  volumeChange5m?: InputMaybe<NumberFilter>;
  /** The percent volume change in the past 12 hours. Decimal format. */
  volumeChange12?: InputMaybe<NumberFilter>;
  /** The percent volume change in the past 24 hours. Decimal format. */
  volumeChange24?: InputMaybe<NumberFilter>;
  /** The average age of the wallets that traded in the last 24h */
  walletAgeAvg?: InputMaybe<NumberFilter>;
  /** The standard deviation of age of the wallets that traded in the last 24h */
  walletAgeStd?: InputMaybe<NumberFilter>;
};

/** docs: hide */
export type TokenHistorySettings = {
  __typename?: 'TokenHistorySettings';
  expiry?: Maybe<Scalars['Int']['output']>;
  onlyFirstBuy: Scalars['Boolean']['output'];
  onlyFirstSell: Scalars['Boolean']['output'];
};

/** docs: hide */
export type TokenHistorySettingsInput = {
  expiry?: InputMaybe<Scalars['Int']['input']>;
  onlyFirstBuy: Scalars['Boolean']['input'];
  onlyFirstSell: Scalars['Boolean']['input'];
};

/** docs: hide */
export type TokenIconUpdateUrlResponse = {
  __typename?: 'TokenIconUpdateUrlResponse';
  url?: Maybe<Scalars['String']['output']>;
  viewUrl?: Maybe<Scalars['String']['output']>;
};

/** Metadata for a token. */
export type TokenInfo = {
  __typename?: 'TokenInfo';
  /** The contract address of the token. */
  address: Scalars['String']['output'];
  /** The circulating supply of the token. */
  circulatingSupply?: Maybe<Scalars['String']['output']>;
  /** The token ID on CoinMarketCap. */
  cmcId?: Maybe<Scalars['Int']['output']>;
  /** A description of the token. */
  description?: Maybe<Scalars['String']['output']>;
  /** Uniquely identifies the token. */
  id: Scalars['String']['output'];
  /** The token banner URL. */
  imageBannerUrl?: Maybe<Scalars['String']['output']>;
  /** The large token logo URL. */
  imageLargeUrl?: Maybe<Scalars['String']['output']>;
  /** The small token logo URL. */
  imageSmallUrl?: Maybe<Scalars['String']['output']>;
  /** The thumbnail token logo URL. */
  imageThumbUrl?: Maybe<Scalars['String']['output']>;
  /** Whether the token has been flagged as a scam. */
  isScam?: Maybe<Scalars['Boolean']['output']>;
  /** The token name. For example, `ApeCoin`. */
  name?: Maybe<Scalars['String']['output']>;
  /** The network ID the token is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The token symbol. For example, `APE`. */
  symbol: Scalars['String']['output'];
  /** The total supply of the token. */
  totalSupply?: Maybe<Scalars['String']['output']>;
};

/** Input type of `token` and `tokens`. */
export type TokenInput = {
  /** The contract address of the token. */
  address: Scalars['String']['input'];
  /** The network ID the token is deployed on. */
  networkId: Scalars['Int']['input'];
};

/** Events that occur during a token's lifecycle. Only Mint and Burn events right now. */
export type TokenLifecycleEvent = {
  __typename?: 'TokenLifecycleEvent';
  /** The hash of the block where the transaction occurred. */
  blockHash: Scalars['String']['output'];
  /** The block number for the transaction. */
  blockNumber: Scalars['Int']['output'];
  /** The event data, depends on the type of event */
  data: TokenLifecycleEventData;
  /** The type of event. */
  eventType: TokenLifecycleEventType;
  /** The ID of the event (`address:networkId`). For example, `0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2:1`. */
  id: Scalars['String']['output'];
  /** The index of the log in the block. */
  logIndex: Scalars['Int']['output'];
  /** The wallet address that performed the transaction. */
  maker?: Maybe<Scalars['String']['output']>;
  /** The network ID that the token is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The unix timestamp for when the transaction occurred. */
  timestamp: Scalars['Int']['output'];
  /** The token's contract address. */
  tokenAddress: Scalars['String']['output'];
  /** The unique hash for the transaction. */
  transactionHash: Scalars['String']['output'];
  /** The index of the transaction within the block. */
  transactionIndex: Scalars['Int']['output'];
};

/** Response returned by `tokenLifecycleEvents`. */
export type TokenLifecycleEventConnection = {
  __typename?: 'TokenLifecycleEventConnection';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** A list of transactions for a token's top pair. */
  items: Array<Maybe<TokenLifecycleEvent>>;
};

/** Event data for a token's lifecycle. */
export type TokenLifecycleEventData = TokenBurnEventData | TokenMintEventData;

/** Event types for a token. Mint or Burn. */
export enum TokenLifecycleEventType {
  Burn = 'BURN',
  Mint = 'MINT'
}

/** Input type of `tokenLifecycleEvents` query. */
export type TokenLifecycleEventsQueryInput = {
  /** The token contract address to filter by. */
  address: Scalars['String']['input'];
  /** The networkId to filter by. */
  networkId: Scalars['Int']['input'];
};

/** Token mint event data. */
export type TokenMintEventData = {
  __typename?: 'TokenMintEventData';
  /** The amount of tokens minted. */
  amount: Scalars['String']['output'];
  /** The new circulating supply for the token. */
  circulatingSupply?: Maybe<Scalars['String']['output']>;
  /** The new total supply for the token. */
  totalSupply?: Maybe<Scalars['String']['output']>;
};

/** The token of interest within a pair. Can be `token0` or `token1`. */
export enum TokenOfInterest {
  Token0 = 'token0',
  Token1 = 'token1'
}

/** Token pair event types. */
export enum TokenPairEventType {
  Burn = 'BURN',
  Buy = 'BUY',
  Collect = 'COLLECT',
  CollectProtocol = 'COLLECT_PROTOCOL',
  Mint = 'MINT',
  Sell = 'SELL',
  Swap = 'SWAP',
  Sync = 'SYNC'
}

/** Webhook condition for token pair event type. */
export type TokenPairEventTypeCondition = {
  __typename?: 'TokenPairEventTypeCondition';
  /** The list of token pair event types. */
  oneOf: Array<TokenPairEventType>;
};

/** Input for token pair event type condition. */
export type TokenPairEventTypeConditionInput = {
  /** The list of token event types to equal. */
  oneOf: Array<TokenPairEventType>;
};

/** Webhook conditions for a token pair event. */
export type TokenPairEventWebhookCondition = {
  __typename?: 'TokenPairEventWebhookCondition';
  /** The event type the webhook is listening for. */
  eventType?: Maybe<TokenPairEventTypeCondition>;
  /** The exchange contract address the webhook is listening for. */
  exchangeAddress?: Maybe<StringEqualsCondition>;
  /** The maker wallet address the webhook is listening for. */
  maker?: Maybe<StringEqualsCondition>;
  /** The list of network IDs the webhook is listening on. */
  networkId?: Maybe<OneOfNumberCondition>;
  /** The pair contract address the webhook is listening for. */
  pairAddress?: Maybe<StringEqualsCondition>;
  /** The swap values the webhook is listening for. */
  swapValue?: Maybe<ComparisonOperator>;
  /** The token contract address the webhook is listening for. */
  tokenAddress?: Maybe<StringEqualsCondition>;
};

/** Input conditions for a token pair event webhook. */
export type TokenPairEventWebhookConditionInput = {
  /** The token event type to listen for. */
  eventType?: InputMaybe<TokenPairEventTypeConditionInput>;
  /** The exchange contract address to listen for. */
  exchangeAddress?: InputMaybe<StringEqualsConditionInput>;
  /** The maker wallet address to listen for. */
  maker?: InputMaybe<StringEqualsConditionInput>;
  /** A list of network IDs to listen on. */
  networkId?: InputMaybe<OneOfNumberConditionInput>;
  /** The pair contract address to listen for. */
  pairAddress?: InputMaybe<StringEqualsConditionInput>;
  /** The swap values to listen for. */
  swapValue?: InputMaybe<ComparisonOperatorInput>;
  /** The token contract address to listen for. */
  tokenAddress?: InputMaybe<StringEqualsConditionInput>;
};

/** The type of statistics returned. Can be `FILTERED` or `UNFILTERED` */
export enum TokenPairStatisticsType {
  Filtered = 'FILTERED',
  Unfiltered = 'UNFILTERED'
}

/** Input type of `TokenRanking`. */
export type TokenRanking = {
  /** The attribute to rank tokens by. */
  attribute?: InputMaybe<TokenRankingAttribute>;
  /** The direction to apply to the ranking attribute. */
  direction?: InputMaybe<RankingDirection>;
};

/** The attribute used to rank tokens. */
export enum TokenRankingAttribute {
  /** @deprecated Use createdAt instead */
  Age = 'age',
  BuyCount1 = 'buyCount1',
  BuyCount4 = 'buyCount4',
  BuyCount5m = 'buyCount5m',
  BuyCount12 = 'buyCount12',
  BuyCount24 = 'buyCount24',
  Change1 = 'change1',
  Change4 = 'change4',
  Change5m = 'change5m',
  Change12 = 'change12',
  Change24 = 'change24',
  CreatedAt = 'createdAt',
  GraduationPercent = 'graduationPercent',
  High1 = 'high1',
  High4 = 'high4',
  High5m = 'high5m',
  High12 = 'high12',
  High24 = 'high24',
  Holders = 'holders',
  LastTransaction = 'lastTransaction',
  LaunchpadCompletedAt = 'launchpadCompletedAt',
  LaunchpadMigratedAt = 'launchpadMigratedAt',
  Liquidity = 'liquidity',
  Low1 = 'low1',
  Low4 = 'low4',
  Low5m = 'low5m',
  Low12 = 'low12',
  Low24 = 'low24',
  MarketCap = 'marketCap',
  NotableHolderCount = 'notableHolderCount',
  PriceUsd = 'priceUSD',
  SellCount1 = 'sellCount1',
  SellCount4 = 'sellCount4',
  SellCount5m = 'sellCount5m',
  SellCount12 = 'sellCount12',
  SellCount24 = 'sellCount24',
  SwapPct1dOldWallet = 'swapPct1dOldWallet',
  SwapPct7dOldWallet = 'swapPct7dOldWallet',
  TrendingScore = 'trendingScore',
  TrendingScore1 = 'trendingScore1',
  TrendingScore4 = 'trendingScore4',
  TrendingScore5m = 'trendingScore5m',
  TrendingScore12 = 'trendingScore12',
  TrendingScore24 = 'trendingScore24',
  TxnCount1 = 'txnCount1',
  TxnCount4 = 'txnCount4',
  TxnCount5m = 'txnCount5m',
  TxnCount12 = 'txnCount12',
  TxnCount24 = 'txnCount24',
  UniqueBuys1 = 'uniqueBuys1',
  UniqueBuys4 = 'uniqueBuys4',
  UniqueBuys5m = 'uniqueBuys5m',
  UniqueBuys12 = 'uniqueBuys12',
  UniqueBuys24 = 'uniqueBuys24',
  UniqueSells1 = 'uniqueSells1',
  UniqueSells4 = 'uniqueSells4',
  UniqueSells5m = 'uniqueSells5m',
  UniqueSells12 = 'uniqueSells12',
  UniqueSells24 = 'uniqueSells24',
  UniqueTransactions1 = 'uniqueTransactions1',
  UniqueTransactions4 = 'uniqueTransactions4',
  UniqueTransactions5m = 'uniqueTransactions5m',
  UniqueTransactions12 = 'uniqueTransactions12',
  UniqueTransactions24 = 'uniqueTransactions24',
  Volume1 = 'volume1',
  Volume4 = 'volume4',
  Volume5m = 'volume5m',
  Volume12 = 'volume12',
  Volume24 = 'volume24',
  VolumeChange1 = 'volumeChange1',
  VolumeChange4 = 'volumeChange4',
  VolumeChange5m = 'volumeChange5m',
  VolumeChange12 = 'volumeChange12',
  VolumeChange24 = 'volumeChange24',
  WalletAgeAvg = 'walletAgeAvg',
  WalletAgeStd = 'walletAgeStd'
}

/** Response returned by `searchTokens`. */
export type TokenSearchResponse = {
  __typename?: 'TokenSearchResponse';
  /** The number of additional high volume results found. Only used if `lowVolumeFilter` is set to `true`. */
  hasMore?: Maybe<Scalars['Int']['output']>;
  /** If `lowVolumeFilter` is set to `true`, the number of additional low volume results found.  <br>If `lowVolumeFilter` is set to `false`, the number of additional high and low volume results found. */
  hasMoreLowVolume?: Maybe<Scalars['Int']['output']>;
  /** A list of tokens. */
  tokens?: Maybe<Array<TokenWithMetadata>>;
};

export type TokenSparkline = {
  __typename?: 'TokenSparkline';
  /** Which attribute the sparkline is charting. Defaults to `PRICE` */
  attribute?: Maybe<SparklineAttribute>;
  /** The token id */
  id: Scalars['String']['output'];
  /** List of sparkline values to chart */
  sparkline: Array<SparklineValue>;
};

export type TokenSparklineInput = {
  /** The contract address & networkId of the token, joined by a colon. ex: 0xbe042e9d09cb588331ff911c2b46fd833a3e5bd6:1 */
  ids: Array<Scalars['String']['input']>;
};

/** docs: hide */
export type TokenSummary = {
  __typename?: 'TokenSummary';
  text: Scalars['String']['output'];
  updatedAt: Scalars['Int']['output'];
};

/** A top trader for a token. */
export type TokenTopTrader = {
  __typename?: 'TokenTopTrader';
  /** The amount of tokens bought in USD. */
  amountBoughtUsd: Scalars['String']['output'];
  /** The amount of tokens sold in USD. */
  amountSoldUsd: Scalars['String']['output'];
  /** The number of buys. */
  buys: Scalars['Int']['output'];
  /** The unix timestamp for the first transaction from this wallet. */
  firstTransactionAt?: Maybe<Scalars['Int']['output']>;
  /** The unix timestamp for the last transaction from this wallet. */
  lastTransactionAt: Scalars['Int']['output'];
  /** The network ID. */
  networkId: Scalars['Int']['output'];
  /** The realized profit percentage. */
  realizedProfitPercentage: Scalars['Float']['output'];
  /** The realized profit in USD. */
  realizedProfitUsd: Scalars['String']['output'];
  /** The number of sells. */
  sells: Scalars['Int']['output'];
  /** The single token acquisition cost in USD. */
  singleTokenAcquisitionCostUsd: Scalars['String']['output'];
  /** The token address. */
  tokenAddress: Scalars['String']['output'];
  /** The amount of tokens bought. */
  tokenAmountBought: Scalars['String']['output'];
  /** The amount of tokens sold. */
  tokenAmountSold: Scalars['String']['output'];
  /** The token balance of the trader. */
  tokenBalance: Scalars['String']['output'];
  /** The volume of tokens bought and sold in USD. */
  volumeUsd: Scalars['String']['output'];
  /** The wallet address of the trader. */
  walletAddress: Scalars['String']['output'];
};

/** A paginated list of top traders for a token. */
export type TokenTopTradersConnection = {
  __typename?: 'TokenTopTradersConnection';
  /** The list of top traders. */
  items: Array<Maybe<TokenTopTrader>>;
  /** The network ID. */
  networkId: Scalars['Int']['output'];
  /** The offset of the first trader in the connection. */
  offset?: Maybe<Scalars['Int']['output']>;
  /** The token address. */
  tokenAddress: Scalars['String']['output'];
  /** The trading period. */
  tradingPeriod: TradingPeriod;
};

/** Input arguments for the `tokenTopTraders` query. */
export type TokenTopTradersInput = {
  /** The number of traders to return */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** The network ID */
  networkId: Scalars['Int']['input'];
  /** Where in the list the server started when returning items */
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** The token address */
  tokenAddress: Scalars['String']['input'];
  /** The trading period */
  tradingPeriod: TradingPeriod;
};

/** docs: hide */
export type TokenWalletFilterConnection = {
  __typename?: 'TokenWalletFilterConnection';
  /** The number of wallets returned. */
  count: Scalars['Int']['output'];
  /** Where in the list the server started when returning items. */
  offset: Scalars['Int']['output'];
  /** The list of wallets matching the filter parameters. */
  results: Array<TokenWalletFilterResult>;
};

/** docs: hide */
export type TokenWalletFilterResult = {
  __typename?: 'TokenWalletFilterResult';
  /** The wallet address */
  address: Scalars['String']['output'];
  /** Amount bought in USD in the past day */
  amountBoughtUsd1d: Scalars['String']['output'];
  /** Amount bought in USD in the past week */
  amountBoughtUsd1w: Scalars['String']['output'];
  /** Amount bought in USD in the past year */
  amountBoughtUsd1y: Scalars['String']['output'];
  /** Amount bought in USD in the past 30 days */
  amountBoughtUsd30d: Scalars['String']['output'];
  /** Amount sold in USD in the past day */
  amountSoldUsd1d: Scalars['String']['output'];
  /** Amount sold in USD in the past week */
  amountSoldUsd1w: Scalars['String']['output'];
  /** Amount sold in USD in the past year */
  amountSoldUsd1y: Scalars['String']['output'];
  /** Amount sold in USD in the past 30 days */
  amountSoldUsd30d: Scalars['String']['output'];
  /** Amount sold USD all in the past day */
  amountSoldUsdAll1d: Scalars['String']['output'];
  /** Amount sold USD all in the past week */
  amountSoldUsdAll1w: Scalars['String']['output'];
  /** Amount sold USD all in the past year */
  amountSoldUsdAll1y: Scalars['String']['output'];
  /** Amount sold USD all in the past 30 days */
  amountSoldUsdAll30d: Scalars['String']['output'];
  /** Number of buys in the past day */
  buys1d: Scalars['Int']['output'];
  /** Number of buys in the past week */
  buys1w: Scalars['Int']['output'];
  /** Number of buys in the past year */
  buys1y: Scalars['Int']['output'];
  /** Number of buys in the past 30 days */
  buys30d: Scalars['Int']['output'];
  /** The unix timestamp for the first transaction from this wallet */
  firstTransactionAt?: Maybe<Scalars['Int']['output']>;
  /** The labels associated with the wallet */
  labels: Array<Scalars['String']['output']>;
  /** The unix timestamp for the last transaction from this wallet */
  lastTransactionAt: Scalars['Int']['output'];
  /** The network ID */
  networkId: Scalars['Int']['output'];
  /** The purchased token balance */
  purchasedTokenBalance: Scalars['String']['output'];
  /** Realized profit percentage in the past day */
  realizedProfitPercentage1d: Scalars['Float']['output'];
  /** Realized profit percentage in the past week */
  realizedProfitPercentage1w: Scalars['Float']['output'];
  /** Realized profit percentage in the past year */
  realizedProfitPercentage1y: Scalars['Float']['output'];
  /** Realized profit percentage in the past 30 days */
  realizedProfitPercentage30d: Scalars['Float']['output'];
  /** Realized profit in USD in the past day */
  realizedProfitUsd1d: Scalars['String']['output'];
  /** Realized profit in USD in the past week */
  realizedProfitUsd1w: Scalars['String']['output'];
  /** Realized profit in USD in the past year */
  realizedProfitUsd1y: Scalars['String']['output'];
  /** Realized profit in USD in the past 30 days */
  realizedProfitUsd30d: Scalars['String']['output'];
  /** The scammer score for the wallet. */
  scammerScore?: Maybe<Scalars['Int']['output']>;
  /** Number of sells in the past day */
  sells1d: Scalars['Int']['output'];
  /** Number of sells in the past week */
  sells1w: Scalars['Int']['output'];
  /** Number of sells in the past year */
  sells1y: Scalars['Int']['output'];
  /** Number of sells in the past 30 days */
  sells30d: Scalars['Int']['output'];
  /** Number of sells all in the past day */
  sellsAll1d: Scalars['Int']['output'];
  /** Number of sells all in the past week */
  sellsAll1w: Scalars['Int']['output'];
  /** Number of sells all in the past year */
  sellsAll1y: Scalars['Int']['output'];
  /** Number of sells all in the past 30 days */
  sellsAll30d: Scalars['Int']['output'];
  /** The token metadata */
  token: EnhancedToken;
  /** The token acquisition cost in USD */
  tokenAcquisitionCostUsd: Scalars['String']['output'];
  /** The token address */
  tokenAddress: Scalars['String']['output'];
  /** Token amount bought in the past day */
  tokenAmountBought1d: Scalars['String']['output'];
  /** Token amount bought in the past week */
  tokenAmountBought1w: Scalars['String']['output'];
  /** Token amount bought in the past year */
  tokenAmountBought1y: Scalars['String']['output'];
  /** Token amount bought in the past 30 days */
  tokenAmountBought30d: Scalars['String']['output'];
  /** Token amount sold in the past day */
  tokenAmountSold1d: Scalars['String']['output'];
  /** Token amount sold in the past week */
  tokenAmountSold1w: Scalars['String']['output'];
  /** Token amount sold in the past year */
  tokenAmountSold1y: Scalars['String']['output'];
  /** Token amount sold in the past 30 days */
  tokenAmountSold30d: Scalars['String']['output'];
  /** Token amount sold all in the past day */
  tokenAmountSoldAll1d: Scalars['String']['output'];
  /** Token amount sold all in the past week */
  tokenAmountSoldAll1w: Scalars['String']['output'];
  /** Token amount sold all in the past year */
  tokenAmountSoldAll1y: Scalars['String']['output'];
  /** Token amount sold all in the past 30 days */
  tokenAmountSoldAll30d: Scalars['String']['output'];
  /** The current token balance */
  tokenBalance: Scalars['String']['output'];
};

/** A token with metadata. */
export type TokenWithMetadata = {
  __typename?: 'TokenWithMetadata';
  /** The contract address of the token. */
  address: Scalars['String']['output'];
  /** The unix timestamp for the creation of the token's first pair. */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The precision to which the token can be divided. For example, the smallest unit for USDC is 0.000001 (6 decimals). */
  decimals?: Maybe<Scalars['Int']['output']>;
  /** The exchanges the token is listed on. */
  exchanges: Array<Exchange>;
  /** The ID of the token (`address:networkId`). For example, `0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2:1`. */
  id: Scalars['String']['output'];
  /** The token banner URL. */
  imageBannerUrl?: Maybe<Scalars['String']['output']>;
  /** The token logo URL. */
  imageLargeUrl?: Maybe<Scalars['String']['output']>;
  /** The token logo URL. */
  imageSmallUrl?: Maybe<Scalars['String']['output']>;
  /** The token logo URL. */
  imageThumbUrl?: Maybe<Scalars['String']['output']>;
  /** Whether the token has been flagged as a scam. */
  isScam?: Maybe<Scalars['Boolean']['output']>;
  /** The unix timestamp for the token's last transaction. */
  lastTransaction?: Maybe<Scalars['Int']['output']>;
  /** The total liquidity of the token's top pair in USD. */
  liquidity: Scalars['String']['output'];
  /** The market cap of circulating supply. */
  marketCap?: Maybe<Scalars['String']['output']>;
  /** The name of the token. */
  name: Scalars['String']['output'];
  /** The network ID the token is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The token price in USD. */
  price: Scalars['Float']['output'];
  /** The percent price change for the time frame requested. Decimal format. */
  priceChange: Scalars['Float']['output'];
  /** The percent price change in the past hour. Decimal format. */
  priceChange1?: Maybe<Scalars['Float']['output']>;
  /** The percent price change in the past 4 hours. Decimal format. */
  priceChange4?: Maybe<Scalars['Float']['output']>;
  /** The percent price change in the past 12 hours. Decimal format. */
  priceChange12?: Maybe<Scalars['Float']['output']>;
  /** The percent price change in the past 24 hours. Decimal format. */
  priceChange24?: Maybe<Scalars['Float']['output']>;
  /** The token of interest. Can be `token0` or `token1`. */
  quoteToken?: Maybe<QuoteToken>;
  /** The time frame for the results. */
  resolution: Scalars['String']['output'];
  /** The symbol for the token. */
  symbol: Scalars['String']['output'];
  /** The ID of the token's top pair (`pairAddress:networkId`). */
  topPairId: Scalars['String']['output'];
  /** The number of transactions in the past hour. */
  txnCount1?: Maybe<Scalars['Int']['output']>;
  /** The number of transactions in the past 4 hours. */
  txnCount4?: Maybe<Scalars['Int']['output']>;
  /** The number of transactions in the past 12 hours. */
  txnCount12?: Maybe<Scalars['Int']['output']>;
  /** The number of transactions in the past 24 hours. */
  txnCount24?: Maybe<Scalars['Int']['output']>;
  /** The unique number of buys in the past hour. */
  uniqueBuys1?: Maybe<Scalars['Int']['output']>;
  /** The unique number of buys in the past 4 hours. */
  uniqueBuys4?: Maybe<Scalars['Int']['output']>;
  /** The unique number of buys in the past 12 hours. */
  uniqueBuys12?: Maybe<Scalars['Int']['output']>;
  /** The unique number of buys in the past 24 hours. */
  uniqueBuys24?: Maybe<Scalars['Int']['output']>;
  /** The unique number of sells in the past hour. */
  uniqueSells1?: Maybe<Scalars['Int']['output']>;
  /** The unique number of sells in the past 4 hours. */
  uniqueSells4?: Maybe<Scalars['Int']['output']>;
  /** The unique number of sells in the past 12 hours. */
  uniqueSells12?: Maybe<Scalars['Int']['output']>;
  /** The unique number of sells in the past 24 hours. */
  uniqueSells24?: Maybe<Scalars['Int']['output']>;
  /** The volume over the time frame requested in USD. */
  volume: Scalars['String']['output'];
};

/** docs: hide */
export type Trackable = {
  networkId: Scalars['Int']['output'];
};

/** docs: hide */
export type TrackedWallet = {
  __typename?: 'TrackedWallet';
  created: Scalars['Int']['output'];
  labels?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name: Scalars['String']['output'];
  networkType: NetworkConfigType;
  settings?: Maybe<TrackedWalletSettings>;
  walletAddress: Scalars['String']['output'];
};

/** docs: hide */
export type TrackedWalletBotPublishingConfig = {
  __typename?: 'TrackedWalletBotPublishingConfig';
  chatId?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  threadId?: Maybe<Scalars['String']['output']>;
};

/** docs: hide */
export type TrackedWalletBotPublishingConfigInput = {
  chatId?: InputMaybe<Scalars['String']['input']>;
  enabled: Scalars['Boolean']['input'];
  threadId?: InputMaybe<Scalars['String']['input']>;
};

/** docs: hide */
export type TrackedWalletConnection = {
  __typename?: 'TrackedWalletConnection';
  cursor?: Maybe<Scalars['String']['output']>;
  trackedWallets: Array<Maybe<TrackedWallet>>;
  userId: Scalars['String']['output'];
};

/** docs: hide */
export type TrackedWalletEvent = {
  __typename?: 'TrackedWalletEvent';
  eventData: TrackedWalletEventData;
  eventId: Scalars['String']['output'];
  eventSortKey: Scalars['String']['output'];
  eventType: TrackedWalletEventType;
  userId: Scalars['String']['output'];
};

/** docs: hide */
export type TrackedWalletEventData = Event | NftEvent | RawTransaction;

/** docs: hide */
export enum TrackedWalletEventType {
  NftEvent = 'NFT_EVENT',
  RawTransaction = 'RAW_TRANSACTION',
  TokenPairEvent = 'TOKEN_PAIR_EVENT'
}

/** docs: hide */
export type TrackedWalletEventsConnection = {
  __typename?: 'TrackedWalletEventsConnection';
  cursor?: Maybe<Scalars['String']['output']>;
  items: Array<Maybe<TrackedWalletEvent>>;
};

/** docs: hide */
export type TrackedWalletInput = {
  labels?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name: Scalars['String']['input'];
  networkType: NetworkConfigType;
  settings?: InputMaybe<TrackedWalletSettingsInput>;
  walletAddress: Scalars['String']['input'];
};

/** docs: hide */
export type TrackedWalletSettings = {
  __typename?: 'TrackedWalletSettings';
  addressBlacklist?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  botPublishingConfig?: Maybe<TrackedWalletBotPublishingConfig>;
  ignoreEventTypes?: Maybe<Array<Maybe<TrackedWalletEventType>>>;
  ignoreTokenApprovals?: Maybe<Scalars['Boolean']['output']>;
  maxSwapValue?: Maybe<Scalars['String']['output']>;
  maxTokenMarketCap?: Maybe<Scalars['String']['output']>;
  minSwapValue?: Maybe<Scalars['String']['output']>;
  minTokenMarketCap?: Maybe<Scalars['String']['output']>;
  showAlertsInWeb?: Maybe<Scalars['Boolean']['output']>;
  tokenHistorySettings?: Maybe<TokenHistorySettings>;
  webPublishingConfig?: Maybe<TrackedWalletWebPublishingConfig>;
};

/** docs: hide */
export type TrackedWalletSettingsInput = {
  addressBlacklist?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  botPublishingConfig?: InputMaybe<TrackedWalletBotPublishingConfigInput>;
  ignoreEventTypes?: InputMaybe<Array<InputMaybe<TrackedWalletEventType>>>;
  ignoreTokenApprovals?: InputMaybe<Scalars['Boolean']['input']>;
  maxSwapValue?: InputMaybe<Scalars['String']['input']>;
  maxTokenMarketCap?: InputMaybe<Scalars['String']['input']>;
  minSwapValue?: InputMaybe<Scalars['String']['input']>;
  minTokenMarketCap?: InputMaybe<Scalars['String']['input']>;
  tokenHistorySettings?: InputMaybe<TokenHistorySettingsInput>;
  webPublishingConfig?: InputMaybe<TrackedWalletWebPublishingConfigInput>;
};

/** docs: hide */
export type TrackedWalletWebPublishingConfig = {
  __typename?: 'TrackedWalletWebPublishingConfig';
  enabled?: Maybe<Scalars['Boolean']['output']>;
  showAlerts?: Maybe<Scalars['Boolean']['output']>;
};

/** docs: hide */
export type TrackedWalletWebPublishingConfigInput = {
  enabled: Scalars['Boolean']['input'];
  showAlerts: Scalars['Boolean']['input'];
};

/** A time period used when calculating wallet trading data. */
export enum TradingPeriod {
  Day = 'DAY',
  Month = 'MONTH',
  Week = 'WEEK',
  Year = 'YEAR'
}

/** docs: hide */
export type TurnkeyEmailRecoveryInput = {
  email: Scalars['String']['input'];
  publicKey: Scalars['String']['input'];
};

/** docs: hide */
export type TurnkeyPasskeyUser = {
  __typename?: 'TurnkeyPasskeyUser';
  subOrgId: Scalars['String']['output'];
  userEmail?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
  userName: Scalars['String']['output'];
};

/** docs: hide */
export type TurnkeyUserEmailInput = {
  email: Scalars['String']['input'];
  request: SignedRequest;
  verifiedAt?: InputMaybe<Scalars['Int']['input']>;
};

/** An unconfirmed token transaction. */
export type UnconfirmedEvent = {
  __typename?: 'UnconfirmedEvent';
  /** The contract address of the token's top pair. */
  address: Scalars['String']['output'];
  /** The hash of the block where the transaction occurred. */
  blockHash: Scalars['String']['output'];
  /** The block number for the transaction. */
  blockNumber: Scalars['Int']['output'];
  /** The event-specific data for the transaction. */
  data?: Maybe<UnconfirmedEventData>;
  /** A more specific breakdown of `eventType`. Splits `Swap` into `Buy` or `Sell`. */
  eventDisplayType?: Maybe<EventDisplayType>;
  /** The type of transaction event. Can be `Burn`, `Mint`, `Swap`, `Sync`, `Collect`, or `CollectProtocol`. */
  eventType: EventType;
  /** The ID of the event (`address:networkId`). For example, `0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2:1`. */
  id: Scalars['String']['output'];
  /** The index of the log in the block. */
  logIndex: Scalars['Int']['output'];
  /** The wallet address that performed the transaction. */
  maker?: Maybe<Scalars['String']['output']>;
  /** The network ID that the token is deployed on. */
  networkId: Scalars['Int']['output'];
  /** The token of interest within the token's top pair. Can be `token0` or `token1`. */
  quoteToken?: Maybe<QuoteToken>;
  /** A optional unique identifier of where the event is within the transaction. */
  supplementalIndex?: Maybe<Scalars['Int']['output']>;
  /** The unix timestamp for when the transaction occurred. */
  timestamp: Scalars['Int']['output'];
  /** The unique hash for the transaction. */
  transactionHash: Scalars['String']['output'];
  /** The index of the transaction within the block. */
  transactionIndex: Scalars['Int']['output'];
};

export type UnconfirmedEventData = UnconfirmedLiquidityChangeEventData | UnconfirmedSwapEventData;

/** Unconfirmed bar chart data. */
export type UnconfirmedIndividualBarData = {
  __typename?: 'UnconfirmedIndividualBarData';
  /** The closing price. */
  c: Scalars['Float']['output'];
  /** The high price. */
  h: Scalars['Float']['output'];
  /** The low price. */
  l: Scalars['Float']['output'];
  /** The opening price. */
  o: Scalars['Float']['output'];
  /** The timestamp for the bar. */
  t: Scalars['Int']['output'];
  /** The volume. */
  v?: Maybe<Scalars['Int']['output']>;
  /** The volume with higher precision. */
  volume: Scalars['String']['output'];
};

export type UnconfirmedLiquidityChangeEventData = {
  __typename?: 'UnconfirmedLiquidityChangeEventData';
  /** The amount of `token0` added or removed from the pair. */
  amount0?: Maybe<Scalars['String']['output']>;
  /** The amount of `token0` added or removed from the pair, adjusted by the number of decimals in the token. For example, if `amount0` is in WEI, `amount0Shifted` will be in ETH. */
  amount0Shifted?: Maybe<Scalars['String']['output']>;
  /** The amount of `token1` added or removed from the pair. */
  amount1?: Maybe<Scalars['String']['output']>;
  /** The amount of `token1` added or removed from the pair, adjusted by the number of decimals in the token. For example, USDC `amount1Shifted` will be by 6 decimals. */
  amount1Shifted?: Maybe<Scalars['String']['output']>;
  /** The type of token event, `Mint` or 'Burn'. */
  type: EventType;
};

/** Unconfirmed price data for each supported resolution. */
export type UnconfirmedResolutionBarData = {
  __typename?: 'UnconfirmedResolutionBarData';
  /** 1 minute resolution. */
  r1?: Maybe<UnconfirmedIndividualBarData>;
  /** 1 second resolution. */
  r1S?: Maybe<UnconfirmedIndividualBarData>;
  /** 5 minute resolution. */
  r5?: Maybe<UnconfirmedIndividualBarData>;
  /** 5 second resolution. */
  r5S?: Maybe<UnconfirmedIndividualBarData>;
  /** 15 minute resolution. */
  r15?: Maybe<UnconfirmedIndividualBarData>;
  /** 15 second resolution. */
  r15S?: Maybe<UnconfirmedIndividualBarData>;
};

export type UnconfirmedSwapEventData = {
  __typename?: 'UnconfirmedSwapEventData';
  /** The amount of `baseToken` involved in the swap */
  amountBaseToken?: Maybe<Scalars['String']['output']>;
  /** The amount of `quoteToken` involved in the swap. For example, if `quoteToken` is USDC for a USDC/WETH pair, `amountNonLiquidityToken` would be the amount of USDC involved in the swap. */
  amountNonLiquidityToken?: Maybe<Scalars['String']['output']>;
  /** The price per `quoteToken` at the time of the swap in the network's base token. For example, if `quoteToken` is USDC for a USDC/WETH pair on ETH network, `priceBaseToken` would the price of USDC in ETH. */
  priceBaseToken?: Maybe<Scalars['String']['output']>;
  /** The total amount of `quoteToken` involved in the swap in the network's base token (`amountNonLiquidityToken` x `priceBaseToken`). */
  priceBaseTokenTotal?: Maybe<Scalars['String']['output']>;
  /** The price per `quoteToken` at the time of the swap in USD. For example, if `quoteToken` is USDC for a USDC/WETH pair on ETH network, `priceBaseToken` would the price of USDC in USD ($1.00). */
  priceUsd?: Maybe<Scalars['String']['output']>;
  /** The total amount of `quoteToken` involved in the swap in USD (`amountNonLiquidityToken` x `priceUsd`). */
  priceUsdTotal?: Maybe<Scalars['String']['output']>;
  /** The type of token event, `Swap`. */
  type: EventType;
};

/** docs: hide */
export type UniV3Tick = {
  __typename?: 'UniV3Tick';
  liquidityNet?: Maybe<Scalars['String']['output']>;
  price0?: Maybe<Scalars['String']['output']>;
  price1?: Maybe<Scalars['String']['output']>;
  tick?: Maybe<Scalars['Int']['output']>;
};

/** docs: hide */
export type UniV3TickConnection = {
  __typename?: 'UniV3TickConnection';
  /** The number of ticks returned. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Where in the list the server started when returning items. */
  offset?: Maybe<Scalars['Int']['output']>;
  /** The list of Uni V3 ticks matching the filter parameters. */
  results?: Maybe<Array<Maybe<UniV3Tick>>>;
};

/** docs: hide */
export type UpdateAptosNetworkConfigInput = {
  rpcs?: InputMaybe<Array<AptosRpcConfigInput>>;
};

/** docs: hide */
export type UpdateChartLayoutInput = {
  content: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  resolution: Scalars['String']['input'];
  symbol: Scalars['String']['input'];
};

/** docs: hide */
export type UpdateConstantPriceConfigInput = {
  tokenAddress: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

/** docs: hide */
export type UpdateEvmNetworkConfigInput = {
  evmConfig?: InputMaybe<EvmConfigInput>;
  evmConstants?: InputMaybe<EvmConstantsInput>;
  rpcs?: InputMaybe<Array<EvmRpcConfigInput>>;
};

/** docs: hide */
export type UpdateExchangeInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  exchangeVersion?: InputMaybe<Scalars['String']['input']>;
  iconUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  supported?: InputMaybe<Scalars['Boolean']['input']>;
  tradeUrl?: InputMaybe<Scalars['String']['input']>;
};

/** docs: hide */
export type UpdateExternalPriceConfigInput = {
  referenceToken: ExternalPrices;
  tokenAddress: Scalars['String']['input'];
};

/** docs: hide */
export type UpdateFeatureInput = {
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  enabled: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

/** docs: hide */
export type UpdateMappedPriceConfigInput = {
  referenceNetworkId: Scalars['Int']['input'];
  referenceTokenAddress: Scalars['String']['input'];
  tokenAddress: Scalars['String']['input'];
};

/** docs: hide */
export type UpdateNetworkConfigInput = {
  aptosInput?: InputMaybe<UpdateAptosNetworkConfigInput>;
  baseTokenAddress?: InputMaybe<Scalars['String']['input']>;
  baseTokenSymbol?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  defaultPairAddress?: InputMaybe<Scalars['String']['input']>;
  defaultPairQuoteToken?: InputMaybe<QuoteToken>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  evmInput?: InputMaybe<UpdateEvmNetworkConfigInput>;
  explorer?: InputMaybe<ExplorerConfigInput>;
  mainnet?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  networkIconUrl?: InputMaybe<Scalars['String']['input']>;
  networkId?: InputMaybe<Scalars['Int']['input']>;
  networkName?: InputMaybe<Scalars['String']['input']>;
  networkShortName?: InputMaybe<Scalars['String']['input']>;
  networkType: NetworkConfigType;
  newTokensEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  pricing?: InputMaybe<Array<InputMaybe<UpdatePriceConfigInput>>>;
  solanaInput?: InputMaybe<UpdateSolanaNetworkConfigInput>;
  stableCoinAddresses?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  starknetInput?: InputMaybe<UpdateStarknetNetworkConfigInput>;
  suiInput?: InputMaybe<UpdateSuiNetworkConfigInput>;
  wrappedBaseTokenSymbol?: InputMaybe<Scalars['String']['input']>;
};

/** docs: hide */
export type UpdatePriceConfigInput = {
  constantPriceInput?: InputMaybe<UpdateConstantPriceConfigInput>;
  externalPriceInput?: InputMaybe<UpdateExternalPriceConfigInput>;
  mappedPriceInput?: InputMaybe<UpdateMappedPriceConfigInput>;
};

/** docs: hide */
export type UpdateSolanaNetworkConfigInput = {
  rpcs?: InputMaybe<Array<SolanaRpcConfigInput>>;
};

/** docs: hide */
export type UpdateStarknetNetworkConfigInput = {
  rpcs?: InputMaybe<Array<StarknetRpcConfigInput>>;
};

/** docs: hide */
export type UpdateStrategyInput = {
  name: Scalars['String']['input'];
  orderParams: Array<CreateStrategyOrderParamInput>;
};

/** docs: hide */
export type UpdateSuiNetworkConfigInput = {
  rpcs?: InputMaybe<Array<SuiRpcConfigInput>>;
};

/** docs: hide */
export type UpdateTrackedWalletInput = {
  labels?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  settings?: InputMaybe<TrackedWalletSettingsInput>;
  walletAddress: Scalars['String']['input'];
};

/** docs: hide */
export type UpdateTrackedWalletsInput = {
  userId: Scalars['String']['input'];
  wallets: Array<UpdateTrackedWalletInput>;
};

/** docs: hide */
export type UpdateUserContractListInput = {
  icon?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  public?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** docs: hide */
export type UpdateUserReferralCodeResponse = {
  __typename?: 'UpdateUserReferralCodeResponse';
  newReferralCode: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

/** docs: hide */
export type User = {
  __typename?: 'User';
  ban?: Maybe<BanDetails>;
  contractProposalStats?: Maybe<ContractProposalStats>;
  createdAt: Scalars['Int']['output'];
  groups?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Int']['output'];
  /** @deprecated use id instead */
  username: Scalars['String']['output'];
};

/** docs: hide */
export type UserAchievement = {
  __typename?: 'UserAchievement';
  achievementId: Scalars['String']['output'];
  completed?: Maybe<Scalars['Boolean']['output']>;
  description: Scalars['String']['output'];
  imageUrl: Scalars['String']['output'];
  lockedDescription?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  pointsSeason: PointsSeason;
  quantity?: Maybe<Scalars['Int']['output']>;
  type: Scalars['String']['output'];
};

/** docs: hide */
export type UserContractList = {
  __typename?: 'UserContractList';
  createdAt: Scalars['Int']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isTokenInList?: Maybe<Scalars['Boolean']['output']>;
  public?: Maybe<Scalars['Boolean']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['String']['output'];
};


/** docs: hide */
export type UserContractListIsTokenInListArgs = {
  tokenId: Scalars['String']['input'];
};

/** docs: hide */
export type UserContractListAndItems = {
  __typename?: 'UserContractListAndItems';
  items: Array<UserContractListItem>;
  list: UserContractList;
};

/** docs: hide */
export type UserContractListConnection = {
  __typename?: 'UserContractListConnection';
  cursor?: Maybe<Scalars['String']['output']>;
  items: Array<UserContractList>;
};

/** docs: hide */
export type UserContractListItem = {
  __typename?: 'UserContractListItem';
  address: Scalars['String']['output'];
  contractType: ContractType;
  createdAt: Scalars['Int']['output'];
  listId: Scalars['String']['output'];
  networkId: Scalars['Int']['output'];
  sortKey: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  tokenId?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

/** docs: hide */
export type UserContractListItemConnection = {
  __typename?: 'UserContractListItemConnection';
  cursor?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<UserContractListItem>>;
};

/** docs: hide */
export type UserDailyRanks = {
  __typename?: 'UserDailyRanks';
  PNL_PERCENT?: Maybe<Scalars['Int']['output']>;
  PNL_USD?: Maybe<Scalars['Int']['output']>;
  VOLUME_USD?: Maybe<Scalars['Int']['output']>;
};

/** docs: hide */
export type UserModel = {
  __typename?: 'UserModel';
  id?: Maybe<Scalars['String']['output']>;
  nonce?: Maybe<Scalars['String']['output']>;
  /** These are now legacy */
  publicWalletAddress?: Maybe<Scalars['String']['output']>;
  referralCode?: Maybe<Scalars['String']['output']>;
  referralEarnings?: Maybe<Scalars['JSON']['output']>;
  referralStartDate?: Maybe<Scalars['Int']['output']>;
  referralTradeVolume?: Maybe<Scalars['JSON']['output']>;
  referralsCount?: Maybe<Scalars['Int']['output']>;
  referralsTradeVolume?: Maybe<Scalars['Float']['output']>;
  referralsTrades?: Maybe<Scalars['Int']['output']>;
  referrerCode?: Maybe<Scalars['String']['output']>;
  referrerUserId?: Maybe<Scalars['String']['output']>;
  rewardsPayoutTotal?: Maybe<Scalars['Float']['output']>;
};

/** docs: hide */
export type UserPointsLeaderboard = {
  __typename?: 'UserPointsLeaderboard';
  level: Scalars['Int']['output'];
  levelTier: LevelTier;
  numTrophies: Scalars['Int']['output'];
  pointsProgress: Scalars['Float']['output'];
  revShareTrophies?: Maybe<Array<AchievementId>>;
  stats: UserPointsLeaderboardStats;
  userId: Scalars['String']['output'];
};

/** docs: hide */
export type UserPointsLeaderboardStats = {
  __typename?: 'UserPointsLeaderboardStats';
  dailyStreak?: Maybe<Scalars['Int']['output']>;
  latestTradeTimestamp?: Maybe<Scalars['Int']['output']>;
  seasonPnlCumulativePercent: Scalars['Float']['output'];
  seasonPnlPercent: Scalars['Float']['output'];
  seasonPnlUsd: Scalars['Float']['output'];
  seasonTradeCount: Scalars['Int']['output'];
  seasonTradeCountBuy: Scalars['Int']['output'];
  seasonTradeCountSell: Scalars['Int']['output'];
  seasonVolumeUsd: Scalars['Float']['output'];
  updatedAt: Scalars['Int']['output'];
};

/** docs: hide */
export type UserPointsLeaderboardV2 = {
  __typename?: 'UserPointsLeaderboardV2';
  level: Scalars['Int']['output'];
  levelTier: LevelTier;
  numTrophies: Scalars['Int']['output'];
  pointsProgress: Scalars['Float']['output'];
  stats: UserPointsLeaderboardStats;
  userId: Scalars['String']['output'];
};

/** docs: hide */
export type UserQuest = {
  __typename?: 'UserQuest';
  achievementId: Scalars['String']['output'];
  completedCount?: Maybe<Scalars['Int']['output']>;
  completedTimestamp?: Maybe<Scalars['Int']['output']>;
  currentProgress?: Maybe<Scalars['Float']['output']>;
  description: Scalars['String']['output'];
  imageUrl: Scalars['String']['output'];
  isUnique?: Maybe<Scalars['Boolean']['output']>;
  lockedDescription?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  pointReward?: Maybe<Scalars['Int']['output']>;
  pointsSeason: PointsSeason;
  state: UserQuestState;
  totalProgress?: Maybe<Scalars['Float']['output']>;
  triggerAmount: Scalars['Int']['output'];
  triggerCategory: Scalars['String']['output'];
  triggerDenomination: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

/** docs: hide */
export enum UserQuestState {
  Completed = 'COMPLETED',
  Inactive = 'INACTIVE',
  InProgress = 'IN_PROGRESS'
}

/** docs: hide */
export type UserRevShare = {
  __typename?: 'UserRevShare';
  amountUsd: Scalars['Float']['output'];
  amountUsdPerTier: Scalars['String']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['String']['output'];
};

/** docs: hide */
export type UserRevShareEvent = {
  __typename?: 'UserRevShareEvent';
  amountUsd: Scalars['Float']['output'];
  amountUsdPerTier: Scalars['String']['output'];
  updatedAt: Scalars['Int']['output'];
};

/** docs: hide */
export type UserRevShareEventsInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  pointsSeason: PointsSeason;
  userId: Scalars['String']['input'];
};

/** docs: hide */
export type UserRevShareEventsResponse = {
  __typename?: 'UserRevShareEventsResponse';
  cursor?: Maybe<Scalars['String']['output']>;
  items: Array<UserRevShareEvent>;
};

/** docs: hide */
export type UserRevShareInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  pointsSeason: PointsSeason;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** docs: hide */
export type UserRevShareMeta = {
  __typename?: 'UserRevShareMeta';
  amountUsd: Scalars['Float']['output'];
  amountUsdPerTier: Scalars['String']['output'];
};

/** docs: hide */
export type UserRevShareResponse = {
  __typename?: 'UserRevShareResponse';
  cursor?: Maybe<Scalars['String']['output']>;
  items: Array<UserRevShare>;
};

/** docs: hide */
export type UserTrackedWalletSettings = {
  __typename?: 'UserTrackedWalletSettings';
  addressBlacklist?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  botPublishingConfig: TrackedWalletBotPublishingConfig;
  ignoreEventTypes?: Maybe<Array<Maybe<TrackedWalletEventType>>>;
  ignoreTokenApprovals?: Maybe<Scalars['Boolean']['output']>;
  maxSwapValue?: Maybe<Scalars['String']['output']>;
  maxTokenMarketCap?: Maybe<Scalars['String']['output']>;
  minSwapValue?: Maybe<Scalars['String']['output']>;
  minTokenMarketCap?: Maybe<Scalars['String']['output']>;
  tokenHistorySettings?: Maybe<TokenHistorySettings>;
  userId: Scalars['String']['output'];
  webPublishingConfig: TrackedWalletWebPublishingConfig;
};

/** docs: hide */
export type UserTrackedWalletSettingsInput = {
  addressBlacklist?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  botPublishingConfig: TrackedWalletBotPublishingConfigInput;
  ignoreEventTypes?: InputMaybe<Array<InputMaybe<TrackedWalletEventType>>>;
  ignoreTokenApprovals?: InputMaybe<Scalars['Boolean']['input']>;
  maxSwapValue?: InputMaybe<Scalars['String']['input']>;
  maxTokenMarketCap?: InputMaybe<Scalars['String']['input']>;
  minSwapValue?: InputMaybe<Scalars['String']['input']>;
  minTokenMarketCap?: InputMaybe<Scalars['String']['input']>;
  tokenHistorySettings?: InputMaybe<TokenHistorySettingsInput>;
  userId: Scalars['String']['input'];
  webPublishingConfig: TrackedWalletWebPublishingConfigInput;
};

/** docs: hide */
export type WalletAggregateBackfillInput = {
  walletAddress: Scalars['String']['input'];
};

/** docs: hide */
export enum WalletAggregateBackfillState {
  BackfillBlocked = 'BackfillBlocked',
  BackfillCanceled = 'BackfillCanceled',
  BackfillComplete = 'BackfillComplete',
  BackfillInProgress = 'BackfillInProgress',
  BackfillNotFound = 'BackfillNotFound',
  BackfillRequestReceived = 'BackfillRequestReceived'
}

/** docs: hide */
export type WalletAggregateBackfillStateInput = {
  walletAddress: Scalars['String']['input'];
};

/** docs: hide */
export type WalletAggregateBackfillStateResponse = {
  __typename?: 'WalletAggregateBackfillStateResponse';
  status: WalletAggregateBackfillState;
  walletAddress: Scalars['String']['output'];
};

/** docs: hide */
export type WalletAttestation = {
  attestationObject: Scalars['String']['input'];
  clientDataJson: Scalars['String']['input'];
  credentialId: Scalars['String']['input'];
  transports: Array<Scalars['String']['input']>;
};

/** docs: hide */
export type WalletChartData = {
  __typename?: 'WalletChartData';
  realizedProfitUsd: Scalars['String']['output'];
  resolution: Scalars['String']['output'];
  swaps: Scalars['Int']['output'];
  timestamp: Scalars['Int']['output'];
  volumeUsd: Scalars['String']['output'];
  volumeUsdAll: Scalars['String']['output'];
};

/** docs: hide */
export type WalletChartInput = {
  networkId?: InputMaybe<Scalars['Int']['input']>;
  range: RangeInput;
  resolution: Scalars['String']['input'];
  walletAddress: Scalars['String']['input'];
};

export type WalletChartRange = {
  __typename?: 'WalletChartRange';
  end: Scalars['Int']['output'];
  start: Scalars['Int']['output'];
};

/** docs: hide */
export type WalletChartResponse = {
  __typename?: 'WalletChartResponse';
  data: Array<WalletChartData>;
  networkId?: Maybe<Scalars['Int']['output']>;
  range: WalletChartRange;
  resolution: Scalars['String']['output'];
  walletAddress: Scalars['String']['output'];
};

/** docs: hide */
export type WalletFilterConnection = {
  __typename?: 'WalletFilterConnection';
  /** The number of wallets returned. */
  count: Scalars['Int']['output'];
  /** Where in the list the server started when returning items. */
  offset: Scalars['Int']['output'];
  /** The list of wallets matching the filter parameters. */
  results: Array<WalletFilterResult>;
};

/** docs: hide */
export type WalletFilterResult = {
  __typename?: 'WalletFilterResult';
  /** The wallet address */
  address: Scalars['String']['output'];
  /** Average profit in USD per trade in the past day */
  averageProfitUsdPerTrade1d: Scalars['String']['output'];
  /** Average profit in USD per trade in the past week */
  averageProfitUsdPerTrade1w: Scalars['String']['output'];
  /** Average profit in USD per trade in the past year */
  averageProfitUsdPerTrade1y: Scalars['String']['output'];
  /** Average profit in USD per trade in the past 30 days */
  averageProfitUsdPerTrade30d: Scalars['String']['output'];
  /** Average swap amount in USD in the past day */
  averageSwapAmountUsd1d: Scalars['String']['output'];
  /** Average swap amount in USD in the past week */
  averageSwapAmountUsd1w: Scalars['String']['output'];
  /** Average swap amount in USD in the past year */
  averageSwapAmountUsd1y: Scalars['String']['output'];
  /** Average swap amount in USD in the past 30 days */
  averageSwapAmountUsd30d: Scalars['String']['output'];
  /** The unix timestamp for the first transaction from this wallet */
  firstTransactionAt?: Maybe<Scalars['Int']['output']>;
  /** The labels associated with the wallet */
  labels: Array<Scalars['String']['output']>;
  /** The unix timestamp for the last transaction from this wallet */
  lastTransactionAt: Scalars['Int']['output'];
  /** Realized profit percentage in the past day */
  realizedProfitPercentage1d: Scalars['Float']['output'];
  /** Realized profit percentage in the past week */
  realizedProfitPercentage1w: Scalars['Float']['output'];
  /** Realized profit percentage in the past year */
  realizedProfitPercentage1y: Scalars['Float']['output'];
  /** Realized profit percentage in the past 30 days */
  realizedProfitPercentage30d: Scalars['Float']['output'];
  /** Realized profit in USD in the past day */
  realizedProfitUsd1d: Scalars['String']['output'];
  /** Realized profit in USD in the past week */
  realizedProfitUsd1w: Scalars['String']['output'];
  /** Realized profit in USD in the past year */
  realizedProfitUsd1y: Scalars['String']['output'];
  /** Realized profit in USD in the past 30 days */
  realizedProfitUsd30d: Scalars['String']['output'];
  /** The scammer score for the wallet. */
  scammerScore?: Maybe<Scalars['Int']['output']>;
  /** Number of swaps in the past day */
  swaps1d: Scalars['Int']['output'];
  /** Number of swaps in the past week */
  swaps1w: Scalars['Int']['output'];
  /** Number of swaps in the past year */
  swaps1y: Scalars['Int']['output'];
  /** Number of swaps in the past 30 days */
  swaps30d: Scalars['Int']['output'];
  /** Total number of swaps in the past day including all tokens */
  swapsAll1d: Scalars['Int']['output'];
  /** Total number of swaps in the past week including all tokens */
  swapsAll1w: Scalars['Int']['output'];
  /** Total number of swaps in the past year including all tokens */
  swapsAll1y: Scalars['Int']['output'];
  /** Total number of swaps in the past 30 days including all tokens */
  swapsAll30d: Scalars['Int']['output'];
  /** Number of unique tokens traded in the past day */
  uniqueTokens1d: Scalars['Int']['output'];
  /** Number of unique tokens traded in the past week */
  uniqueTokens1w: Scalars['Int']['output'];
  /** Number of unique tokens traded in the past year */
  uniqueTokens1y: Scalars['Int']['output'];
  /** Number of unique tokens traded in the past 30 days */
  uniqueTokens30d: Scalars['Int']['output'];
  /** Volume in USD in the past day */
  volumeUsd1d: Scalars['String']['output'];
  /** Volume in USD in the past week */
  volumeUsd1w: Scalars['String']['output'];
  /** Volume in USD in the past year */
  volumeUsd1y: Scalars['String']['output'];
  /** Volume in USD in the past 30 days */
  volumeUsd30d: Scalars['String']['output'];
  /** Total volume in USD in the past day including all tokens */
  volumeUsdAll1d: Scalars['String']['output'];
  /** Total volume in USD in the past week including all tokens */
  volumeUsdAll1w: Scalars['String']['output'];
  /** Total volume in USD in the past year including all tokens */
  volumeUsdAll1y: Scalars['String']['output'];
  /** Total volume in USD in the past 30 days including all tokens */
  volumeUsdAll30d: Scalars['String']['output'];
  /** Win rate in the past day */
  winRate1d: Scalars['Float']['output'];
  /** Win rate in the past week */
  winRate1w: Scalars['Float']['output'];
  /** Win rate in the past year */
  winRate1y: Scalars['Float']['output'];
  /** Win rate in the past 30 days */
  winRate30d: Scalars['Float']['output'];
};

/** docs: hide */
export type WalletFilters = {
  /** Average profit in USD per trade in the past day */
  averageProfitUsdPerTrade1d?: InputMaybe<NumberFilter>;
  /** Average profit in USD per trade in the past week */
  averageProfitUsdPerTrade1w?: InputMaybe<NumberFilter>;
  /** Average profit in USD per trade in the past year */
  averageProfitUsdPerTrade1y?: InputMaybe<NumberFilter>;
  /** Average profit in USD per trade in the past 30 days */
  averageProfitUsdPerTrade30d?: InputMaybe<NumberFilter>;
  /** Average swap amount in USD in the past day */
  averageSwapAmountUsd1d?: InputMaybe<NumberFilter>;
  /** Average swap amount in USD in the past week */
  averageSwapAmountUsd1w?: InputMaybe<NumberFilter>;
  /** Average swap amount in USD in the past year */
  averageSwapAmountUsd1y?: InputMaybe<NumberFilter>;
  /** Average swap amount in USD in the past 30 days */
  averageSwapAmountUsd30d?: InputMaybe<NumberFilter>;
  /** The unix timestamp for the first transaction from this wallet. */
  firstTransactionAt?: InputMaybe<NumberFilter>;
  /** The unix timestamp for the last transaction from this wallet. */
  lastTransactionAt?: InputMaybe<NumberFilter>;
  /** Realized profit percentage in the past day */
  realizedProfitPercentage1d?: InputMaybe<NumberFilter>;
  /** Realized profit percentage in the past week */
  realizedProfitPercentage1w?: InputMaybe<NumberFilter>;
  /** Realized profit percentage in the past year */
  realizedProfitPercentage1y?: InputMaybe<NumberFilter>;
  /** Realized profit percentage in the past 30 days */
  realizedProfitPercentage30d?: InputMaybe<NumberFilter>;
  /** Realized profit in USD in the past day */
  realizedProfitUsd1d?: InputMaybe<NumberFilter>;
  /** Realized profit in USD in the past week */
  realizedProfitUsd1w?: InputMaybe<NumberFilter>;
  /** Realized profit in USD in the past year */
  realizedProfitUsd1y?: InputMaybe<NumberFilter>;
  /** Realized profit in USD in the past 30 days */
  realizedProfitUsd30d?: InputMaybe<NumberFilter>;
  /** The scammer score for the wallet. */
  scammerScore?: InputMaybe<NumberFilter>;
  /** Number of swaps in the past day */
  swaps1d?: InputMaybe<NumberFilter>;
  /** Number of swaps in the past week */
  swaps1w?: InputMaybe<NumberFilter>;
  /** Number of swaps in the past year */
  swaps1y?: InputMaybe<NumberFilter>;
  /** Number of swaps in the past 30 days */
  swaps30d?: InputMaybe<NumberFilter>;
  /** Total number of swaps in the past day including all tokens */
  swapsAll1d?: InputMaybe<NumberFilter>;
  /** Total number of swaps in the past week including all tokens */
  swapsAll1w?: InputMaybe<NumberFilter>;
  /** Total number of swaps in the past year including all tokens */
  swapsAll1y?: InputMaybe<NumberFilter>;
  /** Total number of swaps in the past 30 days including all tokens */
  swapsAll30d?: InputMaybe<NumberFilter>;
  /** Number of unique tokens traded in the past day */
  uniqueTokens1d?: InputMaybe<NumberFilter>;
  /** Number of unique tokens traded in the past week */
  uniqueTokens1w?: InputMaybe<NumberFilter>;
  /** Number of unique tokens traded in the past year */
  uniqueTokens1y?: InputMaybe<NumberFilter>;
  /** Number of unique tokens traded in the past 30 days */
  uniqueTokens30d?: InputMaybe<NumberFilter>;
  /** Volume in USD in the past day */
  volumeUsd1d?: InputMaybe<NumberFilter>;
  /** Volume in USD in the past week */
  volumeUsd1w?: InputMaybe<NumberFilter>;
  /** Volume in USD in the past year */
  volumeUsd1y?: InputMaybe<NumberFilter>;
  /** Volume in USD in the past 30 days */
  volumeUsd30d?: InputMaybe<NumberFilter>;
  /** Total volume in USD in the past day including all tokens */
  volumeUsdAll1d?: InputMaybe<NumberFilter>;
  /** Total volume in USD in the past week including all tokens */
  volumeUsdAll1w?: InputMaybe<NumberFilter>;
  /** Total volume in USD in the past year including all tokens */
  volumeUsdAll1y?: InputMaybe<NumberFilter>;
  /** Total volume in USD in the past 30 days including all tokens */
  volumeUsdAll30d?: InputMaybe<NumberFilter>;
  /** Win rate in the past day */
  winRate1d?: InputMaybe<NumberFilter>;
  /** Win rate in the past week */
  winRate1w?: InputMaybe<NumberFilter>;
  /** Win rate in the past year */
  winRate1y?: InputMaybe<NumberFilter>;
  /** Win rate in the past 30 days */
  winRate30d?: InputMaybe<NumberFilter>;
};

/** docs: hide */
export type WalletNetworkFilters = {
  /** Average profit in USD per trade in the past day */
  averageProfitUsdPerTrade1d?: InputMaybe<NumberFilter>;
  /** Average profit in USD per trade in the past week */
  averageProfitUsdPerTrade1w?: InputMaybe<NumberFilter>;
  /** Average profit in USD per trade in the past year */
  averageProfitUsdPerTrade1y?: InputMaybe<NumberFilter>;
  /** Average profit in USD per trade in the past 30 days */
  averageProfitUsdPerTrade30d?: InputMaybe<NumberFilter>;
  /** Average swap amount in USD in the past day */
  averageSwapAmountUsd1d?: InputMaybe<NumberFilter>;
  /** Average swap amount in USD in the past week */
  averageSwapAmountUsd1w?: InputMaybe<NumberFilter>;
  /** Average swap amount in USD in the past year */
  averageSwapAmountUsd1y?: InputMaybe<NumberFilter>;
  /** Average swap amount in USD in the past 30 days */
  averageSwapAmountUsd30d?: InputMaybe<NumberFilter>;
  /** The unix timestamp for the first transaction from this wallet. */
  firstTransactionAt?: InputMaybe<NumberFilter>;
  /** The unix timestamp for the last transaction from this wallet. */
  lastTransactionAt?: InputMaybe<NumberFilter>;
  /** The native token balance of the wallet. */
  nativeTokenBalance?: InputMaybe<NumberFilter>;
  /** Realized profit percentage in the past day */
  realizedProfitPercentage1d?: InputMaybe<NumberFilter>;
  /** Realized profit percentage in the past week */
  realizedProfitPercentage1w?: InputMaybe<NumberFilter>;
  /** Realized profit percentage in the past year */
  realizedProfitPercentage1y?: InputMaybe<NumberFilter>;
  /** Realized profit percentage in the past 30 days */
  realizedProfitPercentage30d?: InputMaybe<NumberFilter>;
  /** Realized profit in USD in the past day */
  realizedProfitUsd1d?: InputMaybe<NumberFilter>;
  /** Realized profit in USD in the past week */
  realizedProfitUsd1w?: InputMaybe<NumberFilter>;
  /** Realized profit in USD in the past year */
  realizedProfitUsd1y?: InputMaybe<NumberFilter>;
  /** Realized profit in USD in the past 30 days */
  realizedProfitUsd30d?: InputMaybe<NumberFilter>;
  /** The scammer score for the wallet. Indicates the likelihood of the wallet being a scammer. Zero being not a scammer and 100 being a definite scammer. */
  scammerScore?: InputMaybe<NumberFilter>;
  /** Number of swaps in the past day */
  swaps1d?: InputMaybe<NumberFilter>;
  /** Number of swaps in the past week */
  swaps1w?: InputMaybe<NumberFilter>;
  /** Number of swaps in the past year */
  swaps1y?: InputMaybe<NumberFilter>;
  /** Number of swaps in the past 30 days */
  swaps30d?: InputMaybe<NumberFilter>;
  /** Total number of swaps in the past day including all tokens */
  swapsAll1d?: InputMaybe<NumberFilter>;
  /** Total number of swaps in the past week including all tokens */
  swapsAll1w?: InputMaybe<NumberFilter>;
  /** Total number of swaps in the past year including all tokens */
  swapsAll1y?: InputMaybe<NumberFilter>;
  /** Total number of swaps in the past 30 days including all tokens */
  swapsAll30d?: InputMaybe<NumberFilter>;
  /** Number of unique tokens traded in the past day */
  uniqueTokens1d?: InputMaybe<NumberFilter>;
  /** Number of unique tokens traded in the past week */
  uniqueTokens1w?: InputMaybe<NumberFilter>;
  /** Number of unique tokens traded in the past year */
  uniqueTokens1y?: InputMaybe<NumberFilter>;
  /** Number of unique tokens traded in the past 30 days */
  uniqueTokens30d?: InputMaybe<NumberFilter>;
  /** Volume in USD in the past day */
  volumeUsd1d?: InputMaybe<NumberFilter>;
  /** Volume in USD in the past week */
  volumeUsd1w?: InputMaybe<NumberFilter>;
  /** Volume in USD in the past year */
  volumeUsd1y?: InputMaybe<NumberFilter>;
  /** Volume in USD in the past 30 days */
  volumeUsd30d?: InputMaybe<NumberFilter>;
  /** Total volume in USD in the past day including all tokens */
  volumeUsdAll1d?: InputMaybe<NumberFilter>;
  /** Total volume in USD in the past week including all tokens */
  volumeUsdAll1w?: InputMaybe<NumberFilter>;
  /** Total volume in USD in the past year including all tokens */
  volumeUsdAll1y?: InputMaybe<NumberFilter>;
  /** Total volume in USD in the past 30 days including all tokens */
  volumeUsdAll30d?: InputMaybe<NumberFilter>;
  /** Win rate in the past day */
  winRate1d?: InputMaybe<NumberFilter>;
  /** Win rate in the past week */
  winRate1w?: InputMaybe<NumberFilter>;
  /** Win rate in the past year */
  winRate1y?: InputMaybe<NumberFilter>;
  /** Win rate in the past 30 days */
  winRate30d?: InputMaybe<NumberFilter>;
};

/** docs: hide */
export type WalletNetworkRanking = {
  /** The attribute to rank wallets by. */
  attribute?: InputMaybe<WalletNetworkRankingAttribute>;
  /** The direction to apply to the ranking attribute. */
  direction?: InputMaybe<RankingDirection>;
};

/** docs: hide */
export enum WalletNetworkRankingAttribute {
  AverageProfitUsdPerTrade1d = 'averageProfitUsdPerTrade1d',
  AverageProfitUsdPerTrade1w = 'averageProfitUsdPerTrade1w',
  AverageProfitUsdPerTrade1y = 'averageProfitUsdPerTrade1y',
  AverageProfitUsdPerTrade30d = 'averageProfitUsdPerTrade30d',
  AverageSwapAmountUsd1d = 'averageSwapAmountUsd1d',
  AverageSwapAmountUsd1w = 'averageSwapAmountUsd1w',
  AverageSwapAmountUsd1y = 'averageSwapAmountUsd1y',
  AverageSwapAmountUsd30d = 'averageSwapAmountUsd30d',
  FirstTransactionAt = 'firstTransactionAt',
  LastTransactionAt = 'lastTransactionAt',
  NativeTokenBalance = 'nativeTokenBalance',
  RealizedProfitPercentage1d = 'realizedProfitPercentage1d',
  RealizedProfitPercentage1w = 'realizedProfitPercentage1w',
  RealizedProfitPercentage1y = 'realizedProfitPercentage1y',
  RealizedProfitPercentage30d = 'realizedProfitPercentage30d',
  RealizedProfitUsd1d = 'realizedProfitUsd1d',
  RealizedProfitUsd1w = 'realizedProfitUsd1w',
  RealizedProfitUsd1y = 'realizedProfitUsd1y',
  RealizedProfitUsd30d = 'realizedProfitUsd30d',
  ScammerScore = 'scammerScore',
  Swaps1d = 'swaps1d',
  Swaps1w = 'swaps1w',
  Swaps1y = 'swaps1y',
  Swaps30d = 'swaps30d',
  SwapsAll1d = 'swapsAll1d',
  SwapsAll1w = 'swapsAll1w',
  SwapsAll1y = 'swapsAll1y',
  SwapsAll30d = 'swapsAll30d',
  UniqueTokens1d = 'uniqueTokens1d',
  UniqueTokens1w = 'uniqueTokens1w',
  UniqueTokens1y = 'uniqueTokens1y',
  UniqueTokens30d = 'uniqueTokens30d',
  VolumeUsd1d = 'volumeUsd1d',
  VolumeUsd1w = 'volumeUsd1w',
  VolumeUsd1y = 'volumeUsd1y',
  VolumeUsd30d = 'volumeUsd30d',
  VolumeUsdAll1d = 'volumeUsdAll1d',
  VolumeUsdAll1w = 'volumeUsdAll1w',
  VolumeUsdAll1y = 'volumeUsdAll1y',
  VolumeUsdAll30d = 'volumeUsdAll30d',
  WinRate1d = 'winRate1d',
  WinRate1w = 'winRate1w',
  WinRate1y = 'winRate1y',
  WinRate30d = 'winRate30d'
}

export type WalletNftCollection = {
  __typename?: 'WalletNftCollection';
  /** The collection ID (`collectionAddress:networkId`). */
  collectionId: Scalars['String']['output'];
  /** The number of items held by the wallet. */
  quantity: Scalars['String']['output'];
  /** The address of the wallet. */
  walletAddress: Scalars['String']['output'];
};

export type WalletNftCollectionAsset = {
  __typename?: 'WalletNftCollectionAsset';
  /** The number of instances of the nft held by the wallet (Applicable to ERC1155 NFTs). */
  quantity: Scalars['String']['output'];
  /** The id of the nft asset. */
  tokenId: Scalars['String']['output'];
};

export type WalletNftCollectionAssetsInput = {
  /** The collection ID (`collectionAddress:networkId`). */
  collectionId: Scalars['String']['input'];
  /** A cursor for use in pagination. */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** The address of the wallet. */
  walletAddress: Scalars['String']['input'];
};

export type WalletNftCollectionAssetsResponse = {
  __typename?: 'WalletNftCollectionAssetsResponse';
  /** The collection ID (`collectionAddress:networkId`). */
  collectionId: Scalars['String']['output'];
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The list of nft assets for a wallet. */
  items: Array<Maybe<WalletNftCollectionAsset>>;
  /** The address of the wallet. */
  walletAddress: Scalars['String']['output'];
};

export type WalletNftCollectionsInput = {
  /** A cursor for use in pagination. */
  cursor?: InputMaybe<Scalars['String']['input']>;
  /** The address of the wallet. */
  walletAddress: Scalars['String']['input'];
};

export type WalletNftCollectionsResponse = {
  __typename?: 'WalletNftCollectionsResponse';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The list of collections for a wallet. */
  items: Array<WalletNftCollection>;
};

/** docs: hide */
export type WalletPasskey = {
  attestation: WalletAttestation;
  challenge: Scalars['String']['input'];
};

/** docs: hide */
export type WalletRanking = {
  /** The attribute to rank wallets by. */
  attribute?: InputMaybe<WalletRankingAttribute>;
  /** The direction to apply to the ranking attribute. */
  direction?: InputMaybe<RankingDirection>;
};

/** docs: hide */
export enum WalletRankingAttribute {
  AverageProfitUsdPerTrade1d = 'averageProfitUsdPerTrade1d',
  AverageProfitUsdPerTrade1w = 'averageProfitUsdPerTrade1w',
  AverageProfitUsdPerTrade1y = 'averageProfitUsdPerTrade1y',
  AverageProfitUsdPerTrade30d = 'averageProfitUsdPerTrade30d',
  AverageSwapAmountUsd1d = 'averageSwapAmountUsd1d',
  AverageSwapAmountUsd1w = 'averageSwapAmountUsd1w',
  AverageSwapAmountUsd1y = 'averageSwapAmountUsd1y',
  AverageSwapAmountUsd30d = 'averageSwapAmountUsd30d',
  FirstTransactionAt = 'firstTransactionAt',
  LastTransactionAt = 'lastTransactionAt',
  RealizedProfitPercentage1d = 'realizedProfitPercentage1d',
  RealizedProfitPercentage1w = 'realizedProfitPercentage1w',
  RealizedProfitPercentage1y = 'realizedProfitPercentage1y',
  RealizedProfitPercentage30d = 'realizedProfitPercentage30d',
  RealizedProfitUsd1d = 'realizedProfitUsd1d',
  RealizedProfitUsd1w = 'realizedProfitUsd1w',
  RealizedProfitUsd1y = 'realizedProfitUsd1y',
  RealizedProfitUsd30d = 'realizedProfitUsd30d',
  ScammerScore = 'scammerScore',
  Swaps1d = 'swaps1d',
  Swaps1w = 'swaps1w',
  Swaps1y = 'swaps1y',
  Swaps30d = 'swaps30d',
  SwapsAll1d = 'swapsAll1d',
  SwapsAll1w = 'swapsAll1w',
  SwapsAll1y = 'swapsAll1y',
  SwapsAll30d = 'swapsAll30d',
  UniqueTokens1d = 'uniqueTokens1d',
  UniqueTokens1w = 'uniqueTokens1w',
  UniqueTokens1y = 'uniqueTokens1y',
  UniqueTokens30d = 'uniqueTokens30d',
  VolumeUsd1d = 'volumeUsd1d',
  VolumeUsd1w = 'volumeUsd1w',
  VolumeUsd1y = 'volumeUsd1y',
  VolumeUsd30d = 'volumeUsd30d',
  VolumeUsdAll1d = 'volumeUsdAll1d',
  VolumeUsdAll1w = 'volumeUsdAll1w',
  VolumeUsdAll1y = 'volumeUsdAll1y',
  VolumeUsdAll30d = 'volumeUsdAll30d',
  WinRate1d = 'winRate1d',
  WinRate1w = 'winRate1w',
  WinRate1y = 'winRate1y',
  WinRate30d = 'winRate30d'
}

/** docs: hide */
export enum WalletStatsDuration {
  Day1 = 'day1',
  Day30 = 'day30',
  Week1 = 'week1',
  Year1 = 'year1'
}

/** docs: hide */
export type WalletTokenFilterRange = {
  /** The maximum value (inclusive) */
  max?: InputMaybe<Scalars['String']['input']>;
  /** The minimum value (inclusive) */
  min?: InputMaybe<Scalars['String']['input']>;
};

/** docs: hide */
export type WalletTokenFilters = {
  /** Filter by amount bought in USD in the past day */
  amountBoughtUsd1d?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by amount bought in USD in the past week */
  amountBoughtUsd1w?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by amount bought in USD in the past year */
  amountBoughtUsd1y?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by amount bought in USD in the past 30 days */
  amountBoughtUsd30d?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by amount sold in USD in the past day */
  amountSoldUsd1d?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by amount sold in USD in the past week */
  amountSoldUsd1w?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by amount sold in USD in the past year */
  amountSoldUsd1y?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by amount sold in USD in the past 30 days */
  amountSoldUsd30d?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by number of buys in the past day */
  buys1d?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by number of buys in the past week */
  buys1w?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by number of buys in the past year */
  buys1y?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by number of buys in the past 30 days */
  buys30d?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by first transaction timestamp */
  firstTransactionAt?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by last transaction timestamp */
  lastTransactionAt?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by purchased token balance */
  purchasedTokenBalance?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by realized profit percentage in the past day */
  realizedProfitPercentage1d?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by realized profit percentage in the past week */
  realizedProfitPercentage1w?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by realized profit percentage in the past year */
  realizedProfitPercentage1y?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by realized profit percentage in the past 30 days */
  realizedProfitPercentage30d?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by realized profit in USD in the past day */
  realizedProfitUsd1d?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by realized profit in USD in the past week */
  realizedProfitUsd1w?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by realized profit in USD in the past year */
  realizedProfitUsd1y?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by realized profit in USD in the past 30 days */
  realizedProfitUsd30d?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by scammer score */
  scammerScore?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by number of sells in the past day */
  sells1d?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by number of sells in the past week */
  sells1w?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by number of sells in the past year */
  sells1y?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by number of sells in the past 30 days */
  sells30d?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by token acquisition cost in USD */
  tokenAcquisitionCostUsd?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by token amount bought in the past day */
  tokenAmountBought1d?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by token amount bought in the past week */
  tokenAmountBought1w?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by token amount bought in the past year */
  tokenAmountBought1y?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by token amount bought in the past 30 days */
  tokenAmountBought30d?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by token amount sold in the past day */
  tokenAmountSold1d?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by token amount sold in the past week */
  tokenAmountSold1w?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by token amount sold in the past year */
  tokenAmountSold1y?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by token amount sold in the past 30 days */
  tokenAmountSold30d?: InputMaybe<WalletTokenFilterRange>;
  /** Filter by token balance */
  tokenBalance?: InputMaybe<WalletTokenFilterRange>;
};

/** docs: hide */
export type WalletTokenFiltersV2 = {
  /** Filter by amount bought in USD in the past day */
  amountBoughtUsd1d?: InputMaybe<NumberFilter>;
  /** Filter by amount bought in USD in the past week */
  amountBoughtUsd1w?: InputMaybe<NumberFilter>;
  /** Filter by amount bought in USD in the past year */
  amountBoughtUsd1y?: InputMaybe<NumberFilter>;
  /** Filter by amount bought in USD in the past 30 days */
  amountBoughtUsd30d?: InputMaybe<NumberFilter>;
  /** Filter by amount sold in USD in the past day */
  amountSoldUsd1d?: InputMaybe<NumberFilter>;
  /** Filter by amount sold in USD in the past week */
  amountSoldUsd1w?: InputMaybe<NumberFilter>;
  /** Filter by amount sold in USD in the past year */
  amountSoldUsd1y?: InputMaybe<NumberFilter>;
  /** Filter by amount sold in USD in the past 30 days */
  amountSoldUsd30d?: InputMaybe<NumberFilter>;
  /** Filter by number of buys in the past day */
  buys1d?: InputMaybe<NumberFilter>;
  /** Filter by number of buys in the past week */
  buys1w?: InputMaybe<NumberFilter>;
  /** Filter by number of buys in the past year */
  buys1y?: InputMaybe<NumberFilter>;
  /** Filter by number of buys in the past 30 days */
  buys30d?: InputMaybe<NumberFilter>;
  /** Filter by first transaction timestamp */
  firstTransactionAt?: InputMaybe<NumberFilter>;
  /** Filter by last transaction timestamp */
  lastTransactionAt?: InputMaybe<NumberFilter>;
  /** Filter by purchased token balance */
  purchasedTokenBalance?: InputMaybe<NumberFilter>;
  /** Filter by realized profit percentage in the past day */
  realizedProfitPercentage1d?: InputMaybe<NumberFilter>;
  /** Filter by realized profit percentage in the past week */
  realizedProfitPercentage1w?: InputMaybe<NumberFilter>;
  /** Filter by realized profit percentage in the past year */
  realizedProfitPercentage1y?: InputMaybe<NumberFilter>;
  /** Filter by realized profit percentage in the past 30 days */
  realizedProfitPercentage30d?: InputMaybe<NumberFilter>;
  /** Filter by realized profit in USD in the past day */
  realizedProfitUsd1d?: InputMaybe<NumberFilter>;
  /** Filter by realized profit in USD in the past week */
  realizedProfitUsd1w?: InputMaybe<NumberFilter>;
  /** Filter by realized profit in USD in the past year */
  realizedProfitUsd1y?: InputMaybe<NumberFilter>;
  /** Filter by realized profit in USD in the past 30 days */
  realizedProfitUsd30d?: InputMaybe<NumberFilter>;
  /** Filter by scammer score */
  scammerScore?: InputMaybe<NumberFilter>;
  /** Filter by number of sells in the past day */
  sells1d?: InputMaybe<NumberFilter>;
  /** Filter by number of sells in the past week */
  sells1w?: InputMaybe<NumberFilter>;
  /** Filter by number of sells in the past year */
  sells1y?: InputMaybe<NumberFilter>;
  /** Filter by number of sells in the past 30 days */
  sells30d?: InputMaybe<NumberFilter>;
  /** Filter by token acquisition cost in USD */
  tokenAcquisitionCostUsd?: InputMaybe<NumberFilter>;
  /** Filter by token amount bought in the past day */
  tokenAmountBought1d?: InputMaybe<NumberFilter>;
  /** Filter by token amount bought in the past week */
  tokenAmountBought1w?: InputMaybe<NumberFilter>;
  /** Filter by token amount bought in the past year */
  tokenAmountBought1y?: InputMaybe<NumberFilter>;
  /** Filter by token amount bought in the past 30 days */
  tokenAmountBought30d?: InputMaybe<NumberFilter>;
  /** Filter by token amount sold in the past day */
  tokenAmountSold1d?: InputMaybe<NumberFilter>;
  /** Filter by token amount sold in the past week */
  tokenAmountSold1w?: InputMaybe<NumberFilter>;
  /** Filter by token amount sold in the past year */
  tokenAmountSold1y?: InputMaybe<NumberFilter>;
  /** Filter by token amount sold in the past 30 days */
  tokenAmountSold30d?: InputMaybe<NumberFilter>;
  /** Filter by token balance */
  tokenBalance?: InputMaybe<NumberFilter>;
};

/** docs: hide */
export type WalletTokenRanking = {
  /** The attribute to rank wallets by */
  attribute: WalletTokenRankingAttribute;
  /** The direction to apply to the ranking attribute */
  direction: RankingDirection;
};

/** docs: hide */
export enum WalletTokenRankingAttribute {
  /** Amount bought in USD in the past day */
  AmountBoughtUsd1d = 'amountBoughtUsd1d',
  /** Amount bought in USD in the past week */
  AmountBoughtUsd1w = 'amountBoughtUsd1w',
  /** Amount bought in USD in the past year */
  AmountBoughtUsd1y = 'amountBoughtUsd1y',
  /** Amount bought in USD in the past 30 days */
  AmountBoughtUsd30d = 'amountBoughtUsd30d',
  /** Amount sold in USD in the past day */
  AmountSoldUsd1d = 'amountSoldUsd1d',
  /** Amount sold in USD in the past week */
  AmountSoldUsd1w = 'amountSoldUsd1w',
  /** Amount sold in USD in the past year */
  AmountSoldUsd1y = 'amountSoldUsd1y',
  /** Amount sold in USD in the past 30 days */
  AmountSoldUsd30d = 'amountSoldUsd30d',
  /** Number of buys in the past day */
  Buys1d = 'buys1d',
  /** Number of buys in the past week */
  Buys1w = 'buys1w',
  /** Number of buys in the past year */
  Buys1y = 'buys1y',
  /** Number of buys in the past 30 days */
  Buys30d = 'buys30d',
  /** The first transaction timestamp */
  FirstTransactionAt = 'firstTransactionAt',
  /** The last transaction timestamp */
  LastTransactionAt = 'lastTransactionAt',
  /** Purchased token balance */
  PurchasedTokenBalance = 'purchasedTokenBalance',
  /** Realized profit percentage in the past day */
  RealizedProfitPercentage1d = 'realizedProfitPercentage1d',
  /** Realized profit percentage in the past week */
  RealizedProfitPercentage1w = 'realizedProfitPercentage1w',
  /** Realized profit percentage in the past year */
  RealizedProfitPercentage1y = 'realizedProfitPercentage1y',
  /** Realized profit percentage in the past 30 days */
  RealizedProfitPercentage30d = 'realizedProfitPercentage30d',
  /** Realized profit in USD in the past day */
  RealizedProfitUsd1d = 'realizedProfitUsd1d',
  /** Realized profit in USD in the past week */
  RealizedProfitUsd1w = 'realizedProfitUsd1w',
  /** Realized profit in USD in the past year */
  RealizedProfitUsd1y = 'realizedProfitUsd1y',
  /** Realized profit in USD in the past 30 days */
  RealizedProfitUsd30d = 'realizedProfitUsd30d',
  /** The scammer score for the wallet. */
  ScammerScore = 'scammerScore',
  /** Number of sells in the past day */
  Sells1d = 'sells1d',
  /** Number of sells in the past week */
  Sells1w = 'sells1w',
  /** Number of sells in the past year */
  Sells1y = 'sells1y',
  /** Number of sells in the past 30 days */
  Sells30d = 'sells30d',
  /** Token acquisition cost in USD */
  TokenAcquisitionCostUsd = 'tokenAcquisitionCostUsd',
  /** Token amount bought in the past day */
  TokenAmountBought1d = 'tokenAmountBought1d',
  /** Token amount bought in the past week */
  TokenAmountBought1w = 'tokenAmountBought1w',
  /** Token amount bought in the past year */
  TokenAmountBought1y = 'tokenAmountBought1y',
  /** Token amount bought in the past 30 days */
  TokenAmountBought30d = 'tokenAmountBought30d',
  /** Token amount sold in the past day */
  TokenAmountSold1d = 'tokenAmountSold1d',
  /** Token amount sold in the past week */
  TokenAmountSold1w = 'tokenAmountSold1w',
  /** Token amount sold in the past year */
  TokenAmountSold1y = 'tokenAmountSold1y',
  /** Token amount sold in the past 30 days */
  TokenAmountSold30d = 'tokenAmountSold30d',
  /** Token balance */
  TokenBalance = 'tokenBalance'
}

/** Metadata for a washtrade label. */
export type WashtradeLabelForEvent = {
  __typename?: 'WashtradeLabelForEvent';
  /** The label type, 'washtrade' */
  label: Scalars['String']['output'];
};

/** Metadata for a webhook. */
export type Webhook = {
  __typename?: 'Webhook';
  /** The recurrence of the webhook. Can be `INDEFINITE` or `ONCE`. */
  alertRecurrence: AlertRecurrence;
  /** An optional bucket ID (max 64 characters). Can be used to query for subgroups of webhooks (useful if you have a large number of webhooks). */
  bucketId?: Maybe<Scalars['String']['output']>;
  /** An optional bucket sort key (max 64 characters). Can be used to query for subgroups of webhooks (useful if you have a large number of webhooks). */
  bucketSortkey?: Maybe<Scalars['String']['output']>;
  /** The url to which the webhook message should be sent. */
  callbackUrl: Scalars['String']['output'];
  /** The conditions which must be met in order for the webhook to send a message. */
  conditions: WebhookCondition;
  /** The unix timestamp for the time the webhook was created. */
  created: Scalars['Int']['output'];
  /** The webhook group ID used to group webhooks together for ordered message sending. */
  groupId?: Maybe<Scalars['String']['output']>;
  /** The ID of the webhook. */
  id: Scalars['String']['output'];
  /** The given name of the webhook. */
  name: Scalars['String']['output'];
  /** The type of publishing for the webhook. If not set, it defaults to `SINGLE`. */
  publishingType?: Maybe<PublishingType>;
  /** The settings for retrying failed webhook messages. */
  retrySettings?: Maybe<RetrySettings>;
  /** The status of the webhook. Can be `ACTIVE` or `INACTIVE`. */
  status: Scalars['String']['output'];
  /** The type of webhook. Can be `PRICE_EVENT`, `NFT_EVENT`, or `TOKEN_PAIR_EVENT`. */
  webhookType: WebhookType;
};

/** Webhook conditions that must be met for each webhook type. */
export type WebhookCondition = NftEventWebhookCondition | PriceEventWebhookCondition | RawTransactionWebhookCondition | TokenPairEventWebhookCondition;

/** NFT marketplace names. */
export enum WebhookNftEventFillSource {
  Blur = 'BLUR',
  Coinbase = 'COINBASE',
  Echelon = 'ECHELON',
  Element = 'ELEMENT',
  Ensvision = 'ENSVISION',
  Flipxyz = 'FLIPXYZ',
  Gem = 'GEM',
  Genie = 'GENIE',
  Kodex = 'KODEX',
  Magiceden = 'MAGICEDEN',
  Nftnerds = 'NFTNERDS',
  Opensea = 'OPENSEA',
  Rarible = 'RARIBLE',
  Reservoirtools = 'RESERVOIRTOOLS',
  Soundxyz = 'SOUNDXYZ'
}

/** NFT event types. */
export enum WebhookNftEventType {
  Mint = 'MINT',
  Sale = 'SALE',
  Transfer = 'TRANSFER'
}

/** The type of webhook. */
export enum WebhookType {
  NftEvent = 'NFT_EVENT',
  PriceEvent = 'PRICE_EVENT',
  RawTransaction = 'RAW_TRANSACTION',
  TokenPairEvent = 'TOKEN_PAIR_EVENT'
}

/** Price stats for a pair over a time frame. */
export type WindowedDetailedCurrencyPairStats = {
  __typename?: 'WindowedDetailedCurrencyPairStats';
  /** The buy volume over the time frame. */
  buyVolume?: Maybe<DetailedPairStatsStringMetrics>;
  /** The closing price for the time frame. */
  close?: Maybe<DetailedPairStatsStringMetrics>;
  /** The highest price in USD in the time frame. */
  highest?: Maybe<DetailedPairStatsStringMetrics>;
  /** The liquidity for the time frame. */
  liquidity?: Maybe<DetailedPairStatsStringMetrics>;
  /** The lowest price in USD in the time frame. */
  lowest?: Maybe<DetailedPairStatsStringMetrics>;
  /** The opening price for the time frame. */
  open?: Maybe<DetailedPairStatsStringMetrics>;
  /** The sell volume over the time frame. */
  sellVolume?: Maybe<DetailedPairStatsStringMetrics>;
  /** The volume over the time frame. */
  volume?: Maybe<DetailedPairStatsStringMetrics>;
};

/** docs: hide */
export type WindowedDetailedCurrencyWalletStats = {
  __typename?: 'WindowedDetailedCurrencyWalletStats';
  averageProfitUsdPerTrade: Scalars['String']['output'];
  averageSwapAmountUsd: Scalars['String']['output'];
  heldTokenAcquisitionCostUsd: Scalars['String']['output'];
  realizedProfitPercentage: Scalars['Float']['output'];
  realizedProfitUsd: Scalars['String']['output'];
  soldTokenAcquisitionCostUsd: Scalars['String']['output'];
  volumeUsd: Scalars['String']['output'];
  volumeUsdAll: Scalars['String']['output'];
};

/** Price stats for an NFT collection over a time frame. Either in USD or the network's base token. */
export type WindowedDetailedNftCurrencyStats = {
  __typename?: 'WindowedDetailedNftCurrencyStats';
  /** The average sale price in the time frame. */
  average?: Maybe<DetailedNftStatsStringMetrics>;
  /** The closing price for the time frame. */
  close?: Maybe<DetailedNftStatsStringMetrics>;
  /** The highest sale price in the time frame. */
  highestSale?: Maybe<DetailedNftStatsStringMetrics>;
  /** The lowest sale price in the time frame. */
  lowestSale?: Maybe<DetailedNftStatsStringMetrics>;
  /** The opening price for the time frame. */
  open?: Maybe<DetailedNftStatsStringMetrics>;
  /** The volume over the time frame. */
  volume?: Maybe<DetailedNftStatsStringMetrics>;
};

/** Numerical stats for an NFT collection over a time frame. */
export type WindowedDetailedNftNonCurrencyStats = {
  __typename?: 'WindowedDetailedNftNonCurrencyStats';
  /** The number of mints over the time frame. */
  mints?: Maybe<DetailedNftStatsNumberMetrics>;
  /** The number of sales over the time frame. */
  sales?: Maybe<DetailedNftStatsNumberMetrics>;
  /** The number of tokens sold over the time frame. */
  tokensSold?: Maybe<DetailedNftStatsStringMetrics>;
  /** The number of transfers over the time frame. */
  transfers?: Maybe<DetailedNftStatsNumberMetrics>;
  /** The number of unique buyers over the time frame. */
  uniqueBuyers?: Maybe<DetailedNftStatsNumberMetrics>;
  /** The number of unique minters over the time frame. */
  uniqueMinters?: Maybe<DetailedNftStatsNumberMetrics>;
  /** The number of unique wallets (buyers or sellers) over the time frame. */
  uniqueSalesWallets?: Maybe<DetailedNftStatsNumberMetrics>;
  /** The number of unique sellers over the time frame. */
  uniqueSellers?: Maybe<DetailedNftStatsNumberMetrics>;
};

/** Detailed NFT stats over a time frame. */
export type WindowedDetailedNftStats = {
  __typename?: 'WindowedDetailedNftStats';
  /** The duration used to request detailed NFT stats. */
  duration: DetailedNftStatsDuration;
  /** The unix timestamp for the end of the window. */
  end: Scalars['Int']['output'];
  /** The unix timestamp for the start of the window. */
  start: Scalars['Int']['output'];
  /** The currency stats in the network's base token, such as volume. */
  statsNetworkBaseToken: WindowedDetailedNftCurrencyStats;
  /** The numerical stats, such as number of buyers. */
  statsNonCurrency: WindowedDetailedNftNonCurrencyStats;
  /** The currency stats in USD, such as volume. */
  statsUsd: WindowedDetailedNftCurrencyStats;
  /** The list of start/end timestamps broken down for each bucket within the window. */
  timestamps: Array<Maybe<DetailedNftStatsBucketTimestamp>>;
};

/** Numerical stats for a pair over a time frame. */
export type WindowedDetailedNonCurrencyPairStats = {
  __typename?: 'WindowedDetailedNonCurrencyPairStats';
  /** The number of unique buyers over the time frame. */
  buyers?: Maybe<DetailedPairStatsNumberMetrics>;
  /** The number of buys over the time frame. */
  buys?: Maybe<DetailedPairStatsNumberMetrics>;
  /** The number of unique sellers over the time frame. */
  sellers?: Maybe<DetailedPairStatsNumberMetrics>;
  /** The number of sells over the time frame. */
  sells?: Maybe<DetailedPairStatsNumberMetrics>;
  /** The number of unique traders over the time frame. */
  traders?: Maybe<DetailedPairStatsNumberMetrics>;
  /** The transaction count over the time frame. */
  transactions?: Maybe<DetailedPairStatsNumberMetrics>;
};

/** docs: hide */
export type WindowedDetailedNonCurrencyWalletStats = {
  __typename?: 'WindowedDetailedNonCurrencyWalletStats';
  losses: Scalars['Int']['output'];
  swaps: Scalars['Int']['output'];
  uniqueTokens: Scalars['Int']['output'];
  wins: Scalars['Int']['output'];
};

/** Detailed pair stats over a time frame. */
export type WindowedDetailedPairStats = {
  __typename?: 'WindowedDetailedPairStats';
  /** The duration used to request detailed pair stats. */
  duration: DetailedPairStatsDuration;
  /** The unix timestamp for the end of the window. */
  end: Scalars['Int']['output'];
  /** The unix timestamp for the start of the window. */
  start: Scalars['Int']['output'];
  /** The numerical stats, such as number of buyers. */
  statsNonCurrency: WindowedDetailedNonCurrencyPairStats;
  /** The currency stats in USD, such as volume. */
  statsUsd: WindowedDetailedCurrencyPairStats;
  /** The list of start/end timestamps broken down for each bucket within the window. */
  timestamps: Array<Maybe<DetailedPairStatsBucketTimestamp>>;
};

/** Detailed stats over a window. */
export type WindowedDetailedStats = {
  __typename?: 'WindowedDetailedStats';
  /** The list of start/end timestamps broken down for each bucket within the window. */
  buckets: Array<Maybe<DetailedStatsBucketTimestamp>>;
  /** The buy volume over the window. */
  buyVolume?: Maybe<DetailedStatsStringMetrics>;
  /** The number of unique buyers over the window. */
  buyers: DetailedStatsNumberMetrics;
  /** The number of buys over the window. */
  buys: DetailedStatsNumberMetrics;
  /** The unix timestamp for the end of the window. */
  endTimestamp: Scalars['Int']['output'];
  /** The sell volume over the window. */
  sellVolume?: Maybe<DetailedStatsStringMetrics>;
  /** The number of unique sellers over the window. */
  sellers: DetailedStatsNumberMetrics;
  /** The number of sells over the window. */
  sells: DetailedStatsNumberMetrics;
  /** The unix timestamp for the start of the window. */
  timestamp: Scalars['Int']['output'];
  /** The number of unique traders over the window. */
  traders?: Maybe<DetailedStatsNumberMetrics>;
  /** The transaction count over the window. */
  transactions: DetailedStatsNumberMetrics;
  /** The volume over the window. */
  volume: DetailedStatsStringMetrics;
  /** The window size used to request detailed stats. */
  windowSize: DetailedStatsWindowSize;
};

/** docs: hide */
export type WindowedWalletStats = {
  __typename?: 'WindowedWalletStats';
  end: Scalars['Int']['output'];
  lastTransactionAt: Scalars['Int']['output'];
  networkId?: Maybe<Scalars['Int']['output']>;
  start: Scalars['Int']['output'];
  statsNonCurrency: WindowedDetailedNonCurrencyWalletStats;
  statsUsd: WindowedDetailedCurrencyWalletStats;
  walletAddress: Scalars['String']['output'];
};

export enum Join__Graph {
  ApiAdmin = 'API_ADMIN',
  Decodings = 'DECODINGS',
  Meta = 'META',
  Nfts = 'NFTS',
  Tokens = 'TOKENS',
  Users = 'USERS'
}

export enum Link__Purpose {
  /** `EXECUTION` features provide metadata necessary for operation execution. */
  Execution = 'EXECUTION',
  /** `SECURITY` features provide metadata necessary to securely resolve fields. */
  Security = 'SECURITY'
}

/** Currency stats. */
export type StatsCurrency = {
  /** The average sale price in the time frame. */
  average?: InputMaybe<StatsFilter>;
  /** The closing price for the time frame. */
  close?: InputMaybe<StatsFilter>;
  /** The highest sale price in the time frame. */
  highestSale?: InputMaybe<StatsFilter>;
  /** The lowest sale price in the time frame. */
  lowestSale?: InputMaybe<StatsFilter>;
  /** The opening price for the time frame. */
  open?: InputMaybe<StatsFilter>;
  /** The volume over the time frame. */
  volume?: InputMaybe<StatsFilter>;
  /** The volume by fillsource over the time frame. */
  volumeByFillsource?: InputMaybe<Array<InputMaybe<FillsourceStatsFilter>>>;
  /** The volume percentage by fillsource over the time frame. */
  volumePercentByFillsource?: InputMaybe<Array<InputMaybe<FillsourceStatsFilter>>>;
};

/** Numerical stats for an NFT collection over a time frame. */
export type StatsNonCurrency = {
  /** The number of mints over the time frame. */
  mints?: InputMaybe<StatsFilter>;
  /** The number of sales over the time frame. */
  sales?: InputMaybe<StatsFilter>;
  /** The number of tokens sold over the time frame. */
  tokensSold?: InputMaybe<StatsFilter>;
  /** The number of transfers over the time frame. */
  transfers?: InputMaybe<StatsFilter>;
  /** The number of unique buyers over the time frame. */
  uniqueBuyers?: InputMaybe<StatsFilter>;
  /** The number of unique minters over the time frame. */
  uniqueMinters?: InputMaybe<StatsFilter>;
  /** The number of unique wallets (buyers or sellers) over the time frame. */
  uniqueSalesWallets?: InputMaybe<StatsFilter>;
  /** The number of unique sellers over the time frame. */
  uniqueSellers?: InputMaybe<StatsFilter>;
};

export type LaunchpadTokenEventFragment = { __typename?: 'LaunchpadTokenEventOutput', address: string, buyCount1?: number | null, devBurnt?: boolean | null, devSold?: boolean | null, devSoldAll?: boolean | null, eventType: LaunchpadTokenEventType, holders?: number | null, marketCap?: string | null, networkId: number, price?: number | null, protocol: string, sellCount1?: number | null, transactions1?: number | null, volume1?: number | null, token: { __typename?: 'EnhancedToken', address: string, decimals: number, id: string, name?: string | null, networkId: number, symbol?: string | null, createdAt?: number | null, imageSmallUrl?: string | null, exchanges?: Array<{ __typename?: 'Exchange', id: string, address: string, networkId: number, name?: string | null, iconUrl?: string | null }> | null, info?: { __typename?: 'TokenInfo', address: string, id: string, networkId: number, symbol: string, imageThumbUrl?: string | null, imageSmallUrl?: string | null, imageLargeUrl?: string | null } | null, socialLinks?: { __typename?: 'SocialLinks', twitter?: string | null, telegram?: string | null, website?: string | null, discord?: string | null } | null, launchpad?: { __typename?: 'LaunchpadData', graduationPercent?: number | null, poolAddress?: string | null, completedAt?: number | null, completed?: boolean | null, completedSlot?: number | null, migratedSlot?: number | null, migratedAt?: number | null, migrated?: boolean | null, migratedPoolAddress?: string | null } | null } } & { ' $fragmentName'?: 'LaunchpadTokenEventFragment' };

export type OnLaunchpadTokenEventBatchSubscriptionVariables = Exact<{
  input?: InputMaybe<OnLaunchpadTokenEventBatchInput>;
}>;


export type OnLaunchpadTokenEventBatchSubscription = { __typename?: 'Subscription', onLaunchpadTokenEventBatch: Array<(
    { __typename?: 'LaunchpadTokenEventOutput' }
    & { ' $fragmentRefs'?: { 'LaunchpadTokenEventFragment': LaunchpadTokenEventFragment } }
  )> };

export type LaunchpadFilterTokenResultFragment = { __typename?: 'TokenFilterResult', buyCount1?: number | null, createdAt?: number | null, holders?: number | null, marketCap?: string | null, priceUSD?: string | null, sellCount1?: number | null, uniqueTransactions1?: number | null, volume1?: string | null, exchanges?: Array<{ __typename?: 'Exchange', id: string, address: string, networkId: number, name?: string | null, iconUrl?: string | null } | null> | null, token?: { __typename?: 'EnhancedToken', address: string, decimals: number, id: string, name?: string | null, networkId: number, symbol?: string | null, createdAt?: number | null, imageSmallUrl?: string | null, info?: { __typename?: 'TokenInfo', address: string, id: string, networkId: number, symbol: string, imageThumbUrl?: string | null, imageSmallUrl?: string | null, imageLargeUrl?: string | null } | null, socialLinks?: { __typename?: 'SocialLinks', twitter?: string | null, telegram?: string | null, website?: string | null, discord?: string | null } | null, launchpad?: { __typename?: 'LaunchpadData', graduationPercent?: number | null, poolAddress?: string | null, completedAt?: number | null, completed?: boolean | null, completedSlot?: number | null, migratedSlot?: number | null, migratedAt?: number | null, migrated?: boolean | null, migratedPoolAddress?: string | null } | null } | null, pair?: { __typename?: 'Pair', address: string, networkId: number, exchangeHash: string, token0: string, token1: string, id: string } | null } & { ' $fragmentName'?: 'LaunchpadFilterTokenResultFragment' };

export type LaunchpadTokensQueryVariables = Exact<{
  filters?: InputMaybe<TokenFilters>;
  statsType?: InputMaybe<TokenPairStatisticsType>;
  phrase?: InputMaybe<Scalars['String']['input']>;
  tokens?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  rankings?: InputMaybe<Array<InputMaybe<TokenRanking>> | InputMaybe<TokenRanking>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type LaunchpadTokensQuery = { __typename?: 'Query', filterTokens?: { __typename?: 'TokenFilterConnection', count?: number | null, page?: number | null, results?: Array<(
      { __typename?: 'TokenFilterResult' }
      & { ' $fragmentRefs'?: { 'LaunchpadFilterTokenResultFragment': LaunchpadFilterTokenResultFragment } }
    ) | null> | null } | null };

export type TokenPageItemFragment = { __typename?: 'TokenFilterResult', priceUSD?: string | null, change24?: string | null, volume24?: string | null, txnCount24?: number | null, lastTransaction?: number | null, token?: { __typename?: 'EnhancedToken', id: string, address: string, name?: string | null, symbol?: string | null, info?: { __typename?: 'TokenInfo', imageThumbUrl?: string | null } | null } | null } & { ' $fragmentName'?: 'TokenPageItemFragment' };

export type TokensPageQueryVariables = Exact<{
  filters: TokenFilters;
  rankings?: InputMaybe<Array<TokenRanking> | TokenRanking>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type TokensPageQuery = { __typename?: 'Query', filterTokens?: { __typename?: 'TokenFilterConnection', results?: Array<(
      { __typename?: 'TokenFilterResult' }
      & { ' $fragmentRefs'?: { 'TokenPageItemFragment': TokenPageItemFragment } }
    ) | null> | null } | null };

export const LaunchpadTokenEventFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LaunchpadTokenEvent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LaunchpadTokenEventOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"buyCount1"}},{"kind":"Field","name":{"kind":"Name","value":"devBurnt"}},{"kind":"Field","name":{"kind":"Name","value":"devSold"}},{"kind":"Field","name":{"kind":"Name","value":"devSoldAll"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"}},{"kind":"Field","name":{"kind":"Name","value":"holders"}},{"kind":"Field","name":{"kind":"Name","value":"marketCap"}},{"kind":"Field","name":{"kind":"Name","value":"networkId"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"protocol"}},{"kind":"Field","name":{"kind":"Name","value":"sellCount1"}},{"kind":"Field","name":{"kind":"Name","value":"transactions1"}},{"kind":"Field","name":{"kind":"Name","value":"volume1"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"networkId"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"imageSmallUrl"}},{"kind":"Field","name":{"kind":"Name","value":"exchanges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"networkId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"iconUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"networkId"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbUrl"}},{"kind":"Field","name":{"kind":"Name","value":"imageSmallUrl"}},{"kind":"Field","name":{"kind":"Name","value":"imageLargeUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"telegram"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"discord"}}]}},{"kind":"Field","name":{"kind":"Name","value":"launchpad"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"graduationPercent"}},{"kind":"Field","name":{"kind":"Name","value":"poolAddress"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}},{"kind":"Field","name":{"kind":"Name","value":"completedSlot"}},{"kind":"Field","name":{"kind":"Name","value":"migratedSlot"}},{"kind":"Field","name":{"kind":"Name","value":"migratedAt"}},{"kind":"Field","name":{"kind":"Name","value":"migrated"}},{"kind":"Field","name":{"kind":"Name","value":"migratedPoolAddress"}}]}}]}}]}}]} as unknown as DocumentNode<LaunchpadTokenEventFragment, unknown>;
export const LaunchpadFilterTokenResultFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LaunchpadFilterTokenResult"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenFilterResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"buyCount1"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"holders"}},{"kind":"Field","name":{"kind":"Name","value":"marketCap"}},{"kind":"Field","name":{"kind":"Name","value":"priceUSD"}},{"kind":"Field","name":{"kind":"Name","value":"sellCount1"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueTransactions1"}},{"kind":"Field","name":{"kind":"Name","value":"volume1"}},{"kind":"Field","name":{"kind":"Name","value":"exchanges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"networkId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"iconUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"networkId"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"imageSmallUrl"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"networkId"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbUrl"}},{"kind":"Field","name":{"kind":"Name","value":"imageSmallUrl"}},{"kind":"Field","name":{"kind":"Name","value":"imageLargeUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"telegram"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"discord"}}]}},{"kind":"Field","name":{"kind":"Name","value":"launchpad"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"graduationPercent"}},{"kind":"Field","name":{"kind":"Name","value":"poolAddress"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}},{"kind":"Field","name":{"kind":"Name","value":"completedSlot"}},{"kind":"Field","name":{"kind":"Name","value":"migratedSlot"}},{"kind":"Field","name":{"kind":"Name","value":"migratedAt"}},{"kind":"Field","name":{"kind":"Name","value":"migrated"}},{"kind":"Field","name":{"kind":"Name","value":"migratedPoolAddress"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pair"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"networkId"}},{"kind":"Field","name":{"kind":"Name","value":"exchangeHash"}},{"kind":"Field","name":{"kind":"Name","value":"token0"}},{"kind":"Field","name":{"kind":"Name","value":"token1"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<LaunchpadFilterTokenResultFragment, unknown>;
export const TokenPageItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenPageItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenFilterResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priceUSD"}},{"kind":"Field","name":{"kind":"Name","value":"change24"}},{"kind":"Field","name":{"kind":"Name","value":"volume24"}},{"kind":"Field","name":{"kind":"Name","value":"txnCount24"}},{"kind":"Field","name":{"kind":"Name","value":"lastTransaction"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageThumbUrl"}}]}}]}}]}}]} as unknown as DocumentNode<TokenPageItemFragment, unknown>;
export const OnLaunchpadTokenEventBatchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnLaunchpadTokenEventBatch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OnLaunchpadTokenEventBatchInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onLaunchpadTokenEventBatch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LaunchpadTokenEvent"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LaunchpadTokenEvent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LaunchpadTokenEventOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"buyCount1"}},{"kind":"Field","name":{"kind":"Name","value":"devBurnt"}},{"kind":"Field","name":{"kind":"Name","value":"devSold"}},{"kind":"Field","name":{"kind":"Name","value":"devSoldAll"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"}},{"kind":"Field","name":{"kind":"Name","value":"holders"}},{"kind":"Field","name":{"kind":"Name","value":"marketCap"}},{"kind":"Field","name":{"kind":"Name","value":"networkId"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"protocol"}},{"kind":"Field","name":{"kind":"Name","value":"sellCount1"}},{"kind":"Field","name":{"kind":"Name","value":"transactions1"}},{"kind":"Field","name":{"kind":"Name","value":"volume1"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"networkId"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"imageSmallUrl"}},{"kind":"Field","name":{"kind":"Name","value":"exchanges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"networkId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"iconUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"networkId"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbUrl"}},{"kind":"Field","name":{"kind":"Name","value":"imageSmallUrl"}},{"kind":"Field","name":{"kind":"Name","value":"imageLargeUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"telegram"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"discord"}}]}},{"kind":"Field","name":{"kind":"Name","value":"launchpad"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"graduationPercent"}},{"kind":"Field","name":{"kind":"Name","value":"poolAddress"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}},{"kind":"Field","name":{"kind":"Name","value":"completedSlot"}},{"kind":"Field","name":{"kind":"Name","value":"migratedSlot"}},{"kind":"Field","name":{"kind":"Name","value":"migratedAt"}},{"kind":"Field","name":{"kind":"Name","value":"migrated"}},{"kind":"Field","name":{"kind":"Name","value":"migratedPoolAddress"}}]}}]}}]}}]} as unknown as DocumentNode<OnLaunchpadTokenEventBatchSubscription, OnLaunchpadTokenEventBatchSubscriptionVariables>;
export const LaunchpadTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LaunchpadTokens"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TokenFilters"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"statsType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TokenPairStatisticsType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phrase"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tokens"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rankings"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TokenRanking"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filterTokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"statsType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"statsType"}}},{"kind":"Argument","name":{"kind":"Name","value":"phrase"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phrase"}}},{"kind":"Argument","name":{"kind":"Name","value":"tokens"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tokens"}}},{"kind":"Argument","name":{"kind":"Name","value":"rankings"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rankings"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LaunchpadFilterTokenResult"}}]}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"page"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LaunchpadFilterTokenResult"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenFilterResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"buyCount1"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"holders"}},{"kind":"Field","name":{"kind":"Name","value":"marketCap"}},{"kind":"Field","name":{"kind":"Name","value":"priceUSD"}},{"kind":"Field","name":{"kind":"Name","value":"sellCount1"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueTransactions1"}},{"kind":"Field","name":{"kind":"Name","value":"volume1"}},{"kind":"Field","name":{"kind":"Name","value":"exchanges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"networkId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"iconUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"networkId"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"imageSmallUrl"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"networkId"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"imageThumbUrl"}},{"kind":"Field","name":{"kind":"Name","value":"imageSmallUrl"}},{"kind":"Field","name":{"kind":"Name","value":"imageLargeUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"telegram"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"discord"}}]}},{"kind":"Field","name":{"kind":"Name","value":"launchpad"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"graduationPercent"}},{"kind":"Field","name":{"kind":"Name","value":"poolAddress"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}},{"kind":"Field","name":{"kind":"Name","value":"completedSlot"}},{"kind":"Field","name":{"kind":"Name","value":"migratedSlot"}},{"kind":"Field","name":{"kind":"Name","value":"migratedAt"}},{"kind":"Field","name":{"kind":"Name","value":"migrated"}},{"kind":"Field","name":{"kind":"Name","value":"migratedPoolAddress"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pair"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"networkId"}},{"kind":"Field","name":{"kind":"Name","value":"exchangeHash"}},{"kind":"Field","name":{"kind":"Name","value":"token0"}},{"kind":"Field","name":{"kind":"Name","value":"token1"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<LaunchpadTokensQuery, LaunchpadTokensQueryVariables>;
export const TokensPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TokensPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TokenFilters"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rankings"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TokenRanking"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filterTokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"rankings"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rankings"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TokenPageItem"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TokenPageItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TokenFilterResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priceUSD"}},{"kind":"Field","name":{"kind":"Name","value":"change24"}},{"kind":"Field","name":{"kind":"Name","value":"volume24"}},{"kind":"Field","name":{"kind":"Name","value":"txnCount24"}},{"kind":"Field","name":{"kind":"Name","value":"lastTransaction"}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageThumbUrl"}}]}}]}}]}}]} as unknown as DocumentNode<TokensPageQuery, TokensPageQueryVariables>;