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
  userId!: string;

  @ForeignKey(() => Role)
  @Column({
    primaryKey: true,
    type: DataType.UUID,
  })
  roleId!: string;
}

export default UserRole;
