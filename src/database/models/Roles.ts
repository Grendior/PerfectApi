import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
  BelongsToMany,
  HasMany,
} from "sequelize-typescript";
import UserRole from "./UserRoles";

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
  declare id: string;

  @Column({
    type: DataType.STRING,
  })
  declare code: string;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @HasMany(() => UserRole)
  declare roles: UserRole[];
}

export default Role;
