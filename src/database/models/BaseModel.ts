import {
    Model,
    CreatedAt,
    UpdatedAt,
    Column,
    DataType,
    Table,
  } from "sequelize-typescript";

  @Table({
    updatedAt: false
  })
  class BaseModel<T extends {}> extends Model<T> {
    @Column({
      primaryKey: true,
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
    })
    id!: string;
    
    @CreatedAt
    created_at!: Date;
  
    @UpdatedAt
    updated_at?: Date;
  }
  
  export default BaseModel;
  