// Encrypt password using bcrypt
import bcrypt from 'bcryptjs';
import jwt, { Secret } from 'jsonwebtoken';
import Config from 'src/config/env.js';
import ms from 'ms';

const hashPassword = async function (password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);
  return password;
};

// Sign JWT and return
const getSignedJwtToken = function (id: string): string {
    return jwt.sign({ id }, Config.JWT_SECRET as Secret, {
        expiresIn:  Config.JWT_EXPIRES_IN as ms.StringValue
    });
};
// Match user entered password to hashed password in database
const matchPassword = async function (
  enteredPassword: string,
  password: string,
): Promise<boolean> {
  return bcrypt.compare(enteredPassword, password);
};

export { hashPassword, getSignedJwtToken, matchPassword };
