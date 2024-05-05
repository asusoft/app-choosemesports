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
  Upload: { input: any; output: any; }
};

export type Admin = {
  __typename?: 'Admin';
  id: Scalars['ID']['output'];
  login: Scalars['String']['output'];
};

export type AdminIn = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AdminOrBe = Admin | BaseError;

export type AuthAdmin = {
  __typename?: 'AuthAdmin';
  admin: Admin;
  token: Scalars['String']['output'];
};

export type AuthAdminOrBe = AuthAdmin | BaseError;

export type AuthAdminOrEwf = AuthAdmin | ErrorWithFields;

export type AuthPlayer = {
  __typename?: 'AuthPlayer';
  additionalFields?: Maybe<Array<PlayerAdditionalField>>;
  avatar?: Maybe<File>;
  bio?: Maybe<Scalars['String']['output']>;
  contact: PlayerContact;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  login: Scalars['String']['output'];
  name: Scalars['String']['output'];
  personal: PlayerPersonalInfo;
  playerPositions?: Maybe<Array<PlayerPosition>>;
  role: ERole;
  sport?: Maybe<Sport>;
  userID: Scalars['ID']['output'];
};

export type AuthUser = {
  __typename?: 'AuthUser';
  token: Scalars['String']['output'];
  user: User;
};

export type AuthUserOrBe = AuthUser | BaseError;

export type AuthUserOrEwf = AuthUser | ErrorWithFields;

export type BaseError = {
  __typename?: 'BaseError';
  status: ErrorStatus;
};

export type BooleanObject = {
  __typename?: 'BooleanObject';
  boolean: Scalars['Boolean']['output'];
};

export type BooleanObjectOrBe = BaseError | BooleanObject;

export enum ERole {
  Player = 'PLAYER',
  Scout = 'SCOUT'
}

export enum ErrorStatus {
  AlreadyDone = 'ALREADY_DONE',
  AlreadyExist = 'ALREADY_EXIST',
  InvalidCredentials = 'INVALID_CREDENTIALS',
  InvalidInputData = 'INVALID_INPUT_DATA',
  NotAuthenticated = 'NOT_AUTHENTICATED',
  NotEnoughPermissions = 'NOT_ENOUGH_PERMISSIONS',
  NotFound = 'NOT_FOUND',
  UnknownError = 'UNKNOWN_ERROR'
}

export type ErrorWithFields = {
  __typename?: 'ErrorWithFields';
  fields: Array<Scalars['String']['output']>;
  status: ErrorStatus;
};

export type File = {
  __typename?: 'File';
  checksum?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  size?: Maybe<Scalars['Int']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER',
  Unknown = 'UNKNOWN'
}

export type LogInInput = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: ERole;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPlayerAdditionalFields?: Maybe<BaseError>;
  addPlayerPersonalInfo?: Maybe<BaseError>;
  addPlayerPositions?: Maybe<BaseError>;
  addSportUniqueField?: Maybe<BaseError>;
  adminLogin: AuthAdminOrBe;
  adminLogout?: Maybe<BaseError>;
  changeAdminPassword?: Maybe<ErrorWithFields>;
  changePassword?: Maybe<ErrorWithFields>;
  createAdmin: AuthAdminOrEwf;
  createPlayer: AuthUserOrEwf;
  createPosition: PositionOrBe;
  createSport: SportOrBe;
  hideVideo?: Maybe<BaseError>;
  login: AuthUserOrBe;
  logout?: Maybe<BaseError>;
  postVideo: VideoOrBe;
  requestApproval?: Maybe<BaseError>;
  setPlayerSport?: Maybe<BaseError>;
  showVideo?: Maybe<BaseError>;
  updatePlayer?: Maybe<BaseError>;
  updatePlayerContact?: Maybe<BaseError>;
  updatePlayerPersonalInfo?: Maybe<BaseError>;
  updateUser?: Maybe<ErrorWithFields>;
  uploadImage: UploadFileResponse;
  uploadVideo: UploadFileResponse;
};


export type MutationAddPlayerAdditionalFieldsArgs = {
  data: PlayerAdditionalFieldsIn;
};


export type MutationAddPlayerPersonalInfoArgs = {
  data: PlayerPersonalInfoIn;
};


export type MutationAddPlayerPositionsArgs = {
  data: PlayerPositionsIn;
};


export type MutationAddSportUniqueFieldArgs = {
  input: UniqueFieldIn;
};


export type MutationAdminLoginArgs = {
  input?: InputMaybe<AdminIn>;
};


export type MutationAdminLogoutArgs = {
  token: Scalars['String']['input'];
};


export type MutationChangeAdminPasswordArgs = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};


export type MutationCreateAdminArgs = {
  input?: InputMaybe<AdminIn>;
};


export type MutationCreatePlayerArgs = {
  input: PlayerIn;
};


export type MutationCreatePositionArgs = {
  input: PositionIn;
};


export type MutationCreateSportArgs = {
  input: SportIn;
};


export type MutationHideVideoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  input?: InputMaybe<LogInInput>;
};


export type MutationLogoutArgs = {
  token: Scalars['String']['input'];
};


export type MutationPostVideoArgs = {
  input?: InputMaybe<VideoIn>;
};


export type MutationRequestApprovalArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSetPlayerSportArgs = {
  id: Scalars['ID']['input'];
};


export type MutationShowVideoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdatePlayerArgs = {
  data: PlayerInUpdate;
};


export type MutationUpdatePlayerContactArgs = {
  data: PlayerContactInUpdate;
};


export type MutationUpdatePlayerPersonalInfoArgs = {
  data: PlayerPersonalInfoInUpdate;
};


export type MutationUpdateUserArgs = {
  data: UserInUpdate;
};


export type MutationUploadImageArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationUploadVideoArgs = {
  file: Scalars['Upload']['input'];
};

export type Player = {
  __typename?: 'Player';
  additionalFields?: Maybe<Array<PlayerAdditionalField>>;
  contact: PlayerContact;
  id: Scalars['ID']['output'];
  personal: PlayerPersonalInfo;
  playerPositions?: Maybe<Array<PlayerPosition>>;
  sport?: Maybe<Sport>;
  userID: Scalars['ID']['output'];
};

export type PlayerAdditionalField = {
  __typename?: 'PlayerAdditionalField';
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type PlayerAdditionalFieldIn = {
  label: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type PlayerAdditionalFieldsIn = {
  fields: Array<PlayerAdditionalFieldIn>;
};

export type PlayerContact = {
  __typename?: 'PlayerContact';
  facebook?: Maybe<Scalars['String']['output']>;
  instagram?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  youtube?: Maybe<Scalars['String']['output']>;
};

export type PlayerContactInUpdate = {
  facebook?: InputMaybe<Scalars['String']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  youtube?: InputMaybe<Scalars['String']['input']>;
};

export type PlayerIn = {
  email: Scalars['String']['input'];
  login: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type PlayerInUpdate = {
  contact?: InputMaybe<PlayerContactInUpdate>;
  personal?: InputMaybe<PlayerPersonalInfoInUpdate>;
};

export type PlayerList = {
  __typename?: 'PlayerList';
  players: Array<Player>;
  total: Scalars['Int']['output'];
};

export type PlayerListOrBe = BaseError | PlayerList;

export type PlayerOrBe = BaseError | Player;

export type PlayerPersonalInfo = {
  __typename?: 'PlayerPersonalInfo';
  about?: Maybe<Scalars['String']['output']>;
  dateOfBirth?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Gender>;
  height?: Maybe<Scalars['String']['output']>;
  nationality?: Maybe<UserNationalityOut>;
  weight?: Maybe<Scalars['String']['output']>;
};

export type PlayerPersonalInfoIn = {
  about: Scalars['String']['input'];
  dateOfBirth: Scalars['String']['input'];
  gender: Gender;
  height: Scalars['String']['input'];
  nationality: UserNationalityIn;
  weight: Scalars['String']['input'];
};

export type PlayerPersonalInfoInUpdate = {
  about?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['String']['input']>;
};

export type PlayerPosStat = {
  __typename?: 'PlayerPosStat';
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type PlayerPosStatIn = {
  label: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type PlayerPosition = {
  __typename?: 'PlayerPosition';
  name: Scalars['String']['output'];
  stats: Array<PlayerPosStat>;
};

export type PlayerPositionIn = {
  name: Scalars['String']['input'];
  stats: Array<PlayerPosStatIn>;
};

export type PlayerPositionsIn = {
  positions: Array<PlayerPositionIn>;
};

export type Position = {
  __typename?: 'Position';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  sportID: Scalars['String']['output'];
  stats: Array<Stat>;
};

export type PositionIn = {
  name: Scalars['String']['input'];
  sportID: Scalars['String']['input'];
  stats: Array<StatIn>;
};

export type PositionList = {
  __typename?: 'PositionList';
  positions: Array<Position>;
  total: Scalars['Int']['output'];
};

export type PositionListOrBe = BaseError | PositionList;

export type PositionOrBe = BaseError | Position;

export type Query = {
  __typename?: 'Query';
  getAdminMe: AdminOrBe;
  getMe: UserOrBe;
  getMyVideos: VideoListOrBe;
  getPlayerMe: PlayerOrBe;
  getPlayers: PlayerListOrBe;
  getSportPositions: PositionListOrBe;
  getSports: SportListOrBe;
  getVideosByPlayerId: VideoListOrBe;
  isEmailExist: BooleanObjectOrBe;
  isLoginExist: BooleanObjectOrBe;
  isPhoneExist: BooleanObjectOrBe;
  retrieveFile: RetrieveFileResponse;
  retrievePlayer: PlayerOrBe;
  retrieveSport: SportOrBe;
  retrieveUser: UserOrBe;
  retrieveVideo: VideoOrBe;
};


export type QueryGetPlayersArgs = {
  ageGroup?: InputMaybe<Scalars['String']['input']>;
  limit?: Scalars['Int']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  skip?: Scalars['Int']['input'];
  sportName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetSportPositionsArgs = {
  sportID: Scalars['ID']['input'];
};


export type QueryGetSportsArgs = {
  limit?: Scalars['Int']['input'];
  skip?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetVideosByPlayerIdArgs = {
  id: Scalars['ID']['input'];
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};


export type QueryIsEmailExistArgs = {
  email: Scalars['String']['input'];
};


export type QueryIsLoginExistArgs = {
  login: Scalars['String']['input'];
};


export type QueryIsPhoneExistArgs = {
  phone: Scalars['String']['input'];
};


export type QueryRetrieveFileArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRetrievePlayerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRetrieveSportArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRetrieveUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRetrieveVideoArgs = {
  id: Scalars['ID']['input'];
};

export type RetrieveFileResponse = BaseError | File;

export type Sport = {
  __typename?: 'Sport';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  positions?: Maybe<PositionList>;
  uniqueFields?: Maybe<Array<UniqueField>>;
};

export type SportIn = {
  name: Scalars['String']['input'];
};

export type SportList = {
  __typename?: 'SportList';
  sports: Array<Sport>;
  total: Scalars['Int']['output'];
};

export type SportListOrBe = BaseError | SportList;

export type SportOrBe = BaseError | Sport;

export type Stat = {
  __typename?: 'Stat';
  name: Scalars['String']['output'];
};

export type StatIn = {
  name: Scalars['String']['input'];
};

export type UniqueField = {
  __typename?: 'UniqueField';
  label: Scalars['String']['output'];
  sportID: Scalars['ID']['output'];
};

export type UniqueFieldIn = {
  label: Scalars['String']['input'];
  sportID: Scalars['String']['input'];
};

export type UploadFileResponse = BaseError | File;

export type User = {
  __typename?: 'User';
  avatar?: Maybe<File>;
  bio?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  login: Scalars['String']['output'];
  name: Scalars['String']['output'];
  role: ERole;
};

export type UserInUpdate = {
  avatarID?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  login?: InputMaybe<Scalars['String']['input']>;
};

export type UserNationalityIn = {
  code: Scalars['String']['input'];
  country: Scalars['String']['input'];
};

export type UserNationalityOut = {
  __typename?: 'UserNationalityOut';
  code: Scalars['String']['output'];
  country: Scalars['String']['output'];
};

export type UserOrBe = BaseError | User;

export type Video = {
  __typename?: 'Video';
  attachement: File;
  author: User;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isApproved: Scalars['Boolean']['output'];
  showInProfile: Scalars['Boolean']['output'];
};

export type VideoIn = {
  description?: InputMaybe<Scalars['String']['input']>;
  videoID: Scalars['String']['input'];
};

export type VideoList = {
  __typename?: 'VideoList';
  total: Scalars['Int']['output'];
  videos: Array<Video>;
};

export type VideoListOrBe = BaseError | VideoList;

export type VideoOrBe = BaseError | Video;

export type AdminLoginMutationVariables = Exact<{
  input?: InputMaybe<AdminIn>;
}>;


export type AdminLoginMutation = { __typename?: 'Mutation', adminLogin: { __typename: 'AuthAdmin', token: string, admin: { __typename?: 'Admin', id: string, login: string } } | { __typename: 'BaseError', status: ErrorStatus } };

export type AdminLogoutMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type AdminLogoutMutation = { __typename?: 'Mutation', adminLogout?: { __typename?: 'BaseError', status: ErrorStatus } | null };

export type ChangeAdminPasswordMutationVariables = Exact<{
  oldPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
}>;


export type ChangeAdminPasswordMutation = { __typename?: 'Mutation', changeAdminPassword?: { __typename?: 'ErrorWithFields', status: ErrorStatus, fields: Array<string> } | null };

export type CreateAdminMutationVariables = Exact<{
  input: AdminIn;
}>;


export type CreateAdminMutation = { __typename?: 'Mutation', createAdmin: { __typename: 'AuthAdmin', token: string, admin: { __typename?: 'Admin', id: string, login: string } } | { __typename: 'ErrorWithFields', status: ErrorStatus, fields: Array<string> } };

export type GetAdminMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminMeQuery = { __typename?: 'Query', getAdminMe: { __typename: 'Admin', id: string, login: string } | { __typename: 'BaseError', status: ErrorStatus } };

export type ChangePasswordMutationVariables = Exact<{
  oldPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword?: { __typename?: 'ErrorWithFields', status: ErrorStatus, fields: Array<string> } | null };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', getMe: { __typename: 'BaseError', status: ErrorStatus } | { __typename: 'User', id: string, name: string, login: string, email: string, role: ERole, avatar?: { __typename?: 'File', id: string, path: string } | null } };

export type IsEmailExistQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type IsEmailExistQuery = { __typename?: 'Query', isExist: { __typename: 'BaseError', status: ErrorStatus } | { __typename: 'BooleanObject', boolean: boolean } };

export type IsLoginExistQueryVariables = Exact<{
  login: Scalars['String']['input'];
}>;


export type IsLoginExistQuery = { __typename?: 'Query', isExist: { __typename: 'BaseError', status: ErrorStatus } | { __typename: 'BooleanObject', boolean: boolean } };

export type IsPhoneExistQueryVariables = Exact<{
  phone: Scalars['String']['input'];
}>;


export type IsPhoneExistQuery = { __typename?: 'Query', isExist: { __typename: 'BaseError', status: ErrorStatus } | { __typename: 'BooleanObject', boolean: boolean } };

export type LoginMutationVariables = Exact<{
  input?: InputMaybe<LogInInput>;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename: 'AuthUser', token: string, user: { __typename?: 'User', id: string, name: string, login: string, email: string, role: ERole, avatar?: { __typename?: 'File', id: string, path: string } | null } } | { __typename: 'BaseError', status: ErrorStatus } };

export type LogoutMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type LogoutMutation = { __typename?: 'Mutation', logout?: { __typename?: 'BaseError', status: ErrorStatus } | null };

export type RetrieveFileQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RetrieveFileQuery = { __typename?: 'Query', retrieveFile: { __typename: 'BaseError', status: ErrorStatus } | { __typename: 'File', id: string, createdAt: string, updatedAt: string, name?: string | null, path: string, type: string, checksum?: string | null, size?: number | null } };

export type UploadImageMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
}>;


export type UploadImageMutation = { __typename?: 'Mutation', uploadImage: { __typename: 'BaseError', status: ErrorStatus } | { __typename: 'File', id: string, path: string, type: string } };

export type UploadVideoMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
}>;


export type UploadVideoMutation = { __typename?: 'Mutation', uploadVideo: { __typename: 'BaseError', status: ErrorStatus } | { __typename: 'File', id: string, path: string, type: string } };

export type MediaFragment = { __typename?: 'File', id: string, path: string };

export type AddPlayerAdditionalFieldsMutationVariables = Exact<{
  data: PlayerAdditionalFieldsIn;
}>;


export type AddPlayerAdditionalFieldsMutation = { __typename?: 'Mutation', addPlayerAdditionalFields?: { __typename?: 'BaseError', status: ErrorStatus } | null };

export type AddPlayerPersonalInfoMutationVariables = Exact<{
  data: PlayerPersonalInfoIn;
}>;


export type AddPlayerPersonalInfoMutation = { __typename?: 'Mutation', addPlayerPersonalInfo?: { __typename?: 'BaseError', status: ErrorStatus } | null };

export type AddPlayerPositionsMutationVariables = Exact<{
  data: PlayerPositionsIn;
}>;


export type AddPlayerPositionsMutation = { __typename?: 'Mutation', addPlayerPositions?: { __typename?: 'BaseError', status: ErrorStatus } | null };

export type CreatePlayerMutationVariables = Exact<{
  input: PlayerIn;
}>;


export type CreatePlayerMutation = { __typename?: 'Mutation', createPlayer: { __typename: 'AuthUser', token: string, user: { __typename?: 'User', id: string, name: string, login: string, email: string, role: ERole, avatar?: { __typename?: 'File', id: string, path: string } | null } } | { __typename: 'ErrorWithFields', status: ErrorStatus, fields: Array<string> } };

export type GetPlayerMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlayerMeQuery = { __typename?: 'Query', getPlayerMe: { __typename: 'BaseError', status: ErrorStatus } | { __typename: 'Player', id: string, userID: string, sport?: { __typename?: 'Sport', id: string, name: string, uniqueFields?: Array<{ __typename?: 'UniqueField', sportID: string, label: string }> | null, positions?: { __typename?: 'PositionList', total: number, positions: Array<{ __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> }> } | null } | null, playerPositions?: Array<{ __typename?: 'PlayerPosition', name: string, stats: Array<{ __typename?: 'PlayerPosStat', label: string, value: string }> }> | null, contact: { __typename?: 'PlayerContact', phone?: string | null, youtube?: string | null, facebook?: string | null, twitter?: string | null, instagram?: string | null }, personal: { __typename?: 'PlayerPersonalInfo', dateOfBirth?: string | null, gender?: Gender | null, height?: string | null, weight?: string | null, about?: string | null, nationality?: { __typename?: 'UserNationalityOut', country: string, code: string } | null }, additionalFields?: Array<{ __typename?: 'PlayerAdditionalField', label: string, value: string }> | null } };

export type GetPlayersQueryVariables = Exact<{
  sportName?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  ageGroup?: InputMaybe<Scalars['String']['input']>;
  skip?: Scalars['Int']['input'];
  limit?: Scalars['Int']['input'];
}>;


export type GetPlayersQuery = { __typename?: 'Query', getPlayers: { __typename: 'BaseError', status: ErrorStatus } | { __typename: 'PlayerList', players: Array<{ __typename?: 'Player', id: string, userID: string, sport?: { __typename?: 'Sport', id: string, name: string, uniqueFields?: Array<{ __typename?: 'UniqueField', sportID: string, label: string }> | null, positions?: { __typename?: 'PositionList', total: number, positions: Array<{ __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> }> } | null } | null, playerPositions?: Array<{ __typename?: 'PlayerPosition', name: string, stats: Array<{ __typename?: 'PlayerPosStat', label: string, value: string }> }> | null, contact: { __typename?: 'PlayerContact', phone?: string | null, youtube?: string | null, facebook?: string | null, twitter?: string | null, instagram?: string | null }, personal: { __typename?: 'PlayerPersonalInfo', dateOfBirth?: string | null, gender?: Gender | null, height?: string | null, weight?: string | null, about?: string | null, nationality?: { __typename?: 'UserNationalityOut', country: string, code: string } | null }, additionalFields?: Array<{ __typename?: 'PlayerAdditionalField', label: string, value: string }> | null }> } };

export type RetrievePlayerQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RetrievePlayerQuery = { __typename?: 'Query', retrievePlayer: { __typename: 'BaseError', status: ErrorStatus } | { __typename: 'Player', id: string, userID: string, sport?: { __typename?: 'Sport', id: string, name: string, uniqueFields?: Array<{ __typename?: 'UniqueField', sportID: string, label: string }> | null, positions?: { __typename?: 'PositionList', total: number, positions: Array<{ __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> }> } | null } | null, playerPositions?: Array<{ __typename?: 'PlayerPosition', name: string, stats: Array<{ __typename?: 'PlayerPosStat', label: string, value: string }> }> | null, contact: { __typename?: 'PlayerContact', phone?: string | null, youtube?: string | null, facebook?: string | null, twitter?: string | null, instagram?: string | null }, personal: { __typename?: 'PlayerPersonalInfo', dateOfBirth?: string | null, gender?: Gender | null, height?: string | null, weight?: string | null, about?: string | null, nationality?: { __typename?: 'UserNationalityOut', country: string, code: string } | null }, additionalFields?: Array<{ __typename?: 'PlayerAdditionalField', label: string, value: string }> | null } };

export type SetPlayerSportMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type SetPlayerSportMutation = { __typename?: 'Mutation', setPlayerSport?: { __typename?: 'BaseError', status: ErrorStatus } | null };

export type UpdatePlayerMutationVariables = Exact<{
  data: PlayerInUpdate;
}>;


export type UpdatePlayerMutation = { __typename?: 'Mutation', updatePlayer?: { __typename?: 'BaseError', status: ErrorStatus } | null };

export type UpdatePlayerContactMutationVariables = Exact<{
  data: PlayerContactInUpdate;
}>;


export type UpdatePlayerContactMutation = { __typename?: 'Mutation', updatePlayerContact?: { __typename?: 'BaseError', status: ErrorStatus } | null };

export type UpdatePlayerPersonalInfoMutationVariables = Exact<{
  data: PlayerPersonalInfoInUpdate;
}>;


export type UpdatePlayerPersonalInfoMutation = { __typename?: 'Mutation', updatePlayerPersonalInfo?: { __typename?: 'BaseError', status: ErrorStatus } | null };

export type FullPlayerFragment = { __typename?: 'Player', id: string, userID: string, sport?: { __typename?: 'Sport', id: string, name: string, uniqueFields?: Array<{ __typename?: 'UniqueField', sportID: string, label: string }> | null, positions?: { __typename?: 'PositionList', total: number, positions: Array<{ __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> }> } | null } | null, playerPositions?: Array<{ __typename?: 'PlayerPosition', name: string, stats: Array<{ __typename?: 'PlayerPosStat', label: string, value: string }> }> | null, contact: { __typename?: 'PlayerContact', phone?: string | null, youtube?: string | null, facebook?: string | null, twitter?: string | null, instagram?: string | null }, personal: { __typename?: 'PlayerPersonalInfo', dateOfBirth?: string | null, gender?: Gender | null, height?: string | null, weight?: string | null, about?: string | null, nationality?: { __typename?: 'UserNationalityOut', country: string, code: string } | null }, additionalFields?: Array<{ __typename?: 'PlayerAdditionalField', label: string, value: string }> | null };

export type SimplePlayerFragment = { __typename?: 'Player', id: string, userID: string, sport?: { __typename?: 'Sport', id: string, name: string } | null, playerPositions?: Array<{ __typename?: 'PlayerPosition', name: string, stats: Array<{ __typename?: 'PlayerPosStat', label: string, value: string }> }> | null };

export type PlayerListFragment = { __typename?: 'PlayerList', total: number, players: Array<{ __typename?: 'Player', id: string, userID: string, sport?: { __typename?: 'Sport', id: string, name: string, uniqueFields?: Array<{ __typename?: 'UniqueField', sportID: string, label: string }> | null, positions?: { __typename?: 'PositionList', total: number, positions: Array<{ __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> }> } | null } | null, playerPositions?: Array<{ __typename?: 'PlayerPosition', name: string, stats: Array<{ __typename?: 'PlayerPosStat', label: string, value: string }> }> | null, contact: { __typename?: 'PlayerContact', phone?: string | null, youtube?: string | null, facebook?: string | null, twitter?: string | null, instagram?: string | null }, personal: { __typename?: 'PlayerPersonalInfo', dateOfBirth?: string | null, gender?: Gender | null, height?: string | null, weight?: string | null, about?: string | null, nationality?: { __typename?: 'UserNationalityOut', country: string, code: string } | null }, additionalFields?: Array<{ __typename?: 'PlayerAdditionalField', label: string, value: string }> | null }> };

export type FullAuthPlayerFragment = { __typename?: 'AuthPlayer', id: string, userID: string, name: string, login: string, email: string, role: ERole, sport?: { __typename?: 'Sport', id: string, name: string, uniqueFields?: Array<{ __typename?: 'UniqueField', sportID: string, label: string }> | null, positions?: { __typename?: 'PositionList', total: number, positions: Array<{ __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> }> } | null } | null, playerPositions?: Array<{ __typename?: 'PlayerPosition', name: string, stats: Array<{ __typename?: 'PlayerPosStat', label: string, value: string }> }> | null, contact: { __typename?: 'PlayerContact', phone?: string | null, youtube?: string | null, facebook?: string | null, twitter?: string | null, instagram?: string | null }, personal: { __typename?: 'PlayerPersonalInfo', dateOfBirth?: string | null, gender?: Gender | null, height?: string | null, weight?: string | null, about?: string | null, nationality?: { __typename?: 'UserNationalityOut', country: string, code: string } | null }, avatar?: { __typename?: 'File', id: string, path: string } | null, additionalFields?: Array<{ __typename?: 'PlayerAdditionalField', label: string, value: string }> | null };

export type FullPlayerPositionFragment = { __typename?: 'PlayerPosition', name: string, stats: Array<{ __typename?: 'PlayerPosStat', label: string, value: string }> };

export type AddSportUniqueFieldMutationVariables = Exact<{
  input: UniqueFieldIn;
}>;


export type AddSportUniqueFieldMutation = { __typename?: 'Mutation', addSportUniqueField?: { __typename?: 'BaseError', status: ErrorStatus } | null };

export type CreatePositionMutationVariables = Exact<{
  input: PositionIn;
}>;


export type CreatePositionMutation = { __typename?: 'Mutation', createPosition: { __typename: 'BaseError', status: ErrorStatus } | { __typename: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> } };

export type CreateSportMutationVariables = Exact<{
  input: SportIn;
}>;


export type CreateSportMutation = { __typename?: 'Mutation', createSport: { __typename: 'BaseError', status: ErrorStatus } | { __typename: 'Sport', id: string, name: string } };

export type GetSportPositionsQueryVariables = Exact<{
  sportID: Scalars['ID']['input'];
}>;


export type GetSportPositionsQuery = { __typename?: 'Query', getSportPositions: { __typename: 'BaseError', status: ErrorStatus } | { __typename: 'PositionList', total: number, positions: Array<{ __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> }> } };

export type GetSportsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['String']['input']>;
  limit?: Scalars['Int']['input'];
}>;


export type GetSportsQuery = { __typename?: 'Query', getSports: { __typename: 'BaseError', status: ErrorStatus } | { __typename: 'SportList', total: number, sports: Array<{ __typename?: 'Sport', id: string, name: string, uniqueFields?: Array<{ __typename?: 'UniqueField', sportID: string, label: string }> | null, positions?: { __typename?: 'PositionList', total: number, positions: Array<{ __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> }> } | null }> } };

export type RetrieveSportQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RetrieveSportQuery = { __typename?: 'Query', retrieveSport: { __typename: 'BaseError', status: ErrorStatus } | { __typename: 'Sport', id: string, name: string, uniqueFields?: Array<{ __typename?: 'UniqueField', sportID: string, label: string }> | null, positions?: { __typename?: 'PositionList', total: number, positions: Array<{ __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> }> } | null } };

export type FullSportFragment = { __typename?: 'Sport', id: string, name: string, uniqueFields?: Array<{ __typename?: 'UniqueField', sportID: string, label: string }> | null, positions?: { __typename?: 'PositionList', total: number, positions: Array<{ __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> }> } | null };

export type SimpleSportFragment = { __typename?: 'Sport', id: string, name: string };

export type FullPositionFragment = { __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> };

export type PositionListFragment = { __typename?: 'PositionList', total: number, positions: Array<{ __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> }> };

export type RetrieveUserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RetrieveUserQuery = { __typename?: 'Query', retrieveUser: { __typename: 'BaseError', status: ErrorStatus } | { __typename: 'User', id: string, name: string, login: string, email: string, role: ERole, avatar?: { __typename?: 'File', id: string, path: string } | null } };

export type UpdateUserMutationVariables = Exact<{
  data: UserInUpdate;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'ErrorWithFields', status: ErrorStatus, fields: Array<string> } | null };

export type FullUserFragment = { __typename?: 'User', id: string, name: string, login: string, email: string, role: ERole, avatar?: { __typename?: 'File', id: string, path: string } | null };

export type SimpleUserFragment = { __typename?: 'User', id: string, name: string, login: string, avatar?: { __typename?: 'File', id: string, path: string } | null };

export type HideVideoMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type HideVideoMutation = { __typename?: 'Mutation', hideVideo?: { __typename?: 'BaseError', status: ErrorStatus } | null };

export type PostVideoMutationVariables = Exact<{
  input: VideoIn;
}>;


export type PostVideoMutation = { __typename?: 'Mutation', postVideo: { __typename: 'BaseError', status: ErrorStatus } | { __typename: 'Video', id: string, description?: string | null, isApproved: boolean, showInProfile: boolean, author: { __typename?: 'User', id: string, name: string, login: string, avatar?: { __typename?: 'File', id: string, path: string } | null }, attachement: { __typename?: 'File', id: string, path: string } } };

export type RequestApprovalMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RequestApprovalMutation = { __typename?: 'Mutation', requestApproval?: { __typename?: 'BaseError', status: ErrorStatus } | null };

export type ShowVideoMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ShowVideoMutation = { __typename?: 'Mutation', showVideo?: { __typename?: 'BaseError', status: ErrorStatus } | null };

export type FullVideoFragment = { __typename?: 'Video', id: string, description?: string | null, isApproved: boolean, showInProfile: boolean, author: { __typename?: 'User', id: string, name: string, login: string, avatar?: { __typename?: 'File', id: string, path: string } | null }, attachement: { __typename?: 'File', id: string, path: string } };

export const SimpleSportFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SimpleSport"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sport"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<SimpleSportFragment, unknown>;
export const FullPlayerPositionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPlayerPosition"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerPosition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<FullPlayerPositionFragment, unknown>;
export const SimplePlayerFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SimplePlayer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userID"}},{"kind":"Field","name":{"kind":"Name","value":"sport"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SimpleSport"}}]}},{"kind":"Field","name":{"kind":"Name","value":"playerPositions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullPlayerPosition"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SimpleSport"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sport"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPlayerPosition"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerPosition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<SimplePlayerFragment, unknown>;
export const FullPositionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPosition"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Position"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sportID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<FullPositionFragment, unknown>;
export const PositionListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PositionList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PositionList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullPosition"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPosition"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Position"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sportID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<PositionListFragment, unknown>;
export const FullSportFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullSport"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sport"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sportID"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PositionList"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPosition"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Position"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sportID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PositionList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PositionList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullPosition"}}]}}]}}]} as unknown as DocumentNode<FullSportFragment, unknown>;
export const FullPlayerFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPlayer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userID"}},{"kind":"Field","name":{"kind":"Name","value":"sport"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullSport"}}]}},{"kind":"Field","name":{"kind":"Name","value":"playerPositions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullPlayerPosition"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"youtube"}},{"kind":"Field","name":{"kind":"Name","value":"facebook"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}}]}},{"kind":"Field","name":{"kind":"Name","value":"personal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"nationality"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"about"}}]}},{"kind":"Field","name":{"kind":"Name","value":"additionalFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPosition"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Position"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sportID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PositionList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PositionList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullPosition"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullSport"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sport"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sportID"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PositionList"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPlayerPosition"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerPosition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<FullPlayerFragment, unknown>;
export const PlayerListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlayerList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"players"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullPlayer"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPosition"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Position"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sportID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PositionList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PositionList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullPosition"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullSport"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sport"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sportID"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PositionList"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPlayerPosition"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerPosition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPlayer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userID"}},{"kind":"Field","name":{"kind":"Name","value":"sport"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullSport"}}]}},{"kind":"Field","name":{"kind":"Name","value":"playerPositions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullPlayerPosition"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"youtube"}},{"kind":"Field","name":{"kind":"Name","value":"facebook"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}}]}},{"kind":"Field","name":{"kind":"Name","value":"personal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"nationality"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"about"}}]}},{"kind":"Field","name":{"kind":"Name","value":"additionalFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<PlayerListFragment, unknown>;
export const MediaFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"File"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]} as unknown as DocumentNode<MediaFragment, unknown>;
export const FullAuthPlayerFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullAuthPlayer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthPlayer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userID"}},{"kind":"Field","name":{"kind":"Name","value":"sport"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullSport"}}]}},{"kind":"Field","name":{"kind":"Name","value":"playerPositions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullPlayerPosition"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"youtube"}},{"kind":"Field","name":{"kind":"Name","value":"facebook"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}}]}},{"kind":"Field","name":{"kind":"Name","value":"personal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"nationality"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"about"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"additionalFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPosition"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Position"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sportID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PositionList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PositionList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullPosition"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullSport"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sport"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sportID"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PositionList"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPlayerPosition"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerPosition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"File"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]} as unknown as DocumentNode<FullAuthPlayerFragment, unknown>;
export const FullUserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Media"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"File"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]} as unknown as DocumentNode<FullUserFragment, unknown>;
export const SimpleUserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SimpleUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Media"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"File"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]} as unknown as DocumentNode<SimpleUserFragment, unknown>;
export const FullVideoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullVideo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Video"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SimpleUser"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isApproved"}},{"kind":"Field","name":{"kind":"Name","value":"showInProfile"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"File"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SimpleUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Media"}}]}}]}}]} as unknown as DocumentNode<FullVideoFragment, unknown>;
export const AdminLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminIn"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthAdmin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<AdminLoginMutation, AdminLoginMutationVariables>;
export const AdminLogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminLogout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminLogout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<AdminLogoutMutation, AdminLogoutMutationVariables>;
export const ChangeAdminPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeAdminPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeAdminPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"oldPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}}},{"kind":"Argument","name":{"kind":"Name","value":"newPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"fields"}}]}}]}}]} as unknown as DocumentNode<ChangeAdminPasswordMutation, ChangeAdminPasswordMutationVariables>;
export const CreateAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminIn"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthAdmin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorWithFields"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"fields"}}]}}]}}]}}]} as unknown as DocumentNode<CreateAdminMutation, CreateAdminMutationVariables>;
export const GetAdminMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAdminMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAdminMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<GetAdminMeQuery, GetAdminMeQueryVariables>;
export const ChangePasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"oldPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}}},{"kind":"Argument","name":{"kind":"Name","value":"newPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"fields"}}]}}]}}]} as unknown as DocumentNode<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const GetMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullUser"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"File"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Media"}}]}}]}}]} as unknown as DocumentNode<GetMeQuery, GetMeQueryVariables>;
export const IsEmailExistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IsEmailExist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"isExist"},"name":{"kind":"Name","value":"isEmailExist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BooleanObject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"boolean"}}]}}]}}]}}]} as unknown as DocumentNode<IsEmailExistQuery, IsEmailExistQueryVariables>;
export const IsLoginExistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IsLoginExist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"isExist"},"name":{"kind":"Name","value":"isLoginExist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BooleanObject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"boolean"}}]}}]}}]}}]} as unknown as DocumentNode<IsLoginExistQuery, IsLoginExistQueryVariables>;
export const IsPhoneExistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IsPhoneExist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"isExist"},"name":{"kind":"Name","value":"isPhoneExist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BooleanObject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"boolean"}}]}}]}}]}}]} as unknown as DocumentNode<IsPhoneExistQuery, IsPhoneExistQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LogInInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullUser"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"File"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Media"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const RetrieveFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RetrieveFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"retrieveFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"File"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"checksum"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}}]}}]}}]} as unknown as DocumentNode<RetrieveFileQuery, RetrieveFileQueryVariables>;
export const UploadImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UploadImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"File"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]} as unknown as DocumentNode<UploadImageMutation, UploadImageMutationVariables>;
export const UploadVideoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UploadVideo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadVideo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"File"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]} as unknown as DocumentNode<UploadVideoMutation, UploadVideoMutationVariables>;
export const AddPlayerAdditionalFieldsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddPlayerAdditionalFields"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerAdditionalFieldsIn"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addPlayerAdditionalFields"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<AddPlayerAdditionalFieldsMutation, AddPlayerAdditionalFieldsMutationVariables>;
export const AddPlayerPersonalInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddPlayerPersonalInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerPersonalInfoIn"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addPlayerPersonalInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<AddPlayerPersonalInfoMutation, AddPlayerPersonalInfoMutationVariables>;
export const AddPlayerPositionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddPlayerPositions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerPositionsIn"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addPlayerPositions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<AddPlayerPositionsMutation, AddPlayerPositionsMutationVariables>;
export const CreatePlayerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePlayer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerIn"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPlayer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullUser"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorWithFields"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"fields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"File"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Media"}}]}}]}}]} as unknown as DocumentNode<CreatePlayerMutation, CreatePlayerMutationVariables>;
export const GetPlayerMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPlayerMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPlayerMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullPlayer"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPosition"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Position"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sportID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PositionList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PositionList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullPosition"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullSport"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sport"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sportID"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PositionList"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPlayerPosition"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerPosition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPlayer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userID"}},{"kind":"Field","name":{"kind":"Name","value":"sport"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullSport"}}]}},{"kind":"Field","name":{"kind":"Name","value":"playerPositions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullPlayerPosition"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"youtube"}},{"kind":"Field","name":{"kind":"Name","value":"facebook"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}}]}},{"kind":"Field","name":{"kind":"Name","value":"personal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"nationality"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"about"}}]}},{"kind":"Field","name":{"kind":"Name","value":"additionalFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<GetPlayerMeQuery, GetPlayerMeQueryVariables>;
export const GetPlayersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPlayers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sportName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"location"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ageGroup"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"0"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"20"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPlayers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sportName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sportName"}}},{"kind":"Argument","name":{"kind":"Name","value":"location"},"value":{"kind":"Variable","name":{"kind":"Name","value":"location"}}},{"kind":"Argument","name":{"kind":"Name","value":"ageGroup"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ageGroup"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"players"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullPlayer"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPosition"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Position"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sportID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PositionList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PositionList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullPosition"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullSport"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sport"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sportID"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PositionList"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPlayerPosition"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerPosition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPlayer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userID"}},{"kind":"Field","name":{"kind":"Name","value":"sport"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullSport"}}]}},{"kind":"Field","name":{"kind":"Name","value":"playerPositions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullPlayerPosition"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"youtube"}},{"kind":"Field","name":{"kind":"Name","value":"facebook"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}}]}},{"kind":"Field","name":{"kind":"Name","value":"personal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"nationality"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"about"}}]}},{"kind":"Field","name":{"kind":"Name","value":"additionalFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<GetPlayersQuery, GetPlayersQueryVariables>;
export const RetrievePlayerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RetrievePlayer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"retrievePlayer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullPlayer"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPosition"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Position"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sportID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PositionList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PositionList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullPosition"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullSport"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sport"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sportID"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PositionList"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPlayerPosition"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerPosition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPlayer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userID"}},{"kind":"Field","name":{"kind":"Name","value":"sport"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullSport"}}]}},{"kind":"Field","name":{"kind":"Name","value":"playerPositions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullPlayerPosition"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"youtube"}},{"kind":"Field","name":{"kind":"Name","value":"facebook"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}}]}},{"kind":"Field","name":{"kind":"Name","value":"personal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"nationality"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"about"}}]}},{"kind":"Field","name":{"kind":"Name","value":"additionalFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<RetrievePlayerQuery, RetrievePlayerQueryVariables>;
export const SetPlayerSportDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetPlayerSport"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setPlayerSport"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<SetPlayerSportMutation, SetPlayerSportMutationVariables>;
export const UpdatePlayerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePlayer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerInUpdate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePlayer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UpdatePlayerMutation, UpdatePlayerMutationVariables>;
export const UpdatePlayerContactDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePlayerContact"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerContactInUpdate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePlayerContact"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UpdatePlayerContactMutation, UpdatePlayerContactMutationVariables>;
export const UpdatePlayerPersonalInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePlayerPersonalInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerPersonalInfoInUpdate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePlayerPersonalInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UpdatePlayerPersonalInfoMutation, UpdatePlayerPersonalInfoMutationVariables>;
export const AddSportUniqueFieldDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddSportUniqueField"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UniqueFieldIn"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addSportUniqueField"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<AddSportUniqueFieldMutation, AddSportUniqueFieldMutationVariables>;
export const CreatePositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePosition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PositionIn"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPosition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Position"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullPosition"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPosition"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Position"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sportID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreatePositionMutation, CreatePositionMutationVariables>;
export const CreateSportDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSport"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SportIn"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSport"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sport"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SimpleSport"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SimpleSport"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sport"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<CreateSportMutation, CreateSportMutationVariables>;
export const GetSportPositionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSportPositions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sportID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSportPositions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sportID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sportID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PositionList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PositionList"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPosition"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Position"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sportID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PositionList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PositionList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullPosition"}}]}}]}}]} as unknown as DocumentNode<GetSportPositionsQuery, GetSportPositionsQueryVariables>;
export const GetSportsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSports"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"20"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSports"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SportList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sports"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullSport"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPosition"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Position"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sportID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PositionList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PositionList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullPosition"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullSport"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sport"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sportID"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PositionList"}}]}}]}}]} as unknown as DocumentNode<GetSportsQuery, GetSportsQueryVariables>;
export const RetrieveSportDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RetrieveSport"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"retrieveSport"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sport"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullSport"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullPosition"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Position"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sportID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PositionList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PositionList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullPosition"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullSport"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Sport"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sportID"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PositionList"}}]}}]}}]} as unknown as DocumentNode<RetrieveSportQuery, RetrieveSportQueryVariables>;
export const RetrieveUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RetrieveUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"retrieveUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullUser"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"File"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Media"}}]}}]}}]} as unknown as DocumentNode<RetrieveUserQuery, RetrieveUserQueryVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserInUpdate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"fields"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const HideVideoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"HideVideo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hideVideo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<HideVideoMutation, HideVideoMutationVariables>;
export const PostVideoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PostVideo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VideoIn"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postVideo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Video"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullVideo"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"File"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SimpleUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Media"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullVideo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Video"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SimpleUser"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isApproved"}},{"kind":"Field","name":{"kind":"Name","value":"showInProfile"}}]}}]} as unknown as DocumentNode<PostVideoMutation, PostVideoMutationVariables>;
export const RequestApprovalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RequestApproval"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestApproval"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<RequestApprovalMutation, RequestApprovalMutationVariables>;
export const ShowVideoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ShowVideo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"showVideo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<ShowVideoMutation, ShowVideoMutationVariables>;