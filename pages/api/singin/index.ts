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

    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 12);
    } catch (error) {
      res.status(500).json({
        success: false,
        msg: 'Could not create user, please try again',
      });
    }

    try {
      existingUser = await User.findOne({ email: email });
    } catch (error) {
      res.status(400).json({
        success: false,
        msg: 'Signing up failed, please try again later',
      });
    }

    if (existingUser) {
      res.status(422).json({
        success: false,
        msg: 'User exists already, please login instead.',
      });
    }

    try {
      const user = await User.create({
        email,
        password: hashedPassword,
        bookmarks: [],
      });

      let token;
      try {
        token = jsw.sign(
          { urerId: user.id, email: user.email },
          'supersecret_dont_share',
          { expiresIn: '1h' }
        );
      } catch (error) {
        res.status(500).json({
          success: false,
          msg: 'Signing up failed, please try again.',
        });
      }

      res.status(201).json({ userId: user.id, token: token });
    } catch (error) {
      res.status(500).json({
        success: false,
        msg: 'Signing up failed, please try again.',
      });
    }
  }
}
