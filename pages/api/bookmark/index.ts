import dbConnect from '../../../helpers/mongoDB';
import User from '../../../models/user';
import { NextApiRequest, NextApiResponse } from 'next';
import * as jsw from 'jsonwebtoken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const { method } = req;
  const { userId, entertaimentId } = req.body;
  if (method === 'PUT') {
    try {
      const user = await User.findByIdAndUpdate(userId, {
        $push: { friends: entertaimentId },
      });
      if (!user) {
        return res
          .status(400)
          .json({ success: false, msg: 'Something went wrong, try again' });
      }
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, msg: 'Could not bookmark, try agin' });
    }

    return res.status(400).json({ success: true, msg: 'Bookmarked' });
  }
}
