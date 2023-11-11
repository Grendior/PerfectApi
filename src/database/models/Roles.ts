import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  BelongsToMany,
} from "sequelize-typescript";
import UserRole from "./UserRoles";
import User from './User';

@Table({
  timestamps: true,
  tableName: "roles",
  modelName: "Role",
})
class Role extends Model<RoleAttributes> {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id!: string;

  @Column({
    type: DataType.STRING,
  })
  code!: string;

  @CreatedAt
  created_at!: Date;

  @UpdatedAt
  updated_at!: Date;

  @BelongsToMany(() => User, () => UserRole)
  roles?: User[];
}

export default Role;
