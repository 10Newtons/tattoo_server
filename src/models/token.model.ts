import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { User } from './user.model';

interface TokenAttributes {
  refreshToken: string;
}

@Table({ tableName: 'tokens' })
export class Token extends Model<Token, TokenAttributes> {
  @Column({ type: DataType.STRING, allowNull: false })
  refreshToken!: string;

  @ForeignKey(() => User)
  @Column
  userId!: number;
}
