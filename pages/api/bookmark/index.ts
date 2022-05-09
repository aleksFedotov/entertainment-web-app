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
  const { userId, entertaimentId, operation } = req.body;

  if (method === 'PUT') {
    try {
      let user;

      if (operation === 'push') {
        user = await User.findByIdAndUpdate(userId, {
          $push: { bookmarks: entertaimentId },
        });
      } else {
        user = await User.findByIdAndUpdate(userId, {
          $pull: { bookmarks: entertaimentId },
        });
      }
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

    return res.status(200).json({ success: true, msg: 'Bookmarked' });
  }
}
