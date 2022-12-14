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
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
  '\n  mutation Login($userLoginInput: UserLoginInput!) {\n    login(UserLoginInput: $userLoginInput)\n  }\n':
    types.LoginDocument,
  '\n  fragment ProjectItem on Project {\n    _count {\n      tickets\n    }\n    createdAt\n    id\n    limitDate\n    name\n    progress\n  }\n':
    types.ProjectItemFragmentDoc,
  '\n  query Projects($where: ProjectWhereInput) {\n    projects(where: $where) {\n          ...ProjectItem\n    }\n  }\n':
    types.ProjectsDocument,
  '\n  mutation Register($userRegisterInput: UserRegisterInput!) {\n    register(UserRegisterInput: $userRegisterInput) {\n      name\n      email\n    }\n  }\n':
    types.RegisterDocument,
  '\n  query Tickets {\n    tickets {\n      id\n      title\n      description\n      status\n    }\n  }\n':
    types.TicketsDocument,
  '\n  mutation CreateOneTicket($data: TicketCreateInput!) {\n    createOneTicket(data: $data) {\n      id\n      title\n      description\n      status\n    }\n  }\n':
    types.CreateOneTicketDocument,
  '\n  mutation UpdateOneTicket(\n    $where: TicketWhereUniqueInput!\n    $data: TicketUpdateInput!\n  ) {\n    updateOneTicket(where: $where, data: $data) {\n      id\n    }\n  }\n':
    types.UpdateOneTicketDocument,
  '\n  mutation DeleteOneTicket($where: TicketWhereUniqueInput!) {\n    deleteOneTicket(where: $where) {\n      id\n    }\n  }\n':
    types.DeleteOneTicketDocument,
  '\n  query Users {\n    users {\n      id\n      name\n      email\n    }\n  }\n':
    types.UsersDocument,
  '\n  query User($where: UserWhereUniqueInput!) {\n    user(where: $where) {\n      id\n      name\n      email\n    }\n  }\n':
    types.UserDocument,
  '\nmutation UpdateOneUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {\n    updateOneUser(data: $data, where: $where) {\n      id\n      name\n      email\n    }\n  }\n':
    types.UpdateOneUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation Login($userLoginInput: UserLoginInput!) {\n    login(UserLoginInput: $userLoginInput)\n  }\n'
): typeof documents['\n  mutation Login($userLoginInput: UserLoginInput!) {\n    login(UserLoginInput: $userLoginInput)\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ProjectItem on Project {\n    _count {\n      tickets\n    }\n    createdAt\n    id\n    limitDate\n    name\n    progress\n  }\n'
): typeof documents['\n  fragment ProjectItem on Project {\n    _count {\n      tickets\n    }\n    createdAt\n    id\n    limitDate\n    name\n    progress\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Projects($where: ProjectWhereInput) {\n    projects(where: $where) {\n          ...ProjectItem\n    }\n  }\n'
): typeof documents['\n  query Projects($where: ProjectWhereInput) {\n    projects(where: $where) {\n          ...ProjectItem\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation Register($userRegisterInput: UserRegisterInput!) {\n    register(UserRegisterInput: $userRegisterInput) {\n      name\n      email\n    }\n  }\n'
): typeof documents['\n  mutation Register($userRegisterInput: UserRegisterInput!) {\n    register(UserRegisterInput: $userRegisterInput) {\n      name\n      email\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Tickets {\n    tickets {\n      id\n      title\n      description\n      status\n    }\n  }\n'
): typeof documents['\n  query Tickets {\n    tickets {\n      id\n      title\n      description\n      status\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateOneTicket($data: TicketCreateInput!) {\n    createOneTicket(data: $data) {\n      id\n      title\n      description\n      status\n    }\n  }\n'
): typeof documents['\n  mutation CreateOneTicket($data: TicketCreateInput!) {\n    createOneTicket(data: $data) {\n      id\n      title\n      description\n      status\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateOneTicket(\n    $where: TicketWhereUniqueInput!\n    $data: TicketUpdateInput!\n  ) {\n    updateOneTicket(where: $where, data: $data) {\n      id\n    }\n  }\n'
): typeof documents['\n  mutation UpdateOneTicket(\n    $where: TicketWhereUniqueInput!\n    $data: TicketUpdateInput!\n  ) {\n    updateOneTicket(where: $where, data: $data) {\n      id\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation DeleteOneTicket($where: TicketWhereUniqueInput!) {\n    deleteOneTicket(where: $where) {\n      id\n    }\n  }\n'
): typeof documents['\n  mutation DeleteOneTicket($where: TicketWhereUniqueInput!) {\n    deleteOneTicket(where: $where) {\n      id\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Users {\n    users {\n      id\n      name\n      email\n    }\n  }\n'
): typeof documents['\n  query Users {\n    users {\n      id\n      name\n      email\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query User($where: UserWhereUniqueInput!) {\n    user(where: $where) {\n      id\n      name\n      email\n    }\n  }\n'
): typeof documents['\n  query User($where: UserWhereUniqueInput!) {\n    user(where: $where) {\n      id\n      name\n      email\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\nmutation UpdateOneUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {\n    updateOneUser(data: $data, where: $where) {\n      id\n      name\n      email\n    }\n  }\n'
): typeof documents['\nmutation UpdateOneUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {\n    updateOneUser(data: $data, where: $where) {\n      id\n      name\n      email\n    }\n  }\n'];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 **/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
