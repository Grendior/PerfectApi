type ErrorName =
  | "NOT_FOUND_ERROR"
  | "CONNECTION_ERROR"
  | "METHOD_NOT_IMPLEMENTED";
  
type ErrorCode = "ERR_NF" | "ERR_REMOTE" | "NOT_IMPL" | "ERR_VALID";

type ValidationError = {
  error: {
    message: string;
    code: ErrorCode;
    errors: Array<{ message: string }>;
  };
};

type BaseEntity = {
  id: string
  createdAt: Date;
  updatedAt: Date;
}

type UserEntity = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  password: string;
} & BaseEntity;

type EventEntity = {
  creatorId: string;
  title: string;
  description: string;
  date: Date;
  startingDate: Date;
  endingDate: Date;
  capacity: number;
  participants: Array<UserAttributes>;
} & BaseEntity;

type UserAttributes = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  password: string;
} & BaseEntity;

type EventAttributes = {
  creatorId: string;
  title: string;
  description: string;
  slug: string;
  isActive: Boolean;
  date: Date;
  startingDate: Date;
  endingDate: Date;
  capacity: number;
  participants: Array<UserAttributes>;
} & BaseEntity;

type RoleAttributes = {
  code: string;
} & BaseEntity;

type UserRoleAttributes = {
  userId: string;
  roleId: string;
} & BaseEntity;

type ParticipantsAttributes = {
  userId: string;
  eventId: string;
} & BaseEntity;
