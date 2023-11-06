import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  BeforeCreate,
  HasMany,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import User from "./User";

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
  declare id: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
  })
  declare creator_id: string;

  @Column({
    type: DataType.STRING,
  })
  declare title: string;

  @Column({
    type: DataType.TEXT,
  })
  declare description: string;

  @Column({
    type: DataType.STRING,
  })
  declare slug: string;

  @Column({ type: DataType.BOOLEAN })
  declare is_active: Boolean;

  @Column({
    type: DataType.DATEONLY,
  })
  declare date: Date;

  @Column({
    type: DataType.DATE,
  })
  declare starting_date: Date;

  @Column({
    type: DataType.DATE,
  })
  declare ending_date: Date;

  @Column({
    type: DataType.SMALLINT,
  })
  declare capacity: number;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  // @HasMany(() => User)
  // declare participants: User[];

  // @HasMany(() => User)
  // declare reserves: User[];

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
