// services/jwtService.ts

import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key'; // Always keep your secret key out of the codebase.

export const generateToken = (user: any): string => {
  return jwt.sign(user, SECRET_KEY, { expiresIn: '1h' }); // token expires in 1 hour
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, SECRET_KEY);
};
// services/jwtService.ts

let tokenBlacklist: string[] = [];

export const blacklistToken = (token: string): void => {
  tokenBlacklist.push(token);
};

export const isTokenBlacklisted = (token: string): boolean => {
  return tokenBlacklist.includes(token);
};
export const validateAndVerifyToken = (token: string): any => {
  if (isTokenBlacklisted(token)) {
    throw new Error('This token is blacklisted.');
  }
  
  return verifyToken(token);
};