import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  HasMany,
  BelongsToMany,
} from "sequelize-typescript";
import Role from "./Roles";
import Event from "./Events";
import UserRole from "./UserRoles";
import Participants from './Participants';

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
  id!: string;

  @Column({
    type: DataType.STRING,
  })
  first_name!: string;

  @Column({
    type: DataType.STRING,
  })
  last_name!: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    defaultValue: ''
  })
  phone_number?: string;

  @Column({
    type: DataType.STRING,
  })
  password!: string;

  @CreatedAt
  created_at!: Date;

  @UpdatedAt
  updated_at!: Date;

  @HasMany(() => Event, { foreignKey: 'creator_id'})
  my_events?: Event[];

  @BelongsToMany(() => Role ,() => UserRole)
  roles?: Role[];
  
  @BelongsToMany(() => Event, () => Participants)
  events?: Event[];
}

export default User;
