import dbConnect from '../../../helpers/mongoDB';
import User from '../../../models/user';
import { NextApiRequest, NextApiResponse } from 'next';

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
      res.status(400).json({
        success: false,
        msg: 'Signing up failed, please try again later 1',
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
        password,
        bookmarks: [],
      });
      res.status(201).json({ user: user.toObject({ getters: true }) });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        msg: 'Signing up failed, please try again. 2',
      });
    }
  }

  if (method === 'GET') {
    let existingUser;

    try {
      existingUser = await User.findOne({ email: email });
    } catch (error) {
      res.status(500).json({
        success: false,
        msg: 'Logging in failed, please try again later.',
      });
    }

    if (!existingUser || existingUser.password !== password) {
      res.status(401).json({
        success: false,
        msg: 'Invalid credentials, could not log you in.',
      });
    }
    res.json({ msg: 'Logged in!' });
  }
}
