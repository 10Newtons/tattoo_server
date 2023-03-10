import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { User } from './user.model';

interface RoleAttributes {
  value: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleAttributes> {
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value!: string;

  @ForeignKey(() => User)
  @Column
  userId!: number;
}
