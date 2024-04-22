import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
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
  Other = 'OTHER'
}

export type LogInInput = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: ERole;
};

export type Mutation = {
  __typename?: 'Mutation';
  addSportUniqueField?: Maybe<BaseError>;
  adminLogin: AuthAdminOrBe;
  adminLogout?: Maybe<BaseError>;
  changeAdminPassword?: Maybe<ErrorWithFields>;
  changePassword?: Maybe<ErrorWithFields>;
  createAdmin: AuthAdminOrEwf;
  createPlayer: AuthUserOrEwf;
  createPosition: PositionOrBe;
  createSport: SportOrBe;
  login: AuthUserOrBe;
  logout?: Maybe<BaseError>;
  updatePlayer?: Maybe<BaseError>;
  updatePlayerContact?: Maybe<BaseError>;
  updatePlayerPersonalInfo?: Maybe<BaseError>;
  updateUser?: Maybe<ErrorWithFields>;
  uploadImage: UploadFileResponse;
  uploadVideo: UploadFileResponse;
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


export type MutationLoginArgs = {
  input?: InputMaybe<LogInInput>;
};


export type MutationLogoutArgs = {
  token: Scalars['String']['input'];
};


export type MutationUpdatePlayerArgs = {
  data?: InputMaybe<PlayerInUpdate>;
};


export type MutationUpdatePlayerContactArgs = {
  data?: InputMaybe<PlayerContactInUpdate>;
};


export type MutationUpdatePlayerPersonalInfoArgs = {
  data?: InputMaybe<PlayerPersonalInfoIn>;
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
  contact: PlayerContact;
  dob: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  personal: PlayerPersonalInfo;
  positions?: Maybe<Array<Position>>;
  sport: Sport;
  userID: Scalars['ID']['output'];
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
  dob: Scalars['String']['input'];
  email: Scalars['String']['input'];
  gender: Gender;
  location: Scalars['String']['input'];
  login: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  sportID: Scalars['String']['input'];
};

export type PlayerInUpdate = {
  contact?: InputMaybe<PlayerContactInUpdate>;
  personal?: InputMaybe<PlayerPersonalInfoIn>;
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
  about: Scalars['String']['output'];
  height: Scalars['String']['output'];
  weight: Scalars['String']['output'];
};

export type PlayerPersonalInfoIn = {
  about?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['String']['input']>;
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
  getPlayerMe: PlayerOrBe;
  getPlayers: PlayerListOrBe;
  getSportPositions: PositionListOrBe;
  getSports: SportListOrBe;
  isEmailExist: BooleanObjectOrBe;
  isLoginExist: BooleanObjectOrBe;
  isPhoneExist: BooleanObjectOrBe;
  retrieveFile: RetrieveFileResponse;
  retrievePlayer: PlayerOrBe;
  retrieveSport: SportOrBe;
  retrieveUser: UserOrBe;
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
  id: Scalars['ID']['output'];
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
  gender: Gender;
  id: Scalars['ID']['output'];
  location: Scalars['String']['output'];
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

export type UserOrBe = BaseError | User;

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


export type GetMeQuery = { __typename?: 'Query', getMe: { __typename: 'BaseError', status: ErrorStatus } | { __typename: 'User', id: string, name: string, login: string, email: string, role: ERole, gender: Gender, bio?: string | null, location: string, avatar?: { __typename?: 'File', id: string, path: string } | null } };

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


export type LoginMutation = { __typename?: 'Mutation', login: { __typename: 'AuthUser', token: string, user: { __typename?: 'User', id: string, name: string, login: string, email: string, role: ERole, gender: Gender, bio?: string | null, location: string, avatar?: { __typename?: 'File', id: string, path: string } | null } } | { __typename: 'BaseError', status: ErrorStatus } };

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

export type CreatePlayerMutationVariables = Exact<{
  input: PlayerIn;
}>;


export type CreatePlayerMutation = { __typename?: 'Mutation', createPlayer: { __typename: 'AuthUser', token: string, user: { __typename?: 'User', id: string, name: string, login: string, email: string, role: ERole, gender: Gender, bio?: string | null, location: string, avatar?: { __typename?: 'File', id: string, path: string } | null } } | { __typename: 'ErrorWithFields', status: ErrorStatus, fields: Array<string> } };

export type GetPlayerMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlayerMeQuery = { __typename?: 'Query', getPlayerMe: { __typename: 'BaseError', status: ErrorStatus } | { __typename: 'Player', id: string, userID: string, dob: string, sport: { __typename?: 'Sport', id: string, name: string, uniqueFields?: Array<{ __typename?: 'UniqueField', id: string, sportID: string, label: string }> | null, positions?: { __typename?: 'PositionList', total: number, positions: Array<{ __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> }> } | null }, positions?: Array<{ __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> }> | null, contact: { __typename?: 'PlayerContact', phone?: string | null, youtube?: string | null, facebook?: string | null, twitter?: string | null, instagram?: string | null }, personal: { __typename?: 'PlayerPersonalInfo', height: string, weight: string, about: string } } };

export type GetPlayersQueryVariables = Exact<{
  sportName?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  ageGroup?: InputMaybe<Scalars['String']['input']>;
  skip?: Scalars['Int']['input'];
  limit?: Scalars['Int']['input'];
}>;


export type GetPlayersQuery = { __typename?: 'Query', getPlayers: { __typename: 'BaseError', status: ErrorStatus } | { __typename: 'PlayerList', players: Array<{ __typename?: 'Player', id: string, userID: string, dob: string, sport: { __typename?: 'Sport', id: string, name: string, uniqueFields?: Array<{ __typename?: 'UniqueField', id: string, sportID: string, label: string }> | null, positions?: { __typename?: 'PositionList', total: number, positions: Array<{ __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> }> } | null }, positions?: Array<{ __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> }> | null, contact: { __typename?: 'PlayerContact', phone?: string | null, youtube?: string | null, facebook?: string | null, twitter?: string | null, instagram?: string | null }, personal: { __typename?: 'PlayerPersonalInfo', height: string, weight: string, about: string } }> } };

export type RetrievePlayerQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RetrievePlayerQuery = { __typename?: 'Query', retrievePlayer: { __typename: 'BaseError', status: ErrorStatus } | { __typename: 'Player', id: string, userID: string, dob: string, sport: { __typename?: 'Sport', id: string, name: string, uniqueFields?: Array<{ __typename?: 'UniqueField', id: string, sportID: string, label: string }> | null, positions?: { __typename?: 'PositionList', total: number, positions: Array<{ __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> }> } | null }, positions?: Array<{ __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> }> | null, contact: { __typename?: 'PlayerContact', phone?: string | null, youtube?: string | null, facebook?: string | null, twitter?: string | null, instagram?: string | null }, personal: { __typename?: 'PlayerPersonalInfo', height: string, weight: string, about: string } } };

export type UpdatePlayerMutationVariables = Exact<{
  data: PlayerInUpdate;
}>;


export type UpdatePlayerMutation = { __typename?: 'Mutation', updatePlayer?: { __typename?: 'BaseError', status: ErrorStatus } | null };

export type UpdatePlayerContactMutationVariables = Exact<{
  data: PlayerContactInUpdate;
}>;


export type UpdatePlayerContactMutation = { __typename?: 'Mutation', updatePlayerContact?: { __typename?: 'BaseError', status: ErrorStatus } | null };

export type UpdatePlayerPersonalInfoMutationVariables = Exact<{
  data: PlayerPersonalInfoIn;
}>;


export type UpdatePlayerPersonalInfoMutation = { __typename?: 'Mutation', updatePlayerPersonalInfo?: { __typename?: 'BaseError', status: ErrorStatus } | null };

export type FullPlayerFragment = { __typename?: 'Player', id: string, userID: string, dob: string, sport: { __typename?: 'Sport', id: string, name: string, uniqueFields?: Array<{ __typename?: 'UniqueField', id: string, sportID: string, label: string }> | null, positions?: { __typename?: 'PositionList', total: number, positions: Array<{ __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> }> } | null }, positions?: Array<{ __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> }> | null, contact: { __typename?: 'PlayerContact', phone?: string | null, youtube?: string | null, facebook?: string | null, twitter?: string | null, instagram?: string | null }, personal: { __typename?: 'PlayerPersonalInfo', height: string, weight: string, about: string } };

export type SimplePlayerFragment = { __typename?: 'Player', id: string, userID: string, sport: { __typename?: 'Sport', id: string, name: string }, positions?: Array<{ __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> }> | null };

export type PlayerListFragment = { __typename?: 'PlayerList', total: number, players: Array<{ __typename?: 'Player', id: string, userID: string, dob: string, sport: { __typename?: 'Sport', id: string, name: string, uniqueFields?: Array<{ __typename?: 'UniqueField', id: string, sportID: string, label: string }> | null, positions?: { __typename?: 'PositionList', total: number, positions: Array<{ __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> }> } | null }, positions?: Array<{ __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> }> | null, contact: { __typename?: 'PlayerContact', phone?: string | null, youtube?: string | null, facebook?: string | null, twitter?: string | null, instagram?: string | null }, personal: { __typename?: 'PlayerPersonalInfo', height: string, weight: string, about: string } }> };

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


export type GetSportsQuery = { __typename?: 'Query', getSports: { __typename: 'BaseError', status: ErrorStatus } | { __typename: 'SportList', total: number, sports: Array<{ __typename?: 'Sport', id: string, name: string }> } };

export type RetrieveSportQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RetrieveSportQuery = { __typename?: 'Query', retrieveSport: { __typename: 'BaseError', status: ErrorStatus } | { __typename: 'Sport', id: string, name: string, uniqueFields?: Array<{ __typename?: 'UniqueField', id: string, sportID: string, label: string }> | null, positions?: { __typename?: 'PositionList', total: number, positions: Array<{ __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> }> } | null } };

export type FullSportFragment = { __typename?: 'Sport', id: string, name: string, uniqueFields?: Array<{ __typename?: 'UniqueField', id: string, sportID: string, label: string }> | null, positions?: { __typename?: 'PositionList', total: number, positions: Array<{ __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> }> } | null };

export type SimpleSportFragment = { __typename?: 'Sport', id: string, name: string };

export type FullPositionFragment = { __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> };

export type PositionListFragment = { __typename?: 'PositionList', total: number, positions: Array<{ __typename?: 'Position', id: string, sportID: string, name: string, stats: Array<{ __typename?: 'Stat', name: string }> }> };

export type RetrieveUserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RetrieveUserQuery = { __typename?: 'Query', retrieveUser: { __typename: 'BaseError', status: ErrorStatus } | { __typename: 'User', id: string, name: string, login: string, email: string, role: ERole, gender: Gender, bio?: string | null, location: string, avatar?: { __typename?: 'File', id: string, path: string } | null } };

export type UpdateUserMutationVariables = Exact<{
  data: UserInUpdate;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'ErrorWithFields', status: ErrorStatus, fields: Array<string> } | null };

export type FullUserFragment = { __typename?: 'User', id: string, name: string, login: string, email: string, role: ERole, gender: Gender, bio?: string | null, location: string, avatar?: { __typename?: 'File', id: string, path: string } | null };

export type SimpleUserFragment = { __typename?: 'User', id: string, name: string, login: string, bio?: string | null, location: string, avatar?: { __typename?: 'File', id: string, path: string } | null };

export const SimpleSportFragmentDoc = gql`
    fragment SimpleSport on Sport {
  id
  name
}
    `;
export const FullPositionFragmentDoc = gql`
    fragment FullPosition on Position {
  id
  sportID
  name
  stats {
    name
  }
}
    `;
export const SimplePlayerFragmentDoc = gql`
    fragment SimplePlayer on Player {
  id
  userID
  sport {
    ...SimpleSport
  }
  positions {
    ...FullPosition
  }
}
    ${SimpleSportFragmentDoc}
${FullPositionFragmentDoc}`;
export const PositionListFragmentDoc = gql`
    fragment PositionList on PositionList {
  total
  positions {
    ...FullPosition
  }
}
    ${FullPositionFragmentDoc}`;
export const FullSportFragmentDoc = gql`
    fragment FullSport on Sport {
  id
  name
  uniqueFields {
    id
    sportID
    label
  }
  positions {
    ...PositionList
  }
}
    ${PositionListFragmentDoc}`;
export const FullPlayerFragmentDoc = gql`
    fragment FullPlayer on Player {
  id
  userID
  sport {
    ...FullSport
  }
  positions {
    ...FullPosition
  }
  dob
  contact {
    phone
    youtube
    facebook
    twitter
    instagram
  }
  personal {
    height
    weight
    about
  }
}
    ${FullSportFragmentDoc}
${FullPositionFragmentDoc}`;
export const PlayerListFragmentDoc = gql`
    fragment PlayerList on PlayerList {
  total
  players {
    ...FullPlayer
  }
}
    ${FullPlayerFragmentDoc}`;
export const MediaFragmentDoc = gql`
    fragment Media on File {
  id
  path
}
    `;
export const FullUserFragmentDoc = gql`
    fragment FullUser on User {
  id
  name
  login
  email
  role
  gender
  avatar {
    ...Media
  }
  bio
  location
}
    ${MediaFragmentDoc}`;
export const SimpleUserFragmentDoc = gql`
    fragment SimpleUser on User {
  id
  name
  login
  avatar {
    ...Media
  }
  bio
  location
}
    ${MediaFragmentDoc}`;
export const AdminLoginDocument = gql`
    mutation AdminLogin($input: AdminIn) {
  adminLogin(input: $input) {
    __typename
    ... on AuthAdmin {
      admin {
        id
        login
      }
      token
    }
    ... on BaseError {
      status
    }
  }
}
    `;
export type AdminLoginMutationFn = Apollo.MutationFunction<AdminLoginMutation, AdminLoginMutationVariables>;

/**
 * __useAdminLoginMutation__
 *
 * To run a mutation, you first call `useAdminLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminLoginMutation, { data, loading, error }] = useAdminLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminLoginMutation(baseOptions?: Apollo.MutationHookOptions<AdminLoginMutation, AdminLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminLoginMutation, AdminLoginMutationVariables>(AdminLoginDocument, options);
      }
export type AdminLoginMutationHookResult = ReturnType<typeof useAdminLoginMutation>;
export type AdminLoginMutationResult = Apollo.MutationResult<AdminLoginMutation>;
export type AdminLoginMutationOptions = Apollo.BaseMutationOptions<AdminLoginMutation, AdminLoginMutationVariables>;
export const AdminLogoutDocument = gql`
    mutation AdminLogout($token: String!) {
  adminLogout(token: $token) {
    status
  }
}
    `;
export type AdminLogoutMutationFn = Apollo.MutationFunction<AdminLogoutMutation, AdminLogoutMutationVariables>;

/**
 * __useAdminLogoutMutation__
 *
 * To run a mutation, you first call `useAdminLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminLogoutMutation, { data, loading, error }] = useAdminLogoutMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useAdminLogoutMutation(baseOptions?: Apollo.MutationHookOptions<AdminLogoutMutation, AdminLogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminLogoutMutation, AdminLogoutMutationVariables>(AdminLogoutDocument, options);
      }
export type AdminLogoutMutationHookResult = ReturnType<typeof useAdminLogoutMutation>;
export type AdminLogoutMutationResult = Apollo.MutationResult<AdminLogoutMutation>;
export type AdminLogoutMutationOptions = Apollo.BaseMutationOptions<AdminLogoutMutation, AdminLogoutMutationVariables>;
export const ChangeAdminPasswordDocument = gql`
    mutation ChangeAdminPassword($oldPassword: String!, $newPassword: String!) {
  changeAdminPassword(oldPassword: $oldPassword, newPassword: $newPassword) {
    status
    fields
  }
}
    `;
export type ChangeAdminPasswordMutationFn = Apollo.MutationFunction<ChangeAdminPasswordMutation, ChangeAdminPasswordMutationVariables>;

/**
 * __useChangeAdminPasswordMutation__
 *
 * To run a mutation, you first call `useChangeAdminPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeAdminPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeAdminPasswordMutation, { data, loading, error }] = useChangeAdminPasswordMutation({
 *   variables: {
 *      oldPassword: // value for 'oldPassword'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangeAdminPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangeAdminPasswordMutation, ChangeAdminPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeAdminPasswordMutation, ChangeAdminPasswordMutationVariables>(ChangeAdminPasswordDocument, options);
      }
export type ChangeAdminPasswordMutationHookResult = ReturnType<typeof useChangeAdminPasswordMutation>;
export type ChangeAdminPasswordMutationResult = Apollo.MutationResult<ChangeAdminPasswordMutation>;
export type ChangeAdminPasswordMutationOptions = Apollo.BaseMutationOptions<ChangeAdminPasswordMutation, ChangeAdminPasswordMutationVariables>;
export const CreateAdminDocument = gql`
    mutation CreateAdmin($input: AdminIn!) {
  createAdmin(input: $input) {
    __typename
    ... on AuthAdmin {
      admin {
        id
        login
      }
      token
    }
    ... on ErrorWithFields {
      status
      fields
    }
  }
}
    `;
export type CreateAdminMutationFn = Apollo.MutationFunction<CreateAdminMutation, CreateAdminMutationVariables>;

/**
 * __useCreateAdminMutation__
 *
 * To run a mutation, you first call `useCreateAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdminMutation, { data, loading, error }] = useCreateAdminMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAdminMutation(baseOptions?: Apollo.MutationHookOptions<CreateAdminMutation, CreateAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAdminMutation, CreateAdminMutationVariables>(CreateAdminDocument, options);
      }
export type CreateAdminMutationHookResult = ReturnType<typeof useCreateAdminMutation>;
export type CreateAdminMutationResult = Apollo.MutationResult<CreateAdminMutation>;
export type CreateAdminMutationOptions = Apollo.BaseMutationOptions<CreateAdminMutation, CreateAdminMutationVariables>;
export const GetAdminMeDocument = gql`
    query GetAdminMe {
  getAdminMe {
    __typename
    ... on Admin {
      id
      login
    }
    ... on BaseError {
      status
    }
  }
}
    `;

/**
 * __useGetAdminMeQuery__
 *
 * To run a query within a React component, call `useGetAdminMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdminMeQuery(baseOptions?: Apollo.QueryHookOptions<GetAdminMeQuery, GetAdminMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdminMeQuery, GetAdminMeQueryVariables>(GetAdminMeDocument, options);
      }
export function useGetAdminMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdminMeQuery, GetAdminMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdminMeQuery, GetAdminMeQueryVariables>(GetAdminMeDocument, options);
        }
export function useGetAdminMeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAdminMeQuery, GetAdminMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAdminMeQuery, GetAdminMeQueryVariables>(GetAdminMeDocument, options);
        }
export type GetAdminMeQueryHookResult = ReturnType<typeof useGetAdminMeQuery>;
export type GetAdminMeLazyQueryHookResult = ReturnType<typeof useGetAdminMeLazyQuery>;
export type GetAdminMeSuspenseQueryHookResult = ReturnType<typeof useGetAdminMeSuspenseQuery>;
export type GetAdminMeQueryResult = Apollo.QueryResult<GetAdminMeQuery, GetAdminMeQueryVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($oldPassword: String!, $newPassword: String!) {
  changePassword(oldPassword: $oldPassword, newPassword: $newPassword) {
    status
    fields
  }
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      oldPassword: // value for 'oldPassword'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const GetMeDocument = gql`
    query GetMe {
  getMe {
    __typename
    ... on User {
      ...FullUser
    }
    ... on BaseError {
      status
    }
  }
}
    ${FullUserFragmentDoc}`;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
      }
export function useGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export function useGetMeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeSuspenseQueryHookResult = ReturnType<typeof useGetMeSuspenseQuery>;
export type GetMeQueryResult = Apollo.QueryResult<GetMeQuery, GetMeQueryVariables>;
export const IsEmailExistDocument = gql`
    query IsEmailExist($email: String!) {
  isExist: isEmailExist(email: $email) {
    __typename
    ... on BaseError {
      status
    }
    ... on BooleanObject {
      boolean
    }
  }
}
    `;

/**
 * __useIsEmailExistQuery__
 *
 * To run a query within a React component, call `useIsEmailExistQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsEmailExistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsEmailExistQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useIsEmailExistQuery(baseOptions: Apollo.QueryHookOptions<IsEmailExistQuery, IsEmailExistQueryVariables> & ({ variables: IsEmailExistQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsEmailExistQuery, IsEmailExistQueryVariables>(IsEmailExistDocument, options);
      }
export function useIsEmailExistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsEmailExistQuery, IsEmailExistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsEmailExistQuery, IsEmailExistQueryVariables>(IsEmailExistDocument, options);
        }
export function useIsEmailExistSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IsEmailExistQuery, IsEmailExistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IsEmailExistQuery, IsEmailExistQueryVariables>(IsEmailExistDocument, options);
        }
export type IsEmailExistQueryHookResult = ReturnType<typeof useIsEmailExistQuery>;
export type IsEmailExistLazyQueryHookResult = ReturnType<typeof useIsEmailExistLazyQuery>;
export type IsEmailExistSuspenseQueryHookResult = ReturnType<typeof useIsEmailExistSuspenseQuery>;
export type IsEmailExistQueryResult = Apollo.QueryResult<IsEmailExistQuery, IsEmailExistQueryVariables>;
export const IsLoginExistDocument = gql`
    query IsLoginExist($login: String!) {
  isExist: isLoginExist(login: $login) {
    __typename
    ... on BaseError {
      status
    }
    ... on BooleanObject {
      boolean
    }
  }
}
    `;

/**
 * __useIsLoginExistQuery__
 *
 * To run a query within a React component, call `useIsLoginExistQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsLoginExistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsLoginExistQuery({
 *   variables: {
 *      login: // value for 'login'
 *   },
 * });
 */
export function useIsLoginExistQuery(baseOptions: Apollo.QueryHookOptions<IsLoginExistQuery, IsLoginExistQueryVariables> & ({ variables: IsLoginExistQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsLoginExistQuery, IsLoginExistQueryVariables>(IsLoginExistDocument, options);
      }
export function useIsLoginExistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsLoginExistQuery, IsLoginExistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsLoginExistQuery, IsLoginExistQueryVariables>(IsLoginExistDocument, options);
        }
export function useIsLoginExistSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IsLoginExistQuery, IsLoginExistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IsLoginExistQuery, IsLoginExistQueryVariables>(IsLoginExistDocument, options);
        }
export type IsLoginExistQueryHookResult = ReturnType<typeof useIsLoginExistQuery>;
export type IsLoginExistLazyQueryHookResult = ReturnType<typeof useIsLoginExistLazyQuery>;
export type IsLoginExistSuspenseQueryHookResult = ReturnType<typeof useIsLoginExistSuspenseQuery>;
export type IsLoginExistQueryResult = Apollo.QueryResult<IsLoginExistQuery, IsLoginExistQueryVariables>;
export const IsPhoneExistDocument = gql`
    query IsPhoneExist($phone: String!) {
  isExist: isPhoneExist(phone: $phone) {
    __typename
    ... on BaseError {
      status
    }
    ... on BooleanObject {
      boolean
    }
  }
}
    `;

/**
 * __useIsPhoneExistQuery__
 *
 * To run a query within a React component, call `useIsPhoneExistQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsPhoneExistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsPhoneExistQuery({
 *   variables: {
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useIsPhoneExistQuery(baseOptions: Apollo.QueryHookOptions<IsPhoneExistQuery, IsPhoneExistQueryVariables> & ({ variables: IsPhoneExistQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsPhoneExistQuery, IsPhoneExistQueryVariables>(IsPhoneExistDocument, options);
      }
export function useIsPhoneExistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsPhoneExistQuery, IsPhoneExistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsPhoneExistQuery, IsPhoneExistQueryVariables>(IsPhoneExistDocument, options);
        }
export function useIsPhoneExistSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IsPhoneExistQuery, IsPhoneExistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IsPhoneExistQuery, IsPhoneExistQueryVariables>(IsPhoneExistDocument, options);
        }
export type IsPhoneExistQueryHookResult = ReturnType<typeof useIsPhoneExistQuery>;
export type IsPhoneExistLazyQueryHookResult = ReturnType<typeof useIsPhoneExistLazyQuery>;
export type IsPhoneExistSuspenseQueryHookResult = ReturnType<typeof useIsPhoneExistSuspenseQuery>;
export type IsPhoneExistQueryResult = Apollo.QueryResult<IsPhoneExistQuery, IsPhoneExistQueryVariables>;
export const LoginDocument = gql`
    mutation Login($input: LogInInput) {
  login(input: $input) {
    __typename
    ... on AuthUser {
      user {
        ...FullUser
      }
      token
    }
    ... on BaseError {
      status
    }
  }
}
    ${FullUserFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout($token: String!) {
  logout(token: $token) {
    status
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RetrieveFileDocument = gql`
    query RetrieveFile($id: ID!) {
  retrieveFile(id: $id) {
    __typename
    ... on BaseError {
      status
    }
    ... on File {
      id
      createdAt
      updatedAt
      name
      path
      type
      checksum
      size
    }
  }
}
    `;

/**
 * __useRetrieveFileQuery__
 *
 * To run a query within a React component, call `useRetrieveFileQuery` and pass it any options that fit your needs.
 * When your component renders, `useRetrieveFileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRetrieveFileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRetrieveFileQuery(baseOptions: Apollo.QueryHookOptions<RetrieveFileQuery, RetrieveFileQueryVariables> & ({ variables: RetrieveFileQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RetrieveFileQuery, RetrieveFileQueryVariables>(RetrieveFileDocument, options);
      }
export function useRetrieveFileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RetrieveFileQuery, RetrieveFileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RetrieveFileQuery, RetrieveFileQueryVariables>(RetrieveFileDocument, options);
        }
export function useRetrieveFileSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RetrieveFileQuery, RetrieveFileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RetrieveFileQuery, RetrieveFileQueryVariables>(RetrieveFileDocument, options);
        }
export type RetrieveFileQueryHookResult = ReturnType<typeof useRetrieveFileQuery>;
export type RetrieveFileLazyQueryHookResult = ReturnType<typeof useRetrieveFileLazyQuery>;
export type RetrieveFileSuspenseQueryHookResult = ReturnType<typeof useRetrieveFileSuspenseQuery>;
export type RetrieveFileQueryResult = Apollo.QueryResult<RetrieveFileQuery, RetrieveFileQueryVariables>;
export const UploadImageDocument = gql`
    mutation UploadImage($file: Upload!) {
  uploadImage(file: $file) {
    __typename
    ... on BaseError {
      status
    }
    ... on File {
      id
      path
      type
    }
  }
}
    `;
export type UploadImageMutationFn = Apollo.MutationFunction<UploadImageMutation, UploadImageMutationVariables>;

/**
 * __useUploadImageMutation__
 *
 * To run a mutation, you first call `useUploadImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadImageMutation, { data, loading, error }] = useUploadImageMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadImageMutation(baseOptions?: Apollo.MutationHookOptions<UploadImageMutation, UploadImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadImageMutation, UploadImageMutationVariables>(UploadImageDocument, options);
      }
export type UploadImageMutationHookResult = ReturnType<typeof useUploadImageMutation>;
export type UploadImageMutationResult = Apollo.MutationResult<UploadImageMutation>;
export type UploadImageMutationOptions = Apollo.BaseMutationOptions<UploadImageMutation, UploadImageMutationVariables>;
export const UploadVideoDocument = gql`
    mutation UploadVideo($file: Upload!) {
  uploadVideo(file: $file) {
    __typename
    ... on BaseError {
      status
    }
    ... on File {
      id
      path
      type
    }
  }
}
    `;
export type UploadVideoMutationFn = Apollo.MutationFunction<UploadVideoMutation, UploadVideoMutationVariables>;

/**
 * __useUploadVideoMutation__
 *
 * To run a mutation, you first call `useUploadVideoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadVideoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadVideoMutation, { data, loading, error }] = useUploadVideoMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadVideoMutation(baseOptions?: Apollo.MutationHookOptions<UploadVideoMutation, UploadVideoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadVideoMutation, UploadVideoMutationVariables>(UploadVideoDocument, options);
      }
export type UploadVideoMutationHookResult = ReturnType<typeof useUploadVideoMutation>;
export type UploadVideoMutationResult = Apollo.MutationResult<UploadVideoMutation>;
export type UploadVideoMutationOptions = Apollo.BaseMutationOptions<UploadVideoMutation, UploadVideoMutationVariables>;
export const CreatePlayerDocument = gql`
    mutation CreatePlayer($input: PlayerIn!) {
  createPlayer(input: $input) {
    __typename
    ... on AuthUser {
      user {
        ...FullUser
      }
      token
    }
    ... on ErrorWithFields {
      status
      fields
    }
  }
}
    ${FullUserFragmentDoc}`;
export type CreatePlayerMutationFn = Apollo.MutationFunction<CreatePlayerMutation, CreatePlayerMutationVariables>;

/**
 * __useCreatePlayerMutation__
 *
 * To run a mutation, you first call `useCreatePlayerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlayerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlayerMutation, { data, loading, error }] = useCreatePlayerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePlayerMutation(baseOptions?: Apollo.MutationHookOptions<CreatePlayerMutation, CreatePlayerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePlayerMutation, CreatePlayerMutationVariables>(CreatePlayerDocument, options);
      }
export type CreatePlayerMutationHookResult = ReturnType<typeof useCreatePlayerMutation>;
export type CreatePlayerMutationResult = Apollo.MutationResult<CreatePlayerMutation>;
export type CreatePlayerMutationOptions = Apollo.BaseMutationOptions<CreatePlayerMutation, CreatePlayerMutationVariables>;
export const GetPlayerMeDocument = gql`
    query GetPlayerMe {
  getPlayerMe {
    __typename
    ... on Player {
      ...FullPlayer
    }
    ... on BaseError {
      status
    }
  }
}
    ${FullPlayerFragmentDoc}`;

/**
 * __useGetPlayerMeQuery__
 *
 * To run a query within a React component, call `useGetPlayerMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlayerMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlayerMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPlayerMeQuery(baseOptions?: Apollo.QueryHookOptions<GetPlayerMeQuery, GetPlayerMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlayerMeQuery, GetPlayerMeQueryVariables>(GetPlayerMeDocument, options);
      }
export function useGetPlayerMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlayerMeQuery, GetPlayerMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlayerMeQuery, GetPlayerMeQueryVariables>(GetPlayerMeDocument, options);
        }
export function useGetPlayerMeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPlayerMeQuery, GetPlayerMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPlayerMeQuery, GetPlayerMeQueryVariables>(GetPlayerMeDocument, options);
        }
export type GetPlayerMeQueryHookResult = ReturnType<typeof useGetPlayerMeQuery>;
export type GetPlayerMeLazyQueryHookResult = ReturnType<typeof useGetPlayerMeLazyQuery>;
export type GetPlayerMeSuspenseQueryHookResult = ReturnType<typeof useGetPlayerMeSuspenseQuery>;
export type GetPlayerMeQueryResult = Apollo.QueryResult<GetPlayerMeQuery, GetPlayerMeQueryVariables>;
export const GetPlayersDocument = gql`
    query GetPlayers($sportName: String, $location: String, $ageGroup: String, $skip: Int! = 0, $limit: Int! = 20) {
  getPlayers(
    sportName: $sportName
    location: $location
    ageGroup: $ageGroup
    skip: $skip
    limit: $limit
  ) {
    __typename
    ... on BaseError {
      status
    }
    ... on PlayerList {
      players {
        ...FullPlayer
      }
    }
  }
}
    ${FullPlayerFragmentDoc}`;

/**
 * __useGetPlayersQuery__
 *
 * To run a query within a React component, call `useGetPlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlayersQuery({
 *   variables: {
 *      sportName: // value for 'sportName'
 *      location: // value for 'location'
 *      ageGroup: // value for 'ageGroup'
 *      skip: // value for 'skip'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetPlayersQuery(baseOptions?: Apollo.QueryHookOptions<GetPlayersQuery, GetPlayersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlayersQuery, GetPlayersQueryVariables>(GetPlayersDocument, options);
      }
export function useGetPlayersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlayersQuery, GetPlayersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlayersQuery, GetPlayersQueryVariables>(GetPlayersDocument, options);
        }
export function useGetPlayersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPlayersQuery, GetPlayersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPlayersQuery, GetPlayersQueryVariables>(GetPlayersDocument, options);
        }
export type GetPlayersQueryHookResult = ReturnType<typeof useGetPlayersQuery>;
export type GetPlayersLazyQueryHookResult = ReturnType<typeof useGetPlayersLazyQuery>;
export type GetPlayersSuspenseQueryHookResult = ReturnType<typeof useGetPlayersSuspenseQuery>;
export type GetPlayersQueryResult = Apollo.QueryResult<GetPlayersQuery, GetPlayersQueryVariables>;
export const RetrievePlayerDocument = gql`
    query RetrievePlayer($id: ID!) {
  retrievePlayer(id: $id) {
    __typename
    ... on BaseError {
      status
    }
    ... on Player {
      ...FullPlayer
    }
  }
}
    ${FullPlayerFragmentDoc}`;

/**
 * __useRetrievePlayerQuery__
 *
 * To run a query within a React component, call `useRetrievePlayerQuery` and pass it any options that fit your needs.
 * When your component renders, `useRetrievePlayerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRetrievePlayerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRetrievePlayerQuery(baseOptions: Apollo.QueryHookOptions<RetrievePlayerQuery, RetrievePlayerQueryVariables> & ({ variables: RetrievePlayerQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RetrievePlayerQuery, RetrievePlayerQueryVariables>(RetrievePlayerDocument, options);
      }
export function useRetrievePlayerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RetrievePlayerQuery, RetrievePlayerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RetrievePlayerQuery, RetrievePlayerQueryVariables>(RetrievePlayerDocument, options);
        }
export function useRetrievePlayerSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RetrievePlayerQuery, RetrievePlayerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RetrievePlayerQuery, RetrievePlayerQueryVariables>(RetrievePlayerDocument, options);
        }
export type RetrievePlayerQueryHookResult = ReturnType<typeof useRetrievePlayerQuery>;
export type RetrievePlayerLazyQueryHookResult = ReturnType<typeof useRetrievePlayerLazyQuery>;
export type RetrievePlayerSuspenseQueryHookResult = ReturnType<typeof useRetrievePlayerSuspenseQuery>;
export type RetrievePlayerQueryResult = Apollo.QueryResult<RetrievePlayerQuery, RetrievePlayerQueryVariables>;
export const UpdatePlayerDocument = gql`
    mutation UpdatePlayer($data: PlayerInUpdate!) {
  updatePlayer(data: $data) {
    status
  }
}
    `;
export type UpdatePlayerMutationFn = Apollo.MutationFunction<UpdatePlayerMutation, UpdatePlayerMutationVariables>;

/**
 * __useUpdatePlayerMutation__
 *
 * To run a mutation, you first call `useUpdatePlayerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlayerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlayerMutation, { data, loading, error }] = useUpdatePlayerMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdatePlayerMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePlayerMutation, UpdatePlayerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePlayerMutation, UpdatePlayerMutationVariables>(UpdatePlayerDocument, options);
      }
export type UpdatePlayerMutationHookResult = ReturnType<typeof useUpdatePlayerMutation>;
export type UpdatePlayerMutationResult = Apollo.MutationResult<UpdatePlayerMutation>;
export type UpdatePlayerMutationOptions = Apollo.BaseMutationOptions<UpdatePlayerMutation, UpdatePlayerMutationVariables>;
export const UpdatePlayerContactDocument = gql`
    mutation UpdatePlayerContact($data: PlayerContactInUpdate!) {
  updatePlayerContact(data: $data) {
    status
  }
}
    `;
export type UpdatePlayerContactMutationFn = Apollo.MutationFunction<UpdatePlayerContactMutation, UpdatePlayerContactMutationVariables>;

/**
 * __useUpdatePlayerContactMutation__
 *
 * To run a mutation, you first call `useUpdatePlayerContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlayerContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlayerContactMutation, { data, loading, error }] = useUpdatePlayerContactMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdatePlayerContactMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePlayerContactMutation, UpdatePlayerContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePlayerContactMutation, UpdatePlayerContactMutationVariables>(UpdatePlayerContactDocument, options);
      }
export type UpdatePlayerContactMutationHookResult = ReturnType<typeof useUpdatePlayerContactMutation>;
export type UpdatePlayerContactMutationResult = Apollo.MutationResult<UpdatePlayerContactMutation>;
export type UpdatePlayerContactMutationOptions = Apollo.BaseMutationOptions<UpdatePlayerContactMutation, UpdatePlayerContactMutationVariables>;
export const UpdatePlayerPersonalInfoDocument = gql`
    mutation UpdatePlayerPersonalInfo($data: PlayerPersonalInfoIn!) {
  updatePlayerPersonalInfo(data: $data) {
    status
  }
}
    `;
export type UpdatePlayerPersonalInfoMutationFn = Apollo.MutationFunction<UpdatePlayerPersonalInfoMutation, UpdatePlayerPersonalInfoMutationVariables>;

/**
 * __useUpdatePlayerPersonalInfoMutation__
 *
 * To run a mutation, you first call `useUpdatePlayerPersonalInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlayerPersonalInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlayerPersonalInfoMutation, { data, loading, error }] = useUpdatePlayerPersonalInfoMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdatePlayerPersonalInfoMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePlayerPersonalInfoMutation, UpdatePlayerPersonalInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePlayerPersonalInfoMutation, UpdatePlayerPersonalInfoMutationVariables>(UpdatePlayerPersonalInfoDocument, options);
      }
export type UpdatePlayerPersonalInfoMutationHookResult = ReturnType<typeof useUpdatePlayerPersonalInfoMutation>;
export type UpdatePlayerPersonalInfoMutationResult = Apollo.MutationResult<UpdatePlayerPersonalInfoMutation>;
export type UpdatePlayerPersonalInfoMutationOptions = Apollo.BaseMutationOptions<UpdatePlayerPersonalInfoMutation, UpdatePlayerPersonalInfoMutationVariables>;
export const AddSportUniqueFieldDocument = gql`
    mutation AddSportUniqueField($input: UniqueFieldIn!) {
  addSportUniqueField(input: $input) {
    status
  }
}
    `;
export type AddSportUniqueFieldMutationFn = Apollo.MutationFunction<AddSportUniqueFieldMutation, AddSportUniqueFieldMutationVariables>;

/**
 * __useAddSportUniqueFieldMutation__
 *
 * To run a mutation, you first call `useAddSportUniqueFieldMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSportUniqueFieldMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSportUniqueFieldMutation, { data, loading, error }] = useAddSportUniqueFieldMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddSportUniqueFieldMutation(baseOptions?: Apollo.MutationHookOptions<AddSportUniqueFieldMutation, AddSportUniqueFieldMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddSportUniqueFieldMutation, AddSportUniqueFieldMutationVariables>(AddSportUniqueFieldDocument, options);
      }
export type AddSportUniqueFieldMutationHookResult = ReturnType<typeof useAddSportUniqueFieldMutation>;
export type AddSportUniqueFieldMutationResult = Apollo.MutationResult<AddSportUniqueFieldMutation>;
export type AddSportUniqueFieldMutationOptions = Apollo.BaseMutationOptions<AddSportUniqueFieldMutation, AddSportUniqueFieldMutationVariables>;
export const CreatePositionDocument = gql`
    mutation CreatePosition($input: PositionIn!) {
  createPosition(input: $input) {
    __typename
    ... on Position {
      ...FullPosition
    }
    ... on BaseError {
      status
    }
  }
}
    ${FullPositionFragmentDoc}`;
export type CreatePositionMutationFn = Apollo.MutationFunction<CreatePositionMutation, CreatePositionMutationVariables>;

/**
 * __useCreatePositionMutation__
 *
 * To run a mutation, you first call `useCreatePositionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePositionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPositionMutation, { data, loading, error }] = useCreatePositionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePositionMutation(baseOptions?: Apollo.MutationHookOptions<CreatePositionMutation, CreatePositionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePositionMutation, CreatePositionMutationVariables>(CreatePositionDocument, options);
      }
export type CreatePositionMutationHookResult = ReturnType<typeof useCreatePositionMutation>;
export type CreatePositionMutationResult = Apollo.MutationResult<CreatePositionMutation>;
export type CreatePositionMutationOptions = Apollo.BaseMutationOptions<CreatePositionMutation, CreatePositionMutationVariables>;
export const CreateSportDocument = gql`
    mutation CreateSport($input: SportIn!) {
  createSport(input: $input) {
    __typename
    ... on Sport {
      ...SimpleSport
    }
    ... on BaseError {
      status
    }
  }
}
    ${SimpleSportFragmentDoc}`;
export type CreateSportMutationFn = Apollo.MutationFunction<CreateSportMutation, CreateSportMutationVariables>;

/**
 * __useCreateSportMutation__
 *
 * To run a mutation, you first call `useCreateSportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSportMutation, { data, loading, error }] = useCreateSportMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSportMutation(baseOptions?: Apollo.MutationHookOptions<CreateSportMutation, CreateSportMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSportMutation, CreateSportMutationVariables>(CreateSportDocument, options);
      }
export type CreateSportMutationHookResult = ReturnType<typeof useCreateSportMutation>;
export type CreateSportMutationResult = Apollo.MutationResult<CreateSportMutation>;
export type CreateSportMutationOptions = Apollo.BaseMutationOptions<CreateSportMutation, CreateSportMutationVariables>;
export const GetSportPositionsDocument = gql`
    query GetSportPositions($sportID: ID!) {
  getSportPositions(sportID: $sportID) {
    __typename
    ... on BaseError {
      status
    }
    ... on PositionList {
      ...PositionList
    }
  }
}
    ${PositionListFragmentDoc}`;

/**
 * __useGetSportPositionsQuery__
 *
 * To run a query within a React component, call `useGetSportPositionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSportPositionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSportPositionsQuery({
 *   variables: {
 *      sportID: // value for 'sportID'
 *   },
 * });
 */
export function useGetSportPositionsQuery(baseOptions: Apollo.QueryHookOptions<GetSportPositionsQuery, GetSportPositionsQueryVariables> & ({ variables: GetSportPositionsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSportPositionsQuery, GetSportPositionsQueryVariables>(GetSportPositionsDocument, options);
      }
export function useGetSportPositionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSportPositionsQuery, GetSportPositionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSportPositionsQuery, GetSportPositionsQueryVariables>(GetSportPositionsDocument, options);
        }
export function useGetSportPositionsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSportPositionsQuery, GetSportPositionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSportPositionsQuery, GetSportPositionsQueryVariables>(GetSportPositionsDocument, options);
        }
export type GetSportPositionsQueryHookResult = ReturnType<typeof useGetSportPositionsQuery>;
export type GetSportPositionsLazyQueryHookResult = ReturnType<typeof useGetSportPositionsLazyQuery>;
export type GetSportPositionsSuspenseQueryHookResult = ReturnType<typeof useGetSportPositionsSuspenseQuery>;
export type GetSportPositionsQueryResult = Apollo.QueryResult<GetSportPositionsQuery, GetSportPositionsQueryVariables>;
export const GetSportsDocument = gql`
    query GetSports($skip: String, $limit: Int! = 20) {
  getSports(skip: $skip, limit: $limit) {
    __typename
    ... on BaseError {
      status
    }
    ... on SportList {
      sports {
        ...SimpleSport
      }
      total
    }
  }
}
    ${SimpleSportFragmentDoc}`;

/**
 * __useGetSportsQuery__
 *
 * To run a query within a React component, call `useGetSportsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSportsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSportsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetSportsQuery(baseOptions?: Apollo.QueryHookOptions<GetSportsQuery, GetSportsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSportsQuery, GetSportsQueryVariables>(GetSportsDocument, options);
      }
export function useGetSportsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSportsQuery, GetSportsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSportsQuery, GetSportsQueryVariables>(GetSportsDocument, options);
        }
export function useGetSportsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSportsQuery, GetSportsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSportsQuery, GetSportsQueryVariables>(GetSportsDocument, options);
        }
export type GetSportsQueryHookResult = ReturnType<typeof useGetSportsQuery>;
export type GetSportsLazyQueryHookResult = ReturnType<typeof useGetSportsLazyQuery>;
export type GetSportsSuspenseQueryHookResult = ReturnType<typeof useGetSportsSuspenseQuery>;
export type GetSportsQueryResult = Apollo.QueryResult<GetSportsQuery, GetSportsQueryVariables>;
export const RetrieveSportDocument = gql`
    query RetrieveSport($id: ID!) {
  retrieveSport(id: $id) {
    __typename
    ... on BaseError {
      status
    }
    ... on Sport {
      ...FullSport
    }
  }
}
    ${FullSportFragmentDoc}`;

/**
 * __useRetrieveSportQuery__
 *
 * To run a query within a React component, call `useRetrieveSportQuery` and pass it any options that fit your needs.
 * When your component renders, `useRetrieveSportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRetrieveSportQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRetrieveSportQuery(baseOptions: Apollo.QueryHookOptions<RetrieveSportQuery, RetrieveSportQueryVariables> & ({ variables: RetrieveSportQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RetrieveSportQuery, RetrieveSportQueryVariables>(RetrieveSportDocument, options);
      }
export function useRetrieveSportLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RetrieveSportQuery, RetrieveSportQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RetrieveSportQuery, RetrieveSportQueryVariables>(RetrieveSportDocument, options);
        }
export function useRetrieveSportSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RetrieveSportQuery, RetrieveSportQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RetrieveSportQuery, RetrieveSportQueryVariables>(RetrieveSportDocument, options);
        }
export type RetrieveSportQueryHookResult = ReturnType<typeof useRetrieveSportQuery>;
export type RetrieveSportLazyQueryHookResult = ReturnType<typeof useRetrieveSportLazyQuery>;
export type RetrieveSportSuspenseQueryHookResult = ReturnType<typeof useRetrieveSportSuspenseQuery>;
export type RetrieveSportQueryResult = Apollo.QueryResult<RetrieveSportQuery, RetrieveSportQueryVariables>;
export const RetrieveUserDocument = gql`
    query RetrieveUser($id: ID!) {
  retrieveUser(id: $id) {
    __typename
    ... on BaseError {
      status
    }
    ... on User {
      ...FullUser
    }
  }
}
    ${FullUserFragmentDoc}`;

/**
 * __useRetrieveUserQuery__
 *
 * To run a query within a React component, call `useRetrieveUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useRetrieveUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRetrieveUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRetrieveUserQuery(baseOptions: Apollo.QueryHookOptions<RetrieveUserQuery, RetrieveUserQueryVariables> & ({ variables: RetrieveUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RetrieveUserQuery, RetrieveUserQueryVariables>(RetrieveUserDocument, options);
      }
export function useRetrieveUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RetrieveUserQuery, RetrieveUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RetrieveUserQuery, RetrieveUserQueryVariables>(RetrieveUserDocument, options);
        }
export function useRetrieveUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RetrieveUserQuery, RetrieveUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RetrieveUserQuery, RetrieveUserQueryVariables>(RetrieveUserDocument, options);
        }
export type RetrieveUserQueryHookResult = ReturnType<typeof useRetrieveUserQuery>;
export type RetrieveUserLazyQueryHookResult = ReturnType<typeof useRetrieveUserLazyQuery>;
export type RetrieveUserSuspenseQueryHookResult = ReturnType<typeof useRetrieveUserSuspenseQuery>;
export type RetrieveUserQueryResult = Apollo.QueryResult<RetrieveUserQuery, RetrieveUserQueryVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($data: UserInUpdate!) {
  updateUser(data: $data) {
    status
    fields
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;