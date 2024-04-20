/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation ChangePassword($oldPassword: String!, $newPassword: String!) {\n  changePassword(oldPassword: $oldPassword, newPassword: $newPassword) {\n    status\n    fields\n  }\n}": types.ChangePasswordDocument,
    "query GetMe {\n  getMe {\n    __typename\n    ... on User {\n      ...FullUser\n    }\n    ... on BaseError {\n      status\n    }\n  }\n}": types.GetMeDocument,
    "query IsEmailExist($email: String!) {\n  isExist: isEmailExist(email: $email) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on BooleanObject {\n      boolean\n    }\n  }\n}": types.IsEmailExistDocument,
    "query IsLoginExist($login: String!) {\n  isExist: isLoginExist(login: $login) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on BooleanObject {\n      boolean\n    }\n  }\n}": types.IsLoginExistDocument,
    "query IsPhoneExist($phone: String!) {\n  isExist: isPhoneExist(phone: $phone) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on BooleanObject {\n      boolean\n    }\n  }\n}": types.IsPhoneExistDocument,
    "mutation Login($input: LogInInput) {\n  login(input: $input) {\n    __typename\n    ... on AuthUser {\n      user {\n        ...FullUser\n      }\n      token\n    }\n    ... on BaseError {\n      status\n    }\n  }\n}": types.LoginDocument,
    "mutation Logout($token: String!) {\n  logout(token: $token) {\n    status\n  }\n}": types.LogoutDocument,
    "query RetrieveFile($id: ID!) {\n  retrieveFile(id: $id) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on File {\n      id\n      createdAt\n      updatedAt\n      name\n      path\n      type\n      checksum\n      size\n    }\n  }\n}": types.RetrieveFileDocument,
    "mutation UploadImage($file: Upload!) {\n  uploadImage(file: $file) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on File {\n      id\n      path\n      type\n    }\n  }\n}": types.UploadImageDocument,
    "mutation UploadVideo($file: Upload!) {\n  uploadVideo(file: $file) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on File {\n      id\n      path\n      type\n    }\n  }\n}": types.UploadVideoDocument,
    "fragment Media on File {\n  id\n  path\n}": types.MediaFragmentDoc,
    "mutation CreatePlayer($input: PlayerIn!) {\n  createPlayer(input: $input) {\n    __typename\n    ... on AuthUser {\n      user {\n        ...FullUser\n      }\n      token\n    }\n    ... on ErrorWithFields {\n      status\n      fields\n    }\n  }\n}": types.CreatePlayerDocument,
    "query GetPlayerMe {\n  getPlayerMe {\n    __typename\n    ... on Player {\n      ...FullPlayer\n    }\n    ... on BaseError {\n      status\n    }\n  }\n}": types.GetPlayerMeDocument,
    "query GetPlayers($sportName: String, $location: String, $ageGroup: String, $skip: Int! = 0, $limit: Int! = 20) {\n  getPlayers(\n    sportName: $sportName\n    location: $location\n    ageGroup: $ageGroup\n    skip: $skip\n    limit: $limit\n  ) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on PlayerList {\n      players {\n        ...FullPlayer\n      }\n    }\n  }\n}": types.GetPlayersDocument,
    "query RetrievePlayer($id: ID!) {\n  retrievePlayer(id: $id) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on Player {\n      ...FullPlayer\n    }\n  }\n}": types.RetrievePlayerDocument,
    "mutation UpdatePlayerContact($data: PlayerContactInUpdate!) {\n  updatePlayerContact(data: $data) {\n    status\n  }\n}": types.UpdatePlayerContactDocument,
    "mutation UpdatePlayerPersonalInfo($data: PlayerPersonalInfoIn!) {\n  updatePlayerPersonalInfo(data: $data) {\n    status\n  }\n}": types.UpdatePlayerPersonalInfoDocument,
    "fragment FullPlayer on Player {\n  id\n  userID\n  sport {\n    ...FullSport\n  }\n  positions {\n    ...FullPosition\n  }\n  dob\n  contact {\n    phone\n    youtube\n    facebook\n    twitter\n    instagram\n  }\n  personal {\n    height\n    weight\n    about\n  }\n}\n\nfragment SimplePlayer on Player {\n  id\n  userID\n  sport {\n    ...SimpleSport\n  }\n  positions {\n    ...FullPosition\n  }\n}\n\nfragment PlayerList on PlayerList {\n  total\n  players {\n    ...FullPlayer\n  }\n}": types.FullPlayerFragmentDoc,
    "mutation CreateSport($input: SportIn!) {\n  createSport(input: $input) {\n    __typename\n    ... on Sport {\n      ...FullSport\n    }\n    ... on BaseError {\n      status\n    }\n  }\n}": types.CreateSportDocument,
    "query GetSportPositions($sportID: ID!) {\n  getSportPositions(sportID: $sportID) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on PositionList {\n      ...PositionList\n    }\n  }\n}": types.GetSportPositionsDocument,
    "query RetrieveSport($id: ID!) {\n  retrieveSport(id: $id) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on Sport {\n      ...FullSport\n    }\n  }\n}": types.RetrieveSportDocument,
    "fragment FullSport on Sport {\n  id\n  name\n  uniqueFields {\n    id\n    sportID\n    label\n    value\n  }\n  positions {\n    ...PositionList\n  }\n}\n\nfragment SimpleSport on Sport {\n  id\n  name\n}\n\nfragment FullPosition on Position {\n  id\n  sportID\n  name\n  stats {\n    positionID\n    field\n    value\n  }\n}\n\nfragment PositionList on PositionList {\n  total\n  positions {\n    ...FullPosition\n  }\n}": types.FullSportFragmentDoc,
    "query RetrieveUser($id: ID!) {\n  retrieveUser(id: $id) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on User {\n      ...FullUser\n    }\n  }\n}": types.RetrieveUserDocument,
    "mutation UpdateUser($data: UserInUpdate!) {\n  updateUser(data: $data) {\n    status\n    fields\n  }\n}": types.UpdateUserDocument,
    "fragment FullUser on User {\n  id\n  name\n  login\n  email\n  role\n  gender\n  avatar {\n    ...Media\n  }\n  bio\n  location\n}\n\nfragment SimpleUser on User {\n  id\n  name\n  login\n  avatar {\n    ...Media\n  }\n  bio\n  location\n}": types.FullUserFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ChangePassword($oldPassword: String!, $newPassword: String!) {\n  changePassword(oldPassword: $oldPassword, newPassword: $newPassword) {\n    status\n    fields\n  }\n}"): (typeof documents)["mutation ChangePassword($oldPassword: String!, $newPassword: String!) {\n  changePassword(oldPassword: $oldPassword, newPassword: $newPassword) {\n    status\n    fields\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetMe {\n  getMe {\n    __typename\n    ... on User {\n      ...FullUser\n    }\n    ... on BaseError {\n      status\n    }\n  }\n}"): (typeof documents)["query GetMe {\n  getMe {\n    __typename\n    ... on User {\n      ...FullUser\n    }\n    ... on BaseError {\n      status\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query IsEmailExist($email: String!) {\n  isExist: isEmailExist(email: $email) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on BooleanObject {\n      boolean\n    }\n  }\n}"): (typeof documents)["query IsEmailExist($email: String!) {\n  isExist: isEmailExist(email: $email) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on BooleanObject {\n      boolean\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query IsLoginExist($login: String!) {\n  isExist: isLoginExist(login: $login) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on BooleanObject {\n      boolean\n    }\n  }\n}"): (typeof documents)["query IsLoginExist($login: String!) {\n  isExist: isLoginExist(login: $login) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on BooleanObject {\n      boolean\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query IsPhoneExist($phone: String!) {\n  isExist: isPhoneExist(phone: $phone) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on BooleanObject {\n      boolean\n    }\n  }\n}"): (typeof documents)["query IsPhoneExist($phone: String!) {\n  isExist: isPhoneExist(phone: $phone) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on BooleanObject {\n      boolean\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($input: LogInInput) {\n  login(input: $input) {\n    __typename\n    ... on AuthUser {\n      user {\n        ...FullUser\n      }\n      token\n    }\n    ... on BaseError {\n      status\n    }\n  }\n}"): (typeof documents)["mutation Login($input: LogInInput) {\n  login(input: $input) {\n    __typename\n    ... on AuthUser {\n      user {\n        ...FullUser\n      }\n      token\n    }\n    ... on BaseError {\n      status\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Logout($token: String!) {\n  logout(token: $token) {\n    status\n  }\n}"): (typeof documents)["mutation Logout($token: String!) {\n  logout(token: $token) {\n    status\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query RetrieveFile($id: ID!) {\n  retrieveFile(id: $id) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on File {\n      id\n      createdAt\n      updatedAt\n      name\n      path\n      type\n      checksum\n      size\n    }\n  }\n}"): (typeof documents)["query RetrieveFile($id: ID!) {\n  retrieveFile(id: $id) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on File {\n      id\n      createdAt\n      updatedAt\n      name\n      path\n      type\n      checksum\n      size\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UploadImage($file: Upload!) {\n  uploadImage(file: $file) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on File {\n      id\n      path\n      type\n    }\n  }\n}"): (typeof documents)["mutation UploadImage($file: Upload!) {\n  uploadImage(file: $file) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on File {\n      id\n      path\n      type\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UploadVideo($file: Upload!) {\n  uploadVideo(file: $file) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on File {\n      id\n      path\n      type\n    }\n  }\n}"): (typeof documents)["mutation UploadVideo($file: Upload!) {\n  uploadVideo(file: $file) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on File {\n      id\n      path\n      type\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Media on File {\n  id\n  path\n}"): (typeof documents)["fragment Media on File {\n  id\n  path\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreatePlayer($input: PlayerIn!) {\n  createPlayer(input: $input) {\n    __typename\n    ... on AuthUser {\n      user {\n        ...FullUser\n      }\n      token\n    }\n    ... on ErrorWithFields {\n      status\n      fields\n    }\n  }\n}"): (typeof documents)["mutation CreatePlayer($input: PlayerIn!) {\n  createPlayer(input: $input) {\n    __typename\n    ... on AuthUser {\n      user {\n        ...FullUser\n      }\n      token\n    }\n    ... on ErrorWithFields {\n      status\n      fields\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPlayerMe {\n  getPlayerMe {\n    __typename\n    ... on Player {\n      ...FullPlayer\n    }\n    ... on BaseError {\n      status\n    }\n  }\n}"): (typeof documents)["query GetPlayerMe {\n  getPlayerMe {\n    __typename\n    ... on Player {\n      ...FullPlayer\n    }\n    ... on BaseError {\n      status\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPlayers($sportName: String, $location: String, $ageGroup: String, $skip: Int! = 0, $limit: Int! = 20) {\n  getPlayers(\n    sportName: $sportName\n    location: $location\n    ageGroup: $ageGroup\n    skip: $skip\n    limit: $limit\n  ) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on PlayerList {\n      players {\n        ...FullPlayer\n      }\n    }\n  }\n}"): (typeof documents)["query GetPlayers($sportName: String, $location: String, $ageGroup: String, $skip: Int! = 0, $limit: Int! = 20) {\n  getPlayers(\n    sportName: $sportName\n    location: $location\n    ageGroup: $ageGroup\n    skip: $skip\n    limit: $limit\n  ) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on PlayerList {\n      players {\n        ...FullPlayer\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query RetrievePlayer($id: ID!) {\n  retrievePlayer(id: $id) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on Player {\n      ...FullPlayer\n    }\n  }\n}"): (typeof documents)["query RetrievePlayer($id: ID!) {\n  retrievePlayer(id: $id) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on Player {\n      ...FullPlayer\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdatePlayerContact($data: PlayerContactInUpdate!) {\n  updatePlayerContact(data: $data) {\n    status\n  }\n}"): (typeof documents)["mutation UpdatePlayerContact($data: PlayerContactInUpdate!) {\n  updatePlayerContact(data: $data) {\n    status\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdatePlayerPersonalInfo($data: PlayerPersonalInfoIn!) {\n  updatePlayerPersonalInfo(data: $data) {\n    status\n  }\n}"): (typeof documents)["mutation UpdatePlayerPersonalInfo($data: PlayerPersonalInfoIn!) {\n  updatePlayerPersonalInfo(data: $data) {\n    status\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment FullPlayer on Player {\n  id\n  userID\n  sport {\n    ...FullSport\n  }\n  positions {\n    ...FullPosition\n  }\n  dob\n  contact {\n    phone\n    youtube\n    facebook\n    twitter\n    instagram\n  }\n  personal {\n    height\n    weight\n    about\n  }\n}\n\nfragment SimplePlayer on Player {\n  id\n  userID\n  sport {\n    ...SimpleSport\n  }\n  positions {\n    ...FullPosition\n  }\n}\n\nfragment PlayerList on PlayerList {\n  total\n  players {\n    ...FullPlayer\n  }\n}"): (typeof documents)["fragment FullPlayer on Player {\n  id\n  userID\n  sport {\n    ...FullSport\n  }\n  positions {\n    ...FullPosition\n  }\n  dob\n  contact {\n    phone\n    youtube\n    facebook\n    twitter\n    instagram\n  }\n  personal {\n    height\n    weight\n    about\n  }\n}\n\nfragment SimplePlayer on Player {\n  id\n  userID\n  sport {\n    ...SimpleSport\n  }\n  positions {\n    ...FullPosition\n  }\n}\n\nfragment PlayerList on PlayerList {\n  total\n  players {\n    ...FullPlayer\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateSport($input: SportIn!) {\n  createSport(input: $input) {\n    __typename\n    ... on Sport {\n      ...FullSport\n    }\n    ... on BaseError {\n      status\n    }\n  }\n}"): (typeof documents)["mutation CreateSport($input: SportIn!) {\n  createSport(input: $input) {\n    __typename\n    ... on Sport {\n      ...FullSport\n    }\n    ... on BaseError {\n      status\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetSportPositions($sportID: ID!) {\n  getSportPositions(sportID: $sportID) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on PositionList {\n      ...PositionList\n    }\n  }\n}"): (typeof documents)["query GetSportPositions($sportID: ID!) {\n  getSportPositions(sportID: $sportID) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on PositionList {\n      ...PositionList\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query RetrieveSport($id: ID!) {\n  retrieveSport(id: $id) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on Sport {\n      ...FullSport\n    }\n  }\n}"): (typeof documents)["query RetrieveSport($id: ID!) {\n  retrieveSport(id: $id) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on Sport {\n      ...FullSport\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment FullSport on Sport {\n  id\n  name\n  uniqueFields {\n    id\n    sportID\n    label\n    value\n  }\n  positions {\n    ...PositionList\n  }\n}\n\nfragment SimpleSport on Sport {\n  id\n  name\n}\n\nfragment FullPosition on Position {\n  id\n  sportID\n  name\n  stats {\n    positionID\n    field\n    value\n  }\n}\n\nfragment PositionList on PositionList {\n  total\n  positions {\n    ...FullPosition\n  }\n}"): (typeof documents)["fragment FullSport on Sport {\n  id\n  name\n  uniqueFields {\n    id\n    sportID\n    label\n    value\n  }\n  positions {\n    ...PositionList\n  }\n}\n\nfragment SimpleSport on Sport {\n  id\n  name\n}\n\nfragment FullPosition on Position {\n  id\n  sportID\n  name\n  stats {\n    positionID\n    field\n    value\n  }\n}\n\nfragment PositionList on PositionList {\n  total\n  positions {\n    ...FullPosition\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query RetrieveUser($id: ID!) {\n  retrieveUser(id: $id) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on User {\n      ...FullUser\n    }\n  }\n}"): (typeof documents)["query RetrieveUser($id: ID!) {\n  retrieveUser(id: $id) {\n    __typename\n    ... on BaseError {\n      status\n    }\n    ... on User {\n      ...FullUser\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateUser($data: UserInUpdate!) {\n  updateUser(data: $data) {\n    status\n    fields\n  }\n}"): (typeof documents)["mutation UpdateUser($data: UserInUpdate!) {\n  updateUser(data: $data) {\n    status\n    fields\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment FullUser on User {\n  id\n  name\n  login\n  email\n  role\n  gender\n  avatar {\n    ...Media\n  }\n  bio\n  location\n}\n\nfragment SimpleUser on User {\n  id\n  name\n  login\n  avatar {\n    ...Media\n  }\n  bio\n  location\n}"): (typeof documents)["fragment FullUser on User {\n  id\n  name\n  login\n  email\n  role\n  gender\n  avatar {\n    ...Media\n  }\n  bio\n  location\n}\n\nfragment SimpleUser on User {\n  id\n  name\n  login\n  avatar {\n    ...Media\n  }\n  bio\n  location\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;