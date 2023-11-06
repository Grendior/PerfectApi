import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from "sequelize-typescript";
import Role from "./Roles";
import User from "./User";

@Table({
  timestamps: true,
  tableName: "user_roles",
  modelName: "UserRole",
})
class UserRole extends Model<UserRoleAttributes> {
  @ForeignKey(() => User)
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare user_id: string;

  @ForeignKey(() => Role)
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare role_id: string;
}

export default UserRole;
