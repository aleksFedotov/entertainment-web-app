import dbConnect from '../../../helpers/mongoDB';
import Entertainment from '../../../models/entertainment';
import User from '../../../models/user';

import type { NextApiRequest, NextApiResponse } from 'next';
import convertData from '../../../helpers/convertData';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query, category, user } = req.query;

  let searchResult = null;

  await dbConnect();
  try {
    if (category === 'all') {
      const result = await Entertainment.find({
        title: { $regex: query, $options: '$i' },
      });

      searchResult = result.map((doc) => {
        return convertData(doc);
      });
    } else if (category === 'bookmarked') {
      const result = await User.findOne({
        _id: user,
      }).populate({
        path: 'bookmarks',
        match: {
          title: {
            $regex: query,
            $options: '$i',
          },
        },
      });

      const resBookmarks: any[] = result.bookmarks;

      searchResult = resBookmarks.map((doc) => convertData(doc));
    } else {
      const result = await Entertainment.find({
        category: category === 'movie' ? 'Movie' : 'TV Series',
        title: { $regex: query, $options: '$i' },
      });

      searchResult = result.map((doc) => {
        return convertData(doc);
      });
    }

    res.status(200).json({ success: true, data: searchResult });
  } catch (error) {
    res.status(500).json({ success: false, msg: 'Something went wrong' });
  }
}
