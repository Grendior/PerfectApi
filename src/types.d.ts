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
  created_at: Date;
  updated_at: Date;
}

type UserEntity = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
} & BaseEntity;

type EventEntity = {
  creator_id: string;
  title: string;
  description: string;
  date: Date;
  starting_date: Date;
  ending_date: Date;
  capacity: number;
  participants: Array<UserAttributes>;
} & BaseEntity;

type UserAttributes = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
} & BaseEntity;

type EventAttributes = {
  creator_id: string;
  title: string;
  description: string;
  slug: string;
  is_active: Boolean;
  date: Date;
  starting_date: Date;
  ending_date: Date;
  capacity: number;
  participants: Array<UserAttributes>;
} & BaseEntity;

type RoleAttributes = {
  code: string;
} & BaseEntity;

type UserRoleAttributes = {
  user_id: string;
  role_id: string;
} & BaseEntity;

type ParticipantsAttributes = {
  user_id: string;
  event_id: string;
} & BaseEntity;
