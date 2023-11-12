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
  updatedAt: false
})
class User extends BaseModel<UserAttributes> {
  @Column({
    type: DataType.STRING,
  })
  firstName!: string;

  @Column({
    type: DataType.STRING,
  })
  lastName!: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    defaultValue: null,
    allowNull: true
  })
  declare phoneNumber?: string;

  @Column({
    type: DataType.STRING,
  })
  password!: string;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @HasMany(() => Event, { foreignKey: 'creatorId'})
  created_events?: Event[];

  @BelongsToMany(() => Role ,() => UserRole)
  roles?: Role[];
  
  @BelongsToMany(() => Event, () => Participants)
  events?: Event[];
}

export default User;
