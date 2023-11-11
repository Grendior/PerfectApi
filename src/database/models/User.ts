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
import BaseModel from './BaseModel';

@Table({
  tableName: "users",
  modelName: "User",
})
class User extends BaseModel<UserAttributes> {
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
    defaultValue: null
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
  created_events?: Event[];

  @BelongsToMany(() => Role ,() => UserRole)
  roles?: Role[];
  
  @BelongsToMany(() => Event, () => Participants)
  events?: Event[];
}

export default User;
