import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from "sequelize-typescript";
import User from "./User";
import Event from "./Events";
import { ParticipantStatus } from '../../enums/ParticipantStatus';

@Table({
  timestamps: true,
  tableName: "participants",
  modelName: "Participant",
})
class Participants extends Model<RegistredForEventAttributes> {
  @ForeignKey(() => User)
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  user_id!: string;

  @ForeignKey(() => Event)
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  event_id!: string;

  @Column({
    type: DataType.ENUM(...Object.values(ParticipantStatus))
  })
  status?: ParticipantStatus
}

export default Participants;
