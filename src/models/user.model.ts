import { Table, Column, Model, DataType, HasOne, HasMany } from 'sequelize-typescript';
import { Role } from './role.model';
import { Token } from './token.model';

interface UserAttributes {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserAttributes> {
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password!: string;

  @Column({ type: DataType.STRING })
  name?: string;

  @Column({ type: DataType.STRING })
  phone?: string;

  @Column({ type: DataType.STRING })
  instagram?: string;

  @HasOne(() => Role)
  role!: Role;

  @HasMany(() => Token)
  token!: Token[];
}
