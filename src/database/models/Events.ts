import {
  Table,
  Column,
  DataType,
  BeforeCreate,
  ForeignKey,
  BelongsToMany
} from "sequelize-typescript";
import User from "./User";
import Participants from './Participants';
import BaseModel from './BaseModel';

@Table({
  tableName: "events",
  modelName: "Event",
})
class Event extends BaseModel<EventAttributes> {
  @Column({
    type: DataType.STRING,
  })
  title!: string;

  @Column({
    type: DataType.TEXT,
  })
  description?: string;

  @Column({
    type: DataType.STRING,
  })
  slug!: string;

  @Column({ type: DataType.BOOLEAN })
  is_active!: Boolean;

  @Column({
    type: DataType.DATEONLY,
  })
  date!: Date;

  @Column({
    type: DataType.DATE,
  })
  starting_date!: Date;

  @Column({
    type: DataType.DATE,
  })
  ending_date!: Date;

  @Column({
    type: DataType.SMALLINT,
  })
  capacity!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
  })
  creator_id!: string;

  @BelongsToMany(() => User, () => Participants)
  participants?: User[]

  @BeforeCreate
  static async generateSlug(instance: Event) {
    const count = await Event.count({
      where: {
        title: instance.title,
      },
    });
    let suffix = "";
    if (count > 0) {
      suffix = `-${count + 1}`;
    }
    instance.slug = instance.title.toLowerCase().replace(/[^A-Za-z0-9\s]/g, "-") + suffix;
  }
}

export default Event;
