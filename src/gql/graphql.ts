/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumTicketStatusNullableFilter = {
  equals?: InputMaybe<TicketStatus>;
  in?: InputMaybe<Array<TicketStatus>>;
  not?: InputMaybe<NestedEnumTicketStatusNullableFilter>;
  notIn?: InputMaybe<Array<TicketStatus>>;
};

export type EnumUserProjectRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<UserProjectRole>;
};

export type EnumUserProjectRoleFilter = {
  equals?: InputMaybe<UserProjectRole>;
  in?: InputMaybe<Array<UserProjectRole>>;
  not?: InputMaybe<NestedEnumUserProjectRoleFilter>;
  notIn?: InputMaybe<Array<UserProjectRole>>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneProject: Project;
  createOneTicket: Ticket;
  createOneUser: User;
  deleteOneProject?: Maybe<Project>;
  deleteOneTicket?: Maybe<Ticket>;
  deleteOneUser?: Maybe<User>;
  login: Scalars['String'];
  register: User;
  updateOneProject?: Maybe<Project>;
  updateOneTicket?: Maybe<Ticket>;
  updateOneUser?: Maybe<User>;
};

export type MutationCreateOneProjectArgs = {
  data: ProjectCreateInput;
};

export type MutationCreateOneTicketArgs = {
  data: TicketCreateInput;
};

export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};

export type MutationDeleteOneProjectArgs = {
  where: ProjectWhereUniqueInput;
};

export type MutationDeleteOneTicketArgs = {
  where: TicketWhereUniqueInput;
};

export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationLoginArgs = {
  UserLoginInput: UserLoginInput;
};

export type MutationRegisterArgs = {
  UserRegisterInput: UserRegisterInput;
};

export type MutationUpdateOneProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};

export type MutationUpdateOneTicketArgs = {
  data: TicketUpdateInput;
  where: TicketWhereUniqueInput;
};

export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumTicketStatusNullableFilter = {
  equals?: InputMaybe<TicketStatus>;
  in?: InputMaybe<Array<TicketStatus>>;
  not?: InputMaybe<NestedEnumTicketStatusNullableFilter>;
  notIn?: InputMaybe<Array<TicketStatus>>;
};

export type NestedEnumUserProjectRoleFilter = {
  equals?: InputMaybe<UserProjectRole>;
  in?: InputMaybe<Array<UserProjectRole>>;
  not?: InputMaybe<NestedEnumUserProjectRoleFilter>;
  notIn?: InputMaybe<Array<UserProjectRole>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableEnumTicketStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<TicketStatus>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Project = {
  __typename?: 'Project';
  _count?: Maybe<ProjectCount>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  limitDate?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  progress?: Maybe<Scalars['Float']>;
};

export type ProjectCount = {
  __typename?: 'ProjectCount';
  tickets: Scalars['Int'];
  users: Scalars['Int'];
};

export type ProjectCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  limitDate?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  progress?: InputMaybe<Scalars['Float']>;
  tickets?: InputMaybe<TicketCreateNestedManyWithoutProjectInput>;
  users?: InputMaybe<UsersOnProjectsCreateNestedManyWithoutProjectInput>;
};

export type ProjectCreateNestedOneWithoutTicketsInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutTicketsInput>;
  create?: InputMaybe<ProjectCreateWithoutTicketsInput>;
};

export type ProjectCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<ProjectCreateWithoutUsersInput>;
};

export type ProjectCreateOrConnectWithoutTicketsInput = {
  create: ProjectCreateWithoutTicketsInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutUsersInput = {
  create: ProjectCreateWithoutUsersInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateWithoutTicketsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  limitDate?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  progress?: InputMaybe<Scalars['Float']>;
  users?: InputMaybe<UsersOnProjectsCreateNestedManyWithoutProjectInput>;
};

export type ProjectCreateWithoutUsersInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  limitDate?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  progress?: InputMaybe<Scalars['Float']>;
  tickets?: InputMaybe<TicketCreateNestedManyWithoutProjectInput>;
};

export type ProjectOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  limitDate?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrder>;
  tickets?: InputMaybe<TicketOrderByRelationAggregateInput>;
  users?: InputMaybe<UsersOnProjectsOrderByRelationAggregateInput>;
};

export type ProjectRelationFilter = {
  is?: InputMaybe<ProjectWhereInput>;
  isNot?: InputMaybe<ProjectWhereInput>;
};

export enum ProjectScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  LimitDate = 'limitDate',
  Name = 'name',
  Progress = 'progress',
}

export type ProjectUpdateInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  limitDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  progress?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  tickets?: InputMaybe<TicketUpdateManyWithoutProjectNestedInput>;
  users?: InputMaybe<UsersOnProjectsUpdateManyWithoutProjectNestedInput>;
};

export type ProjectUpdateOneRequiredWithoutUsersNestedInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<ProjectCreateWithoutUsersInput>;
  update?: InputMaybe<ProjectUpdateWithoutUsersInput>;
  upsert?: InputMaybe<ProjectUpsertWithoutUsersInput>;
};

export type ProjectUpdateOneWithoutTicketsNestedInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutTicketsInput>;
  create?: InputMaybe<ProjectCreateWithoutTicketsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ProjectUpdateWithoutTicketsInput>;
  upsert?: InputMaybe<ProjectUpsertWithoutTicketsInput>;
};

export type ProjectUpdateWithoutTicketsInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  limitDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  progress?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  users?: InputMaybe<UsersOnProjectsUpdateManyWithoutProjectNestedInput>;
};

export type ProjectUpdateWithoutUsersInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  limitDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  progress?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  tickets?: InputMaybe<TicketUpdateManyWithoutProjectNestedInput>;
};

export type ProjectUpsertWithoutTicketsInput = {
  create: ProjectCreateWithoutTicketsInput;
  update: ProjectUpdateWithoutTicketsInput;
};

export type ProjectUpsertWithoutUsersInput = {
  create: ProjectCreateWithoutUsersInput;
  update: ProjectUpdateWithoutUsersInput;
};

export type ProjectWhereInput = {
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  limitDate?: InputMaybe<DateTimeNullableFilter>;
  name?: InputMaybe<StringFilter>;
  progress?: InputMaybe<FloatNullableFilter>;
  tickets?: InputMaybe<TicketListRelationFilter>;
  users?: InputMaybe<UsersOnProjectsListRelationFilter>;
};

export type ProjectWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  bestUser?: Maybe<User>;
  project?: Maybe<Project>;
  projects: Array<Project>;
  ticket?: Maybe<Ticket>;
  tickets: Array<Ticket>;
  user?: Maybe<User>;
  users: Array<User>;
};

export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput;
};

export type QueryProjectsArgs = {
  cursor?: InputMaybe<ProjectWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProjectScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProjectOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectWhereInput>;
};

export type QueryTicketArgs = {
  where: TicketWhereUniqueInput;
};

export type QueryTicketsArgs = {
  cursor?: InputMaybe<TicketWhereUniqueInput>;
  distinct?: InputMaybe<Array<TicketScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TicketOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TicketWhereInput>;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Ticket = {
  __typename?: 'Ticket';
  closed: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  projectId?: Maybe<Scalars['String']>;
  status?: Maybe<TicketStatus>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId?: Maybe<Scalars['Int']>;
};

export type TicketCreateInput = {
  Project?: InputMaybe<ProjectCreateNestedOneWithoutTicketsInput>;
  assignee?: InputMaybe<UserCreateNestedOneWithoutTicketsInput>;
  closed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<TicketStatus>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TicketCreateManyAssigneeInput = {
  closed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<TicketStatus>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TicketCreateManyAssigneeInputEnvelope = {
  data: Array<TicketCreateManyAssigneeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TicketCreateManyProjectInput = {
  closed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<TicketStatus>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type TicketCreateManyProjectInputEnvelope = {
  data: Array<TicketCreateManyProjectInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TicketCreateNestedManyWithoutAssigneeInput = {
  connect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<TicketCreateOrConnectWithoutAssigneeInput>
  >;
  create?: InputMaybe<Array<TicketCreateWithoutAssigneeInput>>;
  createMany?: InputMaybe<TicketCreateManyAssigneeInputEnvelope>;
};

export type TicketCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TicketCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<TicketCreateWithoutProjectInput>>;
  createMany?: InputMaybe<TicketCreateManyProjectInputEnvelope>;
};

export type TicketCreateOrConnectWithoutAssigneeInput = {
  create: TicketCreateWithoutAssigneeInput;
  where: TicketWhereUniqueInput;
};

export type TicketCreateOrConnectWithoutProjectInput = {
  create: TicketCreateWithoutProjectInput;
  where: TicketWhereUniqueInput;
};

export type TicketCreateWithoutAssigneeInput = {
  Project?: InputMaybe<ProjectCreateNestedOneWithoutTicketsInput>;
  closed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<TicketStatus>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TicketCreateWithoutProjectInput = {
  assignee?: InputMaybe<UserCreateNestedOneWithoutTicketsInput>;
  closed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<TicketStatus>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TicketListRelationFilter = {
  every?: InputMaybe<TicketWhereInput>;
  none?: InputMaybe<TicketWhereInput>;
  some?: InputMaybe<TicketWhereInput>;
};

export type TicketOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TicketOrderByWithRelationInput = {
  Project?: InputMaybe<ProjectOrderByWithRelationInput>;
  assignee?: InputMaybe<UserOrderByWithRelationInput>;
  closed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export enum TicketScalarFieldEnum {
  Closed = 'closed',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  ProjectId = 'projectId',
  Status = 'status',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export type TicketScalarWhereInput = {
  AND?: InputMaybe<Array<TicketScalarWhereInput>>;
  NOT?: InputMaybe<Array<TicketScalarWhereInput>>;
  OR?: InputMaybe<Array<TicketScalarWhereInput>>;
  closed?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  projectId?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumTicketStatusNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntNullableFilter>;
};

export enum TicketStatus {
  Doing = 'DOING',
  Done = 'DONE',
  Todo = 'TODO',
}

export type TicketUpdateInput = {
  Project?: InputMaybe<ProjectUpdateOneWithoutTicketsNestedInput>;
  assignee?: InputMaybe<UserUpdateOneWithoutTicketsNestedInput>;
  closed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<NullableEnumTicketStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TicketUpdateManyMutationInput = {
  closed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<NullableEnumTicketStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TicketUpdateManyWithWhereWithoutAssigneeInput = {
  data: TicketUpdateManyMutationInput;
  where: TicketScalarWhereInput;
};

export type TicketUpdateManyWithWhereWithoutProjectInput = {
  data: TicketUpdateManyMutationInput;
  where: TicketScalarWhereInput;
};

export type TicketUpdateManyWithoutAssigneeNestedInput = {
  connect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<TicketCreateOrConnectWithoutAssigneeInput>
  >;
  create?: InputMaybe<Array<TicketCreateWithoutAssigneeInput>>;
  createMany?: InputMaybe<TicketCreateManyAssigneeInputEnvelope>;
  delete?: InputMaybe<Array<TicketWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TicketScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  set?: InputMaybe<Array<TicketWhereUniqueInput>>;
  update?: InputMaybe<Array<TicketUpdateWithWhereUniqueWithoutAssigneeInput>>;
  updateMany?: InputMaybe<Array<TicketUpdateManyWithWhereWithoutAssigneeInput>>;
  upsert?: InputMaybe<Array<TicketUpsertWithWhereUniqueWithoutAssigneeInput>>;
};

export type TicketUpdateManyWithoutProjectNestedInput = {
  connect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TicketCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<TicketCreateWithoutProjectInput>>;
  createMany?: InputMaybe<TicketCreateManyProjectInputEnvelope>;
  delete?: InputMaybe<Array<TicketWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TicketScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  set?: InputMaybe<Array<TicketWhereUniqueInput>>;
  update?: InputMaybe<Array<TicketUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: InputMaybe<Array<TicketUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: InputMaybe<Array<TicketUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type TicketUpdateWithWhereUniqueWithoutAssigneeInput = {
  data: TicketUpdateWithoutAssigneeInput;
  where: TicketWhereUniqueInput;
};

export type TicketUpdateWithWhereUniqueWithoutProjectInput = {
  data: TicketUpdateWithoutProjectInput;
  where: TicketWhereUniqueInput;
};

export type TicketUpdateWithoutAssigneeInput = {
  Project?: InputMaybe<ProjectUpdateOneWithoutTicketsNestedInput>;
  closed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<NullableEnumTicketStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TicketUpdateWithoutProjectInput = {
  assignee?: InputMaybe<UserUpdateOneWithoutTicketsNestedInput>;
  closed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<NullableEnumTicketStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TicketUpsertWithWhereUniqueWithoutAssigneeInput = {
  create: TicketCreateWithoutAssigneeInput;
  update: TicketUpdateWithoutAssigneeInput;
  where: TicketWhereUniqueInput;
};

export type TicketUpsertWithWhereUniqueWithoutProjectInput = {
  create: TicketCreateWithoutProjectInput;
  update: TicketUpdateWithoutProjectInput;
  where: TicketWhereUniqueInput;
};

export type TicketWhereInput = {
  AND?: InputMaybe<Array<TicketWhereInput>>;
  NOT?: InputMaybe<Array<TicketWhereInput>>;
  OR?: InputMaybe<Array<TicketWhereInput>>;
  Project?: InputMaybe<ProjectRelationFilter>;
  assignee?: InputMaybe<UserRelationFilter>;
  closed?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  projectId?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumTicketStatusNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntNullableFilter>;
};

export type TicketWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  hash: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type UserCount = {
  __typename?: 'UserCount';
  projects: Scalars['Int'];
  tickets: Scalars['Int'];
};

export type UserCreateInput = {
  avatar?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  hash: Scalars['String'];
  name: Scalars['String'];
  projects?: InputMaybe<UsersOnProjectsCreateNestedManyWithoutUserInput>;
  tickets?: InputMaybe<TicketCreateNestedManyWithoutAssigneeInput>;
};

export type UserCreateNestedOneWithoutProjectsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProjectsInput>;
  create?: InputMaybe<UserCreateWithoutProjectsInput>;
};

export type UserCreateNestedOneWithoutTicketsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTicketsInput>;
  create?: InputMaybe<UserCreateWithoutTicketsInput>;
};

export type UserCreateOrConnectWithoutProjectsInput = {
  create: UserCreateWithoutProjectsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTicketsInput = {
  create: UserCreateWithoutTicketsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutProjectsInput = {
  avatar?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  hash: Scalars['String'];
  name: Scalars['String'];
  tickets?: InputMaybe<TicketCreateNestedManyWithoutAssigneeInput>;
};

export type UserCreateWithoutTicketsInput = {
  avatar?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  hash: Scalars['String'];
  name: Scalars['String'];
  projects?: InputMaybe<UsersOnProjectsCreateNestedManyWithoutUserInput>;
};

/** login input */
export type UserLoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserOrderByWithRelationInput = {
  avatar?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  hash?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  projects?: InputMaybe<UsersOnProjectsOrderByRelationAggregateInput>;
  tickets?: InputMaybe<TicketOrderByRelationAggregateInput>;
};

export enum UserProjectRole {
  Contributor = 'CONTRIBUTOR',
  Manager = 'MANAGER',
}

/** register input */
export type UserRegisterInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Avatar = 'avatar',
  CreatedAt = 'createdAt',
  Email = 'email',
  Hash = 'hash',
  Id = 'id',
  Name = 'name',
}

export type UserUpdateInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  hash?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  projects?: InputMaybe<UsersOnProjectsUpdateManyWithoutUserNestedInput>;
  tickets?: InputMaybe<TicketUpdateManyWithoutAssigneeNestedInput>;
};

export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProjectsInput>;
  create?: InputMaybe<UserCreateWithoutProjectsInput>;
  update?: InputMaybe<UserUpdateWithoutProjectsInput>;
  upsert?: InputMaybe<UserUpsertWithoutProjectsInput>;
};

export type UserUpdateOneWithoutTicketsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTicketsInput>;
  create?: InputMaybe<UserCreateWithoutTicketsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutTicketsInput>;
  upsert?: InputMaybe<UserUpsertWithoutTicketsInput>;
};

export type UserUpdateWithoutProjectsInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  hash?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  tickets?: InputMaybe<TicketUpdateManyWithoutAssigneeNestedInput>;
};

export type UserUpdateWithoutTicketsInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  hash?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  projects?: InputMaybe<UsersOnProjectsUpdateManyWithoutUserNestedInput>;
};

export type UserUpsertWithoutProjectsInput = {
  create: UserCreateWithoutProjectsInput;
  update: UserUpdateWithoutProjectsInput;
};

export type UserUpsertWithoutTicketsInput = {
  create: UserCreateWithoutTicketsInput;
  update: UserUpdateWithoutTicketsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  avatar?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  hash?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  projects?: InputMaybe<UsersOnProjectsListRelationFilter>;
  tickets?: InputMaybe<TicketListRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type UsersOnProjectsCreateManyProjectInput = {
  role?: InputMaybe<UserProjectRole>;
  userId: Scalars['Int'];
};

export type UsersOnProjectsCreateManyProjectInputEnvelope = {
  data: Array<UsersOnProjectsCreateManyProjectInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UsersOnProjectsCreateManyUserInput = {
  projectId: Scalars['String'];
  role?: InputMaybe<UserProjectRole>;
};

export type UsersOnProjectsCreateManyUserInputEnvelope = {
  data: Array<UsersOnProjectsCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UsersOnProjectsCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<UsersOnProjectsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<UsersOnProjectsCreateOrConnectWithoutProjectInput>
  >;
  create?: InputMaybe<Array<UsersOnProjectsCreateWithoutProjectInput>>;
  createMany?: InputMaybe<UsersOnProjectsCreateManyProjectInputEnvelope>;
};

export type UsersOnProjectsCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UsersOnProjectsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<UsersOnProjectsCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<UsersOnProjectsCreateWithoutUserInput>>;
  createMany?: InputMaybe<UsersOnProjectsCreateManyUserInputEnvelope>;
};

export type UsersOnProjectsCreateOrConnectWithoutProjectInput = {
  create: UsersOnProjectsCreateWithoutProjectInput;
  where: UsersOnProjectsWhereUniqueInput;
};

export type UsersOnProjectsCreateOrConnectWithoutUserInput = {
  create: UsersOnProjectsCreateWithoutUserInput;
  where: UsersOnProjectsWhereUniqueInput;
};

export type UsersOnProjectsCreateWithoutProjectInput = {
  role?: InputMaybe<UserProjectRole>;
  user: UserCreateNestedOneWithoutProjectsInput;
};

export type UsersOnProjectsCreateWithoutUserInput = {
  project: ProjectCreateNestedOneWithoutUsersInput;
  role?: InputMaybe<UserProjectRole>;
};

export type UsersOnProjectsListRelationFilter = {
  every?: InputMaybe<UsersOnProjectsWhereInput>;
  none?: InputMaybe<UsersOnProjectsWhereInput>;
  some?: InputMaybe<UsersOnProjectsWhereInput>;
};

export type UsersOnProjectsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UsersOnProjectsScalarWhereInput = {
  AND?: InputMaybe<Array<UsersOnProjectsScalarWhereInput>>;
  NOT?: InputMaybe<Array<UsersOnProjectsScalarWhereInput>>;
  OR?: InputMaybe<Array<UsersOnProjectsScalarWhereInput>>;
  projectId?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumUserProjectRoleFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UsersOnProjectsUpdateManyMutationInput = {
  role?: InputMaybe<EnumUserProjectRoleFieldUpdateOperationsInput>;
};

export type UsersOnProjectsUpdateManyWithWhereWithoutProjectInput = {
  data: UsersOnProjectsUpdateManyMutationInput;
  where: UsersOnProjectsScalarWhereInput;
};

export type UsersOnProjectsUpdateManyWithWhereWithoutUserInput = {
  data: UsersOnProjectsUpdateManyMutationInput;
  where: UsersOnProjectsScalarWhereInput;
};

export type UsersOnProjectsUpdateManyWithoutProjectNestedInput = {
  connect?: InputMaybe<Array<UsersOnProjectsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<UsersOnProjectsCreateOrConnectWithoutProjectInput>
  >;
  create?: InputMaybe<Array<UsersOnProjectsCreateWithoutProjectInput>>;
  createMany?: InputMaybe<UsersOnProjectsCreateManyProjectInputEnvelope>;
  delete?: InputMaybe<Array<UsersOnProjectsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UsersOnProjectsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UsersOnProjectsWhereUniqueInput>>;
  set?: InputMaybe<Array<UsersOnProjectsWhereUniqueInput>>;
  update?: InputMaybe<
    Array<UsersOnProjectsUpdateWithWhereUniqueWithoutProjectInput>
  >;
  updateMany?: InputMaybe<
    Array<UsersOnProjectsUpdateManyWithWhereWithoutProjectInput>
  >;
  upsert?: InputMaybe<
    Array<UsersOnProjectsUpsertWithWhereUniqueWithoutProjectInput>
  >;
};

export type UsersOnProjectsUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UsersOnProjectsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<UsersOnProjectsCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<UsersOnProjectsCreateWithoutUserInput>>;
  createMany?: InputMaybe<UsersOnProjectsCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UsersOnProjectsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UsersOnProjectsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UsersOnProjectsWhereUniqueInput>>;
  set?: InputMaybe<Array<UsersOnProjectsWhereUniqueInput>>;
  update?: InputMaybe<
    Array<UsersOnProjectsUpdateWithWhereUniqueWithoutUserInput>
  >;
  updateMany?: InputMaybe<
    Array<UsersOnProjectsUpdateManyWithWhereWithoutUserInput>
  >;
  upsert?: InputMaybe<
    Array<UsersOnProjectsUpsertWithWhereUniqueWithoutUserInput>
  >;
};

export type UsersOnProjectsUpdateWithWhereUniqueWithoutProjectInput = {
  data: UsersOnProjectsUpdateWithoutProjectInput;
  where: UsersOnProjectsWhereUniqueInput;
};

export type UsersOnProjectsUpdateWithWhereUniqueWithoutUserInput = {
  data: UsersOnProjectsUpdateWithoutUserInput;
  where: UsersOnProjectsWhereUniqueInput;
};

export type UsersOnProjectsUpdateWithoutProjectInput = {
  role?: InputMaybe<EnumUserProjectRoleFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutProjectsNestedInput>;
};

export type UsersOnProjectsUpdateWithoutUserInput = {
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutUsersNestedInput>;
  role?: InputMaybe<EnumUserProjectRoleFieldUpdateOperationsInput>;
};

export type UsersOnProjectsUpsertWithWhereUniqueWithoutProjectInput = {
  create: UsersOnProjectsCreateWithoutProjectInput;
  update: UsersOnProjectsUpdateWithoutProjectInput;
  where: UsersOnProjectsWhereUniqueInput;
};

export type UsersOnProjectsUpsertWithWhereUniqueWithoutUserInput = {
  create: UsersOnProjectsCreateWithoutUserInput;
  update: UsersOnProjectsUpdateWithoutUserInput;
  where: UsersOnProjectsWhereUniqueInput;
};

export type UsersOnProjectsUserIdProjectIdCompoundUniqueInput = {
  projectId: Scalars['String'];
  userId: Scalars['Int'];
};

export type UsersOnProjectsWhereInput = {
  AND?: InputMaybe<Array<UsersOnProjectsWhereInput>>;
  NOT?: InputMaybe<Array<UsersOnProjectsWhereInput>>;
  OR?: InputMaybe<Array<UsersOnProjectsWhereInput>>;
  project?: InputMaybe<ProjectRelationFilter>;
  projectId?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumUserProjectRoleFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UsersOnProjectsWhereUniqueInput = {
  userId_projectId?: InputMaybe<UsersOnProjectsUserIdProjectIdCompoundUniqueInput>;
};

export type LoginMutationVariables = Exact<{
  userLoginInput: UserLoginInput;
}>;

export type LoginMutation = { __typename?: 'Mutation'; login: string };

export type RegisterMutationVariables = Exact<{
  userRegisterInput: UserRegisterInput;
}>;

export type RegisterMutation = {
  __typename?: 'Mutation';
  register: { __typename?: 'User'; name: string; email: string };
};

export type TicketsQueryVariables = Exact<{ [key: string]: never }>;

export type TicketsQuery = {
  __typename?: 'Query';
  tickets: Array<{
    __typename?: 'Ticket';
    id: string;
    title: string;
    description?: string | null;
    status?: TicketStatus | null;
  }>;
};

export type CreateOneTicketMutationVariables = Exact<{
  data: TicketCreateInput;
}>;

export type CreateOneTicketMutation = {
  __typename?: 'Mutation';
  createOneTicket: {
    __typename?: 'Ticket';
    id: string;
    title: string;
    description?: string | null;
    status?: TicketStatus | null;
  };
};

export type UpdateOneTicketMutationVariables = Exact<{
  where: TicketWhereUniqueInput;
  data: TicketUpdateInput;
}>;

export type UpdateOneTicketMutation = {
  __typename?: 'Mutation';
  updateOneTicket?: { __typename?: 'Ticket'; id: string } | null;
};

export type DeleteOneTicketMutationVariables = Exact<{
  where: TicketWhereUniqueInput;
}>;

export type DeleteOneTicketMutation = {
  __typename?: 'Mutation';
  deleteOneTicket?: { __typename?: 'Ticket'; id: string } | null;
};

export type UsersQueryVariables = Exact<{ [key: string]: never }>;

export type UsersQuery = {
  __typename?: 'Query';
  users: Array<{
    __typename?: 'User';
    id: number;
    name: string;
    email: string;
  }>;
};

export type UserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;

export type UserQuery = {
  __typename?: 'Query';
  user?: {
    __typename?: 'User';
    id: number;
    name: string;
    email: string;
  } | null;
};

export type UpdateOneUserMutationVariables = Exact<{
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
}>;

export type UpdateOneUserMutation = {
  __typename?: 'Mutation';
  updateOneUser?: {
    __typename?: 'User';
    id: number;
    name: string;
    email: string;
  } | null;
};

export const LoginDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Login' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userLoginInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UserLoginInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'login' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'UserLoginInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'userLoginInput' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Register' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userRegisterInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UserRegisterInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'register' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'UserRegisterInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'userRegisterInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const TicketsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Tickets' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tickets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TicketsQuery, TicketsQueryVariables>;
export const CreateOneTicketDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateOneTicket' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'TicketCreateInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createOneTicket' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'data' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateOneTicketMutation,
  CreateOneTicketMutationVariables
>;
export const UpdateOneTicketDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateOneTicket' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'TicketWhereUniqueInput' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'TicketUpdateInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateOneTicket' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'data' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateOneTicketMutation,
  UpdateOneTicketMutationVariables
>;
export const DeleteOneTicketDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteOneTicket' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'TicketWhereUniqueInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteOneTicket' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteOneTicketMutation,
  DeleteOneTicketMutationVariables
>;
export const UsersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Users' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;
export const UserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'User' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UserWhereUniqueInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const UpdateOneUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateOneUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UserUpdateInput' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UserWhereUniqueInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateOneUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'data' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateOneUserMutation,
  UpdateOneUserMutationVariables
>;
