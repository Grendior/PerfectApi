import {
  Table,
  Column,
  DataType,
  BelongsToMany,
} from "sequelize-typescript";
import UserRole from "./UserRoles";
import User from './User';
import BaseModel from './BaseModel';

@Table({
  tableName: "roles",
  modelName: "Role",
})
class Role extends BaseModel<RoleAttributes> {
  @Column({
    type: DataType.STRING,
  })
  code!: string;

  @BelongsToMany(() => User, () => UserRole)
  roles?: User[];
}

export default Role;
