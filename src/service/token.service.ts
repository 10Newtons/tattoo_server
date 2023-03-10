// import jwt from 'jsonwebtoken';
// import { TokenSchema } from '../models/db';

// class TokenService {
//   generateTekens(payload) {
//     const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET_KEY, { expiresIn: '30m' });
//     const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET_KEY, {
//       expiresIn: '30d',
//     });
//     return {
//       accessToken,
//       refreshToken,
//     };
//   }

//   async saveToken(userId, refreshToken) {
//     const tokenData = await TokenSchema.findOne({ where: { userId } });
//     if (tokenData) {
//       await tokenData.update({ refreshToken });
//     }
//   }
// }

// export default new TokenService();
