import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from "sequelize-typescript";
import User from "./User";
import Event from "./Events";

@Table({
  timestamps: true,
  tableName: "roles",
  modelName: "Role",
})
class Participants extends Model<RegistredForEventAttributes> {
  @ForeignKey(() => User)
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare user_id: string;

  @ForeignKey(() => Event)
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare event_id: string;
}

export default Participants;
