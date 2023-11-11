import {
  Table,
  Column,
  DataType,
  ForeignKey,
} from "sequelize-typescript";
import Role from "./Roles";
import User from "./User";
import BaseModel from './BaseModel';

@Table({
  tableName: "user_roles",
  modelName: "UserRole",
})
class UserRole extends BaseModel<UserRoleAttributes> {
  @ForeignKey(() => User)
  @Column({
    primaryKey: true,
    type: DataType.UUID,
  })
  user_id!: string;

  @ForeignKey(() => Role)
  @Column({
    primaryKey: true,
    type: DataType.UUID,
  })
  role_id!: string;
}

export default UserRole;
