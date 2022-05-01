import dbConnect from '../../../helpers/mongoDB';
import Entertainment from '../../../models/entertainment';

import type { NextApiRequest, NextApiResponse } from 'next';
import convertData from '../../../helpers/convertData';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query, category } = req.query;

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
      const result = await Entertainment.find({
        isBookmarked: true,
        title: { $regex: query, $options: '$i' },
      });

      searchResult = result.map((doc) => {
        return convertData(doc);
      });
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
    console.log(error);
    res.status(500).json({ success: false, msg: 'Something went wrong' });
  }
}
