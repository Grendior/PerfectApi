import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  HasMany,
} from "sequelize-typescript";
import Role from "./Roles";
import Event from "./Events";
import UserRole from "./UserRoles";

@Table({
  timestamps: true,
  tableName: "users",
  modelName: "User",
})
class User extends Model<UserAttributes> {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
  })
  declare first_name: string;

  @Column({
    type: DataType.STRING,
  })
  declare last_name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
  })
  declare phone_number: string;

  @Column({
    type: DataType.STRING,
  })
  declare password: string;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @HasMany(() => Event)
  declare events: Event[];

  @HasMany(() => UserRole)
  declare roles: UserRole[];
}

export default User;
