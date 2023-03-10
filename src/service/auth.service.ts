// import { AuthSchema } from '../models/db';
// import bcrypt from 'bcrypt';

// class AuthService {
//   async registration(email: string, password: string) {
//     const candidate = await AuthSchema.findOne({ where: { email } });
//     if (candidate) {
//       throw new Error(`Пользователь с почтовым адресом ${email} уже существует`);
//     }
//     const hashPassword = await bcrypt.hash(password, 5);
//     const user = await AuthSchema.create({ email, password: hashPassword });

//     return user;
//   }
// }

// export default new AuthService();
