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

type UserEntity = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  created_at: Date;
  updated_at: Date;
};

type EventEntity = {
  id: string;
  creator_id: string;
  title: string;
  description: string;
  date: Date;
  starting_date: Date;
  ending_date: Date;
  capacity: number;
  participants: Array<UserAttributes>;
  reserves: Array<UserAttributes>;
  created_at: Date;
  updated_at: Date;
};

type UserAttributes = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  created_at: Date;
  updated_at: Date;
};

type EventAttributes = {
  id: string;
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
  reserves: Array<UserAttributes>;
  created_at: Date;
  updated_at: Date;
};

type RoleAttributes = {
  id: string;
  code: string;
  created_at: Date;
  updated_at: Date;
};

type UserRoleAttributes = {
  user_id: string;
  role_id: string;
};

type RegistredForEventAttributes = {
  user_id: string;
  event_id: string;
};
