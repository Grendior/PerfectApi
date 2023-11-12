import {
  Table,
  Column,
  DataType,
  ForeignKey,
} from "sequelize-typescript";
import User from "./User";
import Event from "./Events";
import { ParticipantStatus } from '../../enums/ParticipantStatus';
import BaseModel from './BaseModel';

@Table({
  tableName: "participants",
  modelName: "Participant",
})
class Participants extends BaseModel<ParticipantsAttributes> {
  @ForeignKey(() => User)
  @Column({
    primaryKey: true,
    type: DataType.UUID,
  })
  userId!: string;

  @ForeignKey(() => Event)
  @Column({
    primaryKey: true,
    type: DataType.UUID,
  })
  eventId!: string;

  @Column({
    type: DataType.ENUM(...Object.values(ParticipantStatus))
  })
  status!: ParticipantStatus
}

export default Participants;
