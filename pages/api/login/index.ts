import dbConnect from '../../../helpers/mongoDB';
import User from '../../../models/user';
import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import * as jsw from 'jsonwebtoken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const { method } = req;
  const { email, password } = req.body;

  if (method === 'POST') {
    let existingUser;

    try {
      existingUser = await User.findOne({ email: email });
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: 'Logging in failed, please try again later.',
      });
    }

    if (!existingUser) {
      return res.status(401).json({
        success: false,
        msg: 'Invalid credentials, could not log you in.',
      });
    }

    let isValidPassword = false;
    try {
      isValidPassword = await bcrypt.compare(password, existingUser.password);
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: 'Could not log you in,please check your credentials and try again',
      });
    }

    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        msg: 'Invalid credentials, could not log you in.',
      });
    }

    let token;

    try {
      let secret = process.env.SECRET;
      if (!secret) {
        throw new Error();
      }
      token = jsw.sign(
        { urerId: existingUser.id, email: existingUser.email },
        secret,
        { expiresIn: '1h' }
      );
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: 'Logging in failed, please try again.',
      });
    }

    res.status(201).json({
      userId: existingUser.id,

      token: token,
    });
  }
}
