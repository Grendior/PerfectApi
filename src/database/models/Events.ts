import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  BeforeCreate,
  ForeignKey,
  BelongsToMany
} from "sequelize-typescript";
import User from "./User";
import Participants from './Participants';

@Table({
  timestamps: true,
  tableName: "events",
  modelName: "Event",
})
class Event extends Model<EventAttributes> {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id!: string;

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

  @CreatedAt
  created_at!: Date;

  @UpdatedAt
  updated_at!: Date;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
  })
  creator_id!: string;

  @BelongsToMany(() => User, () => Participants)
  users?: User[]

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
    instance.slug = instance.title.toLowerCase().replace(" ", "-") + suffix;
  }
}

export default Event;
